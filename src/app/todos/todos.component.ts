import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe((res: any) => {
    //   this.todos = res;
    //   console.log(this.todos);
    // });

    // this.todoService.getComments(10).subscribe((res: any) => {
    //   console.log(res)
    // });

    // this.todoService.getPosts().subscribe((res: any) => {
    //   console.log("Posts: ", res);
    // });
  }
  updatePost() {
    this.todoService.postSource.next([1, 2, 3, 4, 5]);
  }
}
