import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Link } from '../shared/models/link';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private linksSubject: BehaviorSubject<Link[]>;
  private actionsSubject: BehaviorSubject<Link[]>;
  private userSubject = new BehaviorSubject<User>({});

  private defaultLinks: Link[] = [
    {}
  ];

  private defaultActions: Link[] = [
    { label: "Login", icon: "person", route: 'login' },
    { label: "Sign up", icon: "person_add", route: 'sign-up' },
  ];
  constructor() {
    this.linksSubject = new BehaviorSubject(this.defaultLinks);
    this.actionsSubject = new BehaviorSubject(this.defaultActions);

  }

  get links() {
    return this.linksSubject.asObservable();
  }


  get actions() {
    return this.actionsSubject.asObservable();
  }

  get user() {
    return this.userSubject.asObservable();
  }

}
