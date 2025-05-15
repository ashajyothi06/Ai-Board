function zp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}

function pr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ac = {
        exports: {}
    },
    Do = {},
    Ic = {
        exports: {}
    },
    $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mi = Symbol.for("react.element"),
    Fp = Symbol.for("react.portal"),
    Up = Symbol.for("react.fragment"),
    Bp = Symbol.for("react.strict_mode"),
    Hp = Symbol.for("react.profiler"),
    $p = Symbol.for("react.provider"),
    Vp = Symbol.for("react.context"),
    Wp = Symbol.for("react.forward_ref"),
    Qp = Symbol.for("react.suspense"),
    Yp = Symbol.for("react.memo"),
    Kp = Symbol.for("react.lazy"),
    qu = Symbol.iterator;

function Gp(e) {
    return e === null || typeof e != "object" ? null : (e = qu && e[qu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var jc = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    zc = Object.assign,
    Fc = {};

function hr(e, t, n) {
    this.props = e, this.context = t, this.refs = Fc, this.updater = n || jc
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
hr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Uc() {}
Uc.prototype = hr.prototype;

function Ba(e, t, n) {
    this.props = e, this.context = t, this.refs = Fc, this.updater = n || jc
}
var Ha = Ba.prototype = new Uc;
Ha.constructor = Ba;
zc(Ha, hr.prototype);
Ha.isPureReactComponent = !0;
var Zu = Array.isArray,
    Bc = Object.prototype.hasOwnProperty,
    $a = {
        current: null
    },
    Hc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function $c(e, t, n) {
    var r, i = {},
        o = null,
        l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t) Bc.call(t, r) && !Hc.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: mi,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: $a.current
    }
}

function Xp(e, t) {
    return {
        $$typeof: mi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Va(e) {
    return typeof e == "object" && e !== null && e.$$typeof === mi
}

function Jp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var bu = /\/+/g;

function ol(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Jp("" + e.key) : t.toString(36)
}

function Wi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else switch (o) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case mi:
                case Fp:
                    l = !0
            }
    }
    if (l) return l = e, i = i(l), e = r === "" ? "." + ol(l, 0) : r, Zu(i) ? (n = "", e != null && (n = e.replace(bu, "$&/") + "/"), Wi(i, t, n, "", function(s) {
        return s
    })) : i != null && (Va(i) && (i = Xp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(bu, "$&/") + "/") + e)), t.push(i)), 1;
    if (l = 0, r = r === "" ? "." : r + ":", Zu(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + ol(o, a);
            l += Wi(o, t, n, u, i)
        } else if (u = Gp(e), typeof u == "function")
            for (e = u.call(e), a = 0; !(o = e.next()).done;) o = o.value, u = r + ol(o, a++), l += Wi(o, t, n, u, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}

function xi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Wi(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function qp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Me = {
        current: null
    },
    Qi = {
        transition: null
    },
    Zp = {
        ReactCurrentDispatcher: Me,
        ReactCurrentBatchConfig: Qi,
        ReactCurrentOwner: $a
    };

function Vc() {
    throw Error("act(...) is not supported in production builds of React.")
}
$.Children = {
    map: xi,
    forEach: function(e, t, n) {
        xi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return xi(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return xi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Va(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
$.Component = hr;
$.Fragment = Up;
$.Profiler = Hp;
$.PureComponent = Ba;
$.StrictMode = Bp;
$.Suspense = Qp;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zp;
$.act = Vc;
$.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = zc({}, e.props),
        i = e.key,
        o = e.ref,
        l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, l = $a.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) Bc.call(t, u) && !Hc.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
        r.children = a
    }
    return {
        $$typeof: mi,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: l
    }
};
$.createContext = function(e) {
    return e = {
        $$typeof: Vp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: $p,
        _context: e
    }, e.Consumer = e
};
$.createElement = $c;
$.createFactory = function(e) {
    var t = $c.bind(null, e);
    return t.type = e, t
};
$.createRef = function() {
    return {
        current: null
    }
};
$.forwardRef = function(e) {
    return {
        $$typeof: Wp,
        render: e
    }
};
$.isValidElement = Va;
$.lazy = function(e) {
    return {
        $$typeof: Kp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: qp
    }
};
$.memo = function(e, t) {
    return {
        $$typeof: Yp,
        type: e,
        compare: t === void 0 ? null : t
    }
};
$.startTransition = function(e) {
    var t = Qi.transition;
    Qi.transition = {};
    try {
        e()
    } finally {
        Qi.transition = t
    }
};
$.unstable_act = Vc;
$.useCallback = function(e, t) {
    return Me.current.useCallback(e, t)
};
$.useContext = function(e) {
    return Me.current.useContext(e)
};
$.useDebugValue = function() {};
$.useDeferredValue = function(e) {
    return Me.current.useDeferredValue(e)
};
$.useEffect = function(e, t) {
    return Me.current.useEffect(e, t)
};
$.useId = function() {
    return Me.current.useId()
};
$.useImperativeHandle = function(e, t, n) {
    return Me.current.useImperativeHandle(e, t, n)
};
$.useInsertionEffect = function(e, t) {
    return Me.current.useInsertionEffect(e, t)
};
$.useLayoutEffect = function(e, t) {
    return Me.current.useLayoutEffect(e, t)
};
$.useMemo = function(e, t) {
    return Me.current.useMemo(e, t)
};
$.useReducer = function(e, t, n) {
    return Me.current.useReducer(e, t, n)
};
$.useRef = function(e) {
    return Me.current.useRef(e)
};
$.useState = function(e) {
    return Me.current.useState(e)
};
$.useSyncExternalStore = function(e, t, n) {
    return Me.current.useSyncExternalStore(e, t, n)
};
$.useTransition = function() {
    return Me.current.useTransition()
};
$.version = "18.3.1";
Ic.exports = $;
var N = Ic.exports;
const qn = pr(N),
    bp = zp({
        __proto__: null,
        default: qn
    }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eh = N,
    th = Symbol.for("react.element"),
    nh = Symbol.for("react.fragment"),
    rh = Object.prototype.hasOwnProperty,
    ih = eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    oh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Wc(e, t, n) {
    var r, i = {},
        o = null,
        l = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
    for (r in t) rh.call(t, r) && !oh.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: th,
        type: e,
        key: o,
        ref: l,
        props: i,
        _owner: ih.current
    }
}
Do.Fragment = nh;
Do.jsx = Wc;
Do.jsxs = Wc;
Ac.exports = Do;
var t0 = Ac.exports,
    es = {},
    Qc = {
        exports: {}
    },
    Ye = {},
    Yc = {
        exports: {}
    },
    Kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(L, A) {
        var z = L.length;
        L.push(A);
        e: for (; 0 < z;) {
            var K = z - 1 >>> 1,
                Z = L[K];
            if (0 < i(Z, A)) L[K] = A, L[z] = Z, z = K;
            else break e
        }
    }

    function n(L) {
        return L.length === 0 ? null : L[0]
    }

    function r(L) {
        if (L.length === 0) return null;
        var A = L[0],
            z = L.pop();
        if (z !== A) {
            L[0] = z;
            e: for (var K = 0, Z = L.length, Ft = Z >>> 1; K < Ft;) {
                var wt = 2 * (K + 1) - 1,
                    vr = L[wt],
                    Et = wt + 1,
                    oe = L[Et];
                if (0 > i(vr, z)) Et < Z && 0 > i(oe, vr) ? (L[K] = oe, L[Et] = z, K = Et) : (L[K] = vr, L[wt] = z, K = wt);
                else if (Et < Z && 0 > i(oe, z)) L[K] = oe, L[Et] = z, K = Et;
                else break e
            }
        }
        return A
    }

    function i(L, A) {
        var z = L.sortIndex - A.sortIndex;
        return z !== 0 ? z : L.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var l = Date,
            a = l.now();
        e.unstable_now = function() {
            return l.now() - a
        }
    }
    var u = [],
        s = [],
        c = 1,
        m = null,
        h = 3,
        y = !1,
        S = !1,
        w = !1,
        P = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(L) {
        for (var A = n(s); A !== null;) {
            if (A.callback === null) r(s);
            else if (A.startTime <= L) r(s), A.sortIndex = A.expirationTime, t(u, A);
            else break;
            A = n(s)
        }
    }

    function f(L) {
        if (w = !1, g(L), !S)
            if (n(u) !== null) S = !0, zt(T);
            else {
                var A = n(s);
                A !== null && St(f, A.startTime - L)
            }
    }

    function T(L, A) {
        S = !1, w && (w = !1, p(R), R = -1), y = !0;
        var z = h;
        try {
            for (g(A), m = n(u); m !== null && (!(m.expirationTime > A) || L && !Ee());) {
                var K = m.callback;
                if (typeof K == "function") {
                    m.callback = null, h = m.priorityLevel;
                    var Z = K(m.expirationTime <= A);
                    A = e.unstable_now(), typeof Z == "function" ? m.callback = Z : m === n(u) && r(u), g(A)
                } else r(u);
                m = n(u)
            }
            if (m !== null) var Ft = !0;
            else {
                var wt = n(s);
                wt !== null && St(f, wt.startTime - A), Ft = !1
            }
            return Ft
        } finally {
            m = null, h = z, y = !1
        }
    }
    var C = !1,
        x = null,
        R = -1,
        Q = 5,
        j = -1;

    function Ee() {
        return !(e.unstable_now() - j < Q)
    }

    function He() {
        if (x !== null) {
            var L = e.unstable_now();
            j = L;
            var A = !0;
            try {
                A = x(!0, L)
            } finally {
                A ? dt() : (C = !1, x = null)
            }
        } else C = !1
    }
    var dt;
    if (typeof d == "function") dt = function() {
        d(He)
    };
    else if (typeof MessageChannel < "u") {
        var fn = new MessageChannel,
            fe = fn.port2;
        fn.port1.onmessage = He, dt = function() {
            fe.postMessage(null)
        }
    } else dt = function() {
        P(He, 0)
    };

    function zt(L) {
        x = L, C || (C = !0, dt())
    }

    function St(L, A) {
        R = P(function() {
            L(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(L) {
        L.callback = null
    }, e.unstable_continueExecution = function() {
        S || y || (S = !0, zt(T))
    }, e.unstable_forceFrameRate = function(L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < L ? Math.floor(1e3 / L) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(L) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = h
        }
        var z = h;
        h = A;
        try {
            return L()
        } finally {
            h = z
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(L, A) {
        switch (L) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                L = 3
        }
        var z = h;
        h = L;
        try {
            return A()
        } finally {
            h = z
        }
    }, e.unstable_scheduleCallback = function(L, A, z) {
        var K = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? K + z : K) : z = K, L) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = z + Z, L = {
            id: c++,
            callback: A,
            priorityLevel: L,
            startTime: z,
            expirationTime: Z,
            sortIndex: -1
        }, z > K ? (L.sortIndex = z, t(s, L), n(u) === null && L === n(s) && (w ? (p(R), R = -1) : w = !0, St(f, z - K))) : (L.sortIndex = Z, t(u, L), S || y || (S = !0, zt(T))), L
    }, e.unstable_shouldYield = Ee, e.unstable_wrapCallback = function(L) {
        var A = h;
        return function() {
            var z = h;
            h = A;
            try {
                return L.apply(this, arguments)
            } finally {
                h = z
            }
        }
    }
})(Kc);
Yc.exports = Kc;
var lh = Yc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ah = N,
    Qe = lh;

function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Gc = new Set,
    Jr = {};

function Dn(e, t) {
    lr(e, t), lr(e + "Capture", t)
}

function lr(e, t) {
    for (Jr[e] = t, e = 0; e < t.length; e++) Gc.add(t[e])
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    jl = Object.prototype.hasOwnProperty,
    uh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ts = {},
    ns = {};

function sh(e) {
    return jl.call(ns, e) ? !0 : jl.call(ts, e) ? !1 : uh.test(e) ? ns[e] = !0 : (ts[e] = !0, !1)
}

function ch(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function fh(e, t, n, r) {
    if (t === null || typeof t > "u" || ch(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ae(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    xe[e] = new Ae(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    xe[t] = new Ae(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    xe[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    xe[e] = new Ae(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    xe[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    xe[e] = new Ae(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    xe[e] = new Ae(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    xe[e] = new Ae(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    xe[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wa = /[\-:]([a-z])/g;

function Qa(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Wa, Qa);
    xe[t] = new Ae(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wa, Qa);
    xe[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wa, Qa);
    xe[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    xe[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
xe.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    xe[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ya(e, t, n, r) {
    var i = xe.hasOwnProperty(t) ? xe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fh(t, n, i, r) && (n = null), r || i === null ? sh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var It = ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pi = Symbol.for("react.element"),
    zn = Symbol.for("react.portal"),
    Fn = Symbol.for("react.fragment"),
    Ka = Symbol.for("react.strict_mode"),
    zl = Symbol.for("react.profiler"),
    Xc = Symbol.for("react.provider"),
    Jc = Symbol.for("react.context"),
    Ga = Symbol.for("react.forward_ref"),
    Fl = Symbol.for("react.suspense"),
    Ul = Symbol.for("react.suspense_list"),
    Xa = Symbol.for("react.memo"),
    $t = Symbol.for("react.lazy"),
    qc = Symbol.for("react.offscreen"),
    rs = Symbol.iterator;

function _r(e) {
    return e === null || typeof e != "object" ? null : (e = rs && e[rs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ce = Object.assign,
    ll;

function jr(e) {
    if (ll === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ll = t && t[1] || ""
    }
    return `
` + ll + e
}
var al = !1;

function ul(e, t) {
    if (!e || al) return "";
    al = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var i = s.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, a = o.length - 1; 1 <= l && 0 <= a && i[l] !== o[a];) a--;
            for (; 1 <= l && 0 <= a; l--, a--)
                if (i[l] !== o[a]) {
                    if (l !== 1 || a !== 1)
                        do
                            if (l--, a--, 0 > a || i[l] !== o[a]) {
                                var u = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= l && 0 <= a);
                    break
                }
        }
    } finally {
        al = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? jr(e) : ""
}

function dh(e) {
    switch (e.tag) {
        case 5:
            return jr(e.type);
        case 16:
            return jr("Lazy");
        case 13:
            return jr("Suspense");
        case 19:
            return jr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ul(e.type, !1), e;
        case 11:
            return e = ul(e.type.render, !1), e;
        case 1:
            return e = ul(e.type, !0), e;
        default:
            return ""
    }
}

function Bl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Fn:
            return "Fragment";
        case zn:
            return "Portal";
        case zl:
            return "Profiler";
        case Ka:
            return "StrictMode";
        case Fl:
            return "Suspense";
        case Ul:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Jc:
            return (e.displayName || "Context") + ".Consumer";
        case Xc:
            return (e._context.displayName || "Context") + ".Provider";
        case Ga:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Xa:
            return t = e.displayName || null, t !== null ? t : Bl(e.type) || "Memo";
        case $t:
            t = e._payload, e = e._init;
            try {
                return Bl(e(t))
            } catch {}
    }
    return null
}

function ph(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Bl(t);
        case 8:
            return t === Ka ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ln(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Zc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function hh(e) {
    var t = Zc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l, o.call(this, l)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ri(e) {
    e._valueTracker || (e._valueTracker = hh(e))
}

function bc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Zc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function io(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Hl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function is(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ln(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function ef(e, t) {
    t = t.checked, t != null && Ya(e, "checked", t, !1)
}

function $l(e, t) {
    ef(e, t);
    var n = ln(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function os(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Vl(e, t, n) {
    (t !== "number" || io(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var zr = Array.isArray;

function Zn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ln(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Wl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function ls(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(k(92));
            if (zr(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ln(n)
    }
}

function tf(e, t) {
    var n = ln(t.value),
        r = ln(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function as(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function nf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? nf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Li, rf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Li = Li || document.createElement("div"), Li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Li.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function qr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Br = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    mh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function(e) {
    mh.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Br[t] = Br[e]
    })
});

function of (e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Br.hasOwnProperty(e) && Br[e] ? ("" + t).trim() : t + "px"
}

function lf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = of (n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var gh = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Yl(e, t) {
    if (t) {
        if (gh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62))
    }
}

function Kl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Gl = null;

function Ja(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Xl = null,
    bn = null,
    er = null;

function us(e) {
    if (e = yi(e)) {
        if (typeof Xl != "function") throw Error(k(280));
        var t = e.stateNode;
        t && (t = zo(t), Xl(e.stateNode, e.type, t))
    }
}

function af(e) {
    bn ? er ? er.push(e) : er = [e] : bn = e
}

function uf() {
    if (bn) {
        var e = bn,
            t = er;
        if (er = bn = null, us(e), t)
            for (e = 0; e < t.length; e++) us(t[e])
    }
}

function sf(e, t) {
    return e(t)
}

function cf() {}
var sl = !1;

function ff(e, t, n) {
    if (sl) return e(t, n);
    sl = !0;
    try {
        return sf(e, t, n)
    } finally {
        sl = !1, (bn !== null || er !== null) && (cf(), uf())
    }
}

function Zr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = zo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n
}
var Jl = !1;
if (Ot) try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
        get: function() {
            Jl = !0
        }
    }), window.addEventListener("test", Tr, Tr), window.removeEventListener("test", Tr, Tr)
} catch {
    Jl = !1
}

function vh(e, t, n, r, i, o, l, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (c) {
        this.onError(c)
    }
}
var Hr = !1,
    oo = null,
    lo = !1,
    ql = null,
    yh = {
        onError: function(e) {
            Hr = !0, oo = e
        }
    };

function Sh(e, t, n, r, i, o, l, a, u) {
    Hr = !1, oo = null, vh.apply(yh, arguments)
}

function wh(e, t, n, r, i, o, l, a, u) {
    if (Sh.apply(this, arguments), Hr) {
        if (Hr) {
            var s = oo;
            Hr = !1, oo = null
        } else throw Error(k(198));
        lo || (lo = !0, ql = s)
    }
}

function Mn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function df(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function ss(e) {
    if (Mn(e) !== e) throw Error(k(188))
}

function Eh(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Mn(e), t === null) throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return ss(i), e;
                if (o === r) return ss(i), t;
                o = o.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var l = !1, a = i.child; a;) {
                if (a === n) {
                    l = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    l = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!l) {
                for (a = o.child; a;) {
                    if (a === n) {
                        l = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        l = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!l) throw Error(k(189))
            }
        }
        if (n.alternate !== r) throw Error(k(190))
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t
}

function pf(e) {
    return e = Eh(e), e !== null ? hf(e) : null
}

function hf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = hf(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var mf = Qe.unstable_scheduleCallback,
    cs = Qe.unstable_cancelCallback,
    _h = Qe.unstable_shouldYield,
    Th = Qe.unstable_requestPaint,
    ge = Qe.unstable_now,
    kh = Qe.unstable_getCurrentPriorityLevel,
    qa = Qe.unstable_ImmediatePriority,
    gf = Qe.unstable_UserBlockingPriority,
    ao = Qe.unstable_NormalPriority,
    Ch = Qe.unstable_LowPriority,
    vf = Qe.unstable_IdlePriority,
    Mo = null,
    gt = null;

function xh(e) {
    if (gt && typeof gt.onCommitFiberRoot == "function") try {
        gt.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Lh,
    Ph = Math.log,
    Rh = Math.LN2;

function Lh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ph(e) / Rh | 0) | 0
}
var Ni = 64,
    Oi = 4194304;

function Fr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function uo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var a = l & ~i;
        a !== 0 ? r = Fr(a) : (o &= l, o !== 0 && (r = Fr(o)))
    } else l = n & ~i, l !== 0 ? r = Fr(l) : o !== 0 && (r = Fr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ut(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function Nh(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Oh(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var l = 31 - ut(o),
            a = 1 << l,
            u = i[l];
        u === -1 ? (!(a & n) || a & r) && (i[l] = Nh(a, t)) : u <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function Zl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function yf() {
    var e = Ni;
    return Ni <<= 1, !(Ni & 4194240) && (Ni = 64), e
}

function cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function gi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n
}

function Dh(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - ut(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Za(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ut(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var G = 0;

function Sf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var wf, ba, Ef, _f, Tf, bl = !1,
    Di = [],
    qt = null,
    Zt = null,
    bt = null,
    br = new Map,
    ei = new Map,
    Qt = [],
    Mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function fs(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            qt = null;
            break;
        case "dragenter":
        case "dragleave":
            Zt = null;
            break;
        case "mouseover":
        case "mouseout":
            bt = null;
            break;
        case "pointerover":
        case "pointerout":
            br.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ei.delete(t.pointerId)
    }
}

function kr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = yi(t), t !== null && ba(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Ah(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return qt = kr(qt, e, t, n, r, i), !0;
        case "dragenter":
            return Zt = kr(Zt, e, t, n, r, i), !0;
        case "mouseover":
            return bt = kr(bt, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return br.set(o, kr(br.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, ei.set(o, kr(ei.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function kf(e) {
    var t = vn(e.target);
    if (t !== null) {
        var n = Mn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = df(n), t !== null) {
                    e.blockedOn = t, Tf(e.priority, function() {
                        Ef(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Yi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Gl = r, n.target.dispatchEvent(r), Gl = null
        } else return t = yi(n), t !== null && ba(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function ds(e, t, n) {
    Yi(e) && n.delete(t)
}

function Ih() {
    bl = !1, qt !== null && Yi(qt) && (qt = null), Zt !== null && Yi(Zt) && (Zt = null), bt !== null && Yi(bt) && (bt = null), br.forEach(ds), ei.forEach(ds)
}

function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, bl || (bl = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Ih)))
}

function ti(e) {
    function t(i) {
        return Cr(i, e)
    }
    if (0 < Di.length) {
        Cr(Di[0], e);
        for (var n = 1; n < Di.length; n++) {
            var r = Di[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (qt !== null && Cr(qt, e), Zt !== null && Cr(Zt, e), bt !== null && Cr(bt, e), br.forEach(t), ei.forEach(t), n = 0; n < Qt.length; n++) r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Qt.length && (n = Qt[0], n.blockedOn === null);) kf(n), n.blockedOn === null && Qt.shift()
}
var tr = It.ReactCurrentBatchConfig,
    so = !0;

function jh(e, t, n, r) {
    var i = G,
        o = tr.transition;
    tr.transition = null;
    try {
        G = 1, eu(e, t, n, r)
    } finally {
        G = i, tr.transition = o
    }
}

function zh(e, t, n, r) {
    var i = G,
        o = tr.transition;
    tr.transition = null;
    try {
        G = 4, eu(e, t, n, r)
    } finally {
        G = i, tr.transition = o
    }
}

function eu(e, t, n, r) {
    if (so) {
        var i = ea(e, t, n, r);
        if (i === null) wl(e, t, r, co, n), fs(e, r);
        else if (Ah(i, e, t, n, r)) r.stopPropagation();
        else if (fs(e, r), t & 4 && -1 < Mh.indexOf(e)) {
            for (; i !== null;) {
                var o = yi(i);
                if (o !== null && wf(o), o = ea(e, t, n, r), o === null && wl(e, t, r, co, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else wl(e, t, r, null, n)
    }
}
var co = null;

function ea(e, t, n, r) {
    if (co = null, e = Ja(r), e = vn(e), e !== null)
        if (t = Mn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = df(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return co = e, null
}

function Cf(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (kh()) {
                case qa:
                    return 1;
                case gf:
                    return 4;
                case ao:
                case Ch:
                    return 16;
                case vf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Kt = null,
    tu = null,
    Ki = null;

function xf() {
    if (Ki) return Ki;
    var e, t = tu,
        n = t.length,
        r, i = "value" in Kt ? Kt.value : Kt.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
    return Ki = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Gi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Mi() {
    return !0
}

function ps() {
    return !1
}

function Ke(e) {
    function t(n, r, i, o, l) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Mi : ps, this.isPropagationStopped = ps, this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mi)
        },
        persist: function() {},
        isPersistent: Mi
    }), t
}
var mr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    nu = Ke(mr),
    vi = ce({}, mr, {
        view: 0,
        detail: 0
    }),
    Fh = Ke(vi),
    fl, dl, xr, Ao = ce({}, vi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ru,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== xr && (xr && e.type === "mousemove" ? (fl = e.screenX - xr.screenX, dl = e.screenY - xr.screenY) : dl = fl = 0, xr = e), fl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : dl
        }
    }),
    hs = Ke(Ao),
    Uh = ce({}, Ao, {
        dataTransfer: 0
    }),
    Bh = Ke(Uh),
    Hh = ce({}, vi, {
        relatedTarget: 0
    }),
    pl = Ke(Hh),
    $h = ce({}, mr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Vh = Ke($h),
    Wh = ce({}, mr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Qh = Ke(Wh),
    Yh = ce({}, mr, {
        data: 0
    }),
    ms = Ke(Yh),
    Kh = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Gh = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Xh = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Jh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xh[e]) ? !!t[e] : !1
}

function ru() {
    return Jh
}
var qh = ce({}, vi, {
        key: function(e) {
            if (e.key) {
                var t = Kh[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ru,
        charCode: function(e) {
            return e.type === "keypress" ? Gi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Zh = Ke(qh),
    bh = ce({}, Ao, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    gs = Ke(bh),
    em = ce({}, vi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ru
    }),
    tm = Ke(em),
    nm = ce({}, mr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    rm = Ke(nm),
    im = ce({}, Ao, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    om = Ke(im),
    lm = [9, 13, 27, 32],
    iu = Ot && "CompositionEvent" in window,
    $r = null;
Ot && "documentMode" in document && ($r = document.documentMode);
var am = Ot && "TextEvent" in window && !$r,
    Pf = Ot && (!iu || $r && 8 < $r && 11 >= $r),
    vs = String.fromCharCode(32),
    ys = !1;

function Rf(e, t) {
    switch (e) {
        case "keyup":
            return lm.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Lf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Un = !1;

function um(e, t) {
    switch (e) {
        case "compositionend":
            return Lf(t);
        case "keypress":
            return t.which !== 32 ? null : (ys = !0, vs);
        case "textInput":
            return e = t.data, e === vs && ys ? null : e;
        default:
            return null
    }
}

function sm(e, t) {
    if (Un) return e === "compositionend" || !iu && Rf(e, t) ? (e = xf(), Ki = tu = Kt = null, Un = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Pf && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var cm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ss(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cm[e.type] : t === "textarea"
}

function Nf(e, t, n, r) {
    af(r), t = fo(t, "onChange"), 0 < t.length && (n = new nu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Vr = null,
    ni = null;

function fm(e) {
    Hf(e, 0)
}

function Io(e) {
    var t = $n(e);
    if (bc(t)) return e
}

function dm(e, t) {
    if (e === "change") return t
}
var Of = !1;
if (Ot) {
    var hl;
    if (Ot) {
        var ml = "oninput" in document;
        if (!ml) {
            var ws = document.createElement("div");
            ws.setAttribute("oninput", "return;"), ml = typeof ws.oninput == "function"
        }
        hl = ml
    } else hl = !1;
    Of = hl && (!document.documentMode || 9 < document.documentMode)
}

function Es() {
    Vr && (Vr.detachEvent("onpropertychange", Df), ni = Vr = null)
}

function Df(e) {
    if (e.propertyName === "value" && Io(ni)) {
        var t = [];
        Nf(t, ni, e, Ja(e)), ff(fm, t)
    }
}

function pm(e, t, n) {
    e === "focusin" ? (Es(), Vr = t, ni = n, Vr.attachEvent("onpropertychange", Df)) : e === "focusout" && Es()
}

function hm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Io(ni)
}

function mm(e, t) {
    if (e === "click") return Io(t)
}

function gm(e, t) {
    if (e === "input" || e === "change") return Io(t)
}

function vm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ft = typeof Object.is == "function" ? Object.is : vm;

function ri(e, t) {
    if (ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!jl.call(t, i) || !ft(e[i], t[i])) return !1
    }
    return !0
}

function _s(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Ts(e, t) {
    var n = _s(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = _s(n)
    }
}

function Mf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Af() {
    for (var e = window, t = io(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = io(e.document)
    }
    return t
}

function ou(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function ym(e) {
    var t = Af(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Mf(n.ownerDocument.documentElement, n)) {
        if (r !== null && ou(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ts(n, o);
                var l = Ts(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Sm = Ot && "documentMode" in document && 11 >= document.documentMode,
    Bn = null,
    ta = null,
    Wr = null,
    na = !1;

function ks(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    na || Bn == null || Bn !== io(r) || (r = Bn, "selectionStart" in r && ou(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Wr && ri(Wr, r) || (Wr = r, r = fo(ta, "onSelect"), 0 < r.length && (t = new nu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Bn)))
}

function Ai(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Hn = {
        animationend: Ai("Animation", "AnimationEnd"),
        animationiteration: Ai("Animation", "AnimationIteration"),
        animationstart: Ai("Animation", "AnimationStart"),
        transitionend: Ai("Transition", "TransitionEnd")
    },
    gl = {},
    If = {};
Ot && (If = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);

function jo(e) {
    if (gl[e]) return gl[e];
    if (!Hn[e]) return e;
    var t = Hn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in If) return gl[e] = t[n];
    return e
}
var jf = jo("animationend"),
    zf = jo("animationiteration"),
    Ff = jo("animationstart"),
    Uf = jo("transitionend"),
    Bf = new Map,
    Cs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function un(e, t) {
    Bf.set(e, t), Dn(t, [e])
}
for (var vl = 0; vl < Cs.length; vl++) {
    var yl = Cs[vl],
        wm = yl.toLowerCase(),
        Em = yl[0].toUpperCase() + yl.slice(1);
    un(wm, "on" + Em)
}
un(jf, "onAnimationEnd");
un(zf, "onAnimationIteration");
un(Ff, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Uf, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    _m = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));

function xs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, wh(r, t, void 0, e), e.currentTarget = null
}

function Hf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var a = r[l],
                        u = a.instance,
                        s = a.currentTarget;
                    if (a = a.listener, u !== o && i.isPropagationStopped()) break e;
                    xs(i, a, s), o = u
                } else
                    for (l = 0; l < r.length; l++) {
                        if (a = r[l], u = a.instance, s = a.currentTarget, a = a.listener, u !== o && i.isPropagationStopped()) break e;
                        xs(i, a, s), o = u
                    }
        }
    }
    if (lo) throw e = ql, lo = !1, ql = null, e
}

function ee(e, t) {
    var n = t[aa];
    n === void 0 && (n = t[aa] = new Set);
    var r = e + "__bubble";
    n.has(r) || ($f(t, e, 2, !1), n.add(r))
}

function Sl(e, t, n) {
    var r = 0;
    t && (r |= 4), $f(n, e, r, t)
}
var Ii = "_reactListening" + Math.random().toString(36).slice(2);

function ii(e) {
    if (!e[Ii]) {
        e[Ii] = !0, Gc.forEach(function(n) {
            n !== "selectionchange" && (_m.has(n) || Sl(n, !1, e), Sl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ii] || (t[Ii] = !0, Sl("selectionchange", !1, t))
    }
}

function $f(e, t, n, r) {
    switch (Cf(t)) {
        case 1:
            var i = jh;
            break;
        case 4:
            i = zh;
            break;
        default:
            i = eu
    }
    n = i.bind(null, t, n, e), i = void 0, !Jl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function wl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (l === 4)
                for (l = r.return; l !== null;) {
                    var u = l.tag;
                    if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
                    l = l.return
                }
            for (; a !== null;) {
                if (l = vn(a), l === null) return;
                if (u = l.tag, u === 5 || u === 6) {
                    r = o = l;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    ff(function() {
        var s = o,
            c = Ja(n),
            m = [];
        e: {
            var h = Bf.get(e);
            if (h !== void 0) {
                var y = nu,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (Gi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Zh;
                        break;
                    case "focusin":
                        S = "focus", y = pl;
                        break;
                    case "focusout":
                        S = "blur", y = pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = pl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = hs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Bh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = tm;
                        break;
                    case jf:
                    case zf:
                    case Ff:
                        y = Vh;
                        break;
                    case Uf:
                        y = rm;
                        break;
                    case "scroll":
                        y = Fh;
                        break;
                    case "wheel":
                        y = om;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Qh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = gs
                }
                var w = (t & 4) !== 0,
                    P = !w && e === "scroll",
                    p = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var d = s, g; d !== null;) {
                    g = d;
                    var f = g.stateNode;
                    if (g.tag === 5 && f !== null && (g = f, p !== null && (f = Zr(d, p), f != null && w.push(oi(d, f, g)))), P) break;
                    d = d.return
                }
                0 < w.length && (h = new y(h, S, null, n, c), m.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== Gl && (S = n.relatedTarget || n.fromElement) && (vn(S) || S[Dt])) break e;
                if ((y || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (S = n.relatedTarget || n.toElement, y = s, S = S ? vn(S) : null, S !== null && (P = Mn(S), S !== P || S.tag !== 5 && S.tag !== 6) && (S = null)) : (y = null, S = s), y !== S)) {
                    if (w = hs, f = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (w = gs, f = "onPointerLeave", p = "onPointerEnter", d = "pointer"), P = y == null ? h : $n(y), g = S == null ? h : $n(S), h = new w(f, d + "leave", y, n, c), h.target = P, h.relatedTarget = g, f = null, vn(c) === s && (w = new w(p, d + "enter", S, n, c), w.target = g, w.relatedTarget = P, f = w), P = f, y && S) t: {
                        for (w = y, p = S, d = 0, g = w; g; g = An(g)) d++;
                        for (g = 0, f = p; f; f = An(f)) g++;
                        for (; 0 < d - g;) w = An(w),
                        d--;
                        for (; 0 < g - d;) p = An(p),
                        g--;
                        for (; d--;) {
                            if (w === p || p !== null && w === p.alternate) break t;
                            w = An(w), p = An(p)
                        }
                        w = null
                    }
                    else w = null;
                    y !== null && Ps(m, h, y, w, !1), S !== null && P !== null && Ps(m, P, S, w, !0)
                }
            }
            e: {
                if (h = s ? $n(s) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var T = dm;
                else if (Ss(h))
                    if (Of) T = gm;
                    else {
                        T = hm;
                        var C = pm
                    }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (T = mm);
                if (T && (T = T(e, s))) {
                    Nf(m, T, n, c);
                    break e
                }
                C && C(e, h, s),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && Vl(h, "number", h.value)
            }
            switch (C = s ? $n(s) : window, e) {
                case "focusin":
                    (Ss(C) || C.contentEditable === "true") && (Bn = C, ta = s, Wr = null);
                    break;
                case "focusout":
                    Wr = ta = Bn = null;
                    break;
                case "mousedown":
                    na = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    na = !1, ks(m, n, c);
                    break;
                case "selectionchange":
                    if (Sm) break;
                case "keydown":
                case "keyup":
                    ks(m, n, c)
            }
            var x;
            if (iu) e: {
                switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                }
                R = void 0
            }
            else Un ? Rf(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");R && (Pf && n.locale !== "ko" && (Un || R !== "onCompositionStart" ? R === "onCompositionEnd" && Un && (x = xf()) : (Kt = c, tu = "value" in Kt ? Kt.value : Kt.textContent, Un = !0)), C = fo(s, R), 0 < C.length && (R = new ms(R, e, null, n, c), m.push({
                event: R,
                listeners: C
            }), x ? R.data = x : (x = Lf(n), x !== null && (R.data = x)))),
            (x = am ? um(e, n) : sm(e, n)) && (s = fo(s, "onBeforeInput"), 0 < s.length && (c = new ms("onBeforeInput", "beforeinput", null, n, c), m.push({
                event: c,
                listeners: s
            }), c.data = x))
        }
        Hf(m, t)
    })
}

function oi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function fo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Zr(e, n), o != null && r.unshift(oi(e, o, i)), o = Zr(e, t), o != null && r.push(oi(e, o, i))), e = e.return
    }
    return r
}

function An(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ps(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && s !== null && (a = s, i ? (u = Zr(n, o), u != null && l.unshift(oi(n, u, a))) : i || (u = Zr(n, o), u != null && l.push(oi(n, u, a)))), n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var Tm = /\r\n?/g,
    km = /\u0000|\uFFFD/g;

function Rs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(km, "")
}

function ji(e, t, n) {
    if (t = Rs(t), Rs(e) !== t && n) throw Error(k(425))
}

function po() {}
var ra = null,
    ia = null;

function oa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var la = typeof setTimeout == "function" ? setTimeout : void 0,
    Cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ls = typeof Promise == "function" ? Promise : void 0,
    xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ls < "u" ? function(e) {
        return Ls.resolve(null).then(e).catch(Pm)
    } : la;

function Pm(e) {
    setTimeout(function() {
        throw e
    })
}

function El(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), ti(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ti(t)
}

function en(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Ns(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var gr = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + gr,
    li = "__reactProps$" + gr,
    Dt = "__reactContainer$" + gr,
    aa = "__reactEvents$" + gr,
    Rm = "__reactListeners$" + gr,
    Lm = "__reactHandles$" + gr;

function vn(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Dt] || n[mt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Ns(e); e !== null;) {
                    if (n = e[mt]) return n;
                    e = Ns(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function yi(e) {
    return e = e[mt] || e[Dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33))
}

function zo(e) {
    return e[li] || null
}
var ua = [],
    Vn = -1;

function sn(e) {
    return {
        current: e
    }
}

function te(e) {
    0 > Vn || (e.current = ua[Vn], ua[Vn] = null, Vn--)
}

function b(e, t) {
    Vn++, ua[Vn] = e.current, e.current = t
}
var an = {},
    Ne = sn(an),
    Fe = sn(!1),
    xn = an;

function ar(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Ue(e) {
    return e = e.childContextTypes, e != null
}

function ho() {
    te(Fe), te(Ne)
}

function Os(e, t, n) {
    if (Ne.current !== an) throw Error(k(168));
    b(Ne, t), b(Fe, n)
}

function Vf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(k(108, ph(e) || "Unknown", i));
    return ce({}, n, r)
}

function mo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, xn = Ne.current, b(Ne, e), b(Fe, Fe.current), !0
}

function Ds(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n ? (e = Vf(e, t, xn), r.__reactInternalMemoizedMergedChildContext = e, te(Fe), te(Ne), b(Ne, e)) : te(Fe), b(Fe, n)
}
var Pt = null,
    Fo = !1,
    _l = !1;

function Wf(e) {
    Pt === null ? Pt = [e] : Pt.push(e)
}

function Nm(e) {
    Fo = !0, Wf(e)
}

function cn() {
    if (!_l && Pt !== null) {
        _l = !0;
        var e = 0,
            t = G;
        try {
            var n = Pt;
            for (G = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Pt = null, Fo = !1
        } catch (i) {
            throw Pt !== null && (Pt = Pt.slice(e + 1)), mf(qa, cn), i
        } finally {
            G = t, _l = !1
        }
    }
    return null
}
var Wn = [],
    Qn = 0,
    go = null,
    vo = 0,
    Xe = [],
    Je = 0,
    Pn = null,
    Rt = 1,
    Lt = "";

function mn(e, t) {
    Wn[Qn++] = vo, Wn[Qn++] = go, go = e, vo = t
}

function Qf(e, t, n) {
    Xe[Je++] = Rt, Xe[Je++] = Lt, Xe[Je++] = Pn, Pn = e;
    var r = Rt;
    e = Lt;
    var i = 32 - ut(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - ut(t) + i;
    if (30 < o) {
        var l = i - i % 5;
        o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, Rt = 1 << 32 - ut(t) + i | n << i | r, Lt = o + e
    } else Rt = 1 << o | n << i | r, Lt = e
}

function lu(e) {
    e.return !== null && (mn(e, 1), Qf(e, 1, 0))
}

function au(e) {
    for (; e === go;) go = Wn[--Qn], Wn[Qn] = null, vo = Wn[--Qn], Wn[Qn] = null;
    for (; e === Pn;) Pn = Xe[--Je], Xe[Je] = null, Lt = Xe[--Je], Xe[Je] = null, Rt = Xe[--Je], Xe[Je] = null
}
var We = null,
    Ve = null,
    ie = !1,
    lt = null;

function Yf(e, t) {
    var n = qe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ms(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, Ve = en(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, Ve = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Pn !== null ? {
                id: Rt,
                overflow: Lt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, Ve = null, !0) : !1;
        default:
            return !1
    }
}

function sa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ca(e) {
    if (ie) {
        var t = Ve;
        if (t) {
            var n = t;
            if (!Ms(e, t)) {
                if (sa(e)) throw Error(k(418));
                t = en(n.nextSibling);
                var r = We;
                t && Ms(e, t) ? Yf(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, We = e)
            }
        } else {
            if (sa(e)) throw Error(k(418));
            e.flags = e.flags & -4097 | 2, ie = !1, We = e
        }
    }
}

function As(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    We = e
}

function zi(e) {
    if (e !== We) return !1;
    if (!ie) return As(e), ie = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !oa(e.type, e.memoizedProps)), t && (t = Ve)) {
        if (sa(e)) throw Kf(), Error(k(418));
        for (; t;) Yf(e, t), t = en(t.nextSibling)
    }
    if (As(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ve = en(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ve = null
        }
    } else Ve = We ? en(e.stateNode.nextSibling) : null;
    return !0
}

function Kf() {
    for (var e = Ve; e;) e = en(e.nextSibling)
}

function ur() {
    Ve = We = null, ie = !1
}

function uu(e) {
    lt === null ? lt = [e] : lt.push(e)
}
var Om = It.ReactCurrentBatchConfig;

function Pr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode
            }
            if (!r) throw Error(k(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
                var a = i.refs;
                l === null ? delete a[o] : a[o] = l
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(k(284));
        if (!n._owner) throw Error(k(290, e))
    }
    return e
}

function Fi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Is(e) {
    var t = e._init;
    return t(e._payload)
}

function Gf(e) {
    function t(p, d) {
        if (e) {
            var g = p.deletions;
            g === null ? (p.deletions = [d], p.flags |= 16) : g.push(d)
        }
    }

    function n(p, d) {
        if (!e) return null;
        for (; d !== null;) t(p, d), d = d.sibling;
        return null
    }

    function r(p, d) {
        for (p = new Map; d !== null;) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
        return p
    }

    function i(p, d) {
        return p = on(p, d), p.index = 0, p.sibling = null, p
    }

    function o(p, d, g) {
        return p.index = g, e ? (g = p.alternate, g !== null ? (g = g.index, g < d ? (p.flags |= 2, d) : g) : (p.flags |= 2, d)) : (p.flags |= 1048576, d)
    }

    function l(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, d, g, f) {
        return d === null || d.tag !== 6 ? (d = Ll(g, p.mode, f), d.return = p, d) : (d = i(d, g), d.return = p, d)
    }

    function u(p, d, g, f) {
        var T = g.type;
        return T === Fn ? c(p, d, g.props.children, f, g.key) : d !== null && (d.elementType === T || typeof T == "object" && T !== null && T.$$typeof === $t && Is(T) === d.type) ? (f = i(d, g.props), f.ref = Pr(p, d, g), f.return = p, f) : (f = to(g.type, g.key, g.props, null, p.mode, f), f.ref = Pr(p, d, g), f.return = p, f)
    }

    function s(p, d, g, f) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== g.containerInfo || d.stateNode.implementation !== g.implementation ? (d = Nl(g, p.mode, f), d.return = p, d) : (d = i(d, g.children || []), d.return = p, d)
    }

    function c(p, d, g, f, T) {
        return d === null || d.tag !== 7 ? (d = Tn(g, p.mode, f, T), d.return = p, d) : (d = i(d, g), d.return = p, d)
    }

    function m(p, d, g) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ll("" + d, p.mode, g), d.return = p, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Pi:
                    return g = to(d.type, d.key, d.props, null, p.mode, g), g.ref = Pr(p, null, d), g.return = p, g;
                case zn:
                    return d = Nl(d, p.mode, g), d.return = p, d;
                case $t:
                    var f = d._init;
                    return m(p, f(d._payload), g)
            }
            if (zr(d) || _r(d)) return d = Tn(d, p.mode, g, null), d.return = p, d;
            Fi(p, d)
        }
        return null
    }

    function h(p, d, g, f) {
        var T = d !== null ? d.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return T !== null ? null : a(p, d, "" + g, f);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Pi:
                    return g.key === T ? u(p, d, g, f) : null;
                case zn:
                    return g.key === T ? s(p, d, g, f) : null;
                case $t:
                    return T = g._init, h(p, d, T(g._payload), f)
            }
            if (zr(g) || _r(g)) return T !== null ? null : c(p, d, g, f, null);
            Fi(p, g)
        }
        return null
    }

    function y(p, d, g, f, T) {
        if (typeof f == "string" && f !== "" || typeof f == "number") return p = p.get(g) || null, a(d, p, "" + f, T);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Pi:
                    return p = p.get(f.key === null ? g : f.key) || null, u(d, p, f, T);
                case zn:
                    return p = p.get(f.key === null ? g : f.key) || null, s(d, p, f, T);
                case $t:
                    var C = f._init;
                    return y(p, d, g, C(f._payload), T)
            }
            if (zr(f) || _r(f)) return p = p.get(g) || null, c(d, p, f, T, null);
            Fi(d, f)
        }
        return null
    }

    function S(p, d, g, f) {
        for (var T = null, C = null, x = d, R = d = 0, Q = null; x !== null && R < g.length; R++) {
            x.index > R ? (Q = x, x = null) : Q = x.sibling;
            var j = h(p, x, g[R], f);
            if (j === null) {
                x === null && (x = Q);
                break
            }
            e && x && j.alternate === null && t(p, x), d = o(j, d, R), C === null ? T = j : C.sibling = j, C = j, x = Q
        }
        if (R === g.length) return n(p, x), ie && mn(p, R), T;
        if (x === null) {
            for (; R < g.length; R++) x = m(p, g[R], f), x !== null && (d = o(x, d, R), C === null ? T = x : C.sibling = x, C = x);
            return ie && mn(p, R), T
        }
        for (x = r(p, x); R < g.length; R++) Q = y(x, p, R, g[R], f), Q !== null && (e && Q.alternate !== null && x.delete(Q.key === null ? R : Q.key), d = o(Q, d, R), C === null ? T = Q : C.sibling = Q, C = Q);
        return e && x.forEach(function(Ee) {
            return t(p, Ee)
        }), ie && mn(p, R), T
    }

    function w(p, d, g, f) {
        var T = _r(g);
        if (typeof T != "function") throw Error(k(150));
        if (g = T.call(g), g == null) throw Error(k(151));
        for (var C = T = null, x = d, R = d = 0, Q = null, j = g.next(); x !== null && !j.done; R++, j = g.next()) {
            x.index > R ? (Q = x, x = null) : Q = x.sibling;
            var Ee = h(p, x, j.value, f);
            if (Ee === null) {
                x === null && (x = Q);
                break
            }
            e && x && Ee.alternate === null && t(p, x), d = o(Ee, d, R), C === null ? T = Ee : C.sibling = Ee, C = Ee, x = Q
        }
        if (j.done) return n(p, x), ie && mn(p, R), T;
        if (x === null) {
            for (; !j.done; R++, j = g.next()) j = m(p, j.value, f), j !== null && (d = o(j, d, R), C === null ? T = j : C.sibling = j, C = j);
            return ie && mn(p, R), T
        }
        for (x = r(p, x); !j.done; R++, j = g.next()) j = y(x, p, R, j.value, f), j !== null && (e && j.alternate !== null && x.delete(j.key === null ? R : j.key), d = o(j, d, R), C === null ? T = j : C.sibling = j, C = j);
        return e && x.forEach(function(He) {
            return t(p, He)
        }), ie && mn(p, R), T
    }

    function P(p, d, g, f) {
        if (typeof g == "object" && g !== null && g.type === Fn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Pi:
                    e: {
                        for (var T = g.key, C = d; C !== null;) {
                            if (C.key === T) {
                                if (T = g.type, T === Fn) {
                                    if (C.tag === 7) {
                                        n(p, C.sibling), d = i(C, g.props.children), d.return = p, p = d;
                                        break e
                                    }
                                } else if (C.elementType === T || typeof T == "object" && T !== null && T.$$typeof === $t && Is(T) === C.type) {
                                    n(p, C.sibling), d = i(C, g.props), d.ref = Pr(p, C, g), d.return = p, p = d;
                                    break e
                                }
                                n(p, C);
                                break
                            } else t(p, C);
                            C = C.sibling
                        }
                        g.type === Fn ? (d = Tn(g.props.children, p.mode, f, g.key), d.return = p, p = d) : (f = to(g.type, g.key, g.props, null, p.mode, f), f.ref = Pr(p, d, g), f.return = p, p = f)
                    }
                    return l(p);
                case zn:
                    e: {
                        for (C = g.key; d !== null;) {
                            if (d.key === C)
                                if (d.tag === 4 && d.stateNode.containerInfo === g.containerInfo && d.stateNode.implementation === g.implementation) {
                                    n(p, d.sibling), d = i(d, g.children || []), d.return = p, p = d;
                                    break e
                                } else {
                                    n(p, d);
                                    break
                                }
                            else t(p, d);
                            d = d.sibling
                        }
                        d = Nl(g, p.mode, f),
                        d.return = p,
                        p = d
                    }
                    return l(p);
                case $t:
                    return C = g._init, P(p, d, C(g._payload), f)
            }
            if (zr(g)) return S(p, d, g, f);
            if (_r(g)) return w(p, d, g, f);
            Fi(p, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, d !== null && d.tag === 6 ? (n(p, d.sibling), d = i(d, g), d.return = p, p = d) : (n(p, d), d = Ll(g, p.mode, f), d.return = p, p = d), l(p)) : n(p, d)
    }
    return P
}
var sr = Gf(!0),
    Xf = Gf(!1),
    yo = sn(null),
    So = null,
    Yn = null,
    su = null;

function cu() {
    su = Yn = So = null
}

function fu(e) {
    var t = yo.current;
    te(yo), e._currentValue = t
}

function fa(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function nr(e, t) {
    So = e, su = Yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null)
}

function be(e) {
    var t = e._currentValue;
    if (su !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Yn === null) {
            if (So === null) throw Error(k(308));
            Yn = e, So.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Yn = Yn.next = e;
    return t
}
var yn = null;

function du(e) {
    yn === null ? yn = [e] : yn.push(e)
}

function Jf(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, du(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Mt(e, r)
}

function Mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Vt = !1;

function pu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function qf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Nt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Y & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Mt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, du(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Mt(e, n)
}

function Xi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Za(e, n)
    }
}

function js(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = l : o = o.next = l, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function wo(e, t, n, r) {
    var i = e.updateQueue;
    Vt = !1;
    var o = i.firstBaseUpdate,
        l = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var u = a,
            s = u.next;
        u.next = null, l === null ? o = s : l.next = s, l = u;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== l && (a === null ? c.firstBaseUpdate = s : a.next = s, c.lastBaseUpdate = u))
    }
    if (o !== null) {
        var m = i.baseState;
        l = 0, c = s = u = null, a = o;
        do {
            var h = a.lane,
                y = a.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e,
                        w = a;
                    switch (h = t, y = n, w.tag) {
                        case 1:
                            if (S = w.payload, typeof S == "function") {
                                m = S.call(y, m, h);
                                break e
                            }
                            m = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = w.payload, h = typeof S == "function" ? S.call(y, m, h) : S, h == null) break e;
                            m = ce({}, m, h);
                            break e;
                        case 2:
                            Vt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a))
            } else y = {
                eventTime: y,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (s = c = y, u = m) : c = c.next = y, l |= h;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (1);
        if (c === null && (u = m), i.baseState = u, i.firstBaseUpdate = s, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do l |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        Ln |= l, e.lanes = l, e.memoizedState = m
    }
}

function zs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(k(191, i));
                i.call(r)
            }
        }
}
var Si = {},
    vt = sn(Si),
    ai = sn(Si),
    ui = sn(Si);

function Sn(e) {
    if (e === Si) throw Error(k(174));
    return e
}

function hu(e, t) {
    switch (b(ui, t), b(ai, e), b(vt, Si), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ql(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ql(t, e)
    }
    te(vt), b(vt, t)
}

function cr() {
    te(vt), te(ai), te(ui)
}

function Zf(e) {
    Sn(ui.current);
    var t = Sn(vt.current),
        n = Ql(t, e.type);
    t !== n && (b(ai, e), b(vt, n))
}

function mu(e) {
    ai.current === e && (te(vt), te(ai))
}
var ue = sn(0);

function Eo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Tl = [];

function gu() {
    for (var e = 0; e < Tl.length; e++) Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0
}
var Ji = It.ReactCurrentDispatcher,
    kl = It.ReactCurrentBatchConfig,
    Rn = 0,
    se = null,
    Se = null,
    _e = null,
    _o = !1,
    Qr = !1,
    si = 0,
    Dm = 0;

function Pe() {
    throw Error(k(321))
}

function vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ft(e[n], t[n])) return !1;
    return !0
}

function yu(e, t, n, r, i, o) {
    if (Rn = o, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ji.current = e === null || e.memoizedState === null ? jm : zm, e = n(r, i), Qr) {
        o = 0;
        do {
            if (Qr = !1, si = 0, 25 <= o) throw Error(k(301));
            o += 1, _e = Se = null, t.updateQueue = null, Ji.current = Fm, e = n(r, i)
        } while (Qr)
    }
    if (Ji.current = To, t = Se !== null && Se.next !== null, Rn = 0, _e = Se = se = null, _o = !1, t) throw Error(k(300));
    return e
}

function Su() {
    var e = si !== 0;
    return si = 0, e
}

function ht() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return _e === null ? se.memoizedState = _e = e : _e = _e.next = e, _e
}

function et() {
    if (Se === null) {
        var e = se.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Se.next;
    var t = _e === null ? se.memoizedState : _e.next;
    if (t !== null) _e = t, Se = e;
    else {
        if (e === null) throw Error(k(310));
        Se = e, e = {
            memoizedState: Se.memoizedState,
            baseState: Se.baseState,
            baseQueue: Se.baseQueue,
            queue: Se.queue,
            next: null
        }, _e === null ? se.memoizedState = _e = e : _e = _e.next = e
    }
    return _e
}

function ci(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Cl(e) {
    var t = et(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = Se,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = o.next, o.next = l
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = l = null,
            u = null,
            s = o;
        do {
            var c = s.lane;
            if ((Rn & c) === c) u !== null && (u = u.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var m = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                u === null ? (a = u = m, l = r) : u = u.next = m, se.lanes |= c, Ln |= c
            }
            s = s.next
        } while (s !== null && s !== o);
        u === null ? l = r : u.next = a, ft(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, se.lanes |= o, Ln |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function xl(e) {
    var t = et(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do o = e(o, l.action), l = l.next; while (l !== i);
        ft(o, t.memoizedState) || (ze = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function bf() {}

function ed(e, t) {
    var n = se,
        r = et(),
        i = t(),
        o = !ft(r.memoizedState, i);
    if (o && (r.memoizedState = i, ze = !0), r = r.queue, wu(rd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || _e !== null && _e.memoizedState.tag & 1) {
        if (n.flags |= 2048, fi(9, nd.bind(null, n, r, i, t), void 0, null), Te === null) throw Error(k(349));
        Rn & 30 || td(n, t, i)
    }
    return i
}

function td(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = se.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function nd(e, t, n, r) {
    t.value = n, t.getSnapshot = r, id(t) && od(e)
}

function rd(e, t, n) {
    return n(function() {
        id(t) && od(e)
    })
}

function id(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ft(e, n)
    } catch {
        return !0
    }
}

function od(e) {
    var t = Mt(e, 1);
    t !== null && st(t, e, 1, -1)
}

function Fs(e) {
    var t = ht();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ci,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Im.bind(null, se, e), [t.memoizedState, e]
}

function fi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = se.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ld() {
    return et().memoizedState
}

function qi(e, t, n, r) {
    var i = ht();
    se.flags |= e, i.memoizedState = fi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Uo(e, t, n, r) {
    var i = et();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Se !== null) {
        var l = Se.memoizedState;
        if (o = l.destroy, r !== null && vu(r, l.deps)) {
            i.memoizedState = fi(t, n, o, r);
            return
        }
    }
    se.flags |= e, i.memoizedState = fi(1 | t, n, o, r)
}

function Us(e, t) {
    return qi(8390656, 8, e, t)
}

function wu(e, t) {
    return Uo(2048, 8, e, t)
}

function ad(e, t) {
    return Uo(4, 2, e, t)
}

function ud(e, t) {
    return Uo(4, 4, e, t)
}

function sd(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function cd(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Uo(4, 4, sd.bind(null, t, e), n)
}

function Eu() {}

function fd(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function dd(e, t) {
    var n = et();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function pd(e, t, n) {
    return Rn & 21 ? (ft(n, t) || (n = yf(), se.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n)
}

function Mm(e, t) {
    var n = G;
    G = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = kl.transition;
    kl.transition = {};
    try {
        e(!1), t()
    } finally {
        G = n, kl.transition = r
    }
}

function hd() {
    return et().memoizedState
}

function Am(e, t, n) {
    var r = rn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, md(e)) gd(t, n);
    else if (n = Jf(e, t, n, r), n !== null) {
        var i = De();
        st(n, e, r, i), vd(n, t, r)
    }
}

function Im(e, t, n) {
    var r = rn(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (md(e)) gd(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var l = t.lastRenderedState,
                a = o(l, n);
            if (i.hasEagerState = !0, i.eagerState = a, ft(a, l)) {
                var u = t.interleaved;
                u === null ? (i.next = i, du(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Jf(e, t, i, r), n !== null && (i = De(), st(n, e, r, i), vd(n, t, r))
    }
}

function md(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se
}

function gd(e, t) {
    Qr = _o = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function vd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Za(e, n)
    }
}
var To = {
        readContext: be,
        useCallback: Pe,
        useContext: Pe,
        useEffect: Pe,
        useImperativeHandle: Pe,
        useInsertionEffect: Pe,
        useLayoutEffect: Pe,
        useMemo: Pe,
        useReducer: Pe,
        useRef: Pe,
        useState: Pe,
        useDebugValue: Pe,
        useDeferredValue: Pe,
        useTransition: Pe,
        useMutableSource: Pe,
        useSyncExternalStore: Pe,
        useId: Pe,
        unstable_isNewReconciler: !1
    },
    jm = {
        readContext: be,
        useCallback: function(e, t) {
            return ht().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: be,
        useEffect: Us,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, qi(4194308, 4, sd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return qi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return qi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = ht();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = ht();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Am.bind(null, se, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = ht();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Fs,
        useDebugValue: Eu,
        useDeferredValue: function(e) {
            return ht().memoizedState = e
        },
        useTransition: function() {
            var e = Fs(!1),
                t = e[0];
            return e = Mm.bind(null, e[1]), ht().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = se,
                i = ht();
            if (ie) {
                if (n === void 0) throw Error(k(407));
                n = n()
            } else {
                if (n = t(), Te === null) throw Error(k(349));
                Rn & 30 || td(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, Us(rd.bind(null, r, o, e), [e]), r.flags |= 2048, fi(9, nd.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = ht(),
                t = Te.identifierPrefix;
            if (ie) {
                var n = Lt,
                    r = Rt;
                n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = si++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Dm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    zm = {
        readContext: be,
        useCallback: fd,
        useContext: be,
        useEffect: wu,
        useImperativeHandle: cd,
        useInsertionEffect: ad,
        useLayoutEffect: ud,
        useMemo: dd,
        useReducer: Cl,
        useRef: ld,
        useState: function() {
            return Cl(ci)
        },
        useDebugValue: Eu,
        useDeferredValue: function(e) {
            var t = et();
            return pd(t, Se.memoizedState, e)
        },
        useTransition: function() {
            var e = Cl(ci)[0],
                t = et().memoizedState;
            return [e, t]
        },
        useMutableSource: bf,
        useSyncExternalStore: ed,
        useId: hd,
        unstable_isNewReconciler: !1
    },
    Fm = {
        readContext: be,
        useCallback: fd,
        useContext: be,
        useEffect: wu,
        useImperativeHandle: cd,
        useInsertionEffect: ad,
        useLayoutEffect: ud,
        useMemo: dd,
        useReducer: xl,
        useRef: ld,
        useState: function() {
            return xl(ci)
        },
        useDebugValue: Eu,
        useDeferredValue: function(e) {
            var t = et();
            return Se === null ? t.memoizedState = e : pd(t, Se.memoizedState, e)
        },
        useTransition: function() {
            var e = xl(ci)[0],
                t = et().memoizedState;
            return [e, t]
        },
        useMutableSource: bf,
        useSyncExternalStore: ed,
        useId: hd,
        unstable_isNewReconciler: !1
    };

function rt(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function da(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Bo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Mn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = De(),
            i = rn(e),
            o = Nt(r, i);
        o.payload = t, n != null && (o.callback = n), t = tn(e, o, i), t !== null && (st(t, e, i, r), Xi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = De(),
            i = rn(e),
            o = Nt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = tn(e, o, i), t !== null && (st(t, e, i, r), Xi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = De(),
            r = rn(e),
            i = Nt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = tn(e, i, r), t !== null && (st(t, e, r, n), Xi(t, e, r))
    }
};

function Bs(e, t, n, r, i, o, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !ri(n, r) || !ri(i, o) : !0
}

function yd(e, t, n) {
    var r = !1,
        i = an,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = be(o) : (i = Ue(t) ? xn : Ne.current, r = t.contextTypes, o = (r = r != null) ? ar(e, i) : an), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Hs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bo.enqueueReplaceState(t, t.state, null)
}

function pa(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, pu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = be(o) : (o = Ue(t) ? xn : Ne.current, i.context = ar(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (da(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Bo.enqueueReplaceState(i, i.state, null), wo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function fr(e, t) {
    try {
        var n = "",
            r = t;
        do n += dh(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Pl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function ha(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Um = typeof WeakMap == "function" ? WeakMap : Map;

function Sd(e, t, n) {
    n = Nt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Co || (Co = !0, ka = r), ha(e, t)
    }, n
}

function wd(e, t, n) {
    n = Nt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            ha(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ha(e, t), typeof r != "function" && (nn === null ? nn = new Set([this]) : nn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }), n
}

function $s(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Um;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = bm.bind(null, e, t, n), t.then(e, e))
}

function Vs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ws(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e)
}
var Bm = It.ReactCurrentOwner,
    ze = !1;

function Oe(e, t, n, r) {
    t.child = e === null ? Xf(t, null, n, r) : sr(t, e.child, n, r)
}

function Qs(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return nr(t, i), r = yu(e, t, n, r, o, i), n = Su(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, At(e, t, i)) : (ie && n && lu(t), t.flags |= 1, Oe(e, t, r, i), t.child)
}

function Ys(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Lu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ed(e, t, o, r, i)) : (e = to(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var l = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ri, n(l, r) && e.ref === t.ref) return At(e, t, i)
    }
    return t.flags |= 1, e = on(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ed(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ri(o, r) && e.ref === t.ref)
            if (ze = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (ze = !0);
            else return t.lanes = e.lanes, At(e, t, i)
    }
    return ma(e, t, n, r, i)
}

function _d(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, b(Gn, $e), $e |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, b(Gn, $e), $e |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, b(Gn, $e), $e |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, b(Gn, $e), $e |= r;
    return Oe(e, t, i, n), t.child
}

function Td(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ma(e, t, n, r, i) {
    var o = Ue(n) ? xn : Ne.current;
    return o = ar(t, o), nr(t, i), n = yu(e, t, n, r, o, i), r = Su(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, At(e, t, i)) : (ie && r && lu(t), t.flags |= 1, Oe(e, t, n, i), t.child)
}

function Ks(e, t, n, r, i) {
    if (Ue(n)) {
        var o = !0;
        mo(t)
    } else o = !1;
    if (nr(t, i), t.stateNode === null) Zi(e, t), yd(t, n, r), pa(t, n, r, i), r = !0;
    else if (e === null) {
        var l = t.stateNode,
            a = t.memoizedProps;
        l.props = a;
        var u = l.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? s = be(s) : (s = Ue(n) ? xn : Ne.current, s = ar(t, s));
        var c = n.getDerivedStateFromProps,
            m = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== r || u !== s) && Hs(t, l, r, s), Vt = !1;
        var h = t.memoizedState;
        l.state = h, wo(t, r, l, i), u = t.memoizedState, a !== r || h !== u || Fe.current || Vt ? (typeof c == "function" && (da(t, n, c, r), u = t.memoizedState), (a = Vt || Bs(t, n, a, r, h, u, s)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = s, r = a) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        l = t.stateNode, qf(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : rt(t.type, a), l.props = s, m = t.pendingProps, h = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = be(u) : (u = Ue(n) ? xn : Ne.current, u = ar(t, u));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (a !== m || h !== u) && Hs(t, l, r, u), Vt = !1, h = t.memoizedState, l.state = h, wo(t, r, l, i);
        var S = t.memoizedState;
        a !== m || h !== S || Fe.current || Vt ? (typeof y == "function" && (da(t, n, y, r), S = t.memoizedState), (s = Vt || Bs(t, n, s, r, h, S, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, S, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, S, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), l.props = r, l.state = S, l.context = u, r = s) : (typeof l.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ga(e, t, n, r, o, i)
}

function ga(e, t, n, r, i, o) {
    Td(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && Ds(t, n, !1), At(e, t, o);
    r = t.stateNode, Bm.current = t;
    var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = sr(t, e.child, null, o), t.child = sr(t, null, a, o)) : Oe(e, t, a, o), t.memoizedState = r.state, i && Ds(t, n, !0), t.child
}

function kd(e) {
    var t = e.stateNode;
    t.pendingContext ? Os(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Os(e, t.context, !1), hu(e, t.containerInfo)
}

function Gs(e, t, n, r, i) {
    return ur(), uu(i), t.flags |= 256, Oe(e, t, n, r), t.child
}
var va = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ya(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Cd(e, t, n) {
    var r = t.pendingProps,
        i = ue.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        a;
    if ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), b(ue, i & 1), e === null) return ca(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = {
        mode: "hidden",
        children: l
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = Vo(l, r, 0, null), e = Tn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ya(n), t.memoizedState = va, e) : _u(t, l));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Hm(e, t, l, r, a, i, n);
    if (o) {
        o = r.fallback, l = t.mode, i = e.child, a = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = on(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = on(a, o) : (o = Tn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? ya(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = va, r
    }
    return o = e.child, e = o.sibling, r = on(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function _u(e, t) {
    return t = Vo({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ui(e, t, n, r) {
    return r !== null && uu(r), sr(t, e.child, null, n), e = _u(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Hm(e, t, n, r, i, o, l) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Pl(Error(k(422))), Ui(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Vo({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = Tn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && sr(t, e.child, null, l), t.child.memoizedState = ya(l), t.memoizedState = va, o);
    if (!(t.mode & 1)) return Ui(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(k(419)), r = Pl(o, r, void 0), Ui(e, t, l, r)
    }
    if (a = (l & e.childLanes) !== 0, ze || a) {
        if (r = Te, r !== null) {
            switch (l & -l) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Mt(e, i), st(r, e, i, -1))
        }
        return Ru(), r = Pl(Error(k(421))), Ui(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = eg.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ve = en(i.nextSibling), We = t, ie = !0, lt = null, e !== null && (Xe[Je++] = Rt, Xe[Je++] = Lt, Xe[Je++] = Pn, Rt = e.id, Lt = e.overflow, Pn = t), t = _u(t, r.children), t.flags |= 4096, t)
}

function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), fa(e.return, t, n)
}

function Rl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function xd(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (Oe(e, t, r.children, n), r = ue.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
            else if (e.tag === 19) Xs(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (b(ue, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Eo(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Rl(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Eo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Rl(t, !0, n, null, o);
            break;
        case "together":
            Rl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Zi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function At(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function $m(e, t, n) {
    switch (t.tag) {
        case 3:
            kd(t), ur();
            break;
        case 5:
            Zf(t);
            break;
        case 1:
            Ue(t.type) && mo(t);
            break;
        case 4:
            hu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            b(yo, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (b(ue, ue.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Cd(e, t, n) : (b(ue, ue.current & 1), e = At(e, t, n), e !== null ? e.sibling : null);
            b(ue, ue.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return xd(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), b(ue, ue.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, _d(e, t, n)
    }
    return At(e, t, n)
}
var Pd, Sa, Rd, Ld;
Pd = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Sa = function() {};
Rd = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Sn(vt.current);
        var o = null;
        switch (n) {
            case "input":
                i = Hl(e, i), r = Hl(e, r), o = [];
                break;
            case "select":
                i = ce({}, i, {
                    value: void 0
                }), r = ce({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = Wl(e, i), r = Wl(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = po)
        }
        Yl(n, r);
        var l;
        n = null;
        for (s in i)
            if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
                if (s === "style") {
                    var a = i[s];
                    for (l in a) a.hasOwnProperty(l) && (n || (n = {}), n[l] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Jr.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (a = i != null ? i[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null))
                if (s === "style")
                    if (a) {
                        for (l in a) !a.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                        for (l in u) u.hasOwnProperty(l) && a[l] !== u[l] && (n || (n = {}), n[l] = u[l])
                    } else n || (o || (o = []), o.push(s, n)), n = u;
            else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (o = o || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Jr.hasOwnProperty(s) ? (u != null && s === "onScroll" && ee("scroll", e), o || a === u || (o = [])) : (o = o || []).push(s, u))
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
Ld = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Rr(e, t) {
    if (!ie) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Vm(e, t, n) {
    var r = t.pendingProps;
    switch (au(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Re(t), null;
        case 1:
            return Ue(t.type) && ho(), Re(t), null;
        case 3:
            return r = t.stateNode, cr(), te(Fe), te(Ne), gu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (Pa(lt), lt = null))), Sa(e, t), Re(t), null;
        case 5:
            mu(t);
            var i = Sn(ui.current);
            if (n = t.type, e !== null && t.stateNode != null) Rd(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return Re(t), null
                }
                if (e = Sn(vt.current), zi(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[mt] = t, r[li] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ee("cancel", r), ee("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ee("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Ur.length; i++) ee(Ur[i], r);
                            break;
                        case "source":
                            ee("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ee("error", r), ee("load", r);
                            break;
                        case "details":
                            ee("toggle", r);
                            break;
                        case "input":
                            is(r, o), ee("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, ee("invalid", r);
                            break;
                        case "textarea":
                            ls(r, o), ee("invalid", r)
                    }
                    Yl(n, o), i = null;
                    for (var l in o)
                        if (o.hasOwnProperty(l)) {
                            var a = o[l];
                            l === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ji(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ji(r.textContent, a, e), i = ["children", "" + a]) : Jr.hasOwnProperty(l) && a != null && l === "onScroll" && ee("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Ri(r), os(r, o, !0);
                            break;
                        case "textarea":
                            Ri(r), as(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = po)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = nf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                        is: r.is
                    }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[mt] = t, e[li] = r, Pd(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (l = Kl(n, r), n) {
                            case "dialog":
                                ee("cancel", e), ee("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ee("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Ur.length; i++) ee(Ur[i], e);
                                i = r;
                                break;
                            case "source":
                                ee("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ee("error", e), ee("load", e), i = r;
                                break;
                            case "details":
                                ee("toggle", e), i = r;
                                break;
                            case "input":
                                is(e, r), i = Hl(e, r), ee("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = ce({}, r, {
                                    value: void 0
                                }), ee("invalid", e);
                                break;
                            case "textarea":
                                ls(e, r), i = Wl(e, r), ee("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Yl(n, i),
                        a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style" ? lf(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && rf(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && qr(e, u) : typeof u == "number" && qr(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Jr.hasOwnProperty(o) ? u != null && o === "onScroll" && ee("scroll", e) : u != null && Ya(e, o, u, l))
                            }
                        switch (n) {
                            case "input":
                                Ri(e), os(e, r, !1);
                                break;
                            case "textarea":
                                Ri(e), as(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ln(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Zn(e, !!r.multiple, o, !1) : r.defaultValue != null && Zn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = po)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) Ld(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
                if (n = Sn(ui.current), Sn(vt.current), zi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (o = r.nodeValue !== n) && (e = We, e !== null)) switch (e.tag) {
                        case 3:
                            ji(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ji(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r
            }
            return Re(t), null;
        case 13:
            if (te(ue), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ie && Ve !== null && t.mode & 1 && !(t.flags & 128)) Kf(), ur(), t.flags |= 98560, o = !1;
                else if (o = zi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(k(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
                        o[mt] = t
                    } else ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Re(t), o = !1
                } else lt !== null && (Pa(lt), lt = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ue.current & 1 ? we === 0 && (we = 3) : Ru())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
        case 4:
            return cr(), Sa(e, t), e === null && ii(t.stateNode.containerInfo), Re(t), null;
        case 10:
            return fu(t.type._context), Re(t), null;
        case 17:
            return Ue(t.type) && ho(), Re(t), null;
        case 19:
            if (te(ue), o = t.memoizedState, o === null) return Re(t), null;
            if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
                if (r) Rr(o, !1);
                else {
                    if (we !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (l = Eo(e), l !== null) {
                                for (t.flags |= 128, Rr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return b(ue, ue.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && ge() > dr && (t.flags |= 128, r = !0, Rr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Eo(l), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Rr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !ie) return Re(t), null
                    } else 2 * ge() - o.renderingStartTime > dr && n !== 1073741824 && (t.flags |= 128, r = !0, Rr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ge(), t.sibling = null, n = ue.current, b(ue, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
        case 22:
        case 23:
            return Pu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(k(156, t.tag))
}

function Wm(e, t) {
    switch (au(t), t.tag) {
        case 1:
            return Ue(t.type) && ho(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return cr(), te(Fe), te(Ne), gu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return mu(t), null;
        case 13:
            if (te(ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(k(340));
                ur()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return te(ue), null;
        case 4:
            return cr(), null;
        case 10:
            return fu(t.type._context), null;
        case 22:
        case 23:
            return Pu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Bi = !1,
    Le = !1,
    Qm = typeof WeakSet == "function" ? WeakSet : Set,
    D = null;

function Kn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            de(e, t, r)
        } else n.current = null
}

function wa(e, t, n) {
    try {
        n()
    } catch (r) {
        de(e, t, r)
    }
}
var Js = !1;

function Ym(e, t) {
    if (ra = so, e = Af(), ou(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var l = 0,
                    a = -1,
                    u = -1,
                    s = 0,
                    c = 0,
                    m = e,
                    h = null;
                t: for (;;) {
                    for (var y; m !== n || i !== 0 && m.nodeType !== 3 || (a = l + i), m !== o || r !== 0 && m.nodeType !== 3 || (u = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (y = m.firstChild) !== null;) h = m, m = y;
                    for (;;) {
                        if (m === e) break t;
                        if (h === n && ++s === i && (a = l), h === o && ++c === r && (u = l), (y = m.nextSibling) !== null) break;
                        m = h, h = m.parentNode
                    }
                    m = y
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ia = {
            focusedElem: e,
            selectionRange: n
        }, so = !1, D = t; D !== null;)
        if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, D = e;
        else
            for (; D !== null;) {
                t = D;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var w = S.memoizedProps,
                                    P = S.memoizedState,
                                    p = t.stateNode,
                                    d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? w : rt(t.type, w), P);
                                p.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                    }
                } catch (f) {
                    de(t, t.return, f)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, D = e;
                    break
                }
                D = t.return
            }
    return S = Js, Js = !1, S
}

function Yr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && wa(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Ho(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ea(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Nd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Nd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[li], delete t[aa], delete t[Rm], delete t[Lm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Od(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function qs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Od(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function _a(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = po));
    else if (r !== 4 && (e = e.child, e !== null))
        for (_a(e, t, n), e = e.sibling; e !== null;) _a(e, t, n), e = e.sibling
}

function Ta(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ta(e, t, n), e = e.sibling; e !== null;) Ta(e, t, n), e = e.sibling
}
var ke = null,
    it = !1;

function Ht(e, t, n) {
    for (n = n.child; n !== null;) Dd(e, t, n), n = n.sibling
}

function Dd(e, t, n) {
    if (gt && typeof gt.onCommitFiberUnmount == "function") try {
        gt.onCommitFiberUnmount(Mo, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Le || Kn(n, t);
        case 6:
            var r = ke,
                i = it;
            ke = null, Ht(e, t, n), ke = r, it = i, ke !== null && (it ? (e = ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
            break;
        case 18:
            ke !== null && (it ? (e = ke, n = n.stateNode, e.nodeType === 8 ? El(e.parentNode, n) : e.nodeType === 1 && El(e, n), ti(e)) : El(ke, n.stateNode));
            break;
        case 4:
            r = ke, i = it, ke = n.stateNode.containerInfo, it = !0, Ht(e, t, n), ke = r, it = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        l = o.destroy;
                    o = o.tag, l !== void 0 && (o & 2 || o & 4) && wa(n, t, l), i = i.next
                } while (i !== r)
            }
            Ht(e, t, n);
            break;
        case 1:
            if (!Le && (Kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                de(n, t, a)
            }
            Ht(e, t, n);
            break;
        case 21:
            Ht(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, Ht(e, t, n), Le = r) : Ht(e, t, n);
            break;
        default:
            Ht(e, t, n)
    }
}

function Zs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Qm), t.forEach(function(r) {
            var i = tg.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function nt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    l = t,
                    a = l;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ke = a.stateNode, it = !1;
                            break e;
                        case 3:
                            ke = a.stateNode.containerInfo, it = !0;
                            break e;
                        case 4:
                            ke = a.stateNode.containerInfo, it = !0;
                            break e
                    }
                    a = a.return
                }
                if (ke === null) throw Error(k(160));
                Dd(o, l, i), ke = null, it = !1;
                var u = i.alternate;
                u !== null && (u.return = null), i.return = null
            } catch (s) {
                de(i, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Md(t, e), t = t.sibling
}

function Md(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (nt(t, e), pt(e), r & 4) {
                try {
                    Yr(3, e, e.return), Ho(3, e)
                } catch (w) {
                    de(e, e.return, w)
                }
                try {
                    Yr(5, e, e.return)
                } catch (w) {
                    de(e, e.return, w)
                }
            }
            break;
        case 1:
            nt(t, e), pt(e), r & 512 && n !== null && Kn(n, n.return);
            break;
        case 5:
            if (nt(t, e), pt(e), r & 512 && n !== null && Kn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    qr(i, "")
                } catch (w) {
                    de(e, e.return, w)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && ef(i, o), Kl(a, l);
                    var s = Kl(a, o);
                    for (l = 0; l < u.length; l += 2) {
                        var c = u[l],
                            m = u[l + 1];
                        c === "style" ? lf(i, m) : c === "dangerouslySetInnerHTML" ? rf(i, m) : c === "children" ? qr(i, m) : Ya(i, c, m, s)
                    }
                    switch (a) {
                        case "input":
                            $l(i, o);
                            break;
                        case "textarea":
                            tf(i, o);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var y = o.value;
                            y != null ? Zn(i, !!o.multiple, y, !1) : h !== !!o.multiple && (o.defaultValue != null ? Zn(i, !!o.multiple, o.defaultValue, !0) : Zn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[li] = o
                } catch (w) {
                    de(e, e.return, w)
                }
            }
            break;
        case 6:
            if (nt(t, e), pt(e), r & 4) {
                if (e.stateNode === null) throw Error(k(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (w) {
                    de(e, e.return, w)
                }
            }
            break;
        case 3:
            if (nt(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ti(t.containerInfo)
            } catch (w) {
                de(e, e.return, w)
            }
            break;
        case 4:
            nt(t, e), pt(e);
            break;
        case 13:
            nt(t, e), pt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Cu = ge())), r & 4 && Zs(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (s = Le) || c, nt(t, e), Le = s) : nt(t, e), pt(e), r & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1)
                    for (D = e, c = e.child; c !== null;) {
                        for (m = D = c; D !== null;) {
                            switch (h = D, y = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Yr(4, h, h.return);
                                    break;
                                case 1:
                                    Kn(h, h.return);
                                    var S = h.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                        } catch (w) {
                                            de(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Kn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        ec(m);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h, D = y) : ec(m)
                        }
                        c = c.sibling
                    }
                e: for (c = null, m = e;;) {
                    if (m.tag === 5) {
                        if (c === null) {
                            c = m;
                            try {
                                i = m.stateNode, s ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = m.stateNode, u = m.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = of ("display", l))
                            } catch (w) {
                                de(e, e.return, w)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (c === null) try {
                            m.stateNode.nodeValue = s ? "" : m.memoizedProps
                        } catch (w) {
                            de(e, e.return, w)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        c === m && (c = null), m = m.return
                    }
                    c === m && (c = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            nt(t, e), pt(e), r & 4 && Zs(e);
            break;
        case 21:
            break;
        default:
            nt(t, e), pt(e)
    }
}

function pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Od(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (qr(i, ""), r.flags &= -33);
                    var o = qs(e);
                    Ta(e, o, i);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        a = qs(e);
                    _a(e, a, l);
                    break;
                default:
                    throw Error(k(161))
            }
        }
        catch (u) {
            de(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Km(e, t, n) {
    D = e, Ad(e)
}

function Ad(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null;) {
        var i = D,
            o = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Bi;
            if (!l) {
                var a = i.alternate,
                    u = a !== null && a.memoizedState !== null || Le;
                a = Bi;
                var s = Le;
                if (Bi = l, (Le = u) && !s)
                    for (D = i; D !== null;) l = D, u = l.child, l.tag === 22 && l.memoizedState !== null ? tc(i) : u !== null ? (u.return = l, D = u) : tc(i);
                for (; o !== null;) D = o, Ad(o), o = o.sibling;
                D = i, Bi = a, Le = s
            }
            bs(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, D = o) : bs(e)
    }
}

function bs(e) {
    for (; D !== null;) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Le || Ho(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Le)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && zs(t, o, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            zs(t, l, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var c = s.memoizedState;
                                if (c !== null) {
                                    var m = c.dehydrated;
                                    m !== null && ti(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                }
                Le || t.flags & 512 && Ea(t)
            } catch (h) {
                de(t, t.return, h)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, D = n;
            break
        }
        D = t.return
    }
}

function ec(e) {
    for (; D !== null;) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, D = n;
            break
        }
        D = t.return
    }
}

function tc(e) {
    for (; D !== null;) {
        var t = D;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ho(4, t)
                    } catch (u) {
                        de(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            de(t, i, u)
                        }
                    }
                    var o = t.return;
                    try {
                        Ea(t)
                    } catch (u) {
                        de(t, o, u)
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        Ea(t)
                    } catch (u) {
                        de(t, l, u)
                    }
            }
        } catch (u) {
            de(t, t.return, u)
        }
        if (t === e) {
            D = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, D = a;
            break
        }
        D = t.return
    }
}
var Gm = Math.ceil,
    ko = It.ReactCurrentDispatcher,
    Tu = It.ReactCurrentOwner,
    Ze = It.ReactCurrentBatchConfig,
    Y = 0,
    Te = null,
    ve = null,
    Ce = 0,
    $e = 0,
    Gn = sn(0),
    we = 0,
    di = null,
    Ln = 0,
    $o = 0,
    ku = 0,
    Kr = null,
    je = null,
    Cu = 0,
    dr = 1 / 0,
    Ct = null,
    Co = !1,
    ka = null,
    nn = null,
    Hi = !1,
    Gt = null,
    xo = 0,
    Gr = 0,
    Ca = null,
    bi = -1,
    eo = 0;

function De() {
    return Y & 6 ? ge() : bi !== -1 ? bi : bi = ge()
}

function rn(e) {
    return e.mode & 1 ? Y & 2 && Ce !== 0 ? Ce & -Ce : Om.transition !== null ? (eo === 0 && (eo = yf()), eo) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Cf(e.type)), e) : 1
}

function st(e, t, n, r) {
    if (50 < Gr) throw Gr = 0, Ca = null, Error(k(185));
    gi(e, n, r), (!(Y & 2) || e !== Te) && (e === Te && (!(Y & 2) && ($o |= n), we === 4 && Yt(e, Ce)), Be(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (dr = ge() + 500, Fo && cn()))
}

function Be(e, t) {
    var n = e.callbackNode;
    Oh(e, t);
    var r = uo(e, e === Te ? Ce : 0);
    if (r === 0) n !== null && cs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && cs(n), t === 1) e.tag === 0 ? Nm(nc.bind(null, e)) : Wf(nc.bind(null, e)), xm(function() {
            !(Y & 6) && cn()
        }), n = null;
        else {
            switch (Sf(r)) {
                case 1:
                    n = qa;
                    break;
                case 4:
                    n = gf;
                    break;
                case 16:
                    n = ao;
                    break;
                case 536870912:
                    n = vf;
                    break;
                default:
                    n = ao
            }
            n = $d(n, Id.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Id(e, t) {
    if (bi = -1, eo = 0, Y & 6) throw Error(k(327));
    var n = e.callbackNode;
    if (rr() && e.callbackNode !== n) return null;
    var r = uo(e, e === Te ? Ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Po(e, r);
    else {
        t = r;
        var i = Y;
        Y |= 2;
        var o = zd();
        (Te !== e || Ce !== t) && (Ct = null, dr = ge() + 500, _n(e, t));
        do try {
            qm();
            break
        } catch (a) {
            jd(e, a)
        }
        while (1);
        cu(), ko.current = o, Y = i, ve !== null ? t = 0 : (Te = null, Ce = 0, t = we)
    }
    if (t !== 0) {
        if (t === 2 && (i = Zl(e), i !== 0 && (r = i, t = xa(e, i))), t === 1) throw n = di, _n(e, 0), Yt(e, r), Be(e, ge()), n;
        if (t === 6) Yt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !Xm(i) && (t = Po(e, r), t === 2 && (o = Zl(e), o !== 0 && (r = o, t = xa(e, o))), t === 1)) throw n = di, _n(e, 0), Yt(e, r), Be(e, ge()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    gn(e, je, Ct);
                    break;
                case 3:
                    if (Yt(e, r), (r & 130023424) === r && (t = Cu + 500 - ge(), 10 < t)) {
                        if (uo(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            De(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = la(gn.bind(null, e, je, Ct), t);
                        break
                    }
                    gn(e, je, Ct);
                    break;
                case 4:
                    if (Yt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var l = 31 - ut(r);
                        o = 1 << l, l = t[l], l > i && (i = l), r &= ~o
                    }
                    if (r = i, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = la(gn.bind(null, e, je, Ct), r);
                        break
                    }
                    gn(e, je, Ct);
                    break;
                case 5:
                    gn(e, je, Ct);
                    break;
                default:
                    throw Error(k(329))
            }
        }
    }
    return Be(e, ge()), e.callbackNode === n ? Id.bind(null, e) : null
}

function xa(e, t) {
    var n = Kr;
    return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256), e = Po(e, t), e !== 2 && (t = je, je = n, t !== null && Pa(t)), e
}

function Pa(e) {
    je === null ? je = e : je.push.apply(je, e)
}

function Xm(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!ft(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Yt(e, t) {
    for (t &= ~ku, t &= ~$o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - ut(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function nc(e) {
    if (Y & 6) throw Error(k(327));
    rr();
    var t = uo(e, 0);
    if (!(t & 1)) return Be(e, ge()), null;
    var n = Po(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Zl(e);
        r !== 0 && (t = r, n = xa(e, r))
    }
    if (n === 1) throw n = di, _n(e, 0), Yt(e, t), Be(e, ge()), n;
    if (n === 6) throw Error(k(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, gn(e, je, Ct), Be(e, ge()), null
}

function xu(e, t) {
    var n = Y;
    Y |= 1;
    try {
        return e(t)
    } finally {
        Y = n, Y === 0 && (dr = ge() + 500, Fo && cn())
    }
}

function Nn(e) {
    Gt !== null && Gt.tag === 0 && !(Y & 6) && rr();
    var t = Y;
    Y |= 1;
    var n = Ze.transition,
        r = G;
    try {
        if (Ze.transition = null, G = 1, e) return e()
    } finally {
        G = r, Ze.transition = n, Y = t, !(Y & 6) && cn()
    }
}

function Pu() {
    $e = Gn.current, te(Gn)
}

function _n(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Cm(n)), ve !== null)
        for (n = ve.return; n !== null;) {
            var r = n;
            switch (au(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ho();
                    break;
                case 3:
                    cr(), te(Fe), te(Ne), gu();
                    break;
                case 5:
                    mu(r);
                    break;
                case 4:
                    cr();
                    break;
                case 13:
                    te(ue);
                    break;
                case 19:
                    te(ue);
                    break;
                case 10:
                    fu(r.type._context);
                    break;
                case 22:
                case 23:
                    Pu()
            }
            n = n.return
        }
    if (Te = e, ve = e = on(e.current, null), Ce = $e = t, we = 0, di = null, ku = $o = Ln = 0, je = Kr = null, yn !== null) {
        for (t = 0; t < yn.length; t++)
            if (n = yn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var l = o.next;
                    o.next = i, r.next = l
                }
                n.pending = r
            }
        yn = null
    }
    return e
}

function jd(e, t) {
    do {
        var n = ve;
        try {
            if (cu(), Ji.current = To, _o) {
                for (var r = se.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                _o = !1
            }
            if (Rn = 0, _e = Se = se = null, Qr = !1, si = 0, Tu.current = null, n === null || n.return === null) {
                we = 1, di = t, ve = null;
                break
            }
            e: {
                var o = e,
                    l = n.return,
                    a = n,
                    u = t;
                if (t = Ce, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var s = u,
                        c = a,
                        m = c.tag;
                    if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var y = Vs(l);
                    if (y !== null) {
                        y.flags &= -257, Ws(y, l, a, o, t), y.mode & 1 && $s(o, s, t), t = y, u = s;
                        var S = t.updateQueue;
                        if (S === null) {
                            var w = new Set;
                            w.add(u), t.updateQueue = w
                        } else S.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            $s(o, s, t), Ru();
                            break e
                        }
                        u = Error(k(426))
                    }
                } else if (ie && a.mode & 1) {
                    var P = Vs(l);
                    if (P !== null) {
                        !(P.flags & 65536) && (P.flags |= 256), Ws(P, l, a, o, t), uu(fr(u, a));
                        break e
                    }
                }
                o = u = fr(u, a),
                we !== 4 && (we = 2),
                Kr === null ? Kr = [o] : Kr.push(o),
                o = l;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var p = Sd(o, u, t);
                            js(o, p);
                            break e;
                        case 1:
                            a = u;
                            var d = o.type,
                                g = o.stateNode;
                            if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (nn === null || !nn.has(g)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var f = wd(o, a, t);
                                js(o, f);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ud(n)
        } catch (T) {
            t = T, ve === n && n !== null && (ve = n = n.return);
            continue
        }
        break
    } while (1)
}

function zd() {
    var e = ko.current;
    return ko.current = To, e === null ? To : e
}

function Ru() {
    (we === 0 || we === 3 || we === 2) && (we = 4), Te === null || !(Ln & 268435455) && !($o & 268435455) || Yt(Te, Ce)
}

function Po(e, t) {
    var n = Y;
    Y |= 2;
    var r = zd();
    (Te !== e || Ce !== t) && (Ct = null, _n(e, t));
    do try {
        Jm();
        break
    } catch (i) {
        jd(e, i)
    }
    while (1);
    if (cu(), Y = n, ko.current = r, ve !== null) throw Error(k(261));
    return Te = null, Ce = 0, we
}

function Jm() {
    for (; ve !== null;) Fd(ve)
}

function qm() {
    for (; ve !== null && !_h();) Fd(ve)
}

function Fd(e) {
    var t = Hd(e.alternate, e, $e);
    e.memoizedProps = e.pendingProps, t === null ? Ud(e) : ve = t, Tu.current = null
}

function Ud(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Wm(n, t), n !== null) {
                n.flags &= 32767, ve = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                we = 6, ve = null;
                return
            }
        } else if (n = Vm(n, t, $e), n !== null) {
            ve = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ve = t;
            return
        }
        ve = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}

function gn(e, t, n) {
    var r = G,
        i = Ze.transition;
    try {
        Ze.transition = null, G = 1, Zm(e, t, n, r)
    } finally {
        Ze.transition = i, G = r
    }
    return null
}

function Zm(e, t, n, r) {
    do rr(); while (Gt !== null);
    if (Y & 6) throw Error(k(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Dh(e, o), e === Te && (ve = Te = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hi || (Hi = !0, $d(ao, function() {
            return rr(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ze.transition, Ze.transition = null;
        var l = G;
        G = 1;
        var a = Y;
        Y |= 4, Tu.current = null, Ym(e, n), Md(n, e), ym(ia), so = !!ra, ia = ra = null, e.current = n, Km(n), Th(), Y = a, G = l, Ze.transition = o
    } else e.current = n;
    if (Hi && (Hi = !1, Gt = e, xo = i), o = e.pendingLanes, o === 0 && (nn = null), xh(n.stateNode), Be(e, ge()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Co) throw Co = !1, e = ka, ka = null, e;
    return xo & 1 && e.tag !== 0 && rr(), o = e.pendingLanes, o & 1 ? e === Ca ? Gr++ : (Gr = 0, Ca = e) : Gr = 0, cn(), null
}

function rr() {
    if (Gt !== null) {
        var e = Sf(xo),
            t = Ze.transition,
            n = G;
        try {
            if (Ze.transition = null, G = 16 > e ? 16 : e, Gt === null) var r = !1;
            else {
                if (e = Gt, Gt = null, xo = 0, Y & 6) throw Error(k(331));
                var i = Y;
                for (Y |= 4, D = e.current; D !== null;) {
                    var o = D,
                        l = o.child;
                    if (D.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for (D = s; D !== null;) {
                                    var c = D;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Yr(8, c, o)
                                    }
                                    var m = c.child;
                                    if (m !== null) m.return = c, D = m;
                                    else
                                        for (; D !== null;) {
                                            c = D;
                                            var h = c.sibling,
                                                y = c.return;
                                            if (Nd(c), c === s) {
                                                D = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y, D = h;
                                                break
                                            }
                                            D = y
                                        }
                                }
                            }
                            var S = o.alternate;
                            if (S !== null) {
                                var w = S.child;
                                if (w !== null) {
                                    S.child = null;
                                    do {
                                        var P = w.sibling;
                                        w.sibling = null, w = P
                                    } while (w !== null)
                                }
                            }
                            D = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && l !== null) l.return = o, D = l;
                    else e: for (; D !== null;) {
                        if (o = D, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Yr(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, D = p;
                            break e
                        }
                        D = o.return
                    }
                }
                var d = e.current;
                for (D = d; D !== null;) {
                    l = D;
                    var g = l.child;
                    if (l.subtreeFlags & 2064 && g !== null) g.return = l, D = g;
                    else e: for (l = d; D !== null;) {
                        if (a = D, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ho(9, a)
                            }
                        } catch (T) {
                            de(a, a.return, T)
                        }
                        if (a === l) {
                            D = null;
                            break e
                        }
                        var f = a.sibling;
                        if (f !== null) {
                            f.return = a.return, D = f;
                            break e
                        }
                        D = a.return
                    }
                }
                if (Y = i, cn(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
                    gt.onPostCommitFiberRoot(Mo, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            G = n, Ze.transition = t
        }
    }
    return !1
}

function rc(e, t, n) {
    t = fr(n, t), t = Sd(e, t, 1), e = tn(e, t, 1), t = De(), e !== null && (gi(e, 1, t), Be(e, t))
}

function de(e, t, n) {
    if (e.tag === 3) rc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                rc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
                    e = fr(n, e), e = wd(t, e, 1), t = tn(t, e, 1), e = De(), t !== null && (gi(t, 1, e), Be(t, e));
                    break
                }
            }
            t = t.return
        }
}

function bm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = De(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (Ce & n) === n && (we === 4 || we === 3 && (Ce & 130023424) === Ce && 500 > ge() - Cu ? _n(e, 0) : ku |= n), Be(e, t)
}

function Bd(e, t) {
    t === 0 && (e.mode & 1 ? (t = Oi, Oi <<= 1, !(Oi & 130023424) && (Oi = 4194304)) : t = 1);
    var n = De();
    e = Mt(e, t), e !== null && (gi(e, t, n), Be(e, n))
}

function eg(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Bd(e, n)
}

function tg(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314))
    }
    r !== null && r.delete(t), Bd(e, n)
}
var Hd;
Hd = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Fe.current) ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ze = !1, $m(e, t, n);
            ze = !!(e.flags & 131072)
        }
    else ze = !1, ie && t.flags & 1048576 && Qf(t, vo, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Zi(e, t), e = t.pendingProps;
            var i = ar(t, Ne.current);
            nr(t, n), i = yu(null, t, r, e, i, n);
            var o = Su();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (o = !0, mo(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, pu(t), i.updater = Bo, t.stateNode = i, i._reactInternals = t, pa(t, r, e, n), t = ga(null, t, r, !0, o, n)) : (t.tag = 0, ie && o && lu(t), Oe(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Zi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = rg(r), e = rt(r, e), i) {
                    case 0:
                        t = ma(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ks(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Qs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ys(null, t, r, rt(r.type, e), n);
                        break e
                }
                throw Error(k(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : rt(r, i), ma(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : rt(r, i), Ks(e, t, r, i, n);
        case 3:
            e: {
                if (kd(t), e === null) throw Error(k(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                qf(e, t),
                wo(t, r, null, n);
                var l = t.memoizedState;
                if (r = l.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                            transitions: l.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = fr(Error(k(423)), t), t = Gs(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = fr(Error(k(424)), t), t = Gs(e, t, r, n, i);
                    break e
                } else
                    for (Ve = en(t.stateNode.containerInfo.firstChild), We = t, ie = !0, lt = null, n = Xf(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (ur(), r === i) {
                        t = At(e, t, n);
                        break e
                    }
                    Oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Zf(t), e === null && ca(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, oa(r, i) ? l = null : o !== null && oa(r, o) && (t.flags |= 32), Td(e, t), Oe(e, t, l, n), t.child;
        case 6:
            return e === null && ca(t), null;
        case 13:
            return Cd(e, t, n);
        case 4:
            return hu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sr(t, null, r, n) : Oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : rt(r, i), Qs(e, t, r, i, n);
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, b(yo, r._currentValue), r._currentValue = l, o !== null)
                    if (ft(o.value, l)) {
                        if (o.children === i.children && !Fe.current) {
                            t = At(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                l = o.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = Nt(-1, n & -n), u.tag = 2;
                                            var s = o.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var c = s.pending;
                                                c === null ? u.next = u : (u.next = c.next, c.next = u), s.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), fa(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (l = o.return, l === null) throw Error(k(341));
                                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), fa(l, n, t), l = o.sibling
                            } else l = o.child;
                            if (l !== null) l.return = o;
                            else
                                for (l = o; l !== null;) {
                                    if (l === t) {
                                        l = null;
                                        break
                                    }
                                    if (o = l.sibling, o !== null) {
                                        o.return = l.return, l = o;
                                        break
                                    }
                                    l = l.return
                                }
                            o = l
                        }
                Oe(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, nr(t, n), i = be(i), r = r(i), t.flags |= 1, Oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = rt(r, t.pendingProps), i = rt(r.type, i), Ys(e, t, r, i, n);
        case 15:
            return Ed(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : rt(r, i), Zi(e, t), t.tag = 1, Ue(r) ? (e = !0, mo(t)) : e = !1, nr(t, n), yd(t, r, i), pa(t, r, i, n), ga(null, t, r, !0, e, n);
        case 19:
            return xd(e, t, n);
        case 22:
            return _d(e, t, n)
    }
    throw Error(k(156, t.tag))
};

function $d(e, t) {
    return mf(e, t)
}

function ng(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function qe(e, t, n, r) {
    return new ng(e, t, n, r)
}

function Lu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function rg(e) {
    if (typeof e == "function") return Lu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ga) return 11;
        if (e === Xa) return 14
    }
    return 2
}

function on(e, t) {
    var n = e.alternate;
    return n === null ? (n = qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function to(e, t, n, r, i, o) {
    var l = 2;
    if (r = e, typeof e == "function") Lu(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
        case Fn:
            return Tn(n.children, i, o, t);
        case Ka:
            l = 8, i |= 8;
            break;
        case zl:
            return e = qe(12, n, t, i | 2), e.elementType = zl, e.lanes = o, e;
        case Fl:
            return e = qe(13, n, t, i), e.elementType = Fl, e.lanes = o, e;
        case Ul:
            return e = qe(19, n, t, i), e.elementType = Ul, e.lanes = o, e;
        case qc:
            return Vo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Xc:
                    l = 10;
                    break e;
                case Jc:
                    l = 9;
                    break e;
                case Ga:
                    l = 11;
                    break e;
                case Xa:
                    l = 14;
                    break e;
                case $t:
                    l = 16, r = null;
                    break e
            }
            throw Error(k(130, e == null ? e : typeof e, ""))
    }
    return t = qe(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function Tn(e, t, n, r) {
    return e = qe(7, e, r, t), e.lanes = n, e
}

function Vo(e, t, n, r) {
    return e = qe(22, e, r, t), e.elementType = qc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Ll(e, t, n) {
    return e = qe(6, e, null, t), e.lanes = n, e
}

function Nl(e, t, n) {
    return t = qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function ig(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = cl(0), this.expirationTimes = cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Nu(e, t, n, r, i, o, l, a, u) {
    return e = new ig(e, t, n, a, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = qe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, pu(o), e
}

function og(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: zn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Vd(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
        if (Mn(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ue(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ue(n)) return Vf(e, n, t)
    }
    return t
}

function Wd(e, t, n, r, i, o, l, a, u) {
    return e = Nu(n, r, !0, e, i, o, l, a, u), e.context = Vd(null), n = e.current, r = De(), i = rn(n), o = Nt(r, i), o.callback = t ? ? null, tn(n, o, i), e.current.lanes = i, gi(e, i, r), Be(e, r), e
}

function Wo(e, t, n, r) {
    var i = t.current,
        o = De(),
        l = rn(i);
    return n = Vd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, l), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(i, t, l), e !== null && (st(e, i, l, o), Xi(e, i, l)), l
}

function Ro(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function ic(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ou(e, t) {
    ic(e, t), (e = e.alternate) && ic(e, t)
}

function lg() {
    return null
}
var Qd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Du(e) {
    this._internalRoot = e
}
Qo.prototype.render = Du.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Wo(e, t, null, null)
};
Qo.prototype.unmount = Du.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Nn(function() {
            Wo(null, e, null, null)
        }), t[Dt] = null
    }
};

function Qo(e) {
    this._internalRoot = e
}
Qo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = _f();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
        Qt.splice(n, 0, e), n === 0 && kf(e)
    }
};

function Mu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Yo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function oc() {}

function ag(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var s = Ro(l);
                o.call(s)
            }
        }
        var l = Wd(t, r, e, 0, null, !1, !1, "", oc);
        return e._reactRootContainer = l, e[Dt] = l.current, ii(e.nodeType === 8 ? e.parentNode : e), Nn(), l
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var s = Ro(u);
            a.call(s)
        }
    }
    var u = Nu(e, 0, !1, null, null, !1, !1, "", oc);
    return e._reactRootContainer = u, e[Dt] = u.current, ii(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
        Wo(t, u, n, r)
    }), u
}

function Ko(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var l = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var u = Ro(l);
                a.call(u)
            }
        }
        Wo(t, l, e, i)
    } else l = ag(n, t, e, i, r);
    return Ro(l)
}
wf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Fr(t.pendingLanes);
                n !== 0 && (Za(t, n | 1), Be(t, ge()), !(Y & 6) && (dr = ge() + 500, cn()))
            }
            break;
        case 13:
            Nn(function() {
                var r = Mt(e, 1);
                if (r !== null) {
                    var i = De();
                    st(r, e, 1, i)
                }
            }), Ou(e, 1)
    }
};
ba = function(e) {
    if (e.tag === 13) {
        var t = Mt(e, 134217728);
        if (t !== null) {
            var n = De();
            st(t, e, 134217728, n)
        }
        Ou(e, 134217728)
    }
};
Ef = function(e) {
    if (e.tag === 13) {
        var t = rn(e),
            n = Mt(e, t);
        if (n !== null) {
            var r = De();
            st(n, e, t, r)
        }
        Ou(e, t)
    }
};
_f = function() {
    return G
};
Tf = function(e, t) {
    var n = G;
    try {
        return G = e, t()
    } finally {
        G = n
    }
};
Xl = function(e, t, n) {
    switch (t) {
        case "input":
            if ($l(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = zo(r);
                        if (!i) throw Error(k(90));
                        bc(r), $l(r, i)
                    }
                }
            }
            break;
        case "textarea":
            tf(e, n);
            break;
        case "select":
            t = n.value, t != null && Zn(e, !!n.multiple, t, !1)
    }
};
sf = xu;
cf = Nn;
var ug = {
        usingClientEntryPoint: !1,
        Events: [yi, $n, zo, af, uf, xu]
    },
    Lr = {
        findFiberByHostInstance: vn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    sg = {
        bundleType: Lr.bundleType,
        version: Lr.version,
        rendererPackageName: Lr.rendererPackageName,
        rendererConfig: Lr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: It.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = pf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Lr.findFiberByHostInstance || lg,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$i.isDisabled && $i.supportsFiber) try {
        Mo = $i.inject(sg), gt = $i
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug;
Ye.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mu(t)) throw Error(k(200));
    return og(e, t, null, n)
};
Ye.createRoot = function(e, t) {
    if (!Mu(e)) throw Error(k(299));
    var n = !1,
        r = "",
        i = Qd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Nu(e, 1, !1, null, null, n, !1, r, i), e[Dt] = t.current, ii(e.nodeType === 8 ? e.parentNode : e), new Du(t)
};
Ye.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
    return e = pf(t), e = e === null ? null : e.stateNode, e
};
Ye.flushSync = function(e) {
    return Nn(e)
};
Ye.hydrate = function(e, t, n) {
    if (!Yo(t)) throw Error(k(200));
    return Ko(null, e, t, !0, n)
};
Ye.hydrateRoot = function(e, t, n) {
    if (!Mu(e)) throw Error(k(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        l = Qd;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Wd(t, null, e, 1, n ? ? null, i, !1, o, l), e[Dt] = t.current, ii(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Qo(t)
};
Ye.render = function(e, t, n) {
    if (!Yo(t)) throw Error(k(200));
    return Ko(null, e, t, !1, n)
};
Ye.unmountComponentAtNode = function(e) {
    if (!Yo(e)) throw Error(k(40));
    return e._reactRootContainer ? (Nn(function() {
        Ko(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Dt] = null
        })
    }), !0) : !1
};
Ye.unstable_batchedUpdates = xu;
Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Yo(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return Ko(e, t, n, !1, r)
};
Ye.version = "18.3.1-next-f1338f8080-20240426";

function Yd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yd)
    } catch (e) {
        console.error(e)
    }
}
Yd(), Qc.exports = Ye;
var Kd = Qc.exports;
const n0 = pr(Kd);
var lc = Kd;
es.createRoot = lc.createRoot, es.hydrateRoot = lc.hydrateRoot;
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ae() {
    return ae = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ae.apply(this, arguments)
}
var he;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(he || (he = {}));
const ac = "popstate";

function cg(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: o,
            search: l,
            hash: a
        } = r.location;
        return pi("", {
            pathname: o,
            search: l,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : wi(i)
    }
    return dg(t, n, null, e)
}

function W(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function On(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function fg() {
    return Math.random().toString(36).substr(2, 8)
}

function uc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function pi(e, t, n, r) {
    return n === void 0 && (n = null), ae({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? jt(t) : t, {
        state: n,
        key: t && t.key || r || fg()
    })
}

function wi(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function jt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function dg(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: o = !1
    } = r, l = i.history, a = he.Pop, u = null, s = c();
    s == null && (s = 0, l.replaceState(ae({}, l.state, {
        idx: s
    }), ""));

    function c() {
        return (l.state || {
            idx: null
        }).idx
    }

    function m() {
        a = he.Pop;
        let P = c(),
            p = P == null ? null : P - s;
        s = P, u && u({
            action: a,
            location: w.location,
            delta: p
        })
    }

    function h(P, p) {
        a = he.Push;
        let d = pi(w.location, P, p);
        n && n(d, P), s = c() + 1;
        let g = uc(d, s),
            f = w.createHref(d);
        try {
            l.pushState(g, "", f)
        } catch (T) {
            if (T instanceof DOMException && T.name === "DataCloneError") throw T;
            i.location.assign(f)
        }
        o && u && u({
            action: a,
            location: w.location,
            delta: 1
        })
    }

    function y(P, p) {
        a = he.Replace;
        let d = pi(w.location, P, p);
        n && n(d, P), s = c();
        let g = uc(d, s),
            f = w.createHref(d);
        l.replaceState(g, "", f), o && u && u({
            action: a,
            location: w.location,
            delta: 0
        })
    }

    function S(P) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
            d = typeof P == "string" ? P : wi(P);
        return W(p, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, p)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(i, l)
        },
        listen(P) {
            if (u) throw new Error("A history only accepts one active listener");
            return i.addEventListener(ac, m), u = P, () => {
                i.removeEventListener(ac, m), u = null
            }
        },
        createHref(P) {
            return t(i, P)
        },
        createURL: S,
        encodeLocation(P) {
            let p = S(P);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: h,
        replace: y,
        go(P) {
            return l.go(P)
        }
    };
    return w
}
var me;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(me || (me = {}));
const pg = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function hg(e) {
    return e.index === !0
}

function Ra(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((i, o) => {
        let l = [...n, o],
            a = typeof i.id == "string" ? i.id : l.join("-");
        if (W(i.index !== !0 || !i.children, "Cannot specify children on an index route"), W(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), hg(i)) {
            let u = ae({}, i, t(i), {
                id: a
            });
            return r[a] = u, u
        } else {
            let u = ae({}, i, t(i), {
                id: a,
                children: void 0
            });
            return r[a] = u, i.children && (u.children = Ra(i.children, t, l, r)), u
        }
    })
}

function Xn(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? jt(t) : t,
        i = Ei(r.pathname || "/", n);
    if (i == null) return null;
    let o = Gd(e);
    gg(o);
    let l = null;
    for (let a = 0; l == null && a < o.length; ++a) l = Cg(o[a], Rg(i));
    return l
}

function mg(e, t) {
    let {
        route: n,
        pathname: r,
        params: i
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        handle: n.handle
    }
}

function Gd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (o, l, a) => {
        let u = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: l,
            route: o
        };
        u.relativePath.startsWith("/") && (W(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
        let s = kn([r, u.relativePath]),
            c = n.concat(u);
        o.children && o.children.length > 0 && (W(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), Gd(o.children, t, c, s)), !(o.path == null && !o.index) && t.push({
            path: s,
            score: Tg(s, o.index),
            routesMeta: c
        })
    };
    return e.forEach((o, l) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
        else
            for (let u of Xd(o.path)) i(o, l, u)
    }), t
}

function Xd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let l = Xd(r.join("/")),
        a = [];
    return a.push(...l.map(u => u === "" ? o : [o, u].join("/"))), i && a.push(...l), a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function gg(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : kg(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const vg = /^:\w+$/,
    yg = 3,
    Sg = 2,
    wg = 1,
    Eg = 10,
    _g = -2,
    sc = e => e === "*";

function Tg(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(sc) && (r += _g), t && (r += Sg), n.filter(i => !sc(i)).reduce((i, o) => i + (vg.test(o) ? yg : o === "" ? wg : Eg), r)
}

function kg(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function Cg(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, i = "/", o = [];
    for (let l = 0; l < n.length; ++l) {
        let a = n[l],
            u = l === n.length - 1,
            s = i === "/" ? t : t.slice(i.length) || "/",
            c = xg({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: u
            }, s);
        if (!c) return null;
        Object.assign(r, c.params);
        let m = a.route;
        o.push({
            params: r,
            pathname: kn([i, c.pathname]),
            pathnameBase: Mg(kn([i, c.pathnameBase])),
            route: m
        }), c.pathnameBase !== "/" && (i = kn([i, c.pathnameBase]))
    }
    return o
}

function xg(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Pg(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0],
        l = o.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((s, c, m) => {
            if (c === "*") {
                let h = a[m] || "";
                l = o.slice(0, o.length - h.length).replace(/(.)\/+$/, "$1")
            }
            return s[c] = Lg(a[m] || "", c), s
        }, {}),
        pathname: o,
        pathnameBase: l,
        pattern: e
    }
}

function Pg(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), On(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, a) => (r.push(a), "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function Rg(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return On(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function Lg(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return On(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function Ei(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function Ng(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? jt(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Og(n, t) : t,
        search: Ag(r),
        hash: Ig(i)
    }
}

function Og(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function Ol(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Jd(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Dg(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = jt(e) : (i = ae({}, e), W(!i.pathname || !i.pathname.includes("?"), Ol("?", "pathname", "search", i)), W(!i.pathname || !i.pathname.includes("#"), Ol("#", "pathname", "hash", i)), W(!i.search || !i.search.includes("#"), Ol("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "",
        l = o ? "/" : i.pathname,
        a;
    if (r || l == null) a = n;
    else {
        let m = t.length - 1;
        if (l.startsWith("..")) {
            let h = l.split("/");
            for (; h[0] === "..";) h.shift(), m -= 1;
            i.pathname = h.join("/")
        }
        a = m >= 0 ? t[m] : "/"
    }
    let u = Ng(i, a),
        s = l && l !== "/" && l.endsWith("/"),
        c = (o || l === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u
}
const kn = e => e.join("/").replace(/\/\/+/g, "/"),
    Mg = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Ag = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Ig = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Au {
    constructor(t, n, r, i) {
        i === void 0 && (i = !1), this.status = t, this.statusText = n || "", this.internal = i, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function qd(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Zd = ["post", "put", "patch", "delete"],
    jg = new Set(Zd),
    zg = ["get", ...Zd],
    Fg = new Set(zg),
    Ug = new Set([301, 302, 303, 307, 308]),
    Bg = new Set([307, 308]),
    Dl = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Hg = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Nr = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    bd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    $g = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    ep = "remix-router-transitions";

function Vg(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    W(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let i;
    if (e.mapRouteProperties) i = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let v = e.detectErrorBoundary;
        i = E => ({
            hasErrorBoundary: v(E)
        })
    } else i = $g;
    let o = {},
        l = Ra(e.routes, i, void 0, o),
        a, u = e.basename || "/",
        s = ae({
            v7_normalizeFormMethod: !1,
            v7_prependBasename: !1
        }, e.future),
        c = null,
        m = new Set,
        h = null,
        y = null,
        S = null,
        w = e.hydrationData != null,
        P = Xn(l, e.history.location, u),
        p = null;
    if (P == null) {
        let v = Ge(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: E,
                route: _
            } = vc(l);
        P = E, p = {
            [_.id]: v
        }
    }
    let d = !P.some(v => v.route.lazy) && (!P.some(v => v.route.loader) || e.hydrationData != null),
        g, f = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: P,
            initialized: d,
            navigation: Dl,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || p,
            fetchers: new Map,
            blockers: new Map
        },
        T = he.Pop,
        C = !1,
        x, R = !1,
        Q = new Map,
        j = null,
        Ee = !1,
        He = !1,
        dt = [],
        fn = [],
        fe = new Map,
        zt = 0,
        St = -1,
        L = new Map,
        A = new Set,
        z = new Map,
        K = new Map,
        Z = new Map,
        Ft = !1;

    function wt() {
        if (c = e.history.listen(v => {
                let {
                    action: E,
                    location: _,
                    delta: O
                } = v;
                if (Ft) {
                    Ft = !1;
                    return
                }
                On(Z.size === 0 || O != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let U = Ku({
                    currentLocation: f.location,
                    nextLocation: _,
                    historyAction: E
                });
                if (U && O != null) {
                    Ft = !0, e.history.go(O * -1), ki(U, {
                        state: "blocked",
                        location: _,
                        proceed() {
                            ki(U, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: _
                            }), e.history.go(O)
                        },
                        reset() {
                            let F = new Map(f.blockers);
                            F.set(U, Nr), oe({
                                blockers: F
                            })
                        }
                    });
                    return
                }
                return dn(E, _)
            }), n) {
            ev(t, Q);
            let v = () => tv(t, Q);
            t.addEventListener("pagehide", v), j = () => t.removeEventListener("pagehide", v)
        }
        return f.initialized || dn(he.Pop, f.location), g
    }

    function vr() {
        c && c(), j && j(), m.clear(), x && x.abort(), f.fetchers.forEach((v, E) => Zo(E)), f.blockers.forEach((v, E) => Yu(E))
    }

    function Et(v) {
        return m.add(v), () => m.delete(v)
    }

    function oe(v, E) {
        f = ae({}, f, v), m.forEach(_ => _(f, {
            unstable_viewTransitionOpts: E
        }))
    }

    function yr(v, E) {
        var _, O;
        let U = f.actionData != null && f.navigation.formMethod != null && ot(f.navigation.formMethod) && f.navigation.state === "loading" && ((_ = v.state) == null ? void 0 : _._isRedirect) !== !0,
            F;
        E.actionData ? Object.keys(E.actionData).length > 0 ? F = E.actionData : F = null : U ? F = f.actionData : F = null;
        let H = E.loaderData ? gc(f.loaderData, E.loaderData, E.matches || [], E.errors) : f.loaderData,
            I = f.blockers;
        I.size > 0 && (I = new Map(I), I.forEach((le, V) => I.set(V, Nr)));
        let M = C === !0 || f.navigation.formMethod != null && ot(f.navigation.formMethod) && ((O = v.state) == null ? void 0 : O._isRedirect) !== !0;
        a && (l = a, a = void 0), Ee || T === he.Pop || (T === he.Push ? e.history.push(v, v.state) : T === he.Replace && e.history.replace(v, v.state));
        let J;
        if (T === he.Pop) {
            let le = Q.get(f.location.pathname);
            le && le.has(v.pathname) ? J = {
                currentLocation: f.location,
                nextLocation: v
            } : Q.has(v.pathname) && (J = {
                currentLocation: v,
                nextLocation: f.location
            })
        } else if (R) {
            let le = Q.get(f.location.pathname);
            le ? le.add(v.pathname) : (le = new Set([v.pathname]), Q.set(f.location.pathname, le)), J = {
                currentLocation: f.location,
                nextLocation: v
            }
        }
        oe(ae({}, E, {
            actionData: F,
            loaderData: H,
            historyAction: T,
            location: v,
            initialized: !0,
            navigation: Dl,
            revalidation: "idle",
            restoreScrollPosition: Xu(v, E.matches || f.matches),
            preventScrollReset: M,
            blockers: I
        }), J), T = he.Pop, C = !1, R = !1, Ee = !1, He = !1, dt = [], fn = []
    }
    async function Bu(v, E) {
        if (typeof v == "number") {
            e.history.go(v);
            return
        }
        let _ = La(f.location, f.matches, u, s.v7_prependBasename, v, E == null ? void 0 : E.fromRouteId, E == null ? void 0 : E.relative),
            {
                path: O,
                submission: U,
                error: F
            } = cc(s.v7_normalizeFormMethod, !1, _, E),
            H = f.location,
            I = pi(f.location, O, E && E.state);
        I = ae({}, I, e.history.encodeLocation(I));
        let M = E && E.replace != null ? E.replace : void 0,
            J = he.Push;
        M === !0 ? J = he.Replace : M === !1 || U != null && ot(U.formMethod) && U.formAction === f.location.pathname + f.location.search && (J = he.Replace);
        let le = E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
            V = Ku({
                currentLocation: H,
                nextLocation: I,
                historyAction: J
            });
        if (V) {
            ki(V, {
                state: "blocked",
                location: I,
                proceed() {
                    ki(V, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: I
                    }), Bu(v, E)
                },
                reset() {
                    let q = new Map(f.blockers);
                    q.set(V, Nr), oe({
                        blockers: q
                    })
                }
            });
            return
        }
        return await dn(J, I, {
            submission: U,
            pendingError: F,
            preventScrollReset: le,
            replace: E && E.replace,
            enableViewTransition: E && E.unstable_viewTransition
        })
    }

    function xp() {
        if (qo(), oe({
                revalidation: "loading"
            }), f.navigation.state !== "submitting") {
            if (f.navigation.state === "idle") {
                dn(f.historyAction, f.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            dn(T || f.historyAction, f.navigation.location, {
                overrideNavigation: f.navigation
            })
        }
    }
    async function dn(v, E, _) {
        x && x.abort(), x = null, T = v, Ee = (_ && _.startUninterruptedRevalidation) === !0, Ap(f.location, f.matches), C = (_ && _.preventScrollReset) === !0, R = (_ && _.enableViewTransition) === !0;
        let O = a || l,
            U = _ && _.overrideNavigation,
            F = Xn(O, E, u);
        if (!F) {
            let q = Ge(404, {
                    pathname: E.pathname
                }),
                {
                    matches: pe,
                    route: pn
                } = vc(O);
            bo(), yr(E, {
                matches: pe,
                loaderData: {},
                errors: {
                    [pn.id]: q
                }
            });
            return
        }
        if (f.initialized && !He && Gg(f.location, E) && !(_ && _.submission && ot(_.submission.formMethod))) {
            yr(E, {
                matches: F
            });
            return
        }
        x = new AbortController;
        let H = Dr(e.history, E, x.signal, _ && _.submission),
            I, M;
        if (_ && _.pendingError) M = {
            [Jn(F).route.id]: _.pendingError
        };
        else if (_ && _.submission && ot(_.submission.formMethod)) {
            let q = await Pp(H, E, _.submission, F, {
                replace: _.replace
            });
            if (q.shortCircuited) return;
            I = q.pendingActionData, M = q.pendingActionError, U = Ml(E, _.submission), H = new Request(H.url, {
                signal: H.signal
            })
        }
        let {
            shortCircuited: J,
            loaderData: le,
            errors: V
        } = await Rp(H, E, F, U, _ && _.submission, _ && _.fetcherSubmission, _ && _.replace, I, M);
        J || (x = null, yr(E, ae({
            matches: F
        }, I ? {
            actionData: I
        } : {}, {
            loaderData: le,
            errors: V
        })))
    }
    async function Pp(v, E, _, O, U) {
        U === void 0 && (U = {}), qo();
        let F = Zg(E, _);
        oe({
            navigation: F
        });
        let H, I = Oa(O, E);
        if (!I.route.action && !I.route.lazy) H = {
            type: me.error,
            error: Ge(405, {
                method: v.method,
                pathname: E.pathname,
                routeId: I.route.id
            })
        };
        else if (H = await Or("action", v, I, O, o, i, u), v.signal.aborted) return {
            shortCircuited: !0
        };
        if (ir(H)) {
            let M;
            return U && U.replace != null ? M = U.replace : M = H.location === f.location.pathname + f.location.search, await Sr(f, H, {
                submission: _,
                replace: M
            }), {
                shortCircuited: !0
            }
        }
        if (Xr(H)) {
            let M = Jn(O, I.route.id);
            return (U && U.replace) !== !0 && (T = he.Push), {
                pendingActionData: {},
                pendingActionError: {
                    [M.route.id]: H.error
                }
            }
        }
        if (wn(H)) throw Ge(400, {
            type: "defer-action"
        });
        return {
            pendingActionData: {
                [I.route.id]: H.data
            }
        }
    }
    async function Rp(v, E, _, O, U, F, H, I, M) {
        let J = O || Ml(E, U),
            le = U || F || wc(J),
            V = a || l,
            [q, pe] = fc(e.history, f, _, le, E, He, dt, fn, z, A, V, u, I, M);
        if (bo(X => !(_ && _.some(tt => tt.route.id === X)) || q && q.some(tt => tt.route.id === X)), St = ++zt, q.length === 0 && pe.length === 0) {
            let X = Wu();
            return yr(E, ae({
                matches: _,
                loaderData: {},
                errors: M || null
            }, I ? {
                actionData: I
            } : {}, X ? {
                fetchers: new Map(f.fetchers)
            } : {})), {
                shortCircuited: !0
            }
        }
        if (!Ee) {
            pe.forEach(tt => {
                let Bt = f.fetchers.get(tt.key),
                    il = Mr(void 0, Bt ? Bt.data : void 0);
                f.fetchers.set(tt.key, il)
            });
            let X = I || f.actionData;
            oe(ae({
                navigation: J
            }, X ? Object.keys(X).length === 0 ? {
                actionData: null
            } : {
                actionData: X
            } : {}, pe.length > 0 ? {
                fetchers: new Map(f.fetchers)
            } : {}))
        }
        pe.forEach(X => {
            fe.has(X.key) && Ut(X.key), X.controller && fe.set(X.key, X.controller)
        });
        let pn = () => pe.forEach(X => Ut(X.key));
        x && x.signal.addEventListener("abort", pn);
        let {
            results: hn,
            loaderResults: wr,
            fetcherResults: el
        } = await $u(f.matches, _, q, pe, v);
        if (v.signal.aborted) return {
            shortCircuited: !0
        };
        x && x.signal.removeEventListener("abort", pn), pe.forEach(X => fe.delete(X.key));
        let _t = yc(hn);
        if (_t) {
            if (_t.idx >= q.length) {
                let X = pe[_t.idx - q.length].key;
                A.add(X)
            }
            return await Sr(f, _t.result, {
                replace: H
            }), {
                shortCircuited: !0
            }
        }
        let {
            loaderData: Tt,
            errors: Ci
        } = mc(f, _, q, wr, M, pe, el, K);
        K.forEach((X, tt) => {
            X.subscribe(Bt => {
                (Bt || X.done) && K.delete(tt)
            })
        });
        let tl = Wu(),
            nl = Qu(St),
            rl = tl || nl || pe.length > 0;
        return ae({
            loaderData: Tt,
            errors: Ci
        }, rl ? {
            fetchers: new Map(f.fetchers)
        } : {})
    }

    function Hu(v) {
        return f.fetchers.get(v) || Hg
    }

    function Lp(v, E, _, O) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        fe.has(v) && Ut(v);
        let U = a || l,
            F = La(f.location, f.matches, u, s.v7_prependBasename, _, E, O == null ? void 0 : O.relative),
            H = Xn(U, F, u);
        if (!H) {
            Ti(v, E, Ge(404, {
                pathname: F
            }));
            return
        }
        let {
            path: I,
            submission: M,
            error: J
        } = cc(s.v7_normalizeFormMethod, !0, F, O);
        if (J) {
            Ti(v, E, J);
            return
        }
        let le = Oa(H, I);
        if (C = (O && O.preventScrollReset) === !0, M && ot(M.formMethod)) {
            Np(v, E, I, le, H, M);
            return
        }
        z.set(v, {
            routeId: E,
            path: I
        }), Op(v, E, I, le, H, M)
    }
    async function Np(v, E, _, O, U, F) {
        if (qo(), z.delete(v), !O.route.action && !O.route.lazy) {
            let ye = Ge(405, {
                method: F.formMethod,
                pathname: _,
                routeId: E
            });
            Ti(v, E, ye);
            return
        }
        let H = f.fetchers.get(v),
            I = bg(F, H);
        f.fetchers.set(v, I), oe({
            fetchers: new Map(f.fetchers)
        });
        let M = new AbortController,
            J = Dr(e.history, _, M.signal, F);
        fe.set(v, M);
        let le = zt,
            V = await Or("action", J, O, U, o, i, u);
        if (J.signal.aborted) {
            fe.get(v) === M && fe.delete(v);
            return
        }
        if (ir(V))
            if (fe.delete(v), St > le) {
                let ye = jn(void 0);
                f.fetchers.set(v, ye), oe({
                    fetchers: new Map(f.fetchers)
                });
                return
            } else {
                A.add(v);
                let ye = Mr(F);
                return f.fetchers.set(v, ye), oe({
                    fetchers: new Map(f.fetchers)
                }), Sr(f, V, {
                    fetcherSubmission: F
                })
            }
        if (Xr(V)) {
            Ti(v, E, V.error);
            return
        }
        if (wn(V)) throw Ge(400, {
            type: "defer-action"
        });
        let q = f.navigation.location || f.location,
            pe = Dr(e.history, q, M.signal),
            pn = a || l,
            hn = f.navigation.state !== "idle" ? Xn(pn, f.navigation.location, u) : f.matches;
        W(hn, "Didn't find any matches after fetcher action");
        let wr = ++zt;
        L.set(v, wr);
        let el = Mr(F, V.data);
        f.fetchers.set(v, el);
        let [_t, Tt] = fc(e.history, f, hn, F, q, He, dt, fn, z, A, pn, u, {
            [O.route.id]: V.data
        }, void 0);
        Tt.filter(ye => ye.key !== v).forEach(ye => {
            let Er = ye.key,
                Ju = f.fetchers.get(Er),
                jp = Mr(void 0, Ju ? Ju.data : void 0);
            f.fetchers.set(Er, jp), fe.has(Er) && Ut(Er), ye.controller && fe.set(Er, ye.controller)
        }), oe({
            fetchers: new Map(f.fetchers)
        });
        let Ci = () => Tt.forEach(ye => Ut(ye.key));
        M.signal.addEventListener("abort", Ci);
        let {
            results: tl,
            loaderResults: nl,
            fetcherResults: rl
        } = await $u(f.matches, hn, _t, Tt, pe);
        if (M.signal.aborted) return;
        M.signal.removeEventListener("abort", Ci), L.delete(v), fe.delete(v), Tt.forEach(ye => fe.delete(ye.key));
        let X = yc(tl);
        if (X) {
            if (X.idx >= _t.length) {
                let ye = Tt[X.idx - _t.length].key;
                A.add(ye)
            }
            return Sr(f, X.result)
        }
        let {
            loaderData: tt,
            errors: Bt
        } = mc(f, f.matches, _t, nl, void 0, Tt, rl, K);
        if (f.fetchers.has(v)) {
            let ye = jn(V.data);
            f.fetchers.set(v, ye)
        }
        let il = Qu(wr);
        f.navigation.state === "loading" && wr > St ? (W(T, "Expected pending action"), x && x.abort(), yr(f.navigation.location, {
            matches: hn,
            loaderData: tt,
            errors: Bt,
            fetchers: new Map(f.fetchers)
        })) : (oe(ae({
            errors: Bt,
            loaderData: gc(f.loaderData, tt, hn, Bt)
        }, il || Tt.length > 0 ? {
            fetchers: new Map(f.fetchers)
        } : {})), He = !1)
    }
    async function Op(v, E, _, O, U, F) {
        let H = f.fetchers.get(v),
            I = Mr(F, H ? H.data : void 0);
        f.fetchers.set(v, I), oe({
            fetchers: new Map(f.fetchers)
        });
        let M = new AbortController,
            J = Dr(e.history, _, M.signal);
        fe.set(v, M);
        let le = zt,
            V = await Or("loader", J, O, U, o, i, u);
        if (wn(V) && (V = await rp(V, J.signal, !0) || V), fe.get(v) === M && fe.delete(v), J.signal.aborted) return;
        if (ir(V))
            if (St > le) {
                let pe = jn(void 0);
                f.fetchers.set(v, pe), oe({
                    fetchers: new Map(f.fetchers)
                });
                return
            } else {
                A.add(v), await Sr(f, V);
                return
            }
        if (Xr(V)) {
            let pe = Jn(f.matches, E);
            f.fetchers.delete(v), oe({
                fetchers: new Map(f.fetchers),
                errors: {
                    [pe.route.id]: V.error
                }
            });
            return
        }
        W(!wn(V), "Unhandled fetcher deferred data");
        let q = jn(V.data);
        f.fetchers.set(v, q), oe({
            fetchers: new Map(f.fetchers)
        })
    }
    async function Sr(v, E, _) {
        let {
            submission: O,
            fetcherSubmission: U,
            replace: F
        } = _ === void 0 ? {} : _;
        E.revalidate && (He = !0);
        let H = pi(v.location, E.location, {
            _isRedirect: !0
        });
        if (W(H, "Expected a location on the redirect navigation"), n) {
            let q = !1;
            if (E.reloadDocument) q = !0;
            else if (bd.test(E.location)) {
                const pe = e.history.createURL(E.location);
                q = pe.origin !== t.location.origin || Ei(pe.pathname, u) == null
            }
            if (q) {
                F ? t.location.replace(E.location) : t.location.assign(E.location);
                return
            }
        }
        x = null;
        let I = F === !0 ? he.Replace : he.Push,
            {
                formMethod: M,
                formAction: J,
                formEncType: le
            } = v.navigation;
        !O && !U && M && J && le && (O = wc(v.navigation));
        let V = O || U;
        if (Bg.has(E.status) && V && ot(V.formMethod)) await dn(I, H, {
            submission: ae({}, V, {
                formAction: E.location
            }),
            preventScrollReset: C
        });
        else {
            let q = Ml(H, O);
            await dn(I, H, {
                overrideNavigation: q,
                fetcherSubmission: U,
                preventScrollReset: C
            })
        }
    }
    async function $u(v, E, _, O, U) {
        let F = await Promise.all([..._.map(M => Or("loader", U, M, E, o, i, u)), ...O.map(M => M.matches && M.match && M.controller ? Or("loader", Dr(e.history, M.path, M.controller.signal), M.match, M.matches, o, i, u) : {
                type: me.error,
                error: Ge(404, {
                    pathname: M.path
                })
            })]),
            H = F.slice(0, _.length),
            I = F.slice(_.length);
        return await Promise.all([Sc(v, _, H, H.map(() => U.signal), !1, f.loaderData), Sc(v, O.map(M => M.match), I, O.map(M => M.controller ? M.controller.signal : null), !0)]), {
            results: F,
            loaderResults: H,
            fetcherResults: I
        }
    }

    function qo() {
        He = !0, dt.push(...bo()), z.forEach((v, E) => {
            fe.has(E) && (fn.push(E), Ut(E))
        })
    }

    function Ti(v, E, _) {
        let O = Jn(f.matches, E);
        Zo(v), oe({
            errors: {
                [O.route.id]: _
            },
            fetchers: new Map(f.fetchers)
        })
    }

    function Zo(v) {
        let E = f.fetchers.get(v);
        fe.has(v) && !(E && E.state === "loading" && L.has(v)) && Ut(v), z.delete(v), L.delete(v), A.delete(v), f.fetchers.delete(v)
    }

    function Ut(v) {
        let E = fe.get(v);
        W(E, "Expected fetch controller: " + v), E.abort(), fe.delete(v)
    }

    function Vu(v) {
        for (let E of v) {
            let _ = Hu(E),
                O = jn(_.data);
            f.fetchers.set(E, O)
        }
    }

    function Wu() {
        let v = [],
            E = !1;
        for (let _ of A) {
            let O = f.fetchers.get(_);
            W(O, "Expected fetcher: " + _), O.state === "loading" && (A.delete(_), v.push(_), E = !0)
        }
        return Vu(v), E
    }

    function Qu(v) {
        let E = [];
        for (let [_, O] of L)
            if (O < v) {
                let U = f.fetchers.get(_);
                W(U, "Expected fetcher: " + _), U.state === "loading" && (Ut(_), L.delete(_), E.push(_))
            }
        return Vu(E), E.length > 0
    }

    function Dp(v, E) {
        let _ = f.blockers.get(v) || Nr;
        return Z.get(v) !== E && Z.set(v, E), _
    }

    function Yu(v) {
        f.blockers.delete(v), Z.delete(v)
    }

    function ki(v, E) {
        let _ = f.blockers.get(v) || Nr;
        W(_.state === "unblocked" && E.state === "blocked" || _.state === "blocked" && E.state === "blocked" || _.state === "blocked" && E.state === "proceeding" || _.state === "blocked" && E.state === "unblocked" || _.state === "proceeding" && E.state === "unblocked", "Invalid blocker state transition: " + _.state + " -> " + E.state);
        let O = new Map(f.blockers);
        O.set(v, E), oe({
            blockers: O
        })
    }

    function Ku(v) {
        let {
            currentLocation: E,
            nextLocation: _,
            historyAction: O
        } = v;
        if (Z.size === 0) return;
        Z.size > 1 && On(!1, "A router only supports one blocker at a time");
        let U = Array.from(Z.entries()),
            [F, H] = U[U.length - 1],
            I = f.blockers.get(F);
        if (!(I && I.state === "proceeding") && H({
                currentLocation: E,
                nextLocation: _,
                historyAction: O
            })) return F
    }

    function bo(v) {
        let E = [];
        return K.forEach((_, O) => {
            (!v || v(O)) && (_.cancel(), E.push(O), K.delete(O))
        }), E
    }

    function Mp(v, E, _) {
        if (h = v, S = E, y = _ || null, !w && f.navigation === Dl) {
            w = !0;
            let O = Xu(f.location, f.matches);
            O != null && oe({
                restoreScrollPosition: O
            })
        }
        return () => {
            h = null, S = null, y = null
        }
    }

    function Gu(v, E) {
        return y && y(v, E.map(O => mg(O, f.loaderData))) || v.key
    }

    function Ap(v, E) {
        if (h && S) {
            let _ = Gu(v, E);
            h[_] = S()
        }
    }

    function Xu(v, E) {
        if (h) {
            let _ = Gu(v, E),
                O = h[_];
            if (typeof O == "number") return O
        }
        return null
    }

    function Ip(v) {
        o = {}, a = Ra(v, i, void 0, o)
    }
    return g = {
        get basename() {
            return u
        },
        get state() {
            return f
        },
        get routes() {
            return l
        },
        get window() {
            return t
        },
        initialize: wt,
        subscribe: Et,
        enableScrollRestoration: Mp,
        navigate: Bu,
        fetch: Lp,
        revalidate: xp,
        createHref: v => e.history.createHref(v),
        encodeLocation: v => e.history.encodeLocation(v),
        getFetcher: Hu,
        deleteFetcher: Zo,
        dispose: vr,
        getBlocker: Dp,
        deleteBlocker: Yu,
        _internalFetchControllers: fe,
        _internalActiveDeferreds: K,
        _internalSetRoutes: Ip
    }, g
}

function Wg(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function La(e, t, n, r, i, o, l) {
    let a, u;
    if (o != null && l !== "path") {
        a = [];
        for (let c of t)
            if (a.push(c), c.route.id === o) {
                u = c;
                break
            }
    } else a = t, u = t[t.length - 1];
    let s = Dg(i || ".", Jd(a).map(c => c.pathnameBase), Ei(e.pathname, n) || e.pathname, l === "path");
    return i == null && (s.search = e.search, s.hash = e.hash), (i == null || i === "" || i === ".") && u && u.route.index && !Iu(s.search) && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (s.pathname = s.pathname === "/" ? n : kn([n, s.pathname])), wi(s)
}

function cc(e, t, n, r) {
    if (!r || !Wg(r)) return {
        path: n
    };
    if (r.formMethod && !qg(r.formMethod)) return {
        path: n,
        error: Ge(405, {
            method: r.formMethod
        })
    };
    let i = () => ({
            path: n,
            error: Ge(400, {
                type: "invalid-body"
            })
        }),
        o = r.formMethod || "get",
        l = e ? o.toUpperCase() : o.toLowerCase(),
        a = np(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!ot(l)) return i();
            let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((y, S) => {
                let [w, P] = S;
                return "" + y + w + "=" + P + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: l,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: h
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!ot(l)) return i();
            try {
                let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: l,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: h,
                        text: void 0
                    }
                }
            } catch {
                return i()
            }
        }
    }
    W(typeof FormData == "function", "FormData is not available in this environment");
    let u, s;
    if (r.formData) u = Na(r.formData), s = r.formData;
    else if (r.body instanceof FormData) u = Na(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) u = r.body, s = hc(u);
    else if (r.body == null) u = new URLSearchParams, s = new FormData;
    else try {
        u = new URLSearchParams(r.body), s = hc(u)
    } catch {
        return i()
    }
    let c = {
        formMethod: l,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0
    };
    if (ot(c.formMethod)) return {
        path: n,
        submission: c
    };
    let m = jt(n);
    return t && m.search && Iu(m.search) && u.append("index", ""), m.search = "?" + u, {
        path: wi(m),
        submission: c
    }
}

function Qg(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(i => i.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function fc(e, t, n, r, i, o, l, a, u, s, c, m, h, y) {
    let S = y ? Object.values(y)[0] : h ? Object.values(h)[0] : void 0,
        w = e.createURL(t.location),
        P = e.createURL(i),
        p = y ? Object.keys(y)[0] : void 0,
        g = Qg(n, p).filter((T, C) => {
            if (T.route.lazy) return !0;
            if (T.route.loader == null) return !1;
            if (Yg(t.loaderData, t.matches[C], T) || l.some(Q => Q === T.route.id)) return !0;
            let x = t.matches[C],
                R = T;
            return dc(T, ae({
                currentUrl: w,
                currentParams: x.params,
                nextUrl: P,
                nextParams: R.params
            }, r, {
                actionResult: S,
                defaultShouldRevalidate: o || w.pathname + w.search === P.pathname + P.search || w.search !== P.search || tp(x, R)
            }))
        }),
        f = [];
    return u.forEach((T, C) => {
        if (!n.some(Ee => Ee.route.id === T.routeId)) return;
        let x = Xn(c, T.path, m);
        if (!x) {
            f.push({
                key: C,
                routeId: T.routeId,
                path: T.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let R = t.fetchers.get(C),
            Q = Oa(x, T.path),
            j = !1;
        s.has(C) ? j = !1 : a.includes(C) ? j = !0 : R && R.state !== "idle" && R.data === void 0 ? j = o : j = dc(Q, ae({
            currentUrl: w,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: P,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: S,
            defaultShouldRevalidate: o
        })), j && f.push({
            key: C,
            routeId: T.routeId,
            path: T.path,
            matches: x,
            match: Q,
            controller: new AbortController
        })
    }), [g, f]
}

function Yg(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = e[n.route.id] === void 0;
    return r || i
}

function tp(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function dc(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function pc(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let i = n[e.id];
    W(i, "No route found in manifest");
    let o = {};
    for (let l in r) {
        let u = i[l] !== void 0 && l !== "hasErrorBoundary";
        On(!u, 'Route "' + i.id + '" has a static property "' + l + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + l + '" will be ignored.')), !u && !pg.has(l) && (o[l] = r[l])
    }
    Object.assign(i, o), Object.assign(i, ae({}, t(i), {
        lazy: void 0
    }))
}
async function Or(e, t, n, r, i, o, l, a) {
    a === void 0 && (a = {});
    let u, s, c, m = S => {
        let w, P = new Promise((p, d) => w = d);
        return c = () => w(), t.signal.addEventListener("abort", c), Promise.race([S({
            request: t,
            params: n.params,
            context: a.requestContext
        }), P])
    };
    try {
        let S = n.route[e];
        if (n.route.lazy)
            if (S) {
                let w, P = await Promise.all([m(S).catch(p => {
                    w = p
                }), pc(n.route, o, i)]);
                if (w) throw w;
                s = P[0]
            } else if (await pc(n.route, o, i), S = n.route[e], S) s = await m(S);
        else if (e === "action") {
            let w = new URL(t.url),
                P = w.pathname + w.search;
            throw Ge(405, {
                method: t.method,
                pathname: P,
                routeId: n.route.id
            })
        } else return {
            type: me.data,
            data: void 0
        };
        else if (S) s = await m(S);
        else {
            let w = new URL(t.url),
                P = w.pathname + w.search;
            throw Ge(404, {
                pathname: P
            })
        }
        W(s !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (S) {
        u = me.error, s = S
    } finally {
        c && t.signal.removeEventListener("abort", c)
    }
    if (Jg(s)) {
        let S = s.status;
        if (Ug.has(S)) {
            let p = s.headers.get("Location");
            if (W(p, "Redirects returned/thrown from loaders/actions must have a Location header"), !bd.test(p)) p = La(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, p);
            else if (!a.isStaticRequest) {
                let d = new URL(t.url),
                    g = p.startsWith("//") ? new URL(d.protocol + p) : new URL(p),
                    f = Ei(g.pathname, l) != null;
                g.origin === d.origin && f && (p = g.pathname + g.search + g.hash)
            }
            if (a.isStaticRequest) throw s.headers.set("Location", p), s;
            return {
                type: me.redirect,
                status: S,
                location: p,
                revalidate: s.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null
            }
        }
        if (a.isRouteRequest) throw {
            type: u === me.error ? me.error : me.data,
            response: s
        };
        let w, P = s.headers.get("Content-Type");
        return P && /\bapplication\/json\b/.test(P) ? w = await s.json() : w = await s.text(), u === me.error ? {
            type: u,
            error: new Au(S, s.statusText, w),
            headers: s.headers
        } : {
            type: me.data,
            data: w,
            statusCode: s.status,
            headers: s.headers
        }
    }
    if (u === me.error) return {
        type: u,
        error: s
    };
    if (Xg(s)) {
        var h, y;
        return {
            type: me.deferred,
            deferredData: s,
            statusCode: (h = s.init) == null ? void 0 : h.status,
            headers: ((y = s.init) == null ? void 0 : y.headers) && new Headers(s.init.headers)
        }
    }
    return {
        type: me.data,
        data: s
    }
}

function Dr(e, t, n, r) {
    let i = e.createURL(np(t)).toString(),
        o = {
            signal: n
        };
    if (r && ot(r.formMethod)) {
        let {
            formMethod: l,
            formEncType: a
        } = r;
        o.method = l.toUpperCase(), a === "application/json" ? (o.headers = new Headers({
            "Content-Type": a
        }), o.body = JSON.stringify(r.json)) : a === "text/plain" ? o.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? o.body = Na(r.formData) : o.body = r.formData
    }
    return new Request(i, o)
}

function Na(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function hc(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function Kg(e, t, n, r, i) {
    let o = {},
        l = null,
        a, u = !1,
        s = {};
    return n.forEach((c, m) => {
        let h = t[m].route.id;
        if (W(!ir(c), "Cannot handle redirect results in processLoaderData"), Xr(c)) {
            let y = Jn(e, h),
                S = c.error;
            r && (S = Object.values(r)[0], r = void 0), l = l || {}, l[y.route.id] == null && (l[y.route.id] = S), o[h] = void 0, u || (u = !0, a = qd(c.error) ? c.error.status : 500), c.headers && (s[h] = c.headers)
        } else wn(c) ? (i.set(h, c.deferredData), o[h] = c.deferredData.data) : o[h] = c.data, c.statusCode != null && c.statusCode !== 200 && !u && (a = c.statusCode), c.headers && (s[h] = c.headers)
    }), r && (l = r, o[Object.keys(r)[0]] = void 0), {
        loaderData: o,
        errors: l,
        statusCode: a || 200,
        loaderHeaders: s
    }
}

function mc(e, t, n, r, i, o, l, a) {
    let {
        loaderData: u,
        errors: s
    } = Kg(t, n, r, i, a);
    for (let c = 0; c < o.length; c++) {
        let {
            key: m,
            match: h,
            controller: y
        } = o[c];
        W(l !== void 0 && l[c] !== void 0, "Did not find corresponding fetcher result");
        let S = l[c];
        if (!(y && y.signal.aborted))
            if (Xr(S)) {
                let w = Jn(e.matches, h == null ? void 0 : h.route.id);
                s && s[w.route.id] || (s = ae({}, s, {
                    [w.route.id]: S.error
                })), e.fetchers.delete(m)
            } else if (ir(S)) W(!1, "Unhandled fetcher revalidation redirect");
        else if (wn(S)) W(!1, "Unhandled fetcher deferred data");
        else {
            let w = jn(S.data);
            e.fetchers.set(m, w)
        }
    }
    return {
        loaderData: u,
        errors: s
    }
}

function gc(e, t, n, r) {
    let i = ae({}, t);
    for (let o of n) {
        let l = o.route.id;
        if (t.hasOwnProperty(l) ? t[l] !== void 0 && (i[l] = t[l]) : e[l] !== void 0 && o.route.loader && (i[l] = e[l]), r && r.hasOwnProperty(l)) break
    }
    return i
}

function Jn(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function vc(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function Ge(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: i,
        type: o
    } = t === void 0 ? {} : t, l = "Unknown Server Error", a = "Unknown @remix-run/router error";
    return e === 400 ? (l = "Bad Request", i && n && r ? a = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? a = "defer() is not supported in actions" : o === "invalid-body" && (a = "Unable to encode submission body")) : e === 403 ? (l = "Forbidden", a = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (l = "Not Found", a = 'No route matches URL "' + n + '"') : e === 405 && (l = "Method Not Allowed", i && n && r ? a = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')), new Au(e || 500, l, new Error(a), !0)
}

function yc(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (ir(n)) return {
            result: n,
            idx: t
        }
    }
}

function np(e) {
    let t = typeof e == "string" ? jt(e) : e;
    return wi(ae({}, t, {
        hash: ""
    }))
}

function Gg(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function wn(e) {
    return e.type === me.deferred
}

function Xr(e) {
    return e.type === me.error
}

function ir(e) {
    return (e && e.type) === me.redirect
}

function Xg(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function Jg(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function qg(e) {
    return Fg.has(e.toLowerCase())
}

function ot(e) {
    return jg.has(e.toLowerCase())
}
async function Sc(e, t, n, r, i, o) {
    for (let l = 0; l < n.length; l++) {
        let a = n[l],
            u = t[l];
        if (!u) continue;
        let s = e.find(m => m.route.id === u.route.id),
            c = s != null && !tp(s, u) && (o && o[u.route.id]) !== void 0;
        if (wn(a) && (i || c)) {
            let m = r[l];
            W(m, "Expected an AbortSignal for revalidating fetcher deferred result"), await rp(a, m, i).then(h => {
                h && (n[l] = h || n[l])
            })
        }
    }
}
async function rp(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: me.data,
                data: e.deferredData.unwrappedData
            }
        } catch (i) {
            return {
                type: me.error,
                error: i
            }
        }
        return {
            type: me.data,
            data: e.deferredData.data
        }
    }
}

function Iu(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function Oa(e, t) {
    let n = typeof t == "string" ? jt(t).search : t.search;
    if (e[e.length - 1].route.index && Iu(n || "")) return e[e.length - 1];
    let r = Jd(e);
    return r[r.length - 1]
}

function wc(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: i,
        formData: o,
        json: l
    } = e;
    if (!(!t || !n || !r)) {
        if (i != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: i
        };
        if (o != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: o,
            json: void 0,
            text: void 0
        };
        if (l !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: l,
            text: void 0
        }
    }
}

function Ml(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function Zg(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function Mr(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function bg(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function jn(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function ev(e, t) {
    try {
        let n = e.sessionStorage.getItem(ep);
        if (n) {
            let r = JSON.parse(n);
            for (let [i, o] of Object.entries(r || {})) o && Array.isArray(o) && t.set(i, new Set(o || []))
        }
    } catch {}
}

function tv(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, i] of t) n[r] = [...i];
        try {
            e.sessionStorage.setItem(ep, JSON.stringify(n))
        } catch (r) {
            On(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Da() {
    return Da = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Da.apply(this, arguments)
}
const ip = N.createContext(null),
    op = N.createContext(null),
    lp = N.createContext(null),
    Go = N.createContext(null),
    _i = N.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    ap = N.createContext(null);

function ju() {
    return N.useContext(Go) != null
}

function nv() {
    return ju() || W(!1), N.useContext(Go).location
}
const rv = N.createContext(null);

function iv(e) {
    let t = N.useContext(_i).outlet;
    return t && N.createElement(rv.Provider, {
        value: e
    }, t)
}

function ov(e, t, n) {
    ju() || W(!1);
    let {
        navigator: r
    } = N.useContext(lp), {
        matches: i
    } = N.useContext(_i), o = i[i.length - 1], l = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : "/";
    o && o.route;
    let u = nv(),
        s;
    if (t) {
        var c;
        let w = typeof t == "string" ? jt(t) : t;
        a === "/" || (c = w.pathname) != null && c.startsWith(a) || W(!1), s = w
    } else s = u;
    let m = s.pathname || "/",
        h = a === "/" ? m : m.slice(a.length) || "/",
        y = Xn(e, {
            pathname: h
        }),
        S = cv(y && y.map(w => Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: kn([a, r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname]),
            pathnameBase: w.pathnameBase === "/" ? a : kn([a, r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
        })), i, n);
    return t && S ? N.createElement(Go.Provider, {
        value: {
            location: Da({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, s),
            navigationType: he.Pop
        }
    }, S) : S
}

function lv() {
    let e = hv(),
        t = qd(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        o = null;
    return N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? N.createElement("pre", {
        style: i
    }, n) : null, o)
}
const av = N.createElement(lv, null);
class uv extends N.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error || n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? N.createElement(_i.Provider, {
            value: this.props.routeContext
        }, N.createElement(ap.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function sv(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = N.useContext(ip);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), N.createElement(_i.Provider, {
        value: t
    }, r)
}

function cv(e, t, n) {
    var r;
    if (t === void 0 && (t = []), n === void 0 && (n = null), e == null) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null
    }
    let o = e,
        l = (r = n) == null ? void 0 : r.errors;
    if (l != null) {
        let a = o.findIndex(u => u.route.id && (l == null ? void 0 : l[u.route.id]));
        a >= 0 || W(!1), o = o.slice(0, Math.min(o.length, a + 1))
    }
    return o.reduceRight((a, u, s) => {
        let c = u.route.id ? l == null ? void 0 : l[u.route.id] : null,
            m = null;
        n && (m = u.route.errorElement || av);
        let h = t.concat(o.slice(0, s + 1)),
            y = () => {
                let S;
                return c ? S = m : u.route.Component ? S = N.createElement(u.route.Component, null) : u.route.element ? S = u.route.element : S = a, N.createElement(sv, {
                    match: u,
                    routeContext: {
                        outlet: a,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: S
                })
            };
        return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0) ? N.createElement(uv, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: c,
            children: y(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : y()
    }, null)
}
var Ma = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Ma || {});

function fv(e) {
    let t = N.useContext(op);
    return t || W(!1), t
}

function dv(e) {
    let t = N.useContext(_i);
    return t || W(!1), t
}

function pv(e) {
    let t = dv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || W(!1), n.route.id
}

function hv() {
    var e;
    let t = N.useContext(ap),
        n = fv(Ma.UseRouteError),
        r = pv(Ma.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r])
}

function r0(e) {
    return iv(e.context)
}

function mv(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = he.Pop,
        navigator: o,
        static: l = !1
    } = e;
    ju() && W(!1);
    let a = t.replace(/^\/*/, "/"),
        u = N.useMemo(() => ({
            basename: a,
            navigator: o,
            static: l
        }), [a, o, l]);
    typeof r == "string" && (r = jt(r));
    let {
        pathname: s = "/",
        search: c = "",
        hash: m = "",
        state: h = null,
        key: y = "default"
    } = r, S = N.useMemo(() => {
        let w = Ei(s, a);
        return w == null ? null : {
            location: {
                pathname: w,
                search: c,
                hash: m,
                state: h,
                key: y
            },
            navigationType: i
        }
    }, [a, s, c, m, h, y, i]);
    return S == null ? null : N.createElement(lp.Provider, {
        value: u
    }, N.createElement(Go.Provider, {
        children: n,
        value: S
    }))
}
new Promise(() => {});

function gv(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Lo() {
    return Lo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Lo.apply(this, arguments)
}

function i0(e, t) {
    return Vg({
        basename: t == null ? void 0 : t.basename,
        future: Lo({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: cg({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || vv(),
        routes: e,
        mapRouteProperties: gv,
        window: t == null ? void 0 : t.window
    }).initialize()
}

function vv() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = Lo({}, t, {
        errors: yv(t.errors)
    })), t
}

function yv(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, i] of t)
        if (i && i.__type === "RouteErrorResponse") n[r] = new Au(i.status, i.statusText, i.data, i.internal === !0);
        else if (i && i.__type === "Error") {
        if (i.__subType) {
            let o = window[i.__subType];
            if (typeof o == "function") try {
                let l = new o(i.message);
                l.stack = "", n[r] = l
            } catch {}
        }
        if (n[r] == null) {
            let o = new Error(i.message);
            o.stack = "", n[r] = o
        }
    } else n[r] = i;
    return n
}
const Sv = N.createContext({
        isTransitioning: !1
    }),
    wv = "startTransition",
    Ec = bp[wv];

function Ev(e) {
    Ec ? Ec(e) : e()
}
class _v {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
}

function o0(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [i, o] = N.useState(n.state), [l, a] = N.useState(), [u, s] = N.useState({
        isTransitioning: !1
    }), [c, m] = N.useState(), [h, y] = N.useState(), [S, w] = N.useState(), {
        v7_startTransition: P
    } = r || {}, p = N.useCallback(C => {
        P ? Ev(C) : C()
    }, [P]), d = N.useCallback((C, x) => {
        let {
            unstable_viewTransitionOpts: R
        } = x;
        !R || n.window == null || typeof n.window.document.startViewTransition != "function" ? p(() => o(C)) : h && c ? (c.resolve(), h.skipTransition(), w({
            state: C,
            currentLocation: R.currentLocation,
            nextLocation: R.nextLocation
        })) : (a(C), s({
            isTransitioning: !0,
            currentLocation: R.currentLocation,
            nextLocation: R.nextLocation
        }))
    }, [p, h, c, n.window]);
    N.useLayoutEffect(() => n.subscribe(d), [n, d]), N.useEffect(() => {
        u.isTransitioning && m(new _v)
    }, [u.isTransitioning]), N.useEffect(() => {
        if (c && l && n.window) {
            let C = l,
                x = c.promise,
                R = n.window.document.startViewTransition(async () => {
                    p(() => o(C)), await x
                });
            R.finished.finally(() => {
                m(void 0), y(void 0), a(void 0), s({
                    isTransitioning: !1
                })
            }), y(R)
        }
    }, [p, l, c, n.window]), N.useEffect(() => {
        c && l && i.location.key === l.location.key && c.resolve()
    }, [c, h, i.location, l]), N.useEffect(() => {
        !u.isTransitioning && S && (a(S.state), s({
            isTransitioning: !0,
            currentLocation: S.currentLocation,
            nextLocation: S.nextLocation
        }), w(void 0))
    }, [u.isTransitioning, S]);
    let g = N.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: C => n.navigate(C),
            push: (C, x, R) => n.navigate(C, {
                state: x,
                preventScrollReset: R == null ? void 0 : R.preventScrollReset
            }),
            replace: (C, x, R) => n.navigate(C, {
                replace: !0,
                state: x,
                preventScrollReset: R == null ? void 0 : R.preventScrollReset
            })
        }), [n]),
        f = n.basename || "/",
        T = N.useMemo(() => ({
            router: n,
            navigator: g,
            static: !1,
            basename: f
        }), [n, g, f]);
    return N.createElement(N.Fragment, null, N.createElement(ip.Provider, {
        value: T
    }, N.createElement(op.Provider, {
        value: i
    }, N.createElement(Sv.Provider, {
        value: u
    }, N.createElement(mv, {
        basename: f,
        location: i.location,
        navigationType: i.historyAction,
        navigator: g
    }, i.initialized ? N.createElement(Tv, {
        routes: n.routes,
        state: i
    }) : t)))), null)
}

function Tv(e) {
    let {
        routes: t,
        state: n
    } = e;
    return ov(t, void 0, n)
}
var _c;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(_c || (_c = {}));
var Tc;
(function(e) {
    e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Tc || (Tc = {}));
var up = {
        exports: {}
    },
    kv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Cv = kv,
    xv = Cv;

function sp() {}

function cp() {}
cp.resetWarningCache = sp;
var Pv = function() {
    function e(r, i, o, l, a, u) {
        if (u !== xv) {
            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw s.name = "Invariant Violation", s
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: cp,
        resetWarningCache: sp
    };
    return n.PropTypes = n, n
};
up.exports = Pv();
var Rv = up.exports;
const ne = pr(Rv);

function Lv(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e
}
var fp = N,
    Nv = Lv(fp);

function kc(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Ov(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Dv = !!(typeof window < "u" && window.document && window.document.createElement);

function Mv(e, t, n) {
    if (typeof e != "function") throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function") throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function") throw new Error("Expected mapStateOnServer to either be undefined or a function.");

    function r(i) {
        return i.displayName || i.name || "Component"
    }
    return function(o) {
        if (typeof o != "function") throw new Error("Expected WrappedComponent to be a React component.");
        var l = [],
            a;

        function u() {
            a = e(l.map(function(c) {
                return c.props
            })), s.canUseDOM ? t(a) : n && (a = n(a))
        }
        var s = function(c) {
            Ov(m, c);

            function m() {
                return c.apply(this, arguments) || this
            }
            m.peek = function() {
                return a
            }, m.rewind = function() {
                if (m.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var S = a;
                return a = void 0, l = [], S
            };
            var h = m.prototype;
            return h.UNSAFE_componentWillMount = function() {
                l.push(this), u()
            }, h.componentDidUpdate = function() {
                u()
            }, h.componentWillUnmount = function() {
                var S = l.indexOf(this);
                l.splice(S, 1), u()
            }, h.render = function() {
                return Nv.createElement(o, this.props)
            }, m
        }(fp.PureComponent);
        return kc(s, "displayName", "SideEffect(" + r(o) + ")"), kc(s, "canUseDOM", Dv), s
    }
}
var Av = Mv;
const Iv = pr(Av);
var jv = typeof Element < "u",
    zv = typeof Map == "function",
    Fv = typeof Set == "function",
    Uv = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function no(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var n, r, i;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!no(e[r], t[r])) return !1;
            return !0
        }
        var o;
        if (zv && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!t.has(r.value[0])) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!no(r.value[1], t.get(r.value[0]))) return !1;
            return !0
        }
        if (Fv && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!t.has(r.value[0])) return !1;
            return !0
        }
        if (Uv && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
        if (jv && e instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !no(e[i[r]], t[i[r]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var Bv = function(t, n) {
    try {
        return no(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const Hv = pr(Bv);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Cc = Object.getOwnPropertySymbols,
    $v = Object.prototype.hasOwnProperty,
    Vv = Object.prototype.propertyIsEnumerable;

function Wv(e) {
    if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}

function Qv() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function(o) {
            return t[o]
        });
        if (r.join("") !== "0123456789") return !1;
        var i = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(o) {
            i[o] = o
        }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var Yv = Qv() ? Object.assign : function(e, t) {
    for (var n, r = Wv(e), i, o = 1; o < arguments.length; o++) {
        n = Object(arguments[o]);
        for (var l in n) $v.call(n, l) && (r[l] = n[l]);
        if (Cc) {
            i = Cc(n);
            for (var a = 0; a < i.length; a++) Vv.call(n, i[a]) && (r[i[a]] = n[i[a]])
        }
    }
    return r
};
const Kv = pr(Yv);
var Cn = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes"
    },
    B = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
    };
Object.keys(B).map(function(e) {
    return B[e]
});
var re = {
        CHARSET: "charset",
        CSS_TEXT: "cssText",
        HREF: "href",
        HTTPEQUIV: "http-equiv",
        INNER_HTML: "innerHTML",
        ITEM_PROP: "itemprop",
        NAME: "name",
        PROPERTY: "property",
        REL: "rel",
        SRC: "src",
        TARGET: "target"
    },
    No = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    hi = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
    },
    Gv = Object.keys(No).reduce(function(e, t) {
        return e[No[t]] = t, e
    }, {}),
    Xv = [B.NOSCRIPT, B.SCRIPT, B.STYLE],
    at = "data-react-helmet",
    Jv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    qv = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    Zv = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    Ie = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    bv = function(e, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    },
    xc = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    },
    ey = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e
    },
    Aa = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    ty = function(t) {
        var n = or(t, B.TITLE),
            r = or(t, hi.TITLE_TEMPLATE);
        if (r && n) return r.replace(/%s/g, function() {
            return Array.isArray(n) ? n.join("") : n
        });
        var i = or(t, hi.DEFAULT_TITLE);
        return n || i || void 0
    },
    ny = function(t) {
        return or(t, hi.ON_CHANGE_CLIENT_STATE) || function() {}
    },
    Al = function(t, n) {
        return n.filter(function(r) {
            return typeof r[t] < "u"
        }).map(function(r) {
            return r[t]
        }).reduce(function(r, i) {
            return Ie({}, r, i)
        }, {})
    },
    ry = function(t, n) {
        return n.filter(function(r) {
            return typeof r[B.BASE] < "u"
        }).map(function(r) {
            return r[B.BASE]
        }).reverse().reduce(function(r, i) {
            if (!r.length)
                for (var o = Object.keys(i), l = 0; l < o.length; l++) {
                    var a = o[l],
                        u = a.toLowerCase();
                    if (t.indexOf(u) !== -1 && i[u]) return r.concat(i)
                }
            return r
        }, [])
    },
    Ar = function(t, n, r) {
        var i = {};
        return r.filter(function(o) {
            return Array.isArray(o[t]) ? !0 : (typeof o[t] < "u" && ay("Helmet: " + t + ' should be of type "Array". Instead found type "' + Jv(o[t]) + '"'), !1)
        }).map(function(o) {
            return o[t]
        }).reverse().reduce(function(o, l) {
            var a = {};
            l.filter(function(h) {
                for (var y = void 0, S = Object.keys(h), w = 0; w < S.length; w++) {
                    var P = S[w],
                        p = P.toLowerCase();
                    n.indexOf(p) !== -1 && !(y === re.REL && h[y].toLowerCase() === "canonical") && !(p === re.REL && h[p].toLowerCase() === "stylesheet") && (y = p), n.indexOf(P) !== -1 && (P === re.INNER_HTML || P === re.CSS_TEXT || P === re.ITEM_PROP) && (y = P)
                }
                if (!y || !h[y]) return !1;
                var d = h[y].toLowerCase();
                return i[y] || (i[y] = {}), a[y] || (a[y] = {}), i[y][d] ? !1 : (a[y][d] = !0, !0)
            }).reverse().forEach(function(h) {
                return o.push(h)
            });
            for (var u = Object.keys(a), s = 0; s < u.length; s++) {
                var c = u[s],
                    m = Kv({}, i[c], a[c]);
                i[c] = m
            }
            return o
        }, []).reverse()
    },
    or = function(t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var i = t[r];
            if (i.hasOwnProperty(n)) return i[n]
        }
        return null
    },
    iy = function(t) {
        return {
            baseTag: ry([re.HREF, re.TARGET], t),
            bodyAttributes: Al(Cn.BODY, t),
            defer: or(t, hi.DEFER),
            encode: or(t, hi.ENCODE_SPECIAL_CHARACTERS),
            htmlAttributes: Al(Cn.HTML, t),
            linkTags: Ar(B.LINK, [re.REL, re.HREF], t),
            metaTags: Ar(B.META, [re.NAME, re.CHARSET, re.HTTPEQUIV, re.PROPERTY, re.ITEM_PROP], t),
            noscriptTags: Ar(B.NOSCRIPT, [re.INNER_HTML], t),
            onChangeClientState: ny(t),
            scriptTags: Ar(B.SCRIPT, [re.SRC, re.INNER_HTML], t),
            styleTags: Ar(B.STYLE, [re.CSS_TEXT], t),
            title: ty(t),
            titleAttributes: Al(Cn.TITLE, t)
        }
    },
    Ia = function() {
        var e = Date.now();
        return function(t) {
            var n = Date.now();
            n - e > 16 ? (e = n, t(n)) : setTimeout(function() {
                Ia(t)
            }, 0)
        }
    }(),
    Pc = function(t) {
        return clearTimeout(t)
    },
    oy = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Ia : global.requestAnimationFrame || Ia,
    ly = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || Pc : global.cancelAnimationFrame || Pc,
    ay = function(t) {
        return console && typeof console.warn == "function" && console.warn(t)
    },
    Ir = null,
    uy = function(t) {
        Ir && ly(Ir), t.defer ? Ir = oy(function() {
            Rc(t, function() {
                Ir = null
            })
        }) : (Rc(t), Ir = null)
    },
    Rc = function(t, n) {
        var r = t.baseTag,
            i = t.bodyAttributes,
            o = t.htmlAttributes,
            l = t.linkTags,
            a = t.metaTags,
            u = t.noscriptTags,
            s = t.onChangeClientState,
            c = t.scriptTags,
            m = t.styleTags,
            h = t.title,
            y = t.titleAttributes;
        ja(B.BODY, i), ja(B.HTML, o), sy(h, y);
        var S = {
                baseTag: In(B.BASE, r),
                linkTags: In(B.LINK, l),
                metaTags: In(B.META, a),
                noscriptTags: In(B.NOSCRIPT, u),
                scriptTags: In(B.SCRIPT, c),
                styleTags: In(B.STYLE, m)
            },
            w = {},
            P = {};
        Object.keys(S).forEach(function(p) {
            var d = S[p],
                g = d.newTags,
                f = d.oldTags;
            g.length && (w[p] = g), f.length && (P[p] = S[p].oldTags)
        }), n && n(), s(t, w, P)
    },
    dp = function(t) {
        return Array.isArray(t) ? t.join("") : t
    },
    sy = function(t, n) {
        typeof t < "u" && document.title !== t && (document.title = dp(t)), ja(B.TITLE, n)
    },
    ja = function(t, n) {
        var r = document.getElementsByTagName(t)[0];
        if (r) {
            for (var i = r.getAttribute(at), o = i ? i.split(",") : [], l = [].concat(o), a = Object.keys(n), u = 0; u < a.length; u++) {
                var s = a[u],
                    c = n[s] || "";
                r.getAttribute(s) !== c && r.setAttribute(s, c), o.indexOf(s) === -1 && o.push(s);
                var m = l.indexOf(s);
                m !== -1 && l.splice(m, 1)
            }
            for (var h = l.length - 1; h >= 0; h--) r.removeAttribute(l[h]);
            o.length === l.length ? r.removeAttribute(at) : r.getAttribute(at) !== a.join(",") && r.setAttribute(at, a.join(","))
        }
    },
    In = function(t, n) {
        var r = document.head || document.querySelector(B.HEAD),
            i = r.querySelectorAll(t + "[" + at + "]"),
            o = Array.prototype.slice.call(i),
            l = [],
            a = void 0;
        return n && n.length && n.forEach(function(u) {
            var s = document.createElement(t);
            for (var c in u)
                if (u.hasOwnProperty(c))
                    if (c === re.INNER_HTML) s.innerHTML = u.innerHTML;
                    else if (c === re.CSS_TEXT) s.styleSheet ? s.styleSheet.cssText = u.cssText : s.appendChild(document.createTextNode(u.cssText));
            else {
                var m = typeof u[c] > "u" ? "" : u[c];
                s.setAttribute(c, m)
            }
            s.setAttribute(at, "true"), o.some(function(h, y) {
                return a = y, s.isEqualNode(h)
            }) ? o.splice(a, 1) : l.push(s)
        }), o.forEach(function(u) {
            return u.parentNode.removeChild(u)
        }), l.forEach(function(u) {
            return r.appendChild(u)
        }), {
            oldTags: o,
            newTags: l
        }
    },
    pp = function(t) {
        return Object.keys(t).reduce(function(n, r) {
            var i = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
            return n ? n + " " + i : i
        }, "")
    },
    cy = function(t, n, r, i) {
        var o = pp(r),
            l = dp(n);
        return o ? "<" + t + " " + at + '="true" ' + o + ">" + Aa(l, i) + "</" + t + ">" : "<" + t + " " + at + '="true">' + Aa(l, i) + "</" + t + ">"
    },
    fy = function(t, n, r) {
        return n.reduce(function(i, o) {
            var l = Object.keys(o).filter(function(s) {
                    return !(s === re.INNER_HTML || s === re.CSS_TEXT)
                }).reduce(function(s, c) {
                    var m = typeof o[c] > "u" ? c : c + '="' + Aa(o[c], r) + '"';
                    return s ? s + " " + m : m
                }, ""),
                a = o.innerHTML || o.cssText || "",
                u = Xv.indexOf(t) === -1;
            return i + "<" + t + " " + at + '="true" ' + l + (u ? "/>" : ">" + a + "</" + t + ">")
        }, "")
    },
    hp = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function(r, i) {
            return r[No[i] || i] = t[i], r
        }, n)
    },
    dy = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function(r, i) {
            return r[Gv[i] || i] = t[i], r
        }, n)
    },
    py = function(t, n, r) {
        var i, o = (i = {
                key: n
            }, i[at] = !0, i),
            l = hp(r, o);
        return [qn.createElement(B.TITLE, l, n)]
    },
    hy = function(t, n) {
        return n.map(function(r, i) {
            var o, l = (o = {
                key: i
            }, o[at] = !0, o);
            return Object.keys(r).forEach(function(a) {
                var u = No[a] || a;
                if (u === re.INNER_HTML || u === re.CSS_TEXT) {
                    var s = r.innerHTML || r.cssText;
                    l.dangerouslySetInnerHTML = {
                        __html: s
                    }
                } else l[u] = r[a]
            }), qn.createElement(t, l)
        })
    },
    kt = function(t, n, r) {
        switch (t) {
            case B.TITLE:
                return {
                    toComponent: function() {
                        return py(t, n.title, n.titleAttributes)
                    },
                    toString: function() {
                        return cy(t, n.title, n.titleAttributes, r)
                    }
                };
            case Cn.BODY:
            case Cn.HTML:
                return {
                    toComponent: function() {
                        return hp(n)
                    },
                    toString: function() {
                        return pp(n)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return hy(t, n)
                    },
                    toString: function() {
                        return fy(t, n, r)
                    }
                }
        }
    },
    mp = function(t) {
        var n = t.baseTag,
            r = t.bodyAttributes,
            i = t.encode,
            o = t.htmlAttributes,
            l = t.linkTags,
            a = t.metaTags,
            u = t.noscriptTags,
            s = t.scriptTags,
            c = t.styleTags,
            m = t.title,
            h = m === void 0 ? "" : m,
            y = t.titleAttributes;
        return {
            base: kt(B.BASE, n, i),
            bodyAttributes: kt(Cn.BODY, r, i),
            htmlAttributes: kt(Cn.HTML, o, i),
            link: kt(B.LINK, l, i),
            meta: kt(B.META, a, i),
            noscript: kt(B.NOSCRIPT, u, i),
            script: kt(B.SCRIPT, s, i),
            style: kt(B.STYLE, c, i),
            title: kt(B.TITLE, {
                title: h,
                titleAttributes: y
            }, i)
        }
    },
    my = function(t) {
        var n, r;
        return r = n = function(i) {
            bv(o, i);

            function o() {
                return qv(this, o), ey(this, i.apply(this, arguments))
            }
            return o.prototype.shouldComponentUpdate = function(a) {
                return !Hv(this.props, a)
            }, o.prototype.mapNestedChildrenToProps = function(a, u) {
                if (!u) return null;
                switch (a.type) {
                    case B.SCRIPT:
                    case B.NOSCRIPT:
                        return {
                            innerHTML: u
                        };
                    case B.STYLE:
                        return {
                            cssText: u
                        }
                }
                throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }, o.prototype.flattenArrayTypeChildren = function(a) {
                var u, s = a.child,
                    c = a.arrayTypeChildren,
                    m = a.newChildProps,
                    h = a.nestedChildren;
                return Ie({}, c, (u = {}, u[s.type] = [].concat(c[s.type] || [], [Ie({}, m, this.mapNestedChildrenToProps(s, h))]), u))
            }, o.prototype.mapObjectTypeChildren = function(a) {
                var u, s, c = a.child,
                    m = a.newProps,
                    h = a.newChildProps,
                    y = a.nestedChildren;
                switch (c.type) {
                    case B.TITLE:
                        return Ie({}, m, (u = {}, u[c.type] = y, u.titleAttributes = Ie({}, h), u));
                    case B.BODY:
                        return Ie({}, m, {
                            bodyAttributes: Ie({}, h)
                        });
                    case B.HTML:
                        return Ie({}, m, {
                            htmlAttributes: Ie({}, h)
                        })
                }
                return Ie({}, m, (s = {}, s[c.type] = Ie({}, h), s))
            }, o.prototype.mapArrayTypeChildrenToProps = function(a, u) {
                var s = Ie({}, u);
                return Object.keys(a).forEach(function(c) {
                    var m;
                    s = Ie({}, s, (m = {}, m[c] = a[c], m))
                }), s
            }, o.prototype.warnOnInvalidChildren = function(a, u) {
                return !0
            }, o.prototype.mapChildrenToProps = function(a, u) {
                var s = this,
                    c = {};
                return qn.Children.forEach(a, function(m) {
                    if (!(!m || !m.props)) {
                        var h = m.props,
                            y = h.children,
                            S = xc(h, ["children"]),
                            w = dy(S);
                        switch (s.warnOnInvalidChildren(m, y), m.type) {
                            case B.LINK:
                            case B.META:
                            case B.NOSCRIPT:
                            case B.SCRIPT:
                            case B.STYLE:
                                c = s.flattenArrayTypeChildren({
                                    child: m,
                                    arrayTypeChildren: c,
                                    newChildProps: w,
                                    nestedChildren: y
                                });
                                break;
                            default:
                                u = s.mapObjectTypeChildren({
                                    child: m,
                                    newProps: u,
                                    newChildProps: w,
                                    nestedChildren: y
                                });
                                break
                        }
                    }
                }), u = this.mapArrayTypeChildrenToProps(c, u), u
            }, o.prototype.render = function() {
                var a = this.props,
                    u = a.children,
                    s = xc(a, ["children"]),
                    c = Ie({}, s);
                return u && (c = this.mapChildrenToProps(u, c)), qn.createElement(t, c)
            }, Zv(o, null, [{
                key: "canUseDOM",
                set: function(a) {
                    t.canUseDOM = a
                }
            }]), o
        }(qn.Component), n.propTypes = {
            base: ne.object,
            bodyAttributes: ne.object,
            children: ne.oneOfType([ne.arrayOf(ne.node), ne.node]),
            defaultTitle: ne.string,
            defer: ne.bool,
            encodeSpecialCharacters: ne.bool,
            htmlAttributes: ne.object,
            link: ne.arrayOf(ne.object),
            meta: ne.arrayOf(ne.object),
            noscript: ne.arrayOf(ne.object),
            onChangeClientState: ne.func,
            script: ne.arrayOf(ne.object),
            style: ne.arrayOf(ne.object),
            title: ne.string,
            titleAttributes: ne.object,
            titleTemplate: ne.string
        }, n.defaultProps = {
            defer: !0,
            encodeSpecialCharacters: !0
        }, n.peek = t.peek, n.rewind = function() {
            var i = t.rewind();
            return i || (i = mp({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            })), i
        }, r
    },
    gy = function() {
        return null
    },
    vy = Iv(iy, uy, mp)(gy),
    Lc = my(vy);
Lc.renderStatic = Lc.rewind;
const yy = N.createContext(null),
    Il = {
        didCatch: !1,
        error: null
    };
class l0 extends N.Component {
    constructor(t) {
        super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Il
    }
    static getDerivedStateFromError(t) {
        return {
            didCatch: !0,
            error: t
        }
    }
    resetErrorBoundary() {
        const {
            error: t
        } = this.state;
        if (t !== null) {
            for (var n, r, i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
            (n = (r = this.props).onReset) === null || n === void 0 || n.call(r, {
                args: o,
                reason: "imperative-api"
            }), this.setState(Il)
        }
    }
    componentDidCatch(t, n) {
        var r, i;
        (r = (i = this.props).onError) === null || r === void 0 || r.call(i, t, n)
    }
    componentDidUpdate(t, n) {
        const {
            didCatch: r
        } = this.state, {
            resetKeys: i
        } = this.props;
        if (r && n.error !== null && Sy(t.resetKeys, i)) {
            var o, l;
            (o = (l = this.props).onReset) === null || o === void 0 || o.call(l, {
                next: i,
                prev: t.resetKeys,
                reason: "keys"
            }), this.setState(Il)
        }
    }
    render() {
        const {
            children: t,
            fallbackRender: n,
            FallbackComponent: r,
            fallback: i
        } = this.props, {
            didCatch: o,
            error: l
        } = this.state;
        let a = t;
        if (o) {
            const u = {
                error: l,
                resetErrorBoundary: this.resetErrorBoundary
            };
            if (N.isValidElement(i)) a = i;
            else if (typeof n == "function") a = n(u);
            else if (r) a = N.createElement(r, u);
            else throw l
        }
        return N.createElement(yy.Provider, {
            value: {
                didCatch: o,
                error: l,
                resetErrorBoundary: this.resetErrorBoundary
            }
        }, a)
    }
}

function Sy() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]))
}
const wy = Object.prototype.toString;

function Ey(e, t) {
    return wy.call(e) === `[object ${t}]`
}

function gp(e) {
    return Ey(e, "Object")
}

function zu(e) {
    return !!(e && e.then && typeof e.then == "function")
}

function Vi(e) {
    return e && e.Math == Math ? e : void 0
}
const ct = typeof globalThis == "object" && Vi(globalThis) || typeof window == "object" && Vi(window) || typeof self == "object" && Vi(self) || typeof global == "object" && Vi(global) || function() {
    return this
}() || {};

function vp(e, t, n) {
    const r = n || ct,
        i = r.__SENTRY__ = r.__SENTRY__ || {};
    return i[e] || (i[e] = t())
}
const _y = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    Ty = "Sentry Logger ",
    Nc = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    Oc = {};

function yp(e) {
    if (!("console" in ct)) return e();
    const t = ct.console,
        n = {},
        r = Object.keys(Oc);
    r.forEach(i => {
        const o = Oc[i];
        n[i] = t[i], t[i] = o
    });
    try {
        return e()
    } finally {
        r.forEach(i => {
            t[i] = n[i]
        })
    }
}

function ky() {
    let e = !1;
    const t = {
        enable: () => {
            e = !0
        },
        disable: () => {
            e = !1
        },
        isEnabled: () => e
    };
    return _y ? Nc.forEach(n => {
        t[n] = (...r) => {
            e && yp(() => {
                ct.console[n](`${Ty}[${n}]:`, ...r)
            })
        }
    }) : Nc.forEach(n => {
        t[n] = () => {}
    }), t
}
const Xt = ky();

function En(e) {
    return za(e, new Map)
}

function za(e, t) {
    if (Cy(e)) {
        const n = t.get(e);
        if (n !== void 0) return n;
        const r = {};
        t.set(e, r);
        for (const i of Object.keys(e)) typeof e[i] < "u" && (r[i] = za(e[i], t));
        return r
    }
    if (Array.isArray(e)) {
        const n = t.get(e);
        if (n !== void 0) return n;
        const r = [];
        return t.set(e, r), e.forEach(i => {
            r.push(za(i, t))
        }), r
    }
    return e
}

function Cy(e) {
    if (!gp(e)) return !1;
    try {
        const t = Object.getPrototypeOf(e).constructor.name;
        return !t || t === "Object"
    } catch {
        return !0
    }
}

function yt() {
    const e = ct,
        t = e.crypto || e.msCrypto;
    let n = () => Math.random() * 16;
    try {
        if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
        t && t.getRandomValues && (n = () => {
            const r = new Uint8Array(1);
            return t.getRandomValues(r), r[0]
        })
    } catch {}
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, r => (r ^ (n() & 15) >> r / 4).toString(16))
}

function xy(e) {
    return Array.isArray(e) ? e : [e]
}
var xt;
(function(e) {
    e[e.PENDING = 0] = "PENDING";
    const n = 1;
    e[e.RESOLVED = n] = "RESOLVED";
    const r = 2;
    e[e.REJECTED = r] = "REJECTED"
})(xt || (xt = {}));
class Wt {
    constructor(t) {
        Wt.prototype.__init.call(this), Wt.prototype.__init2.call(this), Wt.prototype.__init3.call(this), Wt.prototype.__init4.call(this), this._state = xt.PENDING, this._handlers = [];
        try {
            t(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(t, n) {
        return new Wt((r, i) => {
            this._handlers.push([!1, o => {
                if (!t) r(o);
                else try {
                    r(t(o))
                } catch (l) {
                    i(l)
                }
            }, o => {
                if (!n) i(o);
                else try {
                    r(n(o))
                } catch (l) {
                    i(l)
                }
            }]), this._executeHandlers()
        })
    } catch (t) {
        return this.then(n => n, t)
    } finally(t) {
        return new Wt((n, r) => {
            let i, o;
            return this.then(l => {
                o = !1, i = l, t && t()
            }, l => {
                o = !0, i = l, t && t()
            }).then(() => {
                if (o) {
                    r(i);
                    return
                }
                n(i)
            })
        })
    }
    __init() {
        this._resolve = t => {
            this._setResult(xt.RESOLVED, t)
        }
    }
    __init2() {
        this._reject = t => {
            this._setResult(xt.REJECTED, t)
        }
    }
    __init3() {
        this._setResult = (t, n) => {
            if (this._state === xt.PENDING) {
                if (zu(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = t, this._value = n, this._executeHandlers()
            }
        }
    }
    __init4() {
        this._executeHandlers = () => {
            if (this._state === xt.PENDING) return;
            const t = this._handlers.slice();
            this._handlers = [], t.forEach(n => {
                n[0] || (this._state === xt.RESOLVED && n[1](this._value), this._state === xt.REJECTED && n[2](this._value), n[0] = !0)
            })
        }
    }
}
const Sp = 1e3;

function Fu() {
    return Date.now() / Sp
}

function Py() {
    const {
        performance: e
    } = ct;
    if (!e || !e.now) return Fu;
    const t = Date.now() - e.now(),
        n = e.timeOrigin == null ? t : e.timeOrigin;
    return () => (n + e.now()) / Sp
}
const wp = Py();
(() => {
    const {
        performance: e
    } = ct;
    if (!e || !e.now) return;
    const t = 3600 * 1e3,
        n = e.now(),
        r = Date.now(),
        i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
        o = i < t,
        l = e.timing && e.timing.navigationStart,
        u = typeof l == "number" ? Math.abs(l + n - r) : t,
        s = u < t;
    return o || s ? i <= u ? e.timeOrigin : l : r
})();
const ro = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
    Ep = "production";

function Ry() {
    return vp("globalEventProcessors", () => [])
}

function Fa(e, t, n, r = 0) {
    return new Wt((i, o) => {
        const l = e[r];
        if (t === null || typeof l != "function") i(t);
        else {
            const a = l({ ...t
            }, n);
            ro && l.id && a === null && Xt.log(`Event processor "${l.id}" dropped event`), zu(a) ? a.then(u => Fa(e, u, n, r + 1).then(i)).then(null, o) : Fa(e, a, n, r + 1).then(i).then(null, o)
        }
    })
}

function Ly(e) {
    const t = wp(),
        n = {
            sid: yt(),
            init: !0,
            timestamp: t,
            started: t,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => Oy(n)
        };
    return e && Xo(n, e), n
}

function Xo(e, t = {}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || wp(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : yt()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
    else if (typeof t.duration == "number") e.duration = t.duration;
    else {
        const n = e.timestamp - e.started;
        e.duration = n >= 0 ? n : 0
    }
    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status)
}

function Ny(e, t) {
    let n = {};
    t ? n = {
        status: t
    } : e.status === "ok" && (n = {
        status: "exited"
    }), Xo(e, n)
}

function Oy(e) {
    return En({
        sid: `${e.sid}`,
        init: e.init,
        started: new Date(e.started * 1e3).toISOString(),
        timestamp: new Date(e.timestamp * 1e3).toISOString(),
        status: e.status,
        errors: e.errors,
        did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
        duration: e.duration,
        abnormal_mechanism: e.abnormal_mechanism,
        attrs: {
            release: e.release,
            environment: e.environment,
            ip_address: e.ipAddress,
            user_agent: e.userAgent
        }
    })
}
const Dy = 1;

function My(e) {
    const {
        spanId: t,
        traceId: n
    } = e.spanContext(), {
        data: r,
        op: i,
        parent_span_id: o,
        status: l,
        tags: a,
        origin: u
    } = Oo(e);
    return En({
        data: r,
        op: i,
        parent_span_id: o,
        span_id: t,
        status: l,
        tags: a,
        trace_id: n,
        origin: u
    })
}

function Oo(e) {
    return Ay(e) ? e.getSpanJSON() : typeof e.toJSON == "function" ? e.toJSON() : {}
}

function Ay(e) {
    return typeof e.getSpanJSON == "function"
}

function Iy(e) {
    const {
        traceFlags: t
    } = e.spanContext();
    return !!(t & Dy)
}

function jy(e) {
    if (e) return zy(e) ? {
        captureContext: e
    } : Uy(e) ? {
        captureContext: e
    } : e
}

function zy(e) {
    return e instanceof Jt || typeof e == "function"
}
const Fy = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

function Uy(e) {
    return Object.keys(e).some(t => Fy.includes(t))
}

function a0(e, t) {
    return Uu().captureException(e, jy(t))
}

function By() {
    return Uu().getClient()
}

function Hy() {
    return Uu().getScope()
}

function _p(e) {
    return e.transaction
}

function $y(e, t, n) {
    const r = t.getOptions(),
        {
            publicKey: i
        } = t.getDsn() || {},
        {
            segment: o
        } = n && n.getUser() || {},
        l = En({
            environment: r.environment || Ep,
            release: r.release,
            user_segment: o,
            public_key: i,
            trace_id: e
        });
    return t.emit && t.emit("createDsc", l), l
}

function Vy(e) {
    const t = By();
    if (!t) return {};
    const n = $y(Oo(e).trace_id || "", t, Hy()),
        r = _p(e);
    if (!r) return n;
    const i = r && r._frozenDynamicSamplingContext;
    if (i) return i;
    const {
        sampleRate: o,
        source: l
    } = r.metadata;
    o != null && (n.sample_rate = `${o}`);
    const a = Oo(r);
    return l && l !== "url" && (n.transaction = a.description), n.sampled = String(Iy(r)), t.emit && t.emit("createDsc", n), n
}

function Wy(e, t) {
    const {
        fingerprint: n,
        span: r,
        breadcrumbs: i,
        sdkProcessingMetadata: o
    } = t;
    Qy(e, t), r && Gy(e, r), Xy(e, n), Yy(e, i), Ky(e, o)
}

function Qy(e, t) {
    const {
        extra: n,
        tags: r,
        user: i,
        contexts: o,
        level: l,
        transactionName: a
    } = t, u = En(n);
    u && Object.keys(u).length && (e.extra = { ...u,
        ...e.extra
    });
    const s = En(r);
    s && Object.keys(s).length && (e.tags = { ...s,
        ...e.tags
    });
    const c = En(i);
    c && Object.keys(c).length && (e.user = { ...c,
        ...e.user
    });
    const m = En(o);
    m && Object.keys(m).length && (e.contexts = { ...m,
        ...e.contexts
    }), l && (e.level = l), a && (e.transaction = a)
}

function Yy(e, t) {
    const n = [...e.breadcrumbs || [], ...t];
    e.breadcrumbs = n.length ? n : void 0
}

function Ky(e, t) {
    e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
        ...t
    }
}

function Gy(e, t) {
    e.contexts = {
        trace: My(t),
        ...e.contexts
    };
    const n = _p(t);
    if (n) {
        e.sdkProcessingMetadata = {
            dynamicSamplingContext: Vy(t),
            ...e.sdkProcessingMetadata
        };
        const r = Oo(n).description;
        r && (e.tags = {
            transaction: r,
            ...e.tags
        })
    }
}

function Xy(e, t) {
    e.fingerprint = e.fingerprint ? xy(e.fingerprint) : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
}
const Jy = 100;
class Jt {
    constructor() {
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Dc()
    }
    static clone(t) {
        return t ? t.clone() : new Jt
    }
    clone() {
        const t = new Jt;
        return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags
        }, t._extra = { ...this._extra
        }, t._contexts = { ...this._contexts
        }, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
        }, t._propagationContext = { ...this._propagationContext
        }, t._client = this._client, t
    }
    setClient(t) {
        this._client = t
    }
    getClient() {
        return this._client
    }
    addScopeListener(t) {
        this._scopeListeners.push(t)
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t), this
    }
    setUser(t) {
        return this._user = t || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            segment: void 0,
            username: void 0
        }, this._session && Xo(this._session, {
            user: t
        }), this._notifyScopeListeners(), this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(t) {
        return this._requestSession = t, this
    }
    setTags(t) {
        return this._tags = { ...this._tags,
            ...t
        }, this._notifyScopeListeners(), this
    }
    setTag(t, n) {
        return this._tags = { ...this._tags,
            [t]: n
        }, this._notifyScopeListeners(), this
    }
    setExtras(t) {
        return this._extra = { ...this._extra,
            ...t
        }, this._notifyScopeListeners(), this
    }
    setExtra(t, n) {
        return this._extra = { ...this._extra,
            [t]: n
        }, this._notifyScopeListeners(), this
    }
    setFingerprint(t) {
        return this._fingerprint = t, this._notifyScopeListeners(), this
    }
    setLevel(t) {
        return this._level = t, this._notifyScopeListeners(), this
    }
    setTransactionName(t) {
        return this._transactionName = t, this._notifyScopeListeners(), this
    }
    setContext(t, n) {
        return n === null ? delete this._contexts[t] : this._contexts[t] = n, this._notifyScopeListeners(), this
    }
    setSpan(t) {
        return this._span = t, this._notifyScopeListeners(), this
    }
    getSpan() {
        return this._span
    }
    getTransaction() {
        const t = this._span;
        return t && t.transaction
    }
    setSession(t) {
        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
    }
    getSession() {
        return this._session
    }
    update(t) {
        if (!t) return this;
        if (typeof t == "function") {
            const n = t(this);
            return n instanceof Jt ? n : this
        }
        return t instanceof Jt ? (this._tags = { ...this._tags,
            ...t._tags
        }, this._extra = { ...this._extra,
            ...t._extra
        }, this._contexts = { ...this._contexts,
            ...t._contexts
        }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession), t._propagationContext && (this._propagationContext = t._propagationContext)) : gp(t) && (t = t, this._tags = { ...this._tags,
            ...t.tags
        }, this._extra = { ...this._extra,
            ...t.extra
        }, this._contexts = { ...this._contexts,
            ...t.contexts
        }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession), t.propagationContext && (this._propagationContext = t.propagationContext)), this
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = Dc(), this
    }
    addBreadcrumb(t, n) {
        const r = typeof n == "number" ? n : Jy;
        if (r <= 0) return this;
        const i = {
                timestamp: Fu(),
                ...t
            },
            o = this._breadcrumbs;
        return o.push(i), this._breadcrumbs = o.length > r ? o.slice(-r) : o, this._notifyScopeListeners(), this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this
    }
    addAttachment(t) {
        return this._attachments.push(t), this
    }
    getAttachments() {
        return this.getScopeData().attachments
    }
    clearAttachments() {
        return this._attachments = [], this
    }
    getScopeData() {
        const {
            _breadcrumbs: t,
            _attachments: n,
            _contexts: r,
            _tags: i,
            _extra: o,
            _user: l,
            _level: a,
            _fingerprint: u,
            _eventProcessors: s,
            _propagationContext: c,
            _sdkProcessingMetadata: m,
            _transactionName: h,
            _span: y
        } = this;
        return {
            breadcrumbs: t,
            attachments: n,
            contexts: r,
            tags: i,
            extra: o,
            user: l,
            level: a,
            fingerprint: u || [],
            eventProcessors: s,
            propagationContext: c,
            sdkProcessingMetadata: m,
            transactionName: h,
            span: y
        }
    }
    applyToEvent(t, n = {}, r = []) {
        Wy(t, this.getScopeData());
        const i = [...r, ...Ry(), ...this._eventProcessors];
        return Fa(i, t, n)
    }
    setSDKProcessingMetadata(t) {
        return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata,
            ...t
        }, this
    }
    setPropagationContext(t) {
        return this._propagationContext = t, this
    }
    getPropagationContext() {
        return this._propagationContext
    }
    captureException(t, n) {
        const r = n && n.event_id ? n.event_id : yt();
        if (!this._client) return Xt.warn("No client configured on scope - will not capture exception!"), r;
        const i = new Error("Sentry syntheticException");
        return this._client.captureException(t, {
            originalException: t,
            syntheticException: i,
            ...n,
            event_id: r
        }, this), r
    }
    captureMessage(t, n, r) {
        const i = r && r.event_id ? r.event_id : yt();
        if (!this._client) return Xt.warn("No client configured on scope - will not capture message!"), i;
        const o = new Error(t);
        return this._client.captureMessage(t, n, {
            originalException: t,
            syntheticException: o,
            ...r,
            event_id: i
        }, this), i
    }
    captureEvent(t, n) {
        const r = n && n.event_id ? n.event_id : yt();
        return this._client ? (this._client.captureEvent(t, { ...n,
            event_id: r
        }, this), r) : (Xt.warn("No client configured on scope - will not capture event!"), r)
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
            t(this)
        }), this._notifyingListeners = !1)
    }
}

function Dc() {
    return {
        traceId: yt(),
        spanId: yt().substring(16)
    }
}
const qy = "7.101.1",
    Tp = parseFloat(qy),
    Zy = 100;
class kp {
    constructor(t, n, r, i = Tp) {
        this._version = i;
        let o;
        n ? o = n : (o = new Jt, o.setClient(t));
        let l;
        r ? l = r : (l = new Jt, l.setClient(t)), this._stack = [{
            scope: o
        }], t && this.bindClient(t), this._isolationScope = l
    }
    isOlderThan(t) {
        return this._version < t
    }
    bindClient(t) {
        const n = this.getStackTop();
        n.client = t, n.scope.setClient(t), t && t.setupIntegrations && t.setupIntegrations()
    }
    pushScope() {
        const t = this.getScope().clone();
        return this.getStack().push({
            client: this.getClient(),
            scope: t
        }), t
    }
    popScope() {
        return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
    }
    withScope(t) {
        const n = this.pushScope();
        let r;
        try {
            r = t(n)
        } catch (i) {
            throw this.popScope(), i
        }
        return zu(r) ? r.then(i => (this.popScope(), i), i => {
            throw this.popScope(), i
        }) : (this.popScope(), r)
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getIsolationScope() {
        return this._isolationScope
    }
    getStack() {
        return this._stack
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    captureException(t, n) {
        const r = this._lastEventId = n && n.event_id ? n.event_id : yt(),
            i = new Error("Sentry syntheticException");
        return this.getScope().captureException(t, {
            originalException: t,
            syntheticException: i,
            ...n,
            event_id: r
        }), r
    }
    captureMessage(t, n, r) {
        const i = this._lastEventId = r && r.event_id ? r.event_id : yt(),
            o = new Error(t);
        return this.getScope().captureMessage(t, n, {
            originalException: t,
            syntheticException: o,
            ...r,
            event_id: i
        }), i
    }
    captureEvent(t, n) {
        const r = n && n.event_id ? n.event_id : yt();
        return t.type || (this._lastEventId = r), this.getScope().captureEvent(t, { ...n,
            event_id: r
        }), r
    }
    lastEventId() {
        return this._lastEventId
    }
    addBreadcrumb(t, n) {
        const {
            scope: r,
            client: i
        } = this.getStackTop();
        if (!i) return;
        const {
            beforeBreadcrumb: o = null,
            maxBreadcrumbs: l = Zy
        } = i.getOptions && i.getOptions() || {};
        if (l <= 0) return;
        const u = {
                timestamp: Fu(),
                ...t
            },
            s = o ? yp(() => o(u, n)) : u;
        s !== null && (i.emit && i.emit("beforeAddBreadcrumb", s, n), r.addBreadcrumb(s, l))
    }
    setUser(t) {
        this.getScope().setUser(t), this.getIsolationScope().setUser(t)
    }
    setTags(t) {
        this.getScope().setTags(t), this.getIsolationScope().setTags(t)
    }
    setExtras(t) {
        this.getScope().setExtras(t), this.getIsolationScope().setExtras(t)
    }
    setTag(t, n) {
        this.getScope().setTag(t, n), this.getIsolationScope().setTag(t, n)
    }
    setExtra(t, n) {
        this.getScope().setExtra(t, n), this.getIsolationScope().setExtra(t, n)
    }
    setContext(t, n) {
        this.getScope().setContext(t, n), this.getIsolationScope().setContext(t, n)
    }
    configureScope(t) {
        const {
            scope: n,
            client: r
        } = this.getStackTop();
        r && t(n)
    }
    run(t) {
        const n = Mc(this);
        try {
            t(this)
        } finally {
            Mc(n)
        }
    }
    getIntegration(t) {
        const n = this.getClient();
        if (!n) return null;
        try {
            return n.getIntegration(t)
        } catch {
            return ro && Xt.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
        }
    }
    startTransaction(t, n) {
        const r = this._callExtensionMethod("startTransaction", t, n);
        return ro && !r && (this.getClient() ? Xt.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`) : Xt.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), r
    }
    traceHeaders() {
        return this._callExtensionMethod("traceHeaders")
    }
    captureSession(t = !1) {
        if (t) return this.endSession();
        this._sendSessionUpdate()
    }
    endSession() {
        const n = this.getStackTop().scope,
            r = n.getSession();
        r && Ny(r), this._sendSessionUpdate(), n.setSession()
    }
    startSession(t) {
        const {
            scope: n,
            client: r
        } = this.getStackTop(), {
            release: i,
            environment: o = Ep
        } = r && r.getOptions() || {}, {
            userAgent: l
        } = ct.navigator || {}, a = Ly({
            release: i,
            environment: o,
            user: n.getUser(),
            ...l && {
                userAgent: l
            },
            ...t
        }), u = n.getSession && n.getSession();
        return u && u.status === "ok" && Xo(u, {
            status: "exited"
        }), this.endSession(), n.setSession(a), a
    }
    shouldSendDefaultPii() {
        const t = this.getClient(),
            n = t && t.getOptions();
        return !!(n && n.sendDefaultPii)
    }
    _sendSessionUpdate() {
        const {
            scope: t,
            client: n
        } = this.getStackTop(), r = t.getSession();
        r && n && n.captureSession && n.captureSession(r)
    }
    _callExtensionMethod(t, ...n) {
        const i = Jo().__SENTRY__;
        if (i && i.extensions && typeof i.extensions[t] == "function") return i.extensions[t].apply(this, n);
        ro && Xt.warn(`Extension method ${t} couldn't be found, doing nothing.`)
    }
}

function Jo() {
    return ct.__SENTRY__ = ct.__SENTRY__ || {
        extensions: {},
        hub: void 0
    }, ct
}

function Mc(e) {
    const t = Jo(),
        n = Ua(t);
    return Cp(t, e), n
}

function Uu() {
    const e = Jo();
    if (e.__SENTRY__ && e.__SENTRY__.acs) {
        const t = e.__SENTRY__.acs.getCurrentHub();
        if (t) return t
    }
    return by(e)
}

function by(e = Jo()) {
    return (!e0(e) || Ua(e).isOlderThan(Tp)) && Cp(e, new kp), Ua(e)
}

function e0(e) {
    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
}

function Ua(e) {
    return vp("hub", () => new kp, e)
}

function Cp(e, t) {
    if (!e) return !1;
    const n = e.__SENTRY__ = e.__SENTRY__ || {};
    return n.hub = t, !0
}
export {
    l0 as E, Lc as H, r0 as O, o0 as R, i0 as a, es as b, a0 as c, bp as d, Kd as e, n0 as f, qn as g, t0 as j, N as r, nv as u
};