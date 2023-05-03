import { Component } from '@angular/core';

import { AuthService } from './services/auth/auth.service'
import { UsersService } from './services/users/users.service'
import { User } from './models/user.model';
import { FilesService } from './services/files/files.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent = '';
  token = '';
  user?: User;
  imgRta = '';

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private filesService: FilesService
  ) {}

  onLoaded(output: string) {
    console.log(output);
  }

  createUser() {
    this.userService.create({
      name: 'Elvis2',
      email: 'elvis2@mail.com',
      password: '1212'
    })
    .subscribe(rta => {
      console.log(rta);
    });
  }

  login() {
    this.authService.login('elvis2@mail.com', '1212')
      .subscribe(rta => {
        console.log(rta);
        this.token = rta.access_token;
      });
  }

  getProfile() {
    this.authService.profile()
      .subscribe(profile => {
        console.log(profile);
        this.user = profile;
      });
  }

  downloadPdf() {
    this.filesService.getFile("my.pdf", 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe();
  }

  onUpload(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file)
        .subscribe({
          next: (data) => {
            this.imgRta = data.location;
          }
        });
    }
  }
}
