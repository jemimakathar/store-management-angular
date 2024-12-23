import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackForm:FormGroup;
  feedback: any = {};
  submitted:boolean = false;

  constructor(private fb:FormBuilder)
  {
    this.feedbackForm =this.fb.group({
      name:['',Validators.required],
      phone:['',[Validators.required,Validators.pattern('^\\d{10}$')],],
      productFeedback:[''],
      websiteFeedback:[''],
    });
  }
 submitFeedback()
 {
  if(this.feedbackForm.valid)
  {
    this.feedback=this.feedbackForm.value;
    this.submitted=true;
    console.log('Feedback Submitted:', this.feedback);
    this.feedbackForm.reset();
  }
 }
}