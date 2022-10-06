import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedRoutingModule } from "@shared/shared-routing.module";
import { PodcastListingComponent } from "./components/podcast-listing/podcast-listing.component";

import { ReactiveFormsModule } from "@angular/forms";
import { GenrePickerComponent } from "./components/genre-picker/genre-picker.component";

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PodcastListingComponent,
    GenrePickerComponent,
  ],
  exports: [
    PodcastListingComponent,
    GenrePickerComponent,
  ],
})
export class SharedModule { }