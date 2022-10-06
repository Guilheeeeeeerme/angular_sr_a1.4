(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ferre\Desktop\angular_sr_a1.4\src\main.ts */"zUnb");


/***/ }),

/***/ "1wSx":
/*!***************************************************!*\
  !*** ./src/app/@core/services/podcast.service.ts ***!
  \***************************************************/
/*! exports provided: PodcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastService", function() { return PodcastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PodcastService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getPodcastGenres() {
        return this.httpClient
            .get("/assets/data/podcasts-by-genre.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error, caught) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
    }
}
PodcastService.ɵfac = function PodcastService_Factory(t) { return new (t || PodcastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PodcastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PodcastService, factory: PodcastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "2sqw":
/*!*********************************************************************************!*\
  !*** ./src/app/@shared/components/podcast-listing/podcast-listing.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PodcastListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastListingComponent", function() { return PodcastListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class PodcastListingComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    get safe_rss_url() {
        if (!this._safe_rss_url)
            this._safe_rss_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.podcast.rss);
        return this._safe_rss_url;
    }
    get safe_website_url() {
        if (!this._safe_website_url)
            this._safe_website_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.podcast.website);
        return this._safe_website_url;
    }
    get safe_itunes_url() {
        if (!this._safe_itunes_url)
            this._safe_itunes_url = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://itunes.apple.com/us/podcast/id${this.podcast.itunes_id}`);
        return this._safe_itunes_url;
    }
    get safe_thumbnail_url() {
        if (!this._safe_thumbnail_url)
            this._safe_thumbnail_url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.podcast.thumbnail);
        return this._safe_thumbnail_url;
    }
    viewPodcast() {
        return false;
    }
}
PodcastListingComponent.ɵfac = function PodcastListingComponent_Factory(t) { return new (t || PodcastListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
PodcastListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastListingComponent, selectors: [["podcast-listing"]], inputs: { podcast: "podcast", index: "index" }, decls: 32, vars: 10, consts: [[1, "podcast__container"], [1, "podcast__container__ranking"], [1, "podcast__container__ranking__title"], [1, "podcast__container__thumbnail"], ["alt", "thumbnail", 1, "podcast__container__thumbnail__image", 3, "src"], [1, "podcast__container__info"], [1, "podcast__container__info__title"], [1, "podcast__container__info__publisher"], [1, "podcast__container__info__publisher__name"], [1, "podcast__container__info__episodes"], [1, "podcast__container__info__links"], ["target", "_blank", 1, "podcast__container__info__links__link", 3, "href"], [1, "icon", "itunes"], [1, "text"], [1, "icon", "web"], ["rel", "alternate", "type", "application/rss+xml", "title", "RSS 2.0", 3, "href"], ["type", "application/rss+xml", "target", "_blank", 1, "podcast__container__info__links__link", 3, "href"], [1, "icon", "rss"], [1, "podcast__container__description"]], template: function PodcastListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "itunes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "rss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.safe_thumbnail_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.podcast.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.podcast.publisher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.podcast.total_episodes, " episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.safe_itunes_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.safe_website_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.safe_rss_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.safe_rss_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.podcast.description);
    } }, styles: [".podcast__container {\n  flex-grow: 1;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  display: grid;\n  grid-template-columns: 0 150px auto 1fr;\n  gap: 30px;\n  padding: 2.5em 0 2.5em 0;\n  border-radius: 5px;\n  box-shadow: 0 0 10px -3px #A300BB;\n}\n@media screen and (min-width: 768px) {\n  .podcast__container {\n    padding: 2.5em 2.5em 2.5em 0;\n    grid-template-columns: 0 150px 2fr 2fr;\n    margin-bottom: 0;\n  }\n}\n@media screen and (min-width: 810px) {\n  .podcast__container {\n    width: 810px;\n  }\n}\n.podcast__container__thumbnail__image {\n  position: relative;\n  right: 3rem;\n  height: 200px;\n}\n@media screen and (min-width: 768px) {\n  .podcast__container__thumbnail__image {\n    right: 4rem;\n  }\n}\n.podcast__container__info__title {\n  font-family: \"SpaceMono\", sans-serif;\n  font-weight: 600;\n  margin: 0;\n  line-height: 1em;\n}\n.podcast__container__info__publisher__name {\n  color: #A300BB;\n}\n.podcast__container__info__publisher, .podcast__container__info__episodes {\n  font-family: \"SpaceMono\", sans-serif;\n  font-weight: 400;\n  margin-top: 1rem;\n}\n.podcast__container__info__links {\n  border-top: thin solid #777;\n  cursor: pointer;\n}\n.podcast__container__info__links__link {\n  display: inline-block;\n  padding: 1em 1em 0.5em 0;\n  margin: 0;\n  color: #777;\n}\n.podcast__container__info__links__link .text {\n  display: none;\n  font-size: 1em;\n  font-family: \"SpaceMono\", sans-serif;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n@media screen and (min-width: 768px) {\n  .podcast__container__info__links__link .text {\n    display: inline-block;\n  }\n}\n.podcast__container__info__links__link:hover {\n  color: #FC731C;\n}\n.podcast__container__info__links__link:hover .icon {\n  stroke: #FC731C;\n}\n.podcast__container__info__links__link .icon {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  padding: 10px;\n  padding-right: 1em;\n  background-size: 1em;\n}\n.podcast__container__info__links__link .itunes {\n  background-image: url(\"/assets/images/apple.svg\");\n}\n.podcast__container__info__links__link .web {\n  background-image: url(\"/assets/images/link.svg\");\n}\n.podcast__container__info__links__link .rss {\n  background-image: url(\"/assets/images/rss.svg\");\n}\n.podcast__container__ranking {\n  display: inline-block;\n  background-color: #FD741B;\n  background-image: linear-gradient(180deg, #FD741B, #A300BB);\n  width: 5em;\n  height: 5em;\n  line-height: 5em;\n  border-radius: 50%;\n  text-align: center;\n  position: relative;\n  top: -5.2em;\n  left: 10px;\n  z-index: 2;\n}\n@media screen and (min-width: 768px) {\n  .podcast__container__ranking {\n    position: relative;\n    top: -2.5em;\n    left: -140px;\n  }\n}\n.podcast__container__ranking__title {\n  right: -100px;\n  color: #fff;\n  font-family: \"SpaceMono\", sans-serif;\n  font-weight: 600;\n  text-align: center;\n  margin: 0;\n}\n.podcast__container__description {\n  font-size: 1.2em;\n  grid-column-start: 2;\n  grid-column-end: 4;\n}\n@media screen and (min-width: 768px) {\n  .podcast__container__description {\n    grid-column: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccG9kY2FzdC1saXN0aW5nLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQ1BNO0VEUU4sbUJDUk07RURVTixhQUFBO0VBQ0EsdUNBQUE7RUFFQSxTQ2JNO0VEY04sd0JBQUE7RUFFQSxrQkFBQTtFQUNBLGlDQUFBO0FBTko7QUFRSTtFQWZGO0lBZ0JJLDRCQUFBO0lBQ0Esc0NBQUE7SUFDQSxnQkFBQTtFQUxKO0FBQ0Y7QUFPSTtFQXJCRjtJQXNCSSxZQUFBO0VBSko7QUFDRjtBQVFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQU5SO0FBUVE7RUFMRjtJQU1JLFdBQUE7RUFMUjtBQUNGO0FBWU07RUFFRSxvQ0MvQmE7RURnQ2IsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFYUjtBQWVRO0VBQ0UsY0NsRE87QURxQ2pCO0FBaUJNO0VBRUUsb0NDN0NhO0VEOENiLGdCQUFBO0VBQ0EsZ0JBQUE7QUFoQlI7QUFtQk07RUFDRSwyQkFBQTtFQUNBLGVBQUE7QUFqQlI7QUFtQlE7RUFDRSxxQkFBQTtFQWlCQSx3QkFBQTtFQUNBLFNBQUE7RUFFQSxXQ3BGRztBRGtEYjtBQWdCVTtFQUVFLGFBQUE7RUFNQSxjQUFBO0VBQ0Esb0NDbEVTO0VEbUVULGdCQUFBO0VBQ0EseUJBQUE7QUFwQlo7QUFhWTtFQUpGO0lBS0kscUJBQUE7RUFWWjtBQUNGO0FBd0JVO0VBQ0UsY0N0Rk87QURnRW5CO0FBd0JZO0VBQ0UsZUN6Rks7QURtRW5CO0FBMkJVO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBekJaO0FBNEJVO0VBQ0UsaURBQUE7QUExQlo7QUE2QlU7RUFDRSxnREFBQTtBQTNCWjtBQThCVTtFQUNFLCtDQUFBO0FBNUJaO0FBbUNJO0VBRUUscUJBQUE7RUFFQSx5QkM5SFk7RUQrSFosMkRBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBckNOO0FBdUNNO0VBbEJGO0lBbUJJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFwQ047QUFDRjtBQXNDTTtFQUNFLGFBQUE7RUFDQSxXQ3RKQTtFRHVKQSxvQ0N6SWE7RUQwSWIsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFwQ1I7QUF5Q0k7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUF2Q047QUF5Q007RUFMRjtJQU1JLGNBQUE7RUF0Q047QUFDRiIsImZpbGUiOiJwb2RjYXN0LWxpc3RpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9taXhpbnMuc2Nzcyc7XG5cbi5wb2RjYXN0IHtcbiAgJl9fY29udGFpbmVyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogJHNwYWNpbmc7XG4gICAgbWFyZ2luLWJvdHRvbTogJHNwYWNpbmc7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCAxNTBweCBhdXRvIDFmcjtcblxuICAgIGdhcDogJHNwYWNpbmc7XG4gICAgcGFkZGluZzogMi41ZW0gMCAyLjVlbSAwO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAkYm94LXNoYWRvdy1ibHVyIC0zcHggJGFjY2VudC1wcmltYXJ5O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDIuNWVtIDIuNWVtIDIuNWVtIDA7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgMTUwcHggMmZyIDJmcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODEwcHgpIHtcbiAgICAgIHdpZHRoOiA4MTBweDtcbiAgICB9XG5cbiAgICAmX190aHVtYm5haWwge1xuXG4gICAgICAmX19pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDNyZW07XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICByaWdodDogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9faW5mbyB7XG5cbiAgICAgICZfX3RpdGxlIHtcblxuICAgICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udC1zdHlsZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgfVxuXG4gICAgICAmX19wdWJsaXNoZXIge1xuICAgICAgICAmX19uYW1lIHtcbiAgICAgICAgICBjb2xvcjogJGFjY2VudC1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZfX3B1Ymxpc2hlcixcbiAgICAgICZfX2VwaXNvZGVzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtc3R5bGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB9XG5cbiAgICAgICZfX2xpbmtzIHtcbiAgICAgICAgYm9yZGVyLXRvcDogdGhpbiBzb2xpZCAkbGluay1jb2xvcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICZfX2xpbmsge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAgIC50ZXh0IHtcblxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250LXN0eWxlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYWRkaW5nOiAxZW0gMWVtIC41ZW0gMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICBjb2xvcjogJGxpbmstY29sb3I7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICBzdHJva2U6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLml0dW5lcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2FwcGxlLnN2ZycpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndlYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2xpbmsuc3ZnJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucnNzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcnNzLnN2ZycpXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19yYW5raW5nIHtcblxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbnRyYXN0O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJGFjY2VudC1jb250cmFzdCwgJGFjY2VudC1wcmltYXJ5KTtcblxuICAgICAgd2lkdGg6IDVlbTtcbiAgICAgIGhlaWdodDogNWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtNS4yZW07XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0yLjVlbTtcbiAgICAgICAgbGVmdDogLTE0MHB4O1xuICAgICAgfVxuXG4gICAgICAmX190aXRsZSB7XG4gICAgICAgIHJpZ2h0OiAtMTAwcHg7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250LXN0eWxlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yMGVtO1xuICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGdyaWQtY29sdW1uOiA0O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn0iLCIkc3BhY2luZzogMzBweDtcblxuJHdoaXRlOiAjZmZmO1xuJHByaW1hcnk6ICM0RTEwNUM7XG4kYWNjZW50LWNvbnRyYXN0OiAjRkQ3NDFCO1xuJGFjY2VudC1wcmltYXJ5OiAjQTMwMEJCO1xuXG4kbGluay1jb2xvcjogIzc3NztcbiRsaW5rLWhvdmVyLWNvbG9yOiAjRkM3MzFDO1xuXG4kYm94LXNoYWRvdy1ibHVyOiAxMHB4O1xuJGJveC1zaGFkb3ctcmVkOiAxNjU7XG4kYm94LXNoYWRvdy1ibHVlOiAyO1xuJGJveC1zaGFkb3ctZ3JlZW46IDE4NjtcbiRib3gtc2hhZG93LWFscGhhOiAuMjU7XG5cbiRwcmltYXJ5LWZvbnQtc3R5bGU6ICdTcGFjZU1vbm8nLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250LXN0eWxlOiAnV29ya1NhbnMnOyJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastListingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'podcast-listing',
                templateUrl: './podcast-listing.component.html',
                styleUrls: ['./podcast-listing.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { podcast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['podcast']
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['index']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ONFj":
/*!***************************************************************************!*\
  !*** ./src/app/@shared/components/genre-picker/genre-picker.component.ts ***!
  \***************************************************************************/
