import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/pages/admin-layout.component';

import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' }
        ]
    },
    { path: 'auth', loadChildren: '@app/core/auth/auth.module#AuthModule' },
    { path: '**',  loadChildren: '@app/core/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,
            {
                preloadingStrategy: PreloadAllModules,
                enableTracing: false,
                relativeLinkResolution: 'corrected'
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
