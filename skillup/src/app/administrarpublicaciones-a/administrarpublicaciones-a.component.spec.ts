import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarpublicacionesAComponent } from './administrarpublicaciones-a.component';

describe('AdministrarpublicacionesAComponent', () => {
  let component: AdministrarpublicacionesAComponent;
  let fixture: ComponentFixture<AdministrarpublicacionesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarpublicacionesAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarpublicacionesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
