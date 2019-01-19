(window.webpackJsonp = window.webpackJsonp || []).push([
	[1],
	[function(e, t, n) {
		(function(e) {
			var n;

			function r(e) {
				return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
				function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}!
			function(t, n) {
				"use strict";
				"object" === r(e) && "object" === r(e.exports) ? e.exports = t.document ? n(t, !0) : function(e) {
					if (!e.document) throw new Error("jQuery requires a window with a document");
					return n(e)
				} : n(t)
			}("undefined" != typeof window ? window : this, function(i, o) {
				"use strict";
				var s = [],
					a = i.document,
					u = Object.getPrototypeOf,
					c = s.slice,
					l = s.concat,
					f = s.push,
					d = s.indexOf,
					p = {},
					h = p.toString,
					m = p.hasOwnProperty,
					g = m.toString,
					v = g.call(Object),
					y = {},
					b = function(e) {
						return "function" == typeof e && "number" != typeof e.nodeType
					},
					w = function(e) {
						return null != e && e === e.window
					},
					x = {
						type: !0,
						src: !0,
						noModule: !0
					};

				function k(e, t, n) {
					var r, i = (t = t || a).createElement("script");
					if (i.text = e, n) for (r in x) n[r] && (i[r] = n[r]);
					t.head.appendChild(i).parentNode.removeChild(i)
				}
				function T(e) {
					return null == e ? e + "" : "object" === r(e) || "function" == typeof e ? p[h.call(e)] || "object" : r(e)
				}
				var C = function e(t, n) {
						return new e.fn.init(t, n)
					},
					S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

				function E(e) {
					var t = !! e && "length" in e && e.length,
						n = T(e);
					return !b(e) && !w(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
				}
				C.fn = C.prototype = {
					jquery: "3.3.1",
					constructor: C,
					length: 0,
					toArray: function() {
						return c.call(this)
					},
					get: function(e) {
						return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e]
					},
					pushStack: function(e) {
						var t = C.merge(this.constructor(), e);
						return t.prevObject = this, t
					},
					each: function(e) {
						return C.each(this, e)
					},
					map: function(e) {
						return this.pushStack(C.map(this, function(t, n) {
							return e.call(t, n, t)
						}))
					},
					slice: function() {
						return this.pushStack(c.apply(this, arguments))
					},
					first: function() {
						return this.eq(0)
					},
					last: function() {
						return this.eq(-1)
					},
					eq: function(e) {
						var t = this.length,
							n = +e + (e < 0 ? t : 0);
						return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
					},
					end: function() {
						return this.prevObject || this.constructor()
					},
					push: f,
					sort: s.sort,
					splice: s.splice
				}, C.extend = C.fn.extend = function() {
					var e, t, n, i, o, s, a = arguments[0] || {},
						u = 1,
						c = arguments.length,
						l = !1;
					for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" === r(a) || b(a) || (a = {}), u === c && (a = this, u--); u < c; u++) if (null != (e = arguments[u])) for (t in e) n = a[t], a !== (i = e[t]) && (l && i && (C.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, s = n && Array.isArray(n) ? n : []) : s = n && C.isPlainObject(n) ? n : {}, a[t] = C.extend(l, s, i)) : void 0 !== i && (a[t] = i));
					return a
				}, C.extend({
					expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
					isReady: !0,
					error: function(e) {
						throw new Error(e)
					},
					noop: function() {},
					isPlainObject: function(e) {
						var t, n;
						return !(!e || "[object Object]" !== h.call(e)) && (!(t = u(e)) || "function" == typeof(n = m.call(t, "constructor") && t.constructor) && g.call(n) === v)
					},
					isEmptyObject: function(e) {
						var t;
						for (t in e) return !1;
						return !0
					},
					globalEval: function(e) {
						k(e)
					},
					each: function(e, t) {
						var n, r = 0;
						if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
						else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
						return e
					},
					trim: function(e) {
						return null == e ? "" : (e + "").replace(S, "")
					},
					makeArray: function(e, t) {
						var n = t || [];
						return null != e && (E(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : f.call(n, e)), n
					},
					inArray: function(e, t, n) {
						return null == t ? -1 : d.call(t, e, n)
					},
					merge: function(e, t) {
						for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
						return e.length = i, e
					},
					grep: function(e, t, n) {
						for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)!t(e[i], i) !== s && r.push(e[i]);
						return r
					},
					map: function(e, t, n) {
						var r, i, o = 0,
							s = [];
						if (E(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
						else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
						return l.apply([], s)
					},
					guid: 1,
					support: y
				}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = s[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
					p["[object " + t + "]"] = t.toLowerCase()
				});
				var N = function(e) {
						var t, n, r, i, o, s, a, u, c, l, f, d, p, h, m, g, v, y, b, w = "sizzle" + 1 * new Date,
							x = e.document,
							k = 0,
							T = 0,
							C = se(),
							S = se(),
							E = se(),
							N = function(e, t) {
								return e === t && (f = !0), 0
							},
							A = {}.hasOwnProperty,
							_ = [],
							D = _.pop,
							L = _.push,
							O = _.push,
							j = _.slice,
							M = function(e, t) {
								for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
								return -1
							},
							R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
							B = "[\\x20\\t\\r\\n\\f]",
							q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
							P = "\\[" + B + "*(" + q + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + B + "*\\]",
							I = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
							H = new RegExp(B + "+", "g"),
							W = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
							F = new RegExp("^" + B + "*," + B + "*"),
							$ = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
							z = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
							U = new RegExp(I),
							V = new RegExp("^" + q + "$"),
							G = {
								ID: new RegExp("^#(" + q + ")"),
								CLASS: new RegExp("^\\.(" + q + ")"),
								TAG: new RegExp("^(" + q + "|[*])"),
								ATTR: new RegExp("^" + P),
								PSEUDO: new RegExp("^" + I),
								CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
								bool: new RegExp("^(?:" + R + ")$", "i"),
								needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
							},
							X = /^(?:input|select|textarea|button)$/i,
							K = /^h\d$/i,
							Q = /^[^{]+\{\s*\[native \w/,
							Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
							J = /[+~]/,
							Z = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
							ee = function(e, t, n) {
								var r = "0x" + t - 65536;
								return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
							},
							te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
							ne = function(e, t) {
								return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
							},
							re = function() {
								d()
							},
							ie = ye(function(e) {
								return !0 === e.disabled && ("form" in e || "label" in e)
							}, {
								dir: "parentNode",
								next: "legend"
							});
						try {
							O.apply(_ = j.call(x.childNodes), x.childNodes), _[x.childNodes.length].nodeType
						} catch (e) {
							O = {
								apply: _.length ?
								function(e, t) {
									L.apply(e, j.call(t))
								} : function(e, t) {
									for (var n = e.length, r = 0; e[n++] = t[r++];);
									e.length = n - 1
								}
							}
						}
						function oe(e, t, r, i) {
							var o, a, c, l, f, h, v, y = t && t.ownerDocument,
								k = t ? t.nodeType : 9;
							if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;
							if (!i && ((t ? t.ownerDocument || t : x) !== p && d(t), t = t || p, m)) {
								if (11 !== k && (f = Y.exec(e))) if (o = f[1]) {
									if (9 === k) {
										if (!(c = t.getElementById(o))) return r;
										if (c.id === o) return r.push(c), r
									} else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return r.push(c), r
								} else {
									if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
									if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), r
								}
								if (n.qsa && !E[e + " "] && (!g || !g.test(e))) {
									if (1 !== k) y = t, v = e;
									else if ("object" !== t.nodeName.toLowerCase()) {
										for ((l = t.getAttribute("id")) ? l = l.replace(te, ne) : t.setAttribute("id", l = w), a = (h = s(e)).length; a--;) h[a] = "#" + l + " " + ve(h[a]);
										v = h.join(","), y = J.test(e) && me(t.parentNode) || t
									}
									if (v) try {
										return O.apply(r, y.querySelectorAll(v)), r
									} catch (e) {} finally {
										l === w && t.removeAttribute("id")
									}
								}
							}
							return u(e.replace(W, "$1"), t, r, i)
						}
						function se() {
							var e = [];
							return function t(n, i) {
								return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
							}
						}
						function ae(e) {
							return e[w] = !0, e
						}
						function ue(e) {
							var t = p.createElement("fieldset");
							try {
								return !!e(t)
							} catch (e) {
								return !1
							} finally {
								t.parentNode && t.parentNode.removeChild(t), t = null
							}
						}
						function ce(e, t) {
							for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
						}
						function le(e, t) {
							var n = t && e,
								r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
							if (r) return r;
							if (n) for (; n = n.nextSibling;) if (n === t) return -1;
							return e ? 1 : -1
						}
						function fe(e) {
							return function(t) {
								return "input" === t.nodeName.toLowerCase() && t.type === e
							}
						}
						function de(e) {
							return function(t) {
								var n = t.nodeName.toLowerCase();
								return ("input" === n || "button" === n) && t.type === e
							}
						}
						function pe(e) {
							return function(t) {
								return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
							}
						}
						function he(e) {
							return ae(function(t) {
								return t = +t, ae(function(n, r) {
									for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
								})
							})
						}
						function me(e) {
							return e && void 0 !== e.getElementsByTagName && e
						}
						for (t in n = oe.support = {}, o = oe.isXML = function(e) {
							var t = e && (e.ownerDocument || e).documentElement;
							return !!t && "HTML" !== t.nodeName
						}, d = oe.setDocument = function(e) {
							var t, i, s = e ? e.ownerDocument || e : x;
							return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, m = !o(p), x !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
								return e.className = "i", !e.getAttribute("className")
							}), n.getElementsByTagName = ue(function(e) {
								return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
							}), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = ue(function(e) {
								return h.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
							}), n.getById ? (r.filter.ID = function(e) {
								var t = e.replace(Z, ee);
								return function(e) {
									return e.getAttribute("id") === t
								}
							}, r.find.ID = function(e, t) {
								if (void 0 !== t.getElementById && m) {
									var n = t.getElementById(e);
									return n ? [n] : []
								}
							}) : (r.filter.ID = function(e) {
								var t = e.replace(Z, ee);
								return function(e) {
									var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
									return n && n.value === t
								}
							}, r.find.ID = function(e, t) {
								if (void 0 !== t.getElementById && m) {
									var n, r, i, o = t.getElementById(e);
									if (o) {
										if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
										for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
									}
									return []
								}
							}), r.find.TAG = n.getElementsByTagName ?
							function(e, t) {
								return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
							} : function(e, t) {
								var n, r = [],
									i = 0,
									o = t.getElementsByTagName(e);
								if ("*" === e) {
									for (; n = o[i++];) 1 === n.nodeType && r.push(n);
									return r
								}
								return o
							}, r.find.CLASS = n.getElementsByClassName &&
							function(e, t) {
								if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
							}, v = [], g = [], (n.qsa = Q.test(p.querySelectorAll)) && (ue(function(e) {
								h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + B + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
							}), ue(function(e) {
								e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
								var t = p.createElement("input");
								t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + B + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
							})), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
								n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", I)
							}), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), b = t || Q.test(h.contains) ?
							function(e, t) {
								var n = 9 === e.nodeType ? e.documentElement : e,
									r = t && t.parentNode;
								return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
							} : function(e, t) {
								if (t) for (; t = t.parentNode;) if (t === e) return !0;
								return !1
							}, N = t ?
							function(e, t) {
								if (e === t) return f = !0, 0;
								var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
								return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === x && b(x, e) ? -1 : t === p || t.ownerDocument === x && b(x, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & r ? -1 : 1)
							} : function(e, t) {
								if (e === t) return f = !0, 0;
								var n, r = 0,
									i = e.parentNode,
									o = t.parentNode,
									s = [e],
									a = [t];
								if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : l ? M(l, e) - M(l, t) : 0;
								if (i === o) return le(e, t);
								for (n = e; n = n.parentNode;) s.unshift(n);
								for (n = t; n = n.parentNode;) a.unshift(n);
								for (; s[r] === a[r];) r++;
								return r ? le(s[r], a[r]) : s[r] === x ? -1 : a[r] === x ? 1 : 0
							}, p) : p
						}, oe.matches = function(e, t) {
							return oe(e, null, null, t)
						}, oe.matchesSelector = function(e, t) {
							if ((e.ownerDocument || e) !== p && d(e), t = t.replace(z, "='$1']"), n.matchesSelector && m && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
								var r = y.call(e, t);
								if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
							} catch (e) {}
							return oe(t, p, null, [e]).length > 0
						}, oe.contains = function(e, t) {
							return (e.ownerDocument || e) !== p && d(e), b(e, t)
						}, oe.attr = function(e, t) {
							(e.ownerDocument || e) !== p && d(e);
							var i = r.attrHandle[t.toLowerCase()],
								o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
							return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
						}, oe.escape = function(e) {
							return (e + "").replace(te, ne)
						}, oe.error = function(e) {
							throw new Error("Syntax error, unrecognized expression: " + e)
						}, oe.uniqueSort = function(e) {
							var t, r = [],
								i = 0,
								o = 0;
							if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(N), f) {
								for (; t = e[o++];) t === e[o] && (i = r.push(o));
								for (; i--;) e.splice(r[i], 1)
							}
							return l = null, e
						}, i = oe.getText = function(e) {
							var t, n = "",
								r = 0,
								o = e.nodeType;
							if (o) {
								if (1 === o || 9 === o || 11 === o) {
									if ("string" == typeof e.textContent) return e.textContent;
									for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
								} else if (3 === o || 4 === o) return e.nodeValue
							} else for (; t = e[r++];) n += i(t);
							return n
						}, (r = oe.selectors = {
							cacheLength: 50,
							createPseudo: ae,
							match: G,
							attrHandle: {},
							find: {},
							relative: {
								">": {
									dir: "parentNode",
									first: !0
								},
								" ": {
									dir: "parentNode"
								},
								"+": {
									dir: "previousSibling",
									first: !0
								},
								"~": {
									dir: "previousSibling"
								}
							},
							preFilter: {
								ATTR: function(e) {
									return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
								},
								CHILD: function(e) {
									return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
								},
								PSEUDO: function(e) {
									var t, n = !e[6] && e[2];
									return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
								}
							},
							filter: {
								TAG: function(e) {
									var t = e.replace(Z, ee).toLowerCase();
									return "*" === e ?
									function() {
										return !0
									} : function(e) {
										return e.nodeName && e.nodeName.toLowerCase() === t
									}
								},
								CLASS: function(e) {
									var t = C[e + " "];
									return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && C(e, function(e) {
										return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
									})
								},
								ATTR: function(e, t, n) {
									return function(r) {
										var i = oe.attr(r, e);
										return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
									}
								},
								CHILD: function(e, t, n, r, i) {
									var o = "nth" !== e.slice(0, 3),
										s = "last" !== e.slice(-4),
										a = "of-type" === t;
									return 1 === r && 0 === i ?
									function(e) {
										return !!e.parentNode
									} : function(t, n, u) {
										var c, l, f, d, p, h, m = o !== s ? "nextSibling" : "previousSibling",
											g = t.parentNode,
											v = a && t.nodeName.toLowerCase(),
											y = !u && !a,
											b = !1;
										if (g) {
											if (o) {
												for (; m;) {
													for (d = t; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
													h = m = "only" === e && !h && "nextSibling"
												}
												return !0
											}
											if (h = [s ? g.firstChild : g.lastChild], s && y) {
												for (b = (p = (c = (l = (f = (d = g)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop();) if (1 === d.nodeType && ++b && d === t) {
													l[e] = [k, p, b];
													break
												}
											} else if (y && (b = p = (c = (l = (f = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === b) for (;
											(d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((l = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [k, b]), d !== t)););
											return (b -= i) === r || b % r == 0 && b / r >= 0
										}
									}
								},
								PSEUDO: function(e, t) {
									var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
									return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
										for (var r, o = i(e, t), s = o.length; s--;) e[r = M(e, o[s])] = !(n[r] = o[s])
									}) : function(e) {
										return i(e, 0, n)
									}) : i
								}
							},
							pseudos: {
								not: ae(function(e) {
									var t = [],
										n = [],
										r = a(e.replace(W, "$1"));
									return r[w] ? ae(function(e, t, n, i) {
										for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
									}) : function(e, i, o) {
										return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
									}
								}),
								has: ae(function(e) {
									return function(t) {
										return oe(e, t).length > 0
									}
								}),
								contains: ae(function(e) {
									return e = e.replace(Z, ee), function(t) {
										return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
									}
								}),
								lang: ae(function(e) {
									return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function(t) {
										var n;
										do {
											if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
										} while ((t = t.parentNode) && 1 === t.nodeType);
										return !1
									}
								}),
								target: function(t) {
									var n = e.location && e.location.hash;
									return n && n.slice(1) === t.id
								},
								root: function(e) {
									return e === h
								},
								focus: function(e) {
									return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
								},
								enabled: pe(!1),
								disabled: pe(!0),
								checked: function(e) {
									var t = e.nodeName.toLowerCase();
									return "input" === t && !! e.checked || "option" === t && !! e.selected
								},
								selected: function(e) {
									return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
								},
								empty: function(e) {
									for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
									return !0
								},
								parent: function(e) {
									return !r.pseudos.empty(e)
								},
								header: function(e) {
									return K.test(e.nodeName)
								},
								input: function(e) {
									return X.test(e.nodeName)
								},
								button: function(e) {
									var t = e.nodeName.toLowerCase();
									return "input" === t && "button" === e.type || "button" === t
								},
								text: function(e) {
									var t;
									return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
								},
								first: he(function() {
									return [0]
								}),
								last: he(function(e, t) {
									return [t - 1]
								}),
								eq: he(function(e, t, n) {
									return [n < 0 ? n + t : n]
								}),
								even: he(function(e, t) {
									for (var n = 0; n < t; n += 2) e.push(n);
									return e
								}),
								odd: he(function(e, t) {
									for (var n = 1; n < t; n += 2) e.push(n);
									return e
								}),
								lt: he(function(e, t, n) {
									for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
									return e
								}),
								gt: he(function(e, t, n) {
									for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
									return e
								})
							}
						}).pseudos.nth = r.pseudos.eq, {
							radio: !0,
							checkbox: !0,
							file: !0,
							password: !0,
							image: !0
						}) r.pseudos[t] = fe(t);
						for (t in {
							submit: !0,
							reset: !0
						}) r.pseudos[t] = de(t);

						function ge() {}
						function ve(e) {
							for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
							return r
						}
						function ye(e, t, n) {
							var r = t.dir,
								i = t.next,
								o = i || r,
								s = n && "parentNode" === o,
								a = T++;
							return t.first ?
							function(t, n, i) {
								for (; t = t[r];) if (1 === t.nodeType || s) return e(t, n, i);
								return !1
							} : function(t, n, u) {
								var c, l, f, d = [k, a];
								if (u) {
									for (; t = t[r];) if ((1 === t.nodeType || s) && e(t, n, u)) return !0
								} else for (; t = t[r];) if (1 === t.nodeType || s) if (l = (f = t[w] || (t[w] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
								else {
									if ((c = l[o]) && c[0] === k && c[1] === a) return d[2] = c[2];
									if (l[o] = d, d[2] = e(t, n, u)) return !0
								}
								return !1
							}
						}
						function be(e) {
							return e.length > 1 ?
							function(t, n, r) {
								for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
								return !0
							} : e[0]
						}
						function we(e, t, n, r, i) {
							for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
							return s
						}
						function xe(e, t, n, r, i, o) {
							return r && !r[w] && (r = xe(r)), i && !i[w] && (i = xe(i, o)), ae(function(o, s, a, u) {
								var c, l, f, d = [],
									p = [],
									h = s.length,
									m = o ||
								function(e, t, n) {
									for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
									return n
								}(t || "*", a.nodeType ? [a] : a, []), g = !e || !o && t ? m : we(m, d, e, a, u), v = n ? i || (o ? e : h || r) ? [] : s : g;
								if (n && n(g, v, a, u), r) for (c = we(v, p), r(c, [], a, u), l = c.length; l--;)(f = c[l]) && (v[p[l]] = !(g[p[l]] = f));
								if (o) {
									if (i || e) {
										if (i) {
											for (c = [], l = v.length; l--;)(f = v[l]) && c.push(g[l] = f);
											i(null, v = [], c, u)
										}
										for (l = v.length; l--;)(f = v[l]) && (c = i ? M(o, f) : d[l]) > -1 && (o[c] = !(s[c] = f))
									}
								} else v = we(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, u) : O.apply(s, v)
							})
						}
						function ke(e) {
							for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], u = s ? 1 : 0, l = ye(function(e) {
								return e === t
							}, a, !0), f = ye(function(e) {
								return M(t, e) > -1
							}, a, !0), d = [function(e, n, r) {
								var i = !s && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
								return t = null, i
							}]; u < o; u++) if (n = r.relative[e[u].type]) d = [ye(be(d), n)];
							else {
								if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
									for (i = ++u; i < o && !r.relative[e[i].type]; i++);
									return xe(u > 1 && be(d), u > 1 && ve(e.slice(0, u - 1).concat({
										value: " " === e[u - 2].type ? "*" : ""
									})).replace(W, "$1"), n, u < i && ke(e.slice(u, i)), i < o && ke(e = e.slice(i)), i < o && ve(e))
								}
								d.push(n)
							}
							return be(d)
						}
						return ge.prototype = r.filters = r.pseudos, r.setFilters = new ge, s = oe.tokenize = function(e, t) {
							var n, i, o, s, a, u, c, l = S[e + " "];
							if (l) return t ? 0 : l.slice(0);
							for (a = e, u = [], c = r.preFilter; a;) {
								for (s in n && !(i = F.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), o.push({
									value: n,
									type: i[0].replace(W, " ")
								}), a = a.slice(n.length)), r.filter)!(i = G[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
									value: n,
									type: s,
									matches: i
								}), a = a.slice(n.length));
								if (!n) break
							}
							return t ? a.length : a ? oe.error(e) : S(e, u).slice(0)
						}, a = oe.compile = function(e, t) {
							var n, i = [],
								o = [],
								a = E[e + " "];
							if (!a) {
								for (t || (t = s(e)), n = t.length; n--;)(a = ke(t[n]))[w] ? i.push(a) : o.push(a);
								(a = E(e, function(e, t) {
									var n = t.length > 0,
										i = e.length > 0,
										o = function(o, s, a, u, l) {
											var f, h, g, v = 0,
												y = "0",
												b = o && [],
												w = [],
												x = c,
												T = o || i && r.find.TAG("*", l),
												C = k += null == x ? 1 : Math.random() || .1,
												S = T.length;
											for (l && (c = s === p || s || l); y !== S && null != (f = T[y]); y++) {
												if (i && f) {
													for (h = 0, s || f.ownerDocument === p || (d(f), a = !m); g = e[h++];) if (g(f, s || p, a)) {
														u.push(f);
														break
													}
													l && (k = C)
												}
												n && ((f = !g && f) && v--, o && b.push(f))
											}
											if (v += y, n && y !== v) {
												for (h = 0; g = t[h++];) g(b, w, s, a);
												if (o) {
													if (v > 0) for (; y--;) b[y] || w[y] || (w[y] = D.call(u));
													w = we(w)
												}
												O.apply(u, w), l && !o && w.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
											}
											return l && (k = C, c = x), b
										};
									return n ? ae(o) : o
								}(o, i))).selector = e
							}
							return a
						}, u = oe.select = function(e, t, n, i) {
							var o, u, c, l, f, d = "function" == typeof e && e,
								p = !i && s(e = d.selector || e);
							if (n = n || [], 1 === p.length) {
								if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
									if (!(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;
									d && (t = t.parentNode), e = e.slice(u.shift().value.length)
								}
								for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (c = u[o], !r.relative[l = c.type]);) if ((f = r.find[l]) && (i = f(c.matches[0].replace(Z, ee), J.test(u[0].type) && me(t.parentNode) || t))) {
									if (u.splice(o, 1), !(e = i.length && ve(u))) return O.apply(n, i), n;
									break
								}
							}
							return (d || a(e, p))(i, t, !m, n, !t || J.test(e) && me(t.parentNode) || t), n
						}, n.sortStable = w.split("").sort(N).join("") === w, n.detectDuplicates = !! f, d(), n.sortDetached = ue(function(e) {
							return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
						}), ue(function(e) {
							return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
						}) || ce("type|href|height|width", function(e, t, n) {
							if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
						}), n.attributes && ue(function(e) {
							return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
						}) || ce("value", function(e, t, n) {
							if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
						}), ue(function(e) {
							return null == e.getAttribute("disabled")
						}) || ce(R, function(e, t, n) {
							var r;
							if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
						}), oe
					}(i);
				C.find = N, C.expr = N.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = N.uniqueSort, C.text = N.getText, C.isXMLDoc = N.isXML, C.contains = N.contains, C.escapeSelector = N.escape;
				var A = function(e, t, n) {
						for (var r = [], i = void 0 !== n;
						(e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
							if (i && C(e).is(n)) break;
							r.push(e)
						}
						return r
					},
					_ = function(e, t) {
						for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
						return n
					},
					D = C.expr.match.needsContext;

				function L(e, t) {
					return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
				}
				var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

				function j(e, t, n) {
					return b(t) ? C.grep(e, function(e, r) {
						return !!t.call(e, r, e) !== n
					}) : t.nodeType ? C.grep(e, function(e) {
						return e === t !== n
					}) : "string" != typeof t ? C.grep(e, function(e) {
						return d.call(t, e) > -1 !== n
					}) : C.filter(t, e, n)
				}
				C.filter = function(e, t, n) {
					var r = t[0];
					return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
						return 1 === e.nodeType
					}))
				}, C.fn.extend({
					find: function(e) {
						var t, n, r = this.length,
							i = this;
						if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
							for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0
						}));
						for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
						return r > 1 ? C.uniqueSort(n) : n
					},
					filter: function(e) {
						return this.pushStack(j(this, e || [], !1))
					},
					not: function(e) {
						return this.pushStack(j(this, e || [], !0))
					},
					is: function(e) {
						return !!j(this, "string" == typeof e && D.test(e) ? C(e) : e || [], !1).length
					}
				});
				var M, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
				(C.fn.init = function(e, t, n) {
					var r, i;
					if (!e) return this;
					if (n = n || M, "string" == typeof e) {
						if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : R.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
						if (r[1]) {
							if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), O.test(r[1]) && C.isPlainObject(t)) for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
							return this
						}
						return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
					}
					return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
				}).prototype = C.fn, M = C(a);
				var B = /^(?:parents|prev(?:Until|All))/,
					q = {
						children: !0,
						contents: !0,
						next: !0,
						prev: !0
					};

				function P(e, t) {
					for (;
					(e = e[t]) && 1 !== e.nodeType;);
					return e
				}
				C.fn.extend({
					has: function(e) {
						var t = C(e, this),
							n = t.length;
						return this.filter(function() {
							for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0
						})
					},
					closest: function(e, t) {
						var n, r = 0,
							i = this.length,
							o = [],
							s = "string" != typeof e && C(e);
						if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
							o.push(n);
							break
						}
						return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
					},
					index: function(e) {
						return e ? "string" == typeof e ? d.call(C(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
					},
					add: function(e, t) {
						return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
					},
					addBack: function(e) {
						return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
					}
				}), C.each({
					parent: function(e) {
						var t = e.parentNode;
						return t && 11 !== t.nodeType ? t : null
					},
					parents: function(e) {
						return A(e, "parentNode")
					},
					parentsUntil: function(e, t, n) {
						return A(e, "parentNode", n)
					},
					next: function(e) {
						return P(e, "nextSibling")
					},
					prev: function(e) {
						return P(e, "previousSibling")
					},
					nextAll: function(e) {
						return A(e, "nextSibling")
					},
					prevAll: function(e) {
						return A(e, "previousSibling")
					},
					nextUntil: function(e, t, n) {
						return A(e, "nextSibling", n)
					},
					prevUntil: function(e, t, n) {
						return A(e, "previousSibling", n)
					},
					siblings: function(e) {
						return _((e.parentNode || {}).firstChild, e)
					},
					children: function(e) {
						return _(e.firstChild)
					},
					contents: function(e) {
						return L(e, "iframe") ? e.contentDocument : (L(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
					}
				}, function(e, t) {
					C.fn[e] = function(n, r) {
						var i = C.map(this, t, n);
						return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (q[e] || C.uniqueSort(i), B.test(e) && i.reverse()), this.pushStack(i)
					}
				});
				var I = /[^\x20\t\r\n\f]+/g;

				function H(e) {
					return e
				}
				function W(e) {
					throw e
				}
				function F(e, t, n, r) {
					var i;
					try {
						e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
					} catch (e) {
						n.apply(void 0, [e])
					}
				}
				C.Callbacks = function(e) {
					e = "string" == typeof e ?
					function(e) {
						var t = {};
						return C.each(e.match(I) || [], function(e, n) {
							t[n] = !0
						}), t
					}(e) : C.extend({}, e);
					var t, n, r, i, o = [],
						s = [],
						a = -1,
						u = function() {
							for (i = i || e.once, r = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length;)!1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
							e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
						},
						c = {
							add: function() {
								return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
									C.each(n, function(n, r) {
										b(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
									})
								}(arguments), n && !t && u()), this
							},
							remove: function() {
								return C.each(arguments, function(e, t) {
									for (var n;
									(n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
								}), this
							},
							has: function(e) {
								return e ? C.inArray(e, o) > -1 : o.length > 0
							},
							empty: function() {
								return o && (o = []), this
							},
							disable: function() {
								return i = s = [], o = n = "", this
							},
							disabled: function() {
								return !o
							},
							lock: function() {
								return i = s = [], n || t || (o = n = ""), this
							},
							locked: function() {
								return !!i
							},
							fireWith: function(e, n) {
								return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || u()), this
							},
							fire: function() {
								return c.fireWith(this, arguments), this
							},
							fired: function() {
								return !!r
							}
						};
					return c
				}, C.extend({
					Deferred: function(e) {
						var t = [
							["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
							["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
							["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
						],
							n = "pending",
							o = {
								state: function() {
									return n
								},
								always: function() {
									return s.done(arguments).fail(arguments), this
								},
								catch: function(e) {
									return o.then(null, e)
								},
								pipe: function() {
									var e = arguments;
									return C.Deferred(function(n) {
										C.each(t, function(t, r) {
											var i = b(e[r[4]]) && e[r[4]];
											s[r[1]](function() {
												var e = i && i.apply(this, arguments);
												e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
											})
										}), e = null
									}).promise()
								},
								then: function(e, n, o) {
									var s = 0;

									function a(e, t, n, o) {
										return function() {
											var u = this,
												c = arguments,
												l = function() {
													var i, l;
													if (!(e < s)) {
														if ((i = n.apply(u, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
														l = i && ("object" === r(i) || "function" == typeof i) && i.then, b(l) ? o ? l.call(i, a(s, t, H, o), a(s, t, W, o)) : (s++, l.call(i, a(s, t, H, o), a(s, t, W, o), a(s, t, H, t.notifyWith))) : (n !== H && (u = void 0, c = [i]), (o || t.resolveWith)(u, c))
													}
												},
												f = o ? l : function() {
													try {
														l()
													} catch (r) {
														C.Deferred.exceptionHook && C.Deferred.exceptionHook(r, f.stackTrace), e + 1 >= s && (n !== W && (u = void 0, c = [r]), t.rejectWith(u, c))
													}
												};
											e ? f() : (C.Deferred.getStackHook && (f.stackTrace = C.Deferred.getStackHook()), i.setTimeout(f))
										}
									}
									return C.Deferred(function(r) {
										t[0][3].add(a(0, r, b(o) ? o : H, r.notifyWith)), t[1][3].add(a(0, r, b(e) ? e : H)), t[2][3].add(a(0, r, b(n) ? n : W))
									}).promise()
								},
								promise: function(e) {
									return null != e ? C.extend(e, o) : o
								}
							},
							s = {};
						return C.each(t, function(e, r) {
							var i = r[2],
								a = r[5];
							o[r[1]] = i.add, a && i.add(function() {
								n = a
							}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), i.add(r[3].fire), s[r[0]] = function() {
								return s[r[0] + "With"](this === s ? void 0 : this, arguments), this
							}, s[r[0] + "With"] = i.fireWith
						}), o.promise(s), e && e.call(s, s), s
					},
					when: function(e) {
						var t = arguments.length,
							n = t,
							r = Array(n),
							i = c.call(arguments),
							o = C.Deferred(),
							s = function(e) {
								return function(n) {
									r[e] = this, i[e] = arguments.length > 1 ? c.call(arguments) : n, --t || o.resolveWith(r, i)
								}
							};
						if (t <= 1 && (F(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || b(i[n] && i[n].then))) return o.then();
						for (; n--;) F(i[n], s(n), o.reject);
						return o.promise()
					}
				});
				var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
				C.Deferred.exceptionHook = function(e, t) {
					i.console && i.console.warn && e && $.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
				}, C.readyException = function(e) {
					i.setTimeout(function() {
						throw e
					})
				};
				var z = C.Deferred();

				function U() {
					a.removeEventListener("DOMContentLoaded", U), i.removeEventListener("load", U), C.ready()
				}
				C.fn.ready = function(e) {
					return z.then(e).
					catch (function(e) {
						C.readyException(e)
					}), this
				}, C.extend({
					isReady: !1,
					readyWait: 1,
					ready: function(e) {
						(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || z.resolveWith(a, [C]))
					}
				}), C.ready.then = z.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? i.setTimeout(C.ready) : (a.addEventListener("DOMContentLoaded", U), i.addEventListener("load", U));
				var V = function e(t, n, r, i, o, s, a) {
						var u = 0,
							c = t.length,
							l = null == r;
						if ("object" === T(r)) for (u in o = !0, r) e(t, n, u, r[u], !0, s, a);
						else if (void 0 !== i && (o = !0, b(i) || (a = !0), l && (a ? (n.call(t, i), n = null) : (l = n, n = function(e, t, n) {
							return l.call(C(e), n)
						})), n)) for (; u < c; u++) n(t[u], r, a ? i : i.call(t[u], u, n(t[u], r)));
						return o ? t : l ? n.call(t) : c ? n(t[0], r) : s
					},
					G = /^-ms-/,
					X = /-([a-z])/g;

				function K(e, t) {
					return t.toUpperCase()
				}
				function Q(e) {
					return e.replace(G, "ms-").replace(X, K)
				}
				var Y = function(e) {
						return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
					};

				function J() {
					this.expando = C.expando + J.uid++
				}
				J.uid = 1, J.prototype = {
					cache: function(e) {
						var t = e[this.expando];
						return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
							value: t,
							configurable: !0
						}))), t
					},
					set: function(e, t, n) {
						var r, i = this.cache(e);
						if ("string" == typeof t) i[Q(t)] = n;
						else for (r in t) i[Q(r)] = t[r];
						return i
					},
					get: function(e, t) {
						return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
					},
					access: function(e, t, n) {
						return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
					},
					remove: function(e, t) {
						var n, r = e[this.expando];
						if (void 0 !== r) {
							if (void 0 !== t) {
								n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in r ? [t] : t.match(I) || []).length;
								for (; n--;) delete r[t[n]]
							}(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
						}
					},
					hasData: function(e) {
						var t = e[this.expando];
						return void 0 !== t && !C.isEmptyObject(t)
					}
				};
				var Z = new J,
					ee = new J,
					te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
					ne = /[A-Z]/g;

				function re(e, t, n) {
					var r;
					if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
						try {
							n = function(e) {
								return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : te.test(e) ? JSON.parse(e) : e)
							}(n)
						} catch (e) {}
						ee.set(e, t, n)
					} else n = void 0;
					return n
				}
				C.extend({
					hasData: function(e) {
						return ee.hasData(e) || Z.hasData(e)
					},
					data: function(e, t, n) {
						return ee.access(e, t, n)
					},
					removeData: function(e, t) {
						ee.remove(e, t)
					},
					_data: function(e, t, n) {
						return Z.access(e, t, n)
					},
					_removeData: function(e, t) {
						Z.remove(e, t)
					}
				}), C.fn.extend({
					data: function(e, t) {
						var n, i, o, s = this[0],
							a = s && s.attributes;
						if (void 0 === e) {
							if (this.length && (o = ee.get(s), 1 === s.nodeType && !Z.get(s, "hasDataAttrs"))) {
								for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Q(i.slice(5)), re(s, i, o[i]));
								Z.set(s, "hasDataAttrs", !0)
							}
							return o
						}
						return "object" === r(e) ? this.each(function() {
							ee.set(this, e)
						}) : V(this, function(t) {
							var n;
							if (s && void 0 === t) return void 0 !== (n = ee.get(s, e)) ? n : void 0 !== (n = re(s, e)) ? n : void 0;
							this.each(function() {
								ee.set(this, e, t)
							})
						}, null, t, arguments.length > 1, null, !0)
					},
					removeData: function(e) {
						return this.each(function() {
							ee.remove(this, e)
						})
					}
				}), C.extend({
					queue: function(e, t, n) {
						var r;
						if (e) return t = (t || "fx") + "queue", r = Z.get(e, t), n && (!r || Array.isArray(n) ? r = Z.access(e, t, C.makeArray(n)) : r.push(n)), r || []
					},
					dequeue: function(e, t) {
						t = t || "fx";
						var n = C.queue(e, t),
							r = n.length,
							i = n.shift(),
							o = C._queueHooks(e, t);
						"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
							C.dequeue(e, t)
						}, o)), !r && o && o.empty.fire()
					},
					_queueHooks: function(e, t) {
						var n = t + "queueHooks";
						return Z.get(e, n) || Z.access(e, n, {
							empty: C.Callbacks("once memory").add(function() {
								Z.remove(e, [t + "queue", n])
							})
						})
					}
				}), C.fn.extend({
					queue: function(e, t) {
						var n = 2;
						return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function() {
							var n = C.queue(this, e, t);
							C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
						})
					},
					dequeue: function(e) {
						return this.each(function() {
							C.dequeue(this, e)
						})
					},
					clearQueue: function(e) {
						return this.queue(e || "fx", [])
					},
					promise: function(e, t) {
						var n, r = 1,
							i = C.Deferred(),
							o = this,
							s = this.length,
							a = function() {
								--r || i.resolveWith(o, [o])
							};
						for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Z.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
						return a(), i.promise(t)
					}
				});
				var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
					oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
					se = ["Top", "Right", "Bottom", "Left"],
					ae = function(e, t) {
						return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
					},
					ue = function(e, t, n, r) {
						var i, o, s = {};
						for (o in t) s[o] = e.style[o], e.style[o] = t[o];
						for (o in i = n.apply(e, r || []), t) e.style[o] = s[o];
						return i
					};

				function ce(e, t, n, r) {
					var i, o, s = 20,
						a = r ?
					function() {
						return r.cur()
					} : function() {
						return C.css(e, t, "")
					}, u = a(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"), l = (C.cssNumber[t] || "px" !== c && +u) && oe.exec(C.css(e, t));
					if (l && l[3] !== c) {
						for (u /= 2, c = c || l[3], l = +u || 1; s--;) C.style(e, t, l + c), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), l /= o;
						l *= 2, C.style(e, t, l + c), n = n || []
					}
					return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
				}
				var le = {};

				function fe(e) {
					var t, n = e.ownerDocument,
						r = e.nodeName,
						i = le[r];
					return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
				}
				function de(e, t) {
					for (var n, r, i = [], o = 0, s = e.length; o < s; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Z.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", Z.set(r, "display", n)));
					for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
					return e
				}
				C.fn.extend({
					show: function() {
						return de(this, !0)
					},
					hide: function() {
						return de(this)
					},
					toggle: function(e) {
						return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
							ae(this) ? C(this).show() : C(this).hide()
						})
					}
				});
				var pe = /^(?:checkbox|radio)$/i,
					he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
					me = /^$|^module$|\/(?:java|ecma)script/i,
					ge = {
						option: [1, "<select multiple='multiple'>", "</select>"],
						thead: [1, "<table>", "</table>"],
						col: [2, "<table><colgroup>", "</colgroup></table>"],
						tr: [2, "<table><tbody>", "</tbody></table>"],
						td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
						_default: [0, "", ""]
					};

				function ve(e, t) {
					var n;
					return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? C.merge([e], n) : n
				}
				function ye(e, t) {
					for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"))
				}
				ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
				var be = /<|&#?\w+;/;

				function we(e, t, n, r, i) {
					for (var o, s, a, u, c, l, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === T(o)) C.merge(d, o.nodeType ? [o] : o);
					else if (be.test(o)) {
						for (s = s || f.appendChild(t.createElement("div")), a = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ge[a] || ge._default, s.innerHTML = u[1] + C.htmlPrefilter(o) + u[2], l = u[0]; l--;) s = s.lastChild;
						C.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
					} else d.push(t.createTextNode(o));
					for (f.textContent = "", p = 0; o = d[p++];) if (r && C.inArray(o, r) > -1) i && i.push(o);
					else if (c = C.contains(o.ownerDocument, o), s = ve(f.appendChild(o), "script"), c && ye(s), n) for (l = 0; o = s[l++];) me.test(o.type || "") && n.push(o);
					return f
				}!
				function() {
					var e = a.createDocumentFragment().appendChild(a.createElement("div")),
						t = a.createElement("input");
					t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue
				}();
				var xe = a.documentElement,
					ke = /^key/,
					Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
					Ce = /^([^.]*)(?:\.(.+)|)/;

				function Se() {
					return !0
				}
				function Ee() {
					return !1
				}
				function Ne() {
					try {
						return a.activeElement
					} catch (e) {}
				}
				function Ae(e, t, n, i, o, s) {
					var a, u;
					if ("object" === r(t)) {
						for (u in "string" != typeof n && (i = i || n, n = void 0), t) Ae(e, u, n, i, t[u], s);
						return e
					}
					if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
					else if (!o) return e;
					return 1 === s && (a = o, (o = function(e) {
						return C().off(e), a.apply(this, arguments)
					}).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
						C.event.add(this, t, o, i, n)
					})
				}
				C.event = {
					global: {},
					add: function(e, t, n, r, i) {
						var o, s, a, u, c, l, f, d, p, h, m, g = Z.get(e);
						if (g) for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(xe, i), n.guid || (n.guid = C.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
							return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
						}), c = (t = (t || "").match(I) || [""]).length; c--;) p = m = (a = Ce.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, l = C.extend({
							type: p,
							origType: m,
							data: r,
							handler: n,
							guid: n.guid,
							selector: i,
							needsContext: i && C.expr.match.needsContext.test(i),
							namespace: h.join(".")
						}, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), C.event.global[p] = !0)
					},
					remove: function(e, t, n, r, i) {
						var o, s, a, u, c, l, f, d, p, h, m, g = Z.hasData(e) && Z.get(e);
						if (g && (u = g.events)) {
							for (c = (t = (t || "").match(I) || [""]).length; c--;) if (p = m = (a = Ce.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
								for (f = C.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) l = d[o], !i && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
								s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle), delete u[p])
							} else for (p in u) C.event.remove(e, p + t[c], n, r, !0);
							C.isEmptyObject(u) && Z.remove(e, "handle events")
						}
					},
					dispatch: function(e) {
						var t, n, r, i, o, s, a = C.event.fix(e),
							u = new Array(arguments.length),
							c = (Z.get(this, "events") || {})[a.type] || [],
							l = C.event.special[a.type] || {};
						for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
						if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
							for (s = C.event.handlers.call(this, a, c), t = 0;
							(i = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = i.elem, n = 0;
							(o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
							return l.postDispatch && l.postDispatch.call(this, a), a.result
						}
					},
					handlers: function(e, t) {
						var n, r, i, o, s, a = [],
							u = t.delegateCount,
							c = e.target;
						if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
							for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? C(i, this).index(c) > -1 : C.find(i, this, null, [c]).length), s[i] && o.push(r);
							o.length && a.push({
								elem: c,
								handlers: o
							})
						}
						return c = this, u < t.length && a.push({
							elem: c,
							handlers: t.slice(u)
						}), a
					},
					addProp: function(e, t) {
						Object.defineProperty(C.Event.prototype, e, {
							enumerable: !0,
							configurable: !0,
							get: b(t) ?
							function() {
								if (this.originalEvent) return t(this.originalEvent)
							} : function() {
								if (this.originalEvent) return this.originalEvent[e]
							},
							set: function(t) {
								Object.defineProperty(this, e, {
									enumerable: !0,
									configurable: !0,
									writable: !0,
									value: t
								})
							}
						})
					},
					fix: function(e) {
						return e[C.expando] ? e : new C.Event(e)
					},
					special: {
						load: {
							noBubble: !0
						},
						focus: {
							trigger: function() {
								if (this !== Ne() && this.focus) return this.focus(), !1
							},
							delegateType: "focusin"
						},
						blur: {
							trigger: function() {
								if (this === Ne() && this.blur) return this.blur(), !1
							},
							delegateType: "focusout"
						},
						click: {
							trigger: function() {
								if ("checkbox" === this.type && this.click && L(this, "input")) return this.click(), !1
							},
							_default: function(e) {
								return L(e.target, "a")
							}
						},
						beforeunload: {
							postDispatch: function(e) {
								void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
							}
						}
					}
				}, C.removeEvent = function(e, t, n) {
					e.removeEventListener && e.removeEventListener(t, n)
				}, C.Event = function(e, t) {
					if (!(this instanceof C.Event)) return new C.Event(e, t);
					e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
				}, C.Event.prototype = {
					constructor: C.Event,
					isDefaultPrevented: Ee,
					isPropagationStopped: Ee,
					isImmediatePropagationStopped: Ee,
					isSimulated: !1,
					preventDefault: function() {
						var e = this.originalEvent;
						this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
					},
					stopPropagation: function() {
						var e = this.originalEvent;
						this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
					},
					stopImmediatePropagation: function() {
						var e = this.originalEvent;
						this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
					}
				}, C.each({
					altKey: !0,
					bubbles: !0,
					cancelable: !0,
					changedTouches: !0,
					ctrlKey: !0,
					detail: !0,
					eventPhase: !0,
					metaKey: !0,
					pageX: !0,
					pageY: !0,
					shiftKey: !0,
					view: !0,
					char: !0,
					charCode: !0,
					key: !0,
					keyCode: !0,
					button: !0,
					buttons: !0,
					clientX: !0,
					clientY: !0,
					offsetX: !0,
					offsetY: !0,
					pointerId: !0,
					pointerType: !0,
					screenX: !0,
					screenY: !0,
					targetTouches: !0,
					toElement: !0,
					touches: !0,
					which: function(e) {
						var t = e.button;
						return null == e.which && ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
					}
				}, C.event.addProp), C.each({
					mouseenter: "mouseover",
					mouseleave: "mouseout",
					pointerenter: "pointerover",
					pointerleave: "pointerout"
				}, function(e, t) {
					C.event.special[e] = {
						delegateType: t,
						bindType: t,
						handle: function(e) {
							var n, r = e.relatedTarget,
								i = e.handleObj;
							return r && (r === this || C.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
						}
					}
				}), C.fn.extend({
					on: function(e, t, n, r) {
						return Ae(this, e, t, n, r)
					},
					one: function(e, t, n, r) {
						return Ae(this, e, t, n, r, 1)
					},
					off: function(e, t, n) {
						var i, o;
						if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
						if ("object" === r(e)) {
							for (o in e) this.off(o, t, e[o]);
							return this
						}
						return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
							C.event.remove(this, e, n, t)
						})
					}
				});
				var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
					De = /<script|<style|<link/i,
					Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
					Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

				function je(e, t) {
					return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
				}
				function Me(e) {
					return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
				}
				function Re(e) {
					return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
				}
				function Be(e, t) {
					var n, r, i, o, s, a, u, c;
					if (1 === t.nodeType) {
						if (Z.hasData(e) && (o = Z.access(e), s = Z.set(t, o), c = o.events)) for (i in delete s.handle, s.events = {}, c) for (n = 0, r = c[i].length; n < r; n++) C.event.add(t, i, c[i][n]);
						ee.hasData(e) && (a = ee.access(e), u = C.extend({}, a), ee.set(t, u))
					}
				}
				function qe(e, t) {
					var n = t.nodeName.toLowerCase();
					"input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
				}
				function Pe(e, t, n, r) {
					t = l.apply([], t);
					var i, o, s, a, u, c, f = 0,
						d = e.length,
						p = d - 1,
						h = t[0],
						m = b(h);
					if (m || d > 1 && "string" == typeof h && !y.checkClone && Le.test(h)) return e.each(function(i) {
						var o = e.eq(i);
						m && (t[0] = h.call(this, i, o.html())), Pe(o, t, n, r)
					});
					if (d && (o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
						for (a = (s = C.map(ve(i, "script"), Me)).length; f < d; f++) u = i, f !== p && (u = C.clone(u, !0, !0), a && C.merge(s, ve(u, "script"))), n.call(e[f], u, f);
						if (a) for (c = s[s.length - 1].ownerDocument, C.map(s, Re), f = 0; f < a; f++) u = s[f], me.test(u.type || "") && !Z.access(u, "globalEval") && C.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(u.src) : k(u.textContent.replace(Oe, ""), c, u))
					}
					return e
				}
				function Ie(e, t, n) {
					for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(ve(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
					return e
				}
				C.extend({
					htmlPrefilter: function(e) {
						return e.replace(_e, "<$1></$2>")
					},
					clone: function(e, t, n) {
						var r, i, o, s, a = e.cloneNode(!0),
							u = C.contains(e.ownerDocument, e);
						if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = ve(a), r = 0, i = (o = ve(e)).length; r < i; r++) qe(o[r], s[r]);
						if (t) if (n) for (o = o || ve(e), s = s || ve(a), r = 0, i = o.length; r < i; r++) Be(o[r], s[r]);
						else Be(e, a);
						return (s = ve(a, "script")).length > 0 && ye(s, !u && ve(e, "script")), a
					},
					cleanData: function(e) {
						for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
							if (t = n[Z.expando]) {
								if (t.events) for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
								n[Z.expando] = void 0
							}
							n[ee.expando] && (n[ee.expando] = void 0)
						}
					}
				}), C.fn.extend({
					detach: function(e) {
						return Ie(this, e, !0)
					},
					remove: function(e) {
						return Ie(this, e)
					},
					text: function(e) {
						return V(this, function(e) {
							return void 0 === e ? C.text(this) : this.empty().each(function() {
								1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
							})
						}, null, e, arguments.length)
					},
					append: function() {
						return Pe(this, arguments, function(e) {
							1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
						})
					},
					prepend: function() {
						return Pe(this, arguments, function(e) {
							if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
								var t = je(this, e);
								t.insertBefore(e, t.firstChild)
							}
						})
					},
					before: function() {
						return Pe(this, arguments, function(e) {
							this.parentNode && this.parentNode.insertBefore(e, this)
						})
					},
					after: function() {
						return Pe(this, arguments, function(e) {
							this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
						})
					},
					empty: function() {
						for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ve(e, !1)), e.textContent = "");
						return this
					},
					clone: function(e, t) {
						return e = null != e && e, t = null == t ? e : t, this.map(function() {
							return C.clone(this, e, t)
						})
					},
					html: function(e) {
						return V(this, function(e) {
							var t = this[0] || {},
								n = 0,
								r = this.length;
							if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
							if ("string" == typeof e && !De.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
								e = C.htmlPrefilter(e);
								try {
									for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t, !1)), t.innerHTML = e);
									t = 0
								} catch (e) {}
							}
							t && this.empty().append(e)
						}, null, e, arguments.length)
					},
					replaceWith: function() {
						var e = [];
						return Pe(this, arguments, function(t) {
							var n = this.parentNode;
							C.inArray(this, e) < 0 && (C.cleanData(ve(this)), n && n.replaceChild(t, this))
						}, e)
					}
				}), C.each({
					appendTo: "append",
					prependTo: "prepend",
					insertBefore: "before",
					insertAfter: "after",
					replaceAll: "replaceWith"
				}, function(e, t) {
					C.fn[e] = function(e) {
						for (var n, r = [], i = C(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), C(i[s])[t](n), f.apply(r, n.get());
						return this.pushStack(r)
					}
				});
				var He = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
					We = function(e) {
						var t = e.ownerDocument.defaultView;
						return t && t.opener || (t = i), t.getComputedStyle(e)
					},
					Fe = new RegExp(se.join("|"), "i");

				function $e(e, t, n) {
					var r, i, o, s, a = e.style;
					return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !y.pixelBoxStyles() && He.test(s) && Fe.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
				}
				function ze(e, t) {
					return {
						get: function() {
							if (!e()) return (this.get = t).apply(this, arguments);
							delete this.get
						}
					}
				}!
				function() {
					function e() {
						if (l) {
							c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", xe.appendChild(c).appendChild(l);
							var e = i.getComputedStyle(l);
							n = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", xe.removeChild(c), l = null
						}
					}
					function t(e) {
						return Math.round(parseFloat(e))
					}
					var n, r, o, s, u, c = a.createElement("div"),
						l = a.createElement("div");
					l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, C.extend(y, {
						boxSizingReliable: function() {
							return e(), r
						},
						pixelBoxStyles: function() {
							return e(), s
						},
						pixelPosition: function() {
							return e(), n
						},
						reliableMarginLeft: function() {
							return e(), u
						},
						scrollboxSize: function() {
							return e(), o
						}
					}))
				}();
				var Ue = /^(none|table(?!-c[ea]).+)/,
					Ve = /^--/,
					Ge = {
						position: "absolute",
						visibility: "hidden",
						display: "block"
					},
					Xe = {
						letterSpacing: "0",
						fontWeight: "400"
					},
					Ke = ["Webkit", "Moz", "ms"],
					Qe = a.createElement("div").style;

				function Ye(e) {
					var t = C.cssProps[e];
					return t || (t = C.cssProps[e] = function(e) {
						if (e in Qe) return e;
						for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;) if ((e = Ke[n] + t) in Qe) return e
					}(e) || e), t
				}
				function Je(e, t, n) {
					var r = oe.exec(t);
					return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
				}
				function Ze(e, t, n, r, i, o) {
					var s = "width" === t ? 1 : 0,
						a = 0,
						u = 0;
					if (n === (r ? "border" : "content")) return 0;
					for (; s < 4; s += 2)"margin" === n && (u += C.css(e, n + se[s], !0, i)), r ? ("content" === n && (u -= C.css(e, "padding" + se[s], !0, i)), "margin" !== n && (u -= C.css(e, "border" + se[s] + "Width", !0, i))) : (u += C.css(e, "padding" + se[s], !0, i), "padding" !== n ? u += C.css(e, "border" + se[s] + "Width", !0, i) : a += C.css(e, "border" + se[s] + "Width", !0, i));
					return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5))), u
				}
				function et(e, t, n) {
					var r = We(e),
						i = $e(e, t, r),
						o = "border-box" === C.css(e, "boxSizing", !1, r),
						s = o;
					if (He.test(i)) {
						if (!n) return i;
						i = "auto"
					}
					return s = s && (y.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), s, r, i) + "px"
				}
				function tt(e, t, n, r, i) {
					return new tt.prototype.init(e, t, n, r, i)
				}
				C.extend({
					cssHooks: {
						opacity: {
							get: function(e, t) {
								if (t) {
									var n = $e(e, "opacity");
									return "" === n ? "1" : n
								}
							}
						}
					},
					cssNumber: {
						animationIterationCount: !0,
						columnCount: !0,
						fillOpacity: !0,
						flexGrow: !0,
						flexShrink: !0,
						fontWeight: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0
					},
					cssProps: {},
					style: function(e, t, n, i) {
						if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
							var o, s, a, u = Q(t),
								c = Ve.test(t),
								l = e.style;
							if (c || (t = Ye(u)), a = C.cssHooks[t] || C.cssHooks[u], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
							"string" === (s = r(n)) && (o = oe.exec(n)) && o[1] && (n = ce(e, t, o), s = "number"), null != n && n == n && ("number" === s && (n += o && o[3] || (C.cssNumber[u] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c ? l.setProperty(t, n) : l[t] = n))
						}
					},
					css: function(e, t, n, r) {
						var i, o, s, a = Q(t);
						return Ve.test(t) || (t = Ye(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = $e(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
					}
				}), C.each(["height", "width"], function(e, t) {
					C.cssHooks[t] = {
						get: function(e, n, r) {
							if (n) return !Ue.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ue(e, Ge, function() {
								return et(e, t, r)
							})
						},
						set: function(e, n, r) {
							var i, o = We(e),
								s = "border-box" === C.css(e, "boxSizing", !1, o),
								a = r && Ze(e, t, r, s, o);
							return s && y.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), a && (i = oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Je(0, n, a)
						}
					}
				}), C.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
					if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
						marginLeft: 0
					}, function() {
						return e.getBoundingClientRect().left
					})) + "px"
				}), C.each({
					margin: "",
					padding: "",
					border: "Width"
				}, function(e, t) {
					C.cssHooks[e + t] = {
						expand: function(n) {
							for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + se[r] + t] = o[r] || o[r - 2] || o[0];
							return i
						}
					}, "margin" !== e && (C.cssHooks[e + t].set = Je)
				}), C.fn.extend({
					css: function(e, t) {
						return V(this, function(e, t, n) {
							var r, i, o = {},
								s = 0;
							if (Array.isArray(t)) {
								for (r = We(e), i = t.length; s < i; s++) o[t[s]] = C.css(e, t[s], !1, r);
								return o
							}
							return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
						}, e, t, arguments.length > 1)
					}
				}), C.Tween = tt, tt.prototype = {
					constructor: tt,
					init: function(e, t, n, r, i, o) {
						this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
					},
					cur: function() {
						var e = tt.propHooks[this.prop];
						return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
					},
					run: function(e) {
						var t, n = tt.propHooks[this.prop];
						return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
					}
				}, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
					_default: {
						get: function(e) {
							var t;
							return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
						},
						set: function(e) {
							C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
						}
					}
				}, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
					set: function(e) {
						e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
					}
				}, C.easing = {
					linear: function(e) {
						return e
					},
					swing: function(e) {
						return .5 - Math.cos(e * Math.PI) / 2
					},
					_default: "swing"
				}, C.fx = tt.prototype.init, C.fx.step = {};
				var nt, rt, it = /^(?:toggle|show|hide)$/,
					ot = /queueHooks$/;

				function st() {
					rt && (!1 === a.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(st) : i.setTimeout(st, C.fx.interval), C.fx.tick())
				}
				function at() {
					return i.setTimeout(function() {
						nt = void 0
					}), nt = Date.now()
				}
				function ut(e, t) {
					var n, r = 0,
						i = {
							height: e
						};
					for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = se[r])] = i["padding" + n] = e;
					return t && (i.opacity = i.width = e), i
				}
				function ct(e, t, n) {
					for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r
				}
				function lt(e, t, n) {
					var r, i, o = 0,
						s = lt.prefilters.length,
						a = C.Deferred().always(function() {
							delete u.elem
						}),
						u = function() {
							if (i) return !1;
							for (var t = nt || at(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
							return a.notifyWith(e, [c, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
						},
						c = a.promise({
							elem: e,
							props: C.extend({}, t),
							opts: C.extend(!0, {
								specialEasing: {},
								easing: C.easing._default
							}, n),
							originalProperties: t,
							originalOptions: n,
							startTime: nt || at(),
							duration: n.duration,
							tweens: [],
							createTween: function(t, n) {
								var r = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
								return c.tweens.push(r), r
							},
							stop: function(t) {
								var n = 0,
									r = t ? c.tweens.length : 0;
								if (i) return this;
								for (i = !0; n < r; n++) c.tweens[n].run(1);
								return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
							}
						}),
						l = c.props;
					for (!
					function(e, t) {
						var n, r, i, o, s;
						for (n in e) if (i = t[r = Q(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = C.cssHooks[r]) && "expand" in s) for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
						else t[r] = i
					}(l, c.opts.specialEasing); o < s; o++) if (r = lt.prefilters[o].call(c, e, l, c.opts)) return b(r.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
					return C.map(l, ct, c), b(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(u, {
						elem: e,
						anim: c,
						queue: c.opts.queue
					})), c
				}
				C.Animation = C.extend(lt, {
					tweeners: {
						"*": [function(e, t) {
							var n = this.createTween(e, t);
							return ce(n.elem, e, oe.exec(t), n), n
						}]
					},
					tweener: function(e, t) {
						b(e) ? (t = e, e = ["*"]) : e = e.match(I);
						for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
					},
					prefilters: [function(e, t, n) {
						var r, i, o, s, a, u, c, l, f = "width" in t || "height" in t,
							d = this,
							p = {},
							h = e.style,
							m = e.nodeType && ae(e),
							g = Z.get(e, "fxshow");
						for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
							s.unqueued || a()
						}), s.unqueued++, d.always(function() {
							d.always(function() {
								s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
							})
						})), t) if (i = t[r], it.test(i)) {
							if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
								if ("show" !== i || !g || void 0 === g[r]) continue;
								m = !0
							}
							p[r] = g && g[r] || C.style(e, r)
						}
						if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = Z.get(e, "display")), "none" === (l = C.css(e, "display")) && (c ? l = c : (de([e], !0), c = e.style.display || c, l = C.css(e, "display"), de([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === C.css(e, "float") && (u || (d.done(function() {
							h.display = c
						}), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
							h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
						})), u = !1, p) u || (g ? "hidden" in g && (m = g.hidden) : g = Z.access(e, "fxshow", {
							display: c
						}), o && (g.hidden = !m), m && de([e], !0), d.done(function() {
							for (r in m || de([e]), Z.remove(e, "fxshow"), p) C.style(e, r, p[r])
						})), u = ct(m ? g[r] : 0, r, d), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0))
					}],
					prefilter: function(e, t) {
						t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
					}
				}), C.speed = function(e, t, n) {
					var i = e && "object" === r(e) ? C.extend({}, e) : {
						complete: n || !n && t || b(e) && e,
						duration: e,
						easing: n && t || t && !b(t) && t
					};
					return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
						b(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
					}, i
				}, C.fn.extend({
					fadeTo: function(e, t, n, r) {
						return this.filter(ae).css("opacity", 0).show().end().animate({
							opacity: t
						}, e, n, r)
					},
					animate: function(e, t, n, r) {
						var i = C.isEmptyObject(e),
							o = C.speed(t, n, r),
							s = function() {
								var t = lt(this, C.extend({}, e), o);
								(i || Z.get(this, "finish")) && t.stop(!0)
							};
						return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
					},
					stop: function(e, t, n) {
						var r = function(e) {
								var t = e.stop;
								delete e.stop, t(n)
							};
						return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
							var t = !0,
								i = null != e && e + "queueHooks",
								o = C.timers,
								s = Z.get(this);
							if (i) s[i] && s[i].stop && r(s[i]);
							else for (i in s) s[i] && s[i].stop && ot.test(i) && r(s[i]);
							for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
							!t && n || C.dequeue(this, e)
						})
					},
					finish: function(e) {
						return !1 !== e && (e = e || "fx"), this.each(function() {
							var t, n = Z.get(this),
								r = n[e + "queue"],
								i = n[e + "queueHooks"],
								o = C.timers,
								s = r ? r.length : 0;
							for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
							for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
							delete n.finish
						})
					}
				}), C.each(["toggle", "show", "hide"], function(e, t) {
					var n = C.fn[t];
					C.fn[t] = function(e, r, i) {
						return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
					}
				}), C.each({
					slideDown: ut("show"),
					slideUp: ut("hide"),
					slideToggle: ut("toggle"),
					fadeIn: {
						opacity: "show"
					},
					fadeOut: {
						opacity: "hide"
					},
					fadeToggle: {
						opacity: "toggle"
					}
				}, function(e, t) {
					C.fn[e] = function(e, n, r) {
						return this.animate(t, e, n, r)
					}
				}), C.timers = [], C.fx.tick = function() {
					var e, t = 0,
						n = C.timers;
					for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
					n.length || C.fx.stop(), nt = void 0
				}, C.fx.timer = function(e) {
					C.timers.push(e), C.fx.start()
				}, C.fx.interval = 13, C.fx.start = function() {
					rt || (rt = !0, st())
				}, C.fx.stop = function() {
					rt = null
				}, C.fx.speeds = {
					slow: 600,
					fast: 200,
					_default: 400
				}, C.fn.delay = function(e, t) {
					return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
						var r = i.setTimeout(t, e);
						n.stop = function() {
							i.clearTimeout(r)
						}
					})
				}, function() {
					var e = a.createElement("input"),
						t = a.createElement("select").appendChild(a.createElement("option"));
					e.type = "checkbox", y.checkOn = "" !== e.value, y.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", y.radioValue = "t" === e.value
				}();
				var ft, dt = C.expr.attrHandle;
				C.fn.extend({
					attr: function(e, t) {
						return V(this, C.attr, e, t, arguments.length > 1)
					},
					removeAttr: function(e) {
						return this.each(function() {
							C.removeAttr(this, e)
						})
					}
				}), C.extend({
					attr: function(e, t, n) {
						var r, i, o = e.nodeType;
						if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
					},
					attrHooks: {
						type: {
							set: function(e, t) {
								if (!y.radioValue && "radio" === t && L(e, "input")) {
									var n = e.value;
									return e.setAttribute("type", t), n && (e.value = n), t
								}
							}
						}
					},
					removeAttr: function(e, t) {
						var n, r = 0,
							i = t && t.match(I);
						if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
					}
				}), ft = {
					set: function(e, t, n) {
						return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
					}
				}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
					var n = dt[t] || C.find.attr;
					dt[t] = function(e, t, r) {
						var i, o, s = t.toLowerCase();
						return r || (o = dt[s], dt[s] = i, i = null != n(e, t, r) ? s : null, dt[s] = o), i
					}
				});
				var pt = /^(?:input|select|textarea|button)$/i,
					ht = /^(?:a|area)$/i;

				function mt(e) {
					return (e.match(I) || []).join(" ")
				}
				function gt(e) {
					return e.getAttribute && e.getAttribute("class") || ""
				}
				function vt(e) {
					return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
				}
				C.fn.extend({
					prop: function(e, t) {
						return V(this, C.prop, e, t, arguments.length > 1)
					},
					removeProp: function(e) {
						return this.each(function() {
							delete this[C.propFix[e] || e]
						})
					}
				}), C.extend({
					prop: function(e, t, n) {
						var r, i, o = e.nodeType;
						if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
					},
					propHooks: {
						tabIndex: {
							get: function(e) {
								var t = C.find.attr(e, "tabindex");
								return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
							}
						}
					},
					propFix: {
						for :"htmlFor", class: "className"
					}
				}), y.optSelected || (C.propHooks.selected = {
					get: function(e) {
						var t = e.parentNode;
						return t && t.parentNode && t.parentNode.selectedIndex, null
					},
					set: function(e) {
						var t = e.parentNode;
						t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
					}
				}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
					C.propFix[this.toLowerCase()] = this
				}), C.fn.extend({
					addClass: function(e) {
						var t, n, r, i, o, s, a, u = 0;
						if (b(e)) return this.each(function(t) {
							C(this).addClass(e.call(this, t, gt(this)))
						});
						if ((t = vt(e)).length) for (; n = this[u++];) if (i = gt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
							for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
							i !== (a = mt(r)) && n.setAttribute("class", a)
						}
						return this
					},
					removeClass: function(e) {
						var t, n, r, i, o, s, a, u = 0;
						if (b(e)) return this.each(function(t) {
							C(this).removeClass(e.call(this, t, gt(this)))
						});
						if (!arguments.length) return this.attr("class", "");
						if ((t = vt(e)).length) for (; n = this[u++];) if (i = gt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
							for (s = 0; o = t[s++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
							i !== (a = mt(r)) && n.setAttribute("class", a)
						}
						return this
					},
					toggleClass: function(e, t) {
						var n = r(e),
							i = "string" === n || Array.isArray(e);
						return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each(function(n) {
							C(this).toggleClass(e.call(this, n, gt(this), t), t)
						}) : this.each(function() {
							var t, r, o, s;
							if (i) for (r = 0, o = C(this), s = vt(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
							else void 0 !== e && "boolean" !== n || ((t = gt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""))
						})
					},
					hasClass: function(e) {
						var t, n, r = 0;
						for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + mt(gt(n)) + " ").indexOf(t) > -1) return !0;
						return !1
					}
				});
				var yt = /\r/g;
				C.fn.extend({
					val: function(e) {
						var t, n, r, i = this[0];
						return arguments.length ? (r = b(e), this.each(function(n) {
							var i;
							1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function(e) {
								return null == e ? "" : e + ""
							})), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
						})) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
					}
				}), C.extend({
					valHooks: {
						option: {
							get: function(e) {
								var t = C.find.attr(e, "value");
								return null != t ? t : mt(C.text(e))
							}
						},
						select: {
							get: function(e) {
								var t, n, r, i = e.options,
									o = e.selectedIndex,
									s = "select-one" === e.type,
									a = s ? null : [],
									u = s ? o + 1 : i.length;
								for (r = o < 0 ? u : s ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
									if (t = C(n).val(), s) return t;
									a.push(t)
								}
								return a
							},
							set: function(e, t) {
								for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--;)((r = i[s]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
								return n || (e.selectedIndex = -1), o
							}
						}
					}
				}), C.each(["radio", "checkbox"], function() {
					C.valHooks[this] = {
						set: function(e, t) {
							if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
						}
					}, y.checkOn || (C.valHooks[this].get = function(e) {
						return null === e.getAttribute("value") ? "on" : e.value
					})
				}), y.focusin = "onfocusin" in i;
				var bt = /^(?:focusinfocus|focusoutblur)$/,
					wt = function(e) {
						e.stopPropagation()
					};
				C.extend(C.event, {
					trigger: function(e, t, n, o) {
						var s, u, c, l, f, d, p, h, g = [n || a],
							v = m.call(e, "type") ? e.type : e,
							y = m.call(e, "namespace") ? e.namespace.split(".") : [];
						if (u = h = c = n = n || a, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (v = (y = v.split(".")).shift(), y.sort()), f = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" === r(e) && e)).isTrigger = o ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[v] || {}, o || !p.trigger || !1 !== p.trigger.apply(n, t))) {
							if (!o && !p.noBubble && !w(n)) {
								for (l = p.delegateType || v, bt.test(l + v) || (u = u.parentNode); u; u = u.parentNode) g.push(u), c = u;
								c === (n.ownerDocument || a) && g.push(c.defaultView || c.parentWindow || i)
							}
							for (s = 0;
							(u = g[s++]) && !e.isPropagationStopped();) h = u, e.type = s > 1 ? l : p.bindType || v, (d = (Z.get(u, "events") || {})[e.type] && Z.get(u, "handle")) && d.apply(u, t), (d = f && u[f]) && d.apply && Y(u) && (e.result = d.apply(u, t), !1 === e.result && e.preventDefault());
							return e.type = v, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !Y(n) || f && b(n[v]) && !w(n) && ((c = n[f]) && (n[f] = null), C.event.triggered = v, e.isPropagationStopped() && h.addEventListener(v, wt), n[v](), e.isPropagationStopped() && h.removeEventListener(v, wt), C.event.triggered = void 0, c && (n[f] = c)), e.result
						}
					},
					simulate: function(e, t, n) {
						var r = C.extend(new C.Event, n, {
							type: e,
							isSimulated: !0
						});
						C.event.trigger(r, null, t)
					}
				}), C.fn.extend({
					trigger: function(e, t) {
						return this.each(function() {
							C.event.trigger(e, t, this)
						})
					},
					triggerHandler: function(e, t) {
						var n = this[0];
						if (n) return C.event.trigger(e, t, n, !0)
					}
				}), y.focusin || C.each({
					focus: "focusin",
					blur: "focusout"
				}, function(e, t) {
					var n = function(e) {
							C.event.simulate(t, e.target, C.event.fix(e))
						};
					C.event.special[t] = {
						setup: function() {
							var r = this.ownerDocument || this,
								i = Z.access(r, t);
							i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1)
						},
						teardown: function() {
							var r = this.ownerDocument || this,
								i = Z.access(r, t) - 1;
							i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t))
						}
					}
				});
				var xt = i.location,
					kt = Date.now(),
					Tt = /\?/;
				C.parseXML = function(e) {
					var t;
					if (!e || "string" != typeof e) return null;
					try {
						t = (new i.DOMParser).parseFromString(e, "text/xml")
					} catch (e) {
						t = void 0
					}
					return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
				};
				var Ct = /\[\]$/,
					St = /\r?\n/g,
					Et = /^(?:submit|button|image|reset|file)$/i,
					Nt = /^(?:input|select|textarea|keygen)/i;

				function At(e, t, n, i) {
					var o;
					if (Array.isArray(t)) C.each(t, function(t, o) {
						n || Ct.test(e) ? i(e, o) : At(e + "[" + ("object" === r(o) && null != o ? t : "") + "]", o, n, i)
					});
					else if (n || "object" !== T(t)) i(e, t);
					else for (o in t) At(e + "[" + o + "]", t[o], n, i)
				}
				C.param = function(e, t) {
					var n, r = [],
						i = function(e, t) {
							var n = b(t) ? t() : t;
							r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
						};
					if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
						i(this.name, this.value)
					});
					else for (n in e) At(n, e[n], t, i);
					return r.join("&")
				}, C.fn.extend({
					serialize: function() {
						return C.param(this.serializeArray())
					},
					serializeArray: function() {
						return this.map(function() {
							var e = C.prop(this, "elements");
							return e ? C.makeArray(e) : this
						}).filter(function() {
							var e = this.type;
							return this.name && !C(this).is(":disabled") && Nt.test(this.nodeName) && !Et.test(e) && (this.checked || !pe.test(e))
						}).map(function(e, t) {
							var n = C(this).val();
							return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
								return {
									name: t.name,
									value: e.replace(St, "\r\n")
								}
							}) : {
								name: t.name,
								value: n.replace(St, "\r\n")
							}
						}).get()
					}
				});
				var _t = /%20/g,
					Dt = /#.*$/,
					Lt = /([?&])_=[^&]*/,
					Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
					jt = /^(?:GET|HEAD)$/,
					Mt = /^\/\//,
					Rt = {},
					Bt = {},
					qt = "*/".concat("*"),
					Pt = a.createElement("a");

				function It(e) {
					return function(t, n) {
						"string" != typeof t && (n = t, t = "*");
						var r, i = 0,
							o = t.toLowerCase().match(I) || [];
						if (b(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
					}
				}
				function Ht(e, t, n, r) {
					var i = {},
						o = e === Bt;

					function s(a) {
						var u;
						return i[a] = !0, C.each(e[a] || [], function(e, a) {
							var c = a(t, n, r);
							return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
						}), u
					}
					return s(t.dataTypes[0]) || !i["*"] && s("*")
				}
				function Wt(e, t) {
					var n, r, i = C.ajaxSettings.flatOptions || {};
					for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
					return r && C.extend(!0, e, r), e
				}
				Pt.href = xt.href, C.extend({
					active: 0,
					lastModified: {},
					etag: {},
					ajaxSettings: {
						url: xt.href,
						type: "GET",
						isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
						global: !0,
						processData: !0,
						async: !0,
						contentType: "application/x-www-form-urlencoded; charset=UTF-8",
						accepts: {
							"*": qt,
							text: "text/plain",
							html: "text/html",
							xml: "application/xml, text/xml",
							json: "application/json, text/javascript"
						},
						contents: {
							xml: /\bxml\b/,
							html: /\bhtml/,
							json: /\bjson\b/
						},
						responseFields: {
							xml: "responseXML",
							text: "responseText",
							json: "responseJSON"
						},
						converters: {
							"* text": String,
							"text html": !0,
							"text json": JSON.parse,
							"text xml": C.parseXML
						},
						flatOptions: {
							url: !0,
							context: !0
						}
					},
					ajaxSetup: function(e, t) {
						return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
					},
					ajaxPrefilter: It(Rt),
					ajaxTransport: It(Bt),
					ajax: function(e, t) {
						"object" === r(e) && (t = e, e = void 0), t = t || {};
						var n, o, s, u, c, l, f, d, p, h, m = C.ajaxSetup({}, t),
							g = m.context || m,
							v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,
							y = C.Deferred(),
							b = C.Callbacks("once memory"),
							w = m.statusCode || {},
							x = {},
							k = {},
							T = "canceled",
							S = {
								readyState: 0,
								getResponseHeader: function(e) {
									var t;
									if (f) {
										if (!u) for (u = {}; t = Ot.exec(s);) u[t[1].toLowerCase()] = t[2];
										t = u[e.toLowerCase()]
									}
									return null == t ? null : t
								},
								getAllResponseHeaders: function() {
									return f ? s : null
								},
								setRequestHeader: function(e, t) {
									return null == f && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, x[e] = t), this
								},
								overrideMimeType: function(e) {
									return null == f && (m.mimeType = e), this
								},
								statusCode: function(e) {
									var t;
									if (e) if (f) S.always(e[S.status]);
									else for (t in e) w[t] = [w[t], e[t]];
									return this
								},
								abort: function(e) {
									var t = e || T;
									return n && n.abort(t), E(0, t), this
								}
							};
						if (y.promise(S), m.url = ((e || m.url || xt.href) + "").replace(Mt, xt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(I) || [""], null == m.crossDomain) {
							l = a.createElement("a");
							try {
								l.href = m.url, l.href = l.href, m.crossDomain = Pt.protocol + "//" + Pt.host != l.protocol + "//" + l.host
							} catch (e) {
								m.crossDomain = !0
							}
						}
						if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Ht(Rt, m, t, S), f) return S;
						for (p in (d = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !jt.test(m.type), o = m.url.replace(Dt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(_t, "+")) : (h = m.url.slice(o.length), m.data && (m.processData || "string" == typeof m.data) && (o += (Tt.test(o) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (o = o.replace(Lt, "$1"), h = (Tt.test(o) ? "&" : "?") + "_=" + kt+++h), m.url = o + h), m.ifModified && (C.lastModified[o] && S.setRequestHeader("If-Modified-Since", C.lastModified[o]), C.etag[o] && S.setRequestHeader("If-None-Match", C.etag[o])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && S.setRequestHeader("Content-Type", m.contentType), S.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : m.accepts["*"]), m.headers) S.setRequestHeader(p, m.headers[p]);
						if (m.beforeSend && (!1 === m.beforeSend.call(g, S, m) || f)) return S.abort();
						if (T = "abort", b.add(m.complete), S.done(m.success), S.fail(m.error), n = Ht(Bt, m, t, S)) {
							if (S.readyState = 1, d && v.trigger("ajaxSend", [S, m]), f) return S;
							m.async && m.timeout > 0 && (c = i.setTimeout(function() {
								S.abort("timeout")
							}, m.timeout));
							try {
								f = !1, n.send(x, E)
							} catch (e) {
								if (f) throw e;
								E(-1, e)
							}
						} else E(-1, "No Transport");

						function E(e, t, r, a) {
							var u, l, p, h, x, k = t;
							f || (f = !0, c && i.clearTimeout(c), n = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, r && (h = function(e, t, n) {
								for (var r, i, o, s, a = e.contents, u = e.dataTypes;
								"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
								if (r) for (i in a) if (a[i] && a[i].test(r)) {
									u.unshift(i);
									break
								}
								if (u[0] in n) o = u[0];
								else {
									for (i in n) {
										if (!u[0] || e.converters[i + " " + u[0]]) {
											o = i;
											break
										}
										s || (s = i)
									}
									o = o || s
								}
								if (o) return o !== u[0] && u.unshift(o), n[o]
							}(m, S, r)), h = function(e, t, n, r) {
								var i, o, s, a, u, c = {},
									l = e.dataTypes.slice();
								if (l[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
								for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u;
								else if ("*" !== u && u !== o) {
									if (!(s = c[u + " " + o] || c["* " + o])) for (i in c) if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
										!0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));
										break
									}
									if (!0 !== s) if (s && e.throws) t = s(t);
									else try {
										t = s(t)
									} catch (e) {
										return {
											state: "parsererror",
											error: s ? e : "No conversion from " + u + " to " + o
										}
									}
								}
								return {
									state: "success",
									data: t
								}
							}(m, h, S, u), u ? (m.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (C.lastModified[o] = x), (x = S.getResponseHeader("etag")) && (C.etag[o] = x)), 204 === e || "HEAD" === m.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = h.state, l = h.data, u = !(p = h.error))) : (p = k, !e && k || (k = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || k) + "", u ? y.resolveWith(g, [l, k, S]) : y.rejectWith(g, [S, k, p]), S.statusCode(w), w = void 0, d && v.trigger(u ? "ajaxSuccess" : "ajaxError", [S, m, u ? l : p]), b.fireWith(g, [S, k]), d && (v.trigger("ajaxComplete", [S, m]), --C.active || C.event.trigger("ajaxStop")))
						}
						return S
					},
					getJSON: function(e, t, n) {
						return C.get(e, t, n, "json")
					},
					getScript: function(e, t) {
						return C.get(e, void 0, t, "script")
					}
				}), C.each(["get", "post"], function(e, t) {
					C[t] = function(e, n, r, i) {
						return b(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
							url: e,
							type: t,
							dataType: i,
							data: n,
							success: r
						}, C.isPlainObject(e) && e))
					}
				}), C._evalUrl = function(e) {
					return C.ajax({
						url: e,
						type: "GET",
						dataType: "script",
						cache: !0,
						async: !1,
						global: !1,
						throws: !0
					})
				}, C.fn.extend({
					wrapAll: function(e) {
						var t;
						return this[0] && (b(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
							for (var e = this; e.firstElementChild;) e = e.firstElementChild;
							return e
						}).append(this)), this
					},
					wrapInner: function(e) {
						return b(e) ? this.each(function(t) {
							C(this).wrapInner(e.call(this, t))
						}) : this.each(function() {
							var t = C(this),
								n = t.contents();
							n.length ? n.wrapAll(e) : t.append(e)
						})
					},
					wrap: function(e) {
						var t = b(e);
						return this.each(function(n) {
							C(this).wrapAll(t ? e.call(this, n) : e)
						})
					},
					unwrap: function(e) {
						return this.parent(e).not("body").each(function() {
							C(this).replaceWith(this.childNodes)
						}), this
					}
				}), C.expr.pseudos.hidden = function(e) {
					return !C.expr.pseudos.visible(e)
				}, C.expr.pseudos.visible = function(e) {
					return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
				}, C.ajaxSettings.xhr = function() {
					try {
						return new i.XMLHttpRequest
					} catch (e) {}
				};
				var Ft = {
					0: 200,
					1223: 204
				},
					$t = C.ajaxSettings.xhr();
				y.cors = !! $t && "withCredentials" in $t, y.ajax = $t = !! $t, C.ajaxTransport(function(e) {
					var t, n;
					if (y.cors || $t && !e.crossDomain) return {
						send: function(r, o) {
							var s, a = e.xhr();
							if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
							for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
							t = function(e) {
								return function() {
									t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
										binary: a.response
									} : {
										text: a.responseText
									}, a.getAllResponseHeaders()))
								}
							}, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
								4 === a.readyState && i.setTimeout(function() {
									t && n()
								})
							}, t = t("abort");
							try {
								a.send(e.hasContent && e.data || null)
							} catch (e) {
								if (t) throw e
							}
						},
						abort: function() {
							t && t()
						}
					}
				}), C.ajaxPrefilter(function(e) {
					e.crossDomain && (e.contents.script = !1)
				}), C.ajaxSetup({
					accepts: {
						script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
					},
					contents: {
						script: /\b(?:java|ecma)script\b/
					},
					converters: {
						"text script": function(e) {
							return C.globalEval(e), e
						}
					}
				}), C.ajaxPrefilter("script", function(e) {
					void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
				}), C.ajaxTransport("script", function(e) {
					var t, n;
					if (e.crossDomain) return {
						send: function(r, i) {
							t = C("<script>").prop({
								charset: e.scriptCharset,
								src: e.url
							}).on("load error", n = function(e) {
								t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
							}), a.head.appendChild(t[0])
						},
						abort: function() {
							n && n()
						}
					}
				});
				var zt = [],
					Ut = /(=)\?(?=&|$)|\?\?/;
				C.ajaxSetup({
					jsonp: "callback",
					jsonpCallback: function() {
						var e = zt.pop() || C.expando + "_" + kt++;
						return this[e] = !0, e
					}
				}), C.ajaxPrefilter("json jsonp", function(e, t, n) {
					var r, o, s, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
					if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
						return s || C.error(r + " was not called"), s[0]
					}, e.dataTypes[0] = "json", o = i[r], i[r] = function() {
						s = arguments
					}, n.always(function() {
						void 0 === o ? C(i).removeProp(r) : i[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), s && b(o) && o(s[0]), s = o = void 0
					}), "script"
				}), y.createHTMLDocument = function() {
					var e = a.implementation.createHTMLDocument("").body;
					return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
				}(), C.parseHTML = function(e, t, n) {
					return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = O.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
					var r, i, o
				}, C.fn.load = function(e, t, n) {
					var i, o, s, a = this,
						u = e.indexOf(" ");
					return u > -1 && (i = mt(e.slice(u)), e = e.slice(0, u)), b(t) ? (n = t, t = void 0) : t && "object" === r(t) && (o = "POST"), a.length > 0 && C.ajax({
						url: e,
						type: o || "GET",
						dataType: "html",
						data: t
					}).done(function(e) {
						s = arguments, a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
					}).always(n &&
					function(e, t) {
						a.each(function() {
							n.apply(this, s || [e.responseText, t, e])
						})
					}), this
				}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
					C.fn[t] = function(e) {
						return this.on(t, e)
					}
				}), C.expr.pseudos.animated = function(e) {
					return C.grep(C.timers, function(t) {
						return e === t.elem
					}).length
				}, C.offset = {
					setOffset: function(e, t, n) {
						var r, i, o, s, a, u, c = C.css(e, "position"),
							l = C(e),
							f = {};
						"static" === c && (e.style.position = "relative"), a = l.offset(), o = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (s = (r = l.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), b(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : l.css(f)
					}
				}, C.fn.extend({
					offset: function(e) {
						if (arguments.length) return void 0 === e ? this : this.each(function(t) {
							C.offset.setOffset(this, e, t)
						});
						var t, n, r = this[0];
						return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
							top: t.top + n.pageYOffset,
							left: t.left + n.pageXOffset
						}) : {
							top: 0,
							left: 0
						} : void 0
					},
					position: function() {
						if (this[0]) {
							var e, t, n, r = this[0],
								i = {
									top: 0,
									left: 0
								};
							if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
							else {
								for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
								e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
							}
							return {
								top: t.top - i.top - C.css(r, "marginTop", !0),
								left: t.left - i.left - C.css(r, "marginLeft", !0)
							}
						}
					},
					offsetParent: function() {
						return this.map(function() {
							for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
							return e || xe
						})
					}
				}), C.each({
					scrollLeft: "pageXOffset",
					scrollTop: "pageYOffset"
				}, function(e, t) {
					var n = "pageYOffset" === t;
					C.fn[e] = function(r) {
						return V(this, function(e, r, i) {
							var o;
							if (w(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
							o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
						}, e, r, arguments.length)
					}
				}), C.each(["top", "left"], function(e, t) {
					C.cssHooks[t] = ze(y.pixelPosition, function(e, n) {
						if (n) return n = $e(e, t), He.test(n) ? C(e).position()[t] + "px" : n
					})
				}), C.each({
					Height: "height",
					Width: "width"
				}, function(e, t) {
					C.each({
						padding: "inner" + e,
						content: t,
						"": "outer" + e
					}, function(n, r) {
						C.fn[r] = function(i, o) {
							var s = arguments.length && (n || "boolean" != typeof i),
								a = n || (!0 === i || !0 === o ? "margin" : "border");
							return V(this, function(t, n, i) {
								var o;
								return w(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a)
							}, t, s ? i : void 0, s)
						}
					})
				}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
					C.fn[t] = function(e, n) {
						return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
					}
				}), C.fn.extend({
					hover: function(e, t) {
						return this.mouseenter(e).mouseleave(t || e)
					}
				}), C.fn.extend({
					bind: function(e, t, n) {
						return this.on(e, null, t, n)
					},
					unbind: function(e, t) {
						return this.off(e, null, t)
					},
					delegate: function(e, t, n, r) {
						return this.on(t, e, n, r)
					},
					undelegate: function(e, t, n) {
						return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
					}
				}), C.proxy = function(e, t) {
					var n, r, i;
					if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = c.call(arguments, 2), (i = function() {
						return e.apply(t || this, r.concat(c.call(arguments)))
					}).guid = e.guid = e.guid || C.guid++, i
				}, C.holdReady = function(e) {
					e ? C.readyWait++ : C.ready(!0)
				}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = L, C.isFunction = b, C.isWindow = w, C.camelCase = Q, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
					var t = C.type(e);
					return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
				}, void 0 === (n = function() {
					return C
				}.apply(t, [])) || (e.exports = n);
				var Vt = i.jQuery,
					Gt = i.$;
				return C.noConflict = function(e) {
					return i.$ === C && (i.$ = Gt), e && i.jQuery === C && (i.jQuery = Vt), C
				}, o || (i.jQuery = i.$ = C), C
			})
		}).call(this, n(30)(e))
	}, , , , , , function(e, t, n) {
		(function(e) {
			var r;

			function i(e) {
				return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
				function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}!
			function(o, s) {
				"use strict";
				var a = "model",
					u = "name",
					c = "type",
					l = "vendor",
					f = "version",
					d = "mobile",
					p = "tablet",
					h = {
						extend: function(e, t) {
							var n = {};
							for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
							return n
						},
						has: function(e, t) {
							return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
						},
						lowerize: function(e) {
							return e.toLowerCase()
						},
						major: function(e) {
							return "string" === i(e) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
						},
						trim: function(e) {
							return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
						}
					},
					m = {
						rgx: function(e, t) {
							for (var n, r, o, s, a, u, c = 0; c < t.length && !a;) {
								var l = t[c],
									f = t[c + 1];
								for (n = r = 0; n < l.length && !a;) if (a = l[n++].exec(e)) for (o = 0; o < f.length; o++) u = a[++r], "object" === i(s = f[o]) && s.length > 0 ? 2 == s.length ? "function" == i(s[1]) ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 == s.length ? "function" !== i(s[1]) || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : void 0 : this[s[0]] = u ? s[1].call(this, u, s[2]) : void 0 : 4 == s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : void 0) : this[s] = u || void 0;
								c += 2
							}
						},
						str: function(e, t) {
							for (var n in t) if ("object" === i(t[n]) && t[n].length > 0) {
								for (var r = 0; r < t[n].length; r++) if (h.has(t[n][r], e)) return "?" === n ? void 0 : n
							} else if (h.has(t[n], e)) return "?" === n ? void 0 : n;
							return e
						}
					},
					g = {
						browser: {
							oldsafari: {
								version: {
									"1.0": "/8",
									1.2: "/1",
									1.3: "/3",
									"2.0": "/412",
									"2.0.2": "/416",
									"2.0.3": "/417",
									"2.0.4": "/419",
									"?": "/"
								}
							}
						},
						device: {
							amazon: {
								model: {
									"Fire Phone": ["SD", "KF"]
								}
							},
							sprint: {
								model: {
									"Evo Shift 4G": "7373KT"
								},
								vendor: {
									HTC: "APA",
									Sprint: "Sprint"
								}
							}
						},
						os: {
							windows: {
								version: {
									ME: "4.90",
									"NT 3.11": "NT3.51",
									"NT 4.0": "NT4.0",
									2000: "NT 5.0",
									XP: ["NT 5.1", "NT 5.2"],
									Vista: "NT 6.0",
									7: "NT 6.1",
									8: "NT 6.2",
									8.1: "NT 6.3",
									10: ["NT 6.4", "NT 10.0"],
									RT: "ARM"
								}
							}
						}
					},
					v = {
						browser: [
							[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
							[u, f],
							[/(opios)[\/\s]+([\w\.]+)/i],
							[
								[u, "Opera Mini"], f],
							[/\s(opr)\/([\w\.]+)/i],
							[
								[u, "Opera"], f],
							[/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
							[u, f],
							[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
							[
								[u, "IE"], f],
							[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
							[
								[u, "Edge"], f],
							[/(yabrowser)\/([\w\.]+)/i],
							[
								[u, "Yandex"], f],
							[/(puffin)\/([\w\.]+)/i],
							[
								[u, "Puffin"], f],
							[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
							[
								[u, "UCBrowser"], f],
							[/(comodo_dragon)\/([\w\.]+)/i],
							[
								[u, /_/g, " "], f],
							[/(micromessenger)\/([\w\.]+)/i],
							[
								[u, "WeChat"], f],
							[/(qqbrowserlite)\/([\w\.]+)/i],
							[u, f],
							[/(QQ)\/([\d\.]+)/i],
							[u, f],
							[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
							[u, f],
							[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
							[u, f],
							[/(2345Explorer)[\/\s]?([\w\.]+)/i],
							[u, f],
							[/(MetaSr)[\/\s]?([\w\.]+)/i],
							[u],
							[/(LBBROWSER)/i],
							[u],
							[/xiaomi\/miuibrowser\/([\w\.]+)/i],
							[f, [u, "MIUI Browser"]],
							[/;fbav\/([\w\.]+);/i],
							[f, [u, "Facebook"]],
							[/headlesschrome(?:\/([\w\.]+)|\s)/i],
							[f, [u, "Chrome Headless"]],
							[/\swv\).+(chrome)\/([\w\.]+)/i],
							[
								[u, /(.+)/, "$1 WebView"], f],
							[/((?:oculus|samsung)browser)\/([\w\.]+)/i],
							[
								[u, /(.+(?:g|us))(.+)/, "$1 $2"], f],
							[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
							[f, [u, "Android Browser"]],
							[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
							[u, f],
							[/(dolfin)\/([\w\.]+)/i],
							[
								[u, "Dolphin"], f],
							[/((?:android.+)crmo|crios)\/([\w\.]+)/i],
							[
								[u, "Chrome"], f],
							[/(coast)\/([\w\.]+)/i],
							[
								[u, "Opera Coast"], f],
							[/fxios\/([\w\.-]+)/i],
							[f, [u, "Firefox"]],
							[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
							[f, [u, "Mobile Safari"]],
							[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
							[f, u],
							[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
							[
								[u, "GSA"], f],
							[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
							[u, [f, m.str, g.browser.oldsafari.version]],
							[/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
							[u, f],
							[/(navigator|netscape)\/([\w\.-]+)/i],
							[
								[u, "Netscape"], f],
							[/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
							[u, f]
						],
						cpu: [
							[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
							[
								["architecture", "amd64"]
							],
							[/(ia32(?=;))/i],
							[
								["architecture", h.lowerize]
							],
							[/((?:i[346]|x)86)[;\)]/i],
							[
								["architecture", "ia32"]
							],
							[/windows\s(ce|mobile);\sppc;/i],
							[
								["architecture", "arm"]
							],
							[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
							[
								["architecture", /ower/, "", h.lowerize]
							],
							[/(sun4\w)[;\)]/i],
							[
								["architecture", "sparc"]
							],
							[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
							[
								["architecture", h.lowerize]
							]
						],
						device: [
							[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
							[a, l, [c, p]],
							[/applecoremedia\/[\w\.]+ \((ipad)/],
							[a, [l, "Apple"],
								[c, p]
							],
							[/(apple\s{0,1}tv)/i],
							[
								[a, "Apple TV"],
								[l, "Apple"]
							],
							[/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
							[l, a, [c, p]],
							[/(kf[A-z]+)\sbuild\/.+silk\//i],
							[a, [l, "Amazon"],
								[c, p]
							],
							[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
							[
								[a, m.str, g.device.amazon.model],
								[l, "Amazon"],
								[c, d]
							],
							[/\((ip[honed|\s\w*]+);.+(apple)/i],
							[a, l, [c, d]],
							[/\((ip[honed|\s\w*]+);/i],
							[a, [l, "Apple"],
								[c, d]
							],
							[/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
							[l, a, [c, d]],
							[/\(bb10;\s(\w+)/i],
							[a, [l, "BlackBerry"],
								[c, d]
							],
							[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
							[a, [l, "Asus"],
								[c, p]
							],
							[/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
							[
								[l, "Sony"],
								[a, "Xperia Tablet"],
								[c, p]
							],
							[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
							[a, [l, "Sony"],
								[c, d]
							],
							[/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
							[l, a, [c, "console"]],
							[/android.+;\s(shield)\sbuild/i],
							[a, [l, "Nvidia"],
								[c, "console"]
							],
							[/(playstation\s[34portablevi]+)/i],
							[a, [l, "Sony"],
								[c, "console"]
							],
							[/(sprint\s(\w+))/i],
							[
								[l, m.str, g.device.sprint.vendor],
								[a, m.str, g.device.sprint.model],
								[c, d]
							],
							[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
							[l, a, [c, p]],
							[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
							[l, [a, /_/g, " "],
								[c, d]
							],
							[/(nexus\s9)/i],
							[a, [l, "HTC"],
								[c, p]
							],
							[/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
							[a, [l, "Huawei"],
								[c, d]
							],
							[/(microsoft);\s(lumia[\s\w]+)/i],
							[l, a, [c, d]],
							[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
							[a, [l, "Microsoft"],
								[c, "console"]
							],
							[/(kin\.[onetw]{3})/i],
							[
								[a, /\./g, " "],
								[l, "Microsoft"],
								[c, d]
							],
							[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
							[a, [l, "Motorola"],
								[c, d]
							],
							[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
							[a, [l, "Motorola"],
								[c, p]
							],
							[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
							[
								[l, h.trim],
								[a, h.trim],
								[c, "smarttv"]
							],
							[/hbbtv.+maple;(\d+)/i],
							[
								[a, /^/, "SmartTV"],
								[l, "Samsung"],
								[c, "smarttv"]
							],
							[/\(dtv[\);].+(aquos)/i],
							[a, [l, "Sharp"],
								[c, "smarttv"]
							],
							[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
							[
								[l, "Samsung"], a, [c, p]
							],
							[/smart-tv.+(samsung)/i],
							[l, [c, "smarttv"], a],
							[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
							[
								[l, "Samsung"], a, [c, d]
							],
							[/sie-(\w*)/i],
							[a, [l, "Siemens"],
								[c, d]
							],
							[/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
							[
								[l, "Nokia"], a, [c, d]
							],
							[/android\s3\.[\s\w;-]{10}(a\d{3})/i],
							[a, [l, "Acer"],
								[c, p]
							],
							[/android.+([vl]k\-?\d{3})\s+build/i],
							[a, [l, "LG"],
								[c, p]
							],
							[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
							[
								[l, "LG"], a, [c, p]
							],
							[/(lg) netcast\.tv/i],
							[l, a, [c, "smarttv"]],
							[/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
							[a, [l, "LG"],
								[c, d]
							],
							[/android.+(ideatab[a-z0-9\-\s]+)/i],
							[a, [l, "Lenovo"],
								[c, p]
							],
							[/linux;.+((jolla));/i],
							[l, a, [c, d]],
							[/((pebble))app\/[\d\.]+\s/i],
							[l, a, [c, "wearable"]],
							[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
							[l, a, [c, d]],
							[/crkey/i],
							[
								[a, "Chromecast"],
								[l, "Google"]
							],
							[/android.+;\s(glass)\s\d/i],
							[a, [l, "Google"],
								[c, "wearable"]
							],
							[/android.+;\s(pixel c)\s/i],
							[a, [l, "Google"],
								[c, p]
							],
							[/android.+;\s(pixel xl|pixel)\s/i],
							[a, [l, "Google"],
								[c, d]
							],
							[/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
							[
								[a, /_/g, " "],
								[l, "Xiaomi"],
								[c, d]
							],
							[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
							[
								[a, /_/g, " "],
								[l, "Xiaomi"],
								[c, p]
							],
							[/android.+;\s(m[1-5]\snote)\sbuild/i],
							[a, [l, "Meizu"],
								[c, p]
							],
							[/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
							[a, [l, "OnePlus"],
								[c, d]
							],
							[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
							[a, [l, "RCA"],
								[c, p]
							],
							[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
							[a, [l, "Dell"],
								[c, p]
							],
							[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
							[a, [l, "Verizon"],
								[c, p]
							],
							[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
							[
								[l, "Barnes & Noble"], a, [c, p]
							],
							[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
							[a, [l, "NuVision"],
								[c, p]
							],
							[/android.+;\s(k88)\sbuild/i],
							[a, [l, "ZTE"],
								[c, p]
							],
							[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
							[a, [l, "Swiss"],
								[c, d]
							],
							[/android.+[;\/]\s*(zur\d{3})\s+build/i],
							[a, [l, "Swiss"],
								[c, p]
							],
							[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
							[a, [l, "Zeki"],
								[c, p]
							],
							[/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
							[
								[l, "Dragon Touch"], a, [c, p]
							],
							[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
							[a, [l, "Insignia"],
								[c, p]
							],
							[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
							[a, [l, "NextBook"],
								[c, p]
							],
							[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
							[
								[l, "Voice"], a, [c, d]
							],
							[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
							[
								[l, "LvTel"], a, [c, d]
							],
							[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
							[a, [l, "Envizen"],
								[c, p]
							],
							[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
							[l, a, [c, p]],
							[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
							[a, [l, "MachSpeed"],
								[c, p]
							],
							[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
							[l, a, [c, p]],
							[/android.+[;\/]\s*TU_(1491)\s+build/i],
							[a, [l, "Rotor"],
								[c, p]
							],
							[/android.+(KS(.+))\s+build/i],
							[a, [l, "Amazon"],
								[c, p]
							],
							[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
							[l, a, [c, p]],
							[/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
							[
								[c, h.lowerize], l, a],
							[/(android[\w\.\s\-]{0,9});.+build/i],
							[a, [l, "Generic"]]
						],
						engine: [
							[/windows.+\sedge\/([\w\.]+)/i],
							[f, [u, "EdgeHTML"]],
							[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
							[u, f],
							[/rv\:([\w\.]{1,9}).+(gecko)/i],
							[f, u]
						],
						os: [
							[/microsoft\s(windows)\s(vista|xp)/i],
							[u, f],
							[/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
							[u, [f, m.str, g.os.windows.version]],
							[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
							[
								[u, "Windows"],
								[f, m.str, g.os.windows.version]
							],
							[/\((bb)(10);/i],
							[
								[u, "BlackBerry"], f],
							[/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
							[u, f],
							[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
							[
								[u, "Symbian"], f],
							[/\((series40);/i],
							[u],
							[/mozilla.+\(mobile;.+gecko.+firefox/i],
							[
								[u, "Firefox OS"], f],
							[/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
							[u, f],
							[/(cros)\s[\w]+\s([\w\.]+\w)/i],
							[
								[u, "Chromium OS"], f],
							[/(sunos)\s?([\w\.\d]*)/i],
							[
								[u, "Solaris"], f],
							[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
							[u, f],
							[/(haiku)\s(\w+)/i],
							[u, f],
							[/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
							[
								[f, /_/g, "."],
								[u, "iOS"]
							],
							[/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
							[
								[u, "Mac OS"],
								[f, /_/g, "."]
							],
							[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
							[u, f]
						]
					},
					y = function e(t, n) {
						if ("object" === i(t) && (n = t, t = void 0), !(this instanceof e)) return new e(t, n).getResult();
						var r = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
							s = n ? h.extend(v, n) : v;
						return this.getBrowser = function() {
							var e = {
								name: void 0,
								version: void 0
							};
							return m.rgx.call(e, r, s.browser), e.major = h.major(e.version), e
						}, this.getCPU = function() {
							var e = {
								architecture: void 0
							};
							return m.rgx.call(e, r, s.cpu), e
						}, this.getDevice = function() {
							var e = {
								vendor: void 0,
								model: void 0,
								type: void 0
							};
							return m.rgx.call(e, r, s.device), e
						}, this.getEngine = function() {
							var e = {
								name: void 0,
								version: void 0
							};
							return m.rgx.call(e, r, s.engine), e
						}, this.getOS = function() {
							var e = {
								name: void 0,
								version: void 0
							};
							return m.rgx.call(e, r, s.os), e
						}, this.getResult = function() {
							return {
								ua: this.getUA(),
								browser: this.getBrowser(),
								engine: this.getEngine(),
								os: this.getOS(),
								device: this.getDevice(),
								cpu: this.getCPU()
							}
						}, this.getUA = function() {
							return r
						}, this.setUA = function(e) {
							return r = e, this
						}, this
					};
				y.VERSION = "0.7.18", y.BROWSER = {
					NAME: u,
					MAJOR: "major",
					VERSION: f
				}, y.CPU = {
					ARCHITECTURE: "architecture"
				}, y.DEVICE = {
					MODEL: a,
					VENDOR: l,
					TYPE: c,
					CONSOLE: "console",
					MOBILE: d,
					SMARTTV: "smarttv",
					TABLET: p,
					WEARABLE: "wearable",
					EMBEDDED: "embedded"
				}, y.ENGINE = {
					NAME: u,
					VERSION: f
				}, y.OS = {
					NAME: u,
					VERSION: f
				}, "undefined" !== i(t) ? ("undefined" !== i(e) && e.exports && (t = e.exports = y), t.UAParser = y) : "function" === i(n(32)) && n(33) ? void 0 === (r = function() {
					return y
				}.call(t, n, t, e)) || (e.exports = r) : o && (o.UAParser = y);
				var b = o && (o.jQuery || o.Zepto);
				if ("undefined" !== i(b)) {
					var w = new y;
					b.ua = w.getResult(), b.ua.get = function() {
						return w.getUA()
					}, b.ua.set = function(e) {
						w.setUA(e);
						var t = w.getResult();
						for (var n in t) b.ua[n] = t[n]
					}
				}
			}("object" === ("undefined" == typeof window ? "undefined" : i(window)) ? window : this)
		}).call(this, n(30)(e))
	}, , function(e, t, n) {
		var r, i;
		void 0 === (i = "function" == typeof(r = function() {
			var e = {
				version: "0.2.0"
			},
				t = e.settings = {
					minimum: .08,
					easing: "ease",
					positionUsing: "",
					speed: 200,
					trickle: !0,
					trickleRate: .02,
					trickleSpeed: 800,
					showSpinner: !0,
					barSelector: '[role="bar"]',
					spinnerSelector: '[role="spinner"]',
					parent: "body",
					template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
				};

			function n(e, t, n) {
				return e < t ? t : e > n ? n : e
			}
			function r(e) {
				return 100 * (-1 + e)
			}
			e.configure = function(e) {
				var n, r;
				for (n in e) void 0 !== (r = e[n]) && e.hasOwnProperty(n) && (t[n] = r);
				return this
			}, e.status = null, e.set = function(s) {
				var a = e.isStarted();
				s = n(s, t.minimum, 1), e.status = 1 === s ? null : s;
				var u = e.render(!a),
					c = u.querySelector(t.barSelector),
					l = t.speed,
					f = t.easing;
				return u.offsetWidth, i(function(n) {
					"" === t.positionUsing && (t.positionUsing = e.getPositioningCSS()), o(c, function(e, n, i) {
						var o;
						return (o = "translate3d" === t.positionUsing ? {
							transform: "translate3d(" + r(e) + "%,0,0)"
						} : "translate" === t.positionUsing ? {
							transform: "translate(" + r(e) + "%,0)"
						} : {
							"margin-left": r(e) + "%"
						}).transition = "all " + n + "ms " + i, o
					}(s, l, f)), 1 === s ? (o(u, {
						transition: "none",
						opacity: 1
					}), u.offsetWidth, setTimeout(function() {
						o(u, {
							transition: "all " + l + "ms linear",
							opacity: 0
						}), setTimeout(function() {
							e.remove(), n()
						}, l)
					}, l)) : setTimeout(n, l)
				}), this
			}, e.isStarted = function() {
				return "number" == typeof e.status
			}, e.start = function() {
				return e.status || e.set(0), t.trickle &&
				function n() {
					setTimeout(function() {
						e.status && (e.trickle(), n())
					}, t.trickleSpeed)
				}(), this
			}, e.done = function(t) {
				return t || e.status ? e.inc(.3 + .5 * Math.random()).set(1) : this
			}, e.inc = function(t) {
				var r = e.status;
				return r ? ("number" != typeof t && (t = (1 - r) * n(Math.random() * r, .1, .95)), r = n(r + t, 0, .994), e.set(r)) : e.start()
			}, e.trickle = function() {
				return e.inc(Math.random() * t.trickleRate)
			}, function() {
				var t = 0,
					n = 0;
				e.promise = function(r) {
					return r && "resolved" !== r.state() ? (0 === n && e.start(), t++, n++, r.always(function() {
						0 == --n ? (t = 0, e.done()) : e.set((t - n) / t)
					}), this) : this
				}
			}(), e.render = function(n) {
				if (e.isRendered()) return document.getElementById("nprogress");
				a(document.documentElement, "nprogress-busy");
				var i = document.createElement("div");
				i.id = "nprogress", i.innerHTML = t.template;
				var s, u = i.querySelector(t.barSelector),
					c = n ? "-100" : r(e.status || 0),
					f = document.querySelector(t.parent);
				return o(u, {
					transition: "all 0 linear",
					transform: "translate3d(" + c + "%,0,0)"
				}), t.showSpinner || (s = i.querySelector(t.spinnerSelector)) && l(s), f != document.body && a(f, "nprogress-custom-parent"), f.appendChild(i), i
			}, e.remove = function() {
				u(document.documentElement, "nprogress-busy"), u(document.querySelector(t.parent), "nprogress-custom-parent");
				var e = document.getElementById("nprogress");
				e && l(e)
			}, e.isRendered = function() {
				return !!document.getElementById("nprogress")
			}, e.getPositioningCSS = function() {
				var e = document.body.style,
					t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
				return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
			};
			var i = function() {
					var e = [];

					function t() {
						var n = e.shift();
						n && n(t)
					}
					return function(n) {
						e.push(n), 1 == e.length && t()
					}
				}(),
				o = function() {
					var e = ["Webkit", "O", "Moz", "ms"],
						t = {};

					function n(n) {
						return n = function(e) {
							return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
								return t.toUpperCase()
							})
						}(n), t[n] || (t[n] = function(t) {
							var n = document.body.style;
							if (t in n) return t;
							for (var r, i = e.length, o = t.charAt(0).toUpperCase() + t.slice(1); i--;) if ((r = e[i] + o) in n) return r;
							return t
						}(n))
					}
					function r(e, t, r) {
						t = n(t), e.style[t] = r
					}
					return function(e, t) {
						var n, i, o = arguments;
						if (2 == o.length) for (n in t) void 0 !== (i = t[n]) && t.hasOwnProperty(n) && r(e, n, i);
						else r(e, o[1], o[2])
					}
				}();

			function s(e, t) {
				var n = "string" == typeof e ? e : c(e);
				return n.indexOf(" " + t + " ") >= 0
			}
			function a(e, t) {
				var n = c(e),
					r = n + t;
				s(n, t) || (e.className = r.substring(1))
			}
			function u(e, t) {
				var n, r = c(e);
				s(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
			}
			function c(e) {
				return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
			}
			function l(e) {
				e && e.parentNode && e.parentNode.removeChild(e)
			}
			return e
		}) ? r.call(t, n, t, e) : r) || (e.exports = i)
	}, , , , , , function(e, t, n) {
		var r, i;

		function o(e) {
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}!
		function(s, a) {
			"object" === o(t) && void 0 !== e ? e.exports = a() : void 0 === (i = "function" == typeof(r = a) ? r.call(t, n, t, e) : r) || (e.exports = i)
		}(0, function() {
			"use strict";
			var e = function() {},
				t = Object.prototype.hasOwnProperty,
				n = Array.prototype.slice;

			function r(e, r, i) {
				for (var o, s, a = 0, u = (i = n.call(arguments, 2)).length; a < u; a++) for (o in s = i[a]) e && !t.call(s, o) || (r[o] = s[o])
			}
			var i = function(t, n, i, o) {
					var s = this;
					return "string" != typeof t && (o = i, i = n, n = t, t = null), "function" != typeof n && (o = i, i = n, n = function() {
						return s.apply(this, arguments)
					}), r(!1, n, s, o), n.prototype = function(t, n) {
						var i;
						return "function" == typeof Object.create ? i = Object.create(t) : (e.prototype = t, i = new e, e.prototype = null), n && r(!0, i, n), i
					}(s.prototype, i), n.prototype.constructor = n, n.class_ = t || s.class_, n.super_ = s, n
				};

			function o() {}
			o.class_ = "Nevis", o.super_ = Object, o.extend = i;
			var s = o,
				a = s.extend(function(e, t, n) {
					this.qrious = e, this.element = t, this.element.qrious = e, this.enabled = Boolean(n)
				}, {
					draw: function(e) {},
					getElement: function() {
						return this.enabled || (this.enabled = !0, this.render()), this.element
					},
					getModuleSize: function(e) {
						var t = this.qrious,
							n = t.padding || 0,
							r = Math.floor((t.size - 2 * n) / e.width);
						return Math.max(1, r)
					},
					getOffset: function(e) {
						var t = this.qrious,
							n = t.padding;
						if (null != n) return n;
						var r = this.getModuleSize(e),
							i = Math.floor((t.size - r * e.width) / 2);
						return Math.max(0, i)
					},
					render: function(e) {
						this.enabled && (this.resize(), this.reset(), this.draw(e))
					},
					reset: function() {},
					resize: function() {}
				}),
				u = a.extend({
					draw: function(e) {
						var t, n, r = this.qrious,
							i = this.getModuleSize(e),
							o = this.getOffset(e),
							s = this.element.getContext("2d");
						for (s.fillStyle = r.foreground, s.globalAlpha = r.foregroundAlpha, t = 0; t < e.width; t++) for (n = 0; n < e.width; n++) e.buffer[n * e.width + t] && s.fillRect(i * t + o, i * n + o, i, i)
					},
					reset: function() {
						var e = this.qrious,
							t = this.element.getContext("2d"),
							n = e.size;
						t.lineWidth = 1, t.clearRect(0, 0, n, n), t.fillStyle = e.background, t.globalAlpha = e.backgroundAlpha, t.fillRect(0, 0, n, n)
					},
					resize: function() {
						var e = this.element;
						e.width = e.height = this.qrious.size
					}
				}),
				c = s.extend(null, {
					BLOCK: [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28]
				}),
				l = s.extend(null, {
					BLOCKS: [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30],
					FINAL_FORMAT: [30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107],
					LEVELS: {
						L: 1,
						M: 2,
						Q: 3,
						H: 4
					}
				}),
				f = s.extend(null, {
					EXPONENT: [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0],
					LOG: [255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175]
				}),
				d = s.extend(null, {
					BLOCK: [3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177]
				}),
				p = s.extend(function(e) {
					var t, n, r, i, o, s = e.value.length;
					for (this._badness = [], this._level = l.LEVELS[e.level], this._polynomial = [], this._value = e.value, this._version = 0, this._stringBuffer = []; this._version < 40 && (this._version++, r = 4 * (this._level - 1) + 16 * (this._version - 1), i = l.BLOCKS[r++], o = l.BLOCKS[r++], t = l.BLOCKS[r++], n = l.BLOCKS[r], !(s <= (r = t * (i + o) + o - 3 + (this._version <= 9)))););
					this._dataBlock = t, this._eccBlock = n, this._neccBlock1 = i, this._neccBlock2 = o;
					var a = this.width = 17 + 4 * this._version;
					this.buffer = p._createArray(a * a), this._ecc = p._createArray(t + (t + n) * (i + o) + o), this._mask = p._createArray((a * (a + 1) + 1) / 2), this._insertFinders(), this._insertAlignments(), this.buffer[8 + a * (a - 8)] = 1, this._insertTimingGap(), this._reverseMask(), this._insertTimingRowAndColumn(), this._insertVersion(), this._syncMask(), this._convertBitStream(s), this._calculatePolynomial(), this._appendEccToData(), this._interleaveBlocks(), this._pack(), this._finish()
				}, {
					_addAlignment: function(e, t) {
						var n, r = this.buffer,
							i = this.width;
						for (r[e + i * t] = 1, n = -2; n < 2; n++) r[e + n + i * (t - 2)] = 1, r[e - 2 + i * (t + n + 1)] = 1, r[e + 2 + i * (t + n)] = 1, r[e + n + 1 + i * (t + 2)] = 1;
						for (n = 0; n < 2; n++) this._setMask(e - 1, t + n), this._setMask(e + 1, t - n), this._setMask(e - n, t - 1), this._setMask(e + n, t + 1)
					},
					_appendData: function(e, t, n, r) {
						var i, o, s, a = this._polynomial,
							u = this._stringBuffer;
						for (o = 0; o < r; o++) u[n + o] = 0;
						for (o = 0; o < t; o++) {
							if (255 !== (i = f.LOG[u[e + o] ^ u[n]])) for (s = 1; s < r; s++) u[n + s - 1] = u[n + s] ^ f.EXPONENT[p._modN(i + a[r - s])];
							else for (s = n; s < n + r; s++) u[s] = u[s + 1];
							u[n + r - 1] = 255 === i ? 0 : f.EXPONENT[p._modN(i + a[0])]
						}
					},
					_appendEccToData: function() {
						var e, t = 0,
							n = this._dataBlock,
							r = this._calculateMaxLength(),
							i = this._eccBlock;
						for (e = 0; e < this._neccBlock1; e++) this._appendData(t, n, r, i), t += n, r += i;
						for (e = 0; e < this._neccBlock2; e++) this._appendData(t, n + 1, r, i), t += n + 1, r += i
					},
					_applyMask: function(e) {
						var t, n, r, i, o = this.buffer,
							s = this.width;
						switch (e) {
						case 0:
							for (i = 0; i < s; i++) for (r = 0; r < s; r++) r + i & 1 || this._isMasked(r, i) || (o[r + i * s] ^= 1);
							break;
						case 1:
							for (i = 0; i < s; i++) for (r = 0; r < s; r++) 1 & i || this._isMasked(r, i) || (o[r + i * s] ^= 1);
							break;
						case 2:
							for (i = 0; i < s; i++) for (t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), t || this._isMasked(r, i) || (o[r + i * s] ^= 1);
							break;
						case 3:
							for (n = 0, i = 0; i < s; i++, n++) for (3 === n && (n = 0), t = n, r = 0; r < s; r++, t++) 3 === t && (t = 0), t || this._isMasked(r, i) || (o[r + i * s] ^= 1);
							break;
						case 4:
							for (i = 0; i < s; i++) for (t = 0, n = i >> 1 & 1, r = 0; r < s; r++, t++) 3 === t && (t = 0, n = !n), n || this._isMasked(r, i) || (o[r + i * s] ^= 1);
							break;
						case 5:
							for (n = 0, i = 0; i < s; i++, n++) for (3 === n && (n = 0), t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), (r & i & 1) + !(!t | !n) || this._isMasked(r, i) || (o[r + i * s] ^= 1);
							break;
						case 6:
							for (n = 0, i = 0; i < s; i++, n++) for (3 === n && (n = 0), t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), (r & i & 1) + (t && t === n) & 1 || this._isMasked(r, i) || (o[r + i * s] ^= 1);
							break;
						case 7:
							for (n = 0, i = 0; i < s; i++, n++) for (3 === n && (n = 0), t = 0, r = 0; r < s; r++, t++) 3 === t && (t = 0), (t && t === n) + (r + i & 1) & 1 || this._isMasked(r, i) || (o[r + i * s] ^= 1)
						}
					},
					_calculateMaxLength: function() {
						return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2
					},
					_calculatePolynomial: function() {
						var e, t, n = this._eccBlock,
							r = this._polynomial;
						for (r[0] = 1, e = 0; e < n; e++) {
							for (r[e + 1] = 1, t = e; t > 0; t--) r[t] = r[t] ? r[t - 1] ^ f.EXPONENT[p._modN(f.LOG[r[t]] + e)] : r[t - 1];
							r[0] = f.EXPONENT[p._modN(f.LOG[r[0]] + e)]
						}
						for (e = 0; e <= n; e++) r[e] = f.LOG[r[e]]
					},
					_checkBadness: function() {
						var e, t, n, r, i, o = 0,
							s = this._badness,
							a = this.buffer,
							u = this.width;
						for (i = 0; i < u - 1; i++) for (r = 0; r < u - 1; r++)(a[r + u * i] && a[r + 1 + u * i] && a[r + u * (i + 1)] && a[r + 1 + u * (i + 1)] || !(a[r + u * i] || a[r + 1 + u * i] || a[r + u * (i + 1)] || a[r + 1 + u * (i + 1)])) && (o += p.N2);
						var c = 0;
						for (i = 0; i < u; i++) {
							for (n = 0, s[0] = 0, e = 0, r = 0; r < u; r++) e === (t = a[r + u * i]) ? s[n]++ : s[++n] = 1, c += (e = t) ? 1 : -1;
							o += this._getBadness(n)
						}
						c < 0 && (c = -c);
						var l = 0,
							f = c;
						for (f += f << 2, f <<= 1; f > u * u;) f -= u * u, l++;
						for (o += l * p.N4, r = 0; r < u; r++) {
							for (n = 0, s[0] = 0, e = 0, i = 0; i < u; i++) e === (t = a[r + u * i]) ? s[n]++ : s[++n] = 1, e = t;
							o += this._getBadness(n)
						}
						return o
					},
					_convertBitStream: function(e) {
						var t, n, r = this._ecc,
							i = this._version;
						for (n = 0; n < e; n++) r[n] = this._value.charCodeAt(n);
						var o = this._stringBuffer = r.slice(),
							s = this._calculateMaxLength();
						e >= s - 2 && (e = s - 2, i > 9 && e--);
						var a = e;
						if (i > 9) {
							for (o[a + 2] = 0, o[a + 3] = 0; a--;) t = o[a], o[a + 3] |= 255 & t << 4, o[a + 2] = t >> 4;
							o[2] |= 255 & e << 4, o[1] = e >> 4, o[0] = 64 | e >> 12
						} else {
							for (o[a + 1] = 0, o[a + 2] = 0; a--;) t = o[a], o[a + 2] |= 255 & t << 4, o[a + 1] = t >> 4;
							o[1] |= 255 & e << 4, o[0] = 64 | e >> 4
						}
						for (a = e + 3 - (i < 10); a < s;) o[a++] = 236, o[a++] = 17
					},
					_getBadness: function(e) {
						var t, n = 0,
							r = this._badness;
						for (t = 0; t <= e; t++) r[t] >= 5 && (n += p.N1 + r[t] - 5);
						for (t = 3; t < e - 1; t += 2) r[t - 2] === r[t + 2] && r[t + 2] === r[t - 1] && r[t - 1] === r[t + 1] && 3 * r[t - 1] === r[t] && (0 === r[t - 3] || t + 3 > e || 3 * r[t - 3] >= 4 * r[t] || 3 * r[t + 3] >= 4 * r[t]) && (n += p.N3);
						return n
					},
					_finish: function() {
						var e, t;
						this._stringBuffer = this.buffer.slice();
						var n = 0,
							r = 3e4;
						for (t = 0; t < 8 && (this._applyMask(t), (e = this._checkBadness()) < r && (r = e, n = t), 7 !== n); t++) this.buffer = this._stringBuffer.slice();
						n !== t && this._applyMask(n), r = l.FINAL_FORMAT[n + (this._level - 1 << 3)];
						var i = this.buffer,
							o = this.width;
						for (t = 0; t < 8; t++, r >>= 1) 1 & r && (i[o - 1 - t + 8 * o] = 1, t < 6 ? i[8 + o * t] = 1 : i[8 + o * (t + 1)] = 1);
						for (t = 0; t < 7; t++, r >>= 1) 1 & r && (i[8 + o * (o - 7 + t)] = 1, t ? i[6 - t + 8 * o] = 1 : i[7 + 8 * o] = 1)
					},
					_interleaveBlocks: function() {
						var e, t, n = this._dataBlock,
							r = this._ecc,
							i = this._eccBlock,
							o = 0,
							s = this._calculateMaxLength(),
							a = this._neccBlock1,
							u = this._neccBlock2,
							c = this._stringBuffer;
						for (e = 0; e < n; e++) {
							for (t = 0; t < a; t++) r[o++] = c[e + t * n];
							for (t = 0; t < u; t++) r[o++] = c[a * n + e + t * (n + 1)]
						}
						for (t = 0; t < u; t++) r[o++] = c[a * n + e + t * (n + 1)];
						for (e = 0; e < i; e++) for (t = 0; t < a + u; t++) r[o++] = c[s + e + t * i];
						this._stringBuffer = r
					},
					_insertAlignments: function() {
						var e, t, n, r = this._version,
							i = this.width;
						if (r > 1) for (e = c.BLOCK[r], n = i - 7;;) {
							for (t = i - 7; t > e - 3 && (this._addAlignment(t, n), !(t < e));) t -= e;
							if (n <= e + 9) break;
							n -= e, this._addAlignment(6, n), this._addAlignment(n, 6)
						}
					},
					_insertFinders: function() {
						var e, t, n, r, i = this.buffer,
							o = this.width;
						for (e = 0; e < 3; e++) {
							for (t = 0, r = 0, 1 === e && (t = o - 7), 2 === e && (r = o - 7), i[r + 3 + o * (t + 3)] = 1, n = 0; n < 6; n++) i[r + n + o * t] = 1, i[r + o * (t + n + 1)] = 1, i[r + 6 + o * (t + n)] = 1, i[r + n + 1 + o * (t + 6)] = 1;
							for (n = 1; n < 5; n++) this._setMask(r + n, t + 1), this._setMask(r + 1, t + n + 1), this._setMask(r + 5, t + n), this._setMask(r + n + 1, t + 5);
							for (n = 2; n < 4; n++) i[r + n + o * (t + 2)] = 1, i[r + 2 + o * (t + n + 1)] = 1, i[r + 4 + o * (t + n)] = 1, i[r + n + 1 + o * (t + 4)] = 1
						}
					},
					_insertTimingGap: function() {
						var e, t, n = this.width;
						for (t = 0; t < 7; t++) this._setMask(7, t), this._setMask(n - 8, t), this._setMask(7, t + n - 7);
						for (e = 0; e < 8; e++) this._setMask(e, 7), this._setMask(e + n - 8, 7), this._setMask(e, n - 8)
					},
					_insertTimingRowAndColumn: function() {
						var e, t = this.buffer,
							n = this.width;
						for (e = 0; e < n - 14; e++) 1 & e ? (this._setMask(8 + e, 6), this._setMask(6, 8 + e)) : (t[8 + e + 6 * n] = 1, t[6 + n * (8 + e)] = 1)
					},
					_insertVersion: function() {
						var e, t, n, r, i = this.buffer,
							o = this._version,
							s = this.width;
						if (o > 6) for (e = d.BLOCK[o - 7], t = 17, n = 0; n < 6; n++) for (r = 0; r < 3; r++, t--) 1 & (t > 11 ? o >> t - 12 : e >> t) ? (i[5 - n + s * (2 - r + s - 11)] = 1, i[2 - r + s - 11 + s * (5 - n)] = 1) : (this._setMask(5 - n, 2 - r + s - 11), this._setMask(2 - r + s - 11, 5 - n))
					},
					_isMasked: function(e, t) {
						var n = p._getMaskBit(e, t);
						return 1 === this._mask[n]
					},
					_pack: function() {
						var e, t, n, r = 1,
							i = 1,
							o = this.width,
							s = o - 1,
							a = o - 1,
							u = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
						for (t = 0; t < u; t++) for (e = this._stringBuffer[t], n = 0; n < 8; n++, e <<= 1) {
							128 & e && (this.buffer[s + o * a] = 1);
							do {
								i ? s-- : (s++, r ? 0 !== a ? a-- : (r = !r, 6 === (s -= 2) && (s--, a = 9)) : a !== o - 1 ? a++ : (r = !r, 6 === (s -= 2) && (s--, a -= 8))), i = !i
							} while (this._isMasked(s, a))
						}
					},
					_reverseMask: function() {
						var e, t, n = this.width;
						for (e = 0; e < 9; e++) this._setMask(e, 8);
						for (e = 0; e < 8; e++) this._setMask(e + n - 8, 8), this._setMask(8, e);
						for (t = 0; t < 7; t++) this._setMask(8, t + n - 7)
					},
					_setMask: function(e, t) {
						var n = p._getMaskBit(e, t);
						this._mask[n] = 1
					},
					_syncMask: function() {
						var e, t, n = this.width;
						for (t = 0; t < n; t++) for (e = 0; e <= t; e++) this.buffer[e + n * t] && this._setMask(e, t)
					}
				}, {
					_createArray: function(e) {
						var t, n = [];
						for (t = 0; t < e; t++) n[t] = 0;
						return n
					},
					_getMaskBit: function(e, t) {
						var n;
						return e > t && (n = e, e = t, t = n), n = t, n += t * t, n >>= 1, n += e
					},
					_modN: function(e) {
						for (; e >= 255;) e = ((e -= 255) >> 8) + (255 & e);
						return e
					},
					N1: 3,
					N2: 3,
					N3: 40,
					N4: 10
				}),
				h = p,
				m = a.extend({
					draw: function() {
						this.element.src = this.qrious.toDataURL()
					},
					reset: function() {
						this.element.src = ""
					},
					resize: function() {
						var e = this.element;
						e.width = e.height = this.qrious.size
					}
				}),
				g = s.extend(function(e, t, n, r) {
					this.name = e, this.modifiable = Boolean(t), this.defaultValue = n, this._valueTransformer = r
				}, {
					transform: function(e) {
						var t = this._valueTransformer;
						return "function" == typeof t ? t(e, this) : e
					}
				}),
				v = s.extend(null, {
					abs: function(e) {
						return null != e ? Math.abs(e) : null
					},
					hasOwn: function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					},
					noop: function() {},
					toUpperCase: function(e) {
						return null != e ? e.toUpperCase() : null
					}
				}),
				y = s.extend(function(e) {
					this.options = {}, e.forEach(function(e) {
						this.options[e.name] = e
					}, this)
				}, {
					exists: function(e) {
						return null != this.options[e]
					},
					get: function(e, t) {
						return y._get(this.options[e], t)
					},
					getAll: function(e) {
						var t, n = this.options,
							r = {};
						for (t in n) v.hasOwn(n, t) && (r[t] = y._get(n[t], e));
						return r
					},
					init: function(e, t, n) {
						var r, i;
						for (r in "function" != typeof n && (n = v.noop), this.options) v.hasOwn(this.options, r) && (i = this.options[r], y._set(i, i.defaultValue, t), y._createAccessor(i, t, n));
						this._setAll(e, t, !0)
					},
					set: function(e, t, n) {
						return this._set(e, t, n)
					},
					setAll: function(e, t) {
						return this._setAll(e, t)
					},
					_set: function(e, t, n, r) {
						var i = this.options[e];
						if (!i) throw new Error("Invalid option: " + e);
						if (!i.modifiable && !r) throw new Error("Option cannot be modified: " + e);
						return y._set(i, t, n)
					},
					_setAll: function(e, t, n) {
						if (!e) return !1;
						var r, i = !1;
						for (r in e) v.hasOwn(e, r) && this._set(r, e[r], t, n) && (i = !0);
						return i
					}
				}, {
					_createAccessor: function(e, t, n) {
						var r = {
							get: function() {
								return y._get(e, t)
							}
						};
						e.modifiable && (r.set = function(r) {
							y._set(e, r, t) && n(r, e)
						}), Object.defineProperty(t, e.name, r)
					},
					_get: function(e, t) {
						return t["_" + e.name]
					},
					_set: function(e, t, n) {
						var r = "_" + e.name,
							i = n[r],
							o = e.transform(null != t ? t : e.defaultValue);
						return n[r] = o, o !== i
					}
				}),
				b = y,
				w = s.extend(function() {
					this._services = {}
				}, {
					getService: function(e) {
						var t = this._services[e];
						if (!t) throw new Error("Service is not being managed with name: " + e);
						return t
					},
					setService: function(e, t) {
						if (this._services[e]) throw new Error("Service is already managed with name: " + e);
						t && (this._services[e] = t)
					}
				}),
				x = new b([new g("background", !0, "white"), new g("backgroundAlpha", !0, 1, v.abs), new g("element"), new g("foreground", !0, "black"), new g("foregroundAlpha", !0, 1, v.abs), new g("level", !0, "L", v.toUpperCase), new g("mime", !0, "image/png"), new g("padding", !0, null, v.abs), new g("size", !0, 100, v.abs), new g("value", !0, "")]),
				k = new w,
				T = s.extend(function(e) {
					x.init(e, this, this.update.bind(this));
					var t = x.get("element", this),
						n = k.getService("element"),
						r = t && n.isCanvas(t) ? t : n.createCanvas(),
						i = t && n.isImage(t) ? t : n.createImage();
					this._canvasRenderer = new u(this, r, !0), this._imageRenderer = new m(this, i, i === t), this.update()
				}, {
					get: function() {
						return x.getAll(this)
					},
					set: function(e) {
						x.setAll(e, this) && this.update()
					},
					toDataURL: function(e) {
						return this.canvas.toDataURL(e || this.mime)
					},
					update: function() {
						var e = new h({
							level: this.level,
							value: this.value
						});
						this._canvasRenderer.render(e), this._imageRenderer.render(e)
					}
				}, {
					use: function(e) {
						k.setService(e.getName(), e)
					}
				});
			Object.defineProperties(T.prototype, {
				canvas: {
					get: function() {
						return this._canvasRenderer.getElement()
					}
				},
				image: {
					get: function() {
						return this._imageRenderer.getElement()
					}
				}
			});
			var C = T,
				S = s.extend({
					getName: function() {}
				}).extend({
					createCanvas: function() {},
					createImage: function() {},
					getName: function() {
						return "element"
					},
					isCanvas: function(e) {},
					isImage: function(e) {}
				}).extend({
					createCanvas: function() {
						return document.createElement("canvas")
					},
					createImage: function() {
						return document.createElement("img")
					},
					isCanvas: function(e) {
						return e instanceof HTMLCanvasElement
					},
					isImage: function(e) {
						return e instanceof HTMLImageElement
					}
				});
			return C.use(new S), C
		})
	}, function(e, t, n) {
		var r;
		!
		function(i) {
			"use strict";

			function o(e, t) {
				var n = (65535 & e) + (65535 & t);
				return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
			}
			function s(e, t, n, r, i, s) {
				return o(function(e, t) {
					return e << t | e >>> 32 - t
				}(o(o(t, e), o(r, s)), i), n)
			}
			function a(e, t, n, r, i, o, a) {
				return s(t & n | ~t & r, e, t, i, o, a)
			}
			function u(e, t, n, r, i, o, a) {
				return s(t & r | n & ~r, e, t, i, o, a)
			}
			function c(e, t, n, r, i, o, a) {
				return s(t ^ n ^ r, e, t, i, o, a)
			}
			function l(e, t, n, r, i, o, a) {
				return s(n ^ (t | ~r), e, t, i, o, a)
			}
			function f(e, t) {
				var n, r, i, s, f;
				e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
				var d = 1732584193,
					p = -271733879,
					h = -1732584194,
					m = 271733878;
				for (n = 0; n < e.length; n += 16) r = d, i = p, s = h, f = m, p = l(p = l(p = l(p = l(p = c(p = c(p = c(p = c(p = u(p = u(p = u(p = u(p = a(p = a(p = a(p = a(p, h = a(h, m = a(m, d = a(d, p, h, m, e[n], 7, -680876936), p, h, e[n + 1], 12, -389564586), d, p, e[n + 2], 17, 606105819), m, d, e[n + 3], 22, -1044525330), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 4], 7, -176418897), p, h, e[n + 5], 12, 1200080426), d, p, e[n + 6], 17, -1473231341), m, d, e[n + 7], 22, -45705983), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 8], 7, 1770035416), p, h, e[n + 9], 12, -1958414417), d, p, e[n + 10], 17, -42063), m, d, e[n + 11], 22, -1990404162), h = a(h, m = a(m, d = a(d, p, h, m, e[n + 12], 7, 1804603682), p, h, e[n + 13], 12, -40341101), d, p, e[n + 14], 17, -1502002290), m, d, e[n + 15], 22, 1236535329), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 1], 5, -165796510), p, h, e[n + 6], 9, -1069501632), d, p, e[n + 11], 14, 643717713), m, d, e[n], 20, -373897302), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 5], 5, -701558691), p, h, e[n + 10], 9, 38016083), d, p, e[n + 15], 14, -660478335), m, d, e[n + 4], 20, -405537848), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 9], 5, 568446438), p, h, e[n + 14], 9, -1019803690), d, p, e[n + 3], 14, -187363961), m, d, e[n + 8], 20, 1163531501), h = u(h, m = u(m, d = u(d, p, h, m, e[n + 13], 5, -1444681467), p, h, e[n + 2], 9, -51403784), d, p, e[n + 7], 14, 1735328473), m, d, e[n + 12], 20, -1926607734), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 5], 4, -378558), p, h, e[n + 8], 11, -2022574463), d, p, e[n + 11], 16, 1839030562), m, d, e[n + 14], 23, -35309556), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 1], 4, -1530992060), p, h, e[n + 4], 11, 1272893353), d, p, e[n + 7], 16, -155497632), m, d, e[n + 10], 23, -1094730640), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 13], 4, 681279174), p, h, e[n], 11, -358537222), d, p, e[n + 3], 16, -722521979), m, d, e[n + 6], 23, 76029189), h = c(h, m = c(m, d = c(d, p, h, m, e[n + 9], 4, -640364487), p, h, e[n + 12], 11, -421815835), d, p, e[n + 15], 16, 530742520), m, d, e[n + 2], 23, -995338651), h = l(h, m = l(m, d = l(d, p, h, m, e[n], 6, -198630844), p, h, e[n + 7], 10, 1126891415), d, p, e[n + 14], 15, -1416354905), m, d, e[n + 5], 21, -57434055), h = l(h, m = l(m, d = l(d, p, h, m, e[n + 12], 6, 1700485571), p, h, e[n + 3], 10, -1894986606), d, p, e[n + 10], 15, -1051523), m, d, e[n + 1], 21, -2054922799), h = l(h, m = l(m, d = l(d, p, h, m, e[n + 8], 6, 1873313359), p, h, e[n + 15], 10, -30611744), d, p, e[n + 6], 15, -1560198380), m, d, e[n + 13], 21, 1309151649), h = l(h, m = l(m, d = l(d, p, h, m, e[n + 4], 6, -145523070), p, h, e[n + 11], 10, -1120210379), d, p, e[n + 2], 15, 718787259), m, d, e[n + 9], 21, -343485551), d = o(d, r), p = o(p, i), h = o(h, s), m = o(m, f);
				return [d, p, h, m]
			}
			function d(e) {
				var t, n = "",
					r = 32 * e.length;
				for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
				return n
			}
			function p(e) {
				var t, n = [];
				for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
				var r = 8 * e.length;
				for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
				return n
			}
			function h(e) {
				var t, n, r = "";
				for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
				return r
			}
			function m(e) {
				return unescape(encodeURIComponent(e))
			}
			function g(e) {
				return function(e) {
					return d(f(p(e), 8 * e.length))
				}(m(e))
			}
			function v(e, t) {
				return function(e, t) {
					var n, r, i = p(e),
						o = [],
						s = [];
					for (o[15] = s[15] = void 0, i.length > 16 && (i = f(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], s[n] = 1549556828 ^ i[n];
					return r = f(o.concat(p(t)), 512 + 8 * t.length), d(f(s.concat(r), 640))
				}(m(e), m(t))
			}
			function y(e, t, n) {
				return t ? n ? v(t, e) : function(e, t) {
					return h(v(e, t))
				}(t, e) : n ? g(e) : function(e) {
					return h(g(e))
				}(e)
			}
			void 0 === (r = function() {
				return y
			}.call(t, n, t, e)) || (e.exports = r)
		}()
	}, , , function(e, t, n) {
		var r, i, o;
		i = [], void 0 === (o = "function" == typeof(r = function() {
			if ("WebSocket" in window) return e.prototype.onopen = function(e) {}, e.prototype.onclose = function(e) {}, e.prototype.onconnecting = function(e) {}, e.prototype.onmessage = function(e) {}, e.prototype.onerror = function(e) {}, e.debugAll = !1, e.CONNECTING = WebSocket.CONNECTING, e.OPEN = WebSocket.OPEN, e.CLOSING = WebSocket.CLOSING, e.CLOSED = WebSocket.CLOSED, e;

			function e(t, n, r) {
				var i = {
					debug: !1,
					automaticOpen: !0,
					reconnectInterval: 1e3,
					maxReconnectInterval: 3e4,
					reconnectDecay: 1.5,
					timeoutInterval: 2e3,
					maxReconnectAttempts: null
				};
				for (var o in r || (r = {}), i) void 0 !== r[o] ? this[o] = r[o] : this[o] = i[o];
				this.url = t, this.reconnectAttempts = 0, this.readyState = WebSocket.CONNECTING, this.protocol = null;
				var s, a = this,
					u = !1,
					c = !1,
					l = document.createElement("div");

				function f(e, t) {
					var n = document.createEvent("CustomEvent");
					return n.initCustomEvent(e, !1, !1, t), n
				}
				l.addEventListener("open", function(e) {
					a.onopen(e)
				}), l.addEventListener("close", function(e) {
					a.onclose(e)
				}), l.addEventListener("connecting", function(e) {
					a.onconnecting(e)
				}), l.addEventListener("message", function(e) {
					a.onmessage(e)
				}), l.addEventListener("error", function(e) {
					a.onerror(e)
				}), this.addEventListener = l.addEventListener.bind(l), this.removeEventListener = l.removeEventListener.bind(l), this.dispatchEvent = l.dispatchEvent.bind(l), this.open = function(t) {
					if (s = new WebSocket(a.url, n || []), t) {
						if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) return
					} else l.dispatchEvent(f("connecting")), this.reconnectAttempts = 0;
					(a.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "attempt-connect", a.url);
					var r = s,
						i = setTimeout(function() {
							(a.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "connection-timeout", a.url), c = !0, r.close(), c = !1
						}, a.timeoutInterval);
					s.onopen = function(n) {
						clearTimeout(i), (a.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onopen", a.url), a.protocol = s.protocol, a.readyState = WebSocket.OPEN, a.reconnectAttempts = 0;
						var r = f("open");
						r.isReconnect = t, t = !1, l.dispatchEvent(r)
					}, s.onclose = function(n) {
						if (clearTimeout(i), s = null, u) a.readyState = WebSocket.CLOSED, l.dispatchEvent(f("close"));
						else {
							a.readyState = WebSocket.CONNECTING;
							var r = f("connecting");
							r.code = n.code, r.reason = n.reason, r.wasClean = n.wasClean, l.dispatchEvent(r), t || c || ((a.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onclose", a.url), l.dispatchEvent(f("close")));
							var i = a.reconnectInterval * Math.pow(a.reconnectDecay, a.reconnectAttempts);
							setTimeout(function() {
								a.reconnectAttempts++, a.open(!0)
							}, i > a.maxReconnectInterval ? a.maxReconnectInterval : i)
						}
					}, s.onmessage = function(t) {
						(a.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onmessage", a.url, t.data);
						var n = f("message");
						n.data = t.data, l.dispatchEvent(n)
					}, s.onerror = function(t) {
						(a.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "onerror", a.url, t), l.dispatchEvent(f("error"))
					}
				}, 1 == this.automaticOpen && this.open(!1), this.send = function(t) {
					if (s) return (a.debug || e.debugAll) && console.debug("ReconnectingWebSocket", "send", a.url, t), s.send(t);
					throw "INVALID_STATE_ERR : Pausing to reconnect websocket"
				}, this.close = function(e, t) {
					void 0 === e && (e = 1e3), u = !0, s && s.close(e, t)
				}, this.refresh = function() {
					s && s.close()
				}
			}
		}) ? r.apply(t, i) : r) || (e.exports = o)
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			return Array(t + 1).join(e)
		}
		var i = ["address", "article", "aside", "audio", "blockquote", "body", "canvas", "center", "dd", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "isindex", "li", "main", "menu", "nav", "noframes", "noscript", "ol", "output", "p", "pre", "section", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul"];

		function o(e) {
			return -1 !== i.indexOf(e.nodeName.toLowerCase())
		}
		var s = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];

		function a(e) {
			return -1 !== s.indexOf(e.nodeName.toLowerCase())
		}
		var u = s.join();
		var c = {};

		function l(e) {
			for (var t in this.options = e, this._keep = [], this._remove = [], this.blankRule = {
				replacement: e.blankReplacement
			}, this.keepReplacement = e.keepReplacement, this.defaultRule = {
				replacement: e.defaultReplacement
			}, this.array = [], e.rules) this.array.push(e.rules[t])
		}
		function f(e, t, n) {
			for (var r = 0; r < e.length; r++) {
				var i = e[r];
				if (d(i, t, n)) return i
			}
		}
		function d(e, t, n) {
			var r = e.filter;
			if ("string" == typeof r) {
				if (r === t.nodeName.toLowerCase()) return !0
			} else if (Array.isArray(r)) {
				if (r.indexOf(t.nodeName.toLowerCase()) > -1) return !0
			} else {
				if ("function" != typeof r) throw new TypeError("`filter` needs to be a string, array, or function");
				if (r.call(e, t, n)) return !0
			}
		}
		function p(e) {
			var t = e.nextSibling || e.parentNode;
			return e.parentNode.removeChild(e), t
		}
		function h(e, t, n) {
			return e && e.parentNode === t || n(t) ? t.nextSibling || t.parentNode : t.firstChild || t.nextSibling || t.parentNode
		}
		c.paragraph = {
			filter: "p",
			replacement: function(e) {
				return "\n\n" + e + "\n\n"
			}
		}, c.lineBreak = {
			filter: "br",
			replacement: function(e, t, n) {
				return n.br + "\n"
			}
		}, c.heading = {
			filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
			replacement: function(e, t, n) {
				var i = Number(t.nodeName.charAt(1));
				return "setext" === n.headingStyle && i < 3 ? "\n\n" + e + "\n" + r(1 === i ? "=" : "-", e.length) + "\n\n" : "\n\n" + r("#", i) + " " + e + "\n\n"
			}
		}, c.blockquote = {
			filter: "blockquote",
			replacement: function(e) {
				return "\n\n" + (e = (e = e.replace(/^\n+|\n+$/g, "")).replace(/^/gm, "> ")) + "\n\n"
			}
		}, c.list = {
			filter: ["ul", "ol"],
			replacement: function(e, t) {
				var n = t.parentNode;
				return "LI" === n.nodeName && n.lastElementChild === t ? "\n" + e : "\n\n" + e + "\n\n"
			}
		}, c.listItem = {
			filter: "li",
			replacement: function(e, t, n) {
				e = e.replace(/^\n+/, "").replace(/\n+$/, "\n").replace(/\n/gm, "\n    ");
				var r = n.bulletListMarker + "   ",
					i = t.parentNode;
				if ("OL" === i.nodeName) {
					var o = i.getAttribute("start"),
						s = Array.prototype.indexOf.call(i.children, t);
					r = (o ? Number(o) + s : s + 1) + ".  "
				}
				return r + e + (t.nextSibling && !/\n$/.test(e) ? "\n" : "")
			}
		}, c.indentedCodeBlock = {
			filter: function(e, t) {
				return "indented" === t.codeBlockStyle && "PRE" === e.nodeName && e.firstChild && "CODE" === e.firstChild.nodeName
			},
			replacement: function(e, t, n) {
				return "\n\n    " + t.firstChild.textContent.replace(/\n/g, "\n    ") + "\n\n"
			}
		}, c.fencedCodeBlock = {
			filter: function(e, t) {
				return "fenced" === t.codeBlockStyle && "PRE" === e.nodeName && e.firstChild && "CODE" === e.firstChild.nodeName
			},
			replacement: function(e, t, n) {
				var r = ((t.firstChild.className || "").match(/language-(\S+)/) || [null, ""])[1];
				return "\n\n" + n.fence + r + "\n" + t.firstChild.textContent + "\n" + n.fence + "\n\n"
			}
		}, c.horizontalRule = {
			filter: "hr",
			replacement: function(e, t, n) {
				return "\n\n" + n.hr + "\n\n"
			}
		}, c.inlineLink = {
			filter: function(e, t) {
				return "inlined" === t.linkStyle && "A" === e.nodeName && e.getAttribute("href")
			},
			replacement: function(e, t) {
				return "[" + e + "](" + t.getAttribute("href") + (t.title ? ' "' + t.title + '"' : "") + ")"
			}
		}, c.referenceLink = {
			filter: function(e, t) {
				return "referenced" === t.linkStyle && "A" === e.nodeName && e.getAttribute("href")
			},
			replacement: function(e, t, n) {
				var r, i, o = t.getAttribute("href"),
					s = t.title ? ' "' + t.title + '"' : "";
				switch (n.linkReferenceStyle) {
				case "collapsed":
					r = "[" + e + "][]", i = "[" + e + "]: " + o + s;
					break;
				case "shortcut":
					r = "[" + e + "]", i = "[" + e + "]: " + o + s;
					break;
				default:
					var a = this.references.length + 1;
					r = "[" + e + "][" + a + "]", i = "[" + a + "]: " + o + s
				}
				return this.references.push(i), r
			},
			references: [],
			append: function(e) {
				var t = "";
				return this.references.length && (t = "\n\n" + this.references.join("\n") + "\n\n", this.references = []), t
			}
		}, c.emphasis = {
			filter: ["em", "i"],
			replacement: function(e, t, n) {
				return e.trim() ? n.emDelimiter + e + n.emDelimiter : ""
			}
		}, c.strong = {
			filter: ["strong", "b"],
			replacement: function(e, t, n) {
				return e.trim() ? n.strongDelimiter + e + n.strongDelimiter : ""
			}
		}, c.code = {
			filter: function(e) {
				var t = e.previousSibling || e.nextSibling,
					n = "PRE" === e.parentNode.nodeName && !t;
				return "CODE" === e.nodeName && !n
			},
			replacement: function(e) {
				if (!e.trim()) return "";
				var t = "`",
					n = "",
					r = "",
					i = e.match(/`+/gm);
				if (i) for (/^`/.test(e) && (n = " "), /`$/.test(e) && (r = " "); - 1 !== i.indexOf(t);) t += "`";
				return t + n + e + r + t
			}
		}, c.image = {
			filter: "img",
			replacement: function(e, t) {
				var n = t.alt || "",
					r = t.getAttribute("src") || "",
					i = t.title || "";
				return r ? "![" + n + "](" + r + (i ? ' "' + i + '"' : "") + ")" : ""
			}
		}, l.prototype = {
			add: function(e, t) {
				this.array.unshift(t)
			},
			keep: function(e) {
				this._keep.unshift({
					filter: e,
					replacement: this.keepReplacement
				})
			},
			remove: function(e) {
				this._remove.unshift({
					filter: e,
					replacement: function() {
						return ""
					}
				})
			},
			forNode: function(e) {
				return e.isBlank ? this.blankRule : (t = f(this.array, e, this.options)) ? t : (t = f(this._keep, e, this.options)) ? t : (t = f(this._remove, e, this.options)) ? t : this.defaultRule;
				var t
			},
			forEach: function(e) {
				for (var t = 0; t < this.array.length; t++) e(this.array[t], t)
			}
		};
		var m = "undefined" != typeof window ? window : {};
		var g, v = function() {
				var e = m.DOMParser,
					t = !1;
				try {
					(new e).parseFromString("", "text/html") && (t = !0)
				} catch (e) {}
				return t
			}() ? m.DOMParser : function() {
				var e = function() {},
					t = n(22).JSDOM;
				return e.prototype.parseFromString = function(e) {
					return new t(e).window.document
				}, e
			}();

		function y(e) {
			var t;
			"string" == typeof e ? t = (g = g || new v).parseFromString('<x-turndown id="turndown-root">' + e + "</x-turndown>", "text/html").getElementById("turndown-root") : t = e.cloneNode(!0);
			return function(e) {
				var t = e.element,
					n = e.isBlock,
					r = e.isVoid,
					i = e.isPre ||
				function(e) {
					return "PRE" === e.nodeName
				};
				if (t.firstChild && !i(t)) {
					for (var o = null, s = !1, a = null, u = h(a, t, i); u !== t;) {
						if (3 === u.nodeType || 4 === u.nodeType) {
							var c = u.data.replace(/[ \r\n\t]+/g, " ");
							if (o && !/ $/.test(o.data) || s || " " !== c[0] || (c = c.substr(1)), !c) {
								u = p(u);
								continue
							}
							u.data = c, o = u
						} else {
							if (1 !== u.nodeType) {
								u = p(u);
								continue
							}
							n(u) || "BR" === u.nodeName ? (o && (o.data = o.data.replace(/ $/, "")), o = null, s = !1) : r(u) && (o = null, s = !0)
						}
						var l = h(a, u, i);
						a = u, u = l
					}
					o && (o.data = o.data.replace(/ $/, ""), o.data || p(o))
				}
			}({
				element: t,
				isBlock: o,
				isVoid: a
			}), t
		}
		function b(e) {
			return e.isBlock = o(e), e.isCode = "code" === e.nodeName.toLowerCase() || e.parentNode.isCode, e.isBlank = function(e) {
				return -1 === ["A", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"].indexOf(e.nodeName) && /^\s*$/i.test(e.textContent) && !a(e) && !
				function(e) {
					return e.querySelector && e.querySelector(u)
				}(e)
			}(e), e.flankingWhitespace = function(e) {
				var t = "",
					n = "";
				if (!e.isBlock) {
					var r = /^[ \r\n\t]/.test(e.textContent),
						i = /[ \r\n\t]$/.test(e.textContent);
					r && !w("left", e) && (t = " "), i && !w("right", e) && (n = " ")
				}
				return {
					leading: t,
					trailing: n
				}
			}(e), e
		}
		function w(e, t) {
			var n, r, i;
			return "left" === e ? (n = t.previousSibling, r = / $/) : (n = t.nextSibling, r = /^ /), n && (3 === n.nodeType ? i = r.test(n.nodeValue) : 1 !== n.nodeType || o(n) || (i = r.test(n.textContent))), i
		}
		var x = Array.prototype.reduce,
			k = /^\n*/,
			T = /\n*$/,
			C = [
				[/\\/g, "\\\\"],
				[/\*/g, "\\*"],
				[/^-/g, "\\-"],
				[/^\+ /g, "\\+ "],
				[/^(=+)/g, "\\$1"],
				[/^(#{1,6}) /g, "\\$1 "],
				[/`/g, "\\`"],
				[/^~~~/g, "\\~~~"],
				[/\[/g, "\\["],
				[/\]/g, "\\]"],
				[/^>/g, "\\>"],
				[/_/g, "\\_"],
				[/^(\d+)\. /g, "$1\\. "]
			];

		function S(e) {
			if (!(this instanceof S)) return new S(e);
			var t = {
				rules: c,
				headingStyle: "setext",
				hr: "* * *",
				bulletListMarker: "*",
				codeBlockStyle: "indented",
				fence: "```",
				emDelimiter: "_",
				strongDelimiter: "**",
				linkStyle: "inlined",
				linkReferenceStyle: "full",
				br: "  ",
				blankReplacement: function(e, t) {
					return t.isBlock ? "\n\n" : ""
				},
				keepReplacement: function(e, t) {
					return t.isBlock ? "\n\n" + t.outerHTML + "\n\n" : t.outerHTML
				},
				defaultReplacement: function(e, t) {
					return t.isBlock ? "\n\n" + e + "\n\n" : e
				}
			};
			this.options = function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
				}
				return e
			}({}, t, e), this.rules = new l(this.options)
		}
		function E(e) {
			var t = this;
			return x.call(e.childNodes, function(e, n) {
				var r = "";
				return 3 === (n = new b(n)).nodeType ? r = n.isCode ? n.nodeValue : t.escape(n.nodeValue) : 1 === n.nodeType && (r = function(e) {
					var t = this.rules.forNode(e),
						n = E.call(this, e),
						r = e.flankingWhitespace;
					(r.leading || r.trailing) && (n = n.trim());
					return r.leading + t.replacement(n, e, this.options) + r.trailing
				}.call(t, n)), N(e, r)
			}, "")
		}
		function N(e, t) {
			var n = function(e, t) {
					var n = [e.match(T)[0], t.match(k)[0]].sort(),
						r = n[n.length - 1];
					return r.length < 2 ? r : "\n\n"
				}(e, t);
			return (e = e.replace(T, "")) + n + (t = t.replace(k, ""))
		}
		S.prototype = {
			turndown: function(e) {
				if (!
				function(e) {
					return null != e && ("string" == typeof e || e.nodeType && (1 === e.nodeType || 9 === e.nodeType || 11 === e.nodeType))
				}(e)) throw new TypeError(e + " is not a string, or an element/document/fragment node.");
				if ("" === e) return "";
				var t = E.call(this, new y(e));
				return function(e) {
					var t = this;
					return this.rules.forEach(function(n) {
						"function" == typeof n.append && (e = N(e, n.append(t.options)))
					}), e.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "")
				}.call(this, t)
			},
			use: function(e) {
				if (Array.isArray(e)) for (var t = 0; t < e.length; t++) this.use(e[t]);
				else {
					if ("function" != typeof e) throw new TypeError("plugin must be a Function or an Array of Functions");
					e(this)
				}
				return this
			},
			addRule: function(e, t) {
				return this.rules.add(e, t), this
			},
			keep: function(e) {
				return this.rules.keep(e), this
			},
			remove: function(e) {
				return this.rules.remove(e), this
			},
			escape: function(e) {
				return C.reduce(function(e, t) {
					return e.replace(t[0], t[1])
				}, e)
			}
		}, t.a = S
	}, , , , function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "gfm", function() {
			return p
		}), n.d(t, "highlightedCodeBlock", function() {
			return i
		}), n.d(t, "strikethrough", function() {
			return o
		}), n.d(t, "tables", function() {
			return f
		}), n.d(t, "taskListItems", function() {
			return d
		});
		var r = /highlight-(?:text|source)-([a-z0-9]+)/;

		function i(e) {
			e.addRule("highlightedCodeBlock", {
				filter: function(e) {
					var t = e.firstChild;
					return "DIV" === e.nodeName && r.test(e.className) && t && "PRE" === t.nodeName
				},
				replacement: function(e, t, n) {
					var i = ((t.className || "").match(r) || [null, ""])[1];
					return "\n\n" + n.fence + i + "\n" + t.firstChild.textContent + "\n" + n.fence + "\n\n"
				}
			})
		}
		function o(e) {
			e.addRule("strikethrough", {
				filter: ["del", "s", "strike"],
				replacement: function(e) {
					return "~" + e + "~"
				}
			})
		}
		var s = Array.prototype.indexOf,
			a = Array.prototype.every,
			u = {};

		function c(e) {
			var t = e.parentNode;
			return "THEAD" === t.nodeName || t.firstChild === e && ("TABLE" === t.nodeName ||
			function(e) {
				var t = e.previousSibling;
				return "TBODY" === e.nodeName && (!t || "THEAD" === t.nodeName && /^\s*$/i.test(t.textContent))
			}(t)) && a.call(e.childNodes, function(e) {
				return "TH" === e.nodeName
			})
		}
		function l(e, t) {
			var n = " ";
			return 0 === s.call(t.parentNode.childNodes, t) && (n = "| "), n + e + " |"
		}
		function f(e) {
			for (var t in e.keep(function(e) {
				return "TABLE" === e.nodeName && !c(e.rows[0])
			}), u) e.addRule(t, u[t])
		}
		function d(e) {
			e.addRule("taskListItems", {
				filter: function(e) {
					return "checkbox" === e.type && "LI" === e.parentNode.nodeName
				},
				replacement: function(e, t) {
					return (t.checked ? "[x]" : "[ ]") + " "
				}
			})
		}
		function p(e) {
			e.use([i, o, f, d])
		}
		u.tableCell = {
			filter: ["th", "td"],
			replacement: function(e, t) {
				return l(e, t)
			}
		}, u.tableRow = {
			filter: "tr",
			replacement: function(e, t) {
				var n = "",
					r = {
						left: ":--",
						right: "--:",
						center: ":-:"
					};
				if (c(t)) for (var i = 0; i < t.childNodes.length; i++) {
					var o = "---",
						s = (t.childNodes[i].getAttribute("align") || "").toLowerCase();
					s && (o = r[s] || o), n += l(o, t.childNodes[i])
				}
				return "\n" + e + (n ? "\n" + n : "")
			}
		}, u.table = {
			filter: function(e) {
				return "TABLE" === e.nodeName && c(e.rows[0])
			},
			replacement: function(e) {
				return "\n\n" + (e = e.replace("\n\n", "\n")) + "\n\n"
			}
		}, u.tableSection = {
			filter: ["thead", "tbody", "tfoot"],
			replacement: function(e) {
				return e
			}
		}
	}, , , , , , , function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function() {
					return e.i
				}
			}), e.webpackPolyfill = 1), e
		}
	}, , function(e, t) {
		e.exports = function() {
			throw new Error("define cannot be used indirect")
		}
	}, function(e, t) {
		(function(t) {
			e.exports = t
		}).call(this, {})
	}]
]);