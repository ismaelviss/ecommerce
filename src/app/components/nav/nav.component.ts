import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { StoreService } from 'src/app/services/store/store.service';
import { AuthService } from './../../services/auth/auth.service'
import { UsersService } from './../../services/users/users.service'
import { switchMap } from 'rxjs/operators'
import { Auth } from 'src/app/models/auth.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  token = '';
  user: User | null = null;

  constructor(
    private storeSevice: StoreService,
    private authService: AuthService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.storeSevice.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  login() {
    this.authService.login('elvis2@mail.com', '1212')
      .pipe(
        switchMap((auth) => {
              return this.getProfile(auth);
            }
          )
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.user = data;
        }
      });
  }

  getProfile(auth: Auth) {
    this.token = auth.access_token
    return this.authService.profile();
  }

  loginAndGet() {
    this.authService.loginAndGet('elvis2@mail.com', '1212')
    .subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

}
