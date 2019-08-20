import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundRoutes } from './not-found-routing.module';
import { NotFoundComponent } from './pages/not-found.component';

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(NotFoundRoutes)
    ]
})
export class NotFoundModule { }
