import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeirComponent } from './keir.component';

describe('KeirComponent', () => {
  let component: KeirComponent;
  let fixture: ComponentFixture<KeirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeirComponent]
    });
    fixture = TestBed.createComponent(KeirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
