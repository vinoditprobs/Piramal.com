import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMediaListComponent } from './news-media-list.component';

describe('NewsMediaListComponent', () => {
  let component: NewsMediaListComponent;
  let fixture: ComponentFixture<NewsMediaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsMediaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
