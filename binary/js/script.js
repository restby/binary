// // /*stylelint-disable !webp.js*/
function testWebP(e) { var A = new Image; A.onload = A.onerror = function () { e(2 == A.height) }, A.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA" } testWebP(function (e) { 1 == e ? document.querySelector("body").classList.add("webp") : document.querySelector("body").classList.add("no-webp") });
;
// /*stylelint-disable !picturefill*/
!function (a) { var b = navigator.userAgent; a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () { var b, c = document.createElement("source"), d = function (a) { var b, d, e = a.parentNode; "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function () { e.removeChild(b) })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function () { a.sizes = d })) }, e = function () { var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]"); for (a = 0; a < b.length; a++)d(b[a]) }, f = function () { clearTimeout(b), b = setTimeout(e, 99) }, g = a.matchMedia && matchMedia("(orientation: landscape)"), h = function () { f(), g && g.addListener && g.addListener(f) }; return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f }()) }(window), function (a, b, c) { "use strict"; function d(a) { return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a } function e(b, c) { var d = new a.Image; return d.onerror = function () { A[b] = !1, ba() }, d.onload = function () { A[b] = 1 === d.width, ba() }, d.src = c, "pending" } function f() { M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em } function g(a, b, c, d) { var e, f, g, h; return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c } function h(a) { var b, c = s.getSet(a), d = !1; "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d } function i(a, b) { return a.res - b.res } function j(a, b, c) { var d; return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d } function k(a, b) { var c, d, e; if (a && b) for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)if (a === s.makeUrl(e[c].url)) { d = e[c]; break } return d } function l(a, b) { var c, d, e, f, g = a.getElementsByTagName("source"); for (c = 0, d = g.length; d > c; c++)e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({ srcset: f, media: e.getAttribute("media"), type: e.getAttribute("type"), sizes: e.getAttribute("sizes") }) } function m(a, b) { function c(b) { var c, d = b.exec(a.substring(m)); return d ? (c = d[0], m += c.length, c) : void 0 } function e() { var a, c, d, e, f, i, j, k, l, m = !1, o = {}; for (e = 0; e < h.length; e++)f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0; m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o)) } function f() { for (c(T), i = "", j = "in descriptor"; ;) { if (k = a.charAt(m), "in descriptor" === j) if (d(k)) i && (h.push(i), i = "", j = "after descriptor"); else { if ("," === k) return m += 1, i && h.push(i), void e(); if ("(" === k) i += k, j = "in parens"; else { if ("" === k) return i && h.push(i), void e(); i += k } } else if ("in parens" === j) if (")" === k) i += k, j = "in descriptor"; else { if ("" === k) return h.push(i), void e(); i += k } else if ("after descriptor" === j) if (d(k)); else { if ("" === k) return void e(); j = "in descriptor", m -= 1 } m += 1 } } for (var g, h, i, j, k, l = a.length, m = 0, n = []; ;) { if (c(U), m >= l) return n; g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f() } } function n(a) { function b(a) { function b() { f && (g.push(f), f = "") } function c() { g[0] && (h.push(g), g = []) } for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ;) { if (e = a.charAt(j), "" === e) return b(), c(), h; if (k) { if ("*" === e && "/" === a[j + 1]) { k = !1, j += 2, b(); continue } j += 1 } else { if (d(e)) { if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) { j += 1; continue } if (0 === i) { b(), j += 1; continue } e = " " } else if ("(" === e) i += 1; else if (")" === e) i -= 1; else { if ("," === e) { b(), c(), j += 1; continue } if ("/" === e && "*" === a.charAt(j + 1)) { k = !0, j += 2; continue } } f += e, j += 1 } } } function c(a) { return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1 } var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i; for (f = b(a), g = f.length, e = 0; g > e; e++)if (h = f[e], i = h[h.length - 1], c(i)) { if (j = i, h.pop(), 0 === h.length) return j; if (h = h.join(" "), s.matchesMedia(h)) return j } return "100vw" } b.createElement("picture"); var o, p, q, r, s = {}, t = !1, u = function () { }, v = b.createElement("img"), w = v.getAttribute, x = v.setAttribute, y = v.removeAttribute, z = b.documentElement, A = {}, B = { algorithm: "" }, C = "data-pfsrc", D = C + "set", E = navigator.userAgent, F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35, G = "currentSrc", H = /\s+\+?\d+(e\d+)?w/, I = /(\([^)]+\))?\s*(.+)/, J = a.picturefillCFG, K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", L = "font-size:100%!important;", M = !0, N = {}, O = {}, P = a.devicePixelRatio, Q = { px: 1, "in": 96 }, R = b.createElement("a"), S = !1, T = /^[ \t\n\r\u000c]+/, U = /^[, \t\n\r\u000c]+/, V = /^[^ \t\n\r\u000c]+/, W = /[,]+$/, X = /^\d+$/, Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, Z = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c) }, $ = function (a) { var b = {}; return function (c) { return c in b || (b[c] = a(c)), b[c] } }, _ = function () { var a = /^([\d\.]+)(em|vw|px)$/, b = function () { for (var a = arguments, b = 0, c = a[0]; ++b in a;)c = c.replace(a[b], a[++b]); return c }, c = $(function (a) { return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";" }); return function (b, d) { var e; if (!(b in N)) if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]]; else try { N[b] = new Function("e", c(b))(Q) } catch (f) { } return N[b] } }(), aa = function (a, b) { return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a }, ba = function (a) { if (t) { var c, d, e, f = a || {}; if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) { for (s.setupRun(f), S = !0, d = 0; e > d; d++)s.fillImg(c[d], f); s.teardownRun(f) } } }; o = a.console && console.warn ? function (a) { console.warn(a) } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function (a) { v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function () { var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d = b.createElement("img"), e = function () { var a = d.width; 2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba) }; d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function (a) { return R.href = a, R.href }), s.qsa = function (a, b) { return "querySelector" in a ? a.querySelectorAll(b) : [] }, s.matchesMedia = function () { return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) { return !a || matchMedia(a).matches } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments) }, s.mMQ = function (a) { return a ? _(a) : !0 }, s.calcLength = function (a) { var b = _(a, !0) || !1; return 0 > b && (b = !1), b }, s.supportsType = function (a) { return a ? A[a] : !0 }, s.parseSize = $(function (a) { var b = (a || "").match(I); return { media: b && b[1], length: b && b[2] } }), s.parseSet = function (a) { return a.cands || (a.cands = m(a.srcset, a)), a.cands }, s.getEmValue = function () { var a; if (!p && (a = b.body)) { var c = b.createElement("div"), d = z.style.cssText, e = a.style.cssText; c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e } return p || 16 }, s.calcListLength = function (a) { if (!(a in O) || B.uT) { var b = s.calcLength(n(a)); O[a] = b ? b : Q.width } return O[a] }, s.setRes = function (a) { var b; if (a) { b = s.parseSet(a); for (var c = 0, d = b.length; d > c; c++)aa(b[c], a.sizes) } return b }, s.setRes.res = aa, s.applySetCandidate = function (a, b) { if (a.length) { var c, d, e, f, h, k, l, m, n, o = b[s.ns], p = s.DPR; if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h) for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)if (c = a[d], c.res >= p) { e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c; break } h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b)) } }, s.setSrc = function (a, b) { var c; a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c)) }, s.getSet = function (a) { var b, c, d, e = !1, f = a[s.ns].sets; for (b = 0; b < f.length && !e; b++)if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) { "pending" === d && (c = d), e = c; break } return e }, s.parseSets = function (a, b, d) { var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(), j = a[s.ns]; (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = { srcset: j.srcset, sizes: w.call(a, "sizes") }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({ url: j.src, d: 1, set: f }))) : j.src && j.sets.push({ srcset: j.src, sizes: null }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0 }, s.fillImg = function (a, b) { var c, d = b.reselect || b.reevaluate; a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a)) }, s.setupRun = function () { (!S || M || P !== a.devicePixelRatio) && f() }, s.supPicture ? (ba = u, s.fillImg = u): !function(){ var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/, e = function () { var a = b.readyState || ""; f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f)) }, f = setTimeout(e, b.body ? 9 : 99), g = function (a, b) { var c, d, e = function () { var f = new Date - d; b > f ? c = setTimeout(e, b - f) : (c = null, a()) }; return function () { d = new Date, c || (c = setTimeout(e, b)) } }, h = z.clientHeight, i = function () { M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs() }; Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e) }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = { pf: s, push: function (a) { var b = a.shift(); "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({ reselect: !0 })) } }; for (; J && J.length;)a.picturefillCFG.push(J.shift()); a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function () { return ba }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")) }(window, document);
;
// /*stylelint-disable !ibg*/
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
;
// /*stylelint-disable !baguetteBox.js*/

