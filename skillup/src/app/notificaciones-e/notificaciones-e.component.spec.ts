import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesEComponent } from './notificaciones-e.component';

describe('NotificacionesEComponent', () => {
  let component: NotificacionesEComponent;
  let fixture: ComponentFixture<NotificacionesEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionesEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
