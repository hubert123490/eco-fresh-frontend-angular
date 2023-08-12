import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';
import { Router } from '@angular/router';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('ModalComponent', () => {
  let sut: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [
        { provide: Router, useClass: MockRouter }
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    sut = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('creates ModalComponent', () => {
    expect(sut).toBeTruthy();
  });

  it('shows modal', () => {
    // given
    const expectedResult = [false, true]
    let result : Array<boolean> = [];
    const dialogHtmlElement : HTMLElement = fixture.debugElement.query(By.css("#modal")).nativeElement

    // when
    result.push(dialogHtmlElement.getAttribute('open') != null)
    sut.showModal();
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)

    // then
    expect(expectedResult).toEqual(result);
  });

  it('closes modal', () => {
    // given
    const expectedResult = [true, false]
    let result : Array<boolean> = [];
    const dialogHtmlElement : HTMLElement = fixture.debugElement.query(By.css("#modal")).nativeElement

    // when
    sut.showModal();
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)
    sut.closeModal();
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)

    // then
    expect(expectedResult).toEqual(result);
  });

  it('confirms and closes modal with callback', () => {
    // given
    const expectedResult = [true, false]
    let result : Array<boolean> = [];
    const dialogHtmlElement : HTMLElement = fixture.debugElement.query(By.css("#modal")).nativeElement;
    const dummyMethod = () => {}
    const confirmSpy = spyOn(sut, 'confirmModal').and.callThrough();
    const closeSpy = spyOn(sut, 'closeModal').and.callThrough();

    // when
    sut.showModal();
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)
    sut.confirmModal();
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)

    // then
    expect(expectedResult).toEqual(result);
    expect(confirmSpy).toHaveBeenCalledWith();
    expect(closeSpy).toHaveBeenCalledOnceWith();
  });

  it('confirms and closes modal without callback', () => {
    // given
    const expectedResult = [true, false]
    let result : Array<boolean> = [];
    const dialogHtmlElement : HTMLElement = fixture.debugElement.query(By.css("#modal")).nativeElement;
    const confirmSpy = spyOn(sut, 'confirmModal').and.callThrough();
    const closeSpy = spyOn(sut, 'closeModal').and.callThrough();

    // when
    sut.showModal();
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)
    sut.confirmModal();
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)

    // then
    expect(expectedResult).toEqual(result);
    expect(confirmSpy).toHaveBeenCalledWith();
    expect(closeSpy).toHaveBeenCalledOnceWith();
  });

  it('navigates to the desired route when dialog confirmed and afterSuccessNavUrl provided', () => {
    // given
    sut.afterSuccessNavUrl = '/test'
    const navigateSpy = spyOn(router, 'navigateByUrl');
    const expectedResult = '/test';

    // when
    sut.showModal();
    fixture.detectChanges();
    sut.confirmModal();
    fixture.detectChanges();

    // then
    expect(navigateSpy).toHaveBeenCalledWith(expectedResult);
  });
});
