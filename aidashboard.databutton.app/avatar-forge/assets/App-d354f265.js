import {
    r as i,
    j as c,
    d as lr,
    e as at,
    f as cr,
    g as be
} from "./vendor-65fd4c09.js";

function ur(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function st(...e) {
    return t => e.forEach(r => ur(r, t))
}

function G(...e) {
    return i.useCallback(st(...e), e)
}
var pe = i.forwardRef((e, t) => {
    const {
        children: r,
        ...n
    } = e, o = i.Children.toArray(r), a = o.find(fr);
    if (a) {
        const l = a.props.children,
            s = o.map(f => f === a ? i.Children.count(l) > 1 ? i.Children.only(null) : i.isValidElement(l) ? l.props.children : null : f);
        return c.jsx(je, { ...n,
            ref: t,
            children: i.isValidElement(l) ? i.cloneElement(l, void 0, s) : null
        })
    }
    return c.jsx(je, { ...n,
        ref: t,
        children: r
    })
});
pe.displayName = "Slot";
var je = i.forwardRef((e, t) => {
    const {
        children: r,
        ...n
    } = e;
    if (i.isValidElement(r)) {
        const o = gr(r);
        return i.cloneElement(r, { ...pr(n, r.props),
            ref: t ? st(t, o) : o
        })
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null
});
je.displayName = "SlotClone";
var dr = ({
    children: e
}) => c.jsx(c.Fragment, {
    children: e
});

function fr(e) {
    return i.isValidElement(e) && e.type === dr
}

function pr(e, t) {
    const r = { ...t
    };
    for (const n in t) {
        const o = e[n],
            a = t[n];
        /^on[A-Z]/.test(n) ? o && a ? r[n] = (...s) => {
            a(...s), o(...s)
        } : o && (r[n] = o) : n === "style" ? r[n] = { ...o,
            ...a
        } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "))
    }
    return { ...e,
        ...r
    }
}

function gr(e) {
    var n, o;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get,
        r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
}

function it(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (r = it(e[t])) && (n && (n += " "), n += r);
        else
            for (t in e) e[t] && (n && (n += " "), n += t);
    return n
}

function mr() {
    for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = it(e)) && (n && (n += " "), n += t);
    return n
}
const Ue = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e,
    Ge = mr,
    lt = (e, t) => r => {
        var n;
        if ((t == null ? void 0 : t.variants) == null) return Ge(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
        const {
            variants: o,
            defaultVariants: a
        } = t, l = Object.keys(o).map(u => {
            const p = r == null ? void 0 : r[u],
                g = a == null ? void 0 : a[u];
            if (p === null) return null;
            const m = Ue(p) || Ue(g);
            return o[u][m]
        }), s = r && Object.entries(r).reduce((u, p) => {
            let [g, m] = p;
            return m === void 0 || (u[g] = m), u
        }, {}), f = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, p) => {
            let {
                class: g,
                className: m,
                ...b
            } = p;
            return Object.entries(b).every(y => {
                let [d, h] = y;
                return Array.isArray(h) ? h.includes({ ...a,
                    ...s
                }[d]) : { ...a,
                    ...s
                }[d] === h
            }) ? [...u, g, m] : u
        }, []);
        return Ge(e, l, f, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
    };

function ct(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (r = ct(e[t])) && (n && (n += " "), n += r)
        } else
            for (r in e) e[r] && (n && (n += " "), n += r);
    return n
}

function hr() {
    for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = ct(e)) && (n && (n += " "), n += t);
    return n
}
const Te = "-",
    vr = e => {
        const t = yr(e),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: n
            } = e;
        return {
            getClassGroupId: l => {
                const s = l.split(Te);
                return s[0] === "" && s.length !== 1 && s.shift(), ut(s, t) || br(l)
            },
            getConflictingClassGroupIds: (l, s) => {
                const f = r[l] || [];
                return s && n[l] ? [...f, ...n[l]] : f
            }
        }
    },
    ut = (e, t) => {
        var l;
        if (e.length === 0) return t.classGroupId;
        const r = e[0],
            n = t.nextPart.get(r),
            o = n ? ut(e.slice(1), n) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const a = e.join(Te);
        return (l = t.validators.find(({
            validator: s
        }) => s(a))) == null ? void 0 : l.classGroupId
    },
    Ve = /^\[(.+)\]$/,
    br = e => {
        if (Ve.test(e)) {
            const t = Ve.exec(e)[1],
                r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r
        }
    },
    yr = e => {
        const {
            theme: t,
            prefix: r
        } = e, n = {
            nextPart: new Map,
            validators: []
        };
        return wr(Object.entries(e.classGroups), r).forEach(([a, l]) => {
            Ae(l, n, a, t)
        }), n
    },
    Ae = (e, t, r, n) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const a = o === "" ? t : He(t, o);
                a.classGroupId = r;
                return
            }
            if (typeof o == "function") {
                if (xr(o)) {
                    Ae(o(n), t, r, n);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: r
                });
                return
            }
            Object.entries(o).forEach(([a, l]) => {
                Ae(l, He(t, a), r, n)
            })
        })
    },
    He = (e, t) => {
        let r = e;
        return t.split(Te).forEach(n => {
            r.nextPart.has(n) || r.nextPart.set(n, {
                nextPart: new Map,
                validators: []
            }), r = r.nextPart.get(n)
        }), r
    },
    xr = e => e.isThemeGetter,
    wr = (e, t) => t ? e.map(([r, n]) => {
        const o = n.map(a => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([l, s]) => [t + l, s])) : a);
        return [r, o]
    }) : e,
    Cr = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            r = new Map,
            n = new Map;
        const o = (a, l) => {
            r.set(a, l), t++, t > e && (t = 0, n = r, r = new Map)
        };
        return {
            get(a) {
                let l = r.get(a);
                if (l !== void 0) return l;
                if ((l = n.get(a)) !== void 0) return o(a, l), l
            },
            set(a, l) {
                r.has(a) ? r.set(a, l) : o(a, l)
            }
        }
    },
    dt = "!",
    Er = e => {
        const {
            separator: t,
            experimentalParseClassName: r
        } = e, n = t.length === 1, o = t[0], a = t.length, l = s => {
            const f = [];
            let u = 0,
                p = 0,
                g;
            for (let h = 0; h < s.length; h++) {
                let v = s[h];
                if (u === 0) {
                    if (v === o && (n || s.slice(h, h + a) === t)) {
                        f.push(s.slice(p, h)), p = h + a;
                        continue
                    }
                    if (v === "/") {
                        g = h;
                        continue
                    }
                }
                v === "[" ? u++ : v === "]" && u--
            }
            const m = f.length === 0 ? s : s.substring(p),
                b = m.startsWith(dt),
                y = b ? m.substring(1) : m,
                d = g && g > p ? g - p : void 0;
            return {
                modifiers: f,
                hasImportantModifier: b,
                baseClassName: y,
                maybePostfixModifierPosition: d
            }
        };
        return r ? s => r({
            className: s,
            parseClassName: l
        }) : l
    },
    Nr = e => {
        if (e.length <= 1) return e;
        const t = [];
        let r = [];
        return e.forEach(n => {
            n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n)
        }), t.push(...r.sort()), t
    },
    Sr = e => ({
        cache: Cr(e.cacheSize),
        parseClassName: Er(e),
        ...vr(e)
    }),
    Rr = /\s+/,
    Pr = (e, t) => {
        const {
            parseClassName: r,
            getClassGroupId: n,
            getConflictingClassGroupIds: o
        } = t, a = [], l = e.trim().split(Rr);
        let s = "";
        for (let f = l.length - 1; f >= 0; f -= 1) {
            const u = l[f],
                {
                    modifiers: p,
                    hasImportantModifier: g,
                    baseClassName: m,
                    maybePostfixModifierPosition: b
                } = r(u);
            let y = !!b,
                d = n(y ? m.substring(0, b) : m);
            if (!d) {
                if (!y) {
                    s = u + (s.length > 0 ? " " + s : s);
                    continue
                }
                if (d = n(m), !d) {
                    s = u + (s.length > 0 ? " " + s : s);
                    continue
                }
                y = !1
            }
            const h = Nr(p).join(":"),
                v = g ? h + dt : h,
                w = v + d;
            if (a.includes(w)) continue;
            a.push(w);
            const E = o(d, y);
            for (let C = 0; C < E.length; ++C) {
                const S = E[C];
                a.push(v + S)
            }
            s = u + (s.length > 0 ? " " + s : s)
        }
        return s
    };

