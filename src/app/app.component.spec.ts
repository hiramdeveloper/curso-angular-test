import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent - defaul', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngTestApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngTestApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ngTestApp app is running!');
  });

  it('debe de probar la funcion suma con 2 numeros', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.suma(2, 2)).toBe(4);
  });

  it('debe de fallar la funcion suma', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.suma(2, 2)).not.toBe(5);
  });

  it('debe de ejecutar la func multiplicar usando la func suma', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const suma = spyOn(app, 'suma').and.returnValue(3);
    app.multiplicar(1, 2);
    expect(suma).toHaveBeenCalledWith(1, 2);
    expect(app.multiplicar(1, 2)).toBe(6);
  });

  it('debe de ejecutar la func de getSaludoPersonalizado', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getSaludoPersonalizado('Hiram', true)).toContain('Hiram');
    expect(app.getSaludoPersonalizado('Hiram', true)).toEqual('Hola Hiram');
  });

  it('debe de llamar la func getSaludoPersonalizado desde el ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const saludo = spyOn(app, 'getSaludoPersonalizado').and.returnValue('Hola Hiram');
    app.ngOnInit();
    expect(saludo).toHaveBeenCalledWith('Hiram', true);
  });

  it('debe llmar func getSaludoPersonalizado de despedida', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getSaludoPersonalizado('Hiram', false)).toEqual('Adios Hiram');
  });
});
