import { NgModule } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from './home/home.component';
import { NotificationBarComponent } from '../components/notification-bar/notification-bar.component';
import { MaterialIcon } from 'material-icons';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NotificationBarComponent,
    HeaderComponent,
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    NotificationBarComponent,
    HeaderComponent,
  ],
  imports: [MatIconModule],
})
export class PagesModule {}
