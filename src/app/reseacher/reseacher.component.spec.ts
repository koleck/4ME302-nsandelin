import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseacherComponent } from './reseacher.component';

describe('ReseacherComponent', () => {
  let component: ReseacherComponent;
  let fixture: ComponentFixture<ReseacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