function jr() {
    let e = 0,
        t, r, n = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (r = ft(t)) && (n && (n += " "), n += r);
    return n
}
const ft = e => {
    if (typeof e == "string") return e;
    let t, r = "";
    for (let n = 0; n < e.length; n++) e[n] && (t = ft(e[n])) && (r && (r += " "), r += t);
    return r
};

function Ar(e, ...t) {
    let r, n, o, a = l;

    function l(f) {
        const u = t.reduce((p, g) => g(p), e());
        return r = Sr(u), n = r.cache.get, o = r.cache.set, a = s, s(f)
    }

    function s(f) {
        const u = n(f);
        if (u) return u;
        const p = Pr(f, r);
        return o(f, p), p
    }
    return function() {
        return a(jr.apply(null, arguments))
    }
}
const R = e => {
        const t = r => r[e] || [];
        return t.isThemeGetter = !0, t
    },
    pt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    kr = /^\d+\/\d+$/,
    Or = new Set(["px", "full", "screen"]),
    Mr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Dr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Tr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Ir = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Lr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    I = e => X(e) || Or.has(e) || kr.test(e),
    L = e => Y(e, "length", Gr),
    X = e => !!e && !Number.isNaN(Number(e)),
    ye = e => Y(e, "number", X),
    q = e => !!e && Number.isInteger(Number(e)),
    _r = e => e.endsWith("%") && X(e.slice(0, -1)),
    x = e => pt.test(e),
    _ = e => Mr.test(e),
    Fr = new Set(["length", "size", "percentage"]),
    Wr = e => Y(e, Fr, gt),
    zr = e => Y(e, "position", gt),
    $r = new Set(["image", "url"]),
    Br = e => Y(e, $r, Hr),
    Ur = e => Y(e, "", Vr),
    Q = () => !0,
    Y = (e, t, r) => {
        const n = pt.exec(e);
        return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1
    },
    Gr = e => Dr.test(e) && !Tr.test(e),
    gt = () => !1,
    Vr = e => Ir.test(e),
    Hr = e => Lr.test(e),
    Kr = () => {
        const e = R("colors"),
            t = R("spacing"),
            r = R("blur"),
            n = R("brightness"),
            o = R("borderColor"),
            a = R("borderRadius"),
            l = R("borderSpacing"),
            s = R("borderWidth"),
            f = R("contrast"),
            u = R("grayscale"),
            p = R("hueRotate"),
            g = R("invert"),
            m = R("gap"),
            b = R("gradientColorStops"),
            y = R("gradientColorStopPositions"),
            d = R("inset"),
            h = R("margin"),
            v = R("opacity"),
            w = R("padding"),
            E = R("saturate"),
            C = R("scale"),
            S = R("sepia"),
            A = R("skew"),
            N = R("space"),
            k = R("translate"),
            D = () => ["auto", "contain", "none"],
            $ = () => ["auto", "hidden", "clip", "visible", "scroll"],
            he = () => ["auto", x, t],
            P = () => [x, t],
            We = () => ["", I, L],
            J = () => ["auto", X, x],
            ze = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            ee = () => ["solid", "dashed", "dotted", "double", "none"],
            $e = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            ve = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            Z = () => ["", "0", x],
            Be = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            T = () => [X, x];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Q],
                spacing: [I, L],
                blur: ["none", "", _, x],
                brightness: T(),
                borderColor: [e],
                borderRadius: ["none", "", "full", _, x],
                borderSpacing: P(),
                borderWidth: We(),
                contrast: T(),
                grayscale: Z(),
                hueRotate: T(),
                invert: Z(),
                gap: P(),
                gradientColorStops: [e],
                gradientColorStopPositions: [_r, L],
                inset: he(),
                margin: he(),
                opacity: T(),
                padding: P(),
                saturate: T(),
                scale: T(),
                sepia: Z(),
                skew: T(),
                space: P(),
                translate: P()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", x]
                }],
                container: ["container"],
                columns: [{
                    columns: [_]
                }],
                "break-after": [{
                    "break-after": Be()
                }],
                "break-before": [{
                    "break-before": Be()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...ze(), x]
                }],
                overflow: [{
                    overflow: $()
                }],
                "overflow-x": [{
                    "overflow-x": $()
                }],
                "overflow-y": [{
                    "overflow-y": $()
                }],
                overscroll: [{
                    overscroll: D()
                }],
                "overscroll-x": [{
                    "overscroll-x": D()
                }],
                "overscroll-y": [{
                    "overscroll-y": D()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [d]
                }],
                "inset-x": [{
                    "inset-x": [d]
                }],
                "inset-y": [{
                    "inset-y": [d]
                }],
                start: [{
                    start: [d]
                }],
                end: [{
                    end: [d]
                }],
                top: [{
                    top: [d]
                }],
                right: [{
                    right: [d]
                }],
                bottom: [{
                    bottom: [d]
                }],
                left: [{
                    left: [d]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", q, x]
                }],
                basis: [{
                    basis: he()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", x]
                }],
                grow: [{
                    grow: Z()
                }],
                shrink: [{
                    shrink: Z()
                }],
                order: [{
                    order: ["first", "last", "none", q, x]
                }],
                "grid-cols": [{
                    "grid-cols": [Q]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", q, x]
                    }, x]
                }],
                "col-start": [{
                    "col-start": J()
                }],
                "col-end": [{
                    "col-end": J()
                }],
                "grid-rows": [{
                    "grid-rows": [Q]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [q, x]
                    }, x]
                }],
                "row-start": [{
                    "row-start": J()
                }],
                "row-end": [{
                    "row-end": J()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", x]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", x]
                }],
                gap: [{
                    gap: [m]
                }],
                "gap-x": [{
                    "gap-x": [m]
                }],
                "gap-y": [{
                    "gap-y": [m]
                }],
                "justify-content": [{
                    justify: ["normal", ...ve()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...ve(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...ve(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [w]
                }],
                px: [{
                    px: [w]
                }],
                py: [{
                    py: [w]
                }],
                ps: [{
                    ps: [w]
                }],
                pe: [{
                    pe: [w]
                }],
                pt: [{
                    pt: [w]
                }],
                pr: [{
                    pr: [w]
                }],
                pb: [{
                    pb: [w]
                }],
                pl: [{
                    pl: [w]
                }],
                m: [{
                    m: [h]
                }],
                mx: [{
                    mx: [h]
                }],
                my: [{
                    my: [h]
                }],
                ms: [{
                    ms: [h]
                }],
                me: [{
                    me: [h]
                }],
                mt: [{
                    mt: [h]
                }],
                mr: [{
                    mr: [h]
                }],
                mb: [{
                    mb: [h]
                }],
                ml: [{
                    ml: [h]
                }],
                "space-x": [{
                    "space-x": [N]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [N]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", x, t]
                }],
                "min-w": [{
                    "min-w": [x, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [x, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [_]
                    }, _]
                }],
                h: [{
                    h: [x, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [x, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [x, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", _, L]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ye]
                }],
                "font-family": [{
                    font: [Q]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", x]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", X, ye]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", I, x]
                }],
                "list-image": [{
                    "list-image": ["none", x]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", x]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [v]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [v]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...ee(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", I, L]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", I, x]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: P()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", x]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [v]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...ze(), zr]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Wr]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Br]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [y]
                }],
                "gradient-via-pos": [{
                    via: [y]
                }],
                "gradient-to-pos": [{
                    to: [y]
                }],
                "gradient-from": [{
                    from: [b]
                }],
                "gradient-via": [{
                    via: [b]
                }],
                "gradient-to": [{
                    to: [b]
                }],
                rounded: [{
                    rounded: [a]
                }],
                "rounded-s": [{
                    "rounded-s": [a]
                }],
                "rounded-e": [{
                    "rounded-e": [a]
                }],
                "rounded-t": [{
                    "rounded-t": [a]
                }],
                "rounded-r": [{
                    "rounded-r": [a]
                }],
                "rounded-b": [{
                    "rounded-b": [a]
                }],
                "rounded-l": [{
                    "rounded-l": [a]
                }],
                "rounded-ss": [{
                    "rounded-ss": [a]
                }],
                "rounded-se": [{
                    "rounded-se": [a]
                }],
                "rounded-ee": [{
                    "rounded-ee": [a]
                }],
                "rounded-es": [{
                    "rounded-es": [a]
                }],
                "rounded-tl": [{
                    "rounded-tl": [a]
                }],
                "rounded-tr": [{
                    "rounded-tr": [a]
                }],
                "rounded-br": [{
                    "rounded-br": [a]
                }],
                "rounded-bl": [{
                    "rounded-bl": [a]
                }],
                "border-w": [{
                    border: [s]
                }],
                "border-w-x": [{
                    "border-x": [s]
                }],
                "border-w-y": [{
                    "border-y": [s]
                }],
                "border-w-s": [{
                    "border-s": [s]
                }],
                "border-w-e": [{
                    "border-e": [s]
                }],
                "border-w-t": [{
                    "border-t": [s]
                }],
                "border-w-r": [{
                    "border-r": [s]
                }],
                "border-w-b": [{
                    "border-b": [s]
                }],
                "border-w-l": [{
                    "border-l": [s]
                }],
                "border-opacity": [{
                    "border-opacity": [v]
                }],
                "border-style": [{
                    border: [...ee(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [s]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [s]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [v]
                }],
                "divide-style": [{
                    divide: ee()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...ee()]
                }],
                "outline-offset": [{
                    "outline-offset": [I, x]
                }],
                "outline-w": [{
                    outline: [I, L]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: We()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [v]
                }],
                "ring-offset-w": [{
                    "ring-offset": [I, L]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", _, Ur]
                }],
                "shadow-color": [{
                    shadow: [Q]
                }],
                opacity: [{
                    opacity: [v]
                }],
                "mix-blend": [{
                    "mix-blend": [...$e(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": $e()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [r]
                }],
                brightness: [{
                    brightness: [n]
                }],
                contrast: [{
                    contrast: [f]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", _, x]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [p]
                }],
                invert: [{
                    invert: [g]
                }],
                saturate: [{
                    saturate: [E]
                }],
                sepia: [{
                    sepia: [S]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [r]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [n]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [f]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [p]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [g]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [v]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [E]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [S]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [l]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [l]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [l]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", x]
                }],
                duration: [{
                    duration: T()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", x]
                }],
                delay: [{
                    delay: T()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", x]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [C]
                }],
                "scale-x": [{
                    "scale-x": [C]
                }],
                "scale-y": [{
                    "scale-y": [C]
                }],
                rotate: [{
                    rotate: [q, x]
                }],
                "translate-x": [{
                    "translate-x": [k]
                }],
                "translate-y": [{
                    "translate-y": [k]
                }],
                "skew-x": [{
                    "skew-x": [A]
                }],
                "skew-y": [{
                    "skew-y": [A]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", x]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": P()
                }],
                "scroll-mx": [{
                    "scroll-mx": P()
                }],
                "scroll-my": [{
                    "scroll-my": P()
                }],
                "scroll-ms": [{
                    "scroll-ms": P()
                }],
                "scroll-me": [{
                    "scroll-me": P()
                }],
                "scroll-mt": [{
                    "scroll-mt": P()
                }],
                "scroll-mr": [{
                    "scroll-mr": P()
                }],
                "scroll-mb": [{
                    "scroll-mb": P()
                }],
                "scroll-ml": [{
                    "scroll-ml": P()
                }],
                "scroll-p": [{
                    "scroll-p": P()
                }],
                "scroll-px": [{
                    "scroll-px": P()
                }],
                "scroll-py": [{
                    "scroll-py": P()
                }],
                "scroll-ps": [{
                    "scroll-ps": P()
                }],
                "scroll-pe": [{
                    "scroll-pe": P()
                }],
                "scroll-pt": [{
                    "scroll-pt": P()
                }],
                "scroll-pr": [{
                    "scroll-pr": P()
                }],
                "scroll-pb": [{
                    "scroll-pb": P()
                }],
                "scroll-pl": [{
                    "scroll-pl": P()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", x]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [I, L, ye]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Xr = Ar(Kr);

function j(...e) {
    return Xr(hr(e))
}
const Yr = lt("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    ce = i.forwardRef(({
        className: e,
        variant: t,
        size: r,
        asChild: n = !1,
        ...o
    }, a) => {
        const l = n ? pe : "button";
        return c.jsx(l, {
            className: j(Yr({
                variant: t,
                size: r,
                className: e
            })),
            ref: a,
            ...o
        })
    });
ce.displayName = "Button";
const mt = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx("div", {
    ref: r,
    className: j("rounded-xl border bg-card text-card-foreground shadow", e),
    ...t
}));
mt.displayName = "Card";
const ht = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx("div", {
    ref: r,
    className: j("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
ht.displayName = "CardHeader";
const vt = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx("h3", {
    ref: r,
    className: j("font-semibold leading-none tracking-tight", e),
    ...t
}));
vt.displayName = "CardTitle";
const Zr = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx("p", {
    ref: r,
    className: j("text-sm text-muted-foreground", e),
    ...t
}));
Zr.displayName = "CardDescription";
const bt = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx("div", {
    ref: r,
    className: j("p-6 pt-0", e),
    ...t
}));
bt.displayName = "CardContent";
const yt = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx("div", {
    ref: r,
    className: j("flex items-center p-6 pt-0", e),
    ...t
}));
yt.displayName = "CardFooter";

function qr({
    id: e,
    name: t,
    imageUrl: r,
    onEdit: n
}) {
    const o = () => {
        n && n({
            id: e,
            name: t,
            imageUrl: r
        })
    };
    return c.jsxs(mt, {
        className: "bg-gray-800/60 border-cyan-500/30 text-gray-100 shadow-lg shadow-cyan-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-in-out rounded-lg overflow-hidden flex flex-col justify-between h-full group",
        children: [c.jsx(ht, {
            className: "p-0 overflow-hidden",
            children: c.jsx("img", {
                src: r,
                alt: `Avatar of ${t}`,
                className: "w-full h-48 object-cover aspect-square group-hover:opacity-90 group-hover:brightness-110 transition-all duration-300 rounded-t-lg"
            })
        }), c.jsx(bt, {
            className: "p-4 flex-grow",
            children: c.jsx(vt, {
                className: "text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500 leading-tight",
                children: t
            })
        }), c.jsx(yt, {
            className: "p-4 border-t border-gray-700/50",
            children: c.jsx(ce, {
                onClick: o,
                variant: "outline",
                className: "w-full bg-transparent border-cyan-600 hover:border-purple-600 text-cyan-400 hover:text-purple-400 hover:bg-gray-700/50 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-lg hover:shadow-cyan-500/50 focus:outline-none focus:ring-4 focus:ring-cyan-600/40 dark:focus:ring-purple-700/40",
                children: "Edit Avatar"
            })
        })]
    })
}

function z(e, t, {
    checkForDefaultPrevented: r = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), r === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Qr(e, t) {
    const r = i.createContext(t);

    function n(a) {
        const {
            children: l,
            ...s
        } = a, f = i.useMemo(() => s, Object.values(s));
        return c.jsx(r.Provider, {
            value: f,
            children: l
        })
    }

    function o(a) {
        const l = i.useContext(r);
        if (l) return l;
        if (t !== void 0) return t;
        throw new Error(`\`${a}\` must be used within \`${e}\``)
    }
    return n.displayName = e + "Provider", [n, o]
}

function Jr(e, t = []) {
    let r = [];

    function n(a, l) {
        const s = i.createContext(l),
            f = r.length;
        r = [...r, l];

        function u(g) {
            const {
                scope: m,
                children: b,
                ...y
            } = g, d = (m == null ? void 0 : m[e][f]) || s, h = i.useMemo(() => y, Object.values(y));
            return c.jsx(d.Provider, {
                value: h,
                children: b
            })
        }

        function p(g, m) {
            const b = (m == null ? void 0 : m[e][f]) || s,
                y = i.useContext(b);
            if (y) return y;
            if (l !== void 0) return l;
            throw new Error(`\`${g}\` must be used within \`${a}\``)
        }
        return u.displayName = a + "Provider", [u, p]
    }
    const o = () => {
        const a = r.map(l => i.createContext(l));
        return function(s) {
            const f = (s == null ? void 0 : s[e]) || a;
            return i.useMemo(() => ({
                [`__scope${e}`]: { ...s,
                    [e]: f
                }
            }), [s, f])
        }
    };
    return o.scopeName = e, [n, en(o, ...t)]
}

function en(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const r = () => {
        const n = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(a) {
            const l = n.reduce((s, {
                useScope: f,
                scopeName: u
            }) => {
                const g = f(a)[`__scope${u}`];
                return { ...s,
                    ...g
                }
            }, {});
            return i.useMemo(() => ({
                [`__scope${t.scopeName}`]: l
            }), [l])
        }
    };
    return r.scopeName = t.scopeName, r
}
var ue = globalThis != null && globalThis.document ? i.useLayoutEffect : () => {},
    tn = lr["useId".toString()] || (() => {}),
    rn = 0;

function xe(e) {
    const [t, r] = i.useState(tn());
    return ue(() => {
        e || r(n => n ? ? String(rn++))
    }, [e]), e || (t ? `radix-${t}` : "")
}

function B(e) {
    const t = i.useRef(e);
    return i.useEffect(() => {
        t.current = e
    }), i.useMemo(() => (...r) => {
        var n;
        return (n = t.current) == null ? void 0 : n.call(t, ...r)
    }, [])
}

function nn({
    prop: e,
    defaultProp: t,
    onChange: r = () => {}
}) {
    const [n, o] = on({
        defaultProp: t,
        onChange: r
    }), a = e !== void 0, l = a ? e : n, s = B(r), f = i.useCallback(u => {
        if (a) {
            const g = typeof u == "function" ? u(e) : u;
            g !== e && s(g)
        } else o(u)
    }, [a, e, o, s]);
    return [l, f]
}

function on({
    defaultProp: e,
    onChange: t
}) {
    const r = i.useState(e),
        [n] = r,
        o = i.useRef(n),
        a = B(t);
    return i.useEffect(() => {
        o.current !== n && (a(n), o.current = n)
    }, [n, o, a]), r
}
var an = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    M = an.reduce((e, t) => {
        const r = i.forwardRef((n, o) => {
            const {
                asChild: a,
                ...l
            } = n, s = a ? pe : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), c.jsx(s, { ...l,
                ref: o
            })
        });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function sn(e, t) {
    e && at.flushSync(() => e.dispatchEvent(t))
}

function ln(e, t = globalThis == null ? void 0 : globalThis.document) {
    const r = B(e);
    i.useEffect(() => {
        const n = o => {
            o.key === "Escape" && r(o)
        };
        return t.addEventListener("keydown", n, {
            capture: !0
        }), () => t.removeEventListener("keydown", n, {
            capture: !0
        })
    }, [r, t])
}
var cn = "DismissableLayer",
    ke = "dismissableLayer.update",
    un = "dismissableLayer.pointerDownOutside",
    dn = "dismissableLayer.focusOutside",
    Ke, xt = i.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    wt = i.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: s,
            ...f
        } = e, u = i.useContext(xt), [p, g] = i.useState(null), m = (p == null ? void 0 : p.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, b] = i.useState({}), y = G(t, N => g(N)), d = Array.from(u.layers), [h] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = d.indexOf(h), w = p ? d.indexOf(p) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= v, S = gn(N => {
            const k = N.target,
                D = [...u.branches].some($ => $.contains(k));
            !C || D || (o == null || o(N), l == null || l(N), N.defaultPrevented || s == null || s())
        }, m), A = mn(N => {
            const k = N.target;
            [...u.branches].some($ => $.contains(k)) || (a == null || a(N), l == null || l(N), N.defaultPrevented || s == null || s())
        }, m);
        return ln(N => {
            w === u.layers.size - 1 && (n == null || n(N), !N.defaultPrevented && s && (N.preventDefault(), s()))
        }, m), i.useEffect(() => {
            if (p) return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ke = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(p)), u.layers.add(p), Xe(), () => {
                r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Ke)
            }
        }, [p, m, r, u]), i.useEffect(() => () => {
            p && (u.layers.delete(p), u.layersWithOutsidePointerEventsDisabled.delete(p), Xe())
        }, [p, u]), i.useEffect(() => {
            const N = () => b({});
            return document.addEventListener(ke, N), () => document.removeEventListener(ke, N)
        }, []), c.jsx(M.div, { ...f,
            ref: y,
            style: {
                pointerEvents: E ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: z(e.onFocusCapture, A.onFocusCapture),
            onBlurCapture: z(e.onBlurCapture, A.onBlurCapture),
            onPointerDownCapture: z(e.onPointerDownCapture, S.onPointerDownCapture)
        })
    });
