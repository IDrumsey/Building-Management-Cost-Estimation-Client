import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../data/models/project';

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

  // ------------------------------------ EVENTS ------------------------------------

  // ------------------------------------ EVENT HANDLERS ------------------------------------

  onHeaderClick(): void {
    this.toggleDetails()
  }

  // ------------------------------------ FUNCTIONALITY ------------------------------------

  toggleDetails(): void {
    this.showingDetails = !this.showingDetails
  }

}
