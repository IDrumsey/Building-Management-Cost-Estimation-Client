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

  numStrDecimals(numStr: string, numDecimals: number): string {
    if(numStr.includes('.')){
      // split by .
      let [str1, str2] = numStr.split('.')
      str2 = str2.slice(0, numDecimals)
      if(str1){
        return str1 + '.' + str2
      }
      throw "Error"
    }
    else{
      numStr += '.'
      for(let i = 0; i < numDecimals; i++){
        numStr += '0'
      }
      return numStr
    }
  }

}
