import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosesionAdminComponent } from './iniciosesion-admin.component';

describe('IniciosesionAdminComponent', () => {
  let component: IniciosesionAdminComponent;
  let fixture: ComponentFixture<IniciosesionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciosesionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciosesionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