wt.displayName = cn;
var fn = "DismissableLayerBranch",
    pn = i.forwardRef((e, t) => {
        const r = i.useContext(xt),
            n = i.useRef(null),
            o = G(t, n);
        return i.useEffect(() => {
            const a = n.current;
            if (a) return r.branches.add(a), () => {
                r.branches.delete(a)
            }
        }, [r.branches]), c.jsx(M.div, { ...e,
            ref: o
        })
    });
pn.displayName = fn;

function gn(e, t = globalThis == null ? void 0 : globalThis.document) {
    const r = B(e),
        n = i.useRef(!1),
        o = i.useRef(() => {});
    return i.useEffect(() => {
        const a = s => {
                if (s.target && !n.current) {
                    let f = function() {
                        Ct(un, r, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: s
                    };
                    s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, {
                        once: !0
                    })) : f()
                } else t.removeEventListener("click", o.current);
                n.current = !1
            },
            l = window.setTimeout(() => {
                t.addEventListener("pointerdown", a)
            }, 0);
        return () => {
            window.clearTimeout(l), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current)
        }
    }, [t, r]), {
        onPointerDownCapture: () => n.current = !0
    }
}

function mn(e, t = globalThis == null ? void 0 : globalThis.document) {
    const r = B(e),
        n = i.useRef(!1);
    return i.useEffect(() => {
        const o = a => {
            a.target && !n.current && Ct(dn, r, {
                originalEvent: a
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, r]), {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}

function Xe() {
    const e = new CustomEvent(ke);
    document.dispatchEvent(e)
}

function Ct(e, t, r, {
    discrete: n
}) {
    const o = r.originalEvent.target,
        a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), n ? sn(o, a) : o.dispatchEvent(a)
}
var we = "focusScope.autoFocusOnMount",
    Ce = "focusScope.autoFocusOnUnmount",
    Ye = {
        bubbles: !1,
        cancelable: !0
    },
    hn = "FocusScope",
    Et = i.forwardRef((e, t) => {
        const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...l
        } = e, [s, f] = i.useState(null), u = B(o), p = B(a), g = i.useRef(null), m = G(t, d => f(d)), b = i.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        i.useEffect(() => {
            if (n) {
                let d = function(E) {
                        if (b.paused || !s) return;
                        const C = E.target;
                        s.contains(C) ? g.current = C : F(g.current, {
                            select: !0
                        })
                    },
                    h = function(E) {
                        if (b.paused || !s) return;
                        const C = E.relatedTarget;
                        C !== null && (s.contains(C) || F(g.current, {
                            select: !0
                        }))
                    },
                    v = function(E) {
                        if (document.activeElement === document.body)
                            for (const S of E) S.removedNodes.length > 0 && F(s)
                    };
                document.addEventListener("focusin", d), document.addEventListener("focusout", h);
                const w = new MutationObserver(v);
                return s && w.observe(s, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", d), document.removeEventListener("focusout", h), w.disconnect()
                }
            }
        }, [n, s, b.paused]), i.useEffect(() => {
            if (s) {
                qe.add(b);
                const d = document.activeElement;
                if (!s.contains(d)) {
                    const v = new CustomEvent(we, Ye);
                    s.addEventListener(we, u), s.dispatchEvent(v), v.defaultPrevented || (vn(Cn(Nt(s)), {
                        select: !0
                    }), document.activeElement === d && F(s))
                }
                return () => {
                    s.removeEventListener(we, u), setTimeout(() => {
                        const v = new CustomEvent(Ce, Ye);
                        s.addEventListener(Ce, p), s.dispatchEvent(v), v.defaultPrevented || F(d ? ? document.body, {
                            select: !0
                        }), s.removeEventListener(Ce, p), qe.remove(b)
                    }, 0)
                }
            }
        }, [s, u, p, b]);
        const y = i.useCallback(d => {
            if (!r && !n || b.paused) return;
            const h = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey,
                v = document.activeElement;
            if (h && v) {
                const w = d.currentTarget,
                    [E, C] = bn(w);
                E && C ? !d.shiftKey && v === C ? (d.preventDefault(), r && F(E, {
                    select: !0
                })) : d.shiftKey && v === E && (d.preventDefault(), r && F(C, {
                    select: !0
                })) : v === w && d.preventDefault()
            }
        }, [r, n, b.paused]);
        return c.jsx(M.div, {
            tabIndex: -1,
            ...l,
            ref: m,
            onKeyDown: y
        })
    });
Et.displayName = hn;

function vn(e, {
    select: t = !1
} = {}) {
    const r = document.activeElement;
    for (const n of e)
        if (F(n, {
                select: t
            }), document.activeElement !== r) return
}

function bn(e) {
    const t = Nt(e),
        r = Ze(t, e),
        n = Ze(t.reverse(), e);
    return [r, n]
}

function Nt(e) {
    const t = [],
        r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: n => {
                const o = n.tagName === "INPUT" && n.type === "hidden";
                return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; r.nextNode();) t.push(r.currentNode);
    return t
}

function Ze(e, t) {
    for (const r of e)
        if (!yn(r, {
                upTo: t
            })) return r
}

function yn(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function xn(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function F(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const r = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== r && xn(e) && t && e.select()
    }
}
var qe = wn();

function wn() {
    let e = [];
    return {
        add(t) {
            const r = e[0];
            t !== r && (r == null || r.pause()), e = Qe(e, t), e.unshift(t)
        },
        remove(t) {
            var r;
            e = Qe(e, t), (r = e[0]) == null || r.resume()
        }
    }
}

function Qe(e, t) {
    const r = [...e],
        n = r.indexOf(t);
    return n !== -1 && r.splice(n, 1), r
}

function Cn(e) {
    return e.filter(t => t.tagName !== "A")
}
var En = "Portal",
    St = i.forwardRef((e, t) => {
        var s;
        const {
            container: r,
            ...n
        } = e, [o, a] = i.useState(!1);
        ue(() => a(!0), []);
        const l = r || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
        return l ? cr.createPortal(c.jsx(M.div, { ...n,
            ref: t
        }), l) : null
    });
St.displayName = En;

function Nn(e, t) {
    return i.useReducer((r, n) => t[r][n] ? ? r, e)
}
var ge = e => {
    const {
        present: t,
        children: r
    } = e, n = Sn(t), o = typeof r == "function" ? r({
        present: n.isPresent
    }) : i.Children.only(r), a = G(n.ref, Rn(o));
    return typeof r == "function" || n.isPresent ? i.cloneElement(o, {
        ref: a
    }) : null
};
ge.displayName = "Presence";

function Sn(e) {
    const [t, r] = i.useState(), n = i.useRef({}), o = i.useRef(e), a = i.useRef("none"), l = e ? "mounted" : "unmounted", [s, f] = Nn(l, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return i.useEffect(() => {
        const u = te(n.current);
        a.current = s === "mounted" ? u : "none"
    }, [s]), ue(() => {
        const u = n.current,
            p = o.current;
        if (p !== e) {
            const m = a.current,
                b = te(u);
            e ? f("MOUNT") : b === "none" || (u == null ? void 0 : u.display) === "none" ? f("UNMOUNT") : f(p && m !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, f]), ue(() => {
        if (t) {
            const u = g => {
                    const b = te(n.current).includes(g.animationName);
                    g.target === t && b && at.flushSync(() => f("ANIMATION_END"))
                },
                p = g => {
                    g.target === t && (a.current = te(n.current))
                };
            return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
                t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
            }
        } else f("ANIMATION_END")
    }, [t, f]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: i.useCallback(u => {
            u && (n.current = getComputedStyle(u)), r(u)
        }, [])
    }
}

function te(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function Rn(e) {
    var n, o;
    let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get,
        r = t && "isReactWarning" in t && t.isReactWarning;
    return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
}
var Ee = 0;

function Pn() {
    i.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Je()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Je()), Ee++, () => {
            Ee === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Ee--
        }
    }, [])
}

function Je() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
var W = function() {
    return W = Object.assign || function(t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
    }, W.apply(this, arguments)
};

function jn(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}

function An(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = t.length, a; n < o; n++)(a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var ie = "right-scroll-bar-position",
    le = "width-before-scroll-bar",
    kn = "with-scroll-bars-hidden",
    On = "--removed-body-scroll-bar-size";

function Ne(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function Mn(e, t) {
    var r = i.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return r.value
                },
                set current(n) {
                    var o = r.value;
                    o !== n && (r.value = n, r.callback(n, o))
                }
            }
        }
    })[0];
    return r.callback = t, r.facade
}
var et = new WeakMap;

