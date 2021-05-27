import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DataService} from './shared/data.service';
import {HttpClientModule} from '@angular/common/http';
import {CsTableComponent} from './cs-table/cs-table.component';
import {CsAlertComponent} from './cs-alert/cs-alert.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
    declarations: [AppComponent, AppRoutingModule.components, CsTableComponent, CsAlertComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
