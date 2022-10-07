(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-podcasts-podcasts-module"],{

/***/ "5C9u":
/*!*******************************************************************!*\
  !*** ./src/app/podcasts/list-view/podcast-list-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: PodcastListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastListViewComponent", function() { return PodcastListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_podcast_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/podcast.actions */ "SJ6y");
/* harmony import */ var src_app_store_podcast_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/podcast.selectors */ "YgWW");
/* harmony import */ var _core_services_podcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/podcast.service */ "1wSx");
/* harmony import */ var _shared_components_genre_picker_genre_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/components/genre-picker/genre-picker.component */ "ONFj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_podcast_listing_podcast_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@shared/components/podcast-listing/podcast-listing.component */ "2sqw");











function PodcastListViewComponent_podcast_listing_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "podcast-listing", 9);
} if (rf & 2) {
    const podcast_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("podcast", podcast_r1)("index", ctx_r0.getRankingForIndex(i_r2));
} }
class PodcastListViewComponent {
    constructor(podcastService, store) {
        this.podcastService = podcastService;
        this.store = store;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"];
        this.podcasts = [];
        this.genres = [];
        this.offset = 0;
        this.total_pages = 0;
        this.page_number = 0;
        console.log('got here');
    }
    get has_prev() { return this.page_number > 0; }
    get has_next() { return (this.total_pages - this.page_number) > 1; }
    ngOnInit() {
        /**
         * The list will be reloaded when the state change
         */
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_store_podcast_selectors__WEBPACK_IMPORTED_MODULE_4__["getPodcastState"])),
            this.podcastService.getPodcastGenres(),
        ]).subscribe(([podcastListState, genres]) => {
            this.genres = genres;
            let podcasts = [];
            let total_pages = 0;
            let offset = 0;
            const { genre_id, page_number, page_size } = podcastListState;
            if (genres.length > 0) {
                var genrePodcasts = genres.filter(g => g.id == genre_id);
                if (genrePodcasts.length > 0) {
                    offset = page_number * page_size;
                    const offset_limit = offset + page_size;
                    podcasts = genrePodcasts[0].podcasts;
                    if ((podcasts === null || podcasts === void 0 ? void 0 : podcasts.length) > 0) {
                        total_pages = Math.ceil((podcasts === null || podcasts === void 0 ? void 0 : podcasts.length) / page_size);
                        podcasts = podcasts.slice(offset, offset_limit);
                    }
                }
            }
            this.page_number = page_number;
            this.total_pages = total_pages;
            this.offset = offset;
            this.podcasts = podcasts;
        }));
    }
    getRankingForIndex(index) {
        return (index + this.offset + 1);
    }
    goPrev() {
        this.store.dispatch(Object(src_app_store_podcast_actions__WEBPACK_IMPORTED_MODULE_3__["decrementPodcastGenrePage"])());
    }
    goNext() {
        this.store.dispatch(Object(src_app_store_podcast_actions__WEBPACK_IMPORTED_MODULE_3__["incrementPodcastGenrePage"])());
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
PodcastListViewComponent.ɵfac = function PodcastListViewComponent_Factory(t) { return new (t || PodcastListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_podcast_service__WEBPACK_IMPORTED_MODULE_5__["PodcastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
PodcastListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastListViewComponent, selectors: [["podcasts-list"]], decls: 10, vars: 6, consts: [[1, "podcasts__container"], [1, "podcasts__container__genre__picker", 3, "genres"], [3, "podcast", "index", 4, "ngFor", "ngForOf"], [1, "podcasts__container__pagination"], [1, "podcasts__container__pagination__button", "podcasts__container__pagination__button__prev"], [1, "button", "prev", 3, "disabled", "click"], [1, "podcasts__container__pagination__page", "gradient__text"], [1, "podcasts__container__pagination__button", "podcasts__container__pagination__button__next"], [1, "button", "next", 3, "disabled", "click"], [3, "podcast", "index"]], template: function PodcastListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "genre-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PodcastListViewComponent_podcast_listing_2_Template, 1, 2, "podcast-listing", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PodcastListViewComponent_Template_button_click_5_listener() { return ctx.has_prev && ctx.goPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PodcastListViewComponent_Template_button_click_9_listener() { return ctx.has_next && ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("genres", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.podcasts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.has_prev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.page_number + 1, " of ", ctx.total_pages, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.has_next);
    } }, directives: [_shared_components_genre_picker_genre_picker_component__WEBPACK_IMPORTED_MODULE_6__["GenrePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_components_podcast_listing_podcast_listing_component__WEBPACK_IMPORTED_MODULE_8__["PodcastListingComponent"]], styles: [".podcasts__container {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 30px 1em 100px 1em;\n}\n@media screen and (min-width: 810px) {\n  .podcasts__container {\n    align-items: center;\n    padding: 30px 0 100px 0;\n  }\n}\n.podcasts__container__genre__picker {\n  margin: auto;\n}\n.podcasts__container__pagination {\n  flex-grow: 1;\n  width: 100%;\n  margin-top: 30px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n@media screen and (min-width: 810px) {\n  .podcasts__container__pagination {\n    width: 810px;\n  }\n}\n.podcasts__container__pagination__page {\n  justify-self: center;\n}\n.podcasts__container__pagination__button {\n  display: inline-block;\n}\n.podcasts__container__pagination__button__next {\n  justify-self: end;\n}\n.podcasts__container__pagination__button__prev {\n  justify-self: start;\n}\n.podcasts__container__pagination__button .button {\n  height: 100%;\n  background: none;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  padding: 10px;\n  padding-right: 1em;\n  background-size: 2em;\n  border: none;\n}\n.podcasts__container__pagination__button .button:disabled {\n  opacity: 0.5;\n}\n.podcasts__container__pagination__button .button:disabled {\n  opacity: 0.5;\n}\n.podcasts__container__pagination__button .button.prev {\n  background-image: url('/angular_sr_a1.4/triangle-prev.svg');\n}\n.podcasts__container__pagination__button .button.next {\n  background-image: url('/angular_sr_a1.4/triangle-next.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2RjYXN0LWxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUlJO0VBTkY7SUFPSSxtQkFBQTtJQUNBLHVCQUFBO0VBREo7QUFDRjtBQUdJO0VBQ0UsWUFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQ3RCSTtFRHdCSixhQUFBO0VBQ0Esa0NBQUE7QUFKTjtBQU1NO0VBVEY7SUFVSSxZQUFBO0VBSE47QUFDRjtBQUtNO0VBQ0Usb0JBQUE7QUFIUjtBQU1NO0VBQ0UscUJBQUE7QUFKUjtBQWNRO0VBQ0UsaUJBQUE7QUFaVjtBQWVRO0VBQ0UsbUJBQUE7QUFiVjtBQWdCUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFkVjtBQWdCVTtFQUNFLFlBQUE7QUFkWjtBQWlCVTtFQUNFLFlBQUE7QUFmWjtBQWtCVTtFQUNFLDJEQUFBO0FBaEJaO0FBbUJVO0VBQ0UsMkRBQUE7QUFqQloiLCJmaWxlIjoicG9kY2FzdC1saXN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi5wb2RjYXN0cyB7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHBhZGRpbmc6ICRzcGFjaW5nIDFlbSAxMDBweCAxZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MTBweCkge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6ICRzcGFjaW5nIDAgMTAwcHggMDtcbiAgICB9XG5cbiAgICAmX19nZW5yZV9fcGlja2VyIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAmX19wYWdpbmF0aW9uIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBtYXJnaW4tdG9wOiAkc3BhY2luZztcblxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxMHB4KSB7XG4gICAgICAgIHdpZHRoOiA4MTBweDtcbiAgICAgIH1cblxuICAgICAgJl9fcGFnZSB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAmX19idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb250cmFzdDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJGFjY2VudC1jb250cmFzdCwgJGFjY2VudC1wcmltYXJ5KTtcblxuICAgICAgICAvLyB3aWR0aDogNWVtO1xuICAgICAgICAvLyBoZWlnaHQ6IDVlbTtcbiAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDVlbTtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICZfX25leHQge1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fcHJldiB7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDJlbTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnByZXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtcHJldi5zdmcnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLm5leHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJpYW5nbGUtbmV4dC5zdmcnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJHNwYWNpbmc6IDMwcHg7XG5cbiR3aGl0ZTogI2ZmZjtcbiRwcmltYXJ5OiAjNEUxMDVDO1xuJGFjY2VudC1jb250cmFzdDogI0ZENzQxQjtcbiRhY2NlbnQtcHJpbWFyeTogI0EzMDBCQjtcblxuJGxpbmstY29sb3I6ICM3Nzc7XG4kbGluay1ob3Zlci1jb2xvcjogI0ZDNzMxQztcblxuJGJveC1zaGFkb3ctYmx1cjogMTBweDtcbiRib3gtc2hhZG93LXJlZDogMTY1O1xuJGJveC1zaGFkb3ctYmx1ZTogMjtcbiRib3gtc2hhZG93LWdyZWVuOiAxODY7XG4kYm94LXNoYWRvdy1hbHBoYTogLjI1O1xuXG4kcHJpbWFyeS1mb250LXN0eWxlOiAnU3BhY2VNb25vJywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udC1zdHlsZTogJ1dvcmtTYW5zJzsiXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'podcasts-list',
                templateUrl: './podcast-list-view.component.html',
                styleUrls: ['./podcast-list-view.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _core_services_podcast_service__WEBPACK_IMPORTED_MODULE_5__["PodcastService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "J2JA":
/*!*****************************************************!*\
  !*** ./src/app/podcasts/podcasts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PodcastsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastsRoutingModule", function() { return PodcastsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_view_podcast_list_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-view/podcast-list-view.component */ "5C9u");





const routes = [
    {
        path: '',
        component: _list_view_podcast_list_view_component__WEBPACK_IMPORTED_MODULE_2__["PodcastListViewComponent"]
    }
];
class PodcastsRoutingModule {
}
PodcastsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PodcastsRoutingModule });
PodcastsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PodcastsRoutingModule_Factory(t) { return new (t || PodcastsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PodcastsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PodcastsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "oBGg":
/*!*********************************************!*\
  !*** ./src/app/podcasts/podcasts.module.ts ***!
  \*********************************************/
/*! exports provided: PodcastsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastsModule", function() { return PodcastsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@shared/shared.module */ "pk6O");
/* harmony import */ var _list_view_podcast_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-view/podcast-list-view.component */ "5C9u");
/* harmony import */ var _podcasts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./podcasts-routing.module */ "J2JA");






class PodcastsModule {
}
PodcastsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PodcastsModule });
PodcastsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PodcastsModule_Factory(t) { return new (t || PodcastsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _podcasts_routing_module__WEBPACK_IMPORTED_MODULE_4__["PodcastsRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PodcastsModule, { declarations: [_list_view_podcast_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PodcastListViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _podcasts_routing_module__WEBPACK_IMPORTED_MODULE_4__["PodcastsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PodcastsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _podcasts_routing_module__WEBPACK_IMPORTED_MODULE_4__["PodcastsRoutingModule"],
                ],
                declarations: [
                    _list_view_podcast_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PodcastListViewComponent"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-podcasts-podcasts-module-es2015.js.map