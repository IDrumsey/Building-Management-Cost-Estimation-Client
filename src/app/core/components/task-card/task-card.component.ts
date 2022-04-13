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

  showingDetails = false

  // ------------------------------------ EVENTS ------------------------------------

  // ------------------------------------ EVENT HANDLERS ------------------------------------
  
  onHeaderClick(): void {
    this.toggleDetails()
  }

  onMaterialCostChange(newCost: number): void {
    this.task.costs.material = newCost
  }

  onLaborCostChange(newCost: number): void {
    this.task.costs.labor = newCost
  }

  onAllInclusiveCostChange(newCost: number): void {
    this.task.costs.allInclusive = newCost
  }

  // ------------------------------------ FUNCTIONALITY ------------------------------------

  toggleDetails(): void {
    this.showingDetails = !this.showingDetails
  }
}