/*! exports provided: GenrePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenrePickerComponent", function() { return GenrePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_podcast_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/podcast.actions */ "SJ6y");
/* harmony import */ var src_app_store_podcast_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/podcast.selectors */ "YgWW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function GenrePickerComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", genre_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r1.name);
} }
class GenrePickerComponent {
    constructor(store) {
        this.store = store;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"];
        this.genre_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selected_genre_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    ngOnInit() {
        this.subscription.add(this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_podcast_selectors__WEBPACK_IMPORTED_MODULE_6__["getPodcastState"]))
            .subscribe((podcastListState) => {
            const { selected_genre_id } = this.genre_form.value;
            if (selected_genre_id == podcastListState.genre_id)
                return;
            this.genre_form.patchValue({
                selected_genre_id: podcastListState.genre_id
            });
        }));
        this.subscription.add(this.genre_form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(({ selected_genre_id }) => this.genres.filter(genre => genre.id == selected_genre_id)[0]))
            .subscribe((genre) => {
            this.store.dispatch(Object(src_app_store_podcast_actions__WEBPACK_IMPORTED_MODULE_5__["setPodcastGenre"])({
                genre_id: genre.id,
                genre_name: genre.name,
            }));
        }));
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
GenrePickerComponent.ɵfac = function GenrePickerComponent_Factory(t) { return new (t || GenrePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
GenrePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenrePickerComponent, selectors: [["genre-picker"]], inputs: { genres: "genres" }, decls: 3, vars: 2, consts: [[3, "formGroup"], ["formControlName", "selected_genre_id", "name", "genres", "id", "genres", 1, "select", "gradient__text"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function GenrePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GenrePickerComponent_option_2_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.genre_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["[_ngcontent-%COMP%]:root {\n  --select-border: #777;\n  --select-focus: blue;\n  --select-arrow: var(--select-border);\n}\n\n.select[_ngcontent-%COMP%] {\n  font-family: \"SpaceMono\", sans-serif;\n  font-weight: 600;\n  width: 100%;\n  min-width: 15ch;\n  max-width: 30ch;\n  border: 1px solid var(--select-border);\n  border-radius: 0.25em;\n  padding: 0.25em 0.5em;\n  font-size: 1.25rem;\n  cursor: pointer;\n  line-height: 1.1;\n  background-color: #fff;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2VucmUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0NBQUE7QUFGSjs7QUFLQTtFQUNJLG9DQ01pQjtFRExqQixnQkFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtBQUpKIiwiZmlsZSI6ImdlbnJlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vbWl4aW5zLnNjc3MnO1xyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1zZWxlY3QtYm9yZGVyOiAjNzc3O1xyXG4gICAgLS1zZWxlY3QtZm9jdXM6IGJsdWU7XHJcbiAgICAtLXNlbGVjdC1hcnJvdzogdmFyKC0tc2VsZWN0LWJvcmRlcik7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtc3R5bGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxNWNoO1xyXG4gICAgbWF4LXdpZHRoOiAzMGNoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2VsZWN0LWJvcmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG59IiwiJHNwYWNpbmc6IDMwcHg7XG5cbiR3aGl0ZTogI2ZmZjtcbiRwcmltYXJ5OiAjNEUxMDVDO1xuJGFjY2VudC1jb250cmFzdDogI0ZENzQxQjtcbiRhY2NlbnQtcHJpbWFyeTogI0EzMDBCQjtcblxuJGxpbmstY29sb3I6ICM3Nzc7XG4kbGluay1ob3Zlci1jb2xvcjogI0ZDNzMxQztcblxuJGJveC1zaGFkb3ctYmx1cjogMTBweDtcbiRib3gtc2hhZG93LXJlZDogMTY1O1xuJGJveC1zaGFkb3ctYmx1ZTogMjtcbiRib3gtc2hhZG93LWdyZWVuOiAxODY7XG4kYm94LXNoYWRvdy1hbHBoYTogLjI1O1xuXG4kcHJpbWFyeS1mb250LXN0eWxlOiAnU3BhY2VNb25vJywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1zdHlsZTogJ1dvcmtTYW5zJzsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenrePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'genre-picker',
                templateUrl: './genre-picker.component.html',
                styleUrls: ['./genre-picker.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { genres: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "SJ6y":
/*!******************************************!*\
  !*** ./src/app/store/podcast.actions.ts ***!
  \******************************************/
/*! exports provided: setPodcastGenre, incrementPodcastGenrePage, decrementPodcastGenrePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPodcastGenre", function() { return setPodcastGenre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementPodcastGenrePage", function() { return incrementPodcastGenrePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementPodcastGenrePage", function() { return decrementPodcastGenrePage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setPodcastGenre = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[UPDATE] setPodcastGenre', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const incrementPodcastGenrePage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[UPDATE] incrementPodcastGenre');
const decrementPodcastGenrePage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[UPDATE] decrementPodcastGenre');


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_podcast_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/podcast.selectors */ "YgWW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a0) { return { "hamburger--active": a0 }; };
const _c1 = function (a0) { return { "navigation__items--visible": a0 }; };
class AppComponent {
    constructor(store) {
        this.store = store;
        this.menuOpen = false;
        this.genreName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_podcast_selectors__WEBPACK_IMPORTED_MODULE_2__["getPodcastPageGenreName"]));
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 9, consts: [[1, "navigation"], ["role", "navigation", 1, "navigation__item-container"], [1, "hamburger", "navigation__toggle", 3, "ngClass", "click"], [1, "hamburger-box"], [1, "hamburger-inner"], [1, "navigation__items", 3, "ngClass"], [1, "navigation__item"], ["routerLinkActive", "navigation__item-link--active", "routerLink", "podcasts", 1, "navigation__item-link"], [1, "header"], [1, "header__title"], [1, "header__genre", "gradient__text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Web Design Podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "header", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.menuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 3, ctx.genreName$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.navigation__items[_ngcontent-%COMP%] {\n  display: none;\n  margin: 0;\n  padding: 0;\n  background-color: #fff;\n  box-shadow: 5px 5px 5px rgba(165, 2, 186, 0.125);\n}\n.navigation__items--visible[_ngcontent-%COMP%] {\n  display: block;\n}\n.navigation__item[_ngcontent-%COMP%] {\n  margin: 0;\n  list-style: none;\n}\n.navigation__item-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 30px;\n  color: #777;\n  text-decoration: none;\n}\n.navigation__item-link[_ngcontent-%COMP%]:hover {\n  background-color: #f2f2f2;\n  color: #FC731C;\n}\n.navigation__item-link--active[_ngcontent-%COMP%] {\n  color: #FC731C;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: visible;\n  margin: 0;\n  padding: 25px 50px;\n  cursor: pointer;\n  transition-timing-function: linear;\n  transition-duration: 0.15s;\n  transition-property: opacity, filter;\n  text-transform: none;\n  color: inherit;\n  border: 0;\n  background-color: transparent;\n}\n.hamburger-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 16px;\n}\n.hamburger-inner[_ngcontent-%COMP%] {\n  top: 50%;\n  display: block;\n  margin-top: -2px;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition-duration: 75ms;\n}\n.hamburger-inner[_ngcontent-%COMP%], .hamburger-inner[_ngcontent-%COMP%]::after, .hamburger-inner[_ngcontent-%COMP%]::before {\n  position: absolute;\n  width: 30px;\n  height: 4px;\n  transition-property: transform;\n  background-color: #000;\n}\n.hamburger-inner[_ngcontent-%COMP%]::before, .hamburger-inner[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n}\n.hamburger-inner[_ngcontent-%COMP%]::before {\n  top: -10px;\n  transition: top 75ms ease 0.12s, opacity 75ms ease;\n}\n.hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: -10px;\n  transition: bottom 75ms ease 0.12s, transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);\n}\n.hamburger--active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: rotate(45deg);\n}\n.hamburger--active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\n  top: 0;\n  transition: top 75ms ease, opacity 75ms ease 0.12s;\n  opacity: 0;\n}\n.hamburger--active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\n  bottom: 0;\n  transition: bottom 75ms ease, transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\n  transform: rotate(-90deg);\n}\n.header[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  background-color: #4E105C;\n  padding: 10px;\n  position: relative;\n  background-image: url(\"/assets/images/triangle.svg\"), url(\"/assets/images/circle.svg\");\n  background-repeat: no-repeat;\n  background-position: 106% 100%, 120% 200%;\n}\n@media screen and (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 30px;\n    background-position: 96% 200%, 90% 140%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 30px;\n    background-position: 76% 200%, 75% 140%;\n  }\n}\n.header__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"SpaceMono\", sans-serif;\n  font-weight: 400;\n  text-align: center;\n}\n.header__genre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  display: inline-block;\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .header__genre[_ngcontent-%COMP%] {\n    display: inline;\n    width: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBRkY7QUFHRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQ1ZJO0VDT0osZ0RBQUE7QUZLSjtBQUFJO0VBQ0UsY0FBQTtBQUVOO0FBQ0U7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdDakJPO0VEa0JQLHFCQUFBO0FBRU47QUFETTtFQUNFLHlCQUFBO0VBQ0EsY0NwQlc7QUR1Qm5CO0FBRE07RUFDRSxjQ3ZCVztBRDBCbkI7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0FBQUY7QUFDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0U7RUFDRSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0VBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQUVOO0FBQUk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUVOO0FBQUk7RUFDRSxVQUFBO0VBQ0Esa0RBQUE7QUFFTjtBQUFJO0VBQ0UsYUFBQTtFQUNBLHlGQUFBO0FBRU47QUFDRTtFQUNFLHVCQUFBO0VBQ0EsK0RBQUE7RUFDQSx3QkFBQTtBQUNKO0FBQUk7RUFDRSxNQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0FBRU47QUFBSTtFQUNFLFNBQUE7RUFDQSxzRkFBQTtFQUNBLHlCQUFBO0FBRU47QUFHQTtFQUNFLGdCQUFBO0VBQ0EseUJDbEdRO0VEbUdSLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNGQUFBO0VBQ0EsNEJBQUE7RUFDQSx5Q0FBQTtBQUFGO0FBQ0U7RUFSRjtJQVNJLGFDNUdNO0lENkdOLHVDQUFBO0VBRUY7QUFDRjtBQURFO0VBWkY7SUFhSSxhQ2hITTtJRGlITix1Q0FBQTtFQUlGO0FBQ0Y7QUFIRTtFQUNFLFdDbEhJO0VEbUhKLG9DQ3JHaUI7RURzR2pCLGdCQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUhFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFLSjtBQUpJO0VBSkY7SUFLSSxlQUFBO0lBQ0EsWUFBQTtFQU9KO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLy4uL21peGlucy5zY3NzJztcblxuLm5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgJl9faXRlbXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCwwLDEpO1xuICAgICYtLXZpc2libGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gICZfX2l0ZW0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICYtbGluayB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxMHB4ICRzcGFjaW5nO1xuICAgICAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkd2hpdGUsIDUlKTtcbiAgICAgICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgICAgfVxuICAgICAgJi0tYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjE1cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSxmaWx0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgJi1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG4gICYtaW5uZXIge1xuICAgIHRvcDogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNzVtcztcbiAgICAmLCAmOjphZnRlciwgJjo6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIH1cbiAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHRvcDogLTEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiB0b3AgNzVtcyBlYXNlIC4xMnMsb3BhY2l0eSA3NW1zIGVhc2U7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiBib3R0b20gNzVtcyBlYXNlIC4xMnMsdHJhbnNmb3JtIDc1bXMgY3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTtcbiAgICB9XG4gIH1cbiAgJi0tYWN0aXZlICYtaW5uZXIge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNpdGlvbjogdG9wIDc1bXMgZWFzZSxvcGFjaXR5IDc1bXMgZWFzZSAuMTJzO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDc1bXMgZWFzZSx0cmFuc2Zvcm0gNzVtcyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKSAuMTJzO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUuc3ZnJyksIHVybCgnL2Fzc2V0cy9pbWFnZXMvY2lyY2xlLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMTA2JSAxMDAlLCAxMjAlIDIwMCU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogJHNwYWNpbmc7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogIDk2JSAyMDAlLCA5MCUgMTQwJTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBwYWRkaW5nOiAkc3BhY2luZztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgNzYlIDIwMCUsIDc1JSAxNDAlO1xuICB9XG4gICZfX3RpdGxlIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250LXN0eWxlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICZfX2dlbnJlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgd2lkdGg6IHVuc2V0O1xuICAgIH1cbiAgfVxufSIsIiRzcGFjaW5nOiAzMHB4O1xuXG4kd2hpdGU6ICNmZmY7XG4kcHJpbWFyeTogIzRFMTA1QztcbiRhY2NlbnQtY29udHJhc3Q6ICNGRDc0MUI7XG4kYWNjZW50LXByaW1hcnk6ICNBMzAwQkI7XG5cbiRsaW5rLWNvbG9yOiAjNzc3O1xuJGxpbmstaG92ZXItY29sb3I6ICNGQzczMUM7XG5cbiRib3gtc2hhZG93LWJsdXI6IDEwcHg7XG4kYm94LXNoYWRvdy1yZWQ6IDE2NTtcbiRib3gtc2hhZG93LWJsdWU6IDI7XG4kYm94LXNoYWRvdy1ncmVlbjogMTg2O1xuJGJveC1zaGFkb3ctYWxwaGE6IC4yNTtcblxuJHByaW1hcnktZm9udC1zdHlsZTogJ1NwYWNlTW9ubycsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQtc3R5bGU6ICdXb3JrU2Fucyc7IiwiQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XG5cbkBtaXhpbiBib3gtc2hhZG93KCRob3Jpem9udGFsOiAwLCAkdmVydGljbGU6IDAsICRuby10b3A6IDApXG57XG4gIEBpZiAkbm8tdG9wID09IDEge1xuICAgICRhbHBoYTogKCRib3gtc2hhZG93LWFscGhhLzIpO1xuICAgICRib3gtc2hhZG93LWNvbG9yOiByZ2JhKCRib3gtc2hhZG93LXJlZCwgJGJveC1zaGFkb3ctYmx1ZSwgJGJveC1zaGFkb3ctZ3JlZW4sICRhbHBoYSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAoJGJveC1zaGFkb3ctYmx1ci8yKSAoJGJveC1zaGFkb3ctYmx1ci8yKSAoJGJveC1zaGFkb3ctYmx1ci8yKSAkYm94LXNoYWRvdy1jb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICgkYm94LXNoYWRvdy1ibHVyLzIpICgkYm94LXNoYWRvdy1ibHVyLzIpICgkYm94LXNoYWRvdy1ibHVyLzIpICRib3gtc2hhZG93LWNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICgkYm94LXNoYWRvdy1ibHVyLzIpICgkYm94LXNoYWRvdy1ibHVyLzIpICgkYm94LXNoYWRvdy1ibHVyLzIpICRib3gtc2hhZG93LWNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAkYm94LXNoYWRvdy1jb2xvcjogcmdiYSgkYm94LXNoYWRvdy1yZWQsICRib3gtc2hhZG93LWJsdWUsICRib3gtc2hhZG93LWdyZWVuLCAkYm94LXNoYWRvdy1hbHBoYSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkaG9yaXpvbnRhbCAkdmVydGljbGUgJGJveC1zaGFkb3ctYmx1ciAkYm94LXNoYWRvdy1jb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRob3Jpem9udGFsICR2ZXJ0aWNsZSAkYm94LXNoYWRvdy1ibHVyICRib3gtc2hhZG93LWNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICRob3Jpem9udGFsICR2ZXJ0aWNsZSAkYm94LXNoYWRvdy1ibHVyICRib3gtc2hhZG93LWNvbG9yO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "V5UK":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_podcast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/podcast.service */ "1wSx");




class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [
                _services_podcast_service__WEBPACK_IMPORTED_MODULE_2__["PodcastService"]
            ]
        };
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "YgWW":
/*!********************************************!*\
  !*** ./src/app/store/podcast.selectors.ts ***!
  \********************************************/
/*! exports provided: getPodcastPageGenreName, getPodcastState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodcastPageGenreName", function() { return getPodcastPageGenreName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPodcastState", function() { return getPodcastState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getPodcastPageGenreName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.podcast, (podcast) => podcast.genre_name);
const getPodcastState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.podcast, (podcast) => podcast);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@core/core.module */ "V5UK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@shared/shared.module */ "pk6O");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _store_podcast_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/podcast.reducer */ "nT12");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ podcast: _store_podcast_reducer__WEBPACK_IMPORTED_MODULE_7__["podcastReducer"] })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({ podcast: _store_podcast_reducer__WEBPACK_IMPORTED_MODULE_7__["podcastReducer"] })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bFOh":
/*!**************************************************!*\
  !*** ./src/app/@shared/shared-routing.module.ts ***!
  \**************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "nT12":
/*!******************************************!*\
  !*** ./src/app/store/podcast.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, podcastReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "podcastReducer", function() { return podcastReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _podcast_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./podcast.actions */ "SJ6y");


const initialState = {
    genre_id: 140,
    genre_name: 'Web Design',
    page_number: 0,
    page_size: 5,
};
const podcastReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_podcast_actions__WEBPACK_IMPORTED_MODULE_1__["incrementPodcastGenrePage"], (state) => (Object.assign(Object.assign({}, state), { page_number: state.page_number + 1 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_podcast_actions__WEBPACK_IMPORTED_MODULE_1__["decrementPodcastGenrePage"], (state) => (Object.assign(Object.assign({}, state), { page_number: state.page_number > 0 ? state.page_number - 1 : 0 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_podcast_actions__WEBPACK_IMPORTED_MODULE_1__["setPodcastGenre"], (state, { genre_id, genre_name }) => (Object.assign(Object.assign({}, state), { genre_id: genre_id, genre_name: genre_name, page_number: 0 }))));


/***/ }),

/***/ "pk6O":
/*!******************************************!*\
  !*** ./src/app/@shared/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared-routing.module */ "bFOh");
/* harmony import */ var _components_podcast_listing_podcast_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/podcast-listing/podcast-listing.component */ "2sqw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_genre_picker_genre_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/genre-picker/genre-picker.component */ "ONFj");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_podcast_listing_podcast_listing_component__WEBPACK_IMPORTED_MODULE_3__["PodcastListingComponent"],
        _components_genre_picker_genre_picker_component__WEBPACK_IMPORTED_MODULE_5__["GenrePickerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]], exports: [_components_podcast_listing_podcast_listing_component__WEBPACK_IMPORTED_MODULE_3__["PodcastListingComponent"],
        _components_genre_picker_genre_picker_component__WEBPACK_IMPORTED_MODULE_5__["GenrePickerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_routing_module__WEBPACK_IMPORTED_MODULE_2__["SharedRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                declarations: [
                    _components_podcast_listing_podcast_listing_component__WEBPACK_IMPORTED_MODULE_3__["PodcastListingComponent"],
                    _components_genre_picker_genre_picker_component__WEBPACK_IMPORTED_MODULE_5__["GenrePickerComponent"],
                ],
                exports: [
                    _components_podcast_listing_podcast_listing_component__WEBPACK_IMPORTED_MODULE_3__["PodcastListingComponent"],
                    _components_genre_picker_genre_picker_component__WEBPACK_IMPORTED_MODULE_5__["GenrePickerComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-podcasts-podcasts-module */ "src-app-podcasts-podcasts-module").then(__webpack_require__.bind(null, /*! src/app/podcasts/podcasts.module */ "oBGg")).then(m => m.PodcastsModule),
    },
    {
        path: 'podcasts',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-podcasts-podcasts-module */ "src-app-podcasts-podcasts-module").then(__webpack_require__.bind(null, /*! src/app/podcasts/podcasts.module */ "oBGg")).then(m => m.PodcastsModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map