(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.baguetteBox = factory();
  }
}(this, function () {
  'use strict';

  // SVG shapes used on the buttons
  var leftArrow = '<svg width="44" height="60">' +
    '<polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' +
    'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' +
    '</svg>',
    rightArrow = '<svg width="44" height="60">' +
      '<polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"' +
      'stroke-linecap="butt" fill="none" stroke-linejoin="round"/>' +
      '</svg>',
    closeX = '<svg width="30" height="30">' +
      '<g stroke="rgb(160,160,160)" stroke-width="4">' +
      '<line x1="5" y1="5" x2="25" y2="25"/>' +
      '<line x1="5" y1="25" x2="25" y2="5"/>' +
      '</g></svg>';
  // Global options and their defaults
  var options = {},
    defaults = {
      captions: true,
      buttons: 'auto',
      fullScreen: false,
      noScrollbars: false,
      bodyClass: 'baguetteBox-open',
      titleTag: false,
      async: false,
      preload: 2,
      animation: 'slideIn',
      afterShow: null,
      afterHide: null,
      onChange: null,
      overlayBackgroundColor: 'rgba(0,0,0,.8)'
    };
  // Object containing information about features compatibility
  var supports = {};
  // DOM Elements references
  var overlay, slider, previousButton, nextButton, closeButton;
  // An array with all images in the current gallery
  var currentGallery = [];
  // Current image index inside the slider
  var currentIndex = 0;
  // Visibility of the overlay
  var isOverlayVisible = false;
  // Touch event start position (for slide gesture)
  var touch = {};
  // If set to true ignore touch events because animation was already fired
  var touchFlag = false;
  // Regex pattern to match image files
  var regex = /.+\.(gif|jpe?g|png|webp)/i;
  // Object of all used galleries
  var data = {};
  // Array containing temporary images DOM elements
  var imagesElements = [];
  // The last focused element before opening the overlay
  var documentLastFocus = null;
  var overlayClickHandler = function (event) {
    // Close the overlay when user clicks directly on the background
    if (event.target.id.indexOf('baguette-img') !== -1) {
      hideOverlay();
    }
  };
  var previousButtonClickHandler = function (event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions
    showPreviousImage();
  };
  var nextButtonClickHandler = function (event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions
    showNextImage();
  };
  var closeButtonClickHandler = function (event) {
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true; // eslint-disable-line no-unused-expressions
    hideOverlay();
  };
  var touchstartHandler = function (event) {
    touch.count++;
    if (touch.count > 1) {
      touch.multitouch = true;
    }
    // Save x and y axis position
    touch.startX = event.changedTouches[0].pageX;
    touch.startY = event.changedTouches[0].pageY;
  };
  var touchmoveHandler = function (event) {
    // If action was already triggered or multitouch return
    if (touchFlag || touch.multitouch) {
      return;
    }
    event.preventDefault ? event.preventDefault() : event.returnValue = false; // eslint-disable-line no-unused-expressions
    var touchEvent = event.touches[0] || event.changedTouches[0];
    // Move at least 40 pixels to trigger the action
    if (touchEvent.pageX - touch.startX > 40) {
      touchFlag = true;
      showPreviousImage();
    } else if (touchEvent.pageX - touch.startX < -40) {
      touchFlag = true;
      showNextImage();
      // Move 100 pixels up to close the overlay
    } else if (touch.startY - touchEvent.pageY > 100) {
      hideOverlay();
    }
  };
  var touchendHandler = function () {
    touch.count--;
    if (touch.count <= 0) {
      touch.multitouch = false;
    }
    touchFlag = false;
  };
  var contextmenuHandler = function () {
    touchendHandler();
  };

  var trapFocusInsideOverlay = function (event) {
    if (overlay.style.display === 'block' && (overlay.contains && !overlay.contains(event.target))) {
      event.stopPropagation();
      initFocus();
    }
  };

  // forEach polyfill for IE8
  // http://stackoverflow.com/a/14827443/1077846
  /* eslint-disable */
  if (![].forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // filter polyfill for IE8
  // https://gist.github.com/eliperelman/1031656
  if (![].filter) {
    Array.prototype.filter = function (a, b, c, d, e) {
      c = this;
      d = [];
      for (e = 0; e < c.length; e++)
        a.call(b, c[e], e, c) && d.push(c[e]);
      return d;
    };
  }
  /* eslint-enable */

  // Script entry point
  function run(selector, userOptions) {
    // Fill supports object
    supports.transforms = testTransformsSupport();
    supports.svg = testSvgSupport();
    supports.passiveEvents = testPassiveEventsSupport();

    buildOverlay();
    removeFromCache(selector);
    return bindImageClickListeners(selector, userOptions);
  }

  function bindImageClickListeners(selector, userOptions) {
    // For each gallery bind a click event to every image inside it
    var galleryNodeList = document.querySelectorAll(selector);
    var selectorData = {
      galleries: [],
      nodeList: galleryNodeList
    };
    data[selector] = selectorData;

    [].forEach.call(galleryNodeList, function (galleryElement) {
      if (userOptions && userOptions.filter) {
        regex = userOptions.filter;
      }

      // Get nodes from gallery elements or single-element galleries
      var tagsNodeList = [];
      if (galleryElement.tagName === 'A') {
        tagsNodeList = [galleryElement];
      } else {
        tagsNodeList = galleryElement.getElementsByTagName('a');
      }

      // Filter 'a' elements from those not linking to images
      tagsNodeList = [].filter.call(tagsNodeList, function (element) {
        if (element.className.indexOf(userOptions && userOptions.ignoreClass) === -1) {
          return regex.test(element.href);
        }
      });
      if (tagsNodeList.length === 0) {
        return;
      }

      var gallery = [];
      [].forEach.call(tagsNodeList, function (imageElement, imageIndex) {
        var imageElementClickHandler = function (event) {
          event.preventDefault ? event.preventDefault() : event.returnValue = false; // eslint-disable-line no-unused-expressions
          prepareOverlay(gallery, userOptions);
          showOverlay(imageIndex);
        };
        var imageItem = {
          eventHandler: imageElementClickHandler,
          imageElement: imageElement
        };
        bind(imageElement, 'click', imageElementClickHandler);
        gallery.push(imageItem);
      });
      selectorData.galleries.push(gallery);
    });

    return selectorData.galleries;
  }

  function clearCachedData() {
    for (var selector in data) {
      if (data.hasOwnProperty(selector)) {
        removeFromCache(selector);
      }
    }
  }

  function removeFromCache(selector) {
    if (!data.hasOwnProperty(selector)) {
      return;
    }
    var galleries = data[selector].galleries;
    [].forEach.call(galleries, function (gallery) {
      [].forEach.call(gallery, function (imageItem) {
        unbind(imageItem.imageElement, 'click', imageItem.eventHandler);
      });

      if (currentGallery === gallery) {
        currentGallery = [];
      }
    });

    delete data[selector];
  }

  function buildOverlay() {
    overlay = getByID('baguetteBox-overlay');
    // Check if the overlay already exists
    if (overlay) {
      slider = getByID('baguetteBox-slider');
      previousButton = getByID('previous-button');
      nextButton = getByID('next-button');
      closeButton = getByID('close-button');
      return;
    }
    // Create overlay element
    overlay = create('div');
    overlay.setAttribute('role', 'dialog');
    overlay.id = 'baguetteBox-overlay';
    document.getElementsByTagName('body')[0].appendChild(overlay);
    // Create gallery slider element
    slider = create('div');
    slider.id = 'baguetteBox-slider';
    overlay.appendChild(slider);
    // Create all necessary buttons
    previousButton = create('button');
    previousButton.setAttribute('type', 'button');
    previousButton.id = 'previous-button';
    previousButton.setAttribute('aria-label', 'Previous');
    previousButton.innerHTML = supports.svg ? leftArrow : '&lt;';
    overlay.appendChild(previousButton);

    nextButton = create('button');
    nextButton.setAttribute('type', 'button');
    nextButton.id = 'next-button';
    nextButton.setAttribute('aria-label', 'Next');
    nextButton.innerHTML = supports.svg ? rightArrow : '&gt;';
    overlay.appendChild(nextButton);

    closeButton = create('button');
    closeButton.setAttribute('type', 'button');
    closeButton.id = 'close-button';
    closeButton.setAttribute('aria-label', 'Close');
    closeButton.innerHTML = supports.svg ? closeX : '&times;';
    overlay.appendChild(closeButton);

    previousButton.className = nextButton.className = closeButton.className = 'baguetteBox-button';

    bindEvents();
  }

  function keyDownHandler(event) {
    switch (event.keyCode) {
      case 37: // Left arrow
        showPreviousImage();
        break;
      case 39: // Right arrow
        showNextImage();
        break;
      case 27: // Esc
        hideOverlay();
        break;
      case 36: // Home
        showFirstImage(event);
        break;
      case 35: // End
        showLastImage(event);
        break;
    }
  }

  function bindEvents() {
    var options = supports.passiveEvents ? { passive: true } : null;
    bind(overlay, 'click', overlayClickHandler);
    bind(previousButton, 'click', previousButtonClickHandler);
    bind(nextButton, 'click', nextButtonClickHandler);
    bind(closeButton, 'click', closeButtonClickHandler);
    bind(slider, 'contextmenu', contextmenuHandler);
    bind(overlay, 'touchstart', touchstartHandler, options);
    bind(overlay, 'touchmove', touchmoveHandler, options);
    bind(overlay, 'touchend', touchendHandler);
    bind(document, 'focus', trapFocusInsideOverlay, true);
  }

  function unbindEvents() {
    var options = supports.passiveEvents ? { passive: true } : null;
    unbind(overlay, 'click', overlayClickHandler);
    unbind(previousButton, 'click', previousButtonClickHandler);
    unbind(nextButton, 'click', nextButtonClickHandler);
    unbind(closeButton, 'click', closeButtonClickHandler);
    unbind(slider, 'contextmenu', contextmenuHandler);
    unbind(overlay, 'touchstart', touchstartHandler, options);
    unbind(overlay, 'touchmove', touchmoveHandler, options);
    unbind(overlay, 'touchend', touchendHandler);
    unbind(document, 'focus', trapFocusInsideOverlay, true);
  }

  function prepareOverlay(gallery, userOptions) {
    // If the same gallery is being opened prevent from loading it once again
    if (currentGallery === gallery) {
      return;
    }
    currentGallery = gallery;
    // Update gallery specific options
    setOptions(userOptions);
    // Empty slider of previous contents (more effective than .innerHTML = "")
    while (slider.firstChild) {
      slider.removeChild(slider.firstChild);
    }
    imagesElements.length = 0;

    var imagesFiguresIds = [];
    var imagesCaptionsIds = [];
    // Prepare and append images containers and populate figure and captions IDs arrays
    for (var i = 0, fullImage; i < gallery.length; i++) {
      fullImage = create('div');
      fullImage.className = 'full-image';
      fullImage.id = 'baguette-img-' + i;
      imagesElements.push(fullImage);

      imagesFiguresIds.push('baguetteBox-figure-' + i);
      imagesCaptionsIds.push('baguetteBox-figcaption-' + i);
      slider.appendChild(imagesElements[i]);
    }
    overlay.setAttribute('aria-labelledby', imagesFiguresIds.join(' '));
    overlay.setAttribute('aria-describedby', imagesCaptionsIds.join(' '));
  }

  function setOptions(newOptions) {
    if (!newOptions) {
      newOptions = {};
    }
    // Fill options object
    for (var item in defaults) {
      options[item] = defaults[item];
      if (typeof newOptions[item] !== 'undefined') {
        options[item] = newOptions[item];
      }
    }
    /* Apply new options */
    // Change transition for proper animation
    slider.style.transition = slider.style.webkitTransition = (options.animation === 'fadeIn' ? 'opacity .4s ease' :
      options.animation === 'slideIn' ? '' : 'none');
    // Hide buttons if necessary
    if (options.buttons === 'auto' && ('ontouchstart' in window || currentGallery.length === 1)) {
      options.buttons = false;
    }
    // Set buttons style to hide or display them
    previousButton.style.display = nextButton.style.display = (options.buttons ? '' : 'none');
    // Set overlay color
    try {
      overlay.style.backgroundColor = options.overlayBackgroundColor;
    } catch (e) {
      // Silence the error and continue
    }
  }

  function showOverlay(chosenImageIndex) {
    if (options.noScrollbars) {
      document.documentElement.style.overflowY = 'hidden';
      document.body.style.overflowY = 'scroll';
    }
    if (overlay.style.display === 'block') {
      return;
    }

    bind(document, 'keydown', keyDownHandler);
    currentIndex = chosenImageIndex;
    touch = {
      count: 0,
      startX: null,
      startY: null
    };
    loadImage(currentIndex, function () {
      preloadNext(currentIndex);
      preloadPrev(currentIndex);
    });

    updateOffset();
    overlay.style.display = 'block';
    if (options.fullScreen) {
      enterFullScreen();
    }
    // Fade in overlay
    setTimeout(function () {
      overlay.className = 'visible';
      if (options.bodyClass && document.body.classList) {
        document.body.classList.add(options.bodyClass);
      }
      if (options.afterShow) {
        options.afterShow();
      }
    }, 50);
    if (options.onChange) {
      options.onChange(currentIndex, imagesElements.length);
    }
    documentLastFocus = document.activeElement;
    initFocus();
    isOverlayVisible = true;
  }

  function initFocus() {
    if (options.buttons) {
      previousButton.focus();
    } else {
      closeButton.focus();
    }
  }

  function enterFullScreen() {
    if (overlay.requestFullscreen) {
      overlay.requestFullscreen();
    } else if (overlay.webkitRequestFullscreen) {
      overlay.webkitRequestFullscreen();
    } else if (overlay.mozRequestFullScreen) {
      overlay.mozRequestFullScreen();
    }
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  function hideOverlay() {
    if (options.noScrollbars) {
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    }
    if (overlay.style.display === 'none') {
      return;
    }

    unbind(document, 'keydown', keyDownHandler);
    // Fade out and hide the overlay
    overlay.className = '';
    setTimeout(function () {
      overlay.style.display = 'none';
      if (document.fullscreen) {
        exitFullscreen();
      }
      if (options.bodyClass && document.body.classList) {
        document.body.classList.remove(options.bodyClass);
      }
      if (options.afterHide) {
        options.afterHide();
      }
      documentLastFocus && documentLastFocus.focus();
      isOverlayVisible = false;
    }, 500);
  }

  function loadImage(index, callback) {
    var imageContainer = imagesElements[index];
    var galleryItem = currentGallery[index];

    // Return if the index exceeds prepared images in the overlay
    // or if the current gallery has been changed / closed
    if (typeof imageContainer === 'undefined' || typeof galleryItem === 'undefined') {
      return;
    }

    // If image is already loaded run callback and return
    if (imageContainer.getElementsByTagName('img')[0]) {
      if (callback) {
        callback();
      }
      return;
    }

    // Get element reference, optional caption and source path
    var imageElement = galleryItem.imageElement;
    var thumbnailElement = imageElement.getElementsByTagName('img')[0];
    var imageCaption = typeof options.captions === 'function' ?
      options.captions.call(currentGallery, imageElement) :
      imageElement.getAttribute('data-caption') || imageElement.title;
    var imageSrc = getImageSrc(imageElement);

    // Prepare figure element
    var figure = create('figure');
    figure.id = 'baguetteBox-figure-' + index;
    figure.innerHTML = '<div class="baguetteBox-spinner">' +
      '<div class="baguetteBox-double-bounce1"></div>' +
      '<div class="baguetteBox-double-bounce2"></div>' +
      '</div>';
    // Insert caption if available
    if (options.captions && imageCaption) {
      var figcaption = create('figcaption');
      figcaption.id = 'baguetteBox-figcaption-' + index;
      figcaption.innerHTML = imageCaption;
      figure.appendChild(figcaption);
    }
    imageContainer.appendChild(figure);

    // Prepare gallery img element
    var image = create('img');
    image.onload = function () {
      // Remove loader element
      var spinner = document.querySelector('#baguette-img-' + index + ' .baguetteBox-spinner');
      figure.removeChild(spinner);
      if (!options.async && callback) {
        callback();
      }
    };
    image.setAttribute('src', imageSrc);
    image.alt = thumbnailElement ? thumbnailElement.alt || '' : '';
    if (options.titleTag && imageCaption) {
      image.title = imageCaption;
    }
    figure.appendChild(image);

    // Run callback
    if (options.async && callback) {
      callback();
    }
  }

  // Get image source location, mostly used for responsive images
  function getImageSrc(image) {
    // Set default image path from href
    var result = image.href;
    // If dataset is supported find the most suitable image
    if (image.dataset) {
      var srcs = [];
      // Get all possible image versions depending on the resolution
      for (var item in image.dataset) {
        if (item.substring(0, 3) === 'at-' && !isNaN(item.substring(3))) {
          srcs[item.replace('at-', '')] = image.dataset[item];
        }
      }
      // Sort resolutions ascending
      var keys = Object.keys(srcs).sort(function (a, b) {
        return parseInt(a, 10) < parseInt(b, 10) ? -1 : 1;
      });
      // Get real screen resolution
      var width = window.innerWidth * window.devicePixelRatio;
      // Find the first image bigger than or equal to the current width
      var i = 0;
      while (i < keys.length - 1 && keys[i] < width) {
        i++;
      }
      result = srcs[keys[i]] || result;
    }
    return result;
  }

  // Return false at the right end of the gallery
  function showNextImage() {
    return show(currentIndex + 1);
  }

  // Return false at the left end of the gallery
  function showPreviousImage() {
    return show(currentIndex - 1);
  }

  // Return false at the left end of the gallery
  function showFirstImage(event) {
    if (event) {
      event.preventDefault();
    }
    return show(0);
  }

  // Return false at the right end of the gallery
  function showLastImage(event) {
    if (event) {
      event.preventDefault();
    }
    return show(currentGallery.length - 1);
  }

  /**
   * Move the gallery to a specific index
   * @param `index` {number} - the position of the image
   * @param `gallery` {array} - gallery which should be opened, if omitted assumes the currently opened one
   * @return {boolean} - true on success or false if the index is invalid
   */
  function show(index, gallery) {
    if (!isOverlayVisible && index >= 0 && index < gallery.length) {
      prepareOverlay(gallery, options);
      showOverlay(index);
      return true;
    }
    if (index < 0) {
      if (options.animation) {
        bounceAnimation('left');
      }
      return false;
    }
    if (index >= imagesElements.length) {
      if (options.animation) {
        bounceAnimation('right');
      }
      return false;
    }

    currentIndex = index;
    loadImage(currentIndex, function () {
      preloadNext(currentIndex);
      preloadPrev(currentIndex);
    });
    updateOffset();

    if (options.onChange) {
      options.onChange(currentIndex, imagesElements.length);
    }

    return true;
  }

  /**
   * Triggers the bounce animation
   * @param {('left'|'right')} direction - Direction of the movement
   */
  function bounceAnimation(direction) {
    slider.className = 'bounce-from-' + direction;
    setTimeout(function () {
      slider.className = '';
    }, 400);
  }

  function updateOffset() {
    var offset = -currentIndex * 100 + '%';
    if (options.animation === 'fadeIn') {
      slider.style.opacity = 0;
      setTimeout(function () {
        supports.transforms ?
          slider.style.transform = slider.style.webkitTransform = 'translate3d(' + offset + ',0,0)'
          : slider.style.left = offset;
        slider.style.opacity = 1;
      }, 400);
    } else {
      supports.transforms ?
        slider.style.transform = slider.style.webkitTransform = 'translate3d(' + offset + ',0,0)'
        : slider.style.left = offset;
    }
  }

  // CSS 3D Transforms test
  function testTransformsSupport() {
    var div = create('div');
    return typeof div.style.perspective !== 'undefined' || typeof div.style.webkitPerspective !== 'undefined';
  }

  // Inline SVG test
  function testSvgSupport() {
    var div = create('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg';
  }

  // Borrowed from https://github.com/seiyria/bootstrap-slider/pull/680/files
  /* eslint-disable getter-return */
  function testPassiveEventsSupport() {
    var passiveEvents = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          passiveEvents = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) { /* Silence the error and continue */ }

    return passiveEvents;
  }
  /* eslint-enable getter-return */

  function preloadNext(index) {
    if (index - currentIndex >= options.preload) {
      return;
    }
    loadImage(index + 1, function () {
      preloadNext(index + 1);
    });
  }

  function preloadPrev(index) {
    if (currentIndex - index >= options.preload) {
      return;
    }
    loadImage(index - 1, function () {
      preloadPrev(index - 1);
    });
  }

  function bind(element, event, callback, options) {
    if (element.addEventListener) {
      element.addEventListener(event, callback, options);
    } else {
      // IE8 fallback
      element.attachEvent('on' + event, function (event) {
        // `event` and `event.target` are not provided in IE8
        event = event || window.event;
        event.target = event.target || event.srcElement;
        callback(event);
      });
    }
  }

  function unbind(element, event, callback, options) {
    if (element.removeEventListener) {
      element.removeEventListener(event, callback, options);
    } else {
      // IE8 fallback
      element.detachEvent('on' + event, callback);
    }
  }

  function getByID(id) {
    return document.getElementById(id);
  }

  function create(element) {
    return document.createElement(element);
  }

  function destroyPlugin() {
    unbindEvents();
    clearCachedData();
    unbind(document, 'keydown', keyDownHandler);
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('baguetteBox-overlay'));
    data = {};
    currentGallery = [];
    currentIndex = 0;
  }

  return {
    run: run,
    show: show,
    showNext: showNextImage,
    showPrevious: showPreviousImage,
    hide: hideOverlay,
    destroy: destroyPlugin
  };
}));
;
;

