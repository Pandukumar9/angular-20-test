import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel',
  imports: [ReactiveFormsModule],
  templateUrl: './travel.html',
  styleUrl: './travel.scss'
})
export class Travel {

  travelForm!:FormGroup;
  constructor(private fb: FormBuilder) {
    // Initialization logic if needed 
  this.travelForm = this.fb.group({
  from_location: ['', Validators.required],
  to_location: ['', Validators.required],
  travel_date: ['', Validators.required],
  return_date: [''],
  time: [''],
  mode: ['', Validators.required],
  seats: [1, Validators.required],
  cost_per_person: [0],
  description: ['']
});
  }


onSubmit() {  
  if (this.travelForm.valid) {
  //   this.travelService.postTravel(this.travelForm.value).subscribe((response:any) => {
  //     console.log('Travel details submitted successfully', response );
  //  })
 }
}

}