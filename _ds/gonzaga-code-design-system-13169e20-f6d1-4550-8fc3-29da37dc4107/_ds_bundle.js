/* @ds-bundle: {"format":3,"namespace":"GonzagaCodeDesignSystem_13169e","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"5ed88969caa2","components/buttons/Button.jsx":"341265a07705","components/buttons/IconButton.jsx":"e5f947bb11ab","components/display/Badge.jsx":"c20fbe8cf924","components/display/Card.jsx":"4ac7975b1264","components/display/Stat.jsx":"970c45b6a999","components/display/Tag.jsx":"076a88466d94","components/forms/Checkbox.jsx":"8c7610eb7ae5","components/forms/Field.jsx":"b78b5e8d367e","components/forms/Input.jsx":"2cbb52f356df","components/forms/Select.jsx":"f603d946ffad","components/navigation/Footer.jsx":"917e0c078b3c","components/navigation/Navbar.jsx":"de308fbca58a","ui_kits/_shared/kit.jsx":"d296a8c79073","ui_kits/dashboard/Dashboard.jsx":"dfba50701b90","ui_kits/dashboard/Overview.jsx":"d5a96f053bb1","ui_kits/landing-page/Landing.jsx":"462d5fe3f654","ui_kits/marketing-site/Hero.jsx":"8533cd1e867c","ui_kits/marketing-site/Portfolio.jsx":"de4498f996f3","ui_kits/marketing-site/Process.jsx":"347848e430aa","ui_kits/marketing-site/Services.jsx":"9742f7967466"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GonzagaCodeDesignSystem_13169e = window.GonzagaCodeDesignSystem_13169e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-logo { display: inline-flex; align-items: center; gap: var(--space-3); text-decoration: none; color: var(--text); }
.gc-logo__mark { flex: none; display: block; border-radius: var(--radius-md); }
.gc-logo__word { font-family: var(--font-display); font-weight: var(--fw-bold); letter-spacing: var(--tracking-tight); line-height: 1; color: var(--text); }
.gc-logo__word b { color: inherit; font-weight: var(--fw-bold); }
.gc-logo__code { font-family: var(--font-mono); font-weight: var(--fw-semibold); color: var(--accent); }
.gc-logo--sm .gc-logo__word { font-size: var(--text-md); }
.gc-logo--md .gc-logo__word { font-size: var(--text-lg); }
.gc-logo--lg .gc-logo__word { font-size: var(--text-xl); }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "logo");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
const SIZE = {
  sm: 28,
  md: 36,
  lg: 44
};
function Logo({
  size = "md",
  showWord = true,
  mono = false,
  href,
  className = "",
  ...rest
}) {
  useCss();
  const px = SIZE[size] || SIZE.md;
  const Tag = href ? "a" : "span";
  const mark = /*#__PURE__*/React.createElement("svg", {
    className: "gc-logo__mark",
    width: px,
    height: px,
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "gcLogoGrad",
    x1: "4",
    y1: "4",
    x2: "44",
    y2: "44",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2563EB"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#06B6D4"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "44",
    height: "44",
    rx: "12",
    fill: mono ? "currentColor" : "url(#gcLogoGrad)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#FFFFFF",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 16 L11 24 L18 32"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 16 L37 24 L30 32"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 14 L21 34"
  })));
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["gc-logo", `gc-logo--${size}`, className].filter(Boolean).join(" "),
    href: href,
    "aria-label": "Gonzaga Code"
  }, rest), mark, showWord ? /*#__PURE__*/React.createElement("span", {
    className: "gc-logo__word"
  }, /*#__PURE__*/React.createElement("b", null, "Gonzaga"), /*#__PURE__*/React.createElement("span", {
    className: "gc-logo__code"
  }, "/code")) : null);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-btn {
  --_bg: var(--accent);
  --_fg: var(--accent-fg);
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: var(--fw-semibold);
  letter-spacing: var(--tracking-snug);
  line-height: 1;
  white-space: nowrap;
  border: var(--border-w) solid var(--_bd);
  background: var(--_bg);
  color: var(--_fg);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-out),
              background var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out);
}
.gc-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.gc-btn:active { transform: translateY(1px) scale(0.99); }
.gc-btn[disabled], .gc-btn[aria-disabled="true"] { opacity: 0.5; cursor: not-allowed; pointer-events: none; }

/* sizes */
.gc-btn--sm { font-size: var(--text-sm); padding: 0 var(--space-3); height: 34px; }
.gc-btn--md { font-size: var(--text-sm); padding: 0 var(--space-5); height: 42px; }
.gc-btn--lg { font-size: var(--text-md); padding: 0 var(--space-6); height: 52px; border-radius: var(--radius-lg); }

/* variants */
.gc-btn--primary { --_bg: var(--accent); --_fg: var(--accent-fg); box-shadow: var(--glow-brand); }
.gc-btn--primary:hover { --_bg: var(--accent-hover); box-shadow: var(--shadow-lg); }

.gc-btn--growth { --_bg: var(--growth); --_fg: var(--white); }
.gc-btn--growth:hover { filter: brightness(1.06); box-shadow: var(--shadow-md); }

.gc-btn--secondary { --_bg: var(--surface); --_fg: var(--text); --_bd: var(--border-strong); box-shadow: var(--shadow-xs); }
.gc-btn--secondary:hover { --_bg: var(--surface-2); --_bd: var(--ink-400); }

.gc-btn--ghost { --_bg: transparent; --_fg: var(--text); --_bd: transparent; }
.gc-btn--ghost:hover { --_bg: var(--surface-2); }

.gc-btn--link { --_bg: transparent; --_fg: var(--accent); --_bd: transparent; height: auto; padding: 0; box-shadow: none; }
.gc-btn--link:hover { --_fg: var(--accent-hover); text-decoration: underline; text-underline-offset: 3px; }

