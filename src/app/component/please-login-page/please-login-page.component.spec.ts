import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseLoginPageComponent } from './please-login-page.component';

describe('PleaseLoginPageComponent', () => {
  let component: PleaseLoginPageComponent;
  let fixture: ComponentFixture<PleaseLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleaseLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleaseLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
