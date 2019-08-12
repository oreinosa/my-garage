import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Link } from 'src/app/shared/models/link';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  appName = "My Garage";
  options = {
    mode: "side",
    fixed: false,
    top: 0,
    bottom: 0,
    opened: true
  };

  links: Link[] = [];
  actions: Link[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  user: User;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService
  ) {
    this.authService.actions.subscribe(_actions => this.actions = _actions);
    this.authService.links.subscribe(_links => this.links = _links);
    this.authService.user.subscribe(_user => this.user = _user);
  }

}
