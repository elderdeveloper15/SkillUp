import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroempresaComponent } from './registroempresa.component';

describe('RegistroempresaComponent', () => {
  let component: RegistroempresaComponent;
  let fixture: ComponentFixture<RegistroempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
