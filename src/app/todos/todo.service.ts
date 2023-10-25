import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  postSource = new Subject<number[]>();
  post$ = this.postSource.asObservable();

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getComments(postId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }

  getPosts() {
    const body = {
      id: 1,
      comment: "hola",
      date: "2023-08-08"
    }

    return this.http.post('https://jsonplaceholder.typicode.com/posts', body)
  }
}
