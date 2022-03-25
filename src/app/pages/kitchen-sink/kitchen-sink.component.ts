import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent implements OnInit {

  public dummyForm: FormGroup = new FormGroup({
    basic: new FormControl(),
    error: new FormControl(null, Validators.required),
    search: new FormControl()
  })

  get search(): FormControl {
    return this.dummyForm.get('search') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
    this.dummyForm.get('error')?.markAsDirty();
  }

}
