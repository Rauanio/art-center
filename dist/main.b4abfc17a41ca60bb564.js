/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");





var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  pagination: {
    el: '.swiper-pagination'
  },
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
var menuButton = document.querySelector('.btn__menu');
var menuButtonText = document.querySelector('.btn__menu-text');
var burgerMenu = document.querySelector('.burger');
function toggleMenu() {
  burgerMenu.classList.toggle('burger__visible');
  menuButton.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
  burgerMenu.classList.contains('burger__visible') ? menuButtonText.textContent = 'Закрыть' : menuButtonText.textContent = 'Меню';
}
menuButton.addEventListener('click', toggleMenu);
var elements = document.querySelectorAll('.rolling-text');
elements.forEach(function (element) {
  var innerText = element.innerText;
  element.innerHTML = '';
  var textContainer = document.createElement('div');
  textContainer.classList.add('rolling__block');
  var span = document.createElement('span');
  span.innerText = innerText;
  span.classList.add('word');
  textContainer.appendChild(span);
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/jeko-bold.ttf */ "./src/fonts/jeko-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Raleway-SemiBold.ttf */ "./src/fonts/Raleway-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Based on
 *
 *  - reset.css 2.0 by Eric Meyer
      (public domain)
 *    http://meyerweb.com/eric/tools/css/reset/
 *
 *  - normalize.css 8.0.1 by Nicolas Gallagher and Jonathan Neal
 *    (licensed under MIT)
 *    https://github.com/necolas/normalize.css
 *
 *  - Reboot from Bootstrap 4.5.3
 *    (licensed under MIT)
 *    https://github.com/twbs/bootstrap
 */
/**
 * IE10+ doesn't honor \`<meta name="viewport">\` in some cases
 */
/**
 * general reset
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, main {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/**
 * HTML5 display-role reset for older browsers
 */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section,
main, summary {
  display: block;
}

/**
 * inherit box model for all elements
 */
*,
*::before,
*::after {
  box-sizing: inherit;
}

/**
 * html root rules
 * 1. set border-box for inheritance
 * 2. avoid 300ms click delay on touch devices that support the \`touch-action\`
 *    CSS property
 * 3. Prevent adjustments of font size after orientation changes in IE, on
 *    Windows Phone and iOS.
 * 4. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,
 *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.
 * 5. Change the default tap highlight to be completely transparent in iOS.
 */
html {
  /* 1 */
  box-sizing: border-box;
  /* 2 */
  touch-action: manipulation;
  /* 3 */
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  /* 4 */
  -ms-overflow-style: scrollbar;
  /* 5 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/**
 * body rules
 * 1. reset line-height to 1
 * 2. set base font-family to sans-serif
 * 3. Set an explicit initial text-align value so that we can later use the
 *    \`inherit\` value on things like \`<th>\` elements.
 */
body {
  /* 1 */
  line-height: 1;
  /* 2 */
  font-family: sans-serif;
  /* 3 */
  text-align: left;
}

/**
 * Future-proof rule: in browsers that support :focus-visible, suppress the focus outline
 * on elements that programmatically receive focus but wouldn't normally show a visible
 * focus outline. In general, this would mean that the outline is only applied if the
 * interaction that led to the element receiving programmatic focus was a keyboard interaction,
 * or the browser has somehow determined that the user is primarily a keyboard user and/or
 * wants focus outlines to always be presented.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
 * and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/
 */
[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

/**
 * Lists
 */
ol, ul {
  list-style: none;
}

/**
 * Quotes
 */
blockquote, q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: "";
  content: none;
}

/**
 * Tables
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption {
  caption-side: bottom;
}

/**
 * Table Headers
 * 1. Matches default \`<td>\` alignment by inheriting from the \`<body>\`, or the
 *    closest parent with a set \`text-align\`.
 * 2. Fix alignment for Safari
 */
th {
  /* 1 */
  text-align: inherit;
  /* 2 */
  text-align: -webkit-match-parent;
}

/**
 * Horizontal Lines
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  /* 1 */
  box-sizing: content-box;
  height: 0;
  /* 2 */
  overflow: visible;
}

/**
 * Preformatted Text
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Don't allow content to break outside
 * 3. We have @viewport set which causes scrollbars to overlap content in IE11
 *    and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to
 *    counteract.
 */
pre,
code,
kbd,
samp {
  /* 1 */
  font-family: monospace, monospace;
}

pre {
  /* 2 */
  overflow: auto;
  /* 3 */
  -ms-overflow-style: scrollbar;
}

/**
 * Links
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */
a {
  /* 1 */
  background-color: transparent;
  /* 2 */
  -webkit-text-decoration-skip: objects;
}

/**
 * 1. Remove the bottom border in Chrome 57- and Firefox 39-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 * 3. Add explicit cursor to indicate changed behavior.
 * 4. Prevent the text-decoration to be skipped.
 */
abbr[title] {
  /* 1 */
  border-bottom: 0;
  /* 2 */
  text-decoration: underline;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
  /* 3 */
  cursor: help;
  /* 4 */
  -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
}

address {
  font-style: normal;
  line-height: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/**
 * Prevent \`em\` being affected from global reset
 */
em {
  font-style: italic;
}

/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/**
 * Hide SVG overflow in IE
 */
svg:not(:root) {
  overflow: hidden;
}

/**
 * Remove the default \`border-radius\` that macOS Chrome adds.
 * Details at https://github.com/twbs/bootstrap/issues/24093
 */
button {
  border-radius: 0;
}

/**
 * Work around a Firefox/IE bug where the transparent \`button\` background
 * results in a loss of the default \`button\` focus styles.
 * Credit: https://github.com/suitcss/base/
 */
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

/**
 * form element resets
 * 1. Remove the margin in Firefox and Safari
 * 2. inherit font rules
 */
input,
button,
select,
optgroup,
textarea {
  /* 1 */
  margin: 0;
  /* 2 */
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type=reset],
[type=submit],
[type=button] {
  /* 2 */
  -webkit-appearance: button;
}

/**
 * Remove the default appearance of temporal inputs to avoid a Mobile Safari
 * bug where setting a custom line-height prevents text from being vertically
 * centered within the input.
 * See https://bugs.webkit.org/show_bug.cgi?id=139848
 * and https://github.com/twbs/bootstrap/issues/11266
 */
input[type=date],
input[type=time],
input[type=datetime-local],
input[type=month] {
  -webkit-appearance: listbox;
}

/**
 * 1. Remove the default vertical scrollbar in IE.
 * 2. Textareas should really only resize vertically so they don't break their
 *    (horizontal) containers.
 */
textarea {
  overflow: auto;
  resize: vertical;
}

/**
 * Show the overflow in IE.
 */
button,
input {
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 */
button,
select {
  text-transform: none;
}

/**
 * Set the cursor for non-\`<button>\` buttons
 * Details at https://github.com/twbs/bootstrap/pull/30562
 */
[role=button] {
  cursor: pointer;
}

/**
 * Remove the inheritance of word-wrap in Safari.
 * See https://github.com/twbs/bootstrap/issues/24990
 */
select {
  word-wrap: normal;
}

/**
 * Remove inner border and padding from Firefox, but don't restore the outline
 * like Normalize.
 */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * 1. Add the correct box sizing in IE 10-
 * 2. Remove the padding in IE 10-
 */
input[type=radio],
input[type=checkbox] {
  /* 1 */
  box-sizing: border-box;
  /* 2 */
  padding: 0;
}

/**
 * Suppress the focus outline on elements that cannot be accessed via keyboard.
 * This prevents an unwanted focus outline from appearing around elements that
 * might still respond to pointer events.
 * Credit: https://github.com/suitcss/base
 */
[tabindex="-1"]:focus {
  outline: 0 !important;
}

/**
 * Browsers set a default \`min-width: min-content\` on fieldsets,
 * unlike e.g. \`<div>\`s, which have \`min-width: 0\` by default.
 * So we reset that to ensure fieldsets behave more like a standard block element.
 * See https://github.com/twbs/bootstrap/issues/12359
 * and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
 */
fieldset {
  min-width: 0;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Set display to block for all browsers
 */
legend {
  /* 1 */
  max-width: 100%;
  white-space: normal;
  /* 2 */
  color: inherit;
  /* 3 */
  display: block;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * 1. Remove the default vertical scrollbar in IE 10+.
 * 2. Textareas should really only resize vertically so they don't break their
 *    (horizontal) containers.
 */
textarea {
  /* 1 */
  overflow: auto;
  /* 2 */
  resize: vertical;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type=checkbox],
[type=radio] {
  /* 1 */
  box-sizing: border-box;
  /* 2 */
  padding: 0;
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type=search] {
  /* 1 */
  -webkit-appearance: textfield;
  /* 2 */
  outline-offset: -2px;
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */
::-webkit-file-upload-button {
  /* 1 */
  -webkit-appearance: button;
  /* 2 */
  font: inherit;
}

/**
 * Correct element display for output
 */
output {
  display: inline-block;
}

/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Always hide an element with the \`hidden\` HTML attribute (from PureCSS).
 * Needed for proper display in IE 10-.
 */
[hidden] {
  display: none;
}

/**
 * adds resets for buttons that are not covered by reset-and-normalize base
 */
[role=button],
input[type=button],
input[type=reset],
input[type=submit],
button {
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  color: inherit;
  text-align: inherit;
  background: none;
  -webkit-appearance: button;
     -moz-appearance: button;
          appearance: button;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
[role=button]:not(:disabled),
input[type=button]:not(:disabled),
input[type=reset]:not(:disabled),
input[type=submit]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
[role=button]:-moz-focusring,
input[type=button]:-moz-focusring,
input[type=reset]:-moz-focusring,
input[type=submit]:-moz-focusring,
button:-moz-focusring {
  outline: none;
}
[role=button]:focus,
input[type=button]:focus,
input[type=reset]:focus,
input[type=submit]:focus,
button:focus {
  outline: none;
}

/**
 * adds resets for links that are not covered by reset-and-normalize base
 */
a {
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
}
a:-moz-focusring {
  outline: none;
}
a:focus {
  outline: none;
}

body {
  font-family: Jeko-Bold, Raleway;
  background-color: #f7f7f8;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #3a3943;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.no-scroll {
  overflow: hidden;
}

.container {
  flex: 1;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
}

@media (min-width: 768px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
@media (min-width: 1440px) {
  .container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
  }
}
@font-face {
  font-family: Jeko-Bold;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: Raleway;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
.footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
  flex: 0;
  width: 100%;
}
.footer__menu, .footer__schedule, .footer__contact {
  padding: 24px;
  border: 1px solid #3a3943;
  text-transform: uppercase;
}
.footer__menu {
  display: grid;
  grid-gap: 32px;
  gap: 32px;
}
.footer__menu-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__menu-square {
  width: 24px;
  height: 24px;
  background-color: #3a3943;
}
.footer__top-wrapper {
  display: grid;
  grid-gap: 8px;
  gap: 8px;
}
.footer__bottom-wrapper {
  display: grid;
  grid-gap: 8px;
  gap: 8px;
}
.footer__schedule {
  padding: 24px;
  border: 1px solid #3a3943;
  text-transform: uppercase;
}
.footer__schedule-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__schedule-item {
  align-items: baseline;
  display: flex;
  gap: 16px;
}
.footer__schedule-line {
  flex-grow: 1;
  height: 0px;
  opacity: 0.1;
  border: 1px solid #3a3943;
}
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.footer__contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__contact-messangers {
  display: flex;
  gap: 8px;
}
.footer__contact-messanger {
  border: 1px solid #3a3943;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__contact-messanger img {
  display: block;
  max-width: 24px;
  height: auto;
}
.footer__terms {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 24px;
}
.footer__terms-copyright {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__terms-img {
  max-width: 143px;
  height: auto;
}

@media (min-width: 768px) {
  .footer {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 16px;
    gap: 16px;
  }
  .footer__menu, .footer__schedule, .footer__contact {
    padding: 32px;
  }
  .footer__bottom-wrapper {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .footer__menu {
    grid-template-columns: repeat(3, auto);
    -moz-column-gap: 16px;
         column-gap: 16px;
  }
  .footer__schedule-item, .footer__contact-info {
    font-size: 16px;
    line-height: 16px;
  }
  .footer__terms {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }
  .footer__terms-copyright {
    flex-direction: row;
  }
}
@media (min-width: 1440px) {
  .footer {
    padding: 0 24px;
    gap: 16px;
  }
  .footer__top-wrapper {
    grid-template-columns: 2fr 1fr;
    gap: 16px;
  }
  .footer__bottom-wrapper {
    grid-template-columns: 1fr;
  }
  .footer__contact {
    flex-direction: row;
    justify-content: space-between;
  }
  .footer__menu-square {
    align-self: flex-end;
  }
  .footer__menu-items {
    font-size: 16px;
    line-height: 16px;
  }
}
.header {
  padding: 24px 16px;
  width: 100%;
  background-color: #f7f7f8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn__menu {
  padding: 0 16px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn__menu .btn__icon {
  position: relative;
  width: 24px;
  height: 8px;
}
.btn__menu .btn__icon::after {
  content: "";
  position: absolute;
  height: 1.5px;
  width: 24px;
  background-color: #3a3943;
  box-shadow: 0 7px 0 0 #3a3943;
  transition: transform 0.3s ease;
}
.btn__menu .btn__icon::before {
  content: "";
  position: absolute;
  height: 0px;
  width: 24px;
  background-color: #3a3943;
  transform: rotate(0deg);
  transition: transform 0.3s ease, top 0.3s ease, height 0.3s ease;
}
.btn__menu.is-open .btn__icon::after {
  transform: rotate(45deg);
  box-shadow: 0 0 0 0;
  top: 3px;
}
.btn__menu.is-open .btn__icon::before {
  height: 1.5px;
  top: 3px;
  transform: rotate(-45deg);
}

.menu {
  display: none;
}

@media (min-width: 768px) {
  .header {
    padding: 16px;
  }
  .header__wrapper svg {
    width: 152px;
    height: 48px;
  }
  .btn__menu {
    height: 48px;
    padding: 0 24px;
    gap: 16px;
    font-size: 16px;
    line-height: 16px;
  }
  .btn__menu .btn__icon {
    height: 9px;
  }
  .btn__menu .btn__icon::after {
    height: 2px;
  }
  .btn__menu.is-open .btn__icon::before {
    height: 2px;
    top: 3px;
    transform: rotate(-45deg);
  }
}
@media (min-width: 1440px) {
  .header {
    padding: 24px;
    max-width: 1440px;
    margin: 0 auto;
  }
  .menu {
    display: flex;
    gap: 56px;
    align-items: center;
    font-size: 18px;
    line-height: 18px;
  }
  .btn__menu {
    height: 48px;
    padding: 0 24px;
    gap: 16px;
    font-size: 16px;
    line-height: 16px;
  }
  .btn__menu .btn__icon {
    height: 9px;
  }
  .btn__menu .btn__icon::after {
    height: 2px;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-slide img {
  display: block;
  width: 100%;
  max-height: 176px;
  -o-object-position: center;
     object-position: center;
  transition: all 0.3s ease;
}
.swiper-text {
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  color: #f7f7f8;
}
.swiper-title {
  font-size: 24px;
  line-height: 28.8px;
}
.swiper-pagination-bullet {
  background-color: transparent;
  border: 1px solid #f7f7f8;
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  background-color: #f7f7f8;
  border-radius: 0;
}
.swiper-pagination-bullets {
  display: flex;
  padding: 0 24px 24px 24px;
}
.swiper-text-wrapper {
  display: flex;
  justify-content: space-between;
}
.swiper-arrow-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 24px;
  color: #f7f7f8;
}
.swiper-arrow-wrapper svg {
  transition: all 0.6s ease;
}
.swiper-image-wrapper {
  width: 100%;
  position: relative;
  display: inline-block;
}
.swiper-square {
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #f7f7f8;
  bottom: 20px;
  left: 16px;
}
.swiper-triangle {
  position: absolute;
  top: 8px;
  right: 8px;
  max-width: 64px;
  height: auto;
}

@media (min-width: 768px) {
  .swiper-slide img {
    max-height: 361px;
  }
  .swiper-text {
    gap: 24px;
    padding: 32px;
  }
  .swiper-title {
    font-size: 32px;
    line-height: 38.4px;
  }
  .swiper-paragraph {
    font-size: 16px;
    line-height: 16px;
  }
  .swiper-triangle {
    max-width: 120px;
  }
  .swiper-triangle svg {
    width: 120px;
    height: 120px;
  }
}
@media (min-width: 1440px) {
  .swiper-slide img {
    max-height: 395px;
  }
  .swiper:hover .swiper-arrow-wrapper svg {
    transition: all 0.6s ease;
    transform: rotate(-90deg);
  }
  .swiper-title {
    font-size: 40px;
    line-height: 48px;
  }
  .swiper-triangle {
    max-width: 138px;
  }
  .swiper-arrow-wrapper svg {
    width: 32px;
    height: 32px;
  }
  .swiper-triangle svg {
    width: 138px;
    height: 138px;
  }
}
.btn {
  color: #3a3943;
  border: 1px solid #3a3943;
  text-transform: uppercase;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn__type {
  padding: 0 40px;
  height: 56px;
}

@media (min-width: 768px) {
  .btn__type {
    font-size: 16px;
    line-height: 16px;
    height: 64px;
  }
}
.rolling-text {
  display: inline-block;
  overflow: hidden;
  font-size: 16px;
  line-height: 16px;
  display: none;
}

@media (min-width: 1440px) {
  .rolling-text {
    font-size: 18px;
    line-height: 20px;
    height: 20px;
    display: block;
  }
  .rolling-text:hover .word {
    transform: translateY(-100%);
  }
  .rolling-text .rolling__block:last-child {
    color: #3a3943;
  }
  .rolling-text .word {
    display: inline-block;
    transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
  }
  .main__grid-card .rolling-text {
    font-size: 28px;
    line-height: 30px;
    height: 30px;
  }
  .main__grid-card .word {
    transition: transform 0.6s ease;
  }
  .main__grid-card .rolling__block:last-child {
    color: #f7f7f8;
  }
  .main__grid-card:hover .rolling-text .word,
  .main__grid-card.play .rolling-text .word {
    transform: translateY(-100%);
  }
}
.main {
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  margin-top: 88px;
}
.main__grid {
  display: grid;
  grid-gap: 8px;
  gap: 8px;
}
.main__grid-cards {
  display: grid;
  grid-gap: 8px;
  gap: 8px;
}
.main__grid-card {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 8px;
  min-height: 200px;
  transition: all 0.6s ease;
}
.main__grid-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  font-size: 20px;
  line-height: 20px;
  color: var(--hover-color);
  transition: all 0.6s ease;
}
.main__grid-img {
  width: 48px;
  height: 48px;
  background-color: var(--hover-color);
  -webkit-mask: var(--card-svg) no-repeat center;
          mask: var(--card-svg) no-repeat center;
  transition: all 0.6s ease;
}
.main__grid-arrow {
  padding: 24px;
  align-self: flex-end;
}
.main__grid-arrow svg {
  color: var(--hover-icon);
  transition: all 0.6s ease;
}

.block {
  min-width: 0;
  height: 360px;
  padding: 4px;
  background-color: #195734;
  position: sticky;
}

.application {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #3a3943;
  padding: 24px;
  min-height: 300px;
}
.application__text {
  max-width: 280px;
  font-size: 20px;
  line-height: 28px;
  padding: 0px 24px 0px 0px;
}
.application__icon {
  position: absolute;
  top: 8px;
  right: 8px;
}

.burger {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #f7f7f8;
  padding: 0 8px 16px 8px;
  height: calc(100vh - 88px);
  overflow-y: auto;
}
.burger__visible {
  display: flex;
}
.burger__menu {
  display: grid;
  width: 100%;
  grid-gap: 16px;
  gap: 16px;
}
.burger__menu-cards1, .burger__menu-cards2 {
  display: grid;
  grid-gap: 8px;
  gap: 8px;
}
.burger__menu-cards1 {
  margin-bottom: -8px;
}
.burger__menu-grid {
  display: grid;
  grid-gap: 8px;
  gap: 8px;
}
.burger__menu-card {
  padding: 24px;
  transition: all 0.6s ease;
}
.burger__menu-text {
  transition: all 0.6s ease;
  font-size: 18px;
  line-height: 18px;
  color: var(--hover-color);
}

.decor {
  width: 100%;
  height: 224px;
  position: relative;
  display: none;
}
.decor__square {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 28px;
  background-color: #3a3943;
}
.decor__triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 112px;
}

.hidden {
  display: none;
}

@media (min-width: 768px) {
  .main {
    margin-top: 80px;
  }
  .main__grid-cards {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .main__grid-card {
    min-height: 240px;
  }
  .main__grid-text {
    padding: 24px;
    font-size: 24px;
    line-height: 24px;
  }
  .main__grid-img {
    width: 56px;
    height: 56px;
  }
  .application {
    padding: 32px;
  }
  .application__text {
    max-width: 560px;
    font-size: 24px;
    line-height: 33.6px;
    padding: 0px 24px 0px 0px;
  }
  .application__icon svg {
    width: 120px;
    height: 120px;
  }
  .burger {
    padding: 16px;
    height: calc(100vh - 80px);
  }
  .burger__menu {
    grid-template-columns: repeat(2, 1fr);
  }
  .burger__menu-cards1, .burger__menu-cards2 {
    gap: 16px;
  }
  .burger__menu-cards1 {
    grid-area: 1/1/2/2;
    margin: 0;
  }
  .burger__menu-cards1 {
    grid-area: 2/1/3/2;
  }
  .burger__menu-text {
    font-size: 20px;
    line-height: 20px;
  }
  .burger__menu-grid {
    gap: 16px;
  }
  .burger__footer-menu {
    grid-template-columns: 1fr;
    grid-area: 1/2/3/3;
    gap: 0;
  }
  .footer__menu-square {
    display: none;
  }
  .block {
    height: 656px;
  }
  .decor {
    display: block;
    grid-column-start: span 2;
  }
}
@media (min-width: 1440px) {
  .main {
    margin-top: 96px;
  }
  .main__grid {
    grid-template-columns: 1.4fr 1fr;
    gap: 16px;
  }
  .main__grid-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .main__grid-card {
    min-height: 300px;
  }
  .main__grid-card:hover {
    background-color: var(--hover-background);
    transition: all 0.6s ease;
  }
  .main__grid-card:hover .main__grid-text, .main__grid-card:hover .main__grid-arrow svg {
    color: #f7f7f8;
    transition: all 0.6s ease;
  }
  .main__grid-card:hover .main__grid-arrow svg {
    transition: all 0.6s ease;
    transform: rotate(-90deg);
  }
  .main__grid-card:hover .main__grid-img {
    transition: all 0.6s ease;
    background: #f7f7f8;
  }
  .main__grid-paragraph {
    display: none;
  }
  .main__grid-img {
    width: 64px;
    height: 64px;
  }
  .main__grid-arrow svg {
    width: 32px;
    height: 32px;
  }
  .main__grid-text p {
    font-size: 28px;
    line-height: 28px;
  }
  .application {
    min-height: 310px;
  }
  .application__text {
    max-width: 500px;
    font-size: 28px;
    line-height: 33.6px;
  }
  .application__icon svg {
    width: 144px;
    height: 144px;
  }
  .btn__application {
    align-self: flex-start;
  }
  .burger {
    padding: 0px 24px 24px 24px;
    height: auto;
  }
  .burger__menu {
    grid-template-columns: 40% 45% 13%;
  }
  .burger__menu-card {
    padding: 32px;
  }
  .burger__menu-card:hover {
    background-color: var(--hover-background);
    transition: all 0.6s ease;
  }
  .burger__menu-card:hover .burger__menu-text {
    color: #f7f7f8;
    transition: all 0.6s ease;
  }
  .burger__menu-cards1 {
    grid-area: 1/1/3/2;
  }
  .burger__menu-cards2 {
    grid-area: 3/1/5/2;
  }
  .burger__menu-text {
    font-size: 24px;
    line-height: 24px;
  }
  .burger__footer-menu {
    grid-template-columns: 1fr 1fr;
    grid-area: 1/2/3/3;
  }
  .burger__footer-schedule {
    grid-area: 3/2/4/3;
  }
  .burger__footer-contact {
    grid-area: 4/2/5/3;
  }
  .decor {
    height: 100%;
    grid-area: 1/3/5/4;
  }
  .block {
    height: 680px;
    top: 112px;
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/css-reset-and-normalize/scss/reset-and-normalize.scss","webpack://./src/styles/styles.scss","webpack://./node_modules/css-reset-and-normalize/scss/button-reset.scss","webpack://./node_modules/css-reset-and-normalize/scss/link-reset.scss","webpack://./src/styles/_global.scss","webpack://./src/styles/_vars.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/components/footer.scss","webpack://./src/styles/components/header.scss","webpack://./src/styles/components/slider.scss","webpack://./src/styles/components/button.scss","webpack://./src/styles/components/rolling.scss","webpack://./src/styles/pages/main.scss"],"names":[],"mappings":"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","sourcesContent":["/**\n * Based on\n *\n *  - reset.css 2.0 by Eric Meyer\n      (public domain)\n *    http://meyerweb.com/eric/tools/css/reset/\n *\n *  - normalize.css 8.0.1 by Nicolas Gallagher and Jonathan Neal\n *    (licensed under MIT)\n *    https://github.com/necolas/normalize.css\n *\n *  - Reboot from Bootstrap 4.5.3\n *    (licensed under MIT)\n *    https://github.com/twbs/bootstrap\n */\n\n\n/**\n * IE10+ doesn't honor `<meta name=\"viewport\">` in some cases\n */\n\n@-ms-viewport {\n  width: device-width;\n}\n\n\n/**\n * general reset\n */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, main {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n\n/**\n * HTML5 display-role reset for older browsers\n */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section,\nmain, summary {\n  display: block;\n}\n\n\n/**\n * inherit box model for all elements\n */\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n\n/**\n * html root rules\n * 1. set border-box for inheritance\n * 2. avoid 300ms click delay on touch devices that support the `touch-action`\n *    CSS property\n * 3. Prevent adjustments of font size after orientation changes in IE, on\n *    Windows Phone and iOS.\n * 4. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,\n *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.\n * 5. Change the default tap highlight to be completely transparent in iOS.\n */\n\nhtml {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  touch-action: manipulation;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  /* 4 */\n  -ms-overflow-style: scrollbar;\n  /* 5 */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n\n/**\n * body rules\n * 1. reset line-height to 1\n * 2. set base font-family to sans-serif\n * 3. Set an explicit initial text-align value so that we can later use the\n *    `inherit` value on things like `<th>` elements.\n */\n\nbody {\n  /* 1 */\n  line-height: 1;\n  /* 2 */\n  font-family: sans-serif;\n  /* 3 */\n  text-align: left;\n}\n\n/**\n * Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n * on elements that programmatically receive focus but wouldn't normally show a visible\n * focus outline. In general, this would mean that the outline is only applied if the\n * interaction that led to the element receiving programmatic focus was a keyboard interaction,\n * or the browser has somehow determined that the user is primarily a keyboard user and/or\n * wants focus outlines to always be presented.\n *\n * See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n * and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n */\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n\n/**\n * Lists\n */\n\nol, ul {\n  list-style: none;\n}\n\n\n/**\n * Quotes\n */\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\n\n/**\n * Tables\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ncaption {\n  caption-side: bottom;\n}\n\n\n/**\n * Table Headers\n * 1. Matches default `<td>` alignment by inheriting from the `<body>`, or the\n *    closest parent with a set `text-align`.\n * 2. Fix alignment for Safari\n */\n\nth {\n  /* 1 */\n  text-align: inherit;\n  /* 2 */\n  text-align: -webkit-match-parent;\n}\n\n\n/**\n * Horizontal Lines\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  /* 1 */\n  box-sizing: content-box;\n  height: 0;\n  /* 2 */\n  overflow: visible;\n}\n\n\n/**\n * Preformatted Text\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Don't allow content to break outside\n * 3. We have @viewport set which causes scrollbars to overlap content in IE11\n *    and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to\n *    counteract.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  /* 1 */\n  font-family: monospace, monospace;\n}\n\npre {\n  /* 2 */\n  overflow: auto;\n  /* 3 */\n  -ms-overflow-style: scrollbar;\n}\n\n\n/**\n * Links\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  -webkit-text-decoration-skip: objects;\n}\n\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n * 3. Add explicit cursor to indicate changed behavior.\n * 4. Prevent the text-decoration to be skipped.\n */\n\nabbr[title] {\n  /* 1 */\n  border-bottom: 0;\n  /* 2 */\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  /* 3 */\n  cursor: help;\n  /* 4 */\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  font-style: normal;\n  line-height: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/**\n * Prevent `em` being affected from global reset\n */\nem {\n  font-style: italic;\n}\n\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n\n/**\n * Hide SVG overflow in IE\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n\n/**\n * Remove the default `border-radius` that macOS Chrome adds.\n * Details at https://github.com/twbs/bootstrap/issues/24093\n */\n\nbutton {\n  border-radius: 0;\n}\n\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n * Credit: https://github.com/suitcss/base/\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n\n/**\n * form element resets\n * 1. Remove the margin in Firefox and Safari\n * 2. inherit font rules\n */\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"reset\"],\n[type=\"submit\"],\n/* 1 */\n[type=\"button\"] {\n  /* 2 */\n  -webkit-appearance: button;\n}\n\n\n/**\n * Remove the default appearance of temporal inputs to avoid a Mobile Safari\n * bug where setting a custom line-height prevents text from being vertically\n * centered within the input.\n * See https://bugs.webkit.org/show_bug.cgi?id=139848\n * and https://github.com/twbs/bootstrap/issues/11266\n */\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\n\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\n\n/**\n * Show the overflow in IE.\n */\n\nbutton,\ninput {\n  overflow: visible;\n}\n\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * Set the cursor for non-`<button>` buttons\n * Details at https://github.com/twbs/bootstrap/pull/30562\n */\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n\n/**\n * Remove the inheritance of word-wrap in Safari.\n * See https://github.com/twbs/bootstrap/issues/24990\n */\n\nselect {\n  word-wrap: normal;\n}\n\n\n/**\n * Remove inner border and padding from Firefox, but don't restore the outline\n * like Normalize.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n\n/**\n * 1. Add the correct box sizing in IE 10-\n * 2. Remove the padding in IE 10-\n */\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n\n/**\n * Suppress the focus outline on elements that cannot be accessed via keyboard.\n * This prevents an unwanted focus outline from appearing around elements that\n * might still respond to pointer events.\n * Credit: https://github.com/suitcss/base\n */\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important;\n}\n\n\n/**\n * Browsers set a default `min-width: min-content` on fieldsets,\n * unlike e.g. `<div>`s, which have `min-width: 0` by default.\n * So we reset that to ensure fieldsets behave more like a standard block element.\n * See https://github.com/twbs/bootstrap/issues/12359\n * and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n */\n\nfieldset {\n  min-width: 0;\n}\n\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Set display to block for all browsers\n */\n\nlegend {\n  /* 1 */\n  max-width: 100%;\n  white-space: normal;\n  /* 2 */\n  color: inherit;\n  /* 3 */\n  display: block;\n}\n\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n\n/**\n * 1. Remove the default vertical scrollbar in IE 10+.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\n\ntextarea {\n  /* 1 */\n  overflow: auto;\n  /* 2 */\n  resize: vertical;\n}\n\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  /* 1 */\n  -webkit-appearance: textfield;\n  /* 2 */\n  outline-offset: -2px;\n}\n\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  /* 1 */\n  -webkit-appearance: button;\n  /* 2 */\n  font: inherit;\n}\n\n\n/**\n * Correct element display for output\n */\n\noutput {\n  display: inline-block;\n}\n\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n\n/**\n * Always hide an element with the `hidden` HTML attribute (from PureCSS).\n * Needed for proper display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/**\n * Based on\n *\n *  - reset.css 2.0 by Eric Meyer\n      (public domain)\n *    http://meyerweb.com/eric/tools/css/reset/\n *\n *  - normalize.css 8.0.1 by Nicolas Gallagher and Jonathan Neal\n *    (licensed under MIT)\n *    https://github.com/necolas/normalize.css\n *\n *  - Reboot from Bootstrap 4.5.3\n *    (licensed under MIT)\n *    https://github.com/twbs/bootstrap\n */\n/**\n * IE10+ doesn't honor `<meta name=\"viewport\">` in some cases\n */\n@-ms-viewport {\n  width: device-width;\n}\n/**\n * general reset\n */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, main {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/**\n * HTML5 display-role reset for older browsers\n */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section,\nmain, summary {\n  display: block;\n}\n\n/**\n * inherit box model for all elements\n */\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/**\n * html root rules\n * 1. set border-box for inheritance\n * 2. avoid 300ms click delay on touch devices that support the `touch-action`\n *    CSS property\n * 3. Prevent adjustments of font size after orientation changes in IE, on\n *    Windows Phone and iOS.\n * 4. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,\n *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.\n * 5. Change the default tap highlight to be completely transparent in iOS.\n */\nhtml {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  touch-action: manipulation;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  /* 4 */\n  -ms-overflow-style: scrollbar;\n  /* 5 */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/**\n * body rules\n * 1. reset line-height to 1\n * 2. set base font-family to sans-serif\n * 3. Set an explicit initial text-align value so that we can later use the\n *    `inherit` value on things like `<th>` elements.\n */\nbody {\n  /* 1 */\n  line-height: 1;\n  /* 2 */\n  font-family: sans-serif;\n  /* 3 */\n  text-align: left;\n}\n\n/**\n * Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n * on elements that programmatically receive focus but wouldn't normally show a visible\n * focus outline. In general, this would mean that the outline is only applied if the\n * interaction that led to the element receiving programmatic focus was a keyboard interaction,\n * or the browser has somehow determined that the user is primarily a keyboard user and/or\n * wants focus outlines to always be presented.\n *\n * See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n * and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n */\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n/**\n * Lists\n */\nol, ul {\n  list-style: none;\n}\n\n/**\n * Quotes\n */\nblockquote, q {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\n\n/**\n * Tables\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ncaption {\n  caption-side: bottom;\n}\n\n/**\n * Table Headers\n * 1. Matches default `<td>` alignment by inheriting from the `<body>`, or the\n *    closest parent with a set `text-align`.\n * 2. Fix alignment for Safari\n */\nth {\n  /* 1 */\n  text-align: inherit;\n  /* 2 */\n  text-align: -webkit-match-parent;\n}\n\n/**\n * Horizontal Lines\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  /* 1 */\n  box-sizing: content-box;\n  height: 0;\n  /* 2 */\n  overflow: visible;\n}\n\n/**\n * Preformatted Text\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Don't allow content to break outside\n * 3. We have @viewport set which causes scrollbars to overlap content in IE11\n *    and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to\n *    counteract.\n */\npre,\ncode,\nkbd,\nsamp {\n  /* 1 */\n  font-family: monospace, monospace;\n}\n\npre {\n  /* 2 */\n  overflow: auto;\n  /* 3 */\n  -ms-overflow-style: scrollbar;\n}\n\n/**\n * Links\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  -webkit-text-decoration-skip: objects;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n * 3. Add explicit cursor to indicate changed behavior.\n * 4. Prevent the text-decoration to be skipped.\n */\nabbr[title] {\n  /* 1 */\n  border-bottom: 0;\n  /* 2 */\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  /* 3 */\n  cursor: help;\n  /* 4 */\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  font-style: normal;\n  line-height: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/**\n * Prevent `em` being affected from global reset\n */\nem {\n  font-style: italic;\n}\n\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide SVG overflow in IE\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/**\n * Remove the default `border-radius` that macOS Chrome adds.\n * Details at https://github.com/twbs/bootstrap/issues/24093\n */\nbutton {\n  border-radius: 0;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n * Credit: https://github.com/suitcss/base/\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n/**\n * form element resets\n * 1. Remove the margin in Firefox and Safari\n * 2. inherit font rules\n */\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=reset],\n[type=submit],\n[type=button] {\n  /* 2 */\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the default appearance of temporal inputs to avoid a Mobile Safari\n * bug where setting a custom line-height prevents text from being vertically\n * centered within the input.\n * See https://bugs.webkit.org/show_bug.cgi?id=139848\n * and https://github.com/twbs/bootstrap/issues/11266\n */\ninput[type=date],\ninput[type=time],\ninput[type=datetime-local],\ninput[type=month] {\n  -webkit-appearance: listbox;\n}\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\n/**\n * Show the overflow in IE.\n */\nbutton,\ninput {\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * Set the cursor for non-`<button>` buttons\n * Details at https://github.com/twbs/bootstrap/pull/30562\n */\n[role=button] {\n  cursor: pointer;\n}\n\n/**\n * Remove the inheritance of word-wrap in Safari.\n * See https://github.com/twbs/bootstrap/issues/24990\n */\nselect {\n  word-wrap: normal;\n}\n\n/**\n * Remove inner border and padding from Firefox, but don't restore the outline\n * like Normalize.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-\n * 2. Remove the padding in IE 10-\n */\ninput[type=radio],\ninput[type=checkbox] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n/**\n * Suppress the focus outline on elements that cannot be accessed via keyboard.\n * This prevents an unwanted focus outline from appearing around elements that\n * might still respond to pointer events.\n * Credit: https://github.com/suitcss/base\n */\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important;\n}\n\n/**\n * Browsers set a default `min-width: min-content` on fieldsets,\n * unlike e.g. `<div>`s, which have `min-width: 0` by default.\n * So we reset that to ensure fieldsets behave more like a standard block element.\n * See https://github.com/twbs/bootstrap/issues/12359\n * and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n */\nfieldset {\n  min-width: 0;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Set display to block for all browsers\n */\nlegend {\n  /* 1 */\n  max-width: 100%;\n  white-space: normal;\n  /* 2 */\n  color: inherit;\n  /* 3 */\n  display: block;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * 1. Remove the default vertical scrollbar in IE 10+.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\ntextarea {\n  /* 1 */\n  overflow: auto;\n  /* 2 */\n  resize: vertical;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  /* 1 */\n  -webkit-appearance: textfield;\n  /* 2 */\n  outline-offset: -2px;\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  /* 1 */\n  -webkit-appearance: button;\n  /* 2 */\n  font: inherit;\n}\n\n/**\n * Correct element display for output\n */\noutput {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Always hide an element with the `hidden` HTML attribute (from PureCSS).\n * Needed for proper display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * adds resets for buttons that are not covered by reset-and-normalize base\n */\n[role=button],\ninput[type=button],\ninput[type=reset],\ninput[type=submit],\nbutton {\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  color: inherit;\n  text-align: inherit;\n  background: none;\n  appearance: button;\n  user-select: none;\n}\n[role=button]:not(:disabled),\ninput[type=button]:not(:disabled),\ninput[type=reset]:not(:disabled),\ninput[type=submit]:not(:disabled),\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n[role=button]:-moz-focusring,\ninput[type=button]:-moz-focusring,\ninput[type=reset]:-moz-focusring,\ninput[type=submit]:-moz-focusring,\nbutton:-moz-focusring {\n  outline: none;\n}\n[role=button]:focus,\ninput[type=button]:focus,\ninput[type=reset]:focus,\ninput[type=submit]:focus,\nbutton:focus {\n  outline: none;\n}\n\n/**\n * adds resets for links that are not covered by reset-and-normalize base\n */\na {\n  color: inherit;\n  text-decoration: none;\n}\na:-moz-focusring {\n  outline: none;\n}\na:focus {\n  outline: none;\n}\n\nbody {\n  font-family: Jeko-Bold, Raleway;\n  background-color: #f7f7f8;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n  color: #3a3943;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.container {\n  flex: 1;\n  display: flex;\n  padding-inline: 8px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    padding-inline: 16px;\n  }\n}\n@media (min-width: 1440px) {\n  .container {\n    max-width: 1440px;\n    width: 100%;\n    margin: 0 auto;\n    padding-inline: 24px;\n  }\n}\n@font-face {\n  font-family: Jeko-Bold;\n  src: url(../fonts/jeko-bold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: Raleway;\n  src: url(../fonts/Raleway-SemiBold.ttf) format(\"truetype\");\n}\n.footer {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 8px;\n  flex: 0;\n  width: 100%;\n}\n.footer__menu, .footer__schedule, .footer__contact {\n  padding: 24px;\n  border: 1px solid #3a3943;\n  text-transform: uppercase;\n}\n.footer__menu {\n  display: grid;\n  gap: 32px;\n}\n.footer__menu-items {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__menu-square {\n  width: 24px;\n  height: 24px;\n  background-color: #3a3943;\n}\n.footer__top-wrapper {\n  display: grid;\n  gap: 8px;\n}\n.footer__bottom-wrapper {\n  display: grid;\n  gap: 8px;\n}\n.footer__schedule {\n  padding: 24px;\n  border: 1px solid #3a3943;\n  text-transform: uppercase;\n}\n.footer__schedule-items {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__schedule-item {\n  align-items: baseline;\n  display: flex;\n  gap: 16px;\n}\n.footer__schedule-line {\n  flex-grow: 1;\n  height: 0px;\n  opacity: 0.1;\n  border: 1px solid #3a3943;\n}\n.footer__contact {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.footer__contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__contact-messangers {\n  display: flex;\n  gap: 8px;\n}\n.footer__contact-messanger {\n  border: 1px solid #3a3943;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer__contact-messanger img {\n  display: block;\n  max-width: 24px;\n  height: auto;\n}\n.footer__terms {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 40px 24px;\n}\n.footer__terms-copyright {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__terms-img {\n  max-width: 143px;\n  height: auto;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    max-width: 1440px;\n    margin: 0 auto;\n    padding: 0 16px;\n    gap: 16px;\n  }\n  .footer__menu, .footer__schedule, .footer__contact {\n    padding: 32px;\n  }\n  .footer__bottom-wrapper {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n  .footer__menu {\n    grid-template-columns: repeat(3, auto);\n    column-gap: 16px;\n  }\n  .footer__schedule-item, .footer__contact-info {\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .footer__terms {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 0;\n  }\n  .footer__terms-copyright {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1440px) {\n  .footer {\n    padding: 0 24px;\n    gap: 16px;\n  }\n  .footer__top-wrapper {\n    grid-template-columns: 2fr 1fr;\n    gap: 16px;\n  }\n  .footer__bottom-wrapper {\n    grid-template-columns: 1fr;\n  }\n  .footer__contact {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .footer__menu-square {\n    align-self: flex-end;\n  }\n  .footer__menu-items {\n    font-size: 16px;\n    line-height: 16px;\n  }\n}\n.header {\n  padding: 24px 16px;\n  width: 100%;\n  background-color: #f7f7f8;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.btn__menu {\n  padding: 0 16px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn__menu .btn__icon {\n  position: relative;\n  width: 24px;\n  height: 8px;\n}\n.btn__menu .btn__icon::after {\n  content: \"\";\n  position: absolute;\n  height: 1.5px;\n  width: 24px;\n  background-color: #3a3943;\n  box-shadow: 0 7px 0 0 #3a3943;\n  transition: transform 0.3s ease;\n}\n.btn__menu .btn__icon::before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  width: 24px;\n  background-color: #3a3943;\n  transform: rotate(0deg);\n  transition: transform 0.3s ease, top 0.3s ease, height 0.3s ease;\n}\n.btn__menu.is-open .btn__icon::after {\n  transform: rotate(45deg);\n  box-shadow: 0 0 0 0;\n  top: 3px;\n}\n.btn__menu.is-open .btn__icon::before {\n  height: 1.5px;\n  top: 3px;\n  transform: rotate(-45deg);\n}\n\n.menu {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .header {\n    padding: 16px;\n  }\n  .header__wrapper svg {\n    width: 152px;\n    height: 48px;\n  }\n  .btn__menu {\n    height: 48px;\n    padding: 0 24px;\n    gap: 16px;\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .btn__menu .btn__icon {\n    height: 9px;\n  }\n  .btn__menu .btn__icon::after {\n    height: 2px;\n  }\n  .btn__menu.is-open .btn__icon::before {\n    height: 2px;\n    top: 3px;\n    transform: rotate(-45deg);\n  }\n}\n@media (min-width: 1440px) {\n  .header {\n    padding: 24px;\n    max-width: 1440px;\n    margin: 0 auto;\n  }\n  .menu {\n    display: flex;\n    gap: 56px;\n    align-items: center;\n    font-size: 18px;\n    line-height: 18px;\n  }\n  .btn__menu {\n    height: 48px;\n    padding: 0 24px;\n    gap: 16px;\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .btn__menu .btn__icon {\n    height: 9px;\n  }\n  .btn__menu .btn__icon::after {\n    height: 2px;\n  }\n}\n.swiper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.swiper-slide img {\n  display: block;\n  width: 100%;\n  max-height: 176px;\n  object-position: center;\n  transition: all 0.3s ease;\n}\n.swiper-text {\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  gap: 16px;\n  color: #f7f7f8;\n}\n.swiper-title {\n  font-size: 24px;\n  line-height: 28.8px;\n}\n.swiper-pagination-bullet {\n  background-color: transparent;\n  border: 1px solid #f7f7f8;\n  border-radius: 0;\n}\n.swiper-pagination-bullet-active {\n  background-color: #f7f7f8;\n  border-radius: 0;\n}\n.swiper-pagination-bullets {\n  display: flex;\n  padding: 0 24px 24px 24px;\n}\n.swiper-text-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.swiper-arrow-wrapper {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 24px;\n  color: #f7f7f8;\n}\n.swiper-arrow-wrapper svg {\n  transition: all 0.6s ease;\n}\n.swiper-image-wrapper {\n  width: 100%;\n  position: relative;\n  display: inline-block;\n}\n.swiper-square {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  background-color: #f7f7f8;\n  bottom: 20px;\n  left: 16px;\n}\n.swiper-triangle {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  max-width: 64px;\n  height: auto;\n}\n\n@media (min-width: 768px) {\n  .swiper-slide img {\n    max-height: 361px;\n  }\n  .swiper-text {\n    gap: 24px;\n    padding: 32px;\n  }\n  .swiper-title {\n    font-size: 32px;\n    line-height: 38.4px;\n  }\n  .swiper-paragraph {\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .swiper-triangle {\n    max-width: 120px;\n  }\n  .swiper-triangle svg {\n    width: 120px;\n    height: 120px;\n  }\n}\n@media (min-width: 1440px) {\n  .swiper-slide img {\n    max-height: 395px;\n  }\n  .swiper:hover .swiper-arrow-wrapper svg {\n    transition: all 0.6s ease;\n    transform: rotate(-90deg);\n  }\n  .swiper-title {\n    font-size: 40px;\n    line-height: 48px;\n  }\n  .swiper-triangle {\n    max-width: 138px;\n  }\n  .swiper-arrow-wrapper svg {\n    width: 32px;\n    height: 32px;\n  }\n  .swiper-triangle svg {\n    width: 138px;\n    height: 138px;\n  }\n}\n.btn {\n  color: #3a3943;\n  border: 1px solid #3a3943;\n  text-transform: uppercase;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn__type {\n  padding: 0 40px;\n  height: 56px;\n}\n\n@media (min-width: 768px) {\n  .btn__type {\n    font-size: 16px;\n    line-height: 16px;\n    height: 64px;\n  }\n}\n.rolling-text {\n  display: inline-block;\n  overflow: hidden;\n  font-size: 16px;\n  line-height: 16px;\n  display: none;\n}\n\n@media (min-width: 1440px) {\n  .rolling-text {\n    font-size: 18px;\n    line-height: 20px;\n    height: 20px;\n    display: block;\n  }\n  .rolling-text:hover .word {\n    transform: translateY(-100%);\n  }\n  .rolling-text .rolling__block:last-child {\n    color: #3a3943;\n  }\n  .rolling-text .word {\n    display: inline-block;\n    transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);\n  }\n  .main__grid-card .rolling-text {\n    font-size: 28px;\n    line-height: 30px;\n    height: 30px;\n  }\n  .main__grid-card .word {\n    transition: transform 0.6s ease;\n  }\n  .main__grid-card .rolling__block:last-child {\n    color: #f7f7f8;\n  }\n  .main__grid-card:hover .rolling-text .word,\n  .main__grid-card.play .rolling-text .word {\n    transform: translateY(-100%);\n  }\n}\n.main {\n  padding: 16px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n  margin-top: 88px;\n}\n.main__grid {\n  display: grid;\n  gap: 8px;\n}\n.main__grid-cards {\n  display: grid;\n  gap: 8px;\n}\n.main__grid-card {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  padding: 8px;\n  min-height: 200px;\n  transition: all 0.6s ease;\n}\n.main__grid-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 16px;\n  font-size: 20px;\n  line-height: 20px;\n  color: var(--hover-color);\n  transition: all 0.6s ease;\n}\n.main__grid-img {\n  width: 48px;\n  height: 48px;\n  background-color: var(--hover-color);\n  mask: var(--card-svg) no-repeat center;\n  transition: all 0.6s ease;\n}\n.main__grid-arrow {\n  padding: 24px;\n  align-self: flex-end;\n}\n.main__grid-arrow svg {\n  color: var(--hover-icon);\n  transition: all 0.6s ease;\n}\n\n.block {\n  min-width: 0;\n  height: 360px;\n  padding: 4px;\n  background-color: #195734;\n  position: sticky;\n}\n\n.application {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #3a3943;\n  padding: 24px;\n  min-height: 300px;\n}\n.application__text {\n  max-width: 280px;\n  font-size: 20px;\n  line-height: 28px;\n  padding: 0px 24px 0px 0px;\n}\n.application__icon {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n\n.burger {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  background-color: #f7f7f8;\n  padding: 0 8px 16px 8px;\n  height: calc(100vh - 88px);\n  overflow-y: auto;\n}\n.burger__visible {\n  display: flex;\n}\n.burger__menu {\n  display: grid;\n  width: 100%;\n  gap: 16px;\n}\n.burger__menu-cards1, .burger__menu-cards2 {\n  display: grid;\n  gap: 8px;\n}\n.burger__menu-cards1 {\n  margin-bottom: -8px;\n}\n.burger__menu-grid {\n  display: grid;\n  gap: 8px;\n}\n.burger__menu-card {\n  padding: 24px;\n  transition: all 0.6s ease;\n}\n.burger__menu-text {\n  transition: all 0.6s ease;\n  font-size: 18px;\n  line-height: 18px;\n  color: var(--hover-color);\n}\n\n.decor {\n  width: 100%;\n  height: 224px;\n  position: relative;\n  display: none;\n}\n.decor__square {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  background-color: #3a3943;\n}\n.decor__triangle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 112px;\n}\n\n.hidden {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .main {\n    margin-top: 80px;\n  }\n  .main__grid-cards {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n  .main__grid-card {\n    min-height: 240px;\n  }\n  .main__grid-text {\n    padding: 24px;\n    font-size: 24px;\n    line-height: 24px;\n  }\n  .main__grid-img {\n    width: 56px;\n    height: 56px;\n  }\n  .application {\n    padding: 32px;\n  }\n  .application__text {\n    max-width: 560px;\n    font-size: 24px;\n    line-height: 33.6px;\n    padding: 0px 24px 0px 0px;\n  }\n  .application__icon svg {\n    width: 120px;\n    height: 120px;\n  }\n  .burger {\n    padding: 16px;\n    height: calc(100vh - 80px);\n  }\n  .burger__menu {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .burger__menu-cards1, .burger__menu-cards2 {\n    gap: 16px;\n  }\n  .burger__menu-cards1 {\n    grid-area: 1/1/2/2;\n    margin: 0;\n  }\n  .burger__menu-cards1 {\n    grid-area: 2/1/3/2;\n  }\n  .burger__menu-text {\n    font-size: 20px;\n    line-height: 20px;\n  }\n  .burger__menu-grid {\n    gap: 16px;\n  }\n  .burger__footer-menu {\n    grid-template-columns: 1fr;\n    grid-area: 1/2/3/3;\n    gap: 0;\n  }\n  .footer__menu-square {\n    display: none;\n  }\n  .block {\n    height: 656px;\n  }\n  .decor {\n    display: block;\n    grid-column-start: span 2;\n  }\n}\n@media (min-width: 1440px) {\n  .main {\n    margin-top: 96px;\n  }\n  .main__grid {\n    grid-template-columns: 1.4fr 1fr;\n    gap: 16px;\n  }\n  .main__grid-cards {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .main__grid-card {\n    min-height: 300px;\n  }\n  .main__grid-card:hover {\n    background-color: var(--hover-background);\n    transition: all 0.6s ease;\n  }\n  .main__grid-card:hover .main__grid-text, .main__grid-card:hover .main__grid-arrow svg {\n    color: #f7f7f8;\n    transition: all 0.6s ease;\n  }\n  .main__grid-card:hover .main__grid-arrow svg {\n    transition: all 0.6s ease;\n    transform: rotate(-90deg);\n  }\n  .main__grid-card:hover .main__grid-img {\n    transition: all 0.6s ease;\n    background: #f7f7f8;\n  }\n  .main__grid-paragraph {\n    display: none;\n  }\n  .main__grid-img {\n    width: 64px;\n    height: 64px;\n  }\n  .main__grid-arrow svg {\n    width: 32px;\n    height: 32px;\n  }\n  .main__grid-text p {\n    font-size: 28px;\n    line-height: 28px;\n  }\n  .application {\n    min-height: 310px;\n  }\n  .application__text {\n    max-width: 500px;\n    font-size: 28px;\n    line-height: 33.6px;\n  }\n  .application__icon svg {\n    width: 144px;\n    height: 144px;\n  }\n  .btn__application {\n    align-self: flex-start;\n  }\n  .burger {\n    padding: 0px 24px 24px 24px;\n    height: auto;\n  }\n  .burger__menu {\n    grid-template-columns: 40% 45% 13%;\n  }\n  .burger__menu-card {\n    padding: 32px;\n  }\n  .burger__menu-card:hover {\n    background-color: var(--hover-background);\n    transition: all 0.6s ease;\n  }\n  .burger__menu-card:hover .burger__menu-text {\n    color: #f7f7f8;\n    transition: all 0.6s ease;\n  }\n  .burger__menu-cards1 {\n    grid-area: 1/1/3/2;\n  }\n  .burger__menu-cards2 {\n    grid-area: 3/1/5/2;\n  }\n  .burger__menu-text {\n    font-size: 24px;\n    line-height: 24px;\n  }\n  .burger__footer-menu {\n    grid-template-columns: 1fr 1fr;\n    grid-area: 1/2/3/3;\n  }\n  .burger__footer-schedule {\n    grid-area: 3/2/4/3;\n  }\n  .burger__footer-contact {\n    grid-area: 4/2/5/3;\n  }\n  .decor {\n    height: 100%;\n    grid-area: 1/3/5/4;\n  }\n  .block {\n    height: 680px;\n    top: 112px;\n  }\n}","/**\n * adds resets for buttons that are not covered by reset-and-normalize base\n */\n\n[role=\"button\"],\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"],\nbutton {\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  color: inherit;\n  text-align: inherit;\n  background: none;\n  appearance: button;\n  user-select: none;\n\n  &:not(:disabled) {\n    cursor: pointer;\n  }\n\n  &:-moz-focusring {\n    outline: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n}\n","/**\n * adds resets for links that are not covered by reset-and-normalize base\n */\n\na {\n  color: inherit;\n  text-decoration: none;\n\n  &:-moz-focusring {\n    outline:none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n}\n","body {\r\n  font-family: Jeko-Bold, Raleway;\r\n  background-color: $white;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n  color: $black;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n.container {\r\n  flex: 1;\r\n  display: flex;\r\n  padding-inline: 8px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    padding-inline: 16px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .container {\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding-inline: 24px;\r\n  }\r\n}\r\n","$white: #f7f7f8;\r\n$black: #3a3943;\r\n$green: #157946;\r\n$purple: #322857;\r\n$gray: #374b4b;\r\n\r\n$satured-pink: #a91f4c;\r\n$satured-green: #30733e;\r\n$satured-orange: #ea711a;\r\n$satured-gray: #738992;\r\n$satured-red: #993333;\r\n$satured-cyan: #125a67;\r\n\r\n$satured-dark-green: #195734;\r\n\r\n$delay: 0.015s;\r\n$duration: 0.4s;\r\n$easing: cubic-bezier(0.76, 0, 0.24, 1);\r\n","@font-face {\r\n    font-family: Jeko-Bold;\r\n    src: url(../fonts/jeko-bold.ttf) format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: Raleway;\r\n    src: url(../fonts/Raleway-SemiBold.ttf) format(\"truetype\");\r\n}",".footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  padding: 0 8px;\r\n  flex: 0;\r\n  width: 100%;\r\n\r\n  &__menu,\r\n  &__schedule,\r\n  &__contact {\r\n    padding: 24px;\r\n    border: 1px solid $black;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__menu {\r\n    display: grid;\r\n    gap: 32px;\r\n\r\n    &-items {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-square {\r\n      width: 24px;\r\n      height: 24px;\r\n      background-color: $black;\r\n    }\r\n  }\r\n\r\n  &__top-wrapper {\r\n    display: grid;\r\n    gap: 8px;\r\n  }\r\n\r\n  &__bottom-wrapper {\r\n    display: grid;\r\n    gap: 8px;\r\n  }\r\n\r\n  &__schedule {\r\n    padding: 24px;\r\n    border: 1px solid $black;\r\n    text-transform: uppercase;\r\n\r\n    &-items {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-item {\r\n      align-items: baseline;\r\n      display: flex;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-line {\r\n      flex-grow: 1;\r\n      height: 0px;\r\n      opacity: 0.1;\r\n      border: 1px solid #3a3943;\r\n    }\r\n  }\r\n\r\n  &__contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 32px;\r\n\r\n    &-info {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-messangers {\r\n      display: flex;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-messanger {\r\n      border: 1px solid $black;\r\n      width: 40px;\r\n      height: 40px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n\r\n    &-messanger img {\r\n      display: block;\r\n      max-width: 24px;\r\n      height: auto;\r\n    }\r\n  }\r\n\r\n  &__terms {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 24px;\r\n    padding: 40px 24px;\r\n\r\n    &-copyright {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-img {\r\n      max-width: 143px;\r\n      height: auto;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .footer {\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n    padding: 0 16px;\r\n    gap: 16px;\r\n\r\n    &__menu,\r\n    &__schedule,\r\n    &__contact {\r\n      padding: 32px;\r\n    }\r\n\r\n    &__bottom-wrapper {\r\n      grid-template-columns: 1fr 1fr;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__menu {\r\n      grid-template-columns: repeat(3, auto);\r\n      column-gap: 16px;\r\n    }\r\n\r\n    &__schedule-item,\r\n    &__contact-info {\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n    }\r\n\r\n    &__terms {\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      padding: 40px 0;\r\n\r\n      &-copyright {\r\n        flex-direction: row;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .footer {\r\n    padding: 0 24px;\r\n    gap: 16px;\r\n\r\n    &__top-wrapper {\r\n      grid-template-columns: 2fr 1fr;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__bottom-wrapper {\r\n      grid-template-columns: 1fr;\r\n    }\r\n\r\n    &__contact {\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n    }\r\n\r\n    &__menu-square {\r\n      align-self: flex-end;\r\n    }\r\n\r\n    &__menu-items {\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n    }\r\n  }\r\n}\r\n",".header {\r\n  padding: 24px 16px;\r\n  width: 100%;\r\n  background-color: $white;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 10;\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.btn__menu {\r\n  padding: 0 16px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n\r\n  .btn__icon {\r\n    position: relative;\r\n    width: 24px;\r\n    height: 8px;\r\n\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      height: 1.5px;\r\n      width: 24px;\r\n      background-color: $black;\r\n      box-shadow: 0 7px 0 0 $black;\r\n      transition: transform 0.3s ease;\r\n    }\r\n\r\n    &::before {\r\n      content: '';\r\n      position: absolute;\r\n      height: 0px;\r\n      width: 24px;\r\n      background-color: $black;\r\n      transform: rotate(0deg);\r\n      transition:\r\n        transform 0.3s ease,\r\n        top 0.3s ease,\r\n        height 0.3s ease;\r\n    }\r\n  }\r\n\r\n  &.is-open .btn__icon {\r\n    &::after {\r\n      transform: rotate(45deg);\r\n      box-shadow: 0 0 0 0;\r\n      top: 3px;\r\n    }\r\n\r\n    &::before {\r\n      height: 1.5px;\r\n      top: 3px;\r\n      transform: rotate(-45deg);\r\n    }\r\n  }\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .header {\r\n    padding: 16px;\r\n\r\n    &__wrapper svg {\r\n      width: 152px;\r\n      height: 48px;\r\n    }\r\n  }\r\n\r\n  .btn__menu {\r\n    height: 48px;\r\n    padding: 0 24px;\r\n    gap: 16px;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n\r\n    .btn__icon {\r\n      height: 9px;\r\n\r\n      &::after {\r\n        height: 2px;\r\n      }\r\n    }\r\n\r\n    &.is-open .btn__icon {\r\n      &::before {\r\n        height: 2px;\r\n        top: 3px;\r\n        transform: rotate(-45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .header {\r\n    padding: 24px;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 56px;\r\n    align-items: center;\r\n    font-size: 18px;\r\n    line-height: 18px;\r\n  }\r\n\r\n  .btn__menu {\r\n    height: 48px;\r\n    padding: 0 24px;\r\n    gap: 16px;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n\r\n    .btn__icon {\r\n      height: 9px;\r\n\r\n      &::after {\r\n        height: 2px;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".swiper {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n\r\n  &-slide img {\r\n    display: block;\r\n    width: 100%;\r\n    max-height: 176px;\r\n    object-position: center;\r\n    transition: all 0.3s ease;\r\n  }\r\n\r\n  &-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 24px;\r\n    gap: 16px;\r\n    color: $white;\r\n  }\r\n\r\n  &-title {\r\n    font-size: 24px;\r\n    line-height: 28.8px;\r\n  }\r\n\r\n  &-pagination-bullet {\r\n    background-color: transparent;\r\n    border: 1px solid $white;\r\n    border-radius: 0;\r\n  }\r\n\r\n  &-pagination-bullet-active {\r\n    background-color: $white;\r\n    border-radius: 0;\r\n  }\r\n\r\n  &-pagination-bullets {\r\n    display: flex;\r\n    padding: 0 24px 24px 24px;\r\n  }\r\n\r\n  &-text-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &-arrow-wrapper {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 24px;\r\n    color: $white;\r\n  }\r\n\r\n  &-arrow-wrapper svg {\r\n    transition: all 0.6s ease;\r\n  }\r\n\r\n  &-image-wrapper {\r\n    width: 100%;\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n  &-square {\r\n    position: absolute;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: $white;\r\n    bottom: 20px;\r\n    left: 16px;\r\n  }\r\n\r\n  &-triangle {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    max-width: 64px;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .swiper {\r\n    &-slide img {\r\n      max-height: 361px;\r\n    }\r\n\r\n    &-text {\r\n      gap: 24px;\r\n      padding: 32px;\r\n    }\r\n\r\n    &-title {\r\n      font-size: 32px;\r\n      line-height: 38.4px;\r\n    }\r\n\r\n    &-paragraph {\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n    }\r\n\r\n    &-triangle {\r\n      max-width: 120px;\r\n    }\r\n\r\n    &-triangle svg {\r\n      width: 120px;\r\n      height: 120px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .swiper {\r\n    &-slide img {\r\n      max-height: 395px;\r\n    }\r\n\r\n    &:hover {\r\n      .swiper-arrow-wrapper svg {\r\n        transition: all 0.6s ease;\r\n        transform: rotate(-90deg);\r\n      }\r\n    }\r\n\r\n    &-title {\r\n      font-size: 40px;\r\n      line-height: 48px;\r\n    }\r\n\r\n    &-triangle {\r\n      max-width: 138px;\r\n    }\r\n\r\n    &-arrow-wrapper svg {\r\n      width: 32px;\r\n      height: 32px;\r\n    }\r\n\r\n    &-triangle svg {\r\n      width: 138px;\r\n      height: 138px;\r\n    }\r\n  }\r\n}\r\n",".btn {\r\n  color: $black;\r\n  border: 1px solid $black;\r\n  text-transform: uppercase;\r\n  background-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn__type {\r\n  padding: 0 40px;\r\n  height: 56px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .btn__type {\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n    height: 64px;\r\n  }\r\n}\r\n",".rolling-text {\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  font-size: 16px;\r\n  line-height: 16px;\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .rolling-text {\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    height: 20px;\r\n    display: block;\r\n\r\n    &:hover {\r\n      .word {\r\n        transform: translateY(-100%);\r\n      }\r\n    }\r\n\r\n    .rolling__block:last-child {\r\n      color: $black;\r\n    }\r\n\r\n    .word {\r\n      display: inline-block;\r\n      transition: transform $duration $easing;\r\n    }\r\n  }\r\n\r\n  .main__grid-card .rolling-text {\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  .main__grid-card .word {\r\n    transition: transform 0.6s ease;\r\n  }\r\n\r\n  .main__grid-card .rolling__block:last-child {\r\n    color: $white;\r\n  }\r\n\r\n  .main__grid-card:hover .rolling-text .word,\r\n  .main__grid-card.play .rolling-text .word {\r\n    transform: translateY(-100%);\r\n  }\r\n}\r\n","@import '../components/index.scss';\r\n\r\n.main {\r\n  padding: 16px 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  position: relative;\r\n  margin-top: 88px;\r\n\r\n  &__grid {\r\n    display: grid;\r\n    gap: 8px;\r\n\r\n    &-cards {\r\n      display: grid;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-card {\r\n      display: flex;\r\n      gap: 8px;\r\n      justify-content: space-between;\r\n      padding: 8px;\r\n      min-height: 200px;\r\n      transition: all 0.6s ease;\r\n    }\r\n\r\n    &-text {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      padding: 16px;\r\n      font-size: 20px;\r\n      line-height: 20px;\r\n      color: var(--hover-color);\r\n      transition: all 0.6s ease;\r\n    }\r\n\r\n    &-img {\r\n      width: 48px;\r\n      height: 48px;\r\n      background-color: var(--hover-color);\r\n      mask: var(--card-svg) no-repeat center;\r\n      transition: all 0.6s ease;\r\n    }\r\n\r\n    &-arrow {\r\n      padding: 24px;\r\n      align-self: flex-end;\r\n    }\r\n\r\n    &-arrow svg {\r\n      color: var(--hover-icon);\r\n      transition: all 0.6s ease;\r\n    }\r\n  }\r\n}\r\n\r\n.block {\r\n  min-width: 0;\r\n  height: 360px;\r\n  padding: 4px;\r\n  background-color: $satured-dark-green;\r\n  position: sticky;\r\n}\r\n\r\n.application {\r\n  display: flex;\r\n  position: relative;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border: 1px solid $black;\r\n  padding: 24px;\r\n  min-height: 300px;\r\n\r\n  &__text {\r\n    max-width: 280px;\r\n    font-size: 20px;\r\n    line-height: 28px;\r\n    padding: 0px 24px 0px 0px;\r\n  }\r\n\r\n  &__icon {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n  }\r\n}\r\n\r\n.burger {\r\n  display: none;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 10;\r\n  background-color: $white;\r\n  padding: 0 8px 16px 8px;\r\n  height: calc(100vh - 88px);\r\n  overflow-y: auto;\r\n\r\n  &__visible {\r\n    display: flex;\r\n  }\r\n\r\n  &__menu {\r\n    display: grid;\r\n    width: 100%;\r\n    gap: 16px;\r\n\r\n    &-cards1,\r\n    &-cards2 {\r\n      display: grid;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-cards1 {\r\n      margin-bottom: -8px;\r\n    }\r\n\r\n    &-grid {\r\n      display: grid;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-card {\r\n      padding: 24px;\r\n      transition: all 0.6s ease;\r\n    }\r\n\r\n    &-text {\r\n      transition: all 0.6s ease;\r\n      font-size: 18px;\r\n      line-height: 18px;\r\n      color: var(--hover-color);\r\n    }\r\n  }\r\n}\r\n\r\n.decor {\r\n  width: 100%;\r\n  height: 224px;\r\n  position: relative;\r\n  display: none;\r\n\r\n  &__square {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 28px;\r\n    height: 28px;\r\n    background-color: $black;\r\n  }\r\n\r\n  &__triangle {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 112px;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .main {\r\n    margin-top: 80px;\r\n\r\n    &__grid-cards {\r\n      grid-template-columns: 1fr 1fr;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__grid-card {\r\n      min-height: 240px;\r\n    }\r\n\r\n    &__grid-text {\r\n      padding: 24px;\r\n      font-size: 24px;\r\n      line-height: 24px;\r\n    }\r\n\r\n    &__grid-img {\r\n      width: 56px;\r\n      height: 56px;\r\n    }\r\n  }\r\n\r\n  .application {\r\n    padding: 32px;\r\n\r\n    &__text {\r\n      max-width: 560px;\r\n      font-size: 24px;\r\n      line-height: 33.6px;\r\n      padding: 0px 24px 0px 0px;\r\n    }\r\n\r\n    &__icon svg {\r\n      width: 120px;\r\n      height: 120px;\r\n    }\r\n  }\r\n\r\n  .burger {\r\n    padding: 16px;\r\n    height: calc(100vh - 80px);\r\n  }\r\n\r\n  .burger__menu {\r\n    grid-template-columns: repeat(2, 1fr);\r\n\r\n    &-cards1,\r\n    &-cards2 {\r\n      gap: 16px;\r\n    }\r\n\r\n    &-cards1 {\r\n      grid-area: 1 / 1 / 2 / 2;\r\n      margin: 0;\r\n    }\r\n\r\n    &-cards1 {\r\n      grid-area: 2 / 1 / 3 / 2;\r\n    }\r\n\r\n    &-text {\r\n      font-size: 20px;\r\n      line-height: 20px;\r\n    }\r\n\r\n    &-grid {\r\n      gap: 16px;\r\n    }\r\n  }\r\n\r\n  .burger__footer-menu {\r\n    grid-template-columns: 1fr;\r\n    grid-area: 1 / 2 / 3 / 3;\r\n    gap: 0;\r\n  }\r\n\r\n  .footer__menu-square {\r\n    display: none;\r\n  }\r\n\r\n  .block {\r\n    height: 656px;\r\n  }\r\n\r\n  .decor {\r\n    display: block;\r\n    grid-column-start: span 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .main {\r\n    margin-top: 96px;\r\n\r\n    &__grid {\r\n      grid-template-columns: 1.4fr 1fr;\r\n      gap: 16px;\r\n\r\n      &-cards {\r\n        grid-template-columns: 1fr;\r\n        gap: 16px;\r\n      }\r\n\r\n      &-card {\r\n        min-height: 300px;\r\n      }\r\n\r\n      &-card:hover {\r\n        background-color: var(--hover-background);\r\n        transition: all 0.6s ease;\r\n\r\n        .main__grid {\r\n          &-text,\r\n          &-arrow svg {\r\n            color: $white;\r\n            transition: all 0.6s ease;\r\n          }\r\n\r\n          &-arrow svg {\r\n            transition: all 0.6s ease;\r\n            transform: rotate(-90deg);\r\n          }\r\n\r\n          &-img {\r\n            transition: all 0.6s ease;\r\n            background: $white;\r\n          }\r\n        }\r\n      }\r\n\r\n      &-paragraph {\r\n        display: none;\r\n      }\r\n\r\n      &-img {\r\n        width: 64px;\r\n        height: 64px;\r\n      }\r\n\r\n      &-arrow svg {\r\n        width: 32px;\r\n        height: 32px;\r\n      }\r\n\r\n      &-text p {\r\n        font-size: 28px;\r\n        line-height: 28px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .application {\r\n    min-height: 310px;\r\n\r\n    &__text {\r\n      max-width: 500px;\r\n      font-size: 28px;\r\n      line-height: 33.6px;\r\n    }\r\n\r\n    &__icon svg {\r\n      width: 144px;\r\n      height: 144px;\r\n    }\r\n  }\r\n\r\n  .btn__application {\r\n    align-self: flex-start;\r\n  }\r\n\r\n  .burger {\r\n    padding: 0px 24px 24px 24px;\r\n    height: auto;\r\n  }\r\n\r\n  .burger__menu {\r\n    grid-template-columns: 40% 45% 13%;\r\n\r\n    &-card {\r\n      padding: 32px;\r\n    }\r\n\r\n    &-card:hover {\r\n      background-color: var(--hover-background);\r\n      transition: all 0.6s ease;\r\n\r\n      .burger__menu-text {\r\n        color: $white;\r\n        transition: all 0.6s ease;\r\n      }\r\n    }\r\n\r\n    &-cards1 {\r\n      grid-area: 1 / 1 / 3 / 2;\r\n    }\r\n\r\n    &-cards2 {\r\n      grid-area: 3 / 1 / 5 / 2;\r\n    }\r\n\r\n    &-text {\r\n      font-size: 24px;\r\n      line-height: 24px;\r\n    }\r\n  }\r\n\r\n  .burger__footer-menu {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-area: 1 / 2 / 3 / 3;\r\n  }\r\n\r\n  .burger__footer-schedule {\r\n    grid-area: 3 / 2 / 4 / 3;\r\n  }\r\n\r\n  .burger__footer-contact {\r\n    grid-area: 4 / 2 / 5 / 3;\r\n  }\r\n\r\n  .decor {\r\n    height: 100%;\r\n    grid-area: 1 / 3 / 5 / 4;\r\n  }\r\n\r\n  .block {\r\n    height: 680px;\r\n    top: 112px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ }),

/***/ "./src/fonts/Raleway-SemiBold.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Raleway-SemiBold.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bd43d9472ee0c9fbe785.ttf";

/***/ }),

/***/ "./src/fonts/jeko-bold.ttf":
/*!*********************************!*\
  !*** ./src/fonts/jeko-bold.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4f49083ca507b8451ef4.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapt_center"] = self["webpackChunkapt_center"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_modules_pagination_css-node_modules_swiper_swiper_css-node_module-a693c2"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.b4abfc17a41ca60bb564.js.map