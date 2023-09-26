import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationPickerComponent } from './location-picker/location-picker.component';


import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    LocationPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_qW9n2_-k3PKvUUTFcfmfEnApljV5gBM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
