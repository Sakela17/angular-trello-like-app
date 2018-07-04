import { Component, OnInit } from '@angular/core';

import { List } from '../_models/model';
import {L} from '@angular/core/src/render3';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List = {
    id: 1,
    title: 'Task'
  };

  constructor() { }

  ngOnInit() {
  }

}
