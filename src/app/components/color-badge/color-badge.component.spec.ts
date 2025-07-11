import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBadgeComponent } from './color-badge.component';

describe('ColorBadgeComponent', () => {
  let component: ColorBadgeComponent;
  let fixture: ComponentFixture<ColorBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
