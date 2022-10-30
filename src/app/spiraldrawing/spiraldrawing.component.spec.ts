import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiraldrawingComponent } from './spiraldrawing.component';

describe('SpiraldrawingComponent', () => {
  let component: SpiraldrawingComponent;
  let fixture: ComponentFixture<SpiraldrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiraldrawingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiraldrawingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
