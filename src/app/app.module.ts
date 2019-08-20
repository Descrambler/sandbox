import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AdminLayoutComponent } from './layouts/admin-layout/pages/admin-layout.component';
import { SidebarComponent } from './layouts/components/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/components/navbar/navbar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';

import { MockBackendProvider } from './core/interceptors/MockBackend.interceptor';
import { ErrorInterceptorProvider } from './core/interceptors/Error.interceptor';
import { LoggerService } from './core/logger/logger.service';
import { ConsoleLoggerService } from './core/logger/console-logger.service';
import { AuthenticationService } from './core/auth/shared/auth.service';
import { UsersService } from './users/shared/users.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    { provide: LoggerService, useClass: ConsoleLoggerService },
    MockBackendProvider, // Comment to disable MockBackendProvider,
    ErrorInterceptorProvider,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
