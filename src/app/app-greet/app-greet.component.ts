import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-greet',
  templateUrl: './app-greet.component.html',
  styleUrls: ['./app-greet.component.css']
})
export class AppGreetComponent implements OnInit {

  private _name: string = "George";
  private _lastname: string = "Pasparakis";
  private _afm = 123456789;
  // name: string;
  namePlaceholder: string = "Type your first name";

  constructor() {
    this.name = this._name; 
    // console.log("Hello from constructor");
  }

  ngOnInit(): void {
    // console.log("Hello from ngOnInit");
  }

  get name(): string {
    return this._name.toUpperCase();
  }

  set name(value: string) {
    // console.log("value is: " + value);
    this._name = value;
  }

  get lastname(): string {
    return this._lastname.toUpperCase();
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get afm(): number {
    return this._afm;
  }

  set afm(value: number) {
    this._afm = value;
  }

  greet() {
    let myPerson = new Person(this._name, this._lastname, this._afm);
    console.log(myPerson);
    console.log(JSON.stringify(myPerson));
  }

}
