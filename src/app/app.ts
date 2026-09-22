import { Component, signal } from '@angular/core';

type Named = { name: string };
type Aged = { age: number };

type Person = Named & Aged;

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project1');
  person1: Person = {
    name: 'Fernando',
    age: 28,
  };

  person2: Person = {
    name: 'Juan',
    age: 25,
  };
}
