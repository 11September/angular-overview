import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = [];

  // public todos: Todo[] = [
  //   { id: 1, title: 'Buy bread', completed: false, date: new Date() },
  //   { id: 2, title: 'Buy milk', completed: true, date: new Date() },
  //   { id: 3, title: 'Buy tea', completed: false, date: new Date() },
  // ];

  constructor(private http: HttpClient) {
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3').pipe(tap(
      todos => this.todos = todos
    ));
  }

  onToggle(id: number): any {
    const idx = this.todos.findIndex( t => t.id === id );
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  // tslint:disable-next-line:typedef
  removeTodo(id: number): any {
    this.todos = this.todos.filter( t => t.id !== id );
  }

  addTodo(todo: Todo): any{
    this.todos.push(todo);
  }
}
