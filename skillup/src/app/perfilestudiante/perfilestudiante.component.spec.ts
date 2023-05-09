import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilestudianteComponent } from './perfilestudiante.component';

describe('PerfilestudianteComponent', () => {
  let component: PerfilestudianteComponent;
  let fixture: ComponentFixture<PerfilestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
