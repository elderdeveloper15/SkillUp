import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioestudiantesTComponent } from './inicioestudiantes-t.component';

describe('InicioestudiantesTComponent', () => {
  let component: InicioestudiantesTComponent;
  let fixture: ComponentFixture<InicioestudiantesTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioestudiantesTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioestudiantesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
