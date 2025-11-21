import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTraining } from './book-training';

describe('BookTraining', () => {
  let component: BookTraining;
  let fixture: ComponentFixture<BookTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
