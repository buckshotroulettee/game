!function e(t, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (o)
                    return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, (function(e) {
                return i(t[s][1][e] || e)
            }
            ), u, u.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)
        i(r[s]);
    return i
}({
    1: [function(e, t, n) {
        var r = e("../internals/is-callable")
          , i = e("../internals/try-to-string");
        t.exports = function(e) {
            if (r(e))
                return e;
            throw TypeError(i(e) + " is not a function")
        }
    }
    , {
        "../internals/is-callable": 55,
        "../internals/try-to-string": 100
    }],
    2: [function(e, t, n) {
        var r = e("../internals/is-constructor")
          , i = e("../internals/try-to-string");
        t.exports = function(e) {
            if (r(e))
                return e;
            throw TypeError(i(e) + " is not a constructor")
        }
    }
    , {
        "../internals/is-constructor": 56,
        "../internals/try-to-string": 100
    }],
    3: [function(e, t, n) {
        var r = e("../internals/is-callable");
        t.exports = function(e) {
            if ("object" == typeof e || r(e))
                return e;
            throw TypeError("Can't set " + String(e) + " as a prototype")
        }
    }
    , {
        "../internals/is-callable": 55
    }],
    4: [function(e, t, n) {
        var r = e("../internals/well-known-symbol")
          , i = e("../internals/object-create")
          , o = e("../internals/object-define-property")
          , s = r("unscopables")
          , a = Array.prototype;
        null == a[s] && o.f(a, s, {
            configurable: !0,
            value: i(null)
        }),
        t.exports = function(e) {
            a[s][e] = !0
        }
    }
    , {
        "../internals/object-create": 67,
        "../internals/object-define-property": 69,
        "../internals/well-known-symbol": 106
    }],
    5: [function(e, t, n) {
        t.exports = function(e, t, n) {
            if (e instanceof t)
                return e;
            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation")
        }
    }
    , {}],
    6: [function(e, t, n) {
        var r = e("../internals/is-object");
        t.exports = function(e) {
            if (r(e))
                return e;
            throw TypeError(String(e) + " is not an object")
        }
    }
    , {
        "../internals/is-object": 59
    }],
    7: [function(e, t, n) {
        t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    }
    , {}],
    8: [function(e, t, n) {
        "use strict";
        var r, i, o, s = e("../internals/array-buffer-native"), a = e("../internals/descriptors"), l = e("../internals/global"), c = e("../internals/is-callable"), u = e("../internals/is-object"), d = e("../internals/has-own-property"), p = e("../internals/classof"), f = e("../internals/try-to-string"), h = e("../internals/create-non-enumerable-property"), g = e("../internals/redefine"), y = e("../internals/object-define-property").f, m = e("../internals/object-get-prototype-of"), b = e("../internals/object-set-prototype-of"), v = e("../internals/well-known-symbol"), w = e("../internals/uid"), x = l.Int8Array, S = x && x.prototype, _ = l.Uint8ClampedArray, j = _ && _.prototype, T = x && m(x), I = S && m(S), R = Object.prototype, E = R.isPrototypeOf, L = v("toStringTag"), k = w("TYPED_ARRAY_TAG"), A = w("TYPED_ARRAY_CONSTRUCTOR"), O = s && !!b && "Opera" !== p(l.opera), P = !1, M = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, C = {
            BigInt64Array: 8,
            BigUint64Array: 8
        }, D = function(e) {
            if (!u(e))
                return !1;
            var t = p(e);
            return d(M, t) || d(C, t)
        };
        for (r in M)
            (o = (i = l[r]) && i.prototype) ? h(o, A, i) : O = !1;
        for (r in C)
            (o = (i = l[r]) && i.prototype) && h(o, A, i);
        if ((!O || !c(T) || T === Function.prototype) && (T = function() {
            throw TypeError("Incorrect invocation")
        }
        ,
        O))
            for (r in M)
                l[r] && b(l[r], T);
        if ((!O || !I || I === R) && (I = T.prototype,
        O))
            for (r in M)
                l[r] && b(l[r].prototype, I);
        if (O && m(j) !== I && b(j, I),
        a && !d(I, L))
            for (r in P = !0,
            y(I, L, {
                get: function() {
                    return u(this) ? this[k] : void 0
                }
            }),
            M)
                l[r] && h(l[r], k, r);
        t.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: O,
            TYPED_ARRAY_CONSTRUCTOR: A,
            TYPED_ARRAY_TAG: P && k,
            aTypedArray: function(e) {
                if (D(e))
                    return e;
                throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function(e) {
                if (c(e) && (!b || E.call(T, e)))
                    return e;
                throw TypeError(f(e) + " is not a typed array constructor")
            },
            exportTypedArrayMethod: function(e, t, n) {
                if (a) {
                    if (n)
                        for (var r in M) {
                            var i = l[r];
                            if (i && d(i.prototype, e))
                                try {
                                    delete i.prototype[e]
                                } catch (e) {}
                        }
                    I[e] && !n || g(I, e, n ? t : O && S[e] || t)
                }
            },
            exportTypedArrayStaticMethod: function(e, t, n) {
                var r, i;
                if (a) {
                    if (b) {
                        if (n)
                            for (r in M)
                                if ((i = l[r]) && d(i, e))
                                    try {
                                        delete i[e]
                                    } catch (e) {}
                        if (T[e] && !n)
                            return;
                        try {
                            return g(T, e, n ? t : O && T[e] || t)
                        } catch (e) {}
                    }
                    for (r in M)
                        !(i = l[r]) || i[e] && !n || g(i, e, t)
                }
            },
            isView: function(e) {
                if (!u(e))
                    return !1;
                var t = p(e);
                return "DataView" === t || d(M, t) || d(C, t)
            },
            isTypedArray: D,
            TypedArray: T,
            TypedArrayPrototype: I
        }
    }
    , {
        "../internals/array-buffer-native": 7,
        "../internals/classof": 18,
        "../internals/create-non-enumerable-property": 22,
        "../internals/descriptors": 25,
        "../internals/global": 43,
        "../internals/has-own-property": 44,
        "../internals/is-callable": 55,
        "../internals/is-object": 59,
        "../internals/object-define-property": 69,
        "../internals/object-get-prototype-of": 73,
        "../internals/object-set-prototype-of": 77,
        "../internals/redefine": 81,
        "../internals/try-to-string": 100,
        "../internals/uid": 104,
        "../internals/well-known-symbol": 106
    }],
    9: [function(e, t, n) {
        "use strict";
        var r = e("../internals/global")
          , i = e("../internals/descriptors")
          , o = e("../internals/array-buffer-native")
          , s = e("../internals/function-name")
          , a = e("../internals/create-non-enumerable-property")
          , l = e("../internals/redefine-all")
          , c = e("../internals/fails")
          , u = e("../internals/an-instance")
          , d = e("../internals/to-integer-or-infinity")
          , p = e("../internals/to-length")
          , f = e("../internals/to-index")
          , h = e("../internals/ieee754")
          , g = e("../internals/object-get-prototype-of")
          , y = e("../internals/object-set-prototype-of")
          , m = e("../internals/object-get-own-property-names").f
          , b = e("../internals/object-define-property").f
          , v = e("../internals/array-fill")
          , w = e("../internals/set-to-string-tag")
          , x = e("../internals/internal-state")
          , S = s.PROPER
          , _ = s.CONFIGURABLE
          , j = x.get
          , T = x.set
          , I = "ArrayBuffer"
          , R = "DataView"
          , E = "Wrong index"
          , L = r.ArrayBuffer
          , k = L
          , A = r.DataView
          , O = A && A.prototype
          , P = Object.prototype
          , M = r.RangeError
          , C = h.pack
          , D = h.unpack
          , W = function(e) {
            return [255 & e]
        }
          , U = function(e) {
            return [255 & e, e >> 8 & 255]
        }
          , N = function(e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        }
          , F = function(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }
          , G = function(e) {
            return C(e, 23, 4)
        }
          , q = function(e) {
            return C(e, 52, 8)
        }
          , J = function(e, t) {
            b(e.prototype, t, {
                get: function() {
                    return j(this)[t]
                }
            })
        }
          , H = function(e, t, n, r) {
            var i = f(n)
              , o = j(e);
            if (i + t > o.byteLength)
                throw M(E);
            var s = j(o.buffer).bytes
              , a = i + o.byteOffset
              , l = s.slice(a, a + t);
            return r ? l : l.reverse()
        }
          , V = function(e, t, n, r, i, o) {
            var s = f(n)
              , a = j(e);
            if (s + t > a.byteLength)
                throw M(E);
            for (var l = j(a.buffer).bytes, c = s + a.byteOffset, u = r(+i), d = 0; d < t; d++)
                l[c + d] = u[o ? d : t - d - 1]
        };
        if (o) {
            var B = S && L.name !== I;
            if (c((function() {
                L(1)
            }
            )) && c((function() {
                new L(-1)
            }
            )) && !c((function() {
                return new L,
                new L(1.5),
                new L(NaN),
                B && !_
            }
            )))
                B && _ && a(L, "name", I);
            else {
                for (var z, X = (k = function(e) {
                    return u(this, k),
                    new L(f(e))
                }
                ).prototype = L.prototype, Y = m(L), K = 0; Y.length > K; )
                    (z = Y[K++])in k || a(k, z, L[z]);
                X.constructor = k
            }
            y && g(O) !== P && y(O, P);
            var $ = new A(new k(2))
              , Z = O.setInt8;
            $.setInt8(0, 2147483648),
            $.setInt8(1, 2147483649),
            !$.getInt8(0) && $.getInt8(1) || l(O, {
                setInt8: function(e, t) {
                    Z.call(this, e, t << 24 >> 24)
                },
                setUint8: function(e, t) {
                    Z.call(this, e, t << 24 >> 24)
                }
            }, {
                unsafe: !0
            })
        } else
            k = function(e) {
                u(this, k, I);
                var t = f(e);
                T(this, {
                    bytes: v.call(new Array(t), 0),
                    byteLength: t
                }),
                i || (this.byteLength = t)
            }
            ,
            A = function(e, t, n) {
                u(this, A, R),
                u(e, k, R);
                var r = j(e).byteLength
                  , o = d(t);
                if (o < 0 || o > r)
                    throw M("Wrong offset");
                if (o + (n = void 0 === n ? r - o : p(n)) > r)
                    throw M("Wrong length");
                T(this, {
                    buffer: e,
                    byteLength: n,
                    byteOffset: o
                }),
                i || (this.buffer = e,
                this.byteLength = n,
                this.byteOffset = o)
            }
            ,
            i && (J(k, "byteLength"),
            J(A, "buffer"),
            J(A, "byteLength"),
            J(A, "byteOffset")),
            l(A.prototype, {
                getInt8: function(e) {
                    return H(this, 1, e)[0] << 24 >> 24
                },
                getUint8: function(e) {
                    return H(this, 1, e)[0]
                },
                getInt16: function(e) {
                    var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                    return (t[1] << 8 | t[0]) << 16 >> 16
                },
                getUint16: function(e) {
                    var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                    return t[1] << 8 | t[0]
                },
                getInt32: function(e) {
                    return F(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
                },
                getUint32: function(e) {
                    return F(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                },
                getFloat32: function(e) {
                    return D(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
                },
                getFloat64: function(e) {
                    return D(H(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
                },
                setInt8: function(e, t) {
                    V(this, 1, e, W, t)
                },
                setUint8: function(e, t) {
                    V(this, 1, e, W, t)
                },
                setInt16: function(e, t) {
                    V(this, 2, e, U, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint16: function(e, t) {
                    V(this, 2, e, U, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setInt32: function(e, t) {
                    V(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint32: function(e, t) {
                    V(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat32: function(e, t) {
                    V(this, 4, e, G, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat64: function(e, t) {
                    V(this, 8, e, q, t, arguments.length > 2 ? arguments[2] : void 0)
                }
            });
        w(k, I),
        w(A, R),
        t.exports = {
            ArrayBuffer: k,
            DataView: A
        }
    }
    , {
        "../internals/an-instance": 5,
        "../internals/array-buffer-native": 7,
        "../internals/array-fill": 10,
        "../internals/create-non-enumerable-property": 22,
        "../internals/descriptors": 25,
        "../internals/fails": 36,
        "../internals/function-name": 38,
        "../internals/global": 43,
        "../internals/ieee754": 48,
        "../internals/internal-state": 52,
        "../internals/object-define-property": 69,
        "../internals/object-get-own-property-names": 71,
        "../internals/object-get-prototype-of": 73,
        "../internals/object-set-prototype-of": 77,
        "../internals/redefine-all": 80,
        "../internals/set-to-string-tag": 85,
        "../internals/to-index": 90,
        "../internals/to-integer-or-infinity": 92,
        "../internals/to-length": 93
    }],
    10: [function(e, t, n) {
        "use strict";
        var r = e("../internals/to-object")
          , i = e("../internals/to-absolute-index")
          , o = e("../internals/length-of-array-like");
        t.exports = function(e) {
            for (var t = r(this), n = o(t), s = arguments.length, a = i(s > 1 ? arguments[1] : void 0, n), l = s > 2 ? arguments[2] : void 0, c = void 0 === l ? n : i(l, n); c > a; )
                t[a++] = e;
            return t
        }
    }
    , {
        "../internals/length-of-array-like": 64,
        "../internals/to-absolute-index": 89,
        "../internals/to-object": 94
    }],
    11: [function(e, t, n) {
        var r = e("../internals/to-indexed-object")
          , i = e("../internals/to-absolute-index")
          , o = e("../internals/length-of-array-like")
          , s = function(e) {
            return function(t, n, s) {
                var a, l = r(t), c = o(l), u = i(s, c);
                if (e && n != n) {
                    for (; c > u; )
                        if ((a = l[u++]) != a)
                            return !0
                } else
                    for (; c > u; u++)
                        if ((e || u in l) && l[u] === n)
                            return e || u || 0;
                return !e && -1
            }
        };
        t.exports = {
            includes: s(!0),
            indexOf: s(!1)
        }
    }
    , {
        "../internals/length-of-array-like": 64,
        "../internals/to-absolute-index": 89,
        "../internals/to-indexed-object": 91
    }],
    12: [function(e, t, n) {
        var r = e("../internals/function-bind-context")
          , i = e("../internals/indexed-object")
          , o = e("../internals/to-object")
          , s = e("../internals/length-of-array-like")
          , a = e("../internals/array-species-create")
          , l = [].push
          , c = function(e) {
            var t = 1 == e
              , n = 2 == e
              , c = 3 == e
              , u = 4 == e
              , d = 6 == e
              , p = 7 == e
              , f = 5 == e || d;
            return function(h, g, y, m) {
                for (var b, v, w = o(h), x = i(w), S = r(g, y, 3), _ = s(x), j = 0, T = m || a, I = t ? T(h, _) : n || p ? T(h, 0) : void 0; _ > j; j++)
                    if ((f || j in x) && (v = S(b = x[j], j, w),
                    e))
                        if (t)
                            I[j] = v;
                        else if (v)
                            switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return b;
                            case 6:
                                return j;
                            case 2:
                                l.call(I, b)
                            }
                        else
                            switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                l.call(I, b)
                            }
                return d ? -1 : c || u ? u : I
            }
        };
        t.exports = {
            forEach: c(0),
            map: c(1),
            filter: c(2),
            some: c(3),
            every: c(4),
            find: c(5),
            findIndex: c(6),
            filterReject: c(7)
        }
    }
    , {
        "../internals/array-species-create": 15,
        "../internals/function-bind-context": 37,
        "../internals/indexed-object": 49,
        "../internals/length-of-array-like": 64,
        "../internals/to-object": 94
    }],
    13: [function(e, t, n) {
        var r = Math.floor
          , i = function(e, t) {
            var n = e.length
              , a = r(n / 2);
            return n < 8 ? o(e, t) : s(i(e.slice(0, a), t), i(e.slice(a), t), t)
        }
          , o = function(e, t) {
            for (var n, r, i = e.length, o = 1; o < i; ) {
                for (r = o,
                n = e[o]; r && t(e[r - 1], n) > 0; )
                    e[r] = e[--r];
                r !== o++ && (e[r] = n)
            }
            return e
        }
          , s = function(e, t, n) {
            for (var r = e.length, i = t.length, o = 0, s = 0, a = []; o < r || s < i; )
                o < r && s < i ? a.push(n(e[o], t[s]) <= 0 ? e[o++] : t[s++]) : a.push(o < r ? e[o++] : t[s++]);
            return a
        };
        t.exports = i
    }
    , {}],
    14: [function(e, t, n) {
        var r = e("../internals/is-array")
          , i = e("../internals/is-constructor")
          , o = e("../internals/is-object")
          , s = e("../internals/well-known-symbol")("species");
        t.exports = function(e) {
            var t;
            return r(e) && (t = e.constructor,
            (i(t) && (t === Array || r(t.prototype)) || o(t) && null === (t = t[s])) && (t = void 0)),
            void 0 === t ? Array : t
        }
    }
    , {
        "../internals/is-array": 54,
        "../internals/is-constructor": 56,
        "../internals/is-object": 59,
        "../internals/well-known-symbol": 106
    }],
    15: [function(e, t, n) {
        var r = e("../internals/array-species-constructor");
        t.exports = function(e, t) {
            return new (r(e))(0 === t ? 0 : t)
        }
    }
    , {
        "../internals/array-species-constructor": 14
    }],
    16: [function(e, t, n) {
        var r = e("../internals/well-known-symbol")("iterator")
          , i = !1;
        try {
            var o = 0
              , s = {
                next: function() {
                    return {
                        done: !!o++
                    }
                },
                return: function() {
                    i = !0
                }
            };
            s[r] = function() {
                return this
            }
            ,
            Array.from(s, (function() {
                throw 2
            }
            ))
        } catch (e) {}
        t.exports = function(e, t) {
            if (!t && !i)
                return !1;
            var n = !1;
            try {
                var o = {};
                o[r] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }
                ,
                e(o)
            } catch (e) {}
            return n
        }
    }
    , {
        "../internals/well-known-symbol": 106
    }],
    17: [function(e, t, n) {
        var r = {}.toString;
        t.exports = function(e) {
            return r.call(e).slice(8, -1)
        }
    }
    , {}],
    18: [function(e, t, n) {
        var r = e("../internals/to-string-tag-support")
          , i = e("../internals/is-callable")
          , o = e("../internals/classof-raw")
          , s = e("../internals/well-known-symbol")("toStringTag")
          , a = "Arguments" == o(function() {
            return arguments
        }());
        t.exports = r ? o : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), s)) ? n : a ? o(t) : "Object" == (r = o(t)) && i(t.callee) ? "Arguments" : r
        }
    }
    , {
        "../internals/classof-raw": 17,
        "../internals/is-callable": 55,
        "../internals/to-string-tag-support": 99,
        "../internals/well-known-symbol": 106
    }],
    19: [function(e, t, n) {
        var r = e("../internals/has-own-property")
          , i = e("../internals/own-keys")
          , o = e("../internals/object-get-own-property-descriptor")
          , s = e("../internals/object-define-property");
        t.exports = function(e, t) {
            for (var n = i(t), a = s.f, l = o.f, c = 0; c < n.length; c++) {
                var u = n[c];
                r(e, u) || a(e, u, l(t, u))
            }
        }
    }
    , {
        "../internals/has-own-property": 44,
        "../internals/object-define-property": 69,
        "../internals/object-get-own-property-descriptor": 70,
        "../internals/own-keys": 79
    }],
    20: [function(e, t, n) {
        var r = e("../internals/fails");
        t.exports = !r((function() {
            function e() {}
            return e.prototype.constructor = null,
            Object.getPrototypeOf(new e) !== e.prototype
        }
        ))
    }
    , {
        "../internals/fails": 36
    }],
    21: [function(e, t, n) {
        "use strict";
        var r = e("../internals/iterators-core").IteratorPrototype
          , i = e("../internals/object-create")
          , o = e("../internals/create-property-descriptor")
          , s = e("../internals/set-to-string-tag")
          , a = e("../internals/iterators")
          , l = function() {
            return this
        };
        t.exports = function(e, t, n) {
            var c = t + " Iterator";
            return e.prototype = i(r, {
                next: o(1, n)
            }),
            s(e, c, !1, !0),
            a[c] = l,
            e
        }
    }
    , {
        "../internals/create-property-descriptor": 23,
        "../internals/iterators": 63,
        "../internals/iterators-core": 62,
        "../internals/object-create": 67,
        "../internals/set-to-string-tag": 85
    }],
    22: [function(e, t, n) {
        var r = e("../internals/descriptors")
          , i = e("../internals/object-define-property")
          , o = e("../internals/create-property-descriptor");
        t.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    , {
        "../internals/create-property-descriptor": 23,
        "../internals/descriptors": 25,
        "../internals/object-define-property": 69
    }],
    23: [function(e, t, n) {
        t.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    , {}],
    24: [function(e, t, n) {
        "use strict";
        var r = e("../internals/export")
          , i = e("../internals/is-pure")
          , o = e("../internals/function-name")
          , s = e("../internals/is-callable")
          , a = e("../internals/create-iterator-constructor")
          , l = e("../internals/object-get-prototype-of")
          , c = e("../internals/object-set-prototype-of")
          , u = e("../internals/set-to-string-tag")
          , d = e("../internals/create-non-enumerable-property")
          , p = e("../internals/redefine")
          , f = e("../internals/well-known-symbol")
          , h = e("../internals/iterators")
          , g = e("../internals/iterators-core")
          , y = o.PROPER
          , m = o.CONFIGURABLE
          , b = g.IteratorPrototype
          , v = g.BUGGY_SAFARI_ITERATORS
          , w = f("iterator")
          , x = "keys"
          , S = "values"
          , _ = "entries"
          , j = function() {
            return this
        };
        t.exports = function(e, t, n, o, f, g, T) {
            a(n, t, o);
            var I, R, E, L = function(e) {
                if (e === f && M)
                    return M;
                if (!v && e in O)
                    return O[e];
                switch (e) {
                case x:
                case S:
                case _:
                    return function() {
                        return new n(this,e)
                    }
                }
                return function() {
                    return new n(this)
                }
            }, k = t + " Iterator", A = !1, O = e.prototype, P = O[w] || O["@@iterator"] || f && O[f], M = !v && P || L(f), C = "Array" == t && O.entries || P;
            if (C && (I = l(C.call(new e))) !== Object.prototype && I.next && (i || l(I) === b || (c ? c(I, b) : s(I[w]) || p(I, w, j)),
            u(I, k, !0, !0),
            i && (h[k] = j)),
            y && f == S && P && P.name !== S && (!i && m ? d(O, "name", S) : (A = !0,
            M = function() {
                return P.call(this)
            }
            )),
            f)
                if (R = {
                    values: L(S),
                    keys: g ? M : L(x),
                    entries: L(_)
                },
                T)
                    for (E in R)
                        (v || A || !(E in O)) && p(O, E, R[E]);
                else
                    r({
                        target: t,
                        proto: !0,
                        forced: v || A
                    }, R);
            return i && !T || O[w] === M || p(O, w, M, {
                name: f
            }),
            h[t] = M,
            R
        }
    }
    , {
        "../internals/create-iterator-constructor": 21,
        "../internals/create-non-enumerable-property": 22,
        "../internals/export": 35,
        "../internals/function-name": 38,
        "../internals/is-callable": 55,
        "../internals/is-pure": 60,
        "../internals/iterators": 63,
        "../internals/iterators-core": 62,
        "../internals/object-get-prototype-of": 73,
        "../internals/object-set-prototype-of": 77,
        "../internals/redefine": 81,
        "../internals/set-to-string-tag": 85,
        "../internals/well-known-symbol": 106
    }],
    25: [function(e, t, n) {
        var r = e("../internals/fails");
        t.exports = !r((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    , {
        "../internals/fails": 36
    }],
    26: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/is-object")
          , o = r.document
          , s = i(o) && i(o.createElement);
        t.exports = function(e) {
            return s ? o.createElement(e) : {}
        }
    }
    , {
        "../internals/global": 43,
        "../internals/is-object": 59
    }],
    27: [function(e, t, n) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }
    , {}],
    28: [function(e, t, n) {
        var r = e("../internals/document-create-element")("span").classList
          , i = r && r.constructor && r.constructor.prototype;
        t.exports = i === Object.prototype ? void 0 : i
    }
    , {
        "../internals/document-create-element": 26
    }],
    29: [function(e, t, n) {
        var r = e("../internals/engine-user-agent").match(/firefox\/(\d+)/i);
        t.exports = !!r && +r[1]
    }
    , {
        "../internals/engine-user-agent": 31
    }],
    30: [function(e, t, n) {
        var r = e("../internals/engine-user-agent");
        t.exports = /MSIE|Trident/.test(r)
    }
    , {
        "../internals/engine-user-agent": 31
    }],
    31: [function(e, t, n) {
        var r = e("../internals/get-built-in");
        t.exports = r("navigator", "userAgent") || ""
    }
    , {
        "../internals/get-built-in": 39
    }],
    32: [function(e, t, n) {
        var r, i, o = e("../internals/global"), s = e("../internals/engine-user-agent"), a = o.process, l = o.Deno, c = a && a.versions || l && l.version, u = c && c.v8;
        u ? i = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1] : s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (i = r[1]),
        t.exports = i && +i
    }
    , {
        "../internals/engine-user-agent": 31,
        "../internals/global": 43
    }],
    33: [function(e, t, n) {
        var r = e("../internals/engine-user-agent").match(/AppleWebKit\/(\d+)\./);
        t.exports = !!r && +r[1]
    }
    , {
        "../internals/engine-user-agent": 31
    }],
    34: [function(e, t, n) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    , {}],
    35: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/object-get-own-property-descriptor").f
          , o = e("../internals/create-non-enumerable-property")
          , s = e("../internals/redefine")
          , a = e("../internals/set-global")
          , l = e("../internals/copy-constructor-properties")
          , c = e("../internals/is-forced");
        t.exports = function(e, t) {
            var n, u, d, p, f, h = e.target, g = e.global, y = e.stat;
            if (n = g ? r : y ? r[h] || a(h, {}) : (r[h] || {}).prototype)
                for (u in t) {
                    if (p = t[u],
                    d = e.noTargetGet ? (f = i(n, u)) && f.value : n[u],
                    !c(g ? u : h + (y ? "." : "#") + u, e.forced) && void 0 !== d) {
                        if (typeof p == typeof d)
                            continue;
                        l(p, d)
                    }
                    (e.sham || d && d.sham) && o(p, "sham", !0),
                    s(n, u, p, e)
                }
        }
    }
    , {
        "../internals/copy-constructor-properties": 19,
        "../internals/create-non-enumerable-property": 22,
        "../internals/global": 43,
        "../internals/is-forced": 57,
        "../internals/object-get-own-property-descriptor": 70,
        "../internals/redefine": 81,
        "../internals/set-global": 83
    }],
    36: [function(e, t, n) {
        t.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    , {}],
    37: [function(e, t, n) {
        var r = e("../internals/a-callable");
        t.exports = function(e, t, n) {
            if (r(e),
            void 0 === t)
                return e;
            switch (n) {
            case 0:
                return function() {
                    return e.call(t)
                }
                ;
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return e.call(t, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }
    , {
        "../internals/a-callable": 1
    }],
    38: [function(e, t, n) {
        var r = e("../internals/descriptors")
          , i = e("../internals/has-own-property")
          , o = Function.prototype
          , s = r && Object.getOwnPropertyDescriptor
          , a = i(o, "name")
          , l = a && "something" === function() {}
        .name
          , c = a && (!r || r && s(o, "name").configurable);
        t.exports = {
            EXISTS: a,
            PROPER: l,
            CONFIGURABLE: c
        }
    }
    , {
        "../internals/descriptors": 25,
        "../internals/has-own-property": 44
    }],
    39: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/is-callable")
          , o = function(e) {
            return i(e) ? e : void 0
        };
        t.exports = function(e, t) {
            return arguments.length < 2 ? o(r[e]) : r[e] && r[e][t]
        }
    }
    , {
        "../internals/global": 43,
        "../internals/is-callable": 55
    }],
    40: [function(e, t, n) {
        var r = e("../internals/classof")
          , i = e("../internals/get-method")
          , o = e("../internals/iterators")
          , s = e("../internals/well-known-symbol")("iterator");
        t.exports = function(e) {
            if (null != e)
                return i(e, s) || i(e, "@@iterator") || o[r(e)]
        }
    }
    , {
        "../internals/classof": 18,
        "../internals/get-method": 42,
        "../internals/iterators": 63,
        "../internals/well-known-symbol": 106
    }],
    41: [function(e, t, n) {
        var r = e("../internals/a-callable")
          , i = e("../internals/an-object")
          , o = e("../internals/get-iterator-method");
        t.exports = function(e, t) {
            var n = arguments.length < 2 ? o(e) : t;
            if (r(n))
                return i(n.call(e));
            throw TypeError(String(e) + " is not iterable")
        }
    }
    , {
        "../internals/a-callable": 1,
        "../internals/an-object": 6,
        "../internals/get-iterator-method": 40
    }],
    42: [function(e, t, n) {
        var r = e("../internals/a-callable");
        t.exports = function(e, t) {
            var n = e[t];
            return null == n ? void 0 : r(n)
        }
    }
    , {
        "../internals/a-callable": 1
    }],
    43: [function(e, t, n) {
        (function(e) {
            (function() {
                var n = function(e) {
                    return e && e.Math == Math && e
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() {
                    return this
                }() || Function("return this")()
            }
            ).call(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    44: [function(e, t, n) {
        var r = e("../internals/to-object")
          , i = {}.hasOwnProperty;
        t.exports = Object.hasOwn || function(e, t) {
            return i.call(r(e), t)
        }
    }
    , {
        "../internals/to-object": 94
    }],
    45: [function(e, t, n) {
        t.exports = {}
    }
    , {}],
    46: [function(e, t, n) {
        var r = e("../internals/get-built-in");
        t.exports = r("document", "documentElement")
    }
    , {
        "../internals/get-built-in": 39
    }],
    47: [function(e, t, n) {
        var r = e("../internals/descriptors")
          , i = e("../internals/fails")
          , o = e("../internals/document-create-element");
        t.exports = !r && !i((function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , {
        "../internals/descriptors": 25,
        "../internals/document-create-element": 26,
        "../internals/fails": 36
    }],
    48: [function(e, t, n) {
        var r = Math.abs
          , i = Math.pow
          , o = Math.floor
          , s = Math.log
          , a = Math.LN2;
        t.exports = {
            pack: function(e, t, n) {
                var l, c, u, d = new Array(n), p = 8 * n - t - 1, f = (1 << p) - 1, h = f >> 1, g = 23 === t ? i(2, -24) - i(2, -77) : 0, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, m = 0;
                for ((e = r(e)) != e || e === 1 / 0 ? (c = e != e ? 1 : 0,
                l = f) : (l = o(s(e) / a),
                e * (u = i(2, -l)) < 1 && (l--,
                u *= 2),
                (e += l + h >= 1 ? g / u : g * i(2, 1 - h)) * u >= 2 && (l++,
                u /= 2),
                l + h >= f ? (c = 0,
                l = f) : l + h >= 1 ? (c = (e * u - 1) * i(2, t),
                l += h) : (c = e * i(2, h - 1) * i(2, t),
                l = 0)); t >= 8; d[m++] = 255 & c,
                c /= 256,
                t -= 8)
                    ;
                for (l = l << t | c,
                p += t; p > 0; d[m++] = 255 & l,
                l /= 256,
                p -= 8)
                    ;
                return d[--m] |= 128 * y,
                d
            },
            unpack: function(e, t) {
                var n, r = e.length, o = 8 * r - t - 1, s = (1 << o) - 1, a = s >> 1, l = o - 7, c = r - 1, u = e[c--], d = 127 & u;
                for (u >>= 7; l > 0; d = 256 * d + e[c],
                c--,
                l -= 8)
                    ;
                for (n = d & (1 << -l) - 1,
                d >>= -l,
                l += t; l > 0; n = 256 * n + e[c],
                c--,
                l -= 8)
                    ;
                if (0 === d)
                    d = 1 - a;
                else {
                    if (d === s)
                        return n ? NaN : u ? -1 / 0 : 1 / 0;
                    n += i(2, t),
                    d -= a
                }
                return (u ? -1 : 1) * n * i(2, d - t)
            }
        }
    }
    , {}],
    49: [function(e, t, n) {
        var r = e("../internals/fails")
          , i = e("../internals/classof-raw")
          , o = "".split;
        t.exports = r((function() {
            return !Object("z").propertyIsEnumerable(0)
        }
        )) ? function(e) {
            return "String" == i(e) ? o.call(e, "") : Object(e)
        }
        : Object
    }
    , {
        "../internals/classof-raw": 17,
        "../internals/fails": 36
    }],
    50: [function(e, t, n) {
        var r = e("../internals/is-callable")
          , i = e("../internals/is-object")
          , o = e("../internals/object-set-prototype-of");
        t.exports = function(e, t, n) {
            var s, a;
            return o && r(s = t.constructor) && s !== n && i(a = s.prototype) && a !== n.prototype && o(e, a),
            e
        }
    }
    , {
        "../internals/is-callable": 55,
        "../internals/is-object": 59,
        "../internals/object-set-prototype-of": 77
    }],
    51: [function(e, t, n) {
        var r = e("../internals/is-callable")
          , i = e("../internals/shared-store")
          , o = Function.toString;
        r(i.inspectSource) || (i.inspectSource = function(e) {
            return o.call(e)
        }
        ),
        t.exports = i.inspectSource
    }
    , {
        "../internals/is-callable": 55,
        "../internals/shared-store": 87
    }],
    52: [function(e, t, n) {
        var r, i, o, s = e("../internals/native-weak-map"), a = e("../internals/global"), l = e("../internals/is-object"), c = e("../internals/create-non-enumerable-property"), u = e("../internals/has-own-property"), d = e("../internals/shared-store"), p = e("../internals/shared-key"), f = e("../internals/hidden-keys"), h = "Object already initialized", g = a.WeakMap;
        if (s || d.state) {
            var y = d.state || (d.state = new g)
              , m = y.get
              , b = y.has
              , v = y.set;
            r = function(e, t) {
                if (b.call(y, e))
                    throw new TypeError(h);
                return t.facade = e,
                v.call(y, e, t),
                t
            }
            ,
            i = function(e) {
                return m.call(y, e) || {}
            }
            ,
            o = function(e) {
                return b.call(y, e)
            }
        } else {
            var w = p("state");
            f[w] = !0,
            r = function(e, t) {
                if (u(e, w))
                    throw new TypeError(h);
                return t.facade = e,
                c(e, w, t),
                t
            }
            ,
            i = function(e) {
                return u(e, w) ? e[w] : {}
            }
            ,
            o = function(e) {
                return u(e, w)
            }
        }
        t.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function(e) {
                return o(e) ? i(e) : r(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!l(t) || (n = i(t)).type !== e)
                        throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    }
    , {
        "../internals/create-non-enumerable-property": 22,
        "../internals/global": 43,
        "../internals/has-own-property": 44,
        "../internals/hidden-keys": 45,
        "../internals/is-object": 59,
        "../internals/native-weak-map": 66,
        "../internals/shared-key": 86,
        "../internals/shared-store": 87
    }],
    53: [function(e, t, n) {
        var r = e("../internals/well-known-symbol")
          , i = e("../internals/iterators")
          , o = r("iterator")
          , s = Array.prototype;
        t.exports = function(e) {
            return void 0 !== e && (i.Array === e || s[o] === e)
        }
    }
    , {
        "../internals/iterators": 63,
        "../internals/well-known-symbol": 106
    }],
    54: [function(e, t, n) {
        var r = e("../internals/classof-raw");
        t.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }
    , {
        "../internals/classof-raw": 17
    }],
    55: [function(e, t, n) {
        t.exports = function(e) {
            return "function" == typeof e
        }
    }
    , {}],
    56: [function(e, t, n) {
        var r = e("../internals/fails")
          , i = e("../internals/is-callable")
          , o = e("../internals/classof")
          , s = e("../internals/get-built-in")
          , a = e("../internals/inspect-source")
          , l = []
          , c = s("Reflect", "construct")
          , u = /^\s*(?:class|function)\b/
          , d = u.exec
          , p = !u.exec((function() {}
        ))
          , f = function(e) {
            if (!i(e))
                return !1;
            try {
                return c(Object, l, e),
                !0
            } catch (e) {
                return !1
            }
        };
        t.exports = !c || r((function() {
            var e;
            return f(f.call) || !f(Object) || !f((function() {
                e = !0
            }
            )) || e
        }
        )) ? function(e) {
            if (!i(e))
                return !1;
            switch (o(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
            }
            return p || !!d.call(u, a(e))
        }
        : f
    }
    , {
        "../internals/classof": 18,
        "../internals/fails": 36,
        "../internals/get-built-in": 39,
        "../internals/inspect-source": 51,
        "../internals/is-callable": 55
    }],
    57: [function(e, t, n) {
        var r = e("../internals/fails")
          , i = e("../internals/is-callable")
          , o = /#|\.prototype\./
          , s = function(e, t) {
            var n = l[a(e)];
            return n == u || n != c && (i(t) ? r(t) : !!t)
        }
          , a = s.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase()
        }
          , l = s.data = {}
          , c = s.NATIVE = "N"
          , u = s.POLYFILL = "P";
        t.exports = s
    }
    , {
        "../internals/fails": 36,
        "../internals/is-callable": 55
    }],
    58: [function(e, t, n) {
        var r = e("../internals/is-object")
          , i = Math.floor;
        t.exports = Number.isInteger || function(e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    }
    , {
        "../internals/is-object": 59
    }],
    59: [function(e, t, n) {
        var r = e("../internals/is-callable");
        t.exports = function(e) {
            return "object" == typeof e ? null !== e : r(e)
        }
    }
    , {
        "../internals/is-callable": 55
    }],
    60: [function(e, t, n) {
        t.exports = !1
    }
    , {}],
    61: [function(e, t, n) {
        var r = e("../internals/is-callable")
          , i = e("../internals/get-built-in")
          , o = e("../internals/use-symbol-as-uid");
        t.exports = o ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            var t = i("Symbol");
            return r(t) && Object(e)instanceof t
        }
    }
    , {
        "../internals/get-built-in": 39,
        "../internals/is-callable": 55,
        "../internals/use-symbol-as-uid": 105
    }],
    62: [function(e, t, n) {
        "use strict";
        var r, i, o, s = e("../internals/fails"), a = e("../internals/is-callable"), l = e("../internals/object-create"), c = e("../internals/object-get-prototype-of"), u = e("../internals/redefine"), d = e("../internals/well-known-symbol"), p = e("../internals/is-pure"), f = d("iterator"), h = !1;
        [].keys && ("next"in (o = [].keys()) ? (i = c(c(o))) !== Object.prototype && (r = i) : h = !0),
        null == r || s((function() {
            var e = {};
            return r[f].call(e) !== e
        }
        )) ? r = {} : p && (r = l(r)),
        a(r[f]) || u(r, f, (function() {
            return this
        }
        )),
        t.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: h
        }
    }
    , {
        "../internals/fails": 36,
        "../internals/is-callable": 55,
        "../internals/is-pure": 60,
        "../internals/object-create": 67,
        "../internals/object-get-prototype-of": 73,
        "../internals/redefine": 81,
        "../internals/well-known-symbol": 106
    }],
    63: [function(e, t, n) {
        arguments[4][45][0].apply(n, arguments)
    }
    , {
        dup: 45
    }],
    64: [function(e, t, n) {
        var r = e("../internals/to-length");
        t.exports = function(e) {
            return r(e.length)
        }
    }
    , {
        "../internals/to-length": 93
    }],
    65: [function(e, t, n) {
        var r = e("../internals/engine-v8-version")
          , i = e("../internals/fails");
        t.exports = !!Object.getOwnPropertySymbols && !i((function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && r && r < 41
        }
        ))
    }
    , {
        "../internals/engine-v8-version": 32,
        "../internals/fails": 36
    }],
    66: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/is-callable")
          , o = e("../internals/inspect-source")
          , s = r.WeakMap;
        t.exports = i(s) && /native code/.test(o(s))
    }
    , {
        "../internals/global": 43,
        "../internals/inspect-source": 51,
        "../internals/is-callable": 55
    }],
    67: [function(e, t, n) {
        var r, i = e("../internals/an-object"), o = e("../internals/object-define-properties"), s = e("../internals/enum-bug-keys"), a = e("../internals/hidden-keys"), l = e("../internals/html"), c = e("../internals/document-create-element"), u = e("../internals/shared-key"), d = u("IE_PROTO"), p = function() {}, f = function(e) {
            return "<script>" + e + "</" + "script>"
        }, h = function(e) {
            e.write(f("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, g = function() {
            try {
                r = new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            g = "undefined" != typeof document ? document.domain && r ? h(r) : ((t = c("iframe")).style.display = "none",
            l.appendChild(t),
            t.src = String("javascript:"),
            (e = t.contentWindow.document).open(),
            e.write(f("document.F=Object")),
            e.close(),
            e.F) : h(r);
            for (var n = s.length; n--; )
                delete g.prototype[s[n]];
            return g()
        };
        a[d] = !0,
        t.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (p.prototype = i(e),
            n = new p,
            p.prototype = null,
            n[d] = e) : n = g(),
            void 0 === t ? n : o(n, t)
        }
    }
    , {
        "../internals/an-object": 6,
        "../internals/document-create-element": 26,
        "../internals/enum-bug-keys": 34,
        "../internals/hidden-keys": 45,
        "../internals/html": 46,
        "../internals/object-define-properties": 68,
        "../internals/shared-key": 86
    }],
    68: [function(e, t, n) {
        var r = e("../internals/descriptors")
          , i = e("../internals/object-define-property")
          , o = e("../internals/an-object")
          , s = e("../internals/object-keys");
        t.exports = r ? Object.defineProperties : function(e, t) {
            o(e);
            for (var n, r = s(t), a = r.length, l = 0; a > l; )
                i.f(e, n = r[l++], t[n]);
            return e
        }
    }
    , {
        "../internals/an-object": 6,
        "../internals/descriptors": 25,
        "../internals/object-define-property": 69,
        "../internals/object-keys": 75
    }],
    69: [function(e, t, n) {
        var r = e("../internals/descriptors")
          , i = e("../internals/ie8-dom-define")
          , o = e("../internals/an-object")
          , s = e("../internals/to-property-key")
          , a = Object.defineProperty;
        n.f = r ? a : function(e, t, n) {
            if (o(e),
            t = s(t),
            o(n),
            i)
                try {
                    return a(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    , {
        "../internals/an-object": 6,
        "../internals/descriptors": 25,
        "../internals/ie8-dom-define": 47,
        "../internals/to-property-key": 98
    }],
    70: [function(e, t, n) {
        var r = e("../internals/descriptors")
          , i = e("../internals/object-property-is-enumerable")
          , o = e("../internals/create-property-descriptor")
          , s = e("../internals/to-indexed-object")
          , a = e("../internals/to-property-key")
          , l = e("../internals/has-own-property")
          , c = e("../internals/ie8-dom-define")
          , u = Object.getOwnPropertyDescriptor;
        n.f = r ? u : function(e, t) {
            if (e = s(e),
            t = a(t),
            c)
                try {
                    return u(e, t)
                } catch (e) {}
            if (l(e, t))
                return o(!i.f.call(e, t), e[t])
        }
    }
    , {
        "../internals/create-property-descriptor": 23,
        "../internals/descriptors": 25,
        "../internals/has-own-property": 44,
        "../internals/ie8-dom-define": 47,
        "../internals/object-property-is-enumerable": 76,
        "../internals/to-indexed-object": 91,
        "../internals/to-property-key": 98
    }],
    71: [function(e, t, n) {
        var r = e("../internals/object-keys-internal")
          , i = e("../internals/enum-bug-keys").concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(e) {
            return r(e, i)
        }
    }
    , {
        "../internals/enum-bug-keys": 34,
        "../internals/object-keys-internal": 74
    }],
    72: [function(e, t, n) {
        n.f = Object.getOwnPropertySymbols
    }
    , {}],
    73: [function(e, t, n) {
        var r = e("../internals/has-own-property")
          , i = e("../internals/is-callable")
          , o = e("../internals/to-object")
          , s = e("../internals/shared-key")
          , a = e("../internals/correct-prototype-getter")
          , l = s("IE_PROTO")
          , c = Object.prototype;
        t.exports = a ? Object.getPrototypeOf : function(e) {
            var t = o(e);
            if (r(t, l))
                return t[l];
            var n = t.constructor;
            return i(n) && t instanceof n ? n.prototype : t instanceof Object ? c : null
        }
    }
    , {
        "../internals/correct-prototype-getter": 20,
        "../internals/has-own-property": 44,
        "../internals/is-callable": 55,
        "../internals/shared-key": 86,
        "../internals/to-object": 94
    }],
    74: [function(e, t, n) {
        var r = e("../internals/has-own-property")
          , i = e("../internals/to-indexed-object")
          , o = e("../internals/array-includes").indexOf
          , s = e("../internals/hidden-keys");
        t.exports = function(e, t) {
            var n, a = i(e), l = 0, c = [];
            for (n in a)
                !r(s, n) && r(a, n) && c.push(n);
            for (; t.length > l; )
                r(a, n = t[l++]) && (~o(c, n) || c.push(n));
            return c
        }
    }
    , {
        "../internals/array-includes": 11,
        "../internals/has-own-property": 44,
        "../internals/hidden-keys": 45,
        "../internals/to-indexed-object": 91
    }],
    75: [function(e, t, n) {
        var r = e("../internals/object-keys-internal")
          , i = e("../internals/enum-bug-keys");
        t.exports = Object.keys || function(e) {
            return r(e, i)
        }
    }
    , {
        "../internals/enum-bug-keys": 34,
        "../internals/object-keys-internal": 74
    }],
    76: [function(e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable
          , i = Object.getOwnPropertyDescriptor
          , o = i && !r.call({
            1: 2
        }, 1);
        n.f = o ? function(e) {
            var t = i(this, e);
            return !!t && t.enumerable
        }
        : r
    }
    , {}],
    77: [function(e, t, n) {
        var r = e("../internals/an-object")
          , i = e("../internals/a-possible-prototype");
        t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var e, t = !1, n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                t = n instanceof Array
            } catch (e) {}
            return function(n, o) {
                return r(n),
                i(o),
                t ? e.call(n, o) : n.__proto__ = o,
                n
            }
        }() : void 0)
    }
    , {
        "../internals/a-possible-prototype": 3,
        "../internals/an-object": 6
    }],
    78: [function(e, t, n) {
        var r = e("../internals/is-callable")
          , i = e("../internals/is-object");
        t.exports = function(e, t) {
            var n, o;
            if ("string" === t && r(n = e.toString) && !i(o = n.call(e)))
                return o;
            if (r(n = e.valueOf) && !i(o = n.call(e)))
                return o;
            if ("string" !== t && r(n = e.toString) && !i(o = n.call(e)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , {
        "../internals/is-callable": 55,
        "../internals/is-object": 59
    }],
    79: [function(e, t, n) {
        var r = e("../internals/get-built-in")
          , i = e("../internals/object-get-own-property-names")
          , o = e("../internals/object-get-own-property-symbols")
          , s = e("../internals/an-object");
        t.exports = r("Reflect", "ownKeys") || function(e) {
            var t = i.f(s(e))
              , n = o.f;
            return n ? t.concat(n(e)) : t
        }
    }
    , {
        "../internals/an-object": 6,
        "../internals/get-built-in": 39,
        "../internals/object-get-own-property-names": 71,
        "../internals/object-get-own-property-symbols": 72
    }],
    80: [function(e, t, n) {
        var r = e("../internals/redefine");
        t.exports = function(e, t, n) {
            for (var i in t)
                r(e, i, t[i], n);
            return e
        }
    }
    , {
        "../internals/redefine": 81
    }],
    81: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/is-callable")
          , o = e("../internals/has-own-property")
          , s = e("../internals/create-non-enumerable-property")
          , a = e("../internals/set-global")
          , l = e("../internals/inspect-source")
          , c = e("../internals/internal-state")
          , u = e("../internals/function-name").CONFIGURABLE
          , d = c.get
          , p = c.enforce
          , f = String(String).split("String");
        (t.exports = function(e, t, n, l) {
            var c, d = !!l && !!l.unsafe, h = !!l && !!l.enumerable, g = !!l && !!l.noTargetGet, y = l && void 0 !== l.name ? l.name : t;
            i(n) && ("Symbol(" === String(y).slice(0, 7) && (y = "[" + String(y).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!o(n, "name") || u && n.name !== y) && s(n, "name", y),
            (c = p(n)).source || (c.source = f.join("string" == typeof y ? y : ""))),
            e !== r ? (d ? !g && e[t] && (h = !0) : delete e[t],
            h ? e[t] = n : s(e, t, n)) : h ? e[t] = n : a(t, n)
        }
        )(Function.prototype, "toString", (function() {
            return i(this) && d(this).source || l(this)
        }
        ))
    }
    , {
        "../internals/create-non-enumerable-property": 22,
        "../internals/function-name": 38,
        "../internals/global": 43,
        "../internals/has-own-property": 44,
        "../internals/inspect-source": 51,
        "../internals/internal-state": 52,
        "../internals/is-callable": 55,
        "../internals/set-global": 83
    }],
    82: [function(e, t, n) {
        t.exports = function(e) {
            if (null == e)
                throw TypeError("Can't call method on " + e);
            return e
        }
    }
    , {}],
    83: [function(e, t, n) {
        var r = e("../internals/global");
        t.exports = function(e, t) {
            try {
                Object.defineProperty(r, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (n) {
                r[e] = t
            }
            return t
        }
    }
    , {
        "../internals/global": 43
    }],
    84: [function(e, t, n) {
        "use strict";
        var r = e("../internals/get-built-in")
          , i = e("../internals/object-define-property")
          , o = e("../internals/well-known-symbol")
          , s = e("../internals/descriptors")
          , a = o("species");
        t.exports = function(e) {
            var t = r(e)
              , n = i.f;
            s && t && !t[a] && n(t, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , {
        "../internals/descriptors": 25,
        "../internals/get-built-in": 39,
        "../internals/object-define-property": 69,
        "../internals/well-known-symbol": 106
    }],
    85: [function(e, t, n) {
        var r = e("../internals/object-define-property").f
          , i = e("../internals/has-own-property")
          , o = e("../internals/well-known-symbol")("toStringTag");
        t.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    }
    , {
        "../internals/has-own-property": 44,
        "../internals/object-define-property": 69,
        "../internals/well-known-symbol": 106
    }],
    86: [function(e, t, n) {
        var r = e("../internals/shared")
          , i = e("../internals/uid")
          , o = r("keys");
        t.exports = function(e) {
            return o[e] || (o[e] = i(e))
        }
    }
    , {
        "../internals/shared": 88,
        "../internals/uid": 104
    }],
    87: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/set-global")
          , o = "__core-js_shared__"
          , s = r[o] || i(o, {});
        t.exports = s
    }
    , {
        "../internals/global": 43,
        "../internals/set-global": 83
    }],
    88: [function(e, t, n) {
        var r = e("../internals/is-pure")
          , i = e("../internals/shared-store");
        (t.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.18.3",
            mode: r ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    , {
        "../internals/is-pure": 60,
        "../internals/shared-store": 87
    }],
    89: [function(e, t, n) {
        var r = e("../internals/to-integer-or-infinity")
          , i = Math.max
          , o = Math.min;
        t.exports = function(e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t)
        }
    }
    , {
        "../internals/to-integer-or-infinity": 92
    }],
    90: [function(e, t, n) {
        var r = e("../internals/to-integer-or-infinity")
          , i = e("../internals/to-length");
        t.exports = function(e) {
            if (void 0 === e)
                return 0;
            var t = r(e)
              , n = i(t);
            if (t !== n)
                throw RangeError("Wrong length or index");
            return n
        }
    }
    , {
        "../internals/to-integer-or-infinity": 92,
        "../internals/to-length": 93
    }],
    91: [function(e, t, n) {
        var r = e("../internals/indexed-object")
          , i = e("../internals/require-object-coercible");
        t.exports = function(e) {
            return r(i(e))
        }
    }
    , {
        "../internals/indexed-object": 49,
        "../internals/require-object-coercible": 82
    }],
    92: [function(e, t, n) {
        var r = Math.ceil
          , i = Math.floor;
        t.exports = function(e) {
            var t = +e;
            return t != t || 0 === t ? 0 : (t > 0 ? i : r)(t)
        }
    }
    , {}],
    93: [function(e, t, n) {
        var r = e("../internals/to-integer-or-infinity")
          , i = Math.min;
        t.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    }
    , {
        "../internals/to-integer-or-infinity": 92
    }],
    94: [function(e, t, n) {
        var r = e("../internals/require-object-coercible");
        t.exports = function(e) {
            return Object(r(e))
        }
    }
    , {
        "../internals/require-object-coercible": 82
    }],
    95: [function(e, t, n) {
        var r = e("../internals/to-positive-integer");
        t.exports = function(e, t) {
            var n = r(e);
            if (n % t)
                throw RangeError("Wrong offset");
            return n
        }
    }
    , {
        "../internals/to-positive-integer": 96
    }],
    96: [function(e, t, n) {
        var r = e("../internals/to-integer-or-infinity");
        t.exports = function(e) {
            var t = r(e);
            if (t < 0)
                throw RangeError("The argument can't be less than 0");
            return t
        }
    }
    , {
        "../internals/to-integer-or-infinity": 92
    }],
    97: [function(e, t, n) {
        var r = e("../internals/is-object")
          , i = e("../internals/is-symbol")
          , o = e("../internals/get-method")
          , s = e("../internals/ordinary-to-primitive")
          , a = e("../internals/well-known-symbol")("toPrimitive");
        t.exports = function(e, t) {
            if (!r(e) || i(e))
                return e;
            var n, l = o(e, a);
            if (l) {
                if (void 0 === t && (t = "default"),
                n = l.call(e, t),
                !r(n) || i(n))
                    return n;
                throw TypeError("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"),
            s(e, t)
        }
    }
    , {
        "../internals/get-method": 42,
        "../internals/is-object": 59,
        "../internals/is-symbol": 61,
        "../internals/ordinary-to-primitive": 78,
        "../internals/well-known-symbol": 106
    }],
    98: [function(e, t, n) {
        var r = e("../internals/to-primitive")
          , i = e("../internals/is-symbol");
        t.exports = function(e) {
            var t = r(e, "string");
            return i(t) ? t : String(t)
        }
    }
    , {
        "../internals/is-symbol": 61,
        "../internals/to-primitive": 97
    }],
    99: [function(e, t, n) {
        var r = {};
        r[e("../internals/well-known-symbol")("toStringTag")] = "z",
        t.exports = "[object z]" === String(r)
    }
    , {
        "../internals/well-known-symbol": 106
    }],
    100: [function(e, t, n) {
        t.exports = function(e) {
            try {
                return String(e)
            } catch (e) {
                return "Object"
            }
        }
    }
    , {}],
    101: [function(e, t, n) {
        "use strict";
        var r = e("../internals/export")
          , i = e("../internals/global")
          , o = e("../internals/descriptors")
          , s = e("../internals/typed-array-constructors-require-wrappers")
          , a = e("../internals/array-buffer-view-core")
          , l = e("../internals/array-buffer")
          , c = e("../internals/an-instance")
          , u = e("../internals/create-property-descriptor")
          , d = e("../internals/create-non-enumerable-property")
          , p = e("../internals/is-integral-number")
          , f = e("../internals/to-length")
          , h = e("../internals/to-index")
          , g = e("../internals/to-offset")
          , y = e("../internals/to-property-key")
          , m = e("../internals/has-own-property")
          , b = e("../internals/classof")
          , v = e("../internals/is-object")
          , w = e("../internals/is-symbol")
          , x = e("../internals/object-create")
          , S = e("../internals/object-set-prototype-of")
          , _ = e("../internals/object-get-own-property-names").f
          , j = e("../internals/typed-array-from")
          , T = e("../internals/array-iteration").forEach
          , I = e("../internals/set-species")
          , R = e("../internals/object-define-property")
          , E = e("../internals/object-get-own-property-descriptor")
          , L = e("../internals/internal-state")
          , k = e("../internals/inherit-if-required")
          , A = L.get
          , O = L.set
          , P = R.f
          , M = E.f
          , C = Math.round
          , D = i.RangeError
          , W = l.ArrayBuffer
          , U = l.DataView
          , N = a.NATIVE_ARRAY_BUFFER_VIEWS
          , F = a.TYPED_ARRAY_CONSTRUCTOR
          , G = a.TYPED_ARRAY_TAG
          , q = a.TypedArray
          , J = a.TypedArrayPrototype
          , H = a.aTypedArrayConstructor
          , V = a.isTypedArray
          , B = "BYTES_PER_ELEMENT"
          , z = "Wrong length"
          , X = function(e, t) {
            for (var n = 0, r = t.length, i = new (H(e))(r); r > n; )
                i[n] = t[n++];
            return i
        }
          , Y = function(e, t) {
            P(e, t, {
                get: function() {
                    return A(this)[t]
                }
            })
        }
          , K = function(e) {
            var t;
            return e instanceof W || "ArrayBuffer" == (t = b(e)) || "SharedArrayBuffer" == t
        }
          , $ = function(e, t) {
            return V(e) && !w(t) && t in e && p(+t) && t >= 0
        }
          , Z = function(e, t) {
            return t = y(t),
            $(e, t) ? u(2, e[t]) : M(e, t)
        }
          , Q = function(e, t, n) {
            return t = y(t),
            !($(e, t) && v(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? P(e, t, n) : (e[t] = n.value,
            e)
        };
        o ? (N || (E.f = Z,
        R.f = Q,
        Y(J, "buffer"),
        Y(J, "byteOffset"),
        Y(J, "byteLength"),
        Y(J, "length")),
        r({
            target: "Object",
            stat: !0,
            forced: !N
        }, {
            getOwnPropertyDescriptor: Z,
            defineProperty: Q
        }),
        t.exports = function(e, t, n) {
            var o = e.match(/\d+$/)[0] / 8
              , a = e + (n ? "Clamped" : "") + "Array"
              , l = "get" + e
              , u = "set" + e
              , p = i[a]
              , y = p
              , m = y && y.prototype
              , b = {}
              , w = function(e, t) {
                P(e, t, {
                    get: function() {
                        return function(e, t) {
                            var n = A(e);
                            return n.view[l](t * o + n.byteOffset, !0)
                        }(this, t)
                    },
                    set: function(e) {
                        return function(e, t, r) {
                            var i = A(e);
                            n && (r = (r = C(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                            i.view[u](t * o + i.byteOffset, r, !0)
                        }(this, t, e)
                    },
                    enumerable: !0
                })
            };
            N ? s && (y = t((function(e, t, n, r) {
                return c(e, y, a),
                k(v(t) ? K(t) ? void 0 !== r ? new p(t,g(n, o),r) : void 0 !== n ? new p(t,g(n, o)) : new p(t) : V(t) ? X(y, t) : j.call(y, t) : new p(h(t)), e, y)
            }
            )),
            S && S(y, q),
            T(_(p), (function(e) {
                e in y || d(y, e, p[e])
            }
            )),
            y.prototype = m) : (y = t((function(e, t, n, r) {
                c(e, y, a);
                var i, s, l, u = 0, d = 0;
                if (v(t)) {
                    if (!K(t))
                        return V(t) ? X(y, t) : j.call(y, t);
                    i = t,
                    d = g(n, o);
                    var p = t.byteLength;
                    if (void 0 === r) {
                        if (p % o)
                            throw D(z);
                        if ((s = p - d) < 0)
                            throw D(z)
                    } else if ((s = f(r) * o) + d > p)
                        throw D(z);
                    l = s / o
                } else
                    l = h(t),
                    i = new W(s = l * o);
                for (O(e, {
                    buffer: i,
                    byteOffset: d,
                    byteLength: s,
                    length: l,
                    view: new U(i)
                }); u < l; )
                    w(e, u++)
            }
            )),
            S && S(y, q),
            m = y.prototype = x(J)),
            m.constructor !== y && d(m, "constructor", y),
            d(m, F, y),
            G && d(m, G, a),
            b[a] = y,
            r({
                global: !0,
                forced: y != p,
                sham: !N
            }, b),
            B in y || d(y, B, o),
            B in m || d(m, B, o),
            I(a)
        }
        ) : t.exports = function() {}
    }
    , {
        "../internals/an-instance": 5,
        "../internals/array-buffer": 9,
        "../internals/array-buffer-view-core": 8,
        "../internals/array-iteration": 12,
        "../internals/classof": 18,
        "../internals/create-non-enumerable-property": 22,
        "../internals/create-property-descriptor": 23,
        "../internals/descriptors": 25,
        "../internals/export": 35,
        "../internals/global": 43,
        "../internals/has-own-property": 44,
        "../internals/inherit-if-required": 50,
        "../internals/internal-state": 52,
        "../internals/is-integral-number": 58,
        "../internals/is-object": 59,
        "../internals/is-symbol": 61,
        "../internals/object-create": 67,
        "../internals/object-define-property": 69,
        "../internals/object-get-own-property-descriptor": 70,
        "../internals/object-get-own-property-names": 71,
        "../internals/object-set-prototype-of": 77,
        "../internals/set-species": 84,
        "../internals/to-index": 90,
        "../internals/to-length": 93,
        "../internals/to-offset": 95,
        "../internals/to-property-key": 98,
        "../internals/typed-array-constructors-require-wrappers": 102,
        "../internals/typed-array-from": 103
    }],
    102: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/fails")
          , o = e("../internals/check-correctness-of-iteration")
          , s = e("../internals/array-buffer-view-core").NATIVE_ARRAY_BUFFER_VIEWS
          , a = r.ArrayBuffer
          , l = r.Int8Array;
        t.exports = !s || !i((function() {
            l(1)
        }
        )) || !i((function() {
            new l(-1)
        }
        )) || !o((function(e) {
            new l,
            new l(null),
            new l(1.5),
            new l(e)
        }
        ), !0) || i((function() {
            return 1 !== new l(new a(2),1,void 0).length
        }
        ))
    }
    , {
        "../internals/array-buffer-view-core": 8,
        "../internals/check-correctness-of-iteration": 16,
        "../internals/fails": 36,
        "../internals/global": 43
    }],
    103: [function(e, t, n) {
        var r = e("../internals/a-constructor")
          , i = e("../internals/to-object")
          , o = e("../internals/length-of-array-like")
          , s = e("../internals/get-iterator")
          , a = e("../internals/get-iterator-method")
          , l = e("../internals/is-array-iterator-method")
          , c = e("../internals/function-bind-context")
          , u = e("../internals/array-buffer-view-core").aTypedArrayConstructor;
        t.exports = function(e) {
            var t, n, d, p, f, h, g = r(this), y = i(e), m = arguments.length, b = m > 1 ? arguments[1] : void 0, v = void 0 !== b, w = a(y);
            if (w && !l(w))
                for (h = (f = s(y, w)).next,
                y = []; !(p = h.call(f)).done; )
                    y.push(p.value);
            for (v && m > 2 && (b = c(b, arguments[2], 2)),
            n = o(y),
            d = new (u(g))(n),
            t = 0; n > t; t++)
                d[t] = v ? b(y[t], t) : y[t];
            return d
        }
    }
    , {
        "../internals/a-constructor": 2,
        "../internals/array-buffer-view-core": 8,
        "../internals/function-bind-context": 37,
        "../internals/get-iterator": 41,
        "../internals/get-iterator-method": 40,
        "../internals/is-array-iterator-method": 53,
        "../internals/length-of-array-like": 64,
        "../internals/to-object": 94
    }],
    104: [function(e, t, n) {
        var r = 0
          , i = Math.random();
        t.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++r + i).toString(36)
        }
    }
    , {}],
    105: [function(e, t, n) {
        var r = e("../internals/native-symbol");
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    , {
        "../internals/native-symbol": 65
    }],
    106: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/shared")
          , o = e("../internals/has-own-property")
          , s = e("../internals/uid")
          , a = e("../internals/native-symbol")
          , l = e("../internals/use-symbol-as-uid")
          , c = i("wks")
          , u = r.Symbol
          , d = l ? u : u && u.withoutSetter || s;
        t.exports = function(e) {
            return o(c, e) && (a || "string" == typeof c[e]) || (a && o(u, e) ? c[e] = u[e] : c[e] = d("Symbol." + e)),
            c[e]
        }
    }
    , {
        "../internals/global": 43,
        "../internals/has-own-property": 44,
        "../internals/native-symbol": 65,
        "../internals/shared": 88,
        "../internals/uid": 104,
        "../internals/use-symbol-as-uid": 105
    }],
    107: [function(e, t, n) {
        "use strict";
        var r = e("../internals/to-indexed-object")
          , i = e("../internals/add-to-unscopables")
          , o = e("../internals/iterators")
          , s = e("../internals/internal-state")
          , a = e("../internals/define-iterator")
          , l = "Array Iterator"
          , c = s.set
          , u = s.getterFor(l);
        t.exports = a(Array, "Array", (function(e, t) {
            c(this, {
                type: l,
                target: r(e),
                index: 0,
                kind: t
            })
        }
        ), (function() {
            var e = u(this)
              , t = e.target
              , n = e.kind
              , r = e.index++;
            return !t || r >= t.length ? (e.target = void 0,
            {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }
        ), "values"),
        o.Arguments = o.Array,
        i("keys"),
        i("values"),
        i("entries")
    }
    , {
        "../internals/add-to-unscopables": 4,
        "../internals/define-iterator": 24,
        "../internals/internal-state": 52,
        "../internals/iterators": 63,
        "../internals/to-indexed-object": 91
    }],
    108: [function(e, t, n) {
        "use strict";
        var r = e("../internals/array-buffer-view-core")
          , i = e("../internals/global")
          , o = e("../internals/fails")
          , s = e("../internals/a-callable")
          , a = e("../internals/length-of-array-like")
          , l = e("../internals/array-sort")
          , c = e("../internals/engine-ff-version")
          , u = e("../internals/engine-is-ie-or-edge")
          , d = e("../internals/engine-v8-version")
          , p = e("../internals/engine-webkit-version")
          , f = r.aTypedArray
          , h = r.exportTypedArrayMethod
          , g = i.Uint16Array
          , y = g && g.prototype.sort
          , m = !!y && !o((function() {
            var e = new g(2);
            e.sort(null),
            e.sort({})
        }
        ))
          , b = !!y && !o((function() {
            if (d)
                return d < 74;
            if (c)
                return c < 67;
            if (u)
                return !0;
            if (p)
                return p < 602;
            var e, t, n = new g(516), r = Array(516);
            for (e = 0; e < 516; e++)
                t = e % 4,
                n[e] = 515 - e,
                r[e] = e - 2 * t + 3;
            for (n.sort((function(e, t) {
                return (e / 4 | 0) - (t / 4 | 0)
            }
            )),
            e = 0; e < 516; e++)
                if (n[e] !== r[e])
                    return !0
        }
        ));
        h("sort", (function(e) {
            var t = this;
            if (void 0 !== e && s(e),
            b)
                return y.call(t, e);
            f(t);
            var n, r = a(t), i = Array(r);
            for (n = 0; n < r; n++)
                i[n] = t[n];
            for (i = l(t, function(e) {
                return function(t, n) {
                    return void 0 !== e ? +e(t, n) || 0 : n != n ? -1 : t != t ? 1 : 0 === t && 0 === n ? 1 / t > 0 && 1 / n < 0 ? 1 : -1 : t > n
                }
            }(e)),
            n = 0; n < r; n++)
                t[n] = i[n];
            return t
        }
        ), !b || m)
    }
    , {
        "../internals/a-callable": 1,
        "../internals/array-buffer-view-core": 8,
        "../internals/array-sort": 13,
        "../internals/engine-ff-version": 29,
        "../internals/engine-is-ie-or-edge": 30,
        "../internals/engine-v8-version": 32,
        "../internals/engine-webkit-version": 33,
        "../internals/fails": 36,
        "../internals/global": 43,
        "../internals/length-of-array-like": 64
    }],
    109: [function(e, t, n) {
        e("../internals/typed-array-constructor")("Uint8", (function(e) {
            return function(t, n, r) {
                return e(this, t, n, r)
            }
        }
        ))
    }
    , {
        "../internals/typed-array-constructor": 101
    }],
    110: [function(e, t, n) {
        var r = e("../internals/global")
          , i = e("../internals/dom-iterables")
          , o = e("../internals/dom-token-list-prototype")
          , s = e("../modules/es.array.iterator")
          , a = e("../internals/create-non-enumerable-property")
          , l = e("../internals/well-known-symbol")
          , c = l("iterator")
          , u = l("toStringTag")
          , d = s.values
          , p = function(e, t) {
            if (e) {
                if (e[c] !== d)
                    try {
                        a(e, c, d)
                    } catch (t) {
                        e[c] = d
                    }
                if (e[u] || a(e, u, t),
                i[t])
                    for (var n in s)
                        if (e[n] !== s[n])
                            try {
                                a(e, n, s[n])
                            } catch (t) {
                                e[n] = s[n]
                            }
            }
        };
        for (var f in i)
            p(r[f] && r[f].prototype, f);
        p(o, "DOMTokenList")
    }
    , {
        "../internals/create-non-enumerable-property": 22,
        "../internals/dom-iterables": 27,
        "../internals/dom-token-list-prototype": 28,
        "../internals/global": 43,
        "../internals/well-known-symbol": 106,
        "../modules/es.array.iterator": 107
    }],
    111: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.getAspectRatio = n.getSizeWithAspectRatio = void 0,
        n.getSizeWithAspectRatio = function(e, t, n) {
            if (e / t === n)
                return [e, t];
            const r = Math.round(t * n);
            return r <= e ? [r, t] : [e, Math.round(e / n)]
        }
        ,
        n.getAspectRatio = function(e, t, n) {
            if (null === e || !Array.isArray(e))
                return 9 / 16;
            const r = function(e, t) {
                const n = Math.max(t.innerWidth, t.innerHeight)
                  , r = Math.min(t.innerWidth, t.innerHeight);
                if ("landscape" === e)
                    return n / r;
                return r / n
            }(t, n)
              , i = Math.min.apply(null, e);
            if (r <= i)
                return i;
            const o = Math.max.apply(null, e);
            return r >= o ? o : r
        }
    }
    , {}],
    112: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            const n = e.lastIndexOf("/") + 1;
            let r = e.lastIndexOf("?");
            return -1 === r && (r = e.length),
            e.substr(0, n) + t + "/" + e.substr(n, r - n) + "." + t + e.substr(r, e.length - r)
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.canUseCompressionForUrl = n.changeToCompressedUrl = void 0,
        n.changeToCompressedUrl = async function(e, t) {
            const n = e.host
              , [i,o] = await Promise.all([n.caniuseBrotli(t), n.caniuseGzip(t)]);
            return i ? r(t, "br") : o ? r(t, "gz") : t
        }
        ,
        n.canUseCompressionForUrl = function(e) {
            return -1 !== e.indexOf("bin.") && e.endsWith(".js")
        }
    }
    , {
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    113: [function(e, t, n) {
        "use strict";
        async function r(e, t, n) {
            "" === n && (n = "text");
            try {
                if ("json" === n)
                    throw new Error("Unspported response type 'json'");
                return await e.loadResource(t, n)
            } catch (n) {
                const r = "ERR! Can't download " + t + ", status: " + n.status + ", context: " + n.message;
                throw e.module.onerror && e.module.onerror(r),
                e.log(r),
                n
            }
        }
        async function i(e, t, n, r, i) {
            window.LoaderXhrData[n] = 100,
            r = "" === (r = r || "") ? "text" : r;
            try {
                if ("json" === r)
                    throw new Error("Unspported response type 'json'");
                return await e.loadResource(n, r, (e=>{
                    i && i(100, e)
                }
                ))
            } catch (t) {
                const r = "ERR! Can't download " + n + ", status: " + t.status + ", context: " + t.message;
                throw e.module.log(r),
                e.module.onerror && e.module.onerror(r),
                t
            }
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.initLegacyModuleFunctions = n.initLegacyEnvironment = void 0,
        n.initLegacyEnvironment = function(e) {
            window.GpxHost = e.host,
            window.Module = e.module,
            window.LoaderXhr = class {
                constructor(t, n) {
                    !async function(e, t, n) {
                        const r = "" === n.responseType ? "text" : n.responseType;
                        try {
                            if ("json" === r)
                                throw new Error("Unspported response type 'json'");
                            if ("POST" === n.method)
                                throw new Error("Unspported method 'POST'");
                            const i = await e.loadResource(t, r, (e=>{
                                n.progress && n.progress(100, e)
                            }
                            ));
                            n.success && n.success(i, "http")
                        } catch (r) {
                            const i = "ERR! Can't download " + t + ", status: " + r.status + ", context: " + r.message;
                            throw n.fail && n.fail(t, r.statu, r.message),
                            e.log(i),
                            r
                        }
                    }(e, t, n)
                }
            }
            ,
            window.LoaderXhrData = {}
        }
        ,
        n.initLegacyModuleFunctions = function(e) {
            if (e.module.loadFile = r.bind(e.module, e),
            e.module.loadResource = i.bind(e.module, e),
            void 0 === e.module.FS) {
                const t = ["createPath", "createPreloadedFile", "createDataFile", "cwd", "chdir", "createLazyFile", "createDevice", "writeFile", "unlink"];
                e.module.FS = {};
                for (const n of t)
                    e.module.FS[n] = (...t)=>e.module["FS_" + n](...t)
            }
        }
    }
    , {
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    114: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.Exceptions = void 0;
        const i = "gpx_exceptions_"
          , o = "gpx_exceptions_delayed";
        n.Exceptions = class {
            log(...e) {
                console.log(...e)
            }
            constructor(e, t, n) {
                r(this, "exceptions", {}),
                r(this, "pushIntervalId", 0),
                r(this, "endpoint", void 0),
                r(this, "projectInfo", void 0),
                r(this, "storage", void 0),
                r(this, "runtimeInfo", void 0),
                this.endpoint = e.exceptions,
                this.storage = t,
                this.log = n,
                this.projectInfo = this.getProjectInfo(e),
                this.runtimeInfo = {
                    mainReady: !1
                },
                this.caniuseExceptions() && (window.addEventListener("error", this.onErrorEvent.bind(this)),
                this.exceptions = this.loadDelayedExceptionsFromStorage(),
                this.schedulePushExceptions())
            }
            async pushError(e) {
                var t, n;
                if (!this.caniuseExceptions())
                    return;
                const r = {
                    url: window.location.href,
                    lineNumber: 1,
                    columnNumber: 1,
                    message: e.name + " " + e.message,
                    stack: null !== (t = e.stack) && void 0 !== t ? t : "Error without stack"
                }
                  , i = await this.getExceptionInfo(r);
                i.error.stack = null === (n = e.stack) || void 0 === n ? void 0 : n.substring(0, 65536),
                this.pushException(i)
            }
            async push(e) {
                if (0 !== e.length && this.caniuseExceptions()) {
                    for (const n of e) {
                        var t;
                        const e = await this.getExceptionInfo({
                            url: window.location.href,
                            lineNumber: 1,
                            columnNumber: 1,
                            message: n.name + ":" + n.message,
                            stack: null !== (t = n.stack) && void 0 !== t ? t : "Errors without stack"
                        });
                        this.existInStorage(e) || (this.exceptions[e.hashCode] = e,
                        this.saveExceptionToStorage(e))
                    }
                    0 !== Object.keys(this.exceptions).length && this.tryPushExceptionsImmediately()
                }
            }
            pushException(e) {
                this.existInStorage(e) || (this.exceptions[e.hashCode] = e,
                this.saveExceptionToStorage(e),
                this.tryPushExceptionsImmediately())
            }
            caniuseExceptions() {
                try {
                    return void 0 !== this.endpoint && void 0 !== this.storage && "undefined" != typeof crypto && void 0 !== crypto.subtle
                } catch {
                    return !1
                }
            }
            getProjectInfo(e) {
                return void 0 !== e ? {
                    name: e.name,
                    projectVersion: e.version,
                    engineVersion: e.engineVersion,
                    symbolsVersion: e.symbols
                } : {
                    name: "unloaded-module",
                    projectVersion: "",
                    engineVersion: ""
                }
            }
            getExceptionInfo(e) {
                return new Promise((t=>{
                    const n = JSON.stringify({
                        projectInfo: this.projectInfo,
                        message: e.message
                    })
                      , r = (new TextEncoder).encode(n);
                    crypto.subtle.digest("SHA-256", r).then((n=>{
                        var r;
                        const i = (new TextDecoder).decode(n);
                        let o = "";
                        for (let e = 0; e < i.length; e++)
                            o += i.charCodeAt(e).toString(16);
                        t({
                            hashCode: o.toUpperCase(),
                            error: {
                                message: e.message.toString().substring(0, 65536),
                                url: e.url,
                                lineNumber: e.lineNumber,
                                columnNumber: e.columnNumber,
                                stack: null === (r = e.stack) || void 0 === r ? void 0 : r.substring(0, 65536)
                            },
                            projectInfo: this.projectInfo,
                            runtimeInfo: this.runtimeInfo
                        })
                    }
                    )).catch((e=>{
                        this.log(e)
                    }
                    ))
                }
                ))
            }
            async onErrorEvent(e) {
                const t = {
                    url: e.filename,
                    lineNumber: e.lineno,
                    columnNumber: e.colno,
                    message: e.message,
                    stack: "ErrorEvent without stack"
                };
                if (void 0 !== e.error)
                    if (t.message += " Details: " + e.error.name + ":" + e.error.message,
                    void 0 !== e.error.stack)
                        t.stack = e.error.stack;
                    else {
                        const e = new Error;
                        t.stack = "[Faked stack] " + e.stack
                    }
                this.getExceptionInfo(t).then(this.pushException.bind(this))
            }
            tryPushExceptionsImmediately() {
                0 === this.pushIntervalId && (this.schedulePushExceptions(),
                this.pushExceptions())
            }
            schedulePushExceptions() {
                0 !== Object.keys(this.exceptions).length && 0 === this.pushIntervalId && (this.pushIntervalId = setInterval(this.pushExceptions.bind(this), 3e4))
            }
            pushExceptions() {
                const e = Object.keys(this.exceptions);
                if (0 === e.length)
                    return void this.log("WARN! PUSH EXCEPTIONS(0) - Ok");
                const t = JSON.stringify({
                    exceptions: this.exceptions,
                    systemInfo: window.GpxHost
                })
                  , n = new XMLHttpRequest;
                n.open("POST", this.endpoint),
                n.setRequestHeader("Content-type", "application/json"),
                n.send(t),
                n.onreadystatechange = t=>{
                    4 === n.readyState && (200 !== n.status ? this.log("ERR! CAN'T UPLOAD EXCEPTIONS ON SERVER: ".concat(n.responseText)) : this.log("WARN! PUSH EXCEPTIONS(".concat(e.length, ") - Ok")),
                    this.removeSentExceptionsFromDelayed(e),
                    e.map((e=>{
                        delete this.exceptions[e]
                    }
                    )))
                }
            }
            existInStorage(e) {
                const t = i + e.hashCode;
                return null !== this.storage.getItem(t)
            }
            loadDelayedExceptionsFromStorage() {
                const e = {}
                  , t = this.storage.getItem(o);
                if (!t)
                    return e;
                const n = JSON.parse(t);
                for (const t of n) {
                    const n = this.storage.getItem(i + t);
                    if (!n)
                        continue;
                    const r = JSON.parse(n);
                    e[r.hashCode] = r
                }
                return e
            }
            saveExceptionToStorage(e) {
                const t = i + e.hashCode;
                this.storage.setItem(t, JSON.stringify(e));
                const n = this.storage.getItem(o)
                  , r = n ? JSON.parse(n) : [];
                r.length > 64 ? this.log("ERR! DELAYED EXCEPTIONS HAS EXCEED THE MAXIMUM ALLOWED: ".concat(64)) : (r.push(e.hashCode),
                this.storage.setItem(o, JSON.stringify(r)))
            }
            removeSentExceptionsFromDelayed(e) {
                const t = this.storage.getItem(o)
                  , n = (t ? JSON.parse(t) : []).filter((t=>-1 === e.indexOf(t)));
                this.storage.setItem(o, JSON.stringify(n))
            }
        }
    }
    , {
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    115: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.loadingInfo = void 0;
        const i = "\n        #loading {\n            position: absolute;\n            left: 0;\n            top: 0;\n            bottom: 0;\n            right: 0;\n            z-index: 999;\n            display: flex;\n            flex-direction: column;\n            align-content: center;\n            justify-content: center;\n        }\n        \n        .loading-spinner {\n            position:relative;\n            margin:auto;\n            width: 250px;\n            height: 250px;\n            display: inline-block;\n            overflow: hidden;\n            background: none;\n        }\n\n        .loading-spinner-items {\n            position: absolute;\n            top: 50px;\n            bottom: 50px;\n            left: 50px;\n            right: 50px;\n            width: 150px;\n            height: 150px;\n            transform: translateZ(0) scale(1);\n            backface-visibility: hidden;\n            transform-origin: 0 0;\n        }\n        .loading-spinner-items div { \n            box-sizing: content-box; \n        }\n        @keyframes loading-spinner-items {\n            0% { opacity: 1 }\n            100% { opacity: 0 }\n        }\n        .loading-spinner-items div {\n            left: 62.5px;\n            top: 2.5px;\n            position: absolute;\n            animation: loading-spinner-items linear 0.9174311926605504s infinite;\n            width: 25px;\n            height: 25px;\n            border-radius: 6.75px / 6.75px;\n            transform-origin: 12.5px 72.5px;\n        }\n        .loading-spinner-items .loading-spinner-item-1 {\n            transform: rotate(0deg);\n            animation-delay: -0.8340283569641368s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-2 {\n            transform: rotate(32.72727272727273deg);\n            animation-delay: -0.7506255212677231s;\n            background: #00d2d9;\n        }\n        .loading-spinner-items .loading-spinner-item-3 {\n            transform: rotate(65.45454545454545deg);\n            animation-delay: -0.6672226855713094s;\n            background: #007dff;\n        }\n        .loading-spinner-items .loading-spinner-item-4 {\n            transform: rotate(98.18181818181819deg);\n            animation-delay: -0.5838198498748958s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-5 {\n            transform: rotate(130.9090909090909deg);\n            animation-delay: -0.5004170141784821s;\n            background: #00d2d9;\n        }\n        .loading-spinner-items .loading-spinner-item-6 {\n            transform: rotate(163.63636363636363deg);\n            animation-delay: -0.4170141784820684s;\n            background: #007dff;\n        }\n        .loading-spinner-items .loading-spinner-item-7 {\n            transform: rotate(196.36363636363637deg);\n            animation-delay: -0.3336113427856547s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-8 {\n            transform: rotate(229.0909090909091deg);\n            animation-delay: -0.25020850708924103s;\n            background: #00d2d9;\n        }\n        .loading-spinner-items .loading-spinner-item-9 {\n            transform: rotate(261.8181818181818deg);\n            animation-delay: -0.16680567139282734s;\n            background: #007dff;\n        }\n        .loading-spinner-items .loading-spinner-item-10 {\n            transform: rotate(294.54545454545456deg);\n            animation-delay: -0.08340283569641367s;\n            background: #00e579;\n        }\n        .loading-spinner-items .loading-spinner-item-11 {\n            transform: rotate(327.27272727272725deg);\n            animation-delay: 0s;\n            background: #00d2d9;\n        }\n\n        .loading-progress {\n            position: absolute;\n            top: 50px;\n            bottom: 50px;\n            left: 50px;\n            right: 50px;\n            width: 150px;\n            height: 150px;\n            margin-left: 6px;\n            margin-top: 2px;\n            display: flex;\n            flex-direction: column;\n            align-content: center;\n            justify-content: center;\n        }\n\n        .running-progress {\n            position: absolute;\n            top: 200px;\n            width: 100%;\n            height: 50px;\n            display: flex;\n            flex-direction: column;\n            align-content: center;\n            justify-content: center;\n        }\n\n        .loading-text {\n            color: white;\n            display: block;\n            text-align: center;\n            font-weight: bold;\n            text-shadow: -1px 0 7px rgba(6, 29, 98, 0.30), \n                         0 1px 7px rgba(6, 29, 98, 0.30), \n                         1px 0 7px rgba(6, 29, 98, 0.30), \n                         0 -1px 7px rgba(6, 29, 98, 0.30);\n        }\n        .loading-progress span {\n            font-size: 24px;\n        }\n        .running-progress span {\n            font-size: 16px;\n        }\n"
          , o = '\n        <div class="loading-spinner">\n            <div class="loading-spinner-items">\n                <div class="loading-spinner-item-1"></div>\n                <div class="loading-spinner-item-2"></div>\n                <div class="loading-spinner-item-3"></div>\n                <div class="loading-spinner-item-4"></div>\n                <div class="loading-spinner-item-5"></div>\n                <div class="loading-spinner-item-6"></div>\n                <div class="loading-spinner-item-7"></div>\n                <div class="loading-spinner-item-8"></div>\n                <div class="loading-spinner-item-9"></div>\n                <div class="loading-spinner-item-10"></div>\n                <div class="loading-spinner-item-11"></div>\n            </div>\n            <div class="loading-progress">\n                <span class="loading-text"></span>\n            </div>\n            <div class="running-progress">\n                <span class="loading-text"></span>\n            </div>\n        </div>\n';
        n.loadingInfo = new class {
            constructor() {
                r(this, "defaultDuration", 3e4),
                r(this, "loading", void 0),
                r(this, "loadingText", void 0),
                r(this, "runningText", void 0),
                r(this, "hideTimeout", 500),
                r(this, "reportedPercent", 0),
                r(this, "intervalId", -1),
                r(this, "startedAt", void 0),
                r(this, "stoppedAt", void 0),
                r(this, "phrasesTimes", 4),
                r(this, "phrases", ["Checking data", "Checking runtime", "Initializing services", "Preparing the environment", "Starting the game"]);
                const e = document.head || document.getElementsByTagName("head")[0]
                  , t = document.createElement("style");
                t.type = "text/css",
                t.styleSheet ? t.styleSheet.cssText = i : t.appendChild(document.createTextNode(i)),
                e.appendChild(t),
                this.loading = document.createElement("div"),
                this.loading.id = "loading",
                this.loading.innerHTML = o,
                document.body.appendChild(this.loading),
                this.loadingText = document.querySelector(".loading-progress span"),
                this.runningText = document.querySelector(".running-progress span")
            }
            updateProgress(e) {
                ++this.reportedPercent;
                const t = Math.round((Date.now() - this.startedAt) / e);
                this.reportedPercent = Math.max(this.reportedPercent, t),
                this.reportedPercent < 100 ? this.loadingText.innerHTML = this.reportedPercent + "%" : (this.loadingText.innerHTML = "99%",
                this.reportedPercent = 0,
                clearInterval(this.intervalId),
                this.intervalId = setInterval((()=>this.updateText()), 1e3))
            }
            updateText() {
                this.loadingText.innerHTML = "";
                const e = Math.min(Math.trunc(this.reportedPercent / this.phrasesTimes), this.phrases.length - 1);
                let t = this.phrases[e] + "&nbsp;";
                const n = this.reportedPercent % this.phrasesTimes;
                for (let e = 0; e < this.phrasesTimes; ++e)
                    t += e < n ? "." : "&nbsp;";
                this.runningText.innerHTML = t,
                ++this.reportedPercent
            }
            start(e) {
                this.loading.style.display = "",
                this.loadingText.innerHTML = "",
                this.runningText.innerHTML = "",
                this.reportedPercent = 0,
                this.startedAt = Date.now(),
                this.stoppedAt = 0;
                const t = e <= 0 ? this.defaultDuration / 100 : Math.min(e, this.defaultDuration) / 100;
                this.updateProgress(t),
                this.intervalId = setInterval((()=>this.updateProgress(t)), t)
            }
            stop() {
                this.stoppedAt = Date.now() + this.hideTimeout,
                setTimeout((()=>{
                    this.loadingText.innerHTML = "",
                    this.runningText.innerHTML = "",
                    clearInterval(this.intervalId),
                    this.loading.style.display = "none"
                }
                ), this.hideTimeout)
            }
            getDuration() {
                return this.startedAt > 0 && this.stoppedAt > 0 && this.startedAt < this.stoppedAt ? this.stoppedAt - this.startedAt : null
            }
        }
    }
    , {}],
    116: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.logcalls = void 0;
        let r = 0;
        n.logcalls = {
            init: (e,t,n)=>{
                const r = e.env || {};
                if (void 0 === n.logcalls) {
                    const e = ()=>{}
                    ;
                    return r.logcall = e,
                    r.wipedcall = e,
                    void (t.wipedcall = e)
                }
                const o = Date.now() + "." + 1e3 * Math.random()
                  , s = n.name + "@" + n.symbols + function(e) {
                    if (e && e.length > 0)
                        return "." + e;
                    return ""
                }(n.engineVersion);
                i(r, t, n.logcalls, o, s)
            }
        };
        const i = (e,t,n,i,o)=>{
            const s = n + "/put?seed=" + i + "&game=" + o
              , a = {};
            let l = 0
              , c = null
              , u = {};
            const d = ()=>{
                !function(e, t, n) {
                    const i = Object.keys(n).length;
                    if (0 === i || r === i)
                        return void e.log("WARN! PUSHCALLS(0) - Ok");
                    r = i,
                    e.log("WARN! PUSHCALLS(".concat(r, ") - PLEASE WAIT"));
                    const o = JSON.stringify(n)
                      , s = new XMLHttpRequest;
                    s.open("POST", t),
                    s.setRequestHeader("Content-type", "application/json"),
                    s.send(o),
                    s.onreadystatechange = t=>{
                        4 === s.readyState && 200 === s.status && e.log("WARN! PUSHCALLS(".concat(r, ") - Ok, new - ") + JSON.parse(s.responseText).added)
                    }
                }(t, s, a)
            }
            ;
            (function(e, t) {
                return e.log("WARN! DEBUG RUNTIME! DONWLOADING CALL STATS"),
                new Promise((e=>{
                    const n = new XMLHttpRequest;
                    n.open("GET", t),
                    n.onreadystatechange = t=>{
                        if (4 === n.readyState && 200 === n.status) {
                            const t = JSON.parse(n.responseText).json;
                            delete t.buckets,
                            e(t)
                        }
                    }
                    ,
                    n.send()
                }
                ))
            }
            )(t, n + "/get?game=" + o).then((e=>{
                c = e,
                g(),
                t.log("DEBUG RUNTIME READY!"),
                d(),
                setInterval(d, 15e3)
            }
            ));
            const p = e=>{
                null != c ? e in c || (a[e] = a[e] + 1 || 1) : u[e] = u[e] + 1 || 1
            }
              , f = e=>{
                0 === l || h(e) || (clearInterval(l),
                l = 0,
                t.log("ERR! Profile bundle doesn't supported on backend side.\nPUSHCALLS will not be called!")),
                p(e),
                t.log("ERR! wasmName: ".concat(e, " was wiped out"))
            }
            ;
            e.logcall = p,
            e.wipedcall = f,
            t.wipedcall = f;
            const h = e=>"number" == typeof e || "string" == typeof e && /^\d+$/.test(e)
              , g = ()=>{
                if (null != u) {
                    let e = 0;
                    Object.keys(u).forEach((t=>{
                        const n = Number.parseInt(t, 10);
                        n in c || (a[n] = u[n],
                        e++)
                    }
                    )),
                    t.log("ADDED ".concat(e, " DEFFERED CALLS")),
                    u = null
                }
            }
        }
    }
    , {}],
    117: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.Metrics = void 0;
        n.Metrics = class {
            constructor(e) {
                r(this, "startedAt", Date.now()),
                r(this, "metrics", {}),
                r(this, "localMetrics", {}),
                r(this, "endpoint", void 0),
                r(this, "projectInfo", void 0),
                this.endpoint = e.metrics,
                this.projectInfo = {
                    name: e.name,
                    version: e.version,
                    symbols: e.symbols,
                    engineVersion: e.engineVersion
                }
            }
            push(e, t, n="") {
                this.metrics[e] = {
                    value: t,
                    unit: n
                }
            }
            pushLocal(e, t, n="") {
                this.push(e, t, n),
                this.localMetrics[e] = 1
            }
            pushTiming(e, t) {
                this.push(e, t, "ms")
            }
            pushLocalTiming(e, t) {
                this.pushTiming(e, t),
                this.localMetrics[e] = 1
            }
            send(e) {
                return new Promise(((t,n)=>{
                    if (!this.endpoint)
                        return void n(new Error("Forbidden to send metrics from this host"));
                    const r = {
                        browser: e.systemInfo.browser,
                        browserVersion: e.systemInfo.browserVersion,
                        mobile: e.systemInfo.mobile,
                        os: e.systemInfo.os,
                        osVersion: e.systemInfo.osVersion,
                        gpu: e.systemInfo.gpu,
                        deviceModel: e.systemInfo.deviceModel,
                        useCache: e.indexedDbSupported
                    }
                      , i = {};
                    for (const e of Object.keys(this.metrics)) {
                        const t = this.metrics[e];
                        void 0 === this.localMetrics[e] && t.value && (i[e] = t.value)
                    }
                    const o = JSON.stringify({
                        metrics: i,
                        projectInfo: this.projectInfo,
                        systemInfo: r
                    })
                      , s = new XMLHttpRequest;
                    s.open("POST", this.endpoint, !0),
                    s.setRequestHeader("Content-type", "application/json"),
                    "function" == typeof s.addEventListener && s.addEventListener("error", (e=>{
                        n(new Error("Invalid xhr response. Code: " + s.status + "status: " + s.statusText + " url: " + this.endpoint))
                    }
                    )),
                    s.onreadystatechange = ()=>{
                        if (4 === s.readyState) {
                            if (200 !== s.status)
                                return void n(new Error("Invalid xhr response. Code: " + s.status + "status: " + s.responseText + " url: " + this.endpoint));
                            t("WARN! PUSH METRICS - OK")
                        }
                    }
                    //,
                    //s.send(o)
                }
                ))
            }
            report(e, t) {
                let n = "\n\tLocation: ".concat(location.href);
                n += "\n\tProject: ".concat(this.projectInfo.name),
                n += "@".concat(this.projectInfo.version, ".").concat(this.projectInfo.engineVersion, "\n");
                const r = parseFloat(e.argv[0])
                  , i = parseFloat(e.argv[1]);
                if (0 !== r && 0 !== i) {
                    const t = r / e.canvas.width
                      , o = i / e.canvas.height
                      , s = e=>Math.round(100 * e) / 100;
                    n += "\tCanvas: ".concat(s(r), "x").concat(s(i), " (").concat(s(r / i), "), dpi: ").concat(s(t) + "x" + s(o), "\n")
                }
                n += "\n\tHost: ".concat(JSON.stringify(t, null, "\t"), "\n"),
                n += "\n\tMetrics:\n";
                for (const [e,t] of Object.entries(this.metrics))
                    void 0 === this.localMetrics[e] && (n += "\t\t".concat(e, ": ").concat(t.value, " ").concat(t.unit, "\n"));
                return n
            }
        }
    }
    , {
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    118: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.getRenderBufferSize = void 0;
        n.getRenderBufferSize = function(e) {
            if ("unity" === e.config.origin)
                return e.log("WARN! Unity does not support devicePixelRatio != 1, forcing to full width & height"),
                {
                    dpi: 1,
                    width: e.targetWidth,
                    height: e.targetHeight
                };
            const t = Math.min(window.devicePixelRatio, 2)
              , n = Math.max(e.targetWidth, e.targetHeight) * t;
            if (n > 960) {
                const r = 960 / n
                  , i = e.targetWidth * r
                  , o = e.targetHeight * r;
                return e.log("WARN! Canvas size is too big, resized from ".concat(e.targetWidth * t, "x").concat(e.targetHeight * t) + " to ".concat(i * t, "x").concat(o * t)),
                {
                    dpi: t,
                    width: i,
                    height: o
                }
            }
            return {
                dpi: t,
                width: e.targetWidth,
                height: e.targetHeight
            }
        }
    }
    , {}],
    119: [function(require, module, exports) {
        "use strict";
        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        require("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
        exports.SDK = void 0;
        const storage_1 = require("./storage/storage")
          , wasm_1 = require("./wasm")
          , webgl_1 = require("./webgl")
          , webgl_2 = require("./wrappers/webgl")
          , deprecated_1 = require("./deprecated")
          , compression_1 = require("./compression")
          , aspect_1 = require("./aspect")
          , render_buffer_size_1 = require("./render-buffer-size")
          , arl_1 = require("./wrappers/arl")
          , logcalls_1 = require("./logcalls")
          , split_1 = require("./split")
          , exceptions_1 = require("./exceptions")
          , metrics_1 = require("./metrics")
          , loading_info_1 = require("./loading-info")
          , unity_requests_1 = require("./wrappers/unity-requests");
        class SDK {
            constructor(e) {
                var t;
                switch (_defineProperty(this, "tinyLoader", void 0),
                _defineProperty(this, "config", void 0),
                _defineProperty(this, "host", void 0),
                _defineProperty(this, "storage", void 0),
                _defineProperty(this, "canvas", void 0),
                _defineProperty(this, "GL", void 0),
                _defineProperty(this, "exceptions", void 0),
                _defineProperty(this, "metrics", void 0),
                _defineProperty(this, "targetAspect", void 0),
                _defineProperty(this, "targetWidth", void 0),
                _defineProperty(this, "targetHeight", void 0),
                _defineProperty(this, "module", {}),
                _defineProperty(this, "loadResourceFn", void 0),
                _defineProperty(this, "tinyLoaderLoadResourceCopy", void 0),
                this.tinyLoader = e,
                this.config = e.config,
                this.host = e.host,
                this.storage = new storage_1.LStorage(null === (t = window.GamePix) || void 0 === t ? void 0 : t.localStorage,this.config.name.toLowerCase() + "."),
                this.log = this.log.bind(this),
                this.metrics = new metrics_1.Metrics(this.config),
                this.exceptions = new exceptions_1.Exceptions(this.config,this.storage,this.log),
                this.loadResourceFn = this.tinyLoader.loadResource.bind(this.tinyLoader),
                this.loadResource = this.loadResource.bind(this),
                this.tinyLoaderLoadResourceCopy = this.tinyLoader.loadResource,
                this.tinyLoader.loadResource = async()=>{
                    throw new Error("Do not use tinyLoader.loadResource use sdk.loadResource instead")
                }
                ,
                this.host.wasmSupportLevel()) {
                case "not-supported":
                    throw new Error("Web assembly not supported, can't start the game");
                case "partial":
                    "ru" === this.host.systemInfo.language ? alert("Вы используете устаревшую версию браузера. Пожалуйста обновите ваш браузер.\nМы не гарантируем корректную работу игры.") : alert("You are using an outdated version of browser. Please, update your browser.\nWe do not guarantee the correct work of the game.")
                }
                if (this.canvas = document.getElementById("canvas"),
                null === this.canvas)
                    throw new Error("Can't create sdk instance without canvas#canvas");
                this.targetAspect = (0,
                aspect_1.getAspectRatio)(this.config.runtime.aspect, this.config.runtime.orientation, window),
                this.resizeCanvas = this.resizeCanvas.bind(this),
                this.resizeCanvas(),
                window.addEventListener("resize", this.resizeCanvas);
                const n = this.storage.getItem("gpxRunTime");
                let r = loading_info_1.loadingInfo.defaultDuration;
                if (null !== n)
                    try {
                        r = Number.parseInt(n, 10) || r
                    } catch (e) {
                        this.log("ERR! Can't parse loading time from local storage", e)
                    }
                loading_info_1.loadingInfo.start(r)
            }
            async init() {
                var e;
                this.GL = await (0,
                webgl_1.getWebGLContext)(this.log, this.canvas, this.config, null === (e = window.GamePix) || void 0 === e ? void 0 : e.maxWebGLVersion),
                this.host.systemInfo.gpu = this.host.gpuNameOf(this.GL.context),
                this.host.systemInfo.hasWebGL = this.GL.version,
                (0,
                deprecated_1.initLegacyEnvironment)(this)
            }
            exit() {
                if (window.removeEventListener("resize", this.resizeCanvas),
                this.tinyLoader.loadResource = this.tinyLoaderLoadResourceCopy,
                delete this.tinyLoaderLoadResourceCopy,
                "function" == typeof this.module._forceExit)
                    try {
                        this.module._forceExit()
                    } catch (e) {
                        this.log("WARN! forceExit", e)
                    }
            }
            log(...e) {
                this.tinyLoader.log(...e)
            }
            async loadResource(e, t, n) {
                return (0,
                compression_1.canUseCompressionForUrl)(e) && (e = await (0,
                compression_1.changeToCompressedUrl)(this, e)),
                this.loadResourceFn(e, t, n)
            }
            async load(e="wbin", t="bin.data") {
                delete this.load,
                this.initModule(this.module);
                let n = this.loadFiles(e, t);
                const r = this.instantiateData(n);
                await this.instantiateModule(n, r),
                n = void 0;
                const i = window.canRunLowTasks;
                "boolean" == typeof i && this.module._testkit_async_setCanRunLowTasks(i),
                this.runModule()
            }
            initModule(e) {
                var t, n;
                return "function" != typeof e.log && (e.log = this.log.bind(this)),
                void 0 === e.ls && (e.ls = this.storage),
                void 0 === e.loading && (e.loading = e=>{
                    this.log("Loading: " + e + "%")
                }
                ),
                e.onresize = this.resizeCanvas.bind(this),
                e.mainReady = this.mainReady.bind(this),
                e.print = this.module.log,
                e.printErr = this.module.log,
                e.setStatus = ()=>{}
                ,
                e.canvas = this.canvas,
                e.setInterval = setInterval.bind(window),
                e.clearInterval = clearInterval.bind(window),
                e.setTimeout = setTimeout.bind(window),
                e.clearTimeout = clearTimeout.bind(window),
                e.preRun = null !== (t = e.preRun) && void 0 !== t ? t : [],
                e.postRun = null !== (n = e.postRun) && void 0 !== n ? n : [],
                e.webglContextAttributes = this.host.systemInfo.webglContextAttributes,
                e.noInitialRun = !0,
                e.noImageDecoding = !0,
                e.noAudioDecoding = !0,
                webgl_2.WebGLWrapper.applyToContext(this.GL.context, e, "unity" === this.config.origin, this.GL.version),
                e.stringToBuffer = (e,t)=>{
                    const n = this.module.lengthBytesUTF8(e) + 1
                      , r = this.module._malloc(n);
                    this.module.stringToUTF8(e, r, n),
                    t(r),
                    this.module._free(r)
                }
                ,
                e.idle = ()=>{
                    if (void 0 !== e._image_direct2_idle)
                        return e._image_direct2_idle()
                }
                ,
                (0,
                deprecated_1.initLegacyModuleFunctions)(this),
                e
            }
            loadFiles(e, t) {
                const n = t + "._.js"
                  , r = t + ".js"
                  , i = e + "._.js"
                  , o = e + ".js";
                let s = 0
                  , a = 0
                  , l = -1;
                const c = ()=>{
                    const e = Math.max(0, Math.min(100, Math.round((a + s) / 2)));
                    void 0 !== this.module.loading && l < e && (this.module.loading(e),
                    l = e)
                }
                ;
                return {
                    wasmFile: i,
                    data: this.loadResource(n, "arraybuffer", (e=>{
                        s = e,
                        c()
                    }
                    )),
                    dataJs: this.loadResource(r, "text"),
                    wasm: this.loadResource(i, this.host.wasmStreaming ? "response" : "arraybuffer", (e=>{
                        a = e,
                        c()
                    }
                    )),
                    wasmJs: this.loadResource(o, "text")
                }
            }
            async instantiateData(files) {
                const data = await files.data
                  , dataJs = await files.dataJs;
                this.module.getPreloadedPackage = (e,t)=>data;
                const Module = this.module;
                eval(dataJs)
            }
            instantiateModule(e, t) {
                return new Promise(((n,r)=>{
                    this.module.onRuntimeInitialized = n,
                    this.module.instantiateWasm = async(n,i)=>{
                        try {
                            return await this.instantiateWasm(e, n, (async(e,n)=>{
                                try {
                                    return await t,
                                    i(e, n)
                                } catch (e) {
                                    throw r(e),
                                    e
                                }
                            }
                            ))
                        } catch (e) {
                            throw this.log("ERR! Unable to instantiate wasm, will not run"),
                            this.log(JSON.stringify(e)),
                            r(e),
                            e
                        }
                    }
                    ,
                    e.wasmJs.then((e=>{
                        new Function(["Module"],e)(this.module)
                    }
                    )).catch(r)
                }
                ))
            }
            async initJSEnvironment(e) {
                if ("unity" !== this.config.origin)
                    return;
                unity_requests_1.unityRequestsWrapper.init(e, this.module),
                arl_1.arl.init(e, this.module),
                logcalls_1.logcalls.init(e, this.module, this.config);
                const t = new split_1.Split(this);
                await t.init(e)
            }
            async instantiateWasm(e, t, n) {
                let r;
                await this.initJSEnvironment(t);
                let i = await e.wasm;
                try {
                    r = await (0,
                    wasm_1.wasmInstantiate)(this, i, t)
                } catch (n) {
                    if (!(i instanceof Response))
                        throw n;
                    i = await this.loadResource(e.wasmFile, "arraybuffer"),
                    r = await (0,
                    wasm_1.wasmInstantiate)(this, i, t)
                }
                return this.metrics.pushTiming("compileTime", r.compileTime),
                this.metrics.pushTiming("instantiateTime", r.instantiateTime),
                this.metrics.push("instantiateStream", "stream" === r.instantiateType ? 1 : 0),
                n(r.instance, r.wasmModule)
            }
            runModule() {
                this.module.progress = ()=>{}
                ,
                this.module.run();
                const e = (...e)=>{
                    const {dpi: t, width: n, height: r} = (0,
                    render_buffer_size_1.getRenderBufferSize)(this);
                    this.module.dpi = t,
                    this.module.width = n,
                    this.module.height = r,
                    this.module.devicePixelRatio = t,
                    this.host.systemInfo.width = n * t,
                    this.host.systemInfo.height = r * t;
                    const i = [this.host.systemInfo.width + "", this.host.systemInfo.height + ""];
                    for (const t of e)
                        i.push(t + "");
                    this.module.argv = i,
                    this.module.canvas.width = this.host.systemInfo.width,
                    this.module.canvas.height = this.host.systemInfo.height,
                    this.module.canvas.style.width = this.host.systemInfo.width + "px",
                    this.module.canvas.style.height = this.host.systemInfo.height + "px";
                    try {
                        this.log("main(" + JSON.stringify(i) + ")")
                    } catch (e) {
                        this.log("main(", i, ")")
                    }
                    this.module.callMain(i)
                }
                ;
                if (this.module.ready) {
                    const t = (...t)=>setTimeout((()=>{
                        e.apply(this, t)
                    }
                    ), 0);
                    return this.module.ready(t)
                }
                return setTimeout(e, 0)
            }
            async mainReady(e, t, n, r, i, o, s) {
                this.log("mainReady"),
                loading_info_1.loadingInfo.stop();
                const a = loading_info_1.loadingInfo.getDuration();
                null !== a && this.storage.setItem("gpxRunTime", a.toString()),
                this.metrics.pushTiming("runTime", Date.now() - this.metrics.startedAt);
                const l = this.storage.getItem("gpxRuns")
                  , c = null === l ? 1 : Number.parseInt(l, 10) + 1;
                this.storage.setItem("gpxRuns", c.toString()),
                this.metrics.push("runs", c),
                this.metrics.push("gamepixSdkUndefinedMain", void 0 === window.GamePix ? 1 : 0),
                this.exceptions.runtimeInfo.mainReady = !0,
                this.exceptions.runtimeInfo.runs = c,
                this.log(this.metrics.report(this.module, this.host));
                try {
                    const e = await this.metrics.send(this.host);
                    this.log(e)
                } catch (e) {
                    this.log("ERR! " + e)
                }
            }
            resizeCanvas() {
                const e = this.canvas
                  , [t,n] = (0,
                aspect_1.getSizeWithAspectRatio)(window.innerWidth, window.innerHeight, this.targetAspect);
                e.style.position = "relative",
                e.style.top = window.innerHeight / 2 + "px",
                e.style.left = window.innerWidth / 2 + "px",
                e.style.marginTop = n / 2 * -1 + "px",
                e.style.marginLeft = t / 2 * -1 + "px",
                e.style.width = t + "px",
                e.style.height = n + "px",
                this.targetWidth = t,
                this.targetHeight = n,
                window.scroll(0, 1)
            }
        }
        exports.SDK = SDK;
        const globalTinyLoader = window.tinyLoader;
        void 0 !== globalTinyLoader && (globalTinyLoader.run.push((async()=>{
            const e = new SDK(globalTinyLoader);
            await e.init(),
            window.sdk = e
        }
        )),
        globalTinyLoader.postRun.push((async()=>{
            void 0 !== globalTinyLoader.errors && (window.sdk.exceptions.push(globalTinyLoader.errors),
            delete globalTinyLoader.errors)
        }
        )),
        globalTinyLoader.stop.push((async()=>{
            window.sdk.exit(),
            delete window.sdk
        }
        )))
    }
    , {
        "./aspect": 111,
        "./compression": 112,
        "./deprecated": 113,
        "./exceptions": 114,
        "./loading-info": 115,
        "./logcalls": 116,
        "./metrics": 117,
        "./render-buffer-size": 118,
        "./split": 120,
        "./storage/storage": 122,
        "./wasm": 123,
        "./webgl": 124,
        "./wrappers/arl": 125,
        "./wrappers/unity-requests": 126,
        "./wrappers/webgl": 127,
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    120: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        e("core-js/modules/es.typed-array.uint8-array.js"),
        e("core-js/modules/es.typed-array.sort.js"),
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.Split = void 0;
        n.Split = class {
            constructor(e) {
                r(this, "splitBinaryPromise", void 0),
                r(this, "splitMetaPromise", void 0),
                r(this, "splitBinary", new Uint8Array(0)),
                r(this, "splitMeta", {}),
                r(this, "cache", {}),
                r(this, "internalModule", void 0),
                this.splitBinaryPromise = e.loadResource("wsplit._.js", "arraybuffer").then((e=>new Uint8Array(e))),
                this.splitMetaPromise = e.loadResource("wsplit.js", "text").then(JSON.parse),
                this.internalModule = e
            }
            async init(e) {
                try {
                    [this.splitBinary,this.splitMeta] = await Promise.all([this.splitBinaryPromise, this.splitMetaPromise])
                } catch (e) {
                    return void this.internalModule.log("WARN! Can't load split wasm")
                }
                return e.placeholder = new Proxy(this,{
                    get: function(e, t) {
                        return e.splitModuleHandler(t)
                    }
                }),
                e
            }
            splitModuleHandler(e) {
                const t = this.internalModule.module;
                return (...n)=>{
                    if (void 0 !== this.cache[e])
                        return void this.cache[e].apply(null, n);
                    t.wipedcall(e);
                    const [r,i] = this.splitMeta[e]
                      , o = this.splitBinary.subarray(r, r + i)
                      , s = new WebAssembly.Module(o)
                      , a = new WebAssembly.Instance(s,{
                        primary: t.asm
                    });
                    return this.cache[e] = a.exports.fn,
                    this.cache[e].apply(null, n)
                }
            }
        }
    }
    , {
        "core-js/modules/es.typed-array.sort.js": 108,
        "core-js/modules/es.typed-array.uint8-array.js": 109,
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    121: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.MemStorage = void 0;
        n.MemStorage = class {
            constructor() {
                r(this, "length", 0),
                r(this, "storage", {})
            }
            setItem(e, t) {
                this.storage[e] = t,
                this.length = Object.keys(this.storage).length
            }
            getItem(e) {
                const t = this.storage[e];
                return void 0 === t ? null : t
            }
            removeItem(e) {
                delete this.storage[e],
                this.length = Object.keys(this.storage).length
            }
            key(e) {
                const t = Object.keys(this.storage);
                return void 0 === t[e] ? null : t[e]
            }
            clear() {
                this.length = 0,
                this.storage = {}
            }
        }
    }
    , {}],
    122: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.LStorage = void 0;
        const i = e("./mem-storage");
        n.LStorage = class {
            constructor(e, t) {
                r(this, "backend", void 0),
                r(this, "length", void 0),
                r(this, "prefix", void 0),
                this.prefix = t;
                try {
                    this.backend = e || localStorage,
                    this.testBackend()
                } catch (e) {
                    this.backend = new i.MemStorage
                }
                this.length = this.backend.length,
                "function" == typeof this.backend.sync && (this.sync = e=>{
                    this.backend.sync(e)
                }
                )
            }
            testBackend() {
                const e = this.prefix + ".test.record";
                this.backend.setItem(e, "123");
                const t = this.backend.getItem(e);
                this.backend.removeItem(e);
                if (!("123" === t && null === this.backend.getItem(e)))
                    throw new Error("Storage backend is not working properly")
            }
            setLocalStoragePrefix(e) {
                this.prefix = e
            }
            clear() {
                if (!this.backend.length)
                    return;
                const e = [];
                for (let t = 0; t < this.backend.length; ++t) {
                    const n = this.backend.key(t);
                    n && n.startsWith(this.prefix) && e.push(n)
                }
                for (const t of e)
                    this.backend.removeItem(t);
                this.length = this.backend.length
            }
            key(e) {
                return this.backend.key(e)
            }
            setItem(e, t) {
                if (!t || void 0 === t.length || 0 === t.length)
                    return void this.writeStringToKey(e, "");
                let n = 0;
                for (; n < t.length; ) {
                    let r = t.substr(n, 1024);
                    n += r.length,
                    n < t.length && (r += "@"),
                    this.writeStringToKey(e, r),
                    e += "."
                }
            }
            getItem(e) {
                let t = this.readStringFromKey(e);
                if (null === t)
                    return null;
                if (0 === t.length)
                    return t;
                for (; "@" === t[t.length - 1]; ) {
                    t = t.substr(0, t.length - 1),
                    e += ".";
                    const n = this.readStringFromKey(e);
                    t += null === n ? "" : n
                }
                return t
            }
            removeItem(e) {
                this.backend.removeItem(this.prefix + e),
                this.length = this.backend.length
            }
            writeStringToKey(e, t) {
                this.backend.setItem(this.prefix + e, t),
                this.length = this.backend.length
            }
            readStringFromKey(e) {
                return this.backend.getItem(this.prefix + e)
            }
        }
    }
    , {
        "./mem-storage": 121,
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    123: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            e.log("Try instaniate WASM from buffer");
            const r = Date.now();
            return WebAssembly.compile(t).then((e=>{
                const t = Date.now() - r
                  , i = Date.now();
                return WebAssembly.instantiate(e, n).then((n=>({
                    wasmModule: e,
                    instance: n,
                    compileTime: t,
                    instantiateTime: Date.now() - i,
                    instantiateType: "array"
                })))
            }
            ))
        }
        function i(e, t) {
            const n = void 0 !== t ? "\tStreamingError:\t" + t.message : "";
            return {
                name: "wasm_instantiate_failed: " + e.name,
                message: e.message + n,
                stack: e.stack
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.wasmInstantiate = void 0,
        n.wasmInstantiate = async function(e, t, n) {
            if (t instanceof Response)
                try {
                    const r = await async function(e, t, n) {
                        e.log("Try instantiate WASM from stream");
                        const r = Date.now();
                        return WebAssembly.instantiateStreaming(t, n).then((e=>({
                            wasmModule: e.module,
                            instance: e.instance,
                            compileTime: 0,
                            instantiateTime: Date.now() - r,
                            instantiateType: "stream"
                        })))
                    }(e, t, n);
                    return r
                } catch (o) {
                    const s = function(e, t) {
                        var n;
                        const r = {};
                        null === (n = e.headers) || void 0 === n || n.forEach(((e,t)=>{
                            r[t] = e
                        }
                        ));
                        const i = {
                            sourceType: typeof e,
                            instanceOfResponse: e instanceof Response,
                            ok: e.ok,
                            status: e.status,
                            statusText: e.statusText,
                            type: e.type,
                            headers: r
                        };
                        return {
                            name: "wasm_instantiate_stream_failed: " + t.name,
                            message: t.message,
                            stack: "Details: " + JSON.stringify(i, null, 4) + "\nStack:\n" + t.stack
                        }
                    }(t, o);
                    try {
                        e.log("ERR! Can't instantiate WASM from stream:\n" + s.message + "\n" + s.stack);
                        const i = await r(e, await t.arrayBuffer(), n);
                        return await e.exceptions.pushError(s),
                        i
                    } catch (t) {
                        throw e.log("ERR! Can't instantiate WASM:\n" + t),
                        i(t, s)
                    }
                }
            else
                try {
                    return await r(e, t, n)
                } catch (t) {
                    throw e.log("ERR! Can't instantiate WASM:\n" + t.name),
                    i(t)
                }
        }
    }
    , {}],
    124: [function(e, t, n) {
        "use strict";
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.getWebGLContext = void 0;
        const r = {
            2: {
                type: "webgl2",
                description: "WebGL 2.0",
                majorVersion: 2
            },
            1: {
                type: "webgl",
                description: "WebGL 1.0",
                majorVersion: 1
            },
            0: {
                type: "experimental-webgl",
                description: "WebGL 1.0 FALLBACK",
                majorVersion: 1
            }
        }
          , i = "webgl-factory.v".concat(3, ": ")
          , o = {
            alpha: !1,
            antialias: !1,
            depth: !0,
            explicitSwapControl: 0,
            failIfMajorPerformanceCaveat: !1,
            majorVersion: 1,
            minorVersion: 0,
            powerPreference: "high-performance",
            preferLowPowerToHighPerformance: !1,
            premultipliedAlpha: !1,
            preserveDrawingBuffer: !1,
            proxyContextToMainThread: 0,
            renderViaOffscreenBackBuffer: 0,
            stencil: !0,
            maxWebGLVersion: 2
        };
        n.getWebGLContext = function(e, t, n, s) {
            if (void 0 !== n.webglAttributes)
                for (const e of Object.keys(n.webglAttributes))
                    o[e] = n.webglAttributes[e];
            "number" == typeof s && (o.maxWebGLVersion = s);
            let a = 0
              , l = ()=>{}
            ;
            function c() {
                clearTimeout(a);
                const n = function(e, t) {
                    for (let n = o.maxWebGLVersion; n >= 0; --n) {
                        const s = r[n];
                        if (void 0 === s) {
                            e("ERR! " + i + "Unable to find description for context: " + s + "\nAttributes:\n" + JSON.stringify(o, null, 2));
                            continue
                        }
                        const a = t.getContext(s.type, o);
                        if (null != a)
                            return a.contextType = s,
                            o.majorVersion = s.majorVersion,
                            e(i + s.description + " context created\nAttributes:\n" + JSON.stringify(o, null, 2)),
                            {
                                factoryVersion: 3,
                                context: a,
                                version: s.majorVersion
                            };
                        e("ERR! " + i + "Unable to create context: " + s.description)
                    }
                    return void e("ERR! Attributes:\n" + JSON.stringify(o, null, 2))
                }(e, t);
                void 0 === n || n.context.isContextLost() || (a = setTimeout((()=>l(n)), 150))
            }
            function u(t) {
                clearTimeout(a),
                e("ERR! " + i + "webglcontextcreateionerror: " + t.statusMessage || "?", t)
            }
            function d(t) {
                clearTimeout(a),
                t.preventDefault(),
                e("ERR! " + i + "webglcontextlost: " + t.statusMessage || "?", t)
            }
            function p() {
                c(),
                e("ERR! " + i + "webglcontextrestored")
            }
            return t.addEventListener("webglcontextcreationerror", u, !1),
            t.addEventListener("webglcontextlost", d, !1),
            t.addEventListener("webglcontextrestored", p, !1),
            new Promise((e=>{
                l = e,
                c()
            }
            )).then((n=>(function(e, t, n) {
                t.getContext = t=>{
                    for (const o of Object.values(r))
                        if (o.type === t) {
                            if (o.majorVersion === n.version)
                                return e(i + "Get WebGL context: " + t + ". Force use pre-created WebGL context"),
                                n.context;
                            break
                        }
                    return e("ERR! " + i + "Unable to get context: " + t + "\nAttributes:\n" + JSON.stringify(o, null, 2)),
                    null
                }
            }(e, t, n),
            t.removeEventListener("webglcontextcreationerror", u, !1),
            t.removeEventListener("webglcontextlost", d, !1),
            t.removeEventListener("webglcontextrestored", p, !1),
            n)))
        }
    }
    , {
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    125: [function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        e("core-js/modules/es.typed-array.uint8-array.js"),
        e("core-js/modules/es.typed-array.sort.js"),
        e("core-js/modules/web.dom-collections.iterator.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.arl = void 0;
        class i {
            constructor() {
                r(this, "keyLength", 32),
                r(this, "keyOffset", 5),
                r(this, "soundsDurations", {}),
                r(this, "module", void 0),
                r(this, "loadedSoundNames", []),
                r(this, "channels", [])
            }
            init(e, t) {
                n.arl.module = t;
                const r = e.env || {};
                r._JS_Sound_Init = n.arl.soundInit,
                r._JS_Sound_ReleaseInstance = n.arl.releaseSound,
                r._JS_Sound_Load_PCM = n.arl.loadSoundPCM,
                r._JS_Sound_Load = n.arl.loadSound,
                r._JS_Sound_Create_Channel = n.arl.createChannel,
                r._JS_Sound_Play = n.arl.play,
                r._JS_Sound_SetLoop = n.arl.setLoop,
                r._JS_Sound_Set3D = n.arl.set3D,
                r._JS_Sound_Stop = n.arl.stopPlay,
                r._JS_Sound_SetPosition = n.arl.setPosition,
                r._JS_Sound_SetVolume = n.arl.setVolume,
                r._JS_Sound_SetPitch = n.arl.setPitch,
                r._JS_Sound_SetListenerPosition = n.arl.setListenerPosition,
                r._JS_Sound_SetListenerOrientation = n.arl.setListenerOrientation,
                r._JS_Sound_GetLoadState = n.arl.getLoadState,
                r._JS_Sound_ResumeIfNeeded = n.arl.resumeIfNeeded,
                r._JS_Sound_GetLength = n.arl.getLength,
                r._JS_Sound_SetListenerPosition = n.arl.getLoadState
            }
            soundInit() {}
            releaseSound(e) {}
            loadSoundPCM(e, t, n, r) {
                throw new Error("JS_Sound_Load_PCM is not implemented")
            }
            loadSound(e, t) {
                if (n.arl.module.HEAPU8.buffer.length < t + n.arl.keyOffset + n.arl.keyLength)
                    throw new Error("Pointer to audio file is out of range: " + e);
                const r = new Uint8Array(n.arl.module.HEAPU8.buffer,e,n.arl.keyLength + n.arl.keyOffset);
                if (64 === r[0] && 97 === r[1] && 114 === r[2] && 108 === r[3] && 58 === r[4]) {
                    const t = new Uint8Array(n.arl.module.HEAPU8.buffer,e + n.arl.keyOffset,n.arl.keyLength)
                      , r = new TextDecoder("utf-8").decode(t);
                    return n.arl.loadedSoundNames.push(r) - 1
                }
                throw new Error("Pointer doesn't contains audio name: " + e)
            }
            createChannel(e, t) {
                const r = {
                    id: -1,
                    sound: {
                        id: -1,
                        pitch: 1
                    },
                    volume: 1,
                    _3d: 0,
                    listener: {
                        position: {
                            x: 0,
                            y: 0,
                            z: 0
                        }
                    },
                    callback: e
                };
                return n.arl.channels.push(r) - 1
            }
            resetChannel(e) {
                e.id = -1,
                e.sound = {
                    id: -1,
                    pitch: 1
                }
            }
            play(e, t, r, i) {
                const o = ()=>{
                    const r = n.arl.channels[t];
                    n.arl.resetChannel(r),
                    r.sound.name = n.arl.loadedSoundNames[e],
                    n.arl.tryPlay(r)
                }
                ;
                0 !== i ? setTimeout(o, i) : o()
            }
            tryPlay(e) {
                const t = e.sound;
                if (void 0 === t.name || void 0 === t.loop || t.id >= 0)
                    return;
                const r = n.arl.module._gpxGetFreeSoundChannel();
                -1 !== r && (e.id = r,
                n.arl.module._gpxSetSoundVolume(e.id, e.volume),
                n.arl.module.stringToBuffer(t.name, (r=>{
                    t.id = n.arl.module._gpxPlaySound(r, t.loop, t.pitch, e.id)
                }
                )))
            }
            setLoop(e, t) {
                const r = n.arl.channels[e];
                r.sound.loop !== t && (r.sound.loop = t,
                n.arl.tryPlay(r))
            }
            setLoopPoints(e, t, n) {}
            set3D(e, t) {
                const r = n.arl.channels[e];
                r._3d !== t && (r._3d = t)
            }
            stopPlay(e, t) {
                const r = ()=>{
                    const t = n.arl.channels[e];
                    t.id >= 0 && n.arl.module._gpxStopSound(t.id),
                    n.arl.resetChannel(t)
                }
                ;
                0 !== t ? setTimeout(r, t) : r()
            }
            setPosition(e, t, r, i) {
                const o = n.arl.channels[e]
                  , s = {
                    x: t,
                    y: r,
                    z: i
                };
                void 0 !== o.position ? o.position.x === t && o.position.y === r && o.position.z === i || (o.position = s,
                n.arl.changePosition()) : o.position = s
            }
            setVolume(e, t) {
                const r = n.arl.channels[e];
                r.volume !== t && (r.volume = t,
                r.id >= 0 && n.arl.module._gpxSetSoundVolume(r.id, t))
            }
            setPitch(e, t) {
                const r = n.arl.channels[e];
                r.sound.pitch !== t && (r.sound.pitch = t,
                n.arl.tryPlay(r))
            }
            setListenerPosition(e, t, r) {
                for (const i of n.arl.channels) {
                    const o = i.listener.position;
                    void 0 !== o && o.x === e && o.y === t && o.z === r || (i.listener.position = {
                        x: e,
                        y: t,
                        z: r
                    },
                    n.arl.changePosition())
                }
            }
            setListenerOrientation(e, t, r, i, o, s) {
                for (const a of n.arl.channels) {
                    const l = a.listener.orientation;
                    void 0 !== l && l.x === -e && l.y === -t && l.z === -r && l.xUp === i && l.yUp === o && l.zUp === s || (a.listener.orientation = {
                        x: -e,
                        y: -t,
                        z: -r,
                        xUp: i,
                        yUp: o,
                        zUp: s
                    },
                    n.arl.changePosition())
                }
            }
            getLoadState(e) {
                return 0
            }
            resumeIfNeeded() {
                n.arl.module._gpxResumeSounds()
            }
            getLength(e) {
                const t = n.arl.loadedSoundNames[e];
                if (void 0 !== n.arl.soundsDurations[t])
                    return n.arl.soundsDurations[t];
                n.arl.module.stringToBuffer(t, (e=>{
                    const r = n.arl.module._gpxGetSoundDuration(e);
                    return n.arl.soundsDurations[t] = r,
                    r
                }
                ))
            }
            changePosition() {}
        }
        n.default = i,
        n.arl = new i
    }
    , {
        "core-js/modules/es.typed-array.sort.js": 108,
        "core-js/modules/es.typed-array.uint8-array.js": 109,
        "core-js/modules/web.dom-collections.iterator.js": 110
    }],
    126: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es.typed-array.uint8-array.js"),
        e("core-js/modules/es.typed-array.sort.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.unityRequestsWrapper = void 0,
        n.unityRequestsWrapper = {
            init: (e,t)=>{
                !function(e, t) {
                    var n, r, i, o, s, a, l, c, u, d, p;
                    const f = "StreamingAssets"
                      , h = {
                        instances: {},
                        nextRequestId: 0
                    }
                      , g = e=>t.UTF8ToString(e)
                      , y = e=>{
                        const t = e.split(f);
                        return t.length <= 1 ? e : t.join("async/" + f) + ".js"
                    }
                    ;
                    e._JS_SystemInfo_GetStreamingAssetsURL = (null === (n = e._JS_SystemInfo_GetStreamingAssetsURL) || void 0 === n || n.bind(e),
                    (e,n)=>(e && t.stringToUTF8(f, e, n),
                    t.lengthBytesUTF8(f))),
                    e._JS_WebRequest_Create = (null === (r = e._JS_WebRequest_Create) || void 0 === r || r.bind(e),
                    (e,n)=>{
                        const r = y(g(e))
                          , i = g(n)
                          , o = t.companyName && t.productName && t.XMLHttpRequest ? new t.XMLHttpRequest({
                            companyName: t.companyName,
                            productName: t.productName,
                            cacheControl: t.cacheControl(r)
                        }) : new XMLHttpRequest;
                        return o.open(i, r, !0),
                        o.responseType = "arraybuffer",
                        h.instances[h.nextRequestId] = o,
                        h.nextRequestId++
                    }
                    ),
                    e._JS_WebRequest_SetTimeout = (null === (i = e._JS_WebRequest_SetTimeout) || void 0 === i || i.bind(e),
                    (e,t)=>{
                        h.instances[e].timeout = t
                    }
                    ),
                    e._JS_WebRequest_SetRequestHeader = (null === (o = e._JS_WebRequest_SetRequestHeader) || void 0 === o || o.bind(e),
                    (e,t,n)=>{
                        const r = g(t)
                          , i = g(n);
                        h.instances[e].setRequestHeader(r, i)
                    }
                    ),
                    e._JS_WebRequest_SetResponseHandler = (null === (s = e._JS_WebRequest_SetResponseHandler) || void 0 === s || s.bind(e),
                    (e,n,r)=>{
                        const i = h.instances[e];
                        function o(e, o) {
                            if (r) {
                                const s = t.lengthBytesUTF8(e) + 1
                                  , a = t._malloc(s);
                                t.stringToUTF8(e, a, s),
                                t.dynCall("viiiiii", r, [n, i.status, 0, 0, a, o]),
                                t._free(a)
                            }
                        }
                        i.onload = e=>{
                            if (r) {
                                const e = 0
                                  , o = new Uint8Array(i.response);
                                if (0 != o.length) {
                                    const s = t._malloc(o.length);
                                    t.HEAPU8.set(o, s),
                                    t.dynCall("viiiiii", r, [n, i.status, s, o.length, 0, e])
                                } else
                                    t.dynCall("viiiiii", r, [n, i.status, 0, 0, 0, e])
                            }
                        }
                        ,
                        i.onerror = e=>{
                            o("Unknown error.", 2)
                        }
                        ,
                        i.ontimeout = e=>{
                            o("Connection timed out.", 14)
                        }
                        ,
                        i.onabort = e=>{
                            o("Aborted.", 17)
                        }
                    }
                    ),
                    e._JS_WebRequest_SetProgressHandler = (null === (a = e._JS_WebRequest_SetProgressHandler) || void 0 === a || a.bind(e),
                    (e,n,r)=>{
                        h.instances[e].onprogress = e=>{
                            r && e.lengthComputable && t.dynCall("viii", r, [n, e.loaded, e.total])
                        }
                    }
                    ),
                    e._JS_WebRequest_Send = (null === (l = e._JS_WebRequest_Send) || void 0 === l || l.bind(e),
                    (e,n,r)=>{
                        const i = h.instances[e];
                        try {
                            if (r > 0) {
                                const e = t.HEAPU8.subarray(n, n + r);
                                i.send(e)
                            } else
                                i.send()
                        } catch (e) {
                            t.log("ERR!" + e.name + ": " + e.message)
                        }
                    }
                    ),
                    e._JS_WebRequest_GetResponseHeaders = (null === (c = e._JS_WebRequest_GetResponseHeaders) || void 0 === c || c.bind(e),
                    (e,n,r)=>{
                        const i = h.instances[e].getAllResponseHeaders();
                        return n && t.stringToUTF8(i, n, r),
                        t.lengthBytesUTF8(i)
                    }
                    ),
                    e._JS_WebRequest_GetStatusLine = (null === (u = e._JS_WebRequest_GetStatusLine) || void 0 === u || u.bind(e),
                    (e,n,r)=>{
                        const i = h.instances[e].status + " " + h.instances[e].statusText;
                        return n && t.stringToUTF8(i, n, r),
                        t.lengthBytesUTF8(i)
                    }
                    ),
                    e._JS_WebRequest_Abort = (null === (d = e._JS_WebRequest_Abort) || void 0 === d || d.bind(e),
                    e=>{
                        h.instances[e].abort()
                    }
                    ),
                    e._JS_WebRequest_Release = (null === (p = e._JS_WebRequest_Release) || void 0 === p || p.bind(e),
                    e=>{
                        let t = h.instances[e];
                        t.onload = null,
                        t.onerror = null,
                        t.ontimeout = null,
                        t.onabort = null,
                        t = null,
                        h.instances[e] = null
                    }
                    )
                }(e.env || {}, t)
            }
        }
    }
    , {
        "core-js/modules/es.typed-array.sort.js": 108,
        "core-js/modules/es.typed-array.uint8-array.js": 109
    }],
    127: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es.typed-array.uint8-array.js"),
        e("core-js/modules/es.typed-array.sort.js"),
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.WebGLWrapper = void 0;
        const r = {};
        ["OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "EXT_color_buffer_half_float", "WEBGL_color_buffer_float"].forEach((e=>r[e] = !0)),
        n.WebGLWrapper = {
            applyToContext: (e,t,n,a)=>{
                void 0 === t.GL && (t.GL = e),
                void 0 === t.preinitializedWebGLContext && (t.preinitializedWebGLContext = e);
                const l = []
                  , c = e.getSupportedExtensions();
                t.log("Validating supported extensions", c),
                c.forEach((e=>{
                    !0 === r[e] ? t.log("WARN! Removing blacklisted extension", e) : l.push(e)
                }
                )),
                e.getSupportedExtensions = ()=>l,
                n && (2 === a ? function(e, t) {
                    i.defaultWebGL.texStorage2D = e.texStorage2D,
                    i.defaultWebGL.texImage2D = e.texImage2D,
                    i.defaultWebGL.bindTexture = e.bindTexture,
                    e.bindTexture = (u = e.bindTexture.bind(e),
                    (t,n)=>(t === e.TEXTURE_2D && (null !== i.texStorageInfo && (i.defaultWebGL.texStorage2D.apply(e, [i.texStorageInfo.target, i.texStorageInfo.levels, i.texStorageInfo.internalformat, i.texStorageInfo.width, i.texStorageInfo.height]),
                    i.texStorageInfo = null),
                    i.activeTexture = n),
                    u(t, n))),
                    e.texImage2D = (c = e.texImage2D.bind(e),
                    function(n, r, a, l, u, d, p, f, h) {
                        if (n !== e.TEXTURE_2D || null === i.activeTexture || null == h)
                            return c.apply(e, arguments);
                        if (!o(h, h.byteOffset || 0, h.byteLength))
                            return c.apply(e, arguments);
                        s(t, h, h.byteOffset, h.byteLength);
                        const g = new ImageData(1,1);
                        return c.apply(e, [n, r, a, p, f, g])
                    }
                    ),
                    e.texStorage2D = (l = e.texStorage2D.bind(e),
                    function(t, n, r, o, s) {
                        if (t !== e.TEXTURE_2D || null === i.activeTexture)
                            return l.apply(e, arguments);
                        i.texStorageInfo = {
                            target: t,
                            levels: n,
                            internalformat: r,
                            width: o,
                            height: s
                        }
                    }
                    ),
                    e.framebufferTexture2D = (a = e.framebufferTexture2D.bind(e),
                    function(t, n, r, o, s) {
                        return r !== e.TEXTURE_2D || null === o || null === i.texStorageInfo || (i.defaultWebGL.texStorage2D.apply(e, [i.texStorageInfo.target, i.texStorageInfo.levels, i.texStorageInfo.internalformat, i.texStorageInfo.width, i.texStorageInfo.height]),
                        i.texStorageInfo = null),
                        a.apply(e, arguments)
                    }
                    ),
                    e.texSubImage2D = (r = e.texSubImage2D.bind(e),
                    function(n, a, l, c, u, d, p, f, h, g) {
                        if (n !== e.TEXTURE_2D || null === i.activeTexture)
                            return r.apply(e, arguments);
                        const y = g || 0;
                        if (null == h || !o(h, y))
                            return null !== i.texStorageInfo && (i.defaultWebGL.texStorage2D.apply(e, [i.texStorageInfo.target, i.texStorageInfo.levels, i.texStorageInfo.internalformat, i.texStorageInfo.width, i.texStorageInfo.height]),
                            i.texStorageInfo = null),
                            r.apply(e, arguments);
                        s(t, h, y);
                        const m = new ImageData(1,1);
                        i.defaultWebGL.texImage2D.apply(e, [n, a, p, p, f, m]),
                        i.texStorageInfo = null
                    }
                    ),
                    e.compressedTexSubImage2D = (n = e.compressedTexSubImage2D.bind(e),
                    function(t, r, o, s, a, l, c, u, d, p) {
                        return t !== e.TEXTURE_2D || null === i.activeTexture || null === i.texStorageInfo || (i.defaultWebGL.texStorage2D.apply(e, [i.texStorageInfo.target, i.texStorageInfo.levels, i.texStorageInfo.internalformat, i.texStorageInfo.width, i.texStorageInfo.height]),
                        i.texStorageInfo = null),
                        n.apply(e, arguments)
                    }
                    );
                    var n;
                    var r;
                    var a;
                    var l;
                    var c;
                    var u
                }(e, t) : function(e, t) {
                    e.bindTexture = (r = e.bindTexture.bind(e),
                    (t,n)=>(t === e.TEXTURE_2D && (i.activeTexture = n),
                    r(t, n))),
                    e.texImage2D = (n = e.texImage2D.bind(e),
                    function(r, a, l, c, u, d, p, f, h) {
                        if (r !== e.TEXTURE_2D || null === i.activeTexture || null == h)
                            return n.apply(e, arguments);
                        if (!o(h, h.byteOffset || 0, h.byteLength))
                            return n.apply(e, arguments);
                        s(t, h, h.byteOffset, h.byteLength);
                        const g = new ImageData(1,1);
                        return n.apply(e, [r, a, l, p, f, g])
                    }
                    );
                    var n;
                    var r
                }(e, t))
            }
            ,
            applyToCanvas: (e,t,r)=>{
                const i = e.getContext;
                e.getContext = (...o)=>{
                    const s = i.apply(e, o)
                      , a = o[0]
                      , l = "webgl2" === a ? 2 : "webgl" === a || "experimental-webgl" === a ? 1 : 0;
                    return l > 0 && (e.getContext = i,
                    n.WebGLWrapper.applyToContext(s, t, r, l)),
                    s
                }
            }
        };
        const i = {
            activeTexture: null,
            defaultWebGL: {},
            texStorageInfo: null
        };
        function o(e, t, n) {
            if (null === i.activeTexture)
                return !1;
            const r = new Uint8Array(e.buffer,t,n);
            return r.length > 4 && 64 === r[0] && 116 === r[1] && 114 === r[2] && 108 === r[3] && 58 === r[4]
        }
        function s(e, t, n, r) {
            const o = new Uint8Array(t.buffer,n,r);
            let s = 0;
            for (; 0 !== o[5 + s] && o.length > 5 + s; )
                s++;
            const a = new TextDecoder("utf-8").decode(new Uint8Array(t.buffer,n + 5,s))
              , l = e._malloc(s + 1);
            e.stringToUTF8(a, l, s + 1),
            e._gpxLoadTextureAsync(i.activeTexture.name, l),
            e._free(l)
        }
    }
    , {
        "core-js/modules/es.typed-array.sort.js": 108,
        "core-js/modules/es.typed-array.uint8-array.js": 109
    }]
}, {}, [119]);
