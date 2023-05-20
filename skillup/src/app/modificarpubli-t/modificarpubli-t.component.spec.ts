import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarpubliTComponent } from './modificarpubli-t.component';

describe('ModificarpubliTComponent', () => {
  let component: ModificarpubliTComponent;
  let fixture: ComponentFixture<ModificarpubliTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarpubliTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarpubliTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
