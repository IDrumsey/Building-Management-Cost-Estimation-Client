import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faCancel, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../data/models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.newTask.title = ""
    this.newTask.costs = {
      material: 0,
      labor: 0,
      allInclusive: 0
    }

    this.newTaskTitleProxy.valueChanges.subscribe(change => {
      this.newTask.title = change
    })
  }

  // ------------------------------------ DATA ------------------------------------

  @Input() task: Task

  newTask = new Task()
  newTaskTitleProxy = new FormControl('', [Validators.required])

  // ------------------------------------ STATE ------------------------------------

  showingDetails = false
  private newActual: boolean
  @Input() set new(state: boolean) {
    this.newActual = state
    this.showingDetails = state
  }
  get new(): boolean {
    return this.newActual
  }

  // ------------------------------------ EVENTS ------------------------------------

  @Output() cancelNew = new EventEmitter()
  @Output() confirmNew = new EventEmitter<Task>()

  // ------------------------------------ STYLES ------------------------------------

  checkIcon = faCheck
  cancelIcon = faCancel

  // ------------------------------------ EVENT HANDLERS ------------------------------------
  
  onHeaderClick(): void {
    if(!this.new){
      this.toggleDetails()
    }
  }

  onMaterialCostChange(newCost: number): void {
    if(!this.new){
      this.task.costs.material = newCost
    }
    else{
      this.newTask.costs.material = newCost
    }
  }

  onLaborCostChange(newCost: number): void {
    if(!this.new){
      this.task.costs.labor = newCost
    }
    else{
      this.newTask.costs.labor = newCost
    }
  }

  onAllInclusiveCostChange(newCost: number): void {
    if(!this.new){
      this.task.costs.allInclusive = newCost
    }
    else{
      this.newTask.costs.allInclusive = newCost
    }
  }

  onCancelNew(): void {
    this.cancelNew.emit()
  }

  onConfirmNew(): void {
    // BUG : costs aren't right
    this.confirmNew.emit(this.newTask)
  }

  // ------------------------------------ FUNCTIONALITY ------------------------------------

  toggleDetails(): void {
    this.showingDetails = !this.showingDetails
  }
}
