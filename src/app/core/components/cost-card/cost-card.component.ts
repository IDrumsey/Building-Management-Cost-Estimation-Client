import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cost-card',
  templateUrl: './cost-card.component.html',
  styleUrls: ['./cost-card.component.scss']
})
export class CostCardComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  
  // ---------------------------- DATA ----------------------------
  @Input() title: string
  @Input() cost: number

  updatedTempCost: number

  // https://stackoverflow.com/a/41095677/17712310
  private costField: ElementRef
  @ViewChild('costField') set costFieldProxy(ref: ElementRef) {
    if(ref){
      this.costField = ref
      this.updatedTempCost = this.cost
      this.cdr.detectChanges()
      // focus the input
      this.costField.nativeElement.focus()
    }
  }

  // ---------------------------- EVENTS ----------------------------

  @Output() costChange = new EventEmitter<number>()

  // ---------------------------- STATE ----------------------------

  editing = false

  // ---------------------------- STYLES ----------------------------
  
  checkIcon = faCheck

  // ---------------------------- EVENT HANDLERS ----------------------------

  onCostFixedClick(): void {
    this.editing = true
  }

  onUpdateBtnClick(): void {
    this.cost = this.updatedTempCost
    this.editing = false
    this.costChange.emit(this.cost)
  }

  // ---------------------------- FUNCTIONALITY ----------------------------

}
