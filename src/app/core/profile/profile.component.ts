import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  user: User;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.user.pipe(
      takeUntil(this.ngUnsubscribe)
    )
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



}