function Dn(e, t) {
    var r = Mn(t || null, function(n) {
        return e.forEach(function(o) {
            return Ne(o, n)
        })
    });
    return i.useLayoutEffect(function() {
        var n = et.get(r);
        if (n) {
            var o = new Set(n),
                a = new Set(e),
                l = r.current;
            o.forEach(function(s) {
                a.has(s) || Ne(s, null)
            }), a.forEach(function(s) {
                o.has(s) || Ne(s, l)
            })
        }
        et.set(r, e)
    }, [e]), r
}
var de = function() {
    return de = Object.assign || function(t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
            r = arguments[n];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
        }
        return t
    }, de.apply(this, arguments)
};

function Tn(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}

function In(e) {
    return e
}

function Ln(e, t) {
    t === void 0 && (t = In);
    var r = [],
        n = !1,
        o = {
            read: function() {
                if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return r.length ? r[r.length - 1] : e
            },
            useMedium: function(a) {
                var l = t(a, n);
                return r.push(l),
                    function() {
                        r = r.filter(function(s) {
                            return s !== l
                        })
                    }
            },
            assignSyncMedium: function(a) {
                for (n = !0; r.length;) {
                    var l = r;
                    r = [], l.forEach(a)
                }
                r = {
                    push: function(s) {
                        return a(s)
                    },
                    filter: function() {
                        return r
                    }
                }
            },
            assignMedium: function(a) {
                n = !0;
                var l = [];
                if (r.length) {
                    var s = r;
                    r = [], s.forEach(a), l = r
                }
                var f = function() {
                        var p = l;
                        l = [], p.forEach(a)
                    },
                    u = function() {
                        return Promise.resolve().then(f)
                    };
                u(), r = {
                    push: function(p) {
                        l.push(p), u()
                    },
                    filter: function(p) {
                        return l = l.filter(p), r
                    }
                }
            }
        };
    return o
}

