import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomekComponent } from './homek.component';

describe('HomekComponent', () => {
  let component: HomekComponent;
  let fixture: ComponentFixture<HomekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomekComponent]
    });
    fixture = TestBed.createComponent(HomekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