// const mobileMenu = document.querySelector('.main-header__burger');
// const mapStatic = document.querySelector('.form__map-img');

/*burger & navigation*/
// mobileMenu.addEventListener('click', function (e) {
//   e.preventDefault();
//   document.querySelector('.main-header__burger').classList.toggle('active');
//   document.querySelector('.main-header').classList.toggle('active');
//   document.querySelector('.main-header__navigation').classList.toggle('active');
//   document.querySelector('body').classList.toggle('lock');
// });

/*no-js map */
// if (mapStatic) {
//   mapStatic.classList.remove('form__map--no-js');
// }

/*zoom gallery/baguetteBox */
const baguetteBoxGallery = document.querySelectorAll('.gallery');
if (baguetteBoxGallery.length > 0) {
  baguetteBox.run('.gallery', {});
}

/*filter */
let filterItems = document.querySelectorAll('.filter__item');
let filterContent = document.querySelectorAll('.filter-content__col');
filterItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault;
    let dataAttr = item.getAttribute('data-filter');
    filterContent.forEach(function (i) {
      if (dataAttr == 1) {
        i.style.display = 'block';
      } else {
        i.style.display = 'none';
        if (i.classList.contains('filter-' + dataAttr)) {
          i.style.display = 'block';
        }
      }
    });
    filterItems.forEach(function (i) {
      i.classList.remove('active');
    });
    this.classList.add('active');
  });
});


