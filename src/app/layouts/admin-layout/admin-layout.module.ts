import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutRoutes } from './admin-layout-routing.module';
import { DashboardComponent } from '@app/dashboard/pages/dashboard.component';


@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes)
    ]
})
export class AdminLayoutModule { }
