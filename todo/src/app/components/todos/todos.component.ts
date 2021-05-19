import { Component, OnInit } from '@angular/core';
import { Todo } from '../../modules/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  /* hello:string = "hello world"; */

  todos?: Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: true
      },
    ]
  }

}
