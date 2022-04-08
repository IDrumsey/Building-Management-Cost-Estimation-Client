import { Component, Input, OnInit } from '@angular/core';
import { LocationSummary } from '../../data/models/location-summary';

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

  // ------------------------------------ STATE ------------------------------------

  showingProjects = false

  // ------------------------------------ EVENTS ------------------------------------

  // ------------------------------------ EVENT HANDLERS ------------------------------------

  onHeaderClick(): void {
    this.toggleShowingDetails()
  }

  // ------------------------------------ FUNCTIONALITY ------------------------------------

  toggleShowingDetails(): void {
    this.showingProjects = !this.showingProjects
  }

}
