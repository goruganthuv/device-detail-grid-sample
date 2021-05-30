import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {CsTableComponent} from './cs-table.component';
import {CsAlertComponent} from '../cs-alert/cs-alert.component';
import {FormsModule} from '@angular/forms';
import {DataService} from '../shared/data.service';


describe('CsTableComponent', () => {
    let component: CsTableComponent;
    let fixture: ComponentFixture<CsTableComponent>;
    let rendererElement: HTMLElement;

    const testdata =  [
        {
            name: 'smss.exe',
            device: 'Stark',
            path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
            status: 'scheduled'
        },

        {
            name: 'netsh.exe',
            device: 'Targaryen',
            path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
            status: 'available'
        },

        {
            name: 'uxtheme.dll',
            device: 'Lanniester',
            path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
            status: 'available'
        },

        {
            name: 'cryptbase.dll',
            device: 'Martell',
            path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
            status: 'scheduled'
        },

        {
            name: '7za.exe',
            device: 'Baratheon',
            path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
            status: 'scheduled'
        }

    ];

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [ CsTableComponent, CsAlertComponent ],
            providers: [
                {provide: DataService}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CsTableComponent);
        component = fixture.componentInstance;
        component.tableData = testdata;
        fixture.detectChanges();
        rendererElement = fixture.nativeElement;
        spyOn(component, 'CheckAllOptions').and.callThrough();
        spyOn(component, 'getRowsSelectedCount').and.callThrough();
        spyOn(component, 'enableDownloadSelected').and.callThrough();
    });

    afterEach(() => {
        component = null;
        fixture = null;
        rendererElement = null;
    });

    it('should show table data', fakeAsync(() => {
        component.ngOnInit();
        expect(component.tableData).toEqual(testdata);
        const containersElement = rendererElement.querySelectorAll('app-cs-table');
        expect(component.tableData.length).toEqual(testdata.length);
        expect(containersElement).not.toBe(null);
    }));
    it('should clear alert messages on close', fakeAsync(() => {
     component.alertClosed();
     expect(component.alertsMessages).toEqual([]);
    }));
    it('should check all options', fakeAsync(() => {
        const elem = fixture.debugElement.nativeElement.querySelector('#select-all');
        // by default it should be unselected
        expect(elem.checked).toBeFalsy();
        elem.click(); // click select all button
        fixture.detectChanges();
        expect(elem.checked).toBeTruthy();
        expect(component.CheckAllOptions).toHaveBeenCalled();
        expect(component.getRowsSelectedCount).toHaveBeenCalled();
        expect(component.checkedNumber).toEqual(testdata.length);
        expect(component.enableDownloadSelected).toHaveBeenCalled();
        expect(component.enableDownload).toBeFalsy();

        elem.click(); // click unselect all button
        fixture.detectChanges();
        expect(elem.checked).toBe(false);
        expect(component.checkedNumber).toEqual(0);
        expect(component.selectedRows.length).toEqual(0);
        expect(component.enableDownload).toBeFalsy();
    }));
});
