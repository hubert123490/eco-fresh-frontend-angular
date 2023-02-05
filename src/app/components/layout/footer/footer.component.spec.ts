import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { navData } from '../../../configs/navigation/nav.config';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let sut: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    sut = fixture.componentInstance;
    sut.footerData = navData.footerData
    fixture.detectChanges();
  });

  it('creates footer component', () => {
    expect(sut).toBeTruthy();
  });
});
