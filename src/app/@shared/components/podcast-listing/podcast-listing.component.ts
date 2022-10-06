import { Component, Input, ViewEncapsulation } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeUrl } from "@angular/platform-browser";
import { Podcast } from "@core/models/podcast";

@Component({
  selector: 'podcast-listing',
  templateUrl: './podcast-listing.component.html',
  styleUrls: ['./podcast-listing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PodcastListingComponent {

  @Input('podcast') podcast!: Podcast;
  @Input('index') index!: number;

  private _safe_rss_url!: SafeUrl;
  public get safe_rss_url() {
    if (!this._safe_rss_url)
      this._safe_rss_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.podcast.rss);
    return this._safe_rss_url
  }

  private _safe_website_url!: SafeUrl;
  public get safe_website_url() {
    if (!this._safe_website_url)
      this._safe_website_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.podcast.website);
    return this._safe_website_url
  }

  private _safe_itunes_url!: SafeUrl;
  public get safe_itunes_url() {
    if (!this._safe_itunes_url)
      this._safe_itunes_url = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://itunes.apple.com/us/podcast/id${this.podcast.itunes_id}`);
    return this._safe_itunes_url
  }

  private _safe_thumbnail_url!: SafeUrl;
  public get safe_thumbnail_url() {
    if (!this._safe_thumbnail_url)
      this._safe_thumbnail_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.podcast.thumbnail);
    return this._safe_thumbnail_url
  }

  



  constructor(private domSanitizer: DomSanitizer) { }

  viewPodcast() {
    return false;
  }
}