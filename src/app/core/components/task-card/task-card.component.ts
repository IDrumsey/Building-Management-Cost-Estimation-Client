import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../data/models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ------------------------------------ DATA ------------------------------------

  @Input() task: Task

  // ------------------------------------ STATE ------------------------------------

  // ------------------------------------ EVENTS ------------------------------------

  // ------------------------------------ EVENT HANDLERS ------------------------------------

  // ------------------------------------ FUNCTIONALITY ------------------------------------

}
