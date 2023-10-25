import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.post$
      .pipe(
        map((res: number[]) => {
          console.log(res);
          return res.filter((num) => num > 3);
        })
      )
      .subscribe((res) => {
        console.log('Nueva data: ', res);
      });
  }
}
