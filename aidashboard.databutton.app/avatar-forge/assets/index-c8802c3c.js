import {
    j as t,
    H as O,
    r as i,
    E as h,
    c as v,
    u as T,
    a as j,
    O as A,
    R as S,
    b as C
} from "./vendor-65fd4c09.js";
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
    new MutationObserver(s => {
        for (const n of s)
            if (n.type === "childList")
                for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && o(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function c(s) {
        const n = {};
        return s.integrity && (n.integrity = s.integrity), s.referrerPolicy && (n.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? n.credentials = "include" : s.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function o(s) {
        if (s.ep) return;
        s.ep = !0;
        const n = c(s);
        fetch(s.href, n)
    }
})();
const B = "dark",
    D = ["https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"],
    F = () => t.jsx(O, {
        children: D.map(e => t.jsx("link", {
            href: e,
            rel: "stylesheet"
        }, e))
    }),
    I = {
        theme: "system",
        setTheme: () => null
    },
    M = i.createContext(I);

function W({
    children: e,
    defaultTheme: r = "system",
    storageKey: c = "databutton-f3e666d5-ea9c-4a31-9544-7da7cf944605-ui-theme",
    ...o
}) {
    const [s, n] = i.useState(() => localStorage.getItem(c) || r);
    i.useEffect(() => {
        const l = window.document.documentElement;
        if (l.classList.remove("light", "dark"), s === "system") {
            const y = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            l.classList.add(y);
            return
        }
        l.classList.add(s)
    }, [s]);
    const a = {
        theme: s,
        setTheme: l => {
            localStorage.setItem(c, l), n(l)
        }
    };
    return t.jsx(M.Provider, { ...o,
        value: a,
        children: e
    })
}
const $ = ({
        children: e
    }) => t.jsx(h, {
        fallback: null,
        onError: r => {
            console.error("Caught error in AppWrapper", r.message, r.stack)
        },
        children: e
    }),
    V = "modulepreload",
    N = function(e) {
        return "/avatar-forge/" + e
    },
    E = {},
    g = function(r, c, o) {
        if (!c || c.length === 0) return r();
        const s = document.getElementsByTagName("link");
        return Promise.all(c.map(n => {
            if (n = N(n), n in E) return;
            E[n] = !0;
            const a = n.endsWith(".css"),
                l = a ? '[rel="stylesheet"]' : "";
            if (!!o)
                for (let d = s.length - 1; d >= 0; d--) {
                    const f = s[d];
                    if (f.href === n && (!a || f.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${n}"]${l}`)) return;
            const u = document.createElement("link");
            if (u.rel = a ? "stylesheet" : V, a || (u.as = "script", u.crossOrigin = ""), u.href = n, document.head.appendChild(u), a) return new Promise((d, f) => {
                u.addEventListener("load", d), u.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${n}`)))
            })
        })).then(() => r()).catch(n => {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = n, window.dispatchEvent(a), !a.defaultPrevented) throw n
        })
    },
    H = ({
        children: e
    }) => t.jsx(t.Fragment, {
        children: e
    });
var x = (e => (e.DEV = "development", e.PROD = "production", e))(x || {});
const P = "production",
    U = "/avatar-forge",
    b = {}.VITE_LOCAL === "true";

function p(e, r) {
    if (e === null) return e;
    switch (typeof e) {
        case "string":
            return e;
        case "number":
            return e;
        case "boolean":
            return e;
        case "undefined":
            return e;
        case "symbol":
            return e.toString();
        case "bigint":
            return e.toString();
        case "function":
            return `[Function: ${e.name||"anonymous"}]`
    }
    if (typeof e == "object") {
        if (r.has(e)) return "[Circular]";
        if (r.add(e), e instanceof Error) {
            const o = [];
            if (e.stack)
                for (const s of e.stack.split(`
`)) {
                    if (/node_modules/.test(s)) break;
                    const n = s.replace(/(http:.*\/ui\/src\/)/, "");
                    o.push(n)
                }
            return o.length > 0 ? o.join(`
`) : `${e.name?e.name:"Error"}: ${e.message}`
        }
        if (e instanceof Response) return "[FetchResponse]";
        if (Promise.resolve(e) === e) return "[Promise]";
        if (Array.isArray(e)) return e.map(o => p(o, r));
        const c = {};
        for (const [o, s] of Object.entries(e))
            if (Object.hasOwn(e, o)) {
                const n = p(s, r);
                n !== void 0 && (c[o] = n)
            }
        return c
    }
    try {
        return structuredClone(e)
    } catch {
        return `[Non-Cloneable: ${typeof e}]`
    }
}

function z(e) {
    return p(e, new WeakSet)
}
const R = e => {
        if (b) console.log(e);
        else try {
            window.parent.postMessage(z(e), window.location.origin)
        } catch (r) {
            console.error(r), v(r)
        }
    },
    _ = ({
        source: e
    }) => {
        const r = i.useCallback(() => {
            R({
                event: "app-beacon",
                payload: {
                    source: e
                }
            })
        }, [e]);
        i.useEffect(() => {
            r();
            const c = setInterval(r, 1e3);
            return () => {
                clearInterval(c)
            }
        }, [r])
    },
    q = () => {
        const e = i.useRef(!1);
        i.useEffect(() => {
            e.current || (e.current = !0)
        }, [])
    },
    Y = e => {
        R({
            event: "app-pagechange",
            payload: {
                timestamp: new Date().getTime(),
                location: e
            }
        })
    },
    G = () => {
        const e = T();
        i.useEffect(() => {
            Y({
                pathname: e.pathname,
                hash: e.hash,
                search: e.search
            })
        }, [e])
    },
    J = ({
        children: e
    }) => (_({
        source: "message-emitter"
    }), q(), G(), t.jsx(t.Fragment, {
        children: e
    })),
    L = ({
        text: e,
        canRefresh: r
    }) => (_({
        source: "error-page"
    }), t.jsxs("div", {
        style: {
            display: "flex",
            flexFlow: "column",
            gap: "20px",
            padding: "20px"
        },
        children: [e, t.jsx("div", {
            style: {
                display: "flex",
                gap: "10px"
            },
            children: r && t.jsx("button", {
                style: {
                    color: "blue",
                    width: "fit-content"
                },
                type: "button",
                onClick: () => {
                    window.location.reload()
                },
                children: "Reload page"
            })
        })]
    })),
    K = e => t.jsx(L, {
        text: "Something went wrong. Please retry or contact support.",
        canRefresh: !1
    }),
    Q = ({
        children: e
    }) => t.jsx(h, {
        fallbackRender: K,
        onError: r => {
            v(r)
        },
        children: e
    }),
    X = e => e instanceof Error ? e.message.replaceAll(`${window.location.origin}/ui/src`, "").replaceAll(/\?t=\d*/g, "") : "Something went wrong",
    Z = ({
        children: e
    }) => t.jsx(h, {
        fallbackRender: r => t.jsx(L, {
            text: t.jsxs("div", {
                style: {
                    display: "flex",
                    flexFlow: "column"
                },
                children: [t.jsx("p", {
                    style: {
                        fontWeight: "bold"
                    },
                    children: "An error occured:"
                }), t.jsx("p", {
                    children: X(r.error)
                }), P === x.DEV && t.jsx("p", {
                    style: {
                        marginTop: "40px",
                        fontWeight: "bold"
                    },
                    children: "You can find more info in the console or by asking the agent to debug the error."
                })]
            }),
            canRefresh: !0
        }),
        onError: r => {
            console.error(r.message)
        },
        children: e
    });

function w(e) {
    console.error(e == null ? void 0 : e.reason)
}
const ee = ({
        children: e,
        shouldRender: r
    }) => (i.useEffect(() => {
        if (r) return window.addEventListener("unhandledrejection", w), () => {
            window.removeEventListener("unhandledrejection", w)
        }
    }, [r]), r ? t.jsx(Q, {
        children: t.jsx(Z, {
            children: t.jsx(J, {
                children: e
            })
        })
    }) : t.jsx(t.Fragment, {
        children: e
    })),
    m = ({
        children: e
    }) => t.jsx(i.Suspense, {
        children: e
    }),
    te = i.lazy(() => g(() =>
        import ("./App-d354f265.js"), ["assets/App-d354f265.js", "assets/vendor-65fd4c09.js"])),
    re = [{
        path: "/",
        element: t.jsx(te, {})
    }],
    ne = () => U,
    se = i.lazy(() => g(() =>
        import ("./NotFoundPage-14dfe042.js"), ["assets/NotFoundPage-14dfe042.js", "assets/vendor-65fd4c09.js", "assets/ProdErrorPage-874f3c99.js"])),
    oe = i.lazy(() => g(() =>
        import ("./SomethingWentWrongPage-facbc5f8.js"), ["assets/SomethingWentWrongPage-facbc5f8.js", "assets/vendor-65fd4c09.js", "assets/ProdErrorPage-874f3c99.js"])),
    ae = j([{
        element: t.jsx(ee, {
            shouldRender: P === x.DEV,
            children: t.jsx(H, {
                children: t.jsx(m, {
                    children: t.jsx(A, {})
                })
            })
        }),
        children: re
    }, {
        path: "*",
        element: t.jsx(m, {
            children: t.jsx(se, {})
        }),
        errorElement: t.jsx(m, {
            children: t.jsx(oe, {})
        })
    }], {
        basename: ne()
    }),
    ce = () => t.jsx($, {
        children: t.jsxs(W, {
            defaultTheme: B,
            children: [t.jsx(S, {
                router: ae
            }), t.jsx(F, {})]
        })
    });
const k = document.getElementById("root");
if (k === null) throw new Error("Missing root element");
const ie = C.createRoot(k);
ie.render(t.jsx(ce, {}));