import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarpublicacionesCComponent } from './administrarpublicaciones-c.component';

describe('AdministrarpublicacionesCComponent', () => {
  let component: AdministrarpublicacionesCComponent;
  let fixture: ComponentFixture<AdministrarpublicacionesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarpublicacionesCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarpublicacionesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
