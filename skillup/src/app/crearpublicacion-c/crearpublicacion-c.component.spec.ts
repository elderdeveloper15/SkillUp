import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpublicacionCComponent } from './crearpublicacion-c.component';

describe('CrearpublicacionCComponent', () => {
  let component: CrearpublicacionCComponent;
  let fixture: ComponentFixture<CrearpublicacionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpublicacionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearpublicacionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
