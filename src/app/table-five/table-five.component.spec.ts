import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFiveComponent } from './table-five.component';

describe('TableFiveComponent', () => {
  let component: TableFiveComponent;
  let fixture: ComponentFixture<TableFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
