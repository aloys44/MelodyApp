import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderByUserComponent } from './list-order-by-user.component';

describe('ListOrderByUserComponent', () => {
  let component: ListOrderByUserComponent;
  let fixture: ComponentFixture<ListOrderByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
