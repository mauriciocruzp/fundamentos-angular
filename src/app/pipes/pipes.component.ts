import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name = "mauricio";
  currentDate = new Date();
  state = 1;

  changeState() {
    this.state = this.state === 0 ? 1 : 0;
  }
}
