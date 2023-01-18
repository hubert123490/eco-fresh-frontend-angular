import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('getCurrentSlideUrl works', async () => {
    const expected = "url('./../../../assets/landing-page/welcome.jpg')"
    component.slides = [
      { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
    ];
    fixture.detectChanges();
    expect(component.getCurrentSlideUrl()).toEqual(`url('${component.slides[0].url}')`);
  })
});
