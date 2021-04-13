import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PetsByOwnergenderComponent } from './pets-by-ownergender/pets-by-ownergender.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsByOwnergenderComponent,
    PetsListComponent,
    PetDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
