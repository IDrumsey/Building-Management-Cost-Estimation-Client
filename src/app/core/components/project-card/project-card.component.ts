import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../data/models/project';
import { Task } from '../../data/models/task';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ------------------------------------ DATA ------------------------------------

  @Input() project: Project

  // ------------------------------------ STATE ------------------------------------

  showingDetails = false
  addingTask = false

  // ------------------------------------ EVENTS ------------------------------------

  // ------------------------------------ EVENT HANDLERS ------------------------------------

  onHeaderClick(): void {
    this.toggleDetails()
  }
  
  onAddTaskBtnClick(): void {
    this.addingTask = true
  }

  onCancelNewTask(): void {
    this.addingTask = false
  }

  onConfirmNewTask(newTask: Task): void {
    console.log(newTask)
    this.project.tasks.push(newTask)
    this.addingTask = false
  }

  // ------------------------------------ FUNCTIONALITY ------------------------------------

  toggleDetails(): void {
    this.showingDetails = !this.showingDetails
  }

}
