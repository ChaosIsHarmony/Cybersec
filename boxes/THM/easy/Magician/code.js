(function(e) {
    function t(t) {
        for (var a, i, l = t[0], s = t[1], c = t[2], p = 0, f = []; p < l.length; p++) i = l[p],
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && f.push(r[i][0]),
        r[i] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        u && u(t);
        while (f.length) f.shift()();
        return o.push.apply(o, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], a = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== r[s] && (a = !1)
            }
            a && (o.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var a = {},
    r = {
        app: 0
    },
    o = [];
    function i(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.m = e,
    i.c = a,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) i.d(n, a, function(t) {
            return e[t]
        }.bind(null, a));
        return n
    },
    i.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(t, "a", t),
        t
    },
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    i.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
    s = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var u = s;
    o.push([0, "chunk-vendors"]),
    n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
        var a = n("2b0e"),
        r = function() {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("v-app", [n("v-app-bar", {
                attrs: {
                    app: "",
                    color: "primary",
                    dark: ""
                }
            },
            [n("div", {
                staticClass: "d-flex align-center"
            },
            [n("v-title", [e._v("PNG to JPG converter - It works like magic!")])], 1)]), n("v-main", [n("UploadFiles")], 1)], 1)
        },
        o = [],
        i = function() {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return a("v-container", [a("v-row", {
                staticClass: "text-center"
            },
            [a("v-col", {
                attrs: {
                    cols: "12"
                }
            },
            [a("v-img", {
                staticClass: "my-3",
                attrs: {
                    src: n("cf05"),
                    contain: "",
                    height: "400"
                }
            })], 1)], 1), a("v-row", {
                staticClass: "text-center"
            },
            [a("v-col", {
                attrs: {
                    cols: "12"
                }
            },
            [a("v-container", [a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            },
            [a("v-file-input", {
                ref: "file",
                attrs: {
                    accept: "image/png",
                    placeholder: "Select your PNG file you want to upload and convert",
                    "prepend-icon": "mdi-camera",
                    label: "PNG"
                },
                on: {
                    change: e.selectFile
                }
            })], 1), a("v-btn", {
                staticClass: "mb-5",
                attrs: {
                    disabled: !e.selectedFiles,
                    width: "600",
                    height: "50"
                },
                on: {
                    click: e.upload
                }
            },
            [e._v(" Upload and convert from png to jpg with the power of magic! ")]), a("v-spacer"), a("v-layout", {
                attrs: {
                    "justify-center": ""
                }
            },
            [a("v-alert", {
                ref: "alert",
                attrs: {
                    value: e.alert,
                    type: "error",
                    dismissible: "true"
                }
            },
            [e._v(e._s(e.message))])], 1), a("v-card", {
                staticClass: "mx-auto",
                attrs: {
                    width: "600"
                }
            },
            [a("v-card-title", [e._v("List of your converted images")]), a("v-list", [a("v-list-item-group", {
                model: {
                    value: e.model,
                    callback: function(t) {
                        e.model = t
                    },
                    expression: "model"
                }
            },
            e._l(e.fileInfos, (function(t, n) {
                return a("v-list-item", {
                    key: n,
                    attrs: {
                        href: t.url
                    }
                },
                [a("v-list-item-content", [e._v(e._s(t.name))])], 1)
            })), 1)], 1)], 1)], 1)], 1)], 1)], 1)
        },
        l = [],
        s = n("d4ec"),
        c = n("bee2"),
        u = n("bc3a"),
        p = n.n(u),
        f = p.a.create({
            baseURL: "http://magician:8080",
            headers: {
                "Content-type": "application/json"
            }
        }),
        d = function() {
            function e() {
                Object(s["a"])(this, e)
            }
            return Object(c["a"])(e, [{
                key: "upload",
                value: function(e, t) {
                    var n = new FormData;
                    return n.append("file", e),
                    f.post("/upload", n, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        onUploadProgress: t
                    })
                }
            },
            {
                key: "getFiles",
                value: function() {
                    return f.get("/files")
                }
            }]),
            e
        } (),
        v = new d,
        m = {
            name: "upload-files",
            data: function() {
                return {
                    selectedFiles: void 0,
                    currentFile: void 0,
                    progress: 0,
                    message: "",
                    alert: !1,
                    fileInfos: []
                }
            },
            methods: {
                selectFile: function(e) {
                    this.alert = !1,
                    this.selectedFiles = e
                },
                upload: function() {
                    var e = this;
                    this.progress = 0,
                    this.currentFile = this.selectedFiles,
                    v.upload(this.currentFile, (function(t) {
                        e.progress = Math.round(100 * t.loaded / t.total)
                    })).then((function(t) {
                        return e.message = t.data.message,
                        v.getFiles()
                    })).then((function(t) {
                        e.fileInfos = t.data,
                        e.currentFile = void 0,
                        e.selectedFiles = void 0,
                        e.alert = !1
                    })).
                    catch((function() {
                        e.progress = 0,
                        e.message = "Could not upload the file!",
                        e.alert = !0
                    }))
                }
            },
            mounted: function() {
                var e = this;
                v.getFiles().then((function(t) {
                    e.fileInfos = t.data
                }))
            }
        },
        h = m,
        g = (n("d00b"), n("2877")),
        b = n("6544"),
        y = n.n(b),
        w = n("0798"),
        F = n("8336"),
        V = n("b0af"),
        _ = n("99d9"),
        j = n("62ad"),
        O = n("a523"),
        x = n("23a7"),
        C = n("adda"),
        P = n("a722"),
        k = n("8860"),
        I = n("da13"),
        L = n("5d23"),
        S = n("1baa"),
        M = n("0fd9"),
        G = n("2fa4"),
        T = Object(g["a"])(h, i, l, !1, null, "9b3197fc", null),
        U = T.exports;
        y()(T, {
            VAlert: w["a"],
            VBtn: F["a"],
            VCard: V["a"],
            VCardTitle: _["a"],
            VCol: j["a"],
            VContainer: O["a"],
            VFileInput: x["a"],
            VImg: C["a"],
            VLayout: P["a"],
            VList: k["a"],
            VListItem: I["a"],
            VListItemContent: L["a"],
            VListItemGroup: S["a"],
            VRow: M["a"],
            VSpacer: G["a"]
        });
        var A = {
            name: "App",
            components: {
                UploadFiles: U
            },
            data: function() {
                return {}
            }
        },
        J = A,
        N = n("7496"),
        $ = n("40dc"),
        B = n("f6c4"),
        E = Object(g["a"])(J, r, o, !1, null, null, null),
        R = E.exports;
        y()(E, {
            VApp: N["a"],
            VAppBar: $["a"],
            VMain: B["a"]
        });
        var D = n("f309");
        a["a"].use(D["a"]);
        var q = new D["a"]({});
        a["a"].config.productionTip = !1,
        new a["a"]({
            vuetify: q,
            render: function(e) {
                return e(R)
            }
        }).$mount("#app")
    },
    cf05: function(e, t, n) {
        e.exports = n.p + "img/logo.dbb7e574.png"
    },
    cf37: function(e, t, n) {},
    d00b: function(e, t, n) {
        "use strict";
        n("cf37")
    }
});
//# sourceMappingURL=app.2af72f5c.js.map