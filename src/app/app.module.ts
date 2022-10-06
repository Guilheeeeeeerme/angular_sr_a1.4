import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { SharedModule } from './@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { podcastReducer } from './store/podcast.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule,
    StoreModule.forRoot({ podcast: podcastReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
