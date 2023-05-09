import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroestudianteComponent } from './registroestudiante.component';

describe('RegistroestudianteComponent', () => {
  let component: RegistroestudianteComponent;
  let fixture: ComponentFixture<RegistroestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroestudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
