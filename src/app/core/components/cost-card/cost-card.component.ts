import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-card',
  templateUrl: './cost-card.component.html',
  styleUrls: ['./cost-card.component.scss']
})
export class CostCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // ---------------------------- DATA ----------------------------
  @Input() title: string
  @Input() cost: number

  // ---------------------------- EVENTS ----------------------------

  // ---------------------------- STATE ----------------------------

  // ---------------------------- EVENT HANDLERS ----------------------------

  // ---------------------------- FUNCTIONALITY ----------------------------

}
