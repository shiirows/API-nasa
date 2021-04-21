import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';
import { SpaceService } from './space.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
