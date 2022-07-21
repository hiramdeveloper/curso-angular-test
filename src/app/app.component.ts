import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngTestApp';

  ngOnInit() {
    this.getSaludoPersonalizado('Hiram', true);
  }

  suma(num1: number, num2: number) {
    return num1 + num2;
  }

  multiplicar(num1: number, num2: number) {
    const suma = this.suma(num1, num2);
    return suma * num2;
  }

  getSaludoPersonalizado(name: string, bool: boolean) {
    if (bool) {
      return `Hola ${name}`;
    } else {
      return `Adios ${name}`;
    }
  }
}