function _n(e) {
    e === void 0 && (e = {});
    var t = Ln(null);
    return t.options = de({
        async: !0,
        ssr: !1
    }, e), t
}
var Rt = function(e) {
    var t = e.sideCar,
        r = Tn(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var n = t.read();
    if (!n) throw new Error("Sidecar medium not found");
    return i.createElement(n, de({}, r))
};
Rt.isSideCarExport = !0;

function Fn(e, t) {
    return e.useMedium(t), Rt
}
var Pt = _n(),
    Se = function() {},
    me = i.forwardRef(function(e, t) {
        var r = i.useRef(null),
            n = i.useState({
                onScrollCapture: Se,
                onWheelCapture: Se,
                onTouchMoveCapture: Se
            }),
            o = n[0],
            a = n[1],
            l = e.forwardProps,
            s = e.children,
            f = e.className,
            u = e.removeScrollBar,
            p = e.enabled,
            g = e.shards,
            m = e.sideCar,
            b = e.noIsolation,
            y = e.inert,
            d = e.allowPinchZoom,
            h = e.as,
            v = h === void 0 ? "div" : h,
            w = e.gapMode,
            E = jn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = m,
            S = Dn([r, t]),
            A = W(W({}, E), o);
        return i.createElement(i.Fragment, null, p && i.createElement(C, {
            sideCar: Pt,
            removeScrollBar: u,
            shards: g,
            noIsolation: b,
            inert: y,
            setCallbacks: a,
            allowPinchZoom: !!d,
            lockRef: r,
            gapMode: w
        }), l ? i.cloneElement(i.Children.only(s), W(W({}, A), {
            ref: S
        })) : i.createElement(v, W({}, A, {
            className: f,
            ref: S
        }), s))
    });
me.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
me.classNames = {
    fullWidth: le,
    zeroRight: ie
};
var tt, Wn = function() {
    if (tt) return tt;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function zn() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Wn();
    return t && e.setAttribute("nonce", t), e
}

function $n(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Bn(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Un = function() {
        var e = 0,
            t = null;
        return {
            add: function(r) {
                e == 0 && (t = zn()) && ($n(t, r), Bn(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Gn = function() {
        var e = Un();
        return function(t, r) {
            i.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && r])
        }
    },
    jt = function() {
        var e = Gn(),
            t = function(r) {
                var n = r.styles,
                    o = r.dynamic;
                return e(n, o), null
            };
        return t
    },
    Vn = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Re = function(e) {
        return parseInt(e || "", 10) || 0
    },
    Hn = function(e) {
        var t = window.getComputedStyle(document.body),
            r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            n = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Re(r), Re(n), Re(o)]
    },
    Kn = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return Vn;
        var t = Hn(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0])
        }
    },
    Xn = jt(),
    Yn = function(e, t, r, n) {
        var o = e.left,
            a = e.top,
            l = e.right,
            s = e.gap;
        return r === void 0 && (r = "margin"), `
  .`.concat(kn, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(n, ";"), r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `), r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ie, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(le, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ie, " .").concat(ie, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(le, " .").concat(le, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(On, ": ").concat(s, `px;
  }
`)
    },
    Zn = function(e) {
        var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            o = n === void 0 ? "margin" : n,
            a = i.useMemo(function() {
                return Kn(o)
            }, [o]);
        return i.createElement(Xn, {
            styles: Yn(a, !t, o, r ? "" : "!important")
        })
    },
    Oe = !1;
if (typeof window < "u") try {
    var re = Object.defineProperty({}, "passive", {
        get: function() {
            return Oe = !0, !0
        }
    });
    window.addEventListener("test", re, re), window.removeEventListener("test", re, re)
} catch {
    Oe = !1
}
var V = Oe ? {
        passive: !1
    } : !1,
    qn = function(e) {
        return e.tagName === "TEXTAREA"
    },
    At = function(e, t) {
        var r = window.getComputedStyle(e);
        return r[t] !== "hidden" && !(r.overflowY === r.overflowX && !qn(e) && r[t] === "visible")
    },
    Qn = function(e) {
        return At(e, "overflowY")
    },
    Jn = function(e) {
        return At(e, "overflowX")
    },
    rt = function(e, t) {
        var r = t.ownerDocument,
            n = t;
        do {
            typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
            var o = kt(e, n);
            if (o) {
                var a = Ot(e, n),
                    l = a[1],
                    s = a[2];
                if (l > s) return !0
            }
            n = n.parentNode
        } while (n && n !== r.body);
        return !1
    },
    eo = function(e) {
        var t = e.scrollTop,
            r = e.scrollHeight,
            n = e.clientHeight;
        return [t, r, n]
    },
    to = function(e) {
        var t = e.scrollLeft,
            r = e.scrollWidth,
            n = e.clientWidth;
        return [t, r, n]
    },
    kt = function(e, t) {
        return e === "v" ? Qn(t) : Jn(t)
    },
    Ot = function(e, t) {
        return e === "v" ? eo(t) : to(t)
    },
    ro = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    no = function(e, t, r, n, o) {
        var a = ro(e, window.getComputedStyle(t).direction),
            l = a * n,
            s = r.target,
            f = t.contains(s),
            u = !1,
            p = l > 0,
            g = 0,
            m = 0;
        do {
            var b = Ot(e, s),
                y = b[0],
                d = b[1],
                h = b[2],
                v = d - h - a * y;
            (y || v) && kt(e, s) && (g += v, m += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode
        } while (!f && s !== document.body || f && (t.contains(s) || t === s));
        return (p && (o && Math.abs(g) < 1 || !o && l > g) || !p && (o && Math.abs(m) < 1 || !o && -l > m)) && (u = !0), u
    },
    ne = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    nt = function(e) {
        return [e.deltaX, e.deltaY]
    },
    ot = function(e) {
        return e && "current" in e ? e.current : e
    },
    oo = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    ao = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    so = 0,
    H = [];

function io(e) {
    var t = i.useRef([]),
        r = i.useRef([0, 0]),
        n = i.useRef(),
        o = i.useState(so++)[0],
        a = i.useState(jt)[0],
        l = i.useRef(e);
    i.useEffect(function() {
        l.current = e
    }, [e]), i.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var d = An([e.lockRef.current], (e.shards || []).map(ot), !0).filter(Boolean);
            return d.forEach(function(h) {
                    return h.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), d.forEach(function(h) {
                        return h.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = i.useCallback(function(d, h) {
            if ("touches" in d && d.touches.length === 2) return !l.current.allowPinchZoom;
            var v = ne(d),
                w = r.current,
                E = "deltaX" in d ? d.deltaX : w[0] - v[0],
                C = "deltaY" in d ? d.deltaY : w[1] - v[1],
                S, A = d.target,
                N = Math.abs(E) > Math.abs(C) ? "h" : "v";
            if ("touches" in d && N === "h" && A.type === "range") return !1;
            var k = rt(N, A);
            if (!k) return !0;
            if (k ? S = N : (S = N === "v" ? "h" : "v", k = rt(N, A)), !k) return !1;
            if (!n.current && "changedTouches" in d && (E || C) && (n.current = S), !S) return !0;
            var D = n.current || S;
            return no(D, h, d, D === "h" ? E : C, !0)
        }, []),
        f = i.useCallback(function(d) {
            var h = d;
            if (!(!H.length || H[H.length - 1] !== a)) {
                var v = "deltaY" in h ? nt(h) : ne(h),
                    w = t.current.filter(function(S) {
                        return S.name === h.type && (S.target === h.target || h.target === S.shadowParent) && oo(S.delta, v)
                    })[0];
                if (w && w.should) {
                    h.cancelable && h.preventDefault();
                    return
                }
                if (!w) {
                    var E = (l.current.shards || []).map(ot).filter(Boolean).filter(function(S) {
                            return S.contains(h.target)
                        }),
                        C = E.length > 0 ? s(h, E[0]) : !l.current.noIsolation;
                    C && h.cancelable && h.preventDefault()
                }
            }
        }, []),
        u = i.useCallback(function(d, h, v, w) {
            var E = {
                name: d,
                delta: h,
                target: v,
                should: w,
                shadowParent: lo(v)
            };
            t.current.push(E), setTimeout(function() {
                t.current = t.current.filter(function(C) {
                    return C !== E
                })
            }, 1)
        }, []),
        p = i.useCallback(function(d) {
            r.current = ne(d), n.current = void 0
        }, []),
        g = i.useCallback(function(d) {
            u(d.type, nt(d), d.target, s(d, e.lockRef.current))
        }, []),
        m = i.useCallback(function(d) {
            u(d.type, ne(d), d.target, s(d, e.lockRef.current))
        }, []);
    i.useEffect(function() {
        return H.push(a), e.setCallbacks({
                onScrollCapture: g,
                onWheelCapture: g,
                onTouchMoveCapture: m
            }), document.addEventListener("wheel", f, V), document.addEventListener("touchmove", f, V), document.addEventListener("touchstart", p, V),
            function() {
                H = H.filter(function(d) {
                    return d !== a
                }), document.removeEventListener("wheel", f, V), document.removeEventListener("touchmove", f, V), document.removeEventListener("touchstart", p, V)
            }
    }, []);
    var b = e.removeScrollBar,
        y = e.inert;
    return i.createElement(i.Fragment, null, y ? i.createElement(a, {
        styles: ao(o)
    }) : null, b ? i.createElement(Zn, {
        gapMode: e.gapMode
    }) : null)
}

function lo(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const co = Fn(Pt, io);
var Mt = i.forwardRef(function(e, t) {
    return i.createElement(me, W({}, e, {
        ref: t,
        sideCar: co
    }))
});
Mt.classNames = me.classNames;
const uo = Mt;
var fo = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    K = new WeakMap,
    oe = new WeakMap,
    ae = {},
    Pe = 0,
    Dt = function(e) {
        return e && (e.host || Dt(e.parentNode))
    },
    po = function(e, t) {
        return t.map(function(r) {
            if (e.contains(r)) return r;
            var n = Dt(r);
            return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(r) {
            return !!r
        })
    },
    go = function(e, t, r, n) {
        var o = po(t, Array.isArray(e) ? e : [e]);
        ae[r] || (ae[r] = new WeakMap);
        var a = ae[r],
            l = [],
            s = new Set,
            f = new Set(o),
            u = function(g) {
                !g || s.has(g) || (s.add(g), u(g.parentNode))
            };
        o.forEach(u);
        var p = function(g) {
            !g || f.has(g) || Array.prototype.forEach.call(g.children, function(m) {
                if (s.has(m)) p(m);
                else try {
                    var b = m.getAttribute(n),
                        y = b !== null && b !== "false",
                        d = (K.get(m) || 0) + 1,
                        h = (a.get(m) || 0) + 1;
                    K.set(m, d), a.set(m, h), l.push(m), d === 1 && y && oe.set(m, !0), h === 1 && m.setAttribute(r, "true"), y || m.setAttribute(n, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", m, v)
                }
            })
        };
        return p(t), s.clear(), Pe++,
            function() {
                l.forEach(function(g) {
                    var m = K.get(g) - 1,
                        b = a.get(g) - 1;
                    K.set(g, m), a.set(g, b), m || (oe.has(g) || g.removeAttribute(n), oe.delete(g)), b || g.removeAttribute(r)
                }), Pe--, Pe || (K = new WeakMap, K = new WeakMap, oe = new WeakMap, ae = {})
            }
    },
    mo = function(e, t, r) {
        r === void 0 && (r = "data-aria-hidden");
        var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || fo(e);
        return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), go(n, o, r, "aria-hidden")) : function() {
            return null
        }
    },
    Ie = "Dialog",
    [Tt, _o] = Jr(Ie),
    [ho, O] = Tt(Ie),
    It = e => {
        const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            modal: l = !0
        } = e, s = i.useRef(null), f = i.useRef(null), [u = !1, p] = nn({
            prop: n,
            defaultProp: o,
            onChange: a
        });
        return c.jsx(ho, {
            scope: t,
            triggerRef: s,
            contentRef: f,
            contentId: xe(),
            titleId: xe(),
            descriptionId: xe(),
            open: u,
            onOpenChange: p,
            onOpenToggle: i.useCallback(() => p(g => !g), [p]),
            modal: l,
            children: r
        })
    };
It.displayName = Ie;
var Lt = "DialogTrigger",
    vo = i.forwardRef((e, t) => {
        const {
            __scopeDialog: r,
            ...n
        } = e, o = O(Lt, r), a = G(t, o.triggerRef);
        return c.jsx(M.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Fe(o.open),
            ...n,
            ref: a,
            onClick: z(e.onClick, o.onOpenToggle)
        })
    });
vo.displayName = Lt;
var Le = "DialogPortal",
    [bo, _t] = Tt(Le, {
        forceMount: void 0
    }),
    Ft = e => {
        const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
        } = e, a = O(Le, t);
        return c.jsx(bo, {
            scope: t,
            forceMount: r,
            children: i.Children.map(n, l => c.jsx(ge, {
                present: r || a.open,
                children: c.jsx(St, {
                    asChild: !0,
                    container: o,
                    children: l
                })
            }))
        })
    };
Ft.displayName = Le;
var fe = "DialogOverlay",
    Wt = i.forwardRef((e, t) => {
        const r = _t(fe, e.__scopeDialog),
            {
                forceMount: n = r.forceMount,
                ...o
            } = e,
            a = O(fe, e.__scopeDialog);
        return a.modal ? c.jsx(ge, {
            present: n || a.open,
            children: c.jsx(yo, { ...o,
                ref: t
            })
        }) : null
    });
Wt.displayName = fe;
var yo = i.forwardRef((e, t) => {
        const {
            __scopeDialog: r,
            ...n
        } = e, o = O(fe, r);
        return c.jsx(uo, {
            as: pe,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: c.jsx(M.div, {
                "data-state": Fe(o.open),
                ...n,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...n.style
                }
            })
        })
    }),
    U = "DialogContent",
    zt = i.forwardRef((e, t) => {
        const r = _t(U, e.__scopeDialog),
            {
                forceMount: n = r.forceMount,
                ...o
            } = e,
            a = O(U, e.__scopeDialog);
        return c.jsx(ge, {
            present: n || a.open,
            children: a.modal ? c.jsx(xo, { ...o,
                ref: t
            }) : c.jsx(wo, { ...o,
                ref: t
            })
        })
    });
zt.displayName = U;
var xo = i.forwardRef((e, t) => {
        const r = O(U, e.__scopeDialog),
            n = i.useRef(null),
            o = G(t, r.contentRef, n);
        return i.useEffect(() => {
            const a = n.current;
            if (a) return mo(a)
        }, []), c.jsx($t, { ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: z(e.onCloseAutoFocus, a => {
                var l;
                a.preventDefault(), (l = r.triggerRef.current) == null || l.focus()
            }),
            onPointerDownOutside: z(e.onPointerDownOutside, a => {
                const l = a.detail.originalEvent,
                    s = l.button === 0 && l.ctrlKey === !0;
                (l.button === 2 || s) && a.preventDefault()
            }),
            onFocusOutside: z(e.onFocusOutside, a => a.preventDefault())
        })
    }),
    wo = i.forwardRef((e, t) => {
        const r = O(U, e.__scopeDialog),
            n = i.useRef(!1),
            o = i.useRef(!1);
        return c.jsx($t, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: a => {
                var l, s;
                (l = e.onCloseAutoFocus) == null || l.call(e, a), a.defaultPrevented || (n.current || (s = r.triggerRef.current) == null || s.focus(), a.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: a => {
                var f, u;
                (f = e.onInteractOutside) == null || f.call(e, a), a.defaultPrevented || (n.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const l = a.target;
                ((u = r.triggerRef.current) == null ? void 0 : u.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault()
            }
        })
    }),
    $t = i.forwardRef((e, t) => {
        const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...l
        } = e, s = O(U, r), f = i.useRef(null), u = G(t, f);
        return Pn(), c.jsxs(c.Fragment, {
            children: [c.jsx(Et, {
                asChild: !0,
                loop: !0,
                trapped: n,
                onMountAutoFocus: o,
                onUnmountAutoFocus: a,
                children: c.jsx(wt, {
                    role: "dialog",
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": Fe(s.open),
                    ...l,
                    ref: u,
                    onDismiss: () => s.onOpenChange(!1)
                })
            }), c.jsxs(c.Fragment, {
                children: [c.jsx(Co, {
                    titleId: s.titleId
                }), c.jsx(No, {
                    contentRef: f,
                    descriptionId: s.descriptionId
                })]
            })]
        })
    }),
    _e = "DialogTitle",
    Bt = i.forwardRef((e, t) => {
        const {
            __scopeDialog: r,
            ...n
        } = e, o = O(_e, r);
        return c.jsx(M.h2, {
            id: o.titleId,
            ...n,
            ref: t
        })
    });
Bt.displayName = _e;
var Ut = "DialogDescription",
    Gt = i.forwardRef((e, t) => {
        const {
            __scopeDialog: r,
            ...n
        } = e, o = O(Ut, r);
        return c.jsx(M.p, {
            id: o.descriptionId,
            ...n,
            ref: t
        })
    });
Gt.displayName = Ut;
var Vt = "DialogClose",
    Ht = i.forwardRef((e, t) => {
        const {
            __scopeDialog: r,
            ...n
        } = e, o = O(Vt, r);
        return c.jsx(M.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: z(e.onClick, () => o.onOpenChange(!1))
        })
    });
Ht.displayName = Vt;

function Fe(e) {
    return e ? "open" : "closed"
}
var Kt = "DialogTitleWarning",
    [Fo, Xt] = Qr(Kt, {
        contentName: U,
        titleName: _e,
        docsSlug: "dialog"
    }),
    Co = ({
        titleId: e
    }) => {
        const t = Xt(Kt),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return i.useEffect(() => {
            e && (document.getElementById(e) || console.error(r))
        }, [r, e]), null
    },
    Eo = "DialogDescriptionWarning",
    No = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Xt(Eo).contentName}}.`;
        return i.useEffect(() => {
            var a;
            const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(n))
        }, [n, e, t]), null
    },
    So = It,
    Ro = Ft,
    Yt = Wt,
    Zt = zt,
    qt = Bt,
    Qt = Gt,
    Jt = Ht;

function Po(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        o, a;
    for (a = 0; a < n.length; a++) o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}
var jo = ["color"],
    Ao = i.forwardRef(function(e, t) {
        var r = e.color,
            n = r === void 0 ? "currentColor" : r,
            o = Po(e, jo);
        return i.createElement("svg", Object.assign({
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, o, {
            ref: t
        }), i.createElement("path", {
            d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
            fill: n,
            fillRule: "evenodd",
            clipRule: "evenodd"
        }))
    });
const ko = So,
    Oo = Ro,
    Mo = Jt,
    er = i.forwardRef(({
        className: e,
        ...t
    }, r) => c.jsx(Yt, {
        ref: r,
        className: j("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
        ...t
    }));
er.displayName = Yt.displayName;
const tr = i.forwardRef(({
    className: e,
    children: t,
    ...r
}, n) => c.jsxs(Oo, {
    children: [c.jsx(er, {}), c.jsxs(Zt, {
        ref: n,
        className: j("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...r,
        children: [t, c.jsxs(Jt, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [c.jsx(Ao, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
tr.displayName = Zt.displayName;
const rr = ({
    className: e,
    ...t
}) => c.jsx("div", {
    className: j("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
rr.displayName = "DialogHeader";
const nr = ({
    className: e,
    ...t
}) => c.jsx("div", {
    className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
});
nr.displayName = "DialogFooter";
const or = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx(qt, {
    ref: r,
    className: j("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
or.displayName = qt.displayName;
const ar = i.forwardRef(({
    className: e,
    ...t
}, r) => c.jsx(Qt, {
    ref: r,
    className: j("text-sm text-muted-foreground", e),
    ...t
}));
ar.displayName = Qt.displayName;
const Me = i.forwardRef(({
    className: e,
    type: t,
    ...r
}, n) => c.jsx("input", {
    type: t,
    className: j("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...r
}));
Me.displayName = "Input";
var Do = "Label",
    sr = i.forwardRef((e, t) => c.jsx(M.label, { ...e,
        ref: t,
        onMouseDown: r => {
            var o;
            r.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault())
        }
    }));
sr.displayName = Do;
var ir = sr;
const To = lt("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    De = i.forwardRef(({
        className: e,
        ...t
    }, r) => c.jsx(ir, {
        ref: r,
        className: j(To(), e),
        ...t
    }));
De.displayName = ir.displayName;

function Io({
    isOpen: e,
    onClose: t,
    avatar: r,
    onSave: n
}) {
    const [o, a] = be.useState((r == null ? void 0 : r.name) || ""), [l, s] = be.useState((r == null ? void 0 : r.imageUrl) || "");
    be.useEffect(() => {
        r ? (a(r.name), s(r.imageUrl)) : (a(""), s(""))
    }, [r]);
    const f = () => {
        n({
            name: o,
            imageUrl: l
        }), t()
    };
    return e ? c.jsx(ko, {
        open: e,
        onOpenChange: t,
        children: c.jsxs(tr, {
            className: "bg-gray-900 border-cyan-500/50 text-gray-100 shadow-xl shadow-cyan-500/20 sm:max-w-[425px]",
            children: [c.jsxs(rr, {
                children: [c.jsx(or, {
                    className: "text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600",
                    children: r ? "Edit Avatar" : "Create New Avatar"
                }), c.jsxs(ar, {
                    className: "text-gray-400",
                    children: [r ? "Make changes to your avatar." : "Fill in the details to create a new avatar.", " Click save when you're done."]
                })]
            }), c.jsxs("div", {
                className: "grid gap-4 py-4",
                children: [c.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-4 sm:items-center gap-2 sm:gap-4",
                    children: [c.jsx(De, {
                        htmlFor: "name",
                        className: "sm:text-right text-gray-300 mb-1 sm:mb-0",
                        children: "Name"
                    }), c.jsx(Me, {
                        id: "name",
                        value: o,
                        onChange: u => a(u.target.value),
                        className: "sm:col-span-3 bg-gray-800 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-cyan-500 focus:border-cyan-500",
                        placeholder: "e.g., Cyra Nebula"
                    })]
                }), c.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-4 sm:items-center gap-2 sm:gap-4",
                    children: [c.jsx(De, {
                        htmlFor: "imageUrl",
                        className: "sm:text-right text-gray-300 mb-1 sm:mb-0",
                        children: "Image URL"
                    }), c.jsx(Me, {
                        id: "imageUrl",
                        value: l,
                        onChange: u => s(u.target.value),
                        className: "sm:col-span-3 bg-gray-800 border-gray-700 placeholder-gray-500 text-gray-200 focus:ring-cyan-500 focus:border-cyan-500",
                        placeholder: "https://example.com/avatar.png"
                    })]
                })]
            }), c.jsxs(nr, {
                className: "flex flex-col sm:flex-row sm:justify-start gap-2",
                children: [c.jsx(ce, {
                    type: "button",
                    onClick: f,
                    className: "w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-xl hover:shadow-purple-600/50 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 dark:focus:ring-purple-600/50 transition-all duration-300 ease-in-out transform hover:scale-105",
                    children: "Save Changes"
                }), c.jsx(Mo, {
                    asChild: !0,
                    children: c.jsx(ce, {
                        type: "button",
                        variant: "outline",
                        className: "w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700/70 hover:text-gray-100 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/60 transition-all duration-200",
                        children: "Cancel"
                    })
                })]
            })]
        })
    }) : null
}

function se({
    className: e,
    ...t
}) {
    return c.jsx("div", {
        className: j("animate-pulse rounded-md bg-primary/10", e),
        ...t
    })
}

function Wo() {
    const [e, t] = i.useState(!1), [r, n] = i.useState(null), [o, a] = i.useState([]), [l, s] = i.useState(!0), [f, u] = i.useState(null);
    i.useEffect(() => {
        (async () => {
            s(!0), u(null);
            try {
                const d = await fetch("https://dummyjson.com/users?limit=6&select=id,firstName,lastName,image");
                if (!d.ok) throw new Error(`HTTP error! status: ${d.status}`);
                const v = (await d.json()).users.map(w => ({
                    id: w.id.toString(),
                    name: `${w.firstName} ${w.lastName}`,
                    imageUrl: w.image
                }));
                a(v)
            } catch (d) {
                u(d.message || "Failed to fetch avatars. Please try again later."), a([])
            } finally {
                s(!1)
            }
        })()
    }, []);
    const p = () => {
            n(null), t(!0)
        },
        g = y => {
            n(y), t(!0)
        },
        m = y => {
            if (r && r.id) a(o.map(d => d.id === r.id ? { ...d,
                ...y
            } : d));
            else {
                const d = {
                    id: `avatar-${Date.now()}`,
                    ...y
                };
                a([d, ...o])
            }
            t(!1), n(null)
        },
        b = () => l ? c.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
            children: Array.from({
                length: 6
            }).map((y, d) => c.jsxs("div", {
                className: "bg-gray-800/60 border-cyan-500/30 p-4 rounded-lg shadow-lg shadow-cyan-500/20 flex flex-col justify-between h-full",
                children: [c.jsx(se, {
                    className: "w-full h-48 aspect-square rounded-md bg-gray-700/50"
                }), c.jsxs("div", {
                    className: "pt-4 flex-grow",
                    children: [c.jsx(se, {
                        className: "h-6 w-3/4 mb-2 rounded bg-gray-700/50"
                    }), c.jsx(se, {
                        className: "h-4 w-1/2 rounded bg-gray-700/50"
                    })]
                }), c.jsx("div", {
                    className: "pt-4 border-t border-gray-700/50",
                    children: c.jsx(se, {
                        className: "h-10 w-full rounded-md bg-gray-700/50"
                    })
                })]
            }, d))
        }) : f ? c.jsxs("p", {
            className: "text-red-500 text-center text-xl py-10",
            children: ["Error: ", f]
        }) : o.length === 0 ? c.jsx("p", {
            className: "text-gray-400 text-center text-xl py-10",
            children: "No avatars found. Start by creating one!"
        }) : c.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
            children: o.map(y => c.jsx(qr, { ...y,
                onEdit: g
            }, y.id))
        });
    return c.jsxs("div", {
        className: "min-h-screen bg-gray-950 text-gray-100 flex flex-col relative",
        children: [c.jsx("header", {
            className: "bg-gray-900/50 backdrop-blur-md shadow-lg shadow-cyan-500/30 py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50",
            children: c.jsxs("div", {
                className: "container mx-auto flex flex-col sm:flex-row justify-between items-center",
                children: [c.jsx("h1", {
                    className: "text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse",
                    children: "AvatarForge"
                }), c.jsx("p", {
                    className: "text-lg sm:text-xl text-gray-300 mt-2 sm:mt-0",
                    children: "Welcome, Creator"
                })]
            })
        }), c.jsx("main", {
            className: "container mx-auto px-4 py-8 sm:py-12 flex-grow",
            children: c.jsx("section", {
                id: "avatar-grid",
                className: "py-8",
                children: b()
            })
        }), c.jsxs("button", {
            type: "button",
            className: "fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-cyan-500/60 hover:shadow-xl hover:shadow-purple-600/60 focus:outline-none focus:ring-4 focus:ring-cyan-400/80 dark:focus:ring-purple-700/80 transition-all duration-300 ease-in-out transform hover:scale-105 z-40 flex items-center space-x-2",
            onClick: p,
            children: [c.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 2,
                children: c.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 4v16m8-8H4"
                })
            }), c.jsx("span", {
                className: "hidden sm:inline",
                children: "Create New Avatar"
            })]
        }), c.jsx(Io, {
            isOpen: e,
            onClose: () => {
                t(!1), n(null)
            },
            avatar: r,
            onSave: m
        })]
    })
}
export {
    Wo as
    default
};