import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioempresaComponent } from './inicioempresa.component';

describe('InicioempresaComponent', () => {
  let component: InicioempresaComponent;
  let fixture: ComponentFixture<InicioempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
