import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficarempresasAComponent } from './verficarempresas-a.component';

describe('VerficarempresasAComponent', () => {
  let component: VerficarempresasAComponent;
  let fixture: ComponentFixture<VerficarempresasAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerficarempresasAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerficarempresasAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
