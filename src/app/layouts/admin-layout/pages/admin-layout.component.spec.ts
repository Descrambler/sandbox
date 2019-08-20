import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutComponent } from './admin-layout.component';
import { SidebarComponent } from '@app/layouts/components/sidebar/sidebar.component';
import { NavbarComponent } from '@app/layouts/components/navbar/navbar.component';
import { FooterComponent } from '@app/layouts/components/footer/footer.component';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@app/dashboard/pages/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '@app/core/auth/shared/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AdminLayoutComponent', () => {
  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminLayoutComponent,
        DashboardComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule,
        CommonModule,
        HttpClientModule
      ],
      providers: [
        AuthenticationService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
