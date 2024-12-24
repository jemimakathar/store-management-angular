import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  

  constructor(private router:Router)
  {
    
  }

  onSubmit(): void {
    if (this.username === 'admin' && this.password === 'password123') {
  
        this.router.navigate(['/home']);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}
  