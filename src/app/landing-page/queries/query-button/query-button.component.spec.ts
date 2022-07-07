import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QueryButtonComponent } from './query-button.component';

describe('QueryButtonComponent', () => {
  let component: QueryButtonComponent;
  let fixture: ComponentFixture<QueryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create query button component', () => {
    expect(component).toBeTruthy();
  });

  it('should display custom text', () => {
    component.text = 'test';
    const text = fixture.nativeElement.querySelector('.text');
    fixture.detectChanges();
    expect(text.textContent).toEqual('test');
  });

  it('should display custom content', () => {
    component.text = 'test';
    const text = fixture.nativeElement.querySelector('.text');
    fixture.detectChanges();
    expect(text.textContent).toEqual('test');
  });
});
