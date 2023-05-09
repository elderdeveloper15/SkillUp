import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioestudiantesCComponent } from './inicioestudiantes-c.component';

describe('InicioestudiantesCComponent', () => {
  let component: InicioestudiantesCComponent;
  let fixture: ComponentFixture<InicioestudiantesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioestudiantesCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioestudiantesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
