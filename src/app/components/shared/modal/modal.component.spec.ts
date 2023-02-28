import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let sut: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    sut = fixture.componentInstance;
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
    sut.confirmModal(dummyMethod);
    fixture.detectChanges();
    result.push(dialogHtmlElement.getAttribute('open') != null)

    // then
    expect(expectedResult).toEqual(result);
    expect(confirmSpy).toHaveBeenCalledWith(dummyMethod);
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
});
