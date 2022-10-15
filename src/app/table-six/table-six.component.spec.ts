import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSixComponent } from './table-six.component';

describe('TableSixComponent', () => {
  let component: TableSixComponent;
  let fixture: ComponentFixture<TableSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
