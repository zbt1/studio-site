(self.webpackChunk = self.webpackChunk || []).push([
  ["891"],
  {
    6857: function (e) {
      e.exports = (() => {
        "use strict";
        var e,
          t,
          n,
          r,
          i,
          a,
          o,
          s,
          u,
          l,
          c,
          h,
          f,
          d,
          p,
          m,
          v,
          b,
          g,
          y,
          w,
          _,
          A,
          C,
          M,
          E,
          R,
          P,
          T,
          I,
          L,
          F,
          x,
          j,
          S,
          k,
          O,
          D,
          U,
          B,
          W,
          N,
          V,
          $,
          H,
          Y,
          z,
          X,
          G,
          q,
          J,
          K,
          Z,
          Q = [
            ,
            (e, t, n) => {
              var r;
              n.r(t), n.d(t, { default: () => i });
              let i =
                ((r =
                  "undefined" != typeof document && document.currentScript
                    ? document.currentScript.src
                    : void 0),
                function (e = {}) {
                  function t() {
                    function e(e) {
                      let a = r;
                      (n = t = 0),
                        (r = new Map()),
                        a.forEach((t) => {
                          try {
                            t(e);
                          } catch (e) {
                            console.error(e);
                          }
                        }),
                        this.ob(),
                        i && i.Tb();
                    }
                    let t = 0,
                      n = 0,
                      r = new Map(),
                      i = null,
                      a = null;
                    (this.requestAnimationFrame = function (i) {
                      t || (t = requestAnimationFrame(e.bind(this)));
                      let a = ++n;
                      return r.set(a, i), a;
                    }),
                      (this.cancelAnimationFrame = function (e) {
                        r.delete(e),
                          t &&
                            0 == r.size &&
                            (cancelAnimationFrame(t), (t = 0));
                      }),
                      (this.Rb = function (e) {
                        a && (document.body.remove(a), (a = null)),
                          e ||
                            (((a =
                              document.createElement(
                                "div"
                              )).style.backgroundColor = "black"),
                            (a.style.position = "fixed"),
                            (a.style.right = 0),
                            (a.style.top = 0),
                            (a.style.color = "white"),
                            (a.style.padding = "4px"),
                            (a.innerHTML = "RIVE FPS"),
                            (e = function (e) {
                              a.innerHTML = "RIVE FPS " + e.toFixed(1);
                            }),
                            document.body.appendChild(a)),
                          (i = new (function () {
                            let t = 0,
                              n = 0;
                            this.Tb = function () {
                              var r = performance.now();
                              n
                                ? (++t,
                                  1e3 < (r -= n) &&
                                    (e((1e3 * t) / r), (t = n = 0)))
                                : ((n = r), (t = 0));
                            };
                          })());
                      }),
                      (this.Ob = function () {
                        a && (document.body.remove(a), (a = null)), (i = null);
                      }),
                      (this.ob = function () {});
                  }
                  function n(e) {
                    console.assert(!0);
                    let t = new Map(),
                      n = -1 / 0;
                    this.push = function (r) {
                      return (
                        (r = (r + ((1 << e) - 1)) >> e),
                        t.has(r) && clearTimeout(t.get(r)),
                        t.set(
                          r,
                          setTimeout(function () {
                            t.delete(r),
                              0 == t.length
                                ? (n = -1 / 0)
                                : r == n &&
                                  console.assert(
                                    (n = Math.max(...t.keys())) < r
                                  );
                          }, 1e3)
                        ),
                        (n = Math.max(r, n)) << e
                      );
                    };
                  }
                  e.ready = new Promise((e, t) => {
                    (d = e), (p = t);
                  });
                  let i = e.onRuntimeInitialized;
                  e.onRuntimeInitialized = function () {
                    i && i();
                    let t = e.decodeAudio;
                    e.decodeAudio = function (e, n) {
                      n((e = t(e)));
                    };
                    let n = e.decodeFont;
                    e.decodeFont = function (e, t) {
                      t((e = n(e)));
                    };
                    let r = e.FileAssetLoader;
                    (e.ptrToAsset = (t) => {
                      let n = e.ptrToFileAsset(t);
                      return n.isImage
                        ? e.ptrToImageAsset(t)
                        : n.isFont
                        ? e.ptrToFontAsset(t)
                        : n.isAudio
                        ? e.ptrToAudioAsset(t)
                        : n;
                    }),
                      (e.CustomFileAssetLoader = r.extend(
                        "CustomFileAssetLoader",
                        {
                          __construct: function ({ loadContents: e }) {
                            this.__parent.__construct.call(this), (this.Gb = e);
                          },
                          loadContents: function (t, n) {
                            return (t = e.ptrToAsset(t)), this.Gb(t, n);
                          },
                        }
                      )),
                      (e.CDNFileAssetLoader = r.extend("CDNFileAssetLoader", {
                        __construct: function () {
                          this.__parent.__construct.call(this);
                        },
                        loadContents: function (t) {
                          var n, r, i;
                          let a = e.ptrToAsset(t);
                          return (
                            "" !== (t = a.cdnUuid) &&
                            ((n = a.cdnBaseUrl + "/" + t),
                            (r = (e) => {
                              a.decode(new Uint8Array(e.response));
                            }),
                            ((i = new XMLHttpRequest()).responseType =
                              "arraybuffer"),
                            (i.onreadystatechange = function () {
                              4 == i.readyState && 200 == i.status && r(i);
                            }),
                            i.open("GET", n, !0),
                            i.send(null),
                            !0)
                          );
                        },
                      })),
                      (e.FallbackFileAssetLoader = r.extend(
                        "FallbackFileAssetLoader",
                        {
                          __construct: function () {
                            this.__parent.__construct.call(this),
                              (this.kb = []);
                          },
                          addLoader: function (e) {
                            this.kb.push(e);
                          },
                          loadContents: function (e, t) {
                            for (let n of this.kb)
                              if (n.loadContents(e, t)) return !0;
                            return !1;
                          },
                        }
                      ));
                    let a = e.computeAlignment;
                    e.computeAlignment = function (e, t, n, r, i = 1) {
                      return a.call(this, e, t, n, r, i);
                    };
                  };
                  let a =
                      "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                        " "
                      ),
                    o = new (function () {
                      function e() {
                        if (!t) {
                          let u;
                          var e = document.createElement("canvas"),
                            n = {
                              alpha: 1,
                              depth: 0,
                              stencil: 0,
                              antialias: 0,
                              premultipliedAlpha: 1,
                              preserveDrawingBuffer: 0,
                              powerPreference: "high-performance",
                              failIfMajorPerformanceCaveat: 0,
                              enableExtensionsByDefault: 1,
                              explicitSwapControl: 1,
                              renderViaOffscreenBackBuffer: 1,
                            };
                          if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                            if (((u = e.getContext("webgl", n)), (r = 1), !u))
                              return (
                                console.log(
                                  "No WebGL support. Image mesh will not be drawn."
                                ),
                                !1
                              );
                          } else if ((u = e.getContext("webgl2", n))) r = 2;
                          else {
                            if (!(u = e.getContext("webgl", n)))
                              return (
                                console.log(
                                  "No WebGL support. Image mesh will not be drawn."
                                ),
                                !1
                              );
                            r = 1;
                          }
                          function s(e, t, n) {
                            if (
                              ((t = u.createShader(t)),
                              u.shaderSource(t, n),
                              u.compileShader(t),
                              0 < ((n = u.getShaderInfoLog(t)) || "").length)
                            )
                              throw n;
                            u.attachShader(e, t);
                          }
                          if (
                            ((i = Math.min(
                              (u = new Proxy(u, {
                                get: (e, t) =>
                                  e.isContextLost()
                                    ? (l ||
                                        (console.error(
                                          "Cannot render the mesh because the GL Context was lost. Tried to invoke ",
                                          t
                                        ),
                                        (l = !0)),
                                      "function" == typeof e[t])
                                      ? function () {}
                                      : void 0
                                    : "function" == typeof e[t]
                                    ? function (...n) {
                                        return e[t].apply(e, n);
                                      }
                                    : e[t],
                                set(e, t, n) {
                                  if (!e.isContextLost()) return (e[t] = n), !0;
                                  l ||
                                    (console.error(
                                      "Cannot render the mesh because the GL Context was lost. Tried to set property " +
                                        t
                                    ),
                                    (l = !0));
                                },
                              })).getParameter(u.MAX_RENDERBUFFER_SIZE),
                              u.getParameter(u.MAX_TEXTURE_SIZE)
                            )),
                            s(
                              (e = u.createProgram()),
                              u.VERTEX_SHADER,
                              "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }"
                            ),
                            s(
                              e,
                              u.FRAGMENT_SHADER,
                              "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }"
                            ),
                            u.bindAttribLocation(e, 0, "vertex"),
                            u.bindAttribLocation(e, 1, "uv"),
                            u.linkProgram(e),
                            0 <
                              ((n = u.getProgramInfoLog(e)) || "").trim()
                                .length)
                          )
                            throw n;
                          (a = u.getUniformLocation(e, "mat")),
                            (o = u.getUniformLocation(e, "translate")),
                            u.useProgram(e),
                            u.bindBuffer(u.ARRAY_BUFFER, u.createBuffer()),
                            u.enableVertexAttribArray(0),
                            u.enableVertexAttribArray(1),
                            u.bindBuffer(
                              u.ELEMENT_ARRAY_BUFFER,
                              u.createBuffer()
                            ),
                            u.uniform1i(u.getUniformLocation(e, "image"), 0),
                            u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                            (t = u);
                        }
                        return !0;
                      }
                      let t = null,
                        r = 0,
                        i = 0,
                        a = null,
                        o = null,
                        s = 0,
                        u = 0,
                        l = !1;
                      e(),
                        (this.hc = function () {
                          return e(), i;
                        }),
                        (this.Mb = function (e) {
                          t.deleteTexture && t.deleteTexture(e);
                        }),
                        (this.Lb = function (n) {
                          if (!e()) return null;
                          let i = t.createTexture();
                          return i
                            ? (t.bindTexture(t.TEXTURE_2D, i),
                              t.texImage2D(
                                t.TEXTURE_2D,
                                0,
                                t.RGBA,
                                t.RGBA,
                                t.UNSIGNED_BYTE,
                                n
                              ),
                              t.texParameteri(
                                t.TEXTURE_2D,
                                t.TEXTURE_WRAP_S,
                                t.CLAMP_TO_EDGE
                              ),
                              t.texParameteri(
                                t.TEXTURE_2D,
                                t.TEXTURE_WRAP_T,
                                t.CLAMP_TO_EDGE
                              ),
                              t.texParameteri(
                                t.TEXTURE_2D,
                                t.TEXTURE_MAG_FILTER,
                                t.LINEAR
                              ),
                              2 == r
                                ? (t.texParameteri(
                                    t.TEXTURE_2D,
                                    t.TEXTURE_MIN_FILTER,
                                    t.LINEAR_MIPMAP_LINEAR
                                  ),
                                  t.generateMipmap(t.TEXTURE_2D))
                                : t.texParameteri(
                                    t.TEXTURE_2D,
                                    t.TEXTURE_MIN_FILTER,
                                    t.LINEAR
                                  ),
                              i)
                            : null;
                        });
                      let c = new n(8),
                        h = new n(8),
                        f = new n(10),
                        d = new n(10);
                      (this.Qb = function (n, r, i, l, p) {
                        if (e()) {
                          var m = c.push(n),
                            v = h.push(r);
                          if (t.canvas) {
                            for (var b of ((t.canvas.width != m ||
                              t.canvas.height != v) &&
                              ((t.canvas.width = m), (t.canvas.height = v)),
                            t.viewport(0, v - r, n, r),
                            t.disable(t.SCISSOR_TEST),
                            t.clearColor(0, 0, 0, 0),
                            t.clear(t.COLOR_BUFFER_BIT),
                            t.enable(t.SCISSOR_TEST),
                            i.sort((e, t) => t.wb - e.wb),
                            (m = f.push(l)),
                            s != m &&
                              (t.bufferData(
                                t.ARRAY_BUFFER,
                                8 * m,
                                t.DYNAMIC_DRAW
                              ),
                              (s = m)),
                            (m = 0),
                            i))
                              t.bufferSubData(t.ARRAY_BUFFER, m, b.Ta),
                                (m += 4 * b.Ta.length);
                            for (var g of (console.assert(m == 4 * l), i))
                              t.bufferSubData(t.ARRAY_BUFFER, m, g.Db),
                                (m += 4 * g.Db.length);
                            for (var y of (console.assert(m == 8 * l),
                            (m = d.push(p)),
                            u != m &&
                              (t.bufferData(
                                t.ELEMENT_ARRAY_BUFFER,
                                2 * m,
                                t.DYNAMIC_DRAW
                              ),
                              (u = m)),
                            (b = 0),
                            i))
                              t.bufferSubData(
                                t.ELEMENT_ARRAY_BUFFER,
                                b,
                                y.indices
                              ),
                                (b += 2 * y.indices.length);
                            for (let e of (console.assert(b == 2 * p),
                            (y = 0),
                            (g = !0),
                            (m = b = 0),
                            i)) {
                              e.image.Ka != y &&
                                (t.bindTexture(
                                  t.TEXTURE_2D,
                                  e.image.Ja || null
                                ),
                                (y = e.image.Ka)),
                                e.mc
                                  ? (t.scissor(
                                      e.Ya,
                                      v - e.Za - e.jb,
                                      e.Ac,
                                      e.jb
                                    ),
                                    (g = !0))
                                  : g && (t.scissor(0, v - r, n, r), (g = !1)),
                                (i = 2 / n);
                              let s = -2 / r;
                              t.uniform4f(
                                a,
                                e.ha[0] * i * e.Ba,
                                e.ha[1] * s * e.Ca,
                                e.ha[2] * i * e.Ba,
                                e.ha[3] * s * e.Ca
                              ),
                                t.uniform2f(
                                  o,
                                  e.ha[4] * i * e.Ba +
                                    i * (e.Ya - e.ic * e.Ba) -
                                    1,
                                  e.ha[5] * s * e.Ca +
                                    s * (e.Za - e.jc * e.Ca) +
                                    1
                                ),
                                t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, m),
                                t.vertexAttribPointer(
                                  1,
                                  2,
                                  t.FLOAT,
                                  !1,
                                  0,
                                  m + 4 * l
                                ),
                                t.drawElements(
                                  t.TRIANGLES,
                                  e.indices.length,
                                  t.UNSIGNED_SHORT,
                                  b
                                ),
                                (m += 4 * e.Ta.length),
                                (b += 2 * e.indices.length);
                            }
                            console.assert(m == 4 * l),
                              console.assert(b == 2 * p);
                          }
                        }
                      }),
                        (this.canvas = function () {
                          return e() && t.canvas;
                        });
                    })(),
                    s = e.onRuntimeInitialized;
                  e.onRuntimeInitialized = function () {
                    function n(e) {
                      switch (e) {
                        case p.srcOver:
                          return "source-over";
                        case p.screen:
                          return "screen";
                        case p.overlay:
                          return "overlay";
                        case p.darken:
                          return "darken";
                        case p.lighten:
                          return "lighten";
                        case p.colorDodge:
                          return "color-dodge";
                        case p.colorBurn:
                          return "color-burn";
                        case p.hardLight:
                          return "hard-light";
                        case p.softLight:
                          return "soft-light";
                        case p.difference:
                          return "difference";
                        case p.exclusion:
                          return "exclusion";
                        case p.multiply:
                          return "multiply";
                        case p.hue:
                          return "hue";
                        case p.saturation:
                          return "saturation";
                        case p.color:
                          return "color";
                        case p.luminosity:
                          return "luminosity";
                      }
                    }
                    function r(e) {
                      return (
                        "rgba(" +
                        ((0xff0000 & e) >>> 16) +
                        "," +
                        ((65280 & e) >>> 8) +
                        "," +
                        ((255 & e) >>> 0) +
                        "," +
                        ((0xff000000 & e) >>> 24) / 255 +
                        ")"
                      );
                    }
                    function i() {
                      for (let e of (0 < M.length &&
                        (o.Qb(C.drawWidth(), C.drawHeight(), M, E, R),
                        (M = []),
                        (R = E = 0),
                        C.reset(512, 512)),
                      A)) {
                        for (let t of e.H) t();
                        e.H = [];
                      }
                      A.clear();
                    }
                    s && s();
                    var u = e.RenderPaintStyle;
                    let l = e.RenderPath,
                      c = e.RenderPaint,
                      h = e.Renderer,
                      f = e.StrokeCap,
                      d = e.StrokeJoin,
                      p = e.BlendMode,
                      m = u.fill,
                      v = u.stroke,
                      b = e.FillRule.evenOdd,
                      g = 1;
                    var y = e.RenderImage.extend("CanvasRenderImage", {
                        __construct: function ({ la: e, xa: t } = {}) {
                          this.__parent.__construct.call(this),
                            (this.Ka = g),
                            (g = (g + 1) & 0x7fffffff || 1),
                            (this.la = e),
                            (this.xa = t);
                        },
                        __destruct: function () {
                          this.Ja &&
                            (o.Mb(this.Ja), URL.revokeObjectURL(this.Wa)),
                            this.__parent.__destruct.call(this);
                        },
                        decode: function (e) {
                          var t = this;
                          t.xa && t.xa(t);
                          var n = new Image();
                          (t.Wa = URL.createObjectURL(
                            new Blob([e], { type: "image/png" })
                          )),
                            (n.onload = function () {
                              (t.Fb = n),
                                (t.Ja = o.Lb(n)),
                                t.size(n.width, n.height),
                                t.la && t.la(t);
                            }),
                            (n.src = t.Wa);
                        },
                      }),
                      w = l.extend("CanvasRenderPath", {
                        __construct: function () {
                          this.__parent.__construct.call(this),
                            (this.T = new Path2D());
                        },
                        rewind: function () {
                          this.T = new Path2D();
                        },
                        addPath: function (e, t, n, r, i, a, o) {
                          var s = this.T,
                            u = s.addPath;
                          e = e.T;
                          let l = new DOMMatrix();
                          (l.a = t),
                            (l.b = n),
                            (l.c = r),
                            (l.d = i),
                            (l.e = a),
                            (l.f = o),
                            u.call(s, e, l);
                        },
                        fillRule: function (e) {
                          this.Va = e;
                        },
                        moveTo: function (e, t) {
                          this.T.moveTo(e, t);
                        },
                        lineTo: function (e, t) {
                          this.T.lineTo(e, t);
                        },
                        cubicTo: function (e, t, n, r, i, a) {
                          this.T.bezierCurveTo(e, t, n, r, i, a);
                        },
                        close: function () {
                          this.T.closePath();
                        },
                      }),
                      _ = c.extend("CanvasRenderPaint", {
                        color: function (e) {
                          this.Xa = r(e);
                        },
                        thickness: function (e) {
                          this.Ib = e;
                        },
                        join: function (e) {
                          switch (e) {
                            case d.miter:
                              this.Ia = "miter";
                              break;
                            case d.round:
                              this.Ia = "round";
                              break;
                            case d.bevel:
                              this.Ia = "bevel";
                          }
                        },
                        cap: function (e) {
                          switch (e) {
                            case f.butt:
                              this.Ha = "butt";
                              break;
                            case f.round:
                              this.Ha = "round";
                              break;
                            case f.square:
                              this.Ha = "square";
                          }
                        },
                        style: function (e) {
                          this.Hb = e;
                        },
                        blendMode: function (e) {
                          this.Eb = n(e);
                        },
                        clearGradient: function () {
                          this.ja = null;
                        },
                        linearGradient: function (e, t, n, r) {
                          this.ja = { yb: e, zb: t, bb: n, cb: r, Ra: [] };
                        },
                        radialGradient: function (e, t, n, r) {
                          this.ja = {
                            yb: e,
                            zb: t,
                            bb: n,
                            cb: r,
                            Ra: [],
                            ec: !0,
                          };
                        },
                        addStop: function (e, t) {
                          this.ja.Ra.push({ color: e, stop: t });
                        },
                        completeGradient: function () {},
                        draw: function (e, t, n) {
                          let i = this.Hb;
                          var a = this.Xa,
                            o = this.ja;
                          if (
                            ((e.globalCompositeOperation = this.Eb), null != o)
                          ) {
                            a = o.yb;
                            var s = o.zb;
                            let t = o.bb;
                            var u = o.cb;
                            let n = o.Ra;
                            o.ec
                              ? ((o = t - a),
                                (u -= s),
                                (a = e.createRadialGradient(
                                  a,
                                  s,
                                  0,
                                  a,
                                  s,
                                  Math.sqrt(o * o + u * u)
                                )))
                              : (a = e.createLinearGradient(a, s, t, u));
                            for (let e = 0, t = n.length; e < t; e++)
                              (s = n[e]), a.addColorStop(s.stop, r(s.color));
                            (this.Xa = a), (this.ja = null);
                          }
                          switch (i) {
                            case v:
                              (e.strokeStyle = a),
                                (e.lineWidth = this.Ib),
                                (e.lineCap = this.Ha),
                                (e.lineJoin = this.Ia),
                                e.stroke(t);
                              break;
                            case m:
                              (e.fillStyle = a), e.fill(t, n);
                          }
                        },
                      });
                    let A = new Set(),
                      C = null,
                      M = [],
                      E = 0,
                      R = 0;
                    var P = (e.CanvasRenderer = h.extend("Renderer", {
                      __construct: function (e) {
                        this.__parent.__construct.call(this),
                          (this.S = [1, 0, 0, 1, 0, 0]),
                          (this.C = e.getContext("2d")),
                          (this.Ua = e),
                          (this.H = []);
                      },
                      save: function () {
                        this.S.push(...this.S.slice(this.S.length - 6)),
                          this.H.push(this.C.save.bind(this.C));
                      },
                      restore: function () {
                        let e = this.S.length - 6;
                        if (6 > e)
                          throw "restore() called without matching save().";
                        this.S.splice(e),
                          this.H.push(this.C.restore.bind(this.C));
                      },
                      transform: function (e, t, n, r, i, a) {
                        let o = this.S,
                          s = o.length - 6;
                        o.splice(
                          s,
                          6,
                          o[s] * e + o[s + 2] * t,
                          o[s + 1] * e + o[s + 3] * t,
                          o[s] * n + o[s + 2] * r,
                          o[s + 1] * n + o[s + 3] * r,
                          o[s] * i + o[s + 2] * a + o[s + 4],
                          o[s + 1] * i + o[s + 3] * a + o[s + 5]
                        ),
                          this.H.push(
                            this.C.transform.bind(this.C, e, t, n, r, i, a)
                          );
                      },
                      rotate: function (e) {
                        let t = Math.sin(e);
                        (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                      },
                      _drawPath: function (e, t) {
                        this.H.push(
                          t.draw.bind(
                            t,
                            this.C,
                            e.T,
                            e.Va === b ? "evenodd" : "nonzero"
                          )
                        );
                      },
                      _drawRiveImage: function (e, t, r) {
                        var i = e.Fb;
                        if (i) {
                          var a = this.C,
                            o = n(t);
                          this.H.push(function () {
                            (a.globalCompositeOperation = o),
                              (a.globalAlpha = r),
                              a.drawImage(i, 0, 0),
                              (a.globalAlpha = 1);
                          });
                        }
                      },
                      _getMatrix: function (e) {
                        let t = this.S,
                          n = t.length - 6;
                        for (let r = 0; 6 > r; ++r) e[r] = t[n + r];
                      },
                      _drawImageMesh: function (t, r, a, s, u, l, c, h, f, d) {
                        var p = this.C.canvas.width,
                          m = this.C.canvas.height;
                        let v = f - c,
                          b = d - h;
                        (c = Math.max(c, 0)), (h = Math.max(h, 0));
                        let g = (f = Math.min(f, p)) - c,
                          y = (d = Math.min(d, m)) - h;
                        if (
                          (console.assert(g <= Math.min(v, p)),
                          console.assert(y <= Math.min(b, m)),
                          !(0 >= g || 0 >= y))
                        ) {
                          (f = g < v || y < b), (p = d = 1);
                          var w = Math.ceil(g * d),
                            _ = Math.ceil(y * p);
                          (m = o.hc()),
                            w > m && ((d *= m / w), (w = m)),
                            _ > m && ((p *= m / _), (_ = m)),
                            C ||
                              (C = new e.DynamicRectanizer(m)).reset(512, 512),
                            0 > (m = C.addRect(w, _)) &&
                              (i(),
                              A.add(this),
                              console.assert(0 <= (m = C.addRect(w, _))));
                          var P = 65535 & m,
                            T = m >> 16;
                          M.push({
                            ha: this.S.slice(this.S.length - 6),
                            image: t,
                            Ya: P,
                            Za: T,
                            ic: c,
                            jc: h,
                            Ac: w,
                            jb: _,
                            Ba: d,
                            Ca: p,
                            Ta: new Float32Array(s),
                            Db: new Float32Array(u),
                            indices: new Uint16Array(l),
                            mc: f,
                            wb: (t.Ka << 1) | !!f,
                          }),
                            (E += s.length),
                            (R += l.length);
                          var I = this.C,
                            L = n(r);
                          this.H.push(function () {
                            I.save(),
                              I.resetTransform(),
                              (I.globalCompositeOperation = L),
                              (I.globalAlpha = a);
                            let e = o.canvas();
                            e && I.drawImage(e, P, T, w, _, c, h, g, y),
                              I.restore();
                          });
                        }
                      },
                      _clipPath: function (e) {
                        this.H.push(
                          this.C.clip.bind(
                            this.C,
                            e.T,
                            e.Va === b ? "evenodd" : "nonzero"
                          )
                        );
                      },
                      clear: function () {
                        A.add(this),
                          this.H.push(
                            this.C.clearRect.bind(
                              this.C,
                              0,
                              0,
                              this.Ua.width,
                              this.Ua.height
                            )
                          );
                      },
                      flush: function () {},
                      translate: function (e, t) {
                        this.transform(1, 0, 0, 1, e, t);
                      },
                    }));
                    (e.makeRenderer = function (e) {
                      let t = new P(e),
                        n = t.C;
                      return new Proxy(t, {
                        get(e, r) {
                          if ("function" == typeof e[r])
                            return function (...t) {
                              return e[r].apply(e, t);
                            };
                          if ("function" == typeof n[r]) {
                            if (-1 < a.indexOf(r))
                              throw Error(
                                "RiveException: Method call to '" +
                                  r +
                                  "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods."
                              );
                            return function (...e) {
                              t.H.push(n[r].bind(n, ...e));
                            };
                          }
                          return e[r];
                        },
                        set(e, r, i) {
                          if (r in n)
                            return (
                              t.H.push(() => {
                                n[r] = i;
                              }),
                              !0
                            );
                        },
                      });
                    }),
                      (e.decodeImage = function (e, t) {
                        new y({ la: t }).decode(e);
                      }),
                      (e.renderFactory = {
                        makeRenderPaint: function () {
                          return new _();
                        },
                        makeRenderPath: function () {
                          return new w();
                        },
                        makeRenderImage: function () {
                          let e = I;
                          return new y({
                            xa: () => {
                              e.total++;
                            },
                            la: () => {
                              if ((e.loaded++, e.loaded === e.total)) {
                                let t = e.ready;
                                t && (t(), (e.ready = null));
                              }
                            },
                          });
                        },
                      });
                    let T = e.load,
                      I = null;
                    e.load = function (t, n, r = !0) {
                      let i = new e.FallbackFileAssetLoader();
                      return (
                        void 0 !== n && i.addLoader(n),
                        r && ((n = new e.CDNFileAssetLoader()), i.addLoader(n)),
                        new Promise(function (e) {
                          let n = null;
                          (I = {
                            total: 0,
                            loaded: 0,
                            ready: function () {
                              e(n);
                            },
                          }),
                            (n = T(t, i)),
                            0 == I.total && e(n);
                        })
                      );
                    };
                    let L = e.RendererWrapper.prototype.align;
                    (e.RendererWrapper.prototype.align = function (
                      e,
                      t,
                      n,
                      r,
                      i = 1
                    ) {
                      L.call(this, e, t, n, r, i);
                    }),
                      (e.requestAnimationFrame = (u =
                        new t()).requestAnimationFrame.bind(u)),
                      (e.cancelAnimationFrame = u.cancelAnimationFrame.bind(u)),
                      (e.enableFPSCounter = u.Rb.bind(u)),
                      (e.disableFPSCounter = u.Ob),
                      (u.ob = i),
                      (e.resolveAnimationFrame = i),
                      (e.cleanup = function () {
                        C && C.delete();
                      });
                  };
                  var u,
                    l,
                    c,
                    h,
                    f,
                    d,
                    p,
                    m,
                    v,
                    b = Object.assign({}, e),
                    g = "./this.program",
                    y = "object" == typeof window,
                    w = "function" == typeof importScripts,
                    _ = "";
                  (y || w) &&
                    (w
                      ? (_ = self.location.href)
                      : "undefined" != typeof document &&
                        document.currentScript &&
                        (_ = document.currentScript.src),
                    r && (_ = r),
                    (_ =
                      0 !== _.indexOf("blob:")
                        ? _.substr(
                            0,
                            _.replace(/[?#].*/, "").lastIndexOf("/") + 1
                          )
                        : ""),
                    w &&
                      (v = (e) => {
                        var t = new XMLHttpRequest();
                        return (
                          t.open("GET", e, !1),
                          (t.responseType = "arraybuffer"),
                          t.send(null),
                          new Uint8Array(t.response)
                        );
                      }),
                    (m = (e, t, n) => {
                      var r = new XMLHttpRequest();
                      r.open("GET", e, !0),
                        (r.responseType = "arraybuffer"),
                        (r.onload = () => {
                          200 == r.status || (0 == r.status && r.response)
                            ? t(r.response)
                            : n();
                        }),
                        (r.onerror = n),
                        r.send(null);
                    }));
                  var A = e.print || console.log.bind(console),
                    C = e.printErr || console.error.bind(console);
                  Object.assign(e, b),
                    (b = null),
                    e.thisProgram && (g = e.thisProgram),
                    e.wasmBinary && (M = e.wasmBinary),
                    e.noExitRuntime,
                    "object" != typeof WebAssembly &&
                      H("no native wasm support detected");
                  var M,
                    E,
                    R,
                    P,
                    T,
                    I,
                    L,
                    F,
                    x,
                    j,
                    S,
                    k = !1;
                  function O() {
                    var t = E.buffer;
                    (e.HEAP8 = P = new Int8Array(t)),
                      (e.HEAP16 = I = new Int16Array(t)),
                      (e.HEAP32 = F = new Int32Array(t)),
                      (e.HEAPU8 = T = new Uint8Array(t)),
                      (e.HEAPU16 = L = new Uint16Array(t)),
                      (e.HEAPU32 = x = new Uint32Array(t)),
                      (e.HEAPF32 = j = new Float32Array(t)),
                      (e.HEAPF64 = S = new Float64Array(t));
                  }
                  var D,
                    U = [],
                    B = [],
                    W = [],
                    N = 0,
                    V = null,
                    $ = null;
                  function H(t) {
                    throw (
                      (e.onAbort && e.onAbort(t),
                      C((t = "Aborted(" + t + ")")),
                      (k = !0),
                      (t = new WebAssembly.RuntimeError(
                        t + ". Build with -sASSERTIONS for more info."
                      )),
                      p(t),
                      t)
                    );
                  }
                  function Y(e) {
                    return e.startsWith(
                      "data:application/octet-stream;base64,"
                    );
                  }
                  if (!Y((q = "canvas_advanced.wasm"))) {
                    var z = q;
                    q = e.locateFile ? e.locateFile(z, _) : _ + z;
                  }
                  function X(e) {
                    if (e == q && M) return new Uint8Array(M);
                    if (v) return v(e);
                    throw "both async and sync fetching of the wasm failed";
                  }
                  function G(e, t, n) {
                    return (function (e) {
                      if (!M && (y || w)) {
                        if (
                          "function" == typeof fetch &&
                          !e.startsWith("file://")
                        )
                          return fetch(e, { credentials: "same-origin" })
                            .then((t) => {
                              if (!t.ok)
                                throw (
                                  "failed to load wasm binary file at '" +
                                  e +
                                  "'"
                                );
                              return t.arrayBuffer();
                            })
                            .catch(() => X(e));
                        if (m)
                          return new Promise((t, n) => {
                            m(e, (e) => t(new Uint8Array(e)), n);
                          });
                      }
                      return Promise.resolve().then(() => X(e));
                    })(e)
                      .then((e) => WebAssembly.instantiate(e, t))
                      .then((e) => e)
                      .then(n, (e) => {
                        C("failed to asynchronously prepare wasm: " + e), H(e);
                      });
                  }
                  var q,
                    J,
                    K,
                    Z = {
                      449500: (e, t, n, r, i) => {
                        if (
                          "undefined" == typeof window ||
                          void 0 ===
                            (window.AudioContext || window.webkitAudioContext)
                        )
                          return 0;
                        if (void 0 === window.h) {
                          (window.h = { Aa: 0 }),
                            (window.h.I = {}),
                            (window.h.I.ya = e),
                            (window.h.I.capture = t),
                            (window.h.I.La = n),
                            (window.h.ga = {}),
                            (window.h.ga.stopped = r),
                            (window.h.ga.xb = i);
                          let a = window.h;
                          (a.D = []),
                            (a.yc = function (e) {
                              for (var t = 0; t < a.D.length; ++t)
                                if (null == a.D[t]) return (a.D[t] = e), t;
                              return a.D.push(e), a.D.length - 1;
                            }),
                            (a.Cb = function (e) {
                              for (a.D[e] = null; 0 < a.D.length; )
                                if (null == a.D[a.D.length - 1]) a.D.pop();
                                else break;
                            }),
                            (a.Sc = function (e) {
                              for (var t = 0; t < a.D.length; ++t)
                                if (a.D[t] == e) return a.Cb(t);
                            }),
                            (a.ra = function (e) {
                              return a.D[e];
                            }),
                            (a.Bb = ["touchend", "click"]),
                            (a.unlock = function () {
                              for (var e = 0; e < a.D.length; ++e) {
                                var t = a.D[e];
                                null != t &&
                                  null != t.J &&
                                  t.state === a.ga.xb &&
                                  t.J.resume().then(
                                    () => {
                                      nc(t.pb);
                                    },
                                    (e) => {
                                      console.error(
                                        "Failed to resume audiocontext",
                                        e
                                      );
                                    }
                                  );
                              }
                              a.Bb.map(function (e) {
                                document.removeEventListener(e, a.unlock, !0);
                              });
                            }),
                            a.Bb.map(function (e) {
                              document.addEventListener(e, a.unlock, !0);
                            });
                        }
                        return (window.h.Aa += 1), 1;
                      },
                      451678: () => {
                        void 0 !== window.h &&
                          (--window.h.Aa, 0 === window.h.Aa && delete window.h);
                      },
                      451842: () =>
                        void 0 !== navigator.mediaDevices &&
                        void 0 !== navigator.mediaDevices.getUserMedia,
                      451946: () => {
                        try {
                          var e = new (window.AudioContext ||
                              window.webkitAudioContext)(),
                            t = e.sampleRate;
                          return e.close(), t;
                        } catch (e) {
                          return 0;
                        }
                      },
                      452117: (e, t, n, r, i, a) => {
                        if (void 0 === window.h) return -1;
                        var o = {},
                          s = {};
                        return (
                          e == window.h.I.ya && 0 != n && (s.sampleRate = n),
                          (o.J = new (window.AudioContext ||
                            window.webkitAudioContext)(s)),
                          o.J.suspend(),
                          (o.state = window.h.ga.stopped),
                          (n = 0),
                          e != window.h.I.ya && (n = t),
                          (o.Z = o.J.createScriptProcessor(r, n, t)),
                          (o.Z.onaudioprocess = function (n) {
                            if (
                              ((null == o.sa || 0 == o.sa.length) &&
                                (o.sa = new Float32Array(j.buffer, i, r * t)),
                              e == window.h.I.capture || e == window.h.I.La)
                            ) {
                              for (var s = 0; s < t; s += 1)
                                for (
                                  var u = n.inputBuffer.getChannelData(s),
                                    l = o.sa,
                                    c = 0;
                                  c < r;
                                  c += 1
                                )
                                  l[c * t + s] = u[c];
                              nh(a, r, i);
                            }
                            if (e == window.h.I.ya || e == window.h.I.La)
                              for (
                                nf(a, r, i), s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                for (
                                  u = n.outputBuffer.getChannelData(s),
                                    l = o.sa,
                                    c = 0;
                                  c < r;
                                  c += 1
                                )
                                  u[c] = l[c * t + s];
                            else
                              for (
                                s = 0;
                                s < n.outputBuffer.numberOfChannels;
                                ++s
                              )
                                n.outputBuffer.getChannelData(s).fill(0);
                          }),
                          (e != window.h.I.capture && e != window.h.I.La) ||
                            navigator.mediaDevices
                              .getUserMedia({ audio: !0, video: !1 })
                              .then(function (e) {
                                (o.Da = o.J.createMediaStreamSource(e)),
                                  o.Da.connect(o.Z),
                                  o.Z.connect(o.J.destination);
                              })
                              .catch(function (e) {
                                console.log("Failed to get user media: " + e);
                              }),
                          e == window.h.I.ya && o.Z.connect(o.J.destination),
                          (o.pb = a),
                          window.h.yc(o)
                        );
                      },
                      454994: (e) => window.h.ra(e).J.sampleRate,
                      455067: (e) => {
                        void 0 !== (e = window.h.ra(e)).Z &&
                          ((e.Z.onaudioprocess = function () {}),
                          e.Z.disconnect(),
                          (e.Z = void 0)),
                          void 0 !== e.Da &&
                            (e.Da.disconnect(), (e.Da = void 0)),
                          e.J.close(),
                          (e.J = void 0),
                          (e.pb = void 0);
                      },
                      455467: (e) => {
                        window.h.Cb(e);
                      },
                      455517: (e) => {
                        (e = window.h.ra(e)).J.resume(),
                          (e.state = window.h.ga.xb);
                      },
                      455656: (e) => {
                        (e = window.h.ra(e)).J.suspend(),
                          (e.state = window.h.ga.stopped);
                      },
                    },
                    Q = (t) => {
                      for (; 0 < t.length; ) t.shift()(e);
                    },
                    ee = (e, t) => {
                      for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                        var i = e[r];
                        "." === i
                          ? e.splice(r, 1)
                          : ".." === i
                          ? (e.splice(r, 1), n++)
                          : n && (e.splice(r, 1), n--);
                      }
                      if (t) for (; n; n--) e.unshift("..");
                      return e;
                    },
                    et = (e) => {
                      var t = "/" === e.charAt(0),
                        n = "/" === e.substr(-1);
                      return (
                        (e = ee(
                          e.split("/").filter((e) => !!e),
                          !t
                        ).join("/")) ||
                          t ||
                          (e = "."),
                        e && n && (e += "/"),
                        (t ? "/" : "") + e
                      );
                    },
                    en = (e) => {
                      var t =
                        /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                          .exec(e)
                          .slice(1);
                      return ((e = t[0]), (t = t[1]), e || t)
                        ? (t && (t = t.substr(0, t.length - 1)), e + t)
                        : ".";
                    },
                    er = (e) => {
                      if ("/" === e) return "/";
                      var t = (e = (e = et(e)).replace(/\/$/, "")).lastIndexOf(
                        "/"
                      );
                      return -1 === t ? e : e.substr(t + 1);
                    },
                    ei = () => {
                      if (
                        "object" == typeof crypto &&
                        "function" == typeof crypto.getRandomValues
                      )
                        return (e) => crypto.getRandomValues(e);
                      H("initRandomDevice");
                    },
                    ea = (e) => (ea = ei())(e);
                  function eo() {
                    for (
                      var e = "", t = !1, n = arguments.length - 1;
                      -1 <= n && !t;
                      n--
                    ) {
                      if (
                        ((t = 0 <= n ? arguments[n] : "/"),
                        "string" != typeof t)
                      )
                        throw TypeError(
                          "Arguments to path.resolve must be strings"
                        );
                      if (!t) return "";
                      (e = t + "/" + e), (t = "/" === t.charAt(0));
                    }
                    return (
                      (e = ee(
                        e.split("/").filter((e) => !!e),
                        !t
                      ).join("/")),
                      (t ? "/" : "") + e || "."
                    );
                  }
                  var es =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf8")
                        : void 0,
                    eu = (e, t, n) => {
                      var r = t + n;
                      for (n = t; e[n] && !(n >= r); ) ++n;
                      if (16 < n - t && e.buffer && es)
                        return es.decode(e.subarray(t, n));
                      for (r = ""; t < n; ) {
                        var i = e[t++];
                        if (128 & i) {
                          var a = 63 & e[t++];
                          if (192 == (224 & i))
                            r += String.fromCharCode(((31 & i) << 6) | a);
                          else {
                            var o = 63 & e[t++];
                            65536 >
                            (i =
                              224 == (240 & i)
                                ? ((15 & i) << 12) | (a << 6) | o
                                : ((7 & i) << 18) |
                                  (a << 12) |
                                  (o << 6) |
                                  (63 & e[t++]))
                              ? (r += String.fromCharCode(i))
                              : ((i -= 65536),
                                (r += String.fromCharCode(
                                  55296 | (i >> 10),
                                  56320 | (1023 & i)
                                )));
                          }
                        } else r += String.fromCharCode(i);
                      }
                      return r;
                    },
                    el = [],
                    ec = (e) => {
                      for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        127 >= r
                          ? t++
                          : 2047 >= r
                          ? (t += 2)
                          : 55296 <= r && 57343 >= r
                          ? ((t += 4), ++n)
                          : (t += 3);
                      }
                      return t;
                    },
                    eh = (e, t, n, r) => {
                      if (!(0 < r)) return 0;
                      var i = n;
                      r = n + r - 1;
                      for (var a = 0; a < e.length; ++a) {
                        var o = e.charCodeAt(a);
                        if (
                          (55296 <= o &&
                            57343 >= o &&
                            (o =
                              (65536 + ((1023 & o) << 10)) |
                              (1023 & e.charCodeAt(++a))),
                          127 >= o)
                        ) {
                          if (n >= r) break;
                          t[n++] = o;
                        } else {
                          if (2047 >= o) {
                            if (n + 1 >= r) break;
                            t[n++] = 192 | (o >> 6);
                          } else {
                            if (65535 >= o) {
                              if (n + 2 >= r) break;
                              t[n++] = 224 | (o >> 12);
                            } else {
                              if (n + 3 >= r) break;
                              (t[n++] = 240 | (o >> 18)),
                                (t[n++] = 128 | ((o >> 12) & 63));
                            }
                            t[n++] = 128 | ((o >> 6) & 63);
                          }
                          t[n++] = 128 | (63 & o);
                        }
                      }
                      return (t[n] = 0), n - i;
                    };
                  function ef(e, t) {
                    var n = Array(ec(e) + 1);
                    return (e = eh(e, n, 0, n.length)), t && (n.length = e), n;
                  }
                  var ed = [];
                  function ep(e, t) {
                    (ed[e] = { input: [], F: [], V: t }), eV(e, em);
                  }
                  var em = {
                    open: function (e) {
                      var t = ed[e.node.za];
                      if (!t) throw new eT(43);
                      (e.s = t), (e.seekable = !1);
                    },
                    close: function (e) {
                      e.s.V.qa(e.s);
                    },
                    qa: function (e) {
                      e.s.V.qa(e.s);
                    },
                    read: function (e, t, n, r) {
                      if (!e.s || !e.s.V.ib) throw new eT(60);
                      for (var i = 0, a = 0; a < r; a++) {
                        try {
                          var o = e.s.V.ib(e.s);
                        } catch (e) {
                          throw new eT(29);
                        }
                        if (void 0 === o && 0 === i) throw new eT(6);
                        if (null == o) break;
                        i++, (t[n + a] = o);
                      }
                      return i && (e.node.timestamp = Date.now()), i;
                    },
                    write: function (e, t, n, r) {
                      if (!e.s || !e.s.V.Oa) throw new eT(60);
                      try {
                        for (var i = 0; i < r; i++) e.s.V.Oa(e.s, t[n + i]);
                      } catch (e) {
                        throw new eT(29);
                      }
                      return r && (e.node.timestamp = Date.now()), i;
                    },
                  };
                  function ev(e, t) {
                    var n = e.j ? e.j.length : 0;
                    n >= t ||
                      ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) >>> 0)),
                      0 != n && (t = Math.max(t, 256)),
                      (n = e.j),
                      (e.j = new Uint8Array(t)),
                      0 < e.v && e.j.set(n.subarray(0, e.v), 0));
                  }
                  var eb,
                    eg,
                    ey,
                    ew,
                    e_ = {
                      O: null,
                      U: () => e_.createNode(null, "/", 16895, 0),
                      createNode(e, t, n, r) {
                        if (24576 == (61440 & n) || 4096 == (61440 & n))
                          throw new eT(63);
                        return (
                          e_.O ||
                            (e_.O = {
                              dir: {
                                node: {
                                  Y: e_.l.Y,
                                  P: e_.l.P,
                                  ka: e_.l.ka,
                                  va: e_.l.va,
                                  ub: e_.l.ub,
                                  Ab: e_.l.Ab,
                                  vb: e_.l.vb,
                                  sb: e_.l.sb,
                                  Ea: e_.l.Ea,
                                },
                                stream: { ba: e_.m.ba },
                              },
                              file: {
                                node: { Y: e_.l.Y, P: e_.l.P },
                                stream: {
                                  ba: e_.m.ba,
                                  read: e_.m.read,
                                  write: e_.m.write,
                                  pa: e_.m.pa,
                                  lb: e_.m.lb,
                                  nb: e_.m.nb,
                                },
                              },
                              link: {
                                node: { Y: e_.l.Y, P: e_.l.P, ma: e_.l.ma },
                                stream: {},
                              },
                              $a: {
                                node: { Y: e_.l.Y, P: e_.l.P },
                                stream: eN,
                              },
                            }),
                          16384 == (61440 & (n = eS(e, t, n, r)).mode)
                            ? ((n.l = e_.O.dir.node),
                              (n.m = e_.O.dir.stream),
                              (n.j = {}))
                            : 32768 == (61440 & n.mode)
                            ? ((n.l = e_.O.file.node),
                              (n.m = e_.O.file.stream),
                              (n.v = 0),
                              (n.j = null))
                            : 40960 == (61440 & n.mode)
                            ? ((n.l = e_.O.link.node), (n.m = e_.O.link.stream))
                            : 8192 == (61440 & n.mode) &&
                              ((n.l = e_.O.$a.node), (n.m = e_.O.$a.stream)),
                          (n.timestamp = Date.now()),
                          e && ((e.j[t] = n), (e.timestamp = n.timestamp)),
                          n
                        );
                      },
                      Kc: (e) =>
                        e.j
                          ? e.j.subarray
                            ? e.j.subarray(0, e.v)
                            : new Uint8Array(e.j)
                          : new Uint8Array(0),
                      l: {
                        Y(e) {
                          var t = {};
                          return (
                            (t.Jc = 8192 == (61440 & e.mode) ? e.id : 1),
                            (t.Mc = e.id),
                            (t.mode = e.mode),
                            (t.Oc = 1),
                            (t.uid = 0),
                            (t.Lc = 0),
                            (t.za = e.za),
                            16384 == (61440 & e.mode)
                              ? (t.size = 4096)
                              : 32768 == (61440 & e.mode)
                              ? (t.size = e.v)
                              : 40960 == (61440 & e.mode)
                              ? (t.size = e.link.length)
                              : (t.size = 0),
                            (t.Bc = new Date(e.timestamp)),
                            (t.Nc = new Date(e.timestamp)),
                            (t.Ic = new Date(e.timestamp)),
                            (t.Jb = 4096),
                            (t.Cc = Math.ceil(t.size / t.Jb)),
                            t
                          );
                        },
                        P(e, t) {
                          if (
                            (void 0 !== t.mode && (e.mode = t.mode),
                            void 0 !== t.timestamp &&
                              (e.timestamp = t.timestamp),
                            void 0 !== t.size && ((t = t.size), e.v != t))
                          )
                            if (0 == t) (e.j = null), (e.v = 0);
                            else {
                              var n = e.j;
                              (e.j = new Uint8Array(t)),
                                n && e.j.set(n.subarray(0, Math.min(t, e.v))),
                                (e.v = t);
                            }
                        },
                        ka() {
                          throw eI[44];
                        },
                        va: (e, t, n, r) => e_.createNode(e, t, n, r),
                        ub(e, t, n) {
                          if (16384 == (61440 & e.mode)) {
                            try {
                              var r = ej(t, n);
                            } catch (e) {}
                            if (r) for (var i in r.j) throw new eT(55);
                          }
                          delete e.parent.j[e.name],
                            (e.parent.timestamp = Date.now()),
                            (e.name = n),
                            (t.j[n] = e),
                            (t.timestamp = e.parent.timestamp),
                            (e.parent = t);
                        },
                        Ab(e, t) {
                          delete e.j[t], (e.timestamp = Date.now());
                        },
                        vb(e, t) {
                          var n,
                            r = ej(e, t);
                          for (n in r.j) throw new eT(55);
                          delete e.j[t], (e.timestamp = Date.now());
                        },
                        sb(e) {
                          var t,
                            n = [".", ".."];
                          for (t in e.j) e.j.hasOwnProperty(t) && n.push(t);
                          return n;
                        },
                        Ea: (e, t, n) => (
                          ((e = e_.createNode(e, t, 41471, 0)).link = n), e
                        ),
                        ma(e) {
                          if (40960 != (61440 & e.mode)) throw new eT(28);
                          return e.link;
                        },
                      },
                      m: {
                        read(e, t, n, r, i) {
                          var a = e.node.j;
                          if (i >= e.node.v) return 0;
                          if (8 < (e = Math.min(e.node.v - i, r)) && a.subarray)
                            t.set(a.subarray(i, i + e), n);
                          else for (r = 0; r < e; r++) t[n + r] = a[i + r];
                          return e;
                        },
                        write(e, t, n, r, i, a) {
                          if ((t.buffer === P.buffer && (a = !1), !r)) return 0;
                          if (
                            (((e = e.node).timestamp = Date.now()),
                            t.subarray && (!e.j || e.j.subarray))
                          ) {
                            if (a)
                              return (e.j = t.subarray(n, n + r)), (e.v = r);
                            if (0 === e.v && 0 === i)
                              return (e.j = t.slice(n, n + r)), (e.v = r);
                            if (i + r <= e.v)
                              return e.j.set(t.subarray(n, n + r), i), r;
                          }
                          if ((ev(e, i + r), e.j.subarray && t.subarray))
                            e.j.set(t.subarray(n, n + r), i);
                          else for (a = 0; a < r; a++) e.j[i + a] = t[n + a];
                          return (e.v = Math.max(e.v, i + r)), r;
                        },
                        ba(e, t, n) {
                          if (
                            (1 === n
                              ? (t += e.position)
                              : 2 === n &&
                                32768 == (61440 & e.node.mode) &&
                                (t += e.node.v),
                            0 > t)
                          )
                            throw new eT(28);
                          return t;
                        },
                        pa(e, t, n) {
                          ev(e.node, t + n),
                            (e.node.v = Math.max(e.node.v, t + n));
                        },
                        lb(e, t, n, r, i) {
                          if (32768 != (61440 & e.node.mode)) throw new eT(43);
                          if (((e = e.node.j), 2 & i || e.buffer !== P.buffer))
                            throw (
                              ((0 < n || n + t < e.length) &&
                                (e = e.subarray
                                  ? e.subarray(n, n + t)
                                  : Array.prototype.slice.call(e, n, n + t)),
                              (n = !0),
                              H(),
                              (t = void 0),
                              new eT(48))
                            );
                          return (n = !1), (t = e.byteOffset), { o: t, M: n };
                        },
                        nb: (e, t, n, r) => (e_.m.write(e, t, 0, r, n, !1), 0),
                      },
                    },
                    eA = null,
                    eC = {},
                    eM = [],
                    eE = 1,
                    eR = null,
                    eP = !0,
                    eT = null,
                    eI = {},
                    eL = (e, t = {}) => {
                      if (!(e = eo(e))) return { path: "", node: null };
                      if (8 < (t = Object.assign({ gb: !0, Qa: 0 }, t)).Qa)
                        throw new eT(32);
                      e = e.split("/").filter((e) => !!e);
                      for (var n = eA, r = "/", i = 0; i < e.length; i++) {
                        var a = i === e.length - 1;
                        if (a && t.parent) break;
                        if (
                          ((n = ej(n, e[i])),
                          (r = et(r + "/" + e[i])),
                          n.wa && (!a || (a && t.gb)) && (n = n.wa.root),
                          !a || t.fb)
                        ) {
                          for (a = 0; 40960 == (61440 & n.mode); )
                            if (
                              ((n = eX(r)),
                              (n = eL((r = eo(en(r), n)), {
                                Qa: t.Qa + 1,
                              }).node),
                              40 < a++)
                            )
                              throw new eT(32);
                        }
                      }
                      return { path: r, node: n };
                    },
                    eF = (e) => {
                      for (var t; ; ) {
                        if (e === e.parent)
                          return (
                            (e = e.U.mb),
                            t
                              ? "/" !== e[e.length - 1]
                                ? `${e}/${t}`
                                : e + t
                              : e
                          );
                        (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                      }
                    },
                    ex = (e, t) => {
                      for (var n = 0, r = 0; r < t.length; r++)
                        n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                      return ((e + n) >>> 0) % eR.length;
                    },
                    ej = (e, t) => {
                      var n;
                      if ((n = (n = eO(e, "x")) ? n : 2 * !e.l.ka))
                        throw new eT(n, e);
                      for (n = eR[ex(e.id, t)]; n; n = n.lc) {
                        var r = n.name;
                        if (n.parent.id === e.id && r === t) return n;
                      }
                      return e.l.ka(e, t);
                    },
                    eS = (e, t, n, r) => (
                      (t = ex((e = new ni(e, t, n, r)).parent.id, e.name)),
                      (e.lc = eR[t]),
                      (eR[t] = e)
                    ),
                    ek = (e) => {
                      var t = ["r", "w", "rw"][3 & e];
                      return 512 & e && (t += "w"), t;
                    },
                    eO = (e, t) =>
                      eP
                        ? 0
                        : (t.includes("r") && !(292 & e.mode)) ||
                          (t.includes("w") && !(146 & e.mode)) ||
                          (t.includes("x") && !(73 & e.mode))
                        ? 2
                        : 0,
                    eD = (e, t) => {
                      try {
                        return ej(e, t), 20;
                      } catch (e) {}
                      return eO(e, "wx");
                    },
                    eU = () => {
                      for (var e = 0; 4096 >= e; e++) if (!eM[e]) return e;
                      throw new eT(33);
                    },
                    eB = (e) => {
                      if (!(e = eM[e])) throw new eT(8);
                      return e;
                    },
                    eW = (e, t = -1) => (
                      ey ||
                        (((ey = function () {
                          this.h = {};
                        }).prototype = {}),
                        Object.defineProperties(ey.prototype, {
                          object: {
                            get() {
                              return this.node;
                            },
                            set(e) {
                              this.node = e;
                            },
                          },
                          flags: {
                            get() {
                              return this.h.flags;
                            },
                            set(e) {
                              this.h.flags = e;
                            },
                          },
                          position: {
                            get() {
                              return this.h.position;
                            },
                            set(e) {
                              this.h.position = e;
                            },
                          },
                        })),
                      (e = Object.assign(new ey(), e)),
                      -1 == t && (t = eU()),
                      (e.X = t),
                      (eM[t] = e)
                    ),
                    eN = {
                      open: (e) => {
                        (e.m = eC[e.node.za].m), e.m.open && e.m.open(e);
                      },
                      ba: () => {
                        throw new eT(70);
                      },
                    },
                    eV = (e, t) => {
                      eC[e] = { m: t };
                    },
                    e$ = (e, t) => {
                      var n = "/" === t,
                        r = !t;
                      if (n && eA) throw new eT(10);
                      if (!n && !r) {
                        var i = eL(t, { gb: !1 });
                        if (((t = i.path), (i = i.node).wa)) throw new eT(10);
                        if (16384 != (61440 & i.mode)) throw new eT(54);
                      }
                      (t = { type: e, Qc: {}, mb: t, kc: [] }),
                        ((e = e.U(t)).U = t),
                        (t.root = e),
                        n ? (eA = e) : i && ((i.wa = t), i.U && i.U.kc.push(t));
                    },
                    eH = (e, t, n) => {
                      var r = eL(e, { parent: !0 }).node;
                      if (!(e = er(e)) || "." === e || ".." === e)
                        throw new eT(28);
                      var i = eD(r, e);
                      if (i) throw new eT(i);
                      if (!r.l.va) throw new eT(63);
                      return r.l.va(r, e, t, n);
                    },
                    eY = (e, t, n) => {
                      void 0 === n && ((n = t), (t = 438)), eH(e, 8192 | t, n);
                    },
                    ez = (e, t) => {
                      if (!eo(e)) throw new eT(44);
                      var n = eL(t, { parent: !0 }).node;
                      if (!n) throw new eT(44);
                      var r = eD(n, (t = er(t)));
                      if (r) throw new eT(r);
                      if (!n.l.Ea) throw new eT(63);
                      n.l.Ea(n, t, e);
                    },
                    eX = (e) => {
                      if (!(e = eL(e).node)) throw new eT(44);
                      if (!e.l.ma) throw new eT(28);
                      return eo(eF(e.parent), e.l.ma(e));
                    },
                    eG = (t, n, r) => {
                      if ("" === t) throw new eT(44);
                      if ("string" == typeof n) {
                        var i = {
                          r: 0,
                          "r+": 2,
                          w: 577,
                          "w+": 578,
                          a: 1089,
                          "a+": 1090,
                        }[n];
                        if (void 0 === i)
                          throw Error(`Unknown file open mode: ${n}`);
                        n = i;
                      }
                      if (
                        ((r =
                          64 & n
                            ? ((void 0 === r ? 438 : r) & 4095) | 32768
                            : 0),
                        "object" == typeof t)
                      )
                        var a = t;
                      else {
                        t = et(t);
                        try {
                          a = eL(t, { fb: !(131072 & n) }).node;
                        } catch (e) {}
                      }
                      if (((i = !1), 64 & n))
                        if (a) {
                          if (128 & n) throw new eT(20);
                        } else (a = eH(t, r, 0)), (i = !0);
                      if (!a) throw new eT(44);
                      if (
                        (8192 == (61440 & a.mode) && (n &= -513),
                        65536 & n && 16384 != (61440 & a.mode))
                      )
                        throw new eT(54);
                      if (
                        !i &&
                        (r = a
                          ? 40960 == (61440 & a.mode)
                            ? 32
                            : 16384 == (61440 & a.mode) &&
                              ("r" !== ek(n) || 512 & n)
                            ? 31
                            : eO(a, ek(n))
                          : 44)
                      )
                        throw new eT(r);
                      if (512 & n && !i) {
                        if (
                          !(r =
                            "string" == typeof (r = a)
                              ? eL(r, { fb: !0 }).node
                              : r).l.P
                        )
                          throw new eT(63);
                        if (16384 == (61440 & r.mode)) throw new eT(31);
                        if (32768 != (61440 & r.mode)) throw new eT(28);
                        if ((i = eO(r, "w"))) throw new eT(i);
                        r.l.P(r, { size: 0, timestamp: Date.now() });
                      }
                      return (
                        (n &= -131713),
                        (a = eW({
                          node: a,
                          path: eF(a),
                          flags: n,
                          seekable: !0,
                          position: 0,
                          m: a.m,
                          zc: [],
                          error: !1,
                        })).m.open && a.m.open(a),
                        !e.logReadFiles ||
                          1 & n ||
                          (ew || (ew = {}), t in ew || (ew[t] = 1)),
                        a
                      );
                    },
                    eq = (e, t, n) => {
                      if (null === e.X) throw new eT(8);
                      if (!e.seekable || !e.m.ba) throw new eT(70);
                      if (0 != n && 1 != n && 2 != n) throw new eT(28);
                      (e.position = e.m.ba(e, t, n)), (e.zc = []);
                    },
                    eJ = () => {
                      eT ||
                        (((eT = function (e, t) {
                          (this.name = "ErrnoError"),
                            (this.node = t),
                            (this.pc = function (e) {
                              this.aa = e;
                            }),
                            this.pc(e),
                            (this.message = "FS error");
                        }).prototype = Error()),
                        (eT.prototype.constructor = eT),
                        [44].forEach((e) => {
                          (eI[e] = new eT(e)),
                            (eI[e].stack = "<generic error, no stack>");
                        }));
                    },
                    eK = (e, t, n) => {
                      e = et("/dev/" + e);
                      var r,
                        i = ((r = 0), t && (r |= 365), n && (r |= 146), r);
                      eg || (eg = 64);
                      var a = eg++ << 8;
                      eV(a, {
                        open: (e) => {
                          e.seekable = !1;
                        },
                        close: () => {
                          n && n.buffer && n.buffer.length && n(10);
                        },
                        read: (e, n, r, i) => {
                          for (var a = 0, o = 0; o < i; o++) {
                            try {
                              var s = t();
                            } catch (e) {
                              throw new eT(29);
                            }
                            if (void 0 === s && 0 === a) throw new eT(6);
                            if (null == s) break;
                            a++, (n[r + o] = s);
                          }
                          return a && (e.node.timestamp = Date.now()), a;
                        },
                        write: (e, t, r, i) => {
                          for (var a = 0; a < i; a++)
                            try {
                              n(t[r + a]);
                            } catch (e) {
                              throw new eT(29);
                            }
                          return i && (e.node.timestamp = Date.now()), a;
                        },
                      }),
                        eY(e, i, a);
                    },
                    eZ = {},
                    eQ = void 0;
                  function e0() {
                    return F[((eQ += 4) - 4) >> 2];
                  }
                  function e1(e) {
                    if (void 0 === e) return "_unknown";
                    var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(
                      0
                    );
                    return 48 <= t && 57 >= t ? `_${e}` : e;
                  }
                  function e2(e, t) {
                    return {
                      [(e = e1(e))]: function () {
                        return t.apply(this, arguments);
                      },
                    }[e];
                  }
                  function e4() {
                    (this.M = [void 0]), (this.hb = []);
                  }
                  var e6 = new e4(),
                    e3 = void 0;
                  function e5(e) {
                    throw new e3(e);
                  }
                  var e8 = (e) => (
                      e || e5("Cannot use deleted val. handle = " + e),
                      e6.get(e).value
                    ),
                    e9 = (e) => {
                      switch (e) {
                        case void 0:
                          return 1;
                        case null:
                          return 2;
                        case !0:
                          return 3;
                        case !1:
                          return 4;
                        default:
                          return e6.pa({ tb: 1, value: e });
                      }
                    };
                  function e7(e) {
                    var t = Error,
                      n = e2(e, function (t) {
                        (this.name = e),
                          (this.message = t),
                          void 0 !== (t = Error(t).stack) &&
                            (this.stack =
                              this.toString() +
                              "\n" +
                              t.replace(/^Error(:[^\n]*)?\n/, ""));
                      });
                    return (
                      (n.prototype = Object.create(t.prototype)),
                      (n.prototype.constructor = n),
                      (n.prototype.toString = function () {
                        return void 0 === this.message
                          ? this.name
                          : `${this.name}: ${this.message}`;
                      }),
                      n
                    );
                  }
                  var te = void 0,
                    tt = void 0;
                  function tn(e) {
                    for (var t = ""; T[e]; ) t += tt[T[e++]];
                    return t;
                  }
                  var tr = [];
                  function ti() {
                    for (; tr.length; ) {
                      var e = tr.pop();
                      (e.g.fa = !1), e.delete();
                    }
                  }
                  var ta = void 0,
                    to = {};
                  function ts(e, t) {
                    for (
                      void 0 === t && e5("ptr should not be undefined");
                      e.A;

                    )
                      (t = e.na(t)), (e = e.A);
                    return t;
                  }
                  var tu = {};
                  function tl(e) {
                    var t = tn((e = np(e)));
                    return nu(e), t;
                  }
                  function tc(e, t) {
                    var n = tu[e];
                    return (
                      void 0 === n && e5(t + " has unknown type " + tl(e)), n
                    );
                  }
                  function th() {}
                  var tf = !1;
                  function td(e) {
                    --e.count.value,
                      0 === e.count.value && (e.G ? e.L.W(e.G) : e.u.i.W(e.o));
                  }
                  var tp = {},
                    tm = void 0;
                  function tv(e) {
                    throw new tm(e);
                  }
                  function tb(e, t) {
                    return (
                      (t.u && t.o) ||
                        tv("makeClassHandle requires ptr and ptrType"),
                      !!t.L != !!t.G &&
                        tv("Both smartPtrType and smartPtr must be specified"),
                      (t.count = { value: 1 }),
                      tg(Object.create(e, { g: { value: t } }))
                    );
                  }
                  function tg(e) {
                    return "undefined" == typeof FinalizationRegistry
                      ? ((tg = (e) => e), e)
                      : ((tf = new FinalizationRegistry((e) => {
                          td(e.g);
                        })),
                        (tg = (e) => {
                          var t = e.g;
                          return t.G && tf.register(e, { g: t }, e), e;
                        }),
                        (th = (e) => {
                          tf.unregister(e);
                        }),
                        tg(e));
                  }
                  var ty = {};
                  function tw(e) {
                    for (; e.length; ) {
                      var t = e.pop();
                      e.pop()(t);
                    }
                  }
                  function t_(e) {
                    return this.fromWireType(F[e >> 2]);
                  }
                  var tA = {},
                    tC = {};
                  function tM(e, t, n) {
                    function r(t) {
                      (t = n(t)).length !== e.length &&
                        tv("Mismatched type converter count");
                      for (var r = 0; r < e.length; ++r) tR(e[r], t[r]);
                    }
                    e.forEach(function (e) {
                      tC[e] = t;
                    });
                    var i = Array(t.length),
                      a = [],
                      o = 0;
                    t.forEach((e, t) => {
                      tu.hasOwnProperty(e)
                        ? (i[t] = tu[e])
                        : (a.push(e),
                          tA.hasOwnProperty(e) || (tA[e] = []),
                          tA[e].push(() => {
                            (i[t] = tu[e]), ++o === a.length && r(i);
                          }));
                    }),
                      0 === a.length && r(i);
                  }
                  function tE(e) {
                    switch (e) {
                      case 1:
                        return 0;
                      case 2:
                        return 1;
                      case 4:
                        return 2;
                      case 8:
                        return 3;
                      default:
                        throw TypeError(`Unknown type size: ${e}`);
                    }
                  }
                  function tR(e, t, n = {}) {
                    if (!("argPackAdvance" in t))
                      throw TypeError(
                        "registerType registeredInstance requires argPackAdvance"
                      );
                    !(function (e, t, n = {}) {
                      var r = t.name;
                      if (
                        (e ||
                          e5(
                            `type "${r}" must have a positive integer typeid pointer`
                          ),
                        tu.hasOwnProperty(e))
                      ) {
                        if (n.$b) return;
                        e5(`Cannot register type '${r}' twice`);
                      }
                      (tu[e] = t),
                        delete tC[e],
                        tA.hasOwnProperty(e) &&
                          ((t = tA[e]), delete tA[e], t.forEach((e) => e()));
                    })(e, t, n);
                  }
                  function tP(e) {
                    e5(e.g.u.i.name + " instance already deleted");
                  }
                  function tT() {}
                  function tI(e, t, n) {
                    if (void 0 === e[t].B) {
                      var r = e[t];
                      (e[t] = function () {
                        return (
                          e[t].B.hasOwnProperty(arguments.length) ||
                            e5(
                              `Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].B})!`
                            ),
                          e[t].B[arguments.length].apply(this, arguments)
                        );
                      }),
                        (e[t].B = []),
                        (e[t].B[r.ea] = r);
                    }
                  }
                  function tL(t, n, r) {
                    e.hasOwnProperty(t)
                      ? ((void 0 === r ||
                          (void 0 !== e[t].B && void 0 !== e[t].B[r])) &&
                          e5(`Cannot register public name '${t}' twice`),
                        tI(e, t, t),
                        e.hasOwnProperty(r) &&
                          e5(
                            `Cannot register multiple overloads of a function with the same number of arguments (${r})!`
                          ),
                        (e[t].B[r] = n))
                      : ((e[t] = n), void 0 !== r && (e[t].Pc = r));
                  }
                  function tF(e, t, n, r, i, a, o, s) {
                    (this.name = e),
                      (this.constructor = t),
                      (this.N = n),
                      (this.W = r),
                      (this.A = i),
                      (this.Ub = a),
                      (this.na = o),
                      (this.Pb = s),
                      (this.qb = []);
                  }
                  function tx(e, t, n) {
                    for (; t !== n; )
                      t.na ||
                        e5(
                          `Expected null or instance of ${n.name}, got an instance of ${t.name}`
                        ),
                        (e = t.na(e)),
                        (t = t.A);
                    return e;
                  }
                  function tj(e, t) {
                    return null === t
                      ? (this.Na && e5(`null is not a valid ${this.name}`), 0)
                      : (t.g || e5(`Cannot pass "${tG(t)}" as a ${this.name}`),
                        t.g.o ||
                          e5(
                            `Cannot pass deleted object as a pointer of type ${this.name}`
                          ),
                        tx(t.g.o, t.g.u.i, this.i));
                  }
                  function tS(e, t) {
                    if (null === t) {
                      if (
                        (this.Na && e5(`null is not a valid ${this.name}`),
                        this.ua)
                      ) {
                        var n = this.Pa();
                        return null !== e && e.push(this.W, n), n;
                      }
                      return 0;
                    }
                    if (
                      (t.g || e5(`Cannot pass "${tG(t)}" as a ${this.name}`),
                      t.g.o ||
                        e5(
                          `Cannot pass deleted object as a pointer of type ${this.name}`
                        ),
                      !this.ta &&
                        t.g.u.ta &&
                        e5(
                          `Cannot convert argument of type ${
                            t.g.L ? t.g.L.name : t.g.u.name
                          } to parameter type ${this.name}`
                        ),
                      (n = tx(t.g.o, t.g.u.i, this.i)),
                      this.ua)
                    )
                      switch (
                        (void 0 === t.g.G &&
                          e5("Passing raw pointer to smart pointer is illegal"),
                        this.tc)
                      ) {
                        case 0:
                          t.g.L === this
                            ? (n = t.g.G)
                            : e5(
                                `Cannot convert argument of type ${
                                  t.g.L ? t.g.L.name : t.g.u.name
                                } to parameter type ${this.name}`
                              );
                          break;
                        case 1:
                          n = t.g.G;
                          break;
                        case 2:
                          if (t.g.L === this) n = t.g.G;
                          else {
                            var r = t.clone();
                            (n = this.oc(
                              n,
                              e9(function () {
                                r.delete();
                              })
                            )),
                              null !== e && e.push(this.W, n);
                          }
                          break;
                        default:
                          e5("Unsupporting sharing policy");
                      }
                    return n;
                  }
                  function tk(e, t) {
                    return null === t
                      ? (this.Na && e5(`null is not a valid ${this.name}`), 0)
                      : (t.g || e5(`Cannot pass "${tG(t)}" as a ${this.name}`),
                        t.g.o ||
                          e5(
                            `Cannot pass deleted object as a pointer of type ${this.name}`
                          ),
                        t.g.u.ta &&
                          e5(
                            `Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`
                          ),
                        tx(t.g.o, t.g.u.i, this.i));
                  }
                  function tO(e, t, n, r) {
                    (this.name = e),
                      (this.i = t),
                      (this.Na = n),
                      (this.ta = r),
                      (this.ua = !1),
                      (this.W =
                        this.oc =
                        this.Pa =
                        this.rb =
                        this.tc =
                        this.nc =
                          void 0),
                      void 0 !== t.A
                        ? (this.toWireType = tS)
                        : ((this.toWireType = r ? tj : tk), (this.K = null));
                  }
                  function tD(t, n, r) {
                    e.hasOwnProperty(t) ||
                      tv("Replacing nonexistant public symbol"),
                      void 0 !== e[t].B && void 0 !== r
                        ? (e[t].B[r] = n)
                        : ((e[t] = n), (e[t].ea = r));
                  }
                  var tU = [],
                    tB = (e) => {
                      var t = tU[e];
                      return (
                        t ||
                          (e >= tU.length && (tU.length = e + 1),
                          (tU[e] = t = D.get(e))),
                        t
                      );
                    },
                    tW = (t, n) => {
                      var r = [];
                      return function () {
                        if (
                          ((r.length = 0),
                          Object.assign(r, arguments),
                          t.includes("j"))
                        ) {
                          var i = e["dynCall_" + t];
                          i =
                            r && r.length
                              ? i.apply(null, [n].concat(r))
                              : i.call(null, n);
                        } else i = tB(n).apply(null, r);
                        return i;
                      };
                    };
                  function tN(e, t) {
                    var n = (e = tn(e)).includes("j") ? tW(e, t) : tB(t);
                    return (
                      "function" != typeof n &&
                        e5(
                          `unknown function pointer with signature ${e}: ${t}`
                        ),
                      n
                    );
                  }
                  var tV = void 0;
                  function t$(e, t) {
                    var n = [],
                      r = {};
                    throw (
                      (t.forEach(function e(t) {
                        r[t] ||
                          tu[t] ||
                          (tC[t] ? tC[t].forEach(e) : (n.push(t), (r[t] = !0)));
                      }),
                      new tV(`${e}: ` + n.map(tl).join([", "])))
                    );
                  }
                  function tH(e, t, n, r, i) {
                    var a = t.length;
                    2 > a &&
                      e5(
                        "argTypes array size mismatch! Must at least get return value and 'this' types!"
                      );
                    var o = null !== t[1] && null !== n,
                      s = !1;
                    for (n = 1; n < t.length; ++n)
                      if (null !== t[n] && void 0 === t[n].K) {
                        s = !0;
                        break;
                      }
                    var u = "void" !== t[0].name,
                      l = a - 2,
                      c = Array(l),
                      h = [],
                      f = [];
                    return function () {
                      if (
                        (arguments.length !== l &&
                          e5(
                            `function ${e} called with ${arguments.length} arguments, expected ${l} args!`
                          ),
                        (f.length = 0),
                        (h.length = o ? 2 : 1),
                        (h[0] = i),
                        o)
                      ) {
                        var n = t[1].toWireType(f, this);
                        h[1] = n;
                      }
                      for (var a = 0; a < l; ++a)
                        (c[a] = t[a + 2].toWireType(f, arguments[a])),
                          h.push(c[a]);
                      if (((a = r.apply(null, h)), s)) tw(f);
                      else
                        for (var d = o ? 1 : 2; d < t.length; d++) {
                          var p = 1 === d ? n : c[d - 2];
                          null !== t[d].K && t[d].K(p);
                        }
                      return u ? t[0].fromWireType(a) : void 0;
                    };
                  }
                  function tY(e, t) {
                    for (var n = [], r = 0; r < e; r++)
                      n.push(x[(t + 4 * r) >> 2]);
                    return n;
                  }
                  function tz(e, t, n) {
                    return (
                      e instanceof Object ||
                        e5(`${n} with invalid "this": ${e}`),
                      e instanceof t.i.constructor ||
                        e5(
                          `${n} incompatible with "this" of type ${e.constructor.name}`
                        ),
                      e.g.o ||
                        e5(
                          `cannot call emscripten binding method ${n} on deleted object`
                        ),
                      tx(e.g.o, e.g.u.i, t.i)
                    );
                  }
                  function tX(e) {
                    e >= e6.h && 0 == --e6.get(e).tb && e6.Zb(e);
                  }
                  function tG(e) {
                    if (null === e) return "null";
                    var t = typeof e;
                    return "object" === t || "array" === t || "function" === t
                      ? e.toString()
                      : "" + e;
                  }
                  var tq =
                      "undefined" != typeof TextDecoder
                        ? new TextDecoder("utf-16le")
                        : void 0,
                    tJ = (e, t) => {
                      for (var n = e >> 1, r = n + t / 2; !(n >= r) && L[n]; )
                        ++n;
                      if (32 < (n <<= 1) - e && tq)
                        return tq.decode(T.subarray(e, n));
                      for (r = 0, n = ""; !(r >= t / 2); ++r) {
                        var i = I[(e + 2 * r) >> 1];
                        if (0 == i) break;
                        n += String.fromCharCode(i);
                      }
                      return n;
                    },
                    tK = (e, t, n) => {
                      if ((void 0 === n && (n = 0x7fffffff), 2 > n)) return 0;
                      n -= 2;
                      var r = t;
                      n = n < 2 * e.length ? n / 2 : e.length;
                      for (var i = 0; i < n; ++i)
                        (I[t >> 1] = e.charCodeAt(i)), (t += 2);
                      return (I[t >> 1] = 0), t - r;
                    },
                    tZ = (e) => 2 * e.length,
                    tQ = (e, t) => {
                      for (var n = 0, r = ""; !(n >= t / 4); ) {
                        var i = F[(e + 4 * n) >> 2];
                        if (0 == i) break;
                        ++n,
                          65536 <= i
                            ? ((i -= 65536),
                              (r += String.fromCharCode(
                                55296 | (i >> 10),
                                56320 | (1023 & i)
                              )))
                            : (r += String.fromCharCode(i));
                      }
                      return r;
                    },
                    t0 = (e, t, n) => {
                      if ((void 0 === n && (n = 0x7fffffff), 4 > n)) return 0;
                      var r = t;
                      n = r + n - 4;
                      for (var i = 0; i < e.length; ++i) {
                        var a = e.charCodeAt(i);
                        if (
                          (55296 <= a &&
                            57343 >= a &&
                            (a =
                              (65536 + ((1023 & a) << 10)) |
                              (1023 & e.charCodeAt(++i))),
                          (F[t >> 2] = a),
                          (t += 4) + 4 > n)
                        )
                          break;
                      }
                      return (F[t >> 2] = 0), t - r;
                    },
                    t1 = (e) => {
                      for (var t = 0, n = 0; n < e.length; ++n) {
                        var r = e.charCodeAt(n);
                        55296 <= r && 57343 >= r && ++n, (t += 4);
                      }
                      return t;
                    },
                    t2 = {};
                  function t4(e) {
                    var t = t2[e];
                    return void 0 === t ? tn(e) : t;
                  }
                  var t6,
                    t3 = [],
                    t5 = [],
                    t8 = [],
                    t9 = {},
                    t7 = () => {
                      if (!t6) {
                        var e,
                          t = {
                            USER: "web_user",
                            LOGNAME: "web_user",
                            PATH: "/",
                            PWD: "/",
                            HOME: "/home/web_user",
                            LANG:
                              (
                                ("object" == typeof navigator &&
                                  navigator.languages &&
                                  navigator.languages[0]) ||
                                "C"
                              ).replace("-", "_") + ".UTF-8",
                            _: g || "./this.program",
                          };
                        for (e in t9)
                          void 0 === t9[e] ? delete t[e] : (t[e] = t9[e]);
                        var n = [];
                        for (e in t) n.push(`${e}=${t[e]}`);
                        t6 = n;
                      }
                      return t6;
                    },
                    ne = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                    nt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    nn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    nr = (e, t, n, r) => {
                      function i(e, t, n) {
                        for (
                          e = "number" == typeof e ? e.toString() : e || "";
                          e.length < t;

                        )
                          e = n[0] + e;
                        return e;
                      }
                      function a(e, t) {
                        return i(e, t, "0");
                      }
                      function o(e, t) {
                        var n;
                        function r(e) {
                          return 0 > e ? -1 : +(0 < e);
                        }
                        return (
                          0 === (n = r(e.getFullYear() - t.getFullYear())) &&
                            0 === (n = r(e.getMonth() - t.getMonth())) &&
                            (n = r(e.getDate() - t.getDate())),
                          n
                        );
                      }
                      function s(e) {
                        switch (e.getDay()) {
                          case 0:
                            return new Date(e.getFullYear() - 1, 11, 29);
                          case 1:
                            return e;
                          case 2:
                            return new Date(e.getFullYear(), 0, 3);
                          case 3:
                            return new Date(e.getFullYear(), 0, 2);
                          case 4:
                            return new Date(e.getFullYear(), 0, 1);
                          case 5:
                            return new Date(e.getFullYear() - 1, 11, 31);
                          case 6:
                            return new Date(e.getFullYear() - 1, 11, 30);
                        }
                      }
                      function u(e) {
                        var t = e.ca;
                        for (
                          e = new Date(new Date(e.da + 1900, 0, 1).getTime());
                          0 < t;

                        ) {
                          var n = e.getMonth(),
                            r = (ne(e.getFullYear()) ? nt : nn)[n];
                          if (t > r - e.getDate())
                            (t -= r - e.getDate() + 1),
                              e.setDate(1),
                              11 > n
                                ? e.setMonth(n + 1)
                                : (e.setMonth(0),
                                  e.setFullYear(e.getFullYear() + 1));
                          else {
                            e.setDate(e.getDate() + t);
                            break;
                          }
                        }
                        return (
                          (n = new Date(e.getFullYear() + 1, 0, 4)),
                          (t = s(new Date(e.getFullYear(), 0, 4))),
                          (n = s(n)),
                          0 >= o(t, e)
                            ? 0 >= o(n, e)
                              ? e.getFullYear() + 1
                              : e.getFullYear()
                            : e.getFullYear() - 1
                        );
                      }
                      var l = F[(r + 40) >> 2];
                      for (var c in ((r = {
                        wc: F[r >> 2],
                        vc: F[(r + 4) >> 2],
                        Fa: F[(r + 8) >> 2],
                        Sa: F[(r + 12) >> 2],
                        Ga: F[(r + 16) >> 2],
                        da: F[(r + 20) >> 2],
                        R: F[(r + 24) >> 2],
                        ca: F[(r + 28) >> 2],
                        Rc: F[(r + 32) >> 2],
                        uc: F[(r + 36) >> 2],
                        xc: l && l ? eu(T, l) : "",
                      }),
                      (n = n ? eu(T, n) : ""),
                      (l = {
                        "%c": "%a %b %d %H:%M:%S %Y",
                        "%D": "%m/%d/%y",
                        "%F": "%Y-%m-%d",
                        "%h": "%b",
                        "%r": "%I:%M:%S %p",
                        "%R": "%H:%M",
                        "%T": "%H:%M:%S",
                        "%x": "%m/%d/%y",
                        "%X": "%H:%M:%S",
                        "%Ec": "%c",
                        "%EC": "%C",
                        "%Ex": "%m/%d/%y",
                        "%EX": "%H:%M:%S",
                        "%Ey": "%y",
                        "%EY": "%Y",
                        "%Od": "%d",
                        "%Oe": "%e",
                        "%OH": "%H",
                        "%OI": "%I",
                        "%Om": "%m",
                        "%OM": "%M",
                        "%OS": "%S",
                        "%Ou": "%u",
                        "%OU": "%U",
                        "%OV": "%V",
                        "%Ow": "%w",
                        "%OW": "%W",
                        "%Oy": "%y",
                      })))
                        n = n.replace(RegExp(c, "g"), l[c]);
                      var h =
                          "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                            " "
                          ),
                        f =
                          "January February March April May June July August September October November December".split(
                            " "
                          );
                      for (c in ((l = {
                        "%a": (e) => h[e.R].substring(0, 3),
                        "%A": (e) => h[e.R],
                        "%b": (e) => f[e.Ga].substring(0, 3),
                        "%B": (e) => f[e.Ga],
                        "%C": (e) => a(((e.da + 1900) / 100) | 0, 2),
                        "%d": (e) => a(e.Sa, 2),
                        "%e": (e) => i(e.Sa, 2, " "),
                        "%g": (e) => u(e).toString().substring(2),
                        "%G": (e) => u(e),
                        "%H": (e) => a(e.Fa, 2),
                        "%I": (e) => (
                          0 == (e = e.Fa) ? (e = 12) : 12 < e && (e -= 12),
                          a(e, 2)
                        ),
                        "%j": (e) => {
                          for (
                            var t = 0, n = 0;
                            n <= e.Ga - 1;
                            t += (ne(e.da + 1900) ? nt : nn)[n++]
                          );
                          return a(e.Sa + t, 3);
                        },
                        "%m": (e) => a(e.Ga + 1, 2),
                        "%M": (e) => a(e.vc, 2),
                        "%n": () => "\n",
                        "%p": (e) => (0 <= e.Fa && 12 > e.Fa ? "AM" : "PM"),
                        "%S": (e) => a(e.wc, 2),
                        "%t": () => "	",
                        "%u": (e) => e.R || 7,
                        "%U": (e) => a(Math.floor((e.ca + 7 - e.R) / 7), 2),
                        "%V": (e) => {
                          var t = Math.floor((e.ca + 7 - ((e.R + 6) % 7)) / 7);
                          if ((2 >= (e.R + 371 - e.ca - 2) % 7 && t++, t))
                            53 == t &&
                              (4 == (n = (e.R + 371 - e.ca) % 7) ||
                                (3 == n && ne(e.da)) ||
                                (t = 1));
                          else {
                            t = 52;
                            var n = (e.R + 7 - e.ca - 1) % 7;
                            (4 == n || (5 == n && ne((e.da % 400) - 1))) && t++;
                          }
                          return a(t, 2);
                        },
                        "%w": (e) => e.R,
                        "%W": (e) =>
                          a(Math.floor((e.ca + 7 - ((e.R + 6) % 7)) / 7), 2),
                        "%y": (e) => (e.da + 1900).toString().substring(2),
                        "%Y": (e) => e.da + 1900,
                        "%z": (e) => {
                          var t = 0 <= (e = e.uc);
                          return (
                            (t ? "+" : "-") +
                            String(
                              "0000" +
                                (((e = Math.abs(e) / 60) / 60) * 100 + (e % 60))
                            ).slice(-4)
                          );
                        },
                        "%Z": (e) => e.xc,
                        "%%": () => "%",
                      }),
                      (n = n.replace(/%%/g, "\0\0")),
                      l))
                        n.includes(c) &&
                          (n = n.replace(RegExp(c, "g"), l[c](r)));
                      return (c = ef((n = n.replace(/\0\0/g, "%")), !1))
                        .length > t
                        ? 0
                        : (P.set(c, e), c.length - 1);
                    };
                  function ni(e, t, n, r) {
                    e || (e = this),
                      (this.parent = e),
                      (this.U = e.U),
                      (this.wa = null),
                      (this.id = eE++),
                      (this.name = t),
                      (this.mode = n),
                      (this.l = {}),
                      (this.m = {}),
                      (this.za = r);
                  }
                  Object.defineProperties(ni.prototype, {
                    read: {
                      get: function () {
                        return 365 == (365 & this.mode);
                      },
                      set: function (e) {
                        e ? (this.mode |= 365) : (this.mode &= -366);
                      },
                    },
                    write: {
                      get: function () {
                        return 146 == (146 & this.mode);
                      },
                      set: function (e) {
                        e ? (this.mode |= 146) : (this.mode &= -147);
                      },
                    },
                  }),
                    eJ(),
                    (eR = Array(4096)),
                    e$(e_, "/"),
                    eH("/tmp", 16895, 0),
                    eH("/home", 16895, 0),
                    eH("/home/web_user", 16895, 0),
                    eH("/dev", 16895, 0),
                    eV(259, { read: () => 0, write: (e, t, n, r) => r }),
                    eY("/dev/null", 259),
                    ep(1280, {
                      ib: function () {
                        e: {
                          if (!el.length) {
                            var e = null;
                            if (
                              ("undefined" != typeof window &&
                              "function" == typeof window.prompt
                                ? null !== (e = window.prompt("Input: ")) &&
                                  (e += "\n")
                                : "function" == typeof readline &&
                                  null !== (e = readline()) &&
                                  (e += "\n"),
                              !e)
                            ) {
                              e = null;
                              break e;
                            }
                            el = ef(e, !0);
                          }
                          e = el.shift();
                        }
                        return e;
                      },
                      Oa: function (e, t) {
                        null === t || 10 === t
                          ? (A(eu(e.F, 0)), (e.F = []))
                          : 0 != t && e.F.push(t);
                      },
                      qa: function (e) {
                        e.F && 0 < e.F.length && (A(eu(e.F, 0)), (e.F = []));
                      },
                      bc: function () {
                        return {
                          Fc: 25856,
                          Hc: 5,
                          Ec: 191,
                          Gc: 35387,
                          Dc: [
                            3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15,
                            23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0,
                          ],
                        };
                      },
                      cc: function () {
                        return 0;
                      },
                      dc: function () {
                        return [24, 80];
                      },
                    }),
                    ep(1536, {
                      Oa: function (e, t) {
                        null === t || 10 === t
                          ? (C(eu(e.F, 0)), (e.F = []))
                          : 0 != t && e.F.push(t);
                      },
                      qa: function (e) {
                        e.F && 0 < e.F.length && (C(eu(e.F, 0)), (e.F = []));
                      },
                    }),
                    eY("/dev/tty", 1280),
                    eY("/dev/tty1", 1536),
                    (u = new Uint8Array(1024)),
                    (l = 0),
                    eK(
                      "random",
                      (c = () => (0 === l && (l = ea(u).byteLength), u[--l]))
                    ),
                    eK("urandom", c),
                    eH("/dev/shm", 16895, 0),
                    eH("/dev/shm/tmp", 16895, 0),
                    eH("/proc", 16895, 0),
                    (h = eH("/proc/self", 16895, 0)),
                    eH("/proc/self/fd", 16895, 0),
                    e$(
                      {
                        U: () => {
                          var e = eS(h, "fd", 16895, 73);
                          return (
                            (e.l = {
                              ka: (e, t) => {
                                var n = eB(+t);
                                return ((e = {
                                  parent: null,
                                  U: { mb: "fake" },
                                  l: { ma: () => n.path },
                                }).parent = e);
                              },
                            }),
                            e
                          );
                        },
                      },
                      "/proc/self/fd"
                    ),
                    Object.assign(e4.prototype, {
                      get(e) {
                        return this.M[e];
                      },
                      has(e) {
                        return void 0 !== this.M[e];
                      },
                      pa(e) {
                        var t = this.hb.pop() || this.M.length;
                        return (this.M[t] = e), t;
                      },
                      Zb(e) {
                        (this.M[e] = void 0), this.hb.push(e);
                      },
                    }),
                    (e3 = e.BindingError =
                      class extends Error {
                        constructor(e) {
                          super(e), (this.name = "BindingError");
                        }
                      }),
                    e6.M.push(
                      { value: void 0 },
                      { value: null },
                      { value: !0 },
                      { value: !1 }
                    ),
                    (e6.h = e6.M.length),
                    (e.count_emval_handles = function () {
                      for (var e = 0, t = e6.h; t < e6.M.length; ++t)
                        void 0 !== e6.M[t] && ++e;
                      return e;
                    }),
                    (te = e.PureVirtualError = e7("PureVirtualError"));
                  for (var na = Array(256), no = 0; 256 > no; ++no)
                    na[no] = String.fromCharCode(no);
                  (tt = na),
                    (e.getInheritedInstanceCount = function () {
                      return Object.keys(to).length;
                    }),
                    (e.getLiveInheritedInstances = function () {
                      var e,
                        t = [];
                      for (e in to) to.hasOwnProperty(e) && t.push(to[e]);
                      return t;
                    }),
                    (e.flushPendingDeletes = ti),
                    (e.setDelayFunction = function (e) {
                      (ta = e), tr.length && ta && ta(ti);
                    }),
                    (tm = e.InternalError =
                      class extends Error {
                        constructor(e) {
                          super(e), (this.name = "InternalError");
                        }
                      }),
                    (tT.prototype.isAliasOf = function (e) {
                      if (!(this instanceof tT && e instanceof tT)) return !1;
                      var t = this.g.u.i,
                        n = this.g.o,
                        r = e.g.u.i;
                      for (e = e.g.o; t.A; ) (n = t.na(n)), (t = t.A);
                      for (; r.A; ) (e = r.na(e)), (r = r.A);
                      return t === r && n === e;
                    }),
                    (tT.prototype.clone = function () {
                      if ((this.g.o || tP(this), this.g.ia))
                        return (this.g.count.value += 1), this;
                      var e = tg,
                        t = Object,
                        n = t.create,
                        r = Object.getPrototypeOf(this),
                        i = this.g;
                      return (
                        (e = e(
                          n.call(t, r, {
                            g: {
                              value: {
                                count: i.count,
                                fa: i.fa,
                                ia: i.ia,
                                o: i.o,
                                u: i.u,
                                G: i.G,
                                L: i.L,
                              },
                            },
                          })
                        )),
                        (e.g.count.value += 1),
                        (e.g.fa = !1),
                        e
                      );
                    }),
                    (tT.prototype.delete = function () {
                      this.g.o || tP(this),
                        this.g.fa &&
                          !this.g.ia &&
                          e5("Object already scheduled for deletion"),
                        th(this),
                        td(this.g),
                        this.g.ia || ((this.g.G = void 0), (this.g.o = void 0));
                    }),
                    (tT.prototype.isDeleted = function () {
                      return !this.g.o;
                    }),
                    (tT.prototype.deleteLater = function () {
                      return (
                        this.g.o || tP(this),
                        this.g.fa &&
                          !this.g.ia &&
                          e5("Object already scheduled for deletion"),
                        tr.push(this),
                        1 === tr.length && ta && ta(ti),
                        (this.g.fa = !0),
                        this
                      );
                    }),
                    (tO.prototype.Vb = function (e) {
                      return this.rb && (e = this.rb(e)), e;
                    }),
                    (tO.prototype.ab = function (e) {
                      this.W && this.W(e);
                    }),
                    (tO.prototype.argPackAdvance = 8),
                    (tO.prototype.readValueFromPointer = t_),
                    (tO.prototype.deleteObject = function (e) {
                      null !== e && e.delete();
                    }),
                    (tO.prototype.fromWireType = function (e) {
                      function t() {
                        return this.ua
                          ? tb(this.i.N, { u: this.nc, o: r, L: this, G: e })
                          : tb(this.i.N, { u: this, o: e });
                      }
                      var n,
                        r = this.Vb(e);
                      if (!r) return this.ab(e), null;
                      var i = to[ts(this.i, r)];
                      if (void 0 !== i)
                        return 0 === i.g.count.value
                          ? ((i.g.o = r), (i.g.G = e), i.clone())
                          : ((i = i.clone()), this.ab(e), i);
                      if (!(i = tp[(i = this.i.Ub(r))])) return t.call(this);
                      i = this.ta ? i.Kb : i.pointerType;
                      var a = (function e(t, n, r) {
                        return n === r
                          ? t
                          : void 0 === r.A || null === (t = e(t, n, r.A))
                          ? null
                          : r.Pb(t);
                      })(r, this.i, i.i);
                      return null === a
                        ? t.call(this)
                        : this.ua
                        ? tb(i.i.N, { u: i, o: a, L: this, G: e })
                        : tb(i.i.N, { u: i, o: a });
                    }),
                    (tV = e.UnboundTypeError = e7("UnboundTypeError"));
                  var ns = {
                    __syscall_fcntl64: function (e, t, n) {
                      eQ = n;
                      try {
                        var r = eB(e);
                        switch (t) {
                          case 0:
                            var i = e0();
                            return 0 > i ? -28 : eW(r, i).X;
                          case 1:
                          case 2:
                          case 6:
                          case 7:
                            return 0;
                          case 3:
                            return r.flags;
                          case 4:
                            return (i = e0()), (r.flags |= i), 0;
                          case 5:
                            return (I[((i = e0()) + 0) >> 1] = 2), 0;
                          case 16:
                          case 8:
                          default:
                            return -28;
                          case 9:
                            return (F[nd() >> 2] = 28), -1;
                        }
                      } catch (e) {
                        if (void 0 === eZ || "ErrnoError" !== e.name) throw e;
                        return -e.aa;
                      }
                    },
                    __syscall_ioctl: function (e, t, n) {
                      eQ = n;
                      try {
                        var r = eB(e);
                        switch (t) {
                          case 21509:
                          case 21510:
                          case 21511:
                          case 21512:
                          case 21524:
                          case 21515:
                            return r.s ? 0 : -59;
                          case 21505:
                            if (!r.s) return -59;
                            if (r.s.V.bc) {
                              t = [
                                3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18,
                                15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                0, 0, 0, 0,
                              ];
                              var i = e0();
                              (F[i >> 2] = 25856),
                                (F[(i + 4) >> 2] = 5),
                                (F[(i + 8) >> 2] = 191),
                                (F[(i + 12) >> 2] = 35387);
                              for (var a = 0; 32 > a; a++)
                                P[(i + a + 17) | 0] = t[a] || 0;
                            }
                            return 0;
                          case 21506:
                          case 21507:
                          case 21508:
                            if (!r.s) return -59;
                            if (r.s.V.cc)
                              for (i = e0(), t = [], a = 0; 32 > a; a++)
                                t.push(P[(i + a + 17) | 0]);
                            return 0;
                          case 21519:
                            if (!r.s) return -59;
                            return (F[(i = e0()) >> 2] = 0);
                          case 21520:
                            return r.s ? -28 : -59;
                          case 21531:
                            if (((i = e0()), !r.m.ac)) throw new eT(59);
                            return r.m.ac(r, t, i);
                          case 21523:
                            if (!r.s) return -59;
                            return (
                              r.s.V.dc &&
                                ((a = [24, 80]),
                                (I[(i = e0()) >> 1] = a[0]),
                                (I[(i + 2) >> 1] = a[1])),
                              0
                            );
                          default:
                            return -28;
                        }
                      } catch (e) {
                        if (void 0 === eZ || "ErrnoError" !== e.name) throw e;
                        return -e.aa;
                      }
                    },
                    __syscall_openat: function (e, t, n, r) {
                      eQ = r;
                      try {
                        var i = (t = t ? eu(T, t) : "");
                        if ("/" === i.charAt(0)) t = i;
                        else {
                          var a = -100 === e ? "/" : eB(e).path;
                          if (0 == i.length) throw new eT(44);
                          t = et(a + "/" + i);
                        }
                        var o = r ? e0() : 0;
                        return eG(t, n, o).X;
                      } catch (e) {
                        if (void 0 === eZ || "ErrnoError" !== e.name) throw e;
                        return -e.aa;
                      }
                    },
                    _embind_create_inheriting_constructor: function (e, t, n) {
                      (e = tn(e)), (t = tc(t, "wrapper")), (n = e8(n));
                      var r = [].slice,
                        i = t.i,
                        a = i.N,
                        o = i.A.N,
                        s = i.A.constructor;
                      for (var u in ((e = e2(e, function () {
                        i.A.qb.forEach(
                          function (e) {
                            if (this[e] === o[e])
                              throw new te(
                                `Pure virtual function ${e} must be implemented in JavaScript`
                              );
                          }.bind(this)
                        ),
                          Object.defineProperty(this, "__parent", { value: a }),
                          this.__construct.apply(this, r.call(arguments));
                      })),
                      (a.__construct = function () {
                        this === a && e5("Pass correct 'this' to __construct");
                        var e = s.implement.apply(
                          void 0,
                          [this].concat(r.call(arguments))
                        );
                        th(e);
                        var t = e.g;
                        e.notifyOnDestruction(),
                          (t.ia = !0),
                          Object.defineProperties(this, { g: { value: t } }),
                          tg(this),
                          (e = ts(i, (e = t.o))),
                          to.hasOwnProperty(e)
                            ? e5(`Tried to register registered instance: ${e}`)
                            : (to[e] = this);
                      }),
                      (a.__destruct = function () {
                        this === a && e5("Pass correct 'this' to __destruct"),
                          th(this);
                        var e = this.g.o;
                        (e = ts(i, e)),
                          to.hasOwnProperty(e)
                            ? delete to[e]
                            : e5(
                                `Tried to unregister unregistered instance: ${e}`
                              );
                      }),
                      (e.prototype = Object.create(a)),
                      n))
                        e.prototype[u] = n[u];
                      return e9(e);
                    },
                    _embind_finalize_value_object: function (e) {
                      var t = ty[e];
                      delete ty[e];
                      var n = t.Pa,
                        r = t.W,
                        i = t.eb;
                      tM(
                        [e],
                        i.map((e) => e.Yb).concat(i.map((e) => e.rc)),
                        (e) => {
                          var a = {};
                          return (
                            i.forEach((t, n) => {
                              var r = e[n],
                                o = t.Wb,
                                s = t.Xb,
                                u = e[n + i.length],
                                l = t.qc,
                                c = t.sc;
                              a[t.Sb] = {
                                read: (e) => r.fromWireType(o(s, e)),
                                write: (e, t) => {
                                  var n = [];
                                  l(c, e, u.toWireType(n, t)), tw(n);
                                },
                              };
                            }),
                            [
                              {
                                name: t.name,
                                fromWireType: function (e) {
                                  var t,
                                    n = {};
                                  for (t in a) n[t] = a[t].read(e);
                                  return r(e), n;
                                },
                                toWireType: function (e, t) {
                                  for (var i in a)
                                    if (!(i in t))
                                      throw TypeError(`Missing field: "${i}"`);
                                  var o = n();
                                  for (i in a) a[i].write(o, t[i]);
                                  return null !== e && e.push(r, o), o;
                                },
                                argPackAdvance: 8,
                                readValueFromPointer: t_,
                                K: r,
                              },
                            ]
                          );
                        }
                      );
                    },
                    _embind_register_bigint: function () {},
                    _embind_register_bool: function (e, t, n, r, i) {
                      var a = tE(n);
                      tR(e, {
                        name: (t = tn(t)),
                        fromWireType: function (e) {
                          return !!e;
                        },
                        toWireType: function (e, t) {
                          return t ? r : i;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function (e) {
                          if (1 === n) var r = P;
                          else if (2 === n) r = I;
                          else if (4 === n) r = F;
                          else
                            throw TypeError("Unknown boolean type size: " + t);
                          return this.fromWireType(r[e >> a]);
                        },
                        K: null,
                      });
                    },
                    _embind_register_class: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      l,
                      c,
                      h,
                      f
                    ) {
                      (c = tn(c)),
                        (a = tN(i, a)),
                        s && (s = tN(o, s)),
                        l && (l = tN(u, l)),
                        (f = tN(h, f));
                      var d = e1(c);
                      tL(d, function () {
                        t$(`Cannot construct ${c} due to unbound types`, [r]);
                      }),
                        tM([e, t, n], r ? [r] : [], function (t) {
                          if (((t = t[0]), r))
                            var n = t.i,
                              i = n.N;
                          else i = tT.prototype;
                          var o = Object.create(i, {
                            constructor: {
                              value: (t = e2(d, function () {
                                if (Object.getPrototypeOf(this) !== o)
                                  throw new e3("Use 'new' to construct " + c);
                                if (void 0 === u.$)
                                  throw new e3(
                                    c + " has no accessible constructor"
                                  );
                                var e = u.$[arguments.length];
                                if (void 0 === e)
                                  throw new e3(
                                    `Tried to invoke ctor of ${c} with invalid number of parameters (${
                                      arguments.length
                                    }) - expected (${Object.keys(
                                      u.$
                                    ).toString()}) parameters instead!`
                                  );
                                return e.apply(this, arguments);
                              })),
                            },
                          });
                          t.prototype = o;
                          var u = new tF(c, t, o, f, n, a, s, l);
                          u.A &&
                            (void 0 === u.A.oa && (u.A.oa = []),
                            u.A.oa.push(u)),
                            (n = new tO(c, u, !0, !1)),
                            (i = new tO(c + "*", u, !1, !1));
                          var h = new tO(c + " const*", u, !1, !0);
                          return (
                            (tp[e] = { pointerType: i, Kb: h }),
                            tD(d, t),
                            [n, i, h]
                          );
                        });
                    },
                    _embind_register_class_class_function: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o
                    ) {
                      var s = tY(n, r);
                      (t = tn(t)),
                        (a = tN(i, a)),
                        tM([], [e], function (e) {
                          function r() {
                            t$(`Cannot call ${i} due to unbound types`, s);
                          }
                          e = e[0];
                          var i = `${e.name}.${t}`;
                          t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                          var u = e.i.constructor;
                          return (
                            void 0 === u[t]
                              ? ((r.ea = n - 1), (u[t] = r))
                              : (tI(u, t, i), (u[t].B[n - 1] = r)),
                            tM([], s, function (r) {
                              if (
                                ((r = tH(
                                  i,
                                  [r[0], null].concat(r.slice(1)),
                                  null,
                                  a,
                                  o
                                )),
                                void 0 === u[t].B
                                  ? ((r.ea = n - 1), (u[t] = r))
                                  : (u[t].B[n - 1] = r),
                                e.i.oa)
                              )
                                for (let n of e.i.oa)
                                  n.constructor.hasOwnProperty(t) ||
                                    (n.constructor[t] = r);
                              return [];
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_class_property: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s
                    ) {
                      (t = tn(t)),
                        (a = tN(i, a)),
                        tM([], [e], function (e) {
                          e = e[0];
                          var i = `${e.name}.${t}`,
                            u = {
                              get() {
                                t$(`Cannot access ${i} due to unbound types`, [
                                  n,
                                ]);
                              },
                              enumerable: !0,
                              configurable: !0,
                            };
                          return (
                            (u.set = s
                              ? () => {
                                  t$(
                                    `Cannot access ${i} due to unbound types`,
                                    [n]
                                  );
                                }
                              : () => {
                                  e5(`${i} is a read-only property`);
                                }),
                            Object.defineProperty(e.i.constructor, t, u),
                            tM([], [n], function (n) {
                              n = n[0];
                              var i = {
                                get: () => n.fromWireType(a(r)),
                                enumerable: !0,
                              };
                              return (
                                s &&
                                  ((s = tN(o, s)),
                                  (i.set = (e) => {
                                    var t = [];
                                    s(r, n.toWireType(t, e)), tw(t);
                                  })),
                                Object.defineProperty(e.i.constructor, t, i),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_constructor: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a
                    ) {
                      var o = tY(t, n);
                      (i = tN(r, i)),
                        tM([], [e], function (e) {
                          e = e[0];
                          var n = `constructor ${e.name}`;
                          if (
                            (void 0 === e.i.$ && (e.i.$ = []),
                            void 0 !== e.i.$[t - 1])
                          )
                            throw new e3(
                              `Cannot register multiple constructors with identical number of parameters (${
                                t - 1
                              }) for class '${
                                e.name
                              }'! Overload resolution is currently only performed using the parameter count, not actual type info!`
                            );
                          return (
                            (e.i.$[t - 1] = () => {
                              t$(
                                `Cannot construct ${e.name} due to unbound types`,
                                o
                              );
                            }),
                            tM([], o, function (r) {
                              return (
                                r.splice(1, 0, null),
                                (e.i.$[t - 1] = tH(n, r, null, i, a)),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_function: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s
                    ) {
                      var u = tY(n, r);
                      (t = tn(t)),
                        (a = tN(i, a)),
                        tM([], [e], function (e) {
                          function r() {
                            t$(`Cannot call ${i} due to unbound types`, u);
                          }
                          e = e[0];
                          var i = `${e.name}.${t}`;
                          t.startsWith("@@") && (t = Symbol[t.substring(2)]),
                            s && e.i.qb.push(t);
                          var l = e.i.N,
                            c = l[t];
                          return (
                            void 0 === c ||
                            (void 0 === c.B &&
                              c.className !== e.name &&
                              c.ea === n - 2)
                              ? ((r.ea = n - 2),
                                (r.className = e.name),
                                (l[t] = r))
                              : (tI(l, t, i), (l[t].B[n - 2] = r)),
                            tM([], u, function (r) {
                              return (
                                (r = tH(i, r, e, a, o)),
                                void 0 === l[t].B
                                  ? ((r.ea = n - 2), (l[t] = r))
                                  : (l[t].B[n - 2] = r),
                                []
                              );
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_class_property: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      l
                    ) {
                      (t = tn(t)),
                        (i = tN(r, i)),
                        tM([], [e], function (e) {
                          e = e[0];
                          var r = `${e.name}.${t}`,
                            c = {
                              get() {
                                t$(`Cannot access ${r} due to unbound types`, [
                                  n,
                                  o,
                                ]);
                              },
                              enumerable: !0,
                              configurable: !0,
                            };
                          return (
                            (c.set = u
                              ? () => {
                                  t$(
                                    `Cannot access ${r} due to unbound types`,
                                    [n, o]
                                  );
                                }
                              : () => {
                                  e5(r + " is a read-only property");
                                }),
                            Object.defineProperty(e.i.N, t, c),
                            tM([], u ? [n, o] : [n], function (n) {
                              var o = n[0],
                                c = {
                                  get() {
                                    var t = tz(this, e, r + " getter");
                                    return o.fromWireType(i(a, t));
                                  },
                                  enumerable: !0,
                                };
                              if (u) {
                                u = tN(s, u);
                                var h = n[1];
                                c.set = function (t) {
                                  var n = tz(this, e, r + " setter"),
                                    i = [];
                                  u(l, n, h.toWireType(i, t)), tw(i);
                                };
                              }
                              return Object.defineProperty(e.i.N, t, c), [];
                            }),
                            []
                          );
                        });
                    },
                    _embind_register_emval: function (e, t) {
                      tR(e, {
                        name: (t = tn(t)),
                        fromWireType: function (e) {
                          var t = e8(e);
                          return tX(e), t;
                        },
                        toWireType: function (e, t) {
                          return e9(t);
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: t_,
                        K: null,
                      });
                    },
                    _embind_register_enum: function (e, t, n, r) {
                      function i() {}
                      (n = tE(n)),
                        (t = tn(t)),
                        (i.values = {}),
                        tR(e, {
                          name: t,
                          constructor: i,
                          fromWireType: function (e) {
                            return this.constructor.values[e];
                          },
                          toWireType: function (e, t) {
                            return t.value;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: (function (e, t, n) {
                            switch (t) {
                              case 0:
                                return function (e) {
                                  return this.fromWireType((n ? P : T)[e]);
                                };
                              case 1:
                                return function (e) {
                                  return this.fromWireType((n ? I : L)[e >> 1]);
                                };
                              case 2:
                                return function (e) {
                                  return this.fromWireType((n ? F : x)[e >> 2]);
                                };
                              default:
                                throw TypeError("Unknown integer type: " + e);
                            }
                          })(t, n, r),
                          K: null,
                        }),
                        tL(t, i);
                    },
                    _embind_register_enum_value: function (e, t, n) {
                      var r = tc(e, "enum");
                      (t = tn(t)),
                        (e = r.constructor),
                        (r = Object.create(r.constructor.prototype, {
                          value: { value: n },
                          constructor: {
                            value: e2(`${r.name}_${t}`, function () {}),
                          },
                        })),
                        (e.values[n] = r),
                        (e[t] = r);
                    },
                    _embind_register_float: function (e, t, n) {
                      (n = tE(n)),
                        tR(e, {
                          name: (t = tn(t)),
                          fromWireType: function (e) {
                            return e;
                          },
                          toWireType: function (e, t) {
                            return t;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: (function (e, t) {
                            switch (t) {
                              case 2:
                                return function (e) {
                                  return this.fromWireType(j[e >> 2]);
                                };
                              case 3:
                                return function (e) {
                                  return this.fromWireType(S[e >> 3]);
                                };
                              default:
                                throw TypeError("Unknown float type: " + e);
                            }
                          })(t, n),
                          K: null,
                        });
                    },
                    _embind_register_function: function (e, t, n, r, i, a) {
                      var o = tY(t, n);
                      (e = tn(e)),
                        (i = tN(r, i)),
                        tL(
                          e,
                          function () {
                            t$(`Cannot call ${e} due to unbound types`, o);
                          },
                          t - 1
                        ),
                        tM([], o, function (n) {
                          return (
                            tD(
                              e,
                              tH(
                                e,
                                [n[0], null].concat(n.slice(1)),
                                null,
                                i,
                                a
                              ),
                              t - 1
                            ),
                            []
                          );
                        });
                    },
                    _embind_register_integer: function (e, t, n, r, i) {
                      (t = tn(t)), -1 === i && (i = 0xffffffff), (i = tE(n));
                      var a = (e) => e;
                      if (0 === r) {
                        var o = 32 - 8 * n;
                        a = (e) => (e << o) >>> o;
                      }
                      (n = t.includes("unsigned")
                        ? function (e, t) {
                            return t >>> 0;
                          }
                        : function (e, t) {
                            return t;
                          }),
                        tR(e, {
                          name: t,
                          fromWireType: a,
                          toWireType: n,
                          argPackAdvance: 8,
                          readValueFromPointer: (function (e, t, n) {
                            switch (t) {
                              case 0:
                                return n
                                  ? function (e) {
                                      return P[e];
                                    }
                                  : function (e) {
                                      return T[e];
                                    };
                              case 1:
                                return n
                                  ? function (e) {
                                      return I[e >> 1];
                                    }
                                  : function (e) {
                                      return L[e >> 1];
                                    };
                              case 2:
                                return n
                                  ? function (e) {
                                      return F[e >> 2];
                                    }
                                  : function (e) {
                                      return x[e >> 2];
                                    };
                              default:
                                throw TypeError("Unknown integer type: " + e);
                            }
                          })(t, i, 0 !== r),
                          K: null,
                        });
                    },
                    _embind_register_memory_view: function (e, t, n) {
                      function r(e) {
                        e >>= 2;
                        var t = x;
                        return new i(t.buffer, t[e + 1], t[e]);
                      }
                      var i = [
                        Int8Array,
                        Uint8Array,
                        Int16Array,
                        Uint16Array,
                        Int32Array,
                        Uint32Array,
                        Float32Array,
                        Float64Array,
                      ][t];
                      tR(
                        e,
                        {
                          name: (n = tn(n)),
                          fromWireType: r,
                          argPackAdvance: 8,
                          readValueFromPointer: r,
                        },
                        { $b: !0 }
                      );
                    },
                    _embind_register_std_string: function (e, t) {
                      var n = "std::string" === (t = tn(t));
                      tR(e, {
                        name: t,
                        fromWireType: function (e) {
                          var t = x[e >> 2],
                            r = e + 4;
                          if (n)
                            for (var i = r, a = 0; a <= t; ++a) {
                              var o = r + a;
                              if (a == t || 0 == T[o]) {
                                if (
                                  ((i = i ? eu(T, i, o - i) : ""), void 0 === s)
                                )
                                  var s = i;
                                else (s += "\0"), (s += i);
                                i = o + 1;
                              }
                            }
                          else {
                            for (a = 0, s = Array(t); a < t; ++a)
                              s[a] = String.fromCharCode(T[r + a]);
                            s = s.join("");
                          }
                          return nu(e), s;
                        },
                        toWireType: function (e, t) {
                          t instanceof ArrayBuffer && (t = new Uint8Array(t));
                          var r = "string" == typeof t;
                          r ||
                            t instanceof Uint8Array ||
                            t instanceof Uint8ClampedArray ||
                            t instanceof Int8Array ||
                            e5("Cannot pass non-string to std::string");
                          var i = n && r ? ec(t) : t.length,
                            a = nl(4 + i + 1),
                            o = a + 4;
                          if (((x[a >> 2] = i), n && r)) eh(t, T, o, i + 1);
                          else if (r)
                            for (r = 0; r < i; ++r) {
                              var s = t.charCodeAt(r);
                              255 < s &&
                                (nu(o),
                                e5(
                                  "String has UTF-16 code units that do not fit in 8 bits"
                                )),
                                (T[o + r] = s);
                            }
                          else for (r = 0; r < i; ++r) T[o + r] = t[r];
                          return null !== e && e.push(nu, a), a;
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: t_,
                        K: function (e) {
                          nu(e);
                        },
                      });
                    },
                    _embind_register_std_wstring: function (e, t, n) {
                      if (((n = tn(n)), 2 === t))
                        var r = tJ,
                          i = tK,
                          a = tZ,
                          o = () => L,
                          s = 1;
                      else
                        4 === t &&
                          ((r = tQ),
                          (i = t0),
                          (a = t1),
                          (o = () => x),
                          (s = 2));
                      tR(e, {
                        name: n,
                        fromWireType: function (e) {
                          for (
                            var n, i = x[e >> 2], a = o(), u = e + 4, l = 0;
                            l <= i;
                            ++l
                          ) {
                            var c = e + 4 + l * t;
                            (l == i || 0 == a[c >> s]) &&
                              ((u = r(u, c - u)),
                              void 0 === n ? (n = u) : ((n += "\0"), (n += u)),
                              (u = c + t));
                          }
                          return nu(e), n;
                        },
                        toWireType: function (e, r) {
                          "string" != typeof r &&
                            e5(
                              `Cannot pass non-string to C++ string type ${n}`
                            );
                          var o = a(r),
                            u = nl(4 + o + t);
                          return (
                            (x[u >> 2] = o >> s),
                            i(r, u + 4, o + t),
                            null !== e && e.push(nu, u),
                            u
                          );
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: t_,
                        K: function (e) {
                          nu(e);
                        },
                      });
                    },
                    _embind_register_value_object: function (e, t, n, r, i, a) {
                      ty[e] = {
                        name: tn(t),
                        Pa: tN(n, r),
                        W: tN(i, a),
                        eb: [],
                      };
                    },
                    _embind_register_value_object_field: function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      a,
                      o,
                      s,
                      u,
                      l
                    ) {
                      ty[e].eb.push({
                        Sb: tn(t),
                        Yb: n,
                        Wb: tN(r, i),
                        Xb: a,
                        rc: o,
                        qc: tN(s, u),
                        sc: l,
                      });
                    },
                    _embind_register_void: function (e, t) {
                      tR(e, {
                        fc: !0,
                        name: (t = tn(t)),
                        argPackAdvance: 0,
                        fromWireType: function () {},
                        toWireType: function () {},
                      });
                    },
                    _emscripten_get_now_is_monotonic: () => !0,
                    _emval_as: function (e, t, n) {
                      (e = e8(e)), (t = tc(t, "emval::as"));
                      var r = [],
                        i = e9(r);
                      return (x[n >> 2] = i), t.toWireType(r, e);
                    },
                    _emval_call_method: function (e, t, n, r, i) {
                      (e = t3[e]), (t = e8(t)), (n = t4(n));
                      var a = [];
                      return (x[r >> 2] = e9(a)), e(t, n, a, i);
                    },
                    _emval_call_void_method: function (e, t, n, r) {
                      (e = t3[e])((t = e8(t)), (n = t4(n)), null, r);
                    },
                    _emval_decref: tX,
                    _emval_get_method_caller: function (e, t) {
                      var n,
                        r,
                        i = (function (e, t) {
                          for (var n = Array(e), r = 0; r < e; ++r)
                            n[r] = tc(x[(t + 4 * r) >> 2], "parameter " + r);
                          return n;
                        })(e, t),
                        a = i[0],
                        o =
                          t5[
                            (t =
                              a.name +
                              "_$" +
                              i
                                .slice(1)
                                .map(function (e) {
                                  return e.name;
                                })
                                .join("_") +
                              "$")
                          ];
                      if (void 0 !== o) return o;
                      var s = Array(e - 1);
                      return (
                        (n = (t, n, r, o) => {
                          for (var u = 0, l = 0; l < e - 1; ++l)
                            (s[l] = i[l + 1].readValueFromPointer(o + u)),
                              (u += i[l + 1].argPackAdvance);
                          for (l = 0, t = t[n].apply(t, s); l < e - 1; ++l)
                            i[l + 1].Nb && i[l + 1].Nb(s[l]);
                          if (!a.fc) return a.toWireType(r, t);
                        }),
                        (r = t3.length),
                        t3.push(n),
                        (o = r),
                        (t5[t] = o)
                      );
                    },
                    _emval_get_module_property: function (t) {
                      return e9(e[(t = t4(t))]);
                    },
                    _emval_get_property: function (e, t) {
                      return e9((e = e8(e))[(t = e8(t))]);
                    },
                    _emval_incref: function (e) {
                      4 < e && (e6.get(e).tb += 1);
                    },
                    _emval_new_array: function () {
                      return e9([]);
                    },
                    _emval_new_cstring: function (e) {
                      return e9(t4(e));
                    },
                    _emval_new_object: function () {
                      return e9({});
                    },
                    _emval_run_destructors: function (e) {
                      tw(e8(e)), tX(e);
                    },
                    _emval_set_property: function (e, t, n) {
                      (e = e8(e)), (t = e8(t)), (n = e8(n)), (e[t] = n);
                    },
                    _emval_take_value: function (e, t) {
                      return e9(
                        (e = (e = tc(
                          e,
                          "_emval_take_value"
                        )).readValueFromPointer(t))
                      );
                    },
                    abort: () => {
                      H("");
                    },
                    emscripten_asm_const_int: (e, t, n) => {
                      var r;
                      for (t8.length = 0, n >>= 2; (r = T[t++]); )
                        (n += (105 != r) & n),
                          t8.push(105 == r ? F[n] : S[n++ >> 1]),
                          ++n;
                      return Z[e].apply(null, t8);
                    },
                    emscripten_date_now: function () {
                      return Date.now();
                    },
                    emscripten_get_now: () => performance.now(),
                    emscripten_memcpy_big: (e, t, n) =>
                      T.copyWithin(e, t, t + n),
                    emscripten_resize_heap: (e) => {
                      var t = T.length;
                      if (0x80000000 < (e >>>= 0)) return !1;
                      for (var n = 1; 4 >= n; n *= 2) {
                        var r = t * (1 + 0.2 / n);
                        r = Math.min(r, e + 0x6000000);
                        var i = Math;
                        r = Math.max(e, r);
                        e: {
                          i =
                            (i.min.call(
                              i,
                              0x80000000,
                              r + ((65536 - (r % 65536)) % 65536)
                            ) -
                              E.buffer.byteLength +
                              65535) >>>
                            16;
                          try {
                            E.grow(i), O();
                            var a = 1;
                            break e;
                          } catch (e) {}
                          a = void 0;
                        }
                        if (a) return !0;
                      }
                      return !1;
                    },
                    environ_get: (e, t) => {
                      var n = 0;
                      return (
                        t7().forEach(function (r, i) {
                          var a = t + n;
                          for (
                            i = x[(e + 4 * i) >> 2] = a, a = 0;
                            a < r.length;
                            ++a
                          )
                            P[0 | i++] = r.charCodeAt(a);
                          (P[0 | i] = 0), (n += r.length + 1);
                        }),
                        0
                      );
                    },
                    environ_sizes_get: (e, t) => {
                      var n = t7();
                      x[e >> 2] = n.length;
                      var r = 0;
                      return (
                        n.forEach(function (e) {
                          r += e.length + 1;
                        }),
                        (x[t >> 2] = r),
                        0
                      );
                    },
                    fd_close: function (e) {
                      try {
                        var t = eB(e);
                        if (null === t.X) throw new eT(8);
                        t.Ma && (t.Ma = null);
                        try {
                          t.m.close && t.m.close(t);
                        } catch (e) {
                          throw e;
                        } finally {
                          eM[t.X] = null;
                        }
                        return (t.X = null), 0;
                      } catch (e) {
                        if (void 0 === eZ || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    fd_read: function (e, t, n, r) {
                      try {
                        e: {
                          var i = eB(e);
                          e = t;
                          for (var a, o = (t = 0); o < n; o++) {
                            var s = x[e >> 2],
                              u = x[(e + 4) >> 2];
                            e += 8;
                            var l = a,
                              c = P;
                            if (0 > u || 0 > l) throw new eT(28);
                            if (null === i.X || 1 == (2097155 & i.flags))
                              throw new eT(8);
                            if (16384 == (61440 & i.node.mode))
                              throw new eT(31);
                            if (!i.m.read) throw new eT(28);
                            var h = void 0 !== l;
                            if (h) {
                              if (!i.seekable) throw new eT(70);
                            } else l = i.position;
                            var f = i.m.read(i, c, s, u, l);
                            if ((h || (i.position += f), 0 > f)) {
                              var d = -1;
                              break e;
                            }
                            if (((t += f), f < u)) break;
                            void 0 !== a && (a += f);
                          }
                          d = t;
                        }
                        return (x[r >> 2] = d), 0;
                      } catch (e) {
                        if (void 0 === eZ || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    fd_seek: function (e, t, n, r, i) {
                      t =
                        (n + 2097152) >>> 0 < 4194305 - !!t
                          ? (t >>> 0) + 0x100000000 * n
                          : NaN;
                      try {
                        if (isNaN(t)) return 61;
                        var a = eB(e);
                        return (
                          eq(a, t, r),
                          (K = [
                            a.position >>> 0,
                            ((J = a.position),
                            1 <= +Math.abs(J)
                              ? 0 < J
                                ? Math.floor(J / 0x100000000) >>> 0
                                : ~~Math.ceil(
                                    (J - (~~J >>> 0)) / 0x100000000
                                  ) >>> 0
                              : 0),
                          ]),
                          (F[i >> 2] = K[0]),
                          (F[(i + 4) >> 2] = K[1]),
                          a.Ma && 0 === t && 0 === r && (a.Ma = null),
                          0
                        );
                      } catch (e) {
                        if (void 0 === eZ || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    fd_write: function (e, t, n, r) {
                      try {
                        e: {
                          var i = eB(e);
                          e = t;
                          for (var a, o = (t = 0); o < n; o++) {
                            var s = x[e >> 2],
                              u = x[(e + 4) >> 2];
                            e += 8;
                            var l = a,
                              c = P;
                            if (0 > u || 0 > l) throw new eT(28);
                            if (null === i.X || 0 == (2097155 & i.flags))
                              throw new eT(8);
                            if (16384 == (61440 & i.node.mode))
                              throw new eT(31);
                            if (!i.m.write) throw new eT(28);
                            i.seekable && 1024 & i.flags && eq(i, 0, 2);
                            var h = void 0 !== l;
                            if (h) {
                              if (!i.seekable) throw new eT(70);
                            } else l = i.position;
                            var f = i.m.write(i, c, s, u, l, void 0);
                            if ((h || (i.position += f), 0 > f)) {
                              var d = -1;
                              break e;
                            }
                            (t += f), void 0 !== a && (a += f);
                          }
                          d = t;
                        }
                        return (x[r >> 2] = d), 0;
                      } catch (e) {
                        if (void 0 === eZ || "ErrnoError" !== e.name) throw e;
                        return e.aa;
                      }
                    },
                    strftime_l: (e, t, n, r) => nr(e, t, n, r),
                  };
                  !(function () {
                    function t(t) {
                      if (
                        ((E = (R = t = t.exports).memory),
                        O(),
                        (D = R.__indirect_function_table),
                        B.unshift(R.__wasm_call_ctors),
                        N--,
                        e.monitorRunDependencies && e.monitorRunDependencies(N),
                        0 == N &&
                          (null !== V && (clearInterval(V), (V = null)), $))
                      ) {
                        var n = $;
                        ($ = null), n();
                      }
                      return t;
                    }
                    var n,
                      r,
                      i = { env: ns, wasi_snapshot_preview1: ns };
                    if (
                      (N++,
                      e.monitorRunDependencies && e.monitorRunDependencies(N),
                      e.instantiateWasm)
                    )
                      try {
                        return e.instantiateWasm(i, t);
                      } catch (e) {
                        C(
                          "Module.instantiateWasm callback failed with error: " +
                            e
                        ),
                          p(e);
                      }
                    ((n = function (e) {
                      t(e.instance);
                    }),
                    (r = q),
                    M ||
                    "function" != typeof WebAssembly.instantiateStreaming ||
                    Y(r) ||
                    r.startsWith("file://") ||
                    "function" != typeof fetch
                      ? G(r, i, n)
                      : fetch(r, { credentials: "same-origin" }).then((e) =>
                          WebAssembly.instantiateStreaming(e, i).then(
                            n,
                            function (e) {
                              return (
                                C("wasm streaming compile failed: " + e),
                                C("falling back to ArrayBuffer instantiation"),
                                G(r, i, n)
                              );
                            }
                          )
                        )).catch(p);
                  })();
                  var nu = (e) => (nu = R.free)(e),
                    nl = (e) => (nl = R.malloc)(e),
                    nc = (e._ma_device__on_notification_unlocked = (t) =>
                      (nc = e._ma_device__on_notification_unlocked =
                        R.ma_device__on_notification_unlocked)(t));
                  (e._ma_malloc_emscripten = (t, n) =>
                    (e._ma_malloc_emscripten = R.ma_malloc_emscripten)(t, n)),
                    (e._ma_free_emscripten = (t, n) =>
                      (e._ma_free_emscripten = R.ma_free_emscripten)(t, n));
                  var nh = (e._ma_device_process_pcm_frames_capture__webaudio =
                      (t, n, r) =>
                        (nh =
                          e._ma_device_process_pcm_frames_capture__webaudio =
                            R.ma_device_process_pcm_frames_capture__webaudio)(
                          t,
                          n,
                          r
                        )),
                    nf = (e._ma_device_process_pcm_frames_playback__webaudio = (
                      t,
                      n,
                      r
                    ) =>
                      (nf = e._ma_device_process_pcm_frames_playback__webaudio =
                        R.ma_device_process_pcm_frames_playback__webaudio)(
                        t,
                        n,
                        r
                      )),
                    nd = () => (nd = R.__errno_location)(),
                    np = (e) => (np = R.__getTypeName)(e);
                  function nm() {
                    function t() {
                      if (!f && ((f = !0), (e.calledRun = !0), !k)) {
                        if (
                          (e.noFSInit ||
                            eb ||
                            ((eb = !0),
                            eJ(),
                            (e.stdin = e.stdin),
                            (e.stdout = e.stdout),
                            (e.stderr = e.stderr),
                            e.stdin
                              ? eK("stdin", e.stdin)
                              : ez("/dev/tty", "/dev/stdin"),
                            e.stdout
                              ? eK("stdout", null, e.stdout)
                              : ez("/dev/tty", "/dev/stdout"),
                            e.stderr
                              ? eK("stderr", null, e.stderr)
                              : ez("/dev/tty1", "/dev/stderr"),
                            eG("/dev/stdin", 0),
                            eG("/dev/stdout", 1),
                            eG("/dev/stderr", 1)),
                          (eP = !1),
                          Q(B),
                          d(e),
                          e.onRuntimeInitialized && e.onRuntimeInitialized(),
                          e.postRun)
                        )
                          for (
                            "function" == typeof e.postRun &&
                            (e.postRun = [e.postRun]);
                            e.postRun.length;

                          ) {
                            var t = e.postRun.shift();
                            W.unshift(t);
                          }
                        Q(W);
                      }
                    }
                    if (!(0 < N)) {
                      if (e.preRun)
                        for (
                          "function" == typeof e.preRun &&
                          (e.preRun = [e.preRun]);
                          e.preRun.length;

                        )
                          !(function () {
                            var t = e.preRun.shift();
                            U.unshift(t);
                          })();
                      Q(U),
                        0 < N ||
                          (e.setStatus
                            ? (e.setStatus("Running..."),
                              setTimeout(function () {
                                setTimeout(function () {
                                  e.setStatus("");
                                }, 1),
                                  t();
                              }, 1))
                            : t());
                    }
                  }
                  if (
                    ((e.__embind_initialize_bindings = () =>
                      (e.__embind_initialize_bindings =
                        R._embind_initialize_bindings)()),
                    (e.dynCall_iiji = (t, n, r, i, a) =>
                      (e.dynCall_iiji = R.dynCall_iiji)(t, n, r, i, a)),
                    (e.dynCall_jiji = (t, n, r, i, a) =>
                      (e.dynCall_jiji = R.dynCall_jiji)(t, n, r, i, a)),
                    (e.dynCall_iiiji = (t, n, r, i, a, o) =>
                      (e.dynCall_iiiji = R.dynCall_iiiji)(t, n, r, i, a, o)),
                    (e.dynCall_iij = (t, n, r, i) =>
                      (e.dynCall_iij = R.dynCall_iij)(t, n, r, i)),
                    (e.dynCall_jii = (t, n, r) =>
                      (e.dynCall_jii = R.dynCall_jii)(t, n, r)),
                    (e.dynCall_viijii = (t, n, r, i, a, o, s) =>
                      (e.dynCall_viijii = R.dynCall_viijii)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      )),
                    (e.dynCall_iiiiij = (t, n, r, i, a, o, s) =>
                      (e.dynCall_iiiiij = R.dynCall_iiiiij)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s
                      )),
                    (e.dynCall_iiiiijj = (t, n, r, i, a, o, s, u, l) =>
                      (e.dynCall_iiiiijj = R.dynCall_iiiiijj)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l
                      )),
                    (e.dynCall_iiiiiijj = (t, n, r, i, a, o, s, u, l, c) =>
                      (e.dynCall_iiiiiijj = R.dynCall_iiiiiijj)(
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        u,
                        l,
                        c
                      )),
                    ($ = function e() {
                      f || nm(), f || ($ = e);
                    }),
                    e.preInit)
                  )
                    for (
                      "function" == typeof e.preInit &&
                      (e.preInit = [e.preInit]);
                      0 < e.preInit.length;

                    )
                      e.preInit.pop()();
                  return nm(), e.ready;
                });
            },
            (e) => {
              e.exports = JSON.parse(
                '{"name":"@rive-app/canvas","version":"2.26.6","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}'
              );
            },
            (e, t, n) => {
              n.r(t), n.d(t, { Animation: () => r.Animation });
              var r = n(4);
            },
            (e, t, n) => {
              n.r(t), n.d(t, { Animation: () => r });
              var r = (function () {
                function e(e, t, n, r) {
                  (this.animation = e),
                    (this.artboard = t),
                    (this.playing = r),
                    (this.loopCount = 0),
                    (this.scrubTo = null),
                    (this.instance = new n.LinearAnimationInstance(e, t));
                }
                return (
                  Object.defineProperty(e.prototype, "name", {
                    get: function () {
                      return this.animation.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "time", {
                    get: function () {
                      return this.instance.time;
                    },
                    set: function (e) {
                      this.instance.time = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "loopValue", {
                    get: function () {
                      return this.animation.loopValue;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(e.prototype, "needsScrub", {
                    get: function () {
                      return null !== this.scrubTo;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (e.prototype.advance = function (e) {
                    null === this.scrubTo
                      ? this.instance.advance(e)
                      : ((this.instance.time = 0),
                        this.instance.advance(this.scrubTo),
                        (this.scrubTo = null));
                  }),
                  (e.prototype.apply = function (e) {
                    this.instance.apply(e);
                  }),
                  (e.prototype.cleanup = function () {
                    this.instance.delete();
                  }),
                  e
                );
              })();
            },
            (e, t, n) => {
              n.r(t),
                n.d(t, {
                  BLANK_URL: () => i.BLANK_URL,
                  registerTouchInteractions: () => r.registerTouchInteractions,
                  sanitizeUrl: () => i.sanitizeUrl,
                });
              var r = n(6),
                i = n(7);
            },
            (e, t, n) => {
              n.r(t), n.d(t, { registerTouchInteractions: () => a });
              var r = void 0,
                i = function (e, t) {
                  var n, r;
                  return ["touchstart", "touchmove"].indexOf(e.type) > -1 &&
                    (null == (n = e.touches) ? void 0 : n.length)
                    ? (t || e.preventDefault(),
                      {
                        clientX: e.touches[0].clientX,
                        clientY: e.touches[0].clientY,
                      })
                    : "touchend" === e.type &&
                      (null == (r = e.changedTouches) ? void 0 : r.length)
                    ? {
                        clientX: e.changedTouches[0].clientX,
                        clientY: e.changedTouches[0].clientY,
                      }
                    : { clientX: e.clientX, clientY: e.clientY };
                },
                a = function (e) {
                  var t = e.canvas,
                    n = e.artboard,
                    a = e.stateMachines,
                    o = void 0 === a ? [] : a,
                    s = e.renderer,
                    u = e.rive,
                    l = e.fit,
                    c = e.alignment,
                    h = e.isTouchScrollEnabled,
                    f = void 0 !== h && h,
                    d = e.layoutScaleFactor,
                    p = void 0 === d ? 1 : d;
                  if (
                    !t ||
                    !o.length ||
                    !s ||
                    !u ||
                    !n ||
                    "undefined" == typeof window
                  )
                    return null;
                  var m = null,
                    v = !1,
                    b = function (e) {
                      if (v && e instanceof MouseEvent) {
                        "mouseup" == e.type && (v = !1);
                        return;
                      }
                      (v = f && "touchend" === e.type && "touchstart" === m),
                        (m = e.type);
                      var t = e.currentTarget.getBoundingClientRect(),
                        r = i(e, f),
                        a = r.clientX,
                        s = r.clientY;
                      if (a || s) {
                        var h = a - t.left,
                          d = s - t.top,
                          b = u.computeAlignment(
                            l,
                            c,
                            { minX: 0, minY: 0, maxX: t.width, maxY: t.height },
                            n.bounds,
                            p
                          ),
                          g = new u.Mat2D();
                        b.invert(g);
                        var y = new u.Vec2D(h, d),
                          w = u.mapXY(g, y),
                          _ = w.x(),
                          A = w.y();
                        switch (
                          (w.delete(),
                          g.delete(),
                          y.delete(),
                          b.delete(),
                          e.type)
                        ) {
                          case "mouseout":
                            for (var C = 0; C < o.length; C++) {
                              var M = o[C];
                              M.pointerMove(_, A);
                            }
                            break;
                          case "touchmove":
                          case "mouseover":
                          case "mousemove":
                            for (var E = 0; E < o.length; E++) {
                              var M = o[E];
                              M.pointerMove(_, A);
                            }
                            break;
                          case "touchstart":
                          case "mousedown":
                            for (var R = 0; R < o.length; R++) {
                              var M = o[R];
                              M.pointerDown(_, A);
                            }
                            break;
                          case "touchend":
                          case "mouseup":
                            for (var P = 0; P < o.length; P++) {
                              var M = o[P];
                              M.pointerUp(_, A);
                            }
                        }
                      }
                    }.bind(r);
                  return (
                    t.addEventListener("mouseover", b),
                    t.addEventListener("mouseout", b),
                    t.addEventListener("mousemove", b),
                    t.addEventListener("mousedown", b),
                    t.addEventListener("mouseup", b),
                    t.addEventListener("touchmove", b, { passive: f }),
                    t.addEventListener("touchstart", b, { passive: f }),
                    t.addEventListener("touchend", b),
                    function () {
                      t.removeEventListener("mouseover", b),
                        t.removeEventListener("mouseout", b),
                        t.removeEventListener("mousemove", b),
                        t.removeEventListener("mousedown", b),
                        t.removeEventListener("mouseup", b),
                        t.removeEventListener("touchmove", b),
                        t.removeEventListener("touchstart", b),
                        t.removeEventListener("touchend", b);
                    }
                  );
                };
            },
            (e, t, n) => {
              n.r(t), n.d(t, { BLANK_URL: () => l, sanitizeUrl: () => c });
              var r = /^([^\w]*)(javascript|data|vbscript)/im,
                i = /&#(\w+)(^\w|;)?/g,
                a = /&(newline|tab);/gi,
                o = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                s = /^.+(:|&colon;)/gim,
                u = [".", "/"],
                l = "about:blank";
              function c(e) {
                if (!e) return l;
                var t = e
                  .replace(o, "")
                  .replace(i, function (e, t) {
                    return String.fromCharCode(t);
                  })
                  .replace(a, "")
                  .replace(o, "")
                  .trim();
                if (!t) return l;
                if (u.indexOf(t[0]) > -1) return t;
                var n = t.match(s);
                if (!n) return t;
                var c = n[0];
                return r.test(c) ? l : t;
              }
            },
          ],
          ee = {};
        function et(e) {
          var t = ee[e];
          if (void 0 !== t) return t.exports;
          var n = (ee[e] = { exports: {} });
          return Q[e](n, n.exports, et), n.exports;
        }
        (et.d = (e, t) => {
          for (var n in t)
            et.o(t, n) &&
              !et.o(e, n) &&
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
          (et.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (et.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var en = {};
        return (
          et.r(en),
          et.d(en, {
            Alignment: () => t,
            DataEnum: () => U,
            EventType: () => i,
            Fit: () => e,
            Layout: () => y,
            LoopType: () => a,
            Rive: () => O,
            RiveEventType: () => r,
            RiveFile: () => k,
            RuntimeLoader: () => w,
            StateMachineInput: () => A,
            StateMachineInputType: () => n,
            Testing: () => q,
            ViewModel: () => D,
            ViewModelInstance: () => B,
            ViewModelInstanceBoolean: () => $,
            ViewModelInstanceColor: () => z,
            ViewModelInstanceEnum: () => Y,
            ViewModelInstanceNumber: () => V,
            ViewModelInstanceString: () => N,
            ViewModelInstanceTrigger: () => H,
            ViewModelInstanceValue: () => W,
            decodeAudio: () => J,
            decodeFont: () => Z,
            decodeImage: () => K,
          }),
          (s = et(1)),
          (u = et(2)),
          (l = et(3)),
          (c = et(5)),
          (h = function (e, t) {
            return (h =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          (f = function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            h(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
          (d = function () {
            return (d =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          }),
          (p = function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, a) {
              function o(e) {
                try {
                  u(r.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(o, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          }),
          (m = function (e, t) {
            var n,
              r,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              },
              o = Object.create(
                ("function" == typeof Iterator ? Iterator : Object).prototype
              );
            return (
              (o.next = s(0)),
              (o.throw = s(1)),
              (o.return = s(2)),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(s) {
              return function (u) {
                var l = [s, u];
                if (n) throw TypeError("Generator is already executing.");
                for (; o && ((o = 0), l[0] && (a = 0)), a; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & l[0]
                            ? r.return
                            : l[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, l[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                      case 0:
                      case 1:
                        i = l;
                        break;
                      case 4:
                        return a.label++, { value: l[1], done: !1 };
                      case 5:
                        a.label++, (r = l[1]), (l = [0]);
                        continue;
                      case 7:
                        (l = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                          (6 === l[0] || 2 === l[0])
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === l[0] &&
                          (!i || (l[1] > i[0] && l[1] < i[3]))
                        ) {
                          a.label = l[1];
                          break;
                        }
                        if (6 === l[0] && a.label < i[1]) {
                          (a.label = i[1]), (i = l);
                          break;
                        }
                        if (i && a.label < i[2]) {
                          (a.label = i[2]), a.ops.push(l);
                          break;
                        }
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    l = t.call(e, a);
                  } catch (e) {
                    (l = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & l[0]) throw l[1];
                return { value: l[0] ? l[1] : void 0, done: !0 };
              };
            }
          }),
          (v = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t.isHandledError = !0), t;
            }
            return f(t, e), t;
          })(Error)),
          ((b = e || (e = {})).Cover = "cover"),
          (b.Contain = "contain"),
          (b.Fill = "fill"),
          (b.FitWidth = "fitWidth"),
          (b.FitHeight = "fitHeight"),
          (b.None = "none"),
          (b.ScaleDown = "scaleDown"),
          (b.Layout = "layout"),
          ((g = t || (t = {})).Center = "center"),
          (g.TopLeft = "topLeft"),
          (g.TopCenter = "topCenter"),
          (g.TopRight = "topRight"),
          (g.CenterLeft = "centerLeft"),
          (g.CenterRight = "centerRight"),
          (g.BottomLeft = "bottomLeft"),
          (g.BottomCenter = "bottomCenter"),
          (g.BottomRight = "bottomRight"),
          (y = (function () {
            function n(n) {
              var r, i, a, o, s, u, l;
              (this.fit =
                null != (r = null == n ? void 0 : n.fit) ? r : e.Contain),
                (this.alignment =
                  null != (i = null == n ? void 0 : n.alignment)
                    ? i
                    : t.Center),
                (this.layoutScaleFactor =
                  null != (a = null == n ? void 0 : n.layoutScaleFactor)
                    ? a
                    : 1),
                (this.minX = null != (o = null == n ? void 0 : n.minX) ? o : 0),
                (this.minY = null != (s = null == n ? void 0 : n.minY) ? s : 0),
                (this.maxX = null != (u = null == n ? void 0 : n.maxX) ? u : 0),
                (this.maxY = null != (l = null == n ? void 0 : n.maxY) ? l : 0);
            }
            return (
              (n.new = function (e) {
                var t = e.fit,
                  r = e.alignment,
                  i = e.minX,
                  a = e.minY,
                  o = e.maxX,
                  s = e.maxY;
                return (
                  console.warn(
                    "This function is deprecated: please use `new Layout({})` instead"
                  ),
                  new n({
                    fit: t,
                    alignment: r,
                    minX: i,
                    minY: a,
                    maxX: o,
                    maxY: s,
                  })
                );
              }),
              (n.prototype.copyWith = function (e) {
                var t = e.fit,
                  r = e.alignment,
                  i = e.layoutScaleFactor,
                  a = e.minX,
                  o = e.minY,
                  s = e.maxX,
                  u = e.maxY;
                return new n({
                  fit: null != t ? t : this.fit,
                  alignment: null != r ? r : this.alignment,
                  layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                  minX: null != a ? a : this.minX,
                  minY: null != o ? o : this.minY,
                  maxX: null != s ? s : this.maxX,
                  maxY: null != u ? u : this.maxY,
                });
              }),
              (n.prototype.runtimeFit = function (t) {
                var n;
                return this.cachedRuntimeFit
                  ? this.cachedRuntimeFit
                  : ((n =
                      this.fit === e.Cover
                        ? t.Fit.cover
                        : this.fit === e.Contain
                        ? t.Fit.contain
                        : this.fit === e.Fill
                        ? t.Fit.fill
                        : this.fit === e.FitWidth
                        ? t.Fit.fitWidth
                        : this.fit === e.FitHeight
                        ? t.Fit.fitHeight
                        : this.fit === e.ScaleDown
                        ? t.Fit.scaleDown
                        : this.fit === e.Layout
                        ? t.Fit.layout
                        : t.Fit.none),
                    (this.cachedRuntimeFit = n),
                    n);
              }),
              (n.prototype.runtimeAlignment = function (e) {
                var n;
                return this.cachedRuntimeAlignment
                  ? this.cachedRuntimeAlignment
                  : ((n =
                      this.alignment === t.TopLeft
                        ? e.Alignment.topLeft
                        : this.alignment === t.TopCenter
                        ? e.Alignment.topCenter
                        : this.alignment === t.TopRight
                        ? e.Alignment.topRight
                        : this.alignment === t.CenterLeft
                        ? e.Alignment.centerLeft
                        : this.alignment === t.CenterRight
                        ? e.Alignment.centerRight
                        : this.alignment === t.BottomLeft
                        ? e.Alignment.bottomLeft
                        : this.alignment === t.BottomCenter
                        ? e.Alignment.bottomCenter
                        : this.alignment === t.BottomRight
                        ? e.Alignment.bottomRight
                        : e.Alignment.center),
                    (this.cachedRuntimeAlignment = n),
                    n);
              }),
              n
            );
          })()),
          (w = (function () {
            function e() {}
            return (
              (e.loadRuntime = function () {
                s.default({
                  locateFile: function () {
                    return e.wasmURL;
                  },
                })
                  .then(function (t) {
                    var n;
                    for (e.runtime = t; e.callBackQueue.length > 0; )
                      null == (n = e.callBackQueue.shift()) || n(e.runtime);
                  })
                  .catch(function (t) {
                    var n = {
                      message:
                        (null == t ? void 0 : t.message) || "Unknown error",
                      type: (null == t ? void 0 : t.name) || "Error",
                      wasmError:
                        t instanceof WebAssembly.CompileError ||
                        t instanceof WebAssembly.RuntimeError,
                      originalError: t,
                    };
                    console.debug("Rive WASM load error details:", n);
                    var r = "https://cdn.jsdelivr.net/npm/"
                      .concat(u.name, "@")
                      .concat(u.version, "/rive_fallback.wasm");
                    e.wasmURL.toLowerCase() !== r
                      ? (console.warn(
                          "Failed to load WASM from "
                            .concat(e.wasmURL, " (")
                            .concat(n.message, "), trying jsdelivr as a backup")
                        ),
                        e.setWasmUrl(r),
                        e.loadRuntime())
                      : console.error(
                          [
                            "Could not load Rive WASM file from "
                              .concat(e.wasmURL, " or ")
                              .concat(r, "."),
                            "Possible reasons:",
                            "- Network connection is down",
                            "- WebAssembly is not supported in this environment",
                            "- The WASM file is corrupted or incompatible",
                            "\nError details:",
                            "- Type: ".concat(n.type),
                            "- Message: ".concat(n.message),
                            "- WebAssembly-specific error: ".concat(
                              n.wasmError
                            ),
                            "\nTo resolve, you may need to:",
                            "1. Check your network connection",
                            "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                            "3. Call RuntimeLoader.loadRuntime() again",
                          ].join("\n")
                        );
                  });
              }),
              (e.getInstance = function (t) {
                e.isLoading || ((e.isLoading = !0), e.loadRuntime()),
                  e.runtime ? t(e.runtime) : e.callBackQueue.push(t);
              }),
              (e.awaitInstance = function () {
                return new Promise(function (t) {
                  return e.getInstance(function (e) {
                    return t(e);
                  });
                });
              }),
              (e.setWasmUrl = function (t) {
                e.wasmURL = t;
              }),
              (e.getWasmUrl = function () {
                return e.wasmURL;
              }),
              (e.isLoading = !1),
              (e.callBackQueue = []),
              (e.wasmURL = "https://unpkg.com/"
                .concat(u.name, "@")
                .concat(u.version, "/rive.wasm")),
              e
            );
          })()),
          ((_ = n || (n = {}))[(_.Number = 56)] = "Number"),
          (_[(_.Trigger = 58)] = "Trigger"),
          (_[(_.Boolean = 59)] = "Boolean"),
          (A = (function () {
            function e(e, t) {
              (this.type = e), (this.runtimeInput = t);
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this.runtimeInput.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "value", {
                get: function () {
                  return this.runtimeInput.value;
                },
                set: function (e) {
                  this.runtimeInput.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.fire = function () {
                this.type === n.Trigger && this.runtimeInput.fire();
              }),
              (e.prototype.delete = function () {
                this.runtimeInput = null;
              }),
              e
            );
          })()),
          ((C = r || (r = {}))[(C.General = 128)] = "General"),
          (C[(C.OpenUrl = 131)] = "OpenUrl"),
          (M = (function () {
            function e(e, t, n, r) {
              (this.stateMachine = e),
                (this.playing = n),
                (this.artboard = r),
                (this.inputs = []),
                (this.instance = new t.StateMachineInstance(e, r)),
                this.initInputs(t);
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this.stateMachine.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "statesChanged", {
                get: function () {
                  for (
                    var e = [], t = 0;
                    t < this.instance.stateChangedCount();
                    t++
                  )
                    e.push(this.instance.stateChangedNameByIndex(t));
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.advance = function (e) {
                this.instance.advance(e);
              }),
              (e.prototype.advanceAndApply = function (e) {
                this.instance.advanceAndApply(e);
              }),
              (e.prototype.reportedEventCount = function () {
                return this.instance.reportedEventCount();
              }),
              (e.prototype.reportedEventAt = function (e) {
                return this.instance.reportedEventAt(e);
              }),
              (e.prototype.initInputs = function (e) {
                for (var t = 0; t < this.instance.inputCount(); t++) {
                  var n = this.instance.input(t);
                  this.inputs.push(this.mapRuntimeInput(n, e));
                }
              }),
              (e.prototype.mapRuntimeInput = function (e, t) {
                return e.type === t.SMIInput.bool
                  ? new A(n.Boolean, e.asBool())
                  : e.type === t.SMIInput.number
                  ? new A(n.Number, e.asNumber())
                  : e.type === t.SMIInput.trigger
                  ? new A(n.Trigger, e.asTrigger())
                  : void 0;
              }),
              (e.prototype.cleanup = function () {
                this.inputs.forEach(function (e) {
                  e.delete();
                }),
                  (this.inputs.length = 0),
                  this.instance.delete();
              }),
              (e.prototype.bindViewModelInstance = function (e) {
                null != e.runtimeInstance &&
                  this.instance.bindViewModelInstance(e.runtimeInstance);
              }),
              e
            );
          })()),
          (E = (function () {
            function e(e, t, n, r, i) {
              void 0 === r && (r = []),
                void 0 === i && (i = []),
                (this.runtime = e),
                (this.artboard = t),
                (this.eventManager = n),
                (this.animations = r),
                (this.stateMachines = i);
            }
            return (
              (e.prototype.add = function (e, t, n) {
                if ((void 0 === n && (n = !0), 0 === (e = G(e)).length))
                  this.animations.forEach(function (e) {
                    return (e.playing = t);
                  }),
                    this.stateMachines.forEach(function (e) {
                      return (e.playing = t);
                    });
                else
                  for (
                    var r = this.animations.map(function (e) {
                        return e.name;
                      }),
                      a = this.stateMachines.map(function (e) {
                        return e.name;
                      }),
                      o = 0;
                    o < e.length;
                    o++
                  ) {
                    var s = r.indexOf(e[o]),
                      u = a.indexOf(e[o]);
                    if (s >= 0 || u >= 0)
                      s >= 0
                        ? (this.animations[s].playing = t)
                        : (this.stateMachines[u].playing = t);
                    else {
                      var c = this.artboard.animationByName(e[o]);
                      if (c) {
                        var h = new l.Animation(
                          c,
                          this.artboard,
                          this.runtime,
                          t
                        );
                        h.advance(0), h.apply(1), this.animations.push(h);
                      } else {
                        var f = this.artboard.stateMachineByName(e[o]);
                        if (f) {
                          var d = new M(f, this.runtime, t, this.artboard);
                          this.stateMachines.push(d);
                        }
                      }
                    }
                  }
                return (
                  n &&
                    (t
                      ? this.eventManager.fire({
                          type: i.Play,
                          data: this.playing,
                        })
                      : this.eventManager.fire({
                          type: i.Pause,
                          data: this.paused,
                        })),
                  t ? this.playing : this.paused
                );
              }),
              (e.prototype.initLinearAnimations = function (e, t) {
                for (
                  var n = this.animations.map(function (e) {
                      return e.name;
                    }),
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = n.indexOf(e[r]);
                  if (i >= 0) this.animations[i].playing = t;
                  else {
                    var a = this.artboard.animationByName(e[r]);
                    if (a) {
                      var o = new l.Animation(
                        a,
                        this.artboard,
                        this.runtime,
                        t
                      );
                      o.advance(0), o.apply(1), this.animations.push(o);
                    }
                  }
                }
              }),
              (e.prototype.initStateMachines = function (e, t) {
                for (
                  var n = this.stateMachines.map(function (e) {
                      return e.name;
                    }),
                    r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = n.indexOf(e[r]);
                  if (i >= 0) this.stateMachines[i].playing = t;
                  else {
                    var a = this.artboard.stateMachineByName(e[r]);
                    if (a) {
                      var o = new M(a, this.runtime, t, this.artboard);
                      this.stateMachines.push(o), t || o.advanceAndApply(0);
                    } else this.initLinearAnimations([e[r]], t);
                  }
                }
              }),
              (e.prototype.play = function (e) {
                return this.add(e, !0);
              }),
              (e.prototype.pause = function (e) {
                return this.add(e, !1);
              }),
              (e.prototype.scrub = function (e, t) {
                var n = this.animations.filter(function (t) {
                  return e.includes(t.name);
                });
                return (
                  n.forEach(function (e) {
                    return (e.scrubTo = t);
                  }),
                  n.map(function (e) {
                    return e.name;
                  })
                );
              }),
              Object.defineProperty(e.prototype, "playing", {
                get: function () {
                  return this.animations
                    .filter(function (e) {
                      return e.playing;
                    })
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "paused", {
                get: function () {
                  return this.animations
                    .filter(function (e) {
                      return !e.playing;
                    })
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.stop = function (e) {
                var t = this;
                e = G(e);
                var n = [];
                if (0 === e.length)
                  (n = this.animations
                    .map(function (e) {
                      return e.name;
                    })
                    .concat(
                      this.stateMachines.map(function (e) {
                        return e.name;
                      })
                    )),
                    this.animations.forEach(function (e) {
                      return e.cleanup();
                    }),
                    this.stateMachines.forEach(function (e) {
                      return e.cleanup();
                    }),
                    this.animations.splice(0, this.animations.length),
                    this.stateMachines.splice(0, this.stateMachines.length);
                else {
                  var r = this.animations.filter(function (t) {
                    return e.includes(t.name);
                  });
                  r.forEach(function (e) {
                    e.cleanup(),
                      t.animations.splice(t.animations.indexOf(e), 1);
                  });
                  var a = this.stateMachines.filter(function (t) {
                    return e.includes(t.name);
                  });
                  a.forEach(function (e) {
                    e.cleanup(),
                      t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                  }),
                    (n = r
                      .map(function (e) {
                        return e.name;
                      })
                      .concat(
                        a.map(function (e) {
                          return e.name;
                        })
                      ));
                }
                return this.eventManager.fire({ type: i.Stop, data: n }), n;
              }),
              Object.defineProperty(e.prototype, "isPlaying", {
                get: function () {
                  return (
                    this.animations.reduce(function (e, t) {
                      return e || t.playing;
                    }, !1) ||
                    this.stateMachines.reduce(function (e, t) {
                      return e || t.playing;
                    }, !1)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isPaused", {
                get: function () {
                  return (
                    !this.isPlaying &&
                    (this.animations.length > 0 ||
                      this.stateMachines.length > 0)
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isStopped", {
                get: function () {
                  return (
                    0 === this.animations.length &&
                    0 === this.stateMachines.length
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.atLeastOne = function (e, t) {
                var n;
                return (
                  void 0 === t && (t = !0),
                  0 === this.animations.length &&
                    0 === this.stateMachines.length &&
                    (this.artboard.animationCount() > 0
                      ? this.add(
                          [(n = this.artboard.animationByIndex(0).name)],
                          e,
                          t
                        )
                      : this.artboard.stateMachineCount() > 0 &&
                        this.add(
                          [(n = this.artboard.stateMachineByIndex(0).name)],
                          e,
                          t
                        )),
                  n
                );
              }),
              (e.prototype.handleLooping = function () {
                for (
                  var e = 0,
                    t = this.animations.filter(function (e) {
                      return e.playing;
                    });
                  e < t.length;
                  e++
                ) {
                  var n = t[e];
                  0 === n.loopValue && n.loopCount
                    ? ((n.loopCount = 0), this.stop(n.name))
                    : 1 === n.loopValue && n.loopCount
                    ? (this.eventManager.fire({
                        type: i.Loop,
                        data: { animation: n.name, type: a.Loop },
                      }),
                      (n.loopCount = 0))
                    : 2 === n.loopValue &&
                      n.loopCount > 1 &&
                      (this.eventManager.fire({
                        type: i.Loop,
                        data: { animation: n.name, type: a.PingPong },
                      }),
                      (n.loopCount = 0));
                }
              }),
              (e.prototype.handleStateChanges = function () {
                for (
                  var e = [],
                    t = 0,
                    n = this.stateMachines.filter(function (e) {
                      return e.playing;
                    });
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  e.push.apply(e, r.statesChanged);
                }
                e.length > 0 &&
                  this.eventManager.fire({ type: i.StateChange, data: e });
              }),
              (e.prototype.handleAdvancing = function (e) {
                this.eventManager.fire({ type: i.Advance, data: e });
              }),
              e
            );
          })()),
          ((R = i || (i = {})).Load = "load"),
          (R.LoadError = "loaderror"),
          (R.Play = "play"),
          (R.Pause = "pause"),
          (R.Stop = "stop"),
          (R.Loop = "loop"),
          (R.Draw = "draw"),
          (R.Advance = "advance"),
          (R.StateChange = "statechange"),
          (R.RiveEvent = "riveevent"),
          (R.AudioStatusChange = "audiostatuschange"),
          ((P = a || (a = {})).OneShot = "oneshot"),
          (P.Loop = "loop"),
          (P.PingPong = "pingpong"),
          (T = (function () {
            function e(e) {
              void 0 === e && (e = []), (this.listeners = e);
            }
            return (
              (e.prototype.getListeners = function (e) {
                return this.listeners.filter(function (t) {
                  return t.type === e;
                });
              }),
              (e.prototype.add = function (e) {
                this.listeners.includes(e) || this.listeners.push(e);
              }),
              (e.prototype.remove = function (e) {
                for (var t = 0; t < this.listeners.length; t++) {
                  var n = this.listeners[t];
                  if (n.type === e.type && n.callback === e.callback) {
                    this.listeners.splice(t, 1);
                    break;
                  }
                }
              }),
              (e.prototype.removeAll = function (e) {
                var t = this;
                e
                  ? this.listeners
                      .filter(function (t) {
                        return t.type === e;
                      })
                      .forEach(function (e) {
                        return t.remove(e);
                      })
                  : this.listeners.splice(0, this.listeners.length);
              }),
              (e.prototype.fire = function (e) {
                this.getListeners(e.type).forEach(function (t) {
                  return t.callback(e);
                });
              }),
              e
            );
          })()),
          (I = (function () {
            function e(e) {
              (this.eventManager = e), (this.queue = []);
            }
            return (
              (e.prototype.add = function (e) {
                this.queue.push(e);
              }),
              (e.prototype.process = function () {
                for (; this.queue.length > 0; ) {
                  var e = this.queue.shift();
                  (null == e ? void 0 : e.action) && e.action(),
                    (null == e ? void 0 : e.event) &&
                      this.eventManager.fire(e.event);
                }
              }),
              e
            );
          })()),
          ((L = o || (o = {}))[(L.AVAILABLE = 0)] = "AVAILABLE"),
          (L[(L.UNAVAILABLE = 1)] = "UNAVAILABLE"),
          (F = new ((function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t._started = !1),
                (t._enabled = !1),
                (t._status = o.UNAVAILABLE),
                t
              );
            }
            return (
              f(t, e),
              (t.prototype.delay = function (e) {
                return p(this, void 0, void 0, function () {
                  return m(this, function (t) {
                    return [
                      2,
                      new Promise(function (t) {
                        return setTimeout(t, e);
                      }),
                    ];
                  });
                });
              }),
              (t.prototype.timeout = function () {
                return p(this, void 0, void 0, function () {
                  return m(this, function (e) {
                    return [
                      2,
                      new Promise(function (e, t) {
                        return setTimeout(t, 50);
                      }),
                    ];
                  });
                });
              }),
              (t.prototype.reportToListeners = function () {
                this.fire({ type: i.AudioStatusChange }), this.removeAll();
              }),
              (t.prototype.enableAudio = function () {
                return p(this, void 0, void 0, function () {
                  return m(this, function (e) {
                    return (
                      this._enabled ||
                        ((this._enabled = !0),
                        (this._status = o.AVAILABLE),
                        this.reportToListeners()),
                      [2]
                    );
                  });
                });
              }),
              (t.prototype.testAudio = function () {
                return p(this, void 0, void 0, function () {
                  return m(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (
                          this._status !== o.UNAVAILABLE ||
                          null === this._audioContext
                        )
                          return [3, 4];
                        e.label = 1;
                      case 1:
                        return (
                          e.trys.push([1, 3, , 4]),
                          [
                            4,
                            Promise.race([
                              this._audioContext.resume(),
                              this.timeout(),
                            ]),
                          ]
                        );
                      case 2:
                        return e.sent(), this.enableAudio(), [3, 4];
                      case 3:
                        return e.sent(), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype._establishAudio = function () {
                return p(this, void 0, void 0, function () {
                  return m(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (this._started) return [3, 5];
                        if (
                          ((this._started = !0), "undefined" != typeof window)
                        )
                          return [3, 1];
                        return this.enableAudio(), [3, 5];
                      case 1:
                        (this._audioContext = new AudioContext()),
                          this.listenForUserAction(),
                          (e.label = 2);
                      case 2:
                        if (this._status !== o.UNAVAILABLE) return [3, 5];
                        return [4, this.testAudio()];
                      case 3:
                        return e.sent(), [4, this.delay(1e3)];
                      case 4:
                        return e.sent(), [3, 2];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.listenForUserAction = function () {
                var e = this;
                document.addEventListener(
                  "pointerdown",
                  function () {
                    return p(e, void 0, void 0, function () {
                      return m(this, function (e) {
                        return this.enableAudio(), [2];
                      });
                    });
                  },
                  { once: !0 }
                );
              }),
              (t.prototype.establishAudio = function () {
                return p(this, void 0, void 0, function () {
                  return m(this, function (e) {
                    return this._establishAudio(), [2];
                  });
                });
              }),
              Object.defineProperty(t.prototype, "systemVolume", {
                get: function () {
                  return this._status === o.UNAVAILABLE
                    ? (this.testAudio(), 0)
                    : 1;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "status", {
                get: function () {
                  return this._status;
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            );
          })(T))()),
          (x = (function () {
            function e() {}
            return (
              (e.prototype.observe = function () {}),
              (e.prototype.unobserve = function () {}),
              (e.prototype.disconnect = function () {}),
              e
            );
          })()),
          (j = globalThis.ResizeObserver || x),
          (S = new ((function () {
            function e() {
              var e = this;
              (this._elementsMap = new Map()),
                (this._onObservedEntry = function (t) {
                  var n = e._elementsMap.get(t.target);
                  null !== n
                    ? n.onResize(
                        0 == t.target.clientWidth || 0 == t.target.clientHeight
                      )
                    : e._resizeObserver.unobserve(t.target);
                }),
                (this._onObserved = function (t) {
                  t.forEach(e._onObservedEntry);
                }),
                (this._resizeObserver = new j(this._onObserved));
            }
            return (
              (e.prototype.add = function (e, t) {
                var n = { onResize: t, element: e };
                return (
                  this._elementsMap.set(e, n),
                  this._resizeObserver.observe(e),
                  n
                );
              }),
              (e.prototype.remove = function (e) {
                this._resizeObserver.unobserve(e.element),
                  this._elementsMap.delete(e.element);
              }),
              e
            );
          })())()),
          (k = (function () {
            function e(e) {
              (this.enableRiveAssetCDN = !0),
                (this.referenceCount = 0),
                (this.destroyed = !1),
                (this.src = e.src),
                (this.buffer = e.buffer),
                e.assetLoader && (this.assetLoader = e.assetLoader),
                (this.enableRiveAssetCDN =
                  "boolean" != typeof e.enableRiveAssetCDN ||
                  e.enableRiveAssetCDN),
                (this.eventManager = new T()),
                e.onLoad && this.on(i.Load, e.onLoad),
                e.onLoadError && this.on(i.LoadError, e.onLoadError);
            }
            return (
              (e.prototype.initData = function () {
                return p(this, void 0, void 0, function () {
                  var t, n, r, a;
                  return m(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!this.src) return [3, 2];
                        return (t = this), [4, X(this.src)];
                      case 1:
                        (t.buffer = o.sent()), (o.label = 2);
                      case 2:
                        if (this.destroyed) return [2];
                        return (
                          this.assetLoader &&
                            (n = new this.runtime.CustomFileAssetLoader({
                              loadContents: this.assetLoader,
                            })),
                          (r = this),
                          [
                            4,
                            this.runtime.load(
                              new Uint8Array(this.buffer),
                              n,
                              this.enableRiveAssetCDN
                            ),
                          ]
                        );
                      case 3:
                        if (((r.file = o.sent()), this.destroyed))
                          return (
                            null == (a = this.file) || a.delete(),
                            (this.file = null),
                            [2]
                          );
                        if (null !== this.file)
                          this.eventManager.fire({ type: i.Load, data: this });
                        else
                          throw (
                            (this.eventManager.fire({
                              type: i.LoadError,
                              data: null,
                            }),
                            Error(e.fileLoadErrorMessage))
                          );
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.init = function () {
                return p(this, void 0, void 0, function () {
                  var t;
                  return m(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (!this.src && !this.buffer)
                          throw Error(e.missingErrorMessage);
                        return (t = this), [4, w.awaitInstance()];
                      case 1:
                        if (((t.runtime = n.sent()), this.destroyed))
                          return [2];
                        return [4, this.initData()];
                      case 2:
                        return n.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.on = function (e, t) {
                this.eventManager.add({ type: e, callback: t });
              }),
              (e.prototype.off = function (e, t) {
                this.eventManager.remove({ type: e, callback: t });
              }),
              (e.prototype.cleanup = function () {
                var e;
                (this.referenceCount -= 1),
                  this.referenceCount <= 0 &&
                    (this.removeAllRiveEventListeners(),
                    null == (e = this.file) || e.delete(),
                    (this.file = null),
                    (this.destroyed = !0));
              }),
              (e.prototype.removeAllRiveEventListeners = function (e) {
                this.eventManager.removeAll(e);
              }),
              (e.prototype.getInstance = function () {
                if (null !== this.file)
                  return (this.referenceCount += 1), this.file;
              }),
              (e.missingErrorMessage =
                "Rive source file or data buffer required"),
              (e.fileLoadErrorMessage = "The file failed to load"),
              e
            );
          })()),
          (O = (function () {
            function t(e) {
              var t,
                n = this;
              (this.loaded = !1),
                (this.destroyed = !1),
                (this._observed = null),
                (this.readyForPlaying = !1),
                (this.artboard = null),
                (this.eventCleanup = null),
                (this.shouldDisableRiveListeners = !1),
                (this.automaticallyHandleEvents = !1),
                (this.enableRiveAssetCDN = !0),
                (this._volume = 1),
                (this._artboardWidth = void 0),
                (this._artboardHeight = void 0),
                (this._devicePixelRatioUsed = 1),
                (this._hasZeroSize = !1),
                (this._audioEventListener = null),
                (this._boundDraw = null),
                (this._viewModelInstance = null),
                (this._dataEnums = null),
                (this.durations = []),
                (this.frameTimes = []),
                (this.frameCount = 0),
                (this.isTouchScrollEnabled = !1),
                (this.onCanvasResize = function (e) {
                  var t = n._hasZeroSize !== e;
                  (n._hasZeroSize = e),
                    e
                      ? (n._layout.maxX && n._layout.maxY) || n.resizeToCanvas()
                      : t && n.resizeDrawingSurfaceToCanvas();
                }),
                (this.renderSecondTimer = 0),
                (this._boundDraw = this.draw.bind(this)),
                (this.canvas = e.canvas),
                e.canvas.constructor === HTMLCanvasElement &&
                  (this._observed = S.add(this.canvas, this.onCanvasResize)),
                (this.src = e.src),
                (this.buffer = e.buffer),
                (this.riveFile = e.riveFile),
                (this.layout = null != (t = e.layout) ? t : new y()),
                (this.shouldDisableRiveListeners =
                  !!e.shouldDisableRiveListeners),
                (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                (this.automaticallyHandleEvents =
                  !!e.automaticallyHandleEvents),
                (this.enableRiveAssetCDN =
                  void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                (this.eventManager = new T()),
                e.onLoad && this.on(i.Load, e.onLoad),
                e.onLoadError && this.on(i.LoadError, e.onLoadError),
                e.onPlay && this.on(i.Play, e.onPlay),
                e.onPause && this.on(i.Pause, e.onPause),
                e.onStop && this.on(i.Stop, e.onStop),
                e.onLoop && this.on(i.Loop, e.onLoop),
                e.onStateChange && this.on(i.StateChange, e.onStateChange),
                e.onAdvance && this.on(i.Advance, e.onAdvance),
                e.onload && !e.onLoad && this.on(i.Load, e.onload),
                e.onloaderror &&
                  !e.onLoadError &&
                  this.on(i.LoadError, e.onloaderror),
                e.onplay && !e.onPlay && this.on(i.Play, e.onplay),
                e.onpause && !e.onPause && this.on(i.Pause, e.onpause),
                e.onstop && !e.onStop && this.on(i.Stop, e.onstop),
                e.onloop && !e.onLoop && this.on(i.Loop, e.onloop),
                e.onstatechange &&
                  !e.onStateChange &&
                  this.on(i.StateChange, e.onstatechange),
                e.assetLoader && (this.assetLoader = e.assetLoader),
                (this.taskQueue = new I(this.eventManager)),
                this.init({
                  src: this.src,
                  buffer: this.buffer,
                  riveFile: this.riveFile,
                  autoplay: e.autoplay,
                  autoBind: e.autoBind,
                  animations: e.animations,
                  stateMachines: e.stateMachines,
                  artboard: e.artboard,
                  useOffscreenRenderer: e.useOffscreenRenderer,
                });
            }
            return (
              (t.new = function (e) {
                return (
                  console.warn(
                    "This function is deprecated: please use `new Rive({})` instead"
                  ),
                  new t(e)
                );
              }),
              (t.prototype.onSystemAudioChanged = function () {
                this.volume = this._volume;
              }),
              (t.prototype.init = function (e) {
                var n = this,
                  r = e.src,
                  i = e.buffer,
                  a = e.riveFile,
                  o = e.animations,
                  s = e.stateMachines,
                  u = e.artboard,
                  l = e.autoplay,
                  c = void 0 !== l && l,
                  h = e.useOffscreenRenderer,
                  f = void 0 !== h && h,
                  d = e.autoBind,
                  p = void 0 !== d && d;
                if (!this.destroyed) {
                  if (
                    ((this.src = r),
                    (this.buffer = i),
                    (this.riveFile = a),
                    !this.src && !this.buffer && !this.riveFile)
                  )
                    throw new v(t.missingErrorMessage);
                  var m = G(o),
                    b = G(s);
                  (this.loaded = !1),
                    (this.readyForPlaying = !1),
                    w
                      .awaitInstance()
                      .then(function (e) {
                        n.destroyed ||
                          ((n.runtime = e),
                          n.removeRiveListeners(),
                          n.deleteRiveRenderer(),
                          (n.renderer = n.runtime.makeRenderer(n.canvas, f)),
                          n.canvas.width ||
                            n.canvas.height ||
                            n.resizeDrawingSurfaceToCanvas(),
                          n
                            .initData(u, m, b, c, p)
                            .then(function () {
                              return n.setupRiveListeners();
                            })
                            .catch(function (e) {
                              console.error(e);
                            }));
                      })
                      .catch(function (e) {
                        console.error(e);
                      });
                }
              }),
              (t.prototype.setupRiveListeners = function (e) {
                var t = this;
                if (
                  (this.eventCleanup && this.eventCleanup(),
                  !this.shouldDisableRiveListeners)
                ) {
                  var n = (this.animator.stateMachines || [])
                      .filter(function (e) {
                        return e.playing && t.runtime.hasListeners(e.instance);
                      })
                      .map(function (e) {
                        return e.instance;
                      }),
                    r = this.isTouchScrollEnabled;
                  e &&
                    "isTouchScrollEnabled" in e &&
                    (r = e.isTouchScrollEnabled),
                    (this.eventCleanup = (0, c.registerTouchInteractions)({
                      canvas: this.canvas,
                      artboard: this.artboard,
                      stateMachines: n,
                      renderer: this.renderer,
                      rive: this.runtime,
                      fit: this._layout.runtimeFit(this.runtime),
                      alignment: this._layout.runtimeAlignment(this.runtime),
                      isTouchScrollEnabled: r,
                      layoutScaleFactor: this._layout.layoutScaleFactor,
                    }));
                }
              }),
              (t.prototype.removeRiveListeners = function () {
                this.eventCleanup &&
                  (this.eventCleanup(), (this.eventCleanup = null));
              }),
              (t.prototype.initializeAudio = function () {
                var e,
                  t = this;
                F.status == o.UNAVAILABLE &&
                  (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                  null === this._audioEventListener &&
                  ((this._audioEventListener = {
                    type: i.AudioStatusChange,
                    callback: function () {
                      return t.onSystemAudioChanged();
                    },
                  }),
                  F.add(this._audioEventListener),
                  F.establishAudio());
              }),
              (t.prototype.initArtboardSize = function () {
                this.artboard &&
                  ((this._artboardWidth = this.artboard.width =
                    this._artboardWidth || this.artboard.width),
                  (this._artboardHeight = this.artboard.height =
                    this._artboardHeight || this.artboard.height));
              }),
              (t.prototype.initData = function (e, n, r, a, o) {
                return p(this, void 0, void 0, function () {
                  var s, u;
                  return m(this, function (l) {
                    switch (l.label) {
                      case 0:
                        if ((l.trys.push([0, 3, , 4]), null != this.riveFile))
                          return [3, 2];
                        return (
                          (this.riveFile = new k({
                            src: this.src,
                            buffer: this.buffer,
                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                            assetLoader: this.assetLoader,
                          })),
                          [4, this.riveFile.init()]
                        );
                      case 1:
                        l.sent(), (l.label = 2);
                      case 2:
                        if (!this.riveFile) throw new v(t.cleanupErrorMessage);
                        return (
                          (this.file = this.riveFile.getInstance()),
                          this.initArtboard(e, n, r, a, o),
                          this.initArtboardSize(),
                          this.initializeAudio(),
                          (this.loaded = !0),
                          this.eventManager.fire({
                            type: i.Load,
                            data: null != (u = this.src) ? u : "buffer",
                          }),
                          (this.readyForPlaying = !0),
                          this.taskQueue.process(),
                          this.drawFrame(),
                          [2, Promise.resolve()]
                        );
                      case 3:
                        var c;
                        return (
                          console.warn(
                            (s =
                              (c = l.sent()) && c.isHandledError
                                ? c.message
                                : "Problem loading file; may be corrupt!")
                          ),
                          this.eventManager.fire({
                            type: i.LoadError,
                            data: s,
                          }),
                          [2, Promise.reject(s)]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.initArtboard = function (e, t, n, r, a) {
                if (this.file) {
                  var o,
                    s = e
                      ? this.file.artboardByName(e)
                      : this.file.defaultArtboard();
                  if (!s) {
                    var u = "Invalid artboard name or no default artboard";
                    console.warn(u),
                      this.eventManager.fire({ type: i.LoadError, data: u });
                    return;
                  }
                  if (
                    ((this.artboard = s),
                    (s.volume = this._volume * F.systemVolume),
                    1 > this.artboard.animationCount())
                  ) {
                    var u = "Artboard has no animations";
                    throw (
                      (this.eventManager.fire({ type: i.LoadError, data: u }),
                      u)
                    );
                  }
                  if (
                    ((this.animator = new E(
                      this.runtime,
                      this.artboard,
                      this.eventManager
                    )),
                    t.length > 0 || n.length > 0
                      ? ((o = t.concat(n)),
                        this.animator.initLinearAnimations(t, r),
                        this.animator.initStateMachines(n, r))
                      : (o = [this.animator.atLeastOne(r, !1)]),
                    this.taskQueue.add({
                      event: { type: r ? i.Play : i.Pause, data: o },
                    }),
                    a)
                  ) {
                    var l = this.file.defaultArtboardViewModel(s);
                    if (null !== l) {
                      var c = l.defaultInstance();
                      if (null !== c) {
                        var h = new B(c, null);
                        this.bindViewModelInstance(h);
                      }
                    }
                  }
                }
              }),
              (t.prototype.drawFrame = function () {
                var e, t;
                (
                  null == (e = null == document ? void 0 : document.timeline)
                    ? void 0
                    : e.currentTime
                )
                  ? this.loaded &&
                    this.artboard &&
                    !this.frameRequestId &&
                    (this._boundDraw(document.timeline.currentTime),
                    null == (t = this.runtime) || t.resolveAnimationFrame())
                  : this.startRendering();
              }),
              (t.prototype.draw = function (e, t) {
                this.frameRequestId = null;
                var n,
                  a = performance.now();
                this.lastRenderTime || (this.lastRenderTime = e),
                  (this.renderSecondTimer += e - this.lastRenderTime),
                  this.renderSecondTimer > 5e3 &&
                    ((this.renderSecondTimer = 0), null == t || t());
                var o = (e - this.lastRenderTime) / 1e3;
                this.lastRenderTime = e;
                for (
                  var s = this.animator.animations
                      .filter(function (e) {
                        return e.playing || e.needsScrub;
                      })
                      .sort(function (e) {
                        return e.needsScrub ? -1 : 1;
                      }),
                    u = 0;
                  u < s.length;
                  u++
                ) {
                  var l = s[u];
                  l.advance(o),
                    l.instance.didLoop && (l.loopCount += 1),
                    l.apply(1);
                }
                for (
                  var h = this.animator.stateMachines.filter(function (e) {
                      return e.playing;
                    }),
                    f = 0;
                  f < h.length;
                  f++
                ) {
                  var d = h[f],
                    p = d.reportedEventCount();
                  if (p)
                    for (var m = 0; m < p; m++) {
                      var v = d.reportedEventAt(m);
                      if (v)
                        if (v.type === r.OpenUrl) {
                          if (
                            (this.eventManager.fire({
                              type: i.RiveEvent,
                              data: v,
                            }),
                            this.automaticallyHandleEvents)
                          ) {
                            var b = document.createElement("a"),
                              g = v.url,
                              y = v.target,
                              w = (0, c.sanitizeUrl)(g);
                            g && b.setAttribute("href", w),
                              y && b.setAttribute("target", y),
                              w && w !== c.BLANK_URL && b.click();
                          }
                        } else
                          this.eventManager.fire({
                            type: i.RiveEvent,
                            data: v,
                          });
                    }
                  d.advanceAndApply(o);
                }
                0 == this.animator.stateMachines.length &&
                  this.artboard.advance(o);
                var _ = this.renderer;
                _.clear(),
                  _.save(),
                  this.alignRenderer(),
                  this._hasZeroSize || this.artboard.draw(_),
                  _.restore(),
                  _.flush(),
                  this.animator.handleLooping(),
                  this.animator.handleStateChanges(),
                  this.animator.handleAdvancing(o),
                  this.frameCount++;
                var A = performance.now();
                for (
                  this.frameTimes.push(A), this.durations.push(A - a);
                  this.frameTimes[0] <= A - 1e3;

                )
                  this.frameTimes.shift(), this.durations.shift();
                null == (n = this._viewModelInstance) || n.handleCallbacks(),
                  this.animator.isPlaying
                    ? this.startRendering()
                    : this.animator.isPaused
                    ? (this.lastRenderTime = 0)
                    : this.animator.isStopped && (this.lastRenderTime = 0);
              }),
              (t.prototype.alignRenderer = function () {
                var e = this.renderer,
                  t = this.runtime,
                  n = this._layout,
                  r = this.artboard;
                e.align(
                  n.runtimeFit(t),
                  n.runtimeAlignment(t),
                  { minX: n.minX, minY: n.minY, maxX: n.maxX, maxY: n.maxY },
                  r.bounds,
                  this._devicePixelRatioUsed * n.layoutScaleFactor
                );
              }),
              Object.defineProperty(t.prototype, "fps", {
                get: function () {
                  return this.durations.length;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "frameTime", {
                get: function () {
                  return 0 === this.durations.length
                    ? 0
                    : (
                        this.durations.reduce(function (e, t) {
                          return e + t;
                        }, 0) / this.durations.length
                      ).toFixed(4);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.cleanup = function () {
                var e, t;
                (this.destroyed = !0),
                  this.stopRendering(),
                  this.cleanupInstances(),
                  null !== this._observed && S.remove(this._observed),
                  this.removeRiveListeners(),
                  this.file &&
                    (null == (e = this.riveFile) || e.cleanup(),
                    (this.file = null)),
                  (this.riveFile = null),
                  this.deleteRiveRenderer(),
                  null !== this._audioEventListener &&
                    (F.remove(this._audioEventListener),
                    (this._audioEventListener = null)),
                  null == (t = this._viewModelInstance) || t.cleanup(),
                  (this._viewModelInstance = null),
                  (this._dataEnums = null);
              }),
              (t.prototype.deleteRiveRenderer = function () {
                var e;
                null == (e = this.renderer) || e.delete(),
                  (this.renderer = null);
              }),
              (t.prototype.cleanupInstances = function () {
                null !== this.eventCleanup && this.eventCleanup(),
                  this.stop(),
                  this.artboard &&
                    (this.artboard.delete(), (this.artboard = null));
              }),
              (t.prototype.retrieveTextRun = function (e) {
                if (!e) return void console.warn("No text run name provided");
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access text run, but the Artboard is null"
                  );
                var t,
                  n = this.artboard.textRun(e);
                return (
                  n ||
                  void console.warn(
                    "Could not access a text run with name '"
                      .concat(e, "' in the '")
                      .concat(
                        null == (t = this.artboard) ? void 0 : t.name,
                        "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."
                      )
                  )
                );
              }),
              (t.prototype.getTextRunValue = function (e) {
                var t = this.retrieveTextRun(e);
                return t ? t.text : void 0;
              }),
              (t.prototype.setTextRunValue = function (e, t) {
                var n = this.retrieveTextRun(e);
                n && (n.text = t);
              }),
              (t.prototype.play = function (e, t) {
                var n = this;
                if (((e = G(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return n.play(e, t);
                    },
                  });
                this.animator.play(e),
                  this.eventCleanup && this.eventCleanup(),
                  this.setupRiveListeners(),
                  this.startRendering();
              }),
              (t.prototype.pause = function (e) {
                var t = this;
                if (((e = G(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return t.pause(e);
                    },
                  });
                this.eventCleanup && this.eventCleanup(),
                  this.animator.pause(e);
              }),
              (t.prototype.scrub = function (e, t) {
                var n = this;
                if (((e = G(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return n.scrub(e, t);
                    },
                  });
                this.animator.scrub(e, t || 0), this.drawFrame();
              }),
              (t.prototype.stop = function (e) {
                var t = this;
                if (((e = G(e)), !this.readyForPlaying))
                  return void this.taskQueue.add({
                    action: function () {
                      return t.stop(e);
                    },
                  });
                this.animator && this.animator.stop(e),
                  this.eventCleanup && this.eventCleanup();
              }),
              (t.prototype.reset = function (e) {
                var t,
                  n,
                  r = null == e ? void 0 : e.artboard,
                  i = G(null == e ? void 0 : e.animations),
                  a = G(null == e ? void 0 : e.stateMachines),
                  o = null != (t = null == e ? void 0 : e.autoplay) && t,
                  s = null != (n = null == e ? void 0 : e.autoBind) && n;
                this.cleanupInstances(),
                  this.initArtboard(r, i, a, o, s),
                  this.taskQueue.process();
              }),
              (t.prototype.load = function (e) {
                (this.file = null), this.stop(), this.init(e);
              }),
              Object.defineProperty(t.prototype, "layout", {
                get: function () {
                  return this._layout;
                },
                set: function (e) {
                  (this._layout = e),
                    (e.maxX && e.maxY) || this.resizeToCanvas(),
                    this.loaded && !this.animator.isPlaying && this.drawFrame();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.resizeToCanvas = function () {
                this._layout = this.layout.copyWith({
                  minX: 0,
                  minY: 0,
                  maxX: this.canvas.width,
                  maxY: this.canvas.height,
                });
              }),
              (t.prototype.resizeDrawingSurfaceToCanvas = function (t) {
                if (this.canvas instanceof HTMLCanvasElement && window) {
                  var n = this.canvas.getBoundingClientRect(),
                    r = n.width,
                    i = n.height,
                    a = t || window.devicePixelRatio || 1;
                  if (
                    ((this.devicePixelRatioUsed = a),
                    (this.canvas.width = a * r),
                    (this.canvas.height = a * i),
                    this.resizeToCanvas(),
                    this.drawFrame(),
                    this.layout.fit === e.Layout)
                  ) {
                    var o = this._layout.layoutScaleFactor;
                    (this.artboard.width = r / o),
                      (this.artboard.height = i / o);
                  }
                }
              }),
              Object.defineProperty(t.prototype, "source", {
                get: function () {
                  return this.src;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "activeArtboard", {
                get: function () {
                  return this.artboard ? this.artboard.name : "";
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "animationNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var e = [], t = 0;
                    t < this.artboard.animationCount();
                    t++
                  )
                    e.push(this.artboard.animationByIndex(t).name);
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "stateMachineNames", {
                get: function () {
                  if (!this.loaded || !this.artboard) return [];
                  for (
                    var e = [], t = 0;
                    t < this.artboard.stateMachineCount();
                    t++
                  )
                    e.push(this.artboard.stateMachineByIndex(t).name);
                  return e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.stateMachineInputs = function (e) {
                if (this.loaded) {
                  var t = this.animator.stateMachines.find(function (t) {
                    return t.name === e;
                  });
                  return null == t ? void 0 : t.inputs;
                }
              }),
              (t.prototype.retrieveInputAtPath = function (e, t) {
                if (!e)
                  return void console.warn(
                    "No input name provided for path '".concat(t, "'")
                  );
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access input: '"
                      .concat(e, "', at path: '")
                      .concat(t, "', but the Artboard is null")
                  );
                var n = this.artboard.inputByPath(e, t);
                return (
                  n ||
                  void console.warn(
                    "Could not access an input with name: '"
                      .concat(e, "', at path:'")
                      .concat(t, "'")
                  )
                );
              }),
              (t.prototype.setBooleanStateAtPath = function (e, t, r) {
                var i = this.retrieveInputAtPath(e, r);
                i &&
                  (i.type === n.Boolean
                    ? (i.asBool().value = t)
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(r, "' is not a boolean")
                      ));
              }),
              (t.prototype.setNumberStateAtPath = function (e, t, r) {
                var i = this.retrieveInputAtPath(e, r);
                i &&
                  (i.type === n.Number
                    ? (i.asNumber().value = t)
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(r, "' is not a number")
                      ));
              }),
              (t.prototype.fireStateAtPath = function (e, t) {
                var r = this.retrieveInputAtPath(e, t);
                r &&
                  (r.type === n.Trigger
                    ? r.asTrigger().fire()
                    : console.warn(
                        "Input with name: '"
                          .concat(e, "', at path:'")
                          .concat(t, "' is not a trigger")
                      ));
              }),
              (t.prototype.retrieveTextAtPath = function (e, t) {
                if (!e)
                  return void console.warn(
                    "No text name provided for path '".concat(t, "'")
                  );
                if (!t)
                  return void console.warn(
                    "No path provided for text '".concat(e, "'")
                  );
                if (!this.artboard)
                  return void console.warn(
                    "Tried to access text: '"
                      .concat(e, "', at path: '")
                      .concat(t, "', but the Artboard is null")
                  );
                var n = this.artboard.textByPath(e, t);
                return (
                  n ||
                  void console.warn(
                    "Could not access text with name: '"
                      .concat(e, "', at path:'")
                      .concat(t, "'")
                  )
                );
              }),
              (t.prototype.getTextRunValueAtPath = function (e, t) {
                var n = this.retrieveTextAtPath(e, t);
                return n
                  ? n.text
                  : void console.warn(
                      "Could not get text with name: '"
                        .concat(e, "', at path:'")
                        .concat(t, "'")
                    );
              }),
              (t.prototype.setTextRunValueAtPath = function (e, t, n) {
                var r = this.retrieveTextAtPath(e, n);
                if (!r)
                  return void console.warn(
                    "Could not set text with name: '"
                      .concat(e, "', at path:'")
                      .concat(n, "'")
                  );
                r.text = t;
              }),
              Object.defineProperty(t.prototype, "playingStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "playingAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (e) {
                          return e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "pausedAnimationNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.animations
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "pausedStateMachineNames", {
                get: function () {
                  return this.loaded
                    ? this.animator.stateMachines
                        .filter(function (e) {
                          return !e.playing;
                        })
                        .map(function (e) {
                          return e.name;
                        })
                    : [];
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isPlaying", {
                get: function () {
                  return this.animator.isPlaying;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isPaused", {
                get: function () {
                  return this.animator.isPaused;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "isStopped", {
                get: function () {
                  return this.animator.isStopped;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "bounds", {
                get: function () {
                  return this.artboard ? this.artboard.bounds : void 0;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.on = function (e, t) {
                this.eventManager.add({ type: e, callback: t });
              }),
              (t.prototype.off = function (e, t) {
                this.eventManager.remove({ type: e, callback: t });
              }),
              (t.prototype.unsubscribe = function (e, t) {
                console.warn(
                  "This function is deprecated: please use `off()` instead."
                ),
                  this.off(e, t);
              }),
              (t.prototype.removeAllRiveEventListeners = function (e) {
                this.eventManager.removeAll(e);
              }),
              (t.prototype.unsubscribeAll = function (e) {
                console.warn(
                  "This function is deprecated: please use `removeAllRiveEventListeners()` instead."
                ),
                  this.removeAllRiveEventListeners(e);
              }),
              (t.prototype.stopRendering = function () {
                this.loaded &&
                  this.frameRequestId &&
                  (this.runtime.cancelAnimationFrame
                    ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                    : cancelAnimationFrame(this.frameRequestId),
                  (this.frameRequestId = null));
              }),
              (t.prototype.startRendering = function () {
                this.loaded &&
                  this.artboard &&
                  !this.frameRequestId &&
                  (this.runtime.requestAnimationFrame
                    ? (this.frameRequestId = this.runtime.requestAnimationFrame(
                        this._boundDraw
                      ))
                    : (this.frameRequestId = requestAnimationFrame(
                        this._boundDraw
                      )));
              }),
              (t.prototype.enableFPSCounter = function (e) {
                this.runtime.enableFPSCounter(e);
              }),
              (t.prototype.disableFPSCounter = function () {
                this.runtime.disableFPSCounter();
              }),
              Object.defineProperty(t.prototype, "contents", {
                get: function () {
                  if (this.loaded) {
                    for (
                      var e = { artboards: [] }, t = 0;
                      t < this.file.artboardCount();
                      t++
                    ) {
                      for (
                        var n = this.file.artboardByIndex(t),
                          r = {
                            name: n.name,
                            animations: [],
                            stateMachines: [],
                          },
                          i = 0;
                        i < n.animationCount();
                        i++
                      ) {
                        var a = n.animationByIndex(i);
                        r.animations.push(a.name);
                      }
                      for (var o = 0; o < n.stateMachineCount(); o++) {
                        for (
                          var s = n.stateMachineByIndex(o),
                            u = s.name,
                            l = new this.runtime.StateMachineInstance(s, n),
                            c = [],
                            h = 0;
                          h < l.inputCount();
                          h++
                        ) {
                          var f = l.input(h);
                          c.push({ name: f.name, type: f.type });
                        }
                        r.stateMachines.push({ name: u, inputs: c });
                      }
                      e.artboards.push(r);
                    }
                    return e;
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "volume", {
                get: function () {
                  return (
                    this.artboard &&
                      this.artboard.volume !== this._volume &&
                      (this._volume = this.artboard.volume),
                    this._volume
                  );
                },
                set: function (e) {
                  (this._volume = e),
                    this.artboard &&
                      (this.artboard.volume = e * F.systemVolume);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "artboardWidth", {
                get: function () {
                  var e;
                  return this.artboard
                    ? this.artboard.width
                    : null != (e = this._artboardWidth)
                    ? e
                    : 0;
                },
                set: function (e) {
                  (this._artboardWidth = e),
                    this.artboard && (this.artboard.width = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "artboardHeight", {
                get: function () {
                  var e;
                  return this.artboard
                    ? this.artboard.height
                    : null != (e = this._artboardHeight)
                    ? e
                    : 0;
                },
                set: function (e) {
                  (this._artboardHeight = e),
                    this.artboard && (this.artboard.height = e);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.resetArtboardSize = function () {
                this.artboard
                  ? (this.artboard.resetArtboardSize(),
                    (this._artboardWidth = this.artboard.width),
                    (this._artboardHeight = this.artboard.height))
                  : ((this._artboardWidth = void 0),
                    (this._artboardHeight = void 0));
              }),
              Object.defineProperty(t.prototype, "devicePixelRatioUsed", {
                get: function () {
                  return this._devicePixelRatioUsed;
                },
                set: function (e) {
                  this._devicePixelRatioUsed = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.bindViewModelInstance = function (e) {
                var t;
                this.artboard &&
                  !this.destroyed &&
                  e &&
                  e.runtimeInstance &&
                  (e.internalIncrementReferenceCount(),
                  null == (t = this._viewModelInstance) || t.cleanup(),
                  (this._viewModelInstance = e),
                  this.artboard.bindViewModelInstance(e.runtimeInstance),
                  this.animator.stateMachines.forEach(function (t) {
                    return t.bindViewModelInstance(e);
                  }));
              }),
              Object.defineProperty(t.prototype, "viewModelInstance", {
                get: function () {
                  return this._viewModelInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.viewModelByIndex = function (e) {
                var t = this.file.viewModelByIndex(e);
                return null !== t ? new D(t) : null;
              }),
              (t.prototype.viewModelByName = function (e) {
                var t = this.file.viewModelByName(e);
                return null !== t ? new D(t) : null;
              }),
              (t.prototype.enums = function () {
                if (null === this._dataEnums) {
                  var e = this.file.enums();
                  this._dataEnums = e.map(function (e) {
                    return new U(e);
                  });
                }
                return this._dataEnums;
              }),
              (t.prototype.defaultViewModel = function () {
                if (this.artboard) {
                  var e = this.file.defaultArtboardViewModel(this.artboard);
                  if (e) return new D(e);
                }
                return null;
              }),
              (t.missingErrorMessage =
                "Rive source file or data buffer required"),
              (t.cleanupErrorMessage =
                "Attempt to use file after calling cleanup."),
              t
            );
          })()),
          (D = (function () {
            function e(e) {
              this._viewModel = e;
            }
            return (
              Object.defineProperty(e.prototype, "instanceCount", {
                get: function () {
                  return this._viewModel.instanceCount;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this._viewModel.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.instanceByIndex = function (e) {
                var t = this._viewModel.instanceByIndex(e);
                return null !== t ? new B(t, null) : null;
              }),
              (e.prototype.instanceByName = function (e) {
                var t = this._viewModel.instanceByName(e);
                return null !== t ? new B(t, null) : null;
              }),
              (e.prototype.defaultInstance = function () {
                var e = this._viewModel.defaultInstance();
                return null !== e ? new B(e, null) : null;
              }),
              (e.prototype.instance = function () {
                var e = this._viewModel.instance();
                return null !== e ? new B(e, null) : null;
              }),
              Object.defineProperty(e.prototype, "properties", {
                get: function () {
                  return this._viewModel.getProperties();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "instanceNames", {
                get: function () {
                  return this._viewModel.getInstanceNames();
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })()),
          (U = (function () {
            function e(e) {
              this._dataEnum = e;
            }
            return (
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this._dataEnum.name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "values", {
                get: function () {
                  return this._dataEnum.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })()),
          (B = (function () {
            function e(e, t) {
              (this._propertiesWithCallbacks = []),
                (this._referenceCount = 0),
                (this._runtimeInstance = e),
                (this._root = t || this);
            }
            return (
              Object.defineProperty(e.prototype, "runtimeInstance", {
                get: function () {
                  return this._runtimeInstance;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.handleCallbacks = function () {
                0 !== this._propertiesWithCallbacks.length &&
                  this._propertiesWithCallbacks.forEach(function (e) {
                    e.handleCallbacks();
                  });
              }),
              (e.prototype.clearCallbacks = function () {
                this._propertiesWithCallbacks.forEach(function (e) {
                  e.clearCallbacks();
                });
              }),
              (e.prototype.number = function (e) {
                var t,
                  n =
                    null == (t = this._runtimeInstance) ? void 0 : t.number(e);
                return n ? new V(n, this._root) : null;
              }),
              (e.prototype.string = function (e) {
                var t,
                  n =
                    null == (t = this._runtimeInstance) ? void 0 : t.string(e);
                return n ? new N(n, this._root) : null;
              }),
              (e.prototype.boolean = function (e) {
                var t,
                  n =
                    null == (t = this._runtimeInstance) ? void 0 : t.boolean(e);
                return n ? new $(n, this._root) : null;
              }),
              (e.prototype.color = function (e) {
                var t,
                  n = null == (t = this._runtimeInstance) ? void 0 : t.color(e);
                return n ? new z(n, this._root) : null;
              }),
              (e.prototype.trigger = function (e) {
                var t,
                  n =
                    null == (t = this._runtimeInstance) ? void 0 : t.trigger(e);
                return n ? new H(n, this._root) : null;
              }),
              (e.prototype.enum = function (e) {
                var t,
                  n = null == (t = this._runtimeInstance) ? void 0 : t.enum(e);
                return n ? new Y(n, this._root) : null;
              }),
              (e.prototype.viewModel = function (t) {
                var n,
                  r =
                    null == (n = this._runtimeInstance)
                      ? void 0
                      : n.viewModel(t);
                return r ? new e(r, this._root) : null;
              }),
              (e.prototype.replaceViewModel = function (e, t) {
                var n;
                return (
                  null !== t.runtimeInstance &&
                  ((null == (n = this._runtimeInstance)
                    ? void 0
                    : n.replaceViewModel(e, t.runtimeInstance)) ||
                    !1)
                );
              }),
              (e.prototype.addToCallbacks = function (e) {
                this._propertiesWithCallbacks.includes(e) ||
                  this._propertiesWithCallbacks.push(e);
              }),
              (e.prototype.removeFromCallbacks = function (e) {
                this._propertiesWithCallbacks.includes(e) &&
                  (this._propertiesWithCallbacks =
                    this._propertiesWithCallbacks.filter(function (t) {
                      return t !== e;
                    }));
              }),
              (e.prototype.incrementReferenceCount = function () {
                var e;
                this._referenceCount++,
                  null == (e = this._runtimeInstance) ||
                    e.incrementReferenceCount();
              }),
              (e.prototype.decrementReferenceCount = function () {
                var e;
                this._referenceCount--,
                  null == (e = this._runtimeInstance) ||
                    e.decrementReferenceCount();
              }),
              Object.defineProperty(e.prototype, "properties", {
                get: function () {
                  var e;
                  return (
                    (null == (e = this._runtimeInstance)
                      ? void 0
                      : e.getProperties().map(function (e) {
                          return d({}, e);
                        })) || []
                  );
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.internalIncrementReferenceCount = function () {
                this._referenceCount++;
              }),
              (e.prototype.cleanup = function () {
                this._referenceCount--,
                  this._referenceCount <= 0 &&
                    ((this._runtimeInstance = null),
                    this.clearCallbacks(),
                    (this._propertiesWithCallbacks = []));
              }),
              e
            );
          })()),
          (N = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              f(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(
            (W = (function () {
              function e(e, t) {
                (this.callbacks = []),
                  (this._viewModelInstanceValue = e),
                  (this._rootViewModel = t);
              }
              return (
                (e.prototype.on = function (e) {
                  0 === this.callbacks.length &&
                    this._viewModelInstanceValue.clearChanges(),
                    this.callbacks.includes(e) ||
                      (this.callbacks.push(e),
                      this._rootViewModel.addToCallbacks(this));
                }),
                (e.prototype.off = function (e) {
                  e
                    ? (this.callbacks = this.callbacks.filter(function (t) {
                        return t !== e;
                      }))
                    : (this.callbacks.length = 0),
                    0 === this.callbacks.length &&
                      this._rootViewModel.removeFromCallbacks(this);
                }),
                (e.prototype.internalHandleCallback = function (e) {}),
                (e.prototype.handleCallbacks = function () {
                  var e = this;
                  this._viewModelInstanceValue.hasChanged &&
                    (this._viewModelInstanceValue.clearChanges(),
                    this.callbacks.forEach(function (t) {
                      e.internalHandleCallback(t);
                    }));
                }),
                (e.prototype.clearCallbacks = function () {
                  this.callbacks.length = 0;
                }),
                Object.defineProperty(e.prototype, "name", {
                  get: function () {
                    return this._viewModelInstanceValue.name;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                e
              );
            })())
          )),
          (V = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              f(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(W)),
          ($ = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              f(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(W)),
          (H = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              f(t, e),
              (t.prototype.trigger = function () {
                return this._viewModelInstanceValue.trigger();
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e();
              }),
              t
            );
          })(W)),
          (Y = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              f(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "valueIndex", {
                get: function () {
                  return this._viewModelInstanceValue.valueIndex;
                },
                set: function (e) {
                  this._viewModelInstanceValue.valueIndex = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, "values", {
                get: function () {
                  return this._viewModelInstanceValue.values;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(W)),
          (z = (function (e) {
            function t(t, n) {
              return e.call(this, t, n) || this;
            }
            return (
              f(t, e),
              Object.defineProperty(t.prototype, "value", {
                get: function () {
                  return this._viewModelInstanceValue.value;
                },
                set: function (e) {
                  this._viewModelInstanceValue.value = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.rgb = function (e, t, n) {
                this._viewModelInstanceValue.rgb(e, t, n);
              }),
              (t.prototype.rgba = function (e, t, n, r) {
                this._viewModelInstanceValue.argb(r, e, t, n);
              }),
              (t.prototype.argb = function (e, t, n, r) {
                this._viewModelInstanceValue.argb(e, t, n, r);
              }),
              (t.prototype.alpha = function (e) {
                this._viewModelInstanceValue.alpha(e);
              }),
              (t.prototype.opacity = function (e) {
                this._viewModelInstanceValue.alpha(
                  Math.round(255 * Math.max(0, Math.min(1, e)))
                );
              }),
              (t.prototype.internalHandleCallback = function (e) {
                e(this.value);
              }),
              t
            );
          })(W)),
          (X = function (e) {
            return p(void 0, void 0, void 0, function () {
              return m(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, fetch(new Request(e))];
                  case 1:
                    return [4, t.sent().arrayBuffer()];
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (G = function (e) {
            return "string" == typeof e ? [e] : e instanceof Array ? e : [];
          }),
          (q = { EventManager: T, TaskQueueManager: I }),
          (J = function (e) {
            return new Promise(function (t) {
              return w.getInstance(function (n) {
                n.decodeAudio(e, t);
              });
            });
          }),
          (K = function (e) {
            return new Promise(function (t) {
              return w.getInstance(function (n) {
                n.decodeImage(e, t);
              });
            });
          }),
          (Z = function (e) {
            return new Promise(function (t) {
              return w.getInstance(function (n) {
                n.decodeFont(e, t);
              });
            });
          }),
          en
        );
      })();
    },
  },
]);
