import { Component, OnInit } from '@angular/core';
import { APIService, Todo } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public todos: Array<Todo>;

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.apiService.ListTodos().then((evt) => {
      this.todos = evt.items;
    });

    this.apiService.OnCreateTodoListener.subscribe((evt) => {
      const data = evt.value.data.onCreateTodo;                             ////quickfix
      this.todos = [...this.todos, data];
    });
  }

  createTodo() {
    this.apiService.CreateTodo({
      name: 'ionic',
      description: 'testing',
    });
  }
}