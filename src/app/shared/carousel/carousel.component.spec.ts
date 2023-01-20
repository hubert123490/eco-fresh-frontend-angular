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
    component.slides = component.slides = [
      { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
      { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
    ];
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('getCurrentSlideUrl() works', async () => {
    component.slides = [
      { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
    ];
    fixture.detectChanges();
    expect(component.getCurrentSlideUrl()).toEqual(
      `url('${component.slides[0].url}')`
    );
  });

  it('goToNext() works', () => {
    [
      { current: 1, expectedResult: 0 },
      { current: 0, expectedResult: 1 },
    ].forEach(({ current, expectedResult }) => {
      component.slides = [
        { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
        { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
      ];
      component.currentIndex = current;
      fixture.detectChanges();
      component.goToNext();

      expect(component.currentIndex).toEqual(expectedResult);
    });
  });

  it('goToPrevious() works', () => {
    [
      { current: 0, expectedResult: 1 },
      { current: 1, expectedResult: 0 },
    ].forEach(({ current, expectedResult }) => {
      component.slides = [
        { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
        { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
      ];
      component.currentIndex = current;
      fixture.detectChanges();
      component.goToPrevious();

      expect(component.currentIndex).toEqual(expectedResult);
    });
  });

  it('goToSlide(index) works', () => {
    const expectedResult = 1;
    component.slides = [
      { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
      { url: './../../../assets/landing-page/welcome.jpg', title: 'tmp' },
    ];
    component.currentIndex = 0;
    fixture.detectChanges();
    component.goToSlide(1);

    expect(component.currentIndex).toEqual(expectedResult);
  });
});
