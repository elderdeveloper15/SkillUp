import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarpublicacionesTComponent } from './administrarpublicaciones-t.component';

describe('AdministrarpublicacionesTComponent', () => {
  let component: AdministrarpublicacionesTComponent;
  let fixture: ComponentFixture<AdministrarpublicacionesTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarpublicacionesTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarpublicacionesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
