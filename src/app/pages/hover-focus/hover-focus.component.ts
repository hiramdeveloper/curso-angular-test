import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-focus',
  templateUrl: './hover-focus.component.html',
  styleUrls: ['./hover-focus.component.css']
})
export class HoverFocusComponent implements OnInit {

  name = '';
  age = ''

  constructor() { }

  ngOnInit(): void {
  }

  private setNameAndAge(name: string, age: string) {
    this.name = name;
    this.age = age;
    return `Hola ${name} que tiene la edad de: ${age}`;
  }

  get userName() { return this.name }
  get userAge() { return this.age }

  private sumaPrivada(num1: number, num2: number) {
    return num1 + num2;
  }

}
