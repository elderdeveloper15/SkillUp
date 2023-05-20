import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpubliCComponent } from './modificarpubli-c.component';

describe('ModificarpubliCComponent', () => {
  let component: ModificarpubliCComponent;
  let fixture: ComponentFixture<ModificarpubliCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarpubliCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpubliCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
