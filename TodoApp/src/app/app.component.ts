import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';

  nextId = 4;
  todos: any[]= [
    {
      id: 1,
      label: 'Drink Milk',
      done: false
    },
    {
      id: 2,
      label: 'Pay Water bill',
      done: false
    },
    {
      id: 3,
      label: 'Go for Walk',
      done: true
    },
  ];

  delete(todo:any) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  add(newTodoLabel:any) {
    let newTodo = {
      id: this.nextId,
      label: newTodoLabel,
      done: false
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  toggle(todo:any) {
    todo.done = !todo.done;
  }
}