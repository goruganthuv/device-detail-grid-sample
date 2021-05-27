import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CsTableComponent} from './cs-table/cs-table.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: CsTableComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static components = [CsTableComponent];
}
