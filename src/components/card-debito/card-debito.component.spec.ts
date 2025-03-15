import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDebitoComponent } from './card-debito.component';

describe('CardDebitoComponent', () => {
  let component: CardDebitoComponent;
  let fixture: ComponentFixture<CardDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDebitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
