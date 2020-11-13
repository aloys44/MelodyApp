import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListValidateOrderComponent } from './list-validate-order.component';

describe('ListValidateOrderComponent', () => {
  let component: ListValidateOrderComponent;
  let fixture: ComponentFixture<ListValidateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListValidateOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListValidateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