.gc-btn__icon { display: inline-flex; }
.gc-btn__icon svg { width: 1.15em; height: 1.15em; display: block; }
.gc-btn--full { width: 100%; }
`;
let injected = false;
function useGcBtnCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "btn");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Button({
  variant = "primary",
  size = "md",
  as,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  useGcBtnCss();
  const Tag = as || (rest.href ? "a" : "button");
  const cls = ["gc-btn", `gc-btn--${variant}`, `gc-btn--${size}`, fullWidth ? "gc-btn--full" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), leftIcon ? /*#__PURE__*/React.createElement("span", {
    className: "gc-btn__icon"
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    className: "gc-btn__icon"
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: var(--radius-md);
  border: var(--border-w) solid transparent;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.gc-iconbtn:hover { background: var(--surface-2); color: var(--text); }
.gc-iconbtn:active { transform: scale(0.94); }
.gc-iconbtn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.gc-iconbtn[disabled] { opacity: 0.45; cursor: not-allowed; }
.gc-iconbtn svg { width: 1.25em; height: 1.25em; display: block; }
.gc-iconbtn--sm { width: 34px; height: 34px; font-size: var(--text-sm); }
.gc-iconbtn--md { width: 42px; height: 42px; font-size: var(--text-base); }
.gc-iconbtn--lg { width: 50px; height: 50px; font-size: var(--text-md); }
.gc-iconbtn--solid { background: var(--accent); color: var(--accent-fg); }
.gc-iconbtn--solid:hover { background: var(--accent-hover); color: var(--accent-fg); }
.gc-iconbtn--outline { border-color: var(--border-strong); color: var(--text); }
.gc-iconbtn--outline:hover { background: var(--surface-2); }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "iconbtn");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  useCss();
  const cls = ["gc-iconbtn", `gc-iconbtn--${variant}`, `gc-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-badge {
  display: inline-flex; align-items: center; gap: var(--space-1);
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--fw-semibold);
  line-height: 1; letter-spacing: var(--tracking-snug);
  padding: 5px 10px; border-radius: var(--radius-full);
  border: var(--border-w) solid transparent;
}
.gc-badge--dot::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.gc-badge--neutral { background: var(--surface-2); color: var(--text-muted); border-color: var(--border); }
.gc-badge--brand   { background: var(--accent-soft); color: var(--accent); }
.gc-badge--growth  { background: var(--growth-soft); color: var(--growth); }
.gc-badge--success { background: var(--success-soft); color: var(--success); }
.gc-badge--warning { background: var(--warning-soft); color: color-mix(in oklch, var(--warning) 80%, var(--text)); }
.gc-badge--danger  { background: var(--danger-soft); color: var(--danger); }
.gc-badge--solid   { background: var(--accent); color: var(--accent-fg); }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "badge");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Badge({
  tone = "neutral",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  useCss();
  const cls = ["gc-badge", `gc-badge--${tone}`, dot ? "gc-badge--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-card {
  background: var(--surface);
  border: var(--border-w) solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  color: var(--text);
  display: flex; flex-direction: column;
  transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.gc-card--pad-sm { padding: var(--space-4); }
.gc-card--pad-md { padding: var(--space-5); }
.gc-card--pad-lg { padding: var(--space-6); }
.gc-card--interactive { cursor: pointer; }
.gc-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: var(--border-strong); }
.gc-card--accent { border-top: 3px solid var(--accent); }
.gc-card--glass {
  background: color-mix(in oklch, var(--surface) 72%, transparent);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
}
.gc-card--feature { box-shadow: var(--shadow-lg); border-color: transparent; outline: 1.5px solid var(--accent); outline-offset: -1.5px; }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "card");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Card({
  padding = "md",
  interactive = false,
  variant,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  useCss();
  const Tag = as;
  const cls = ["gc-card", `gc-card--pad-${padding}`, interactive ? "gc-card--interactive" : "", variant ? `gc-card--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-stat { display: flex; flex-direction: column; gap: var(--space-1); }
.gc-stat__value {
  font-family: var(--font-display); font-weight: var(--fw-bold);
  font-size: var(--text-2xl); line-height: 1; letter-spacing: var(--tracking-tight);
  color: var(--text);
  display: flex; align-items: baseline; gap: 2px;
}
.gc-stat__value--brand { color: var(--accent); }
.gc-stat__value--growth { color: var(--growth); }
.gc-stat__suffix { font-size: 0.55em; font-weight: var(--fw-semibold); color: var(--text-muted); }
.gc-stat__label { font-size: var(--text-sm); color: var(--text-muted); }
.gc-stat__delta { display: inline-flex; align-items: center; gap: 3px; font-family: var(--font-mono); font-size: var(--text-xs); font-weight: var(--fw-semibold); }
.gc-stat__delta--up { color: var(--growth); }
.gc-stat__delta--down { color: var(--danger); }
.gc-stat__delta svg { width: 12px; height: 12px; }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "stat");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Stat({
  value,
  suffix,
  label,
  delta,
  tone = "default",
  className = "",
  ...rest
}) {
  useCss();
  const up = typeof delta === "number" ? delta >= 0 : String(delta || "").trim().startsWith("+");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["gc-stat", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: ["gc-stat__value", tone !== "default" ? `gc-stat__value--${tone}` : ""].filter(Boolean).join(" ")
  }, value, suffix ? /*#__PURE__*/React.createElement("span", {
    className: "gc-stat__suffix"
  }, suffix) : null), label ? /*#__PURE__*/React.createElement("span", {
    className: "gc-stat__label"
  }, label) : null, delta != null ? /*#__PURE__*/React.createElement("span", {
    className: `gc-stat__delta gc-stat__delta--${up ? "up" : "down"}`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, up ? /*#__PURE__*/React.createElement("path", {
    d: "M5 19V5M5 5l7 7M5 5l-1 1"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M5 5v14M5 19l7-7M5 19l-1-1"
  })), typeof delta === "number" ? `${delta >= 0 ? "+" : ""}${delta}%` : delta) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-tag {
  display: inline-flex; align-items: center; gap: var(--space-2);
  font-family: var(--font-mono); font-size: var(--text-xs); font-weight: var(--fw-medium);
  letter-spacing: var(--tracking-snug);
  color: var(--text-muted);
  background: var(--surface-2);
  border: var(--border-w) solid var(--border);
  border-radius: var(--radius-sm);
  padding: 4px 9px; line-height: 1.2;
}
.gc-tag--brand { color: var(--accent); background: var(--accent-soft); border-color: transparent; }
.gc-tag__remove {
  display: inline-flex; cursor: pointer; color: var(--text-subtle);
  border: none; background: none; padding: 0; margin-left: 2px;
}
.gc-tag__remove:hover { color: var(--text); }
.gc-tag__remove svg { width: 12px; height: 12px; display: block; }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "tag");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Tag({
  tone = "neutral",
  onRemove,
  className = "",
  children,
  ...rest
}) {
  useCss();
  const cls = ["gc-tag", tone === "brand" ? "gc-tag--brand" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "gc-tag__remove",
    "aria-label": "Remover",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-check { display: inline-flex; align-items: flex-start; gap: var(--space-3); cursor: pointer; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text); }
.gc-check__input { position: absolute; opacity: 0; width: 0; height: 0; }
.gc-check__box {
  flex: none; width: 20px; height: 20px; margin-top: 1px;
  border: var(--border-w-2) solid var(--border-strong);
  border-radius: var(--radius-xs);
  background: var(--surface);
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--accent-fg);
  transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out);
}
.gc-check__box svg { width: 14px; height: 14px; opacity: 0; transform: scale(0.6); transition: opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-spring); }
.gc-check:hover .gc-check__box { border-color: var(--accent); }
.gc-check__input:focus-visible + .gc-check__box { box-shadow: var(--focus-ring); }
.gc-check__input:checked + .gc-check__box { background: var(--accent); border-color: var(--accent); }
.gc-check__input:checked + .gc-check__box svg { opacity: 1; transform: scale(1); }
.gc-check__input:disabled ~ * { opacity: 0.5; }
.gc-check__input:disabled + .gc-check__box { cursor: not-allowed; }
.gc-check__text { line-height: 1.4; }
.gc-check__desc { display: block; color: var(--text-subtle); font-size: var(--text-xs); margin-top: 2px; }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "checkbox");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Checkbox({
  label,
  description,
  className = "",
  children,
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("label", {
    className: ["gc-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "gc-check__input"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "gc-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "gc-check__text"
  }, label || children, description ? /*#__PURE__*/React.createElement("span", {
    className: "gc-check__desc"
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const CSS = `
.gc-field { display: flex; flex-direction: column; gap: var(--space-2); }
.gc-field__label {
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--fw-semibold);
  color: var(--text); display: flex; align-items: center; gap: var(--space-2);
}
.gc-field__req { color: var(--danger); }
.gc-field__hint { font-size: var(--text-xs); color: var(--text-subtle); }
.gc-field__error { font-size: var(--text-xs); color: var(--danger); font-weight: var(--fw-medium); }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "field");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  className = "",
  children
}) {
  useCss();
  return /*#__PURE__*/React.createElement("div", {
    className: ["gc-field", className].filter(Boolean).join(" ")
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "gc-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "gc-field__req",
    "aria-hidden": "true"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "gc-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "gc-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-input {
  width: 100%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text);
  background: var(--surface);
  border: var(--border-w) solid var(--border-strong);
  border-radius: var(--radius-md);
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  box-shadow: var(--shadow-xs);
}
.gc-input::placeholder { color: var(--text-subtle); }
.gc-input:hover { border-color: var(--ink-400); }
.gc-input:focus { outline: none; border-color: var(--accent); box-shadow: var(--focus-ring); }
.gc-input[disabled] { opacity: 0.55; cursor: not-allowed; background: var(--surface-2); }
.gc-input[aria-invalid="true"] { border-color: var(--danger); }
.gc-input[aria-invalid="true"]:focus { box-shadow: 0 0 0 3px var(--danger-soft); }

.gc-input--sm { height: 36px; padding: 0 var(--space-3); }
.gc-input--md { height: 44px; padding: 0 var(--space-4); }
.gc-input--lg { height: 52px; padding: 0 var(--space-5); font-size: var(--text-base); }

.gc-inputwrap { position: relative; display: flex; align-items: center; }
.gc-inputwrap__icon {
  position: absolute; left: var(--space-4); display: inline-flex; color: var(--text-subtle); pointer-events: none;
}
.gc-inputwrap__icon svg { width: 1.15em; height: 1.15em; display: block; }
.gc-inputwrap--has-icon .gc-input { padding-left: calc(var(--space-4) + 1.6em); }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "input");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Input({
  size = "md",
  icon,
  invalid = false,
  className = "",
  ...rest
}) {
  useCss();
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: ["gc-input", `gc-input--${size}`, className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "gc-inputwrap gc-inputwrap--has-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gc-inputwrap__icon"
  }, icon), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-selectwrap { position: relative; display: block; width: 100%; }
.gc-select {
  width: 100%; appearance: none; -webkit-appearance: none;
  font-family: var(--font-sans); font-size: var(--text-sm);
  color: var(--text); background: var(--surface);
  border: var(--border-w) solid var(--border-strong);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
  cursor: pointer;
}
.gc-select:hover { border-color: var(--ink-400); }
.gc-select:focus { outline: none; border-color: var(--accent); box-shadow: var(--focus-ring); }
.gc-select[disabled] { opacity: 0.55; cursor: not-allowed; background: var(--surface-2); }
.gc-select--sm { height: 36px; padding: 0 var(--space-7) 0 var(--space-3); }
.gc-select--md { height: 44px; padding: 0 var(--space-7) 0 var(--space-4); }
.gc-select--lg { height: 52px; padding: 0 var(--space-7) 0 var(--space-5); font-size: var(--text-base); }
.gc-selectwrap__chev {
  position: absolute; right: var(--space-4); top: 50%; transform: translateY(-50%);
  pointer-events: none; color: var(--text-subtle); display: inline-flex;
}
.gc-selectwrap__chev svg { width: 1.1em; height: 1.1em; display: block; }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "select");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Select({
  size = "md",
  options,
  placeholder,
  className = "",
  children,
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("span", {
    className: "gc-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ["gc-select", `gc-select--${size}`, className].filter(Boolean).join(" ")
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options ? options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "gc-selectwrap__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-footer { background: var(--ink-950); color: var(--ink-300); border-top: var(--border-w) solid color-mix(in oklch, var(--ink-700) 50%, transparent); }
.gc-footer__inner { max-width: var(--container); margin: 0 auto; padding: var(--space-10) var(--gutter) var(--space-6); }
.gc-footer__top { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: var(--space-7); }
.gc-footer__pitch { max-width: 30ch; color: var(--ink-400); font-size: var(--text-sm); margin-top: var(--space-4); line-height: var(--leading-relaxed); }
.gc-footer__col h4 { font-family: var(--font-mono); font-size: var(--text-xs); letter-spacing: var(--tracking-caps); text-transform: uppercase; color: var(--ink-500); margin: 0 0 var(--space-4); }
.gc-footer__col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-3); }
.gc-footer__col a { color: var(--ink-300); text-decoration: none; font-size: var(--text-sm); transition: color var(--dur-base) var(--ease-out); }
.gc-footer__col a:hover { color: var(--white); }
.gc-footer__bottom { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); margin-top: var(--space-8); padding-top: var(--space-5); border-top: var(--border-w) solid color-mix(in oklch, var(--ink-700) 40%, transparent); flex-wrap: wrap; }
.gc-footer__meta { font-size: var(--text-xs); color: var(--ink-500); font-family: var(--font-mono); }
.gc-footer__social { display: flex; gap: var(--space-2); }
.gc-footer__social a { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: var(--radius-md); color: var(--ink-400); border: var(--border-w) solid color-mix(in oklch, var(--ink-700) 50%, transparent); transition: all var(--dur-base) var(--ease-out); }
.gc-footer__social a:hover { color: var(--white); border-color: var(--accent); background: color-mix(in oklch, var(--accent) 16%, transparent); }
.gc-footer__social svg { width: 18px; height: 18px; }
@media (max-width: 860px) { .gc-footer__top { grid-template-columns: 1fr 1fr; } }
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "footer");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
const DEFAULT_COLS = [{
  title: "Serviços",
  links: ["Sites de alta conversão", "SEO técnico", "Performance & Core Web Vitals", "Landing pages"]
}, {
  title: "Empresa",
  links: ["Portfólio", "Processo", "Sobre", "Blog"]
}, {
  title: "Contato",
  links: ["Solicitar orçamento", "WhatsApp", "contato@gonzaga.code"]
}];
function Footer({
  pitch = "Sites de alta conversão com foco em performance, SEO e design limpo. Menos rejeição, mais leads.",
  columns = DEFAULT_COLS,
  className = "",
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ["gc-footer", className].filter(Boolean).join(" "),
    "data-theme": "dark"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: "md"
  }), /*#__PURE__*/React.createElement("p", {
    className: "gc-footer__pitch"
  }, pitch)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__col",
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", null, c.title), /*#__PURE__*/React.createElement("ul", null, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gc-footer__meta"
  }, "\xA9 ", new Date().getFullYear(), " Gonzaga Code \u2014 CNPJ 00.000.000/0001-00"), /*#__PURE__*/React.createElement("div", {
    className: "gc-footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
  })))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gc-nav {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--space-6);
  padding: var(--space-3) var(--gutter);
  background: color-mix(in oklch, var(--surface) 80%, transparent);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-bottom: var(--border-w) solid var(--border);
  position: sticky; top: 0; z-index: 50;
}
.gc-nav__links { display: flex; align-items: center; gap: var(--space-6); list-style: none; margin: 0; padding: 0; }
.gc-nav__link {
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--fw-medium);
  color: var(--text-muted); text-decoration: none; position: relative; padding: var(--space-2) 0;
  transition: color var(--dur-base) var(--ease-out);
}
.gc-nav__link:hover, .gc-nav__link[aria-current="page"] { color: var(--text); }
.gc-nav__link[aria-current="page"]::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -2px; height: 2px;
  background: var(--accent); border-radius: var(--radius-full);
}
.gc-nav__actions { display: flex; align-items: center; gap: var(--space-3); }
.gc-nav__toggle { display: none; }
@media (max-width: 860px) {
  .gc-nav__links { display: none; }
  .gc-nav__cta-label { display: none; }
}
`;
let injected = false;
function useCss() {
  if (typeof document !== "undefined" && !injected) {
    const el = document.createElement("style");
    el.setAttribute("data-gc", "nav");
    el.textContent = CSS;
    document.head.appendChild(el);
    injected = true;
  }
}
function Navbar({
  links = [{
    label: "Serviços",
    href: "#servicos"
  }, {
    label: "Portfólio",
    href: "#portfolio",
    current: true
  }, {
    label: "Processo",
    href: "#processo"
  }, {
    label: "Contato",
    href: "#contato"
  }],
  ctaLabel = "Solicitar orçamento",
  onCta,
  className = "",
  ...rest
}) {
  useCss();
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["gc-nav", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: "md",
    href: "#"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "gc-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    className: "gc-nav__link",
    href: l.href,
    "aria-current": l.current ? "page" : undefined
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    className: "gc-nav__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/_shared/kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared UI-kit helpers for Gonzaga Code recreations.
   Loaded via <script type="text/babel" src>. Exports to window. */

function useLucide() {
  React.useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons({
        attrs: {
          "stroke-width": 1.75
        }
      });
    }
  });
}

/* Lucide icon. Renders <i data-lucide> then useLucide() swaps in the SVG. */
function Icon({
  name,
  size = 20,
  color,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    className: className,
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      color,
      ...style
    }
  });
}

/* Eyebrow / overline label — recurring brand motif */
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "24px",
      height: "1px",
      background: "currentColor",
      opacity: 0.6
    }
  }), children);
}

/* Centered section container */
function Container({
  children,
  wide = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? "var(--container-wide)" : "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      width: "100%",
      boxSizing: "border-box",
      ...style
    }
  }, children);
}
function Section({
  children,
  dark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    "data-theme": dark ? "dark" : undefined,
    style: {
      padding: "clamp(56px, 8vw, 104px) 0",
      background: dark ? "var(--ink-950)" : "var(--bg)",
      color: dark ? "var(--ink-50)" : "var(--text)",
      ...style
    }
  }, rest), children);
}
Object.assign(window, {
  useLucide,
  Icon,
  Eyebrow,
  Container,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/_shared/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
/* Dashboard / client portal — Sidebar + Topbar */

function DashSidebar({
  active,
  setActive
}) {
  const {
    Logo,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  const nav = [{
    id: "overview",
    icon: "layout-dashboard",
    label: "Visão geral"
  }, {
    id: "leads",
    icon: "users",
    label: "Leads",
    count: 18
  }, {
    id: "conv",
    icon: "trending-up",
    label: "Conversão"
  }, {
    id: "perf",
    icon: "gauge",
    label: "Performance"
  }, {
    id: "pages",
    icon: "file-text",
    label: "Páginas"
  }, {
    id: "ab",
    icon: "split",
    label: "A/B Tests",
    count: 2
  }];
  return /*#__PURE__*/React.createElement("aside", {
    "data-theme": "dark",
    style: {
      width: 248,
      flex: "none",
      background: "var(--ink-950)",
      borderRight: "1px solid color-mix(in oklch, var(--ink-700) 45%, transparent)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 14px"
    },
    className: "dash-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 8px 20px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, nav.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setActive(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        font: "inherit",
        fontWeight: 500,
        fontSize: "var(--text-sm)",
        background: on ? "color-mix(in oklch, var(--brand-500) 18%, transparent)" : "transparent",
        color: on ? "#fff" : "var(--ink-400)",
        textAlign: "left",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18,
      color: on ? "var(--cyan-400)" : "var(--ink-500)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), n.count ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 700,
        color: on ? "var(--cyan-300)" : "var(--ink-500)"
      }
    }, n.count) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: 14,
      borderRadius: "var(--radius-lg)",
      background: "color-mix(in oklch, var(--ink-800) 60%, transparent)",
      border: "1px solid color-mix(in oklch, var(--ink-700) 40%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16,
    color: "var(--cyan-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Plano Crescimento")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--ink-400)",
      margin: "8px 0 0",
      lineHeight: 1.5
    }
  }, "A/B testing e SEO cont\xEDnuo ativos.")));
}
function DashTopbar() {
  const {
    Input,
    Select,
    IconButton
  } = window.GonzagaCodeDesignSystem_13169e;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 28px",
      borderBottom: "1px solid var(--border)",
      background: "color-mix(in oklch, var(--surface) 80%, transparent)",
      backdropFilter: "blur(10px)",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-lg)"
    }
  }, "Vis\xE3o geral"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--text-subtle)",
      fontFamily: "var(--font-mono)"
    }
  }, "moveisaurora.com.br")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      width: 220
    },
    className: "dash-search"
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    placeholder: "Buscar...",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 15
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    },
    className: "dash-range"
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ["Últimos 30 dias", "Últimos 7 dias", "Este mês", "Trimestre"]
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifica\xE7\xF5es",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "var(--grad-brand)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      flex: "none"
    }
  }, "AR"));
}
Object.assign(window, {
  DashSidebar,
  DashTopbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Overview.jsx
try { (() => {
/* Dashboard / client portal — Overview content (stats, chart, A/B, vitals, leads) */

function LeadsChart() {
  const data = [42, 38, 55, 48, 67, 72, 61, 84];
  const labels = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
  const max = 90,
    W = 520,
    H = 180,
    pad = 28;
  const bw = (W - pad * 2) / data.length;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    style: {
      display: "block"
    }
  }, [0, 0.5, 1].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: pad,
    x2: W - pad,
    y1: pad + (H - pad * 2) * g,
    y2: pad + (H - pad * 2) * g,
    stroke: "var(--border)",
    strokeWidth: "1"
  })), data.map((d, i) => {
    const h = d / max * (H - pad * 2);
    const x = pad + i * bw + bw * 0.22;
    const w = bw * 0.56;
    const y = H - pad - h;
    const last = i === data.length - 1;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: w,
      height: h,
      rx: "4",
      fill: last ? "var(--accent)" : "color-mix(in oklch, var(--brand-500) 30%, transparent)"
    }), /*#__PURE__*/React.createElement("text", {
      x: x + w / 2,
      y: H - pad + 14,
      textAnchor: "middle",
      fontSize: "10",
      fontFamily: "var(--font-mono)",
      fill: "var(--text-subtle)"
    }, labels[i]));
  }));
}
function DashOverview() {
  const {
    Card,
    Stat,
    Badge,
    Tag,
    Button
  } = window.GonzagaCodeDesignSystem_13169e;
  const leads = [{
    name: "João Mendes",
    src: "Google Orgânico",
    status: "Novo",
    tone: "brand",
    time: "há 12 min"
  }, {
    name: "Carla Lima",
    src: "Anúncio Meta",
    status: "Contatado",
    tone: "warning",
    time: "há 1 h"
  }, {
    name: "Pedro Souza",
    src: "Landing page",
    status: "Convertido",
    tone: "growth",
    time: "há 3 h"
  }, {
    name: "Marina Alves",
    src: "Google Orgânico",
    status: "Convertido",
    tone: "growth",
    time: "há 5 h"
  }, {
    name: "Rafael Dias",
    src: "Indicação",
    status: "Novo",
    tone: "brand",
    time: "ontem"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    },
    className: "dash-kpi-grid"
  }, [{
    v: "184",
    l: "Leads no mês",
    d: 23,
    tone: "growth",
    icon: "users"
  }, {
    v: "6.8",
    suf: "%",
    l: "Taxa de conversão",
    d: 14,
    tone: "brand",
    icon: "target"
  }, {
    v: "0.9",
    suf: "s",
    l: "Carregamento (LCP)",
    d: "−18%",
    tone: "default",
    icon: "gauge"
  }, {
    v: "12.4",
    suf: "k",
    l: "Visitantes únicos",
    d: 9,
    tone: "default",
    icon: "mouse-pointer-click"
  }].map(k => /*#__PURE__*/React.createElement(Card, {
    key: k.l,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 38,
      height: 38,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      background: "var(--accent-soft)",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: k.icon,
    size: 18
  }))), /*#__PURE__*/React.createElement(Stat, {
    value: k.v,
    suffix: k.suf,
    label: k.l,
    delta: k.d,
    tone: k.tone
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16
    },
    className: "dash-mid-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)"
    }
  }, "Leads por semana"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--text-subtle)"
    }
  }, "\xDAltimas 8 semanas")), /*#__PURE__*/React.createElement(Badge, {
    tone: "growth",
    dot: true
  }, "+38% vs. per\xEDodo anterior")), /*#__PURE__*/React.createElement(LeadsChart, null)), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)"
    }
  }, "A/B Test \u2014 CTA Hero"), /*#__PURE__*/React.createElement(Icon, {
    name: "split",
    size: 18,
    color: "var(--text-subtle)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--text-subtle)",
      marginTop: 4
    }
  }, "\"Quero or\xE7amento\" vs \"Falar agora\""), [{
    v: "Variante A",
    pct: 5.2,
    win: false,
    label: "Quero orçamento"
  }, {
    v: "Variante B",
    pct: 7.1,
    win: true,
    label: "Falar agora"
  }].map(x => /*#__PURE__*/React.createElement("div", {
    key: x.v,
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 13,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, x.label, " ", x.win && /*#__PURE__*/React.createElement(Badge, {
    tone: "growth",
    style: {
      marginLeft: 6
    }
  }, "Vencedora")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      color: x.win ? "var(--growth)" : "var(--text-muted)"
    }
  }, x.pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 99,
      background: "var(--surface-3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: x.pct / 8 * 100 + "%",
      height: "100%",
      borderRadius: 99,
      background: x.win ? "var(--growth)" : "var(--brand-400)"
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    style: {
      marginTop: 18
    },
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Aplicar vencedora"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: 16
    },
    className: "dash-mid-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)",
      marginBottom: 16
    }
  }, "Core Web Vitals"), [{
    k: "LCP",
    v: "0.9s",
    pct: 95,
    ok: true
  }, {
    k: "CLS",
    v: "0.01",
    pct: 98,
    ok: true
  }, {
    k: "INP",
    v: "84ms",
    pct: 92,
    ok: true
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      width: 36,
      color: "var(--text)"
    }
  }, m.k), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 99,
      background: "var(--surface-3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: m.pct + "%",
      height: "100%",
      borderRadius: 99,
      background: "var(--growth)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 700,
      color: "var(--growth)",
      width: 48,
      textAlign: "right"
    }
  }, m.v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: "10px 12px",
      borderRadius: "var(--radius-md)",
      background: "var(--growth-soft)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 16,
    color: "var(--growth)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--growth)",
      fontWeight: 600
    }
  }, "Tudo no verde \u2014 aprovado pelo Google"))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)"
    }
  }, "Leads recentes"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--accent)"
    }
  }, "Ver todos")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, leads.map(l => /*#__PURE__*/React.createElement("tr", {
    key: l.name,
    style: {
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--surface-3)",
      color: "var(--text-muted)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "var(--font-mono)"
    }
  }, l.name.split(" ").map(p => p[0]).join("")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, l.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 0",
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, l.src), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 0"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: l.tone,
    dot: true
  }, l.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 0",
      fontSize: 12,
      color: "var(--text-subtle)",
      textAlign: "right",
      fontFamily: "var(--font-mono)"
    }
  }, l.time))))))));
}
Object.assign(window, {
  DashOverview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-page/Landing.jsx
try { (() => {
/* Client landing-page template — single offer, conversion-first */

function LpTopbar({
  onCta
}) {
  const {
    Logo,
    Button,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "color-mix(in oklch, var(--surface) 86%, transparent)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--growth)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    },
    className: "lp-urgency"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-dot",
    size: 13
  }), " 3 vagas este m\xEAs"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, "Quero meu site"))));
}
function LpHero({
  onCta
}) {
  const {
    Card,
    Field,
    Input,
    Select,
    Checkbox,
    Button,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: "clamp(40px,6vw,72px)",
      background: "radial-gradient(800px 360px at 80% -10%, var(--accent-soft), transparent 70%), var(--bg)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "48px",
      alignItems: "start"
    },
    className: "lp-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "growth",
    dot: true
  }, "Entrega em 14 dias"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(2.2rem,4.4vw,3.75rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.035em",
      marginTop: 18
    }
  }, "Um site profissional que ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "transforma visitas em clientes"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-muted)",
      lineHeight: 1.6,
      marginTop: 18,
      maxWidth: "46ch"
    }
  }, "Pare de perder cliente para concorrente com site melhor. A gente cria sua presen\xE7a digital r\xE1pida, otimizada e pronta para gerar leads \u2014 sem voc\xEA levantar um dedo."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "26px 0 0",
      display: "grid",
      gap: 12
    }
  }, ["Carregamento abaixo de 1 segundo", "Otimizado para aparecer no Google", "Mobile-first: 80% do seu tráfego é celular", "Pronto para anúncios e campanhas"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--growth)"
  }), " ", t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, ["AR", "JM", "CL", "PS"].map((i, k) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "var(--ink-800)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "var(--font-mono)",
      border: "2px solid var(--surface)",
      marginLeft: k ? -10 : 0
    }
  }, i))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      color: "var(--amber-500)"
    }
  }, [0, 1, 2, 3, 4].map(s => /*#__PURE__*/React.createElement(Icon, {
    key: s,
    name: "star",
    size: 15,
    color: "var(--amber-500)",
    style: {
      fill: "var(--amber-500)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, "+120 neg\xF3cios atendidos")))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    id: "lp-form",
    style: {
      boxShadow: "var(--shadow-xl)",
      borderTop: "3px solid var(--accent)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "28px 6px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 42,
    color: "var(--growth)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      marginTop: 14
    }
  }, "Tudo certo!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      marginTop: 8
    }
  }, "Entramos em contato em at\xE9 24h com sua proposta personalizada.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)"
    }
  }, "Receba seu or\xE7amento gr\xE1tis"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Resposta em at\xE9 24h. Sem compromisso.")), /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    htmlFor: "lp-nome"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "lp-nome",
    placeholder: "Como podemos te chamar?",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp",
    htmlFor: "lp-wpp"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "lp-wpp",
    placeholder: "(11) 99999-9999",
    required: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tipo de neg\xF3cio",
    htmlFor: "lp-tipo"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "lp-tipo",
    placeholder: "Selecione...",
    options: ["Loja / E-commerce", "Serviços", "Clínica / Saúde", "Restaurante", "Outro"]
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "growth",
    size: "lg",
    fullWidth: true,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Quero meu or\xE7amento"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--text-subtle)",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12
  }), " Seus dados est\xE3o seguros"))))));
}
function LpBenefits() {
  const {
    Card
  } = window.GonzagaCodeDesignSystem_13169e;
  const items = [{
    icon: "gauge",
    title: "Velocidade que vende",
    desc: "Cada segundo de espera derruba a conversão. Seu site carrega antes do cliente desistir."
  }, {
    icon: "trending-up",
    title: "Mais leads, menos esforço",
    desc: "Estrutura pensada para guiar o visitante até o botão de ação certo."
  }, {
    icon: "smartphone",
    title: "Perfeito no celular",
    desc: "A maioria do seu público acessa pelo celular. A experiência é impecável em qualquer tela."
  }];
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      background: "var(--surface)",
      paddingTop: "clamp(48px,6vw,80px)",
      paddingBottom: "clamp(48px,6vw,80px)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: "52ch",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: "center"
    }
  }, "Por que importa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: 14
    }
  }, "Um site bonito n\xE3o paga as contas. Um site que converte, sim.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      marginTop: 44
    },
    className: "lp-benefits-grid"
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    padding: "lg",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 54,
      height: 54,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-lg)",
      background: "var(--grad-brand)",
      color: "#fff",
      boxShadow: "var(--glow-brand)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      marginTop: 18
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      marginTop: 8
    }
  }, it.desc))))));
}
function LpTestimonial() {
  return /*#__PURE__*/React.createElement(Section, {
    dark: true
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: "880px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "quote",
    size: 40,
    color: "var(--cyan-400)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(1.4rem,2.6vw,2rem)",
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
      color: "#fff",
      marginTop: 20
    }
  }, "\"Em 3 meses dobramos os pedidos pelo site. A Gonzaga Code n\xE3o entregou s\xF3 um site bonito \u2014 entregou uma m\xE1quina de vendas.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: "50%",
      background: "var(--grad-brand)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontFamily: "var(--font-mono)"
    }
  }, "AR"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "#fff"
    }
  }, "Ana Rocha"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-400)"
    }
  }, "Fundadora, M\xF3veis Aurora"))))));
}
function LpOffer({
  onCta
}) {
  const {
    Card,
    Button,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  const includes = ["Site completo (até 6 páginas)", "SEO técnico + Google", "Performance < 1s", "Formulários e WhatsApp", "Hospedagem 1º ano", "30 dias de ajustes grátis"];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: "640px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: "center"
    }
  }, "A oferta"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: 14
    }
  }, "Tudo o que voc\xEA precisa, num pacote s\xF3.")), /*#__PURE__*/React.createElement(Card, {
    variant: "feature",
    padding: "lg",
    style: {
      marginTop: 36,
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-subtle)",
      textTransform: "uppercase",
      letterSpacing: ".1em"
    }
  }, "Site profissional"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-3xl)"
    }
  }, "12x R$249"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      fontSize: 14
    }
  }, "ou R$2.490 \xE0 vista"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "growth",
    dot: true
  }, "Garantia 30 dias")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border)",
      margin: "22px 0"
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    },
    className: "lp-offer-list"
  }, includes.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 18,
    color: "var(--growth)"
  }), " ", i))), /*#__PURE__*/React.createElement(Button, {
    variant: "growth",
    size: "lg",
    fullWidth: true,
    style: {
      marginTop: 26
    },
    onClick: onCta,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Garantir minha vaga"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 12,
      color: "var(--text-subtle)",
      marginTop: 12,
      fontFamily: "var(--font-mono)"
    }
  }, "// satisfa\xE7\xE3o garantida ou seu dinheiro de volta"))));
}
function LpFaq() {
  const faqs = [{
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "Em média 14 dias úteis a partir da aprovação do conteúdo. Projetos mais simples saem em menos de uma semana."
  }, {
    q: "Eu consigo editar o site depois?",
    a: "Sim. Entregamos um painel simples e um treinamento rápido para você atualizar textos, imagens e ofertas."
  }, {
    q: "O site vai aparecer no Google?",
    a: "Entregamos com SEO técnico completo. O ranqueamento cresce com o tempo; também oferecemos planos de SEO contínuo."
  }, {
    q: "E se eu não gostar do resultado?",
    a: "Você tem 30 dias de ajustes inclusos e garantia de satisfação. Trabalhamos até ficar do jeito certo."
  }];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: "760px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: "center"
    }
  }, "D\xFAvidas comuns"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: 14
    }
  }, "Perguntas frequentes")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: f.q,
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      background: "var(--bg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "18px 20px",
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      font: "inherit"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-md)",
      color: "var(--text)"
    }
  }, f.q), /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? "minus" : "plus",
    size: 20,
    color: "var(--accent)"
  })), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: "0 20px 20px",
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.65,
      margin: 0
    }
  }, f.a))))));
}
function LpFinalCta({
  onCta
}) {
  const {
    Button,
    Logo
  } = window.GonzagaCodeDesignSystem_13169e;
  return /*#__PURE__*/React.createElement(Section, {
    dark: true,
    style: {
      textAlign: "center",
      paddingBottom: "clamp(40px,5vw,64px)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      maxWidth: "720px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(1.8rem,3.6vw,2.75rem)",
      letterSpacing: "-0.03em",
      color: "#fff"
    }
  }, "Seu pr\xF3ximo cliente est\xE1 procurando voc\xEA agora."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-300)",
      fontSize: "var(--text-md)",
      marginTop: 16
    }
  }, "N\xE3o deixe ele encontrar o concorrente primeiro. Comece hoje."), /*#__PURE__*/React.createElement(Button, {
    variant: "growth",
    size: "lg",
    style: {
      marginTop: 28
    },
    onClick: onCta,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Quero meu or\xE7amento gr\xE1tis"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: "1px solid color-mix(in oklch, var(--ink-700) 40%, transparent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-500)"
    }
  }, "\xA9 ", new Date().getFullYear(), " Gonzaga Code"))));
}
Object.assign(window, {
  LpTopbar,
  LpHero,
  LpBenefits,
  LpTestimonial,
  LpOffer,
  LpFaq,
  LpFinalCta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-page/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
/* Marketing site — Hero (dark) */
function MktHero() {
  const {
    Button,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  return /*#__PURE__*/React.createElement(Section, {
    dark: true,
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: "clamp(64px,9vw,120px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(900px 420px at 75% -10%, color-mix(in oklch, var(--brand-600) 28%, transparent), transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(600px 320px at 5% 110%, color-mix(in oklch, var(--cyan-500) 16%, transparent), transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: "56px",
      alignItems: "center"
    },
    className: "mkt-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: "var(--cyan-400)"
    }
  }, "Performance \xB7 SEO \xB7 Convers\xE3o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(2.5rem, 5.2vw, 4.75rem)",
      lineHeight: 1.02,
      letterSpacing: "-0.035em",
      margin: "20px 0 0",
      color: "#fff"
    }
  }, "Sites que", /*#__PURE__*/React.createElement("br", null), "n\xE3o s\xF3 impressionam \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--grad-brand)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "convertem"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: 1.6,
      color: "var(--ink-300)",
      maxWidth: "46ch",
      marginTop: "22px"
    }
  }, "Ag\xEAncia de desenvolvimento focada em alta convers\xE3o. C\xF3digo limpo, carregamento abaixo de 1s e SEO t\xE9cnico de verdade \u2014 menos rejei\xE7\xE3o, mais leads para o seu neg\xF3cio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      marginTop: "32px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Solicitar or\xE7amento"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: "transparent",
      color: "#fff",
      borderColor: "var(--ink-700)"
    },
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: 16
    })
  }, "Ver portf\xF3lio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "28px",
      marginTop: "40px",
      flexWrap: "wrap"
    }
  }, [["+38%", "conversão média"], ["0.9s", "carregamento"], ["98/100", "PageSpeed"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-xl)",
      color: "#fff"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--ink-400)",
      fontFamily: "var(--font-mono)",
      letterSpacing: ".04em"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "color-mix(in oklch, var(--ink-900) 70%, transparent)",
      border: "1px solid color-mix(in oklch, var(--ink-700) 60%, transparent)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-xl)",
      overflow: "hidden",
      backdropFilter: "blur(8px)"
    },
    className: "mkt-hero-panel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 16px",
      borderBottom: "1px solid color-mix(in oklch, var(--ink-700) 50%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#FF5F57"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#FEBC2E"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#28C840"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-500)"
    }
  }, "lighthouse.report")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px"
    }
  }, [["Performance", 98, "var(--emerald-400)"], ["SEO", 100, "var(--emerald-400)"], ["Acessibilidade", 96, "var(--emerald-400)"], ["Best Practices", 100, "var(--emerald-400)"]].map(([k, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-300)",
      width: 110
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: 99,
      background: "color-mix(in oklch, var(--ink-700) 60%, transparent)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v + "%",
      height: "100%",
      background: c,
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: 700,
      color: c,
      width: 28,
      textAlign: "right"
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "18px",
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      background: "color-mix(in oklch, var(--emerald-400) 12%, transparent)",
      border: "1px solid color-mix(in oklch, var(--emerald-400) 30%, transparent)",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 18,
    color: "var(--emerald-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-200)"
    }
  }, "Core Web Vitals no verde em todas as p\xE1ginas.")))))));
}
window.MktHero = MktHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Portfolio.jsx
try { (() => {
/* Marketing site — Results/proof band + Portfolio grid */
function MktProof() {
  const {
    Stat
  } = window.GonzagaCodeDesignSystem_13169e;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "56px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "32px"
    },
    className: "mkt-proof-grid"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+38",
    suffix: "%",
    label: "Convers\xE3o m\xE9dia ap\xF3s o relan\xE7amento",
    tone: "growth",
    delta: 38
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "0.9",
    suffix: "s",
    label: "Tempo de carregamento (LCP)",
    tone: "brand"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2.4",
    suffix: "x",
    label: "Mais leads qualificados em 90 dias",
    tone: "growth",
    delta: 140
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "120",
    suffix: "+",
    label: "Projetos entregues no prazo"
  }))));
}
function BrowserMock({
  hue,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      border: "1px solid var(--border)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 12px",
      background: "var(--surface-2)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--ink-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--ink-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--ink-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-subtle)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: `linear-gradient(135deg, ${hue[0]}, ${hue[1]})`,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 18,
      width: "44%",
      height: 10,
      borderRadius: 4,
      background: "rgba(255,255,255,.85)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 36,
      width: "62%",
      height: 7,
      borderRadius: 4,
      background: "rgba(255,255,255,.55)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      bottom: 18,
      width: 96,
      height: 30,
      borderRadius: 8,
      background: "rgba(255,255,255,.92)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 18,
      top: 18,
      width: 64,
      height: 64,
      borderRadius: 12,
      background: "rgba(255,255,255,.18)",
      border: "1px solid rgba(255,255,255,.3)"
    }
  })));
}
function MktPortfolio() {
  const {
    Card,
    Tag,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  const work = [{
    name: "Móveis Aurora",
    cat: "E-commerce",
    hue: ["#2563EB", "#06B6D4"],
    stack: ["Next.js", "Shopify"],
    metric: "+52% vendas",
    url: "moveisaurora.com.br"
  }, {
    name: "Clínica Vita",
    cat: "Institucional",
    hue: ["#059669", "#22D3EE"],
    stack: ["Astro", "SEO"],
    metric: "1ª no Google",
    url: "clinicavita.com.br"
  }, {
    name: "Studio Lente",
    cat: "Landing page",
    hue: ["#1E40AF", "#7C3AED"],
    stack: ["React"],
    metric: "+38% leads",
    url: "studiolente.com"
  }];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "50ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Portf\xF3lio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: "16px"
    }
  }, "Resultado que d\xE1 pra medir.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: "var(--text-sm)",
      color: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "Ver todos os cases ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
      marginTop: "40px"
    },
    className: "mkt-port-grid"
  }, work.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.name,
    interactive: true,
    padding: "sm",
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(BrowserMock, {
    hue: w.hue,
    label: w.url
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 6px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)"
    }
  }, w.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "growth",
    dot: true
  }, w.metric)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-subtle)",
      marginTop: 4,
      fontFamily: "var(--font-mono)"
    }
  }, w.cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 12,
      flexWrap: "wrap"
    }
  }, w.stack.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)))))))));
}
Object.assign(window, {
  MktProof,
  MktPortfolio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Process.jsx
try { (() => {
/* Marketing site — Process steps + Contact CTA with form */
function MktProcess() {
  const steps = [{
    n: "01",
    icon: "compass",
    title: "Diagnóstico",
    desc: "Entendemos seu objetivo de negócio antes de uma linha de código. Para quem é o site e o que ele precisa fazer."
  }, {
    n: "02",
    icon: "pen-tool",
    title: "Design & Copy",
    desc: "Layout limpo e mobile-first, com texto orientado à ação. Cada seção empurra para a conversão."
  }, {
    n: "03",
    icon: "code-2",
    title: "Desenvolvimento",
    desc: "Código modular, soluções nativas primeiro. Performance e SEO técnico desde o primeiro commit."
  }, {
    n: "04",
    icon: "rocket",
    title: "Lançamento & CRO",
    desc: "Subimos, medimos e testamos. A/B tests contínuos para crescer o resultado mês a mês."
  }];
  return /*#__PURE__*/React.createElement(Section, {
    dark: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "56ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: "var(--cyan-400)"
    }
  }, "Como trabalhamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: "16px",
      color: "#fff"
    }
  }, "Um processo desenhado para gerar retorno.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "20px",
      marginTop: "44px"
    },
    className: "mkt-proc-grid"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      borderTop: "2px solid color-mix(in oklch, var(--ink-700) 70%, transparent)",
      paddingTop: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      color: "var(--cyan-400)"
    }
  }, s.n), /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "var(--ink-400)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-md)",
      marginTop: "16px",
      color: "#fff"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--ink-400)",
      lineHeight: 1.6,
      marginTop: "8px"
    }
  }, s.desc))))));
}
function MktContact() {
  const {
    Card,
    Field,
    Input,
    Select,
    Checkbox,
    Button,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    id: "contato"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "56px",
      alignItems: "center"
    },
    className: "mkt-contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Vamos conversar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: "16px"
    }
  }, "Receba uma proposta em at\xE9 24h."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-md)",
      marginTop: "14px",
      maxWidth: "44ch"
    }
  }, "Conte seu objetivo. A gente devolve um plano claro de como seu site pode gerar mais leads e vendas \u2014 sem enrola\xE7\xE3o."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "28px 0 0",
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, ["Diagnóstico gratuito de performance e SEO", "Proposta com escopo e prazo definidos", "Foco em retorno, não só em estética"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "var(--text-sm)",
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 20,
    color: "var(--growth)"
  }), t)))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      boxShadow: "var(--shadow-xl)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 8px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "party-popper",
    size: 40,
    color: "var(--growth)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      marginTop: 16
    }
  }, "Recebido! \uD83D\uDE80"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      marginTop: 8
    }
  }, "Retornamos em at\xE9 24h \xFAteis com sua proposta."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      marginTop: 16
    },
    onClick: () => setSent(false)
  }, "Enviar outro")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)"
    }
  }, "Solicitar or\xE7amento"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "A/B em teste")), /*#__PURE__*/React.createElement(Field, {
    label: "Nome",
    htmlFor: "nome"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "nome",
    placeholder: "Seu nome",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail corporativo",
    htmlFor: "email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    placeholder: "voce@empresa.com.br",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Objetivo principal",
    htmlFor: "obj"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "obj",
    placeholder: "Selecione...",
    options: ["Gerar mais leads", "Vender online", "Autoridade de marca", "Refazer site atual"]
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Quero tamb\xE9m uma an\xE1lise gratuita do site atual",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "growth",
    size: "lg",
    fullWidth: true,
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 16
    })
  }, "Quero minha proposta"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-subtle)",
      textAlign: "center",
      fontFamily: "var(--font-mono)"
    }
  }, "// resposta em at\xE9 24h \xB7 sem spam"))))));
}
Object.assign(window, {
  MktProcess,
  MktContact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Services.jsx
try { (() => {
/* Marketing site — Client logos strip + Services grid */
function MktLogos() {
  const clients = ["Móveis Aurora", "Clínica Vita", "Studio Lente", "Pé Quente", "Norte Advocacia", "Bistrô Sal"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ink-950)",
      borderTop: "1px solid color-mix(in oklch, var(--ink-700) 40%, transparent)",
      padding: "28px 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "clamp(20px,4vw,52px)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ink-500)"
    }
  }, "Neg\xF3cios que confiam"), clients.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-md)",
      color: "var(--ink-400)",
      letterSpacing: "-0.02em"
    }
  }, c)))));
}
function MktServices() {
  const {
    Card,
    Badge
  } = window.GonzagaCodeDesignSystem_13169e;
  const services = [{
    icon: "search-check",
    title: "SEO Técnico",
    desc: "Estrutura semântica, schema, sitemap e Core Web Vitals no verde. Você aparece no Google.",
    tag: "Mais tráfego"
  }, {
    icon: "zap",
    title: "Performance",
    desc: "Carregamento abaixo de 1s. Cada milissegundo reduz a rejeição e aumenta a conversão.",
    tag: "Menos rejeição"
  }, {
    icon: "layout-template",
    title: "Design Limpo",
    desc: "Interfaces objetivas e mobile-first que guiam o visitante até a ação.",
    tag: "Mais clareza"
  }, {
    icon: "mouse-pointer-click",
    title: "Landing Pages",
    desc: "Páginas de oferta única com copy orientada a conversão e A/B testing.",
    tag: "Mais leads",
    featured: true
  }, {
    icon: "shopping-cart",
    title: "E-commerce",
    desc: "Lojas rápidas e seguras com checkout otimizado para reduzir abandono.",
    tag: "Mais vendas"
  }, {
    icon: "life-buoy",
    title: "Manutenção & CRO",
    desc: "Monitoramento, melhorias contínuas e testes para crescer mês a mês.",
    tag: "Crescimento"
  }];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "60ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O que entregamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      marginTop: "16px"
    }
  }, "Tudo o que um site precisa para gerar resultado."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-md)",
      marginTop: "12px"
    }
  }, "N\xE3o vendemos p\xE1ginas bonitas. Entregamos ativos digitais que trazem retorno mensur\xE1vel para o dono do neg\xF3cio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginTop: "44px"
    },
    className: "mkt-svc-grid"
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    interactive: true,
    padding: "lg",
    variant: s.featured ? "feature" : undefined
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 46,
      height: 46,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      background: "var(--accent-soft)",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "growth"
  }, s.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      marginTop: "18px"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      marginTop: "8px"
    }
  }, s.desc))))));
}
Object.assign(window, {
  MktLogos,
  MktServices
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
