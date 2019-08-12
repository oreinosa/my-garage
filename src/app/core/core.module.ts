import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [NavigationComponent, HomeComponent, AvatarComponent, ProfileComponent],
  imports: [
    SharedModule,
    CoreRoutingModule,
  ],
  exports:[
    NavigationComponent,
    
  ]
})
export class CoreModule { }
