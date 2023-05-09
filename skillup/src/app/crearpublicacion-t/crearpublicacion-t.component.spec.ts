import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpublicacionTComponent } from './crearpublicacion-t.component';

describe('CrearpublicacionTComponent', () => {
  let component: CrearpublicacionTComponent;
  let fixture: ComponentFixture<CrearpublicacionTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpublicacionTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearpublicacionTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
