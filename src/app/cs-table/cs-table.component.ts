import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';

@Component({
    selector: 'app-cs-table',
    templateUrl: './cs-table.component.html',
    styleUrls: ['./cs-table.component.css']
})
export class CsTableComponent implements OnInit {

    public tableData = [];
    public columnData = [];
    public checkedNumber = 0;
    public selectedRows = [];
    public enableDownload = false;
    public alertsMessages = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.loadTable();
    }

    // get the table data from dataService
    loadTable = () => {
        try {
            this.tableData = this.dataService.getTableData();
            this.columnData = Object.keys(this.tableData[0]);
        } catch (error) {
            console.log(`CsTableComponent: ${error}`);
            this.alertsMessages.push(`Error loading table`);
        }

    }

    // select all functionality
    CheckAllOptions = () => {
        if (this.tableData.every(val => val.checked == true)) {
            this.tableData.forEach(val => {
                val.checked = false
            });
        } else {
            this.tableData.forEach(val => {
                val.checked = true
            });
        }
        this.getRowsSelectedCount();
    }

    //get number of rows selected
    getRowsSelectedCount = () => {
        this.selectedRows = this.tableData.filter(data => data.checked);
        this.checkedNumber = this.selectedRows.length;
        this.enableDownloadSelected();
        return this.checkedNumber;
    }

    enableDownloadSelected = () => {
        this.enableDownload = this.checkedNumber && this.selectedRows.every(row => row.status === 'available');
    }

    downloadSelected = () => {
        this.alertsMessages = this.selectedRows.map(row => `Device: ${row.device}, Path: ${row.path}`);
    }

    alertClosed = () => {
        this.alertsMessages = [];
    }
}
