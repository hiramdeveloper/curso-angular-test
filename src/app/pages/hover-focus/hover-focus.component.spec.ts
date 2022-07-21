import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverFocusDirective } from 'src/app/shared/directives/hover-focus.directive';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { HoverFocusComponent } from './hover-focus.component';
import { By } from '@angular/platform-browser';

describe('HoverFocusComponent', () => {
  let component: HoverFocusComponent;
  let fixture: ComponentFixture<HoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverFocusComponent, HoverFocusDirective ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('p'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de probar el metodo privado setNameAndAge', () => {
    const fixture = TestBed.createComponent(HoverFocusComponent);
    const app = fixture.componentInstance;
    expect(app['setNameAndAge']('Hiram', '30')).toEqual('Hola Hiram que tiene la edad de: 30');
    expect(app.userName).toEqual('Hiram');
    expect(app.userAge).toEqual('30');
  });

  it('debe de probar el metodo privado sumaPrivada', () => {
    const fixture = TestBed.createComponent(HoverFocusComponent);
    const app = fixture.componentInstance;
    expect(app['sumaPrivada'](2, 2)).toEqual(4);
  });

  it('debe de probar la funcionalidad de la directiva hoverFocus', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroungColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroungColor).toBe('inherit');
  });

  // it('debe de probar la funcionalidad de la directiva hoverFocus', () => {
  //   inputEl.triggerEventHandler('mouseover', null);
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

  //   inputEl.triggerEventHandler('mouseout', null);
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  // });
});
