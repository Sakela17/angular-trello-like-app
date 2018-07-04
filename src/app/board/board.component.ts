import { Component, OnInit } from '@angular/core';

import { Board } from '../_models/model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board = {
    id: 1,
    title: 'Main Board'
  };

  constructor() { }

  ngOnInit() {
  }

}
