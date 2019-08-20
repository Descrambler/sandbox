import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from '@app/layouts/admin-layout/admin-layout-routing.module';
import { DashboardComponent } from '@app/dashboard/pages/dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '@app/core/auth/shared/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
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
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
