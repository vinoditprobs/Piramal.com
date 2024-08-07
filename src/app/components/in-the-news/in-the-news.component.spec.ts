import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheNewsComponent } from './in-the-news.component';

describe('InTheNewsComponent', () => {
  let component: InTheNewsComponent;
  let fixture: ComponentFixture<InTheNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InTheNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InTheNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
