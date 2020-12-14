import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel = new UserModel();
  errorMessage: string;

  constructor(private router: Router) {
    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  login = () => {
    if (this.user.username === 'thilak' && this.user.password === 'MjThilakM') {
      this.router.navigate(['/valuation']);
    } else {
      this.errorMessage = 'Username or password is incorrect';
    }
  }

}
