import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {CsTableComponent} from './cs-table.component';
import {expect} from '@angular/platform-browser/testing/src/matchers';


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
            declarations: [ CsTableComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CsTableComponent);
        component = fixture.componentInstance;
        component.tableData = testdata;
        fixture.detectChanges();
        rendererElement = fixture.nativeElement;
    });

    afterEach(() => {
        component = null;
        fixture = null;
        rendererElement = null;
    });

    it('should show table data', fakeAsync(() => {
        component.ngOnInit();
        expect(component.tableData).toEqual(testdata);
        const containersElement = rendererElement.querySelector('app-cs-table');
        expect(component.tableData.length).toEqual(testdata.length);
        expect(containersElement).toBeTruthy();
    }));
    it('should clear alert messages on close', fakeAsync(() => {
     component.alertClosed();
     expect(component.alertsMessages).toEqual([]);
    }));
    it('should check all options', fakeAsync(() => {
        const elem = fixture.debugElement.nativeElement.querySelector('#select-all');
        // by default it should be unselected
        expect(elem.checked).toBeFalsy();
        elem.change(); // click select all button
        expect(elem.checked).toBe(true);
        expect(component.CheckAllOptions).toHaveBeenCalled();
        expect(component.getRowsSelectedCount).toHaveBeenCalled();
        expect(component.checkedNumber).toEqual(testdata.length);
        expect(component.enableDownloadSelected).toHaveBeenCalled();
        expect(component.enableDownload).toBeFalse();

        elem.change(); // click unselect all button
        expect(component.checkedNumber).toEqual(0);
        expect(component.selectedRows.length).toEqual(0);
        expect(component.enableDownload).toBeFalse();
    }));
});
