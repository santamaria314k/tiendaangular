import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalagoTiendaComponent } from './catalago-tienda.component';

describe('CatalagoTiendaComponent', () => {
  let component: CatalagoTiendaComponent;
  let fixture: ComponentFixture<CatalagoTiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalagoTiendaComponent]
    });
    fixture = TestBed.createComponent(CatalagoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
