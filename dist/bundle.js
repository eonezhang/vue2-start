! function(t) {
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = { i: r, l: !1, exports: {} };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    var e = {};
    return n.m = t, n.c = e, n.i = function(t) {
        return t }, n.d = function(t, n, e) { Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: e }) }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"] } : function() {
            return t };
        return n.d(e, "a", e), e }, n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n) }, n.p = "", n(n.s = 1) }([function(t, n, e) { "use strict";

    function r() {
        return console.log("i foo"), "foo" }
    n.a = r }, function(t, n, e) { "use strict";
    var r = e(0),
        o = document.getElementById("output");
    o.innerHTML = "Output: " + e.i(r.a)() }]);
