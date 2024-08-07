import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxOnHoverComponent } from './parallax-on-hover.component';

describe('ParallaxOnHoverComponent', () => {
  let component: ParallaxOnHoverComponent;
  let fixture: ComponentFixture<ParallaxOnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParallaxOnHoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallaxOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
