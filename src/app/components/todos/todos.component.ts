import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import {Todo} from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) { }

  // fires when the component is created. so like componentDidMount for React
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
    // update UI
    this.todos = this.todos.filter(t => t.id !== todo.id)

    //update Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){
    // update server
    this.todoService.addTodo(todo).subscribe(
      t => {
        this.todos.push(t);
      }
    )

    // update UI
  }

}
