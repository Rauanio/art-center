/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

html {
  height: 100%;
  display: flex;
  flex-direction: column;
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
  padding: 16px 8px;
  width: 100%;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__img {
  max-width: 127px;
  height: auto;
}

.btn__menu {
  padding: 0 16px;
  height: 40px;
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
}

.menu {
  display: none;
}

@media (min-width: 768px) {
  .header {
    padding: 16px;
  }
  .header__img {
    max-width: 152px;
    -o-object-fit: contain;
       object-fit: contain;
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
.swiper-arrow {
  color: #f7f7f8;
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
  .swiper-title {
    font-size: 40px;
    line-height: 48px;
  }
  .swiper-triangle {
    max-width: 138px;
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
.main {
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
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
}
.main__grid-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  font-size: 24px;
  line-height: 24px;
}
.main__grid-img {
  max-width: 48px;
  height: auto;
}
.main__grid-arrow {
  padding: 24px;
  align-self: flex-end;
}

.block {
  min-width: 0;
  height: 360px;
  padding: 4px;
  background-color: #195734;
}

.application {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #3a3943;
  padding: 24px;
  height: 300px;
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
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #f7f7f8;
  padding-bottom: 16px;
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
  border: 1px solid #157946;
}
.burger__menu-text {
  font-size: 18px;
  line-height: 18px;
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
  .main__grid-cards {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .main__grid-card {
    min-height: 240px;
  }
  .main__grid-text {
    padding: 24px;
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
  .burger__menu {
    grid-template-columns: 40% 45% 13%;
  }
  .burger__menu-card {
    padding: 32px;
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
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/css-reset-and-normalize/scss/reset-and-normalize.scss","webpack://./src/styles/styles.scss","webpack://./node_modules/css-reset-and-normalize/scss/button-reset.scss","webpack://./node_modules/css-reset-and-normalize/scss/link-reset.scss","webpack://./src/styles/_global.scss","webpack://./src/styles/_vars.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/components/footer.scss","webpack://./src/styles/components/header.scss","webpack://./src/styles/components/slider.scss","webpack://./src/styles/components/button.scss","webpack://./src/styles/pages/main.scss"],"names":[],"mappings":"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","sourcesContent":["/**\n * Based on\n *\n *  - reset.css 2.0 by Eric Meyer\n      (public domain)\n *    http://meyerweb.com/eric/tools/css/reset/\n *\n *  - normalize.css 8.0.1 by Nicolas Gallagher and Jonathan Neal\n *    (licensed under MIT)\n *    https://github.com/necolas/normalize.css\n *\n *  - Reboot from Bootstrap 4.5.3\n *    (licensed under MIT)\n *    https://github.com/twbs/bootstrap\n */\n\n\n/**\n * IE10+ doesn't honor `<meta name=\"viewport\">` in some cases\n */\n\n@-ms-viewport {\n  width: device-width;\n}\n\n\n/**\n * general reset\n */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, main {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n\n/**\n * HTML5 display-role reset for older browsers\n */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section,\nmain, summary {\n  display: block;\n}\n\n\n/**\n * inherit box model for all elements\n */\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n\n/**\n * html root rules\n * 1. set border-box for inheritance\n * 2. avoid 300ms click delay on touch devices that support the `touch-action`\n *    CSS property\n * 3. Prevent adjustments of font size after orientation changes in IE, on\n *    Windows Phone and iOS.\n * 4. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,\n *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.\n * 5. Change the default tap highlight to be completely transparent in iOS.\n */\n\nhtml {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  touch-action: manipulation;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  /* 4 */\n  -ms-overflow-style: scrollbar;\n  /* 5 */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n\n/**\n * body rules\n * 1. reset line-height to 1\n * 2. set base font-family to sans-serif\n * 3. Set an explicit initial text-align value so that we can later use the\n *    `inherit` value on things like `<th>` elements.\n */\n\nbody {\n  /* 1 */\n  line-height: 1;\n  /* 2 */\n  font-family: sans-serif;\n  /* 3 */\n  text-align: left;\n}\n\n/**\n * Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n * on elements that programmatically receive focus but wouldn't normally show a visible\n * focus outline. In general, this would mean that the outline is only applied if the\n * interaction that led to the element receiving programmatic focus was a keyboard interaction,\n * or the browser has somehow determined that the user is primarily a keyboard user and/or\n * wants focus outlines to always be presented.\n *\n * See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n * and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n */\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n\n/**\n * Lists\n */\n\nol, ul {\n  list-style: none;\n}\n\n\n/**\n * Quotes\n */\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\n\n/**\n * Tables\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ncaption {\n  caption-side: bottom;\n}\n\n\n/**\n * Table Headers\n * 1. Matches default `<td>` alignment by inheriting from the `<body>`, or the\n *    closest parent with a set `text-align`.\n * 2. Fix alignment for Safari\n */\n\nth {\n  /* 1 */\n  text-align: inherit;\n  /* 2 */\n  text-align: -webkit-match-parent;\n}\n\n\n/**\n * Horizontal Lines\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  /* 1 */\n  box-sizing: content-box;\n  height: 0;\n  /* 2 */\n  overflow: visible;\n}\n\n\n/**\n * Preformatted Text\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Don't allow content to break outside\n * 3. We have @viewport set which causes scrollbars to overlap content in IE11\n *    and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to\n *    counteract.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  /* 1 */\n  font-family: monospace, monospace;\n}\n\npre {\n  /* 2 */\n  overflow: auto;\n  /* 3 */\n  -ms-overflow-style: scrollbar;\n}\n\n\n/**\n * Links\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  -webkit-text-decoration-skip: objects;\n}\n\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n * 3. Add explicit cursor to indicate changed behavior.\n * 4. Prevent the text-decoration to be skipped.\n */\n\nabbr[title] {\n  /* 1 */\n  border-bottom: 0;\n  /* 2 */\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  /* 3 */\n  cursor: help;\n  /* 4 */\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  font-style: normal;\n  line-height: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/**\n * Prevent `em` being affected from global reset\n */\nem {\n  font-style: italic;\n}\n\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n\n/**\n * Hide SVG overflow in IE\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n\n/**\n * Remove the default `border-radius` that macOS Chrome adds.\n * Details at https://github.com/twbs/bootstrap/issues/24093\n */\n\nbutton {\n  border-radius: 0;\n}\n\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n * Credit: https://github.com/suitcss/base/\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n\n/**\n * form element resets\n * 1. Remove the margin in Firefox and Safari\n * 2. inherit font rules\n */\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"reset\"],\n[type=\"submit\"],\n/* 1 */\n[type=\"button\"] {\n  /* 2 */\n  -webkit-appearance: button;\n}\n\n\n/**\n * Remove the default appearance of temporal inputs to avoid a Mobile Safari\n * bug where setting a custom line-height prevents text from being vertically\n * centered within the input.\n * See https://bugs.webkit.org/show_bug.cgi?id=139848\n * and https://github.com/twbs/bootstrap/issues/11266\n */\n\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox;\n}\n\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\n\n/**\n * Show the overflow in IE.\n */\n\nbutton,\ninput {\n  overflow: visible;\n}\n\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * Set the cursor for non-`<button>` buttons\n * Details at https://github.com/twbs/bootstrap/pull/30562\n */\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n\n/**\n * Remove the inheritance of word-wrap in Safari.\n * See https://github.com/twbs/bootstrap/issues/24990\n */\n\nselect {\n  word-wrap: normal;\n}\n\n\n/**\n * Remove inner border and padding from Firefox, but don't restore the outline\n * like Normalize.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n\n/**\n * 1. Add the correct box sizing in IE 10-\n * 2. Remove the padding in IE 10-\n */\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n\n/**\n * Suppress the focus outline on elements that cannot be accessed via keyboard.\n * This prevents an unwanted focus outline from appearing around elements that\n * might still respond to pointer events.\n * Credit: https://github.com/suitcss/base\n */\n\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important;\n}\n\n\n/**\n * Browsers set a default `min-width: min-content` on fieldsets,\n * unlike e.g. `<div>`s, which have `min-width: 0` by default.\n * So we reset that to ensure fieldsets behave more like a standard block element.\n * See https://github.com/twbs/bootstrap/issues/12359\n * and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n */\n\nfieldset {\n  min-width: 0;\n}\n\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Set display to block for all browsers\n */\n\nlegend {\n  /* 1 */\n  max-width: 100%;\n  white-space: normal;\n  /* 2 */\n  color: inherit;\n  /* 3 */\n  display: block;\n}\n\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n\n/**\n * 1. Remove the default vertical scrollbar in IE 10+.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\n\ntextarea {\n  /* 1 */\n  overflow: auto;\n  /* 2 */\n  resize: vertical;\n}\n\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  /* 1 */\n  -webkit-appearance: textfield;\n  /* 2 */\n  outline-offset: -2px;\n}\n\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  /* 1 */\n  -webkit-appearance: button;\n  /* 2 */\n  font: inherit;\n}\n\n\n/**\n * Correct element display for output\n */\n\noutput {\n  display: inline-block;\n}\n\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n\n/**\n * Always hide an element with the `hidden` HTML attribute (from PureCSS).\n * Needed for proper display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","/**\n * Based on\n *\n *  - reset.css 2.0 by Eric Meyer\n      (public domain)\n *    http://meyerweb.com/eric/tools/css/reset/\n *\n *  - normalize.css 8.0.1 by Nicolas Gallagher and Jonathan Neal\n *    (licensed under MIT)\n *    https://github.com/necolas/normalize.css\n *\n *  - Reboot from Bootstrap 4.5.3\n *    (licensed under MIT)\n *    https://github.com/twbs/bootstrap\n */\n/**\n * IE10+ doesn't honor `<meta name=\"viewport\">` in some cases\n */\n@-ms-viewport {\n  width: device-width;\n}\n/**\n * general reset\n */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, main {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/**\n * HTML5 display-role reset for older browsers\n */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section,\nmain, summary {\n  display: block;\n}\n\n/**\n * inherit box model for all elements\n */\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n/**\n * html root rules\n * 1. set border-box for inheritance\n * 2. avoid 300ms click delay on touch devices that support the `touch-action`\n *    CSS property\n * 3. Prevent adjustments of font size after orientation changes in IE, on\n *    Windows Phone and iOS.\n * 4. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,\n *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.\n * 5. Change the default tap highlight to be completely transparent in iOS.\n */\nhtml {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  touch-action: manipulation;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  /* 4 */\n  -ms-overflow-style: scrollbar;\n  /* 5 */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/**\n * body rules\n * 1. reset line-height to 1\n * 2. set base font-family to sans-serif\n * 3. Set an explicit initial text-align value so that we can later use the\n *    `inherit` value on things like `<th>` elements.\n */\nbody {\n  /* 1 */\n  line-height: 1;\n  /* 2 */\n  font-family: sans-serif;\n  /* 3 */\n  text-align: left;\n}\n\n/**\n * Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\n * on elements that programmatically receive focus but wouldn't normally show a visible\n * focus outline. In general, this would mean that the outline is only applied if the\n * interaction that led to the element receiving programmatic focus was a keyboard interaction,\n * or the browser has somehow determined that the user is primarily a keyboard user and/or\n * wants focus outlines to always be presented.\n *\n * See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\n * and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\n */\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\n/**\n * Lists\n */\nol, ul {\n  list-style: none;\n}\n\n/**\n * Quotes\n */\nblockquote, q {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\n\n/**\n * Tables\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ncaption {\n  caption-side: bottom;\n}\n\n/**\n * Table Headers\n * 1. Matches default `<td>` alignment by inheriting from the `<body>`, or the\n *    closest parent with a set `text-align`.\n * 2. Fix alignment for Safari\n */\nth {\n  /* 1 */\n  text-align: inherit;\n  /* 2 */\n  text-align: -webkit-match-parent;\n}\n\n/**\n * Horizontal Lines\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  /* 1 */\n  box-sizing: content-box;\n  height: 0;\n  /* 2 */\n  overflow: visible;\n}\n\n/**\n * Preformatted Text\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Don't allow content to break outside\n * 3. We have @viewport set which causes scrollbars to overlap content in IE11\n *    and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to\n *    counteract.\n */\npre,\ncode,\nkbd,\nsamp {\n  /* 1 */\n  font-family: monospace, monospace;\n}\n\npre {\n  /* 2 */\n  overflow: auto;\n  /* 3 */\n  -ms-overflow-style: scrollbar;\n}\n\n/**\n * Links\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  -webkit-text-decoration-skip: objects;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n * 3. Add explicit cursor to indicate changed behavior.\n * 4. Prevent the text-decoration to be skipped.\n */\nabbr[title] {\n  /* 1 */\n  border-bottom: 0;\n  /* 2 */\n  text-decoration: underline;\n  text-decoration: underline dotted;\n  /* 3 */\n  cursor: help;\n  /* 4 */\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  font-style: normal;\n  line-height: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/**\n * Prevent `em` being affected from global reset\n */\nem {\n  font-style: italic;\n}\n\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/**\n * Hide SVG overflow in IE\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/**\n * Remove the default `border-radius` that macOS Chrome adds.\n * Details at https://github.com/twbs/bootstrap/issues/24093\n */\nbutton {\n  border-radius: 0;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n * Credit: https://github.com/suitcss/base/\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\n/**\n * form element resets\n * 1. Remove the margin in Firefox and Safari\n * 2. inherit font rules\n */\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=reset],\n[type=submit],\n[type=button] {\n  /* 2 */\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the default appearance of temporal inputs to avoid a Mobile Safari\n * bug where setting a custom line-height prevents text from being vertically\n * centered within the input.\n * See https://bugs.webkit.org/show_bug.cgi?id=139848\n * and https://github.com/twbs/bootstrap/issues/11266\n */\ninput[type=date],\ninput[type=time],\ninput[type=datetime-local],\ninput[type=month] {\n  -webkit-appearance: listbox;\n}\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\n/**\n * Show the overflow in IE.\n */\nbutton,\ninput {\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * Set the cursor for non-`<button>` buttons\n * Details at https://github.com/twbs/bootstrap/pull/30562\n */\n[role=button] {\n  cursor: pointer;\n}\n\n/**\n * Remove the inheritance of word-wrap in Safari.\n * See https://github.com/twbs/bootstrap/issues/24990\n */\nselect {\n  word-wrap: normal;\n}\n\n/**\n * Remove inner border and padding from Firefox, but don't restore the outline\n * like Normalize.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-\n * 2. Remove the padding in IE 10-\n */\ninput[type=radio],\ninput[type=checkbox] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n/**\n * Suppress the focus outline on elements that cannot be accessed via keyboard.\n * This prevents an unwanted focus outline from appearing around elements that\n * might still respond to pointer events.\n * Credit: https://github.com/suitcss/base\n */\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important;\n}\n\n/**\n * Browsers set a default `min-width: min-content` on fieldsets,\n * unlike e.g. `<div>`s, which have `min-width: 0` by default.\n * So we reset that to ensure fieldsets behave more like a standard block element.\n * See https://github.com/twbs/bootstrap/issues/12359\n * and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n */\nfieldset {\n  min-width: 0;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Set display to block for all browsers\n */\nlegend {\n  /* 1 */\n  max-width: 100%;\n  white-space: normal;\n  /* 2 */\n  color: inherit;\n  /* 3 */\n  display: block;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * 1. Remove the default vertical scrollbar in IE 10+.\n * 2. Textareas should really only resize vertically so they don't break their\n *    (horizontal) containers.\n */\ntextarea {\n  /* 1 */\n  overflow: auto;\n  /* 2 */\n  resize: vertical;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  /* 1 */\n  box-sizing: border-box;\n  /* 2 */\n  padding: 0;\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  /* 1 */\n  -webkit-appearance: textfield;\n  /* 2 */\n  outline-offset: -2px;\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-cancel-button,\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  /* 1 */\n  -webkit-appearance: button;\n  /* 2 */\n  font: inherit;\n}\n\n/**\n * Correct element display for output\n */\noutput {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Always hide an element with the `hidden` HTML attribute (from PureCSS).\n * Needed for proper display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n\n/**\n * adds resets for buttons that are not covered by reset-and-normalize base\n */\n[role=button],\ninput[type=button],\ninput[type=reset],\ninput[type=submit],\nbutton {\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  color: inherit;\n  text-align: inherit;\n  background: none;\n  appearance: button;\n  user-select: none;\n}\n[role=button]:not(:disabled),\ninput[type=button]:not(:disabled),\ninput[type=reset]:not(:disabled),\ninput[type=submit]:not(:disabled),\nbutton:not(:disabled) {\n  cursor: pointer;\n}\n[role=button]:-moz-focusring,\ninput[type=button]:-moz-focusring,\ninput[type=reset]:-moz-focusring,\ninput[type=submit]:-moz-focusring,\nbutton:-moz-focusring {\n  outline: none;\n}\n[role=button]:focus,\ninput[type=button]:focus,\ninput[type=reset]:focus,\ninput[type=submit]:focus,\nbutton:focus {\n  outline: none;\n}\n\n/**\n * adds resets for links that are not covered by reset-and-normalize base\n */\na {\n  color: inherit;\n  text-decoration: none;\n}\na:-moz-focusring {\n  outline: none;\n}\na:focus {\n  outline: none;\n}\n\nhtml {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nbody {\n  font-family: Jeko-Bold, Raleway;\n  background-color: #f7f7f8;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 14px;\n  color: #3a3943;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.container {\n  flex: 1;\n  display: flex;\n  padding-inline: 8px;\n}\n\n@media (min-width: 768px) {\n  .container {\n    padding-inline: 16px;\n  }\n}\n@media (min-width: 1440px) {\n  .container {\n    max-width: 1440px;\n    width: 100%;\n    margin: 0 auto;\n    padding-inline: 24px;\n  }\n}\n@font-face {\n  font-family: Jeko-Bold;\n  src: url(../fonts/jeko-bold.ttf) format(\"truetype\");\n}\n@font-face {\n  font-family: Raleway;\n  src: url(../fonts/Raleway-SemiBold.ttf) format(\"truetype\");\n}\n.footer {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 0 8px;\n  flex: 0;\n  width: 100%;\n}\n.footer__menu, .footer__schedule, .footer__contact {\n  padding: 24px;\n  border: 1px solid #3a3943;\n  text-transform: uppercase;\n}\n.footer__menu {\n  display: grid;\n  gap: 32px;\n}\n.footer__menu-items {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__menu-square {\n  width: 24px;\n  height: 24px;\n  background-color: #3a3943;\n}\n.footer__top-wrapper {\n  display: grid;\n  gap: 8px;\n}\n.footer__bottom-wrapper {\n  display: grid;\n  gap: 8px;\n}\n.footer__schedule {\n  padding: 24px;\n  border: 1px solid #3a3943;\n  text-transform: uppercase;\n}\n.footer__schedule-items {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__schedule-item {\n  align-items: baseline;\n  display: flex;\n  gap: 16px;\n}\n.footer__schedule-line {\n  flex-grow: 1;\n  height: 0px;\n  opacity: 0.1;\n  border: 1px solid #3a3943;\n}\n.footer__contact {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n.footer__contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__contact-messangers {\n  display: flex;\n  gap: 8px;\n}\n.footer__contact-messanger {\n  border: 1px solid #3a3943;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer__contact-messanger img {\n  display: block;\n  max-width: 24px;\n  height: auto;\n}\n.footer__terms {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 40px 24px;\n}\n.footer__terms-copyright {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.footer__terms-img {\n  max-width: 143px;\n  height: auto;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    max-width: 1440px;\n    margin: 0 auto;\n    padding: 0 16px;\n    gap: 16px;\n  }\n  .footer__menu, .footer__schedule, .footer__contact {\n    padding: 32px;\n  }\n  .footer__bottom-wrapper {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n  .footer__menu {\n    grid-template-columns: repeat(3, auto);\n    column-gap: 16px;\n  }\n  .footer__terms {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 40px 0;\n  }\n  .footer__terms-copyright {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1440px) {\n  .footer {\n    padding: 0 24px;\n    gap: 16px;\n  }\n  .footer__top-wrapper {\n    grid-template-columns: 2fr 1fr;\n    gap: 16px;\n  }\n  .footer__bottom-wrapper {\n    grid-template-columns: 1fr;\n  }\n  .footer__contact {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .footer__menu-square {\n    align-self: flex-end;\n  }\n  .footer__menu-items {\n    font-size: 16px;\n    line-height: 16px;\n  }\n}\n.header {\n  padding: 16px 8px;\n  width: 100%;\n}\n.header__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header__img {\n  max-width: 127px;\n  height: auto;\n}\n\n.btn__menu {\n  padding: 0 16px;\n  height: 40px;\n  gap: 8px;\n}\n.btn__menu .btn__icon {\n  position: relative;\n  width: 24px;\n  height: 8px;\n}\n.btn__menu .btn__icon::after {\n  content: \"\";\n  position: absolute;\n  height: 1.5px;\n  width: 24px;\n  background-color: #3a3943;\n  box-shadow: 0 7px 0 0 #3a3943;\n}\n\n.menu {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .header {\n    padding: 16px;\n  }\n  .header__img {\n    max-width: 152px;\n    object-fit: contain;\n  }\n  .btn__menu {\n    height: 48px;\n    padding: 0 24px;\n    gap: 16px;\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .btn__menu .btn__icon {\n    height: 9px;\n  }\n  .btn__menu .btn__icon::after {\n    height: 2px;\n  }\n}\n@media (min-width: 1440px) {\n  .header {\n    padding: 24px;\n    max-width: 1440px;\n    margin: 0 auto;\n  }\n  .menu {\n    display: flex;\n    gap: 56px;\n    align-items: center;\n    font-size: 18px;\n    line-height: 18px;\n  }\n  .btn__menu {\n    height: 48px;\n    padding: 0 24px;\n    gap: 16px;\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .btn__menu .btn__icon {\n    height: 9px;\n  }\n  .btn__menu .btn__icon::after {\n    height: 2px;\n  }\n}\n.swiper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.swiper-slide img {\n  display: block;\n  width: 100%;\n  max-height: 176px;\n  object-position: center;\n}\n.swiper-text {\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  gap: 16px;\n  color: #f7f7f8;\n}\n.swiper-title {\n  font-size: 24px;\n  line-height: 28.8px;\n}\n.swiper-pagination-bullet {\n  background-color: transparent;\n  border: 1px solid #f7f7f8;\n  border-radius: 0;\n}\n.swiper-pagination-bullet-active {\n  background-color: #f7f7f8;\n  border-radius: 0;\n}\n.swiper-pagination-bullets {\n  display: flex;\n  padding: 0 24px 24px 24px;\n}\n.swiper-text-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.swiper-arrow-wrapper {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 24px;\n  color: #f7f7f8;\n}\n.swiper-arrow {\n  color: #f7f7f8;\n}\n.swiper-image-wrapper {\n  width: 100%;\n  position: relative;\n  display: inline-block;\n}\n.swiper-square {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  background-color: #f7f7f8;\n  bottom: 20px;\n  left: 16px;\n}\n.swiper-triangle {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  max-width: 64px;\n  height: auto;\n}\n\n@media (min-width: 768px) {\n  .swiper-slide img {\n    max-height: 361px;\n  }\n  .swiper-text {\n    gap: 24px;\n    padding: 32px;\n  }\n  .swiper-title {\n    font-size: 32px;\n    line-height: 38.4px;\n  }\n  .swiper-paragraph {\n    font-size: 16px;\n    line-height: 16px;\n  }\n  .swiper-triangle {\n    max-width: 120px;\n  }\n  .swiper-triangle svg {\n    width: 120px;\n    height: 120px;\n  }\n}\n@media (min-width: 1440px) {\n  .swiper-slide img {\n    max-height: 395px;\n  }\n  .swiper-title {\n    font-size: 40px;\n    line-height: 48px;\n  }\n  .swiper-triangle {\n    max-width: 138px;\n  }\n  .swiper-triangle svg {\n    width: 138px;\n    height: 138px;\n  }\n}\n.btn {\n  color: #3a3943;\n  border: 1px solid #3a3943;\n  text-transform: uppercase;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn__type {\n  padding: 0 40px;\n  height: 56px;\n}\n\n@media (min-width: 768px) {\n  .btn__type {\n    font-size: 16px;\n    line-height: 16px;\n    height: 64px;\n  }\n}\n.main {\n  padding: 16px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: relative;\n}\n.main__grid {\n  display: grid;\n  gap: 8px;\n}\n.main__grid-cards {\n  display: grid;\n  gap: 8px;\n}\n.main__grid-card {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  padding: 8px;\n  min-height: 200px;\n}\n.main__grid-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 16px;\n  font-size: 24px;\n  line-height: 24px;\n}\n.main__grid-img {\n  max-width: 48px;\n  height: auto;\n}\n.main__grid-arrow {\n  padding: 24px;\n  align-self: flex-end;\n}\n\n.block {\n  min-width: 0;\n  height: 360px;\n  padding: 4px;\n  background-color: #195734;\n}\n\n.application {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #3a3943;\n  padding: 24px;\n  height: 300px;\n}\n.application__text {\n  max-width: 280px;\n  font-size: 20px;\n  line-height: 28px;\n  padding: 0px 24px 0px 0px;\n}\n.application__icon {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n\n.burger {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  background-color: #f7f7f8;\n  padding-bottom: 16px;\n}\n.burger__visible {\n  display: flex;\n}\n.burger__menu {\n  display: grid;\n  width: 100%;\n  gap: 16px;\n}\n.burger__menu-cards1, .burger__menu-cards2 {\n  display: grid;\n  gap: 8px;\n}\n.burger__menu-cards1 {\n  margin-bottom: -8px;\n}\n.burger__menu-grid {\n  display: grid;\n  gap: 8px;\n}\n.burger__menu-card {\n  padding: 24px;\n  border: 1px solid #157946;\n}\n.burger__menu-text {\n  font-size: 18px;\n  line-height: 18px;\n}\n\n.decor {\n  width: 100%;\n  height: 224px;\n  position: relative;\n  display: none;\n}\n.decor__square {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 28px;\n  height: 28px;\n  background-color: #3a3943;\n}\n.decor__triangle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 112px;\n}\n\n.hidden {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .main__grid-cards {\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n  }\n  .main__grid-card {\n    min-height: 240px;\n  }\n  .main__grid-text {\n    padding: 24px;\n  }\n  .application {\n    padding: 32px;\n  }\n  .application__text {\n    max-width: 560px;\n    font-size: 24px;\n    line-height: 33.6px;\n    padding: 0px 24px 0px 0px;\n  }\n  .application__icon svg {\n    width: 120px;\n    height: 120px;\n  }\n  .burger__menu {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .burger__menu-cards1, .burger__menu-cards2 {\n    gap: 16px;\n  }\n  .burger__menu-cards1 {\n    grid-area: 1/1/2/2;\n    margin: 0;\n  }\n  .burger__menu-cards1 {\n    grid-area: 2/1/3/2;\n  }\n  .burger__menu-text {\n    font-size: 20px;\n    line-height: 20px;\n  }\n  .burger__menu-grid {\n    gap: 16px;\n  }\n  .burger__footer-menu {\n    grid-template-columns: 1fr;\n    grid-area: 1/2/3/3;\n    gap: 0;\n  }\n  .footer__menu-square {\n    display: none;\n  }\n  .block {\n    height: 656px;\n  }\n  .decor {\n    display: block;\n    grid-column-start: span 2;\n  }\n}\n@media (min-width: 1440px) {\n  .main__grid {\n    grid-template-columns: 1.4fr 1fr;\n    gap: 16px;\n  }\n  .main__grid-cards {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .main__grid-card {\n    min-height: 300px;\n  }\n  .application__text {\n    max-width: 500px;\n    font-size: 28px;\n    line-height: 33.6px;\n  }\n  .application__icon svg {\n    width: 144px;\n    height: 144px;\n  }\n  .btn__application {\n    align-self: flex-start;\n  }\n  .burger__menu {\n    grid-template-columns: 40% 45% 13%;\n  }\n  .burger__menu-card {\n    padding: 32px;\n  }\n  .burger__menu-cards1 {\n    grid-area: 1/1/3/2;\n  }\n  .burger__menu-cards2 {\n    grid-area: 3/1/5/2;\n  }\n  .burger__menu-text {\n    font-size: 24px;\n    line-height: 24px;\n  }\n  .burger__footer-menu {\n    grid-template-columns: 1fr 1fr;\n    grid-area: 1/2/3/3;\n  }\n  .burger__footer-schedule {\n    grid-area: 3/2/4/3;\n  }\n  .burger__footer-contact {\n    grid-area: 4/2/5/3;\n  }\n  .decor {\n    height: 100%;\n    grid-area: 1/3/5/4;\n  }\n  .block {\n    height: 680px;\n  }\n}","/**\n * adds resets for buttons that are not covered by reset-and-normalize base\n */\n\n[role=\"button\"],\ninput[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"],\nbutton {\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  color: inherit;\n  text-align: inherit;\n  background: none;\n  appearance: button;\n  user-select: none;\n\n  &:not(:disabled) {\n    cursor: pointer;\n  }\n\n  &:-moz-focusring {\n    outline: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n}\n","/**\n * adds resets for links that are not covered by reset-and-normalize base\n */\n\na {\n  color: inherit;\n  text-decoration: none;\n\n  &:-moz-focusring {\n    outline:none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n}\n","html {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbody {\r\n  font-family: Jeko-Bold, Raleway;\r\n  background-color: $white;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n  color: $black;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container {\r\n  flex: 1;\r\n  display: flex;\r\n  padding-inline: 8px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    padding-inline: 16px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .container {\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding-inline: 24px;\r\n  }\r\n}\r\n","$white: #f7f7f8;\r\n$black: #3a3943;\r\n$green: #157946;\r\n$purple: #322857;\r\n$gray: #374b4b;\r\n\r\n$satured-pink: #a91f4c;\r\n$satured-green: #30733e;\r\n$satured-orange: #ea711a;\r\n$satured-gray: #738992;\r\n$satured-red: #993333;\r\n$satured-cyan: #125a67;\r\n\r\n$satured-dark-green: #195734;\r\n","@font-face {\r\n    font-family: Jeko-Bold;\r\n    src: url(../fonts/jeko-bold.ttf) format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: Raleway;\r\n    src: url(../fonts/Raleway-SemiBold.ttf) format(\"truetype\");\r\n}",".footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n  padding: 0 8px;\r\n  flex: 0;\r\n  width: 100%;\r\n\r\n  &__menu,\r\n  &__schedule,\r\n  &__contact {\r\n    padding: 24px;\r\n    border: 1px solid $black;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  &__menu {\r\n    display: grid;\r\n    gap: 32px;\r\n\r\n    &-items {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-square {\r\n      width: 24px;\r\n      height: 24px;\r\n      background-color: $black;\r\n    }\r\n  }\r\n\r\n  &__top-wrapper {\r\n    display: grid;\r\n    gap: 8px;\r\n  }\r\n\r\n  &__bottom-wrapper {\r\n    display: grid;\r\n    gap: 8px;\r\n  }\r\n\r\n  &__schedule {\r\n    padding: 24px;\r\n    border: 1px solid $black;\r\n    text-transform: uppercase;\r\n\r\n    &-items {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-item {\r\n      align-items: baseline;\r\n      display: flex;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-line {\r\n      flex-grow: 1;\r\n      height: 0px;\r\n      opacity: 0.1;\r\n      border: 1px solid #3a3943;\r\n    }\r\n  }\r\n\r\n  &__contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 32px;\r\n\r\n    &-info {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-messangers {\r\n      display: flex;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-messanger {\r\n      border: 1px solid $black;\r\n      width: 40px;\r\n      height: 40px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n\r\n    &-messanger img {\r\n      display: block;\r\n      max-width: 24px;\r\n      height: auto;\r\n    }\r\n  }\r\n\r\n  &__terms {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 24px;\r\n    padding: 40px 24px;\r\n\r\n    &-copyright {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 16px;\r\n    }\r\n\r\n    &-img {\r\n      max-width: 143px;\r\n      height: auto;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .footer {\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n    padding: 0 16px;\r\n    gap: 16px;\r\n\r\n    &__menu,\r\n    &__schedule,\r\n    &__contact {\r\n      padding: 32px;\r\n    }\r\n\r\n    &__bottom-wrapper {\r\n      grid-template-columns: 1fr 1fr;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__menu {\r\n      grid-template-columns: repeat(3, auto);\r\n      column-gap: 16px;\r\n    }\r\n\r\n    &__terms {\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      padding: 40px 0;\r\n\r\n      &-copyright {\r\n        flex-direction: row;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .footer {\r\n    padding: 0 24px;\r\n    gap: 16px;\r\n\r\n    &__top-wrapper {\r\n      grid-template-columns: 2fr 1fr;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__bottom-wrapper {\r\n      grid-template-columns: 1fr;\r\n    }\r\n\r\n    &__contact {\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n    }\r\n\r\n    &__menu-square {\r\n      align-self: flex-end;\r\n    }\r\n\r\n    &__menu-items {\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n    }\r\n  }\r\n}\r\n",".header {\r\n  padding: 16px 8px;\r\n  width: 100%;\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  &__img {\r\n    max-width: 127px;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n.btn__menu {\r\n  padding: 0 16px;\r\n  height: 40px;\r\n  gap: 8px;\r\n\r\n  .btn__icon {\r\n    position: relative;\r\n    width: 24px;\r\n    height: 8px;\r\n\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      height: 1.5px;\r\n      width: 24px;\r\n      background-color: $black;\r\n      box-shadow: 0 7px 0 0 $black;\r\n    }\r\n  }\r\n}\r\n\r\n.menu {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .header {\r\n    padding: 16px;\r\n\r\n    &__img {\r\n      max-width: 152px;\r\n      object-fit: contain;\r\n    }\r\n  }\r\n\r\n  .btn__menu {\r\n    height: 48px;\r\n    padding: 0 24px;\r\n    gap: 16px;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n\r\n    .btn__icon {\r\n      height: 9px;\r\n\r\n      &::after {\r\n        height: 2px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .header {\r\n    padding: 24px;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .menu {\r\n    display: flex;\r\n    gap: 56px;\r\n    align-items: center;\r\n    font-size: 18px;\r\n    line-height: 18px;\r\n  }\r\n\r\n  .btn__menu {\r\n    height: 48px;\r\n    padding: 0 24px;\r\n    gap: 16px;\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n\r\n    .btn__icon {\r\n      height: 9px;\r\n\r\n      &::after {\r\n        height: 2px;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".swiper {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n\r\n  &-slide img {\r\n    display: block;\r\n    width: 100%;\r\n    max-height: 176px;\r\n    object-position: center;\r\n  }\r\n\r\n  &-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 24px;\r\n    gap: 16px;\r\n    color: $white;\r\n  }\r\n\r\n  &-title {\r\n    font-size: 24px;\r\n    line-height: 28.8px;\r\n  }\r\n\r\n  &-pagination-bullet {\r\n    background-color: transparent;\r\n    border: 1px solid $white;\r\n    border-radius: 0;\r\n  }\r\n\r\n  &-pagination-bullet-active {\r\n    background-color: $white;\r\n    border-radius: 0;\r\n  }\r\n\r\n  &-pagination-bullets {\r\n    display: flex;\r\n    padding: 0 24px 24px 24px;\r\n  }\r\n\r\n  &-text-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &-arrow-wrapper {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 24px;\r\n    color: $white;\r\n  }\r\n\r\n  &-arrow {\r\n    color: $white;\r\n  }\r\n\r\n  &-image-wrapper {\r\n    width: 100%;\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n  &-square {\r\n    position: absolute;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: $white;\r\n    bottom: 20px;\r\n    left: 16px;\r\n  }\r\n\r\n  &-triangle {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n    max-width: 64px;\r\n    height: auto;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .swiper {\r\n    &-slide img {\r\n      max-height: 361px;\r\n    }\r\n\r\n    &-text {\r\n      gap: 24px;\r\n      padding: 32px;\r\n    }\r\n\r\n    &-title {\r\n      font-size: 32px;\r\n      line-height: 38.4px;\r\n    }\r\n\r\n    &-paragraph {\r\n      font-size: 16px;\r\n      line-height: 16px;\r\n    }\r\n\r\n    &-triangle {\r\n      max-width: 120px;\r\n    }\r\n\r\n    &-triangle svg {\r\n      width: 120px;\r\n      height: 120px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .swiper {\r\n    &-slide img {\r\n      max-height: 395px;\r\n    }\r\n\r\n    &-title {\r\n      font-size: 40px;\r\n      line-height: 48px;\r\n    }\r\n\r\n    &-triangle {\r\n      max-width: 138px;\r\n    }\r\n\r\n    &-triangle svg {\r\n      width: 138px;\r\n      height: 138px;\r\n    }\r\n  }\r\n}\r\n",".btn {\r\n  color: $black;\r\n  border: 1px solid $black;\r\n  text-transform: uppercase;\r\n  background-color: transparent;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.btn__type {\r\n  padding: 0 40px;\r\n  height: 56px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .btn__type {\r\n    font-size: 16px;\r\n    line-height: 16px;\r\n    height: 64px;\r\n  }\r\n}\r\n","@import '../components/index.scss';\r\n\r\n.main {\r\n  padding: 16px 0;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  position: relative;\r\n\r\n  &__grid {\r\n    display: grid;\r\n    gap: 8px;\r\n\r\n    &-cards {\r\n      display: grid;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-card {\r\n      display: flex;\r\n      gap: 8px;\r\n      justify-content: space-between;\r\n      padding: 8px;\r\n      min-height: 200px;\r\n    }\r\n\r\n    &-text {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n      padding: 16px;\r\n      font-size: 24px;\r\n      line-height: 24px;\r\n    }\r\n\r\n    &-img {\r\n      max-width: 48px;\r\n      height: auto;\r\n    }\r\n\r\n    &-arrow {\r\n      padding: 24px;\r\n      align-self: flex-end;\r\n    }\r\n  }\r\n}\r\n\r\n.block {\r\n  min-width: 0;\r\n  height: 360px;\r\n  padding: 4px;\r\n  background-color: $satured-dark-green;\r\n}\r\n\r\n.application {\r\n  display: flex;\r\n  position: relative;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border: 1px solid $black;\r\n  padding: 24px;\r\n  height: 300px;\r\n\r\n  &__text {\r\n    max-width: 280px;\r\n    font-size: 20px;\r\n    line-height: 28px;\r\n    padding: 0px 24px 0px 0px;\r\n  }\r\n\r\n  &__icon {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 8px;\r\n  }\r\n}\r\n\r\n.burger {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  z-index: 10;\r\n  background-color: $white;\r\n  padding-bottom: 16px;\r\n\r\n  &__visible {\r\n    display: flex;\r\n  }\r\n\r\n  &__menu {\r\n    display: grid;\r\n    width: 100%;\r\n    gap: 16px;\r\n\r\n    &-cards1,\r\n    &-cards2 {\r\n      display: grid;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-cards1 {\r\n      margin-bottom: -8px;\r\n    }\r\n\r\n    &-grid {\r\n      display: grid;\r\n      gap: 8px;\r\n    }\r\n\r\n    &-card {\r\n      padding: 24px;\r\n      border: 1px solid $green;\r\n    }\r\n\r\n    &-text {\r\n      font-size: 18px;\r\n      line-height: 18px;\r\n    }\r\n  }\r\n}\r\n\r\n.decor {\r\n  width: 100%;\r\n  height: 224px;\r\n  position: relative;\r\n  display: none;\r\n\r\n  &__square {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 28px;\r\n    height: 28px;\r\n    background-color: $black;\r\n  }\r\n\r\n  &__triangle {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 112px;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .main {\r\n    &__grid-cards {\r\n      grid-template-columns: 1fr 1fr;\r\n      gap: 16px;\r\n    }\r\n\r\n    &__grid-card {\r\n      min-height: 240px;\r\n    }\r\n\r\n    &__grid-text {\r\n      padding: 24px;\r\n    }\r\n  }\r\n\r\n  .application {\r\n    padding: 32px;\r\n\r\n    &__text {\r\n      max-width: 560px;\r\n      font-size: 24px;\r\n      line-height: 33.6px;\r\n      padding: 0px 24px 0px 0px;\r\n    }\r\n\r\n    &__icon svg {\r\n      width: 120px;\r\n      height: 120px;\r\n    }\r\n  }\r\n\r\n  .burger__menu {\r\n    grid-template-columns: repeat(2, 1fr);\r\n\r\n    &-cards1,\r\n    &-cards2 {\r\n      gap: 16px;\r\n    }\r\n\r\n    &-cards1 {\r\n      grid-area: 1 / 1 / 2 / 2;\r\n      margin: 0;\r\n    }\r\n\r\n    &-cards1 {\r\n      grid-area: 2 / 1 / 3 / 2;\r\n    }\r\n\r\n    &-text {\r\n      font-size: 20px;\r\n      line-height: 20px;\r\n    }\r\n\r\n    &-grid {\r\n      gap: 16px;\r\n    }\r\n  }\r\n\r\n  .burger__footer-menu {\r\n    grid-template-columns: 1fr;\r\n    grid-area: 1 / 2 / 3 / 3;\r\n    gap: 0;\r\n  }\r\n\r\n  .footer__menu-square {\r\n    display: none;\r\n  }\r\n\r\n  .block {\r\n    height: 656px;\r\n  }\r\n\r\n  .decor {\r\n    display: block;\r\n    grid-column-start: span 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .main {\r\n    &__grid {\r\n      grid-template-columns: 1.4fr 1fr;\r\n      gap: 16px;\r\n\r\n      &-cards {\r\n        grid-template-columns: 1fr;\r\n        gap: 16px;\r\n      }\r\n\r\n      &-card {\r\n        min-height: 300px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .application__text {\r\n    max-width: 500px;\r\n    font-size: 28px;\r\n    line-height: 33.6px;\r\n  }\r\n\r\n  .application__icon svg {\r\n    width: 144px;\r\n    height: 144px;\r\n  }\r\n\r\n  .btn__application {\r\n    align-self: flex-start;\r\n  }\r\n\r\n  .burger__menu {\r\n    grid-template-columns: 40% 45% 13%;\r\n\r\n    &-card {\r\n      padding: 32px;\r\n    }\r\n\r\n    &-cards1 {\r\n      grid-area: 1 / 1 / 3 / 2;\r\n    }\r\n\r\n    &-cards2 {\r\n      grid-area: 3 / 1 / 5 / 2;\r\n    }\r\n\r\n    &-text {\r\n      font-size: 24px;\r\n      line-height: 24px;\r\n    }\r\n  }\r\n\r\n  .burger__footer-menu {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-area: 1 / 2 / 3 / 3;\r\n  }\r\n\r\n  .burger__footer-schedule {\r\n    grid-area: 3 / 2 / 4 / 3;\r\n  }\r\n\r\n  .burger__footer-contact {\r\n    grid-area: 4 / 2 / 5 / 3;\r\n  }\r\n\r\n  .decor {\r\n    height: 100%;\r\n    grid-area: 1 / 3 / 5 / 4;\r\n  }\r\n\r\n  .block {\r\n    height: 680px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");

var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
var menuButton = document.querySelector('.btn__menu');
var burgerMenu = document.querySelector('.burger');
var gridCards = document.querySelector('.main__grid');
var application = document.querySelector('.application');
var footer = document.querySelector('footer');
function toggleMenu() {
  burgerMenu.classList.toggle('burger__visible');
  gridCards.classList.toggle('hidden');
  application.classList.toggle('hidden');
  footer.classList.toggle('hidden');
}
menuButton.addEventListener('click', toggleMenu);
/******/ })()
;
//# sourceMappingURL=main.469263e02527bcbfcc85.js.map