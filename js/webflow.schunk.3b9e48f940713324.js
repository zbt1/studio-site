(self.webpackChunk = self.webpackChunk || []).push([
  ["362"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new D.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            Y.test(e) || !K.test(e)
              ? (i = parseInt(e, 10))
              : K.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          X.debug && window && window.console.warn(e);
        }
        var l,
          u,
          c,
          s = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(l, u) {
              function c() {
                var e = new s();
                return a(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              u === n && ((u = l), (l = Object)), (c.Bare = s);
              var d,
                f = (r[e] = l[e]),
                p = (s[e] = c[e] = new r());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (s[e] = c[e] = o(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((d = {}),
                    a(e) ? (d = e.call(c, p, f, c, l)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return a(p.init) || (p.init = l), c;
                }),
                c.open(u)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                  ? t + n
                  : (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          g = /[\-\.0-9]/g,
          y = /[A-Z]/,
          I = "number",
          T = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          h = /(em|cm|mm|in|pt|pc|px|%)$/,
          b = /(deg|rad|turn)$/,
          v = "unitless",
          O = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          R = document.createElement("a"),
          A = ["Webkit", "Moz", "O", "ms"],
          N = ["-webkit-", "-moz-", "-o-", "-ms-"],
          S = function (e) {
            if (e in R.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < A.length; t++)
              if ((n = A[t] + i) in R.style) return { dom: n, css: N[t] + e };
          },
          L = (t.support = {
            bind: Function.prototype.bind,
            transform: S("transform"),
            transition: S("transition"),
            backface: S("backface-visibility"),
            timing: S("transition-timing-function"),
          });
        if (L.transition) {
          var C = L.timing.dom;
          if (((R.style[C] = d["ease-in-back"][0]), !R.style[C]))
            for (var w in f) d[w][0] = f[w];
        }
        var M = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && L.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          F = (t.now =
            (c =
              (u = p.performance) &&
              (u.now || u.webkitNow || u.msNow || u.mozNow)) && L.bind
              ? c.bind(u)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          P = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = Q[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  l = this.props[i];
                return (
                  l || (l = this.props[i] = new r.Bare()),
                  l.init(this.$el, n, a, t),
                  l
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      u.call(this);
                      break;
                    case "stop":
                      l.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  d.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a));
                  var p = this,
                    E = !1,
                    g = {};
                  M(function () {
                    d.call(p, e, function (e) {
                      e.active && ((E = !0), (g[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(g);
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function l(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                s.call(this);
            }
            function u() {
              l.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[L.transition.dom] = n));
            }
            function d(e, t, i) {
              var a,
                r,
                o,
                l,
                u = t !== f,
                c = {};
              for (a in e)
                (o = e[a]),
                  a in $
                    ? (c.transform || (c.transform = {}), (c.transform[a] = o))
                    : (y.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in Q ? (c[a] = o) : (l || (l = {}), (l[a] = o)));
              for (a in c) {
                if (((o = c[a]), !(r = this.props[a]))) {
                  if (!u) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && l && i.call(this, l);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function I(e, n) {
              t[e] = function () {
                return this.children
                  ? T.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function T(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                X.keepInherited && !X.fallback)
              ) {
                var n = H(this.el, "transition");
                n && !O.test(n) && (this.upstream = n);
              }
              L.backface &&
                X.hideBackface &&
                W(this.el, L.backface.css, "hidden");
            }),
              I("add", n),
              I("start", i),
              I("wait", function (e) {
                (e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0));
              }),
              I("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              I("next", a),
              I("stop", l),
              I("set", function (e) {
                l.call(this, e), d.call(this, e, p, g);
              }),
              I("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              I("hide", u),
              I("redraw", c),
              I("destroy", function () {
                l.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          D = s(P, function (t) {
            function n(t, n) {
              var i = e.data(t, E) || e.data(t, E, new P.Bare());
              return i.el || i.init(t), n ? i.start(n) : i;
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          x = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, i) {
              (this.$el = e), (this.el = e[0]);
              var a,
                o,
                l,
                u = t[0];
              n[2] && (u = n[2]),
                z[u] && (u = z[u]),
                (this.name = u),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (l = "ease"),
                  void 0 !== o && (l = o),
                  a in d ? a : l)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = i.unit || this.unit || X.defaultUnit),
                (this.angle = i.angle || this.angle || X.defaultAngle),
                X.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new G({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return H(this.el, this.name);
              }),
              (e.update = function (e) {
                W(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case I:
                    if (r) return e;
                    if (l && "" === e.replace(g, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case T:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case m:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case h:
                    if (r) return e + this.unit;
                    if (l && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case b:
                    if (r) return e + this.angle;
                    if (l && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (r || (l && h.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          k = s(x, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), T));
            };
          }),
          U = s(x, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          V = s(x, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                (a = (r = $[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  $.perspective &&
                    X.perspective &&
                    ((this.current.perspective = X.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new j({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(i));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new j({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    (i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a)));
                  }),
                  i
                );
              });
          }),
          G = s(function (t) {
            function r() {
              var e,
                t,
                n,
                i = u.length;
              if (i)
                for (M(r), t = F(), e = i; e--; ) (n = u[e]) && n.render(t);
            }
            var l = { ease: d.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || l.ease;
              d[t] && (t = d[t][1]),
                "function" != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                i = e.to;
              void 0 === n && (n = l.from),
                void 0 === i && (i = l.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = F()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = F()),
                  (this.active = !0),
                  1 === u.push(this) && M(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, u)) >= 0 &&
                    ((t = u.slice(n + 1)),
                    (u.length = n),
                    t.length && (u = u.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2])
                        ))
                      : Math.round((this.begin + o * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(g, "");
                  i !== e.replace(g, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a);
              });
            var u = [],
              c = 1e3;
          }),
          B = s(G, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          j = s(G, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new G({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          X = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !L.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!L.transition) return (X.fallback = !0);
          X.agentTests.push("(" + e + ")");
          var t = RegExp(X.agentTests.join("|"), "i");
          X.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new G(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var W = e.style,
          H = e.css,
          z = { transform: L.transform && L.transform.css },
          Q = {
            color: [k, T],
            background: [k, T, "background-color"],
            "outline-color": [k, T],
            "border-color": [k, T],
            "border-top-color": [k, T],
            "border-right-color": [k, T],
            "border-bottom-color": [k, T],
            "border-left-color": [k, T],
            "border-width": [x, m],
            "border-top-width": [x, m],
            "border-right-width": [x, m],
            "border-bottom-width": [x, m],
            "border-left-width": [x, m],
            "border-spacing": [x, m],
            "letter-spacing": [x, m],
            margin: [x, m],
            "margin-top": [x, m],
            "margin-right": [x, m],
            "margin-bottom": [x, m],
            "margin-left": [x, m],
            padding: [x, m],
            "padding-top": [x, m],
            "padding-right": [x, m],
            "padding-bottom": [x, m],
            "padding-left": [x, m],
            "outline-width": [x, m],
            opacity: [x, I],
            top: [x, h],
            right: [x, h],
            bottom: [x, h],
            left: [x, h],
            "font-size": [x, h],
            "text-indent": [x, h],
            "word-spacing": [x, h],
            width: [x, h],
            "min-width": [x, h],
            "max-width": [x, h],
            height: [x, h],
            "min-height": [x, h],
            "max-height": [x, h],
            "line-height": [x, v],
            "scroll-top": [U, I, "scrollTop"],
            "scroll-left": [U, I, "scrollLeft"],
          },
          $ = {};
        L.transform &&
          ((Q.transform = [V]),
          ($ = {
            x: [h, "translateX"],
            y: [h, "translateY"],
            rotate: [b],
            rotateX: [b],
            rotateY: [b],
            scale: [I],
            scaleX: [I],
            scaleY: [I],
            skew: [b],
            skewX: [b],
            skewY: [b],
          })),
          L.transform &&
            L.backface &&
            (($.z = [h, "translateZ"]),
            ($.rotateZ = [b]),
            ($.scaleZ = [I]),
            ($.perspective = [m]));
        var Y = /ms/,
          K = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        l,
        u,
        c,
        s,
        d,
        f,
        p,
        E,
        g,
        y,
        I,
        T,
        m,
        h,
        b,
        v,
        O = window.$,
        _ = n(5487) && O.tram;
      ((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (l = Function.prototype),
        r.push,
        (u = r.slice),
        r.concat,
        o.toString,
        (c = o.hasOwnProperty),
        (s = r.forEach),
        (d = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (E = r.indexOf),
        r.lastIndexOf,
        (g = Object.keys),
        l.bind,
        (y =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var l = i.keys(e), r = 0, o = l.length; r < o; r++)
                  if (t.call(n, e[l[r]], l[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
              ? e.map(t, n)
              : (y(e, function (e, a, r) {
                  i.push(t.call(n, e, a, r));
                }),
                i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              I(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
              ? e.filter(t, n)
              : (y(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          }),
        (I =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                ? e.some(t, n)
                : (y(e, function (e, i, o) {
                    if (r || (r = t.call(n, e, i, o))) return a;
                  }),
                  !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : I(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = u.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(u.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              _.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            l,
            u,
            c = function () {
              var s = i.now() - l;
              s < t
                ? (a = setTimeout(c, t - s))
                : ((a = null), n || ((u = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (l = i.now());
            var s = n && !a;
            return (
              a || (a = setTimeout(c, t)),
              s && ((u = e.apply(o, r)), (o = r = null)),
              u
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return c.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (T = /(.)^/),
        (m = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (h = /\\|'|\r|\n|\u2028|\u2029/g),
        (b = function (e) {
          return "\\" + m[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || T)
                  .source,
                (t.interpolate || T).source,
                (t.evaluate || T).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            l = "__p+='";
          e.replace(r, function (t, n, i, a, r) {
            return (
              (l += e.slice(o, r).replace(h, b)),
              (o = r + t.length),
              n
                ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (l += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (l += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (l += "';\n");
          var u = t.variable;
          if (u) {
            if (!v.test(u))
              throw Error("variable is not a bare identifier: " + u);
          } else (l = "with(obj||{}){\n" + l + "}\n"), (u = "obj");
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", l);
          } catch (e) {
            throw ((e.source = l), e);
          }
          var c = function (e) {
            return a.call(this, e, i);
          };
          return (c.source = "function(" + u + "){\n" + l + "}"), c;
        }),
        (e.exports = i);
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            l = window.location,
            u = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              a = i.env("editor");
            if (n) {
              a && e.remove();
              return;
            }
            e.length && e.remove(), a || o.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
                f &&
                  !u &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      ""
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        ""
                      )
                      .attr("alt", "")
                      .css({ marginRight: "0px", width: "0px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        ""
                      )
                      .attr("alt", "")),
                    n.append(i, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(a).off(c, s).on(c, s));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            l = document.location,
            u = "hashchange",
            c =
              n.load ||
              function () {
                var t, n, i;
                (a = !0),
                  (window.WebflowEditor = !0),
                  r.off(u, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    E(n, i), t(!1);
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !a && /\?edit/.test(l.hash) && c();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            s
              ? c()
              : l.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                  /\?edit$/.test(l.href)) &&
                c()
              : r.on(u, d).triggerHandler(u),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function l() {
                      t = !1;
                    }
                    function u() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", c),
                        document.removeEventListener("mousedown", c),
                        document.removeEventListener("mouseup", c),
                        document.removeEventListener("pointermove", c),
                        document.removeEventListener("pointerdown", c),
                        document.removeEventListener("pointerup", c),
                        document.removeEventListener("touchmove", c),
                        document.removeEventListener("touchstart", c),
                        document.removeEventListener("touchend", c));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", l, !0),
                      document.addEventListener("pointerdown", l, !0),
                      document.addEventListener("touchstart", l, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), u());
                        },
                        !0
                      ),
                      u(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, l;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (l = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === l && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            (a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          (i = []), t.extend(n.triggers, r);
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var r = window.jQuery,
        o = {},
        l = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        l = [],
        u = window.Webflow || [],
        c = window.jQuery,
        s = c(window),
        d = c(document),
        f = c.isFunction,
        p = (r._ = n(5756)),
        E = (r.tram = n(5487) && c.tram),
        g = !1,
        y = !1;
      function I(e) {
        r.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) return e.ready();
              p.contains(l, e.ready) || l.push(e.ready);
            })(e);
      }
      function T(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && T(o[e]);
          var i = (o[e] = t(c, p, n) || {});
          return I(i), i;
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (g) {
            f(e) && e();
            return;
          }
          u.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var m = navigator.userAgent.toLowerCase(),
        h = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        b = (r.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        v = (r.env.ios = /(ipod|iphone|ipad)/.test(m));
      (r.env.safari = /safari/.test(m) && !b && !v),
        h &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = h
          ? function (e) {
              return e === i || c.contains(e, i);
            }
          : function () {
              return !0;
            });
      var O = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + O;
      function R(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function A(e) {
        f(e) && e();
      }
      function N() {
        a && (a.reject(), s.off("load", a.resolve)),
          (a = new c.Deferred()),
          s.on("load", a.resolve);
      }
      (r.resize = R(s, O)),
        (r.scroll = R(s, _)),
        (r.redraw = R()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          (g = !0),
            y ? ((y = !1), p.each(o, I)) : p.each(l, A),
            p.each(u, A),
            r.resize.up();
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          (e = e || {}),
            (y = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(o, T),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (l = []),
            (u = []),
            "pending" === a.state() && N();
        }),
        c(r.ready),
        N(),
        (e.exports = window.Webflow = r);
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            l = e(window),
            u = i.env(),
            c = window.location,
            s = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = l.scrollTop(),
              n = l.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  l = 0.5 * n,
                  u = a.is(":visible") && r + o - l >= e && r + l <= e + n;
                t.active !== u && ((t.active = u), g(i, d, u));
              }
            });
          }
          function g(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (n = u && i.env("design")),
                    (r = i.env("slug") || c.pathname || ""),
                    i.scroll.off(E),
                    (a = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === c.host + c.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var l = e(s.hash);
                            l.length && a.push({ link: o, sec: l, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            g(
                              o,
                              d,
                              s.href === c.href ||
                                i === r ||
                                (f.test(i) && p.test(r))
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(E), E());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            l = e(document.body),
            u =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = i.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function y(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function I(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var c =
                E.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== c) {
                var d,
                  f = e(c);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = c),
                  n.hash !== d &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== d &&
                    a.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(s),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              l = t.outerHeight();
                            l < o && (a -= Math.round((o - l) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              g.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              l.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          c = Date.now(),
                          d = function () {
                            var e,
                              t,
                              r,
                              l,
                              s,
                              f = Date.now() - c;
                            window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (l = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = r / l) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= o ? u(d) : "function" == typeof n && n();
                          };
                        u(d);
                      }
                    })(f, function () {
                      y(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        y(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              o.on(n, f, I),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function u(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function c(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var i,
                  u,
                  c,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - a;
                (a = p),
                  Math.abs(E) > l &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (u = t),
                    (c = { direction: E > 0 ? "right" : "left" }),
                    (s = e.Event(i, { originalEvent: u })),
                    e(u.target).trigger(s, c),
                    d());
              }
            }
            function s(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function d() {
              r = !1;
            }
            t.addEventListener("touchstart", u, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", u, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", u, !1),
                  t.removeEventListener("touchmove", c, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", u, !1),
                  t.removeEventListener("mousemove", c, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    9858: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        o = /^#[a-zA-Z0-9\-_]+$/;
      i.define(
        "dropdown",
        (e.exports = function (e, t) {
          var n,
            l,
            u = t.debounce,
            c = {},
            s = i.env(),
            d = !1,
            f = i.env.touch,
            p = ".w-dropdown",
            E = "w--open",
            g = a.triggers,
            y = "focusout" + p,
            I = "keydown" + p,
            T = "mouseenter" + p,
            m = "mousemove" + p,
            h = "mouseleave" + p,
            b = (f ? "click" : "mouseup") + p,
            v = "w-close" + p,
            O = "setting" + p,
            _ = e(document);
          function R() {
            (n = s && i.env("design")), (l = _.find(p)).each(A);
          }
          function A(t, a) {
            var l,
              c,
              d,
              f,
              g,
              m,
              h,
              R,
              A,
              M,
              F = e(a),
              P = e.data(a, p);
            P ||
              (P = e.data(a, p, {
                open: !1,
                el: F,
                config: {},
                selectedIdx: -1,
              })),
              (P.toggle = P.el.children(".w-dropdown-toggle")),
              (P.list = P.el.children(".w-dropdown-list")),
              (P.links = P.list.find("a:not(.w-dropdown .w-dropdown a)")),
              (P.complete =
                ((l = P),
                function () {
                  l.list.removeClass(E),
                    l.toggle.removeClass(E),
                    l.manageZ && l.el.css("z-index", "");
                })),
              (P.mouseLeave =
                ((c = P),
                function () {
                  (c.hovering = !1), c.links.is(":focus") || C(c);
                })),
              (P.mouseUpOutside =
                ((d = P).mouseUpOutside && _.off(b, d.mouseUpOutside),
                u(function (t) {
                  if (d.open) {
                    var n = e(t.target);
                    if (!n.closest(".w-dropdown-toggle").length) {
                      var a = -1 === e.inArray(d.el[0], n.parents(p)),
                        r = i.env("editor");
                      if (a) {
                        if (r) {
                          var o =
                              1 === n.parents().length &&
                              1 === n.parents("svg").length,
                            l = n.parents(
                              ".w-editor-bem-EditorHoverControls"
                            ).length;
                          if (o || l) return;
                        }
                        C(d);
                      }
                    }
                  }
                }))),
              (P.mouseMoveOutside =
                ((f = P),
                u(function (t) {
                  if (f.open) {
                    var n = e(t.target);
                    if (-1 === e.inArray(f.el[0], n.parents(p))) {
                      var i = n.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length,
                        a = n.parents(".w-editor-bem-RTToolbar").length,
                        r = e(".w-editor-bem-EditorOverlay"),
                        o =
                          r.find(".w-editor-edit-outline").length ||
                          r.find(".w-editor-bem-RTToolbar").length;
                      if (i || a || o) return;
                      (f.hovering = !1), C(f);
                    }
                  }
                }))),
              N(P);
            var D = P.toggle.attr("id"),
              x = P.list.attr("id");
            D || (D = "w-dropdown-toggle-" + t),
              x || (x = "w-dropdown-list-" + t),
              P.toggle.attr("id", D),
              P.toggle.attr("aria-controls", x),
              P.toggle.attr("aria-haspopup", "menu"),
              P.toggle.attr("aria-expanded", "false"),
              P.toggle
                .find(".w-icon-dropdown-toggle")
                .attr("aria-hidden", "true"),
              "BUTTON" !== P.toggle.prop("tagName") &&
                (P.toggle.attr("role", "button"),
                P.toggle.attr("tabindex") || P.toggle.attr("tabindex", "0")),
              P.list.attr("id", x),
              P.list.attr("aria-labelledby", D),
              P.links.each(function (e, t) {
                t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                  o.test(t.hash) &&
                    t.addEventListener("click", C.bind(null, P));
              }),
              P.el.off(p),
              P.toggle.off(p),
              P.nav && P.nav.off(p);
            var k = S(P, !0);
            n &&
              P.el.on(
                O,
                ((g = P),
                function (e, t) {
                  (t = t || {}),
                    N(g),
                    !0 === t.open && L(g),
                    !1 === t.open && C(g, { immediate: !0 });
                })
              ),
              n ||
                (s && ((P.hovering = !1), C(P)),
                P.config.hover &&
                  P.toggle.on(
                    T,
                    ((m = P),
                    function () {
                      (m.hovering = !0), L(m);
                    })
                  ),
                P.el.on(v, k),
                P.el.on(
                  I,
                  ((h = P),
                  function (e) {
                    if (!n && h.open)
                      switch (
                        ((h.selectedIdx = h.links.index(
                          document.activeElement
                        )),
                        e.keyCode)
                      ) {
                        case r.HOME:
                          if (!h.open) return;
                          return (h.selectedIdx = 0), w(h), e.preventDefault();
                        case r.END:
                          if (!h.open) return;
                          return (
                            (h.selectedIdx = h.links.length - 1),
                            w(h),
                            e.preventDefault()
                          );
                        case r.ESCAPE:
                          return C(h), h.toggle.focus(), e.stopPropagation();
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                          return (
                            (h.selectedIdx = Math.min(
                              h.links.length - 1,
                              h.selectedIdx + 1
                            )),
                            w(h),
                            e.preventDefault()
                          );
                        case r.ARROW_LEFT:
                        case r.ARROW_UP:
                          return (
                            (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                            w(h),
                            e.preventDefault()
                          );
                      }
                  })
                ),
                P.el.on(
                  y,
                  ((R = P),
                  u(function (e) {
                    var { relatedTarget: t, target: n } = e,
                      i = R.el[0];
                    return (
                      i.contains(t) || i.contains(n) || C(R),
                      e.stopPropagation()
                    );
                  }))
                ),
                P.toggle.on(b, k),
                P.toggle.on(
                  I,
                  ((M = S((A = P), !0)),
                  function (e) {
                    if (!n) {
                      if (!A.open)
                        switch (e.keyCode) {
                          case r.ARROW_UP:
                          case r.ARROW_DOWN:
                            return e.stopPropagation();
                        }
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return M(), e.stopPropagation(), e.preventDefault();
                      }
                    }
                  })
                ),
                (P.nav = P.el.closest(".w-nav")),
                P.nav.on(v, k));
          }
          function N(e) {
            var t = Number(e.el.css("z-index"));
            (e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: "true" === e.el.attr("data-hover") && !f,
                delay: e.el.attr("data-delay"),
              });
          }
          function S(e, t) {
            return u(function (n) {
              if (e.open || (n && "w-close" === n.type))
                return C(e, { forceClose: t });
              L(e);
            });
          }
          function L(t) {
            if (!t.open) {
              (a = t.el[0]),
                l.each(function (t, n) {
                  var i = e(n);
                  i.is(a) || i.has(a).length || i.triggerHandler(v);
                }),
                (t.open = !0),
                t.list.addClass(E),
                t.toggle.addClass(E),
                t.toggle.attr("aria-expanded", "true"),
                g.intro(0, t.el[0]),
                i.redraw.up(),
                t.manageZ && t.el.css("z-index", 901);
              var a,
                r = i.env("editor");
              n || _.on(b, t.mouseUpOutside),
                t.hovering && !r && t.el.on(h, t.mouseLeave),
                t.hovering && r && _.on(m, t.mouseMoveOutside),
                window.clearTimeout(t.delayId);
            }
          }
          function C(e, { immediate: t, forceClose: n } = {}) {
            if (e.open && (!e.config.hover || !e.hovering || n)) {
              e.toggle.attr("aria-expanded", "false"), (e.open = !1);
              var i = e.config;
              if (
                (g.outro(0, e.el[0]),
                _.off(b, e.mouseUpOutside),
                _.off(m, e.mouseMoveOutside),
                e.el.off(h, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !i.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, i.delay);
            }
          }
          function w(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return (
            (c.ready = R),
            (c.design = function () {
              d &&
                _.find(p).each(function (t, n) {
                  e(n).triggerHandler(v);
                }),
                (d = !1),
                R();
            }),
            (c.preview = function () {
              (d = !0), R();
            }),
            c
          );
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return V;
        },
        clearRequested: function () {
          return D;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return x;
        },
        eventStateChanged: function () {
          return U;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return X;
        },
        instanceStarted: function () {
          return j;
        },
        mediaQueriesDefined: function () {
          return Q;
        },
        parameterChanged: function () {
          return G;
        },
        playbackRequested: function () {
          return F;
        },
        previewRequested: function () {
          return M;
        },
        rawDataImported: function () {
          return S;
        },
        sessionInitialized: function () {
          return L;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return w;
        },
        stopRequested: function () {
          return P;
        },
        testFrameRendered: function () {
          return k;
        },
        viewportWidthChanged: function () {
          return z;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: u,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: g,
          IX2_TEST_FRAME_RENDERED: y,
          IX2_EVENT_STATE_CHANGED: I,
          IX2_ANIMATION_FRAME_CHANGED: T,
          IX2_PARAMETER_CHANGED: m,
          IX2_INSTANCE_ADDED: h,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: A,
        } = r.IX2EngineActionTypes,
        { reifyState: N } = o.IX2VanillaUtils,
        S = (e) => ({ type: l, payload: { ...N(e) } }),
        L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: u,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: c }),
        w = () => ({ type: s }),
        M = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        F = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: l,
          verbose: u,
          rawData: c,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: l,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: u,
            rawData: c,
          },
        }),
        P = (e) => ({ type: p, payload: { actionListId: e } }),
        D = () => ({ type: E }),
        x = (e, t) => ({ type: g, payload: { target: e, listenerParams: t } }),
        k = (e = 1) => ({ type: y, payload: { step: e } }),
        U = (e, t) => ({ type: I, payload: { stateKey: e, newState: t } }),
        V = (e, t) => ({ type: T, payload: { now: e, parameters: t } }),
        G = (e, t) => ({ type: m, payload: { key: e, value: t } }),
        B = (e) => ({ type: h, payload: { ...e } }),
        j = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
        X = (e) => ({ type: v, payload: { instanceId: e } }),
        W = (e, t, n, i) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        z = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t },
        }),
        Q = () => ({ type: A });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          actions: function () {
            return c;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = n(9516),
        l = (i = n(7243)) && i.__esModule ? i : { default: i },
        u = n(1970),
        c = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(l.default);
      function f(e) {
        e() && (0, u.observeRequests)(d);
      }
      function p(e) {
        E(), (0, u.startEngine)({ store: d, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, u.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return m;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return y;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return I;
        },
        isSiblingNode: function () {
          return h;
        },
        matchSelector: function () {
          return g;
        },
        queryDocument: function () {
          return T;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: l } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: u,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: s,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function g(e) {
        return (t) => t[l](e);
      }
      function y({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(u)) {
            let n = e.split(u),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function I(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function T(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function m(e, t) {
        return e.contains(t);
      }
      function h(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function b(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[l] && n[l](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return q;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ei;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ea;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = T(n(9777)),
        o = T(n(4738)),
        l = T(n(4659)),
        u = T(n(3452)),
        c = T(n(6633)),
        s = T(n(3729)),
        d = T(n(2397)),
        f = T(n(5082)),
        p = n(7087),
        E = n(9468),
        g = n(3946),
        y = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = m(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(5012)),
        I = T(n(8955));
      function T(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function m(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (m = function (e) {
          return e ? n : t;
        })(e);
      }
      let h = Object.keys(p.QuickEffectIds),
        b = (e) => h.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: _,
          RENDER_GENERAL: R,
          W_MOD_IX: A,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: N,
          getElementId: S,
          getDestinationValues: L,
          observeStore: C,
          getInstanceId: w,
          renderHTMLElement: M,
          clearAllStyles: F,
          getMaxDurationItemIndex: P,
          getComputedStyle: D,
          getInstanceOrigin: x,
          reduceListToGroup: k,
          shouldNamespaceEventParameter: U,
          getNamespacedParameterId: V,
          shouldAllowMediaQuery: G,
          cleanupHTMLElement: B,
          clearObjectCache: j,
          stringifyTarget: X,
          mediaQueriesEqual: W,
          shallowEqual: H,
        } = E.IX2VanillaUtils,
        {
          isPluginType: z,
          createPluginInstance: Q,
          getPluginDuration: $,
        } = E.IX2VanillaPlugins,
        Y = navigator.userAgent,
        K = Y.match(/iPad/i) || Y.match(/iPhone/);
      function q(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let i = () => {
          ei({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(i, 0) : i();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: l,
            testManual: u,
            verbose: c = !0,
          } = e,
          { rawData: s } = e;
        if (i && a && s && l) {
          let e = s.actionLists[i];
          e && (s = k({ actionList: e, actionItemId: a, rawData: s }));
        }
        if (
          (ei({ store: t, rawData: s, allowEvents: o, testManual: u }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
        ) {
          ep({ store: t, actionListId: i }),
            ed({ store: t, actionListId: i, eventId: r });
          let e = eE({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: l,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, g.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !l,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ea(t);
      }
      function en(e, t) {
        ea(t), F({ store: t, elementApi: y });
      }
      function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, g.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, g.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(O),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              el(e),
                (0, d.default)(n, (t, n) => {
                  let i = I.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!K) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = y.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: u } = t.getState(),
                      { actionLists: c } = u,
                      s = eu(n, es);
                    if (!(0, l.default)(s)) return;
                    (0, d.default)(s, (e, i) => {
                      let a = n[i],
                        {
                          action: l,
                          id: s,
                          mediaQueries: d = u.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = l.config;
                      W(d, u.mediaQueryKeys) ||
                        t.dispatch((0, g.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                c,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              l = (0, r.default)(a, ({ id: e }) => e === i),
                              u = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            l &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: l,
                                  smoothing: u,
                                  restingValue: c,
                                }) {
                                  let { ixData: s, ixSession: d } =
                                      e.getState(),
                                    { events: f } = s,
                                    E = f[i],
                                    { eventTypeId: g } = E,
                                    I = {},
                                    T = {},
                                    m = [],
                                    { continuousActionGroups: h } = l,
                                    { id: b } = l;
                                  U(g, a) && (b = V(t, b));
                                  let _ =
                                    d.hasBoundaryNodes && n
                                      ? y.getClosestElement(n, O)
                                      : null;
                                  h.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? _ : null,
                                        o = X(a) + v + i;
                                      if (
                                        ((T[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0)
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(T[o], t, e)),
                                        !I[o])
                                      ) {
                                        I[o] = !0;
                                        let { config: t } = e;
                                        N({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: y,
                                        }).forEach((e) => {
                                          m.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    m.forEach(({ element: t, key: n }) => {
                                      let a = T[n],
                                        l = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = l,
                                        d = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : z(s)
                                        )
                                          ? Q(s)?.(t, l)
                                          : null,
                                        f = L(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: y,
                                          },
                                          d
                                        );
                                      eg({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: l,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: b,
                                        actionGroups: a,
                                        smoothing: u,
                                        restingValue: c,
                                        pluginInstance: d,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + v + i,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: l,
                                  smoothing: u,
                                  restingValue: d,
                                });
                              });
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          b(l.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: s });
                    });
                    let E = (e) => {
                        let { ixSession: i } = t.getState();
                        ec(s, (r, o, l) => {
                          let c = n[o],
                            s = i.eventState[l],
                            { action: d, mediaQueries: f = u.mediaQueryKeys } =
                              c;
                          if (!G(f, i.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: c,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: l,
                              },
                              s
                            );
                            H(i, s) ||
                              t.dispatch((0, g.eventStateChanged)(l, i));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      I = (0, f.default)(E, 12),
                      T = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? I : E;
                            e.addEventListener(n, a),
                              t.dispatch((0, g.eventListenerAdded)(e, [n, a]));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(T)
                      : "string" == typeof i && T(e);
                  })({ logic: i, store: e, events: t });
                });
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e);
                  };
                  eo.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, g.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(A) && (e.className += ` ${A}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ea(e),
                    F({ store: e, elementApi: y }),
                    ei({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, g.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, g.animationFrameChanged)(i, r)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i);
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(er), j(), e.dispatch((0, g.sessionStopped)());
        }
      }
      function er({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function el(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, g.viewportWidthChanged)({ width: i, mediaQueries: t })
          );
        }
      }
      let eu = (e, t) => (0, u.default)((0, s.default)(e, t), c.default),
        ec = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + v + i);
            });
          });
        },
        es = (e) =>
          N({
            config: { target: e.target, targets: e.targets },
            elementApi: y,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: l } = i,
          u = l[n],
          c = r[t];
        if (c && c.useFirstGroupAsInitialState) {
          let r = (0, o.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !G(
              (0, o.default)(u, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = N({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: u.target, targets: u.targets }
                    : a,
                event: u,
                elementApi: y,
              }),
              l = z(r);
            o.forEach((a) => {
              let o = l ? Q(r)?.(a, i) : null;
              eg({
                destination: L({ element: a, actionItem: i, elementApi: y }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            ey(t, e),
              i &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: l } = e.getState(),
          u = l.hasBoundaryNodes && n ? y.getClosestElement(n, O) : null;
        (0, d.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            l = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && l) {
            if (u && r && !y.elementContains(u, n.element)) return;
            ey(n, e),
              n.verbose &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: l,
        verbose: u,
      }) {
        let { ixData: c, ixSession: s } = e.getState(),
          { events: d } = c,
          f = d[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: g } = (0,
          o.default)(c, `actionLists.${a}`, {});
        if (!E || !E.length) return !1;
        r >= E.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && g && r++;
        let I =
            (0 === r || (1 === r && g)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          T = (0, o.default)(E, [r, "actionItems"], []);
        if (!T.length || !G(p, s.mediaQueryKey)) return !1;
        let m = s.hasBoundaryNodes && n ? y.getClosestElement(n, O) : null,
          h = P(T),
          v = !1;
        return (
          T.forEach((o, c) => {
            let { config: s, actionTypeId: d } = o,
              p = z(d),
              { target: E } = s;
            E &&
              N({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? m : null,
                elementApi: y,
              }).forEach((s, f) => {
                let E = p ? Q(d)?.(s, o) : null,
                  g = p ? $(d)(s, o) : null;
                v = !0;
                let T = D({ element: s, actionItem: o }),
                  m = L({ element: s, actionItem: o, elementApi: y }, E);
                eg({
                  store: e,
                  element: s,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: h === c && 0 === f,
                  computedStyle: T,
                  destination: m,
                  immediate: l,
                  verbose: u,
                  pluginInstance: E,
                  pluginDuration: g,
                  instanceDelay: I,
                });
              });
          }),
          v
        );
      }
      function eg(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: l,
            pluginInstance: u,
            continuous: c,
            restingValue: s,
            eventId: d,
          } = a,
          f = w(),
          { ixElements: E, ixSession: I, ixData: T } = n.getState(),
          m = S(E, r),
          { refState: h } = E[m] || {},
          b = y.getRefType(r),
          v = I.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (v && c)
          switch (T.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let O = x(r, h, i, o, y, u);
        if (
          (n.dispatch(
            (0, g.instanceAdded)({
              instanceId: f,
              elementId: m,
              origin: O,
              refType: b,
              skipMotion: v,
              skipToValue: t,
              ...a,
            })
          ),
          eI(document.body, "ix2-animation-started", f),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, g.instanceStarted)(t, 0)),
              e.dispatch((0, g.animationFrameChanged)(performance.now(), n));
            let { ixInstances: i } = e.getState();
            eT(i[t], e);
          })(n, f);
        C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eT }),
          c || n.dispatch((0, g.instanceStarted)(f, I.tick));
      }
      function ey(e, t) {
        eI(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        o === _ && B(r, i, y), t.dispatch((0, g.instanceRemoved)(e.id));
      }
      function eI(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
      }
      function eT(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: l,
            renderType: u,
            current: c,
            groupIndex: s,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: I,
            styleProp: T,
            verbose: m,
            pluginInstance: h,
          } = e,
          { ixData: b, ixSession: v } = t.getState(),
          { events: O } = b,
          { mediaQueries: A = b.mediaQueryKeys } = O && O[d] ? O[d] : {};
        if (G(A, v.mediaQueryKey) && (i || n || a)) {
          if (c || (u === R && a)) {
            t.dispatch((0, g.elementStateChanged)(r, l, c, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              s = a && a[l];
            (i === _ || z(l)) && M(n, a, s, d, o, T, y, u, h);
          }
          if (a) {
            if (I) {
              let e = eE({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: s + 1,
                verbose: m,
              });
              m &&
                !e &&
                t.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            ey(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let a = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        l = n(7087),
        u = n(1970),
        c = n(3946),
        s = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: g,
          MOUSE_OVER: y,
          MOUSE_OUT: I,
          DROPDOWN_CLOSE: T,
          DROPDOWN_OPEN: m,
          SLIDER_ACTIVE: h,
          SLIDER_INACTIVE: b,
          TAB_ACTIVE: v,
          TAB_INACTIVE: O,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: A,
          PAGE_SCROLL_DOWN: N,
          SCROLL_INTO_VIEW: S,
          SCROLL_OUT_OF_VIEW: L,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: w,
          PAGE_FINISH: M,
          ECOMMERCE_CART_CLOSE: F,
          ECOMMERCE_CART_OPEN: P,
          PAGE_START: D,
          PAGE_SCROLL: x,
        } = l.EventTypeConsts,
        k = "COMPONENT_ACTIVE",
        U = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: V } = l.IX2EngineConstants,
        { getNamespacedParameterId: G } = s.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        j = B(({ element: e, nativeEvent: t }) => e === t.target),
        X = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, a.default)([j, X]),
        H = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !ee[a.eventTypeId]) return a;
          }
          return null;
        },
        z = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!H(e, i);
        },
        Q = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: l } = t,
            { actionListId: c, autoStopEventId: s } = o.config,
            d = H(e, s);
          return (
            d &&
              (0, u.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + V + i.split(V)[1],
                actionListId: (0, r.default)(d, "action.config.actionListId"),
              }),
            (0, u.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            (0, u.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            a
          );
        },
        $ = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
        Y = { handler: $(W, Q) },
        K = { ...Y, types: [k, U].join(" ") },
        q = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: q },
        ee = { PAGE_START: D, PAGE_FINISH: M },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ei = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        ea = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = et(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        er = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [k, U].indexOf(i) ? i === k : n.isActive,
            r = { ...n, isActive: a };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        eo = (e) => (t, n) => {
          let i = { elementHovered: ei(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        el =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: l } = et(),
              {
                event: { config: u, eventTypeId: c },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: d } = u,
              f = o - l,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === d ? s : (l * (s || 0)) / 100) / f,
              g = 0;
            n &&
              ((i = p > n.percentTop),
              (g = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let y = c === N ? p >= g + E : p <= g - E,
              I = {
                ...n,
                percentTop: p,
                inBounds: y,
                anchorTop: g,
                scrollingDown: i,
              };
            return (n && y && (a || I.inBounds !== n.inBounds) && e(t, I)) || I;
          },
        eu = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ec =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        es = (e = !0) => ({
          ...K,
          handler: $(
            e ? W : j,
            er((e, t) => (t.isActive ? Y.handler(e, t) : t))
          ),
        }),
        ed = (e = !0) => ({
          ...K,
          handler: $(
            e ? W : j,
            er((e, t) => (t.isActive ? t : Y.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === S) === n
                ? (Q(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ea(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [h]: es(),
          [b]: ed(),
          [m]: es(),
          [T]: ed(),
          [R]: es(!1),
          [_]: ed(!1),
          [v]: es(),
          [O]: ed(),
          [P]: { types: "ecommerce-cart-open", handler: $(W, Q) },
          [F]: { types: "ecommerce-cart-close", handler: $(W, Q) },
          [f]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                z(e) ? 1 === t && Q(e) : Q(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                2 === t && Q(e);
              })
            ),
          },
          [E]: { ...Y, types: "mousedown" },
          [g]: { ...Y, types: "mouseup" },
          [y]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered && Q(e);
              })
            ),
          },
          [I]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered || Q(e);
              })
            ),
          },
          [A]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: u,
                  continuousParameterGroupId: s,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: E = r.clientY,
                  pageX: g = r.pageX,
                  pageY: y = r.pageY,
                } = i,
                I = "X_AXIS" === u,
                T = "mouseout" === i.type,
                m = f / 100,
                h = s,
                b = !1;
              switch (o) {
                case l.EventBasedOn.VIEWPORT:
                  m = I
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = et();
                  m = I ? Math.min(e + g, n) / n : Math.min(t + y, i) / i;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  h = G(a, s);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== W({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: l, height: u } = n;
                  if (!e && !eu({ left: p, top: E }, n)) break;
                  (b = !0), (m = I ? (p - r) / l : (E - o) / u);
                }
              }
              return (
                T && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (o !== l.EventBasedOn.ELEMENT || b || b !== r.elementHovered) &&
                  ((m = d ? 1 - m : m),
                  e.dispatch((0, c.parameterChanged)(h, m))),
                {
                  elementHovered: b,
                  clientX: p,
                  clientY: E,
                  pageX: g,
                  pageY: y,
                }
              );
            },
          },
          [x]: {
            types: q,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = et(),
                l = a / (r - o);
              (l = i ? 1 - l : l), e.dispatch((0, c.parameterChanged)(n, l));
            },
          },
          [w]: {
            types: q,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: u,
                  scrollHeight: s,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: g,
                  startsExiting: y,
                  addEndOffset: I,
                  addStartOffset: T,
                  addOffsetValue: m = 0,
                  endOffsetValue: h = 0,
                } = n;
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / u : o / s;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = G(i, E),
                  r = e.getBoundingClientRect(),
                  o = (T ? m : 0) / 100,
                  l = (I ? h : 0) / 100;
                (o = g ? o : 1 - o), (l = y ? l : 1 - l);
                let u = r.top + Math.min(r.height * o, d),
                  f = Math.min(d + (r.top + r.height * l - u), s),
                  p = Math.min(Math.max(0, d - u), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [S]: ef,
          [L]: ef,
          [N]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown && Q(e);
            }),
          },
          [C]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown || Q(e);
            }),
          },
          [M]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(j, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && Q(e), n;
            }),
          },
          [D]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(j, (e, t) => (t || Q(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: u,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: g } = i.IX2EngineConstants,
        {
          getItemConfigByKey: y,
          getRenderType: I,
          getStyleProp: T,
        } = a.IX2VanillaUtils,
        m = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: l,
              parameterId: u,
              actionGroups: c,
              destinationKeys: s,
              smoothing: d,
              restingValue: E,
              actionTypeId: g,
              customEasingFn: I,
              skipMotion: T,
              skipToValue: m,
            } = e,
            { parameters: h } = t.payload,
            b = Math.max(1 - d, 0.01),
            v = h[u];
          null == v && ((b = 1), (v = E));
          let O = f((Math.max(v, 0) || 0) - l),
            _ = T ? m : f(l + O * b),
            R = 100 * _;
          if (_ === l && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: r } = c[e];
            if ((0 === e && (n = r[0]), R >= t)) {
              n = r[0];
              let l = c[e + 1],
                u = l && R !== t;
              (i = u ? l.actionItems[0] : null),
                u && ((a = t / 100), (o = (l.keyframe - t) / 100));
            }
          }
          let A = {};
          if (n && !i)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              A[t] = y(g, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (_ - a) / o,
              t = p(n.config.easing, e, I);
            for (let e = 0, { length: a } = s; e < a; e++) {
              let a = s[e],
                r = y(g, a, n.config),
                o = (y(g, a, i.config) - r) * t + r;
              A[a] = o;
            }
          }
          return (0, r.merge)(e, { position: _, current: A });
        },
        h = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: l,
              verbose: u,
              actionItem: c,
              destination: s,
              destinationKeys: d,
              pluginDuration: E,
              instanceDelay: y,
              customEasingFn: I,
              skipMotion: T,
            } = e,
            m = c.config.easing,
            { duration: h, delay: b } = c.config;
          null != E && (h = E),
            (b = null != y ? y : b),
            l === g ? (h = 0) : (o || T) && (h = b = 0);
          let { now: v } = t.payload;
          if (n && i) {
            let t = v - (a + b);
            if (u) {
              let t = h + b,
                n = f(Math.min(Math.max(0, (v - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / h), 1)),
              o = p(m, n, I),
              l = {},
              c = null;
            return (
              d.length &&
                (c = d.reduce((e, t) => {
                  let n = s[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return (e[t] = r * o + a), e;
                }, {})),
              (l.current = c),
              (l.position = n),
              1 === n && ((l.active = !1), (l.complete = !0)),
              (0, r.merge)(e, l)
            );
          }
          return e;
        },
        b = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case l:
              return Object.freeze({});
            case u: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: l,
                  eventStateKey: u,
                  actionListId: c,
                  groupIndex: s,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: y,
                  continuous: m,
                  parameterId: h,
                  actionGroups: b,
                  smoothing: v,
                  restingValue: O,
                  pluginInstance: _,
                  pluginDuration: R,
                  instanceDelay: A,
                  skipMotion: N,
                  skipToValue: S,
                } = t.payload,
                { actionTypeId: L } = a,
                C = I(L),
                w = T(C, L),
                M = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: F } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: M,
                immediate: g,
                verbose: y,
                current: null,
                actionItem: a,
                actionTypeId: L,
                eventId: o,
                eventTarget: l,
                eventStateKey: u,
                actionListId: c,
                groupIndex: s,
                renderType: C,
                isCarrier: d,
                styleProp: w,
                continuous: m,
                parameterId: h,
                actionGroups: b,
                smoothing: v,
                restingValue: O,
                pluginInstance: _,
                pluginDuration: R,
                instanceDelay: A,
                skipMotion: N,
                skipToValue: S,
                customEasingFn:
                  Array.isArray(F) && 4 === F.length ? E(F) : void 0,
              });
            }
            case c: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  l = e[a],
                  u = l.continuous ? m : h;
                n = (0, r.set)(n, a, u(l, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return (e[n] = i), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        l = n(9468),
        u = n(7718),
        c = n(1540),
        { ixElements: s } = l.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: u.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: u,
        } = i.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [l]: { value: "stop" },
          [u]: { value: "clear" },
        }),
        d = (e = c, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: u,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = i.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        y = (e = g, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case l: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case u:
              return g;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case c: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case E:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        l = (e) => ({ value: e.value }),
        u = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return u;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("rive"),
        u = (e, t) => e.value.inputs[t],
        c = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = l();
          if (!i) return;
          let o = i.getInstance(e),
            u = i.rive.StateMachineInputType,
            { name: c, inputs: s = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(c);
              if (null != n) {
                if ((e.isPlaying || e.play(c, !1), a in s || r in s)) {
                  let t = e.layout,
                    n = s[a] ?? t.fit,
                    i = s[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in s) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case u.Boolean:
                        null != s[e] && (i.value = !!s[e]);
                        break;
                      case u.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case u.Trigger:
                        s[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        l = (e, t) => e.value[t],
        u = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            l = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ);
            };
          a ? l(a.spline) : i.setLoadHandler(e, l);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return u;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(380),
        o = (e, t) => e.value[t],
        l = () => null,
        u = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(a, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(a) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, r.normalizeColor)(a)
            : void 0;
        },
        c = (e) => e.value,
        s = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = n(7087),
        a = c(n(7377)),
        r = c(n(2866)),
        o = c(n(2570)),
        l = c(n(1407));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
      let s = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return h;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return m;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return y;
        },
        IX2_INSTANCE_REMOVED: function () {
          return T;
        },
        IX2_INSTANCE_STARTED: function () {
          return I;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return g;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return u;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return l;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        l = "IX2_SESSION_STOPPED",
        u = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        g = "IX2_PARAMETER_CHANGED",
        y = "IX2_INSTANCE_ADDED",
        I = "IX2_INSTANCE_STARTED",
        T = "IX2_INSTANCE_REMOVED",
        m = "IX2_ELEMENT_STATE_CHANGED",
        h = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return U;
        },
        BACKGROUND_COLOR: function () {
          return k;
        },
        BAR_DELIMITER: function () {
          return Q;
        },
        BORDER_COLOR: function () {
          return V;
        },
        BOUNDARY_SELECTOR: function () {
          return u;
        },
        CHILDREN: function () {
          return $;
        },
        COLON_DELIMITER: function () {
          return z;
        },
        COLOR: function () {
          return G;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return y;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return g;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return F;
        },
        FLEX: function () {
          return j;
        },
        FONT_VARIATION_SETTINGS: function () {
          return P;
        },
        HEIGHT: function () {
          return x;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return Y;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return M;
        },
        PARENT: function () {
          return q;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ei;
        },
        RENDER_PLUGIN: function () {
          return er;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return A;
        },
        ROTATE_Y: function () {
          return N;
        },
        ROTATE_Z: function () {
          return S;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return K;
        },
        SKEW: function () {
          return L;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return w;
        },
        TRANSFORM: function () {
          return I;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return T;
        },
        TRANSLATE_Y: function () {
          return m;
        },
        TRANSLATE_Z: function () {
          return h;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return D;
        },
        WILL_CHANGE: function () {
          return X;
        },
        W_MOD_IX: function () {
          return l;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        l = "w-mod-ix",
        u = ".w-dyn-item",
        c = "xValue",
        s = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        g = "zUnit",
        y = "unit",
        I = "transform",
        T = "translateX",
        m = "translateY",
        h = "translateZ",
        b = "translate3d",
        v = "scaleX",
        O = "scaleY",
        _ = "scaleZ",
        R = "scale3d",
        A = "rotateX",
        N = "rotateY",
        S = "rotateZ",
        L = "skew",
        C = "skewX",
        w = "skewY",
        M = "opacity",
        F = "filter",
        P = "font-variation-settings",
        D = "width",
        x = "height",
        k = "backgroundColor",
        U = "background",
        V = "borderColor",
        G = "color",
        B = "display",
        j = "flex",
        X = "willChange",
        W = "AUTO",
        H = ",",
        z = ":",
        Q = "|",
        $ = "CHILDREN",
        Y = "IMMEDIATE_CHILDREN",
        K = "SIBLINGS",
        q = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        er = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return l;
        },
        IX2EngineConstants: function () {
          return u;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = c(n(1833), t),
        o = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let l = d(n(8023)),
        u = d(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: l,
          STYLE_FILTER: u,
          STYLE_FONT_VARIATION: c,
        } = n(262).ActionTypeConsts,
        s = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [l]: !0, [u]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return l;
        },
        EventLimitAffectedElements: function () {
          return u;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        l = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        u = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          l = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (l.startsWith("#")) {
          let e = l.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (l.startsWith("rgba")) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3]));
        } else if (l.startsWith("rgb")) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10));
        } else if (l.startsWith("hsla")) {
          let e,
            n,
            o,
            u = l.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(u[0]),
            s = parseFloat(u[1].replace("%", "")) / 100,
            d = parseFloat(u[2].replace("%", "")) / 100;
          r = parseFloat(u[3]);
          let f = (1 - Math.abs(2 * d - 1)) * s,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            E = d - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (n = p), (o = 0))
            : c >= 60 && c < 120
            ? ((e = p), (n = f), (o = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = f), (o = p))
            : c >= 180 && c < 240
            ? ((e = 0), (n = p), (o = f))
            : c >= 240 && c < 300
            ? ((e = p), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (i = Math.round((n + E) * 255)),
            (a = Math.round((o + E) * 255));
        } else if (l.startsWith("hsl")) {
          let e,
            n,
            r,
            o = l.match(/hsl\(([^)]+)\)/)[1].split(","),
            u = parseFloat(o[0]),
            c = parseFloat(o[1].replace("%", "")) / 100,
            s = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * s - 1)) * c,
            f = d * (1 - Math.abs(((u / 60) % 2) - 1)),
            p = s - d / 2;
          u >= 0 && u < 60
            ? ((e = d), (n = f), (r = 0))
            : u >= 60 && u < 120
            ? ((e = f), (n = d), (r = 0))
            : u >= 120 && u < 180
            ? ((e = 0), (n = d), (r = f))
            : u >= 180 && u < 240
            ? ((e = 0), (n = f), (r = d))
            : u >= 240 && u < 300
            ? ((e = f), (n = 0), (r = d))
            : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return l;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return u;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = f(n(2662)),
        o = f(n(8686)),
        l = f(n(3767)),
        u = f(n(5861)),
        c = f(n(1799)),
        s = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return l;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return u;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        l = "undefined" != typeof window,
        u = (e, t) => (l ? e() : t),
        c = u(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = u(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = u(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return c;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(8686)),
        l = (i = n(1361)) && i.__esModule ? i : { default: i };
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function s(e) {
        return (0, l.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? c(t > 0 ? n(t) : t)
          : c(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          bounce: function () {
            return j;
          },
          bouncePast: function () {
            return X;
          },
          ease: function () {
            return l;
          },
          easeIn: function () {
            return u;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return F;
          },
          inCirc: function () {
            return L;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return x;
          },
          inExpo: function () {
            return A;
          },
          inOutBack: function () {
            return D;
          },
          inOutCirc: function () {
            return w;
          },
          inOutCubic: function () {
            return y;
          },
          inOutElastic: function () {
            return U;
          },
          inOutExpo: function () {
            return S;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return m;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return R;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return I;
          },
          inQuint: function () {
            return h;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return P;
          },
          outBounce: function () {
            return M;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return g;
          },
          outElastic: function () {
            return k;
          },
          outExpo: function () {
            return N;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return T;
          },
          outQuint: function () {
            return b;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return G;
          },
          swingFromTo: function () {
            return V;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        l = (0, o.default)(0.25, 0.1, 0.25, 1),
        u = (0, o.default)(0.42, 0, 1, 1),
        c = (0, o.default)(0, 0, 0.58, 1),
        s = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function g(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function I(e) {
        return Math.pow(e, 4);
      }
      function T(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function h(e) {
        return Math.pow(e, 5);
      }
      function b(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function O(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function R(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function A(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function N(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function S(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function L(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function w(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function M(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function P(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -(
              i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1)
          ? -0.5 *
            (i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : i *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function V(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function G(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return l;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(2662),
        o = n(3690);
      function l(e) {
        return o.pluginMethodMap.has(e);
      }
      let u = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        c = u("getPluginConfig"),
        s = u("getPluginOrigin"),
        d = u("getPluginDuration"),
        f = u("getPluginDestination"),
        p = u("createPluginInstance"),
        E = u("renderPlugin"),
        g = u("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return ej;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return eY;
        },
        getAffectedElements: function () {
          return eh;
        },
        getComputedStyle: function () {
          return eb;
        },
        getDestinationValues: function () {
          return eL;
        },
        getElementId: function () {
          return eg;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eS;
        },
        getMaxDurationItemIndex: function () {
          return e$;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ew;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eT;
        },
        reduceListToGroup: function () {
          return eK;
        },
        reifyState: function () {
          return ey;
        },
        renderHTMLElement: function () {
          return eM;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eq;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = g(n(4075)),
        o = g(n(1455)),
        l = g(n(5720)),
        u = n(1185),
        c = n(7087),
        s = g(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: y,
          TRANSFORM: I,
          TRANSLATE_3D: T,
          SCALE_3D: m,
          ROTATE_X: h,
          ROTATE_Y: b,
          ROTATE_Z: v,
          SKEW: O,
          PRESERVE_3D: _,
          FLEX: R,
          OPACITY: A,
          FILTER: N,
          FONT_VARIATION_SETTINGS: S,
          WIDTH: L,
          HEIGHT: C,
          BACKGROUND_COLOR: w,
          BORDER_COLOR: M,
          COLOR: F,
          CHILDREN: P,
          IMMEDIATE_CHILDREN: D,
          SIBLINGS: x,
          PARENT: k,
          DISPLAY: U,
          WILL_CHANGE: V,
          AUTO: G,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: j,
          BAR_DELIMITER: X,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: H,
          RENDER_STYLE: z,
          RENDER_PLUGIN: Q,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: $,
          TRANSFORM_SCALE: Y,
          TRANSFORM_ROTATE: K,
          TRANSFORM_SKEW: q,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ei,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: er,
          OBJECT_VALUE: eo,
        } = c.ActionTypeConsts,
        el = (e) => e.trim(),
        eu = Object.freeze({ [en]: w, [ei]: M, [ea]: F }),
        ec = Object.freeze({
          [E.TRANSFORM_PREFIXED]: I,
          [w]: y,
          [A]: A,
          [N]: N,
          [L]: L,
          [C]: C,
          [S]: S,
        }),
        es = new Map();
      function ed() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eg(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eE++;
      }
      function ey({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let eI = (e, t) => e === t;
      function eT({ store: e, select: t, onChange: n, comparator: i = eI }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, l) || n((l = r), e);
          }),
          l = t(a());
        return o;
      }
      function em(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eh({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, l;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: u } = e;
        if (Array.isArray(u) && u.length > 0)
          return u.reduce(
            (e, r) =>
              e.concat(
                eh({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: g,
            matchSelector: y,
            elementContains: I,
            isSiblingNode: T,
          } = a,
          { target: m } = e;
        if (!m) return [];
        let {
          id: h,
          objectId: b,
          selector: v,
          selectorGuids: O,
          appliesTo: _,
          useEventTarget: R,
        } = em(m);
        if (b) return [es.has(b) ? es.get(b) : es.set(b, {}).get(b)];
        if (_ === c.EventAppliesTo.PAGE) {
          let e = s(h);
          return e ? [e] : [];
        }
        let A = (t?.action?.config?.affectedElements ?? {})[h || v] || {},
          N = !!(A.id || A.selector),
          S = t && d(em(t.target));
        if (
          (N
            ? ((r = A.limitAffectedElements), (o = S), (l = d(A)))
            : (o = l = d({ id: h, selector: v, selectorGuids: O })),
          t && R)
        ) {
          let e = n && (l || !0 === R) ? [n] : f(S);
          if (l) {
            if (R === k) return f(l).filter((t) => e.some((e) => I(t, e)));
            if (R === P) return f(l).filter((t) => e.some((e) => I(e, t)));
            if (R === x) return f(l).filter((t) => e.some((e) => T(e, t)));
          }
          return e;
        }
        return null == o || null == l
          ? []
          : E.IS_BROWSER_ENV && i
          ? f(l).filter((e) => i.contains(e))
          : r === P
          ? f(o, l)
          : r === D
          ? p(f(o)).filter(y(l))
          : r === x
          ? g(f(o)).filter(y(l))
          : f(l);
      }
      function eb({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case ea:
          case er:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eD[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eR(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: l } = i;
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], i);
        switch (i.actionTypeId) {
          case $:
          case Y:
          case K:
          case q:
            return t[i.actionTypeId] || eF[i.actionTypeId];
          case J:
            return eO(t[i.actionTypeId], i.config.filters);
          case ee:
            return e_(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return { value: (0, r.default)(parseFloat(o(e, A)), 1) };
          case et: {
            let t,
              a = o(e, L),
              l = o(e, C);
            return {
              widthValue:
                i.config.widthUnit === G
                  ? ev.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === G
                  ? ev.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(l), parseFloat(n.height)),
            };
          }
          case en:
          case ei:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = eu[t],
                o = i(e, a),
                l = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eV, eU.test(o) ? o : n[a]).split(B);
              return {
                rValue: (0, r.default)(parseInt(l[0], 10), 255),
                gValue: (0, r.default)(parseInt(l[1], 10), 255),
                bValue: (0, r.default)(parseInt(l[2], 10), 255),
                aValue: (0, r.default)(parseFloat(l[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case er:
            return { value: (0, r.default)(o(e, U), n.display) };
          case eo:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, l.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, l.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eL({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case $:
          case Y:
          case K:
          case q: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case et: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: l } = t.config,
              { widthValue: u, heightValue: c } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: u, heightValue: c };
            if (o === G) {
              let t = i(e, L);
              a(e, L, ""), (u = r(e, "offsetWidth")), a(e, L, t);
            }
            if (l === G) {
              let t = i(e, C);
              a(e, C, ""), (c = r(e, "offsetHeight")), a(e, C, t);
            }
            return { widthValue: u, heightValue: c };
          }
          case en:
          case ei:
          case ea: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: l,
            } = t.config;
            if (l && l.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, l),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eA, {});
          case ee:
            return t.config.fontVariations.reduce(eN, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
          ? z
          : /^GENERAL_/.test(e)
          ? H
          : /^PLUGIN_/.test(e)
          ? Q
          : void 0;
      }
      function ew(e, t) {
        return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eM(e, t, n, i, a, r, l, u, c) {
        switch (u) {
          case W:
            var s = e,
              d = t,
              f = n,
              g = a,
              y = l;
            let I = ek
                .map((e) => {
                  let t = eF[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: l = "",
                    } = d[e] || {};
                  switch (e) {
                    case $:
                      return `${T}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case Y:
                      return `${m}(${n}${r}, ${i}${o}, ${a}${l})`;
                    case K:
                      return `${h}(${n}${r}) ${b}(${i}${o}) ${v}(${a}${l})`;
                    case q:
                      return `${O}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: A } = y;
            eG(s, E.TRANSFORM_PREFIXED, y),
              A(s, E.TRANSFORM_PREFIXED, I),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i }
              ) {
                return (
                  (e === $ && void 0 !== i) ||
                  (e === Y && void 0 !== i) ||
                  (e === K && (void 0 !== t || void 0 !== n))
                );
              })(g, f) && A(s, E.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case z:
            return (function (e, t, n, i, a, r) {
              let { setStyle: l } = r;
              switch (i.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: u } = n;
                  void 0 !== o &&
                    (t === G && (t = "px"), eG(e, L, r), l(e, L, o + t)),
                    void 0 !== u &&
                      (a === G && (a = "px"), eG(e, C, r), l(e, C, u + a));
                  break;
                }
                case J:
                  var u = i.config;
                  let c = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ex(n, u)})`,
                      ""
                    ),
                    { setStyle: s } = r;
                  eG(e, N, r), s(e, N, c);
                  break;
                case ee:
                  i.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = r;
                  eG(e, S, r), f(e, S, d);
                  break;
                case en:
                case ei:
                case ea: {
                  let t = eu[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    u = Math.round(n.bValue),
                    c = n.aValue;
                  eG(e, t, r),
                    l(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${a},${o},${u})`
                        : `rgba(${a},${o},${u},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  eG(e, a, r), l(e, a, n.value + t);
                }
              }
            })(e, 0, n, a, r, l);
          case H:
            var w = e,
              M = a,
              F = l;
            let { setStyle: P } = F;
            if (M.actionTypeId === er) {
              let { value: e } = M.config;
              P(w, U, e === R && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case Q: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, a);
          }
        }
      }
      let eF = {
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Y]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eP = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ex = (e, t) => {
          let n = (0, l.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ek = Object.keys(eF),
        eU = /^rgb/,
        eV = RegExp("rgba?\\(([^)]+)\\)");
      function eG(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = ec[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, V);
        if (!o) return void r(e, V, i);
        let l = o.split(B).map(el);
        -1 === l.indexOf(i) && r(e, V, l.concat(i).join(B));
      }
      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = ec[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, V);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            V,
            o
              .split(B)
              .map(el)
              .filter((e) => e !== i)
              .join(B)
          );
      }
      function ej({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            l = a[o];
          l && eX({ actionList: l, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            eX({ actionList: a[e], elementApi: t });
          });
      }
      function eX({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        i &&
          i.forEach((e) => {
            eW({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                eW({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eW({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          (i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : ez({ effect: eQ, actionTypeId: a, elementApi: n })),
            eh({ config: r, event: t, elementApi: n }).forEach(i);
        });
      }
      function eH(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === et) {
          let { config: n } = t;
          n.widthUnit === G && i(e, L, ""), n.heightUnit === G && i(e, C, "");
        }
        a(e, V) && ez({ effect: eB, actionTypeId: r, elementApi: n })(e);
      }
      let ez =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case $:
            case Y:
            case K:
            case q:
              e(i, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(i, N, n);
              break;
            case ee:
              e(i, S, n);
              break;
            case Z:
              e(i, A, n);
              break;
            case et:
              e(i, L, n), e(i, C, n);
              break;
            case en:
            case ei:
            case ea:
              e(i, eu[t], n);
              break;
            case er:
              e(i, U, n);
          }
        };
      function eQ(e, t, n) {
        let { setStyle: i } = n;
        eB(e, t, n),
          i(e, t, ""),
          t === E.TRANSFORM_PREFIXED && i(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function e$(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function eY(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          l = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              u = n[e$(n)],
              { config: c, actionTypeId: s } = u;
            a.id === u.id && (l = o + r);
            let d = eC(s) === H ? 0 : c.duration;
            o += c.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(l / o) : 0
        );
      }
      function eK({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push((0, u.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, u.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eq(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + j + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + X + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + X + n + X + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: u,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: g,
          CONFIG_Z_UNIT: y,
          CONFIG_UNIT: I,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: T,
          IX2_INSTANCE_ADDED: m,
          IX2_ELEMENT_STATE_CHANGED: h,
        } = o.IX2EngineActionTypes,
        b = {},
        v = (e = b, t = {}) => {
          switch (t.type) {
            case T:
              return b;
            case m: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: l,
                } = t.payload,
                { actionTypeId: u } = o,
                c = e;
              return (
                (0, r.getIn)(c, [n, i]) !== i && (c = O(c, i, l, n, o)),
                _(c, n, u, a, o)
              );
            }
            case h: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return _(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function O(e, t, n, i, a) {
        let o =
          n === u ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function _(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return R.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e;
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let R = [
        [s, E],
        [d, g],
        [f, y],
        [p, I],
      ];
    },
    8106: function () {
      Webflow.require("ix2").init({
        events: {
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|eb6b6468-4953-a614-6bae-c8cb7c25ab6c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|eb6b6468-4953-a614-6bae-c8cb7c25ab6c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979009c00e,
          },
          "e-4": {
            id: "e-4",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-3",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|eb6b6468-4953-a614-6bae-c8cb7c25ab6c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|eb6b6468-4953-a614-6bae-c8cb7c25ab6c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979009c00e,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|2d218b91-687d-c004-f55b-2f7a5eddfb35",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|2d218b91-687d-c004-f55b-2f7a5eddfb35",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979031158e,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|2d218b91-687d-c004-f55b-2f7a5eddfb35",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|2d218b91-687d-c004-f55b-2f7a5eddfb35",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979031158e,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|e16b3404-0890-6527-d843-15d3cf432e2a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|e16b3404-0890-6527-d843-15d3cf432e2a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197903148c1,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|e16b3404-0890-6527-d843-15d3cf432e2a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|e16b3404-0890-6527-d843-15d3cf432e2a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197903148c1,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|21fb3722-4890-7593-6641-447270334409",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|21fb3722-4890-7593-6641-447270334409",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19790314afe,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|21fb3722-4890-7593-6641-447270334409",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|21fb3722-4890-7593-6641-447270334409",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19790314afe,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|e46ad6d9-b1a4-53c0-2866-0f5a0f19b2cb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|e46ad6d9-b1a4-53c0-2866-0f5a0f19b2cb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197903154a7,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-11",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|e46ad6d9-b1a4-53c0-2866-0f5a0f19b2cb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|e46ad6d9-b1a4-53c0-2866-0f5a0f19b2cb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197903154a7,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19799618b35,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-13",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19799618b35,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6850122232e45aa76cbb7933|cc0e51b7-97f9-a669-2095-5a4cbff3d615",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6850122232e45aa76cbb7933|cc0e51b7-97f9-a669-2095-5a4cbff3d615",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19799692b6d,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6850122232e45aa76cbb7933|cc0e51b7-97f9-a669-2095-5a4cbff3d615",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6850122232e45aa76cbb7933|cc0e51b7-97f9-a669-2095-5a4cbff3d615",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19799692b6d,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|d2f3a69c-8b34-1dda-08cf-5170033fc586",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|d2f3a69c-8b34-1dda-08cf-5170033fc586",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996b530b,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|d2f3a69c-8b34-1dda-08cf-5170033fc586",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|d2f3a69c-8b34-1dda-08cf-5170033fc586",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996b530c,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|c517c79e-0c7c-5e3e-9785-a7b547eaf980",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|c517c79e-0c7c-5e3e-9785-a7b547eaf980",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996ca964,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|c517c79e-0c7c-5e3e-9785-a7b547eaf980",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|c517c79e-0c7c-5e3e-9785-a7b547eaf980",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996ca964,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|cf967d4b-8248-1d6f-2241-01d55553487e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|cf967d4b-8248-1d6f-2241-01d55553487e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996ccbcf,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|cf967d4b-8248-1d6f-2241-01d55553487e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|cf967d4b-8248-1d6f-2241-01d55553487e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996ccbcf,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|65f6bc29-7a04-07ea-8ceb-97423db646a1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|65f6bc29-7a04-07ea-8ceb-97423db646a1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996e5935,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|65f6bc29-7a04-07ea-8ceb-97423db646a1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|65f6bc29-7a04-07ea-8ceb-97423db646a1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197996e5936,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6855c4f3d5db2eaecfbd9b95|d23d265a-6c22-0ee5-e08e-a53ba8ea5247",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6855c4f3d5db2eaecfbd9b95|d23d265a-6c22-0ee5-e08e-a53ba8ea5247",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19799701350,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6855c4f3d5db2eaecfbd9b95|d23d265a-6c22-0ee5-e08e-a53ba8ea5247",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6855c4f3d5db2eaecfbd9b95|d23d265a-6c22-0ee5-e08e-a53ba8ea5247",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19799701350,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a5dd5bac-7b75-3660-3129-402ebe077856",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a5dd5bac-7b75-3660-3129-402ebe077856",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979970b2e0,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a5dd5bac-7b75-3660-3129-402ebe077856",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a5dd5bac-7b75-3660-3129-402ebe077856",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979970b2e1,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "043b5863-38b3-ea63-4e02-7db7b34fdbed",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "043b5863-38b3-ea63-4e02-7db7b34fdbed",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979983edec,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-33",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "043b5863-38b3-ea63-4e02-7db7b34fdbed",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "043b5863-38b3-ea63-4e02-7db7b34fdbed",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979983edec,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-36",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "043b5863-38b3-ea63-4e02-7db7b34fdbf4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "043b5863-38b3-ea63-4e02-7db7b34fdbf4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979987c34f,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-35",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "043b5863-38b3-ea63-4e02-7db7b34fdbf4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "043b5863-38b3-ea63-4e02-7db7b34fdbf4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979987c34f,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "043b5863-38b3-ea63-4e02-7db7b34fdbf1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "043b5863-38b3-ea63-4e02-7db7b34fdbf1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197998807ad,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "043b5863-38b3-ea63-4e02-7db7b34fdbf1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "043b5863-38b3-ea63-4e02-7db7b34fdbf1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197998807ad,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-40",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "86a28e28-98e8-7dae-7148-a40ccacbf8a3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "86a28e28-98e8-7dae-7148-a40ccacbf8a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979992dcae,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "86a28e28-98e8-7dae-7148-a40ccacbf8a3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "86a28e28-98e8-7dae-7148-a40ccacbf8a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979992dcae,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|1201d709-874e-b884-b0a6-e4fc419c3787",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|1201d709-874e-b884-b0a6-e4fc419c3787",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979f1a4280,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "682bb0369a7a236122015269|1201d709-874e-b884-b0a6-e4fc419c3787",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "682bb0369a7a236122015269|1201d709-874e-b884-b0a6-e4fc419c3787",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1979f1a4281,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b0a951d2-750d-154d-fd78-a0971632b6d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b0a951d2-750d-154d-fd78-a0971632b6d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x189ec535776,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b0a951d2-750d-154d-fd78-a0971632b6d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b0a951d2-750d-154d-fd78-a0971632b6d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x189ec535777,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b0a951d2-750d-154d-fd78-a0971632b6da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b0a951d2-750d-154d-fd78-a0971632b6da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x189ec5b1061,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "b0a951d2-750d-154d-fd78-a0971632b6da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "b0a951d2-750d-154d-fd78-a0971632b6da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x189ec5b1061,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685619c090d15f06db7c89ad|da67072c-eb09-b34f-887f-24654e891da5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685619c090d15f06db7c89ad|da67072c-eb09-b34f-887f-24654e891da5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1926974b69d,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685619c090d15f06db7c89ad|da67072c-eb09-b34f-887f-24654e891da5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685619c090d15f06db7c89ad|da67072c-eb09-b34f-887f-24654e891da5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1926974b69e,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "682bb0369a7a236122015269|562e0a94-4e89-cbad-35f3-459a1f2697a3",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197b261d471,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "682bb0369a7a236122015269|562e0a94-4e89-cbad-35f3-459a1f2697a3",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197b261d471,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-52",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "682bb0369a7a236122015269|562e0a94-4e89-cbad-35f3-459a1f2697a3",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197b263a513,
          },
          "e-52": {
            id: "e-52",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-51",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "682bb0369a7a236122015269|562e0a94-4e89-cbad-35f3-459a1f2697a3",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197b263a513,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "Accordion open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".accordion-body",
                        selectorGuids: ["aa1b2f22-c915-97a2-eb9c-ed0ad828cf07"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-div",
                        selectorGuids: ["7c1b988f-3417-1d66-1efd-4abbc038e7b7"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".accordion-body",
                        selectorGuids: ["aa1b2f22-c915-97a2-eb9c-ed0ad828cf07"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.86, 0, 0.07, 1],
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".accordion-body",
                        selectorGuids: ["aa1b2f22-c915-97a2-eb9c-ed0ad828cf07"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.86, 0, 0.07, 1],
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-div",
                        selectorGuids: ["7c1b988f-3417-1d66-1efd-4abbc038e7b7"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 180,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".accordion-body",
                        selectorGuids: ["aa1b2f22-c915-97a2-eb9c-ed0ad828cf07"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1979000fc05,
          },
          "a-2": {
            id: "a-2",
            title: "Accordion close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".accordion-body",
                        selectorGuids: ["aa1b2f22-c915-97a2-eb9c-ed0ad828cf07"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".accordion-body",
                        selectorGuids: ["aa1b2f22-c915-97a2-eb9c-ed0ad828cf07"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.86, 0, 0.07, 1],
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-div",
                        selectorGuids: ["7c1b988f-3417-1d66-1efd-4abbc038e7b7"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1979000fc05,
          },
          "a-3": {
            id: "a-3",
            title: "CTA hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.1, 0.25, 1],
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
                      },
                      xValue: 1.03,
                      yValue: 1.03,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1979961af3c,
          },
          "a-4": {
            id: "a-4",
            title: "CTA hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.1, 0.25, 1],
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1979961af3c,
          },
          "a-5": {
            id: "a-5",
            title: "CTA hover in _home",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      xValue: -210,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.1, 0.25, 1],
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      xValue: 36,
                      yValue: 36,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-5-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".logotype-btm-navbar",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5f"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "a196",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-5-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "86a28e28-98e8-7dae-7148-a40ccacbf8a3",
                      },
                      globalSwatchId: "",
                      rValue: 222,
                      bValue: 222,
                      gValue: 222,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.07, 0.796, 0.45, 0.94],
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      xValue: 248,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1979961af3c,
          },
          "a-6": {
            id: "a-6",
            title: "CTA hover out _home 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.1, 0.25, 1],
                      duration: 100,
                      target: {
                        useEventTarget: !0,
                        id: "684f493d133f5c2c8a0b069d|8db7a573-93ff-58ce-cad5-0ec670b8fdef",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-6-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      xValue: -210,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".background-ellipse_hover",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".logotype-btm-navbar",
                        selectorGuids: ["0cb5858a-5124-8fb3-39c1-c47aa008ed5f"],
                      },
                      filters: [
                        {
                          type: "invert",
                          filterId: "a196",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: !0,
                        id: "86a28e28-98e8-7dae-7148-a40ccacbf8a3",
                      },
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1979961af3c,
          },
          "a-7": {
            id: "a-7",
            title: "Menu Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".top",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b8"],
                      },
                      yValue: 8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".bottom",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b6"],
                      },
                      yValue: -8,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".middle",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 800,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".top",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b8"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-7-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 800,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".bottom",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b6"],
                      },
                      xValue: 0,
                      zValue: -45,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x189ec5367f5,
          },
          "a-8": {
            id: "a-8",
            title: "Menu Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".top",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b8"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".bottom",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b6"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".middle",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-8-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".top",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b8"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-8-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".bottom",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b6"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x189ec562f59,
          },
          "a-9": {
            id: "a-9",
            title: "Dropdown Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".dropdown-list-2",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b7"],
                      },
                      xValue: 0,
                      yValue: -300,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".dropdown-list-2",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b7"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.455, 0.03, 0.515, 0.955],
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".dropdown-list-2",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b7"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: [0.455, 0.03, 0.515, 0.955],
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".dropdown-list-2",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b7"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x189ec5b7d69,
          },
          "a-10": {
            id: "a-10",
            title: "Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.455, 0.03, 0.515, 0.955],
                      duration: 180,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".dropdown-list-2",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b7"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-10-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.455, 0.03, 0.515, 0.955],
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".dropdown-list-2",
                        selectorGuids: ["609fdbc5-b9af-5fcf-12af-773f561248b7"],
                      },
                      xValue: 0,
                      yValue: -300,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x189ec635e71,
          },
          "a-11": {
            id: "a-11",
            title: "CTA_hover_2024 IN",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.1, 0.25, 1],
                      duration: 250,
                      target: {
                        useEventTarget: !0,
                        id: "64fb91bf1c281c02d0fbaf36|e8e6ad9c-3007-62e5-1b51-f0f7949b1748",
                      },
                      xValue: 1.05,
                      yValue: 1.05,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1923deaabd4,
          },
          "a-12": {
            id: "a-12",
            title: "CTA_hover__2024 OUT",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "64fb91bf1c281c02d0fbaf36|e8e6ad9c-3007-62e5-1b51-f0f7949b1748",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1923dedc3e7,
          },
          "a-13": {
            id: "a-13",
            title: "post-its in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its01",
                        selectorGuids: ["dfa65397-5149-07f1-c10b-8067a1b01efa"],
                      },
                      xValue: 1.06,
                      yValue: 1.06,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-13-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its01",
                        selectorGuids: ["dfa65397-5149-07f1-c10b-8067a1b01efa"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 10,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its03",
                        selectorGuids: ["508689dd-7a0b-1f91-32f3-2faa665d223e"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: -7,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its03",
                        selectorGuids: ["508689dd-7a0b-1f91-32f3-2faa665d223e"],
                      },
                      yValue: 73,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its02",
                        selectorGuids: ["40c6cea7-07be-de47-62a2-82d0d8b8ae15"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 4,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-13-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its02",
                        selectorGuids: ["40c6cea7-07be-de47-62a2-82d0d8b8ae15"],
                      },
                      yValue: -73,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-13-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its03",
                        selectorGuids: ["508689dd-7a0b-1f91-32f3-2faa665d223e"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-13-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its02",
                        selectorGuids: ["40c6cea7-07be-de47-62a2-82d0d8b8ae15"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            createdOn: 0x197b261ea2c,
            useFirstGroupAsInitialState: !1,
          },
          "a-14": {
            id: "a-14",
            title: "post-its out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its01",
                        selectorGuids: ["dfa65397-5149-07f1-c10b-8067a1b01efa"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-14-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its01",
                        selectorGuids: ["dfa65397-5149-07f1-c10b-8067a1b01efa"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-14-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its03",
                        selectorGuids: ["508689dd-7a0b-1f91-32f3-2faa665d223e"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-14-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its03",
                        selectorGuids: ["508689dd-7a0b-1f91-32f3-2faa665d223e"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                  {
                    id: "a-14-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its02",
                        selectorGuids: ["40c6cea7-07be-de47-62a2-82d0d8b8ae15"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-14-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its02",
                        selectorGuids: ["40c6cea7-07be-de47-62a2-82d0d8b8ae15"],
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                  {
                    id: "a-14-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its03",
                        selectorGuids: ["508689dd-7a0b-1f91-32f3-2faa665d223e"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-14-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".post-its02",
                        selectorGuids: ["40c6cea7-07be-de47-62a2-82d0d8b8ae15"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            createdOn: 0x197b261ea2c,
            useFirstGroupAsInitialState: !1,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
