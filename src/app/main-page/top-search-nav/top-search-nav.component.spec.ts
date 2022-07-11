import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchNavComponent } from './top-search-nav.component';

describe('TopSearchNavComponent', () => {
  let component: TopSearchNavComponent;
  let fixture: ComponentFixture<TopSearchNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSearchNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create top search nav component', () => {
    expect(component).toBeTruthy();
  });
});
