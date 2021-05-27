import {ComponentFixture, TestBed} from '@angular/core/testing';
import {afterEach, beforeEach, describe, it} from '@angular/core/testing/src/testing_internal';
import {CsAlertComponent} from './cs-alert.component';
import {expect} from '@angular/platform-browser/testing/src/matchers';


describe('CsAlertComponent', () => {

    let component: CsAlertComponent;
    let fixture: ComponentFixture<CsAlertComponent>;
    let element: HTMLElement;

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [CsAlertComponent]
        })
            .compileComponents();
    }));

    afterEach(() => {
        component = null;
        fixture.destroy();
        fixture = null;
        element.remove();
        element = null;
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CsAlertComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create a alert', () => {
        expect(element).toBeDefined();
        component.messages = ['danger'];
        fixture.detectChanges();
        const test = fixture.nativeElement.querySelector('.alert');
        expect(test.className).toContain('alert');
    });
    it('alerts component test', () => {
        spyOn(component, 'ngOnInit').and.callThrough();
        component.ngOnInit();
        expect(component).toBeDefined();
        spyOn(component.closeAlert, 'emit');
        component.removeAlert();
        expect(component.closeAlert.emit).toHaveBeenCalled();
    });

    it('should re-render and update alert information after manual or auto close', () => {
        spyOn(component.closeAlert, 'emit');
        let infoTempText = 'This is sample information message';
        component.messages = [infoTempText];
        fixture.detectChanges();
        let alertElem = element.querySelector('.alert li');
        expect(alertElem.textContent).toContain(infoTempText);
    });

});
