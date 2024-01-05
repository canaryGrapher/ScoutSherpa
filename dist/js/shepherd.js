/*! scoutsherpa.js 2.3.0 */

'use strict'; (function (R, qa) { "object" === typeof exports && "undefined" !== typeof module ? module.exports = qa() : "function" === typeof define && define.amd ? define(qa) : (R = "undefined" !== typeof globalThis ? globalThis : R || self, R.Shepherd = qa()) })(this, function () {
	function R(a, b) { return !1 !== b.clone && b.isMergeableObject(a) ? ha(Array.isArray(a) ? [] : {}, a, b) : a } function qa(a, b, c) { return a.concat(b).map(function (d) { return R(d, c) }) } function Db(a) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(a).filter(function (b) {
			return Object.propertyIsEnumerable.call(a,
				b)
		}) : []
	} function Ta(a) { return Object.keys(a).concat(Db(a)) } function Ua(a, b) { try { return b in a } catch (c) { return !1 } } function Eb(a, b, c) { var d = {}; c.isMergeableObject(a) && Ta(a).forEach(function (e) { d[e] = R(a[e], c) }); Ta(b).forEach(function (e) { if (!Ua(a, e) || Object.hasOwnProperty.call(a, e) && Object.propertyIsEnumerable.call(a, e)) if (Ua(a, e) && c.isMergeableObject(b[e])) { if (c.customMerge) { var f = c.customMerge(e); f = "function" === typeof f ? f : ha } else f = ha; d[e] = f(a[e], b[e], c) } else d[e] = R(b[e], c) }); return d } function ha(a,
		b, c) { c = c || {}; c.arrayMerge = c.arrayMerge || qa; c.isMergeableObject = c.isMergeableObject || Fb; c.cloneUnlessOtherwiseSpecified = R; var d = Array.isArray(b), e = Array.isArray(a); return d !== e ? R(b, c) : d ? c.arrayMerge(a, b, c) : Eb(a, b, c) } function ca(a) { return "function" === typeof a } function ra(a) { return "string" === typeof a } function Va(a) { let b = Object.getOwnPropertyNames(a.constructor.prototype); for (let c = 0; c < b.length; c++) { let d = b[c], e = a[d]; "constructor" !== d && "function" === typeof e && (a[d] = e.bind(a)) } return a } function Gb(a, b) {
			return c => { if (b.isOpen()) { let d = b.el && c.currentTarget === b.el; (void 0 !== a && c.currentTarget.matches(a) || d) && b.tour.next() } }
		} function Hb(a) { let { event: b, selector: c } = a.options.advanceOn || {}; if (b) { let d = Gb(c, a), e; try { e = document.querySelector(c) } catch (f) { } if (void 0 === c || e) e ? (e.addEventListener(b, d), a.on("destroy", () => e.removeEventListener(b, d))) : (document.body.addEventListener(b, d, !0), a.on("destroy", () => document.body.removeEventListener(b, d, !0))); else return console.error(`No element was found for the selector supplied to advanceOn: ${c}`) } else return console.error("advanceOn was defined, but no event name was passed.") }
	function Wa(a) { return ra(a) && "" !== a ? "-" !== a.charAt(a.length - 1) ? `${a}-` : a : "" } function Da() { let a = Date.now(); return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, b => { let c = (a + 16 * Math.random()) % 16 | 0; a = Math.floor(a / 16); return ("x" == b ? c : c & 3 | 8).toString(16) }) } function F() { F = Object.assign ? Object.assign.bind() : function (a) { for (var b = 1; b < arguments.length; b++) { var c = arguments[b], d; for (d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]) } return a }; return F.apply(this, arguments) } function Xa(a,
		b) { if (null == a) return {}; var c = {}, d = Object.keys(a), e; for (e = 0; e < d.length; e++) { var f = d[e]; 0 <= b.indexOf(f) || (c[f] = a[f]) } return c } function Ea(a) { return "y" === a ? "height" : "width" } function W(a) { return a.split("-")[0] } function ia(a) { return ["top", "bottom"].includes(W(a)) ? "x" : "y" } function Ya(a, b, c) {
			let { reference: d, floating: e } = a; var f = d.x + d.width / 2 - e.width / 2; let g = d.y + d.height / 2 - e.height / 2; a = ia(b); var h = Ea(a); h = d[h] / 2 - e[h] / 2; let k = W(b), l = "x" === a; switch (k) {
				case "top": f = { x: f, y: d.y - e.height }; break; case "bottom": f =
					{ x: f, y: d.y + d.height }; break; case "right": f = { x: d.x + d.width, y: g }; break; case "left": f = { x: d.x - e.width, y: g }; break; default: f = { x: d.x, y: d.y }
			}switch (b.split("-")[1]) { case "start": f[a] -= h * (c && l ? -1 : 1); break; case "end": f[a] += h * (c && l ? -1 : 1) }return f
		} function Za(a) { return "number" !== typeof a ? F({ top: 0, right: 0, bottom: 0, left: 0 }, a) : { top: a, right: a, bottom: a, left: a } } function va(a) { return F({}, a, { top: a.y, left: a.x, right: a.x + a.width, bottom: a.y + a.height }) } async function $a(a, b) {
			var c; void 0 === b && (b = {}); let { x: d, y: e, platform: f,
				rects: g, elements: h, strategy: k } = a, { boundary: l = "clippingAncestors", rootBoundary: n = "viewport", elementContext: p = "floating", altBoundary: m = !1, padding: u = 0 } = b; a = Za(u); b = h[m ? "floating" === p ? "reference" : "floating" : p]; b = va(await f.getClippingRect({ element: (null != (c = await (null == f.isElement ? void 0 : f.isElement(b))) ? c : 1) ? b : b.contextElement || await (null == f.getDocumentElement ? void 0 : f.getDocumentElement(h.floating)), boundary: l, rootBoundary: n, strategy: k })); var r = "floating" === p ? F({}, g.floating, { x: d, y: e }) : g.reference;
			let t = await (null == f.getOffsetParent ? void 0 : f.getOffsetParent(h.floating)); c = await (null == f.isElement ? void 0 : f.isElement(t)) ? await (null == f.getScale ? void 0 : f.getScale(t)) || { x: 1, y: 1 } : { x: 1, y: 1 }; r = va(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: r, offsetParent: t, strategy: k }) : r); return { top: (b.top - r.top + a.top) / c.y, bottom: (r.bottom - b.bottom + a.bottom) / c.y, left: (b.left - r.left + a.left) / c.x, right: (r.right - b.right + a.right) / c.x }
		} function wa(a) {
			return a.replace(/left|right|bottom|top/g,
				b => Ib[b])
		} function Jb(a, b, c) { void 0 === c && (c = !1); let d = a.split("-")[1], e = ia(a); a = Ea(e); c = "x" === e ? d === (c ? "end" : "start") ? "right" : "left" : "start" === d ? "bottom" : "top"; b.reference[a] > b.floating[a] && (c = wa(c)); return { main: c, cross: wa(c) } } function Fa(a) { return a.replace(/start|end/g, b => Kb[b]) } function Lb(a) { let b = wa(a); return [Fa(a), b, Fa(b)] } function Mb(a, b, c) {
			let d = ["left", "right"], e = ["right", "left"], f = ["top", "bottom"], g = ["bottom", "top"]; switch (a) {
				case "top": case "bottom": return c ? b ? e : d : b ? d : e; case "left": case "right": return b ?
					f : g; default: return []
			}
		} function Nb(a, b, c, d) { let e = a.split("-")[1]; a = Mb(W(a), "start" === c, d); e && (a = a.map(f => f + "-" + e), b && (a = a.concat(a.map(Fa)))); return a } async function Ob(a, b) {
			let { placement: c, platform: d, elements: e } = a; var f = await (null == d.isRTL ? void 0 : d.isRTL(e.floating)), g = W(c); let h = c.split("-")[1], k = "x" === ia(c); g = ["left", "top"].includes(g) ? -1 : 1; f = f && k ? -1 : 1; a = "function" === typeof b ? b(a) : b; let { mainAxis: l, crossAxis: n, alignmentAxis: p } = "number" === typeof a ? { mainAxis: a, crossAxis: 0, alignmentAxis: null } : F({
				mainAxis: 0,
				crossAxis: 0, alignmentAxis: null
			}, a); h && "number" === typeof p && (n = "end" === h ? -1 * p : p); return k ? { x: n * f, y: l * g } : { x: l * g, y: n * f }
		} function H(a) { var b; return (null == (b = a.ownerDocument) ? void 0 : b.defaultView) || window } function M(a) { return H(a).getComputedStyle(a) } function X(a) { return a instanceof H(a).Node ? (a.nodeName || "").toLowerCase() : "" } function ab() { if (Ga) return Ga; let a = navigator.userAgentData; return a && Array.isArray(a.brands) ? Ga = a.brands.map(b => b.brand + "/" + b.version).join(" ") : navigator.userAgent } function K(a) {
			return a instanceof
				H(a).HTMLElement
		} function L(a) { return a instanceof H(a).Element } function bb(a) { if ("undefined" === typeof ShadowRoot) return !1; let b = H(a).ShadowRoot; return a instanceof b || a instanceof ShadowRoot } function xa(a) { let { overflow: b, overflowX: c, overflowY: d, display: e } = M(a); return /auto|scroll|overlay|hidden|clip/.test(b + d + c) && !["inline", "contents"].includes(e) } function Ha(a) {
			let b = /firefox/i.test(ab()), c = M(a); a = c.backdropFilter || c.WebkitBackdropFilter; return "none" !== c.transform || "none" !== c.perspective || (a ? "none" !==
				a : !1) || b && "filter" === c.willChange || b && (c.filter ? "none" !== c.filter : !1) || ["transform", "perspective"].some(d => c.willChange.includes(d)) || ["paint", "layout", "strict", "content"].some(d => { let e = c.contain; return null != e ? e.includes(d) : !1 })
		} function Ia() { return /^((?!chrome|android).)*safari/i.test(ab()) } function Ja(a) { return ["html", "body", "#document"].includes(X(a)) } function cb(a) {
			var b = M(a); let c = parseFloat(b.width); b = parseFloat(b.height); var d = K(a); let e = d ? a.offsetWidth : c; a = d ? a.offsetHeight : b; if (d = ya(c) !==
				e || ya(b) !== a) c = e, b = a; return { width: c, height: b, fallback: d }
		} function db(a) { return L(a) ? a : a.contextElement } function ja(a) { var b = db(a); if (!K(b)) return eb; a = b.getBoundingClientRect(); let { width: c, height: d, fallback: e } = cb(b); b = (e ? ya(a.width) : a.width) / c; a = (e ? ya(a.height) : a.height) / d; b && Number.isFinite(b) || (b = 1); a && Number.isFinite(a) || (a = 1); return { x: b, y: a } } function da(a, b, c, d) {
			var e, f; void 0 === b && (b = !1); void 0 === c && (c = !1); var g = a.getBoundingClientRect(), h = db(a), k = eb; b && (d ? L(d) && (k = ja(d)) : k = ja(a)); a = h ? H(h) :
				window; b = Ia() && c; c = (g.left + (b ? (null == (e = a.visualViewport) ? void 0 : e.offsetLeft) || 0 : 0)) / k.x; e = (g.top + (b ? (null == (f = a.visualViewport) ? void 0 : f.offsetTop) || 0 : 0)) / k.y; f = g.width / k.x; g = g.height / k.y; if (h) for (h = H(h), k = d && L(d) ? H(d) : d, a = h.frameElement; a && d && k !== h;) { b = ja(a); let l = a.getBoundingClientRect(), n = getComputedStyle(a); l.x += (a.clientLeft + parseFloat(n.paddingLeft)) * b.x; l.y += (a.clientTop + parseFloat(n.paddingTop)) * b.y; c *= b.x; e *= b.y; f *= b.x; g *= b.y; c += l.x; e += l.y; a = H(a).frameElement } return va({
					width: f, height: g,
					x: c, y: e
				})
		} function Y(a) { return ((a instanceof H(a).Node ? a.ownerDocument : a.document) || window.document).documentElement } function za(a) { return L(a) ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop } : { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset } } function fb(a) { return da(Y(a)).left + za(a).scrollLeft } function sa(a) { if ("html" === X(a)) return a; a = a.assignedSlot || a.parentNode || bb(a) && a.host || Y(a); return bb(a) ? a.host : a } function gb(a) { a = sa(a); return Ja(a) ? a.ownerDocument.body : K(a) && xa(a) ? a : gb(a) } function ta(a,
			b) { var c; void 0 === b && (b = []); let d = gb(a); a = d === (null == (c = a.ownerDocument) ? void 0 : c.body); c = H(d); return a ? b.concat(c, c.visualViewport || [], xa(d) ? d : []) : b.concat(d, ta(d)) } function hb(a, b, c) {
				if ("viewport" === b) { b = H(a); var d = Y(a); b = b.visualViewport; a = d.clientWidth; d = d.clientHeight; var e = 0, f = 0; if (b) { a = b.width; d = b.height; let g = Ia(); if (!g || g && "fixed" === c) e = b.offsetLeft, f = b.offsetTop } c = { width: a, height: d, x: e, y: f } } else "document" === b ? (f = Y(a), c = Y(f), e = za(f), b = f.ownerDocument.body, a = ua(c.scrollWidth, c.clientWidth,
					b.scrollWidth, b.clientWidth), d = ua(c.scrollHeight, c.clientHeight, b.scrollHeight, b.clientHeight), f = -e.scrollLeft + fb(f), e = -e.scrollTop, "rtl" === M(b).direction && (f += ua(c.clientWidth, b.clientWidth) - a), c = { width: a, height: d, x: f, y: e }) : L(b) ? (a = da(b, !0, "fixed" === c), c = a.top + b.clientTop, a = a.left + b.clientLeft, d = K(b) ? ja(b) : { x: 1, y: 1 }, c = { width: b.clientWidth * d.x, height: b.clientHeight * d.y, x: a * d.x, y: c * d.y }) : (c = F({}, b), Ia() && (b = H(a), c.x -= (null == (d = b.visualViewport) ? void 0 : d.offsetLeft) || 0, c.y -= (null == (e = b.visualViewport) ?
						void 0 : e.offsetTop) || 0)); return va(c)
			} function Pb(a, b) { var c = b.get(a); if (c) return c; c = ta(a).filter(g => L(g) && "body" !== X(g)); let d = null, e = "fixed" === M(a).position, f = e ? sa(a) : a; for (; L(f) && !Ja(f);) { let g = M(f), h = Ha(f); "fixed" === g.position ? d = null : (e ? h || d : h || "static" !== g.position || !d || !["absolute", "fixed"].includes(d.position)) ? d = g : c = c.filter(k => k !== f); f = sa(f) } b.set(a, c); return c } function ib(a, b) { return K(a) && "fixed" !== M(a).position ? b ? b(a) : a.offsetParent : null } function jb(a, b) {
				let c = H(a); if (!K(a)) return c;
				let d = ib(a, b); for (; d && ["table", "td", "th"].includes(X(d)) && "static" === M(d).position;)d = ib(d, b); if (d && ("html" === X(d) || "body" === X(d) && "static" === M(d).position && !Ha(d))) return c; if (!(b = d)) a: { for (a = sa(a); K(a) && !Ja(a);)if (Ha(a)) { b = a; break a } else a = sa(a); b = null } return b || c
			} function Qb(a, b, c, d) {
				function e() { let r = da(a); !u || r.x === u.x && r.y === u.y && r.width === u.width && r.height === u.height || c(); u = r; m = requestAnimationFrame(e) } void 0 === d && (d = {}); let { ancestorScroll: f = !0, ancestorResize: g = !0, elementResize: h = !0, animationFrame: k =
					!1 } = d, l = f && !k, n = l || g ? [...(L(a) ? ta(a) : a.contextElement ? ta(a.contextElement) : []), ...ta(b)] : []; n.forEach(r => { l && r.addEventListener("scroll", c, { passive: !0 }); g && r.addEventListener("resize", c) }); let p = null; h && (p = new ResizeObserver(() => { c() }), L(a) && !k && p.observe(a), L(a) || !a.contextElement || k || p.observe(a.contextElement), p.observe(b)); let m, u = k ? da(a) : null; k && e(); c(); return () => {
						var r; n.forEach(t => { l && t.removeEventListener("scroll", c); g && t.removeEventListener("resize", c) }); null == (r = p) ? void 0 : r.disconnect();
						p = null; k && cancelAnimationFrame(m)
					}
			} function Rb(a) { a.cleanup && a.cleanup(); let b = a._getResolvedAttachToOptions(), c = b.element, d = Sb(b, a), e = void 0 === b || null === b ? !0 : !b.element || !b.on; e && (c = document.body, a.shepherdElementComponent.getElement().classList.add("shepherd-centered")); a.cleanup = Qb(c, a.el, () => { a.el ? Tb(c, a, d, e) : a.cleanup() }); a.target = b.element; return d } function Tb(a, b, c, d) { return Ub(a, b.el, c).then(Vb(b, d)).then(e => new Promise(f => { setTimeout(() => f(e), 300) })).then(e => { e && e.el && e.el.focus({ preventScroll: !0 }) }) }
	function Vb(a, b) { return c => { let { x: d, y: e, placement: f, middlewareData: g } = c; if (!a.el) return a; b ? Object.assign(a.el.style, { position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }) : Object.assign(a.el.style, { position: "absolute", left: `${d}px`, top: `${e}px` }); a.el.dataset.popperPlacement = f; if ((c = a.el.querySelector(".shepherd-arrow")) && g.arrow) { let { x: h, y: k } = g.arrow; Object.assign(c.style, { left: null != h ? `${h}px` : "", top: null != k ? `${k}px` : "" }) } return a } } function Sb(a, b) {
		let c = {
			strategy: "absolute",
			middleware: [Wb({ mainAxis: 15, crossAxis: 0 })]
		}; var d = b.options.arrow && b.el ? b.el.querySelector(".shepherd-arrow") : !1; void 0 !== a && null !== a && a.element && a.on && (c.middleware.push(Xb(), Yb({ limiter: Zb(), crossAxis: !0 })), d && c.middleware.push($b({ element: d })), c.placement = a.on); return Ka(b.options.floatingUIOptions || {}, c)
	} function I() { } function ac(a, b) { for (let c in b) a[c] = b[c]; return a } function ka(a) { return a() } function La(a) { return "function" === typeof a } function N(a, b) {
		return a != a ? b == b : a !== b || a && "object" === typeof a ||
			"function" === typeof a
	} function kb(a) { return null == a ? "" : a } function J(a) { a.parentNode && a.parentNode.removeChild(a) } function G(a) { return document.createElement(a) } function lb(a) { return document.createElementNS("http://www.w3.org/2000/svg", a) } function Aa(a, b, c, d) { a.addEventListener(b, c, d); return () => a.removeEventListener(b, c, d) } function y(a, b, c) { null == c ? a.removeAttribute(b) : a.getAttribute(b) !== c && a.setAttribute(b, c) } function mb(a, b) {
		let c = Object.getOwnPropertyDescriptors(a.__proto__); for (let d in b) null ==
			b[d] ? a.removeAttribute(d) : "style" === d ? a.style.cssText = b[d] : "__value" === d ? a.value = a[d] = b[d] : c[d] && c[d].set ? a[d] = b[d] : y(a, d, b[d])
	} function la(a, b, c) { a.classList[c ? "add" : "remove"](b) } function Ba() { if (!S) throw Error("Function called outside component initialization"); return S } function Ma(a) { ma.push(a) } function nb() {
		if (0 === na) {
			var a = S; do {
				try {
					for (; na < oa.length;) {
						let c = oa[na]; na++; S = c; var b = c.$$; if (null !== b.fragment) {
							b.update(); b.before_update.forEach(ka); let d = b.dirty; b.dirty = [-1]; b.fragment && b.fragment.p(b.ctx,
								d); b.after_update.forEach(Ma)
						}
					}
				} catch (c) { throw na = oa.length = 0, c; } S = null; for (na = oa.length = 0; pa.length;)pa.pop()(); for (let c = 0; c < ma.length; c += 1) { let d = ma[c]; Na.has(d) || (Na.add(d), d()) } ma.length = 0
			} while (oa.length); for (; ob.length;)ob.pop()(); Oa = !1; Na.clear(); S = a
		}
	} function bc(a) { let b = [], c = []; ma.forEach(d => -1 === a.indexOf(d) ? b.push(d) : c.push(d)); c.forEach(d => d()); ma = b } function Z() { ea = { r: 0, c: [], p: ea } } function aa() { ea.r || ea.c.forEach(ka); ea = ea.p } function z(a, b) { a && a.i && (Ca.delete(a), a.i(b)) } function B(a,
		b, c, d) { a && a.o ? Ca.has(a) || (Ca.add(a), ea.c.push(() => { Ca.delete(a); d && (c && a.d(1), d()) }), a.o(b)) : d && d() } function ba(a) { a && a.c() } function T(a, b, c, d) { let { fragment: e, after_update: f } = a.$$; e && e.m(b, c); d || Ma(() => { let g = a.$$.on_mount.map(ka).filter(La); a.$$.on_destroy ? a.$$.on_destroy.push(...g) : g.forEach(ka); a.$$.on_mount = [] }); f.forEach(Ma) } function U(a, b) { a = a.$$; null !== a.fragment && (bc(a.after_update), a.on_destroy.forEach(ka), a.fragment && a.fragment.d(b), a.on_destroy = a.fragment = null, a.ctx = []) } function O(a, b,
			c, d, e, f, g, h) {
				void 0 === h && (h = [-1]); let k = S; S = a; let l = a.$$ = { fragment: null, ctx: [], props: f, update: I, not_equal: e, bound: Object.create(null), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(b.context || (k ? k.$$.context : [])), callbacks: Object.create(null), dirty: h, skip_bound: !1, root: b.target || k.$$.root }; g && g(l.root); let n = !1; l.ctx = c ? c(a, b.props || {}, function (p, m) {
					let u = (2 >= arguments.length ? 0 : arguments.length - 2) ? 2 >= arguments.length ? void 0 : arguments[2] : m; if (l.ctx && e(l.ctx[p],
						l.ctx[p] = u)) { if (!l.skip_bound && l.bound[p]) l.bound[p](u); n && (-1 === a.$$.dirty[0] && (oa.push(a), Oa || (Oa = !0, cc.then(nb)), a.$$.dirty.fill(0)), a.$$.dirty[p / 31 | 0] |= 1 << p % 31) } return m
				}) : []; l.update(); n = !0; l.before_update.forEach(ka); l.fragment = d ? d(l.ctx) : !1; b.target && (b.hydrate ? (c = Array.from(b.target.childNodes), l.fragment && l.fragment.l(c), c.forEach(J)) : l.fragment && l.fragment.c(), b.intro && z(a.$$.fragment), T(a, b.target, b.anchor, b.customElement), nb()); S = k
	} function dc(a) {
		let b, c, d, e, f; return {
			c() {
				b = G("button");
				y(b, "type", "button"); y(b, "aria-label", c = a[3] ? a[3] : null); y(b, "class", d = kb(`shepherd-button ${a[1] || ""} ${a[4] ? "shepherd-button-secondary" : "shepherd-button-primary"}`) + " svelte-1ws16f4"); b.disabled = a[2]; y(b, "tabindex", "0")
			}, m(g, h) { g.insertBefore(b, h || null); b.innerHTML = a[5]; e || (f = Aa(b, "click", function () { La(a[0]) && a[0].apply(this, arguments) }), e = !0) }, p(g, h) {
				[h] = h; a = g; h & 32 && (b.innerHTML = a[5]); h & 8 && c !== (c = a[3] ? a[3] : null) && y(b, "aria-label", c); h & 18 && d !== (d = kb(`shepherd-button ${a[1] || ""} ${a[4] ? "shepherd-button-secondary" :
					"shepherd-button-primary"}`) + " svelte-1ws16f4") && y(b, "class", d); h & 4 && (b.disabled = a[2])
			}, i: I, o: I, d(g) { g && J(b); e = !1; f() }
		}
	} function ec(a, b, c) {
		function d(m) { return ca(m) ? m.call(f) : m } let { config: e, step: f } = b, g, h, k, l, n, p; a.$$set = m => { "config" in m && c(6, e = m.config); "step" in m && c(7, f = m.step) }; a.$$.update = () => {
			a.$$.dirty & 192 && (c(0, g = e.action ? e.action.bind(f.tour) : null), c(1, h = e.classes), c(2, k = e.disabled ? d(e.disabled) : !1), c(3, l = e.label ? d(e.label) : null), c(4, n = null != e.secondary && e.secondary ? !0 : !1), c(5, p = e.text ? d(e.text) :
				null))
		}; return [g, h, k, l, n, p, e, f]
	} function pb(a, b, c) { a = a.slice(); a[2] = b[c]; return a } function qb(a) {
		let b, c, d = a[1], e = []; for (let g = 0; g < d.length; g += 1)e[g] = rb(pb(a, d, g)); let f = g => B(e[g], 1, 1, () => { e[g] = null }); return {
			c() { for (let g = 0; g < e.length; g += 1)e[g].c(); b = document.createTextNode("") }, m(g, h) { for (let k = 0; k < e.length; k += 1)e[k] && e[k].m(g, h); g.insertBefore(b, h || null); c = !0 }, p(g, h) {
				if (h & 3) {
					d = g[1]; let k; for (k = 0; k < d.length; k += 1) {
						let l = pb(g, d, k); e[k] ? (e[k].p(l, h), z(e[k], 1)) : (e[k] = rb(l), e[k].c(), z(e[k], 1), e[k].m(b.parentNode,
							b))
					} Z(); for (k = d.length; k < e.length; k += 1)f(k); aa()
				}
			}, i(g) { if (!c) { for (g = 0; g < d.length; g += 1)z(e[g]); c = !0 } }, o(g) { e = e.filter(Boolean); for (g = 0; g < e.length; g += 1)B(e[g]); c = !1 }, d(g) { var h = e; for (let k = 0; k < h.length; k += 1)h[k] && h[k].d(g); g && J(b) }
		}
	} function rb(a) { let b, c; b = new fc({ props: { config: a[2], step: a[0] } }); return { c() { ba(b.$$.fragment) }, m(d, e) { T(b, d, e); c = !0 }, p(d, e) { let f = {}; e & 2 && (f.config = d[2]); e & 1 && (f.step = d[0]); b.$set(f) }, i(d) { c || (z(b.$$.fragment, d), c = !0) }, o(d) { B(b.$$.fragment, d); c = !1 }, d(d) { U(b, d) } } } function gc(a) {
		let b,
		c, d, e = a[1] && qb(a); return { c() { b = G("div"); c = G("div"); e && e.c(); y(c, "class", "button-container"); y(b, "class", "shepherd-footer") }, m(f, g) { f.insertBefore(b, g || null); b.appendChild(c); e && e.m(c, null); d = !0 }, p(f, g) { [g] = g; f[1] ? e ? (e.p(f, g), g & 2 && z(e, 1)) : (e = qb(f), e.c(), z(e, 1), e.m(c, null)) : e && (Z(), B(e, 1, 1, () => { e = null }), aa()) }, i(f) { d || (z(e), d = !0) }, o(f) { B(e); d = !1 }, d(f) { f && J(b); e && e.d() } }
	} function hc(a, b, c) {
		let d, { step: e } = b; a.$$set = f => { "step" in f && c(0, e = f.step) }; a.$$.update = () => { a.$$.dirty & 1 && c(1, d = e.options.buttons) };
		return [e, d]
	} function ic(a) {
		let b, c, d, e, f, g; return {
			c() { b = G("div"); c = G("div"); d = G("span"); d.textContent = "\u00d7"; y(d, "aria-hidden", "true"); y(d, "class", "svelte-1qs1ew2"); y(c, "aria-label", e = a[0].label ? a[0].label : "Close Tour"); y(c, "class", "shepherd-cancel-icon svelte-1qs1ew2"); y(c, "type", "button"); y(b, "class", "shepherd-cancel-icon-container svelte-1qs1ew2") }, m(h, k) { h.insertBefore(b, k || null); b.appendChild(c); c.appendChild(d); f || (g = Aa(c, "click", a[1]), f = !0) }, p(h, k) {
				[k] = k; k & 1 && e !== (e = h[0].label ? h[0].label :
					"Close Tour") && y(c, "aria-label", e)
			}, i: I, o: I, d(h) { h && J(b); f = !1; g() }
		}
	} function jc(a, b, c) { let { cancelIcon: d, step: e } = b; a.$$set = f => { "cancelIcon" in f && c(0, d = f.cancelIcon); "step" in f && c(2, e = f.step) }; return [d, f => { f.preventDefault(); e.cancel() }, e] } function kc(a) { let b; return { c() { b = G("h3"); y(b, "id", a[1]); y(b, "class", "shepherd-title") }, m(c, d) { c.insertBefore(b, d || null); a[3](b) }, p(c, d) { [d] = d; d & 2 && y(b, "id", c[1]) }, i: I, o: I, d(c) { c && J(b); a[3](null) } } } function lc(a, b, c) {
		let { labelId: d, element: e, title: f } = b; Ba().$$.after_update.push(() => { ca(f) && c(2, f = f()); let g = String(f).split("/"); c(0, e.innerHTML = "<span class='currentStepIndicatorTitle'>" + g[0] + "</span><span class='totalStepsIndicatorTitle'>/" + g[1] + " steps</span>", e) }); a.$$set = g => { "labelId" in g && c(1, d = g.labelId); "element" in g && c(0, e = g.element); "title" in g && c(2, f = g.title) }; return [e, d, f, function (g) { pa[g ? "unshift" : "push"](() => { e = g; c(0, e) }) }]
	} function sb(a) {
		let b, c; b = new mc({ props: { labelId: a[0], title: a[2] } }); return {
			c() { ba(b.$$.fragment) }, m(d, e) { T(b, d, e); c = !0 }, p(d, e) {
				let f = {}; e & 1 && (f.labelId =
					d[0]); e & 4 && (f.title = d[2]); b.$set(f)
			}, i(d) { c || (z(b.$$.fragment, d), c = !0) }, o(d) { B(b.$$.fragment, d); c = !1 }, d(d) { U(b, d) }
		}
	} function tb(a) { let b, c; b = new nc({ props: { cancelIcon: a[3], step: a[1] } }); return { c() { ba(b.$$.fragment) }, m(d, e) { T(b, d, e); c = !0 }, p(d, e) { let f = {}; e & 8 && (f.cancelIcon = d[3]); e & 2 && (f.step = d[1]); b.$set(f) }, i(d) { c || (z(b.$$.fragment, d), c = !0) }, o(d) { B(b.$$.fragment, d); c = !1 }, d(d) { U(b, d) } } } function oc(a) {
		let b, c, d, e = a[2] && sb(a), f = a[3] && a[3].enabled && tb(a); return {
			c() {
				b = G("div"); e && e.c(); c = document.createTextNode(" ");
				f && f.c(); y(b, "class", "shepherd-header")
			}, m(g, h) { g.insertBefore(b, h || null); e && e.m(b, null); b.appendChild(c); f && f.m(b, null); d = !0 }, p(g, h) { [h] = h; g[2] ? e ? (e.p(g, h), h & 4 && z(e, 1)) : (e = sb(g), e.c(), z(e, 1), e.m(b, c)) : e && (Z(), B(e, 1, 1, () => { e = null }), aa()); g[3] && g[3].enabled ? f ? (f.p(g, h), h & 8 && z(f, 1)) : (f = tb(g), f.c(), z(f, 1), f.m(b, null)) : f && (Z(), B(f, 1, 1, () => { f = null }), aa()) }, i(g) { d || (z(e), z(f), d = !0) }, o(g) { B(e); B(f); d = !1 }, d(g) { g && J(b); e && e.d(); f && f.d() }
		}
	} function pc(a, b, c) {
		let { labelId: d, step: e } = b, f, g; a.$$set = h => {
			"labelId" in
			h && c(0, d = h.labelId); "step" in h && c(1, e = h.step)
		}; a.$$.update = () => { a.$$.dirty & 2 && (c(2, f = e.options.title), c(3, g = e.options.cancelIcon)) }; return [d, e, f, g]
	} function qc(a) {
		let b, c, d; return {
			c() { b = G("div"); c = G("div"); d = G("span"); y(d, "class", "progress-bar svelte-1gtpt1b"); var e = d, f = a[0] + "%"; null === f ? e.style.removeProperty("width") : e.style.setProperty("width", f, ""); y(c, "class", "shepherd-progress-bar svelte-1gtpt1b"); y(b, "class", "padding-container svelte-1gtpt1b") }, m(e, f) {
				e.insertBefore(b, f || null); b.appendChild(c);
				c.appendChild(d)
			}, p(e, f) { [f] = f; f & 1 && (f = d, e = e[0] + "%", null === e ? f.style.removeProperty("width") : f.style.setProperty("width", e, "")) }, i: I, o: I, d(e) { e && J(b) }
		}
	} function rc(a, b, c) { let { title: d } = b, e, f, g; a.$$set = h => { "title" in h && c(1, d = h.title) }; a.$$.update = () => { a.$$.dirty & 14 && (c(2, e = d.split("/")[1]), c(3, f = d.split("/")[0].replace(/[a-zA-Z]/g, "")), c(0, g = f / e * 100)) }; return [g, d, e, f] } function ub(a) {
		let b, c; b = new sc({ props: { title: a[1] } }); return {
			c() { ba(b.$$.fragment) }, m(d, e) { T(b, d, e); c = !0 }, p(d, e) {
				let f = {}; e & 2 && (f.title =
					d[1]); b.$set(f)
			}, i(d) { c || (z(b.$$.fragment, d), c = !0) }, o(d) { B(b.$$.fragment, d); c = !1 }, d(d) { U(b, d) }
		}
	} function tc(a) {
		let b, c, d, e, f = a[1] && ub(a); return {
			c() { b = G("div"); f && f.c(); c = document.createTextNode(" "); d = G("div"); y(d, "class", "shepherd-text"); y(d, "id", a[2]) }, m(g, h) { g.insertBefore(b, h || null); f && f.m(b, null); b.appendChild(c); b.appendChild(d); a[4](d); e = !0 }, p(g, h) { [h] = h; g[1] ? f ? (f.p(g, h), h & 2 && z(f, 1)) : (f = ub(g), f.c(), z(f, 1), f.m(b, c)) : f && (Z(), B(f, 1, 1, () => { f = null }), aa()); (!e || h & 4) && y(d, "id", g[2]) }, i(g) {
				e || (z(f),
					e = !0)
			}, o(g) { B(f); e = !1 }, d(g) { g && J(b); f && f.d(); a[4](null) }
		}
	} function uc(a, b, c) {
		let { descriptionId: d, element: e, step: f, title: g } = b; Ba().$$.after_update.push(() => { let { text: h } = f.options; ca(h) && (h = h.call(f)); h instanceof HTMLElement ? e.appendChild(h) : c(0, e.innerHTML = h, e) }); a.$$set = h => { "descriptionId" in h && c(2, d = h.descriptionId); "element" in h && c(0, e = h.element); "step" in h && c(3, f = h.step); "title" in h && c(1, g = h.title) }; a.$$.update = () => { a.$$.dirty & 8 && c(1, g = f.options.title) }; return [e, g, d, f, function (h) {
			pa[h ? "unshift" :
				"push"](() => { e = h; c(0, e) })
		}]
	} function vb(a) { let b, c; b = new vc({ props: { labelId: a[1], step: a[2] } }); return { c() { ba(b.$$.fragment) }, m(d, e) { T(b, d, e); c = !0 }, p(d, e) { let f = {}; e & 2 && (f.labelId = d[1]); e & 4 && (f.step = d[2]); b.$set(f) }, i(d) { c || (z(b.$$.fragment, d), c = !0) }, o(d) { B(b.$$.fragment, d); c = !1 }, d(d) { U(b, d) } } } function wb(a) {
		let b, c; b = new wc({ props: { descriptionId: a[0], step: a[2] } }); return {
			c() { ba(b.$$.fragment) }, m(d, e) { T(b, d, e); c = !0 }, p(d, e) { let f = {}; e & 1 && (f.descriptionId = d[0]); e & 4 && (f.step = d[2]); b.$set(f) }, i(d) {
				c || (z(b.$$.fragment,
					d), c = !0)
			}, o(d) { B(b.$$.fragment, d); c = !1 }, d(d) { U(b, d) }
		}
	} function xb(a) { let b, c; b = new xc({ props: { step: a[2], tourName: a[3] } }); return { c() { ba(b.$$.fragment) }, m(d, e) { T(b, d, e); c = !0 }, p(d, e) { let f = {}; e & 4 && (f.step = d[2]); e & 8 && (f.tourName = d[3]); b.$set(f) }, i(d) { c || (z(b.$$.fragment, d), c = !0) }, o(d) { B(b.$$.fragment, d); c = !1 }, d(d) { U(b, d) } } } function yc(a) {
		let b, c = void 0 !== a[2].options.title || a[2].options.cancelIcon && a[2].options.cancelIcon.enabled, d, e = void 0 !== a[2].options.text, f, g = void 0 !== a[3] || !a[4], h, k = c && vb(a), l =
			e && wb(a), n = g && xb(a); return {
				c() { b = G("div"); k && k.c(); d = document.createTextNode(" "); l && l.c(); f = document.createTextNode(" "); n && n.c(); y(b, "class", "shepherd-content") }, m(p, m) { p.insertBefore(b, m || null); k && k.m(b, null); b.appendChild(d); l && l.m(b, null); b.appendChild(f); n && n.m(b, null); h = !0 }, p(p, m) {
					[m] = m; m & 4 && (c = void 0 !== p[2].options.title || p[2].options.cancelIcon && p[2].options.cancelIcon.enabled); c ? k ? (k.p(p, m), m & 4 && z(k, 1)) : (k = vb(p), k.c(), z(k, 1), k.m(b, d)) : k && (Z(), B(k, 1, 1, () => { k = null }), aa()); m & 4 && (e = void 0 !==
						p[2].options.text); e ? l ? (l.p(p, m), m & 4 && z(l, 1)) : (l = wb(p), l.c(), z(l, 1), l.m(b, f)) : l && (Z(), B(l, 1, 1, () => { l = null }), aa()); m & 24 && (g = void 0 !== p[3] || !p[4]); g ? n ? (n.p(p, m), m & 24 && z(n, 1)) : (n = xb(p), n.c(), z(n, 1), n.m(b, null)) : n && (Z(), B(n, 1, 1, () => { n = null }), aa())
				}, i(p) { h || (z(k), z(l), z(n), h = !0) }, o(p) { B(k); B(l); B(n); h = !1 }, d(p) { p && J(b); k && k.d(); l && l.d(); n && n.d() }
			}
	} function zc(a, b, c) {
		let { descriptionId: d, labelId: e, step: f, tourName: g, overlayPresent: h } = b; a.$$set = k => {
			"descriptionId" in k && c(0, d = k.descriptionId); "labelId" in k &&
				c(1, e = k.labelId); "step" in k && c(2, f = k.step); "tourName" in k && c(3, g = k.tourName); "overlayPresent" in k && c(4, h = k.overlayPresent)
		}; return [d, e, f, g, h]
	} function yb(a) { let b; return { c() { b = G("div"); y(b, "class", "shepherd-arrow"); y(b, "data-popper-arrow", "") }, m(c, d) { c.insertBefore(b, d || null) }, d(c) { c && J(b) } } } function Ac(a) {
		let b, c, d, e, f, g, h, k, l = a[4].options.arrow && a[4].options.attachTo && a[4].options.attachTo.element && a[4].options.attachTo.on && yb(); d = new Bc({
			props: {
				descriptionId: a[2], labelId: a[3], step: a[4], tourName: a[5],
				useModalOverlay: a[6]
			}
		}); let n = [{ "aria-describedby": e = void 0 !== a[4].options.text ? a[2] : null }, { "aria-labelledby": f = a[4].options.title ? a[3] : null }, a[1], { role: "dialog" }, { tabindex: "0" }], p = {}; for (let m = 0; m < n.length; m += 1)p = ac(p, n[m]); return {
			c() { b = G("div"); l && l.c(); c = document.createTextNode(" "); ba(d.$$.fragment); mb(b, p); la(b, "shepherd-has-cancel-icon", a[7]); la(b, "shepherd-has-title", a[8]); la(b, "shepherd-element", !0) }, m(m, u) {
				m.insertBefore(b, u || null); l && l.m(b, null); b.appendChild(c); T(d, b, null); a[15](b); g = !0;
				h || (k = Aa(b, "keydown", a[9]), h = !0)
			}, p(m, u) {
				var [r] = u; m[4].options.arrow && m[4].options.attachTo && m[4].options.attachTo.element && m[4].options.attachTo.on ? l || (l = yb(), l.c(), l.m(b, c)) : l && (l.d(1), l = null); u = {}; r & 4 && (u.descriptionId = m[2]); r & 8 && (u.labelId = m[3]); r & 16 && (u.step = m[4]); r & 32 && (u.tourName = m[5]); r & 64 && (u.useModalOverlay = m[6]); d.$set(u); u = b; r = [(!g || r & 20 && e !== (e = void 0 !== m[4].options.text ? m[2] : null)) && { "aria-describedby": e }, (!g || r & 24 && f !== (f = m[4].options.title ? m[3] : null)) && { "aria-labelledby": f }, r & 2 &&
					m[1], { role: "dialog" }, { tabindex: "0" }]; let t = {}, A = {}, q = { $$scope: 1 }, x = n.length; for (; x--;) { let w = n[x], v = r[x]; if (v) { for (let C in w) C in v || (A[C] = 1); for (let C in v) q[C] || (t[C] = v[C], q[C] = 1); n[x] = v } else for (let C in w) q[C] = 1 } for (let w in A) w in t || (t[w] = void 0); mb(u, p = t); la(b, "shepherd-has-cancel-icon", m[7]); la(b, "shepherd-has-title", m[8]); la(b, "shepherd-element", !0)
			}, i(m) { g || (z(d.$$.fragment, m), g = !0) }, o(m) { B(d.$$.fragment, m); g = !1 }, d(m) { m && J(b); l && l.d(); U(d); a[15](null); h = !1; k() }
		}
	} function zb(a) {
		return a.split(" ").filter(b =>
			!!b.length)
	} function Cc(a, b, c) {
		let { classPrefix: d, element: e, descriptionId: f, firstFocusableElement: g, focusableElements: h, labelId: k, lastFocusableElement: l, step: n, dataStepId: p, tourName: m, useModalOverlay: u } = b, r, t, A; Ba().$$.on_mount.push(() => { c(1, p = { [`data-${d}shepherd-step-id`]: n.id }); c(11, h = e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')); c(10, g = h[0]); c(12, l = h[h.length - 1]) }); Ba().$$.after_update.push(() => { if (A !== n.options.classes) { var q = A; ra(q) && (q = zb(q), q.length && e.classList.remove(...q)); q = A = n.options.classes; ra(q) && (q = zb(q), q.length && e.classList.add(...q)) } }); a.$$set = q => {
			"classPrefix" in q && c(13, d = q.classPrefix); "element" in q && c(0, e = q.element); "descriptionId" in q && c(2, f = q.descriptionId); "firstFocusableElement" in q && c(10, g = q.firstFocusableElement); "focusableElements" in q && c(11, h = q.focusableElements); "labelId" in q && c(3, k = q.labelId); "lastFocusableElement" in q && c(12, l = q.lastFocusableElement); "step" in
				q && c(4, n = q.step); "dataStepId" in q && c(1, p = q.dataStepId); "tourName" in q && c(5, m = q.tourName); "useModalOverlay" in q && c(6, u = q.useModalOverlay)
		}; a.$$.update = () => { a.$$.dirty & 16 && (c(7, r = n.options && n.options.cancelIcon && n.options.cancelIcon.enabled), c(8, t = n.options && n.options.title)) }; return [e, p, f, k, n, m, u, r, t, q => {
			const { tour: x } = n; switch (q.keyCode) {
				case 9: if (0 === h.length) { q.preventDefault(); break } if (q.shiftKey) {
					if (document.activeElement === g || document.activeElement.classList.contains("shepherd-element")) q.preventDefault(),
						l.focus()
				} else document.activeElement === l && (q.preventDefault(), g.focus()); break; case 27: x.options.exitOnEsc && n.cancel(); break; case 37: x.options.keyboardNavigation && x.back(); break; case 39: x.options.keyboardNavigation && x.next()
			}
		}, g, h, l, d, () => e, function (q) { pa[q ? "unshift" : "push"](() => { e = q; c(0, e) }) }]
	} function Dc(a) { a && ({ steps: a } = a, a.forEach(b => { b.options && !1 === b.options.canClickTarget && b.options.attachTo && b.target instanceof HTMLElement && b.target.classList.remove("shepherd-target-click-disabled") })) } function Ec(a) {
		let b,
		c, d, e, f; return { c() { b = lb("svg"); c = lb("path"); y(c, "d", a[2]); y(b, "class", d = `${a[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`) }, m(g, h) { g.insertBefore(b, h || null); b.appendChild(c); a[11](b); e || (f = Aa(b, "touchmove", a[3]), e = !0) }, p(g, h) { [h] = h; h & 4 && y(c, "d", g[2]); h & 2 && d !== (d = `${g[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`) && y(b, "class", d) }, i: I, o: I, d(g) { g && J(b); a[11](null); e = !1; f() } }
	} function Ab(a) {
		if (!a) return null; let b = a instanceof HTMLElement && window.getComputedStyle(a).overflowY;
		return "hidden" !== b && "visible" !== b && a.scrollHeight >= a.clientHeight ? a : Ab(a.parentElement)
	} function Fc(a, b, c) {
		function d() { c(4, n = { width: 0, height: 0, x: 0, y: 0, r: 0 }) } function e() { c(1, p = !1); h() } function f(t, A, q, x) {
			void 0 === t && (t = 0); void 0 === A && (A = 0); if (x) {
				var w = x.getBoundingClientRect(); let C = w.y || w.top; w = w.bottom || C + w.height; if (q) { var v = q.getBoundingClientRect(); q = v.y || v.top; v = v.bottom || q + v.height; C = Math.max(C, q); w = Math.min(w, v) } let { y: P, height: D } = { y: C, height: Math.max(w - C, 0) }, { x: E, width: V, left: Gc } = x.getBoundingClientRect();
				c(4, n = { width: V + 2 * t, height: D + 2 * t, x: (E || Gc) - t, y: P - t, r: A })
			} else d()
		} function g() { c(1, p = !0) } function h() { m && (cancelAnimationFrame(m), m = void 0); window.removeEventListener("touchmove", r, { passive: !1 }) } function k(t) { let { modalOverlayOpeningPadding: A, modalOverlayOpeningRadius: q } = t.options, x = Ab(t.target), w = () => { m = void 0; f(A, q, x, t.target); m = requestAnimationFrame(w) }; w(); window.addEventListener("touchmove", r, { passive: !1 }) } let { element: l, openingProperties: n } = b; Da(); let p = !1, m = void 0, u; d(); let r = t => { t.preventDefault() };
		a.$$set = t => { "element" in t && c(0, l = t.element); "openingProperties" in t && c(4, n = t.openingProperties) }; a.$$.update = () => {
			if (a.$$.dirty & 16) {
				let { width: t, height: A, x: q = 0, y: x = 0, r: w = 0 } = n, { innerWidth: v, innerHeight: C } = window, { topLeft: P = 0, topRight: D = 0, bottomRight: E = 0, bottomLeft: V = 0 } = "number" === typeof w ? { topLeft: w, topRight: w, bottomRight: w, bottomLeft: w } : w; c(2, u = `M${v},${C}\
	H0\
	V0\
	H${v}\
	V${C}\
	Z\
	M${q + P},${x}\
	a${P},${P},0,0,0-${P},${P}\
	V${A + x - V}\
	a${V},${V},0,0,0,${V},${V}\
	H${t + q - E}\
	a${E},${E},0,0,0,${E}-${E}\
	V${x + D}\
	a${D},${D},0,0,0-${D}-${D}\
	Z`)
			}
		}; return [l, p, u, t => { t.stopPropagation() }, n, () => l, d, e, f, function (t) { h(); t.tour.options.useModalOverlay ? (k(t), g()) : e() }, g, function (t) { pa[t ? "unshift" : "push"](() => { l = t; c(0, l) }) }]
	} var Fb = function (a) { var b; if (b = !!a && "object" === typeof a) b = Object.prototype.toString.call(a), b = !("[object RegExp]" === b || "[object Date]" === b || a.$$typeof === Hc); return b }, Hc = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103; ha.all = function (a, b) {
		if (!Array.isArray(a)) throw Error("first argument should be an array");
		return a.reduce(function (c, d) { return ha(c, d, b) }, {})
	}; var Ka = ha; class Pa {
		on(a, b, c, d) { void 0 === d && (d = !1); void 0 === this.bindings && (this.bindings = {}); void 0 === this.bindings[a] && (this.bindings[a] = []); this.bindings[a].push({ handler: b, ctx: c, once: d }); return this } once(a, b, c) { return this.on(a, b, c, !0) } off(a, b) { if (void 0 === this.bindings || void 0 === this.bindings[a]) return this; void 0 === b ? delete this.bindings[a] : this.bindings[a].forEach((c, d) => { c.handler === b && this.bindings[a].splice(d, 1) }); return this } trigger(a) {
			for (var b =
				arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++)c[d - 1] = arguments[d]; void 0 !== this.bindings && this.bindings[a] && this.bindings[a].forEach((e, f) => { let { ctx: g, handler: h, once: k } = e; h.apply(g || this, c); k && this.bindings[a].splice(f, 1) }); return this
		}
	} let Ic = "mainAxis crossAxis fallbackPlacements fallbackStrategy fallbackAxisSideDirection flipAlignment".split(" "), Jc = ["mainAxis", "crossAxis", "limiter"], Kc = async (a, b, c) => {
		const { placement: d = "bottom", strategy: e = "absolute", middleware: f = [], platform: g } = c; c = f.filter(Boolean);
		const h = await (null == g.isRTL ? void 0 : g.isRTL(b)); let k = await g.getElementRects({ reference: a, floating: b, strategy: e }), { x: l, y: n } = Ya(k, d, h), p = d, m = {}, u = 0; for (let r = 0; r < c.length; r++) {
			const { name: t, fn: A } = c[r], { x: q, y: x, data: w, reset: v } = await A({ x: l, y: n, initialPlacement: d, placement: p, strategy: e, middlewareData: m, rects: k, platform: g, elements: { reference: a, floating: b } }); l = null != q ? q : l; n = null != x ? x : n; m = F({}, m, { [t]: F({}, m[t], w) }); v && 50 >= u && (u++, "object" === typeof v && (v.placement && (p = v.placement), v.rects && (k = !0 === v.rects ?
				await g.getElementRects({ reference: a, floating: b, strategy: e }) : v.rects), { x: l, y: n } = Ya(k, p, h)), r = -1)
		} return { x: l, y: n, placement: p, strategy: e, middlewareData: m }
	}, Qa = Math.min, Ra = Math.max, $b = a => ({
		name: "arrow", options: a, async fn(b) {
			const { element: c, padding: d = 0 } = a || {}, { x: e, y: f, placement: g, rects: h, platform: k, elements: l } = b; if (null == c) return {}; var n = Za(d); b = { x: e, y: f }; const p = ia(g), m = Ea(p), u = await k.getDimensions(c); var r = "y" === p; const t = r ? "top" : "left", A = r ? "bottom" : "right"; r = r ? "clientHeight" : "clientWidth"; var q =
				h.reference[m] + h.reference[p] - b[p] - h.floating[m], x = b[p] - h.reference[p], w = await (null == k.getOffsetParent ? void 0 : k.getOffsetParent(c)); let v = w ? w[r] : 0; v && await (null == k.isElement ? void 0 : k.isElement(w)) || (v = l.floating[r] || h.floating[m]); r = n[t]; w = v - u[m] - n[A]; q = v / 2 - u[m] / 2 + (q / 2 - x / 2); x = Ra(r, Qa(q, w)); n = null != g.split("-")[1] && q != x && 0 > h.reference[m] / 2 - (q < r ? n[t] : n[A]) - u[m] / 2; return { [p]: b[p] - (n ? q < r ? r - q : w - q : 0), data: { [p]: x, centerOffset: q - x } }
		}
	}), Ib = { left: "right", right: "left", bottom: "top", top: "bottom" }, Kb = {
		start: "end",
		end: "start"
	}, Xb = function (a) {
		void 0 === a && (a = {}); return {
			name: "flip", options: a, async fn(b) {
				var c; const { placement: d, middlewareData: e, rects: f, initialPlacement: g, platform: h, elements: k } = b, { mainAxis: l = !0, crossAxis: n = !0, fallbackPlacements: p, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: u = "none", flipAlignment: r = !0 } = a; var t = Xa(a, Ic); const A = W(d); var q = W(g) === g; const x = await (null == h.isRTL ? void 0 : h.isRTL(k.floating)); q = p || (q || !r ? [wa(g)] : Lb(g)); p || "none" === u || q.push(...Nb(g, r, u, x)); q = [g, ...q]; t = await $a(b,
					t); const w = []; b = (null == (c = e.flip) ? void 0 : c.overflows) || []; l && w.push(t[A]); if (n) { const { main: D, cross: E } = Jb(d, f, x); w.push(t[D], t[E]) } b = [...b, { placement: d, overflows: w }]; if (!w.every(D => 0 >= D)) {
						var v, C; c = ((null == (v = e.flip) ? void 0 : v.index) || 0) + 1; if (v = q[c]) return { data: { index: c, overflows: b }, reset: { placement: v } }; v = null == (C = b.filter(D => 0 >= D.overflows[0]).sort((D, E) => D.overflows[1] - E.overflows[1])[0]) ? void 0 : C.placement; if (!v) switch (m) {
							case "bestFit": var P; (C = null == (P = b.map(D => [D.placement, D.overflows.filter(E =>
								0 < E).reduce((E, V) => E + V, 0)]).sort((D, E) => D[1] - E[1])[0]) ? void 0 : P[0]) && (v = C); break; case "initialPlacement": v = g
						}if (d !== v) return { reset: { placement: v } }
					} return {}
			}
		}
	}, Wb = function (a) { void 0 === a && (a = 0); return { name: "offset", options: a, async fn(b) { const { x: c, y: d } = b; b = await Ob(b, a); return { x: c + b.x, y: d + b.y, data: b } } } }, Yb = function (a) {
		void 0 === a && (a = {}); return {
			name: "shift", options: a, async fn(b) {
				const { x: c, y: d, placement: e } = b, { mainAxis: f = !0, crossAxis: g = !1, limiter: h = { fn: u => { let { x: r, y: t } = u; return { x: r, y: t } } } } = a; var k = Xa(a,
					Jc), l = { x: c, y: d }; k = await $a(b, k); const n = ia(W(e)), p = "x" === n ? "y" : "x"; let m = l[n]; l = l[p]; f && (m = Ra(m + k["y" === n ? "top" : "left"], Qa(m, m - k["y" === n ? "bottom" : "right"]))); g && (l = Ra(l + k["y" === p ? "top" : "left"], Qa(l, l - k["y" === p ? "bottom" : "right"]))); b = h.fn(F({}, b, { [n]: m, [p]: l })); return F({}, b, { data: { x: b.x - c, y: b.y - d } })
			}
		}
	}, Zb = function (a) {
		void 0 === a && (a = {}); return {
			options: a, fn(b) {
				const { x: c, y: d, placement: e, rects: f, middlewareData: g } = b, { offset: h = 0, mainAxis: k = !0, crossAxis: l = !0 } = a; var n = { x: c, y: d }; const p = ia(e), m = "x" === p ? "y" :
					"x"; let u = n[p]; n = n[m]; b = "function" === typeof h ? h(b) : h; b = "number" === typeof b ? { mainAxis: b, crossAxis: 0 } : F({ mainAxis: 0, crossAxis: 0 }, b); if (k) { var r = "y" === p ? "height" : "width", t = f.reference[p] - f.floating[r] + b.mainAxis; r = f.reference[p] + f.reference[r] - b.mainAxis; u < t ? u = t : u > r && (u = r) } if (l) {
						var A, q; r = "y" === p ? "width" : "height"; const x = ["top", "left"].includes(W(e)); t = f.reference[m] - f.floating[r] + (x ? (null == (A = g.offset) ? void 0 : A[m]) || 0 : 0) + (x ? 0 : b.crossAxis); A = f.reference[m] + f.reference[r] + (x ? 0 : (null == (q = g.offset) ? void 0 :
							q[m]) || 0) - (x ? b.crossAxis : 0); n < t ? n = t : n > A && (n = A)
					} return { [p]: u, [m]: n }
			}
		}
	}, Ga, Bb = Math.min, ua = Math.max, ya = Math.round, eb = { x: 1, y: 1 }, Lc = {
		getClippingRect: function (a) { let { element: b, boundary: c, rootBoundary: d, strategy: e } = a; a = [...("clippingAncestors" === c ? Pb(b, this._c) : [].concat(c)), d]; a = a.reduce((f, g) => { g = hb(b, g, e); f.top = ua(g.top, f.top); f.right = Bb(g.right, f.right); f.bottom = Bb(g.bottom, f.bottom); f.left = ua(g.left, f.left); return f }, hb(b, a[0], e)); return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top } },
		convertOffsetParentRelativeRectToViewportRelativeRect: function (a) { let { rect: b, offsetParent: c, strategy: d } = a; var e = K(c); let f = Y(c); if (c === f) return b; a = { scrollLeft: 0, scrollTop: 0 }; let g = { x: 1, y: 1 }; var h = 0, k = 0; if (e || !e && "fixed" !== d) { if ("body" !== X(c) || xa(f)) a = za(c); K(c) && (e = da(c), g = ja(c), h = e.x + c.clientLeft, k = e.y + c.clientTop) } return { width: b.width * g.x, height: b.height * g.y, x: b.x * g.x - a.scrollLeft * g.x + h, y: b.y * g.y - a.scrollTop * g.y + k } }, isElement: L, getDimensions: function (a) { return cb(a) }, getOffsetParent: jb, getDocumentElement: Y,
		getScale: ja, async getElementRects(a) { let { reference: b, floating: c, strategy: d } = a; a = this.getDimensions; var e = await (this.getOffsetParent || jb)(c), f = K(e); let g = Y(e), h = da(b, !0, "fixed" === d, e), k = { scrollLeft: 0, scrollTop: 0 }; var l = 0, n = 0; if (f || !f && "fixed" !== d) { if ("body" !== X(e) || xa(g)) k = za(e); K(e) ? (f = da(e, !0), l = f.x + e.clientLeft, n = f.y + e.clientTop) : g && (l = fb(g)) } return { reference: { x: h.left + k.scrollLeft - l, y: h.top + k.scrollTop - n, width: h.width, height: h.height }, floating: F({ x: 0, y: 0 }, await a(c)) } }, getClientRects: a => Array.from(a.getClientRects()),
		isRTL: a => "rtl" === M(a).direction
	}, Ub = (a, b, c) => { var d = new Map; c = F({ platform: Lc }, c); d = F({}, c.platform, { _c: d }); return Kc(a, b, F({}, c, { platform: d })) }, S, oa = [], pa = [], ma = [], ob = [], cc = Promise.resolve(), Oa = !1, Na = new Set, na = 0, Ca = new Set, ea; class Q {
		$destroy() { U(this, 1); this.$destroy = I } $on(a, b) { if (!La(b)) return I; let c = this.$$.callbacks[a] || (this.$$.callbacks[a] = []); c.push(b); return () => { let d = c.indexOf(b); -1 !== d && c.splice(d, 1) } } $set(a) {
			this.$$set && 0 !== Object.keys(a).length && (this.$$.skip_bound = !0, this.$$set(a),
				this.$$.skip_bound = !1)
		}
	} class fc extends Q { constructor(a) { super(); O(this, a, ec, dc, N, { config: 6, step: 7 }) } } class xc extends Q { constructor(a) { super(); O(this, a, hc, gc, N, { step: 0 }) } } class nc extends Q { constructor(a) { super(); O(this, a, jc, ic, N, { cancelIcon: 0, step: 2 }) } } class mc extends Q { constructor(a) { super(); O(this, a, lc, kc, N, { labelId: 1, element: 0, title: 2 }) } } class vc extends Q { constructor(a) { super(); O(this, a, pc, oc, N, { labelId: 0, step: 1 }) } } class sc extends Q { constructor(a) { super(); O(this, a, rc, qc, N, { title: 1 }) } } class wc extends Q {
		constructor(a) {
			super();
			O(this, a, uc, tc, N, { descriptionId: 2, element: 0, step: 3, title: 1 })
		}
	} class Bc extends Q { constructor(a) { super(); O(this, a, zc, yc, N, { descriptionId: 0, labelId: 1, step: 2, tourName: 3, overlayPresent: 4 }) } } class Mc extends Q { constructor(a) { super(); O(this, a, Cc, Ac, N, { classPrefix: 13, element: 0, descriptionId: 2, firstFocusableElement: 10, focusableElements: 11, labelId: 3, lastFocusableElement: 12, step: 4, dataStepId: 1, tourName: 5, useModalOverlay: 6, getElement: 14 }) } get getElement() { return this.$$.ctx[14] } } class Sa extends Pa {
		constructor(a,
			b) { void 0 === b && (b = {}); super(a, b); this.tour = a; this.classPrefix = this.tour.options ? Wa(this.tour.options.classPrefix) : ""; this.styles = a.styles; this._resolvedAttachTo = null; Va(this); this._setOptions(b); return this } cancel() { this.tour.cancel(); this.trigger("cancel") } complete() { this.tour.complete(); this.trigger("complete") } destroy() { this.cleanup && this.cleanup(); this.cleanup = null; this.el instanceof HTMLElement && (this.el.remove(), this.el = null); this._updateStepTargetOnHide(); this.trigger("destroy") } getTour() { return this.tour } hide() {
				this.tour.modal.hide();
				this.trigger("before-hide"); this.el && (this.el.hidden = !0); this._updateStepTargetOnHide(); this.trigger("hide")
			} _resolveAttachToOptions() { let a = this.options.attachTo || {}, b = Object.assign({}, a); ca(b.element) && (b.element = b.element.call(this)); if (ra(b.element)) { try { b.element = document.querySelector(b.element) } catch (c) { } b.element || console.error(`The element for this Shepherd step was not found ${a.element}`) } return this._resolvedAttachTo = b } _getResolvedAttachToOptions() {
				return null === this._resolvedAttachTo ?
					this._resolveAttachToOptions() : this._resolvedAttachTo
			} isOpen() { return !(!this.el || this.el.hidden) } show() { return ca(this.options.beforeShowPromise) ? Promise.resolve(this.options.beforeShowPromise()).then(() => this._show()) : Promise.resolve(this._show()) } updateStepOptions(a) { Object.assign(this.options, a); this.shepherdElementComponent && this.shepherdElementComponent.$set({ step: this }) } getElement() { return this.el } getTarget() { return this.target } _createTooltipContent() {
				this.shepherdElementComponent = new Mc({
					target: this.tour.options.stepsContainer ||
						document.body, props: { classPrefix: this.classPrefix, descriptionId: `${this.id}-description`, labelId: `${this.id}-label`, step: this, styles: this.styles, tourName: this.tour.options.tourName, overlayPresent: this.tour.options.useModalOverlay }
				}); return this.shepherdElementComponent.getElement()
			} _scrollTo(a) { let { element: b } = this._getResolvedAttachToOptions(); ca(this.options.scrollToHandler) ? this.options.scrollToHandler(b) : b instanceof Element && "function" === typeof b.scrollIntoView && b.scrollIntoView(a) } _getClassOptions(a) {
				var b =
					this.tour && this.tour.options && this.tour.options.defaultStepOptions; b = b && b.classes ? b.classes : ""; a = [...(a.classes ? a.classes : "").split(" "), ...b.split(" ")]; a = new Set(a); return Array.from(a).join(" ").trim()
			} _setOptions(a) {
				void 0 === a && (a = {}); let b = this.tour && this.tour.options && this.tour.options.defaultStepOptions; b = Ka({}, b || {}); this.options = Object.assign({ arrow: !0 }, b, a, { floatingUIOptions: Ka(b.floatingUIOptions || {}, a.floatingUIOptions || {}) }); let { when: c } = this.options; this.options.classes = this._getClassOptions(a);
				this.destroy(); this.id = this.options.id || `step-${Da()}`; c && Object.keys(c).forEach(d => { this.on(d, c[d], this) })
			} _setupElements() { void 0 !== this.el && this.destroy(); this.el = this._createTooltipContent(); this.options.advanceOn && Hb(this); Rb(this) } _show() {
				this.trigger("before-show"); this._resolveAttachToOptions(); this._setupElements(); this.tour.modal || this.tour._setupModal(); this.tour.modal.setupForStep(this); this._styleTargetElementForStep(this); this.el.hidden = !1; this.options.scrollTo && setTimeout(() => { this._scrollTo(this.options.scrollTo) });
				this.el.hidden = !1; let a = this.shepherdElementComponent.getElement(), b = this.target || document.body; console.log("Creating the content canvas at:", a); console.log("Attaching the modal to element:", b); b.classList.add(`${this.classPrefix}shepherd-target`); b.classList.add(`${this.classPrefix}shepherd-enabled`); b.classList.add("shepherd-highlight-border"); a.classList.add("shepherd-enabled"); this.trigger("show")
			} _styleTargetElementForStep(a) {
				let b = a.target; b && (a.options.highlightClass && b.classList.add(a.options.highlightClass),
					b.classList.remove("shepherd-target-click-disabled"), !1 === a.options.canClickTarget && b.classList.add("shepherd-target-click-disabled"))
			} _updateStepTargetOnHide() { let a = this.target || document.body; this.options.highlightClass && a.classList.remove(this.options.highlightClass); a.classList.remove("shepherd-target-click-disabled", `${this.classPrefix}shepherd-enabled`, `${this.classPrefix}shepherd-target`, "shepherd-highlight-border") }
	} class Nc extends Q {
		constructor(a) {
			super(); O(this, a, Fc, Ec, N, {
				element: 0, openingProperties: 4,
				getElement: 5, closeModalOpening: 6, hide: 7, positionModal: 8, setupForStep: 9, show: 10
			})
		} get getElement() { return this.$$.ctx[5] } get closeModalOpening() { return this.$$.ctx[6] } get hide() { return this.$$.ctx[7] } get positionModal() { return this.$$.ctx[8] } get setupForStep() { return this.$$.ctx[9] } get show() { return this.$$.ctx[10] }
	} let fa = new Pa; class Oc extends Pa {
		constructor(a) {
			void 0 === a && (a = {}); super(a); Va(this); this.options = Object.assign({}, { exitOnEsc: !0, keyboardNavigation: !0 }, a); this.classPrefix = Wa(this.options.classPrefix);
			this.steps = []; this.addSteps(this.options.steps); "active cancel complete inactive show start".split(" ").map(b => { (c => { this.on(c, d => { d = d || {}; d.tour = this; fa.trigger(c, d) }) })(b) }); this._setTourID(); return this
		} addStep(a, b) { a instanceof Sa ? a.tour = this : a = new Sa(this, a); void 0 !== b ? this.steps.splice(b, 0, a) : this.steps.push(a); return a } addSteps(a) { Array.isArray(a) && a.forEach(b => { this.addStep(b) }); return this } back() {
			console.log("Loading previous step"); let a = this.steps.indexOf(this.currentStep); localStorage.setItem("currentStepIndex",
				a - 1); this.show(a - 1, !1)
		} async cancel() { if (this.options.confirmCancel) { let a = this.options.confirmCancelMessage || "Are you sure you want to stop the tour?"; ("function" === typeof this.options.confirmCancel ? await this.options.confirmCancel() : window.confirm(a)) && this._done("cancel") } else this._done("cancel") } complete() { console.log("Tour completed"); this._done("complete") } getById(a) { return this.steps.find(b => b.id === a) } getCurrentStep() { return this.currentStep } hide() { let a = this.getCurrentStep(); if (a) return a.hide() } isActive() {
			return fa.activeTour ===
				this
		} next() { console.log("Loading next step"); let a = this.steps.indexOf(this.currentStep); a === this.steps.length - 1 ? (localStorage.removeItem("currentStepIndex"), localStorage.removeItem("tourInstanceCaller"), this.complete()) : (localStorage.setItem("currentStepIndex", a + 1), this.show(a + 1, !0)) } removeStep(a) { let b = this.getCurrentStep(); this.steps.some((c, d) => { if (c.id === a) return c.isOpen() && c.hide(), c.destroy(), this.steps.splice(d, 1), !0 }); b && b.id === a && (this.currentStep = void 0, this.steps.length ? this.show(0) : this.cancel()) } show(a,
			b) {
				void 0 === a && (a = 0); void 0 === b && (b = !0); console.log("Step load tour"); let c = localStorage.getItem("tourInstanceCaller"), d = localStorage.getItem("currentStepIndex"); console.log("Current step index is ", d); console.log("Current tour instance caller is ", c); let e = ra(a) ? this.getById(a) : this.steps[a], f = g => { const h = []; g.forEach(k => { k.hasOwnProperty("page") ? h.push(k.page) : k.hasOwnProperty("vpv") && h.push(k.vpv) }); return h }; a = () => {
					let g = f(window.dataLayer), h = e.options.pageLink; console.log("Current page VPV is ",
						g); console.log("Current step VPV is ", h); if (-1 < g.indexOf(h)) return console.log("TRUE Current VPV: ", h, "/n is present in pageVPV array: ", g), !0; console.log("FALSE Current VPV: ", h, "/n is not present in pageVPV array: ", g); return !1
				}; e && (this._updateStateBeforeShow(), ca(e.options.showOn) && !e.options.showOn() ? this._skipStep(e, b) : c === this.options.instanceCaller && a() ? (console.log("Page VPV matched, loading step"), this.trigger("show", { step: e, previous: this.currentStep }), this.currentStep = e, e.show()) : console.log("page VPV didn't match, skipping step"))
		} start() {
			console.log("Setting up tour");
			localStorage.setItem("tourInstanceCaller", this.options.instanceCaller); localStorage.setItem("currentStepIndex", 0); this.trigger("start"); this.focusedElBeforeOpen = document.activeElement; this.currentStep = null; this._setupModal(); this._setupActiveTour(); this.next()
		} _done(a) {
			localStorage.removeItem("currentStepIndex"); localStorage.removeItem("tourInstanceCaller"); let b = this.steps.indexOf(this.currentStep); Array.isArray(this.steps) && this.steps.forEach(c => c.destroy()); Dc(this); this.trigger(a, { index: b }); fa.activeTour =
				null; this.trigger("inactive", { tour: this }); this.modal && this.modal.hide(); "cancel" !== a && "complete" !== a || !this.modal || (a = document.querySelector(".shepherd-modal-overlay-container")) && a.remove(); this.focusedElBeforeOpen instanceof HTMLElement && this.focusedElBeforeOpen.focus()
		} _setupActiveTour() { this.trigger("active", { tour: this }); fa.activeTour = this } _setupModal() { this.modal = new Nc({ target: this.options.modalContainer || document.body, props: { classPrefix: this.classPrefix, styles: this.styles } }) } _skipStep(a, b) {
			a =
			this.steps.indexOf(a); a === this.steps.length - 1 ? this.complete() : this.show(b ? a + 1 : a - 1, b)
		} _updateStateBeforeShow() { this.currentStep && this.currentStep.hide(); this.isActive() || this._setupActiveTour() } _setTourID() { this.id = `${this.options.tourName || "tour"}--${Da()}` }
	} class Cb { constructor() { } } "undefined" === typeof window ? Object.assign(fa, { Tour: Cb, Step: Cb }) : Object.assign(fa, { Tour: Oc, Step: Sa }); return fa
})
//# sourceMappingURL=shepherd.min.js.map
