!
function(e) {
	function t(t) {
		for (var a, r, c = t[0], l = t[1], s = t[2], u = 0, h = []; u < c.length; u++) r = c[u], o[r] && h.push(o[r][0]), o[r] = 0;
		for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
		for (d && d(t); h.length;) h.shift()();
		return i.push.apply(i, s || []), n()
	}
	function n() {
		for (var e, t = 0; t < i.length; t++) {
			for (var n = i[t], a = !0, c = 1; c < n.length; c++) {
				var l = n[c];
				0 !== o[l] && (a = !1)
			}
			a && (i.splice(t--, 1), e = r(r.s = n[0]))
		}
		return e
	}
	var a = {},
		o = {
			20: 0,
			15: 0
		},
		i = [];

	function r(t) {
		if (a[t]) return a[t].exports;
		var n = a[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
	}
	r.m = e, r.c = a, r.d = function(e, t, n) {
		r.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, r.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, r.t = function(e, t) {
		if (1 & t && (e = r(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (r.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function(t) {
			return e[t]
		}.bind(null, a));
		return n
	}, r.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e.
		default
		} : function() {
			return e
		};
		return r.d(t, "a", t), t
	}, r.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, r.p = "${staticServePath}/skins/classic";
	var c = window.webpackJsonp = window.webpackJsonp || [],
		l = c.push.bind(c);
	c.push = t, c = c.slice();
	for (var s = 0; s < c.length; s++) t(c[s]);
	var d = l;
	i.push([40, 1, 2, 0, 3]), n()
}([, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return p
	}), n.d(t, "e", function() {
		return f
	}), n.d(t, "f", function() {
		return v
	}), n.d(t, "b", function() {
		return s
	}), n.d(t, "h", function() {
		return d
	}), n.d(t, "d", function() {
		return u
	}), n.d(t, "g", function() {
		return h
	}), n.d(t, "c", function() {
		return g
	}), n.d(t, "j", function() {
		return b
	}), n.d(t, "i", function() {
		return m
	});
	var a = n(0),
		o = n.n(a),
		i = n(6),
		r = n.n(i),
		c = n(5),
		l = n(2),
		s = function(e, t, n) {
			e.click(function() {
				t[0].select();
				try {
					document.execCommand("copy") && n && n()
				} catch (e) {
					console.log("Oops, unable to copy")
				}
				window.getSelection().removeAllRanges()
			})
		},
		d = function(e) {
			if (Label.mouseEffects || e) {
				var t = 0;
				o()("html").click(function(e) {
					var n, a = 18;
					10 == ++t ? n = o()("<b></b>").text("OωO") : 20 === t ? n = o()("<b></b>").text("(๑•́ ∀ •̀๑)") : 30 === t ? n = o()("<b></b>").text("(๑•́ ₃ •̀๑)") : 40 === t ? n = o()("<b></b>").text("(๑•̀_•́๑)") : 50 === t ? n = o()("<b></b>").text("（￣へ￣）") : 60 === t ? n = o()("<b></b>").text("(╯°口°)╯(┴—┴") : 70 === t ? n = o()("<b></b>").text("૮( ᵒ̌皿ᵒ̌ )ა") : 80 === t ? n = o()("<b></b>").text("╮(｡>口<｡)╭") : 90 === t ? n = o()("<b></b>").text("( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃") : t >= 100 && t <= 105 ? n = o()("<b></b>").text("(ꐦ°᷄д°᷅)") : (n = o()('<svg><use xlink:href="#iconHeart"></use></svg>'), a = Math.round(14 * Math.random() + 6));
					var i = e.pageX,
						r = e.pageY;
					n.css({
						"z-index": 9999,
						top: r - 20,
						left: i,
						position: "absolute",
						color: "#E94F06",
						"font-size": a,
						"-moz-user-select": "none",
						"-webkit-user-select": "none",
						"-ms-user-select": "none"
					}), o()("body").append(n), n.animate({
						top: r - 180,
						opacity: 0
					}, 1500, function() {
						n.remove()
					})
				})
			}
		},
		u = function() {
			console.log("%cHacPai%c\n  平等、自由、奔放\n  Feel easy about trust.\n\n  b3log.org & hacpai.com\n  Copyright © 2012-" + Label.year, "font-size:96px;color:#3b3e43", "font-size:12px;color:rgba(0,0,0,0.38);")
		},
		h = function() {
			var e = r()(navigator.userAgent).browser;
			"IE" === e.name && parseInt(e.major) < 11 && Object(c.a)({
				title: Label.killBrowserTitleLabel,
				content: Label.killBrowserLabel,
				height: 345,
				width: 600
			})
		},
		f = function(e) {
			e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
			return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
		},
		p = function(e) {
			Object(c.a)({
				title: Label.tipLabel,
				width: 300,
				content: e
			})
		},
		g = function(e, t, n) {
			Object(c.a)({
				title: Label.tipLabel,
				width: 300,
				content: "<div>\n<div>".concat(e, '</div><br>\n<button id="confirmCancelBtn" class="fn__right btn">').concat(Label.cancelLabel, '</button>\n<span class="fn__right">&nbsp; &nbsp;</span>\n<button id="confirmBtn" class="fn__right btn btn--blue green">').concat(Label.certainLabel, "</button>\n</div>")
			}), t && o()("#confirmBtn").click(function() {
				t(), o()(".dialog").remove()
			}), o()("#confirmCancelBtn").click(function() {
				o()(".dialog").remove(), n && n()
			})
		},
		b = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
				n = arguments.length > 2 ? arguments[2] : void 0,
				a = arguments.length > 3 ? arguments[3] : void 0;
			if (e) if (e.size > t) p("This image is too large (max " + t / 1024 / 1024 + "M)");
			else if (/^image\/\w+$/.test(e.type)) {
				var i = new FormData;
				i.append("file", e), o.a.ajax(Label.servePath + a, {
					method: "POST",
					data: i,
					processData: !1,
					contentType: !1,
					success: function(e) {
						0 === e.code ? n(e.data) : p(e.msg || "Error Code: ".concat(e.code))
					},
					error: function() {
						p("Upload error")
					}
				})
			} else p("Image only~")
		},
		m = function(e, t) {
			var n = "rgba(" + (t.charAt(4) > 1 ? 1 : t.charAt(4)) + t.charAt(5) + t.charAt(6) + ", " + (t.charAt(7) > 1 ? 1 : t.charAt(7)) + t.charAt(8) + t.charAt(9) + ", " + (t.charAt(10) > 1 ? 1 : t.charAt(10)) + t.charAt(11) + t.charAt(12) + ", .36)";
			return e.css("background-image", "linear-gradient(90deg, " + n + ", rgba(255, 255, 255, 0.76), " + n + ")"), n
		},
		v = function(e, t, n, a) {
			var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o()(".listAjax"),
				r = arguments.length > 5 ? arguments[5] : void 0;
			if (o()(window).unbind("scroll"), 0 !== i.length && (location.pathname.indexOf("/recent") > -1 || location.pathname.indexOf("/domain") > -1 || location.pathname.indexOf("/qna") > -1 || location.pathname.indexOf("/tag") > -1 || location.pathname.indexOf("/city") > -1)) {
				var c = e || parseInt(f("p") || 1),
					s = o()(window).height(),
					d = !1;
				o()(window).scroll(function() {
					var e = i.height() + 15 + i[0].offsetTop - o()(this).scrollTop();
					e < 1.5 * s && !d && e > 0 && (0 === i.find("." + a).length ? i.append(t) : i.append(n), d = !0, o.a.ajax({
						url: "".concat(Label.servePath).concat(location.pathname, "?ajax=true&p=").concat(c + 1),
						type: "GET",
						complete: function(e) {
							if (0 === e.responseJSON.sc) {
								if ("" === e.responseJSON.contentHTML) return void o()(".listMask").remove();
								d = !1, c += 1, i.append(e.responseJSON.contentHTML), o()(".listMask").remove(), Object(l.a)(), Object(l.b)(), r && r()
							} else p(e.responseJSON.msg)
						}
					}))
				})
			}
		}
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return i
	}), n.d(t, "a", function() {
		return r
	}), n.d(t, "c", function() {
		return c
	});
	var a = n(0),
		o = n.n(a),
		i = function() {
			var e = function(e) {
					var t = document.createElement("img");
					t.src = e.getAttribute("data-src"), t.addEventListener("load", function() {
						o()(e).attr("style") || o()(e).attr("class") || o()(e).attr("width") || o()(e).attr("height") || 1 !== o()(e).closest(".content-reset").length || t.naturalHeight > t.naturalWidth && t.naturalWidth / t.naturalHeight < o()(e).closest(".content-reset").width() / (o()(window).height() - 40) && t.naturalHeight > o()(window).height() - 40 && (e.style.height = o()(window).height() - 40 + "px"), o()(e).attr("class") || 1 !== o()(e).closest(".content-reset").length ||
						function(e) {
							var t = e[0];
							e.wrap('<span class="content-reset__preview"></span>'), t.width >= 238 && t.height >= 60 && (t.width === t.naturalWidth ? e.after('<div class="fn__flex-inline">\n<svg><use xlink:href="#iconPhotoActual"></use></svg>\n&nbsp;'.concat(t.width, " x ").concat(t.height, "</div>")) : e.after('<div class="fn__flex-inline">\n<svg><use xlink:href="#iconPhoto"></use></svg>\n&nbsp;'.concat(t.width, " x ").concat(t.height, ' &nbsp; &nbsp; \n<svg><use xlink:href="#iconPhotoActual"></use></svg>\n&nbsp;').concat(t.naturalWidth, " x ").concat(t.naturalHeight, "</div>")))
						}(o()(e)), e.src = t.src, e.style.backgroundImage = "none", e.style.backgroundColor = "transparent"
					}), e.removeAttribute("data-src")
				};
			if (!("IntersectionObserver" in window)) return o()("img").each(function() {
				this.getAttribute("data-src") && e(this)
			}), !1;
			window.imageIntersectionObserver ? (window.imageIntersectionObserver.disconnect(), o()("img").each(function() {
				window.imageIntersectionObserver.observe(this)
			})) : (window.imageIntersectionObserver = new IntersectionObserver(function(t) {
				t.forEach(function(t) {
					(void 0 === t.isIntersecting ? 0 !== t.intersectionRatio : t.isIntersecting) && t.target.getAttribute("data-src") && e(t.target)
				})
			}), o()("img").each(function() {
				window.imageIntersectionObserver.observe(this)
			}))
		},
		r = function() {
			var e = function(e) {
					var t = document.createElement("img");
					t.src = e.getAttribute("data-src"), t.addEventListener("load", function() {
						e.style.backgroundImage = "url(" + t.src + ")"
					}), e.removeAttribute("data-src")
				},
				t = o()("*[data-src]");
			"IntersectionObserver" in window ? window.CSSImageIntersectionObserver ? (window.CSSImageIntersectionObserver.disconnect(), t.each(function() {
				"img" !== this.tagName.toLowerCase() && window.CSSImageIntersectionObserver.observe(this)
			})) : (window.CSSImageIntersectionObserver = new IntersectionObserver(function(t) {
				t.forEach(function(t) {
					(void 0 === t.isIntersecting ? 0 !== t.intersectionRatio : t.isIntersecting) && t.target.getAttribute("data-src") && "img" !== t.target.tagName.toLocaleLowerCase() && e(t.target)
				})
			}), t.each(function() {
				"img" !== this.tagName.toLowerCase() && window.CSSImageIntersectionObserver.observe(this)
			})) : t.each(function() {
				"img" !== this.tagName.toLowerCase() && this.getAttribute("data-src") && e(this)
			})
		},
		c = function() {
			o()(window).keyup(function(e) {
				27 === e.keyCode && o()(".img-preview").remove()
			}), o()("body").on("click", ".content-reset .content-reset__preview", function() {
				var e = o()(this).find("img"),
					t = e[0],
					n = this.offsetTop,
					a = this.offsetLeft;
				o()("body").append('<div class="img-preview">\n<div class="img-preview__bar">\n  <span class="fn__flex-inline">\n    <svg><use xlink:href="#iconPhoto"></use></svg>\n    &nbsp;&nbsp;'.concat(t.naturalWidth, " x ").concat(t.naturalHeight, '\n  </span>\n  <a class="fn__pointer fn__flex-inline"\n   href="').concat(e.attr("src").split("?imageView2")[0], '" target="_blank" rel="noopener">\n    <svg><use xlink:href="#iconPhotoActual"></use></svg>\n    &nbsp;&nbsp;').concat(Label.openOrgImgLabel, '\n  </a>\n  <span class="fn__pointer fn__flex-inline imgPreviewRevolveBtn" data-deg="0">\n    <svg><use xlink:href="#iconRevolve"></use></svg>\n    &nbsp;&nbsp;').concat(Label.revolveLabel, '\n  </span>\n  <a class="fn__pointer fn__flex-inline" rel="noopener" target="_blank" href="').concat(e.attr("src").split("?imageView2")[0], '?attname=">\n    <svg><use xlink:href="#iconDownload"></use></svg>\n    &nbsp;&nbsp;').concat(Label.downloadLabel, '\n  </a>\n  <span class="fn__pointer fn__flex-inline"  onclick="this.parentElement.parentElement.outerHTML = \'\'">\n    <svg><use xlink:href="#iconClose"></use></svg>\n    &nbsp;&nbsp;').concat(Label.closeLabel, '\n  </span>\n</div>\n<div class="img-preview__img" onclick="this.parentElement.outerHTML = \'\'">\n  <img style="transform: translate3d(').concat(Math.max(0, a), "px, ").concat(Math.max(0, n - o()(window).scrollTop()), 'px, 0)"\n   src="').concat(e.attr("src"), '">\n</div></div>'));
				var i = o()(".img-preview__bar").height();
				o()(".img-preview__img").css("padding-top", i + "px"), o()(".img-preview__img img").css("transform", "translate3d(" + Math.max(0, o()(window).width() - t.naturalWidth) / 2 + "px, " + Math.max(0, o()(window).height() - i - t.naturalHeight) / 2 + "px, 0)");
				var r = document.createElement("img");
				r.src = e.attr("src").split("?imageView2")[0], r.addEventListener("load", function() {
					r.naturalWidth === t.naturalWidth && r.naturalHeight === t.naturalHeight || o()(".img-preview .img-preview__bar .fn__flex-inline:eq(0)").html('\n<svg><use xlink:href="#iconPhoto"></use></svg>\n  &nbsp;&nbsp;'.concat(t.naturalWidth, " x ").concat(t.naturalHeight)).next().html('\n<svg><use xlink:href="#iconPhotoActual"></use></svg>\n&nbsp;&nbsp;'.concat(Label.openOrgImgLabel, " [").concat(r.naturalWidth, " x ").concat(r.naturalHeight, "]\n"))
				});
				var c = o()(".imgPreviewRevolveBtn");
				c.click(function() {
					var e = o()(".img-preview__img"),
						t = e.find("img");
					switch (parseInt(c.data("deg"))) {
					case 0:
						t.css("transform", "translate3d(" + Math.max(0, o()(window).width() - t.width()) / 2 + "px, " + ((t.width() - e.height()) / 2 + Math.max(0, o()(window).height() - i - t.height()) / 2) + "px, 0) rotateZ(90deg)"), e.height(t.width()), c.data("deg", 90);
						break;
					case 90:
						t.css("transform", "translate3d(" + Math.max(0, o()(window).width() - t.width()) / 2 + "px, " + Math.max(0, o()(window).height() - i - t.height()) / 2 + "px, 0) rotateZ(180deg)"), e.css("height", "auto"), c.data("deg", 180);
						break;
					case 180:
						t.css("transform", "translate3d(" + Math.max(0, o()(window).width() - t.width()) / 2 + "px, " + ((t.width() - e.height()) / 2 + Math.max(0, o()(window).height() - i - t.height()) / 2) + "px, 0) rotateZ(270deg)"), e.height(t.width()), c.data("deg", 270);
						break;
					case 270:
						t.css("transform", "translate3d(" + Math.max(0, o()(window).width() - t.width()) / 2 + "px, " + Math.max(0, o()(window).height() - i - t.height()) / 2 + "px, 0) rotateZ(0deg)"), e.css("height", "auto"), c.data("deg", 0)
					}
				}), setTimeout(function() {
					o()(".img-preview").width(o()(window).width()), o()(".img-preview__img img").css("transition", "inherit")
				}, 301)
			})
		}
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return i
	}), n.d(t, "c", function() {
		return r
	}), n.d(t, "a", function() {
		return c
	});
	var a = n(0),
		o = n.n(a),
		i = function() {
			var e = o()(".content-reset pre code");
			if (0 === e.length) return !1;
			var t = function() {
					e.each(function(e, t) {
						var n = o()(this);
						n.hasClass("lang-flow") || n.hasClass("language-flow") || n.hasClass("language-sequence") || n.hasClass("lang-sequence") || n.find(".sym-code__copy").length > 0 || (n.css({
							"max-height": o()(window).height() - 40
						}).parent().prepend("<textarea>".concat(n.text(), '</textarea><div aria-label="').concat(Label.copyLabel, "\" \n    onmouseover=\"this.setAttribute('aria-label', '").concat(Label.copyLabel, "')\"\n    class=\"sym-code__copy tooltipped tooltipped__w\" \n    onclick=\"this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '").concat(Label.copiedLabel, '\')"><svg><use xlink:href="#iconArticles"></use></svg></div>')), Label.markedAvailable || hljs.highlightBlock(t))
					})
				};
			"undefined" != typeof hljs || Label.markedAvailable ? t() : o.a.ajax({
				method: "GET",
				url: Label.staticServePath + "/js/lib/highlight/highlight.pack.js",
				dataType: "script",
				cache: !0
			}).done(function() {
				t()
			})
		},
		r = function() {
			var e = !1,
				t = !1,
				n = !1;
			if (o()(".content-reset").each(function() {
				o()(this).find("p").each(function() {
					(o()(this).text().split("$").length > 2 || o()(this).text().split("\\(").length > 1 && o()(this).text().split("\\)").length > 1) && (e = !0)
				}), o()(this).find("code.lang-flow, code.language-flow").length > 0 && (t = !0), o()(this).find("code.language-sequence, code.lang-sequence").length > 0 && (n = !0)
			}), e) {
				var a = function() {
						MathJax.Hub.Config({
							tex2jax: {
								inlineMath: [
									["$", "$"],
									["\\(", "\\)"]
								],
								displayMath: [
									["$$", "$$"]
								],
								processEscapes: !0,
								processEnvironments: !0,
								skipTags: ["pre", "code", "script"]
							},
							asciimath2jax: {
								delimiters: [
									["$", "$"]
								]
							}
						}), MathJax.Hub.Typeset()
					};
				"undefined" != typeof MathJax ? a() : o.a.ajax({
					method: "GET",
					url: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML",
					dataType: "script",
					cache: !0
				}).done(function() {
					a()
				})
			}
			if (t) {
				var i = function() {
						o()(".content-reset code.lang-flow, .content-reset code.language-flow").each(function(e) {
							var t = o()(this),
								n = "symFlow" + (new Date).getTime() + e;
							t.hide();
							var a = flowchart.parse(o.a.trim(t.text()));
							t.parent().after('<div class="ft-center" id="' + n + '"></div>'), a.drawSVG(n), t.parent().remove(), o()("#" + n).find("svg").height("auto").width("auto")
						})
					};
				"undefined" != typeof flowchart ? i() : o.a.ajax({
					method: "GET",
					url: Label.staticServePath + "/js/lib/flowchart/flowchart.min.js",
					dataType: "script",
					cache: !0
				}).done(function() {
					i()
				})
			}
			if (n) {
				var r = function() {
						o()(".content-reset code.language-sequence, .content-reset code.lang-sequence").each(function(e) {
							var t = o()(this),
								n = "symSequence" + (new Date).getTime() + e;
							t.hide();
							var a = Diagram.parse(o.a.trim(t.text()));
							t.parent().after('<div class="ft-center" id="' + n + '"></div>'), a.drawSVG(n, {
								theme: "simple"
							}), t.parent().remove(), setTimeout(function() {
								o()("#" + n).find("svg").height("auto").width("auto")
							}, 1e3)
						})
					};
				"undefined" != typeof Diagram ? r() : o.a.ajax({
					method: "GET",
					url: Label.staticServePath + "/js/lib/sequence-diagram-raphael-min.js",
					dataType: "script",
					cache: !0
				}).done(function() {
					r()
				})
			}
		},
		c = function() {
			if (0 !== o()(".content-audio").length) {
				var e = function() {
						o()(".content-audio").each(function() {
							var e = o()(this);
							new APlayer({
								element: this,
								narrow: !1,
								autoplay: !1,
								mutex: !0,
								theme: "#4285f4",
								preload: "none",
								mode: "order",
								music: {
									title: e.data("title"),
									author: '<a href="http://127.0.0.1:8080/article/1464416402922" target="_blank">音频分享</a>',
									url: e.data("url"),
									pic: Label.staticServePath + "/images/music.png"
								}
							})
						})
					};
				"undefined" != typeof APlayer ? e() : o.a.ajax({
					method: "GET",
					url: Label.staticServePath + "/js/lib/aplayer/APlayer.min.js",
					dataType: "script",
					cache: !0
				}).done(function() {
					e()
				})
			}
		}
}, function(e, t, n) {
	"use strict";
	n.d(t, "c", function() {
		return l
	}), n.d(t, "d", function() {
		return s
	}), n.d(t, "f", function() {
		return d
	}), n.d(t, "a", function() {
		return u
	}), n.d(t, "b", function() {
		return h
	}), n.d(t, "e", function() {
		return f
	});
	var a = n(0),
		o = n.n(a),
		i = (n(15), n(1)),
		r = n(14),
		c = n.n(r),
		l = function() {
			var e = o()("#verify2faBtn");
			if (0 !== e.length) {
				var t = o()("#verify2faInput");
				e.click(function() {
					"disabled" !== e.attr("disabled") && (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
						url: Label.servePath + "/api/v2/login/2fa",
						type: "POST",
						cache: !1,
						data: JSON.stringify({
							twofactorAuthCode: t.val()
						}),
						success: function(t) {
							0 === t.sc ? window.location.href = e.data("goto") : Object(i.a)(t.msg), e.removeAttr("disabled").css("opacity", "1")
						}
					}))
				}), t.keyup(function(t) {
					13 === t.keyCode && e.click()
				})
			}
		},
		s = function(e, t, n, a) {
			if (0 !== t.length && (t.click(function() {
				"disabled" !== t.attr("disabled") && (t.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
					url: "".concat(Label.servePath, "/settings/2fa"),
					type: "POST",
					cache: !1,
					data: JSON.stringify({
						twofactorAuthCode: n.val()
					}),
					success: function(e) {
						e.sc ? location.reload() : a ? a(e.msg) : Object(i.a)(e.msg)
					},
					complete: function() {
						t.removeAttr("disabled").css("opacity", "1")
					}
				}))
			}), n.keyup(function(e) {
				13 === e.keyCode && t.click()
			}), 0 !== e.length)) {
				var r = new c.a({
					element: e[0],
					value: encodeURI(e.data("value")),
					size: e.data("size")
				});
				e.attr("src", r.toDataURL("image/jpeg"))
			}
		},
		d = function() {
			Object(i.c)(Label.confirmLogoutLabel, function() {
				localStorage && (localStorage.clear(), localStorage.setItem("hadNotificate", !1)), location.href = Label.servePath + "/logout?goto=" + Label.servePath
			})
		},
		u = function() {
			if (-1 === location.href.indexOf("/login")) {
				var e = location.href;
				0 === location.search.indexOf("?goto") && (e = location.href.replace(location.search, "")), window.location.href = Label.servePath + "/login?goto=" + encodeURIComponent(e)
			}
		},
		h = function() {
			if (-1 === location.href.indexOf("/register")) {
				var e = location.href;
				0 === location.search.indexOf("?goto") && (e = location.href.replace(location.search, "")), window.location.href = Label.servePath + "/register?goto=" + encodeURIComponent(e)
			}
		},
		f = function(e, t) {
			o.a.ajax({
				url: Label.servePath + "/guide/next",
				type: "POST",
				cache: !1,
				data: JSON.stringify(e),
				success: function(e) {
					e.sc || (t ? t(e.msg) : Object(i.a)(e.msg))
				}
			})
		}
}, function(e, t, n) {
	"use strict";
	n.d(t, "a", function() {
		return r
	});
	var a = n(0),
		o = n.n(a),
		i = function() {
			var e = o()(".dialog");
			e.hide(), e.find(".dialog__content").html("")
		},
		r = function(e) {
			0 === o()(".dialog").length && (o()("body").append('\n<div class="dialog '.concat(e.className, '">\n    <div class="dialog__bg"></div>\n    <div class="dialog__main">\n      <div class="dialog__header fn__clear" onselectstart="return false;">\n          <h2></h2>\n          <svg><use xlink:href="#iconClose"></use></svg>\n      </div>\n      <div class="dialog__content"></div>\n    </div>\n</div>')).find(".dialog__header svg").click(function() {
				i()
			}), o()(window).keyup(function(e) {
				27 === e.keyCode && i()
			}), o()(".dialog__header").mousedown(function(e) {
				var t = document;
				e || (e = window.event);
				var n = o()(".dialog__main")[0],
					a = e.clientX - parseInt(n.style.left),
					i = e.clientY - parseInt(n.style.top);
				t.ondragstart = "return false;", t.onselectstart = "return false;", t.onselect = "document.selection.empty();", this.setCapture ? this.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), t.onmousemove = function(e) {
					e || (e = window.event);
					var t = e.clientX - a,
						r = e.clientY - i;
					t > o()(window).width() - o()(n).width() && (t = o()(window).width() - o()(n).width()), r > o()(window).height() - o()(n).height() && (r = o()(window).height() - o()(n).height()), n.style.left = Math.max(t, 0) + "px", n.style.top = Math.max(r, 0) + "px"
				}, t.onmouseup = function() {
					this.releaseCapture ? this.releaseCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), t.onmousemove = null, t.onmouseup = null, t.ondragstart = null, t.onselectstart = null, t.onselect = null
				}
			}));
			var t = o()(".dialog");
			t.attr("class", "dialog").addClass(e.className), t.find(".dialog__header h2").html(e.title), t.find(".dialog__content").html(e.content), e.height ? (t.find(".dialog__main").height(e.height), t.find(".dialog__content").height(e.height - 80)) : (t.find(".dialog__main").height("auto"), t.find(".dialog__content").height("auto"));
			var n = parseInt((o()(window).height() - t.find(".dialog__main").height()) / 2),
				a = parseInt((o()(window).width() - e.width) / 2);
			t.find(".dialog__main").css({
				top: "".concat(Math.max(0, n), "px"),
				left: "".concat(a, "px"),
				width: "".concat(e.width, "px")
			}), t.show()
		}
}, , function(e, t, n) {
	"use strict";
	var a = n(0),
		o = n.n(a),
		i = (n(1), function(e) {
			o()("#" + e).click(function() {
				var e = {
					title: "",
					content: "",
					tags: "",
					thoughtContent: "",
					rewardContent: "",
					rewardPoint: "",
					thoughtTime: (new Date).getTime(),
					QnAOfferPoint: ""
				};
				localStorage.postData && (e = JSON.parse(localStorage.postData)), e.title = o()(this).data("title"), e.tags = "TGIF", localStorage.postData = JSON.stringify(e), window.location.href = "".concat(Label.servePath, "/post?type=0")
			})
		});
	n.d(t, "f", function() {
		return r
	}), n.d(t, "e", function() {
		return c
	}), n.d(t, "d", function() {
		return l
	}), n.d(t, "b", function() {
		return d
	}), n.d(t, "c", function() {
		return u
	}), n.d(t, "a", function() {
		return h
	});
	var r = function(e, t) {
			o()(".tip__top").remove(), o()(".nav").after('<div class="tip__top tip__top--'.concat(e, ' fn__flex"><div class="wrapper">\n<div class="fn__flex-1">').concat(t, '</div> <svg class="tip__svg"><use xlink:href="#iconClose"></use></svg>\n</div></div>')), o()(".tip__svg").click(function() {
				o()(".tip__top").remove()
			}), o()("html, body").animate({
				scrollTop: 0
			}, 500)
		},
		c = function() {
			var e, t, n, a = o()('<div style="position: absolute;z-index: 130"></div>');
			a.hover(function() {
				o()(this).show(), clearTimeout(t)
			}, function() {
				t = setTimeout(function() {
					a.hide()
				}, 200)
			}), o()("body").append(a).on("mouseover", ".tooltipped__user", function(i) {
				clearTimeout(t), n = i.target.getAttribute("aria-name"), e = setTimeout(function() {
					o.a.ajax({
						method: "GET",
						url: Label.servePath + "/users/" + n + "/card"
					}).done(function(e) {
						a.html(e), n === a.find(".ft-smaller").text() && setTimeout(function() {
							var e = 0,
								t = 0,
								n = o()(i.target).closest(".b3log-editor"),
								r = o()(i.target).closest("td");
							1 === n.length && (e = n.offset().top, t = n.offset().left), 1 === r.length && (e = r.offset().top, t = r.offset().left);
							var c = i.target.offsetTop + e - a.outerHeight() - 8;
							a.find(".user-card").hasClass("user-card--bg") ? o()(window).scrollTop() > c && (c = i.target.offsetTop + e + i.target.offsetHeight + 8) : o()(window).scrollTop() > c - 39 && (c = i.target.offsetTop + e + i.target.offsetHeight + 47);
							var l = i.target.offsetLeft + t;
							l + a.width() > o()(window).width() ? a.css({
								left: "auto",
								right: "15px",
								top: c
							}).show() : a.css({
								left: l,
								right: "auto",
								top: c
							}).show()
						}, 0)
					})
				}, 100)
			}).on("mouseout", ".tooltipped__user", function() {
				clearTimeout(e), t = setTimeout(function() {
					a.hide()
				}, 200)
			})
		},
		l = function() {
			var e = location.href;
			o()(".user-nav > a").each(function() {
				0 === e.indexOf(o()(this).attr("href")) ? o()(this).addClass("current") : "/register" === location.pathname ? o()("#navRegister").addClass("current") : "/login" === location.pathname ? o()("#navLogin").addClass("current") : 0 !== e.indexOf(Label.servePath + "/settings") && 0 !== e.indexOf(o()("#aPersonListPanel").data("url")) || o()("#aPersonListPanel").addClass("current")
			}), o()(".nav .avatar-small").parent().click(function() {
				o()("#personListPanel").show(), o()(this).blur()
			}), o()("body").click(function(e) {
				"aPersonListPanel" !== o()(e.target).closest("a").attr("id") && o()("#personListPanel").hide()
			})
		},
		s = function(e) {
			o.a.ajax({
				url: Label.servePath + "/notifications/make-read/" + e,
				type: "GET",
				cache: !1
			})
		},
		d = function(e) {
			var t = "",
				n = '<span data-type="${markReadType}" aria-label="' + Label.makeAsReadLabel + '" class="fn-right tooltipped tooltipped__nw"><svg><use xlink:href="#iconCheck"></use></svg></span>';
			if (e.unreadChatNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/chats">' + Label.chatLabel + ' <span class="count">' + e.unreadChatNotificationCnt + "</span>" + n.replace("${markReadType}", "chats") + "</a></li>", o()(".readNotification").length > 0 && (o()(".home-menu a:eq(0) .readNotification").css("display", "inline-block"), o()(".home-menu a:eq(0) .count").text(e.unreadChatNotificationCnt).css("display", "inline-block"))) : 0 === e.unreadChatNotificationCnt && o()(".readNotification").length > 0 && (o()(".home-menu a:eq(0) .readNotification").hide(), o()(".home-menu a:eq(0) .count").hide()), e.unreadCommentedNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/commented">' + Label.notificationCommentedLabel + ' <span class="count">' + e.unreadCommentedNotificationCnt + "</span>" + n.replace("${markReadType}", "commented") + "</a></li>", o()(".readNotification").length > 0 && (o()(".home-menu a:eq(1) .readNotification").css("display", "inline-block"), o()(".home-menu a:eq(1) .count").text(e.unreadCommentedNotificationCnt).css("display", "inline-block"))) : 0 === e.unreadCommentedNotificationCnt && o()(".readNotification").length > 0 && (o()(".home-menu a:eq(1) .readNotification").hide(), o()(".home-menu a:eq(1) .count").hide()), e.unreadReplyNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/reply">' + Label.notificationReplyLabel + ' <span class="count">' + e.unreadReplyNotificationCnt + "</span>" + n.replace("${markReadType}", "reply") + "</a></li>", o()(".readNotification").length > 0 && (o()(".home-menu a:eq(2) .readNotification").css("display", "inline-block"), o()(".home-menu a:eq(2) .count").text(e.unreadReplyNotificationCnt).css("display", "inline-block"))) : 0 === e.unreadReplyNotificationCnt && o()(".readNotification").length > 0 && (o()(".home-menu a:eq(2) .readNotification").hide(), o()(".home-menu a:eq(2) .count").hide()), e.unreadAtNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/at">' + Label.notificationAtLabel + ' <span class="count">' + e.unreadAtNotificationCnt + "</span>" + n.replace("${markReadType}", "at") + "</a></li>", o()(".readNotification").length > 0 && (o()(".home-menu a:eq(3) .readNotification").css("display", "inline-block"), o()(".home-menu a:eq(3) .count").text(e.unreadAtNotificationCnt).css("display", "inline-block"))) : 0 === e.unreadAtNotificationCnt && o()(".readNotification").length > 0 && (o()(".home-menu a:eq(3) .readNotification").hide(), o()(".home-menu a:eq(3) .count").hide()), e.unreadFollowingNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/following">' + Label.notificationFollowingLabel + ' <span class="count">' + e.unreadFollowingNotificationCnt + "</span>" + n.replace("${markReadType}", "following") + "</a></li>", o()(".readNotification").length > 0 && (o()(".home-menu a:eq(4) .readNotification").css("display", "inline-block"), o()(".home-menu a:eq(4) .count").text(e.unreadFollowingNotificationCnt).css("display", "inline-block"))) : 0 === e.unreadFollowingNotificationCnt && o()(".readNotification").length > 0 && (o()(".home-menu a:eq(4) .readNotification").hide(), o()(".home-menu a:eq(4) .count").hide()), e.unreadPointNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/point">' + Label.pointLabel + ' <span class="count">' + e.unreadPointNotificationCnt + "</span></a></li>", o()(".readNotification").length > 0 && o()(".home-menu a:eq(5) .count").text(e.unreadPointNotificationCnt).css("display", "inline-block")) : 0 === e.unreadPointNotificationCnt && o()(".readNotification").length > 0 && o()(".home-menu a:eq(5) .count").hide(), e.unreadBroadcastNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/broadcast">' + Label.sameCityLabel + ' <span class="count">' + e.unreadBroadcastNotificationCnt + "</span></a></li>", o()(".readNotification").length > 0 && o()(".home-menu a:eq(6) .count").text(e.unreadBroadcastNotificationCnt).css("display", "inline-block")) : 0 === e.unreadBroadcastNotificationCnt && o()(".readNotification").length > 0 && o()(".home-menu a:eq(6) .count").hide(), e.unreadSysAnnounceNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/sys-announce">' + Label.systemLabel + ' <span class="count">' + e.unreadSysAnnounceNotificationCnt + "</span></a></li>", o()(".readNotification").length > 0 && o()(".home-menu a:eq(8) .count").text(e.unreadSysAnnounceNotificationCnt).css("display", "inline-block")) : 0 === e.unreadSysAnnounceNotificationCnt && o()(".readNotification").length > 0 && o()(".home-menu a:eq(8) .count").hide(), e.unreadWalletNotificationCnt > 0 ? (t += '<li><a href="' + Label.servePath + '/notifications/wallet">' + Label.walletLabel + ' <span class="count">' + e.unreadWalletNotificationCnt + "</span></a></li>", o()(".readNotification").length > 0 && o()(".home-menu a:eq(7) .count").text(e.unreadSysAnnounceNotificationCnt).css("display", "inline-block")) : 0 === e.unreadWalletNotificationCnt && o()(".readNotification").length > 0 && o()(".home-menu a:eq(7) .count").hide(), e.unreadNewFollowerNotificationCnt > 0 && (t += '<li><a href="' + Label.servePath + "/member/" + Label.currentUserName + '/followers">' + Label.newFollowerLabel + ' <span class="count">' + e.unreadNewFollowerNotificationCnt + "</span></a></li>"), e.unreadNotificationCnt > 0) {
				if (o()("#makeAllNotificationsRead").show(), o()("#aNotifications").addClass("msg").attr("href", "javascript:void(0)").attr("aria-label", Label.desktopNotificationTemplateLabel.replace("${count}", e.unreadNotificationCnt)), 1 === o()("#notificationsPanel").length) return o()("#notificationsPanel ul").html(t), !1;
				o()("#personListPanel").after('<div id="notificationsPanel" class="module person-list dropdown-list"><ul>' + t + "</ul></div>"), o()("#aNotifications").click(function() {
					o()("#notificationsPanel").show(), o()(this).blur()
				}), o()("body").click(function(e) {
					"aNotifications" !== o()(e.target).closest("a").attr("id") && o()("#notificationsPanel").hide()
				}), o()(".home-menu .readNotification").click(function(e) {
					var t = o()(this);
					s(t.data("type")), t.parent().prev().remove(), t.hide(), o()(".notification .unread").removeClass("unread"), o()(".notification .count").remove(), 0 === o()(".home-menu .count").length && o()(".module-header:last > span").remove(), e.preventDefault(), e.stopPropagation()
				}), o()("#notificationsPanel .tooltipped").click(function(e) {
					s(o()(this).data("type")), o()(".notification .unread").removeClass("unread"), o()(".notification .count").remove(), o()("#notificationsPanel").hide(), e.preventDefault(), e.stopPropagation()
				})
			} else o()("#makeAllNotificationsRead").hide(), o()("#notificationsPanel").remove(), o()("#aNotifications").removeClass("msg").attr("href", Label.servePath + "/notifications").attr("aria-label", Label.messageLabel)
		},
		u = function() {
			i("activityTGIF"), i("activityHeaderTGIF")
		},
		h = function(e) {
			0 !== e.length && (e.attr("id") && (location.hash = "#" + e.attr("id")), o()(window).scrollTop(e[0].offsetTop), "comments" !== e.attr("id") && (e.css({
				"background-color": "#9bbee0"
			}), setTimeout(function() {
				e.css({
					"background-color": "#FFF",
					transition: "all 3s cubic-bezier(0.56, -0.36, 0.58, 1)"
				})
			}, 100), setTimeout(function() {
				e.removeAttr("style")
			}, 3100)))
		}
}, , function(e, t, n) {
	"use strict";
	n.d(t, "d", function() {
		return c
	}), n.d(t, "h", function() {
		return l
	}), n.d(t, "c", function() {
		return s
	}), n.d(t, "g", function() {
		return d
	}), n.d(t, "b", function() {
		return u
	}), n.d(t, "f", function() {
		return h
	}), n.d(t, "a", function() {
		return f
	}), n.d(t, "e", function() {
		return p
	});
	var a = n(0),
		o = n.n(a),
		i = n(4),
		r = n(1),
		c = function(e, t) {
			Label.isLoggedIn ? o.a.ajax({
				url: "".concat(Label.servePath, "/follow/user"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: e
				}),
				complete: function(e) {
					t(e.responseJSON)
				}
			}) : Object(i.a)()
		},
		l = function(e, t) {
			Label.isLoggedIn ? o.a.ajax({
				url: "".concat(Label.servePath, "/unfollow/user"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: e
				}),
				complete: function(e) {
					t(e.responseJSON)
				}
			}) : Object(i.a)()
		},
		s = function(e, t) {
			Label.isLoggedIn ? o.a.ajax({
				url: "".concat(Label.servePath, "/follow/tag"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: e
				}),
				complete: function(e) {
					t && t(e.responseJSON)
				}
			}) : Object(i.a)()
		},
		d = function(e, t) {
			Label.isLoggedIn ? o.a.ajax({
				url: "".concat(Label.servePath, "/unfollow/tag"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: e
				}),
				complete: function(e) {
					t(e.responseJSON)
				}
			}) : Object(i.a)()
		},
		u = function(e, t, n, a) {
			Label.isLoggedIn ? t ? (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
				url: "".concat(Label.servePath, "/follow/article-watch"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: n
				}),
				complete: function(t) {
					e.removeAttr("disabled").css("opacity", "1"), t.responseJSON.sc ? a && a(t.responseJSON) : Object(r.a)(t.responseJSON.msg)
				}
			})) : Object(r.a)(Label.invalidAppRoleLabel) : Object(i.a)()
		},
		h = function(e, t, n, a) {
			Label.isLoggedIn ? t ? (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
				url: "".concat(Label.servePath, "/unfollow/article-watch"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: n
				}),
				complete: function(t) {
					e.removeAttr("disabled").css("opacity", "1"), t.responseJSON.sc ? a && a(t.responseJSON) : Object(r.a)(t.responseJSON.msg)
				}
			})) : Object(r.a)(Label.invalidAppRoleLabel) : Object(i.a)()
		},
		f = function(e, t, n, a) {
			Label.isLoggedIn ? t ? (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
				url: "".concat(Label.servePath, "/follow/article"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: n
				}),
				complete: function(t) {
					e.removeAttr("disabled").css("opacity", "1"), t.responseJSON.sc ? a && a(t.responseJSON) : Object(r.a)(t.responseJSON.msg)
				}
			})) : Object(r.a)(Label.invalidAppRoleLabel) : Object(i.a)()
		},
		p = function(e, t, n, a) {
			Label.isLoggedIn ? t ? (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
				url: "".concat(Label.servePath, "/unfollow/article"),
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					followingId: n
				}),
				complete: function(t) {
					e.removeAttr("disabled").css("opacity", "1"), t.responseJSON.sc ? a && a(t.responseJSON) : Object(r.a)(t.responseJSON.msg)
				}
			})) : Object(r.a)(Label.invalidAppRoleLabel) : Object(i.a)()
		}
}, function(e, t, n) {
	"use strict";
	var a = n(0),
		o = n.n(a);
	t.a = function() {
		function e(e) {
			if ("string" == typeof e.data && (e.data = {
				keys: e.data
			}), e.data && e.data.keys && "string" == typeof e.data.keys) {
				var t = e.handler,
					n = e.data.keys.toLowerCase().split(" ");
				e.handler = function(e) {
					if (this === e.target || !(o.a.hotkeys.options.filterInputAcceptingElements && o.a.hotkeys.textInputTypes.test(e.target.nodeName) || o.a.hotkeys.options.filterContentEditable && o()(e.target).attr("contenteditable") || o.a.hotkeys.options.filterTextInputs && o.a.inArray(e.target.type, o.a.hotkeys.textAcceptingInputTypes) > -1)) {
						var a = "keypress" !== e.type && o.a.hotkeys.specialKeys[e.which],
							i = String.fromCharCode(e.which).toLowerCase(),
							r = "",
							c = {};
						e.metaKey && !e.ctrlKey && "meta" !== a && (r += "ctrl+"), o.a.each(["alt", "ctrl", "shift"], function(t, n) {
							e[n + "Key"] && a !== n && (r += n + "+")
						}), e.metaKey && "meta" !== a && r.indexOf("alt+ctrl+shift+") > -1 && (r = r.replace("alt+ctrl+shift+", "hyper+")), a ? c[r + a] = !0 : (c[r + i] = !0, c[r + o.a.hotkeys.shiftNums[i]] = !0, "shift+" === r && (c[o.a.hotkeys.shiftNums[i]] = !0));
						for (var l = 0, s = n.length; l < s; l++) if (c[n[l]]) return t.apply(this, arguments)
					}
				}
			}
		}
		o.a.hotkeys = {
			version: "0.2.0",
			specialKeys: {
				8: "backspace",
				9: "tab",
				10: "return",
				13: "return",
				16: "shift",
				17: "ctrl",
				18: "alt",
				19: "pause",
				20: "capslock",
				27: "esc",
				32: "space",
				33: "pageup",
				34: "pagedown",
				35: "end",
				36: "home",
				37: "left",
				38: "up",
				39: "right",
				40: "down",
				45: "insert",
				46: "del",
				59: ";",
				61: "=",
				96: "0",
				97: "1",
				98: "2",
				99: "3",
				100: "4",
				101: "5",
				102: "6",
				103: "7",
				104: "8",
				105: "9",
				106: "*",
				107: "+",
				109: "-",
				110: ".",
				111: "/",
				112: "f1",
				113: "f2",
				114: "f3",
				115: "f4",
				116: "f5",
				117: "f6",
				118: "f7",
				119: "f8",
				120: "f9",
				121: "f10",
				122: "f11",
				123: "f12",
				144: "numlock",
				145: "scroll",
				173: "-",
				186: ";",
				187: "=",
				188: ",",
				189: "-",
				190: ".",
				191: "/",
				192: "`",
				219: "[",
				220: "\\",
				221: "]",
				222: "'"
			},
			shiftNums: {
				"`": "~",
				1: "!",
				2: "@",
				3: "#",
				4: "$",
				5: "%",
				6: "^",
				7: "&",
				8: "*",
				9: "(",
				0: ")",
				"-": "_",
				"=": "+",
				";": ": ",
				"'": '"',
				",": "<",
				".": ">",
				"/": "?",
				"\\": "|"
			},
			textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
			textInputTypes: /textarea|input|select/i,
			options: {
				filterInputAcceptingElements: !0,
				filterTextInputs: !0,
				filterContentEditable: !0
			}
		}, o.a.each(["keydown", "keyup", "keypress"], function() {
			o.a.event.special[this] = {
				add: e
			}
		})
	}
}, function(e, t, n) {
	"use strict";
	var a = n(0),
		o = n.n(a),
		i = n(19),
		r = n(6),
		c = n.n(r);

	function l(e, t) {
		var n = e,
			a = t;
		this.getSampleRate = function() {
			return n
		}, this.getChannelCount = function() {
			return a
		}
	}
	var s = 1,
		d = 2,
		u = 48e3,
		h = 44100,
		f = 32e3,
		p = 22050,
		g = 11025,
		b = 8e3,
		m = 5e3,
		v = {
			MONO_48_KHZ: new l(u, s),
			MONO_44_KHZ: new l(h, s),
			MONO_32_KHZ: new l(f, s),
			MONO_22_KHZ: new l(p, s),
			MONO_11_KHZ: new l(g, s),
			MONO_8_KHZ: new l(b, s),
			MONO_5_KHZ: new l(m, s),
			STEREO_48_KHZ: new l(u, d),
			STEREO_44_KHZ: new l(h, d),
			STEREO_32_KHZ: new l(f, d),
			STEREO_22_KHZ: new l(p, d),
			STEREO_11_KHZ: new l(g, d),
			STEREO_8_KHZ: new l(b, d),
			STEREO_5_KHZ: new l(m, d)
		};

	function _(e, t, n, a) {
		var o = t,
			i = n,
			r = null,
			c = a,
			l = !1,
			s = !1,
			d = e,
			u = null,
			h = null,
			f = [],
			p = [],
			g = 0;
		this.recorder = null, this.cloneChannelData = function(e, t) {
			f.push(new Float32Array(e)), p.push(new Float32Array(t)), g += o
		}, this.init = function(e) {
			s = !1, isNaN(i) || isNaN(o) || d && (u = new d, r = u.sampleRate, h = u.createGain(), u.createMediaStreamSource(e).connect(h), this.recorder = u.createScriptProcessor(o, 2, c), this.recorder.onaudioprocess = null, h.connect(this.recorder), this.recorder.connect(u.destination), s = !0)
		}, this.isRecording = function() {
			return !0 === l
		}, this.startRecordingNewWavFile = function() {
			!0 === this.isReady() && (y(), x())
		}, this.isReady = function() {
			var e = !1;
			return e = !! this.recorder.onaudioprocess, s && e
		}, this.stopRecording = function() {
			k()
		}, this.buildWavFileBlob = function() {
			var e = 1 == c ? 1 : 2,
				t = 2 * i * e,
				n = 2 * e,
				a = _(f),
				o = _(p),
				l = 1 == c ? m(a, o) : b(a, o);
			r > i && (l = v(l, i));
			var s = 44 + 2 * l.length,
				d = new ArrayBuffer(s),
				u = new DataView(d);
			w(u, 0, "RIFF"), u.setUint32(4, s, !0), w(u, 8, "WAVE"), w(u, 12, "fmt "), u.setUint32(16, 16, !0), u.setUint16(20, 1, !0), u.setUint16(22, e, !0), u.setUint32(24, i, !0), u.setUint32(28, t, !0), u.setUint16(32, n, !0), u.setUint16(34, 16, !0);
			var h = 2 * l.length;
			w(u, 36, "data"), u.setUint32(40, h, !0);
			for (var g = l.length, y = 44, k = 0; k < g; k++) u.setInt16(y, 32767 * l[k], !0), y += 2;
			return new function(e) {
				this.dataBlob = new Blob([e], {
					type: "audio/wav"
				}), this.NAME_PREFIX = "output", this.EXTENSION = ".wav", this.generateFileName = function() {
					return this.generateFileNameWithoutExtension() + this.EXTENSION
				}, this.generateFileNameWithoutExtension = function() {
					return this.NAME_PREFIX + Date.now()
				}, this.getDataBlob = function() {
					return this.dataBlob
				}, this.downloadLocally = function() {
					var e = (window.URL || window.webkitURL).createObjectURL(this.dataBlob),
						t = this.generateFileName(),
						n = window.document.createElement("a");
					n.href = e, n.download = t, n.target = "_blank";
					var a = document.defaultView,
						o = document.createEvent("MouseEvents");
					o.initMouseEvent("click", !0, !0, a, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(o)
				}, this.sendToURL = function(e, t, n, a) {
					if (e && "string" == typeof e && "" !== e) {
						(window.URL || window.webkitURL).createObjectURL(this.dataBlob);
						var o = new FormData;
						o.append("file", this.dataBlob), o.append("file_name", this.generateFileNameWithoutExtension()), o.append("file_extension", this.EXTENSION), $.ajax({
							url: e,
							type: "POST",
							data: o,
							contentType: !1,
							processData: !1,
							success: function(e) {
								t && t(e)
							},
							error: function(e) {
								n && n(e)
							},
							xhr: function() {
								var e = new window.XMLHttpRequest;
								return e.upload.addEventListener("progress", function(e) {
									if (e.lengthComputable) {
										var t = e.loaded / e.total;
										a && a(t)
									}
								}, !1), e.addEventListener("progress", function(e) {
									if (e.lengthComputable) {
										var t = e.loaded / e.total;
										a && a(t)
									}
								}, !1), e
							}
						})
					}
				}
			}(u)
		}, this.recordingEventHandler = function(e) {
			if (this.isRecording()) {
				var t = e.inputBuffer.getChannelData(0),
					n = e.inputBuffer.getChannelData(1);
				this.cloneChannelData(t, n)
			}
		};
		var b = function(e, t) {
				for (var n = e.length + t.length, a = new Float32Array(n), o = 0, i = 0; i < n;) a[i++] = e[o], a[i++] = t[o], o++;
				return a
			},
			m = function(e, t) {
				for (var n = new Float32Array(e.length), a = 0; a < e.length; ++a) n[a] = .5 * (e[a] + t[a]);
				return n
			},
			v = function(e, t) {
				if (t == r) return e;
				if (t > r) return e;
				for (var n = r / t, a = Math.round(e.length / n), o = new Float32Array(a), i = 0, c = 0; i < o.length;) {
					for (var l = Math.round((i + 1) * n), s = 0, d = 0, u = c; u < l && u < e.length; u++) s += e[u], d++;
					o[i] = s / d, i++, c = l
				}
				return o
			},
			_ = function(e) {
				for (var t = new Float32Array(g), n = 0, a = e.length, o = 0; o < a; ++o) {
					var i = e[o];
					t.set(i, n), n += i.length
				}
				return t
			},
			w = function(e, t, n) {
				for (var a = n.length, o = 0; o < a; o++) e.setUint8(t + o, n.charCodeAt(o))
			},
			y = function() {
				l = !0
			},
			k = function() {
				l = !1
			},
			x = function() {
				f.length = p.length = 0, g = 0
			}
	}
	Date.now || (Date.now = function() {
		return (new Date).getTime()
	});
	var w = {
		availabel: !1,
		wavFileBlob: null,
		recorderObj: null,
		init: function(e) {
			var t = new function() {
					var e = navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
					this.getUserMediaSupported = function() {
						return !!e
					}, this.getUserMediaMethod = function() {
						return e
					}
				};
			t.getUserMediaSupported() ? (navigator.getUserMedia = t.getUserMediaMethod(), navigator.getUserMedia({
				audio: !0
			}, function(t) {
				var n = v.MONO_5_KHZ,
					a = n.getSampleRate(),
					o = n.getChannelCount(),
					i = new function() {
						var e = window.AudioContext || window.webkitAudioContext;
						this.windowAudioContextSupported = function() {
							return !!e
						}, this.getWindowAudioContextMethod = function() {
							return e
						}
					};
				if (!i.windowAudioContextSupported()) {
					return void console.log("getUserMedia->success(): Unable to detect window audio context, cannot continue.")
				}
				var r = i.getWindowAudioContextMethod();
				w.recorderObj = new _(r, 2048, a, o), w.recorderObj.init(t), w.recorderObj.recorder.onaudioprocess = function(e) {
					if (w.recorderObj.isRecording()) {
						var t = e.inputBuffer.getChannelData(0),
							n = e.inputBuffer.getChannelData(1);
						w.recorderObj.cloneChannelData(t, n)
					}
				}, w.availabel = !0, e && e()
			}, function(e) {
				console.log("getUserMedia->failure(): ERROR: Microphone access request failed!");
				switch (e.name) {
				case "PermissionDeniedError":
					Label.recordDeniedLabel;
					break;
				case "DevicesNotFoundError":
					Label.recordDeviceNotFoundLabel;
					break;
				default:
					"ERROR: The following unexpected error occurred while attempting to connect to your microphone: " + e.name
				}
			})) : console.log("ERROR: getUserMedia not supported by browser.")
		},
		handleStartRecording: function() {
			w.recorderObj.startRecordingNewWavFile()
		},
		handleStopRecording: function() {
			w.recorderObj.stopRecording(), w.wavFileBlob = w.recorderObj.buildWavFileBlob()
		}
	},
		y = w,
		k = n(1),
		x = function(e, t, n, a) {
			if ("number" == typeof e.selectionStart && "number" == typeof e.selectionEnd) {
				var o = e.selectionStart,
					i = e.selectionEnd,
					r = e.value;
				if (e.focus(), /firefox/i.test(navigator.userAgent) || "IE" === c()(navigator.userAgent).browser.name) return void(o === i ? (e.value = r.substring(0, o) + t + n + r.substring(i, r.length), e.selectionEnd = e.selectionStart = i + t.length) : a ? (e.value = r.substring(0, o) + t + n + r.substring(i, r.length), e.selectionEnd = o + t.length + n.length) : r.substring(o - t.length, o) === t && r.substring(i, i + n.length) === n ? (e.value = r.substring(0, o - t.length) + r.substring(o, i) + r.substring(i + n.length, r.length), e.selectionStart = o - t.length, e.selectionEnd = i - t.length) : (e.value = r.substring(0, o) + t + r.substring(o, i) + n + r.substring(i, r.length), e.selectionStart = o + t.length, e.selectionEnd = i + t.length));
				if (o === i) document.execCommand("insertText", !1, t + n);
				else if (a) document.execCommand("insertText", !1, t + n);
				else if (r.substring(o - t.length, o) === t && r.substring(i, i + n.length) === n) {
					document.execCommand("delete", !1);
					for (var l = 0, s = t.length; l < s; l++) document.execCommand("delete", !1);
					for (var d = 0, u = n.length; d < u; d++) document.execCommand("forwardDelete", !1);
					document.execCommand("insertText", !1, r.substring(o, i)), e.selectionStart = o - t.length, e.selectionEnd = i - t.length
				} else document.execCommand("insertText", !1, t + r.substring(o, i) + n), e.selectionStart = o + t.length, e.selectionEnd = i + t.length
			}
		},
		L = function(e, t) {
			for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5, a = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0, i = new FormData, r = [], c = t.length, l = 0; l < c; l++) {
				var s = t[l].getAsFile ? t[l].getAsFile() : t[l];
				s.size <= n && (i.append("file[]", s), r.push(s))
			}
			if (0 !== r.length) {
				var d = new XMLHttpRequest;
				d.open("POST", e), window.b3logEditorIsUploading = !0, d.onreadystatechange = function() {
					d.readyState === XMLHttpRequest.DONE && (window.b3logEditorIsUploading = !1, 200 === d.status ? a(JSON.parse(d.responseText)) : o && o(JSON.parse(d.responseText)))
				}, d.send(i)
			} else o && o()
		},
		O = function(e) {
			for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Uploading", a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Over", o = "", i = e.length, r = 0; r < i; r++) {
				var c = e[r].getAsFile ? e[r].getAsFile() : e[r],
					l = -1 === c.type.indexOf("image") ? "" : "!";
				c.size > t ? o += "\n".concat(l, "[").concat(c.name.replace(/\W/g, ""), "](").concat(a, " ").concat(t / 1024 / 1024, "M)\n") : o += "\n".concat(l, "[").concat(c.name.replace(/\W/g, ""), "](").concat(n, ")\n")
			}
			return o
		},
		j = function(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Uploading",
				a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Error";
			t.focus(), 1 === e.code && Object(k.a)(e.msg), e.data.errFiles.forEach(function(e) {
				C(t, "[".concat(e.replace(/\W/g, ""), "](").concat(n, ")\n"), "[".concat(e.replace(/\W/g, ""), "](").concat(a, ")\n"))
			}), Object.keys(e.data.succMap).forEach(function(a) {
				C(t, "[".concat(a.replace(/\W/g, ""), "](").concat(n, ")\n"), "[".concat(a.replace(/\W/g, ""), "](").concat(e.data.succMap[a], ")\n"))
			})
		},
		S = function(e, t, n) {
			return void 0 !== e && clearTimeout(e), setTimeout(function() {
				t && t(n.find("textarea").val(), 0 === n.find(".b3log-editor__icon--current").length ? void 0 : n.find(".b3log-editor__markdown"))
			}, 500)
		},
		C = function(e, t, n) {
			e.selectionStart = e.value.split(t)[0].length, e.selectionEnd = e.selectionStart + t.length, /firefox/i.test(navigator.userAgent) || "IE" === c()(navigator.userAgent).browser.name ? e.value = e.value.replace(t, n) : (document.execCommand("delete", !1), document.execCommand("insertText", !1, n))
		},
		N = {
			"+1": "👍",
			"-1": "👎",
			100: "💯",
			1234: "🔢",
			"8ball": "🎱",
			a: "🅰",
			ab: "🆎",
			abc: "🔤",
			abcd: "🔡",
			accept: "🉑",
			aerial_tramway: "🚡",
			airplane: "✈",
			alarm_clock: "⏰",
			alien: "👽",
			ambulance: "🚑",
			anchor: "⚓",
			angel: "👼",
			anger: "💢",
			angry: "😠",
			anguished: "😧",
			ant: "🐜",
			apple: "🍎",
			aquarius: "♒",
			aries: "♈",
			arrows_clockwise: "🔃",
			arrows_counterclockwise: "🔄",
			arrow_backward: "◀",
			arrow_double_down: "⏬",
			arrow_double_up: "⏫",
			arrow_down: "⬇",
			arrow_down_small: "🔽",
			arrow_forward: "▶",
			arrow_heading_down: "⤵",
			arrow_heading_up: "⤴",
			arrow_left: "⬅",
			arrow_lower_left: "↙",
			arrow_lower_right: "↘",
			arrow_right: "➡",
			arrow_right_hook: "↪",
			arrow_up: "⬆",
			arrow_upper_left: "↖",
			arrow_upper_right: "↗",
			arrow_up_down: "↕",
			arrow_up_small: "🔼",
			art: "🎨",
			articulated_lorry: "🚛",
			astonished: "😲",
			atm: "🏧",
			b: "🅱",
			baby: "👶",
			baby_bottle: "🍼",
			baby_chick: "🐤",
			baby_symbol: "🚼",
			back: "🔙",
			baggage_claim: "🛄",
			balloon: "🎈",
			ballot_box_with_check: "☑",
			bamboo: "🎍",
			banana: "🍌",
			bangbang: "‼",
			bank: "🏦",
			barber: "💈",
			bar_chart: "📊",
			baseball: "⚾",
			basketball: "🏀",
			bath: "🛀",
			bathtub: "🛁",
			battery: "🔋",
			bear: "🐻",
			bee: "🐝",
			beer: "🍺",
			beers: "🍻",
			beetle: "🐞",
			beginner: "🔰",
			bell: "🔔",
			bento: "🍱",
			bicyclist: "🚴",
			bike: "🚲",
			bikini: "👙",
			bird: "🐦",
			birthday: "🎂",
			black_circle: "⚫",
			black_joker: "🃏",
			black_large_square: "⬛",
			black_medium_small_square: "◾",
			black_medium_square: "◼",
			black_nib: "✒",
			black_small_square: "▪",
			black_square_button: "🔲",
			blossom: "🌼",
			blowfish: "🐡",
			blue_book: "📘",
			blue_car: "🚙",
			blue_heart: "💙",
			blush: "😊",
			boar: "🐗",
			boat: "⛵",
			bomb: "💣",
			book: "📖",
			bookmark: "🔖",
			bookmark_tabs: "📑",
			books: "📚",
			boom: "💥",
			boot: "👢",
			bouquet: "💐",
			bow: "🙇",
			bowling: "🎳",
			boy: "👦",
			bread: "🍞",
			bride_with_veil: "👰",
			bridge_at_night: "🌉",
			briefcase: "💼",
			broken_heart: "💔",
			bug: "🐛",
			bulb: "💡",
			bullettrain_front: "🚅",
			bullettrain_side: "🚄",
			bus: "🚌",
			busstop: "🚏",
			busts_in_silhouette: "👥",
			bust_in_silhouette: "👤",
			c: ":c:",
			cactus: "🌵",
			cake: "🍰",
			calendar: "📆",
			calling: "📲",
			camel: "🐫",
			camera: "📷",
			cancer: "🦀",
			candy: "🍬",
			capital_abcd: "🔠",
			capricorn: "♑",
			car: "🚗",
			card_index: "📇",
			carousel_horse: "🎠",
			cat: "🐱",
			cat2: "🐈",
			cd: "🇨🇩",
			chart: "💹",
			chart_with_downwards_trend: "📉",
			chart_with_upwards_trend: "📈",
			checkered_flag: "🏁",
			cherries: "🍒",
			cherry_blossom: "🌸",
			chestnut: "🌰",
			chicken: "🐔",
			children_crossing: "🚸",
			chocolate_bar: "🍫",
			christmas_tree: "🎄",
			church: "⛪",
			cinema: "🎦",
			circus_tent: "🎪",
			city_sunrise: "🌇",
			city_sunset: "🌆",
			cl: "🇨🇱",
			clap: "👏",
			clapper: "🎬",
			clipboard: "📋",
			clock1: "🕐",
			clock10: "🕙",
			clock1030: "🕥",
			clock11: "🕚",
			clock1130: "🕦",
			clock12: "🕛",
			clock1230: "🕧",
			clock130: "🕜",
			clock2: "🕑",
			clock230: "🕝",
			clock3: "🕒",
			clock330: "🕞",
			clock4: "🕓",
			clock430: "🕟",
			clock5: "🕔",
			clock530: "🕠",
			clock6: "🕕",
			clock630: "🕡",
			clock7: "🕖",
			clock730: "🕢",
			clock8: "🕗",
			clock830: "🕣",
			clock9: "🕘",
			clock930: "🕤",
			closed_book: "📕",
			closed_lock_with_key: "🔐",
			closed_umbrella: "🌂",
			cloud: "☁",
			clubs: "♣",
			cn: "🇨🇳",
			cocktail: "🍸",
			coffee: "☕",
			cold_sweat: "😰",
			collision: "💥",
			computer: "💻",
			confetti_ball: "🎊",
			confounded: "😖",
			confused: "😕",
			congratulations: "㊗",
			construction: "🚧",
			construction_worker: "👷",
			convenience_store: "🏪",
			cookie: "🍪",
			cool: "🆒",
			cop: "👮",
			copyright: "©",
			corn: "🌽",
			couple: "👫",
			couplekiss: "💏",
			couple_with_heart: "💑",
			cow: "🐮",
			cow2: "🐄",
			credit_card: "💳",
			crescent_moon: "🌙",
			crocodile: "🐊",
			crossed_flags: "🎌",
			crown: "👑",
			cry: "😢",
			crying_cat_face: "😿",
			crystal_ball: "🔮",
			cupid: "💘",
			curly_loop: "➰",
			currency_exchange: "💱",
			curry: "🍛",
			custard: "🍮",
			customs: "🛃",
			cyclone: "🌀",
			d: ":d:",
			dancer: "💃",
			dancers: "👯",
			dango: "🍡",
			dart: "🎯",
			dash: "💨",
			date: "📅",
			de: "🇩🇪",
			deciduous_tree: "🌳",
			department_store: "🏬",
			diamonds: "♦",
			diamond_shape_with_a_dot_inside: "💠",
			disappointed: "😞",
			disappointed_relieved: "😥",
			dizzy: "💫",
			dizzy_face: "😵",
			dog: "🐶",
			dog2: "🐕",
			dollar: "💵",
			dolls: "🎎",
			dolphin: "🐬",
			door: "🚪",
			doughnut: "🍩",
			do_not_litter: "🚯",
			dragon: "🐉",
			dragon_face: "🐲",
			dress: "👗",
			dromedary_camel: "🐪",
			droplet: "💧",
			dvd: "📀",
			"e-mail": "📧",
			e50a: ":e50a:",
			ear: "👂",
			earth_africa: "🌍",
			earth_americas: "🌎",
			earth_asia: "🌏",
			ear_of_rice: "🌾",
			egg: "🥚",
			eggplant: "🍆",
			eight: "8⃣",
			eight_pointed_black_star: "✴",
			eight_spoked_asterisk: "✳",
			electric_plug: "🔌",
			elephant: "🐘",
			email: "✉",
			end: "🔚",
			envelope: "✉",
			es: "🇪🇸",
			euro: "💶",
			european_castle: "🏰",
			european_post_office: "🏤",
			evergreen_tree: "🌲",
			exclamation: "❗",
			expressionless: "😑",
			eyeglasses: "👓",
			eyes: "👀",
			f: ":f:",
			facepunch: "👊",
			factory: "🏭",
			fallen_leaf: "🍂",
			family: "👪",
			fast_forward: "⏩",
			fax: "📠",
			fearful: "😨",
			feet: "🐾",
			ferris_wheel: "🎡",
			file_folder: "📁",
			fire: "🔥",
			fireworks: "🎆",
			fire_engine: "🚒",
			first_quarter_moon: "🌓",
			first_quarter_moon_with_face: "🌛",
			fish: "🐟",
			fishing_pole_and_fish: "🎣",
			fish_cake: "🍥",
			fist: "✊",
			five: "5⃣",
			flags: "🎏",
			flashlight: "🔦",
			floppy_disk: "💾",
			flower_playing_cards: "🎴",
			flushed: "😳",
			foggy: "🌁",
			football: "🏈",
			fork_and_knife: "🍴",
			fountain: "⛲",
			four: "4⃣",
			four_leaf_clover: "🍀",
			fr: "🇫🇷",
			free: "🆓",
			fried_shrimp: "🍤",
			fries: "🍟",
			frog: "🐸",
			frowning: "😦",
			fuelpump: "⛽",
			full_moon: "🌕",
			full_moon_with_face: "🌝",
			g: ":g:",
			game_die: "🎲",
			gb: "🇬🇧",
			gem: "💎",
			gemini: "♊",
			ghost: "👻",
			gift: "🎁",
			gift_heart: "💝",
			girl: "👧",
			globe_with_meridians: "🌐",
			goat: "🐐",
			golf: "⛳",
			grapes: "🍇",
			green_apple: "🍏",
			green_book: "📗",
			green_heart: "💚",
			grey_exclamation: "❕",
			grey_question: "❔",
			grimacing: "😬",
			grin: "😁",
			grinning: "😀",
			guardsman: "💂",
			guitar: "🎸",
			gun: "🔫",
			haircut: "💇",
			hamburger: "🍔",
			hammer: "🔨",
			hamster: "🐹",
			hand: "✋",
			handbag: "👜",
			hankey: "💩",
			hash: "#⃣",
			hatched_chick: "🐥",
			hatching_chick: "🐣",
			headphones: "🎧",
			heart: "❤️",
			heartbeat: "💓",
			heartpulse: "💗",
			hearts: "♥️",
			heart_decoration: "💟",
			heart_eyes: "😍",
			heart_eyes_cat: "😻",
			hear_no_evil: "🙉",
			heavy_check_mark: "✔",
			heavy_division_sign: "➗",
			heavy_dollar_sign: "💲",
			heavy_exclamation_mark: "❗",
			heavy_minus_sign: "➖",
			heavy_multiplication_x: "✖",
			heavy_plus_sign: "➕",
			helicopter: "🚁",
			herb: "🌿",
			hibiscus: "🌺",
			high_brightness: "🔆",
			high_heel: "👠",
			hocho: "🔪",
			honeybee: "🐝",
			honey_pot: "🍯",
			horse: "🐴",
			horse_racing: "🏇",
			hospital: "🏥",
			hotel: "🏨",
			hotsprings: "♨",
			hourglass: "⌛",
			hourglass_flowing_sand: "⏳",
			house: "🏠",
			house_with_garden: "🏡",
			hushed: "😯",
			i: ":i:",
			icecream: "🍦",
			ice_cream: "🍨",
			id: "🇮🇩",
			ideograph_advantage: "🉐",
			imp: "👿",
			inbox_tray: "📥",
			incoming_envelope: "📨",
			information_desk_person: "💁",
			information_source: "ℹ",
			innocent: "😇",
			interrobang: "⁉",
			iphone: "📱",
			it: "🇮🇹",
			izakaya_lantern: "🏮",
			j: ":j:",
			jack_o_lantern: "🎃",
			japan: "🗾",
			japanese_castle: "🏯",
			japanese_goblin: "👺",
			japanese_ogre: "👹",
			jeans: "👖",
			joy: "😂",
			joy_cat: "😹",
			jp: "🇯🇵",
			k: ":k:",
			key: "🔑",
			keycap_ten: "🔟",
			kimono: "👘",
			kiss: "💋",
			kissing: "😗",
			kissing_cat: "😽",
			kissing_closed_eyes: "😚",
			kissing_heart: "😘",
			kissing_smiling_eyes: "😙",
			koala: "🐨",
			koko: "🈁",
			kr: "🇰🇷",
			large_blue_circle: "🔵",
			large_blue_diamond: "🔷",
			large_orange_diamond: "🔶",
			last_quarter_moon: "🌗",
			last_quarter_moon_with_face: "🌜",
			laughing: "😆",
			leaves: "🍃",
			ledger: "📒",
			leftwards_arrow_with_hook: "↩",
			left_luggage: "🛅",
			left_right_arrow: "↔",
			lemon: "🍋",
			leo: "♌",
			leopard: "🐆",
			libra: "♎",
			light_rail: "🚈",
			link: "🔗",
			lips: "👄",
			lipstick: "💄",
			lock: "🔒",
			lock_with_ink_pen: "🔏",
			lollipop: "🍭",
			loop: "➿",
			loudspeaker: "📢",
			love_hotel: "🏩",
			love_letter: "💌",
			low_brightness: "🔅",
			m: "Ⓜ",
			mag: "🔍",
			mag_right: "🔎",
			mahjong: "🀄",
			mailbox: "📫",
			mailbox_closed: "📪",
			mailbox_with_mail: "📬",
			mailbox_with_no_mail: "📭",
			man: "👨",
			mans_shoe: "👞",
			man_with_gua_pi_mao: "👲",
			man_with_turban: "👳",
			maple_leaf: "🍁",
			mask: "😷",
			massage: "💆",
			meat_on_bone: "🍖",
			mega: "📣",
			melon: "🍈",
			memo: "📝",
			mens: "🚹",
			metro: "🚇",
			microphone: "🎤",
			microscope: "🔬",
			milky_way: "🌌",
			minibus: "🚐",
			minidisc: "💽",
			mobile_phone_off: "📴",
			moneybag: "💰",
			money_with_wings: "💸",
			monkey: "🐒",
			monkey_face: "🐵",
			monorail: "🚝",
			mortar_board: "🎓",
			mountain_bicyclist: "🚵",
			mountain_cableway: "🚠",
			mountain_railway: "🚞",
			mount_fuji: "🗻",
			mouse: "🐭",
			mouse2: "🐁",
			movie_camera: "🎥",
			moyai: "🗿",
			muscle: "💪",
			mushroom: "🍄",
			musical_keyboard: "🎹",
			musical_note: "🎵",
			musical_score: "🎼",
			mute: "🔇",
			nail_care: "💅",
			name_badge: "📛",
			necktie: "👔",
			negative_squared_cross_mark: "❎",
			neutral_face: "😐",
			new: "🆕",
			newspaper: "📰",
			new_moon: "🌑",
			new_moon_with_face: "🌚",
			ng: "🇳🇬",
			nine: "9⃣",
			"non-potable_water": "🚱",
			nose: "👃",
			notebook: "📓",
			notebook_with_decorative_cover: "📔",
			notes: "🎶",
			no_bell: "🔕",
			no_bicycles: "🚳",
			no_entry: "⛔",
			no_entry_sign: "🚫",
			no_good: "🙅",
			no_mobile_phones: "📵",
			no_mouth: "😶",
			no_pedestrians: "🚷",
			no_smoking: "🚭",
			nut_and_bolt: "🔩",
			o: "⭕",
			o2: "🅾",
			ocean: "🌊",
			octocat: ":octocat:",
			octopus: "🐙",
			oden: "🍢",
			office: "🏢",
			ok: "🆗",
			ok_hand: "👌",
			ok_woman: "🙆",
			older_man: "👴",
			older_woman: "👵",
			on: "🔛",
			oncoming_automobile: "🚘",
			oncoming_bus: "🚍",
			oncoming_police_car: "🚔",
			oncoming_taxi: "🚖",
			one: "1⃣",
			open_file_folder: "📂",
			open_hands: "👐",
			open_mouth: "😮",
			ophiuchus: "⛎",
			orange_book: "📙",
			outbox_tray: "📤",
			ox: "🐂",package: "📦",
			pager: "📟",
			page_facing_up: "📄",
			page_with_curl: "📃",
			palm_tree: "🌴",
			panda_face: "🐼",
			paperclip: "📎",
			parking: "🅿",
			partly_sunny: "⛅",
			part_alternation_mark: "〽",
			passport_control: "🛂",
			paw_prints: "🐾",
			peach: "🍑",
			pear: "🍐",
			pencil: "📝",
			pencil2: "✏",
			penguin: "🐧",
			pensive: "😔",
			performing_arts: "🎭",
			persevere: "😣",
			person_frowning: "🙍",
			person_with_blond_hair: "👱",
			person_with_pouting_face: "🙎",
			phone: "☎",
			pig: "🐷",
			pig2: "🐖",
			pig_nose: "🐽",
			pill: "💊",
			pineapple: "🍍",
			pisces: "♓",
			pizza: "🍕",
			point_down: "👇",
			point_left: "👈",
			point_right: "👉",
			point_up: "☝",
			point_up_2: "👆",
			police_car: "🚓",
			poodle: "🐩",
			poop: "💩",
			postal_horn: "📯",
			postbox: "📮",
			potable_water: "🚰",
			pouch: "👝",
			poultry_leg: "🍗",
			pound: "💷",
			pouting_cat: "😾",
			pray: "🙏",
			princess: "👸",
			punch: "👊",
			purple_heart: "💜",
			purse: "👛",
			pushpin: "📌",
			put_litter_in_its_place: "🚮",
			question: "❓",
			r: ":r:",
			rabbit: "🐰",
			rabbit2: "🐇",
			racehorse: "🐎",
			radio: "📻",
			radio_button: "🔘",
			rage: "😡",
			railway_car: "🚃",
			rainbow: "🌈",
			raised_hand: "✋",
			raised_hands: "🙌",
			raising_hand: "🙋",
			ram: "🐏",
			ramen: "🍜",
			rat: "🐀",
			recycle: "♻",
			red_car: "🚗",
			red_circle: "🔴",
			registered: "®",
			relaxed: "☺",
			relieved: "😌",
			repeat: "🔁",
			repeat_one: "🔂",
			restroom: "🚻",
			revolving_hearts: "💞",
			rewind: "⏪",
			ribbon: "🎀",
			rice: "🍚",
			rice_ball: "🍙",
			rice_cracker: "🍘",
			rice_scene: "🎑",
			ring: "💍",
			rocket: "🚀",
			roller_coaster: "🎢",
			rooster: "🐓",
			rose: "🌹",
			rotating_light: "🚨",
			round_pushpin: "📍",
			rowboat: "🚣",
			ru: "🇷🇺",
			rugby_football: "🏉",
			running: "🏃",
			running_shirt_with_sash: "🎽",
			sa: "🇸🇦",
			sagittarius: "♐",
			sailboat: "⛵",
			sake: "🍶",
			sandal: "👡",
			santa: "🎅",
			satellite: "🛰",
			satisfied: "😆",
			saxophone: "🎷",
			school: "🏫",
			school_satchel: "🎒",
			scissors: "✂",
			scorpius: "♏",
			scream: "😱",
			scream_cat: "🙀",
			scroll: "📜",
			seat: "💺",
			secret: "㊙",
			seedling: "🌱",
			see_no_evil: "🙈",
			seven: "7⃣",
			shaved_ice: "🍧",
			sheep: "🐑",
			shell: "🐚",
			ship: "🚢",
			shirt: "👕",
			shoe: "👞",
			shower: "🚿",
			signal_strength: "📶",
			six: "6⃣",
			six_pointed_star: "🔯",
			ski: "🎿",
			skull: "💀",
			sleeping: "😴",
			sleepy: "😪",
			slot_machine: "🎰",
			small_blue_diamond: "🔹",
			small_orange_diamond: "🔸",
			small_red_triangle: "🔺",
			small_red_triangle_down: "🔻",
			smile: "😄",
			smiley: "😃",
			smiley_cat: "😺",
			smile_cat: "😸",
			smiling_imp: "😈",
			smirk: "😏",
			smirk_cat: "😼",
			smoking: "🚬",
			snail: "🐌",
			snake: "🐍",
			snowboarder: "🏂",
			snowflake: "❄",
			snowman: "⛄",
			sob: "😭",
			soccer: "⚽",
			soon: "🔜",
			sos: "🆘",
			sound: "🔉",
			space_invader: "👾",
			spades: "♠",
			spaghetti: "🍝",
			sparkle: "❇",
			sparkler: "🎇",
			sparkles: "✨",
			sparkling_heart: "💖",
			speaker: "🔈",
			speak_no_evil: "🙊",
			speech_balloon: "💬",
			speedboat: "🚤",
			squirrel: "🐿",
			star: "⭐",
			star2: "🌟",
			stars: "🌠",
			station: "🚉",
			statue_of_liberty: "🗽",
			steam_locomotive: "🚂",
			stew: "🍲",
			straight_ruler: "📏",
			strawberry: "🍓",
			stuck_out_tongue: "😛",
			stuck_out_tongue_closed_eyes: "😝",
			stuck_out_tongue_winking_eye: "😜",
			sunflower: "🌻",
			sunglasses: "😎",
			sunny: "☀",
			sunrise: "🌅",
			sunrise_over_mountains: "🌄",
			sun_with_face: "🌞",
			surfer: "🏄",
			sushi: "🍣",
			suspension_railway: "🚟",
			sweat: "😓",
			sweat_drops: "💦",
			sweat_smile: "😅",
			sweet_potato: "🍠",
			swimmer: "🏊",
			symbols: "🔣",
			syringe: "💉",
			tada: "🎉",
			tanabata_tree: "🎋",
			tangerine: "🍊",
			taurus: "♉",
			taxi: "🚕",
			tea: "🍵",
			telephone: "☎",
			telephone_receiver: "📞",
			telescope: "🔭",
			tennis: "🎾",
			tent: "🏕",
			thought_balloon: "💭",
			three: "3⃣",
			thumbsdown: "👎",
			thumbsup: "👍",
			ticket: "🎫",
			tiger: "🐯",
			tiger2: "🐅",
			tired_face: "😫",
			tm: "🇹🇲",
			toilet: "🚽",
			tokyo_tower: "🗼",
			tomato: "🍅",
			tongue: "👅",
			top: "🔝",
			tophat: "🎩",
			tractor: "🚜",
			traffic_light: "🚥",
			train: "🚋",
			train2: "🚆",
			tram: "🚊",
			triangular_flag_on_post: "🚩",
			triangular_ruler: "📐",
			trident: "🔱",
			triumph: "😤",
			trolleybus: "🚎",
			trollface: ":trollface:",
			trophy: "🏆",
			tropical_drink: "🍹",
			tropical_fish: "🐠",
			truck: "🚚",
			trumpet: "🎺",
			tshirt: "👕",
			tulip: "🌷",
			turtle: "🐢",
			tv: "🇹🇻",
			twisted_rightwards_arrows: "🔀",
			two: "2⃣",
			two_hearts: "💕",
			two_men_holding_hands: "👬",
			two_women_holding_hands: "👭",
			u: ":u:",
			u5272: "🈹",
			u5408: "🈴",
			u55b6: "🈺",
			u6307: "🈯",
			u6708: "🈷",
			u6709: "🈶",
			u6e80: "🈵",
			u7121: "🈚",
			u7533: "🈸",
			u7981: "🈲",
			u7a7a: "🈳",
			umbrella: "☔",
			unamused: "😒",
			underage: "🔞",
			unicorn_face: "🦄",
			unlock: "🔓",
			up: "🆙",
			us: "🇺🇸",
			v: "✌",
			vertical_traffic_light: "🚦",
			vhs: "📼",
			vibration_mode: "📳",
			video_camera: "📹",
			video_game: "🎮",
			violin: "🎻",
			virgo: "♍",
			volcano: "🌋",
			vs: "🆚",
			walking: "🚶",
			waning_crescent_moon: "🌘",
			waning_gibbous_moon: "🌖",
			warning: "⚠",
			watch: "⌚",
			watermelon: "🍉",
			water_buffalo: "🐃",
			wave: "👋",
			wavy_dash: "〰",
			waxing_crescent_moon: "🌒",
			waxing_gibbous_moon: "🌔",
			wc: "🚾",
			weary: "😩",
			wedding: "💒",
			whale: "🐳",
			whale2: "🐋",
			wheelchair: "♿",
			white_check_mark: "✅",
			white_circle: "⚪",
			white_flower: "💮",
			white_large_square: "⬜",
			white_medium_small_square: "◽",
			white_medium_square: "◻",
			white_small_square: "▫",
			white_square_button: "🔳",
			wind_chime: "🎐",
			wine_glass: "🍷",
			wink: "😉",
			wolf: "🐺",
			woman: "👩",
			womans_clothes: "👚",
			womans_hat: "👒",
			womens: "🚺",
			worried: "😟",
			wrench: "🔧",
			x: "❌",
			yellow_heart: "💛",
			yen: "💴",
			yum: "😋",
			zap: "⚡",
			zero: "0⃣",
			zzz: "💤"
		},
		T = n(10);
	Object(T.a)();
	String, String, String, Number, Number, Function, Function, Function, Function, Function, Function, Function, Boolean, String, String, String, Number;
	var P = function(e) {
			/Mac/.test(navigator.platform) && Object.keys(e.label).forEach(function(t) {
				e.label[t] && (e.label[t] = e.label[t].replace("ctrl", "⌘").replace("shift", "⇧"))
			});
			var t = '<div\n    class="b3log-editor"\n    style="height: '.concat(e.height || 200, 'px">');
			e.resize && "top" === e.resize && (t += '<div class="b3log-editor__resize"><svg><use xlink:href="#iconResize"></use></svg></div>'), t += '<div class="b3log-editor__toolbar">\n      <span data-type="emoji" aria-label="'.concat(e.label.emoji || "emoji", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '"><svg><use xlink:href="#iconEmoji"></use></svg></span>\n      <span aria-label="').concat(e.label.bold || "bold", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-prefix="**" data-suffix="**"><svg><use xlink:href="#iconBold"></use></svg></span>\n      <span aria-label="').concat(e.label.italic || "italic", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-prefix="*" data-suffix="*"><svg><use xlink:href="#iconItalic"></use></svg></span>\n      <span aria-label="').concat(e.label.quote || "quote", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-prefix="> " data-suffix=""><svg><use xlink:href="#iconQuote"></use></svg></span>\n      <span aria-label="').concat(e.label.link || "link", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-prefix="[" data-suffix="](http://)"><svg><use xlink:href="#iconLink"></use></svg></span>\n      <span aria-label="').concat(e.label.upload || "upload", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '">\n        <label>\n          <svg><use xlink:href="#iconUpload"></use></svg>\n          <input multiple="multiple" type="file"/>\n        </label>\n      </span>\n      <span aria-label="').concat(e.label.unorderedList || "unorderedList", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-prefix="* " data-suffix=""><svg><use xlink:href="#iconUnorderedList"></use></svg></span>\n      <span aria-label="').concat(e.label.orderedList || "orderedList", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-prefix="1. " data-suffix=""><svg><use xlink:href="#iconOrderedList"></use></svg></span>\n      <span aria-label="').concat(e.label.view || "view", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-type="view"><svg><use xlink:href="#iconView"></use></svg></span>\n      <span aria-label="').concat(e.label.fullscreen || "fullscreen", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" data-type="fullscreen"><svg><use xlink:href="#iconFullscreen"></use></svg></span>\n      <a aria-label="').concat(e.label.question || "question", '" class="').concat(e.tipClass || "tooltipped tooltipped__e", '" target="_blank" href="http://127.0.0.1:8080/guide/markdown">\n        <svg><use xlink:href="#iconQuestion"></use></svg>\n      </a>\n      <div class="b3log-editor__emoji">\n        <div class="fn__clear">\n        </div>\n        <div class="b3log-editor__emoji-tip">\n          <a href="').concat(e.emojiURL || (e.servePath || Label.servePath || "http://127.0.0.1:8080") + "/settings/function", '" target="_blank">').concat(e.label.emojiTip || "Tip", '</a>\n        </div>\n      </div>\n    </div>\n    <div class="b3log-editor__content">\n      <div class="b3log-editor__textarea">\n        <textarea\n          placeholder="').concat(e.placeholder || "", '"></textarea>\n      </div>\n      <div class="b3log-editor__markdown ').concat(e.previewClass, ' fn__none" ref="pipeView"></div>\n      <span class="b3log-editor__counter"></span>\n    </div>'), e.resize && "bottom" === e.resize && (t += '<div class="b3log-editor__resize"><svg><use xlink:href="#iconResize"></use></svg></div>'), t += "</div>";
			var a = void 0,
				r = void 0,
				l = o()("#".concat(e.id));
			l.html(t);
			var s = l.find("textarea"),
				d = l.find("textarea")[0];
			e.hasView && (l.find('.b3log-editor__toolbar > span[data-type="view"]').addClass("b3log-editor__icon--current"), l.find(".b3log-editor__markdown").show(), a = S(a, e.change, l));
			var u = l.find(".b3log-editor__emoji"),
				h = "";
			if (e.emoji) {
				e.emoji(function(t) {
					Object.keys(t).forEach(function(n) {
						var a = t[n];
						h += '<span data-value="'.concat(t[n], ' ">'), t[n].indexOf(":") > -1 && (a = '<img src="'.concat(e.staticServePath || "", "/emoji/graphics/").concat(n, '.png">')), h += a + "</span>"
					}), u.find(".fn__clear").html(h), e._emojiData = t
				})
			} else e._emojiData = {
				smile: "😄",
				joy: "😂",
				"+1": "👍",
				scream: "😱",
				smiling_imp: "😈",
				sob: "😭",
				yum: "😋",
				tada: "🎉",
				ok_hand: "👌",
				pray: "🙏",
				punch: "👊",
				heart_eyes: "😍"
			}, Object.keys(e._emojiData).forEach(function(t) {
				h += '<span data-value="'.concat(e._emojiData[t], ' ">').concat(e._emojiData[t], "</span>")
			});
			var f = /firefox/i.test(navigator.userAgent) || "IE" === c()(navigator.userAgent).browser.name;
			return u.find(".fn__clear").html(h), u.on("click", "span", function() {
				x(d, o()(this).data("value"), "", !0), f && (a = S(a, e.change, l))
			}), l.find(".b3log-editor__toolbar > span").click(function() {
				var t = o()(this);
				t.data("prefix") ? (x(d, t.data("prefix"), t.data("suffix")), f && (a = S(a, e.change, l))) : "view" === t.data("type") ? t.hasClass("b3log-editor__icon--current") ? (t.removeClass("b3log-editor__icon--current"), l.find(".b3log-editor__markdown").hide()) : (t.addClass("b3log-editor__icon--current"), l.find(".b3log-editor__markdown").show(), a = S(a, e.change, l)) : "fullscreen" === t.data("type") ? "#iconFullscreen" === t.find("use").attr("xlink:href") ? (t.find("use").attr("xlink:href", "#iconContract"), l.find(".b3log-editor").addClass("b3log-editor--fullscreen")) : (t.find("use").attr("xlink:href", "#iconFullscreen"), l.find(".b3log-editor").removeClass("b3log-editor--fullscreen")) : "emoji" === t.data("type") && u.toggle()
			}), l.find(".b3log-editor__resize").mousedown(function(t) {
				var n = document;
				t || (t = window.event);
				var a = t.clientY,
					o = l.find(".b3log-editor").height();
				n.ondragstart = "return false;", n.onselectstart = "return false;", n.onselect = "document.selection.empty();", this.setCapture ? this.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), n.onmousemove = function(t) {
					t || (t = window.event), "top" === e.resize ? l.find(".b3log-editor").height(Math.max(100, o + (a - t.clientY))) : l.find(".b3log-editor").height(Math.max(100, o + (t.clientY - a)))
				}, n.onmouseup = function() {
					this.releaseCapture ? this.releaseCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP), n.onmousemove = null, n.onmouseup = null, n.ondragstart = null, n.onselectstart = null, n.onselect = null
				}
			}), l.find(".b3log-editor__toolbar > span input").change(function(t) {
				0 !== t.target.files.length && (x(d, O(t.target.files, e.uploadMax, e.label.loading, e.label.over), ""), f && (a = S(a, e.change, l)), L(e.uploadURL, t.target.files, e.uploadMax, function(n) {
					j(n, d, e.label.loading, e.label.error), f && (a = S(a, e.change, l)), t.target.value = ""
				}, function(e) {
					t.target.value = "", e && Object(k.a)(e.msg)
				}))
			}), s.focus(function() {
				u.hide(), e.counter && l.find(".b3log-editor__counter").text(o()(this).val().length + "/".concat(e.counter))
			}).scroll(function(e) {
				if (0 !== l.find(".b3log-editor__icon--current").length) {
					var t = e.target.scrollTop,
						n = e.target.clientHeight,
						a = e.target.scrollHeight,
						o = l.find(".b3log-editor__markdown")[0];
					o.scrollTop = t / n > .5 ? (t + n) * o.scrollHeight / a - n : t * o.scrollHeight / a
				}
			}).bind("paste", function(t) {
				if ("" !== t.originalEvent.clipboardData.getData("text/html").replace(/(^\s*)|(\s*)$/g, "")) {
					var r = !1,
						c = new i.a;
					c.addRule("strikethrough", {
						filter: ["pre", "code"],
						replacement: function(e, t, n) {
							return "PRE" === t.parentElement.tagName ? e : e.split("\n").length > 1 ? (r = !0, "```\n" + e + "\n```") : "`" + e + "`"
						}
					}), c.addRule("strikethrough", {
						filter: ["img"],
						replacement: function(t, n) {
							return n.getAttribute("src") ? (e.fetchUpload && e.fetchUpload(n.src, function(t, n) {
								C(d, t, n), f && (a = S(a, e.change, l))
							}), "![".concat(n.alt, "](").concat(n.src, ")")) : ""
						}
					});
					var s = n(23);
					c.use(s.gfm);
					var u = c.turndown(t.originalEvent.clipboardData.getData("text/html"));
					if (r && (o()("<div>" + t.originalEvent.clipboardData.getData("text/html") + "</div>").find("pre").length > 1 ? r = !1 : "```" === u.substr(0, 3) && "```" === u.substr(u.length - 4, 3) || (r = !1)), r) x(t.target, "```\n" + t.originalEvent.clipboardData.getData("text/plain") + "\n```", "", !0), f && (a = S(a, e.change, l));
					else {
						var h = document.createElement("div");
						h.innerHTML = u, u = u, x(t.target, u, "", !0), f && (a = S(a, e.change, l)), h.remove()
					}
				} else "" !== t.originalEvent.clipboardData.getData("text/plain").replace(/(^\s*)|(\s*)$/g, "") && 0 === t.originalEvent.clipboardData.files.length ? (x(t.target, t.originalEvent.clipboardData.getData("text/plain"), "", !0), f && (a = S(a, e.change, l))) : t.originalEvent.clipboardData.files.length > 0 && e.uploadURL && (x(d, O(t.originalEvent.clipboardData.files, e.uploadMax, e.label.loading, e.label.over), "", !0), f && (a = S(a, e.change, l)), L(e.uploadURL, t.originalEvent.clipboardData.files, e.uploadMax, function(n) {
					j(n, t.target, e.label.loading, e.label.error), f && (a = S(a, e.change, l))
				}, function(e) {
					e && Object(k.a)(e.msg)
				}));
				t.preventDefault()
			}).bind("drop", function(t) {
				t.stopPropagation(), t.preventDefault();
				var n = t.originalEvent.dataTransfer.items;
				0 !== n.length && (x(d, O(n, e.uploadMax, e.label.loading, e.label.over), ""), f && (a = S(a, e.change, l)), L(e.uploadURL, n, e.uploadMax, function(t) {
					j(t, d, e.label.loading, e.label.error), f && (a = S(a, e.change, l))
				}, function(e) {
					e && Object(k.a)(e.msg)
				}))
			}).bind("input", function(t) {
				var n = this,
					i = this.value.substr(0, this.selectionStart).split("\n").slice(-1).pop(),
					c = l.find(".b3log-editor__hints"),
					u = function(t) {
						if (0 !== t.length) {
							var i = function(e, t) {
									var n = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,
										a = document.querySelector(".b3log-editor__textarea-position");
									a || ((a = document.createElement("div")).className = "b3log-editor__textarea-position", document.body.appendChild(a));
									var o = a.style;
									o.whiteSpace = "pre-wrap", o.wordWrap = "break-word", o.position = "absolute", o.overflow = "hidden", o.left = "-100%", ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"].forEach(function(e) {
										o[e] = n[e]
									}), a.textContent = e.value.substring(0, t);
									var i = document.createElement("span");
									return i.textContent = e.value.substring(t) || ".", a.appendChild(i), {
										top: i.offsetTop - e.scrollTop + parseInt(n.lineHeight),
										left: i.offsetLeft - e.scrollLeft
									}
								}(n, n.selectionEnd),
								r = i.left + 2,
								u = i.top + 29,
								h = "";
							t.forEach(function(e, t) {
								h += '<li data-value="'.concat(e.value, ' " class="').concat(t || "b3log-editor__hints--current", '">\n').concat(e.imageURL ? '<img src="' + e.imageURL + '"/>' : e.value, " ").concat(e.label, "</li>")
							}), 0 === c.length ? (s.after('<ul class="b3log-editor__hints" style="left: '.concat(r, "px; top: ").concat(u, 'px">').concat(h, "</ul>")), c = l.find(".b3log-editor__hints")) : c.html(h).css({
								top: "".concat(u, "px"),
								left: "".concat(r, "px"),
								display: "block"
							}), c.find("li").click(function() {
								c.hide(), s.focus();
								var t = o()(this),
									n = ":";
								if (0 === t.data("value").indexOf("@") && (n = "@"), f) {
									var i = d.value.substr(0, d.selectionStart).split(n);
									return i.pop(), d.value = i.join(n) + t.data("value") + d.value.substr(d.selectionStart), d.selectionEnd = d.selectionStart = (i.join(n) + t.data("value")).length, void(a = S(a, e.change, l))
								}
								for (; !d.value.substr(0, d.selectionEnd).endsWith(n) && "" !== d.value.substr(0, d.selectionEnd);) document.execCommand("delete", !1);
								document.execCommand("delete", !1), document.execCommand("insertText", !1, t.data("value"))
							}), u + c.outerHeight() > l.outerHeight() + (e.hintsBottom || 68) && c.css("top", "".concat(u - c.outerHeight() - 18, "px"))
						} else c.hide()
					},
					h = function(e) {
						var t = i.split(e),
							n = void 0;
						if (t.length > 1) if (2 === t.length && "" === t[0])("" === t[1] || "" !== o.a.trim(t[1])) && -1 === t[1].indexOf(" ") && t[1].length < 33 && (n = t[1]);
						else {
							var a = t[t.length - 2],
								r = t.slice(-1).pop();
							" " === a.slice(-1) && -1 === r.indexOf(" ") && ("" === r || "" !== o.a.trim(r)) && r.length < 33 && (n = r)
						}
						return n
					},
					p = h("@"),
					g = h(":");
				if (void 0 === p && void 0 === g) c.hide(), r && clearTimeout(r);
				else if (void 0 !== p && (r && clearTimeout(r), r = setTimeout(function() {
					e.at && e.at(p, u)
				}, 50)), void 0 !== g) {
					var b = [],
						m = N;
					"" === g && (m = e._emojiData), Object.keys(m).forEach(function(t) {
						if (!(b.length > 4) && 0 === t.indexOf(g.toLowerCase())) {
							var n = {
								value: m[t],
								label: t
							};
							e.emoji && n.value.indexOf(":") > -1 && (n.imageURL = "".concat(e.staticServePath || "", "/emoji/graphics/").concat(t, ".png")), b.push(n)
						}
					}), u(b)
				}
				a = S(a, e.change, l), e.counter && l.find(".b3log-editor__counter").text(o()(this).val().length + "/".concat(e.counter))
			}).bind("keyup", function(t) {
				e.keyup && e.keyup(t)
			}).bind("keydown", function(t) {
				var n = l.find(".b3log-editor__hints");
				if (0 !== n.length && 0 !== n.find("li").length && "none" !== n[0].style.display) {
					var o = n.find(".b3log-editor__hints--current");
					if (40 === t.keyCode) t.preventDefault(), 0 === o.next().length ? n.find("li:eq(0)").addClass("b3log-editor__hints--current") : o.next().addClass("b3log-editor__hints--current"), o.removeClass("b3log-editor__hints--current");
					else if (38 === t.keyCode) t.preventDefault(), 0 === o.prev().length ? n.find("li").last().addClass("b3log-editor__hints--current") : o.prev().addClass("b3log-editor__hints--current"), o.removeClass("b3log-editor__hints--current");
					else if (13 === t.keyCode) {
						t.preventDefault(), n.hide(), o.removeClass("b3log-editor__hints--current");
						var i = ":";
						if (0 === o.data("value").indexOf("@") && (i = "@"), f) {
							var r = this.value.substr(0, this.selectionStart).split(i);
							return r.pop(), this.value = r.join(i) + o.data("value") + this.value.substr(this.selectionStart), this.selectionEnd = this.selectionStart = (r.join(i) + o.data("value")).length, void(a = S(a, e.change, l))
						}
						for (; !this.value.substr(0, this.selectionEnd).endsWith(i) && "" !== this.value.substr(0, this.selectionEnd);) document.execCommand("delete", !1);
						document.execCommand("delete", !1), document.execCommand("insertText", !1, o.data("value"))
					}
				}
			}).bind("keydown", "esc", function(t) {
				return e.esc && e.esc(t), !1
			}).bind("keydown", "Ctrl+/", function(e) {
				return e.preventDefault(), e.stopPropagation(), u.toggle(), !1
			}).bind("keydown", "Ctrl+return", function(t) {
				return t.preventDefault(), t.stopPropagation(), e.ctrlEnter(), !1
			}).bind("keydown", "Ctrl+b", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(1)").click(), !1
			}).bind("keydown", "Ctrl+i", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(2)").click(), !1
			}).bind("keydown", "Ctrl+e", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(3)").click(), !1
			}).bind("keydown", "Ctrl+k", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(4)").click(), !1
			}).bind("keydown", "Ctrl+l", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(6)").click(), !1
			}).bind("keydown", "Ctrl+d", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(8)").click(), !1
			}).bind("keydown", "Ctrl+Shift+l", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(7)").click(), !1
			}).bind("keydown", "Ctrl+Shift+a", function(e) {
				return e.preventDefault(), e.stopPropagation(), l.find(".b3log-editor__toolbar > span:eq(9)").click(), !1
			}), void 0 !== y.init && s.bind("keydown", "Alt+s", function(t) {
				return t.preventDefault(), t.stopPropagation(), y.availabel ? y.handleStartRecording() : y.init(function() {
					y.handleStartRecording(), x(d, "\n[Start Recording]\n", ""), f && (a = S(a, e.change, l))
				}), !1
			}).bind("keydown", "Alt+r", function(t) {
				if (t.preventDefault(), t.stopPropagation(), y.availabel) return y.handleStopRecording(), C(d, "\n[Start Recording]\n", "\n[End Recording, Start Uploading]\n"), f && (a = S(a, e.change, l)), L(e.uploadURL, [y.wavFileBlob.getDataBlob()], e.uploadMax, function(t) {
					t.data.errFiles.length > 0 ? (C(d, "\n[End Recording, Start Uploading]\n", "\n[Record Upload Error]\n"), f && (a = S(a, e.change, l))) : t.data.succMap && (C(d, "\n[End Recording, Start Uploading]\n", '\n<audio controls="controls" src="'.concat(t.data.succMap.blob, '">\n')), f && (a = S(a, e.change, l)))
				}, function(e) {
					e && Object(k.a)(e.msg)
				}), !1
			}), s
		},
		E = n(3),
		I = n(2);
	t.a = function(e) {
		return P({
			resize: e.resize,
			id: e.id,
			placeholder: e.placeholder,
			uploadMax: e.uploadMax,
			label: {
				emoji: Label.insertEmojiLabel + " <ctrl+&frasl;>",
				bold: Label.addBoldLabel + " <ctrl+b>",
				italic: Label.addItalicLabel + " <ctrl+i>",
				quote: Label.insertQuoteLabel + " <ctrl+e>",
				link: Label.addLinkLabel + " <ctrl+k>",
				upload: Label.uploadFileLabel + Label.commaLabel + Label.canDragLabel,
				unorderedList: Label.addBulletedLabel + " <ctrl+l>",
				orderedList: Label.addNumberedListLabel + " <ctrl+shift+l>",
				view: Label.previewLabel + " <ctrl+d>",
				question: Label.helpLabel,
				fullscreen: Label.fullscreenLabel + " <ctrl+shift+a>",
				emojiTip: Label.setEmotionLabel
			},
			height: e.height,
			keyup: e.keyup,
			counter: e.counter,
			esc: e.esc,
			ctrlEnter: e.ctrlEnter,
			hasView: e.hasView,
			hintsBottom: e.hintsBottom,
			uploadURL: "".concat(Label.servePath, "/upload/editor"),
			previewClass: "content-reset",
			staticServePath: Label.staticServePath,
			fetchUpload: function(e, t) {
				o.a.ajax({
					url: "".concat(Label.servePath, "/fetch-upload"),
					type: "POST",
					data: JSON.stringify({
						url: e
					}),
					success: function(e) {
						t(e.originalURL, e.url)
					}
				})
			},
			emoji: function(e) {
				o.a.ajax({
					url: "".concat(Label.servePath, "/users/emotions"),
					type: "GET",
					success: function(t) {
						e(JSON.parse("{".concat(t.emotions, "}")))
					}
				})
			},
			at: function(e, t) {
				o.a.ajax({
					url: "".concat(Label.servePath, "/users/names?name=").concat(e),
					type: "GET",
					success: function(n) {
						n.sc ? (n.userNames.forEach(function(e) {
							e.value = "@".concat(e.userName), e.imageURL = e.userAvatarURL, e.label = e.userName
						}), "" === e && n.userNames.push({
							label: "参与者",
							imageURL: Label.staticServePath + "/images/user-thumbnail.png",
							value: "@participants"
						}), t(n.userNames)) : Object(k.a)(n.msg)
					}
				})
			},
			change: function(e, t) {
				"" !== o.a.trim(e) && t ? o.a.ajax({
					url: "".concat(Label.servePath, "/markdown"),
					type: "POST",
					data: {
						markdownText: e
					},
					success: function(e) {
						t.html(e.html), Object(I.a)(), Object(I.b)(), Object(E.b)(), Object(E.c)(), Object(E.a)()
					}
				}) : t && t.html("")
			}
		})
	}
}, function(e, t, n) {
	"use strict";
	var a = n(0),
		o = n.n(a),
		i = {
			support: {
				pjax: window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
				storage: !! window.localStorage
			},
			toInt: function(e) {
				return parseInt(e)
			},
			stack: {},
			getTime: function() {
				return 1 * new Date
			},
			getRealUrl: function(e) {
				return e = (e = (e || "").replace(/\#.*?$/, "")).replace("?pjax=true&", "?").replace("?pjax=true", "").replace("&pjax=true", "")
			},
			getUrlHash: function(e) {
				return e.replace(/^[^\#]*(?:\#(.*?))?$/, "$1")
			},
			getLocalKey: function(e) {
				var t = "pjax_" + encodeURIComponent(e);
				return {
					data: t + "_data",
					time: t + "_time",
					title: t + "_title"
				}
			},
			removeAllCache: function() {
				if (i.support.storage) for (var e in localStorage)"pjax" === (e.split("_") || [""])[0] && delete localStorage[e]
			},
			getCache: function(e, t, n) {
				var a, o, r;
				if (t = i.toInt(t), e in i.stack) {
					if (a = i.stack[e], ctime = i.getTime(), a.time + 1e3 * t > ctime) return a;
					delete i.stack[e]
				} else if (n && i.support.storage) {
					var c = i.getLocalKey(e);
					if (o = c.data, r = c.time, a = localStorage.getItem(o)) {
						if (i.toInt(localStorage.getItem(r)) + 1e3 * t > i.getTime()) return {
							data: a,
							title: localStorage.getItem(c.title)
						};
						localStorage.removeItem(o), localStorage.removeItem(r), localStorage.removeItem(c.title)
					}
				}
				return null
			},
			setCache: function(e, t, n, a) {
				var o, r = i.getTime();
				i.stack[e] = {
					data: t,
					title: n,
					time: r
				}, a && i.support.storage && (o = i.getLocalKey(e), localStorage.setItem(o.data, t), localStorage.setItem(o.time, r), localStorage.setItem(o.title, n))
			},
			removeCache: function(e) {
				if (e = i.getRealUrl(e || location.href), delete i.stack[e], i.support.storage) {
					var t = i.getLocalKey(e);
					localStorage.removeItem(t.data), localStorage.removeItem(t.time), localStorage.removeItem(t.title)
				}
			}
		},
		r = function(e) {
			if (!(e = o.a.extend({
				selector: "",
				container: "",
				callback: function() {},
				filter: function() {}
			}, e)).container || !e.selector) throw new Error("selector & container options must be set");
			o()("body").delegate(e.selector, "click", function(t) {
				if (t.which > 1 || t.metaKey) return !0;
				var n = o()(this).attr("href");
				if ("function" == typeof e.filter && !0 === e.filter.call(this, n, this)) return !0;
				if (n === location.href) return !0;
				if (i.getRealUrl(n) == i.getRealUrl(location.href)) {
					var a = i.getUrlHash(n);
					return a && (location.hash = a, e.callback && e.callback.call(this, {
						type: "hash"
					})), !0
				}
				t.preventDefault(), e = o.a.extend(!0, e, {
					url: n,
					element: this,
					push: !0
				}), r.request(e)
			})
		};
	r.xhr = null, r.options = {}, r.state = {}, r.defaultOptions = {
		timeout: 2e3,
		element: null,
		cache: 86400,
		storage: !0,
		url: "",
		push: !0,
		show: "",
		title: "",
		titleSuffix: "",
		type: "GET",
		data: {
			pjax: !0
		},
		dataType: "html",
		callback: null,
		beforeSend: function(e) {
			o()(r.options.container).trigger("pjax.start", [e, r.options]), e && e.setRequestHeader("X-PJAX", !0) && e.setRequestHeader("X-PJAX-Container", r.options.container)
		},
		error: function() {
			r.options.callback && r.options.callback.call(r.options.element, {
				type: "error"
			}), location.href = r.options.url
		},
		complete: function(e) {
			o()(r.options.container).trigger("pjax.end", [e, r.options])
		}
	}, r.showFx = {
		_default: function(e, t, n) {
			this.html(e), t && t.call(this, e, n)
		},
		fade: function(e, t, n) {
			var a = this;
			n ? (a.html(e), t && t.call(a, e, n)) : this.fadeOut(200, function() {
				a.html(e).fadeIn(200, function() {
					t && t.call(a, e, n)
				})
			})
		}
	}, r.showFn = function(e, t, n, a, i) {
		var c = null;
		"function" == typeof e ? c = e : (e in r.showFx || (e = "_default"), c = r.showFx[e]), c && c.call(t, n, function() {
			var e = location.hash;
			"" != e ? (location.href = e, /Firefox/.test(navigator.userAgent) && history.replaceState(o.a.extend({}, r.state, {
				url: null
			}), document.title)) : location.search.length > 1 && window.scrollTo(0, 0), a && a.call(this, n, i)
		}, i)
	}, r.success = function(e, t) {
		if (!0 !== t && (t = !1), r.html && (e = o()(e).find(r.html).html()), -1 != (e || "").indexOf("<html")) return r.options.callback && r.options.callback.call(r.options.element, {
			type: "error"
		}), location.href = r.options.url, !1;
		var n = o()(r.options.element).attr("pjax-title");
		if (!n) {
			if ("" == (n = r.options.title || "") && r.options.element) {
				var a = o()(r.options.element);
				n = a.attr("title") || a.text()
			}
			var c = e.match(/<title>(.*?)<\/title>/);
			c && (n = c[1])
		}
		n && -1 == n.indexOf(r.options.titleSuffix) && (n += r.options.titleSuffix), document.title = n, r.state = {
			container: r.options.container,
			timeout: r.options.timeout,
			cache: r.options.cache,
			storage: r.options.storage,
			show: r.options.show,
			title: n,
			url: r.options.oldUrl
		};
		var l = o.a.param(r.options.data);
		"" != l && (r.state.url = r.options.url + (/\?/.test(r.options.url) ? "&" : "?") + l), r.options.push ? (r.active || (history.replaceState(o.a.extend({}, r.state, {
			url: null
		}), document.title), r.active = !0), history.pushState(r.state, document.title, r.options.oldUrl)) : !1 === r.options.push && history.replaceState(r.state, document.title, r.options.oldUrl), r.options.showFn && r.options.showFn(e, function() {
			r.options.callback && r.options.callback.call(r.options.element, {
				type: t ? "cache" : "success"
			})
		}, t), r.options.cache && !t && i.setCache(r.options.url, e, n, r.options.storage)
	}, r.request = function(e) {
		e.hasOwnProperty("data") && (r.defaultOptions.data = e.data), e = o.a.extend(!0, r.defaultOptions, e);
		var t, n = o()(e.container);
		if (e.oldUrl = e.url, e.url = i.getRealUrl(e.url), o()(e.element).length && (t = i.toInt(o()(e.element).attr("data-pjax-cache"))) && (e.cache = t), !0 === e.cache && (e.cache = 86400), e.cache = i.toInt(e.cache), 0 === e.cache && i.removeAllCache(), e.showFn || (e.showFn = function(t, a, o) {
			r.showFn(e.show, n, t, a, o)
		}), r.options = e, r.options.success = r.success, e.cache && (t = i.getCache(e.url, e.cache, e.storage))) return e.beforeSend(), e.title = t.title, r.success(t.data, !0), e.complete(), !0;
		r.xhr && r.xhr.readyState < 4 && (r.xhr.onreadystatechange = o.a.noop, r.xhr.abort()), r.xhr = o.a.ajax(r.options)
	};
	var c = "state" in window.history,
		l = location.href;
	o()(window).bind("popstate", function(e) {
		var t = !c && location.href == l;
		if (c = !0, !t) {
			var n = e.state;
			if (n && n.container) if (o()(n.container).length) {
				var a = {
					url: n.url,
					container: n.container,
					push: null,
					timeout: n.timeout,
					cache: n.cache,
					storage: n.storage,
					title: n.title,
					element: null
				};
				r.request(a)
			} else window.location.href = location.href
		}
	}), i.support.pjax || ((r = function() {
		return !0
	}).request = function(e) {
		e && e.url && (location.href = e.url)
	}), "state" in o.a.Event.prototype || o.a.event.addProp("state"), t.a = r
}, function(e, t, n) {
	"use strict";
	n.d(t, "c", function() {
		return p
	}), n.d(t, "e", function() {
		return g
	}), n.d(t, "l", function() {
		return b
	}), n.d(t, "k", function() {
		return m
	}), n.d(t, "d", function() {
		return v
	}), n.d(t, "i", function() {
		return _
	}), n.d(t, "j", function() {
		return w
	}), n.d(t, "b", function() {
		return y
	}), n.d(t, "f", function() {
		return k
	}), n.d(t, "a", function() {
		return x
	}), n.d(t, "h", function() {
		return L
	}), n.d(t, "g", function() {
		return O
	});
	var a = n(0),
		o = n.n(a),
		i = n(6),
		r = n.n(i),
		c = n(14),
		l = n.n(c),
		s = n(4),
		d = n(3),
		u = n(2),
		h = n(5),
		f = n(1),
		p = function(e) {
			Label.isLoggedIn ? (Object(h.a)({
				width: o()(window).width() > 500 ? 500 : o()(window).width() - 40,
				height: 450,
				content: '<div class="form fn__clear">\n<div class="fn__clear"><label><input type="radio" value="0" name="report" checked> '.concat(Label.spamADLabel, '</label></div>\n<div class="fn__clear"><label><input type="radio" value="1" name="report"> ').concat(Label.pornographicLabel, '</label></div>\n<div class="fn__clear"><label><input type="radio" value="2" name="report"> ').concat(Label.violationOfRegulationsLabel, '</label></div>\n<div class="fn__clear"><label><input type="radio" value="3" name="report"> ').concat(Label.allegedlyInfringingLabel, '</label></div>\n<div class="fn__clear"><label><input type="radio" value="4" name="report"> ').concat(Label.personalAttacksLabel, '</label></div>\n<div class="fn__clear"><label><input type="radio" value="49" name="report"> ').concat(Label.miscLabel, '</label></div>\n<br>\n<textarea id="reportTextarea" placeholder="').concat(Label.reportContentLabel, '" rows="3"></textarea><br><br>\n<button id="reportCommitBtn" class="fn__right green btn btn--blue">').concat(Label.reportLabel, "</button>\n</div>")
			}), o()("#reportCommitBtn").click(function() {
				var t = o()(this);
				"disabled" !== t.attr("disabled") && (t.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
					url: "".concat(Label.servePath, "/report"),
					type: "POST",
					cache: !1,
					data: JSON.stringify({
						reportDataId: e,
						reportDataType: 0,
						reportType: o()("input[name=report]:checked").val(),
						reportMemo: o()("#reportTextarea").val()
					}),
					complete: function(e) {
						t.removeAttr("disabled").css("opacity", "1"), 0 === e.responseJSON.sc ? (Object(f.a)(Label.reportSuccLabel), o()(".dialog").remove()) : Object(f.a)(e.responseJSON.msg)
					}
				}))
			})) : Object(s.a)()
		},
		g = function(e) {
			o()(".".concat(e)).each(function() {
				var e = o()(this).data("ua"),
					t = r()(e),
					n = t.device.model ? t.device.model : t.os.name;
				n && "Windows" !== n || (n = ""), "" !== n && o()(this).html("via " + n)
			})
		},
		b = function(e, t, n, a) {
			0 !== e.length && e.click(function() {
				Label.isLoggedIn ? t ? "disabled" !== e.attr("disabled") && (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
					url: "".concat(Label.servePath, "/vote/up/article"),
					type: "POST",
					cache: !1,
					data: JSON.stringify({
						dataId: n
					}),
					success: function(e) {
						e.sc ? a && a(e) : Object(f.a)(e.msg)
					},
					complete: function() {
						e.removeAttr("disabled").css("opacity", "1")
					}
				})) : Object(f.a)(Label.invalidAppRoleLabel) : Object(s.a)()
			})
		},
		m = function(e, t, n, a) {
			0 !== e.length && e.click(function() {
				Label.isLoggedIn ? t ? "disabled" !== e.attr("disabled") && (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
					url: "".concat(Label.servePath, "/vote/down/article"),
					type: "POST",
					cache: !1,
					data: JSON.stringify({
						dataId: n
					}),
					success: function(e) {
						e.sc ? a && a(e) : Object(f.a)(e.msg)
					},
					complete: function() {
						e.removeAttr("disabled").css("opacity", "1")
					}
				})) : Object(f.a)(Label.invalidAppRoleLabel) : Object(s.a)()
			})
		},
		v = function(e, t) {
			Label.isLoggedIn ? Object(f.c)(Label.rewardConfirmLabel, function() {
				o.a.ajax({
					url: "".concat(Label.servePath, "/article/reward?articleId=").concat(e),
					type: "POST",
					cache: !1,
					success: function(e) {
						t(e)
					}
				})
			}) : Object(s.a)()
		},
		_ = function(e) {
			Object(f.c)(Label.stickConfirmLabel, function() {
				o.a.ajax({
					url: "".concat(Label.servePath, "/article/stick?articleId=").concat(e),
					type: "POST",
					cache: !1,
					success: function(e) {
						Object(f.a)(e.msg), e.sc && (window.location.href = Label.servePath + "/recent")
					}
				})
			})
		},
		w = function(e, t, n, a) {
			0 !== e.length && e.click(function() {
				Label.isLoggedIn ? t ? "disabled" !== e.attr("disabled") && Object(f.c)(Label.thankArticleConfirmLabel, function() {
					e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
						url: Label.servePath + "/article/thank?articleId=" + n,
						type: "POST",
						cache: !1,
						success: function(e) {
							e.sc ? a && a(e) : Object(f.a)(e.msg)
						},
						complete: function() {
							e.removeAttr("disabled").css("opacity", "1")
						}
					})
				}) : Object(f.a)(Label.invalidAppRoleLabel) : Object(s.a)()
			})
		},
		y = function(e, t, n) {
			Label.isLoggedIn && o.a.ajax({
				url: Label.servePath + "/notifications/make-read",
				type: "POST",
				cache: !1,
				data: JSON.stringify({
					articleId: e,
					commentIds: t
				})
			})
		},
		k = function(e, t, n, a, o) {
			var i = encodeURIComponent(e),
				r = {
					weibo: "http://v.t.sina.com.cn/share/share.php?title=" + n + "&url=" + i + "&pic=" + t,
					qqz: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=".concat(i, "&sharesource=qzone&title=").concat(n, "&pics=").concat(t),
					twitter: "https://twitter.com/intent/tweet?status=" + n + " " + i
				};
			if (a) {
				var c = new l.a({
					element: a[0],
					value: e,
					size: o
				});
				a.css("background-image", "url(".concat(c.toDataURL("image/jpeg"), ")")).hide()
			}
			return r
		},
		x = function(e, t) {
			0 !== e.length && o.a.ajax({
				method: "GET",
				url: Label.staticServePath + "/js/lib/aplayer/APlayer.min.js?v=1.10.1",
				dataType: "script",
				cache: !0
			}).done(function() {
				new APlayer({
					mini: t,
					element: e[0],
					narrow: !1,
					autoplay: !1,
					mutex: !0,
					theme: "#4285f4",
					mode: "order",
					preload: "none",
					music: {
						title: "语音预览",
						author: '<a href="/member/v" target="_blank">小薇</a>',
						url: e.data("url"),
						pic: t ? "" : Label.staticServePath + "/images/robot_avatar.jpg"
					}
				})
			})
		},
		L = function(e, t, n) {
			"disabled" !== n.attr("disabled") && ("" === t.html() ? o.a.ajax({
				url: Label.servePath + "/comment/original",
				type: "POST",
				data: JSON.stringify({
					commentId: e,
					userCommentViewMode: Label.userCommentViewMode
				}),
				beforeSend: function() {
					n.attr("disabled", "disabled").css("opacity", "0.3")
				},
				success: function(e) {
					if (!e.sc) return Object(f.a)(e.msg), !1;
					t.html("<ul>".concat(e.cmtTpl, "</ul>")), Object(u.a)(), Object(u.b)(), Object(d.b)(), Object(d.c)(), Object(d.a)()
				},
				error: function(e) {
					Object(f.a)(e.statusText)
				},
				complete: function() {
					n.removeAttr("disabled").css("opacity", "1")
				}
			}) : t.html(""))
		},
		O = function(e, t, n, a) {
			if ("disabled" !== n.attr("disabled")) return "" !== t.html() ? (t.html(""), !1) : void o.a.ajax({
				url: Label.servePath + "/comment/replies",
				type: "POST",
				data: JSON.stringify({
					commentId: e,
					userCommentViewMode: Label.userCommentViewMode
				}),
				beforeSend: function() {
					n.attr("disabled", "disabled").css("opacity", "0.3")
				},
				success: function(e) {
					if (!e.sc) return Object(f.a)(e.msg), !1;
					var n = "";
					e.commentReplies.forEach(function(e) {
						n += e
					}), t.html("<ul>".concat(n, "</ul>")), Object(u.a)(), Object(u.b)(), Object(d.b)(), Object(d.c)(), Object(d.a)(), a && a()
				},
				error: function(e) {
					Object(f.a)(e.statusText)
				},
				complete: function() {
					n.removeAttr("disabled").css("opacity", "1")
				}
			})
		}
}, , , function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return c
	}), n.d(t, "a", function() {
		return l
	}), n.d(t, "c", function() {
		return s
	});
	var a = n(0),
		o = n.n(a),
		i = n(10);
	Object(i.a)(), window.prevKey = void 0;
	var r = function(e, t, n) {
			var a = o()(t + "li." + n);
			if (1 === a.length) {
				if ("top" === e || "bottom" === e) return o()(window).scrollTop(a.offset().top), !1;
				(o()(window).height() + o()(window).scrollTop() < a.offset().top + a.outerHeight() || o()(window).scrollTop() > a.offset().top) && ("down" === e ? o()(window).scrollTop(a.offset().top - (o()(window).height() - a.outerHeight())) : o()(window).scrollTop(a.offset().top))
			}
		},
		c = function(e, t, n) {
			var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "h2 a";
			if (!Label.userKeyboardShortcutsStatus || "1" === Label.userKeyboardShortcutsStatus) return !1;
			o()(document).bind("keydown", "c", function() {
				return !window.prevKey && (window.location.href = Label.servePath + "/post?type=0", !1)
			}).bind("keyup", "g", function() {
				return window.prevKey = "g", setTimeout(function() {
					window.prevKey = void 0
				}, 1e3), !1
			}).bind("keyup", "s", function() {
				return e.focus(), !1
			}).bind("keyup", "t", function() {
				return void 0 === window.prevKey && o()("html, body").animate({
					scrollTop: 0
				}, 800), !1
			}).bind("keyup", "n", function() {
				return "g" === window.prevKey && (window.location.href = Label.servePath + "/notifications"), !1
			}).bind("keyup", "i", function() {
				return "g" === window.prevKey && (window.location.href = Label.servePath), !1
			}).bind("keyup", "r", function() {
				return "g" === window.prevKey && (window.location.href = Label.servePath + "/recent"), !1
			}).bind("keyup", "q", function() {
				return "g" === window.prevKey && (window.location.href = Label.servePath + "/qna"), !1
			}).bind("keyup", "d", function() {
				return "g" === window.prevKey && (window.location.href = Label.servePath + "/domains"), !1
			}).bind("keyup", "w", function() {
				return "g" === window.prevKey && (window.location.href = Label.servePath + "/watch"), !1
			}).bind("keyup", "Shift+/", function() {
				return window.open("/article/1474030007391").opener = null, !1
			}).bind("keyup", "j", function() {
				var e = o()(t + "li." + n);
				return 0 === e.length ? o()(t + "li:first").addClass(n) : 1 === e.next().length && (e.next().addClass(n), e.removeClass(n)), r("down", t, n), !1
			}).bind("keyup", "k", function() {
				var e = o()(t + "li." + n);
				return 0 === e.length ? o()(t + "li:last").addClass(n) : 1 === e.prev().length && (e.prev().addClass(n), e.removeClass(n)), r("up", t, n), !1
			}).bind("keyup", "f", function() {
				return o()(t + "li." + n).removeClass(n), o()(t + "li:first").addClass(n), r("top", t, n), !1
			}).bind("keyup", "l", function() {
				return !window.prevKey && (o()(t + "li." + n).removeClass(n), o()(t + "li:last").addClass(n), r("bottom", t, n), !1)
			}).bind("keyup", "o", function() {
				var e = o()(t + "li.".concat(n, " ").concat(a));
				if (0 === e.length) return !1;
				var i = e.attr("href");
				return i && (window.location.href = i), !1
			}).bind("keyup", "return", function() {
				var e = o()(t + "li.".concat(n, " ").concat(a));
				if (0 === e.length) return !1;
				var i = e.attr("href");
				i && (window.location.href = i)
			})
		},
		l = function(e) {
			if (!Label.userKeyboardShortcutsStatus || "1" === Label.userKeyboardShortcutsStatus) return !1;
			o()(document).bind("keyup", "x", function() {
				return window.prevKey = "x", setTimeout(function() {
					window.prevKey = void 0
				}, 1e3), !1
			}).bind("keyup", "v", function() {
				return window.prevKey = "v", setTimeout(function() {
					window.prevKey = void 0
				}, 1e3), !1
			}).bind("keydown", "r", function() {
				return window.prevKey ? "v" === window.prevKey ? e.vrBom && e.vrBom.click() : "x" === window.prevKey && e.xrQuery && o()(e.xrQuery).click() : e.rEvent && e.rEvent(), !1
			}).bind("keyup", "h", function() {
				return "x" === window.prevKey && e.xhQuery && o()(e.xhQuery).click(), !1
			}).bind("keyup", "t", function() {
				return "x" === window.prevKey && e.xtQuery && o()(e.xtQuery).click(), !1
			}).bind("keyup", "d", function() {
				return "x" === window.prevKey && e.xdQuery && o()(e.xdQuery).click(), !1
			}).bind("keyup", "c", function() {
				return "x" === window.prevKey && e.xcQuery && o()(e.xcQuery).click(), !1
			}).bind("keyup", "m", function() {
				return "x" === window.prevKey && e.xmQuery && o()(e.xmQuery).click(), !1
			}).bind("keyup", "a", function() {
				return "x" === window.prevKey && o()(e.xaLinkQuery).attr("href") && (window.location.href = o()(e.xaLinkQuery).attr("href")), !1
			}).bind("keyup", "m", function() {
				return "v" === window.prevKey && e.vmBom && e.vmBom.click(), !1
			}).bind("keyup", "h", function() {
				return "v" === window.prevKey && e.vhBom && e.vhBom.click(), !1
			}).bind("keyup", "t", function() {
				return "v" === window.prevKey && e.vtBom && e.vtBom.click(), !1
			}).bind("keyup", "d", function() {
				return "v" === window.prevKey && e.vdBom && e.vdBom.click(), !1
			}).bind("keyup", "i", function() {
				return "v" === window.prevKey && e.viBom && e.viBom.click(), !1
			}).bind("keyup", "c", function() {
				return "v" === window.prevKey && e.vcBom && e.vcBom.click(), !1
			}).bind("keyup", "l", function() {
				return "v" === window.prevKey && e.vlBom && e.vlBom.click(), !1
			}).bind("keyup", "e", function() {
				return "v" === window.prevKey && e.veLink ? window.location.href = e.veLink : "x" === window.prevKey && e.xeQuery && o()(e.xeQuery).click(), !1
			}).bind("keyup", "s", function() {
				return "v" === window.prevKey && e.vsBom && e.vsBom.click(), !1
			}).bind("keyup", "a", function() {
				return "v" === window.prevKey && e.vaLink && (window.location.href = e.vaLink), !1
			}).bind("keyup", "p", function() {
				return "v" === window.prevKey && 1 === o()("link[rel=prev]").length && (window.location.href = o()("link[rel=prev]").attr("href")), !1
			}).bind("keyup", "n", function() {
				return "v" === window.prevKey && 1 === o()("link[rel=next]").length && (window.location.href = o()("link[rel=next]").attr("href")), !1
			}).bind("keyup", "o", function() {
				return "x" === window.prevKey && e.xoQuery && o()(e.xoQuery).click(), !1
			})
		},
		s = function(e) {
			if (!Label.userKeyboardShortcutsStatus || "1" === Label.userKeyboardShortcutsStatus) return !1;
			o()(document).bind("keyup", "v", function() {
				return window.prevKey = "v", setTimeout(function() {
					window.prevKey = void 0
				}, 1e3), !1
			}).bind("keyup", "c", function() {
				return "v" === window.prevKey && e.vcBom && e.vcBom.click(), !1
			}).bind("keyup", "a", function() {
				return "v" === window.prevKey && e.vaLink && (window.location.href = e.vaLink), !1
			})
		}
}, function(e, t, n) {
	"use strict";
	n.d(t, "b", function() {
		return c
	}), n.d(t, "a", function() {
		return s
	});
	var a = n(0),
		o = n.n(a),
		i = n(11),
		r = n(1),
		c = function(e, t, n, a, c, s) {
			if (0 !== e.length) {
				var d = Object(i.a)({
					resize: "bottom",
					uploadMax: Math.max(Label.fileMaxSize, Label.imgMaxSize),
					id: t,
					placeholder: Label.breezemoonDescriptionLabel,
					height: 100,
					counter: 512,
					keyup: function(e) {
						window.localStorage.breezemoon = e.target.value
					},
					ctrlEnter: function() {
						e.click()
					},
					hintsBottom: o()(window).height() - 238
				});
				window.localStorage.breezemoon && d.val(window.localStorage.breezemoon), d.focus(), e.click(function() {
					window.b3logEditorIsUploading ? Object(r.a)(Label.uploadingLabel) : (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
						url: Label.servePath + "/breezemoon",
						type: "POST",
						cache: !1,
						headers: {
							csrfToken: e.data("csrftoken")
						},
						data: JSON.stringify({
							breezemoonContent: d.val()
						}),
						success: function(e) {
							0 === e.sc ? (window.localStorage.removeItem("breezemoon"), window.location.reload()) : Object(r.a)(e.msg)
						},
						complete: function() {
							e.css("opacity", 1).removeAttr("disabled")
						}
					}))
				}), c.on("click", ".".concat(n), function() {
					var t = o()(this);
					Object(r.c)(Label.confirmRemoveLabel, function() {
						t.css("opacity", .3).attr("disabled"), o.a.ajax({
							url: Label.servePath + "/breezemoon/" + t.data("id"),
							type: "DELETE",
							headers: {
								csrfToken: e.data("csrftoken")
							},
							cache: !1,
							success: function(e) {
								0 === e.sc ? t.closest("li").remove() : Object(r.a)(e.msg)
							},
							complete: function() {
								t.css("opacity", 1).removeAttr("disabled")
							}
						})
					})
				}), c.on("click", ".".concat(a), function() {
					var t = o()(this),
						n = t.closest("li"),
						a = n.find(".content-reset");
					if (1 === n.find(".breezemoon__edit-panel").length) return a.show(), void n.find(".breezemoon__edit-panel").remove();
					c.find(".breezemoon__edit-panel").remove(), a.hide(), a.after('<div class="breezemoon__edit-panel"><br>\n    <div class="fn-content">\n        <div id="breezemoonUpdateEditor" class="breezemoon__form"></div>\n        <br>\n        <div class="fn__clear">\n            <button class="green btn btn--blue fn__right">'.concat(Label.submitLabel, "</button>\n        </div>\n    </div>\n</div>"));
					var s = Object(i.a)({
						resize: "bottom",
						uploadMax: Math.max(Label.fileMaxSize, Label.imgMaxSize),
						id: "breezemoonUpdateEditor",
						placeholder: Label.breezemoonDescriptionLabel,
						height: 100,
						counter: 512,
						esc: function() {
							t.click()
						},
						ctrlEnter: function() {
							l(a.next().find("button"), t.data("id"), s.val(), e.data("csrftoken"))
						},
						hintsBottom: o()(window).height() - 238
					});
					o.a.ajax({
						url: Label.servePath + "/breezemoon/" + t.data("id") + "/content",
						type: "GET",
						cache: !1,
						headers: {
							csrfToken: e.data("csrftoken")
						},
						success: function(n) {
							0 === n.sc ? (s.val(n.breezemoonContent).focus(), a.next().find("button").click(function() {
								l(o()(this), t.data("id"), s.val(), e.data("csrftoken"))
							})) : Object(r.a)(n.msg)
						}
					})
				}), s && o()(document).bind("keyup", "x", function() {
					return window.prevKey = "x", setTimeout(function() {
						window.prevKey = void 0
					}, 1e3), !1
				}).bind("keydown", "e", function() {
					return "x" === window.prevKey && c.find(".".concat(s, " .").concat(a)).click(), !1
				}).bind("keyup", "o", function() {
					return "x" === window.prevKey && c.find(".".concat(s, " .").concat(n)).click(), !1
				})
			}
		},
		l = function(e, t, n, a) {
			e.css("opacity", .3).attr("disabled"), o.a.ajax({
				url: Label.servePath + "/breezemoon/" + t,
				type: "PUT",
				cache: !1,
				headers: {
					csrfToken: a
				},
				data: JSON.stringify({
					breezemoonContent: n
				}),
				success: function(e) {
					0 === e.sc ? window.location.reload() : Object(r.a)(e.msg)
				},
				complete: function() {
					e.css("opacity", 1).removeAttr("disabled")
				}
			})
		},
		s = function(e, t) {
			0 !== e.length && (t.keypress(function() {
				13 === event.keyCode && e.click()
			}), e.click(function() {
				"disabled" !== e.attr("disabled") && (e.attr("disabled", "disabled").css("opacity", "0.3"), o.a.ajax({
					url: Label.servePath + "/breezemoon",
					type: "POST",
					cache: !1,
					headers: {
						csrfToken: Label.csrfToken
					},
					data: JSON.stringify({
						breezemoonContent: t.val()
					}),
					success: function(e) {
						0 === e.sc ? window.location.reload() : Object(r.a)(e.msg)
					},
					complete: function() {
						e.css("opacity", 1).removeAttr("disabled")
					}
				}))
			}))
		}
}, , , function(e, t, n) {
	"use strict";
	n.r(t);
	var a = n(0),
		o = n.n(a),
		i = (n(25), n(5)),
		r = n(1),
		c = n(4),
		l = n(2),
		s = n(3),
		d = function(e, t) {
			return Math.floor(Math.random() * (t - e) + e)
		},
		u = function(e) {
			var t = '<li><div class="fn__flex">';
			return t += '<a rel="nofollow" href="'.concat(Label.servePath, "/member/").concat(e.ycyAuthorName, '" class="fn__flex-center">\n        <div class="avatar-small avatar header__avatar" style="background-image: url(').concat(e.ycyAuthorThumbnailURL, ');"></div>\n    </a>\n    <span> &nbsp; &nbsp; </span>'), t += '<div class="fn__flex-1 content-reset">'.concat(e.ycyContent, '</div>\n   <span class="fn__pointer fn__flex-center fn__flex-inline ').concat(0 === e.vote ? "ft__red" : "ft__fade", '" data-id="').concat(e.oId, '"><div>&nbsp;</div><span>').concat(0 === e.ycyGoodCnt ? "" : e.ycyGoodCnt, '</span><div>&nbsp;</div><svg><use xlink:href="#iconHeart"></use></svg></span>\n</div></li>')
		},
		h = function() {
			var e = !1,
				t = function() {
					o.a.ajax({
						url: "".concat(Label.servePath, "/ycys?ycyURL=").concat(encodeURIComponent(window.location.href), "&p=1"),
						type: "GET",
						success: function(t) {
							if (0 === t.sc) {
								if (!t.show) return;
								e = !0;
								var n = "<ul>";
								t.ycys.forEach(function(e) {
									n += u(e)
								}), n += '</ul><div class="fn__clear">', t.pagination.paginationPageCount > 1 && (n += '<button class="btn next" data-p="1">'.concat(Label.nextPageLabel, "</button>")), n += '<button class="btn close" data-p="1">'.concat(Label.closeLabel, '</button>\n<div class="fn__left">可以留下任何关于当前 URL 的文字<br>让每个成功的 URL 背后都有一个更大的世界 🌌</div>\n</div>'), Object(i.a)({
									width: o()(window).width() > 768 ? 748 : o()(window).width() - 40,
									height: o()(window).height() - 40,
									title: '<div class="form"><input type="text" placeholder="'.concat(Label.YCYLabel, '"/></div>'),
									className: "dialog--ycy",
									content: n
								}), o()(".dialog input").keypress(function(e) {
									if (Label.isLoggedIn) {
										if (13 === e.keyCode) {
											var t = o()(this);
											t.attr("disabled", "disabled"), o.a.ajax({
												url: "".concat(Label.servePath, "/ycy"),
												type: "POST",
												headers: {
													csrfToken: Label.csrfToken
												},
												data: JSON.stringify({
													ycyURL: encodeURIComponent(window.location.href),
													ycyContent: t.val()
												}),
												success: function(e) {
													0 === e.sc ? (t.val(""), o()(".dialog ul").prepend(u(e.ycy)), Object(l.a)(), Object(l.b)(), Object(s.b)(), Object(s.c)(), Object(s.a)()) : Object(r.a)(e.msg), t.removeAttr("disabled")
												}
											})
										}
									} else Object(c.a)()
								}), o()(".dialog button.next").click(function() {
									var e = o()(this);
									e.attr("disabled", "disabled");
									var t = e.data("p") + 1;
									o.a.ajax({
										url: "".concat(Label.servePath, "/ycys?ycyURL=").concat(encodeURIComponent(window.location.href), "&p=").concat(t),
										type: "GET",
										success: function(n) {
											if (0 === n.sc) {
												e.data("p", t);
												var a = "";
												n.ycys.forEach(function(e) {
													a += u(e)
												}), o()(".dialog ul li").last().after(a), Object(l.a)(), Object(l.b)(), Object(s.b)(), Object(s.c)(), Object(s.a)(), n.pagination.paginationPageCount >= t && e.remove()
											} else Object(r.a)(n.msg);
											e.removeAttr("disabled")
										}
									})
								}), o()(".dialog button.close").click(function() {
									o()(".dialog").remove()
								}), o()(".dialog").on("click", ".fn__pointer", function() {
									if (Label.isLoggedIn) {
										var e = o()(this);
										"disabled" === e.attr("disabled") || e.hasClass("ft__red") || (e.attr("disabled", "disabled").css("opacity", .8), o.a.ajax({
											url: "".concat(Label.servePath, "/vote/up/ycy"),
											type: "POST",
											headers: {
												csrfToken: Label.csrfToken
											},
											data: JSON.stringify({
												dataId: e.data("id")
											}),
											success: function(t) {
												0 === t.sc ? e.addClass("ft__red").find("span").text((parseInt(e.find("span").text()) || 0) + 1) : Object(r.a)(t.msg), e.removeAttr("disabled").css("opacity", 1)
											}
										}))
									} else Object(c.a)()
								}), Object(l.a)(), Object(l.b)(), Object(s.b)(), Object(s.c)(), Object(s.a)()
							} else Object(r.a)(t.msg)
						}
					})
				},
				n = setTimeout(function() {
					t()
				}, d(18e4, 6e5));
			document.addEventListener("visibilitychange", function() {
				"hidden" === document.visibilityState && clearTimeout(n), "visible" !== document.visibilityState || e || (n = setTimeout(function() {
					t()
				}, d(18e4, 6e5)))
			})
		},
		f = function() {
			navigator.serviceWorker.ready.then(function(e) {
				e.pushManager.subscribe({
					userVisibleOnly: !0,
					applicationServerKey: function(e) {
						for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = window.atob(t), a = new Uint8Array(n.length), o = 0; o < n.length; ++o) a[o] = n.charCodeAt(o);
						return a
					}("BMnmI40pZI1Ok7bIpldl6GRqkCX4NYkyDz0UxTWhZ63qz3nb3wzLtPilxTaDbadDjRtrcDD9is4xTYXK-k2hyIE")
				}).then(function(e) {
					return p(e)
				}).
				catch (function(e) {
					"denied" === Notification.permission ? console.warn("Permission for Notifications was denied") : console.error("Unable to subscribe to push.", e)
				})
			})
		},
		p = function(e) {
			return fetch(Label.servePath + "/notifications/web-push/subscription", {
				credentials: "same-origin",
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(e)
			})
		},
		g = n(18),
		b = n.n(g),
		m = function(e) {
			if (e < 1) return !1;
			if ("0" !== Label.userNotifyStatus) return !1;
			if (!("Notification" in window)) return !1;
			if (!("showNotification" in ServiceWorkerRegistration.prototype)) return console.warn("Notifications aren't supported."), !1;
			var t = function(e) {
					var t = new Notification(Label.symphonyLabel, {
						body: Label.desktopNotificationTemplateLabel.replace("${count}", e),
						icon: Label.staticServePath + "/images/faviconH.png"
					});
					t.onclick = t.onerror = function() {
						window.location.href = Label.servePath + "/notifications"
					}
				};
			"granted" === Notification.permission ? t(e) : "denied" !== Notification.permission && Notification.requestPermission(function(n) {
				"granted" === n && t(e)
			})
		},
		v = n(16),
		_ = n(7),
		w = n(9),
		y = n(17),
		k = n(12),
		x = n(8),
		L = n.n(x),
		O = n(6),
		j = n.n(O),
		S = n(13);
	n(24);
	o()(document).ready(function() {
		var e = j()(navigator.userAgent).browser;
		if ("IE" === e.name && 11 === parseInt(e.major)) {
			var t = o()("body.fn__flex-column"),
				n = o()(".main.fn__flex-1");
			1 === t.length && 1 === n.length && (t.removeClass("fn__flex-column"), n.removeClass("fn__flex-1").css("width", "100%"), t.height() < o()(window).height() && (t.addClass("fn__flex-column").css("height", "100%"), n.addClass("fn__flex-1"))), o()(".home__user .user__info > .fn__flex-1").removeClass("fn__flex-1"), 1 === o()("body.article").length && o()("body.article").height() <= o()(window).height() && o()(".article-body").css("min-height", o()(window).height() - 166 - o()(".main").outerHeight() + "px"), o()("<style type='text/css'>\n.home__user--bg > div, .user-card--bg > div{\n    background-color:rgba(255, 255, 255, 0.76);\n }</style>").appendTo("head")
		}
		h(), o()("body").on("click", "#userCardFollowUser", function() {
			var e = o()(this),
				t = e.data("oid");
			e.prop("disabled") || (e.prop("disabled", !0), "follow" === e.data("type") ? Object(w.d)(t, function(t) {
				t.sc && e.text(Label.unfollowLabel).data("type", "unfollow"), e.prop("disabled", !1)
			}) : Object(w.h)(t, function(t) {
				t.sc && e.text(Label.followLabel).data("type", "follow"), e.prop("disabled", !1)
			}))
		}), Object(r.g)(), function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "algoliaSearch";
			if (Label.algoliaAppId) {
				var t = algoliasearch(Label.algoliaAppId, Label.algoliaSearchKey),
					n = t.initIndex("sym_article"),
					a = t.initIndex("sym_user"),
					o = t.initIndex("sym_tag");

				try{
				autocomplete( "#".concat(e), {
					debug: !1,
					templates: {
						dropdownMenu: '<div class="aa-dataset-articles"></div>\n<div class="aa-dataset-users"></div>\n<div class="aa-dataset-tags"></div>'
					}
				}, [{
					source: autocomplete.sources.hits(n, {
						hitsPerPage: 9
					}),
					name: "articles",
					templates: {
						header: '<div class="module-header"><h2><svg><use xlink:href="#iconArticle"></use></svg>'.concat(Label.articleLabel, "</h2></div>"),
						suggestion: function(e) {
							return '<div class="title fn__ellipsis">'.concat(e._highlightResult.articleTitle.value, '</div>\n             <div class="meta fn__ellipsis">\n').concat(e._highlightResult.articleTags.value.replace(/,/g, " "), "\n            </div>")
						},
						empty: '<div class="aa-empty">'.concat(Label.searchEmptyLabel.replace("${key}", Label.articleLabel), "</div>")
					}
				}, {
					source: autocomplete.sources.hits(a, {
						hitsPerPage: 9
					}),
					name: "users",
					templates: {
						header: '<div class="module-header"><h2><svg><use xlink:href="#iconUser"></use></svg>'.concat(Label.statUserLabel, "</h2></div>"),
						suggestion: function(e) {
							return '<div class="fn__flex">\n<img class="avatar list__avatar" src="'.concat(e.userAvatarURL96, '">\n<div class="fn__flex-1">\n<div class="title fn__ellipsis">').concat(e._highlightResult.userName.value, '</div>\n<div class="meta fn__ellipsis">').concat(e._highlightResult.userNickname.value || e._highlightResult.userIntro.value, "</div>\n</div>")
						},
						empty: '<div class="aa-empty">'.concat(Label.searchEmptyLabel.replace("${key}", Label.statUserLabel), "</div>")
					}
				}, {
					source: autocomplete.sources.hits(o, {
						hitsPerPage: 9
					}),
					name: "tags",
					templates: {
						header: '<div class="module-header"><h2><svg><use xlink:href="#iconTags"></use></svg>'.concat(Label.tagLabel, "</h2></div>"),
						suggestion: function(e) {
							var t = '<div class="fn__flex">';
							return "" !== e.tagIconPath && (t += '<img class="avatar list__avatar" src="'.concat(e.tagIconPath, '">')), t += '<div class="fn__flex-1">\n<div class="title fn__ellipsis">'.concat(e._highlightResult.tagTitle.value, '</div>\n<div class="meta fn__ellipsis">').concat(e._highlightResult.tagDescription.value, "</div>\n</div>")
						},
						empty: '<div class="aa-empty">'.concat(Label.searchEmptyLabel.replace("${key}", Label.tagLabel), "</div>")
					}
				}]).on("autocomplete:selected", function(e, t, n) {
					switch (n) {
					case "articles":
						location.href = Label.servePath + t.articlePermalink;
						break;
					case "tags":
						location.href = t.tagURI;
						break;
					case "users":
						location.href = Label.servePath + "/member/" + t.userName
					}
				})

				}catch(e){}

			}
		}(), !1 in navigator || !1 in window || !1 in window || "" === Label.miniPostfix || navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1 || navigator.serviceWorker.getRegistrations().then(function(e) {
			var t = !1,
				n = Label.version.replace(/\./g, ""),
				a = !0,
				o = !1,
				i = void 0;
			try {
				for (var r, c = e[Symbol.iterator](); !(a = (r = c.next()).done); a = !0) {
					var l = r.value;
					t = !0, l.active.scriptURL !== Label.servePath + "/sw.min.js?" + n && l.unregister()
				}
			} catch (e) {
				o = !0, i = e
			} finally {
				try {
					a || null == c.
					return ||c.
					return ()
				} finally {
					if (o) throw i
				}
			}
			t || navigator.serviceWorker.register("/sw.min.js?" + n, {
				scope: "/"
			}).then(function() {
				!1 in window ? console.warn("Push messaging isn't supported.") : navigator.serviceWorker.ready.then(function(e) {
					e.pushManager.getSubscription().then(function(e) {
						e ? p(e) : f()
					}).
					catch (function(e) {
						console.warn("Error during getSubscription()", e)
					})
				})
			})
		}), Object(l.a)(), Object(l.b)();
		try {
			!
			function(e, t) {
				try {
					if (!Label.isLoggedIn && -1 === location.pathname.indexOf("/article/")) return;
					var n = new b.a(Label.userChannelURL, null, {
						reconnectInterval: 1e4
					});
					if (n.onopen = function() {
						setInterval(function() {
							n.send('{"command": "hb"}')
						}, 3e5)
					}, n.onmessage = function(e) {
						var n = JSON.parse(e.data);
						switch (n.command) {
						case "comment":
							t && t.comment && t.comment(n);
							break;
						case "articleHeat":
							t && t.articleHeat && t.articleHeat(n);
							break;
						case "refreshNotification":
							if (!Label.isLoggedIn) return;
							o.a.ajax({
								url: Label.servePath + "/notifications/unread/count",
								type: "GET",
								cache: !1,
								success: function(e) {
									t && t.refreshNotification && t.refreshNotification(e);
									var n = localStorage.getItem("notifyTime"),
										a = localStorage.getItem("notifyCnt");
									!a || parseInt(a) < e.unreadNotificationCnt ? (m(e.unreadNotificationCnt), localStorage.setItem("notifyCnt", e.unreadNotificationCnt), localStorage.setItem("notifyTime", (new Date).getTime())) : (new Date).getTime() - n > 36e5 && (m(e.unreadNotificationCnt), localStorage.setItem("notifyTime", (new Date).getTime()))
								}
							});
							break;
						case "chat":
							t && t.chat && t.chat(n)
						}
					}, !(0 !== e.length && "IntersectionObserver" in window && Label.isLoggedIn)) return !1;
					var a = [],
						i = new IntersectionObserver(function(e) {
							e.forEach(function(e) {
								(void 0 === e.isIntersecting ? 0 !== e.intersectionRatio : e.isIntersecting) && !e.target.getAttribute("data-viewed") && (a.push(e.target.getAttribute("id")), e.target.setAttribute("data-viewed", "true"))
							})
						});
					e.each(function() {
						i.observe(this)
					}), setInterval(function() {
						0 !== a.length && (n.send(JSON.stringify({
							command: "addCmtViews",
							commentIds: a.toString()
						})), a = [])
					}, 5e3)
				} catch (e) {
					console.log("ws error: ", e)
				}
			}(o()("#comments > .list > ul > li"), {
				comment: function(e) {
					var t = parseInt(o()(".comments-header .article-cmt-cnt").text()) + 1;
					if (o()(".comments-header .article-cmt-cnt").text((isNaN(t) ? 1 : t) + " " + Label.cmtLabel), 0 === o()("#comments .list > ul > li").length && o()(".comments-header > .fn-none").show(), 0 === Label.userCommentViewMode ? o()("#comments > .list > ul").append(e.cmtTpl) : o()("#comments > .list > ul").prepend(e.cmtTpl), Object(S.e)("cmt-via"), Label.currentUserName === e.commentAuthorName && Object(_.a)(o()("#" + e.commentId)), "" !== e.commentOriginalCommentId) {
						var n = o()("#" + e.commentOriginalCommentId),
							a = n.find(".comment-action .articleCommentReplyBtn"),
							i = parseInt(o.a.trim(a.text()) || 0) + 1;
						a.html("<span>".concat(i, " ").concat(Label.replyLabel, '&nbsp;</span>\n                            <svg class="icon-chevron-down"><use xlink:href="#iconChevronDown"></use></svg>')).show(), n.find(".comment-replies ul").remove()
					}
					Object(l.a)(), Object(l.b)(), Object(s.b)(), Object(s.c)(), Object(s.a)()
				},
				articleHeat: function(e) {
					var t = o()("#heatBar");
					if (1 === t.length) {
						var n = o()(".heat");
						"+" === e.operation ? (t.append('<i class="point"></i>'), setTimeout(function() {
							n.width(o()(".heat").width() + 3), t.find(".point").remove()
						}, 2e3)) : (n.width(o()(".heat").width() - 3), t.append('<i class="point-remove"></i>'), setTimeout(function() {
							t.find(".point-remove").remove()
						}, 2e3))
					}
					o()(".article-list__item h2 > a").each(function() {
						var t = o()(this).data("id");
						if (t && (t = t.toString(), e.articleId === t)) {
							var n = o()(this).closest("li"),
								a = n.find(".heat");
							"+" === e.operation ? (n.append('<div class="fn-relative"><i class="point"></i></div>'), setTimeout(function() {
								a.width(a.width() + 3), n.find(".point").parent().remove()
							}, 2e3)) : (a.width(a.width() - 3), n.append('<div class="fn-relative"><i class="point-remove"></i></div>'), setTimeout(function() {
								n.find(".point-remove").parent().remove()
							}, 2e3))
						}
					})
				},
				refreshNotification: function(e) {
					Object(_.b)(e)
				},
				chat: function(e) {
					var t = o()(".chats__list");
					0 !== t.length && e.data.chatFromName == o()("#sendChatBtn").data("name") && (t.prepend('<div class="fn__flex">\n    <a href="'.concat(Label.servePath, "/member/").concat(e.data.chatFromName, '">\n        <div aria-name="').concat(e.data.chatFromName, '"\n             class="avatar tooltipped__user"\n             style="background-image: url(').concat(e.data.chatUserAvatarURL, ')"></div>\n    </a>\n    <div class="content-reset content-reset--abstract">\n        ').concat(e.data.chatContent, '\n        <div class="ft__smaller ft__fade fn__right">').concat(e.data.chatCreated, "</div>\n    </div>\n</div>")), t.animate({
						scrollTop: 0
					}, 500))
				}
			})
		} catch (e) {
			console.log("websocket error: ", e)
		}
		Object(r.h)(), Object(r.d)(), Object(l.c)();
		var a = ".content .list > ul > ";
		0 === o()(".content .list > ul > li").length && (a = ".listAjax > ", 0 === o()(".listAjax > li").length && (a = ".content .list > ul > ", 1 === o()("#comments").length && (a = "#comments > .list > ul > "))), Object(v.b)(o()(".search"), a, "focus"), Object(_.e)(), Object(_.d)(), Object(_.c)(), o()("#signOut").click(function() {
			Object(c.f)()
		}), o()("body").on("click", "#navLogin, .commonGoLogin", function() {
			Object(c.a)()
		}), o()("body").on("click", "#navRegister, .commonGoRegister", function() {
			Object(c.b)()
		}), Object(y.a)(o()("#breezemoonPostBtn"), o()("#breezemoonInput")), 1 === o()("#chanibookCode").length && (o()("#chanibookCode").click(function() {
			Object(i.a)({
				width: o()(window).width() > 500 ? 500 : o()(window).width() - 50,
				height: 348,
				content: '<div><img style="margin: 0 auto;display: block;" \n        src="'.concat(Label.staticServePath, '/images/chainbook-weapp.png"></div>')
			})
		}), Object(k.a)({
			selector: "a",
			container: "#chainbook-pjax-container",
			show: "",
			cache: !1,
			storage: !0,
			titleSuffix: "",
			filter: function(e) {
				return 0 > e.indexOf("".concat(Label.servePath, "/chainbook"))
			},
			callback: function(e) {
				Object(l.a)()
			}
		}), L.a.configure({
			showSpinner: !1
		}), o()("#chainbook-pjax-container").bind("pjax.start", function() {
			L.a.start()
		}), o()("#chainbook-pjax-container").bind("pjax.end", function() {
			L.a.done()
		})), 1 === o()("#tags-pjax-container").length && (C(), Object(k.a)({
			selector: "a",
			container: "#tags-pjax-container",
			show: "",
			cache: !1,
			storage: !0,
			titleSuffix: "",
			filter: function(e) {
				return 0 > e.indexOf("".concat(Label.servePath, "/tags"))
			},
			callback: function(e) {
				Object(l.a)(), Object(l.b)(), C()
			}
		}), L.a.configure({
			showSpinner: !1
		}), o()("#tags-pjax-container").bind("pjax.start", function() {
			L.a.start()
		}), o()("#tags-pjax-container").bind("pjax.end", function() {
			L.a.done()
		}))
	});
	var C = function() {
			var e = o()("#followingTags");
			0 !== e.length && e.find("button").click(function() {
				var e = o()(this),
					t = e.data("oid");
				e.prop("disabled") || (e.prop("disabled", !0), "follow" === e.data("type") ? Object(w.c)(t, function(t) {
					t.sc && e.text(Label.unfollowLabel).data("type", "unfollow"), e.prop("disabled", !1)
				}) : Object(w.g)(t, function(t) {
					t.sc && e.text(Label.followLabel).data("type", "follow"), e.prop("disabled", !1)
				}))
			})
		}
}, , function(e, t) {}, , , , , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";
	n.r(t);
	var a = n(0),
		o = n.n(a);
	n(20), n(26);
	o()(document).ready(function() {
		o()(".metro-line .metro-item").each(function() {
			o()(this).height(o()(this).width())
		}), o()(".metro-item .preview").click(function(e) {
			var t = o()(this),
				n = Math.max(t.width(), t.height());
			t.prepend('<span class="ripple" style="top: ' + (e.offsetY - t.height() / 2) + "px;left:" + (e.offsetX - t.width() / 2) + "px;height:" + n + "px;width:" + n + 'px"></span>'), setTimeout(function() {
				t.find(".ripple").remove()
			}, 800)
		})
	})
}]);