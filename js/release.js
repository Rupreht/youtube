/*! youtube: v1.6.3 (webpack: v1.13.1) */ ! function(e) {
    function t(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function(e, t, i) {
    "use strict";

    function n() {
        var e, t = -1 !== ["AuraHD2", "AuraHD3", "AuraHD8", "MAG254", "MAG275", "MAG276", "WR320"].indexOf(h.deviceModel());
        i(4).token && (c.data.metrics.mainMenuSize -= 2), u.init([i(53), i(56), i(55), i(57), i(54)]), c.emit("ready"), u.pages.forEach(function(e) {
            e.emit("load")
        }), a = i(47), s = new(i(36))({
            $node: document.getElementById("exitMessage"),
            events: {
                keydown: function(e) {
                    e.code === d.ok ? c.quit() : e.code !== d.back && e.code !== d.exit || (e.stop = !0, s.$node.style.visibility = "hidden", r.focus())
                }
            }
        }), s.$body.classList.add("modalExit"), s.$node.style.visibility = "hidden", s.$header.innerHTML = gettext("Exit from app?"), s.$content.innerHTML = "", s.$footer.innerHTML = "", s.$content.appendChild(e = document.createElement("div")), e.innerText = gettext("Ok"), e.className = "btn confirm" + (t ? "" : " old"), s.$content.appendChild(e = document.createElement("div")), e.className = "btn back" + (t ? "" : " old"), e.innerText = gettext("Cancel"), s.$footer.innerHTML = "", u.navigate("pm"), window.volumeWidget.classList.add("ready"), l = i(9)
    }

    function o() {
        var e, t = !gSTB.GetStandByStatus(),
            i = gSTB.GetEnv(JSON.stringify({
                varList: ["standByMode"]
            }));
        try {
            i = JSON.parse(i).result
        } catch (n) {
            i = {
                standByMode: null
            }
        }
        return e = parseInt(i.standByMode, 10), gSTB.StandByMode !== e && (gSTB.StandByMode = e), 3 === e ? (gSTB.SetLedIndicatorMode(2), gSTB.StandBy(t), void gSTB.SetLedIndicatorMode(1)) : void(t ? (document.body.style.display = "none", gSTB.StandBy(t), gSTB.SetLedIndicatorMode(2), window.location = "") : (gSTB.StandBy(t), gSTB.SetLedIndicatorMode(1)))
    }
    var s, a, r, l, c = i(2),
        d = i(1),
        u = i(3),
        h = i(22),
        p = (i(6), i(19));
    c.quit = function() {
        h.saveUserData(p.settingsFile, JSON.stringify(c.settings)), c.player && c.player.stop(), window.parent !== window ? ("pp" === u.current.id && u.back(), c.hide()) : window.location.href = i(39)() || "file:///home/web/services.html"
    }, c.reload = function() {
        h.saveUserData(p.settingsFile, JSON.stringify(c.settings)), c.player.stop(), location.reload()
    }, c.addListeners({
        load: function() {
            var e, t = i(4),
                o = i(11),
                s = i(6);
            h.setVKButtonState(!1), h.setAppButtonState(!0), h.setServiceButtonState(!0);
            try {
                c.settings = JSON.parse(h.loadUserData(p.settingsFile))
            } catch (a) {
                c.settings = !1
            }
            c.settings || (c.settings = p.defaultSettings, h.saveUserData(p.settingsFile, JSON.stringify(c.settings)));
            for (e in p.defaultSettings) void 0 === c.settings[e] && (c.settings[e] = p.defaultSettings[e]);
            if (-1 === s.languages.indexOf(c.settings.keyboardLanguage) && (c.settings.keyboardLanguage = 0), c.params = i(61)(location.search.substring(1)), c.params.language && (c.settings.languageOverwrite = 1, c.settings.language = c.params.language), i(34).addListener("load", function() {
                    c.languageIndex = o.languageIndex, c.settings.language = s.languages[c.languageIndex], document.documentElement.dir = s.directions[c.languageIndex], "rtl" === document.documentElement.dir && (d.left = 39, d.right = 37), c.params.apiKey && c.params.apiClientId && c.params.apiSecret && (c.settings.customCredenitals = {
                        key: [c.params.apiKey],
                        clientId: [c.params.apiClientId],
                        secret: [c.params.apiSecret]
                    }), t.init({
                        credentialsIndex: c.settings.credentialsIndex,
                        customCredenitals: c.settings.customCredenitals
                    }).then(n, n)["catch"](function(e) {})
                }), c.settings.languageOverwrite) o.setLang(c.settings.language);
            else try {
                c.settings.language = JSON.parse(h.getEnv('{"varList":["language"]}')).result.language
            } finally {
                o.setLang(c.settings.language)
            }
            gSTB.SetInputLang(c.settings.language)
        },
        unload: function() {
            h.saveUserData(p.settingsFile, JSON.stringify(c.settings)), c.player.stop()
        },
        keydown: function(e) {
            if (e.code === d.exit && l && !l.visible) r = u.current.activeComponent, s.$node.style.visibility = "visible", s.focus();
            else if (e.code === d.power) o();
            else if (a) switch (e.code) {
                case d.volumeUp:
                case d.volumeDown:
                case d.mute:
                    a.changeVolume(e.code)
            }
        },
        message: function(e) {
            "show" === e.message && c.show(), "exit" === e.message && stbWebWindow.close()
        }
    }), h.setNativeStringMode(!0)
}, function(e, t, i) {
    "use strict";
    e.exports = {
        back: 8,
        "delete": 46,
        channelPrev: 1009,
        channelNext: 9,
        ok: 13,
        exit: 27,
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        volumeUp: 107,
        volumeDown: 109,
        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        refresh: 116,
        frame: 117,
        phone: 119,
        set: 120,
        tv: 121,
        menu: 122,
        web: 123,
        mic: 2032,
        rewind: 2066,
        forward: 2070,
        app: 2076,
        usbMounted: 2080,
        usbUnmounted: 2081,
        playPause: 2082,
        stop: 2083,
        power: 2085,
        record: 2087,
        info: 2089,
        mute: 2192,
        clock: 2032,
        audio: 2071,
        keyboard: 2076,
        space: 32
    }
}, function(e, t, i) {
    "use strict";
    var n, o, s, a = i(58),
        r = i(3),
        l = i(1),
        c = i(37),
        d = {};
    i(60), window.localStorage = window.parent.localStorage || window.parent.stbStorage, window.core = window.parent.core, window.parent && window.parent.gSTB && (window.dvbManager = window.parent.dvbManager, window.epgManager = window.parent.epgManager, window.gSTB = window.parent.gSTB, window.pvrManager = window.parent.pvrManager, window.stbDownloadManager = window.parent.stbDownloadManager, window.stbStorage = window.parent.stbStorage, window.stbUpdate = window.parent.stbUpdate, window.stbUPnP = window.parent.stbUPnP, window.stbWebWindow = window.parent.stbWebWindow, window.stbWindowMgr = window.parent.stbWindowMgr, window.timeShift = window.parent.timeShift), n = new a({
        debug: !1,
        host: !0,
        screen: null,
        time: {
            init: +new Date,
            load: 0,
            done: 0
        }
    }), n.setScreen = function(e) {
        return e ? (e.availHeight = e.height - (e.availTop + e.availBottom), e.availWidth = e.width - (e.availLeft + e.availRight), window.moveTo(0, 0), window.resizeTo(e.width, e.height), s && s instanceof HTMLLinkElement && document.head.removeChild(s), s = document.createElement("link"), s.rel = "stylesheet", s.href = "css/release." + e.height + ".css?" + +new Date, document.head.appendChild(s), this.data.metrics = e, !0) : !1
    }, n.EVENT_END_OF_FILE = 1, n.EVENT_GET_MEDIA_INFO = 2, n.EVENT_PLAYBACK_BEGIN = 4, n.EVENT_CONTENT_ERROR = 5, n.EVENT_DUAL_MONO_DETECT = 6, n.EVENT_INFO_GET = 7, n.EVENT_SUBTITLE_LOAD_ERROR = 8, n.EVENT_SUBTITLE_FIND = 9, n.EVENT_HDMI_CONNECT = 32, n.EVENT_HDMI_DISCONNECT = 33, n.EVENT_RECORD_FINISH_SUCCESSFULL = 34, n.EVENT_RECORD_FINISH_ERROR = 35, n.EVENT_DVB_SCANING = 40, n.EVENT_DVB_FOUND = 41, n.EVENT_DVB_CHANELL_EPG_UPDATE = 42, n.EVENT_DVB_ANTENNA_OFF = 43, n.setScreen(c[screen.height] || c[720]);
    for (o in l) "volumeUp" !== o && "volumeDown" !== o && (d[l[o]] = !0);
    n.defaultEvents = {
        load: function(e) {
            n.data.time.load = e.timeStamp, n.events[e.type] && n.emit(e.type, e), r.pages.forEach(function(t) {
                t.events[e.type] && t.emit(e.type, e)
            }), n.data.time.done = +new Date, n.events.done && n.emit("done", e)
        },
        unload: function(e) {
            n.events[e.type] && n.emit(e.type, e), r.pages.forEach(function(t) {
                t.events[e.type] && t.emit(e.type, e)
            })
        },
        error: function(e) {},
        keydown: function(e) {
            var t, i = r.current,
                o = {
                    keyCode: e.keyCode,
                    stop: e.stop,
                    shiftKey: e.shiftKey,
                    altKey: e.altKey,
                    type: e.type,
                    "native": e
                };
            0 !== o.keyCode && (o.code = o.keyCode, o.shiftKey && (o.code += 1e3), o.altKey && (o.code += 2e3), t = i.activeComponent, t && t !== i && (t.events[o.type] && t.emit(o.type, o), !o.stop && t.propagate && t.parent && t.parent.events[o.type] && t.parent.emit(o.type, o)), o.stop || (i.events[o.type] && i.emit(o.type, o), o.stop || n.events[o.type] && n.emit(o.type, o)), !n.data.host && d[o.code] && e.preventDefault())
        },
        keypress: function(e) {
            var t = r.current;
            t.activeComponent && t.activeComponent !== t && t.activeComponent.events[e.type] && t.activeComponent.emit(e.type, e)
        },
        click: function(e) {},
        contextmenu: function(e) {
            e.preventDefault()
        },
        mousewheel: function(e) {
            var t = r.current;
            t.activeComponent && t.activeComponent !== t && t.activeComponent.events[e.type] && t.activeComponent.emit(e.type, e), e.stop || t.events[e.type] && t.emit(e.type, e)
        }
    };
    for (o in n.defaultEvents) window.addEventListener(o, n.defaultEvents[o]);
    n.show = function() {
        this.events.show && this.emit("show"), core.call("show")
    }, n.hide = function() {
        this.events.hide && this.emit("hide"), core.call("hide")
    }, n.exit = function() {
        this.events.hide && this.emit("hide"), core.call("exit")
    }, window.stbEvent = {}, window.stbEvent.onEvent = function(e, t) {
        if (Array.prototype.forEach.call(window.frames, function(i) {
                i.stbEvent && i.stbEvent.onEvent && i.stbEvent.onEvent(e, t)
            }), n.events.media) {
            if (t) try {
                t = JSON.parse(t)
            } catch (i) {}
            n.emit("media", {
                code: parseInt(e, 10),
                info: t
            })
        }
    }, window.stbEvent.onBroadcastMessage = function(e, t, i) {
        Array.prototype.forEach.call(window.frames, function(n) {
            n.stbEvent && n.stbEvent.onBroadcastMessage && n.stbEvent.onBroadcastMessage(e, t, i)
        }), n.events.message && n.emit("message", {
            broadcast: !0,
            windowId: e,
            message: t,
            data: i
        })
    }, window.stbEvent.onMessage = function(e, t, i) {
        Array.prototype.forEach.call(window.frames, function(n) {
            n.stbEvent && n.stbEvent.onMessage && n.stbEvent.onMessage(e, t, i)
        }), n.events.message && n.emit("message", {
            broadcast: !1,
            windowId: e,
            message: t,
            data: i
        })
    }, window.stbEvent.onMount = function(e) {
        Array.prototype.forEach.call(window.frames, function(t) {
            t.stbEvent && t.stbEvent.onMount && t.stbEvent.onMount(e)
        }), n.events["device:mount"] && n.emit("device:mount", {
            state: e
        })
    }, window.stbEvent.onMediaAvailable = function(e, t) {
        Array.prototype.forEach.call(window.frames, function(i) {
            i.stbEvent && i.stbEvent.onMediaAvailable && i.stbEvent.onMediaAvailable(e, t)
        }), n.events["media:available"] && n.emit("media:available", {
            mime: e,
            url: t
        })
    }, window.stbEvent.onNetworkStateChange = function(e) {
        n.events["internet:state"] && n.emit("internet:state", {
            state: e
        })
    }, window.stbEvent.onWebBrowserProgress = function(e) {
        Array.prototype.forEach.call(window.frames, function(t) {
            t.stbEvent && t.stbEvent.onWebBrowserProgress && t.stbEvent.onWebBrowserProgress(e)
        }), n.events["browser:progress"] && n.emit("browser:progress", {
            progress: e
        })
    }, window.stbEvent.onWindowActivated = function() {
        Array.prototype.forEach.call(window.frames, function(e) {
            e.stbEvent && e.stbEvent.onWindowActivated && e.stbEvent.onWindowActivated()
        }), n.events["window:focus"] && n.emit("window:focus")
    }, window.gSTB && gSTB.SetNativeStringMode && gSTB.SetNativeStringMode(!0), e.exports = n
}, function(e, t, i) {
    "use strict";
    var n, o = i(7);
    n = new o, n.current = null, n.history = [], n.pages = [], n.ids = {}, n.init = function(e) {
        var t, i, n;
        if (e) {
            for (this.pages = [], this.pages = e, t = 0, i = e.length; i > t; t++) n = e[t], this.ids[n.id] = n, n.active && (this.current = n);
            return this.events.init && this.emit("init", {
                pages: e
            }), !0
        }
        return !1
    }, n.parse = function(e) {
        var t = {
            name: "",
            data: []
        };
        return t.data = e.split("/").map(decodeURIComponent), t.name = t.data.shift().slice(1), t
    }, n.stringify = function(e, t) {
        return t = Array.isArray(t) ? t : [], e = encodeURIComponent(e), t = t.map(encodeURIComponent), t.unshift(e), t.join("/")
    }, n.show = function(e, t) {
        return e && !e.active ? (e.$node.classList.add("active"), e.active = !0, this.current = e, e.events.show && e.emit("show", {
            page: e,
            data: t
        }), !0) : !1
    }, n.hide = function(e) {
        return e && e.active ? (e.$node.classList.remove("active"), e.active = !1, this.current = null, e.events.hide && e.emit("hide", {
            page: e
        }), !0) : !1
    }, n.navigate = function(e, t) {
        var i = this.current,
            n = this.ids[e];
        return n && !n.active ? (location.hash = this.stringify(e, t), this.hide(this.current), this.show(n, t), this.events.navigate && this.emit("navigate", {
            from: i,
            to: n
        }), this.history.push(n), !0) : !1
    }, n.back = function() {
        var e, t;
        return this.history.length > 1 && (e = this.history.pop(), t = this.history[this.history.length - 1], t && !t.active) ? (location.hash = t.id, this.hide(this.current), this.show(t), this.events.navigate && this.emit("navigate", {
            from: e,
            to: t
        }), !0) : !1
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    function o() {
        return u.request("GET", "guideCategories?part=snippet").then(function(e) {
            var t = new XMLHttpRequest,
                i = "https://raw.githubusercontent.com/Rupreht/youtube/master/config.json";
            return a.params.config && (i = a.params.config), t.open("GET", i), l(t).then(function(t) {
                var i = {};
                try {
                    t = JSON.parse(t), t = Object.keys(t.categories)
                } catch (n) {
                    t = []
                }
                if (e = JSON.parse(e).items, e.forEach(function(e) {
                        i[e.id] = {
                            id: e.id,
                            title: e.snippet.title,
                            value: e.snippet.title,
                            icon: d[e.id]
                        }
                    }), t.length > 0 ? t.forEach(function(e) {
                        i[e] && u.categories.push(i[e])
                    }) : e.forEach(function(e) {
                        u.categories.push({
                            id: e.id,
                            title: e.snippet.title,
                            value: e.snippet.title,
                            icon: d[e.id]
                        })
                    }), u.token) {
                    new XMLHttpRequest;
                    return u.request("GET", "subscriptions?part=snippet&mine=true&maxResults=50").then(function(e) {
                        e = JSON.parse(e).items, e.forEach(function(e) {
                            u.subscriptions.push({
                                id: e.snippet.resourceId.channelId,
                                value: e.snippet.title,
                                title: e.snippet.title,
                                icon: e.snippet.thumbnails["default"].url
                            })
                        })
                    }, function() {})
                }
            })["catch"](function() {
                return e = JSON.parse(e).items, e.splice(1, 1), e.forEach(function(e) {
                    u.categories.push({
                        id: e.id,
                        title: e.snippet.title,
                        value: e.snippet.title,
                        icon: d[e.id]
                    })
                }), u.token ? u.request("GET", "subscriptions?part=snippet&mine=true&maxResults=50").then(function(e) {
                    e = JSON.parse(e).items, e.forEach(function(e) {
                        u.subscriptions.push({
                            id: e.snippet.resourceId.channelId,
                            value: e.snippet.title,
                            title: e.snippet.title,
                            icon: e.snippet.thumbnails["default"].url
                        })
                    })
                }, function() {}) : void 0
            })
        })["catch"](function(e, t) {})
    }

    function s(e) {
        return new r(function(t, i) {
            var n = new XMLHttpRequest;
            return e.refreshToken ? (n.open("POST", "https://accounts.google.com/o/oauth2/token"), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onload = function() {
                200 === this.status ? (u.token = JSON.parse(this.responseText).access_token, u.refreshToken = s, t()) : (u.token = !1, u.refreshToken = !1, i(this.status))
            }, n.onerror = function() {
                u.token = !1, u.refreshToken = !1, i(this.status)
            }, void n.send("client_id=" + u.credenitals.clientId[u.credentialsIndex] + "&client_secret=" + u.credenitals.secret[u.credentialsIndex] + "&grant_type=refresh_token&refresh_token=" + e.refreshToken)) : e.sessionToken ? (u.token = e.sessionToken, void t()) : void i()
        })
    }
    var a = i(2),
        r = i(10),
        l = i(52),
        c = i(6),
        d = i(48),
        u = {
            credenitals: {
                key: ["AIzaSyCs3nDE08_3R5K2T1Bx22kpM30F7YG7oas", "AIzaSyB0R6yyvCfQtGiQO3QnBdA80ETEXP95q4U", "AIzaSyB4q-29BnTe_HzBNN721CqQDrO4adNwVyc", "AIzaSyBB4Tz3Ri_J1VEXi9PQcYUlMbKlxX5eXUY"],
                clientId: ["1043905621618-7ucc82n1tftafbcle61d9bbo2o9m5fsl.apps.googleusercontent.com", "566362027879-qtd61rknt0uib4ot5lk3etpbpgevqfds.apps.googleusercontent.com", "455766416355-rqacpj1ekjiae2gkq9jd18af8p2npss8.apps.googleusercontent.com", "374361881839-al94hukaoe16seafjo7i266b45p2u4gf.apps.googleusercontent.com"],
                secret: ["iiqucIR3wJXnsEaZa4D8eDGo", "891QVeNchJlSoJilE1c8QyGc", "69x9MTMlc1PDgddxDwGgYJuA", "JVrZN38438O8BU6cgiVrmH_-"]
            },
            categories: [],
            subscriptions: [],
            playlists: [],
            BASE_URL: "https://www.googleapis.com/youtube/v3/",
            APP_DOMAIN: "https://mathiasbynens.be/demo/css-without-html",
            AUTH_URL: "",
            credentialsIndex: 0,
            token: !1,
            refreshToken: !1,
            activeKey: "",
            staticUrl: "",
            request: function(e, t, i) {
                var n = this;
                return new r(function(r, l) {
                    var c = new XMLHttpRequest;
                    c.open(e, n.BASE_URL + t + n.staticUrl), c.setRequestHeader("Accept", "application/json"), c.setRequestHeader("Content-Type", "application/json"), n.token && c.setRequestHeader("Authorization", "Bearer " + n.token), c.onload = function() {
                        200 === this.status ? r(this.responseText) : 401 === this.status ? (u.token = !1, a.settings.sessionToken = !1, s(a.settings).then(function() {
                            return o()
                        }, function() {
                            c.request(e, t, i).then(function(e) {
                                r(e)
                            })
                        })["catch"](function(e) {
                            l(e)
                        })) : l(this.statusText)
                    }, c.onerror = function() {
                        l()
                    }, c.send(i)
                })
            }
        };
    u.init = function(e) {
        var t = this;
        return e.customCredenitals ? (this.credenitals = e.customCredenitals, this.credentialsIndex = n(0, this.credenitals.key.length - 1)) : "number" == typeof e.credentialsIndex && -1 !== e.credentialsIndex ? this.credentialsIndex = e.credentialsIndex : this.credentialsIndex = n(0, this.credenitals.key.length - 1), this.activeKey = this.credenitals.key[this.credentialsIndex], this.AUTH_URL = "https://accounts.google.com/o/oauth2/auth?approval_prompt=force&response_type=code&scope=https://www.googleapis.com/auth/youtube.force-ssl&access_type=offline&redirect_uri=" + this.APP_DOMAIN + "&client_id=" + this.credenitals.clientId[this.credentialsIndex], a.params.regionCode ? this.staticUrl = "&key=" + this.activeKey + "&hl=" + c.locales[a.languageIndex] + "&regionCode=" + a.params.regionCode : this.staticUrl = "&key=" + this.activeKey + "&hl=" + c.locales[a.languageIndex] + "&regionCode=" + c.regions[a.languageIndex], t.credentialsIndex === e.credentialsIndex && (t.credentialsIndex = n(0, t.credenitals.key.length - 1)), t.activeKey = t.credenitals.key[t.credentialsIndex], t.AUTH_URL = "https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/youtube.force-ssl&access_type=offline&redirect_uri=" + t.APP_DOMAIN + "&client_id=" + t.credenitals.clientId[t.credentialsIndex], s(a.settings).then(function() {
            return o()
        }, function() {
            return t.credentialsIndex === e.credentialsIndex && (t.credentialsIndex = n(0, t.credenitals.key.length - 1)), t.activeKey = t.credenitals.key[t.credentialsIndex], t.AUTH_URL = "https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/youtube.force-ssl&access_type=offline&redirect_uri=" + t.APP_DOMAIN + "&client_id=" + t.credenitals.clientId[t.credentialsIndex], o()
        })["catch"](function(e) {})
    }, u.postAuth = function(e) {
        var t = this;
        return new r(function(i, n) {
            var o = new XMLHttpRequest;
            e || n(), o.open("POST", "https://www.googleapis.com/oauth2/v4/token"), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.onload = function() {
                200 === this.status ? (t.token = JSON.parse(this.responseText), t.refreshToken = t.token.refresh_token, t.token = t.token.access_token, i({
                    refreshToken: t.refreshToken,
                    sessionToken: t.token
                })) : (t.token = !1, t.refreshToken = !1, n(this.status))
            }, o.onerror = function() {
                t.token = !1, t.refreshToken = !1, n(this.status)
            }, o.send("code=" + e + "&client_id=" + t.credenitals.clientId[t.credentialsIndex] + "&client_secret=" + t.credenitals.secret[t.credentialsIndex] + "&grant_type=authorization_code&redirect_uri=" + t.APP_DOMAIN)
        })
    }, u.normalizeVideoDuration = function(e) {
        var t, i, n, o = new Date(0);
        return e = e.replace("PT", "").replace("S", "").split("M"), e.length > 1 ? (e[0] = e[0].split("H"), e[0].length > 1 ? (o.setUTCHours(e[0][0]), o.setUTCMinutes(e[0][1])) : o.setUTCMinutes(e[0]), o.setUTCSeconds(e[1]), n = e[1]) : (o.setUTCSeconds(e[0]), n = e[0]), t = o.getUTCHours(), i = o.getUTCMinutes(), 10 > n && (n || (n = "0"), n = "0" + n), t > 1 && 10 > i && (i = "0" + i), 1 > t ? t = "" : 10 > t && (t = "0" + t + ":"), t + i + ":" + n
    }, e.exports = u
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t, i = this;
        if (e = e || {}, this.visible = !0, this.focusable = !0, this.$node = null, this.$body = null, this.parent = null, this.children = [], this.propagate = !!e.propagate, o.call(this, e.data), this.$node = e.$node || document.createElement("div"), this.$body = e.$body || this.$node, this.$node.className += " component " + (e.className || ""), this.id = e.id || this.$node.id || "cid" + a++, e.parent && e.parent.add(this), e.visible === !1 && this.hide(), e.focusable === !1 && (this.focusable = !1), this.defaultEvents) {
            e.events = e.events || {};
            for (t in this.defaultEvents) e.events[t] = e.events[t] || this.defaultEvents[t]
        }
        e.events && this.addListeners(e.events), e.children && this.add.apply(this, e.children), this.$node.addEventListener("click", function(e) {
            0 === e.button && (i.focus(), i.events.click && i.emit("click", {
                event: e
            })), e.stopPropagation()
        })
    }
    var o = i(7),
        s = i(3),
        a = 0;
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.defaultEvents = null, n.prototype.add = function(e) {
        var t;
        for (t = 0; t < arguments.length; t++) e = arguments[t], this.children.push(e), e.parent = this, e.$node && null === e.$node.parentNode && this.$body.appendChild(e.$node), this.events.add && this.emit("add", {
            item: e
        })
    }, n.prototype.remove = function() {
        this.parent && (s.current.activeComponent === this && (this.blur(), this.parent.focus()), this.parent.children.splice(this.parent.children.indexOf(this), 1)), this.children.forEach(function(e) {
            e.remove()
        }), this.removeAllListeners(), this.$node.parentNode.removeChild(this.$node), this.events.remove && this.emit("remove")
    }, n.prototype.focus = function(e) {
        var t = s.current,
            i = t.activeComponent;
        return this.focusable && this !== i ? (i && i.blur(), t.activeComponent = i = this, i.$node.classList.add("focus"), i.events.focus && i.emit("focus", e), !0) : !1
    }, n.prototype.blur = function() {
        var e = s.current,
            t = e.activeComponent;
        return this.$node.classList.remove("focus"), this === t ? (e.activeComponent = null, this.events.blur && this.emit("blur"), !0) : !1
    }, n.prototype.show = function(e) {
        return this.visible ? !0 : (this.$node.classList.remove("hidden"), this.visible = !0, this.events.show && this.emit("show", e), !0)
    }, n.prototype.hide = function() {
        return this.visible ? (this.$node.classList.add("hidden"), this.visible = !1, this.events.hide && this.emit("hide"), !0) : !0
    }, e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        active: !0,
        languages: ["en", "ru", "uk", "de", "ar"],
        languagesCodeLocalized: ["EN", "РУ", "УКР", "DE", "AR"],
        languagesLocalized: ["English", "Русский", "Українська", "Deutch", "Arabian"],
        locales: ["en-US", "ru-RU", "uk-UA", "de-DE", "ar-EG"],
        regions: ["US", "RU", "UA", "DE", "EG"],
        directions: ["ltr", "ltr", "ltr", "ltr", "rtl"],
        fromCode: "UTF-8",
        addComments: "gettext",
        indent: !1,
        noLocation: !0,
        noWrap: !0,
        sortOutput: !0,
        sortByFile: !1,
        verbose: !1
    }
}, function(e, t, i) {
    "use strict";

    function n() {
        this.events = {}
    }
    n.prototype = {
        addListener: function(e, t) {
            this.events[e] = this.events[e] || [], this.events[e].push(t)
        },
        once: function(e, t) {
            var i = this;
            this.events[e] = this.events[e] || [], this.events[e].push(function n() {
                t.apply(this, arguments), i.removeListener(e, n)
            })
        },
        addListeners: function(e) {
            var t;
            if ("object" == typeof e)
                for (t in e) e.hasOwnProperty(t) && this.addListener(t, e[t])
        },
        removeListener: function(e, t) {
            this.events[e] && (this.events[e] = this.events[e].filter(function(e) {
                return e !== t
            }), 0 === this.events[e].length && (this.events[e] = void 0))
        },
        removeAllListeners: function(e) {
            0 === arguments.length ? this.events = {} : e && (this.events[e] = void 0)
        },
        emit: function(e, t, i) {
            var n, o = this.events[e];
            if (o)
                for (n = 0; n < o.length; n++) o[n].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, n.prototype.constructor = n, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.$focusItem = null, this.viewIndex = null, this.data = [], this.type = this.TYPE_VERTICAL, this.size = 5, this.cycle = !1, this.scroll = null, e.type && (this.type = e.type), e.className = "list " + (e.className || ""), this.type === this.TYPE_HORIZONTAL && (e.className += " horizontal"), s.call(this, e), this.init(e)
    }

    function o(e) {
        var t, i;
        for (t = 0; t < e.length; t++) i = e[t], "object" != typeof i && (i = e[t] = {
            value: e[t]
        });
        return e
    }
    var s = i(5),
        a = i(1);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.TYPE_VERTICAL = 1, n.prototype.TYPE_HORIZONTAL = 2, n.prototype.renderItemDefault = function(e, t) {
        e.innerText = t.value
    }, n.prototype.renderItem = n.prototype.renderItemDefault, n.prototype.defaultEvents = {
        mousewheel: function(e) {
            this.type === this.TYPE_VERTICAL && e.wheelDeltaY && this.move(e.wheelDeltaY > 0 ? a.up : a.down), this.type === this.TYPE_HORIZONTAL && e.wheelDeltaX && this.move(e.wheelDeltaX > 0 ? a.left : a.right)
        },
        keydown: function(e) {
            switch (e.code) {
                case a.up:
                case a.down:
                case a.right:
                case a.left:
                case a.pageUp:
                case a.pageDown:
                case a.home:
                case a.end:
                    this.move(e.code);
                    break;
                case a.ok:
                    this.events["click:item"] && this.emit("click:item", {
                        $item: this.$focusItem,
                        event: e
                    })
            }
        }
    }, n.prototype.init = function(e) {
        var t, i, n = this,
            o = this.$body.children.length,
            s = function(e) {
                this.data && (n.focusItem(this), n.events["click:item"] && n.emit("click:item", {
                    $item: this,
                    event: e
                }))
            };
        if (void 0 !== e.cycle && (this.cycle = e.cycle), e.scroll && (this.scroll = e.scroll), e.render && (this.renderItem = e.render), e.size && (this.size = e.size), this.size !== o)
            for (o > 0 && (this.$body.innerText = null), i = 0; i < this.size; i++) t = document.createElement("div"), t.index = i, t.className = "item", t.addEventListener("click", s), this.$body.appendChild(t);
        void 0 !== e.viewIndex, this.viewIndex = null, e.data && e.data.length && this.setData(e)
    }, n.prototype.setData = function(e) {
        e.data && (this.data = o(e.data)), this.viewIndex = null, void 0 !== e.focusIndex ? this.focusIndex(e.focusIndex) : (this.$focusItem && this.blurItem(this.$focusItem), this.renderView(e.viewIndex || 0))
    }, n.prototype.renderView = function(e) {
        var t, i, n, o, s;
        if (this.viewIndex !== e) {
            for (o = this.viewIndex, this.viewIndex = s = e, i = 0; i < this.size; i++) t = this.$body.children[i], n = this.data[e], n ? (t.data = n, t.index = e, this.renderItem(t, n), n.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "&nbsp;"), e++;
            return this.events["move:view"] && this.emit("move:view", {
                prevIndex: o,
                currIndex: s
            }), this.events["select:item"] && this.emit("select:item", {
                $item: t
            }), this.scroll && this.scroll.scrollTo(this.viewIndex), !0
        }
        return !1
    }, n.prototype.move = function(e) {
        (e === a.up && this.type === this.TYPE_VERTICAL || e === a.left && this.type === this.TYPE_HORIZONTAL) && (this.$focusItem && this.$focusItem.index > 0 ? this.$focusItem === this.$body.firstChild ? this.renderView(this.viewIndex - 1) : this.focusItem(this.$focusItem.previousSibling) : this.cycle ? (this.move(a.end), this.events.cycle && this.emit("cycle", {
            direction: e
        })) : this.events.overflow && this.emit("overflow", {
            direction: e
        })), (e === a.down && this.type === this.TYPE_VERTICAL || e === a.right && this.type === this.TYPE_HORIZONTAL) && (this.$focusItem && this.$focusItem.index < this.data.length - 1 ? this.$focusItem === this.$body.lastChild ? this.renderView(this.viewIndex + 1) : this.focusItem(this.$focusItem.nextSibling) : this.cycle ? (this.move(a.home), this.events.cycle && this.emit("cycle", {
            direction: e
        })) : this.events.overflow && this.emit("overflow", {
            direction: e
        })), e === a.pageUp && (this.viewIndex < this.size ? this.renderView(0) : this.renderView(this.viewIndex - this.size + 1), this.focusItem(this.$body.firstChild)), e === a.pageDown && (this.data.length > this.size ? (this.viewIndex > this.data.length - 2 * this.size ? this.renderView(this.data.length - this.size) : this.renderView(this.viewIndex + this.size - 1), this.focusItem(this.$body.lastChild)) : this.focusItem(this.$body.children[this.data.length - 1])), e === a.home && (this.renderView(0), this.focusItem(this.$body.firstChild)), e === a.end && (this.data.length > this.size ? (this.renderView(this.data.length - this.size), this.focusItem(this.$body.lastChild)) : this.focusItem(this.$body.children[this.data.length - 1]))
    }, n.prototype.focusItem = function(e) {
        var t = this.$focusItem;
        return e && t !== e ? (null !== t && (t.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: t
        })), this.$focusItem = e, this.$focusItem.data = this.data[this.$focusItem.index], e.classList.add("focus"), this.events["focus:item"] && this.emit("focus:item", {
            $prev: t,
            $curr: e
        }), this.events["select:item"] && this.emit("select:item", {
            $item: e
        }), !0) : !1
    }, n.prototype.blurItem = function(e) {
        return e ? (e === this.$focusItem && (this.$focusItem = null), e.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: e
        }), !0) : !1
    }, n.prototype.focusIndex = function(e) {
        var t = this.viewIndex || 0;
        e >= t + this.size ? (e = e < this.data.length - 1 ? e : this.data.length - 1, this.renderView(e - this.size + 1), this.focusItem(this.$body.lastChild)) : t > e ? (e = e > 0 ? e : 0, this.renderView(e), this.focusItem(this.$body.firstChild)) : (null === this.viewIndex && this.renderView(0), this.focusItem(this.$body.children[e - t]))
    }, n.prototype.markItem = function(e, t) {
        t ? e.classList.add("mark") : e.classList.remove("mark"), e.data.mark = t
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n() {
        l && (s.$node.style.backgroundImage = "url(" + c[r].src + ")", ++r, 4 === r && (r = 0)), a = setTimeout(n, 200)
    }
    var o = i(25),
        s = new o({
            $node: document.getElementById("loaderWidget"),
            visible: !1
        }),
        a = -1,
        r = 0,
        l = !1,
        c = [];
    ! function() {
        var e = 4;
        ["img/loader/1.png", "img/loader/2.png", "img/loader/3.png", "img/loader/4.png"].forEach(function(t) {
            var i = new Image;
            i.src = t, i.onload = function() {
                --e, 0 === e && (l = !0)
            }, c.push(i)
        })
    }(), s.show = function(e) {
        return this.visible ? !0 : (this.$node.classList.remove("hidden"), this.visible = !0, void 0 !== this.events.show && this.emit("show", e), a = setTimeout(n, 200), !0)
    }, s.hide = function() {
        return r = 1, clearTimeout(a), this.visible ? (this.$node.classList.add("hidden"), this.visible = !1, void 0 !== this.events.hide && this.emit("hide"), !0) : !0
    }, e.exports = s
}, function(e, t, i) {
    "use strict";

    function n(e) {
        this.state = null, this.value = null, this.deferreds = [], d(e, o(a, this), o(r, this))
    }

    function o(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }

    function s(e) {
        var t = this;
        return null === this.state ? void this.deferreds.push(e) : void setTimeout(function() {
            var i, n = t.state ? e.onFulfilled : e.onRejected;
            if (null === n) return void(t.state ? e.resolve : e.reject)(t.value);
            try {
                i = n(t.value)
            } catch (o) {
                return void e.reject(o)
            }
            e.resolve(i)
        })
    }

    function a(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var t = e.then;
                if ("function" == typeof t) return void d(o(t, e), o(a, this), o(r, this))
            }
            this.state = !0, this.value = e, l.call(this)
        } catch (i) {
            r.call(this, i)
        }
    }

    function r(e) {
        this.state = !1, this.value = e, l.call(this)
    }

    function l() {
        var e, t;
        for (e = 0, t = this.deferreds.length; t > e; e++) s.call(this, this.deferreds[e]);
        this.deferreds = null
    }

    function c(e, t, i, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = i, this.reject = n
    }

    function d(e, t, i) {
        var n = !1;
        try {
            e(function(e) {
                n || (n = !0, t(e))
            }, function(e) {
                n || (n = !0, i(e))
            })
        } catch (o) {
            if (n) return;
            n = !0, i(o)
        }
    }
    n.prototype["catch"] = function(e) {
        return this.then(null, e)
    }, n.prototype.then = function(e, t) {
        var i = this;
        return new n(function(n, o) {
            s.call(i, new c(e, t, n, o))
        })
    }, n.all = function() {
        var e = Array.prototype.slice.call(1 === arguments.length && Array.isArray(arguments[0]) ? arguments[0] : arguments);
        return new n(function(t, i) {
            function n(o, a) {
                try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var r = a.then;
                        if ("function" == typeof r) return void r.call(a, function(e) {
                            n(o, e)
                        }, i)
                    }
                    e[o] = a, 0 === --s && t(e)
                } catch (l) {
                    i(l)
                }
            }
            var o, s = e.length;
            if (0 === e.length) return t([]);
            for (o = 0; o < e.length; o++) n(o, e[o])
        })
    }, n.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === n ? e : new n(function(t) {
            t(e)
        })
    }, n.reject = function(e) {
        return new n(function(t, i) {
            i(e)
        })
    }, n.race = function(e) {
        return new n(function(t, i) {
            for (var n = 0, o = e.length; o > n; n++) e[n].then(t, i)
        })
    }, e.exports = window.Promise || n
}, function(e, t, i) {
    "use strict";
    var n = i(6),
        o = i(19);
    e.exports = {
        languageIndex: 0,
        nextLang: function(e) {
            return e === n.languages.length - 1 ? 0 : ++e
        },
        setLang: function(e) {
            var t = this;
            i(34).load({
                name: e
            }, function(i) {
                i ? t.languageIndex = -1 : t.languageIndex = n.languages.indexOf(e), -1 === t.languageIndex && (t.languageIndex = n.languages.indexOf(o.defaultSettings.language))
            })
        }
    }
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.focusable = e.focusable || !1, e.className = "panel " + (e.className || ""), o.call(this, e)
    }
    var o = i(5);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t = this;
        this.model = null, this.activePage = 0, this.$title = null, this.loading = !1, e.visible = !1, e.data = [{
            id: "",
            value: "",
            publishedAt: "",
            icon: "",
            duration: "",
            title: "",
            channelTitle: "",
            viewCount: "",
            locale: {
                publishedAt: "",
                viewCount: "",
                channelTitle: ""
            }
        }], s.call(t, e), this.$node.classList.add("movieList"), this.$body.classList.add("movieListBody"), void 0 !== e.$title && (this.$title = e.$title, this.$title.classList.add("movieListHeader")), void 0 !== e.model && (this.model = e.model, this.model.addListener("content:changed", function() {
            t.model.getPage({
                page: 0,
                count: 50
            }).then(function(e) {
                t.activePage = 0, t.data = e, t.viewIndex = null, t.renderView(0), t.focusIndex(0), t.emit("view:ready")
            }, function(e) {
                t.emit("view:error", e)
            })["catch"](function(e) {})
        }))
    }
    var o = i(1),
        s = i(8);
    n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.prototype.renderView = function(e) {
        var t, i, n, o, s;
        if (this.viewIndex !== e) {
            for (o = this.viewIndex, this.viewIndex = s = e, i = 0; i < this.size; i++) t = this.$body.children[i], n = this.data[e], void 0 !== n ? (t.data = n, t.index = e, this.renderItem(t, n), n.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "", t.ready = !1), e++;
            return void 0 !== this.events["move:view"] && this.emit("move:view", {
                prevIndex: o,
                currIndex: s
            }), !0
        }
        return !1
    }, n.prototype.renderItem = function(e, t) {
        var i, n, o;
        e.ready ? (e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", e.$videoDuration.innerText = t.duration, e.$videoTitle.innerText = t.title, e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = t.locale.viewCount, e.$dateAdded.innerText = t.locale.publishedAt) : (i = document.createElement("div"), i.className = "container", e.appendChild(i), n = document.createElement("div"), n.className = "tileTop", i.appendChild(n), o = document.createElement("div"), o.className = "tileBottom", i.appendChild(o), e.$videoThumb = document.createElement("div"), e.$videoThumb.className = "thumb", e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", n.appendChild(e.$videoThumb), e.$videoDuration = document.createElement("div"), e.$videoDuration.className = "duration", e.$videoDuration.innerText = t.duration, n.appendChild(e.$videoDuration), e.$videoTitle = document.createElement("div"), e.$videoTitle.className = "title", e.$videoTitle.innerText = t.title, o.appendChild(e.$videoTitle), e.$videoAthour = document.createElement("div"), e.$videoAthour.className = "uploader", t.channelTitle && (e.$videoAthour.innerText = t.locale.channelTitle), o.appendChild(e.$videoAthour),
            e.$viewCounter = document.createElement("div"), e.$viewCounter.className = "viewCount", t.viewCount && (e.$viewCounter.innerText = t.locale.viewCount), o.appendChild(e.$viewCounter), e.$dateAdded = document.createElement("div"), e.$dateAdded.className = "uploaded", e.$dateAdded.innerText = t.locale.publishedAt, o.appendChild(e.$dateAdded), e.ready = !0)
    }, n.prototype.defaultEvents.keydown = function(e) {
        if (!this.loading) switch (e.code) {
            case o.right:
                this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                break;
            case o.left:
                this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                break;
            case o.ok:
                void 0 !== this.events["click:item"] && this.emit("click:item", {
                    $item: this.$focusItem,
                    event: e
                })
        }
    }, e.exports = n
}, function(e, t, i) {
    "use strict";
    var n, o = i(1),
        s = i(2),
        a = i(8),
        r = i(31);
    n = new a({
        $node: window.pmListMainMenu,
        $body: window.pmListMainMenuBody,
        data: r.content.data,
        size: s.data.metrics.mainMenuSize,
        focusIndex: r.content.focusIndex,
        render: function(e, t) {
            e.ready || (e.$icon = document.createElement("span"), e.appendChild(e.$icon), e.$label = document.createElement("span"), e.appendChild(e.$label), e.ready = !0), t.type === r.types.CATEGORY_ITEM ? (e.$icon.className = t.className || "image", e.$icon.style.backgroundImage = t.icon ? "url(" + t.icon + ")" : "none", e.$label.className = "itemLabel", e.$label.innerHTML = t.value) : t.type === r.types.CATEGORY_HEADER && (e.$icon.className = "", e.$label.className = "categorylabel", e.$label.innerHTML = t.value)
        },
        visible: !1,
        events: {
            keydown: function(e) {
                switch (e.code) {
                    case o.right:
                        this.hide(), r.content.tabs[r.activeTab].activate();
                        break;
                    case o.up:
                    case o.down:
                    case o.pageUp:
                    case o.pageDown:
                    case o.home:
                    case o.end:
                        this.move(e.code);
                        break;
                    case o.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
            },
            "click:item": function(e) {
                this.hide(), "function" == typeof e.$item.data.onclick ? (r.content.tabs[r.activeTab].activate(e.$item.data), e.$item.data.onclick()) : (r.content.tabs[r.activeTab].hide(), r.activeTab = e.$item.data.tabIndex, r.content.tabs[r.activeTab].activate(e.$item.data))
            },
            focus: function() {
                this.show()
            },
            blur: function() {
                this.hide()
            }
        }
    }), n.move = function(e) {
        var t = null,
            i = null;
        e === o.up && this.$focusItem && this.$focusItem.index > 0 && (this.$focusItem === this.$body.firstChild ? i = this.viewIndex - 1 : t = this.$focusItem.previousSibling), e === o.down && this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem === this.$body.lastChild ? i = this.viewIndex + 1 : t = this.$focusItem.nextSibling), e === o.pageUp && (i = this.viewIndex < this.size ? 0 : this.viewIndex - this.size + 1, t = this.$body.firstChild), e === o.pageDown && (this.data.length > this.size ? (i = this.viewIndex > this.data.length - 2 * this.size ? this.data.length - this.size : this.viewIndex + this.size - 1, t = this.$body.lastChild) : t = this.$body.children[this.data.length - 1]), e === o.home && (i = 0, t = this.$body.firstChild), e === o.end && (this.data.length > this.size ? (i = this.data.length - this.size, t = this.$body.lastChild) : t = this.$body.children[this.data.length - 1]), null !== i && this.renderView(i), null !== t && this.focusItem(t), this.$focusItem.data.disabled && (this.$focusItem.index > 0 ? this.move(e) : e === o.up && this.move(o.down))
    }, e.exports = n
}, function(e, t, i) {
    "use strict";
    var n, o = i(25),
        s = new o({
            $node: document.getElementById("widgetHintButtons"),
            visible: !1
        }),
        a = {
            BACK: document.getElementById("hintBack"),
            SEARCH: document.getElementById("hintSearch"),
            MORE: document.getElementById("hintMore"),
            GUIDE: document.getElementById("hintGuide")
        };
    for (n in a) a[n].$icon = a[n].appendChild(document.createElement("div")), a[n].$label = a[n].appendChild(document.createElement("div")), a[n].$label.className = "hintText";
    s.updateView = function(e, t) {
        var i;
        this.show();
        for (i in e) e.hasOwnProperty(i) && (e[i].visible ? (a[i].$icon.className = "ico " + e[i].icon, a[i].style.display = "", a[i].$label.innerHTML = e[i].text) : a[i].style.display = "none");
        t ? s.$node.className = "component widget " + t : s.$node.className = "component widget"
    }, e.exports = s
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.active = !1, this.activeComponent = null, e.className = "page " + (e.className || ""), o.call(this, e), this.active = this.$node.classList.contains("active"), null === this.$node.parentNode && document.body.appendChild(this.$node), this.page = this
    }
    var o = i(5);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t, i) {
    "use strict";
    var n = i(10),
        o = i(7),
        s = i(4),
        a = i(23),
        r = new o;
    r.activeCategory = {}, r.pages = {}, r.ownChannel = null, r.cacheKey = function(e) {
        return "c:" + e.category.id + ";p:" + e.page
    }, r.getPage = function(e) {
        var t, i, o = this;
        return e.page = +e.page || 0, e.category = e.category || this.activeCategory, new n(function(n, r) {
            if (t = a.get(o.cacheKey(e))) n(t);
            else {
                if (i = "channels?part=snippet&categoryId=" + e.category.id + "&maxResults=" + e.count, e.page) {
                    if (!o.pages[e.page]) return o.activeCategory.totalResults === e.page ? void r("overflow") : void r("no page");
                    i += "&pageToken=" + o.pages[e.page]
                }
                s.request("GET", i).then(function(t) {
                    var i, s, r = [];
                    for (t = JSON.parse(t), t.pageInfo.totalResults && (o.activeCategory.totalResults = t.pageInfo.totalResults), t.nextPageToken && (o.pages[e.page + 1] = t.nextPageToken), t.prevPageToken && (o.pages[e.page - 1] = t.prevPageToken), t = t.items, s = t.length, i = 0; s > i; ++i) r.push({
                        value: t[i].id,
                        id: t[i].id,
                        title: t[i].snippet.localized.title,
                        icon: t[i].snippet.thumbnails.high.url
                    });
                    a.set(o.cacheKey(e), r, 3e5), n(r)
                })["catch"](function(e) {})
            }
        })
    }, r.getInfo = function(e) {
        return new n(function(t, i) {
            s.request("GET", "channels?part=snippet&id=" + e).then(function(e) {
                t(JSON.parse(e).items)
            }, i)
        })
    }, r.getMine = function() {
        return new n(function(e, t) {
            null !== r.ownChannel ? e(r.ownChannel) : s.request("GET", "channels?part=snippet&mine=true").then(function(t) {
                r.ownChannel = JSON.parse(t).items[0], r.ownChannel.title = r.ownChannel.snippet.title, r.ownChannel.icon = r.ownChannel.snippet.thumbnails["default"].url, s.ownChannel = r.ownChannel, e(r.ownChannel)
            }, t)
        })
    }, r.setActiveCategory = function(e) {
        return e && this.activeCategory.id !== e.id ? (this.activeCategory = e, this.pages = {}, void 0 !== this.events["category:changed"] && this.emit("category:changed", e), !0) : !1
    }, e.exports = r
}, function(e, t, i) {
    "use strict";

    function n(e) {
        this.pages = {}, this.searchQuery = "", this.relatedToVideoId = "", this.channelId = "", this.order = "", this.type = "", d.call(this), e = e || {}, this.filter(e)
    }
    var o, s, a, r = i(10),
        l = i(2),
        c = i(4),
        d = i(21);
    n.prototype = Object.create(d.prototype), n.prototype.constructor = n, n.prototype.getPage = function(e) {
        var t, n = this;
        return o || (o = i(11), a = i(24), s = gettext("Author")), new r(function(i, o) {
            if (e.channel = e.channel || n.channel, e.type = n.type, e.searchQuery = e.searchQuery || n.searchQuery, e.page = +e.page || 0, e.relatedToVideoId = e.relatedToVideoId || n.relatedToVideoId, t = "search?part=id&maxResults=" + (e.count || 6), e.page) {
                if (!n.pages[e.page]) return void o();
                t += "&pageToken=" + n.pages[e.page]
            }
            e.channel && e.channel.id && (t += "&channelId=" + e.channel.id), n.order && (t += "&order=" + n.order), e.relatedToVideoId ? t += "&type=video&relatedToVideoId=" + e.relatedToVideoId : e.type && (t += "&type=video"), e.searchQuery && (t += "&q=" + encodeURIComponent(e.searchQuery)), l.settings.safeSearch && (t += "&safeSearch=strict"), c.request("GET", t).then(function(t) {
                var l, d = [],
                    u = 0,
                    h = {},
                    p = {},
                    m = "",
                    v = "",
                    f = "";
                if (t = JSON.parse(t), t.nextPageToken && (n.pages[e.page + 1] = t.nextPageToken), t.prevPageToken && (n.pages[e.page - 1] = t.prevPageToken), t = t.items, 0 === t.length) o("empty");
                else {
                    for (u = t.length, l = 0; u > l; ++l) "youtube#video" === t[l].id.kind ? m += t[l].id.videoId + "," : "youtube#channel" === t[l].id.kind ? (v += t[l].id.channelId + ",", h[l] = 1) : "youtube#playlist" === t[l].id.kind && (f += t[l].id.playlistId + ",", p[l] = 1);
                    r.all([n.getMovies(m.substr(0, m.length - 1)), n.getChannelsInfo(v.substr(0, v.length - 1)), n.getTotalInfoPlaylists({
                        id: f.substr(0, f.length - 1),
                        channel: !1
                    })]).then(function(e) {
                        var t = +new Date,
                            n = 0,
                            o = 0,
                            r = 0;
                        for (l = 0; u > l; ++l) h[l] && e[1][o] ? (d.push({
                            value: 1,
                            id: e[1][o].id,
                            title: e[1][o].snippet.localized.title,
                            icon: e[1][o].snippet.thumbnails.high.url,
                            type: "channel",
                            viewCount: e[1][o].statistics.viewCount,
                            commentCount: e[1][o].statistics.commentCount,
                            subscriberCount: e[1][o].statistics.subscriberCount,
                            hiddenSubscriberCount: e[1][o].statistics.hiddenSubscriberCount,
                            videoCount: e[1][o].statistics.videoCount,
                            locale: {
                                subscriberCount: e[1][o].statistics.subscriberCount + " " + ngettext("subscriber", "subscribers", +e[1][o].statistics.subscriberCount)
                            }
                        }), ++o) : p[l] && e[2][r] ? (d.push({
                            value: 1,
                            playlistId: e[2][r].id,
                            channel: {
                                title: e[2][r].snippet.channelTitle,
                                id: e[2][r].snippet.channelId
                            },
                            title: e[2][r].snippet.title,
                            icon: e[2][r].snippet.thumbnails.high.url,
                            type: "playlist",
                            channelTitle: e[2][r].snippet.channelTitle,
                            viewCount: " ",
                            duration: " ",
                            publishedAt: e[2][r].snippet.publishedAt,
                            locale: {
                                publishedAt: a(e[2][r].snippet.publishedAt, t),
                                viewCount: " ",
                                channelTitle: e[2][r].snippet.channelTitle ? s + ": " + e[2][r].snippet.channelTitle : " "
                            }
                        }), ++r) : e[0][n] && (d.push({
                            value: 1,
                            id: e[0][n].id,
                            channelTitle: e[0][n].snippet.channelTitle,
                            duration: c.normalizeVideoDuration(e[0][n].contentDetails.duration),
                            realDuration: e[0][n].contentDetails.duration,
                            viewCount: e[0][n].statistics.viewCount,
                            publishedAt: e[0][n].snippet.publishedAt,
                            dimension: e[0][n].contentDetails.dimension,
                            definition: e[0][n].contentDetails.definition,
                            title: e[0][n].snippet.localized.title,
                            icon: e[0][n].snippet.thumbnails.high.url,
                            channelId: e[0][n].snippet.channelId,
                            type: "video",
                            locale: {
                                publishedAt: a(e[0][n].snippet.publishedAt, t),
                                viewCount: ngettext("view", "views", +e[0][n].statistics.viewCount) + " " + e[0][n].statistics.viewCount,
                                channelTitle: s + ": " + e[0][n].snippet.channelTitle
                            }
                        }), ++n);
                        i(d)
                    }, function(e) {})["catch"](function(e) {})
                }
            })["catch"](function(e) {})
        })
    }, n.prototype.getChannelsInfo = function(e) {
        return e ? c.request("GET", "channels?part=snippet,statistics&id=" + e).then(function(e) {
            return JSON.parse(e).items
        }) : r.resolve([])
    }, n.prototype.filter = function(e) {
        var t = !1;
        return void 0 !== e.channel && this.init({
            channel: e.channel
        }), void 0 !== e.searchQuery && this.searchQuery !== e.searchQuery && (t = !0, this.searchQuery = e.searchQuery), void 0 !== e.relatedToVideoId && this.relatedToVideoId !== e.relatedToVideoId && (t = !0, this.relatedToVideoId = e.relatedToVideoId), void 0 !== e.order && this.order !== e.order && (t = !0, this.order = e.order), void 0 !== e.type && this.type !== e.type && (t = !0, this.type = e.type), t ? (this.pages = {}, this.emit("content:changed", e), !0) : !1
    }, e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        defaultSettings: {
            safeSearch: 0,
            quality: 0,
            language: "en",
            languageOverwrite: 0,
            keyboardLanguage: 0,
            credentialsIndex: -1,
            refreshToken: null,
            sessionToken: null
        },
        settingsFile: "youtube.json",
        logging: !1,
        ajaxDebug: !1
    }
}, function(e, t, i) {
    function n(e) {
        return i(o(e))
    }

    function o(e) {
        return s[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var s = {
        "./ar": 26,
        "./ar.js": 26,
        "./de": 27,
        "./de.js": 27,
        "./en": 28,
        "./en.js": 28,
        "./ru": 29,
        "./ru.js": 29,
        "./uk": 30,
        "./uk.js": 30
    };
    n.keys = function() {
        return Object.keys(s)
    }, n.resolve = o, e.exports = n, n.id = 20
}, function(e, t, i) {
    "use strict";

    function n(e) {
        this.pages = {}, this.channel = null, r.call(this), e = e || {}, void 0 !== e.events && this.addListeners(e.events), this.init(e)
    }
    var o, s, a = i(10),
        r = i(32),
        l = i(4);
    n.prototype = Object.create(r.prototype), n.prototype.constructor = n, n.prototype.getPage = function(e) {
        var t = this;
        return s || (o = i(24), s = gettext("Author")), e.channel = e.channel || this.channel, e.count = e.count || 6, e.page = +e.page || 0, new a(function(i, n) {
            return e.channel ? void t.getPlaylists({
                count: 1,
                channel: e.channel,
                page: e.page
            }).then(function(o) {
                e.playlist = o[0], t.getPlayListItems(e).then(i, n)
            }) : void n(e)
        })
    }, n.prototype.getPlaylists = function(e) {
        var t = this,
            i = "playlists?part=id";
        if (e.channel = e.channel || this.channel, e.channel) {
            if (e.page) {
                if (!t.pages[e.page]) return a.reject("no page");
                i += "&pageToken=" + t.pages[e.page]
            }
            return i += "&channelId=" + e.channel.id + "&maxResults=" + e.count, l.request("GET", i).then(function(i) {
                return i = JSON.parse(i), i.nextPageToken && (t.pages[e.page + 1] = i.nextPageToken), i.prevPageToken && (t.pages[e.page - 1] = i.prevPageToken), i.items
            })
        }
    }, n.prototype.getTotalInfoPlaylists = function(e) {
        var t = this,
            i = "playlists?part=snippet";
        if (e.channel = void 0 === e.channel ? this.channel : e.channel, e.page) {
            if (!t.pages[e.page]) return a.reject("no page");
            i += "&pageToken=" + t.pages[e.page]
        }
        if (e.channel) i += "&channelId=" + e.channel.id;
        else {
            if (!(void 0 !== e.id && e.id.length > 0)) return a.resolve([]);
            i += "&id=" + e.id
        }
        return void 0 !== e.count && (i += "&maxResults=" + e.count), l.request("GET", i).then(function(i) {
            return i = JSON.parse(i), i.nextPageToken && (t.pages[e.page + 1] = i.nextPageToken), i.prevPageToken && (t.pages[e.page - 1] = i.prevPageToken), i.items
        })
    }, n.prototype.getChannelBackground = function(e) {
        return e = e || this.channel, l.request("GET", "channels?part=brandingSettings&id=" + e.id).then(function(e) {
            return e = JSON.parse(e), e.items[0].brandingSettings.image.bannerTvImageUrl
        })
    }, n.prototype.init = function(e) {
        var t = !1;
        return void 0 !== e.channel && (this.channel ? this.channel && this.channel.id !== e.channel.id && (t = !0, this.channel = e.channel) : (t = !0, this.channel = e.channel)), e.mode && this.mode !== e.mode && (this.mode = e.mode), t ? (this.pages = {}, this.emit("content:changed", e), !0) : !1
    }, e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        initPlayer: gSTB.InitPlayer,
        saveUserData: gSTB.SaveUserData,
        loadUserData: gSTB.LoadUserData,
        setPosTime: gSTB.SetPosTime,
        getPosTime: gSTB.GetPosTime,
        play: gSTB.Play,
        pause: gSTB.Pause,
        continuePlay: gSTB.Continue,
        getVolume: gSTB.GetVolume,
        setVolume: gSTB.SetVolume,
        setNativeStringMode: gSTB && gSTB.SetNativeStringMode ? gSTB.SetNativeStringMode : function() {},
        setServiceButtonState: gSTB.EnableServiceButton,
        setVKButtonState: gSTB.EnableVKButton,
        setTvButtonState: gSTB.EnableTvButton,
        setAppButtonState: gSTB.EnableAppButton,
        hideVK: gSTB.HideVirtualKeyboard,
        showVK: gSTB.ShowVirtualKeyboard,
        getStandByStatus: gSTB.GetStandByStatus,
        setStandByStatus: gSTB.StandBy,
        getEnv: gSTB.GetEnv,
        isMuted: gSTB.GetMute,
        setMute: gSTB.SetMute,
        deviceModel: gSTB.GetDeviceModelExt
    }
}, function(e, t, i) {
    "use strict";
    var n = {
        store: {},
        size: 0,
        set: function(e, t, i) {
            var n, o, s = this;
            o = this.store[e] ? this.store[e] : void 0, o && o.timeout && clearTimeout(o.timeout), n = {
                value: t,
                timeout: -1
            }, "number" == typeof i && (n.timeout = setTimeout(function() {
                s.remove(e)
            }, i)), this.store[e] = n, ++this.size
        },
        get: function(e, t) {
            return this.store[e] ? "function" != typeof t ? this.store[e].value : void t(this.store[e].value) : !1
        },
        remove: function(e) {
            --this.size, this.store[e] = null
        },
        clear: function() {
            var e = this.size;
            return this.store = {}, e
        }
    };
    e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var i, n, o;
        return e ? (n = e.match(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).(\d\d\d)Z/), n.shift(), n.pop(), i = new Date(n[0], n[1] - 1, n[2], n[3], n[4], n[5]), i.setTime(t - i.getTime()), e = i.getTime(), i.getFullYear() > 1970 ? (o = i.getFullYear() - 1970, e = o + " " + ngettext("year", "years", +o) + " " + gettext("ago")) : i.getMonth() > 0 ? (o = i.getMonth() + 1, e = o + " " + ngettext("month", "months", +o) + " " + gettext("ago")) : i.getDate() > 1 ? (o = i.getDate(), e = o + " " + ngettext("day", "days", +o) + " " + gettext("ago")) : i.getHours() > 0 ? (o = i.getHours(), e = o + " " + ngettext("hour", "hours", +o) + " " + gettext("ago")) : i.getMinutes() > 0 ? (o = i.getMinutes(), e = o + " " + ngettext("minute", "minutes", +o) + " " + gettext("ago")) : (o = i.getSeconds(), e = o + " " + ngettext("second", "seconds", +o) + " " + gettext("ago")), e) : e
    }
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.focusable = e.focusable || !1, e.visible = e.visible || !1, e.className = "widget " + (e.className || ""), o.call(this, e)
    }
    var o = i(5);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "ض",
            className: "symbol"
        }, {
            value: "ص",
            className: "symbol"
        }, {
            value: "ث",
            className: "symbol"
        }, {
            value: "ق",
            className: "symbol"
        }, {
            value: "ف",
            className: "symbol"
        }, {
            value: "غ",
            className: "symbol"
        }, {
            value: "ع",
            className: "symbol"
        }, {
            value: "ه",
            className: "symbol"
        }, {
            value: "خ",
            className: "symbol"
        }, {
            value: "ح",
            className: "symbol"
        }, {
            value: "ج",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete wide",
            colSpan: 2
        }, {
            value: "&nbsp;",
            className: "icon keyDelete"
        }],
        [{
            value: "د",
            className: "symbol"
        }, {
            value: "ش",
            className: "symbol"
        }, {
            value: "س",
            className: "symbol"
        }, {
            value: "ي",
            className: "symbol"
        }, {
            value: "ب",
            className: "symbol"
        }, {
            value: "ل",
            className: "symbol"
        }, {
            value: "ا",
            className: "symbol"
        }, {
            value: "ت",
            className: "symbol"
        }, {
            value: "ن",
            className: "symbol"
        }, {
            value: "ذ",
            className: "symbol"
        }, {
            value: "م",
            className: "symbol"
        }, {
            value: "ك",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums wide"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "ط",
            className: "symbol"
        }, {
            value: "ئ",
            className: "symbol"
        }, {
            value: "ء",
            className: "symbol"
        }, {
            value: "ؤ",
            className: "symbol"
        }, {
            value: "ر",
            className: "symbol"
        }, {
            value: "لا",
            className: "symbol"
        }, {
            value: "ى",
            className: "symbol"
        }, {
            value: "ة",
            className: "symbol"
        }, {
            value: "و",
            className: "symbol"
        }, {
            value: "ز",
            className: "symbol"
        }, {
            value: "ظ",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 3
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "q",
            className: "symbol"
        }, {
            value: "w",
            className: "symbol"
        }, {
            value: "e",
            className: "symbol"
        }, {
            value: "r",
            className: "symbol"
        }, {
            value: "t",
            className: "symbol"
        }, {
            value: "z",
            className: "symbol"
        }, {
            value: "u",
            className: "symbol"
        }, {
            value: "i",
            className: "symbol"
        }, {
            value: "o",
            className: "symbol"
        }, {
            value: "p",
            className: "symbol"
        }, {
            value: "ü",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "a",
            className: "symbol"
        }, {
            value: "s",
            className: "symbol"
        }, {
            value: "d",
            className: "symbol"
        }, {
            value: "f",
            className: "symbol"
        }, {
            value: "g",
            className: "symbol"
        }, {
            value: "h",
            className: "symbol"
        }, {
            value: "j",
            className: "symbol"
        }, {
            value: "k",
            className: "symbol"
        }, {
            value: "l",
            className: "symbol"
        }, {
            value: "ö",
            className: "symbol"
        }, {
            value: "ä",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "y",
            className: "symbol"
        }, {
            value: "x",
            className: "symbol"
        }, {
            value: "c",
            className: "symbol"
        }, {
            value: "v",
            className: "symbol"
        }, {
            value: "b",
            className: "symbol"
        }, {
            value: "n",
            className: "symbol"
        }, {
            value: "m",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "@",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 13
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "q",
            className: "symbol"
        }, {
            value: "w",
            className: "symbol"
        }, {
            value: "e",
            className: "symbol"
        }, {
            value: "r",
            className: "symbol"
        }, {
            value: "t",
            className: "symbol"
        }, {
            value: "y",
            className: "symbol"
        }, {
            value: "u",
            className: "symbol"
        }, {
            value: "i",
            className: "symbol"
        }, {
            value: "o",
            className: "symbol"
        }, {
            value: "p",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "a",
            className: "symbol"
        }, {
            value: "s",
            className: "symbol"
        }, {
            value: "d",
            className: "symbol"
        }, {
            value: "f",
            className: "symbol"
        }, {
            value: "g",
            className: "symbol"
        }, {
            value: "h",
            className: "symbol"
        }, {
            value: "j",
            className: "symbol"
        }, {
            value: "k",
            className: "symbol"
        }, {
            value: "l",
            className: "symbol"
        }, {
            value: "-",
            className: "symbol"
        }, {
            value: "Delete",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "z",
            className: "symbol"
        }, {
            value: "x",
            className: "symbol"
        }, {
            value: "c",
            className: "symbol"
        }, {
            value: "v",
            className: "symbol"
        }, {
            value: "b",
            className: "symbol"
        }, {
            value: "n",
            className: "symbol"
        }, {
            value: "m",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 12
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "й",
            className: "symbol"
        }, {
            value: "ц",
            className: "symbol"
        }, {
            value: "у",
            className: "symbol"
        }, {
            value: "к",
            className: "symbol"
        }, {
            value: "е",
            className: "symbol"
        }, {
            value: "н",
            className: "symbol"
        }, {
            value: "г",
            className: "symbol"
        }, {
            value: "ш",
            className: "symbol"
        }, {
            value: "щ",
            className: "symbol"
        }, {
            value: "з",
            className: "symbol"
        }, {
            value: "х",
            className: "symbol"
        }, {
            value: "ъ",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "ф",
            className: "symbol"
        }, {
            value: "ы",
            className: "symbol"
        }, {
            value: "в",
            className: "symbol"
        }, {
            value: "а",
            className: "symbol"
        }, {
            value: "п",
            className: "symbol"
        }, {
            value: "р",
            className: "symbol"
        }, {
            value: "о",
            className: "symbol"
        }, {
            value: "л",
            className: "symbol"
        }, {
            value: "д",
            className: "symbol"
        }, {
            value: "ж",
            className: "symbol"
        }, {
            value: "э",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "Удалить",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "я",
            className: "symbol"
        }, {
            value: "ч",
            className: "symbol"
        }, {
            value: "с",
            className: "symbol"
        }, {
            value: "м",
            className: "symbol"
        }, {
            value: "и",
            className: "symbol"
        }, {
            value: "т",
            className: "symbol"
        }, {
            value: "ь",
            className: "symbol"
        }, {
            value: "б",
            className: "symbol"
        }, {
            value: "ю",
            className: "symbol"
        }, {
            value: "ё",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 14
        }]
    ]
}, function(e, t) {
    "use strict";
    e.exports = [
        [{
            value: "й",
            className: "symbol"
        }, {
            value: "ц",
            className: "symbol"
        }, {
            value: "у",
            className: "symbol"
        }, {
            value: "к",
            className: "symbol"
        }, {
            value: "е",
            className: "symbol"
        }, {
            value: "н",
            className: "symbol"
        }, {
            value: "г",
            className: "symbol"
        }, {
            value: "ш",
            className: "symbol"
        }, {
            value: "щ",
            className: "symbol"
        }, {
            value: "з",
            className: "symbol"
        }, {
            value: "х",
            className: "symbol"
        }, {
            value: "ї",
            className: "symbol"
        }, {
            value: "&nbsp;",
            className: "icon keyDelete",
            colSpan: 2
        }],
        [{
            value: "ф",
            className: "symbol"
        }, {
            value: "і",
            className: "symbol"
        }, {
            value: "в",
            className: "symbol"
        }, {
            value: "а",
            className: "symbol"
        }, {
            value: "п",
            className: "symbol"
        }, {
            value: "р",
            className: "symbol"
        }, {
            value: "о",
            className: "symbol"
        }, {
            value: "л",
            className: "symbol"
        }, {
            value: "д",
            className: "symbol"
        }, {
            value: "ж",
            className: "symbol"
        }, {
            value: "є",
            className: "symbol"
        }, {
            value: "/",
            className: "symbol"
        }, {
            value: "Удалить",
            className: "symbol delete",
            colSpan: 2
        }],
        [{
            value: "ґ",
            className: "symbol"
        }, {
            value: "я",
            className: "symbol"
        }, {
            value: "ч",
            className: "symbol"
        }, {
            value: "с",
            className: "symbol"
        }, {
            value: "м",
            className: "symbol"
        }, {
            value: "и",
            className: "symbol"
        }, {
            value: "т",
            className: "symbol"
        }, {
            value: "ь",
            className: "symbol"
        }, {
            value: "б",
            className: "symbol"
        }, {
            value: "ю",
            className: "symbol"
        }, {
            value: ".",
            className: "symbol"
        }, {
            value: ",",
            className: "symbol"
        }, {
            value: "123",
            className: "symbol nums"
        }, {
            value: "&nbsp;",
            className: "keyGlobe"
        }],
        [{
            value: "&nbsp;",
            className: "icon keySpace",
            colSpan: 14
        }]
    ]
}, function(e, t, i) {
    "use strict";
    var n, o, s, a, r, l = i(3),
        c = i(4),
        d = {
            types: {
                CATEGORY_HEADER: 1,
                CATEGORY_ITEM: 2
            },
            content: {
                data: [],
                focusIndex: 1,
                tabs: []
            },
            activeTab: 3
        };
    if (c.token || (d.content.focusIndex = 2, d.content.data.push({
            disabled: !1,
            onclick: function() {
                l.navigate("pl")
            },
            type: d.types.CATEGORY_ITEM,
            value: gettext("Sign in"),
            id: -1,
            className: "icon people"
        })), d.content.data.push({
            disabled: !1,
            onclick: function() {
                l.navigate("ps")
            },
            type: d.types.CATEGORY_ITEM,
            value: gettext("Search"),
            id: -2,
            className: "icon search"
        }), d.content.data.push({
            disabled: !1,
            tabIndex: 3,
            type: d.types.CATEGORY_ITEM,
            value: gettext("Main"),
            id: -2,
            className: "icon what-to-watch"
        }), c.token && d.content.data.push({
            disabled: !1,
            onclick: function() {
                return i(17).getMine().then(function(e) {
                    l.current.hide(), l.current.show({
                        data: {
                            channel: e
                        }
                    })
                })
            },
            type: d.types.CATEGORY_ITEM,
            value: gettext("My playlists"),
            id: -2,
            className: "icon upload"
        }), d.content.data.push({
            disabled: !1,
            tabIndex: 2,
            type: d.types.CATEGORY_ITEM,
            value: gettext("Settings"),
            id: -2,
            className: "icon player-settings"
        }), c.playlists.length)
        for (d.content.data.push({
                disabled: !0,
                type: d.types.CATEGORY_HEADER,
                value: gettext("Playlists")
            }), a = 0, r = c.playlists.length; r > a; ++a) o = c.playlists[a], d.content.data.push({
            disabled: !1,
            type: d.types.CATEGORY_ITEM,
            value: o.value,
            playlist: o.channel,
            id: o.id,
            className: o.icon
        });
    if (c.subscriptions.length)
        for (d.content.data.push({
                disabled: !0,
                type: d.types.CATEGORY_HEADER,
                value: gettext("Subscriptions")
            }), a = 0, r = c.subscriptions.length; r > a; ++a) s = c.subscriptions[a], d.content.data.push({
            disabled: !1,
            tabIndex: 1,
            type: d.types.CATEGORY_ITEM,
            value: s.value,
            id: s.id,
            title: s.title,
            icon: s.icon
        });
    if (c.categories.length)
        for (d.content.data.push({
                disabled: !0,
                type: d.types.CATEGORY_HEADER,
                value: gettext("Categories")
            }), a = 0, r = c.categories.length; r > a; ++a) n = c.categories[a], d.content.data.push({
            disabled: !1,
            tabIndex: 0,
            type: d.types.CATEGORY_ITEM,
            value: n.value,
            channel: n.channel,
            id: n.id,
            className: n.icon
        });
    e.exports = d
}, function(e, t, i) {
    "use strict";

    function n(e) {
        return e && e.playlist ? "pid:" + e.playlist.id + ";p:" + e.page : "PLAYLIST"
    }

    function o(e) {
        this.pages = {}, this.playlist = null, l.call(this), e = e || {}, void 0 !== e.events && this.addListeners(e.events), this.init(e)
    }
    var s, a, r = i(10),
        l = i(7),
        c = i(4),
        d = !1,
        u = i(23);
    o.prototype = Object.create(l.prototype), o.prototype.constructor = o, o.prototype.getPage = function(e) {
        var t, i = this;
        return e.playlist = e.playlist || this.playlist, e.page = +e.page || 0, e.count = e.count || 20, new r(function(o, s) {
            if (t = u.get(n(e))) o(t);
            else {
                if (!e.playlist.id) return void s(e);
                i.getPlayListItems(e).then(o, s)
            }
        })
    }, o.prototype.getPlayListItems = function(e) {
        var t = this,
            o = [],
            l = "",
            h = "playlistItems?part=snippet&playlistId=" + e.playlist.id + "&maxResults=" + (e.count || 30);
        if (e.page = +e.page || 0, d || (d = i(11), s = i(24), a = gettext("Author")), e.page) {
            if (!t.pages[e.page]) return r.reject();
            h += "&pageToken=" + t.pages[e.page]
        }
        return c.request("GET", h).then(function(i) {
            try {
                i = JSON.parse(i), i.nextPageToken && (t.pages[e.page + 1] = i.nextPageToken), i.prevPageToken && (t.pages[e.page - 1] = i.prevPageToken), i.items.forEach(function(e) {
                    l += e.snippet.resourceId.videoId + ","
                })
            } catch (r) {}
            return t.getMovies(l.substr(0, l.length - 1)).then(function(t) {
                var i, r, l = +new Date;
                for (i = t.length, r = 0; i > r; ++r) o.push({
                    value: 1,
                    id: t[r].id,
                    channelTitle: t[r].snippet.channelTitle,
                    duration: c.normalizeVideoDuration(t[r].contentDetails.duration),
                    realDuration: t[r].contentDetails.duration,
                    viewCount: t[r].statistics.viewCount,
                    publishedAt: t[r].snippet.publishedAt,
                    dimension: t[r].contentDetails.dimension,
                    definition: t[r].contentDetails.definition,
                    title: t[r].snippet.localized.title,
                    icon: t[r].snippet.thumbnails.high.url,
                    channelId: t[r].snippet.channelId,
                    type: "video",
                    locale: {
                        publishedAt: s(t[r].snippet.publishedAt, l),
                        viewCount: t[r].statistics.viewCount + " " + ngettext("view", "views", +t[r].statistics.viewCount),
                        channelTitle: a + ": " + t[r].snippet.channelTitle
                    }
                });
                return u.set(n(e), o, 3e5), o
            })
        })
    }, o.prototype.getMovies = function(e) {
        var t, i, n, o, s = [];
        for (i = e.split(","), n = 0, o = i.length; o > n; ++n)(t = u.get("vid:" + i[n])) && s.push(t);
        return c.request("GET", "videos?part=statistics,contentDetails,snippet&id=" + e).then(function(e) {
            for (e = JSON.parse(e).items, n = 0, o = e.length; o > n; ++n) u.set("vid:" + e[n].id, e[n], 6e4);
            return e
        })
    }, o.prototype.init = function(e) {
        return void 0 !== e.playlist ? (this.playlist ? this.playlist && this.playlist.id !== e.playlist.id && (this.playlist = e.playlist) : this.playlist = e.playlist, this.pages = {}, this.emit("content:changed", e), !0) : !1
    }, e.exports = o
}, function(e, t, i) {
    "use strict";
    var n = i(7),
        o = new n;
    o.data = {
        quality: [gettext("Best"), "720p", "480p", "360p", "240p"],
        safeSearch: [gettext("Off"), gettext("On")]
    }, o.getNext = function(e, t) {
        return o.data[e] && o.data[e][t] ? (++t, o.data[e].length === t && (t = 0), this.emit("changed", {
            key: e,
            value: o.data[e][t],
            index: t
        }), {
            value: o.data[e][t],
            index: t
        }) : void 0
    }, e.exports = o
}, function(module, exports, __webpack_require__) {
    "use strict";
    var Emitter = __webpack_require__(7),
        gettext = new Emitter,
        meta = null,
        data = null;
    gettext.load = function(e, t) {
        var i = new XMLHttpRequest;
        e.ext = e.ext || "json", e.path = e.path || "lang", i.responseType = "text", i.onload = function() {
            var e;
            try {
                e = JSON.parse(i.responseText), meta = e.meta, data = e.data, t(null, data)
            } catch (n) {
                meta = null, data = null, i.onerror(n)
            }
            gettext.events.load && gettext.emit("load")
        }, i.onerror = function(e) {
            t(e), gettext.events.error && gettext.emit("error")
        }, i.open("GET", e.path + "/" + e.name + "." + e.ext, !0), i.send(null)
    }, window.gettext = function(e) {
        return data && data[""][e] ? data[""][e] : e
    }, window.pgettext = function(e, t) {
        return data && data[e][t] ? data[e][t] : t
    }, window.ngettext = function(msgId, plural, value) {
        return data && meta ? data[""][msgId][eval("var n = " + value + "; " + meta.plural)] : 1 === value ? msgId : plural
    }, module.exports = gettext
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.value = "", this.type = this.TYPE_TEXT, e.className = "input " + (e.className || ""), o.call(this, e), this.$line = this.$body.appendChild(document.createElement("div")), this.$line.className = "line", this.$caret = this.$line.appendChild(document.createElement("div")), this.$caret.className = "caret", this.$placeholder = this.$line.appendChild(document.createElement("div")), this.$placeholder.className = "placeholder", this.$caret.index = 0, this.init(e)
    }
    var o = i(5),
        s = i(1);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.TYPE_TEXT = 0, n.prototype.TYPE_PASSWORD = 1, n.prototype.defaultEvents = {
        keypress: function(e) {
            this.addChar(String.fromCharCode(e.keyCode), this.$caret.index)
        },
        keydown: function(e) {
            switch (e.code) {
                case s["delete"]:
                    this.removeChar(this.$caret.index);
                    break;
                case s.back:
                    this.removeChar(this.$caret.index - 1);
                    break;
                case s.left:
                    this.setCaretPosition(this.$caret.index - 1);
                    break;
                case s.right:
                    this.setCaretPosition(this.$caret.index + 1);
                    break;
                case s.end:
                case s.down:
                    this.setCaretPosition(this.value.length);
                    break;
                case s.home:
                case s.up:
                    this.setCaretPosition(0)
            }
        }
    }, n.prototype.init = function(e) {
        e.type && (this.type = e.type), e.value && this.setValue(e.value), e.placeholder && (this.$placeholder.innerText = e.placeholder), this.$line.dir = e.direction || "ltr"
    }, n.prototype.addChar = function(e, t) {
        var i = document.createElement("div");
        t = void 0 === t ? this.$caret.index : t, 0 === this.value.length && this.$line.removeChild(this.$placeholder), i.className = "char", this.value = this.value.substring(0, t) + e + this.value.substring(t, this.value.length), ++this.$caret.index, this.type === this.TYPE_PASSWORD ? i.innerText = "*" : " " === e ? i.innerHTML = "&nbsp;" : i.innerText = e, t >= this.value.length ? (this.$line.appendChild(i), this.$line.appendChild(this.$caret)) : (this.$line.insertBefore(this.$caret, this.$line.children[t]), this.$line.insertBefore(i, this.$caret)), this.events.input && this.emit("input", {
            value: this.value
        })
    }, n.prototype.removeChar = function(e) {
        var t = this.value;
        e = void 0 === e ? this.$caret.index - 1 : e, this.value.length > 0 && (this.$caret.index === e && e < this.value.length ? this.$line.removeChild(this.$line.children[e + 1]) : this.$caret.index > e && (--this.$caret.index, this.$line.removeChild(this.$line.children[e])), this.value = this.value.substring(0, e) + this.value.substring(e + 1, this.value.length), this.events.input && t !== this.value && this.emit("input", {
            value: this.value
        })), 0 === this.value.length && this.$line.appendChild(this.$placeholder)
    }, n.prototype.setCaretPosition = function(e) {
        e >= 0 && e <= this.value.length && this.$caret.index !== e && (this.$line.removeChild(this.$caret), e === this.value.length ? this.$line.appendChild(this.$caret) : this.$line.insertBefore(this.$caret, this.$line.children[e]), this.$caret.index = e)
    }, n.prototype.setValue = function(e) {
        var t, i, n = this.value.length,
            o = e.length,
            s = 0;
        if (e !== this.value) {
            if (o > 0) {
                if (this.$placeholder.parentNode === this.$line && this.$line.removeChild(this.$placeholder), this.$line.removeChild(this.$caret), o !== n)
                    if (i = o - n, i > 0)
                        for (s = 0; i > s; s++) t = this.$line.appendChild(document.createElement("div")), t.className = "char";
                    else
                        for (s = 0; s > i; s--) this.$line.removeChild(this.$line.lastChild);
                for (s = 0; o > s; s++) t = this.$line.children[s], this.type === this.TYPE_PASSWORD ? t.innerHTML = "*" : " " === e[s] ? t.innerHTML = "&nbsp;" : t.innerText = e[s];
                this.value = e, this.$caret.index = o, this.$line.appendChild(this.$caret)
            } else this.value = "", this.$line.innerText = "", this.$line.appendChild(this.$caret), this.$line.appendChild(this.$placeholder);
            this.events.input && this.emit("input", {
                value: this.value
            })
        }
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.className = "modalMessage " + (e.className || ""), o.call(this, e), this.$header = this.$body.appendChild(document.createElement("div")), this.$content = this.$body.appendChild(document.createElement("div")), this.$footer = this.$body.appendChild(document.createElement("div")), this.$header.className = "header", this.$content.className = "content", this.$footer.className = "footer", this.$header.innerText = "header", this.$content.innerText = "content", this.$footer.innerText = "footer"
    }
    var o = i(64);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t) {
    "use strict";
    e.exports = {
        480: {
            height: 480,
            width: 720,
            availTop: 24,
            availBottom: 24,
            availRight: 32,
            availLeft: 48,
            mainMenuSize: 8
        },
        576: {
            height: 576,
            width: 720,
            availTop: 24,
            availBottom: 24,
            availRight: 28,
            availLeft: 54,
            mainMenuSize: 10
        },
        720: {
            height: 720,
            width: 1280,
            availTop: 10,
            availBottom: 10,
            availRight: 10,
            availLeft: 10,
            mainMenuSize: 9
        },
        1080: {
            height: 1080,
            width: 1920,
            availTop: 15,
            availBottom: 15,
            availRight: 15,
            availLeft: 15,
            mainMenuSize: 9
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = {
        parse: function(e) {
            var t = {};
            return e.split("&").forEach(function(e) {
                e = e.split("="), 2 === e.length && (t[e[0]] = decodeURIComponent(e[1]));
            }), t
        },
        stringify: function(e) {
            var t = [];
            return Object.keys(e).forEach(function(i) {
                t.push(i + "=" + encodeURIComponent(e[i]))
            }), t.join("&")
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = i(38).parse;
    e.exports = function() {
        var e = n(location.search.substring(1));
        return e.referrer ? e.referrer : document.referrer ? location.href.split("#")[0] === document.referrer ? !1 : document.referrer : !1
    }
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t = this;
        this.value = "", this.type = this.TYPE_TEXT, this.type = this.TYPE_TEXT, this.direction = "ltr", this.noprevent = !0, e = e || {}, e.className = "inputNative " + (e.className || ""), o.call(this, e), this.init(e), this.addListener("keydown", function(e) {
            e.code === s.back && (e.stop = !0)
        }), this.$body.addEventListener("input", function(e) {
            t.value = t.$body.value, void 0 !== t.events.input && t.emit("input", {
                value: t.$body.value
            })
        }), this.addListener("focus", function() {
            t.$body.focus()
        }), this.addListener("blur", function() {
            t.$body.blur()
        })
    }
    var o = i(5),
        s = i(1);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.init = function(e) {
        void 0 !== e.type && (this.$body.type = this.type = e.type), void 0 !== e.value && (this.$body.value = this.value = e.value), void 0 !== e.placeholder && (this.$body.placeholder = e.placeholder), void 0 !== e.direction && (this.$node.dir = this.direction = e.direction)
    }, n.prototype.addChar = function(e, t) {
        t = void 0 === t ? this.value.length : t, this.value = this.value.substring(0, t) + e + this.value.substring(t, this.value.length), this.$body.value = this.value, void 0 !== this.events.input && this.emit("input", {
            value: this.value
        })
    }, n.prototype.removeChar = function(e) {
        e = void 0 === e ? this.value.length - 1 : e, this.value.length > 0 && (this.value = this.value.substring(0, e) + this.value.substring(e + 1, this.value.length), this.$body.value = this.value, void 0 !== this.events.input && this.emit("input", {
            value: this.value
        })), this.$body.value = this.value
    }, n.prototype.setCaretPosition = function(e) {
        this.$body.setSelectionRange(e, e)
    }, n.prototype.getCaretPosition = function() {
        return this.$body.selectionStart
    }, n.prototype.setValue = function(e) {
        this.$body.value !== e && (this.$body.value = e, void 0 !== this.events.input && this.emit("input", {
            value: this.value
        }))
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i = 1 ^ e;
        E || (t ? (E = !0, u.getPage({
            page: I - 1,
            count: 1
        }).then(function(t) {
            --I, --$, p[i].model.init({
                channel: t[0]
            }), x = i, T = e, v = i
        }, function(e) {})) : (E = !0, u.getPage({
            page: $ + 1,
            count: 1
        }).then(function(t) {
            ++I, ++$, p[e].model.init({
                channel: t[0]
            }), x = i, T = e, v = i
        }, function(t) {
            E = !1, "overflow" === t && (++I, ++$, p[e].model.init({
                channel: {
                    id: "!",
                    title: ""
                }
            }), p[e].data = [{
                id: "",
                value: "",
                publishedAt: "",
                icon: "",
                duration: "",
                title: "",
                channelTitle: "",
                viewCount: "",
                locale: {
                    publishedAt: "",
                    viewCount: "",
                    channelTitle: ""
                }
            }], p[e].viewIndex = null, p[e].renderView(0), p[e].focusIndex(0), p[e].$title.innerHTML = "", x = i, T = e, v = i, p[x].$node.style.top = w, p[T].$node.style.top = b, p[v].focus())
        })))
    }
    var o = i(1),
        s = i(3),
        a = i(12),
        r = i(8),
        l = i(35),
        c = i(13),
        d = i(18),
        u = i(17),
        h = i(14),
        p = [],
        m = document.getElementById("pm"),
        v = 0,
        f = new a({
            $node: document.getElementById("pmTabCategoryContent"),
            visible: !1,
            events: {
                focus: function() {
                    p[v].focus()
                },
                show: function() {
                    m.style.backgroundImage = ""
                }
            }
        }),
        g = new l({
            $node: document.getElementById("pmCategorySearch"),
            $body: document.getElementById("pmCategorySearchBody"),
            events: {
                focus: function() {
                    this.setValue(""), s.navigate("ps")
                }
            }
        }),
        y = i(9),
        b = 0,
        w = 0,
        x = 0,
        T = 1,
        I = 0,
        $ = 1,
        S = -1,
        E = !0;
    u.addListener("category:changed", function() {
        clearTimeout(S), S = setTimeout(function() {
            y.hide()
        }, 1e4), 0 === p.length && (p.push(new c({
            $node: document.getElementById("pmListCategoryVideos0Node"),
            $body: document.getElementById("pmListCategoryVideos0Body"),
            $title: document.getElementById("pmCategoryChannelTitle0"),
            model: new d({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: r.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === o.left && h.focus()
                },
                "view:ready": function() {
                    p[x].$node.style.top = w, p[T] && (p[T].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[v].focus(), E = !1
                },
                "view:error": function(e) {
                    E = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), f.focusEntry = p[v], p[x].$node.style.top = w, p[T] && (p[T].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[v].focus()) : 0 === I && n(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && s.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), p.push(new c({
            $node: document.getElementById("pmListCategoryVideos1Node"),
            $body: document.getElementById("pmListCategoryVideos1Body"),
            $title: document.getElementById("pmCategoryChannelTitle1"),
            model: new d({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: r.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === o.left && (h.focus(), f.focusEntry = this)
                },
                "view:ready": function() {
                    p[x].$node.style.top = w, p[T].$node.style.top = b, this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[v].focus(), E = !1
                },
                "view:error": function(e) {
                    E = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), f.focusEntry = p[v], p[x].$node.style.top = w, p[T] && (p[T].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), y.hide(), clearTimeout(S), p[v].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && s.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), f.add(p[0]), f.add(p[1]), p[0].focus(), p[0].addListener("keydown", function(e) {
            e.code === o.down ? n(0, !1) : e.code === o.up ? I > 0 ? n(0, !0) : g.focus() : e.code === o.playPause && s.navigate("pp", {
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), p[1].addListener("keydown", function(e) {
            e.code === o.down ? n(1, !1) : e.code === o.up ? I > 0 ? n(1, !0) : g.focus() : e.code === o.playPause && s.navigate("pp", {
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), b = window.getComputedStyle(p[1].$node).getPropertyValue("top")), u.getPage({
            page: 0,
            count: 1
        }).then(function(e) {
            I = 0, x = 0, T = 1, $ = 1, v = 0, p[x].model.filter({
                channel: e[0]
            }), u.getPage({
                page: 1,
                count: 1
            }).then(function(e) {
                p[T].model.filter({
                    channel: e[0]
                }), p[v].focus()
            })
        })["catch"](function(e) {})
    }), f.activate = function(e) {
        this.show(), u.setActiveCategory(e) ? y.show() : p[v].focus()
    }, f.add(g), e.exports = f
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i = 1 ^ e;
        E || (t ? (E = !0, N.getTotalInfoPlaylists({
            page: I - 1,
            count: 1
        }).then(function(t) {
            --I, --$, h[i].model.init({
                playlist: {
                    value: t[0].id,
                    id: t[0].id,
                    title: t[0].snippet.title,
                    icon: t[0].snippet.thumbnails["default"].url
                }
            }), w = i, x = e, T = i
        }, function(e) {})) : (E = !0, N.getTotalInfoPlaylists({
            page: $ + 1,
            count: 1
        }).then(function(t) {
            ++I, ++$, h[e].model.init({
                playlist: {
                    value: t[0].id,
                    id: t[0].id,
                    title: t[0].snippet.title,
                    icon: t[0].snippet.thumbnails["default"].url
                }
            }), w = i, x = e, T = i
        }, function(t) {
            E = !1, "overflow" === t && (++I, ++$, h[e].model.init({
                playlist: {
                    id: "!",
                    title: ""
                }
            }), h[e].data = [{
                id: "",
                value: "",
                publishedAt: "",
                icon: "",
                duration: "",
                title: "",
                channelTitle: "",
                viewCount: "",
                locale: {
                    publishedAt: "",
                    viewCount: "",
                    channelTitle: ""
                }
            }], h[e].viewIndex = null, h[e].renderView(0), h[e].focusIndex(0), h[e].$title.innerHTML = "", w = i, x = e, T = i, h[w].$node.style.top = b, h[x].$node.style.top = y, h[T].focus())
        })))
    }
    var o = i(1),
        s = i(3),
        a = i(12),
        r = i(8),
        l = i(13),
        c = i(21),
        d = i(32),
        u = (i(11), i(14)),
        h = [],
        p = new a({
            $node: document.getElementById("pmTabChannelContent"),
            visible: !1,
            events: {
                focus: function() {
                    h[T].focus()
                }
            }
        }),
        m = i(9),
        v = document.getElementById("pm"),
        f = document.getElementById("pmChannelTitle"),
        g = document.getElementById("pmChannelIcon"),
        y = 0,
        b = 0,
        w = 0,
        x = 1,
        T = 0,
        I = 0,
        $ = 1,
        S = -1,
        E = !0,
        N = new c;
    N.addListener("content:changed", function() {
        clearTimeout(S), S = setTimeout(function() {
            m.hide()
        }, 1e4), 0 === h.length && (h.push(new l({
            $node: document.getElementById("pmListChannelVideos0Node"),
            $body: document.getElementById("pmListChannelVideos0Body"),
            $title: document.getElementById("pmChannelTitle0"),
            model: new d,
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: r.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === o.left && u.focus()
                },
                "view:ready": function() {
                    p.focusEntry = h[T], h[w].$node.style.top = b, h[x] && (h[x].$node.style.top = y), this.$title.innerHTML = this.model.playlist.title, this.show(), m.hide(), clearTimeout(S), h[T].focus(), E = !1
                },
                "view:error": function(e) {
                    E = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), p.focusEntry = h[T], h[w].$node.style.top = b, h[x] && (h[x].$node.style.top = y), this.$title.innerHTML = this.model.playlist.title, this.show(), m.hide(), clearTimeout(S), h[T].focus()) : 0 === I && n(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && s.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), h.push(new l({
            $node: document.getElementById("pmListChannelVideos1Node"),
            $body: document.getElementById("pmListChannelVideos1Body"),
            $title: document.getElementById("pmChannelTitle1"),
            model: new d,
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: r.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === o.left && u.focus()
                },
                "view:ready": function() {
                    p.focusEntry = h[T], h[w].$node.style.top = b, h[x].$node.style.top = y, this.$title.innerHTML = this.model.playlist.title, this.show(), m.hide(), clearTimeout(S), h[T].focus(), E = !1
                },
                "view:error": function(e) {
                    E = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: " ",
                        duration: "",
                        title: " ",
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), p.focusEntry = h[T], h[w].$node.style.top = b, h[x] && (h[x].$node.style.top = y), this.$title.innerHTML = this.model.channel.title ? this.model.channel.title : "&nbsp;", this.show(), m.hide(), clearTimeout(S), h[T].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && s.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                }
            }
        })), p.add(h[0]), p.add(h[1]), h[0].focus(), h[0].addListener("keydown", function(e) {
            e.code === o.down ? n(0, !1) : e.code === o.up ? I > 0 && n(0, !0) : e.code === o.playPause && s.navigate("pp", {
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), h[1].addListener("keydown", function(e) {
            e.code === o.down ? n(1, !1) : e.code === o.up ? I > 0 && n(1, !0) : e.code === o.playPause && s.navigate("pp", {
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), y = window.getComputedStyle(h[1].$node).getPropertyValue("top")), N.getTotalInfoPlaylists({
            page: 0,
            count: 1
        }).then(function(e) {
            I = 0, w = 0, x = 1, $ = 1, T = 0, h[w].model.init({
                playlist: {
                    value: e[0].id,
                    id: e[0].id,
                    title: e[0].snippet.title,
                    icon: e[0].snippet.thumbnails["default"].url
                }
            }), N.getTotalInfoPlaylists({
                page: 1,
                count: 1
            }).then(function(e) {
                h[x].model.init({
                    playlist: {
                        value: e[0].id,
                        id: e[0].id,
                        title: e[0].snippet.title,
                        icon: e[0].snippet.thumbnails["default"].url
                    }
                }), h[T].focus()
            }, function() {
                h[1].hide()
            })
        }, function(e) {
            "no page" === e && h[1].emit("view:error", "empty")
        })["catch"](function(e) {})
    }), p.activate = function(e) {
        this.show(), h.length && h[T].focus(), N.init({
            channel: e
        }) && (h[0].hide(), h[1].hide(), g.style.backgroundImage = "url(" + e.icon + ")", f.innerHTML = e.title, m.show()), N.getChannelBackground().then(function(e) {
            v.style.backgroundImage = "url(" + e + ")"
        })
    }, e.exports = p
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        var i = 1 ^ e;
        E || (t ? (E = !0, u.getPage({
            page: I - 1,
            count: 1
        }).then(function(t) {
            --I, --$, m[i].model.filter({
                channel: t[0]
            }), x = i, T = e, f = i
        }, function(e) {})) : (E = !0, u.getPage({
            page: $ + 1,
            count: 1
        }).then(function(t) {
            ++I, ++$, m[e].model.filter({
                channel: t[0]
            }), x = i, T = e, f = i
        }, function(t) {
            E = !1, "overflow" === t && (++I, ++$, m[e].model.filter({
                channel: {
                    id: "!",
                    title: ""
                }
            }), m[e].data = [{
                id: "",
                value: "",
                publishedAt: "",
                icon: "",
                duration: "",
                title: "",
                channelTitle: "",
                viewCount: "",
                locale: {
                    publishedAt: "",
                    viewCount: "",
                    channelTitle: ""
                }
            }], m[e].viewIndex = null, m[e].renderView(0), m[e].focusIndex(0), m[e].$title.innerHTML = "", x = i, T = e, f = i, m[x].$node.style.top = w, m[T].$node.style.top = b, m[f].focus())
        })))
    }
    var o = i(1),
        s = i(3),
        a = i(12),
        r = i(8),
        l = i(35),
        c = i(13),
        d = i(18),
        u = i(49),
        h = i(14),
        p = i(9),
        m = [],
        v = document.getElementById("pm"),
        f = 0,
        g = new a({
            $node: document.getElementById("pmTabMainContent"),
            visible: !1,
            events: {
                focus: function() {
                    m[f].focus()
                },
                show: function() {
                    v.style.backgroundImage = ""
                }
            }
        }),
        y = new l({
            $node: document.getElementById("pmMainSearch"),
            $body: document.getElementById("pmMainSearchBody"),
            events: {
                focus: function() {
                    this.setValue(""), s.navigate("ps")
                }
            }
        }),
        b = 0,
        w = 0,
        x = 0,
        T = 1,
        I = 0,
        $ = 1,
        S = -1,
        E = !0;
    g.activate = function() {
        this.show(), clearTimeout(S), S = setTimeout(function() {
            p.hide()
        }, 1e4), 0 === m.length && (p.show(), m.push(new c({
            $node: document.getElementById("pmListMainVideos0Node"),
            $body: document.getElementById("pmListMainVideos0Body"),
            $title: document.getElementById("pmMainChannelTitle0"),
            model: new d({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: r.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === o.left && h.focus()
                },
                "view:ready": function() {
                    g.focusEntry = m[f], m[x].$node.style.top = w, m[T] && (m[T].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, m[f] && m[f].data.length > 0 && m[f].data[0].value && (p.hide(), clearTimeout(S)), this.show(), m[f].focus(), E = !1
                },
                "view:error": function(e) {
                    E = !1, "empty" === e ? (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), g.focusEntry = m[f], m[x].$node.style.top = w, m[T] && (m[T].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, p.hide(), this.show(), clearTimeout(S), m[f].focus()) : 0 === I && n(0, !1)
                },
                "click:item": function(e) {
                    e.$item.data.id && s.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                },
                focus: function() {
                    g.focusEntry = this
                }
            }
        })), m.push(new c({
            $node: document.getElementById("pmListMainVideos1Node"),
            $body: document.getElementById("pmListMainVideos1Body"),
            $title: document.getElementById("pmMainChannelTitle1"),
            model: new d({
                type: "video"
            }),
            size: 5,
            viewIndex: 0,
            focusIndex: 0,
            type: r.prototype.TYPE_HORIZONTAL,
            events: {
                overflow: function(e) {
                    e.direction === o.left && h.focus()
                },
                "view:ready": function() {
                    g.focusEntry = m[f], m[x].$node.style.top = w, m[T].$node.style.top = b, this.$title.innerHTML = this.model.channel.title, m[f] && m[f].data.length > 0 && m[f].data[0].value && (p.hide(), clearTimeout(S)), this.show(), clearTimeout(S), m[f].focus(), E = !1
                },
                "view:error": function(e) {
                    E = !1, "empty" === e && (this.data = [{
                        id: "",
                        value: "",
                        publishedAt: "",
                        icon: "img/no.image.png",
                        duration: "",
                        title: gettext("No videos"),
                        channelTitle: "",
                        viewCount: "",
                        locale: {
                            publishedAt: "",
                            viewCount: "",
                            channelTitle: ""
                        }
                    }], this.viewIndex = null, this.renderView(0), this.focusIndex(0), g.focusEntry = m[f], m[x].$node.style.top = w, m[T] && (m[T].$node.style.top = b), this.$title.innerHTML = this.model.channel.title, this.show(), p.hide(), clearTimeout(S), m[f].focus())
                },
                "click:item": function(e) {
                    e.$item.data.id && s.navigate("pp", {
                        channel: this.model.channel,
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    })
                },
                focus: function() {
                    g.focusEntry = this
                }
            }
        })), g.add(m[0]), g.add(m[1]), m[0].addListener("keydown", function(e) {
            e.code === o.down ? n(0, !1) : e.code === o.up ? I > 0 ? n(0, !0) : y.focus() : e.code === o.playPause && s.navigate("pp", {
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), m[1].addListener("keydown", function(e) {
            e.code === o.down ? n(1, !1) : e.code === o.up ? I > 0 ? n(1, !0) : y.focus() : e.code === o.playPause && s.navigate("pp", {
                channel: this.model.channel,
                video: this.$focusItem.data,
                playlist: this.data,
                position: this.$focusItem.index
            })
        }), b = window.getComputedStyle(m[1].$node).getPropertyValue("top"), u.getPage({
            page: 0,
            count: 1
        }).then(function(e) {
            I = 0, x = 0, T = 1, $ = 1, f = 0, m[x].model.filter({
                channel: e[0]
            }), u.getPage({
                page: 1,
                count: 1
            }).then(function(e) {
                m[T].model.filter({
                    channel: e[0]
                }), m[f].focus()
            })
        })["catch"](function(e) {})), m[f].focus()
    }, g.add(y), e.exports = g
}, function(e, t, i) {
    "use strict";

    function n() {
        return c.languageIndex !== T ? (s ? (s.show(), r = d.current.activeComponent, s.focus()) : (s = new p({
            visible: !1,
            events: {
                keydown: function(e) {
                    var t, i;
                    e.code === l.ok ? (c.settings.language = f.languages[T], T = -1, c.settings.languageOverwrite = 1, c.reload()) : e.code === l.back && (o.data[o.size - 1].value = T = c.languageIndex, e.stop = !0, s.hide(), w.show(), r.focus(), t = o.$focusItem.index, i = o.viewIndex, o.viewIndex = null, o.renderView(i), o.focusIndex(t))
                }
            }
        }), s.$body.classList.add("modalExit"), s.$header.innerHTML = gettext("In order to apply a new language, you must restart the application"), s.$content.innerHTML = "", s.$content.appendChild(a = document.createElement("div")), a.innerText = gettext("Ok"), a.className = "btn confirm" + (x ? " old" : ""), s.$content.appendChild(a = document.createElement("div")), a.className = "btn back" + (x ? " old" : ""), a.innerText = gettext("Cancel"), s.$footer.innerHTML = "", d.current.add(s), w.hide(), s.show(), r = d.current.activeComponent, s.focus()), !0) : !1
    }
    var o, s, a, r, l = i(1),
        c = i(2),
        d = i(3),
        u = i(8),
        h = i(12),
        p = i(36),
        m = i(4),
        v = i(22),
        f = i(6),
        g = document.getElementById("pm"),
        y = new h({
            $node: document.getElementById("pmTabSettings"),
            visible: !1,
            events: {
                show: function() {
                    g.style.backgroundImage = ""
                }
            }
        }),
        b = i(14),
        w = i(15),
        x = -1 !== ["AuraHD2", "AuraHD3", "AuraHD8", "MAG254", "MAG275", "MAG276", "WR320"].indexOf(v.deviceModel()),
        T = c.languageIndex;
    b.addListener("focus", function() {
        n()
    }), y.activate = function() {
        var e, t;
        o || (t = i(11), e = i(33), o = new u({
            $node: document.getElementById("pmSettingsList"),
            type: u.prototype.TYPE_HORIZONTAL,
            size: 4,
            data: [{
                title: m.token ? gettext("Logout") : gettext("Login"),
                value: 0,
                values: ["&nbsp;"],
                description: " ",
                icon: "icon people",
                onclick: function() {
                    var e, t = new p({
                        hidden: !0,
                        events: {
                            keydown: function(e) {
                                e.code === l.ok ? m.token ? (c.settings.sessionToken = null, c.settings.refreshToken = null, c.reload()) : d.navigate("pl") : e.code === l.back && (e.stop = !0, t.hide(), w.show(), t.$node.parentNode.removeChild(t.$node), o.focus())
                            }
                        }
                    });
                    t.$body.classList.add("modalExit"), t.$header.innerHTML = m.token ? gettext("Logout from application?") : gettext("You want to login into app?"), t.$content.innerHTML = "", t.$content.appendChild(e = document.createElement("div")), e.innerText = gettext("Ok"), e.className = "btn confirm" + (x ? " old" : ""), t.$content.appendChild(e = document.createElement("div")), e.className = "btn back" + (x ? " old" : ""), e.innerText = gettext("Cancel"), t.$footer.innerHTML = "", d.current.add(t), w.hide(), t.show(), t.focus()
                }
            }, {
                title: gettext("Safe mode"),
                value: c.settings.safeSearch,
                values: e.data.safeSearch,
                description: gettext("Hide unwanted content"),
                icon: 0 === c.settings.safeSearch ? "icon settings-uncheck" : "icon settings-check",
                onclick: function(t) {
                    var i = e.getNext("safeSearch", c.settings.safeSearch);
                    t.$value.innerText = i.value, this.value = i.index, c.settings.safeSearch = i.index, 0 === i.index ? this.icon = t.$icon.className = "icon settings-uncheck" : this.icon = t.$icon.className = "icon settings-check"
                }
            }, {
                title: gettext("Default extension"),
                value: c.settings.quality,
                values: e.data.quality,
                description: gettext("Choose default video quality"),
                icon: c.settings.quality < 2 ? "icon player-HD" : "icon player-SD",
                onclick: function(t) {
                    var i = e.getNext("quality", c.settings.quality);
                    t.$value.innerText = i.value, this.value = i.index, c.settings.quality = i.index, c.settings.quality < 2 ? this.icon = t.$icon.className = "icon player-HD" : this.icon = t.$icon.className = "icon player-SD"
                }
            }, {
                title: gettext("Language"),
                value: c.languageIndex,
                values: f.languagesLocalized,
                description: gettext("Interface language"),
                icon: "icon flag",
                onclick: function(e) {
                    var i = t.nextLang(this.value);
                    this.value = i, T = i, e.$value.innerText = f.languagesLocalized[i]
                }
            }],
            render: function(e, t) {
                e.ready || (e.$container = e.appendChild(document.createElement("div")), e.$container.className = "container", e.$title = e.$container.appendChild(document.createElement("div")), e.$title.className = "title", e.$value = e.$container.appendChild(document.createElement("div")), e.$value.className = "value", e.$icon = e.$container.appendChild(document.createElement("div")), e.$description = e.appendChild(document.createElement("div")), e.$description.className = "description", e.ready = !0), e.$title.innerText = t.title, e.$value.innerHTML = t.values[t.value], e.$icon.className = t.icon, e.$description.innerText = t.description
            },
            events: {
                keydown: function(e) {
                    switch (e.code) {
                        case l.right:
                            this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? this.renderView(this.viewIndex + 1) : this.focusIndex(1));
                            break;
                        case l.left:
                            this.viewIndex > 0 && this.viewIndex < this.data.length - this.size ? this.renderView(this.viewIndex + 1) : this.move(e.code);
                            break;
                        case l.ok:
                            void 0 !== this.events["click:item"] && this.emit("click:item", {
                                $item: this.$focusItem,
                                event: e
                            });
                            break;
                        case l.back:
                        case l.exit:
                            n() && (e.stop = !0)
                    }
                },
                "click:item": function(e) {
                    e.$item.data.onclick(e.$item)
                },
                overflow: function(e) {
                    e.direction === l.left && b.focus()
                }
            }
        }), y.add(o), o.renderView = function(e) {
            var t, i, n, o, s;
            if (this.viewIndex !== e) {
                for (o = this.viewIndex, this.viewIndex = s = e, i = 0; i < this.size; i++) t = this.$body.children[i], n = this.data[e], void 0 !== n ? (t.data = n, t.index = e, this.renderItem(t, n), n.mark ? t.classList.add("mark") : t.classList.remove("mark")) : (t.data = t.index = void 0, t.innerHTML = "", t.ready = !1), e++;
                return void 0 !== this.events["move:view"] && this.emit("move:view", {
                    prevIndex: o,
                    currIndex: s
                }), !0
            }
            return !1
        }), this.show(), o.focus(), o.focusIndex(0), y.focusEntry = o
    }, e.exports = y
}, function(e, t, i) {
    "use strict";
    var n, o, s = i(1),
        a = i(2),
        r = i(12),
        l = i(8),
        c = (i(19), i(13)),
        d = i(21),
        u = i(18),
        h = new r({
            visible: !1,
            focusable: !0,
            $node: document.getElementById("ppPanelVideo")
        }),
        p = new l({
            $node: document.getElementById("ppMenuList"),
            cycle: !0,
            size: 3,
            visible: !1,
            data: [{
                value: "icon playlist"
            }, {
                value: "icon related"
            }, {
                value: "icon upload"
            }],
            render: function(e, t) {
                e.className = t.value
            },
            events: {
                "focus:item": function(e) {
                    m[e.$curr.index].focus()
                }
            }
        }),
        m = [],
        v = -1,
        f = 10;
    h.addListener("show", function(e) {
        var t = m[0].$focusItem && m[0].$focusItem.$videoThumb ? 0 : 1;
        h.focus(), n = e.video, o = {
            id: n.channelId,
            title: n.channelTitle
        }, p.show(), p.$focusItem = null, p.focusIndex(t), void 0 !== e.onDelayPlayNext && (f = e.onDelayPlayNext, v = setInterval(function() {
            0 >= f ? (m[t].$focusItem.$videoThumb.innerText = "", m[t].emit("keydown", {
                code: s.right
            }), m[t].emit("keydown", {
                code: s.ok
            })) : m[0].$focusItem && m[0].$focusItem.$videoThumb && (--f, m[0].$focusItem.$videoThumb.innerText = f)
        }, 1e3))
    }), h.addListener("hide", function() {
        p.hide(), clearInterval(v)
    }), m.push(new c({
        visible: !1,
        $node: document.getElementById("ppChannelVideoListNode"),
        $body: document.getElementById("ppChannelVideoListBody"),
        $title: document.getElementById("ppChannelTitle"),
        model: new d,
        type: l.prototype.TYPE_HORIZONTAL,
        events: {
            "view:ready": function() {
                this.focusIndex(0)
            },
            "view:error": function() {
                p.focusIndex(1)
            },
            focus: function() {
                this.show(), this.model.init({
                    channel: o
                })
            },
            blur: function() {
                this.hide()
            },
            keydown: function(e) {
                switch (e.code) {
                    case s.right:
                        this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                        break;
                    case s.left:
                        this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                        break;
                    case s.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
                clearInterval(v), m[p.$focusItem.index].$focusItem && (m[p.$focusItem.index].$focusItem.$videoThumb.innerText = ""), e.code !== s.down && e.code !== s.up || p.move(e.code)
            },
            "click:item": function(e) {
                n = e.$item.data, a.player.playContent({
                    channel: o,
                    video: n,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
            }
        }
    })), m.push(new c({
        visible: !1,
        $node: document.getElementById("ppVideoRelationsListNode"),
        $body: document.getElementById("ppVideoRelationsListBody"),
        $title: document.getElementById("ppVideoRelationsTitle"),
        model: new u,
        type: l.prototype.TYPE_HORIZONTAL,
        events: {
            focus: function() {
                this.show(), this.model.filter({
                    relatedToVideoId: n.id
                })
            },
            "view:ready": function() {
                this.focusIndex(0)
            },
            blur: function() {
                this.hide()
            },
            keydown: function(e) {
                switch (e.code) {
                    case s.right:
                        this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                        break;
                    case s.left:
                        this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                        break;
                    case s.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
                clearInterval(v), m[p.$focusItem.index].$focusItem && (m[p.$focusItem.index].$focusItem.$videoThumb.innerText = ""), e.code !== s.down && e.code !== s.up || p.move(e.code)
            },
            "click:item": function(e) {
                n = e.$item.data, o = {
                    id: n.channelId,
                    title: n.channelTitle
                }, a.player.playContent({
                    channel: o,
                    video: n,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
            }
        }
    })), m.push(new c({
        visible: !1,
        $node: document.getElementById("ppChannelUploadsListNode"),
        $body: document.getElementById("ppChannelUploadsVideoListBody"),
        $title: document.getElementById("ppChannelUploadsTitle"),
        model: new u,
        type: l.prototype.TYPE_HORIZONTAL,
        events: {
            focus: function() {
                this.show(), this.model.filter({
                    channel: o
                })
            },
            "view:ready": function() {
                this.focusIndex(0)
            },
            blur: function() {
                this.hide()
            },
            keydown: function(e) {
                switch (e.code) {
                    case s.right:
                        this.$focusItem && this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                        break;
                    case s.left:
                        this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : this.move(e.code);
                        break;
                    case s.ok:
                        this.emit("click:item", {
                            $item: this.$focusItem,
                            event: e
                        })
                }
                clearInterval(v), m[p.$focusItem.index].$focusItem && (m[p.$focusItem.index].$focusItem.$videoThumb.innerText = ""), e.code !== s.down && e.code !== s.up || p.move(e.code)
            },
            "click:item": function(e) {
                n = e.$item.data, a.player.playContent({
                    channel: o,
                    video: n,
                    playlist: this.data,
                    position: this.$focusItem.index
                })
            }
        }
    })), m.forEach(function(e) {
        h.add(e)
    }), m[0].model.addListener("content:changed", function(e) {
        m[0].$title.innerHTML = e.channel.title
    }), m[1].model.addListener("content:changed", function() {
        m[1].$title.innerHTML = gettext("Related videos")
    }), m[2].model.addListener("content:changed", function(e) {
        m[2].$title.innerHTML = gettext("Uploads on the channel") + " " + e.channel.title
    }), e.exports = h
}, function(e, t, i) {
    "use strict";
    var n, o = i(2),
        s = i(63),
        a = i(11),
        r = i(6),
        l = new s({
            $node: document.getElementById("psKeyboard"),
            cycleY: !1,
            events: {
                "click:item": function(e) {
                    -1 !== e.$item.data.className.indexOf("keyGlobe") ? (o.settings.keyboardLanguage = a.nextLang(o.settings.keyboardLanguage), this.viewIndex = null, this.init({
                        data: i(20)("./" + r.languages[o.settings.keyboardLanguage])
                    }), this.focusItem(n), gSTB.SetInputLang(r.languages[o.settings.keyboardLanguage])) : -1 !== e.$item.data.className.indexOf("nums") ? this.init({
                        data: [
                            [{
                                value: "1",
                                className: "symbol"
                            }, {
                                value: "2",
                                className: "symbol"
                            }, {
                                value: "3",
                                className: "symbol"
                            }, {
                                value: "^",
                                className: "symbol"
                            }, {
                                value: "`",
                                className: "symbol"
                            }, {
                                value: "!",
                                className: "symbol"
                            }, {
                                value: "#",
                                className: "symbol"
                            }, {
                                value: "$",
                                className: "symbol"
                            }, {
                                value: "%",
                                className: "symbol"
                            }],
                            [{
                                value: "4",
                                className: "symbol"
                            }, {
                                value: "5",
                                className: "symbol"
                            }, {
                                value: "6",
                                className: "symbol"
                            }, {
                                value: "&",
                                className: "symbol"
                            }, {
                                value: "(",
                                className: "symbol"
                            }, {
                                value: ")",
                                className: "symbol"
                            }, {
                                value: "*",
                                className: "symbol"
                            }, {
                                value: ";",
                                className: "symbol"
                            }, {
                                value: ":",
                                className: "symbol"
                            }],
                            [{
                                value: "7",
                                className: "symbol"
                            }, {
                                value: "8",
                                className: "symbol"
                            }, {
                                value: "9",
                                className: "symbol"
                            }, {
                                value: "~",
                                className: "symbol"
                            }, {
                                value: "/",
                                className: "symbol"
                            }, {
                                value: "|",
                                className: "symbol"
                            }, {
                                value: "%",
                                className: "symbol"
                            }, {
                                value: ":",
                                className: "symbol"
                            }, {
                                value: "?",
                                className: "symbol"
                            }],
                            [{
                                value: "№",
                                className: "symbol"
                            }, {
                                value: "0",
                                className: "symbol"
                            }, {
                                value: "[",
                                className: "symbol"
                            }, {
                                value: "]",
                                className: "symbol"
                            }, {
                                value: '"',
                                className: "symbol"
                            }, {
                                value: "'",
                                className: "symbol"
                            }, {
                                value: "{",
                                className: "symbol"
                            }, {
                                value: "}",
                                className: "symbol"
                            }, {
                                value: "ABC",
                                className: "symbol letters"
                            }]
                        ]
                    }) : -1 !== e.$item.data.className.indexOf("letters") && this.init({
                        data: i(20)("./" + r.languages[o.settings.keyboardLanguage])
                    })
                }
            },
            render: function(e, t) {
                "keyGlobe" === t.className ? (e.innerHTML = r.languagesCodeLocalized[o.settings.keyboardLanguage], n = e) : e.innerHTML = t.value, t.className && (e.className = "item " + t.className)
            },
            data: i(20)("./" + r.languages[o.settings.keyboardLanguage])
        });
    gSTB.SetInputLang(r.languages[o.settings.keyboardLanguage]), e.exports = l
}, function(e, t, i) {
    "use strict";

    function n() {
        d.isMuted && (h.setMute(0), d.isMuted = !1, p.classList.remove("muted")), d.currentVolume >= f && (d.currentVolume -= f, p.innerText = d.currentVolume.toString(), 0 !== d.currentVolume && d.currentVolume - f > 0 ? m.innerText = (d.currentVolume - f).toString() : m.innerText = "", v.innerText = (d.currentVolume + f).toString(), h.setVolume(d.currentVolume))
    }

    function o() {
        d.isMuted && (h.setMute(0), d.isMuted = !1, p.classList.remove("muted")), d.currentVolume + f <= 100 && (d.currentVolume += f, p.innerText = d.currentVolume.toString(), 100 !== d.currentVolume ? v.innerText = (d.currentVolume + f).toString() : v.innerText = "", h.setVolume(d.currentVolume), m.innerText = (d.currentVolume - f).toString())
    }

    function s() {
        d.isMuted ? (h.setMute(0), d.isMuted = !1, p.classList.remove("muted")) : (h.setMute(1), d.isMuted = !0, p.classList.add("muted"))
    }
    var a, r = "volumeWidget",
        l = document.getElementById(r),
        c = i(25),
        d = new c({
            $node: l,
            visible: !1
        }),
        u = i(1),
        h = i(22),
        p = document.getElementById("volumeCurrentValue"),
        m = document.getElementById("volumeBotValue"),
        v = document.getElementById("volumeTopValue"),
        f = 5;
    d.isMuted = !!h.isMuted(), d.currentVolume = h.getVolume(), p.innerText = d.currentVolume.toString(), d.currentVolume <= 100 - f && (v.innerText = (d.currentVolume + f).toString()), d.currentVolume >= f ? m.innerText = (d.currentVolume - f).toString() : m.innerText = "0", d.changeVolume = function(e) {
        switch (e) {
            case u.volumeDown:
                n();
                break;
            case u.volumeUp:
                o();
                break;
            case u.mute:
                s()
        }
        this.display(2)
    }, d.display = function(e) {
        d.visible && clearTimeout(a), void 0 !== e && (a = setTimeout(function() {
            d.hide()
        }, 1e3 * e)), this.show()
    }, d.setValue = function(e) {
        0 > e || e > 100 || (this.currentVolume = e, p.innerText = d.currentVolume.toString(), 0 !== d.currentVolume && d.currentVolume - f > 0 ? m.innerText = (d.currentVolume - f).toString() : m.innerText = "", 100 !== d.currentVolume ? v.innerText = (d.currentVolume + f).toString() : v.innerText = "")
    }, e.exports = d
}, function(e, t) {
    "use strict";
    e.exports = {
        GCQmVzdCBvZiBZb3VUdWJl: "icon popular",
        GCUGFpZCBDaGFubmVscw: "icon purchases",
        GCTXVzaWM: "icon music",
        GCQ29tZWR5: "icon humor",
        GCRmlsbSAmIEVudGVydGFpbm1lbnQ: "icon entertainment",
        GCR2FtaW5n: "icon games",
        GCQmVhdXR5ICYgRmFzaGlvbg: "icon social",
        GCRnJvbSBUVg: "fa fa-youtube-play",
        GCQXV0b21vdGl2ZQ: "fa fa-car",
        GCQW5pbWF0aW9u: "fa fa-picture-o",
        GCVG9wIFlvdVR1YmUgQ29sbGVjdGlvbnM: "icon popular",
        GCVG9wIEJsb2dz: "icon social",
        GCU3BvcnRz: "icon sport",
        GCSG93LXRvICYgRElZ: "fa fa-wrench",
        GCVGVjaA: "icon hobbie",
        GCU2NpZW5jZSAmIEVkdWNhdGlvbg: "fa fa-book",
        GCQ29va2luZyAmIEhlYWx0aA: "fa fa-spoon",
        GCQ2F1c2VzICYgTm9uLXByb2ZpdHM: "fa fa-users",
        GCTmV3cyAmIFBvbGl0aWNz: "icon news",
        GCTGlmZXN0eWxl: "fa fa-leaf"
    }
}, function(e, t, i) {
    "use strict";
    var n = i(10),
        o = i(7),
        s = i(4),
        a = (i(2), i(6), i(23)),
        r = new o;
    r.totalResults = {}, r.pages = {}, r.cacheKey = function(e) {
        return "rec;p:" + e.page
    }, r.getPage = function(e) {
        var t = this;
        return e.page = +e.page || 0, e.count = e.count || 1, new n(function(i, n) {
            var o, l = a.get(t.cacheKey(e));
            if (l) i(l);
            else {
                if (o = "videos?part=snippet&chart=mostPopular", o += "&maxResults=" + e.count, e.page) {
                    if (!t.pages[e.page]) return t.totalResults === e.page ? void n("overflow") : void n("no page");
                    o += "&pageToken=" + t.pages[e.page]
                }
                s.request("GET", o).then(function(o) {
                    var l, c, d = [];
                    if (o = JSON.parse(o), 0 === o.items.length && 0 === e.page) return s.staticUrl = "&key=" + s.activeKey, void r.getPage(e).then(i, n);
                    for (o.pageInfo.totalResults && (t.totalResults = o.pageInfo.totalResults), o.nextPageToken && (t.pages[e.page + 1] = o.nextPageToken), o.prevPageToken && (t.pages[e.page - 1] = o.prevPageToken), o = o.items, l = 0, c = o.length; c > l; ++l) d.push({
                        id: o[l].snippet.channelId,
                        title: o[l].snippet.channelTitle,
                        icon: o[l].snippet.thumbnails["default"].url
                    });
                    a.set(t.cacheKey(e), d, !1), i(d)
                })["catch"](function(e) {})
            }
        })
    }, e.exports = r
}, function(module, exports, __webpack_require__) {
    "use strict";

    function getUrlFromObj(e, t) {
        return parseSig = t !== !1, getUrlCallback = e || null, this.needSig ? (getSig(this),
            null) : (onGetUrlDone(this.error, this), this.url)
    }

    function urlToObj(e) {
        var t, i, n, o = {},
            s = new RegExp("^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$"),
            a = s.exec(e);
        for (t = a[8].substring(1).split("&"), n = 0; n < t.length; n++) i = t[n].split("="), o[i[0]] = i[1] || "";
        return o
    }

    function ajax(e, t) {
        var i, n, o, s;
        if (window.ytRequest) {
            if (t = t || {}, e && ("string" == typeof e || e instanceof String) && e.length > 0) {
                if (t && "object" == typeof t)
                    for (i = 0; i < defaultsKeys.length; i++) void 0 === t[defaultsKeys[i]] && (t[defaultsKeys[i]] = defaults[defaultsKeys[i]]);
                if (o = new window.ytRequest, o.open(t.method, e, t.async), t.headers && "object" == typeof t.headers)
                    for (n = Object.keys(t.headers), i = 0; i < n.length; i++) o.setRequestHeader(n[i], t.headers[n[i]]);
                o.responseType = t.type, o.timeout = t.timeout, t.onload && "function" == typeof t.onload && (o.onload = function() {
                    t.onload.call(this, this.response || this.responseText, this.status)
                }), o.onerror = function(e) {}, o.ontimeout = function() {};
                return o.send(t.data ? t.data : null), o
            }
            return !1
        }
        s = document.createElement("iframe"), s.src = "https://www.youtube.com/embed/" + info.videoId + "/", s.style.display = "none", s.onload = s.onerror = function() {
            if (window.ytRequest = s.contentWindow.XMLHttpRequest, t = t || {}, e && ("string" == typeof e || e instanceof String) && e.length > 0) {
                if (t && "object" == typeof t)
                    for (i = 0; i < defaultsKeys.length; i++) void 0 === t[defaultsKeys[i]] && (t[defaultsKeys[i]] = defaults[defaultsKeys[i]]);
                if (o = new window.ytRequest, o.open(t.method, e, t.async), t.headers && "object" == typeof t.headers)
                    for (n = Object.keys(t.headers), i = 0; i < n.length; i++) o.setRequestHeader(n[i], t.headers[n[i]]);
                o.responseType = t.type, o.timeout = t.timeout, t.onload && "function" == typeof t.onload && (o.onload = function() {
                    t.onload.call(this, this.response || this.responseText, this.status)
                }), o.onerror = function(e) {}, o.ontimeout = function() {};
                return o.send(t.data ? t.data : null), o
            }
            return !1
        }, document.body.appendChild(s)
    }

    function onGetMapDone(e, t, i) {
        "function" == typeof getInfoCallback && getInfoCallback(e, t, i)
    }

    function onGetUrlDone(e, t) {
        "function" == typeof getUrlCallback && (t = t || {}, getUrlCallback(e, t.url))
    }

    function clear() {
        hashUrl = {}, dashArr = [], info = {
            ageGate: !1,
            dash: !1,
            author: "",
            description: "",
            lengthSeconds: 0,
            playerUrl: null,
            thumb: null,
            title: "",
            uploadDate: "",
            uploaderId: "",
            url: "",
            urlMap: [],
            urlMapBad: [],
            videoId: null,
            viewCount: "",
            ypc_video_rental_bar_text: null,
            error: null
        }
    }

    function getUrls(e) {
        var t;
        clear(), info.videoId = e, t = "https://www.youtube.com/watch?v=" + info.videoId + "&gl=US&hl=en&has_verified=1&bpctr=9999999999", ajax(t, {
            onload: parseUrls
        })
    }

    function parseUrls(e) {
        var t;
        return info.playerUrl = null, t = /swfConfig.*?"(https?:\/\/.*?watch.*?-.*?\.swf)"/, -1 !== e.search(t) ? (info.error = {}, info.error.message = "Flash player is not supported", info.error.videoId = info.videoId, void onGetMapDone(info.error, info, null)) : (t = /player-age-gate-content">/, -1 !== e.search(t) ? (info.ageGate = !0, ajax("https://www.youtube.com/embed/" + info.videoId, {
            onload: parseAgeGate
        }), null) : (info.ageGate = !1, void parseInfo(e)))
    }

    function parseAgeGate(e) {
        var t, i, n, o;
        try {
            t = /<link itemprop="url" href="http:\/\/www.youtube.com\/(?:user|channel)\/([^"]+)">/, i = t.exec(e), i ? info.uploaderId = i[1] : info.uploaderId = null, t = /<span itemprop="thumbnail".*?href="(.*?)">/, i = t.exec(e), i && (info.thumb = i[1]), t = /id="eow-date.*?>(.*?)<\/span>/, i = t.exec(e), i ? info.uploadDate = i[1] : (t = /id="watch-uploader-info".*?>.*?(?:Published|Uploaded|Streamed live) on (.*?)<\/strong>/, i = t.exec(e), i ? info.uploadDate = i[1] : info.uploadDate = ""), t = /<h4[^>]*>\s*Category\s*<\/h4>\s*<ul[^>]*>\s*(.*?)\s*<\/ul>/, i = t.exec(e), i && (t = /<a[^<]+>(.*?)<\/a>/g, i = t.exec(i[1]), i[1] && (info.category = i[1])), t = /id="eow-description"[^>]*>(.*)?<\/p>/, i = t.exec(e), i ? info.description = i[1] : (t = /<meta name="description" content="([^"]+)"/, i = t.exec(e), i ? info.description = i[1] : info.description = ""), n = "https://youtube.googleapis.com/v/" + info.videoId, n = encodeURIComponent(n), t = /sts":\s*(\d+)/, i = t.exec(e), o = "https://www.youtube.com/get_video_info?eurl=" + n + "&sts=" + i[1] + "&video_id=" + info.videoId, ajax(o, {
                onload: function(t) {
                    parseInfoAge(t, e)
                }
            })
        } catch (s) {
            info.error = {}, info.error.message = s.message, info.error.videoId = info.videoId, onGetMapDone(info.error, info)
        }
    }

    function parseInfoAge(e, t) {
        var i, n, o, s, a = e.split(";"),
            r = {};
        try {
            for (o = 0; o < a.length; o++)
                for (n = a[o].split("&"), s = 0; s < n.length; s++) i = n[s].split("="), r[i[0]] = i[1] || "";
            r.view_count ? info.viewCount = r.view_count : info.viewCount = 0, r.author ? info.author = r.author : info.author = "", r.title ? info.title = r.title : info.title = "", info.category = "", r.length_seconds ? info.lengthSeconds = parseInt(r.length_seconds, 10) : info.lengthSeconds = 0, r.ypc_video_rental_bar_text ? info.ypc_video_rental_bar_text = r.ypc_video_rental_bar_text : info.ypc_video_rental_bar_text = null, r.thumbnail_url ? info.thumb = r.thumbnail_url : info.thumb = null, getPlayerInfo(e, r, t)
        } catch (l) {
            info.error = {}, info.error.message = l.message, info.error.videoId = info.videoId, onGetMapDone(info.error, info)
        }
    }

    function parseInfo(e) {
        var t, i, n, o;
        try {
            if (t = /;ytplayer\.config\s*=\s*({.*?});ytplayer/, i = t.exec(e), !i) return info.dash = !0, void getDash();
            n = JSON.parse(i[1]), o = n.args, getInfo(e, o), getPlayerInfo(e, o)
        } catch (s) {
            info.error = {}, info.error.message = s.message, info.error.videoId = info.videoId, onGetMapDone(info.error, info)
        }
    }

    function getDash(e) {
        var t = ["&el=info", "&el=embedded", "&el=detailpage", "&el=vevo", ""];
        e = e || 0, e < t.length ? ajax("https://www.youtube.com/get_video_info?&video_id=" + info.videoId + t[e] + "&ps=default&eurl=&gl=US&hl=en", {
            onload: function(t) {
                getDashLoad(t, e)
            }
        }) : 0 === dashArr.length && (info.error = {}, info.error.message = '"token" parameter not in video info for unknown reason and no dash', info.error.videoId = info.videoId, onGetMapDone(info.error, info, null))
    }

    function getDashLoad(e, t) {
        var i, n, o, s, a = e.split(";"),
            r = {};
        for (o = 0; o < a.length; o++)
            for (n = a[o].split("&"), s = 0; s < n.length; s++) i = n[s].split("="), r[i[0]] = i[1] || "";
        r.token ? (r.view_count ? info.viewCount = r.view_count : info.viewCount = 0, r.author ? info.author = r.author : info.author = "", r.title ? info.title = r.title : info.title = "", info.category = "", r.length_seconds ? info.lengthSeconds = parseInt(r.length_seconds, 10) : info.lengthSeconds = 0, r.ypc_video_rental_bar_text ? info.ypc_video_rental_bar_text = r.ypc_video_rental_bar_text : info.ypc_video_rental_bar_text = null, r.thumbnail_url ? info.thumb = r.thumbnail_url : info.thumb = null, r.use_cipher_signature && r.dashmpd && dashArr.push(decodeURIComponent(r.dashmpd)), getPlayerInfo(e, r)) : getDash(++t)
    }

    function getInfo(e, t) {
        var i, n;
        t.view_count ? info.viewCount = t.view_count : info.viewCount = 0, t.author ? info.author = t.author : info.author = "", i = /<link itemprop="url" href="http:\/\/www.youtube.com\/(?:user|channel)\/([^"]+)">/, n = i.exec(e), n ? info.uploaderId = n[1] : info.uploaderId = null, t.title ? info.title = t.title : info.title = "", i = /<span itemprop="thumbnail".*?href="(.*?)">/, n = i.exec(e), n ? info.thumb = n[1] : t.thumbnail_url ? info.thumb = t.thumbnail_url : info.thumb = null, i = /id="eow-date.*?>(.*?)<\/span>/, n = i.exec(e), n ? info.uploadDate = n[1] : (i = /id="watch-uploader-info".*?>.*?(?:Published|Uploaded|Streamed live) on (.*?)<\/strong>/, n = i.exec(e), n ? info.uploadDate = n[1] : info.uploadDate = ""), info.category = "", i = /<h4[^>]*>\s*Category\s*<\/h4>\s*<ul[^>]*>\s*(.*?)\s*<\/ul>/, n = i.exec(e), n && (i = /<a[^<]+>(.*?)<\/a>/g, n = i.exec(n[1]), n[1] && (info.category = n[1])), i = /id="eow-description"[^>]*>(.*)?<\/p>/, n = i.exec(e), n ? info.description = n[1] : (i = /<meta name="description" content="([^"]+)"/, n = i.exec(e), n ? info.description = n[1] : info.description = ""), t.length_seconds ? info.lengthSeconds = parseInt(t.length_seconds, 10) : info.lengthSeconds = 0, t.ypc_video_rental_bar_text ? info.ypc_video_rental_bar_text = t.ypc_video_rental_bar_text : info.ypc_video_rental_bar_text = null
    }

    function getPlayerInfo(e, t, i) {
        var n, o, s, a, r, l, c, d, u, h, p, m, v, f = null;
        if (1 != t.livestream && 1 != t.live_playback || (p = !0), !t.token) return t.reason ? (info.error = {}, info.error.message = "YouTube said: " + t.reason, info.error.videoId = info.videoId) : (info.error = {}, info.error.message = '"token" parameter not in video info for unknown reason', info.error.videoId = info.videoId), void onGetMapDone(info.error, info);
        if ("ypc_video_rental_bar_text" in t && !info.author) return info.error = {}, info.error.message = '"rental" videos not supported', info.error.videoId = info.videoId, void onGetMapDone(info.error, info);
        if (t.conn && t.conn[0]) return info.url = t.conn[0], info.urlMap = [Object.create(urlDefObj)], info.urlMap[0].url = info.url, info.urlMap[0].isLive = p, info.urlMap.format = formats.conn, void onGetMapDone(info.error, info, info.urlMap[0]);
        if (info.urlMap = [], "rtmpe%3Dyes" in t) return info.error = {}, info.error.message = "rtmpe downloads are not supported", info.error.videoId = info.videoId, void onGetMapDone(info.error, info);
        if (t.url_encoded_fmt_stream_map || t.adaptive_fmts) {
            n = (t.url_encoded_fmt_stream_map || "") + "," + (t.adaptive_fmts || ""), u = n.split(",");
            for (v in u)
                if (r = "", l = {}, u[v]) {
                    for (o = info.ageGate || info.dash ? decodeURIComponent(u[v]) : u[v], s = o.slice(o.indexOf("?") + 1).split("&"), o = [], m = 0; m < s.length; m++) a = s[m].split("="), o.push(a[0]), o[a[0]] = decodeURI(a[1]);
                    if ("itag" in o && "url" in o)
                        if (l = o.itag, r = decodeURI(decodeURI(decodeURIComponent(o.url.replace(/\+/g, "%20")))), l in formats) {
                            if ("ratebypass" in o && (r += "&ratebypass=yes"), "sig" in o) r += "&signature=" + o.sig;
                            else if ("s" in o) {
                                if (c = /"assets":.+?"js":\s*("[^"]+")/, d = c.exec(i ? i : e), d && d[1] && (f = d[1], c = /"(.*)"/, d = c.exec(f), d && d[1] && (f = d[1])), !f) return;
                                h = Object.create(urlDefObj, {
                                    format: {
                                        value: formats[l]
                                    },
                                    formatId: {
                                        value: parseInt(l, 10)
                                    },
                                    sig: {
                                        value: o.s
                                    },
                                    playerUrl: {
                                        value: f
                                    }
                                }), h.url = r, h.needSig = !0, h.isLive = p, info.urlMap.push(h);
                                continue
                            }
                            h = Object.create(urlDefObj, {
                                format: {
                                    value: formats[l]
                                },
                                formatId: {
                                    value: parseInt(l, 10)
                                },
                                sig: {
                                    value: o.s
                                },
                                playerUrl: {
                                    value: f
                                }
                            }), h.url = r, h.needSig = !1, h.isLive = p, info.urlMap.push(h)
                        } else h = Object.create(urlDefObj, {
                            format: {
                                value: formats[l]
                            },
                            formatId: {
                                value: parseInt(l, 10)
                            },
                            sig: {
                                value: o.s
                            },
                            playerUrl: {
                                value: f
                            }
                        }), h.url = r, h.needSig = !1, h.isLive = p, info.urlMapBad.push(h)
                }
            return info.urlMap.length ? (info.urlMap.sort(function(e, t) {
                return e.formatId < t.formatId ? -1 : e.formatId > t.formatId ? 1 : 0
            }), info.urlMap.sort(function(e, t) {
                return e.format.height > t.format.height ? -1 : e.format.height < t.format.height ? 1 : 0
            }), info.url = info.urlMap[0].needSig ? null : info.urlMap[0].url, void onGetMapDone(info.error, info, info.urlMap[0])) : void onGetMapDone(info.error, info)
        }
        return t.hlsvp ? void ajax(decodeURIComponent(t.hlsvp), {
            onload: function(e) {
                parsseM3U(e)
            }
        }) : (info.error = {}, info.error.message = "no way to get link", info.error.videoId = info.videoId, void onGetMapDone(info.error, info))
    }

    function parsseM3U(e) {
        var t, i = e.split("\n"),
            n = null,
            o = 0;
        for (t = 0; t < i.length; t++) i[t].startsWith("#") || (o = /itag\/(\d+?)\//.exec(i[t]), o && o.length >= 2 && (o = o[1]), o in formats ? (n = Object.create(urlDefObj, {
            format: {
                value: formats[o]
            },
            formatId: {
                value: parseInt(o, 10)
            },
            sig: {
                value: ""
            },
            playerUrl: {
                value: ""
            }
        }), n.url = i[t], n.needSig = !1, info.urlMap.push(n)) : (n = Object.create(urlDefObj, {
            format: {
                value: formats[o]
            },
            formatId: {
                value: parseInt(o, 10)
            },
            sig: {
                value: ""
            },
            playerUrl: {
                value: ""
            }
        }), n.url = i[t], n.needSig = !1, info.urlMapBad.push(n)));
        return info.urlMap.length ? (info.urlMap.sort(function(e, t) {
            return e.formatId < t.formatId ? -1 : e.formatId > t.formatId ? 1 : 0
        }), info.urlMap.sort(function(e, t) {
            return e.format.height > t.format.height ? -1 : e.format.height < t.format.height ? 1 : 0
        }), info.url = info.urlMap[0].needSig ? null : info.urlMap[0].url, void onGetMapDone(info.error, info, info.urlMap[0])) : void onGetMapDone(info.error, info)
    }

    function getSig(obj) {
        function getSigParseJS(responseText) {
            var jsplayer = {};
            regExp = /\.sig\|\|([a-zA-Z0-9$]+)\(/, matchObject = regExp.exec(responseText), responseText = responseText.replace(/}\)\(\);$/m, "");
            try {
                responseText += "} catch(e){}return " + matchObject[1] + '("' + obj.sig + '");} func1.call(window,jsplayer);', responseText = responseText.replace("var _yt_player={};(function(g){var window=this;", "var _yt_player={};function func1(g){try{var window=this;"), jsplayer = eval(responseText)
            } catch (e) {
                return obj.error = {}, obj.error.videoId = info.videoId, obj.error.playerUrl = obj.playerUrl, obj.error.message = e.message, void onGetUrlDone(obj.error, obj)
            }
            hashUrl[hash] = jsplayer, obj.url += "&signature=" + jsplayer, obj.needSig = !1, onGetUrlDone(obj.error, obj)
        }
        var encryptedSig, regExp, matchObject, playerUrl, hashes, hash, i;
        if (encryptedSig = obj.sig, playerUrl = obj.playerUrl, !playerUrl) return obj.error = {}, obj.error.videoId = info.videoId, obj.error.message = "Cannot decrypt signature without player_url", obj.error.playerUrl = obj.playerUrl, onGetUrlDone(obj.error, obj), !1;
        playerUrl = playerUrl.replace(/\\\//g, "/"), 0 === playerUrl.indexOf("//") && (playerUrl = "https:" + playerUrl), hashes = encryptedSig.split("."), hash = [];
        for (i in hashes) hash.push(hashes[i].length);
        if (hash = hash.join("."), hash = playerUrl + "_" + hash, hash in hashUrl) obj.url += "&signature=" + hashUrl[hash], onGetUrlDone(obj.error, obj);
        else {
            if (regExp = /.*?-([a-zA-Z0-9_-]+)(?:\/watch_as3|\/html5player(?:-new)?|\/base)?\.([a-z]+)$/, matchObject = regExp.exec(playerUrl), !matchObject || !matchObject[2]) return obj.error = {}, obj.error.videoId = info.videoId, obj.error.message = "Cannot identify player", obj.error.playerUrl = obj.playerUrl, onGetUrlDone(obj.error, obj), !1;
            if ("js" === matchObject[2]) return parseSig !== !1 ? (ajax(playerUrl, {
                onload: getSigParseJS
            }), !0) : (obj.error = {}, obj.error.videoId = info.videoId, obj.error.message = "Parsing signature is off", obj.error.playerUrl = obj.playerUrl, onGetUrlDone(obj.error, obj), !1);
            if ("swf" === matchObject[2]) return obj.error = {}, obj.error.videoId = info.videoId, obj.error.message = "Flash player is not supported", obj.error.playerUrl = obj.playerUrl, onGetUrlDone(obj.error, obj), !1;
            obj.error = {}, obj.error.videoId = info.videoId, obj.error.playerUrl = obj.playerUrl, obj.error.message = "Player type is not detected", onGetUrlDone(obj.error, obj)
        }
        return !0
    }
    var urlDefObj = {
            id: null,
            error: null,
            format: {},
            ageGate: !1,
            formatId: 0,
            needSig: !1,
            sig: null,
            url: "",
            isLive: !1,
            getUrl: getUrlFromObj
        },
        defaults = {
            method: "GET",
            async: !0,
            headers: {},
            type: "text",
            data: null,
            timeout: 3e4,
            onload: null,
            onerror: null,
            ontimeout: null
        },
        defaultsKeys = Object.keys(defaults),
        getInfoCallback = null,
        getUrlCallback = null,
        formats = {
            5: {
                ext: "flv",
                width: 400,
                height: 240,
                hasVideo: !0,
                hasAudio: !0
            },
            6: {
                ext: "flv",
                width: 450,
                height: 20,
                hasVideo: !0,
                hasAudio: !0
            },
            17: {
                ext: "3gp",
                width: 176,
                height: 144,
                hasVideo: !0,
                hasAudio: !0
            },
            18: {
                ext: "mp4",
                width: 640,
                height: 360,
                hasVideo: !0,
                hasAudio: !0
            },
            22: {
                ext: "mp4",
                width: 1280,
                height: 720,
                hasVideo: !0,
                hasAudio: !0
            },
            34: {
                ext: "flv",
                width: 640,
                height: 360,
                hasVideo: !0,
                hasAudio: !0
            },
            35: {
                ext: "flv",
                width: 854,
                height: 480,
                hasVideo: !0,
                hasAudio: !0
            },
            36: {
                ext: "3gp",
                width: 320,
                height: 240,
                hasVideo: !0,
                hasAudio: !0
            },
            37: {
                ext: "mp4",
                width: 1920,
                height: 1080,
                hasVideo: !0,
                hasAudio: !0
            },
            38: {
                ext: "mp4",
                width: 4096,
                height: 3072,
                hasVideo: !0,
                hasAudio: !0
            },
            43: {
                ext: "webm",
                width: 640,
                height: 360,
                hasVideo: !0,
                hasAudio: !0
            },
            44: {
                ext: "webm",
                width: 854,
                height: 480,
                hasVideo: !0,
                hasAudio: !0
            },
            45: {
                ext: "webm",
                width: 1280,
                height: 720,
                hasVideo: !0,
                hasAudio: !0
            },
            46: {
                ext: "webm",
                width: 1920,
                height: 1080,
                hasVideo: !0,
                hasAudio: !0
            },
            59: {
                ext: "mp4",
                width: 854,
                height: 480,
                hasVideo: !0,
                hasAudio: !0
            },
            78: {
                ext: "mp4",
                width: 854,
                height: 480,
                hasVideo: !0,
                hasAudio: !0
            },
            82: {
                ext: "mp4",
                height: 360,
                formatNote: "3D",
                preference: -20,
                hasVideo: !0,
                hasAudio: !0
            },
            83: {
                ext: "mp4",
                height: 480,
                formatNote: "3D",
                preference: -20,
                hasVideo: !0,
                hasAudio: !0
            },
            84: {
                ext: "mp4",
                height: 720,
                formatNote: "3D",
                preference: -20,
                hasVideo: !0,
                hasAudio: !0
            },
            85: {
                ext: "mp4",
                height: 1080,
                formatNote: "3D",
                preference: -20,
                hasVideo: !0,
                hasAudio: !0
            },
            100: {
                ext: "webm",
                height: 360,
                formatNote: "3D",
                preference: -20,
                hasVideo: !0,
                hasAudio: !0
            },
            101: {
                ext: "webm",
                height: 480,
                formatNote: "3D",
                preference: -20,
                hasVideo: !0,
                hasAudio: !0
            },
            102: {
                ext: "webm",
                height: 720,
                formatNote: "3D",
                preference: -20,
                hasVideo: !0,
                hasAudio: !0
            },
            92: {
                ext: "mp4",
                height: 240,
                formatNote: "HLS",
                preference: -10,
                hasVideo: !0,
                hasAudio: !0
            },
            93: {
                ext: "mp4",
                height: 360,
                formatNote: "HLS",
                preference: -10,
                hasVideo: !0,
                hasAudio: !0
            },
            94: {
                ext: "mp4",
                height: 480,
                formatNote: "HLS",
                preference: -10,
                hasVideo: !0,
                hasAudio: !0
            },
            95: {
                ext: "mp4",
                height: 720,
                formatNote: "HLS",
                preference: -10,
                hasVideo: !0,
                hasAudio: !0
            },
            96: {
                ext: "mp4",
                height: 1080,
                formatNote: "HLS",
                preference: -10,
                hasVideo: !0,
                hasAudio: !0
            },
            132: {
                ext: "mp4",
                height: 240,
                formatNote: "HLS",
                preference: -10,
                hasVideo: !0,
                hasAudio: !0
            },
            151: {
                ext: "mp4",
                height: 72,
                formatNote: "HLS",
                preference: -10,
                hasVideo: !0,
                hasAudio: !0
            },
            133: {
                ext: "mp4",
                height: 240,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            134: {
                ext: "mp4",
                height: 360,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            135: {
                ext: "mp4",
                height: 480,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            136: {
                ext: "mp4",
                height: 720,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            137: {
                ext: "mp4",
                height: 1080,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            138: {
                ext: "mp4",
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            160: {
                ext: "mp4",
                height: 144,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            264: {
                ext: "mp4",
                height: 1440,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            298: {
                ext: "mp4",
                height: 720,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                fps: 60,
                vcodec: "h264"
            },
            299: {
                ext: "mp4",
                height: 1080,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                fps: 60,
                vcodec: "h264"
            },
            266: {
                ext: "mp4",
                height: 2160,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                vcodec: "h264"
            },
            139: {
                ext: "m4a",
                format_note: "DASH audio",
                acodec: "aac",
                hasVideo: !1,
                hasAudio: !0,
                abr: 48,
                preference: -50,
                container: "m4a_dash"
            },
            140: {
                ext: "m4a",
                format_note: "DASH audio",
                acodec: "aac",
                hasVideo: !1,
                hasAudio: !0,
                abr: 128,
                preference: -50,
                container: "m4a_dash"
            },
            141: {
                ext: "m4a",
                format_note: "DASH audio",
                acodec: "aac",
                hasVideo: !1,
                hasAudio: !0,
                abr: 256,
                preference: -50,
                container: "m4a_dash"
            },
            167: {
                ext: "webm",
                height: 360,
                width: 640,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                container: "webm",
                vcodec: "VP8",
                preference: -40
            },
            168: {
                ext: "webm",
                height: 480,
                width: 854,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                container: "webm",
                vcodec: "VP8",
                preference: -40
            },
            169: {
                ext: "webm",
                height: 720,
                width: 1280,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                container: "webm",
                vcodec: "VP8",
                preference: -40
            },
            170: {
                ext: "webm",
                height: 1080,
                width: 1920,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                container: "webm",
                vcodec: "VP8",
                preference: -40
            },
            218: {
                ext: "webm",
                height: 480,
                width: 854,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                container: "webm",
                vcodec: "VP8",
                preference: -40
            },
            219: {
                ext: "webm",
                height: 480,
                width: 854,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                container: "webm",
                vcodec: "VP8",
                preference: -40
            },
            278: {
                ext: "webm",
                height: 144,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                container: "webm",
                vcodec: "VP9"
            },
            242: {
                ext: "webm",
                height: 240,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            243: {
                ext: "webm",
                height: 360,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            244: {
                ext: "webm",
                height: 480,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            245: {
                ext: "webm",
                height: 480,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            246: {
                ext: "webm",
                height: 480,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            247: {
                ext: "webm",
                height: 720,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            248: {
                ext: "webm",
                height: 1080,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            271: {
                ext: "webm",
                height: 1440,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            272: {
                ext: "webm",
                height: 2160,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40
            },
            302: {
                ext: "webm",
                height: 720,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                fps: 60,
                vcodec: "VP9"
            },
            303: {
                ext: "webm",
                height: 1080,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                fps: 60,
                vcodec: "VP9"
            },
            308: {
                ext: "webm",
                height: 1440,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                fps: 60,
                vcodec: "VP9"
            },
            313: {
                ext: "webm",
                height: 2160,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                vcodec: "VP9"
            },
            315: {
                ext: "webm",
                height: 2160,
                format_note: "DASH video",
                hasVideo: !0,
                hasAudio: !1,
                preference: -40,
                fps: 60,
                vcodec: "VP9"
            },
            171: {
                ext: "webm",
                hasVideo: !1,
                hasAudio: !0,
                format_note: "DASH audio",
                abr: 128,
                preference: -50
            },
            172: {
                ext: "webm",
                hasVideo: !1,
                hasAudio: !0,
                format_note: "DASH audio",
                abr: 256,
                preference: -50
            },
            249: {
                ext: "webm",
                hasVideo: !1,
                hasAudio: !0,
                format_note: "DASH audio",
                acodec: "opus",
                abr: 50,
                preference: -50
            },
            250: {
                ext: "webm",
                hasVideo: !1,
                hasAudio: !0,
                format_note: "DASH audio",
                acodec: "opus",
                abr: 70,
                preference: -50
            },
            251: {
                ext: "webm",
                hasVideo: !1,
                hasAudio: !0,
                format_note: "DASH audio",
                acodec: "opus",
                abr: 160,
                preference: -50
            },
            conn: {
                protocol: "conn"
            },
            rtmp: {
                protocol: "rtmp"
            }
        },
        parseSig = !0,
        dashArr = [],
        hashUrl = {},
        info = {},
        YoutubeDL = {};
    YoutubeDL.getInfo = function(e, t) {
        var i = {};
        if (getInfoCallback = t || null, e && 0 === e.indexOf("http")) {
            if (i = urlToObj(e), !i.v) return info.error = {}, info.error.videoId = info.videoId, info.error.message = "URL has not video id", !1
        } else i.v = e;
        return getUrls(i.v), !0
    }, module.exports = YoutubeDL
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var i;
        return function() {
            var n = this,
                o = arguments;
            clearTimeout(i), i = setTimeout(function() {
                i = null, e.apply(n, o)
            }, t)
        }
    }
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        return new o(function(i, n) {
            e.onload = function() {
                200 === this.status ? i(this.responseText) : n(this.statusText)
            }, e.onerror = function() {
                n()
            }, e.send(t)
        })
    }
    var o = i(10);
    e.exports = n
}, function(e, t, i) {
    "use strict";
    var n = "pi",
        o = i(16),
        s = new o({
            $node: document.getElementById(n)
        });
    e.exports = s
}, function(e, t, i) {
    "use strict";

    function n(e) {
        return "window." + e + ".id"
    }

    function o(e, t) {
        var i, o = n(e),
            s = stbStorage.getItem(o);
        if (s) try {
            i = JSON.parse(stbWindowMgr.windowInfo(s)), -1 === i.result.url.indexOf(t) && stbWebWindow.messageSend(s, "window.load", t), e === u.BROWSER ? (s = stbWindowMgr.openWebFace(t), stbStorage.setItem(o, s)) : stbWindowMgr.windowShow(s)
        } catch (a) {
            stbWindowMgr.openWebFace(t)
        } else s = e === u.BROWSER ? stbWindowMgr.openWebFace(t) : stbWindowMgr.windowInit(JSON.stringify({
            url: t,
            backgroundColor: "#000"
        })), stbStorage.setItem(o, s);
        return s
    }
    var s = i(2),
        a = i(3),
        r = i(16),
        l = i(15),
        c = i(4),
        d = new r({
            $node: document.getElementById("pl")
        }),
        u = {
            PORTAL: "portal",
            HELP: "help",
            DOWNLOAD_MANAGER: "dlman",
            PVR: "recordsManager",
            BROWSER: "ibman",
            BROWSER_VIEW: "ibmanView",
            PORTALS_LOADER: "portalsLoader",
            SYSTEM_SETTINGS: "systemSettings"
        };
    d.id = "pl", d.addListener("show", function() {
        var e, t, i = -1,
            r = 0,
            d = {
                480: {
                    x: 47,
                    y: 0,
                    w: 640,
                    h: 432
                },
                576: {
                    x: 55,
                    y: 0,
                    w: 637,
                    h: 528
                },
                720: {
                    x: 15,
                    y: 0,
                    w: 1280,
                    h: 720
                },
                1080: {
                    x: 10,
                    y: 0,
                    w: 1920,
                    h: 1080
                }
            };
        l.updateView({}, "pageLogin"), t = d[window.screen.height], setTimeout(function() {
            o(u.BROWSER, "file:///home/web/public/app/ibman/index.html?mode=2&view=1&url=" + encodeURIComponent(c.AUTH_URL))
        }, 0), i = setInterval(function() {
            var o, l = stbWindowMgr.getCurrWebUrl(),
                d = {};
            if (e = stbStorage.getItem(n(u.BROWSER)), 0 === l.length && r > 10) {
                try {
                    stbWebWindow.messageSend(e, "close")
                } catch (h) {}
                return clearInterval(i), void a.back()
            }++r, stbWindowMgr.SetVirtualKeyboardCoord("bottom"), stbWindowMgr.resizeWebWindow(t.x, t.y, t.w, t.h), -1 !== l.indexOf("#") && -1 !== l.indexOf("code") && (l = l.split("?")[1].replace("#", "").split("&"), l.forEach(function(e) {
                o = e.split("="), d[o[0]] = o[1]
            }), d.code && (clearInterval(i), stbWebWindow.messageSend(e, "close"), c.postAuth(d.code).then(function(e) {
                s.settings.refreshToken = e.refreshToken, s.settings.sessionToken = e.sessionToken, s.settings.credentialsIndex = c.credentialsIndex, location.reload()
            }, function() {
                location.reload()
            })))
        }, 1e3)
    }), e.exports = d
}, function(e, t, i) {
    "use strict";
    var n, o, s, a = i(3),
        r = i(1),
        l = i(2),
        c = i(16),
        d = "pm",
        u = i(15),
        h = new c({
            $node: document.getElementById(d)
        });
    h.addListener("keydown", function(e) {
        e.code === r.info ? n.visible ? o.content.tabs[o.activeTab].activate() : n.focus() : e.code === r.f3 ? a.navigate("ps") : e.code === r.back && (a.back() || l.emit("keydown", {
            code: r.exit
        }))
    }), h.addListener("show", function(e) {
        u.updateView({
            SEARCH: {
                icon: "search",
                visible: !0,
                text: gettext("Search")
            },
            MORE: {
                icon: "more",
                visible: !1,
                text: ""
            },
            GUIDE: {
                icon: "info",
                visible: !0,
                text: gettext("Guide")
            },
            BACK: {
                icon: "back",
                visible: !0,
                text: gettext("Exit")
            }
        }, "pageMain"), e.data && e.data.channel ? (s = o.activeTab, o.content.tabs[o.activeTab].hide(), o.activeTab = 1, o.content.tabs[o.activeTab].activate(e.data.channel)) : o.content.tabs.length > 0 && (s || (s = 3), o.content.tabs[o.activeTab].hide(), o.activeTab = s, o.content.tabs[o.activeTab].activate())
    }), h.addListener("hide", function() {
        i(9).hide()
    }), h.addListener("load", function() {
        o = i(31), h.add(n = i(14)), n.addListener("show", function() {
            u.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !1,
                    text: gettext("Search")
                },
                GUIDE: {
                    icon: "info",
                    visible: !0,
                    text: gettext("Close Guide")
                }
            }, "pageMain")
        }), n.addListener("hide", function() {
            u.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !0,
                    text: gettext("Search")
                },
                GUIDE: {
                    icon: "info",
                    visible: !0,
                    text: gettext("Guide")
                }
            }, "pageMain")
        }), o.content.tabs.push(i(41)), o.content.tabs.push(i(42)), o.content.tabs.push(i(44)), o.content.tabs.push(i(43)), o.content.tabs.forEach(function(e) {
            h.add(e)
        }), o.content.tabs[o.activeTab].activate(), i(4).token ? i(17).getMine().then(function(e) {
            window.pmUserInfo.data = {
                disabled: !0
            }, window.pmUserInfo.appendChild(document.createElement("div")), window.pmUserInfo.firstChild.style.backgroundImage = "url(" + e.icon + ")", window.pmUserInfo.firstChild.classList.add("userImage"), window.pmUserInfo.appendChild(document.createElement("div")), window.pmUserInfo.children[1].innerHTML = e.title, window.pmUserInfo.children[1].classList.add("userName")
        })["catch"](function(e) {}) : window.pmUserInfo.style.display = "none"
    }), e.exports = h
}, function(e, t, i) {
    "use strict";

    function n(e, t) {
        return e ? (window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), a.hide(), c.show(), void(C = !1)) : (E.url = t, void l.play(t, {
            proxy: g.params.proxy
        }))
    }

    function o(e) {
        var t = new Date(0);
        return e = e.replace("PT", "").replace("S", "").split("M"), e.length > 1 ? (e[0] = e[0].split("H"), e[0].length > 1 ? (t.setUTCHours(e[0][0]), t.setUTCMinutes(e[0][1])) : t.setUTCMinutes(e[0]), t.setUTCSeconds(e[1])) : t.setUTCSeconds(e[0]), t
    }
    var s, a, r, l, c, d, u = i(16),
        h = i(62),
        p = i(8),
        m = new u({
            $node: window.pp
        }),
        v = i(3),
        f = i(1),
        g = i(2),
        y = i(59),
        b = i(12),
        w = i(65),
        x = i(17),
        T = new w({
            $node: window.playerProgressBar
        }),
        I = i(15),
        $ = i(9),
        S = i(50),
        E = {
            channel: {},
            video: null,
            playlist: null,
            position: 0
        },
        N = "MAG200" !== gSTB.GetDeviceModelExt(),
        C = !1,
        k = !1;
    m.addListener("show", function(e) {
        I.updateView({
            SEARCH: {
                icon: "search",
                visible: !0,
                text: gettext("Search")
            },
            MORE: {
                visible: k,
                icon: "more",
                text: gettext("More")
            },
            GUIDE: {
                icon: "info",
                visible: !1,
                text: gettext("Guide")
            },
            BACK: {
                icon: "back",
                visible: !0,
                text: gettext("Back")
            }
        }), r.hide(), T.set(0), e.data && l.playContent(e.data)
    }), m.addListener("load", function() {
        var e = [{
                icon: "home",
                value: gettext("To the main"),
                onclick: function() {
                    v.back()
                }
            }, {
                icon: "player-prev",
                value: gettext("Previous"),
                onclick: function() {
                    E.playlist && E.playlist.length && E.position > 0 && (--E.position, l.playContent({
                        video: E.playlist[E.position]
                    }))
                }
            }, {
                icon: "player-rew",
                value: gettext("Back"),
                onclick: function() {
                    l.rewind(!1, 10)
                }
            }, {
                icon: "player-play",
                value: gettext("Play"),
                onclick: function() {
                    l.playPause(), l.isPause ? (this.$icon.className = "icon player-play", this.$text.innerText = gettext("Play")) : (this.$icon.className = "icon player-pause", this.$text.innerText = gettext("Pause"))
                }
            }, {
                icon: "player-ff",
                value: gettext("Forward"),
                onclick: function() {
                    l.rewind(!0, 10)
                }
            }, {
                icon: "player-next",
                value: gettext("Next"),
                onclick: function() {
                    E.playlist && E.playlist.length && E.playlist.length > E.position + 1 && (++E.position, l.playContent({
                        video: E.playlist[E.position]
                    }))
                }
            }],
            t = i(33);
        m.add(s = new p({
            $node: window.playerPanelButtons,
            data: e,
            size: e.length,
            type: p.prototype.TYPE_HORIZONTAL,
            render: function(e, t) {
                e.button = new h({
                    $node: e,
                    icon: t.icon,
                    value: t.value,
                    events: {
                        click: t.onclick
                    }
                }), e.classList.add(t.icon), m.add(e.button)
            },
            events: {
                "click:item": function(e) {
                    e.$item.button.emit("click")
                },
                keydown: function(e) {
                    switch (e.code) {
                        case f.right:
                        case f.left:
                        case f.home:
                        case f.end:
                            a.display(5), this.move(e.code);
                            break;
                        case f.ok:
                            this.events["click:item"] && this.emit("click:item", {
                                $item: this.$focusItem,
                                event: e
                            });
                            break;
                        case f.info:
                            e.stop = !0, a.display();
                            break;
                        case f.up:
                        case f.down:
                            k && (a.hide(), r.show(E), I.show());
                            break;
                        case f.space:
                        case f.playPause:
                            l.playPause(), e.stop = !0;
                            break;
                        case f.forward:
                            l.rewind(!0, 10);
                            break;
                        case f.rewind:
                            l.rewind(!1, 10);
                            break;
                        case f.pageDown:
                            E.playlist && E.playlist.length && E.playlist.length > E.position + 1 && (++E.position, l.playContent({
                                video: E.playlist[E.position]
                            }));
                            break;
                        case f.pageUp:
                            E.playlist && E.playlist.length && E.position > 0 && (--E.position, l.playContent({
                                video: E.playlist[E.position]
                            }))
                    }
                }
            }
        })), d = s.$body.children[3].button, r = i(45), r.addListener("show", function() {
            I.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !0,
                    text: gettext("Search")
                },
                MORE: {
                    visible: !1
                },
                GUIDE: {
                    icon: "info",
                    visible: !1,
                    text: gettext("Guide")
                },
                BACK: {
                    icon: "back",
                    visible: !0,
                    text: gettext("Back")
                }
            })
        }), r.addListener("hide", function() {
            I.updateView({
                SEARCH: {
                    icon: "search",
                    visible: !0,
                    text: gettext("Search")
                },
                MORE: {
                    icon: "more",
                    visible: !0,
                    text: gettext("More")
                },
                GUIDE: {
                    visible: !1
                },
                BACK: {
                    icon: "back",
                    visible: !0,
                    text: gettext("Back")
                }
            })
        }), m.add(r), l = new y({
            $node: window.playerSpace,
            rewindTimeout: 600,
            events: {
                keydown: function(e) {
                    switch (e.code) {
                        case f.up:
                        case f.down:
                        case f.info:
                            return void a.display();
                        case f.ok:
                        case f.playPause:
                        case f.space:
                            e.stop = !0, this.playPause();
                            break;
                        case f.forward:
                        case f.right:
                            this.rewind(!0, 10);
                            break;
                        case f.rewind:
                        case f.left:
                            this.rewind(!1, 10);
                            break;
                        case f.pageDown:
                            E.playlist && E.playlist.length && E.position > 0 && (--E.position, l.playContent({
                                video: E.playlist[E.position]
                            }));
                            break;
                        case f.pageUp:
                            E.playlist && E.playlist.length && E.playlist.length > E.position + 1 && (++E.position, l.playContent({
                                video: E.playlist[E.position]
                            }))
                    }
                }
            }
        }), a = new b({
            $node: window.playerGrid,
            visible: !1,
            events: {
                show: function() {
                    s.focus(), s.focusIndex(3), I.updateView({
                        SEARCH: {
                            icon: "search",
                            visible: !0,
                            text: gettext("Search")
                        },
                        MORE: {
                            icon: "more",
                            visible: k,
                            text: gettext("More")
                        },
                        GUIDE: {
                            icon: "info",
                            visible: !1,
                            text: gettext("Guide")
                        },
                        BACK: {
                            icon: "back",
                            visible: !0,
                            text: gettext("Back")
                        }
                    }), I.show()
                },
                hide: function() {
                    v.current && (I.hide(), l.focus())
                }
            }
        }), a.displayTimeout = -1, a.display = function(e) {
            var t = this;
            e ? (e = 1e3 * e, this.show(), this.displayTimeout && (clearTimeout(this.displayTimeout), this.displayTimeout = 0), this.displayTimeout = setTimeout(function() {
                t.hide(), t.displayTimeout = 0
            }, e)) : this.displayTimeout ? (clearTimeout(this.displayTimeout), this.displayTimeout = 0) : this.visible ? this.hide() : this.show()
        }, m.add(l), l.add(a), g.player = l, l.playContent = function(e) {
            var i, o;
            window.playerChannelIcon.style.visibility = "hidden", window.playerChannelName.style.visibility = "hidden", C = !0, c.hide(), $.show(), window.ppPanelPlayer.classList.remove("transparent"), e.urlParseErrorCount || (e.urlParseErrorCount = 0), void 0 !== e.channel ? E.channel = e.channel : (o = e.video.channelId === E.channel.id ? E.channel.icon : !1, E.channel = {
                title: e.video.channelTitle,
                id: e.video.channelId,
                icon: o
            }), void 0 !== e.playlist && (E.playlist = e.playlist), void 0 !== e.position && (E.position = e.position), E.video = e.video, i = E.video.publishedAt.match(/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d).(\d\d\d)Z/), i.shift(), i.pop(), i[1] -= 1, window.playerChannelName.innerText = E.channel.title, window.playerVideoName.innerHTML = E.video.title, window.playerVideoPublishedAt.innerText = gettext("Upload date") + ": " + i[2] + " " + i[1] + " " + i[0] + " г.", window.playerVideoViewCount.innerText = ngettext("View", "Views", +E.video.viewCount) + ": " + E.video.viewCount, r.hide(), T.set(0), a.show(), I.show(), document.cookie = "", S.getInfo(e.video.id, function(i, o) {
                var s, r, l, d, u = 144;
                if (i) return "0:00" === e.video.duration ? window.ppVideoParseErrorMessage.innerHTML = gettext("Live broadcasts are not supported") : window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), a.hide(), c.show(), void(C = !1);
                if (o.ageGate && g.settings.safeSearch) return window.ppVideoParseErrorMessage.innerHTML = gettext("Adult content"), a.hide(), c.show(), void(C = !1);
                if (0 === o.urlMap.length) return "0:00" === e.video.duration ? window.ppVideoParseErrorMessage.innerHTML = gettext("Live broadcasts are not supported") : window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), a.hide(), c.show(), void(C = !1);
                for (r = parseInt(t.data.quality[g.settings.quality].replace("p", ""), 10), r || (r = 1080), l = 0, d = o.urlMap.length; d > l; ++l) {
                    if (o.urlMap[l].format.height === r && o.urlMap[l].format.hasVideo && o.urlMap[l].format.hasAudio) return void o.urlMap[l].getUrl(n, N);
                    o.urlMap[l].format.height > u && o.urlMap[l].format.hasVideo && o.urlMap[l].format.hasAudio && (u = o.urlMap[l].format.height, s = o.urlMap[l])
                }
                l !== d || s ? r && s.getUrl(n, N) : o.urlMap[0].getUrl(n, N)
            })
        }, l.addListeners({
            pause: function(e) {
                e.state ? (d.$icon.className = "icon player-play", d.$text.innerText = gettext("Play")) : (d.$icon.className = "icon player-pause", d.$text.innerText = gettext("Pause")), e.state ? r.visible || a.display() : a.display(5);
            },
            duration: function(e) {
                this.rewindHelper.isActive || this.setModeHelper.active || (T.set(e.sec), window.playerCurrentDuration.innerText = e.time)
            },
            "playback:begin": function() {
                E.urlParseErrorCount = !1, window.ppPanelPlayer.classList.add("transparent"), $.hide(), window.playerTotalDuration.innerText = E.video.duration, T.init({
                    value: 0,
                    max: Number(o(E.video.realDuration)) / 1e3
                }), E.channel.icon ? (window.playerChannelIcon.style.backgroundImage !== 'url("' + E.channel.icon + '")' && (window.playerChannelIcon.style.backgroundImage = 'url("' + E.channel.icon + '")'), window.playerChannelIcon.style.visibility = "", window.playerChannelName.style.visibility = "") : (window.playerChannelIcon.style.backgroundImage = "none", x.getInfo(E.channel.id).then(function(e) {
                    e && e.length > 0 && (E.channel.icon = e[0].snippet.thumbnails.high.url, window.playerChannelIcon.style.backgroundImage = 'url("' + E.channel.icon + '")', window.playerChannelIcon.style.visibility = "", window.playerChannelName.style.visibility = "")
                })["catch"](function(e) {})), d.$icon.className = "icon player-pause", d.$text.innerText = gettext("Pause"), C = !1, a.display(5), k || I.updateView({
                    SEARCH: {
                        icon: "search",
                        visible: !0,
                        text: gettext("Search")
                    },
                    MORE: {
                        icon: "more",
                        visible: !0,
                        text: gettext("More")
                    },
                    GUIDE: {
                        icon: "info",
                        visible: !1,
                        text: gettext("Guide")
                    },
                    BACK: {
                        icon: "back",
                        visible: !0,
                        text: gettext("Back")
                    }
                }), k = !0
            },
            "get:info": function() {
                window.ppPanelPlayer.classList.add("transparent"), $.hide()
            },
            rewind: function(e) {
                var t = l.parseTime(e.time),
                    i = "";
                T.set(e.time), +t.hour && (i += t.hour + ":"), i += t.min + ":" + t.sec, window.playerCurrentDuration.innerText = i
            },
            "rewind:start": function() {
                T.$node.classList.add("rewind"), r.visible || a.display()
            },
            "rewind:apply": function() {
                T.$node.classList.remove("rewind"), a.display(6)
            },
            "position:input": function(e) {
                e.start && window.playerCurrentDuration.classList.add("setMode"), e.end && window.playerCurrentDuration.classList.remove("setMode"), T.set(e.sec), window.playerCurrentDuration.innerText = e.time
            },
            "content:end": function() {
                var e = JSON.parse(JSON.stringify(E));
                e.playlist && e.playlist.length > e.position + 1 ? (++e.position, e.video = e.playlist[e.position], e.channel = {
                    title: e.video.channelTitle,
                    id: e.video.channelId
                }, e.urlParseErrorCount = !1, l.playContent(e)) : (window.ppPanelPlayer.classList.remove("transparent"), e.onDelayPlayNext = 10, ++e.position, a.hide(), r.hide(), r.show(e), e.urlParseErrorCount = !1)
            },
            "content:error": function() {
                E.urlParseErrorCount || (E.urlParseErrorCount = 0), E.urlParseErrorCount > 2 ? (window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available"), c.show(), C = !1) : (++E.urlParseErrorCount, C = !1, l.playContent(E))
            }
        }), c = new b({
            $node: document.getElementById("ppVideoParseError"),
            visible: !1,
            focusable: !0,
            events: {
                show: function() {
                    $.hide(), a.hide(), this.focus(), window.ppPanelPlayer.classList.remove("transparent")
                },
                keydown: function(e) {
                    e.stop = !0, c.hide(), a.hide(), r.show(E)
                }
            }
        }), window.ppVideoParseErrorHeader.innerHTML = gettext("Error playing"), window.ppVideoParseErrorMessage.innerHTML = gettext("Video is not available")
    }), m.addListener("keydown", function(e) {
        switch (e.code) {
            case f.exit:
                C && (event.stop = !0);
                break;
            case f.back:
                r.visible ? (r.hide(), 0 === T.value ? v.back() : (I.show(), a.show())) : m.activeComponent === l ? v.back() : l.totalDurationSec === l.currentSec ? v.back() : a.hide();
                break;
            case f.stop:
                l.stop(), l.isPause = !1, d.emit("click"), $.hide(), window.ppPanelPlayer.classList.remove("transparent"), a.hide(), r.show(E);
                break;
            case f.down:
                k && m.activeComponent === a && (a.hide(), r.show(E));
                break;
            case f.playPause:
                l.playPause();
                break;
            case f.f3:
                v.navigate("ps")
        }
    }), m.addListener("hide", function() {
        $.hide(), l.stop(), a.hide(), r.hide()
    }), e.exports = m
}, function(e, t, i) {
    "use strict";
    var n, o, s, a = "ps",
        r = i(1),
        l = i(3),
        c = i(16),
        d = i(40),
        u = i(13),
        h = i(18),
        p = i(51),
        m = i(15),
        v = (i(6), new c({
            $node: document.getElementById(a)
        })),
        f = new d({
            $node: document.getElementById("psSearch"),
            $body: document.getElementById("psSearchInput")
        }),
        g = i(9),
        y = parseInt(gSTB.GetDeviceModel().replace("MAG", ""), 10) <= 254,
        b = " ",
        w = null,
        x = -1;
    v.addListener("keydown", function(e) {
        e.code === r.back && l.back()
    }), v.addListener("hide", function() {
        g.hide()
    }), o = p(function(e) {
        b = e.value, w.model.filter({
            searchQuery: e.value
        }), clearTimeout(x), x = setTimeout(function() {
            g.hide()
        }, 5e3)
    }, 1e3), v.addListener("show", function() {
        m.updateView({
            SEARCH: {
                icon: "search",
                visible: !1,
                text: ""
            },
            MORE: {
                icon: "more",
                visible: !1,
                text: ""
            },
            GUIDE: {
                icon: "info",
                visible: !1,
                text: ""
            },
            BACK: {
                icon: "back",
                visible: !0,
                text: gettext("Back")
            }
        }), g.hide(), v.activeComponent || (y && (window.psSearchIcon.style.display = "block", setTimeout(function() {
            window.psSearchIcon.style.display = "inline-table"
        }, 0)), null !== v.activeComponent && v.activeComponent !== f || setTimeout(function() {
            f.focus()
        }, 0))
    }), v.addListener("load", function() {
        n = i(46), f.addListener("keydown", function(e) {
            e.code === r.down ? (s = f.getCaretPosition(), n.focus()) : e.code === r.up && w.visible ? (w.focus(), w.$focusItem || w.focusIndex(0)) : e.code === r.back && 0 === this.$body.value.length && l.back()
        }), f.addListener("input", function(e) {
            w.hide(), g.show(), o(e)
        }), n.addListener("overflow", function(e) {
            e.direction === r.up && f.focus()
        }), n.addListener("click:item", function(e) {
            "symbol" === e.$item.data.className ? (f.addChar(e.$item.data.value, s), ++s) : -1 !== e.$item.data.className.indexOf("keySpace") ? (f.addChar(" ", s), s = f.getCaretPosition()) : -1 !== e.$item.data.className.indexOf("keyDelete") ? (f.removeChar(), s = f.getCaretPosition()) : -1 !== e.$item.data.className.indexOf("delete") && (f.setValue(""), s = f.getCaretPosition())
        }), n.addListener("keydown", function() {
            o({
                value: f.value
            })
        }), w = new u({
            $node: document.getElementById("psListVideos"),
            model: new h({
                order: "relevance"
            }),
            size: 5,
            events: {
                keydown: function(e) {
                    switch (e.code) {
                        case r.down:
                            f.focus();
                            break;
                        case r.right:
                            this.$focusItem.index < this.data.length - 1 && (this.$focusItem.index > 0 ? (this.activePage++, this.renderView(this.activePage)) : this.focusIndex(1));
                            break;
                        case r.left:
                            this.activePage > 0 ? (this.activePage--, this.renderView(this.activePage)) : 1 === this.$focusItem.index ? this.focusIndex(0) : this.move(e.code);
                            break;
                        case r.ok:
                            this.emit("click:item", {
                                $item: this.$focusItem,
                                event: e
                            })
                    }
                },
                "click:item": function(e) {
                    "video" === e.$item.data.type ? l.navigate("pp", {
                        video: e.$item.data,
                        playlist: this.data,
                        position: e.$item.index
                    }) : "playlist" === e.$item.data.type ? this.model.getPlayListItems({
                        playlist: {
                            id: e.$item.data.playlistId
                        }
                    }).then(function(t) {
                        l.navigate("pp", {
                            channel: e.$item.data.channel,
                            video: t[0],
                            playlist: t,
                            position: 0
                        })
                    }) : "channel" === e.$item.data.type && l.navigate("pm", {
                        channel: e.$item.data
                    })
                },
                "view:ready": function() {
                    clearTimeout(x), g.hide(), this.show(), this.focusIndex(0)
                }
            },
            render: function(e, t) {
                var i, n, o;
                e.ready ? (e.$videoThumb.className = "thumb " + t.type, e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", e.$videoTitle.innerText = t.title, e.$videoTitle.className = "title " + t.type, e.$videoAthour.className = "uploader " + t.type, "video" === t.type ? (e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = t.locale.viewCount, e.$dateAdded.innerText = t.locale.publishedAt, e.$videoDuration.innerText = t.duration) : "channel" === t.type ? (e.$videoAthour.innerText = t.locale.subscriberCount, e.$viewCounter.innerText = "", e.$dateAdded.innerText = "", e.$videoDuration.innerText = "") : (e.$videoAthour.innerText = t.locale.channelTitle, e.$viewCounter.innerText = "", e.$dateAdded.innerText = "", e.$videoDuration.innerText = ""), "playlist" === t.type ? e.$videoDuration.className = "icon playlist" : e.$videoDuration.className = "duration") : (i = document.createElement("div"), i.className = "container", e.appendChild(i), n = document.createElement("div"), n.className = "tileTop", i.appendChild(n), o = document.createElement("div"), o.className = "tileBottom", i.appendChild(o), e.$videoThumb = document.createElement("div"), e.$videoThumb.className = "thumb " + t.type, e.$videoThumb.style.backgroundImage = "url(" + t.icon + ")", n.appendChild(e.$videoThumb), e.$videoDuration = document.createElement("div"), "playlist" === t.type ? e.$videoDuration.className = "icon playlist" : e.$videoDuration.className = "duration", t.duration ? e.$videoDuration.innerText = t.duration : e.$videoDuration.innerText = "", n.appendChild(e.$videoDuration), e.$videoTitle = document.createElement("div"), e.$videoTitle.className = "title " + t.type, e.$videoTitle.innerText = t.title, o.appendChild(e.$videoTitle), e.$videoAthour = document.createElement("div"), e.$videoAthour.className = "uploader " + t.type, t.channelTitle ? e.$videoAthour.innerText = t.locale.channelTitle : "channel" === t.type ? e.$videoAthour.innerText = t.locale.subscriberCount : e.$videoAthour.innerText = "", o.appendChild(e.$videoAthour), e.$viewCounter = document.createElement("div"), e.$viewCounter.className = "viewCount", "video" === t.type ? e.$viewCounter.innerText = t.locale.viewCount : e.$viewCounter.innerText = "", o.appendChild(e.$viewCounter), e.$dateAdded = document.createElement("div"), e.$dateAdded.className = "uploaded", "video" === t.type ? e.$dateAdded.innerText = t.locale.publishedAt : e.$dateAdded.innerText = "", o.appendChild(e.$dateAdded), e.ready = !0)
            }
        })
    }), e.exports = v
}, function(e, t, i) {
    "use strict";

    function n(e) {
        o.call(this), this.data = e || {}
    }
    var o = i(7);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.idName = "id", n.prototype.clear = function() {
        var e = this.data;
        return Object.keys(e).length > 0 ? (this.data = {}, this.events.clear && this.emit("clear", {
            data: e
        }), !0) : !1
    }, n.prototype.init = function(e) {
        return e ? (this.clear(), this.data = e, this.events.init && this.emit("init", {
            data: e
        }), !0) : !1
    }, n.prototype.has = function(e) {
        return this.data.hasOwnProperty(e)
    }, n.prototype.get = function(e) {
        return this.data[e]
    }, n.prototype.set = function(e, t) {
        var i = e in this.data,
            n = {
                name: e,
                curr: t
            };
        return i ? (n.prev = this.data[e], t !== n.prev ? (this.data[e] = t, this.events.change && this.emit("change", n), !0) : !1) : (this.data[e] = t, this.events.change && this.emit("change", n), !0)
    }, n.prototype.unset = function(e) {
        var t, i = e in this.data;
        return i ? (t = {
            name: e,
            prev: this.data[e]
        }, delete this.data[e], this.events.change && this.emit("change", t), !0) : !1
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        var t = this;
        this.isPLaying = !1, this.isPause = !1, this.totalDuration = "", this.totalDurationSec = 0, this.currentTime = "", this.currentSec = 0, this.rewindHelper = {
            isActive: !1,
            startTime: 0,
            time: 0,
            timeout: 0,
            duration: void 0,
            timeoutDuration: !1
        }, this.setModeHelper = {
            active: !1,
            timeout: 0,
            time: 0,
            timeStr: "",
            count: 0,
            length: 0,
            sec: 0,
            timeoutDuration: 0
        }, this.audioPIDs = [], this.currentAudioPID = 0, this.activeAspect = 0, this.subtitlePIDs = [], this.currentSubtitle = null, this.durationInterval = 0, this.allowInputPosition = !0, e = e || {}, a.call(this, e), this.$node.classList.add("player"), this.init(e), o.addListener("media", function(e) {
            n.prototype.mediaListener.call(t, e)
        })
    }
    var o = i(2),
        s = i(1),
        a = i(5);
    n.prototype = Object.create(a.prototype), n.prototype.constructor = n, n.prototype.ASPECT_TYPE_FIT = 16, n.prototype.ASPECT_TYPE_BIG = 64, n.prototype.ASPECT_TYPE_OPTIMAL = 80, n.prototype.ASPECT_TYPE_ZOOM = 0, n.prototype.aspects = [{
        name: "fit",
        mode: n.prototype.ASPECT_TYPE_FIT
    }, {
        name: "big",
        mode: n.prototype.ASPECT_TYPE_BIG
    }, {
        name: "opt",
        mode: n.prototype.ASPECT_TYPE_OPTIMAL
    }, {
        name: "exp",
        mode: n.prototype.ASPECT_TYPE_ZOOM
    }], n.prototype.STEREO_MODE_OFF = 0, n.prototype.STEREO_MODE_OVER_UNDER = 1, n.prototype.STEREO_MODE_OVER_UNDER_HD = 2, n.prototype.STEREO_MODE_SIDE_BY_SIDE = 3, n.prototype.stereoModes = [{
        mode: n.prototype.STEREO_MODE_OFF,
        name: "Off"
    }, {
        mode: n.prototype.STEREO_MODE_OVER_UNDER,
        name: "Over-Under"
    }, {
        mode: n.prototype.STEREO_MODE_OVER_UNDER_HD,
        name: "Over-Under HD"
    }, {
        mode: n.prototype.STEREO_MODE_SIDE_BY_SIDE,
        name: "Side-by-side"
    }], n.prototype.defaultEvents = {
        keydown: function(e) {
            switch (e.code) {
                case s.ok:
                case s.playPause:
                    this.playPause();
                    break;
                case s.stop:
                    this.stop();
                    break;
                case s.forward:
                case s.right:
                    this.rewind(!0);
                    break;
                case s.rewind:
                case s.left:
                    this.rewind(!1);
                    break;
                case s.f4:
                case 117:
                    this.nextAspect();
                    break;
                case s.f1:
                    this.nextAudioTrack();
                    break;
                case s.f2:
                    this.nextSubtitle();
                    break;
                case s.f3:
                    this.nextViewMode();
                    break;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                    this.inputPosition(e.code)
            }
        }
    }, n.prototype.mediaListener = function(e) {
        var t, i, n, s, a, r, l = this,
            c = {};
        switch (e.code) {
            case o.EVENT_PLAYBACK_BEGIN:
                l.isPLaying = !0, l.durationInterval && (clearInterval(l.durationInterval), l.durationInterval = 0), l.durationInterval = setInterval(function() {
                    l.events.duration && (l.currentSec = gSTB.GetPosTime(), i = l.parseTime(l.currentSec), l.currentTime = (i.hour > 0 ? i.hour + ":" : "") + i.min + ":" + i.sec, l.emit("duration", {
                        sec: l.currentSec,
                        time: l.currentTime
                    }))
                }, 1e3), l.events["playback:begin"] && l.emit("playback:begin");
                break;
            case o.EVENT_GET_MEDIA_INFO:
                l.totalDurationSec = gSTB.GetMediaLen(), l.totalDurationSec > 3600 ? l.setModeHelper.length = 6 : l.setModeHelper.length = 4, t = l.parseTime(gSTB.GetMediaLen()), l.totalDuration = (t.hour > 0 ? t.hour + ":" : "") + t.min + ":" + t.sec, c.totalDuration = l.totalDuration, c.totalDurationSec = l.totalDurationSec;
                try {
                    a = gSTB.GetAudioPIDs().replace(/pid:/g, '"pid":').replace(/lang:/g, '"lang":'), l.audioPIDs = JSON.parse(a)
                } catch (d) {}
                try {
                    r = gSTB.GetSubtitlePIDs().replace(/pid:/g, '"pid":').replace(/lang:/g, '"lang":'), l.subtitlePIDs = JSON.parse(r)
                } catch (d) {}
                l.currentAudioPID = 0, "" !== l.audioPIDs[0].lang[0] ? c.audioPid = l.audioPIDs[0].lang[0] : c.audioPid = void 0, l.currentSubtitle = null, c.subtitles = null, c.stereoMode = {
                    type: gSTB.Get3DConversionMode(),
                    name: l.stereoModes[gSTB.Get3DConversionMode()].name
                }, l.events["get:info"] && l.emit("get:info", c);
                break;
            case o.EVENT_CONTENT_ERROR:
                l.isPLaying = !1, l.events["content:error"] && l.emit("content:error");
                break;
            case o.EVENT_END_OF_FILE:
                l.currentSec = l.totalDurationSec, l.isPLaying = !1, l.events["content:end"] && l.emit("content:end");
                break;
            case o.EVENT_SUBTITLE_LOAD_ERROR:
                l.subtitlePIDs.pop();
                break;
            case o.EVENT_HDMI_DISCONNECT:
                if (n = parseInt(JSON.parse(gSTB.GetEnv('{"varList":["hdmi_event_delay"]}')).result.hdmi_event_delay, 10), 0 === n) return;
                l.hdmiEventTimeout = setTimeout(function() {
                    l.isPLaying && stbStorage.setItem("standByPlayback", JSON.stringify({
                        url: l.playUrl,
                        position: l.currentSec
                    })), gSTB.StandBy(!0), l.hdmiEventTimeout = null
                }, n);
                break;
            case o.EVENT_HDMI_CONNECT:
                if (n = parseInt(JSON.parse(gSTB.GetEnv('{"varList":["hdmi_event_delay"]}')).result.hdmi_event_delay, 10), 0 === n) return;
                if (l.hdmiEventTimeout) return clearTimeout(l.hdmiEventTimeout), void(l.hdmiEventTimeout = null);
                gSTB.StandBy(!1), s = JSON.parse(stbStorage.getItem("standByPlayback")), n && (l.play(s.url, {
                    position: s.position
                }), stbStorage.removeItem("standByPlayback"))
        }
    }, n.prototype.init = function(e) {
        e.allowInputPosition && (this.allowInputPosition = e.allowInputPosition), e.rewindDuration && (this.rewindHelper.duration = e.rewindDuration), e.rewindTimeout && (this.rewindHelper.timeoutDuration = e.rewindTimeout), e.inputPositionTimeout && (this.setModeHelper.timeoutDuration = e.inputPositionTimeout), gSTB.InitPlayer(), gSTB.SetAspect(16), gSTB.SetVideoControl(0), gSTB.SetVideoState(0), gSTB.SetMode(0), gSTB.SetWinAlphaLevel(0, 255), gSTB.SetWinAlphaLevel(1, 255), gSTB.SetPIG(1, 0, 0, 0), gSTB.Set3DConversionMode(0), gSTB.SetTopWin(0)
    }, n.prototype.play = function(e, t) {
        var i, n;
        this.totalDurationSec = 0, this.currentSec = 0, this.playUrl = e, t = t || {}, i = t.solution ? t.solution : "auto", n = t.position ? " position:" + t.position : "", gSTB.Play(i + " " + e + n, t.proxy)
    }, n.prototype.stop = function() {
        gSTB.Stop(), clearInterval(this.durationInterval), this.isPLaying = !1, this.isPause = !1
    }, n.prototype.playPause = function() {
        this.isPause ? gSTB.Continue() : gSTB.Pause(), this.isPause = !this.isPause, this.events.pause && this.emit("pause", {
            state: this.isPause
        })
    }, n.prototype.rewind = function(e, t) {
        var i, n = this;
        t = t || this.rewindHelper.duration || 15, this.rewindHelper.isActive || (this.currentSec = gSTB.GetPosTime(), i = n.parseTime(n.currentSec), this.currentTime = (i.hour > 0 ? i.hour + ":" : "") + i.min + ":" + i.sec, this.rewindHelper.isActive = !0, this.rewindHelper.startTime = this.currentSec, this.rewindHelper.time = this.currentSec, this.events["rewind:start"] && this.emit("rewind:start")), e ? this.rewindHelper.time + t < this.totalDurationSec ? this.rewindHelper.time += t : this.rewindHelper.time = this.totalDurationSec : this.rewindHelper.time - t > 0 ? this.rewindHelper.time -= t : this.rewindHelper.time = 0, this.rewindHelper.timeout && clearTimeout(this.rewindHelper.timeout), this.events.rewind && this.emit("rewind", {
            time: this.rewindHelper.time,
            shift: this.rewindHelper.time - this.rewindHelper.startTime
        }), this.rewindHelper.timeoutDuration ? this.rewindHelper.timeout = setTimeout(function() {
            return clearInterval(n.durationInterval), n.durationInterval = 0, n.rewindHelper.isActive = !1, n.events["rewind:apply"] && n.emit("rewind:apply"), n.currentSec = n.rewindHelper.time, n.rewindHelper.timeout = 0, n.rewindHelper.time === n.totalDurationSec ? void(n.events["content:end"] && n.emit("content:end")) : void gSTB.SetPosTime(n.rewindHelper.time)
        }, this.rewindHelper.timeoutDuration) : (clearInterval(n.durationInterval), n.durationInterval = 0, gSTB.SetPosTime(n.rewindHelper.time), n.currentSec = n.rewindHelper.time, n.rewindHelper.isActive = !1, n.events["rewind:apply"] && n.emit("rewind:apply"))
    }, n.prototype.nextAudioTrack = function() {
        return this.audioPIDs.length <= 1 ? !1 : (this.currentAudioPID < this.audioPIDs.length - 1 ? this.currentAudioPID++ : this.currentAudioPID = 0, gSTB.SetAudioPID(this.audioPIDs[this.currentAudioPID].pid), this.events["audio:track"] && this.emit("audio:track", {
            lang: this.audioPIDs[this.currentAudioPID].lang[0],
            pid: this.audioPIDs[this.currentAudioPID].pid
        }), !0)
    }, n.prototype.setAudioTrack = function(e) {
        gSTB.SetAudioPID(this.audioPIDs[e].pid), this.currentAudioPID = e, this.events["audio:track"] && this.emit("audio:track", {
            lang: this.audioPIDs[this.currentAudioPID].lang[0],
            pid: this.audioPIDs[this.currentAudioPID].pid
        })
    }, n.prototype.nextAspect = function() {
        this.activeAspect++, this.activeAspect > this.aspects.length - 1 && (this.activeAspect = 0), gSTB.SetAspect(this.aspects[this.activeAspect].mode), this.events["aspect:change"] && this.emit("aspect:change", {
            type: this.aspects[this.activeAspect].mode,
            name: this.aspects[this.activeAspect].name
        })
    }, n.prototype.setAspect = function(e) {
        this.activeAspect = e, gSTB.SetAspect(this.aspects[this.activeAspect].mode), this.events["aspect:change"] && this.emit("aspect:change", {
            type: this.aspects[this.activeAspect].type,
            name: this.aspects[this.activeAspect].name
        })
    }, n.prototype.nextSubtitle = function() {
        return this.subtitlePIDs.length <= 0 ? (this.events["subtitles:change"] && this.emit("subtitles:change", null), !1) : (null === this.currentSubtitle ? this.currentSubtitle = 0 : this.currentSubtitle < this.subtitlePIDs.length - 1 ? this.currentSubtitle++ : this.currentSubtitle = null, null !== this.currentSubtitle ? (gSTB.SetSubtitlePID(this.subtitlePIDs[this.currentSubtitle].pid), gSTB.SetSubtitles(!0), this.events["subtitles:change"] && this.emit("subtitles:change", {
            lang: this.subtitlePIDs[this.currentSubtitle].lang[0],
            pid: this.subtitlePIDs[this.currentSubtitle].pid
        })) : (gSTB.SetSubtitles(!1), this.events["subtitles:change"] && this.emit("subtitles:change", null)), !0)
    }, n.prototype.setSubtitle = function(e) {
        gSTB.SetSubtitlePID(this.subtitlePIDs[e].pid), gSTB.SetSubtitles(!0), this.currentSubtitle = e, this.events["subtitles:change"] && this.emit("subtitles:change", {
            lang: this.subtitlePIDs[this.currentSubtitle].lang[0],
            pid: this.subtitlePIDs[this.currentSubtitle].pid
        })
    }, n.prototype.hideSubtitles = function() {
        gSTB.SetSubtitles(!1), this.events["subtitles:change"] && this.emit("subtitles:change", null)
    }, n.prototype.loadExternalSubtitle = function(e) {
        e && "string" == typeof e && (gSTB.LoadExternalSubtitles(e), this.subtitlePIDs.push({
            pid: 8192
        }), this.events["subtitles:load"] && this.emit("subtitles:load", null))
    }, n.prototype.nextViewMode = function() {
        var e = gSTB.Get3DConversionMode();
        3 > e ? e++ : e = 0, gSTB.Set3DConversionMode(e), this.events["viewmode:change"] && this.emit("viewmode:change", {
            type: this.stereoModes[e].mode,
            name: this.stereoModes[e].name
        })
    }, n.prototype.setViewMode = function(e) {
        e > 0 && 3 >= e && (gSTB.Set3DConversionMode(e), this.events["viewmode:change"] && this.emit("viewmode:change", {
            type: this.stereoModes[e].mode,
            name: this.stereoModes[e].name
        }))
    }, n.prototype.inputPosition = function(e) {
        var t, i, n, o, s, a = this,
            r = parseInt(e, 10) - 48,
            l = [],
            c = 0;
        this.allowInputPosition && (this.setModeHelper.active || (6 === this.setModeHelper.length ? this.setModeHelper.time = [0, 0, 0, 0, 0, 0] : this.setModeHelper.time = [0, 0, 0, 0], this.setModeHelper.count = 0, this.setModeHelper.active = !0, 6 === this.setModeHelper.length ? this.events["position:input"] && this.emit("position:input", {
            time: "00:00:00",
            start: !0,
            sec: 0
        }) : this.events["position:input"] && this.emit("position:input", {
            time: "00:00",
            start: !0,
            sec: 0
        })), this.setModeHelper.count <= this.setModeHelper.length && (this.setModeHelper.time.shift(), this.setModeHelper.time.push(r), l = this.setModeHelper.time.slice(0, this.setModeHelper.length + 1), 6 === this.setModeHelper.length ? this.setModeHelper.timeStr = l[0].toString() + l[1].toString() + ":" + l[2].toString() + l[3].toString() + ":" + l[4].toString() + l[5].toString() : this.setModeHelper.timeStr = l[0].toString() + l[1].toString() + ":" + l[2].toString() + l[3].toString(), this.setModeHelper.count++, 6 === this.setModeHelper.length && (n = l.shift() + l.shift().toString(), c += 3600 * parseInt(n, 10)), o = l.shift() + l.shift().toString(), c += 60 * parseInt(o, 10), s = l.shift() + l.shift().toString(), c += parseInt(s, 10), c > this.totalDurationSec && (c = this.totalDurationSec), this.setModeHelper.sec = c, this.events["position:input"] && this.emit("position:input", {
            time: a.setModeHelper.timeStr,
            sec: c
        })), clearTimeout(this.setModeHelper.timeout), t = this.setModeHelper.timeoutDuration ? this.setModeHelper.timeoutDuration : 2e3, this.setModeHelper.timeout = setTimeout(function() {
            a.setModeHelper.active = !1, clearInterval(a.durationInterval), a.durationInterval = 0, gSTB.SetPosTime(a.setModeHelper.sec), a.currentSec = a.setModeHelper.sec, i = a.parseTime(a.currentSec), a.currentTime = (i.hour > 0 ? i.hour + ":" : "") + i.min + ":" + i.sec, a.events["position:input"] && a.emit("position:input", {
                time: a.setModeHelper.timeStr,
                sec: a.setModeHelper.sec,
                end: !0
            })
        }, t))
    }, n.prototype.setPosition = function(e) {
        var t;
        gSTB.SetPosTime(e), this.currentSec = e, t = self.parseTime(self.currentSec), this.currentTime = (t.hour > 0 ? t.hour + ":" : "") + t.min + ":" + t.sec, this.events["position:set"] && this.emit("position:set", {
            sec: e
        })
    }, n.prototype.parseTime = function(e) {
        var t, i, n;
        return e >= 0 ? (t = Math.floor(e / 3600), i = Math.floor((e - 3600 * t) / 60), n = e - 3600 * t - 60 * i, 10 > t && (t = "0" + t), 10 > n && (n = "0" + n), 10 > i && (i = "0" + i)) : (e = Math.abs(e), t = Math.floor(e / 3600), i = Math.floor((e - 3600 * t) / 60), n = e - 3600 * t - 60 * i, 10 > t && (t = "0" + t), 10 > n && (n = "0" + n), 10 > i && (i = "0" + i), t = "-" + t), {
            hour: t,
            min: i,
            sec: n
        }
    }, n.prototype.addListener = function(e, t) {
        var i;
        a.prototype.addListener.call(this, e, t), "duration" === e && (this.currentSec = gSTB.GetPosTime(), i = this.parseTime(this.currentSec), this.currentTime = (i.hour > 0 ? i.hour + ":" : "") + i.min + ":" + i.sec, this.emit("duration", {
            sec: this.currentSec,
            time: this.currentTime
        }))
    }, e.exports = n
}, function(e, t) {
    "use strict";
    if (!("classList" in document.documentElement)) {
        var i = Array.prototype,
            n = i.indexOf,
            o = i.slice,
            s = i.push,
            a = i.splice,
            r = i.join;
        window.DOMTokenList = function(e) {
            if (this._element = e, e.className !== this._classCache) {
                if (this._classCache = e.className, !this._classCache) return;
                var t, i = this._classCache.replace(/^\s+|\s+$/g, "").split(/\s+/);
                for (t = 0; t < i.length; t++) s.call(this, i[t])
            }
        }, window.DOMTokenList.prototype = {
            add: function(e) {
                this.contains(e) || (s.call(this, e), this._element.className = o.call(this, 0).join(" "))
            },
            contains: function(e) {
                return -1 !== n.call(this, e)
            },
            item: function(e) {
                return this[e] || null
            },
            remove: function(e) {
                var t = n.call(this, e); - 1 !== t && (a.call(this, t, 1), this._element.className = o.call(this, 0).join(" "))
            },
            toString: function() {
                return r.call(this, " ")
            },
            toggle: function(e) {
                return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
            }
        }, Object.defineProperty(Element.prototype, "classList", {
            get: function() {
                return new window.DOMTokenList(this)
            }
        })
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        var t = {};
        return e.split("&").forEach(function(e) {
            e = e.split("="), 2 === e.length && (t[e[0]] = decodeURIComponent(e[1]))
        }), t
    }
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.className = "button " + (e.className || ""), o.call(this, e), e.icon && (this.$icon = this.$body.appendChild(document.createElement("div")), this.$icon.className = "icon " + e.icon), this.$text = this.$body.appendChild(document.createElement("div")), this.$text.classList.add("text"), e.value && (this.$text.innerText = e.value)
    }
    var o = i(5),
        s = i(1);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.clickDuration = 200, n.prototype.defaultEvents = {
        click: function() {
            var e = this;
            this.$node.classList.add("click"), setTimeout(function() {
                e.$node.classList.remove("click")
            }, this.clickDuration)
        },
        keydown: function(e) {
            e.code === s.ok && this.events.click && this.emit("click", {
                event: e
            })
        }
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.map = [], this.$focusItem = null, this.data = [], this.cycleX = !0, this.cycleY = !0, this.focusX = 0, this.focusY = 0, e.className = "grid " + (e.className || ""), r.call(this, e), this.init(e)
    }

    function o(e) {
        var t, i, n;
        for (t = 0; t < e.length; t++)
            for (i = 0; i < e[t].length; i++) n = e[t][i], "object" != typeof n ? n = e[t][i] = {
                value: e[t][i],
                colSpan: 1,
                rowSpan: 1
            } : (n.colSpan = n.colSpan || 1, n.rowSpan = n.rowSpan || 1);
        return e
    }

    function s(e, t, i, n, o, s) {
        var a, r;
        for (a = i; i + o > a; a++) {
            for (e.length < a + 1 && e.push([]); void 0 !== e[a][t];) t++;
            for (r = t; t + n > r; r++) e[a].length < r + 1 && e[a].push(), e[a][r] = s, void 0 === s.x && (s.x = r), void 0 === s.y && (s.y = a)
        }
    }

    function a(e) {
        var t, i, n, o = [];
        for (t = 0; t < e.length; t++)
            for (i = 0; i < e[t].length; i++) n = e[t][i], s(o, i, t, n.colSpan, n.rowSpan, n.$item), delete n.$item;
        return o
    }
    var r = i(5),
        l = i(1);
    n.prototype = Object.create(r.prototype), n.prototype.constructor = n, n.prototype.renderItemDefault = function(e, t) {
        e.innerText = t.value
    }, n.prototype.renderItem = n.prototype.renderItemDefault, n.prototype.defaultEvents = {
        mousewheel: function(e) {
            e.wheelDeltaY && this.move(e.wheelDeltaY > 0 ? l.up : l.down), e.wheelDeltaX && this.move(e.wheelDeltaX > 0 ? l.left : l.right)
        },
        keydown: function(e) {
            switch (e.code) {
                case l.up:
                case l.down:
                case l.right:
                case l.left:
                    this.move(e.code);
                    break;
                case l.ok:
                    this.events["click:item"] && this.emit("click:item", {
                        $item: this.$focusItem,
                        event: e
                    })
            }
        }
    }, n.prototype.init = function(e) {
        var t, i, n, s, r, l, c, d, u = this,
            h = !1,
            p = function(e) {
                this.data.disable !== !0 && (u.focusItem(this), u.events["click:item"] && u.emit("click:item", {
                    $item: this,
                    event: e
                }))
            },
            m = function(d) {
                if (d && u.data !== d && (u.data = d, h = !0), e.render && u.renderItem !== e.render && (u.renderItem = e.render, h = !0), h) {
                    for (u.$table = document.createElement("table"), r = document.createElement("tbody"), u.data = o(u.data), t = 0; t < u.data.length; t++) {
                        for (n = r.insertRow(), i = 0; i < u.data[t].length; i++) s = n.insertCell(-1), s.className = "item", c = u.data[t][i], c.$item = s, s.colSpan = c.colSpan, s.rowSpan = c.rowSpan, c.focus && (l = s), c.disable && s.classList.add("disable"), c.mark && s.classList.add("mark"), u.renderItem(s, c), s.data = c, s.addEventListener("click", p);
                        r.appendChild(n)
                    }
                    u.map = a(u.data), u.$body.innerText = null, u.$table.appendChild(r), u.$body.appendChild(u.$table), l ? u.focusItem(l) : u.focusItem(u.map[0][0])
                }
            };
        void 0 !== e.cycleX && (this.cycleX = e.cycleX), void 0 !== e.cycleY && (this.cycleY = e.cycleY), e.provider && (this.provider = e.provider, this.sizeX = e.sizeX, this.sizeY = e.sizeY), e.translate && (this.translate = e.translate), e.provider ? (d = this.provider.get(null, function(e, t) {
            e && u.events["data:error"] && u.emit("data:error", e), m(u.translate(t)), u.events["data:ready"] && u.emit("data:ready")
        }), this.events["data:get"] && this.emit("data:get", {
            fresh: d
        })) : m(e.data)
    }, n.prototype.defaultTranslate = function(e) {
        var t, i, n, o = [];
        for (t = 0; t < this.sizeY; t++) {
            for (n = [], i = 0; i < this.sizeX; i++) n[i] = e[t * this.sizeX + i];
            o[t] = n
        }
        return o
    }, n.prototype.translate = n.prototype.defaultTranslate, n.prototype.move = function(e) {
        for (var t, i, n, o = this.focusX, s = this.focusY, a = !0, r = !1, c = !1; a;) {
            switch (e) {
                case l.up:
                    s > 0 ? s-- : (this.cycleY && (s = this.map.length - 1, c = !0), r = !0);
                    break;
                case l.down:
                    s < this.map.length - 1 ? s++ : (this.cycleY && (s = 0, c = !0), r = !0);
                    break;
                case l.right:
                    o < this.map[s].length - 1 ? o++ : (this.cycleX && (o = 0, c = !0), r = !0);
                    break;
                case l.left:
                    o > 0 ? o-- : (this.cycleX && (o = this.map[s].length - 1, c = !0), r = !0)
            }
            o === this.focusX && s === this.focusY && (a = !1), this.map[s][o] !== this.map[this.focusY][this.focusX] && this.map[s][o].data.disable !== !0 && (a = !1), r && (a = !1, this.map[s][o].data.disable === !0 && (o = this.focusX, s = this.focusY))
        }
        this.focusItem(this.map[s][o]), this.focusX = o, this.focusY = s, r && (this.provider && (t = this.provider.get(e, function(e, t) {
            if (e && self.events["data:error"]) return self.emit("data:error", e), !1;
            if (t) {
                for (self.data = self.translate(t), i = 0; i < self.sizeY - 1; i++)
                    for (n = 0; n < self.sizeX; n++) self.renderItem(self.map[i][n], self.data[i][n]);
                self.events["data:ready"] && self.emit("data:ready")
            }
        }), this.events["data:get"] && this.emit("data:get", {
            fresh: t
        })), this.events.overflow && this.emit("overflow", {
            direction: e,
            cycle: c
        }))
    }, n.prototype.focusItem = function(e) {
        var t = this.$focusItem;
        return e && t !== e && e.data.disable !== !0 ? (null !== t && (t.classList.remove("focus"), this.events["blur:item"] && this.emit("blur:item", {
            $item: t
        })), this.focusX = e.x, this.focusY = e.y, this.$focusItem = e, e.classList.add("focus"), this.events["focus:item"] && this.emit("focus:item", {
            $prev: t,
            $curr: e
        }), !0) : !1
    }, n.prototype.markItem = function(e, t) {
        t ? e.classList.add("mark") : e.classList.remove("mark"), e.data.mark = t
    }, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, e.className = "modalBox " + (e.className || ""), e.$body = document.createElement("div"), e.$body.className = "body", o.call(this, e), this.$node.appendChild(document.createElement("div").appendChild(this.$body).parentNode)
    }
    var o = i(5);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, e.exports = n
}, function(e, t, i) {
    "use strict";

    function n(e) {
        e = e || {}, this.max = 100, this.min = 0, this.value = 0, this.step = 1, e.focusable = e.focusable || !1, e.className = "progressBar " + (e.className || ""), o.call(this, e), this.$value = this.$body.appendChild(document.createElement("div")), this.$value.className = "value", this.init(e)
    }
    var o = i(5);
    n.prototype = Object.create(o.prototype), n.prototype.constructor = n, n.prototype.set = function(e) {
        var t = this.value;
        return this.value !== e && e <= this.max && e >= this.min ? (this.value = e, e = Math.abs(this.value - this.min) / this.step, 100 === e && this.events.done && this.emit("done"), this.$value.style.width = e + "%", this.events.change && this.emit("change", {
            curr: this.value,
            prev: t
        }), !0) : !1
    }, n.prototype.init = function(e) {
        void 0 !== e.max && (this.max = e.max), void 0 !== e.min && (this.min = e.min), void 0 !== e.value && (this.value = e.value), this.step = Math.abs(this.max - this.min) / 100, this.$value.style.width = Math.abs(this.min - this.value) / this.step + "%"
    }, e.exports = n
}]);