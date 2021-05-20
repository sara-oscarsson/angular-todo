import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos?: Todo[];
  inputText: string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [];
  }

  markAsDone(id: number): void {
    this.todos?.map((value, index) => {
      if(index == id){
        value.completed = !value.completed;
      }
      return value;
    })
  }

  deleteTodoItem(id: number): void {
    this.todos = this.todos?.filter((value, index) => index !== id);
  }

  addNewTodo(): void {
    if(this.inputText == ""){
      return;
    }
    this.todos?.push({
      content: this.inputText,
      completed: false
    })
    this.inputText = "";
  }
}
