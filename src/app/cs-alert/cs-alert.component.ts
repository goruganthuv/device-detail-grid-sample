import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-cs-alert',
    templateUrl: './cs-alert.html',
    styleUrls: ['./cs-alert.css']
})
export class CsAlertComponent implements OnInit {
    @Input() messages = []; // input array of message strings to be displayed in alert
    @Output() closeAlert: EventEmitter<any> = new EventEmitter(); // output emitter for close alert

    constructor() {}

    ngOnInit() {}

// emits event when alert close button is clicked
    removeAlert() {
        this.closeAlert.emit();
    }
}
