import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule if you have one
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Include the AppRoutingModule in the imports array if you have one
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
