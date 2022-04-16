import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faCancel, faCheck } from '@fortawesome/free-solid-svg-icons';
import { LocationSummary } from '../../data/models/location-summary';
import { Project } from '../../data/models/project';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ------------------------------------ DATA ------------------------------------

  @Input() location: LocationSummary

  newProjectTitle = new FormControl('', Validators.required)
  @ViewChild('newProjectTitleEl') set newProjectTitleEl(el: ElementRef) {
    if(el){
      el.nativeElement.focus()
    }
  }

  // ------------------------------------ STATE ------------------------------------

  showingProjects = false
  addingNewProject = false

  // ------------------------------------ EVENTS ------------------------------------

  // ------------------------------------ STYLES ------------------------------------

  checkIcon = faCheck
  cancelIcon = faCancel

  // ------------------------------------ EVENT HANDLERS ------------------------------------

  onHeaderClick(): void {
    this.toggleShowingDetails()
  }

  onAddProjectBtnClick(): void {
    this.addingNewProject = true
  }

  onNewProjectCancel(): void {
    this.addingNewProject = false
  }

  onNewProjectConfirm(): void {
    const newProject = new Project()
    newProject.title = this.newProjectTitle.value
    this.location.projects.push(newProject)
    this.addingNewProject = false
  }

  // ------------------------------------ FUNCTIONALITY ------------------------------------

  toggleShowingDetails(): void {
    this.showingProjects = !this.showingProjects
  }

}
