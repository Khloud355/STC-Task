import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
// import { AuthService } from 'src/app/core/services/auth/auth.service';



//TODO

/**
 * create componets folder
 * create services folder and move auth service inside it
 * create model folder and creat e user.model.ts  , interface
 * remove else if for cleaner code ||
 *
 *
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initiateUserData();
  }

  initiateUserData() {
    this.formData = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.authService.login(this.formData.value)
  }


}
