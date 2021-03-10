import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSmsComponent } from './list-sms.component';

describe('ListSmsComponent', () => {
  let component: ListSmsComponent;
  let fixture: ComponentFixture<ListSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
