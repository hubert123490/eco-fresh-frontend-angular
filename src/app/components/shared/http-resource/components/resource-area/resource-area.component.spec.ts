import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAreaComponent } from './resource-area.component';

describe('ResourceAreaComponent', () => {
  let component: ResourceAreaComponent;
  let fixture: ComponentFixture<ResourceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates ResourceAreaComponent', () => {
    expect(component).toBeTruthy();
  });
});
