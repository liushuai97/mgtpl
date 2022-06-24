'use strict';

var topojson = require('topojson-client');

var data = {
  r: "getChildren",
  x: "call",
  y: "children",
  bt: "length",
  E: "hasChildren",
  vt: "slice",
  m: "splice",
  R: "concat",
  d: "clone",
  j: "push",
  a: "object",
  b: "apply",
  _: "prototype",
  o: "superclass",
  f: "super_",
  c: "super",
  l: "create",
  v: "$",
  g: "beforeEvent",
  p: "onEvent",
  T: "defineProperty",
  h: "defaultValue",
  P: "value",
  w: "readOnly",
  L: "onSetting",
  n: "navigator",
  e: "userAgent",
  M: "test",
  O: "ontouchstart",
  s: "match",
  A: "classList",
  I: "getAttribute",
  C: "class",
  F: "split",
  D: " ",
  N: "indexOf",
  B: "remove",
  k: "number",
  U: "string",
  G: "isArray",
  $: "event",
  W: "preventDefault",
  H: "stopPropagation",
  X: "cancelBubble",
  z: "random",
  V: "ceil",
  K: "floor",
  Q: "#",
  Z: "000000",
  J: "rgba(",
  q: ",",
  tt: "toFixed",
  it: ")",
  nt: "enumerable",
  et: "_",
  st: ".",
  ht: "console",
  rt: "requestAnimationFrame",
  at: "webkitRequestAnimationFrame",
  ot: "mozRequestAnimationFrame",
  ft: "oRequestAnimationFrame",
  ct: "setTimeout",
  ut: "mozCancelAnimationFrame",
  _t: "msCancelAnimationFrame",
  dt: "clearTimeout",
  lt: "#333",
  yt: "_fontStyle",
  gt: "normal",
  Et: "_fontSize",
  xt: "_fontChanged",
  mt: "_fontFamily",
  pt: "_font",
  Tt: "FONT_SIZE",
  wt: "px ",
  Lt: "FONT_FAMILY",
  Mt: "containsById",
  Ot: "'",
  St: "' not exist",
  At: "removeById",
  It: "clear",
  Ct: "_oUN",
  Pt: "isEmpty",
  Ft: "toDatas",
  Rt: "rotate",
  Dt: "sqrt",
  Nt: "Point(",
  Bt: ", ",
  kt: "distance",
  Ut: "atan2",
  Gt: "_sin",
  $t: "bottom",
  Wt: "right",
  Ht: "_rest",
  Yt: "_oWos",
  jt: "width",
  Xt: "height",
  zt: "Size(",
  Vt: "x",
  Kt: "y",
  Qt: "arguments error",
  Zt: "intersectsRect",
  Jt: "intersectsPoint",
  qt: "addRect",
  ti: "MAX_VALUE",
  ii: "left",
  ni: " , ",
  ei: "equals",
  si: "intersects",
  hi: "intersection",
  ri: "horizontalPosition",
  ai: "verticalPosition",
  oi: "sortName",
  fi: "l",
  ci: "r",
  ui: "t",
  _i: "b",
  di: "LEFT_TOP",
  li: "LEFT_MIDDLE",
  bi: "m",
  vi: "CENTER_TOP",
  yi: "c",
  gi: "CENTER_MIDDLE",
  Ei: "CENTER_BOTTOM",
  xi: "RIGHT_TOP",
  mi: "RIGHT_MIDDLE",
  pi: "LEFT_BOTTOM",
  Ti: "RIGHT_BOTTOM",
  wi: "byPercent",
  Li: "fromString",
  Mi: "radius",
  Oi: "classify",
  Si: "source",
  Ai: "kind",
  Ii: "source: ",
  Ci: ", type: ",
  Pi: "type",
  Fi: ", kind: ",
  Ri: "propertyType",
  Di: "property.change",
  Ni: ", propertyName: ",
  Bi: ", oldValue: ",
  ki: "oldValue",
  Ui: ", value: ",
  Gi: "propertyName",
  $i: "newIndex",
  Wi: "getChildIndex",
  Hi: "parent",
  Yi: "child.add",
  ji: "child.remove",
  Xi: "child.index",
  zi: "listener",
  Vi: "scope",
  Ki: "listeners",
  Qi: "_oTJ",
  Zi: "contains",
  Ji: "addListener",
  qi: "list",
  tn: "data",
  nn: "index",
  en: "oldIndex",
  sn: ", data: ",
  hn: ", index: ",
  rn: ", oldIndex: ",
  an: "KIND_ADD",
  on: "add",
  fn: "KIND_REMOVE",
  cn: "KIND_INDEX_CHANGE",
  un: "index.change",
  _n: "PROPERTY_TYPE_CLIENT",
  dn: "_oUM",
  ln: "onChildAdd",
  bn: "onChildRemove",
  vn: "onParentChanged",
  yn: "toChildren",
  gn: "onChildrenClear",
  En: "accept",
  xn: "_m9",
  mn: "_h9",
  pn: "KIND_CLEAR",
  Tn: "filter",
  wn: "listChangeDispatcher",
  Ln: "selectionChangeDispatcher",
  Mn: "_selectionModel",
  On: "beforeDataPropertyChange",
  Sn: "onDataPropertyChanged",
  An: "parentChangeDispatcher",
  In: "childIndexChangeDispatcher",
  Cn: "$roots",
  Pn: "setIndex",
  Fn: "_dAIndexFlag",
  Rn: "removeChild",
  Dn: "data '",
  Nn: "getByIndex",
  Bn: "selectionModel",
  kn: "_oUoxChangeListener",
  Un: "datas",
  Gn: "ms-",
  $n: "replace",
  Wn: "toUpperCase",
  Hn: "createElement",
  Yn: "div",
  jn: "style",
  Xn: "-",
  zn: "toLowerCase",
  Vn: "-ms-",
  Kn: ":",
  Qn: ";",
  Zn: "substring",
  Jn: "insertRule",
  qn: "{",
  te: "}",
  ie: "addRule",
  ne: "clientWidth",
  ee: "getBoundingClientRect",
  se: "head",
  he: "Transform",
  re: "appendChild",
  ae: "createTextNode",
  oe: "text/css",
  fe: "qunee-styles",
  ce: ";\n",
  ue: "handle",
  _e: "addEventListener",
  de: "DOUBLE_CLICK_INTERVAL_TIME",
  le: "LONG_PRESS_INTERVAL",
  be: "DELAY_CLICK",
  ve: "onmousewheel",
  ye: "DOMMouseScroll",
  ge: "contextmenu,mousedown,mouseup,click,dblclick,mousemove,keydown,keyup,",
  Ee: ",touchstart,touchmove,touchend,touchcancel",
  xe: "TouchEvent",
  me: "returnValue",
  pe: "_oWurrentItem",
  Te: "__dragging",
  we: "clientX",
  Le: "clientY",
  Me: "_scope",
  Oe: "_dragPoints",
  Se: "__kP",
  Ae: "forEach",
  Ie: "_oUQ",
  Ce: "mousemove",
  Pe: "mouseup",
  Fe: "removeEventListener",
  Re: "on",
  De: "__longPressTimer",
  Ne: "__onLongPressFunction",
  Be: "_mFEvent",
  ke: "button",
  Ue: "onlongpress2",
  Ge: "onlongpress",
  $e: "bind",
  We: "touches",
  He: "_oTB",
  Ye: "__mFMulTouchEvent",
  je: "_scale",
  Xe: "prevScale",
  ze: "dScale",
  Ve: "__pinching",
  Ke: "startpinch",
  Qe: "onpinch",
  Ze: "endpinch",
  Je: "timeStamp",
  qe: "mousedown",
  ts: "__oWancelClick",
  is: "click",
  ns: "dblclick",
  es: "contextmenu",
  ss: "oncontextmenu",
  hs: "wheelDelta",
  rs: "detail",
  as: "_handler",
  os: "onevent",
  fs: "onmouseup",
  cs: "screenX",
  us: "screenY",
  _s: "__oWlickTimer",
  ds: "__dblclicked",
  ls: "ondblclick",
  bs: "onclick",
  vs: "onstart2",
  ys: "onstart",
  gs: "onrelease2",
  Es: "onrelease",
  xs: "startdrag2",
  ms: "startdrag",
  ps: "ondrag2",
  Ts: "ondrag",
  ws: "enddrag2",
  Ls: "enddrag",
  Ms: "_oUE",
  Os: "getData",
  Ss: "getUI",
  As: "canvasPanel",
  Is: "getElementByMouseEvent",
  Cs: "getUIByMouseEvent",
  Ps: "onElementRemoved",
  Fs: "onClear",
  Rs: "_oTL",
  Ds: "destroy",
  Ns: "metaKey",
  Bs: "ctrlKey",
  ks: "points",
  Us: "_mFX",
  Gs: "startX",
  $s: "startY",
  Ws: "_mFY",
  Hs: "totalDeltaY",
  Ys: "limitCount",
  js: "-webkit-zoom-in",
  Xs: "-webkit-zoom-out",
  zs: "-webkit-grabbing",
  Vs: "-moz-zoom-in",
  Ks: "-moz-zoom-out",
  Qs: "-moz-grabbing",
  Zs: "crosshair",
  Js: "move",
  qs: "_oWallback",
  th: "_requestID",
  ih: "cancelAnimationFrame",
  nh: "_onStep",
  eh: "_nK",
  sh: "?",
  hh: "__time=",
  rh: "open",
  ah: "GET",
  oh: "onreadystatechange",
  fh: "readyState",
  ch: "status",
  uh: "' load error",
  _h: "send",
  dh: "0.0",
  lh: "boolean",
  bh: "nodeType",
  vh: "tagName",
  yh: "nextSibling",
  gh: "containsRect",
  Eh: "Rect",
  xh: "Size",
  mh: "Point",
  ph: "PropertyChangeEvent",
  Th: "ListEvent",
  wh: "Handler",
  Lh: "Dispatcher",
  Mh: "Position",
  Oh: "SelectionModel",
  Sh: "IListener",
  Ah: "loadURL",
  Ih: "loadXML",
  Ch: "responseXML",
  Ph: "' XML format error.",
  Fh: "responseText",
  Rh: "' JSON format error.",
  Dh: "parse",
  Nh: "isMetaKey",
  Bh: "calculateDistance",
  kh: "HashList",
  Uh: "DragSupport",
  Gh: "addCSSRule",
  $h: "flip",
  Wh: "mirror",
  Hh: "border.rect",
  Yh: "border",
  jh: "shadow",
  Xh: "elbow",
  zh: "elbow.H",
  Vh: "elbow.V",
  Kh: "orthogonal",
  Qh: "orthogonal.H",
  Zh: "orthogonal.V",
  Jh: "orthogonal.H.V",
  qh: "orthogonal.V.H",
  tr: "extend.top",
  ir: "extend.left",
  nr: "extend.bottom",
  er: "extend.right",
  sr: "zigzag",
  hr: "none",
  rr: "round",
  ar: "bevel",
  or: "rect",
  fr: "circle",
  cr: "ELLIPSE",
  ur: "oval",
  _r: "roundrect",
  dr: "star",
  lr: "triangle",
  br: "hexagon",
  vr: "pentagon",
  yr: "trapezium",
  gr: "rhombus",
  Er: "parallelogram",
  xr: "heart",
  mr: "diamond",
  pr: "cross",
  Tr: "arrow.standard",
  wr: "arrow.1",
  Lr: "arrow.2",
  Mr: "arrow.3",
  Or: "arrow.4",
  Sr: "arrow.5",
  Ar: "arrow.6",
  Ir: "arrow.7",
  Cr: "arrow.8",
  Pr: "arrow.open",
  Fr: "addPoint",
  Rr: "LINE_CAP_TYPE_BUTT",
  Dr: "butt",
  Nr: "LINE_CAP_TYPE_ROUND",
  Br: "LINE_CAP_TYPE_SQUARE",
  kr: "square",
  Ur: "LINE_JOIN_TYPE_BEVEL",
  Gr: "LINE_JOIN_TYPE_ROUND",
  $r: "LINE_JOIN_TYPE_MITER",
  Wr: "miter",
  Hr: "EDGE_BUNDLE_TYPE_CURVE",
  Yr: "curve",
  jr: "EDGE_BUNDLE_TYPE_PARALLEL",
  Xr: "parallel",
  zr: "EDGE_BUNDLE_TYPE_ELBOW",
  Vr: "SELECTION_TYPE",
  Kr: "SELECTION_TOLERANCE",
  Qr: "SELECTION_BORDER",
  Zr: "SELECTION_COLOR",
  Jr: "SELECTION_TYPE_SHADOW",
  qr: "BORDER_RADIUS",
  ta: "POINTER_WIDTH",
  ia: "ARROW_SIZE",
  na: "IMAGE_MAX_SIZE",
  ea: "LINE_HEIGHT",
  sa: "devicePixelRatio",
  ha: "ratio",
  ra: "px",
  aa: "canvas",
  oa: "getContext",
  fa: "2d",
  ca: "mozBackingStorePixelRatio",
  ua: "oBackingStorePixelRatio",
  _a: "backingStorePixelRatio",
  da: "setSize",
  la: "getImageData",
  ba: "_otherPoint",
  va: "_squareR",
  ya: "_lPCircle",
  ga: "firstPoint",
  Ea: "lastPoint",
  xa: "_p2x",
  ma: "_p2y",
  pa: "_p1x",
  Ta: "_p1y",
  wa: "arcTo",
  La: "moveTo",
  Ma: "lineTo",
  Oa: "quadraticCurveTo",
  Sa: "bezierCurveTo",
  Aa: "closePath",
  Ia: "_oT1",
  Ca: "_oT2",
  Pa: "_CCW",
  Fa: "$boundaryPoint",
  Ra: "$boundaryPoint1",
  Da: "$boundaryPoint2",
  Na: "strokeStyle",
  Ba: "#CCC",
  ka: "strokeRect",
  Ua: "fillStyle",
  Ga: "fillRect",
  $a: "save",
  Wa: "translate",
  Ha: "scale",
  Ya: "beginPath",
  ja: "clip",
  Xa: "#f0f1f2",
  za: "fill",
  Va: "globalAlpha",
  Ka: "lineWidth",
  Qa: "#dbdcde",
  Za: "stroke",
  Ja: "#FFF",
  qa: "restore",
  to: "lastIndexOf",
  io: "IMAGE_WIDTH",
  no: "IMAGE_HEIGHT",
  eo: "renderColor",
  so: "IMAGE_INVALID",
  ho: "MAX_CACHE_PIXELS",
  ro: "draw",
  ao: "_oUG",
  oo: "setByRect",
  fo: "bounds",
  co: "error",
  uo: "_dispatcher",
  _o: "parentNode",
  lo: "Image load error - ",
  bo: "_pixels",
  vo: "img",
  yo: "visibility",
  go: "hidden",
  Eo: "body",
  xo: "onload",
  mo: "onerror",
  po: "transparencyGiven",
  To: "delayTime",
  wo: "disposalMethod",
  Lo: "lctFlag",
  Mo: "leftPos",
  Oo: "pixels",
  So: "overrideMimeType",
  Ao: "xhr",
  Io: "drawImage",
  Co: "cacheable",
  Po: "_width",
  Fo: "_height",
  Ro: "putImageData",
  Do: "shadowColor",
  No: "shadowBlur",
  Bo: "shadowOffsetX",
  ko: "shadowOffsetY",
  Uo: "renderColorBlendMode",
  Go: "IMAGE_DEFAULT",
  $o: "_defaultCache",
  Wo: "maxScale",
  Ho: "hitTest",
  Yo: "image",
  jo: "load",
  Xo: "name",
  zo: "scaleMode",
  Vo: "full.uniform",
  Ko: "padding",
  Qo: "draw image error - ",
  Zo: "validate",
  Jo: "_oUI",
  qo: "registerImage",
  tf: "colors",
  nf: "positions",
  ef: "GRADIENT_TYPE_LINEAR",
  sf: "angle",
  hf: "createLinearGradient",
  rf: "GRADIENT_TYPE_RADIAL",
  af: "position",
  of: "createRadialGradient",
  ff: "addColorStop",
  cf: "LINEAR_GRADIENT_HORIZONTAL",
  uf: "RADIAL_GRADIENT",
  _f: "RAINBOW_LINEAR_GRADIENT_VERTICAL",
  df: "RAINBOW_RADIAL_GRADIENT",
  lf: "q",
  bf: "a",
  vf: "z",
  yf: "SEGMENT_MOVE_TO",
  gf: "SEGMENT_LINE_TO",
  Ef: "SEGMENT_CURVE_TO",
  xf: "SEGMENT_ARC_TO",
  mf: "SEGMENT_CLOSE",
  pf: "invalidTerminal",
  Tf: "isNumber",
  wf: "ADD_SEGMENT_TYPE",
  Lf: "line",
  Mf: "getLocation",
  Of: "BLEND_MODE",
  Sf: "BLEND_MODE_DARKEN",
  Af: "BLEND_MODE_COLOR_BURN",
  If: "BLEND_MODE_LINEAR_BURN",
  Cf: "BLEND_MODE_LIGHTEN",
  Pf: "BLEND_MODE_SCREEN",
  Ff: "__lASegments",
  Rf: "selectionShadowBlur",
  Df: "selectionColor",
  Nf: "selectionShadowOffsetX",
  Bf: "selectionShadowOffsetY",
  kf: "outline",
  Uf: "selectionBorder",
  Gf: "lineCap",
  $f: "lineJoin",
  Wf: "outlineStyle",
  Hf: "rgba(0,0,0,0)",
  Yf: "fillColor",
  jf: "fillGradient",
  Xf: "_fillGradient",
  zf: "lineDash",
  Vf: "lineFillColor",
  Kf: "lineDashCap",
  Qf: "lineDashJoin",
  Zf: "getBounds",
  Jf: "isPointInStroke",
  qf: "isPointInPath",
  tc: "_pixelSize",
  ic: "_originalPixelsWidth",
  nc: "_originalPixels",
  ec: "darken",
  sc: "BLEND_MODE_MULTIPLY",
  hc: "multiply",
  rc: "color.burn",
  ac: "linear.burn",
  oc: "lighten",
  fc: "screen",
  cc: "BLEND_MODE_GRAY",
  uc: "gray",
  _c: "setTransform",
  dc: "(",
  lc: "]",
  bc: "_n9NO",
  vc: "miterLimit",
  yc: "#1C6B9D",
  gc: "#186493",
  Ec: "#145E8B",
  xc: "#115B87",
  mc: "#115A85",
  pc: "#125C89",
  Tc: "#176291",
  wc: "#1D6C9F",
  Lc: "#2479B0",
  Mc: "#2881BB",
  Oc: "#1F6FA2",
  Sc: "#115A86",
  Ac: "#004063",
  Ic: "#2e8ece",
  Cc: "#efefef",
  Pc: "#135D89",
  Fc: "#186494",
  Rc: "#1F70A4",
  Dc: "#257AB2",
  Nc: "#2377AD",
  Bc: "#1E6DA0",
  kc: "#105984",
  Uc: "#f7f8f8",
  Gc: "#6A6969",
  $c: "#4F4C4B",
  Wc: "#545252",
  Hc: "#646262",
  Yc: "#6F6E6F",
  jc: "#4C4948",
  Xc: "#494645",
  zc: "#7D7D7D",
  Vc: "#808080",
  Kc: "#888888",
  Qc: "#939293",
  Zc: "#9E9D9D",
  Jc: "#A7A5A4",
  qc: "#A9A6A5",
  tu: "#A7A4A3",
  iu: "#FFFFFF",
  nu: "#E9EAEA",
  eu: "#9fa0a0",
  su: "#c9caca",
  hu: "#3e3a39",
  ru: "#B2CBEA",
  au: "#2E8ECE",
  ou: "#727171",
  fu: "#b5b5b6",
  cu: "Q-",
  uu: "_oUS",
  _u: "$rotate",
  du: "$offsetX",
  lu: "$offsetY",
  bu: "$layoutByAnchorPoint",
  vu: "$invalidateSize",
  yu: "$padding",
  gu: "grow",
  Eu: "$border",
  xu: "$pointerWidth",
  mu: "$invalidateAnchorPoint",
  pu: "$borderRadius",
  Tu: "_pointerX",
  wu: "$pointerX",
  Lu: "_pointerY",
  Mu: "__nDPointer",
  Ou: "_nZShape",
  Su: "getRect",
  Au: "backgroundGradient",
  Iu: "_oUackgroundGradient",
  Cu: "layoutByPath",
  Pu: "$data",
  Fu: "globalDirection",
  Ru: "$invalidateRotate",
  Du: "setLineDash",
  Nu: "getLineDash",
  Bu: "mozDash",
  ku: "webkitLineDash",
  Uu: "lineDashOffset",
  Gu: "mozDashOffset",
  $u: "webkitLineDashOffset",
  Wu: "reduce",
  Hu: "delay",
  Yu: "_oWache",
  ju: "_jGed",
  Xu: "_oW2",
  zu: "_oUufferedImage",
  Vu: "readByte",
  Ku: "readBytes",
  Qu: "read",
  Zu: "fromCharCode",
  Ju: "label",
  qu: "extType",
  t_: "gce",
  i_: "reserved",
  n_: "userInput",
  e_: "shift",
  s_: "readUnsigned",
  h_: "transparencyIndex",
  r_: "com",
  a_: "comment",
  o_: "pte",
  f_: "ptHeader",
  c_: "ptData",
  u_: "app",
  __: "authCode",
  d_: "NETSCAPE",
  l_: "unknown",
  b_: "iterations",
  v_: "terminator",
  y_: "appData",
  g_: "identifier",
  E_: "interlaced",
  x_: "sorted",
  m_: "lctSize",
  p_: "lzwMinCodeSize",
  T_: "charCodeAt",
  w_: "Invalid LZW code.",
  L_: "sentinel",
  M_: "ext",
  O_: "eof",
  S_: "Unknown block: 0x",
  A_: "GIF",
  I_: "Not a GIF file.",
  C_: "gctFlag",
  P_: "gctSize",
  F_: "bgColor",
  R_: "pixelAspectRatio",
  D_: "keydown",
  N_: "altKey",
  B_: "keyCode",
  k_: "",
  U_: "",
  G_: "\nPublish Date - ",
  $_: "publishDate",
  W_: "\n",
  H_: "about",
  Y_: "",
  j_: "f43b4e1133375609ab7a3212e157552652782c3dc9abfe47273959defd82eba0b5f3781a7138bf00c4058fe3baecfd0bd71b95ee2829913463cc3e828f92dea6b1279474f1204cef9df67f9c5d1e4e36474b2d00cd8d3e,cb1a696d47a44f741bf667aefb497aa4dcfcdabc9817288dface24a7fd3c0afdb18ddb42e49bdea0c4959fc57cb1376aef9112c0af805babe9409c365ea9b1818c83bca6ae129737465a751e1fffc38ca8c79e05804bca,8dec9f2f783e58213cc13ee1c6783e4acffae48d866bb88ec64115eb395539b9cd39c3825f3114b5dd354090e18299f56a3c9a91344bcda356104a55a973ba087adc941974c224c3738b8b53473fe15403c3d7043df38f",
  X_: "",
  z_: "",
  V_: "RIC",
  K_: "20000",
  Q_: "charAt",
  Z_: "decodeU",
  J_: "omponent",
  q_: "location",
  td: "qunee",
  id: "localhost",
  nd: "127.0.0.1",
  ed: "11000",
  sd: "15000",
  hd: "",
  rd: "iframe",
  ad: "display",
  od: "target",
  fd: "contentWindow",
  cd: "127.00.1",
  ud: "String",
  _d: "0px",
  dd: "overflow",
  ld: "documentElement",
  bd: "Date",
  vd: "fillText",
  yd: "31000",
  gd: "17000",
  Ed: "32000",
  xd: "currentPaths",
  md: "perLine",
  pd: "getCrossPoint",
  Td: "sort",
  wd: "getArrayPoint",
  Ld: "Q-Canvas",
  Md: "absolute",
  Od: "0 0",
  Sd: "Q-CanvasPanel",
  Ad: "100%",
  Id: "relative",
  Cd: "Q-Graph",
  Pd: "_nMingList",
  Fd: "_viewport",
  Rd: "setParent",
  Dd: "_71s",
  Nd: "invalidate",
  Bd: "size",
  kd: "viewport",
  Ud: "_lAingID",
  Gd: "fullRefresh",
  $d: "_oTP",
  Wd: "matrix",
  Hd: "__jT",
  Yd: "_oWA",
  jd: "_oW6",
  Xd: "_oTO",
  zd: "zIndex",
  Vd: "boundingBox",
  Kd: "_oWtx",
  Qd: "_oUuffer",
  Zd: "_oWD",
  Jd: "_dACanvasSizeFlag",
  qd: "toJSON",
  tl: "_oWurrentMatrix",
  il: "transMatrix",
  nl: "invert",
  el: "__oWssMatrix",
  sl: "setStyle",
  hl: "transform",
  rl: "matrix(",
  al: "_oTQ",
  ol: "visible",
  fl: "render",
  cl: "getElementById",
  ul: "_oW4",
  _l: "className",
  dl: "activeElement",
  ll: "tabIndex",
  bl: "changedTouches",
  vl: "pageXOffset",
  yl: "pageYOffset",
  gl: "pageY",
  El: "_oTS",
  xl: "toLogical",
  ml: "uiId",
  pl: "getById",
  Tl: "__l4",
  wl: "_oTT",
  Ll: "_dABoundsFlag",
  Ml: "_oUackCanvas",
  Ol: "clientHeight",
  Sl: "getGlobalBounds",
  Al: "_viewportClips",
  Il: "canvasBounds",
  Cl: "clearRect",
  Pl: "NAVIGATION_BUTTON",
  Fl: "navigation.button",
  Rl: "NAVIGATION_SCROLLBAR",
  Dl: "navigation.scrollbar",
  Nl: "NAVIGATION_TYPE",
  Bl: "_lA",
  kl: "_topCanvas",
  Ul: "path",
  Gl: "graph",
  $l: "_oTG",
  Wl: "_67",
  Hl: "_jTFilter",
  Yl: "isLooped",
  jl: "getEdgeBundle",
  Xl: "uiBounds",
  zl: "_7W",
  Vl: "forEachReverse",
  Kl: "_3L",
  Ql: "_originAdjusted",
  Zl: "originAtCenter",
  Jl: "_gX",
  ql: "_9CChanged",
  tb: "element.bounds",
  ib: "_viewportChanged",
  nb: "_dZ",
  eb: "__4I",
  sb: "__71",
  hb: "renderScale",
  rb: "_oT4",
  ab: "selected",
  ob: "invalidateRender",
  fb: "uiClass",
  cb: "enableSubNetwork",
  ub: "invalidateVisibility",
  _b: "expanded",
  db: "onPropertyChange",
  lb: "_oWF",
  bb: "_edgeBundleInvalidateFlag",
  vb: "_oWN",
  yb: "validateEdgeBundle",
  gb: "graphModel",
  Eb: "forEachByDepthFirst",
  xb: "fromAgent",
  mb: "toAgent",
  pb: "__mG",
  Tb: "hasEdge",
  wb: "forEachEdge",
  Lb: "getIndexById",
  Mb: "UI '",
  Ob: "' not found",
  Sb: "defineProperties",
  Ab: "viewportBounds",
  Ib: "reverseTransform",
  Cb: "_oUackM",
  Pb: "join",
  Fb: "_globalBounds",
  Rb: "offset",
  Db: "_linkedNodes",
  Nb: "_oUL",
  Bb: "PROPERTY_TYPE_STYLE",
  kb: "$name",
  Ub: "isInvalid",
  Gb: "from",
  $b: "isDescendantOf",
  Wb: "setChildIndex",
  Hb: "childrenCount",
  Yb: "roots",
  jb: "ui",
  Xb: "bindingUIs",
  zb: "removeUI",
  Vb: "Q.Element",
  Kb: "tooltip",
  Qb: "putStyles",
  Zb: "$from",
  Jb: "connect",
  qb: "forEachChild",
  tv: "Q.Edge",
  iv: "edges",
  nv: "_oT9",
  ev: "path.segment",
  sv: "addPathSegment",
  hv: "firePathChange",
  rv: "to",
  av: "disconnect",
  ov: "edgeType",
  fv: "bundleEnabled",
  cv: "$image",
  uv: "Q-node",
  _v: "$anchorPosition",
  dv: "$location",
  lv: "host",
  bv: "hasFollowers",
  vv: "toFollowers",
  yv: "_host",
  gv: "Q.Node",
  Ev: "follower.add",
  xv: "follower.remove",
  mv: "anchorPosition",
  pv: "SHAPENODE_STYLES",
  Tv: "ARROW_TO",
  wv: "Q.ShapeNode",
  Lv: "removePathSegment",
  Mv: "segments",
  Ov: "ShapeNode",
  Sv: "generator",
  Av: "quadTo",
  Iv: "curveTo",
  Cv: "busLayout",
  Pv: "register",
  Fv: "SHAPE_RECT",
  Rv: "SHAPE_STAR",
  Dv: "SHAPE_PENTAGON",
  Nv: "SHAPE_HEXAGON",
  Bv: "SHAPE_DIAMOND",
  kv: "SHAPE_TRAPEZIUM",
  Uv: "SHAPE_RHOMBUS",
  Gv: "SHAPE_PARALLELOGRAM",
  $v: "SHAPE_CROSS",
  Wv: "SHAPE_ARROW_STANDARD",
  Hv: "SHAPE_ARROW_3",
  Yv: "SHAPE_ARROW_4",
  jv: "SHAPE_ARROW_7",
  Xv: "SHAPE_ARROW_8",
  zv: "Q.Bus",
  Vv: "currentSubNetwork",
  Kv: "GROUP_TYPE_RECT",
  Qv: "GROUP_PADDING",
  Zv: "GROUP_EXPANDED",
  Jv: "GROUP_MIN_SIZE",
  qv: "$groupType",
  ty: "GROUP_TYPE",
  iy: "$minSize",
  ny: "Q.Group",
  ey: "_oTX",
  sy: "minSize",
  hy: "groupType",
  ry: "groupImage",
  ay: "Q.Text",
  oy: "#888",
  fy: "#555",
  cy: "assign",
  uy: "labelFont",
  _y: "strokeAlpha",
  dy: "-webkit-user-select",
  ly: "rgba(0, 0, 0, 0)",
  by: "insertBefore",
  vy: "log10",
  yy: "font",
  gy: "textAlign",
  Ey: "center",
  xy: "top",
  my: "textBaseline",
  py: "middle",
  Ty: "Grid",
  wy: "cell",
  Ly: "smallCell",
  My: "measureText",
  Oy: "wrap",
  Sy: "TEXT_WRAP",
  Ay: "TEXT_WRAP_FUNCTION",
  Iy: "TEXT_ELLIPSIS",
  Cy: "validateFlags",
  Py: "$invalidate",
  Fy: "$rotatable",
  Ry: "$_hostRotate",
  Dy: "invalidateData",
  Ny: "#444",
  By: "$anchorPoint",
  ky: "selectionType",
  Uy: "selectionBackgroundColor",
  Gy: "syncSelection",
  $y: "$alpha",
  Wy: "offsetX",
  Hy: "SELECTION_TYPE_BORDER_RECT",
  Yy: "_empty",
  jy: "borderLineDash",
  Xy: "$backgroundColor",
  zy: "$invalidateData",
  Vy: "$backgroundGradient",
  Ky: "validateSize",
  Qy: "onBoundsChanged",
  Zy: "$invalidateLocation",
  Jy: "$invalidateVisibility",
  qy: "$visible",
  tg: "$showEmpty",
  ig: "initialize",
  ng: "doHitTest",
  eg: "_oUP",
  sg: "Location",
  hg: "Visibility",
  rg: "AnchorPoint",
  ag: "BackgroundGradient",
  og: "Rotate",
  fg: "Data",
  cg: "PROPERTY_TYPE_ACCESSOR",
  ug: "getProperty",
  _g: "property",
  dg: "bindingProperty",
  lg: "callback",
  bg: "selection.color",
  vg: "selection.border",
  yg: "selection.type",
  gg: "render.color",
  Eg: "alpha",
  xg: "shadow.blur",
  mg: "shadow.color",
  pg: "shadow.offset.x",
  Tg: "shadow.offset.y",
  wg: "shape.stroke",
  Lg: "shape.stroke.style",
  Mg: "shape.line.dash",
  Og: "shape.fill.color",
  Sg: "shape.fill.gradient",
  Ag: "shape.outline",
  Ig: "shape.outline.style",
  Cg: "layout.by.path",
  Pg: "background.color",
  Fg: "background.gradient",
  Rg: "border.width",
  Dg: "border.color",
  Ng: "border.line.dash",
  Bg: "border.radius",
  kg: "line.cap",
  Ug: "line.join",
  Gg: "line.dash.cap",
  $g: "line.dash.join",
  Wg: "image.border.width",
  Hg: "IMAGE_BORDER_STYLE",
  Yg: "image.border.style",
  jg: "IMAGE_BORDER_LINE_DASH",
  Xg: "IMAGE_BORDER_LINE_DASH_OFFSET",
  zg: "IMAGE_RADIUS",
  Vg: "IMAGE_BORDER_RADIUS",
  Kg: "image.radius",
  Qg: "image.padding",
  Zg: "IMAGE_Z_INDEX",
  Jg: "image.z.index",
  qg: "image.adjust",
  tE: "IMAGE_ROTATE",
  iE: "image.rotate",
  nE: "image.alpha",
  eE: "label.rotate",
  sE: "label.position",
  hE: "LABEL_VISIBLE",
  rE: "label.visible",
  aE: "LABEL_COLOR",
  oE: "label.color",
  fE: "label.font.size",
  cE: "LABEL_FONT_FAMILY",
  uE: "label.font.family",
  _E: "LABEL_FONT_STYLE",
  dE: "label.font.style",
  lE: "LABEL_PADDING",
  bE: "label.padding",
  vE: "label.pointer.width",
  yE: "LABEL_POINTER",
  gE: "label.pointer",
  EE: "LABEL_RADIUS",
  xE: "label.radius",
  mE: "label.offset.x",
  pE: "LABEL_OFFSET_Y",
  TE: "label.offset.y",
  wE: "LABEL_SIZE",
  LE: "label.size",
  ME: "LABEL_MAX_WIDTH",
  OE: "label.max.width",
  SE: "label.align.position",
  AE: "LABEL_BORDER",
  IE: "label.border",
  CE: "LABEL_BORDER_LINE_DASH",
  PE: "LABEL_BORDER_LINE_DASH_OFFSET",
  FE: "LABEL_BORDER_STYLE",
  RE: "label.border.style",
  DE: "LABEL_BACKGROUND_COLOR",
  NE: "LABEL_BACKGROUND_GRADIENT",
  BE: "label.rotatable",
  kE: "LABEL_SHADOW_BLUR",
  UE: "label.shadow.blur",
  GE: "LABEL_SHADOW_COLOR",
  $E: "label.shadow.color",
  WE: "LABEL_SHADOW_OFFSET_X",
  HE: "LABEL_SHADOW_OFFSET_Y",
  YE: "LABEL_Z_INDEX",
  jE: "label.z.index",
  XE: "LABEL_ON_TOP",
  zE: "label.on.top",
  VE: "LABEL_WRAP",
  KE: "label.wrap",
  QE: "GROUP_BACKGROUND_COLOR",
  ZE: "GROUP_RADIUS",
  JE: "group.radius",
  qE: "group.stroke",
  tx: "GROUP_STROKE_STYLE",
  ix: "group.stroke.color",
  nx: "GROUP_STROKE_LINE_DASH",
  ex: "GROUP_STROKE_LINE_DASH_OFFSET",
  sx: "EDGE_BUNDLE_LABEL_ROTATE",
  hx: "EDGE_BUNDLE_LABEL_POSITION",
  rx: "EDGE_BUNDLE_LABEL_ANCHOR_POSITION",
  ax: "EDGE_BUNDLE_LABEL_COLOR",
  ox: "EDGE_BUNDLE_LABEL_FONT_SIZE",
  fx: "EDGE_BUNDLE_LABEL_FONT_STYLE",
  cx: "EDGE_BUNDLE_LABEL_PADDING",
  ux: "EDGE_BUNDLE_LABEL_POINTER_WIDTH",
  _x: "EDGE_BUNDLE_LABEL_RADIUS",
  dx: "EDGE_BUNDLE_LABEL_BORDER",
  lx: "EDGE_BUNDLE_LABEL_BACKGROUND_COLOR",
  bx: "EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT",
  vx: "EDGE_BUNDLE_LABEL_ROTATABLE",
  yx: "edge.width",
  gx: "EDGE_COLOR",
  Ex: "edge.color",
  xx: "EDGE_OUTLINE",
  mx: "edge.outline",
  px: "EDGE_OUTLINE_STYLE",
  Tx: "edge.outline.style",
  wx: "EDGE_LINE_DASH",
  Lx: "edge.line.dash",
  Mx: "EDGE_FROM_OFFSET",
  Ox: "edge.from.offset",
  Sx: "EDGE_TO_OFFSET",
  Ax: "edge.to.offset",
  Ix: "EDGE_FILL_COLOR",
  Cx: "edge.fill.color",
  Px: "edge.bundle.type",
  Fx: "EDGE_BUNDLE_GAP",
  Rx: "edge.bundle.gap",
  Dx: "EDGE_LOOPED_EXTEND",
  Nx: "edge.looped.extend",
  Bx: "edge.extend",
  kx: "EDGE_CONTROL_POINT",
  Ux: "edge.control.point",
  Gx: "EDGE_SPLIT_BY_PERCENT",
  $x: "EDGE_SPLIT_PERCENT",
  Wx: "edge.split.percent",
  Hx: "EDGE_SPLIT_VALUE",
  Yx: "edge.split.value",
  jx: "EDGE_CORNER",
  Xx: "edge.corner",
  zx: "EDGE_CORNER_RADIUS",
  Vx: "edge.corner.radius",
  Kx: "edge.from.at.edge",
  Qx: "EDGE_TO_AT_EDGE",
  Zx: "edge.to.at.edge",
  Jx: "edge.from.port",
  qx: "EDGE_TO_PORT",
  tm: "edge.to.port",
  im: "ARROW_FROM",
  nm: "arrow.from",
  em: "arrow.from.size",
  sm: "ARROW_FROM_OFFSET",
  hm: "arrow.from.offset",
  rm: "arrow.from.stroke",
  am: "ARROW_FROM_STROKE_STYLE",
  om: "arrow.from.outline",
  fm: "ARROW_FROM_OUTLINE_STYLE",
  cm: "ARROW_FROM_LINE_DASH",
  um: "arrow.from.line.dash",
  _m: "ARROW_FROM_LINE_DASH_OFFSET",
  dm: "ARROW_FROM_FILL_COLOR",
  lm: "ARROW_FROM_LINE_CAP",
  bm: "arrow.from.line.cap",
  vm: "arrow.from.line.join",
  ym: "arrow.to",
  gm: "ARROW_TO_SIZE",
  Em: "arrow.to.size",
  xm: "arrow.to.offset",
  mm: "ARROW_TO_STROKE",
  pm: "arrow.to.stroke",
  Tm: "ARROW_TO_STROKE_STYLE",
  wm: "arrow.to.outline",
  Lm: "ARROW_TO_OUTLINE_STYLE",
  Mm: "ARROW_TO_LINE_DASH",
  Om: "arrow.to.line.dash",
  Sm: "ARROW_TO_LINE_DASH_OFFSET",
  Am: "ARROW_TO_FILL_COLOR",
  Im: "arrow.to.fill.color",
  Cm: "arrow.to.line.cap",
  Pm: "arrow.to.line.join",
  Fm: "SELECTION_SHADOW_BLUR",
  Rm: "SELECTION_SHADOW_OFFSET_X",
  Dm: "SELECTION_SHADOW_OFFSET_Y",
  Nm: "LABEL_ANCHOR_POSITION",
  Bm: "color",
  km: "LABEL_FONT_SIZE",
  Um: "fontSize",
  Gm: "borderLineDashOffset",
  $m: "borderColor",
  Wm: "backgroundColor",
  Hm: "showOnTop",
  Ym: "SHADOW_BLUR",
  jm: "SHADOW_OFFSET_X",
  Xm: "SHADOW_OFFSET_Y",
  zm: "fontFamily",
  Vm: "fontStyle",
  Km: "LABEL_ALIGN_POSITION",
  Qm: "alignPosition",
  Zm: "LABEL_ROTATE",
  Jm: "LABEL_POINTER_WIDTH",
  qm: "pointerWidth",
  tp: "showPointer",
  ip: "borderRadius",
  np: "LABEL_OFFSET_X",
  ep: "offsetY",
  sp: "LABEL_ROTATABLE",
  hp: "rotatable",
  rp: "maxWidth",
  ap: "RENDER_COLOR",
  op: "RENDER_COLOR_BLEND_MODE",
  fp: "ALPHA",
  cp: "_2M",
  up: "BACKGROUND_COLOR",
  _p: "BACKGROUND_GRADIENT",
  dp: "PADDING",
  lp: "BORDER",
  bp: "BORDER_COLOR",
  vp: "BORDER_LINE_DASH",
  yp: "BORDER_LINE_DASH_OFFSET",
  gp: "_d6",
  Ep: "SHAPE_STROKE",
  xp: "SHAPE_FILL_COLOR",
  mp: "LAYOUT_BY_PATH",
  pp: "IMAGE_ADJUST",
  Tp: "adjustType",
  wp: "SHAPE_OUTLINE_STYLE",
  Lp: "SHAPE_LINE_DASH",
  Mp: "SHAPE_LINE_DASH_OFFSET",
  Op: "LINE_CAP",
  Sp: "IMAGE_BACKGROUND_COLOR",
  Ap: "IMAGE_PADDING",
  Ip: "IMAGE_BORDER",
  Cp: "checkBody",
  Pp: "_66",
  Fp: "shape",
  Rp: "GROUP_BACKGROUND_GRADIENT",
  Dp: "_4I",
  Np: "EDGE_EXTEND",
  Bp: "EDGE_BUNDLE_TYPE",
  kp: "EDGE_WIDTH",
  Up: "fromArrow",
  Gp: "toArrow",
  $p: "fromAtEdge",
  Wp: "toAtEdge",
  Hp: "EDGE_FROM_PORT",
  Yp: "ARROW_FROM_SIZE",
  jp: "fromArrowSize",
  Xp: "fromArrowOffset",
  zp: "fromArrowStroke",
  Vp: "fromArrowStrokeStyle",
  Kp: "ARROW_FROM_OUTLINE",
  Qp: "fromArrowOutline",
  Zp: "fromArrowFillColor",
  Jp: "ARROW_FROM_FILL_GRADIENT",
  qp: "fromArrowLineDash",
  tT: "ARROW_FROM_LINE_JOIN",
  iT: "fromArrowLineJoin",
  nT: "fromArrowLineCap",
  eT: "toArrowSize",
  sT: "ARROW_TO_OFFSET",
  hT: "toArrowOffset",
  rT: "toArrowStroke",
  aT: "toArrowStrokeStyle",
  oT: "ARROW_TO_OUTLINE",
  fT: "toArrowOutline",
  cT: "toArrowOutlineStyle",
  uT: "toArrowFillColor",
  _T: "ARROW_TO_FILL_GRADIENT",
  dT: "toArrowFillGradient",
  lT: "toArrowLineDash",
  bT: "ARROW_TO_LINE_JOIN",
  vT: "toArrowLineJoin",
  yT: "ARROW_TO_LINE_CAP",
  gT: "toArrowLineCap",
  ET: "bundleLabel",
  xT: "EDGE_BUNDLE_LABEL_FONT_FAMILY",
  mT: "EDGE_BUNDLE_LABEL_OFFSET_X",
  pT: "EDGE_BUNDLE_LABEL_OFFSET_Y",
  TT: "EDGE_BUNDLE_LABEL_BORDER_STYLE",
  wT: "invalidateShape",
  LT: "SHAPE_STROKE_STYLE",
  MT: "SHAPE_FILL_GRADIENT",
  OT: "LINE_DASH_CAP",
  ST: "LINE_DASH_JOIN",
  AT: "SHAPE_OUTLINE",
  IT: "LINE_JOIN",
  CT: "IMAGE_BACKGROUND_GRADIENT",
  PT: "IMAGE_BORDER_COLOR",
  FT: "invalidateChildrenIndex",
  RT: "$invalidateChild",
  DT: "removeBinding",
  NT: "invalidateSize",
  BT: "getStyle",
  kT: "onBindingPropertyChange",
  UT: "addChild",
  GT: "initLabel",
  $T: "initBindingProperties",
  WT: "bindingProperties",
  HT: "addBinding",
  YT: "doValidate",
  jT: "validateChildren",
  XT: "measure",
  zT: "$selectionBorder",
  VT: "$shadowOffsetX",
  KT: "$selectionShadowOffsetX",
  QT: "$shadowBlur",
  ZT: "$selectionShadowBlur",
  JT: "_oUody",
  qT: "$renderColor",
  tw: "$renderColorBlendMode",
  iw: "$shadowColor",
  nw: "bodyChanged",
  ew: "hitTestChildren",
  sw: "$invalidateBounds",
  hw: "original",
  rw: "UI_BOUNDS_GROW",
  aw: "#000",
  ow: "onDataChanged",
  fw: "$size",
  cw: "$invalidateScale",
  uw: "_originalBounds",
  _w: "$invalidateFillGradient",
  dw: "generatorGradient",
  lw: "$fillGradient",
  bw: "IMAGE_ADJUST_FLIP",
  vw: "IMAGE_ADJUST_MIRROR",
  yw: "$adjustType",
  gw: "$lineWidth",
  Ew: "$fillColor",
  xw: "Scale",
  mw: "FillGradient",
  pw: "ALIGN_POSITION",
  Tw: "$font",
  ww: "$fontFamily",
  Lw: "$fontStyle",
  Mw: "$fontSize",
  Ow: "bodyBounds",
  Sw: "%",
  Aw: "setMeasuredBounds",
  Iw: "Font",
  Cw: "$invalidateFont",
  Pw: "FONT_STYLE",
  Fw: "pathBounds",
  Rw: "$invalidateFromArrow",
  Dw: "$invalidateToArrow",
  Nw: "$outline",
  Bw: "validateFromArrow",
  kw: "validateToArrow",
  Uw: "fromArrowLocation",
  Gw: "$fromArrowShape",
  $w: "$fromArrow",
  Ww: "fromArrowStyles",
  Hw: "fromArrowFillGradient",
  Yw: "$toArrow",
  jw: "$toArrowOffset",
  Xw: "toArrowLocation",
  zw: "$toArrowShape",
  Vw: "$toArrowSize",
  Kw: "toArrowStyles",
  Qw: "Gradient",
  Zw: "ArrowStroke",
  Jw: "ArrowStrokeStyle",
  qw: "ArrowStyles",
  tL: "ArrowLineDash",
  iL: "ArrowLineDashOffset",
  nL: "ArrowFillColor",
  eL: "ArrowFillGradient",
  sL: "ArrowLineCap",
  hL: "ArrowLineJoin",
  rL: "ArrowOutline",
  aL: "ArrowOutlineStyle",
  oL: "drawArrow",
  fL: "FromArrow",
  cL: "ToArrow",
  uL: "getEndPointBounds",
  _L: "hasPathSegments",
  dL: "drawLoopedEdge",
  lL: "getPortPoint",
  bL: "perX",
  vL: "perY",
  yL: "_linkTerminalPoint",
  gL: "pathSegments",
  EL: "drawEdge",
  xL: "EDGE_TYPE_ZIGZAG",
  mL: "EDGE_TYPE_ELBOW_HORIZONTAL",
  pL: "EDGE_TYPE_ORTHOGONAL_HORIZONTAL",
  TL: "EDGE_TYPE_EXTEND_RIGHT",
  wL: "EDGE_TYPE_ORTHOGONAL_VERTICAL",
  LL: "EDGE_TYPE_VERTICAL_HORIZONTAL",
  ML: "EDGE_TYPE_EXTEND_TOP",
  OL: "EDGE_TYPE_EXTEND_LEFT",
  SL: "EDGE_TYPE_EXTEND_BOTTOM",
  AL: "NEGATIVE_INFINITY",
  IL: "POSITIVE_INFINITY",
  CL: "EDGE_CORNER_NONE",
  PL: "EDGE_CORNER_ROUND",
  FL: "$bundleEnabled",
  RL: "isBundleEnabled",
  DL: "getBundleLabel",
  NL: "editable",
  BL: "validatePoints",
  kL: "checkBundleLabel",
  UL: "drawReferenceLine",
  GL: "EDGE_TYPE_HORIZONTAL_VERTICAL",
  $L: "EDGE_TYPE_ORTHOGONAL",
  WL: "EDGE_TYPE_ELBOW",
  HL: "EDGE_TYPE_ELBOW_VERTICAL",
  YL: "extend.",
  jL: "addSegmentType",
  XL: "atEnd",
  zL: "linkablePorts",
  VL: "getLinkableBounds",
  KL: "rotateX",
  QL: "rotateY",
  ZL: "getDefaultPortPoint",
  JL: "getLinkablePorts",
  qL: "LOOKING_EDGE_ENDPOINT_TOLERANCE",
  tM: "LABEL_POSITION",
  iM: "#555555",
  nM: "GROUP_STROKE",
  eM: "#075bc5",
  sM: "#2898E0",
  hM: "_onresize",
  rM: "resize",
  aM: "updateViewport",
  oM: "ondrop",
  fM: "ondragover",
  cM: "stopEvent",
  uM: "dataTransfer",
  _M: "text",
  dM: "getDropInfo",
  lM: "globalToLocal",
  bM: "dropAction",
  vM: "Node",
  yM: "Text",
  gM: "createShapeNode",
  EM: "Group",
  xM: "createGroup",
  mM: "_mCModel",
  pM: "createNode",
  TM: "shiftKey",
  wM: "_oWH",
  LM: "properties",
  MM: "clientProperties",
  OM: "styles",
  SM: "onElementCreated",
  AM: "ELEMENT_CREATED",
  IM: "dragInfo",
  CM: "onInteractionEvent",
  PM: "droppable",
  FM: "checkLimitedBounds",
  RM: "movable",
  DM: "selectable",
  NM: "resizable",
  BM: "linkable",
  kM: "canLinkFrom",
  UM: "canLinkTo",
  GM: "addElement",
  $M: "limitedBounds",
  WM: "stopAnimation",
  HM: "translateTo",
  YM: "_oWheckingBounds",
  jM: "zoomIn",
  XM: "zoomOut",
  zM: "minScale",
  VM: "_oW9",
  KM: "isInvalidate",
  QM: "moveToCenter",
  ZM: "centerTo",
  JM: "zoomToOverview",
  qM: "zoomAnimation",
  tO: "zoomAt",
  iO: "scaleStep",
  nO: "_panAnimation",
  eO: "scrollX",
  sO: "scrollY",
  hO: "focus",
  rO: "scrollTo",
  aO: "toDataURL",
  oO: "image/png",
  fO: "select",
  cO: "unselect",
  uO: "reverseSelect",
  _O: "isSelectable",
  dO: "setLocation",
  lO: "isMovable",
  bO: "reverseExpanded",
  vO: "addCustomInteraction",
  yO: "removeCustomInteraction",
  gO: "html",
  EO: "confirm",
  xO: "Delete Elements - ",
  mO: "Shape",
  pO: "Line",
  TO: "Styles",
  wO: "createEdge",
  LO: "Edge",
  MO: "edgeUIClass",
  OO: "interactionProperties",
  SO: "allowEmptyLabel",
  AO: "alert",
  IO: "Label Can't Empty",
  CO: "invalidateElement",
  PO: "+",
  FO: "delayedRendering",
  RO: "linkablePoints",
  DO: "_gridLineStyles",
  NO: "update",
  BO: "_gridBackground",
  kO: "parentElement",
  UO: "gridLineStyles",
  GO: "propertyChangeDispatcher",
  $O: "gridCanvas",
  WO: "scaleCanvas",
  HO: "cursor",
  YO: "defaultCursor",
  jO: "_oWurrentMode",
  XO: "interactionMode",
  zO: "currentMode",
  VO: "removeListener",
  KO: "dataChangeDispatcher",
  QO: "_viewportBounds",
  ZO: "_limitedBounds",
  JO: "DELAYED_RENDERING",
  qO: "pauseRendering",
  tS: "enableCrossLine",
  iS: "GROUP_MIN_WIDTH",
  nS: "_oUV",
  eS: "_oUT",
  sS: "GROUP_TYPE_ELLIPSE",
  hS: "GROUP_TYPE_CIRCLE",
  rS: "getItemBounds",
  aS: "invalidateFlag",
  oS: "_$z",
  fS: "GroupUI",
  cS: "NAVIGATION_IMAGE_TOP",
  uS: "10px",
  _S: "opacity 0.2s ease-in",
  dS: "block",
  lS: "Q-Graph-Nav-Button",
  bS: "rotate(180deg)",
  vS: "_img",
  yS: "NAVIGATION_IMAGE_LEFT",
  gS: "_oUaseCanvas",
  ES: "_navPane",
  xS: "Q-Graph-Nav",
  mS: "_top",
  pS: "_left",
  TS: "_oUottom",
  wS: "hover",
  LS: "_oTZ",
  MS: "init",
  OS: ".Q-Graph-Nav img",
  SS: "opacity:1;background-color: rgba(0, 0, 0, 0.5)",
  AS: ".Q-Graph-Nav",
  IS: "opacity:0;",
  CS: "transition",
  PS: ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1)",
  FS: ".Q-Graph-Nav:hover",
  RS: "opacity:1;",
  DS: ":opacity 0.3s linear",
  NS: ".Q-Graph-ScrollBar",
  BS: "margin: 2px; position: absolute;box-sizing: border-box;box-shadow: #FFF 0px 0px 1px; background-color: rgba(120,120,120,0.3);border-radius: 4px;margin: 1px;",
  kS: ".Q-Graph-ScrollBar.hover, .Q-Graph-ScrollBar:hover",
  US: "margin-bottom: 8px;",
  GS: "margin-right: 8px;",
  $S: ".Q-Graph-ScrollPane",
  WS: ":opacity 3s cubic-bezier(0.8, 0, 0.8, 1);",
  HS: "_horizontalDragSupport",
  YS: "Q-Graph-ScrollPane",
  jS: "enableInertia",
  XS: "_verticalDragSupport",
  zS: "_oUW",
  VS: "Both",
  KS: "port",
  QS: "_oT6",
  ZS: "drawable",
  JS: "ZOOM_ANIMATE",
  qS: "ANIMATION_MAXTIME",
  tA: "ANIMATION_TYPE",
  iA: "easeOut",
  nA: "__delayRender",
  eA: "onAnimationStart",
  sA: "onAnimationEnd",
  hA: "_fromTX",
  rA: "_fromTY",
  aA: "_toTY",
  oA: "_fromScale",
  fA: "_toScale",
  cA: "duration",
  uA: "maxTime",
  _A: "INTERACTION_HANDLER_SIZE_TOUCH",
  dA: "INTERACTION_HANDLER_SIZE_DESKTOP",
  lA: "INTERACTION_ROTATE_HANDLER_SIZE_TOUCH",
  bA: "_guideLineDrawable",
  vA: "element",
  yA: "addDataPropertyChangeListener",
  gA: "dataPropertyChangeDispatcher",
  EA: "onDataPropertyChange",
  xA: "removeDataPropertyChangeListener",
  mA: "removeDrawable",
  pA: "drawableList",
  TA: "topCanvas",
  wA: "_nMableId",
  LA: "addDrawable",
  MA: "escapable",
  OA: "DrawableInteraction",
  SA: "#F00",
  AA: "_guideLines",
  IA: "guideLineStyles",
  CA: "getMinCell",
  PA: "snapToGrid",
  FA: "enableGuideLine",
  RA: "minD",
  DA: "matchedValue",
  NA: "alignValue",
  BA: "snapSpacing",
  kA: "interactions",
  UA: "default",
  GA: "isVisible",
  $A: "nodes",
  WA: "minWidth",
  HA: "minHeight",
  YA: "getPortPoints",
  jA: "defaultPoint",
  XA: "offsetHeight",
  zA: "install",
  VA: "drawPoint",
  KA: "styleDraw",
  QA: "currentPoint",
  ZA: "DrawPathInteraction",
  JA: "start",
  qA: "_oWurrentPort",
  tI: "nearestPoint",
  iI: "toLogicalPoint",
  nI: "startPort",
  eI: "currentNode",
  sI: "finish",
  hI: "responded",
  rI: "_oT8",
  aI: "onmousemove",
  oI: "forEachReverseVisibleUI",
  fI: "getDefaultStyle",
  cI: "EDGE_LINE_DASH_OFFSET",
  uI: "drawRect",
  _I: "marked",
  dI: "#1D4876",
  lI: "#E21667",
  bI: "SEGMENT_QUAD_TO",
  vI: "CreateShapeInteraction",
  yI: "CreateLineInteraction",
  gI: "EdgeUI",
  EI: "createEdgeByInteraction",
  xI: "LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS",
  mI: "textarea",
  pI: "Q-LabelEditor",
  TI: "solid #08E 1px",
  wI: "5px",
  LI: "boxShadow",
  MI: "oninput",
  OI: "onValueChange",
  SI: "cancelEdit",
  AI: "onkeypress",
  II: "selectionEnd",
  CI: "selection",
  PI: "createRange",
  FI: "collapse",
  RI: "offsetWidth",
  DI: "stopEdit",
  NI: "createHTML",
  BI: "stopEditWhenClickOnWindow",
  kI: "setText",
  UI: "LabelEditor",
  GI: "labelEditor",
  $I: "upSubNetwork",
  WI: "enableDoubleClickToOverview",
  HI: "resetScale",
  YI: "isEditable",
  jI: "startLabelEdit",
  XI: "hasEdgeBundle",
  zI: "EDGE_BUNDLE",
  VI: "removeSelectionByInteraction",
  KI: "EditInteraction",
  QI: "exportImage",
  ZI: "title",
  JI: "export image - ",
  qI: " x ",
  tC: "handlerSize",
  iC: "currentDraggingElement",
  nC: "isSelected",
  eC: "draggingElements",
  sC: "ELEMENT_MOVING",
  hC: "linkedWith",
  rC: "ELEMENT_MOVE_END",
  aC: "PAN_END",
  oC: "_editting",
  fC: "_mousePressed",
  cC: "_oWanEdit",
  uC: "isEndPointEditable",
  _C: "isFrom",
  dC: "isControlPoint",
  lC: "drawLine",
  bC: "isEndPoint",
  vC: "setCurrentElement",
  yC: "isShowing",
  gC: "PathSegment",
  EC: "isPointRemovable",
  xC: "removePathSegmentByIndex",
  mC: "point",
  pC: "isPointAddable",
  TC: "POINT_ADD",
  wC: "oldPoints",
  LC: "prevSegment",
  MC: "nextSegment",
  OC: "oldNextPoints",
  SC: "POINT_MOVE_START",
  AC: "delta",
  IC: "onkeydown",
  CC: "segment",
  PC: "pointIndex",
  FC: "POINT_MOVING",
  RC: "SELECTION_RECTANGLE_STROKE",
  DC: "SELECTION_RECTANGLE_STROKE_COLOR",
  NC: "SELECTION_RECTANGLE_FILL_COLOR",
  BC: "intersect",
  kC: "RECTANGLE_SELECTION_MODE_CONTAIN",
  UC: "contain",
  GC: "RECTANGLE_SELECTION_MODE",
  $C: "RECTANGLE_SELECTION_MODE_INTERSECT",
  WC: "_17Id",
  HC: "_gXTimer",
  YC: "SELECT_END",
  jC: "_end",
  XC: "inRectangle",
  zC: "SELECT_BETWEEN",
  VC: "enableRectangleSelectionByRightButton",
  KC: "popupmenu",
  QC: "hide",
  ZC: "_rotateHandleLength",
  JC: "isResizable",
  qC: "callLater",
  tP: "_rotatePoint",
  iP: "_insets",
  nP: "nwse-resize",
  eP: "ns-resize",
  sP: "nesw-resize",
  hP: "ew-resize",
  rP: "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFVJREFUeNpi/P//PwMlgBGfAYyMIOn/jGQZANIMoskyAKYZGeAyiGgX4PIOSWGAzRBGUmMBw1CqGUBMlA1yA4gxhKhYwBnfpKQDqqREquRGYgBAgAEAD8h/4adTIzwAAAAASUVORK5CYII=) 8 8,crosshair",
  aP: "rgba(0, 255, 0, 1)",
  oP: "#FF0",
  fP: "isRotatable",
  cP: "_oW0",
  uP: "insets",
  _P: "anchorPoint",
  dP: "RESIZE_START",
  lP: "isKeepAspectRatio",
  bP: "ROTATING",
  vP: "outInsets",
  yP: "originalBounds",
  gP: "contentRect",
  EP: "RESIZING",
  xP: "RESIZE_END",
  mP: "isUniform",
  pP: "SELECT",
  TP: "sendToTop",
  wP: "setSelection",
  LP: "TOOLTIP_DELAY",
  MP: "Q-Tooltip",
  OP: "CURSOR_OFFSET_Y",
  SP: "CLASS_NAME",
  AP: "#FFFFCA",
  IP: "1px solid #D9D9D9",
  CP: "2px 4px",
  PP: "getInstance",
  FP: "instance",
  RP: "show",
  DP: "<br>",
  NP: "getTooltipElement",
  BP: "textContent",
  kP: "innerHTML",
  UP: "_info",
  GP: "content",
  $P: "_oTE",
  WP: "startTimer",
  HP: "setTooltip",
  YP: "stopTimer",
  jP: "tooltipType",
  XP: "pageX",
  zP: "tooltipDelay",
  VP: "action",
  KP: "_isFrameTimer",
  QP: "delayAction",
  ZP: "enableWheelZoom",
  JP: "zoomByMouseEvent",
  qP: "interaction",
  tF: "INTERACTION_MODE_DEFAULT",
  iF: "element.move.start",
  nF: "element.moving",
  eF: "element.move.end",
  sF: "element.created",
  hF: "ELEMENT_REMOVED",
  rF: "element.removed",
  aF: "point.move.start",
  oF: "point.moving",
  fF: "point.move.end",
  cF: "point.add",
  uF: "POINT_REMOVE",
  _F: "point.remove",
  dF: "resize.start",
  lF: "resizing",
  bF: "resize.end",
  vF: "ROTATE_START",
  yF: "rotate.start",
  gF: "rotating",
  EF: "ROTATE_END",
  xF: "rotate.end",
  mF: "PAN_START",
  pF: "pan.start",
  TF: "pan.end",
  wF: "group.expanded",
  LF: "edge.bundle",
  MF: "SELECT_START",
  OF: "select.start",
  SF: "select.between",
  AF: "select.end",
  IF: "long.click",
  CF: "_interactionSupport",
  PF: "currentInteractionMode",
  FF: "getInteractionInstances",
  RF: "INTERACTION_MODE_VIEW",
  DF: "view",
  NF: "INTERACTION_MODE_ZOOMIN",
  BF: "zoomin",
  kF: "INTERACTION_MODE_ZOOMOUT",
  UF: "zoomout",
  GF: "INTERACTION_MODE_CREATE_SIMPLE_EDGE",
  $F: "create.simple.edge",
  WF: "INTERACTION_MODE_CREATE_EDGE",
  HF: "create.edge",
  YF: "INTERACTION_MODE_CREATE_SHAPE",
  jF: "create.shape",
  XF: "create.line",
  zF: "registerInteractions",
  VF: "INTERACTION_MODE_CREATE_LINE",
  KF: "INTERACTION_MODE_SELECTION",
  QF: "PanInteraction",
  ZF: "MoveInteraction",
  JF: "DoubleClickInteraction",
  qF: "TooltipInteraction",
  tR: "RectangleSelectionInteraction",
  iR: "PointsInteraction",
  nR: "getUIBounds",
  eR: "layoutable",
  sR: "animate",
  hR: "animationType",
  rR: "locations",
  aR: "node",
  oR: "getLayoutResult",
  fR: "DIRECTION_RIGHT",
  cR: "DIRECTION_LEFT",
  uR: "DIRECTION_CENTER",
  _R: "DIRECTION_BOTTOM",
  dR: "DIRECTION_TOP",
  lR: "DIRECTION_MIDDLE",
  bR: "DIRECTION_RIGHT_TOP",
  vR: "DIRECTION_RIGHT_BOTTOM",
  yR: "DIRECTION_LEFT_TOP",
  gR: "DIRECTION_LEFT_BOTTOM",
  ER: "DIRECTION_BOTTOM_RIGHT",
  xR: "DIRECTION_TOP_LEFT",
  mR: "DIRECTION_TOP_RIGHT",
  pR: "even",
  TR: "two.side",
  wR: "LAYOUT_TYPE_EVEN",
  LR: "LAYOUT_TYPE_EVEN_HORIZONTAL",
  MR: "even.h",
  OR: "LAYOUT_TYPE_EVEN_VERTICAL",
  SR: "even.v",
  AR: "defaultSize",
  IR: "_oU1",
  CR: "isLayoutable",
  PR: "_oWI",
  FR: "getHGap",
  RR: "getVGap",
  DR: "getLayoutType",
  NR: "parentChildrenDirection",
  BR: "hGap",
  kR: "vGap",
  UR: "layoutType",
  GR: "root",
  $R: "doLayout",
  WR: "parentBounds",
  HR: "_oTnchorLocation",
  YR: "_e6",
  jR: "_g4",
  XR: "hostDY",
  zR: "hostDX",
  VR: "nodeX",
  KR: "nodeY",
  QR: "_oWK",
  ZR: "_oWL",
  JR: "compareFn",
  qR: "_inheritedParentChildrenDirection",
  tD: "_oTH",
  iD: "layoutDatas",
  nD: "appendNodeInfo",
  eD: "appendEdgeInfo",
  sD: "minEnergyFunction",
  hD: "ELEMENT_MOVE_START",
  rD: "currentMovingNodes",
  aD: "timer",
  oD: "resetLayoutDatas",
  fD: "getMaxIterations",
  cD: "nodeCount",
  uD: "edgeCount",
  _D: "step",
  dD: "_lJr",
  lD: "invalidateLayoutDatas",
  bD: "onstop",
  vD: "stop",
  yD: "startAngle",
  gD: "BalloonLayouter",
  ED: "proportional",
  xD: "regular",
  mD: "variable",
  pD: "ANGLE_SPACING_PROPORTIONAL",
  TD: "uniform",
  wD: "RADIUS_MODE_VARIABLE",
  LD: "getNodeSize",
  MD: "getGap",
  OD: "angleSpacing",
  SD: "layouter",
  AD: "getRadius",
  ID: "radiusMode",
  CD: "node1",
  PD: "canBind",
  FD: "_oWO",
  RD: "isPositiveOrder",
  DD: "agentEdge",
  ND: "_dABindableFlag",
  BD: "sortBindingEdges",
  kD: "_jTInBundle",
  UD: "_oU2",
  GD: "stack",
  $D: "popIdx",
  WD: "quads",
  HD: "mass",
  YD: "massX",
  jD: "massY",
  XD: "isInternal",
  zD: "reset",
  VD: "attractive",
  KD: "elastic",
  QD: "layoutMass",
  ZD: "layoutElasticity",
  JD: "_nbodyForce",
  qD: "nodesArray",
  tN: "repulsion",
  iN: "minEnergy",
  nN: "timeStep",
  eN: "isFixed",
  sN: "easeOutStrong",
  hN: "oldLocations",
  rN: "_oTnimate",
  aN: "_g3Type",
  oN: "_onfinish",
  fN: "roots error",
  cN: "forEachByTopoDepthFirstSearch",
  uN: "forEachByTopoBreadthFirstSearch",
  _N: "_marker",
  dN: "forEachOutEdge",
  lN: "_from",
  bN: "toColor",
  vN: "trace",
  yN: "isOpera",
  gN: "isWebkit",
  EN: "isGecko",
  xN: "isFirefox",
  mN: "isSafari",
  pN: "isChrome",
  TN: "isMac",
  wN: "DefaultStyles",
  LN: "Defaults",
  MN: "Consts",
  ON: "Graphs",
  SN: "Graph",
  AN: "BaseUI",
  IN: "Shapes",
  CN: "Path",
  PN: "Element",
  FN: "EdgeBundle",
  RN: "TreeLayouter",
  DN: "",
  NN: "",
  BN: "",
  kN: "IDrawable",
  UN: ""
};

var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/* eslint-disable */var TK=function TK(u,S,Y){var r=data.r,x=data.x,y=data.y,bt=data.bt,E=data.E,vt=data.vt,m=data.m,R=data.R,d=data.d,j=data.j,a=data.a,b=data.b,_=data._,o=data.o,f=data.f,c=data.c,l=data.l,v=data.v,g=data.g,p=data.p,T=data.T,h=data.h,P=data.P,w=data.w,L=data.L,n=data.n,e=data.e,M=data.M,O=data.O,s=data.s,A=data.A,I=data.I,C=data.C,F=data.F,D=data.D,N=data.N,B=data.B,k=data.k,U=data.U,G=data.G,$=data.$,W=data.W,H=data.H,X=data.X,z=data.z,V=data.V,K=data.K,Q=data.Q,Z=data.Z,J=data.J,q=data.q,tt=data.tt,it=data.it,nt=data.nt,et=data.et,st=data.st,ht=data.ht,rt=data.rt,at=data.at,ot=data.ot,ft=data.ft,ct=data.ct,ut=data.ut,_t=data._t,dt=data.dt,lt=data.lt,yt=data.yt,gt=data.gt,Et=data.Et,xt=data.xt,mt=data.mt,pt=data.pt,Tt=data.Tt,wt=data.wt,Lt=data.Lt,Mt=data.Mt,Ot=data.Ot,St=data.St,At=data.At,It=data.It,Ct=data.Ct,Pt=data.Pt,Ft=data.Ft,Rt=data.Rt,Dt=data.Dt,Nt=data.Nt,Bt=data.Bt,kt=data.kt,Ut=data.Ut,Gt=data.Gt,$t=data.$t,Wt=data.Wt,Ht=data.Ht,Yt=data.Yt,jt=data.jt,Xt=data.Xt,zt=data.zt,Vt=data.Vt,Kt=data.Kt,Qt=data.Qt,Zt=data.Zt,Jt=data.Jt,qt=data.qt,ti=data.ti,ii=data.ii,ni=data.ni,ei=data.ei,si=data.si,hi=data.hi,ri=data.ri,ai=data.ai,oi=data.oi,fi=data.fi,ci=data.ci,ui=data.ui,_i=data._i,di=data.di,li=data.li,bi=data.bi,vi=data.vi,yi=data.yi,gi=data.gi,Ei=data.Ei,xi=data.xi,mi=data.mi,pi=data.pi,Ti=data.Ti,wi=data.wi,Li=data.Li,Mi=data.Mi,Oi=data.Oi,Si=data.Si,Ai=data.Ai,Ii=data.Ii,Ci=data.Ci,Pi=data.Pi,Fi=data.Fi,Ri=data.Ri,Di=data.Di,Ni=data.Ni,Bi=data.Bi,ki=data.ki,Ui=data.Ui,Gi=data.Gi,$i=data.$i,Wi=data.Wi,Hi=data.Hi,Yi=data.Yi,ji=data.ji,Xi=data.Xi,zi=data.zi,Vi=data.Vi,Ki=data.Ki,Qi=data.Qi,Zi=data.Zi,Ji=data.Ji,qi=data.qi,tn=data.tn,nn=data.nn,en=data.en,sn=data.sn,hn=data.hn,rn=data.rn,an=data.an,on=data.on,fn=data.fn,cn=data.cn,un=data.un,_n=data._n,dn=data.dn,ln=data.ln,bn=data.bn,vn=data.vn,yn=data.yn,gn=data.gn,En=data.En,xn=data.xn,mn=data.mn,pn=data.pn,Tn=data.Tn,wn=data.wn,Ln=data.Ln,Mn=data.Mn,On=data.On,Sn=data.Sn,An=data.An,In=data.In,Cn=data.Cn,Pn=data.Pn,Fn=data.Fn,Rn=data.Rn,Dn=data.Dn,Nn=data.Nn,Bn=data.Bn,kn=data.kn,Un=data.Un,Gn=data.Gn,$n=data.$n,Wn=data.Wn,Hn=data.Hn,Yn=data.Yn,jn=data.jn,Xn=data.Xn,zn=data.zn,Vn=data.Vn,Kn=data.Kn,Qn=data.Qn,Zn=data.Zn,Jn=data.Jn,qn=data.qn,te=data.te,ie=data.ie,ne=data.ne,ee=data.ee,se=data.se,he=data.he,re=data.re,ae=data.ae,oe=data.oe,fe=data.fe,ce=data.ce,ue=data.ue,_e=data._e,de=data.de,le=data.le,be=data.be,ve=data.ve,ye=data.ye,ge=data.ge,Ee=data.Ee,xe=data.xe,me=data.me,pe=data.pe,Te=data.Te,we=data.we,Le=data.Le,Me=data.Me,Oe=data.Oe,Se=data.Se,Ae=data.Ae,Ie=data.Ie,Ce=data.Ce,Pe=data.Pe,Fe=data.Fe,Re=data.Re,De=data.De,Ne=data.Ne,Be=data.Be,ke=data.ke,Ue=data.Ue,Ge=data.Ge,$e=data.$e,We=data.We,He=data.He,Ye=data.Ye,je=data.je,Xe=data.Xe,ze=data.ze,Ve=data.Ve,Ke=data.Ke,Qe=data.Qe,Ze=data.Ze,Je=data.Je,qe=data.qe,ts=data.ts,is=data.is,ns=data.ns,es=data.es,ss=data.ss,hs=data.hs,rs=data.rs,as=data.as,os=data.os,fs=data.fs,cs=data.cs,us=data.us,_s=data._s,ds=data.ds,ls=data.ls,bs=data.bs,vs=data.vs,ys=data.ys,gs=data.gs,Es=data.Es,xs=data.xs,ms=data.ms,ps=data.ps,Ts=data.Ts,ws=data.ws,Ls=data.Ls,Ms=data.Ms,Os=data.Os,Ss=data.Ss,As=data.As,Is=data.Is,Cs=data.Cs,Ps=data.Ps,Fs=data.Fs,Rs=data.Rs,Ds=data.Ds,Ns=data.Ns,Bs=data.Bs,ks=data.ks,Us=data.Us,Gs=data.Gs,$s=data.$s,Ws=data.Ws,Hs=data.Hs,Ys=data.Ys,js=data.js,Xs=data.Xs,zs=data.zs,Vs=data.Vs,Ks=data.Ks,Qs=data.Qs,Zs=data.Zs,Js=data.Js,qs=data.qs,th=data.th,ih=data.ih,nh=data.nh,eh=data.eh,sh=data.sh,hh=data.hh,rh=data.rh,ah=data.ah,oh=data.oh,fh=data.fh,ch=data.ch,uh=data.uh,_h=data._h,lh=data.lh,bh=data.bh,vh=data.vh,yh=data.yh,gh=data.gh,Eh=data.Eh,xh=data.xh,mh=data.mh,ph=data.ph,Th=data.Th,wh=data.wh,Lh=data.Lh,Mh=data.Mh,Oh=data.Oh,Sh=data.Sh,Ah=data.Ah,Ih=data.Ih,Ch=data.Ch,Ph=data.Ph,Fh=data.Fh,Rh=data.Rh,Dh=data.Dh,Nh=data.Nh,Bh=data.Bh,kh=data.kh,Uh=data.Uh,Gh=data.Gh,$h=data.$h,Wh=data.Wh,Hh=data.Hh,Yh=data.Yh,jh=data.jh,Xh=data.Xh,zh=data.zh,Vh=data.Vh,Kh=data.Kh,Qh=data.Qh,Zh=data.Zh,Jh=data.Jh,qh=data.qh,tr=data.tr,ir=data.ir,nr=data.nr,er=data.er,sr=data.sr,hr=data.hr,rr=data.rr,ar=data.ar,or=data.or,fr=data.fr,cr=data.cr,ur=data.ur,_r=data._r,dr=data.dr,lr=data.lr,br=data.br,vr=data.vr,yr=data.yr,gr=data.gr,Er=data.Er,xr=data.xr,mr=data.mr,pr=data.pr,Tr=data.Tr,wr=data.wr,Lr=data.Lr,Mr=data.Mr,Or=data.Or,Sr=data.Sr,Ar=data.Ar,Ir=data.Ir,Cr=data.Cr,Pr=data.Pr,Fr=data.Fr,Rr=data.Rr,Dr=data.Dr,Nr=data.Nr,Br=data.Br,kr=data.kr,Ur=data.Ur,Gr=data.Gr,$r=data.$r,Wr=data.Wr,Hr=data.Hr,Yr=data.Yr,jr=data.jr,Xr=data.Xr,zr=data.zr,Vr=data.Vr,Kr=data.Kr,Qr=data.Qr,Zr=data.Zr,Jr=data.Jr,qr=data.qr,ta=data.ta,ia=data.ia,na=data.na,ea=data.ea,sa=data.sa,ha=data.ha,ra=data.ra,aa=data.aa,oa=data.oa,fa=data.fa,ca=data.ca,ua=data.ua,_a=data._a,da=data.da,la=data.la,ba=data.ba,va=data.va,ya=data.ya,ga=data.ga,Ea=data.Ea,xa=data.xa,ma=data.ma,pa=data.pa,Ta=data.Ta,wa=data.wa,La=data.La,Ma=data.Ma,Oa=data.Oa,Sa=data.Sa,Aa=data.Aa,Ia=data.Ia,Ca=data.Ca,Pa=data.Pa,Fa=data.Fa,Ra=data.Ra,Da=data.Da,Na=data.Na,Ba=data.Ba,ka=data.ka,Ua=data.Ua,Ga=data.Ga,$a=data.$a,Wa=data.Wa,Ha=data.Ha,Ya=data.Ya,ja=data.ja,Xa=data.Xa,za=data.za,Va=data.Va,Ka=data.Ka,Qa=data.Qa,Za=data.Za,Ja=data.Ja,qa=data.qa,to=data.to,io=data.io,no=data.no,eo=data.eo,so=data.so,ho=data.ho,ro=data.ro,ao=data.ao,oo=data.oo,fo=data.fo,co=data.co,uo=data.uo,_o=data._o,lo=data.lo,bo=data.bo,vo=data.vo,yo=data.yo,go=data.go,Eo=data.Eo,xo=data.xo,mo=data.mo,po=data.po,To=data.To,wo=data.wo,Lo=data.Lo,Mo=data.Mo,Oo=data.Oo,So=data.So,Ao=data.Ao,Io=data.Io,Co=data.Co,Po=data.Po,Fo=data.Fo,Ro=data.Ro,Do=data.Do,No=data.No,Bo=data.Bo,ko=data.ko,Uo=data.Uo,Go=data.Go,$o=data.$o,Wo=data.Wo,Ho=data.Ho,Yo=data.Yo,jo=data.jo,Xo=data.Xo,zo=data.zo,Vo=data.Vo,Ko=data.Ko,Qo=data.Qo,Zo=data.Zo,Jo=data.Jo,qo=data.qo,tf=data.tf,nf=data.nf,ef=data.ef,sf=data.sf,hf=data.hf,rf=data.rf,af=data.af,of=data.of,ff=data.ff,cf=data.cf,uf=data.uf,_f=data._f,df=data.df,lf=data.lf,bf=data.bf,vf=data.vf,yf=data.yf,gf=data.gf,Ef=data.Ef,xf=data.xf,mf=data.mf,pf=data.pf,Tf=data.Tf,wf=data.wf,Lf=data.Lf,Mf=data.Mf,Of=data.Of,Sf=data.Sf,Af=data.Af,If=data.If,Cf=data.Cf,Pf=data.Pf,Ff=data.Ff,Rf=data.Rf,Df=data.Df,Nf=data.Nf,Bf=data.Bf,kf=data.kf,Uf=data.Uf,Gf=data.Gf,$f=data.$f,Wf=data.Wf,Hf=data.Hf,Yf=data.Yf,jf=data.jf,Xf=data.Xf,zf=data.zf,Vf=data.Vf,Kf=data.Kf,Qf=data.Qf,Zf=data.Zf,Jf=data.Jf,qf=data.qf,tc=data.tc,ic=data.ic,nc=data.nc,ec=data.ec,sc=data.sc,hc=data.hc,rc=data.rc,ac=data.ac,oc=data.oc,fc=data.fc,cc=data.cc,uc=data.uc,_c=data._c,dc=data.dc,lc=data.lc,bc=data.bc,vc=data.vc,yc=data.yc,gc=data.gc,Ec=data.Ec,xc=data.xc,mc=data.mc,pc=data.pc,Tc=data.Tc,wc=data.wc,Lc=data.Lc,Mc=data.Mc,Oc=data.Oc,Sc=data.Sc,Ac=data.Ac,Ic=data.Ic,Cc=data.Cc,Pc=data.Pc,Fc=data.Fc,Rc=data.Rc,Dc=data.Dc,Nc=data.Nc,Bc=data.Bc,kc=data.kc,Uc=data.Uc,Gc=data.Gc,$c=data.$c,Wc=data.Wc,Hc=data.Hc,Yc=data.Yc,jc=data.jc,Xc=data.Xc,zc=data.zc,Vc=data.Vc,Kc=data.Kc,Qc=data.Qc,Zc=data.Zc,Jc=data.Jc,qc=data.qc,tu=data.tu,iu=data.iu,nu=data.nu,eu=data.eu,su=data.su,hu=data.hu,ru=data.ru,au=data.au,ou=data.ou,fu=data.fu,cu=data.cu,uu=data.uu,_u=data._u,du=data.du,lu=data.lu,bu=data.bu,vu=data.vu,yu=data.yu,gu=data.gu,Eu=data.Eu,xu=data.xu,mu=data.mu,pu=data.pu,Tu=data.Tu,wu=data.wu,Lu=data.Lu,Mu=data.Mu,Ou=data.Ou,Su=data.Su,Au=data.Au,Iu=data.Iu,Cu=data.Cu,Pu=data.Pu,Fu=data.Fu,Ru=data.Ru,Du=data.Du,Nu=data.Nu,Bu=data.Bu,ku=data.ku,Uu=data.Uu,Gu=data.Gu,$u=data.$u,Wu=data.Wu,Hu=data.Hu,Yu=data.Yu,ju=data.ju,Xu=data.Xu,zu=data.zu,Vu=data.Vu,Ku=data.Ku,Qu=data.Qu,Zu=data.Zu,Ju=data.Ju,qu=data.qu,t_=data.t_,i_=data.i_,n_=data.n_,e_=data.e_,s_=data.s_,h_=data.h_,r_=data.r_,a_=data.a_,o_=data.o_,f_=data.f_,c_=data.c_,u_=data.u_,__=data.__,d_=data.d_,l_=data.l_,b_=data.b_,v_=data.v_,y_=data.y_,g_=data.g_,E_=data.E_,x_=data.x_,m_=data.m_,p_=data.p_,T_=data.T_,w_=data.w_,L_=data.L_,M_=data.M_,O_=data.O_,S_=data.S_,A_=data.A_,I_=data.I_,C_=data.C_,P_=data.P_,F_=data.F_,R_=data.R_,D_=data.D_,N_=data.N_,B_=data.B_,k_=data.k_,U_=data.U_,G_=data.G_,$_=data.$_,W_=data.W_,H_=data.H_,Y_=data.Y_,j_=data.j_,X_=data.X_,z_=data.z_,V_=data.V_,K_=data.K_,Q_=data.Q_,Z_=data.Z_,J_=data.J_,q_=data.q_,td=data.td,id=data.id,nd=data.nd,ed=data.ed,sd=data.sd,hd=data.hd,rd=data.rd,ad=data.ad,od=data.od,fd=data.fd,cd=data.cd,ud=data.ud,_d=data._d,dd=data.dd,ld=data.ld,bd=data.bd,vd=data.vd,yd=data.yd,gd=data.gd,Ed=data.Ed,xd=data.xd,md=data.md,pd=data.pd,Td=data.Td,wd=data.wd,Ld=data.Ld,Md=data.Md,Od=data.Od,Sd=data.Sd,Ad=data.Ad,Id=data.Id,Cd=data.Cd,Pd=data.Pd,Fd=data.Fd,Rd=data.Rd,Dd=data.Dd,Nd=data.Nd,Bd=data.Bd,kd=data.kd,Ud=data.Ud,Gd=data.Gd,$d=data.$d,Wd=data.Wd,Hd=data.Hd,Yd=data.Yd,jd=data.jd,Xd=data.Xd,zd=data.zd,Vd=data.Vd,Kd=data.Kd,Qd=data.Qd,Zd=data.Zd,Jd=data.Jd,qd=data.qd,tl=data.tl,il=data.il,nl=data.nl,el=data.el,sl=data.sl,hl=data.hl,rl=data.rl,al=data.al,ol=data.ol,fl=data.fl,cl=data.cl,ul=data.ul,_l=data._l,dl=data.dl,ll=data.ll,bl=data.bl,vl=data.vl,yl=data.yl,gl=data.gl,El=data.El,xl=data.xl,ml=data.ml,pl=data.pl,Tl=data.Tl,wl=data.wl,Ll=data.Ll,Ml=data.Ml,Ol=data.Ol,Sl=data.Sl,Al=data.Al,Il=data.Il,Cl=data.Cl,Pl=data.Pl,Fl=data.Fl,Rl=data.Rl,Dl=data.Dl,Nl=data.Nl,Bl=data.Bl,kl=data.kl,Ul=data.Ul,Gl=data.Gl,$l=data.$l,Wl=data.Wl,Hl=data.Hl,Yl=data.Yl,jl=data.jl,Xl=data.Xl,zl=data.zl,Vl=data.Vl,Kl=data.Kl,Ql=data.Ql,Zl=data.Zl,Jl=data.Jl,ql=data.ql,tb=data.tb,ib=data.ib,nb=data.nb,eb=data.eb,sb=data.sb,hb=data.hb,rb=data.rb,ab=data.ab,ob=data.ob,fb=data.fb,cb=data.cb,ub=data.ub,_b=data._b,db=data.db,lb=data.lb,bb=data.bb,vb=data.vb,yb=data.yb,gb=data.gb,Eb=data.Eb,xb=data.xb,mb=data.mb,pb=data.pb,Tb=data.Tb,wb=data.wb,Lb=data.Lb,Mb=data.Mb,Ob=data.Ob,Sb=data.Sb,Ab=data.Ab,Ib=data.Ib,Cb=data.Cb,Pb=data.Pb,Fb=data.Fb,Rb=data.Rb,Db=data.Db,Nb=data.Nb,Bb=data.Bb,kb=data.kb,Ub=data.Ub,Gb=data.Gb,$b=data.$b,Wb=data.Wb,Hb=data.Hb,Yb=data.Yb,jb=data.jb,Xb=data.Xb,zb=data.zb,Vb=data.Vb,Kb=data.Kb,Qb=data.Qb,Zb=data.Zb,Jb=data.Jb,qb=data.qb,tv=data.tv,iv=data.iv,nv=data.nv,ev=data.ev,sv=data.sv,hv=data.hv,rv=data.rv,av=data.av,ov=data.ov,fv=data.fv,cv=data.cv,uv=data.uv,_v=data._v,dv=data.dv,lv=data.lv,bv=data.bv,vv=data.vv,yv=data.yv,gv=data.gv,Ev=data.Ev,xv=data.xv,mv=data.mv,pv=data.pv,Tv=data.Tv,wv=data.wv,Lv=data.Lv,Mv=data.Mv,Ov=data.Ov,Sv=data.Sv,Av=data.Av,Iv=data.Iv,Cv=data.Cv,Pv=data.Pv,Fv=data.Fv,Rv=data.Rv,Dv=data.Dv,Nv=data.Nv,Bv=data.Bv,kv=data.kv,Uv=data.Uv,Gv=data.Gv,$v=data.$v,Wv=data.Wv,Hv=data.Hv,Yv=data.Yv,jv=data.jv,Xv=data.Xv,zv=data.zv,Vv=data.Vv,Kv=data.Kv,Qv=data.Qv,Zv=data.Zv,Jv=data.Jv,qv=data.qv,ty=data.ty,iy=data.iy,ny=data.ny,ey=data.ey,sy=data.sy,hy=data.hy,ry=data.ry,ay=data.ay,oy=data.oy,fy=data.fy,cy=data.cy,uy=data.uy,_y=data._y,dy=data.dy,ly=data.ly,by=data.by,vy=data.vy,yy=data.yy,gy=data.gy,Ey=data.Ey,xy=data.xy,my=data.my,py=data.py,Ty=data.Ty,wy=data.wy,Ly=data.Ly,My=data.My,Oy=data.Oy,Sy=data.Sy,Ay=data.Ay,Iy=data.Iy,Cy=data.Cy,Py=data.Py,Fy=data.Fy,Ry=data.Ry,Dy=data.Dy,Ny=data.Ny,By=data.By,ky=data.ky,Uy=data.Uy,Gy=data.Gy,$y=data.$y,Wy=data.Wy,Hy=data.Hy,Yy=data.Yy,jy=data.jy,Xy=data.Xy,zy=data.zy,Vy=data.Vy,Ky=data.Ky,Qy=data.Qy,Zy=data.Zy,Jy=data.Jy,qy=data.qy,tg=data.tg,ig=data.ig,ng=data.ng,eg=data.eg,sg=data.sg,hg=data.hg,rg=data.rg,ag=data.ag,og=data.og,fg=data.fg,cg=data.cg,ug=data.ug,_g=data._g,dg=data.dg,lg=data.lg,bg=data.bg,vg=data.vg,yg=data.yg,gg=data.gg,Eg=data.Eg,xg=data.xg,mg=data.mg,pg=data.pg,Tg=data.Tg,wg=data.wg,Lg=data.Lg,Mg=data.Mg,Og=data.Og,Sg=data.Sg,Ag=data.Ag,Ig=data.Ig,Cg=data.Cg,Pg=data.Pg,Fg=data.Fg,Rg=data.Rg,Dg=data.Dg,Ng=data.Ng,Bg=data.Bg,kg=data.kg,Ug=data.Ug,Gg=data.Gg,$g=data.$g,Wg=data.Wg,Hg=data.Hg,Yg=data.Yg,jg=data.jg,Xg=data.Xg,zg=data.zg,Vg=data.Vg,Kg=data.Kg,Qg=data.Qg,Zg=data.Zg,Jg=data.Jg,qg=data.qg,tE=data.tE,iE=data.iE,nE=data.nE,eE=data.eE,sE=data.sE,hE=data.hE,rE=data.rE,aE=data.aE,oE=data.oE,fE=data.fE,cE=data.cE,uE=data.uE,_E=data._E,dE=data.dE,lE=data.lE,bE=data.bE,vE=data.vE,yE=data.yE,gE=data.gE,EE=data.EE,xE=data.xE,mE=data.mE,pE=data.pE,TE=data.TE,wE=data.wE,LE=data.LE,ME=data.ME,OE=data.OE,SE=data.SE,AE=data.AE,IE=data.IE,CE=data.CE,PE=data.PE,FE=data.FE,RE=data.RE,DE=data.DE,NE=data.NE,BE=data.BE,kE=data.kE,UE=data.UE,GE=data.GE,$E=data.$E,WE=data.WE,HE=data.HE,YE=data.YE,jE=data.jE,XE=data.XE,zE=data.zE,VE=data.VE,KE=data.KE,QE=data.QE,ZE=data.ZE,JE=data.JE,qE=data.qE,tx=data.tx,ix=data.ix,nx=data.nx,ex=data.ex,sx=data.sx,hx=data.hx,rx=data.rx,ax=data.ax,ox=data.ox,fx=data.fx,cx=data.cx,ux=data.ux,_x=data._x,dx=data.dx,lx=data.lx,bx=data.bx,vx=data.vx,yx=data.yx,gx=data.gx,Ex=data.Ex,xx=data.xx,mx=data.mx,px=data.px,Tx=data.Tx,wx=data.wx,Lx=data.Lx,Mx=data.Mx,Ox=data.Ox,Sx=data.Sx,Ax=data.Ax,Ix=data.Ix,Cx=data.Cx,Px=data.Px,Fx=data.Fx,Rx=data.Rx,Dx=data.Dx,Nx=data.Nx,Bx=data.Bx,kx=data.kx,Ux=data.Ux,Gx=data.Gx,$x=data.$x,Wx=data.Wx,Hx=data.Hx,Yx=data.Yx,jx=data.jx,Xx=data.Xx,zx=data.zx,Vx=data.Vx,Kx=data.Kx,Qx=data.Qx,Zx=data.Zx,Jx=data.Jx,qx=data.qx,tm=data.tm,im=data.im,nm=data.nm,em=data.em,sm=data.sm,hm=data.hm,rm=data.rm,am=data.am,om=data.om,fm=data.fm,cm=data.cm,um=data.um,_m=data._m,dm=data.dm,lm=data.lm,bm=data.bm,vm=data.vm,ym=data.ym,gm=data.gm,Em=data.Em,xm=data.xm,mm=data.mm,pm=data.pm,Tm=data.Tm,wm=data.wm,Lm=data.Lm,Mm=data.Mm,Om=data.Om,Sm=data.Sm,Am=data.Am,Im=data.Im,Cm=data.Cm,Pm=data.Pm,Fm=data.Fm,Rm=data.Rm,Dm=data.Dm,Nm=data.Nm,Bm=data.Bm,km=data.km,Um=data.Um,Gm=data.Gm,$m=data.$m,Wm=data.Wm,Hm=data.Hm,Ym=data.Ym,jm=data.jm,Xm=data.Xm,zm=data.zm,Vm=data.Vm,Km=data.Km,Qm=data.Qm,Zm=data.Zm,Jm=data.Jm,qm=data.qm,tp=data.tp,ip=data.ip,np=data.np,ep=data.ep,sp=data.sp,hp=data.hp,rp=data.rp,ap=data.ap,op=data.op,fp=data.fp,cp=data.cp,up=data.up,_p=data._p,dp=data.dp,lp=data.lp,bp=data.bp,vp=data.vp,yp=data.yp,gp=data.gp,Ep=data.Ep,xp=data.xp,mp=data.mp,pp=data.pp,Tp=data.Tp,wp=data.wp,Lp=data.Lp,Mp=data.Mp,Op=data.Op,Sp=data.Sp,Ap=data.Ap,Ip=data.Ip,Cp=data.Cp,Pp=data.Pp,Fp=data.Fp,Rp=data.Rp,Dp=data.Dp,Np=data.Np,Bp=data.Bp,kp=data.kp,Up=data.Up,Gp=data.Gp,$p=data.$p,Wp=data.Wp,Hp=data.Hp,Yp=data.Yp,jp=data.jp,Xp=data.Xp,zp=data.zp,Vp=data.Vp,Kp=data.Kp,Qp=data.Qp,Zp=data.Zp,Jp=data.Jp,qp=data.qp,tT=data.tT,iT=data.iT,nT=data.nT,eT=data.eT,sT=data.sT,hT=data.hT,rT=data.rT,aT=data.aT,oT=data.oT,fT=data.fT,cT=data.cT,uT=data.uT,_T=data._T,dT=data.dT,lT=data.lT,bT=data.bT,vT=data.vT,yT=data.yT,gT=data.gT,ET=data.ET,xT=data.xT,mT=data.mT,pT=data.pT,TT=data.TT,wT=data.wT,LT=data.LT,MT=data.MT,OT=data.OT,ST=data.ST,AT=data.AT,IT=data.IT,CT=data.CT,PT=data.PT,FT=data.FT,RT=data.RT,DT=data.DT,NT=data.NT,BT=data.BT,kT=data.kT,UT=data.UT,GT=data.GT,$T=data.$T,WT=data.WT,HT=data.HT,YT=data.YT,jT=data.jT,XT=data.XT,zT=data.zT,VT=data.VT,KT=data.KT,QT=data.QT,ZT=data.ZT,JT=data.JT,qT=data.qT,tw=data.tw,iw=data.iw,nw=data.nw,ew=data.ew,sw=data.sw,hw=data.hw,rw=data.rw,aw=data.aw,ow=data.ow,fw=data.fw,cw=data.cw,uw=data.uw,_w=data._w,dw=data.dw,lw=data.lw,bw=data.bw,vw=data.vw,yw=data.yw,gw=data.gw,Ew=data.Ew,xw=data.xw,mw=data.mw,pw=data.pw,Tw=data.Tw,ww=data.ww,Lw=data.Lw,Mw=data.Mw,Ow=data.Ow,Sw=data.Sw,Aw=data.Aw,Iw=data.Iw,Cw=data.Cw,Pw=data.Pw,Fw=data.Fw,Rw=data.Rw,Dw=data.Dw,Nw=data.Nw,Bw=data.Bw,kw=data.kw,Uw=data.Uw,Gw=data.Gw,$w=data.$w,Ww=data.Ww,Hw=data.Hw,Yw=data.Yw,jw=data.jw,Xw=data.Xw,zw=data.zw,Vw=data.Vw,Kw=data.Kw,Qw=data.Qw,Zw=data.Zw,Jw=data.Jw,qw=data.qw,tL=data.tL,iL=data.iL,nL=data.nL,eL=data.eL,sL=data.sL,hL=data.hL,rL=data.rL,aL=data.aL,oL=data.oL,fL=data.fL,cL=data.cL,uL=data.uL,_L=data._L,dL=data.dL,lL=data.lL,bL=data.bL,vL=data.vL,yL=data.yL,gL=data.gL,EL=data.EL,xL=data.xL,mL=data.mL,pL=data.pL,TL=data.TL,wL=data.wL,LL=data.LL,ML=data.ML,OL=data.OL,SL=data.SL,AL=data.AL,IL=data.IL,CL=data.CL,PL=data.PL,FL=data.FL,RL=data.RL,DL=data.DL,NL=data.NL,BL=data.BL,kL=data.kL,UL=data.UL,GL=data.GL,$L=data.$L,WL=data.WL,HL=data.HL,YL=data.YL,jL=data.jL,XL=data.XL,zL=data.zL,VL=data.VL,KL=data.KL,QL=data.QL,ZL=data.ZL,JL=data.JL,qL=data.qL,tM=data.tM,iM=data.iM,nM=data.nM,eM=data.eM,sM=data.sM,hM=data.hM,rM=data.rM,aM=data.aM,oM=data.oM,fM=data.fM,cM=data.cM,uM=data.uM,_M=data._M,dM=data.dM,lM=data.lM,bM=data.bM,vM=data.vM,yM=data.yM,gM=data.gM,EM=data.EM,xM=data.xM,mM=data.mM,pM=data.pM,TM=data.TM,wM=data.wM,LM=data.LM,MM=data.MM,OM=data.OM,SM=data.SM,AM=data.AM,IM=data.IM,CM=data.CM,PM=data.PM,FM=data.FM,RM=data.RM,DM=data.DM,NM=data.NM,BM=data.BM,kM=data.kM,UM=data.UM,GM=data.GM,$M=data.$M,WM=data.WM,HM=data.HM,YM=data.YM,jM=data.jM,XM=data.XM,zM=data.zM,VM=data.VM,KM=data.KM,QM=data.QM,ZM=data.ZM,JM=data.JM,qM=data.qM,tO=data.tO,iO=data.iO,nO=data.nO,eO=data.eO,sO=data.sO,hO=data.hO,rO=data.rO,aO=data.aO,oO=data.oO,fO=data.fO,cO=data.cO,uO=data.uO,_O=data._O,dO=data.dO,lO=data.lO,bO=data.bO,vO=data.vO,yO=data.yO,gO=data.gO,EO=data.EO,xO=data.xO,mO=data.mO,pO=data.pO,TO=data.TO,wO=data.wO,LO=data.LO,MO=data.MO,OO=data.OO,SO=data.SO,AO=data.AO,IO=data.IO,CO=data.CO,PO=data.PO,FO=data.FO,RO=data.RO,DO=data.DO,NO=data.NO,BO=data.BO,kO=data.kO,UO=data.UO,GO=data.GO,$O=data.$O,WO=data.WO,HO=data.HO,YO=data.YO,jO=data.jO,XO=data.XO,zO=data.zO,VO=data.VO,KO=data.KO,QO=data.QO,ZO=data.ZO,JO=data.JO,qO=data.qO,tS=data.tS,iS=data.iS,nS=data.nS,eS=data.eS,sS=data.sS,hS=data.hS,rS=data.rS,aS=data.aS,oS=data.oS,fS=data.fS,cS=data.cS,uS=data.uS,_S=data._S,dS=data.dS,lS=data.lS,bS=data.bS,vS=data.vS,yS=data.yS,gS=data.gS,ES=data.ES,xS=data.xS,mS=data.mS,pS=data.pS,TS=data.TS,wS=data.wS,LS=data.LS,MS=data.MS,OS=data.OS,SS=data.SS,AS=data.AS,IS=data.IS,CS=data.CS,PS=data.PS,FS=data.FS,RS=data.RS,DS=data.DS,NS=data.NS,BS=data.BS,kS=data.kS,US=data.US,GS=data.GS,$S=data.$S,WS=data.WS,HS=data.HS,YS=data.YS,jS=data.jS,XS=data.XS,zS=data.zS,VS=data.VS,KS=data.KS,QS=data.QS,ZS=data.ZS,JS=data.JS,qS=data.qS,tA=data.tA,iA=data.iA,nA=data.nA,eA=data.eA,sA=data.sA,hA=data.hA,rA=data.rA,aA=data.aA,oA=data.oA,fA=data.fA,cA=data.cA,uA=data.uA,_A=data._A,dA=data.dA,lA=data.lA,bA=data.bA,vA=data.vA,yA=data.yA,gA=data.gA,EA=data.EA,xA=data.xA,mA=data.mA,pA=data.pA,TA=data.TA,wA=data.wA,LA=data.LA,MA=data.MA,OA=data.OA,SA=data.SA,AA=data.AA,IA=data.IA,CA=data.CA,PA=data.PA,FA=data.FA,RA=data.RA,DA=data.DA,NA=data.NA,BA=data.BA,kA=data.kA,UA=data.UA,GA=data.GA,$A=data.$A,WA=data.WA,HA=data.HA,YA=data.YA,jA=data.jA,XA=data.XA,zA=data.zA,VA=data.VA,KA=data.KA,QA=data.QA,ZA=data.ZA,JA=data.JA,qA=data.qA,tI=data.tI,iI=data.iI,nI=data.nI,eI=data.eI,sI=data.sI,hI=data.hI,rI=data.rI,aI=data.aI,oI=data.oI,fI=data.fI,cI=data.cI,uI=data.uI,_I=data._I,dI=data.dI,lI=data.lI,bI=data.bI,vI=data.vI,yI=data.yI,gI=data.gI,EI=data.EI,xI=data.xI,mI=data.mI,pI=data.pI,TI=data.TI,wI=data.wI,LI=data.LI,MI=data.MI,OI=data.OI,SI=data.SI,AI=data.AI,II=data.II,CI=data.CI,PI=data.PI,FI=data.FI,RI=data.RI,DI=data.DI,NI=data.NI,BI=data.BI,kI=data.kI,UI=data.UI,GI=data.GI,$I=data.$I,WI=data.WI,HI=data.HI,YI=data.YI,jI=data.jI,XI=data.XI,zI=data.zI,VI=data.VI,KI=data.KI,QI=data.QI,ZI=data.ZI,JI=data.JI,qI=data.qI,tC=data.tC,iC=data.iC,nC=data.nC,eC=data.eC,sC=data.sC,hC=data.hC,rC=data.rC,aC=data.aC,oC=data.oC,fC=data.fC,cC=data.cC,uC=data.uC,_C=data._C,dC=data.dC,lC=data.lC,bC=data.bC,vC=data.vC,yC=data.yC,gC=data.gC,EC=data.EC,xC=data.xC,mC=data.mC,pC=data.pC,TC=data.TC,wC=data.wC,LC=data.LC,MC=data.MC,OC=data.OC,SC=data.SC,AC=data.AC,IC=data.IC,CC=data.CC,PC=data.PC,FC=data.FC,RC=data.RC,DC=data.DC,NC=data.NC,BC=data.BC,kC=data.kC,UC=data.UC,GC=data.GC,$C=data.$C,WC=data.WC,HC=data.HC,YC=data.YC,jC=data.jC,XC=data.XC,zC=data.zC,VC=data.VC,KC=data.KC,QC=data.QC,ZC=data.ZC,JC=data.JC,qC=data.qC,tP=data.tP,iP=data.iP,nP=data.nP,eP=data.eP,sP=data.sP,hP=data.hP,rP=data.rP,aP=data.aP,oP=data.oP,fP=data.fP,cP=data.cP,uP=data.uP,_P=data._P,dP=data.dP,lP=data.lP,bP=data.bP,vP=data.vP,yP=data.yP,gP=data.gP,EP=data.EP,xP=data.xP,mP=data.mP,pP=data.pP,TP=data.TP,wP=data.wP,LP=data.LP,MP=data.MP,OP=data.OP,SP=data.SP,AP=data.AP,IP=data.IP,CP=data.CP,PP=data.PP,FP=data.FP,RP=data.RP,DP=data.DP,NP=data.NP,BP=data.BP,kP=data.kP,UP=data.UP,GP=data.GP,$P=data.$P,WP=data.WP,HP=data.HP,YP=data.YP,jP=data.jP,XP=data.XP,zP=data.zP,VP=data.VP,KP=data.KP,QP=data.QP,ZP=data.ZP,JP=data.JP,qP=data.qP,tF=data.tF,iF=data.iF,nF=data.nF,eF=data.eF,sF=data.sF,hF=data.hF,rF=data.rF,aF=data.aF,oF=data.oF,fF=data.fF,cF=data.cF,uF=data.uF,_F=data._F,dF=data.dF,lF=data.lF,bF=data.bF,vF=data.vF,yF=data.yF,gF=data.gF,EF=data.EF,xF=data.xF,mF=data.mF,pF=data.pF,TF=data.TF,wF=data.wF,LF=data.LF,MF=data.MF,OF=data.OF,SF=data.SF,AF=data.AF,IF=data.IF,CF=data.CF,PF=data.PF,FF=data.FF,RF=data.RF,DF=data.DF,NF=data.NF,BF=data.BF,kF=data.kF,UF=data.UF,GF=data.GF,$F=data.$F,WF=data.WF,HF=data.HF,YF=data.YF,jF=data.jF,XF=data.XF,zF=data.zF,VF=data.VF,KF=data.KF,QF=data.QF,ZF=data.ZF,JF=data.JF,qF=data.qF,tR=data.tR,iR=data.iR,nR=data.nR,eR=data.eR,sR=data.sR,hR=data.hR,rR=data.rR,aR=data.aR,oR=data.oR,fR=data.fR,cR=data.cR,uR=data.uR,_R=data._R,dR=data.dR,lR=data.lR,bR=data.bR,vR=data.vR,yR=data.yR,gR=data.gR,ER=data.ER,xR=data.xR,mR=data.mR,pR=data.pR,TR=data.TR,wR=data.wR,LR=data.LR,MR=data.MR,OR=data.OR,SR=data.SR,AR=data.AR,IR=data.IR,CR=data.CR,PR=data.PR,FR=data.FR,RR=data.RR,DR=data.DR,NR=data.NR,BR=data.BR,kR=data.kR,UR=data.UR,GR=data.GR,$R=data.$R,WR=data.WR,HR=data.HR,YR=data.YR,jR=data.jR,XR=data.XR,zR=data.zR,VR=data.VR,KR=data.KR,QR=data.QR,ZR=data.ZR,JR=data.JR,qR=data.qR,tD=data.tD,iD=data.iD,nD=data.nD,eD=data.eD,sD=data.sD,hD=data.hD,rD=data.rD,aD=data.aD,oD=data.oD,fD=data.fD,cD=data.cD,uD=data.uD,_D=data._D,dD=data.dD,lD=data.lD,bD=data.bD,vD=data.vD,yD=data.yD,gD=data.gD,ED=data.ED,xD=data.xD,mD=data.mD,pD=data.pD,TD=data.TD,wD=data.wD,LD=data.LD,MD=data.MD,OD=data.OD,SD=data.SD,AD=data.AD,ID=data.ID,CD=data.CD,PD=data.PD,FD=data.FD,RD=data.RD,DD=data.DD,ND=data.ND,BD=data.BD,kD=data.kD,UD=data.UD,GD=data.GD,$D=data.$D,WD=data.WD,HD=data.HD,YD=data.YD,jD=data.jD,XD=data.XD,zD=data.zD,VD=data.VD,KD=data.KD,QD=data.QD,ZD=data.ZD,JD=data.JD,qD=data.qD,tN=data.tN,iN=data.iN,nN=data.nN,eN=data.eN,sN=data.sN,hN=data.hN,rN=data.rN,aN=data.aN,oN=data.oN,fN=data.fN,cN=data.cN,uN=data.uN,_N=data._N,dN=data.dN,lN=data.lN,bN=data.bN,vN=data.vN,yN=data.yN,gN=data.gN,EN=data.EN,xN=data.xN,mN=data.mN,pN=data.pN,TN=data.TN,wN=data.wN,LN=data.LN,MN=data.MN,ON=data.ON,SN=data.SN,AN=data.AN,IN=data.IN,CN=data.CN,PN=data.PN,FN=data.FN,RN=data.RN,DN=data.DN,BN=data.BN,kN=data.kN,UN=data.UN;function GN(t,i,n){if(t.hasChildren()){var e=t._hF||t[r]();if(e){for(var s=0,h=(e=e._l1||e).length;s<h;s++){if(!1===i[x](n,e[s])||!1===GN(e[s],i,n)){ return!1; }}return!0;}}}function $N(t,i,n,e){return(e?function t(i,n,e){for(var s,h=0,r=(i=i._l1||i).length;h<r;h++){if((s=i[h]).hasChildren()&&!t(s[y],n,e)||!1===n[x](e,s)){ return!1; }}return!0;}:function t(i,n,e){for(var s,h=0,r=(i=i._l1||i)[bt];h<r;h++){if(s=i[h], !1===n.call(e,s)||s[E]()&&!t(s.children,n,e)){ return!1; }}return!0;})(t,i,n);}function WN(t,i,n,e){return(e?function t(i,n,e){for(var s,h=(i=i._l1||i)[bt]-1;0<=h;h--){if((s=i[h])[E]()&&!t(s.children,n,e)||!1===n[x](e,s)){ return!1; }}return!0;}:function t(i,n,e){for(var s,h=(i=i._l1||i).length-1;0<=h;h--){if(s=i[h], !1===n.call(e,s)||s[E]()&&!t(s.children,n,e)){ return!1; }}return!0;})(t,i,n);}function HN(t,i,n){for(var e=(t._l1||t)[vt](0);e.length;){var s,h=e[0],e=e[m](1);if(!1===i[x](n,h)){ return!1; }h[E]()&&(s=(s=h[y])._l1||s, e=e[R](s));}return!0;}function YN(t,f){function e(t,i){for(var n=t.length,e=i[bt],s=n+e,h=new Array(s),r=0,a=0,o=0;o<s;){r!==n&&(a===e||f(t[r],i[a])<=0)?h[o++]=t[r++]:h[o++]=i[a++];}return h;}function s(t){var i=t.length,n=Math.ceil(i/2);return i<=1?t:e(s(t[vt](0,n)),s(t[vt](n)));}return s(t);}function jN(t,i,n,e){t instanceof GB&&(t=t._l1);for(var s=0,h=(t._l1||t)[bt];s<h;s++){if(!1===i[x](n,t[s],s,e)){ return!1; }}return!0;}function XN(t,i,n,e){t instanceof GB&&(t=t._l1);for(var s=(t._l1||t)[bt]-1;0<=s;s--){if(!1===i.call(n,t[s],s,e)){ return!1; }}return!0;}function zN(t){if(t[d]instanceof Function){ return t[d](!0); }var i,n=[];return jN(t,function(t){i=t&&t.clone instanceof Function?t[d]():t, n.push(i);},this), n;}function VN(t,i,n){n===Y||n<0?t[j](i):t.splice(n,0,i);}function KN(t,i){var n=t.indexOf(i);return!(n<0||n>=t[bt])&&t[m](n,1);}function QN(t,i){var n,e,s,h=t;for(n in i){i.__lookupGetter__?(e=i.__lookupGetter__(n), s=i.__lookupSetter__(n), e||s?(e&&h.__defineGetter__(n,e), s&&h.__defineSetter__(n,s)):h[n]=i[n]):h[n]=i[n];}return h;}function ZN(t,i,n){if(!(t instanceof Function)){ throw new Error("subclass must be type of Function"); }var e=null;function s(){}a==(typeof i==="undefined"?"undefined":_typeof(i))&&(e=i, i=t, t=function t(){i[b](this,arguments);});var h=t.prototype;return s.prototype=i[_], t[_]=new s(), t[o]=i.prototype, t[o].constructor=i, QN(t[_],h), e&&QN(t[_],e), n&&QN(t[_],n), t[_].class=t;}function JN(t,i,n){return qN(t,i,"constructor",n);}function qN(t,i,n,e){var s=i[o];if(s){var h=s[n];return h?h[b](t,e):void 0;}}function tB(t,i,n,e){if("constructor"==n){ return iB(t,i,e); }if(i[f]instanceof Function){var s=i.super_.prototype[n];return s instanceof Function?s[b](t,e):void 0;}}function iB(t,i,n){if(i.super_ instanceof Function){ return i[f].apply(t,n); }}function nB(t,i,n){var e,s;if(!(t instanceof Function)&&t instanceof Object){ return i=t[c], t.hasOwnProperty("constructor")?(e=t.constructor, delete t.constructor):e=i?function(){i.apply(this,arguments);}:function(){}, nB(e,i,t); }if(i&&!(i instanceof Function)&&i instanceof Object){ return nB(t,i[c],i); }if(i&&(s=i, t[f]=s, t[_]=Object[l](s[_],{super_:{value:s,enumerable:!1},constructor:{value:t,enumerable:!1}})), n){var h,r=t[_];for(h in n){r[h]=n[h];}}return t;}function eB(t,i){for(var n=0,e=i.length;n<e;n++){var s=i[n];!function(t,e,i,n,s){var h,r;n?Object.defineProperty(t,e,{value:i,enumerable:!0}):(h={configurable:!0,enumerable:!0}, r=v+e, i!==Y&&(t[r]=i), h.get=function(){return this[r];}, h.set=function(t){var i=this[r];if(i==t){ return!1; }var n=new uk(this,e,t,i);return!!this[g](n)&&(this[r]=t, s&&s.call(this,t,i), this[p](n), !0);}, Object[T](t,e,h));}(t,s.name||s,s[h]||s[P],s[w],s[L]);}}var sB=0;if(u[n]){var hB=navigator[e],rB=/opera/i[M](hB),aB=!rB&&/msie/i[M](hB),oB=/rv:11.0/i.test(hB),fB=/MSIE 10./i[M](hB);if(/Edge/i[M](hB), oB&&(aB=!0), /msie\s[6,7,8]/i.test(hB)){ throw new Error("your browser is not supported"); }var cB=/webkit|khtml/i.test(hB),uB=!cB&&/gecko/i.test(hB),_B=/firefox\//i[M](hB),dB=/Chrome\//i[M](hB),lB=!dB&&/Safari\//i[M](hB),bB=/Macintosh;/i.test(hB),vB=/(iPad|iPhone|iPod)/g[M](hB),yB=/Android/g[M](hB),gB=/Windows Phone/g.test(hB),EB=(vB||yB||gB)&&O in u,xB=hB.match(/AppleWebKit\/([0-9\.]*)/);xB&&1<xB[bt]&&parseFloat(xB[1]), yB&&parseFloat(hB[s](/Android\s([0-9\.]*)/)[1]);}function mB(t,i){return t.className=i, t;}function pB(t,i){if(!t.hasOwnProperty(A)){var n=t[I](C);if(!n){ return mB(t,i); }for(var e=n[F](D),s=0,h=e[bt];s<h;s++){if(e[s]==i){ return; }}return mB(t,n+=D+i);}t[A].add(i);}function TB(t,i){if(!t.hasOwnProperty(A)){var n=t.getAttribute(C);if(!n||!n[N](i)){ return; }for(var e='',s=n[F](D),h=0,r=s[bt];h<r;h++){s[h]!=i&&(e+=s[h]+D);}return mB(t,e);}t[A][B](i);}function wB(t){return!isNaN(t)&&t instanceof Number||k==(typeof t==="undefined"?"undefined":_typeof(t));}function LB(t){return t!==Y&&(t instanceof String||U==(typeof t==="undefined"?"undefined":_typeof(t)));}function MB(t){return Array[G](t);}function OB(t){(t=t||u[$])[W]?t[W]():t.returnValue=!1;}function SB(t){(t=t||u[$])[H]?t[H]():t.cancelBubble||(t[X]=!0);}function AB(t){OB(t), SB(t);}function IB(t){return Math.floor(Math[z]()*t);}function CB(t){return 0<t?Math.floor(t):Math[V](t);}function PB(t){return 0<t?Math.ceil(t):Math[K](t);}function FB(t){return t<16777216?Q+(Z+t.toString(16))[vt](-6):J+(t>>16&255)+q+(t>>8&255)+q+(255&t)+q+((t>>24&255)/255)[tt](2)+it;}function RB(t,i,n){a!=(typeof n==="undefined"?"undefined":_typeof(n))||n.hasOwnProperty(nt)||(n[nt]=!0), Object[T](t,i,n);}function DB(t,i){for(var n in i){var e;et!=n[0]&&(a!=_typeof(e=i[n])||e.hasOwnProperty(nt)||(e[nt]=!0));}Object.defineProperties(t,i);}function NB(t,i){i=i||u;for(var n=t[F](st),e=0,s=n[bt];e<s;e++){i=i[n[e]];}return i;}function BB(t){return t instanceof MouseEvent||t instanceof Object&&t.touches!==Y;}function kB(t){u[ht]&&console.error(t);}u[rt]||(u[rt]=u[at]||u[ot]||u[ft]||u.msRequestAnimationFrame||function(t,i){return u[ct](function(){t();},1e3/60);}), u.cancelAnimationFrame||(u.cancelAnimationFrame=u.webkitCancelAnimationFrame||u[ut]||u.oCancelAnimationFrame||u[_t]||function(t){return u[dt](t);});var UB={SELECTION_TOLERANCE:EB?7:4,LABEL_COLOR:lt};DB(UB,{FONT_STYLE:{get:function get(){return this[yt]||(this[yt]=gt);},set:function set(t){this._fontStyle!=t&&(this[yt]=t, this._fontChanged=!0);}},FONT_SIZE:{get:function get(){return this._fontSize||(this._fontSize=12);},set:function set(t){this[Et]!=t&&(this._fontSize=t, this[xt]=!0);}},FONT_FAMILY:{get:function get(){return this[mt]||(this._fontFamily="Verdana,helvetica,arial,sans-serif");},set:function set(t){this[mt]!=t&&(this[mt]=t, this[xt]=!0);}},FONT:{get:function get(){return!this[xt]&&this[xt]!==Y||(this[xt]=!1, this[pt]=this.FONT_STYLE+D+this[Tt]+wt+this[Lt]), this._font;}}});var GB=function GB(t){this._l1=[], this._n7={}, t&&this.add(t);};GB[_]={_l1:null,_n7:null,get:function get(t){return this.getByIndex(t);},getById:function getById(t){return this._n7[t];},getByIndex:function getByIndex(t){return this._l1[t];},forEach:function forEach(t,i,n){return jN(this._l1,t,i,n);},forEachReverse:function forEachReverse(t,i,n){return XN(this._l1,t,i,n);},size:function size(){return this._l1.length;},contains:function contains(t){return this[Mt](t.id);},containsById:function containsById(t){return this._n7.hasOwnProperty(t);},setIndex:function setIndex(t,i){var n=this._l1.indexOf(t);if(n<0){ throw new Error(Ot+t.id+St); }return n!=i&&(this._l1[m](n,1), this._l1.splice(i,0,t), !0);},setIndexAfter:function setIndexAfter(t,i){var n=this._l1[N](t);if(n<0){ throw new Error(Ot+t.id+St); }return n==i?i:n==i+1?i+1:(i<n&&(i+=1), this._l1.splice(n,1), this._l1[m](i,0,t), i);},setIndexBefore:function setIndexBefore(t,i){var n=this._l1[N](t);if(n<0){ throw new Error(Ot+t.id+St); }return n==i?i:n==i-1?i-1:(n<i&&--i, this._l1[m](n,1), this._l1[m](i,0,t), i);},indexOf:function indexOf(t){return this._l1[N](t);},getIndexById:function getIndexById(t){var i=this.getById(t);return i?this._l1.indexOf(i):-1;},add:function add(t,i){return MB(t)?this._hD(t,i):this._m9(t,i);},addFirst:function addFirst(t){return this.add(t,0);},_hD:function _hD(t,i){
var this$1 = this;
if(0==t[bt]){ return!1; }for(var n=!1,e=0<=i,s=0,h=(t=t._l1||t)[bt];s<h;s++){var r=t[s];null!==r&&r!==Y&&this$1._m9(r,i,!0)&&(n=!0, e&&i++);}return n;},_m9:function _m9(t,i,n){var e=t.id;return e!==Y&&!this.containsById(e)&&(VN(this._l1,t,i), this._n7[e]=t);},remove:function remove(t){return MB(t)?this._oUN(t):t.id?this._h9(t.id,t):this[At](t);},_oUN:function _oUN(t){
var this$1 = this;
if(0==t[bt]){ return!1; }for(var i=!1,n=0,e=(t=t._l1||t)[bt];n<e;n++){var s,h=t[n];null!==h&&h!==Y&&(h.id===Y&&(h=this$1._n7[h]), s=h.id, this$1._h9(s,h,!0)&&(i=!0));}return i;},_h9:function _h9(t,i,n){return!(t===Y||!this[Mt](t)||(null!==i&&i!==Y||(i=this.getById(t)), delete this._n7[t], KN(this._l1,i), 0));},removeById:function removeById(t){var i=this._n7[t];return!!i&&this._h9(t,i);},set:function set(t){if(!t||0==t){ return this[It](); }if(this.isEmpty()||!MB(t)){ return this[It](), this.add(t); }var i,n=[],e={},s=0;return jN(t,function(t){this._n7[t.id]?(e[t.id]=t, s++):n.push(t);},this), s!=this[bt]&&(i=[], this.forEach(function(t){e[t.id]||i.push(t);},this), i[bt]&&this[Ct](i)), n.length&&this._hD(n), !0;},clear:function clear(){return!this[Pt]()&&(this._l1[bt]=0, this._n7={}, !0);},toDatas:function toDatas(){return this._l1[vt](0);},isEmpty:function isEmpty(){return 0==this._l1.length;},valueOf:function valueOf(){return this._l1[bt];},clone:function clone(t){var i=new GB();return t?i.add(zN(this._l1)):i.add(this[Ft]()), i;}}, DB(GB[_],{datas:{get:function get(){return this._l1;}},random:{get:function get(){return this._l1&&this._l1[bt]?this._l1[IB(this._l1.length)]:null;}},length:{get:function get(){return this._l1?this._l1.length:0;}}});function $B(t,i,n,e){var s=t-n,h=i-e;return Math[Dt](s*s+h*h);}var WB=2*Math.PI,HB=.5*Math.PI,YB=function YB(t,i,n){t instanceof YB&&(i=t.y, n=(t=t.x)[Rt]), this.set(t,i,n);};YB[_]={x:0,y:0,rotate:Y,set:function set(t,i,n){this.x=t||0, this.y=i||0, this.rotate=n||0;},negate:function negate(){this.x=-this.x, this.y=-this.y;},offset:function offset(t,i){this.x+=t, this.y+=i;},equals:function equals(t){return this.x==t.x&&this.y==t.y;},distanceTo:function distanceTo(t){return $B(this.x,this.y,t.x,t.y);},toString:function toString(){return Nt+this.x+Bt+this.y+it;},clone:function clone(){return new YB(this.x,this.y);}}, Object[T](YB[_],kt,{get:function get(){return Math[Dt](this.x*this.x+this.y*this.y);}});function jB(t,i,n,e){t!==Y&&this._oH(t,i,n,e);}function XB(t,i,n){var e,s,h;0==t._oT?(e=-1, h=0, s=i):0==t._oW?(e=0, h=1, s=n):(e=-1/t._oT, s=(t._oT-e)*i+t._oU, h=1);var r=new jB();return r._oT=e, r._oU=s, r._oW=h, r._oN=i, r._oP=n, r._n0=Math[Ut](e,h), r._oWos=Math.cos(r._n0), r[Gt]=Math.sin(r._n0), r;}function zB(t,i,n,e,s){var h,r,a,o;if(e<i?h=-1:i<e&&(h=1), s<n?r=-1:n<s&&(r=1), !h){ return{x:i,y:o=r<0?t.y:t[$t]}; }if(!r){ return{x:a=h<0?t.x:t[Wt],y:n}; }var f=(n-s)/(i-e),c=n-f*i,u=h<0?i-t.x:i-t[Wt],_=r<0?n-t.y:n-t.bottom;return Math.abs(f)>=Math.abs(_/u)?a=((o=r<0?t.y:t[$t])-c)/f:o=f*(a=h<0?t.x:t[Wt])+c, {x:a,y:o};}function VB(t,i){this[jt]=t, this[Xt]=i;}function KB(t,i,n,e,s,h,r,a){return!(r<=0||a<=0||n<=0||e<=0)&&(a+=h, n+=t, e+=i, ((r+=s)<s||t<r)&&(a<h||i<a)&&(n<t||s<n)&&(e<i||h<e));}function QB(t,i,n,e,s,h){return t<=s&&s<=t+n&&i<=h&&h<=i+e;}function ZB(t,i,n,e,s,h,r,a,o){return o&&(t-=o, i-=o, n+=o+o, e+=o+o), t<=s&&i<=h&&s+r<=t+n&&h+a<=i+e;}jB.prototype={_oN:null,_oP:null,_oQ:null,_oR:null,_oT:null,_oU:null,_oW:1,_oH:function _oH(t,i,n,e){this._oN=t, this._oP=i, this._oQ=n, this._oR=e, t==n?(this._oT=-1, this._oW=0, this._oU=t):(this._oT=(i-e)/(t-n), this._oU=i-this._oT*t, this._oW=1), this._n0=Math[Ut](this._oR-this._oP,this._oQ-this._oN), this._oWos=Math.cos(this._n0), this[Gt]=Math.sin(this._n0);},_dM:function _dM(t){return 0==this._oW?Number.NaN:this._oT*t+this._oU;},_dN:function _dN(t){return 0==this._oT?Number.NaN:(t-this._oU)/this._oT;},_$e:function _$e(t){var i,n,e=t[0],s=t[2],h=t[4],r=t[1],a=t[3],o=t[5],f=this._oT,c=this._oU,u=0==this._oW?(i=Math[Dt]((-f*f*e-f*c)*h+f*f*s*s+2*f*c*s-f*c*e), n=-f*s+f*e, f*h-2*f*s+f*e):(i=Math.sqrt((f*e-r+c)*o+a*a+(-2*f*s-2*c)*a+(f*h+c)*r+(-f*f*e-f*c)*h+f*f*s*s+2*f*c*s-f*c*e), n=-a+r+f*s-f*e, o-2*a+r-f*h+2*f*s-f*e);if(0!=u){var _,d,l,b=(-i+n)/u;return 0<=(l=(i+n)/u)&&l<=1&&(_=mU(l,t)), 0<=b&&b<=1&&(d=mU(b,t)), _&&d?[_,d]:_||d||void 0;}},_3R:function _3R(t,i,n){if(this._oT==t._oT||0==this._oW&&0==t._oW){ return null; }var e,s,h,r,a,o=0==this._oW?this._oU:0==t._oW?t._oU:(t._oU-this._oU)/(this._oT-t._oT),f=0==this._oT?this._oU:0==t._oT?t._oU:this._oW?this._oT*o+this._oU:t._oT*o+t._oU;if(!i){ return{x:o,y:f}; }n?s=-(e=-i/2):i<(r=-(e=-$B(this._oN,this._oP,o,f))+(s=$B(this._oQ,this._oR,o,f)))?(e*=a=i/r, s*=a):h=(i-r)/2;var c=this._7L(o,f,e),u=this._7L(o,f,s);return h&&(c[Ht]=h, u._rest=h), [c,u];},_7L:function _7L(t,i,n){return 0==this._oW?{x:t,y:i+n}:{x:t+n*this[Yt],y:i+n*this._sin};}}, VB[_]={width:0,height:0,isEmpty:function isEmpty(){return this[jt]<=0||this.height<=0;},clone:function clone(){return new VB(this[jt],this[Xt]);},toString:function toString(){return zt+this[jt]+Bt+this[Xt]+it;}};var JB=function JB(t,i,n,e){t instanceof Object&&!wB(t)&&(i=t.y, n=t.width, e=t[Xt], t=t.x), n===Y&&(n=-1), e===Y&&(e=-1), this.x=t||0, this.y=i||0, this[jt]=n, this[Xt]=e;};function qB(t){return{x:t.x,y:t.y,width:t[jt],height:t[Xt]};}function tk(t,i,n,e){1==arguments.length?i=n=e=t:2==arguments[bt]&&(n=t, e=i), this.set(t,i,n,e);}JB[_]={x:0,y:0,width:-1,height:-1,setByRect:function setByRect(t){this.x=t.x||0, this.y=t.y||0, this.width=t[jt]||0, this[Xt]=t[Xt]||0;},set:function set(t,i,n,e){this.x=t||0, this.y=i||0, this[jt]=n||0, this.height=e||0;},offset:function offset(t,i){return this.x+=t, this.y+=i, this;},contains:function contains(t,i,n,e){if(1!=arguments[bt]){ return 2==arguments[bt]?t>=this.x&&t<=this.x+this.width&&i>=this.y&&i<=this.y+this.height:ZB(this.x,this.y,this[jt],this[Xt],t,i,n||0,e||0); }if(a==(typeof t==="undefined"?"undefined":_typeof(t))&&Vt in t&&Kt in t){ return this.contains(t.x,t.y,t[jt],t.height); }throw{message:Qt};},intersectsPoint:function intersectsPoint(t,i,n){return!(this[jt]<=0&&this[Xt]<=0)&&(n?this[Zt](t-n,i-n,2*n,2*n):t>=this.x&&t<=this.x+this[jt]&&i>=this.y&&i<=this.y+this.height);},intersectsRect:function intersectsRect(t,i,n,e){return KB(this.x,this.y,this[jt],this.height,t,i,n,e);},intersects:function intersects(t,i){return wB(t[jt])?this[Zt](t.x,t.y,t[jt],t[Xt]):this[Jt](t,i);},intersection:function intersection(t,i,n,e){var s=this.x,h=this.y,r=s,a=h,o=t,f=i;return s<t&&(s=t), h<i&&(h=i), (o+=n)<(r+=this[jt])&&(r=o), (f+=e)<(a+=this[Xt])&&(a=f), a-=h, (r-=s)<0||a<0?null:new JB(s,h,r,a);},addPoint:function addPoint(t){this.add(t.x,t.y);},add:function add(t,i){if(wB(t[jt])){ return this[qt](t.x,t.y,t.width,t[Xt]); }if(wB(t.x)&&(i=t.y, t=t.x), this[jt]<0||this[Xt]<0){ return this.x=t, this.y=i, void(this[jt]=this.height=0); }var n=this.x,e=this.y,s=this.width,h=this[Xt];s+=n, h+=e, t<n&&(n=t), i<e&&(e=i), s<t&&(s=t), h<i&&(h=i), h-=e, (s-=n)>Number[ti]&&(s=Number.MAX_VALUE), h>Number[ti]&&(h=Number[ti]), this.set(n,e,s,h);},addRect:function addRect(t,i,n,e){var s=this[jt],h=this.height;(s<0||h<0)&&this.set(t,i,n,e);var r,a,o=n,f=e;o<0||f<0||(s+=r=this.x, h+=a=this.y, t<r&&(r=t), i<a&&(a=i), s<(o+=t)&&(s=o), h<(f+=i)&&(h=f), h-=a, (s-=r)>Number.MAX_VALUE&&(s=Number.MAX_VALUE), h>Number[ti]&&(h=Number.MAX_VALUE), this.set(r,a,s,h));},shrink:function shrink(t,i,n,e){return wB(t)?e=1==arguments[bt]?i=n=t||0:2==arguments[bt]?(n=t||0, i||0):(t=t||0, i=i||0, n=n||0, e||0):(i=t[ii]||0, n=t[$t]||0, e=t.right||0, t=t.top||0), this.x+=i, this.y+=t, this[jt]-=i+e, this[Xt]-=t+n, this;},grow:function grow(t,i,n,e){return wB(t)?e=1==arguments[bt]?i=n=t||0:2==arguments[bt]?(n=t||0, i||0):(t=t||0, i=i||0, n=n||0, e||0):(i=t[ii]||0, n=t[$t]||0, e=t[Wt]||0, t=t.top||0), this.x-=i, this.y-=t, this.width+=i+e, this[Xt]+=t+n, this;},scale:function scale(t){return this.x*=t, this.y*=t, this[jt]*=t, this.height*=t, this;},isEmpty:function isEmpty(){return this[jt]<=0&&this[Xt]<=0;},toString:function toString(){return this.x+ni+this.y+ni+this[jt]+ni+this[Xt];},union:function union(t){var i=this.width,n=this[Xt];if(i<0||n<0){ return new JB(t.x,t.y,t.width,t.height); }var e=t[jt],s=t[Xt];if(e<0||s<0){ return new JB(this.x,this.y,this[jt],this[Xt]); }var h=this.x,r=this.y;i+=h, n+=r;var a=t.x,o=t.y;return a<h&&(h=a), o<r&&(r=o), i<(e+=a)&&(i=e), n<(s+=o)&&(n=s), n-=r, (i-=h)>Number[ti]&&(i=Number.MAX_VALUE), n>Number[ti]&&(n=Number.MAX_VALUE), new JB(h,r,i,n);},clear:function clear(){this.set(0,0,-1,-1);},equals:function equals(t){return t&&this.x==t.x&&this.y==t.y&&this[jt]==t.width&&this[Xt]==t.height;},clone:function clone(t,i){return new JB(this.x+(t||0),this.y+(i||0),this.width,this[Xt]);},toArray:function toArray(){return[this.x,this.y,this[jt],this.height];},getIntersectionPoint:function getIntersectionPoint(t,i,n,e){return zB(this,t,i,n,e);}}, ZN(JB,VB), JB[ei]=function(t,i){return t==i||t&&i&&t.x==i.x&&t.y==i.y&&t[jt]==i.width&&t[Xt]==i[Xt];}, DB(JB[_],{left:{get:function get(){return this.x;}},top:{get:function get(){return this.y;}},bottom:{get:function get(){return this.y+this.height;}},right:{get:function get(){return this.x+this[jt];}},cx:{get:function get(){return this.x+this[jt]/2;}},cy:{get:function get(){return this.y+this.height/2;}},center:{get:function get(){return new YB(this.cx,this.cy);}}}), JB[si]=KB, JB[hi]=function(t,i,n,e,s,h,r,a){var o=t,f=i,c=s,u=h;return t<s&&(t=s), i<h&&(i=h), (c+=r)<(o+=n)&&(o=c), (u+=a)<(f+=e)&&(f=u), f-=i, (o-=t)<0||f<0?null:new JB(t,i,o,f);}, JB[Jt]=QB, tk[_]={top:0,bottom:0,left:0,right:0,set:function set(t,i,n,e){this.top=t||0, this[ii]=i||0, this[$t]=n||0, this[Wt]=e||0;},clone:function clone(){return new tk(this.top,this[ii],this[$t],this[Wt]);},equals:function equals(t){return t&&this.top==t.top&&this[$t]==t[$t]&&this[ii]==t[ii]&&this[Wt]==t[Wt];},isEmpty:function isEmpty(){return 0===this.top&&0===this.bottom&&0===this[ii]&&0===this[Wt];}};var ik=function ik(t,i){this[ri]=t, this[ai]=i;};ik[_]={verticalPosition:!1,horizontalPosition:!1,toString:function toString(){return(this[ri]||'')+(this[ai]||'');}}, RB(ik[_],oi,{get:function get(){return(this[ri]||'')+(this.verticalPosition||'');}});var nk=fi,ek=ci,sk=ui,hk=_i;ik[di]=new ik(nk,sk), ik[li]=new ik(nk,bi), ik.LEFT_BOTTOM=new ik(nk,hk), ik[vi]=new ik(yi,sk), ik[gi]=new ik(yi,bi), ik[Ei]=new ik(yi,hk), ik[xi]=new ik(ek,sk), ik[mi]=new ik(ek,bi), ik.RIGHT_BOTTOM=new ik(ek,hk);var rk=[ik[di],ik[li],ik[pi],ik[vi],ik.CENTER_MIDDLE,ik.CENTER_BOTTOM,ik[xi],ik[mi],ik[Ti]];function ak(t,i){var n=ok(t,i.width,i[Xt]);return n.x+=i.x||0, n.y+=i.y||0, n;}function ok(t,i,n){if(!t){ return{x:0,y:0}; }if(LB(t)&&(t=ik.fromString(t)), t[ri]&&t.verticalPosition){var e,s,h=t[ri],r=t.verticalPosition;switch(h){case nk:e=0;break;case ek:e=i;break;default:e=i/2;}switch(r){case sk:s=0;break;case hk:s=n;break;default:s=n/2;}return{x:e,y:s};}if(t.x!==Y){ return t[wi]?{x:t.x*i,y:t.y*n}:{x:t.x,y:t.y}; }throw new Error("Position not be supported - "+t);}function fk(t,i,n,e,s){this.set(t,i,n,e), this[Mi]=s;}function ck(t,i,n,e){this[Si]=t, this.type=i, this[Ai]=n, this[P]=e;}RB(ik,z,{get:function get(){return rk[IB(rk.length)];}}), ik[Li]=function(t){for(var i in ik){var n=ik[i];if(n&&z!=i&&n instanceof ik&&n.toString()==t){ return n; }}throw new Error("Position not be supported - "+t);}, fk.prototype={radius:0,classify:function classify(t,i,n,e){return t<i?0:t<i+e?1:t<n-e?2:t<n?3:4;},intersectsRect:function intersectsRect(t,i,n,e){if(!1===qN(this,fk,Zt,arguments)){ return!1; }var s=this.x,h=this.y,r=s+this.width,a=h+this[Xt],o=2*radius,f=2*radius,c=Math.min(this[jt],Math.abs(o))/2,u=Math.min(this[Xt],Math.abs(f))/2,_=this.classify(t,s,r,c),d=this[Oi](t+n,s,r,c),l=this[Oi](i,h,a,u),b=this.classify(i+e,h,a,u);return 2==_||2==d||2==l||2==b||_<2&&2<d||l<2&&2<b||(t=1==d?t=t+n-(s+c):t-=r-c, i=1==b?i=i+e-(h+u):i-=a-u, (t/=c)*t+(i/=u)*i<=1);},intersectsPoint:function intersectsPoint(t,i){if(!1===qN(this,fk,Jt,arguments)){ return!1; }var n=this.x,e=this.y,s=n+this[jt],h=e+this[Xt];if(t<n||i<e||s<=t||h<=i){ return!1; }var r=2*radius,a=2*radius,o=Math.min(this[jt],Math.abs(r))/2,f=Math.min(this.height,Math.abs(a))/2;return t>=(n+=o)&&t<(n=s-o)||i>=(e+=f)&&i<(e=h-f)||(t=(t-n)/o)*t+(i=(i-e)/f)*i<=1;},clone:function clone(){return new fk(this.x,this.y,this[jt],this[Xt],this.radius);}}, ZN(fk,JB), ck[_]={source:null,type:null,kind:null,value:null,toString:function toString(){return Ii+this[Si]+Ci+this[Pi]+Fi+this[Ai];}};function uk(t,i,n,e,s){this[Si]=t, this[Ai]=i, this.oldValue=e, this[P]=n, this[Ri]=s;}function _k(t,i,n){this[Si]=t, this[ki]=t.parent, this[P]=i, this[$i]=n, this[ki]&&(this.oldIndex=this.oldValue[Wi](t));}function dk(t,i){this[Si]=t, this[P]=i;}function lk(t,i){this[Si]=t, this[P]=i;}function bk(t,i,n,e){this[Si]=i, this[ki]=n, this[P]=e, this.parent=t, this.child=i, this.oldIndex=n, this[$i]=e;}function vk(){}function yk(t,i){this[zi]=t, this[Vi]=i, t instanceof Function?this.onEvent=t:(this[p]=t[p], this.beforeEvent=t.beforeEvent), this.equals=function(t){return t&&this.listener==t[zi]&&this.scope==t[Vi];};}uk[_]={type:Di,propertyType:null,toString:function toString(){return Ii+this[Si]+Ci+this[Pi]+Ni+this.kind+Bi+this[ki]+Ui+this[P];}}, ZN(uk,ck), RB(uk[_],Gi,{get:function get(){return this[Ai];},set:function set(t){this.kind=t;}}), _k[_]={kind:Hi}, ZN(_k,uk), dk.prototype.kind=Yi, ZN(dk,uk), lk.prototype[Ai]=ji, ZN(lk,uk), bk[_].kind=Xi, ZN(bk,uk), vk.prototype={listener:null,beforeEvent:function beforeEvent(t){return null==this[zi]||!this[zi][g]||this.listener[g](t);},onEvent:function onEvent(t){null!=this[zi]&&this[zi][p]&&this[zi][p](t);}};var gk=function gk(){JN(this,gk,arguments), this.events={}, this.listeners=[];};function Ek(t,i,n,e,s){this.source=t, this[Pi]=qi, this[Ai]=i, this[tn]=n, this[nn]=e, this[en]=s;}function xk(){this.id=++sB, this._d3={};}function mk(){this._l1=[], this._n7={}, this._1G=new gk();}yk[_]={equals:function equals(t){return t&&this.listener==t.listener&&this.scope==t.scope;},destroy:function destroy(){delete this[Vi], delete this[zi];}}, gk.prototype={listeners:null,_oW2:function _oW2(){return this[Ki]&&0<this[Ki][bt];},_7M:function _7M(t,i){return t instanceof gk?t:new yk(t,i);},_oTJ:function _oTJ(t,i){if(t instanceof gk){ return this.listeners.indexOf(t); }for(var n=this[Ki],e=0,s=n.length;e<s;e++){var h=n[e];if(h[zi]==t&&h[Vi]==i){ return e; }}return-1;},contains:function contains(t,i){return 0<=this[Qi](t,i);},addListener:function addListener(t,i){return!this[Zi](t,i)&&(this[Ki][j](this._7M(t,i)), t);},removeListener:function removeListener(t,i,n){var e=this[Qi](t,i);0<=e&&this[Ki][m](e,1);},on:function on(t,i){return this[Ji](t,i);},un:function un(t,i,n){this.removeListener(t,i,n);},onEvent:function onEvent(i){if(!this[Ki]){ return!1; }jN(this[Ki],function(t){t[p]&&(t[Vi]?t.onEvent.call(t[Vi],i):t[p](i));},this);},beforeEvent:function beforeEvent(i){return!this[Ki]||jN(this[Ki],function(t){return!t.beforeEvent||(t.scope?t.beforeEvent[x](t.scope,i):t[g](i));},this);},_eS:function _eS(t){return!1!==this[g](t)&&(this[p](t), !0);},clear:function clear(){this.listeners=[];},destroy:function destroy(){this[It]();}}, ZN(gk,vk), Ek[_]={index:-1,oldIndex:-1,toString:function toString(){return Ii+this[Si]+Ci+this[Pi]+Fi+this.kind+sn+this[tn]+hn+this[nn]+rn+this[en];}}, ZN(Ek,ck), Ek[an]=on, Ek[fn]=B, Ek.KIND_CLEAR=It, Ek[cn]=un, xk[_]={_d3:null,id:null,get:function get(t){return this._d3[t];},set:function set(t,i){var n=this.get(t);if(n===i){ return!1; }var e=new uk(this,t,i,n);return e.propertyType=aU[_n], this[dn](t,i,e,this._d3);},_oUM:function _oUM(t,i,n,e){return!1!==this[g](n)&&(e=e||this._d3, i===Y?delete e[t]:e[t]=i, this[p](n), !0);},remove:function remove(t){this.set(t,null);},valueOf:function valueOf(){return this.id;},toString:function toString(){return this.id;},_f0:function _f0(t,i){if(i===Y&&(i=-1), this==t||t==this._l8){ return!1; }if(t&&this==t._l8&&!t._f0(null)){ return!1; }var n,e,s=new _k(this,t,i);if(!this[g](s)){ return!1; }var h,r,a,o,f=this._l8;return!(t&&(n=new dk(t,this), !t.beforeEvent(n))||null!=f&&(e=new lk(f,this), !f[g](e))||(null!=(this._l8=t)&&(r=i, (h=t)[y].add(this,r), h[ln](this,r)), null!=f&&(o=this, (a=f)._hF&&(a._hF[B](o), a[bn](o))), this.onEvent(s), null!=t&&t[p](n), null!=f&&f[p](e), this[vn](f,t), 0));},addChild:function addChild(t,i){var n=t._f0(this,i);return n&&this.onChildAdd(t,i), n;},removeChild:function removeChild(t){if(!this._hF||!this._hF[Zi](t)){ return!1; }var i=t._f0(null);return this[bn](t), i;},toChildren:function toChildren(){return this._hF?this._hF[Ft]():null;},clearChildren:function clearChildren(){var t;this._hF&&this._hF.length&&(jN(t=this[yn](),function(t){t._f0(null);},this), this[gn](t));},forEachChild:function forEachChild(t,i){return!!this.hasChildren()&&this._hF.forEach(t,i);},onChildAdd:function onChildAdd(t,i){},onChildRemove:function onChildRemove(t){},onChildrenClear:function onChildrenClear(t){},onParentChanged:function onParentChanged(t,i){},getChildIndex:function getChildIndex(t){return this._hF&&this._hF[bt]?this._hF[N](t):-1;},setChildIndex:function setChildIndex(t,i){if(!this._hF||!this._hF[bt]){ return!1; }var n=this._hF[N](t);if(n<0||n==i){ return!1; }var e=new bk(this,t,n,i);return!1!==this[g](e)&&(this._hF[B](t)&&this._hF.add(t,i), this[p](e), !0);},hasChildren:function hasChildren(){return this._hF&&0<this._hF.length;},getChildAt:function getChildAt(t){return null==this._hF?null:this._hF._l1[t];},isDescendantOf:function isDescendantOf(t){if(!t.hasChildren()){ return!1; }for(var i=this.parent;null!=i;){if(t==i){ return!0; }i=i[Hi];}return!1;},firePropertyChangeEvent:function firePropertyChangeEvent(t,i,n,e){this[p](new uk(this,t,i,n,e));}}, ZN(xk,vk), DB(xk[_],{childrenCount:{get:function get(){return this._hF?this._hF[bt]:0;}},children:{get:function get(){return this._hF||(this._hF=new GB()), this._hF;}},parent:{get:function get(){return this._l8;},set:function set(t){this._f0(t,-1);}},properties:{get:function get(){return this._d3;},set:function set(t){this._d3!=t&&(this._d3=t);}}}), mk[_]={beforeEvent:function beforeEvent(t){return null==this._1G||!this._1G[g]||this._1G.beforeEvent(t);},onEvent:function onEvent(t){this._1G instanceof Function?this._1G(t):null!=this._1G&&this._1G.onEvent&&this._1G[p](t);},_1G:null,setIndex:function setIndex(t,i){if(!this[Zi](t)){ throw new Error(Ot+t.getId()+St); }var n=this[N](t);if(n==i){ return!1; }var e=new Ek(this,Ek[cn],t,i,n);return!1!==this[g](e)&&(this._l1.splice(n,1), this._l1[m](i,0,t), this.onEvent(e), !0);},_hD:function _hD(t,i){
var this$1 = this;
if(0==t.length){ return!1; }var n=!1,e=0<=i,s=new Ek(this,Ek[an],t,i);if(!1===this[g](s)){ return!1; }for(var h=[],r=0,a=(t=t._l1||t)[bt];r<a;r++){var o=t[r];null!==o&&o!==Y&&this$1._m9(o,i,!0)&&(h[j](o), n=!0, e&&i++);}return s[tn]=h, this[p](s), n;},_m9:function _m9(t,i,n){if(!1===this[En](t)){ return!1; }if(n){ return qN(this,mk,xn,arguments); }var e=new Ek(this,Ek[an],t,i);return!1!==this[g](e)&&!!qN(this,mk,xn,arguments)&&(this._m8(t,e), t);},_m8:function _m8(t,i){this[p](i);},_oUN:function _oUN(t){
var this$1 = this;
if(0==t[bt]){ return!1; }var i=new Ek(this,Ek[fn],t);if(!1===this[g](i)){ return!1; }for(var n=[],e=!1,s=0,h=(t=t._l1||t)[bt];s<h;s++){var r,a=t[s];null!==a&&a!==Y&&(r=a.id||a, a.id===Y&&(a=null), this$1._h9(r,a,!0)&&(n.push(a), e=!0));}return i[tn]=n, this.onEvent(i), e;},_h9:function _h9(t,i,n){if(n){ return qN(this,mk,mn,arguments); }var e=new Ek(this,Ek[fn],i);return!1!==this[g](e)&&!!qN(this,mk,mn,arguments)&&(this.onEvent(e), !0);},clear:function clear(){if(this.isEmpty()){ return!1; }var t=new Ek(this,Ek[pn],this.toDatas());return!1!==this.beforeEvent(t)&&!!qN(this,mk,It)&&(this[p](t), !0);},accept:function accept(t){return!this[Tn]||!1!==this[Tn](t);}}, ZN(mk,GB), RB(mk[_],wn,{get:function get(){return this._1G;}});var pk=function pk(){JN(this,pk,arguments), this[Ln]=new gk(), this[Mn]=new Tk(this), this[Mn]._1G=this[Ln], this.dataChangeDispatcher=new gk(), this.dataChangeDispatcher[Ji]({beforeEvent:this[On],onEvent:this[Sn]},this), this[An]=new gk(), this[In]=new gk(), this.$roots=new GB();var s=this;this[Cn][Pn]=function(t,i){if(!s[Cn][Zi](t)){ throw new Error(Ot+t.id+St); }var n=s.$roots._l1[N](t);if(n==i){ return!1; }s[Cn]._l1[m](n,1), s[Cn]._l1[m](i,0,t), s[Fn]=!0;var e=new bk(s,t,n,i);return s._1Y(e), !0;};};pk[_]={selectionModel:null,selectionChangeDispatcher:null,dataChangeDispatcher:null,parentChangeDispatcher:null,roots:null,_m8:function _m8(t,i){t[zi]=this.dataChangeDispatcher, t[Hi]||this[Cn].add(t), this[p](i);},_h9:function _h9(t,i){if(qN(this,pk,mn,arguments)){var n;i instanceof q$?i.disconnect():i instanceof eW&&(n=i.getEdges(), this.remove(n));var e=i[Hi];return null==e?this[Cn][B](i):(e[Rn](i), e.__71=!0), i.hasChildren()&&this[B](i[yn]()), !(i[zi]=null);}return!1;},_5Z:function _5Z(t){var i=t[Si];this.contains(i)&&(null==i[Hi]?this.$roots.add(i):null==t[ki]&&this.$roots[B](i), this.parentChangeDispatcher[p](t));},_1Y:function _1Y(t){this[In][p](t);},beforeDataPropertyChange:function beforeDataPropertyChange(t){return!(t instanceof _k)||this.parentChangeDispatcher[g](t);},onDataPropertyChanged:function onDataPropertyChanged(t){if(t instanceof _k){ return this[Fn]=!0, t.source[Fn]=!0, void this._5Z(t); }t instanceof bk&&(this[Fn]=!0, t.source._dAIndexFlag=!0, this._1Y(t));},toRoots:function toRoots(){return this.$roots[Ft]();},_hA:function _hA(t){var i=t._l8,n=i?i._hF:this[Cn],e=n[N](t);if(e<0){ throw new Error(Dn+t+"' not exist in the box"); }return 0==e?i:n[Nn](e-1);},_hB:function _hB(t){var i=t._l8,n=i?i._hF:this.$roots,e=n[N](t);if(e<0){ throw new Error(Dn+t+"' not exist in the box"); }return e==n[bt]-1?i?this._hB(i):null:n.getByIndex(e+1);},forEachByDepthFirst:function forEachByDepthFirst(t,i,n){return!!this[Cn][bt]&&$N(this.$roots,t,i,n);},forEachByDepthFirstReverse:function forEachByDepthFirstReverse(t,i,n){return!!this[Cn].length&&WN(this[Cn],t,i,n);},forEachByBreadthFirst:function forEachByBreadthFirst(t,i){return!!this.$roots[bt]&&HN(this[Cn],t,i);},forEachByBreadthFirstReverse:function forEachByBreadthFirstReverse(t,i){return!!this[Cn][bt]&&function(t,i,n){for(var e=(t._l1||t)[vt](0);e[bt];){var s,h=e[e[bt]-1],e=e.splice(0,e[bt]-1);if(!1===i.call(n,h)){ return!1; }h[E]()&&(s=(s=h[y])._l1||s, e=e.concat(s));}return!0;}(this[Cn],t,i);},clear:function clear(){return!!qN(this,pk,It)&&(this[Cn][It](), this[Bn][It](), !0);}}, ZN(pk,mk), DB(pk[_],{selectionModel:{get:function get(){return this._selectionModel;}},roots:{get:function get(){return this[Cn];}}});var Tk=function Tk(t){JN(this,Tk), this.box=t, this[kn]={onEvent:function onEvent(t){Ek[fn]==t[Ai]?null!=t[tn]?this.remove(t[tn]):null!=t[Un]&&this[B](t[Un]):Ek.KIND_CLEAR==t.kind&&this[It]();}}, this.box[wn][Ji](this[kn],this);};function wk(t){return t.replace(/^-ms-/,Gn)[$n](/-([\da-z])/gi,function(t,i){return i[Wn]();});}Tk[_]={box:null,isSelected:function isSelected(t){return this[Mt](t.id||t);},select:function select(t){return this.add(t);},unselect:function unselect(t){return this[B](t);},reverseSelect:function reverseSelect(t){return this[Zi](t)?this.remove(t):this.add(t);},accept:function accept(t){return this.box.contains(t);}}, ZN(Tk,mk);var Lk=null,Mk=null,Ok=function(){if(!S[Hn]){ return function(t){return t;}; }var n=S[Hn](Yn)[jn],e={};return function(t){if(e[t]){ return e[t]; }var i=wk(t);return n[i]!==Y||Mk&&n[i=wk(Mk+i)]!==Y?e[t]=i:t;};}();function Sk(t,i){var n,e,s=t[jn];if(!s){ return!1; }for(n in i){i.hasOwnProperty(n)&&(e=Ok(n))&&(s[e]=i[n]);}return t;}function Ak(t,i,n){(i=Ok(i))&&(t.style[i]=n);}function Ik(t,i){if(!Lk){ return!1; }i&&!LB(i)&&(i=function(t){var i,n,e='';for(i in t){t.hasOwnProperty(i)&&(n=Ok(i))&&(e+=n.replace(/[A-Z]/g,function(t){return Xn+t[zn]();})[$n](/^ms-/,Vn)+Kn+t[i]+Qn);}return e?e[Zn](0,e.length-1):e;}(i)), Lk[Jn]?Lk[Jn](t+qn+i+te,0):Lk[ie]&&Lk[ie](t,i,0);}var Ck={};function Pk(t,i){var n=t[ne];return n?(i=i||t[ee]())[jt]/n:1;}function Fk(t,i,n,e,s){if(s){var h=function h(t){h[ue][x](h[Vi],t);};return h.scope=s, h[ue]=n, t[_e](i,h,e), h;}return t[_e](i,n,e), n;}!function(){if(S[se]){for(var t=S[se],i="Webkit Moz O ms Khtml".split(D),n=0;n<i.length;n++){if(t[jn][i[n]+he]!==Y){Mk=Xn+i[n][zn]()+Xn;break;}}var e,s=S[Hn](jn);for(e in u.createPopup||s[re](S[ae]('')), s.type=oe, s.id=fe, t[re](s), Lk=s.sheet, Ck){var h,r=Ck[e],a=e,o='';for(h in r){o+=Ok(h)+Kn+r[h]+ce;}Ik(a,o);}}}(), UB[de]=200, UB[le]=800, UB[be]=!0;var Rk,Dk,Nk=O in u,Bk=Nk&&/mobile|tablet|ip(ad|hone|od)|android/i[M](navigator[e]);function kk(t){return u[xe]&&t instanceof u[xe];}function Uk(){return UB.DOUBLE_CLICK_INTERVAL_TIME;}function AB(t){OB(t), SB(t);}function Gk(t){Vk[pe]&&Vk[pe]._3C(t);}function $k(t){Vk[pe]&&(Vk[pe]._5K(t), Wk(null));}Bk?Dk="touchstart,touchmove,touchend,touchcancel":(Rk=ve in u?"mousewheel":ye, Dk=ge+Rk, Nk&&(Dk+=Ee)), Dk=Dk[F](/[\s,]+/);function Wk(t){Vk._oWurrentItem!=t&&(Vk[pe]&&(Vk._oWurrentItem[Te]=!1), Vk[pe]=t);}var OB=function OB(t){t[W]?t[W]():t[me]=!1;},SB=function SB(t){t.stopPropagation&&t[H](), t.cancelBubble=!0;};function Hk(t,i){var n,e=t.touches?(n=t.cx, t.cy):(n=t[we], t[Le]),s=Pk(i);return s&&1!==s&&(n/=s, e/=s), {timeStamp:t.timeStamp,x:n,y:e};}function Yk(t,i,n){this._nB=t, this[Me]=n, this._handler=i, this[Oe]=new Qk(), this._jA();}Yk[_]={_jA:function _jA(){var i,n;this[Se]||(this[Se]=function(t){this._kP(t);}.bind(this), i=this._nB, n=this.__kP, Dk[Ae](function(t){i[_e](t,n,!1);}), EB||Vk[Ie]||(Vk._oUQ=!0, u[_e](Ce,Gk,!0), u[_e](Pe,$k,!0)));},_eK:function _eK(){var i,n;this[Se]&&(i=this._nB, n=this[Se], Dk.forEach(function(t){i[Fe](t,n,!1);}));},_kP:function _kP(t){var i=(t=this._gR(t))[Pi];!1===this._oUD(t,i)&&this._jB(t,Re+i);},_1E:function _1E(){this[De]&&(clearTimeout(this[De]), this.__longPressTimer=null);},_5I:function _5I(t){this[Ne]||(this.__onLongPressFunction=function(){this._mFEvent&&(this.__oWancelClick=!0, this[Be][ke]?this._jB(this[Be],Ue):this._jB(this._mFEvent,Ge));}[$e](this)), this._1E(), this.__longPressTimer=setTimeout(this[Ne],UB[le]);},_6Y:function _6Y(t){for(var i,n=0,e=0,s=t[We][bt],h=0;h<s;){var r,a,o,f=t[We][h++],c=f[we],u=f[Le];2==h&&(r=i[0]-c, a=i[1]-u, o=Math[Dt](r*r+a*a)), i=[c,u], n+=c, e+=u;}t.cx=n/s, t.cy=e/s, t.center={x:t.cx,y:t.cy,clientX:t.cx,clientY:t.cy}, t[kt]=o;},_3A:function _3A(t){this[Oe][It](), this[He]=Hk(t,this._nB);},_4D:function _4D(t,i){switch(i){case"touchstart":SB(t), this._6Y(t), this._3A(t);var n=t[We][bt];this[Be]||(this._mFEvent=t, this._jD(t), this.__oWancelClick=!1, this._5I(t)), 1==n&&(this.__mFMulTouchEvent=null), 2<=n&&!this[Ye]&&(this[Ye]={cx:t.cx,cy:t.cy,distance:t.distance});break;case"touchmove":var e;AB(t), this._6Y(t), 2<=(n=t[We][bt])&&this.__mFMulTouchEvent&&(e=this[Ye][kt], t[je]=t.distance/e, this.__mFMulTouchEvent[Xe]?t[ze]=t[je]/this[Ye][Xe]:t[ze]=t[je], this[Ye][Xe]=t[je], this[Ve]||(this[Ve]=!0, this._jB(t,Ke))), this.__dragging||(this[Te]=!0, this._eO(t)), this._kQ(t), this[Ve]&&this._jB(t,Qe);break;case"touchend":AB(t), (n=t.touches.length)&&(this._6Y(t), this._3A(t)), n<=1&&(this[Ve]&&(this.__pinching=!1, this._jB(t,Ze)), this.__mFMulTouchEvent=null), 0==n&&(this[Te]?(this._jF(t), this[Te]=!1):t[Je]-this[Be].timeStamp<.8*Uk()&&this._gS(this[Be]), this._eM(t));break;case"touchcancel":this.__dragging=!1, this[Ve]=!1, this[Ye]=null;}return!1;},_oUD:function _oUD(t,i){if(kk(t)){ return this._4D(t,i); }if(qe==i){ SB(t), Wk(this), this._oTB=Hk(t,this._nB), this[Be]||(this[Be]=t, this._jD(t)), this[ts]=!1, this._5I(t); }else if(Pe==i){ Wk(), this._eM(t); }else if(is==i){if(this[ts]){ return!0; }if(this._9N()){ return this._gS(t), !0; }}else if(ns==i){if(this._9N()){ return!0; }}else{if(es==i){ return this._jB(t,ss), this._mFEvent&&((e=t).defaultPrevented||!1===e[me])&&Wk(this), !0; }if(i==Rk){var n=t[hs];if(n!==Y?n/=120:n=-t[rs], !n){ return; }return t.delta=n, this._jB(t,ve);}}var e;return!1;},_jB:function _jB(t,i){if(this[as]){var n=this[as];if(i=i||t[Pi], n instanceof Function){ return n(t,i); }if(!(n.accept instanceof Function&&!1===n[En](i,t))){ return n[os]instanceof Function&&n[os](i,t,this[Me]||this._nB), n[i]instanceof Function?n[i][x](n,t,this._scope||this._nB):void 0; }}},_gR:function _gR(t){return t;},_5K:function _5K(t){this.__dragging&&(AB(t), this[Te]=!1, t=this._gR(t), this._jF(t), this._eM(t), this._jB(t,fs));},_3B:4,_3C:function _3C(t){if(this._mFEvent){if(AB(t), !this.__dragging){var i=this._mFEvent[cs]-t[cs],n=this[Be].screenY-t[us];if(i*i+n*n<this._3B){ return; }this.__dragging=!0, this._eO(t);}this._kQ(this._gR(t));}},_9N:function _9N(){return UB[be];},_gS:function _gS(t){var i;this.__oWancelClick||(i=Uk(), this[_s]?this[ds]||(clearTimeout(this[_s]), this.__oWlickTimer=null, this._jB(t,ls), this[ds]=!0):(this[ds]=!1, this[_s]=setTimeout(function(t,i){this.__oWlickTimer=null, this[ds]||this._jB(t,bs);}.bind(this,t,i),i)));},_jD:function _jD(t){t[ke]?this._jB(t,vs):this._jB(t,ys);},_eM:function _eM(t){this[Be]&&(this._1E(), t.button?this._jB(t,gs):this._jB(t,Es), this._mFEvent=null, this._oTB=null);},_70:function _70(t){var i=this[He];this[He]=Hk(t,this._nB), this._dragPoints.add(i,this[He],t);},_eO:function _eO(t){this[ts]=!0, this._1E(), this[Be].button?this._jB(this._mFEvent,xs):this._jB(this[Be],ms);},_kQ:function _kQ(t){this._70(t), this[Be][ke]?this._jB(t,ps):this._jB(t,Ts);},_jF:function _jF(t){var i;t.timeStamp-this._oTB.timeStamp<100&&(i=this[Oe].getCurrentSpeed())&&(t.vx=i.x, t.vy=i.y), this[Be][ke]?this._jB(t,ws):this._jB(t,Ls), this[Oe][It]();},_jG:function _jG(t){this[Ms]();},_oUE:function _oUE(){Vk._oWurrentItem==this&&delete Vk._oWurrentItem, this._1E(), delete this[He], this[Be]&&(delete this[Be][Os], delete this[Be][Ss], delete this[Be]);}};var jk,Xk,zk,Vk=nB(function(t){this._mC=t, Yk[b](this,[t[As],null,t]);},{super:Yk,_k1:function _k1(t){return this._mC[Is](t);},_mE:function _mE(t){return this._mC[Cs](t);},_gR:function _gR(t){return(t instanceof MouseEvent||u[xe]&&t instanceof u[xe])&&(t[Os]=this._k1[$e](this,t), t.getUI=this._mE.bind(this,t)), t;},_4W:function _4W(i){this._4X(function(t){t[Ps]instanceof Function&&t[Ps](i,this._mC);});},_7N:function _7N(){this._4X(function(t){t[Fs]instanceof Function&&t[Fs](this._mC);});},_jG:function _jG(t){this._1M&&this._2A(this._1M,t), this._$m&&this._2A(this._$m,t), this[Ms]();},_mC:null,_1M:null,_$m:null,_7O:function _7O(t){if(this._1M==t){ return!1; }this._1M&&this._1M[bt]&&this._2A(this._1M), this._1M=t;},_9:function _9(t){this._$m||(this._$m=[]), this._$m[j](t);},_6:function _6(t){this._$m&&0!=this._$m[bt]&&KN(this._$m,t);},_jB:function _jB(t,i,n){this._mC[i]instanceof Function&&this._mC[i][x](this._mC,t,n), this._1M&&this._hS(t,i,this._1M,n), this._$m&&this._hS(t,i,this._$m,n);},_4X:function _4X(t){this._1M&&jN(this._1M,t,this), this._$m&&jN(this._$m,t,this);},_hS:function _hS(t,i,n,e){
var this$1 = this;
if(MB(n)){ for(var s=0;s<n[bt];s++){var h=n[s];this$1._oTL(t,i,h,e);} }else { this[Rs](t,i,n,e); }},_oTL:function _oTL(t,i,n,e){var s;n[En]instanceof Function&&!1===n[En](i,t,this._mC,e)||(n.onevent instanceof Function&&n[os](i,t,this._mC,e), (s=n[i])instanceof Function&&s[x](n,t,this._mC,e));},_2Q:function _2Q(t){t[Ds]instanceof Function&&t[Ds][x](t,this._mC);},_2A:function _2A(t,i){
var this$1 = this;
if(MB(t)){ for(var n=0;n<t.length;n++){var e=t[n];e&&this$1._2Q(e,i);} }else { this._2Q(t,i); }}});function Kk(t){return bB&&t[Ns]||!bB&&t[Bs];}function Qk(){this.points=[];}function Zk(t){this._lJ=t;}Qk[_]={limitCount:10,points:null,add:function add(t,i,n){0==this[ks].length&&(this[Us]=t.x, this._mFY=t.y);var e=i[Je]-t.timeStamp||1;n.interval=e;var s=i.x-t.x,h=i.y-t.y;n.dx=s, n.dy=h, n[Gs]=this[Us], n[$s]=this[Ws], n.totalDeltaX=i.x-this._mFX, n[Hs]=i.y-this[Ws], this.points.splice(0,0,{interval:e,dx:s,dy:h}), this[ks][bt]>this[Ys]&&this[ks].pop();},getCurrentSpeed:function getCurrentSpeed(){
var this$1 = this;
if(!this[ks].length){ return null; }for(var t=0,i=0,n=0,e=0,s=this[ks].length;e<s;e++){var h=this$1[ks][e],r=h.interval;if(150<r){t=0;break;}if(t+=r, i+=h.dx, n+=h.dy, 300<t){ break; }}return 0==t||0==i&&0==n?null:{x:i/t,y:n/t};},clear:function clear(){this[ks]=[];}}, zk=cB?(jk=js, Xk=Xs, zs):uB?(jk=Vs, Xk=Ks, Qs):(Xk=jk=Zs, Js);var Jk=Math.PI,qk=Math.pow,tU=Math.sin,iU=1.70158,nU={swing:function swing(t){return-Math.cos(t*Jk)/2+.5;},easeNone:function easeNone(t){return t;},easeIn:function easeIn(t){return t*t;},easeOut:function easeOut(t){return(2-t)*t;},easeBoth:function easeBoth(t){return(t*=2)<1?.5*t*t:.5*(1- --t*(t-2));},easeInStrong:function easeInStrong(t){return t*t*t*t;},easeOutStrong:function easeOutStrong(t){return 1- --t*t*t*t;},easeBothStrong:function easeBothStrong(t){return(t*=2)<1?.5*t*t*t*t:.5*(2-(t-=2)*t*t*t);},elasticIn:function elasticIn(t){return 0===t||1===t?t:-(qk(2,10*--t)*tU(2*Jk*(t-.075)/.3));},elasticOut:function elasticOut(t){return 0===t||1===t?t:qk(2,-10*t)*tU(2*Jk*(t-.075)/.3)+1;},elasticBoth:function elasticBoth(t){return 0===t||2==(t*=2)?t:t<1?qk(2,10*--t)*tU(2*Jk*(t-.1125)/.45)*-.5:qk(2,-10*--t)*tU(2*Jk*(t-.1125)/.45)*.5+1;},backIn:function backIn(t){return 1===t&&(t-=.001), t*t*((iU+1)*t-iU);},backOut:function backOut(t){return--t*t*((iU+1)*t+iU)+1;},backBoth:function backBoth(t){return(t*=2)<1?t*t*((1+(iU*=1.525))*t-iU)*.5:.5*((t-=2)*t*((1+(iU*=1.525))*t+iU)+2);},bounceIn:function bounceIn(t){return 1-nU.bounceOut(1-t);},bounceOut:function bounceOut(t){var i=7.5625;return t<1/2.75?i*t*t:t<2/2.75?i*(t-=1.5/2.75)*t+.75:t<2.5/2.75?i*(t-=2.25/2.75)*t+.9375:i*(t-=2.625/2.75)*t+.984375;},bounceBoth:function bounceBoth(t){return t<.5?.5*nU.bounceIn(2*t):.5*nU.bounceOut(2*t-1)+.5;}};function eU(t,i,n,e){this[nh]=t, this[Me]=i||this, this._3T=e, n&&0<n&&(this._k3=n);}Zk[_]={_lJ:null,_95:function _95(){this[qs]instanceof Function&&(this._oWallback(), this._oWallback=null);},_mF:function _mF(t){var e=Date.now();this._nK(), this[qs]=t, this[th]=requestAnimationFrame(function t(){var i=Date.now(),n=i-e;!n||this._lJ&&!1!==this._lJ(n)?(e=i, this._requestID=requestAnimationFrame(t[$e](this))):this._nK();}[$e](this));},_7P:function _7P(){},_nK:function _nK(){if(!this[th]){ return!1; }this._7P(), this._95(), u[ih](this[th]), delete this[th];},_fC:function _fC(){return null!=this._requestID;}}, eU[_]={_k3:1e3,_3T:null,_fE:0,_nK:function _nK(){return this._fE=0, this._dO=0, qN(this,eU,eh);},_dO:0,_lJ:function _lJ(t){if(this._fE+=t, this._fE>=this._k3){ return this[nh][x](this[Me],1,(1-this._dO)*this._k3,t,this._k3), !1; }var i=this._fE/this._k3;if(this._3T&&(i=this._3T(i)), !1===this._onStep[x](this[Me],i,(i-this._dO)*this._k3,t,this._k3)){ return!1; }this._dO=i;}}, ZN(eU,Zk);function sU(t){kB(t);}function hU(i,n,e,t,s){!1!==e&&!1!==t||(s=!1);try{var h,r=new XMLHttpRequest(),a=encodeURI(i);!1!==s&&(h=0<a[N](sh)?"&":sh, a+=h+hh+Date.now()), r[rh](ah,a), r[oh]=function(t){4==r[fh]&&(r[ch]&&200!=r[ch]?(e||sU)(Ot+i+uh):n&&n(r));}, r[_h](t);}catch(t){(e||sU)(Ot+i+uh,t);}}var rU={extend:ZN,doSuperConstructor:JN,doSuper:qN,createFunction:function createFunction(t,i){return i[$e](t);},setClass:mB,appendClass:pB,removeClass:TB,forEach:jN,forEachReverse:XN,isNumber:wB,isString:LB,isBoolean:function isBoolean(t){return t!==Y&&(t instanceof Boolean||lh==(typeof t==="undefined"?"undefined":_typeof(t)));},isArray:MB,eventPreventDefault:OB,eventStopPropagation:SB,stopEvent:AB,callLater:function callLater(t,i,n){return i instanceof Object?t=t.bind(i):i&&!n&&(n=parseInt(i)), i&&!n&&(n=parseInt(i)), n?setTimeout(t,n):setTimeout(t);},nextFrame:function nextFrame(t,i){return i&&(t=t[$e](i)), u[rt](t);},forEachChild:GN,forEachByDepthFirst:$N,forEachByDepthFirstReverse:WN,forEachByBreadthFirst:HN,randomInt:IB,randomBool:function randomBool(){return .5<=Math.random();},randomColor:function randomColor(t){if(t&&0<t&&t<1){var i=Math[K](16777215*Math.random());return J+(i>>16&255)+q+(i>>8&255)+q+(255&i)+q+t[tt](2)+it;}return FB(Math[K](16777215*Math.random()));},addEventListener:Fk,getFirstElementChildByTagName:function getFirstElementChildByTagName(t,i){i=i.toUpperCase();for(var n=aB?t.firstChild:t.firstElementChild;n&&(1!=n[bh]||n[vh]&&n[vh].toUpperCase()!=i);){n=aB?n[yh]:n.nextElementSibling;}return n&&1==n[bh]&&n[vh]&&n[vh].toUpperCase()==i?n:null;}};rU.isTouchSupport=EB, rU.isIOS=vB, rU[Jt]=QB, rU[gh]=ZB, rU[Eh]=JB, rU[xh]=VB, rU[mh]=YB, rU.Insets=tk, rU.Event=ck, rU[ph]=uk, rU[Th]=Ek, rU[wh]=vk, rU[Lh]=gk, rU[Mh]=ik, rU.Data=xk, rU[Oh]=Tk, rU.DataModel=pk, rU[Sh]={onEvent:function onEvent(t){},beforeEvent:function beforeEvent(t){}}, rU[Ah]=hU, rU[Ih]=function(n,e,s,t,i){hU(n,function(t){if(e){var i=t[Ch];if(!i){ return void(s||sU)(Ot+n+Ph); }e(i);}},s,t,i);}, rU.loadJSON=function(e,s,h,t,i){hU(e,function(t){if(s){var i,n=t[Fh];if(!n){ return(h||sU)(Ot+e+Rh), i=new Error(Ot+e+Rh), s(n,i); }try{n=JSON[Dh](n);}catch(t){(h||sU)(t), i=t;}s(n,i);}},h,t,i);}, rU[Nh]=Kk, rU[Bh]=$B, rU[kh]=GB, rU[Uh]=Yk, rU.alert=function(t){alert(t);}, rU.prompt=function(t,i,n,e){var s=prompt(t,i);return s!=i&&n?n.call(e,s):s;}, rU.confirm=function(t,i,n){var e=confirm(t);return e&&i?i[x](n):e;}, rU[Gh]=Ik;var aU={IMAGE_ADJUST_FLIP:$h,IMAGE_ADJUST_MIRROR:Wh,SELECTION_TYPE_BORDER_RECT:Hh,SELECTION_TYPE_BORDER:Yh,SELECTION_TYPE_SHADOW:jh,PROPERTY_TYPE_ACCESSOR:0,PROPERTY_TYPE_STYLE:1,PROPERTY_TYPE_CLIENT:2,EDGE_TYPE_DEFAULT:null,EDGE_TYPE_ELBOW:Xh,EDGE_TYPE_ELBOW_HORIZONTAL:zh,EDGE_TYPE_ELBOW_VERTICAL:Vh,EDGE_TYPE_ORTHOGONAL:Kh,EDGE_TYPE_ORTHOGONAL_HORIZONTAL:Qh,EDGE_TYPE_ORTHOGONAL_VERTICAL:Zh,EDGE_TYPE_HORIZONTAL_VERTICAL:Jh,EDGE_TYPE_VERTICAL_HORIZONTAL:qh,EDGE_TYPE_EXTEND_TOP:tr,EDGE_TYPE_EXTEND_LEFT:ir,EDGE_TYPE_EXTEND_BOTTOM:nr,EDGE_TYPE_EXTEND_RIGHT:er,EDGE_TYPE_ZIGZAG:sr,EDGE_CORNER_NONE:hr,EDGE_CORNER_ROUND:rr,EDGE_CORNER_BEVEL:ar,GROUP_TYPE_RECT:or,GROUP_TYPE_CIRCLE:fr,GROUP_TYPE_ELLIPSE:cr,SHAPE_CIRCLE:ur,SHAPE_RECT:or,SHAPE_ROUNDRECT:_r,SHAPE_STAR:dr,SHAPE_TRIANGLE:lr,SHAPE_HEXAGON:br,SHAPE_PENTAGON:vr,SHAPE_TRAPEZIUM:yr,SHAPE_RHOMBUS:gr,SHAPE_PARALLELOGRAM:Er,SHAPE_HEART:xr,SHAPE_DIAMOND:mr,SHAPE_CROSS:pr,SHAPE_ARROW_STANDARD:Tr,SHAPE_ARROW_1:wr,SHAPE_ARROW_2:Lr,SHAPE_ARROW_3:Mr,SHAPE_ARROW_4:Or,SHAPE_ARROW_5:Sr,SHAPE_ARROW_6:Ar,SHAPE_ARROW_7:Ir,SHAPE_ARROW_8:Cr,SHAPE_ARROW_OPEN:Pr};function KB(t,i,n,e,s,h,r,a){return!(r<=0||a<=0||n<=0||e<=0)&&(a+=h, n+=t, e+=i, ((r+=s)<s||t<r)&&(a<h||i<a)&&(n<t||s<n)&&(e<i||h<e));}function ZB(t,i,n,e,s,h,r,a){return t<=s&&i<=h&&s+r<=t+n&&h+a<=i+e;}function oU(t,i,n){return t instanceof Object&&t.x?cU(t,i,0,0):fU(t,i,n,0,0);}function fU(t,i,n,e,s){var h=Math.sin(n),r=Math.cos(n),a=t-e,o=i-s;return new YB(t=a*r-o*h+e,i=a*h+o*r+s,n);}function cU(t,i,n,e){n=n||0, e=e||0;var s=Math.sin(i),h=Math.cos(i),r=t.x-n,a=t.y-e;return t.x=r*h-a*s+n, t.y=r*s+a*h+e, t;}function uU(t,i,n){return _U(t,i,n,0,0);}function _U(t,i,n,e,s){var h=fU(t.x,t.y,i,e,s),r=fU(t.x+t[jt],t.y,i,e,s),a=fU(t.x+t[jt],t.y+t[Xt],i,e,s),o=fU(t.x,t.y+t[Xt],i,e,s);return n?n[It]():n=new JB(), n[Fr](h), n[Fr](r), n[Fr](a), n[Fr](o), n;}aU[Rr]=Dr, aU[Nr]=rr, aU[Br]=kr, aU[Ur]=ar, aU[Gr]=rr, aU[$r]=Wr, aU[Hr]=Yr, aU[jr]=Xr, aU[zr]=Xh, UB[Vr]=aU.SELECTION_TYPE_SHADOW, UB[Kr]=Bk?8:3, UB[Qr]=2, UB.SELECTION_SHADOW_BLUR=7, UB[Zr]=FB(3422561023), UB.SELECTION_TYPE=aU[Jr], UB[qr]=10, UB[ta]=10, UB[ia]=10, UB[na]=200, UB[ea]=1.2;var dU,lU=u[sa]||1;function bU(t,i){var n=this[ha]||1;this[jn].width=t+ra, this[jn][Xt]=i+ra, this.width=t*n, this[Xt]=i*n;}function vU(t,i,n){var e=S[Hn](aa);if(e.g=e[oa](fa), !0!==t&&!n){ return t&&i&&(e[jt]=t, e.height=i), e; }var s,h=e.g;return h[ha]=e[ha]=(s=h.webkitBackingStorePixelRatio||h[ca]||h.msBackingStorePixelRatio||h[ua]||h[_a]||1, lU/s), e[da]=bU, h._mR=function(){this[aa][jt]=this[aa].width;}, t&&i&&e[da](t,i), e;}function yU(t,i){return dU=dU||vU(), t&&i&&(dU[jt]=t, dU[Xt]=i), dU.g;}lU<1&&(lU=1), rU.createCanvas=vU;var gU=dB&&!EB;function EU(t,i,n){return(n||UB.FONT_STYLE)+D+(i||UB[Tt])+wt+(t||UB[Lt]);}function xU(t,i,n,e,s){var h;try{h=t[la](i,n,e,s);}catch(t){}return h;}function mU(t,i,n){var e=1-t,s=e*e*i[0]+2*e*t*i[2]+t*t*i[4],h=e*e*i[1]+2*e*t*i[3]+t*t*i[5];if(n){var r=(i[0]+i[4]-2*i[2])*t+i[2]-i[0],a=(i[1]+i[5]-2*i[3])*t+i[3]-i[1];return{x:s,y:h,rotate:Math.atan2(a,r)};}return{t:t,x:s,y:h};}function pU(t,i,n){var e=t-2*i+n;return 0!=e?(t-i)/e:-1;}function TU(t,i){return Math.abs(t-i)<1e-7;}function wU(t,i){return TU(t[0],i[0])&&TU(t[1],i[1]);}function LU(t,i,n){var e,s=1-t,h=i[0],r=i[2],a=i[4],o=i[6],f=h*s*s*s+3*r*t*s*s+3*a*t*t*s+o*t*t*t;n&&(e=3*t*t*o+(6*t-9*t*t)*a+(9*t*t-12*t+3)*r+(-3*t*t+6*t-3)*h);var c=(h=i[1])*s*s*s+3*(r=i[3])*t*s*s+3*(a=i[5])*t*t*s+(o=i[7])*t*t*t;if(n){var u=3*t*t*o+(6*t-9*t*t)*a+(9*t*t-12*t+3)*r+(-3*t*t+6*t-3)*h;return{x:f,y:c,rotate:Math.atan2(u,e)};}return{x:f,y:c};}function MU(t,i,n){return OU(i,n,t.cx,t.cy)<=t._squareR+PU;}var OU=function OU(t,i,n,e){var s=t-n,h=i-e;return s*s+h*h;};function SU(t,i,n,e){return n=n||$B(t.x,t.y,i.x,i.y), new AU((t.x+i.x)/2,(t.y+i.y)/2,n/2,t,i,null,e);}function AU(t,i,n,e,s,h,r){this.cx=t, this.cy=i, this.r=n, this._squareR=n*n, this.p1=e, this.p2=s, this.p3=h, this[ba]=r;}function IU(t,i,n,e){this.cx=t, this.cy=i, this[jt]=n, this[Xt]=e;}function CU(t){var i=t[0],n=t[1],e=t[2];return function t(i,n,e,s,h){for(var r,a,o,f,c=i.length,u=h[va],_=0;_<c;_++){(r=i[_])!=n&&r!=e&&r!=s&&u<(o=OU(h.cx,h.cy,r.x,r.y))-PU&&(u=o, a=r);}if(!a){ return h; }var d=AU._lPCircle(a,n,e),l=AU._lPCircle(a,n,s),b=AU._lPCircle(a,s,e);return MU(d,s.x,s.y)&&(f=d), MU(l,e.x,e.y)&&(!f||f.r>l.r)&&(f=l), MU(b,n.x,n.y)&&(!f||f.r>b.r)&&(f=b), t(i,n=f.p1,e=f.p2,s=f.p3||f[ba],f);}(t,i,n,e,AU[ya](i,n,e));}AU.prototype={equals:function equals(t){return this.cx==t.cx&&this.cy==t.cy&&this.r==t.r;}}, AU[ya]=function(t,i,n){if(!n){ return SU(t,i); }var e,s=OU(t.x,t.y,i.x,i.y),h=OU(t.x,t.y,n.x,n.y),r=OU(n.x,n.y,i.x,i.y);if(h+r<=s+PU){ return SU(t,i,0,n); }if(s+r<=h+PU){ return SU(t,n,0,i); }if(s+h<=r+PU){ return SU(i,n,0,t); }Math.abs(n.y-i.y)<1e-4&&(e=t, t=i, i=e), e=n.x*(t.y-i.y)+t.x*(i.y-n.y)+i.x*(-t.y+n.y);var a=(n.x*n.x*(t.y-i.y)+(t.x*t.x+(t.y-i.y)*(t.y-n.y))*(i.y-n.y)+i.x*i.x*(-t.y+n.y))/(2*e),o=(i.y+n.y)/2-(n.x-i.x)/(n.y-i.y)*(a-(i.x+n.x)/2);return new AU(a,o,$B(a,o,t.x,t.y),t,i,n);};var PU=.01;function FU(t){return(t=DU(t))>Math.PI/2&&t<3*Math.PI/2;}function RU(t,i,n,e){var s=function(t,i){if(!this._lK||this._hT[bt]<2){if(this._hT.length){var n=!1!==i?this._hT[0][ga]:this._hT[this._hT.length-1][Ea];return t&&(n.x+=t), n;}return null;}var e=this._hT;!1===i&&(t+=this._lK);var s,h=e[0];if(t<=0){ return VW(h[ks][0],h[ks][1],e[1][ks][0],e[1].points[1],t,0); }if(t>=this._lK){var r,a=(h=e[e[bt]-1]).points,o=a[(d=a[bt])-2],f=a[d-1],c=4<=d?(r=a[d-4], a[d-3]):(r=(l=(h=e[e.length-2]).lastPoint).x, l.y);return VW(o,f,o+o-r,f+f-c,t-this._lK,0);}for(var u=0,_=1,d=e[bt];_<d;_++){if((s=e[_])._lK){if(!(u+s._lK<t)){var l=h[Ea];if(s[Pi]==dG){ var b=s.points,v=function(t,i,n,e,s,h,r,a){if(t<=i._l1){ return VW(n,e,s,h,t,t); }if(t>=i._lK){ return t-=i._lK, VW(i[xa],i[ma],r,a,t,t); }if(t-=i._l1, i._o){var o=t/i._r;i._CCW&&(o=-o);var f=fU(i[pa],i[Ta],o,i._o.x,i._o.y);return f.rotate+=i._oT1||0, f.rotate+=Math.PI, f;}return VW(i[pa],i[Ta],i[xa],i[ma],t,t);}(t-u,s,l.x,l.y,b[0],b[1],b[2],b[3],s._r); }else{if(!s._lf){ return VW(l.x,l.y,s.points[0],s[ks][1],t-u,0); }var y=function(s,h){var r=1/(h=h||s(1)),a=.5*r,o=Math.min(1,h/100);return function(t){if(t<=0){ return 0; }if(h<=t){ return 1; }for(var i=t*r,n=0;n++<10;){var e=t-s(i);if(Math.abs(e)<=o){ return i; }i+=e*a;}return i;};}(s._lf,s._lK)(t-u),b=s.points;(v=(s.type==_G&&6==b[bt]?LU:mU)(y,[l.x,l.y][R](b),!0)).t=y;}return v;}u+=s._lK, h=s;}else { h=s; }}}.call(this,t,n);return s&&i&&(s[Rt]?(e&&FU(s[Rt])&&(i=-i), s.x-=i*Math.sin(s.rotate||0), s.y+=i*Math.cos(s[Rt]||0)):s.y+=i), s;}function XB(t,i,n){var e,s,h;0==t._oT?(e=-1, h=0, s=i):0==t._oW?(e=0, h=1, s=n):(e=-1/t._oT, s=(t._oT-e)*i+t._oU, h=1);var r=new jB();return r._oT=e, r._oU=s, r._oW=h, r._oN=i, r._oP=n, r;}function DU(t){return(t%=WB)<0&&(t+=WB), t;}function NU(t,i,n,e){return Math[Ut](e-i,n-t);}var BU={_oUC:function _oUC(t,i,n,e,s,h){if(LB(t)&&(t=ik[Li](t)), !t){ return{x:0,y:0}; }var r=0,a=0,o=i._lK;if(n=n||0, t.x===Y){var f=t[ri],c=t[ai],u=!0;switch(f){case ek:u=!1;break;case"c":r+=o/2;}switch(c){case sk:a-=n/2;break;case hk:a+=n/2;}}else { r=t.x, a=t.y, 0<Math.abs(r)&&Math.abs(r)<1&&(r*=o); }s&&null!=e&&(a+=e.y, Math.abs(e.x)<1?r+=e.x*o:r+=e.x);var _=RU.call(i,r,a,u,h);return _?(s||null==e||_.offset(e), _):{x:0,y:0};},_nM:function _nM(t,i,n){var e=i[Pi],s=i.points;switch(e){case dG:t[wa](s[0],s[1],s[2],s[3],i._r);break;case fG:t[La](s[0],s[1]);break;case cG:t[Ma](s[0],s[1]);break;case uG:t[Oa](s[0],s[1],s[2],s[3]);break;case _G:t[Sa](s[0],s[1],s[2],s[3],s[4],s[5]);break;case lG:t[Aa]();}},_6E:function _6E(t,i,n,e){var s=i[Pi];if(s!=fG&&s!=lG){var h=n.lastPoint,r=i[ks];switch(n[Pi]==fG&&t.add(h.x,h.y), s){case dG:!function(t,i,n,e,s,h,r,a){var o=$B(i,n,e,s),f=$B(e,s,h,r);if(!o||!f){ return t._d=0, t._r=0, t._l1=o, t._l2=f, t._lK=0; }var c=NU(e,s,i,n),u=NU(e,s,h,r),_=(t[Ia]=c)-(t[Ca]=u);(_=DU(_))>Math.PI&&(_=2*Math.PI-_, t[Pa]=!0);var d=Math.PI-_,l=Math.tan(_/2),b=a/l,v=Math.min(o,f);v<b&&(a=l*(b=v));for(var y,g,E,x=e+Math.cos(c)*b,m=s+Math.sin(c)*b,p=e+Math.cos(u)*b,T=s+Math.sin(u)*b,w=new jB(i,n,e,s),L=new jB(e,s,h,r),M=XB(w,x,m),O=XB(L,p,T),S=M._3R(O),A=Math[Ut](m-S.y,x-S.x),I=Math.atan2(T-S.y,p-S.x),C=t._CCW?I:A,P=0;P<4&&!(DU(P*HB-C)<=d&&(y?y++:y=1, E=0==P?(g=S.x+a, S.y):1==P?(g=S.x, S.y+a):2==P?(g=S.x-a, S.y):(g=S.x, S.y-a), t[Fa+y]={x:g,y:E}, 2==y));){P++;}t[pa]=x, t[Ta]=m, t._p2x=p, t[ma]=T, t._o=S, t._d=b, t._r=a, t._l1=o-b, t._l2=f-b, t._lK=t._l1+d*a;}(i,h.x,h.y,r[0],r[1],r[2],r[3],r[4]), t.add(r[0],r[1]), t.add(i._p1x,i[Ta]), t.add(i[xa],i[ma]), i[Ra]&&t.add(i.$boundaryPoint1.x,i.$boundaryPoint1.y), i[Da]&&t.add(i.$boundaryPoint2.x,i.$boundaryPoint2.y);break;case cG:t.add(r[0],r[1]);break;case uG:!function(t,i){i.add(t[4],t[5]);var n=pU(t[0],t[2],t[4]);0<n&&n<1&&(e=mU(n,t), i.add(e.x,e.y));var e,s=pU(t[1],t[3],t[5]);0<s&&s<1&&(e=mU(s,t), i.add(e.x,e.y));}([h.x,h.y].concat(r),t);break;case _G:!function(t,i){i.add(t[6],t[7]);var n=function(t,i,n,e,s,h,r,a){for(var o,f,c,u,_,d,l,b,v=[],y=0;y<2;++y){if(c=0===y?(f=6*t-12*n+6*s, o=-3*t+9*n-9*s+3*r, 3*n-3*t):(f=6*i-12*e+6*h, o=-3*i+9*e-9*h+3*a, 3*e-3*i), Math.abs(o)<1e-12){if(Math.abs(f)<1e-12){ continue; }0<(u=-c/f)&&u<1&&v[j](u);}else { l=f*f-4*c*o, b=Math[Dt](l), l<0||(0<(_=(-f+b)/(2*o))&&_<1&&v[j](_), 0<(d=(-f-b)/(2*o))&&d<1&&v[j](d)); }}return v;}[b](this,t);if(n){ for(var e=0;e<n[bt];e++){var s,h=n[e];h<0||1<h||(s=LU(h,t), i.add(s.x,s.y));} }}([h.x,h.y][R](r),t);break;case lG:e&&t.add(e[ks][0],e[ks][1]);}}},_6G:function _6G(t,i,n){var e=t.type;if(e==fG){ return 0; }var s,h,r,a,o,f,c,u,_,d,l,b,v,y,g,E,x,m,p,T,w,L,M,O,S=i[Ea],A=t[ks];switch(e==_G&&4==A[bt]&&(e=uG), e){case cG:return $B(A[0],A[1],S.x,S.y);case dG:return t._lK;case uG:var I=function(t){if(wU([t[0],t[1]],[t[2],t[3]])){var i=t[0],n=t[1],e=t[4],s=t[5],h=Math[Dt](OU(i,n,e,s));return function(t){return h*t;};}if(wU([t[0],t[1]],[t[4],t[5]])||wU([t[2],t[3]],[t[4],t[5]])){ return i=t[0], n=t[1], e=t[2], s=t[3], h=Math[Dt](OU(i,n,e,s)), function(t){return h*t;}; }var r=t[0],a=t[2],o=r-2*a+t[4],f=2*a-2*r,c=(r=t[1])-2*(a=t[3])+t[5],u=2*a-2*r,_=4*(o*o+c*c),d=4*(o*f+c*u),l=f*f+u*u;if((h=4*_*l-d*d)<1e-5&&-1e-5<h){var b=$B(t[0],t[1],t[2],t[3]),v=$B(t[2],t[3],t[4],t[5]);return function(t){return(2*b+(v-b)*t)*t;};}var y,g=1/h,E=.125*Math.pow(_,-1.5),x=2*Math[Dt](_),m=(h*(y=d/Math.sqrt(h), Math.log(y+Math[Dt](y*y+1)))+Math[Dt](_)*(2*d)*Math[Dt](l))*E;return function(t){var i=d+2*t*_,n=i/Math.sqrt(h),e=i*i*g;return(h*Math.log(n+Math[Dt](1+e))+x*i*Math[Dt](l+t*d+t*t*_))*E-m;};}([S.x,S.y][R](A));return(t._lf=I)(1);case _G:return s=[S.x,S.y][R](A), h=P(s[0],s[2],s[4],s[6]), r=P(s[1],s[3],s[5],s[7]), I=function I(t){if(!t){ return 0; }for(var i,n=0,e=0;;){if(t<=(i=n+.01)){ return e+F(n,i-n); }e+=F(n,.01), n=i;}}, (t._lf=I)(1)||(a=[S.x,S.y][R](A), o=a[0], f=a[1], c=a[2], u=a[3], _=a[4], d=a[5], l=a[6], b=a[7], p=3*(3*(g=+c)-(v=+o)-3*(x=+_)+ +l), T=6*(v-2*g+x), w=3*(g-v), L=3*(3*(E=+u)-(y=+f)-3*(m=+d)+ +b), M=6*(y-2*E+m), O=3*(E-y), (C(0)+4*C(.5)+C(1))/6);case lG:if(S&&n){ return t[ks]=n[ks], $B(n[ks][0],n[ks][1],S.x,S.y); }}function C(t){var i=p*t*t+T*t+w,n=L*t*t+M*t+O;return Math[Dt](i*i+n*n);}function P(t,i,n,e){var s=3*i-t-3*n+e,h=2*t-4*i+2*n,r=i-t;return function(t,i){return 3*(s*t*t+h*t+r);};}function F(t,i){var n=h(t),e=r(t);return Math[Dt](n*n+e*e)*i;}return 0;}},kU=/^data:image\/(.+);base64,/i,UU=/^gif/i,GU=/^svg/i,$U=10,WU=11,HU=12,YU=20,jU=30;function XU(t,i,n,e,s){var h;i&&n&&(t.lineWidth=.5, t[Na]=Ba, t[ka](0,0,i,n), e&&(t[Ua]=e, t[Ga](0,0,i,n)), h=Math.min(i/50,n/38), t[$a](), t.globalAlpha=.6, t[Wa](i/2,n/2), t[Ha](h,h), t.translate(-20,-14), t[Ya](), t.rect(0,0,40,28), t[ja](), t.fillStyle=Xa, t[za](), t[Va]=1, t.moveTo(0,21), t[Ma](12,12), t[Ma](26,28), t[La](18,18), t[Ma](28,8), t[Ma](40,18), t[Ka]=2, t.strokeStyle=Qa, t[Za](), s&&(t[Ya](), t[La](26,-4), t[Ma](17,11), t[Ma](23,17), t[Ma](14,32), t[Ka]=5, t.strokeStyle=e||Ja, t.stroke()), t[qa]());}function zU(t){var i=kU.exec(t);if(i){ return i[1]; }var n=t[to](st);return 0<=n&&n<t.length-1?t[Zn](n+1):void 0;}function VU(i,t,n){if(this._n6=function(){if(!i){ return null; }if(i instanceof vG){ return jU; }if(i[ro]instanceof Function){ return YU; }if(LB(i)){var t=zU(i);if(t){if(!aB&&UU[M](t)){ return HU; }if(GU[M](t)){ return WU; }}return $U;}}(), !this._n6){ throw new Error("the image format is not supported",i); }this._n4=i, this[ao]=t, this._9Q=n, this.width=t||UB[io], this[Xt]=n||UB[no], this._kW={};}UB[io]=50, UB[no]=30, UB.IMAGE_DEFAULT={draw:function draw(t,i){XU(t,i[jt],i[Xt],i[eo]);}}, UB[so]={draw:function draw(t,i){XU(t,i[jt],i[Xt],i[eo],!0);}}, UB[ho]=1e6, VU[_]={_kS:0,_71:!0,_m5:null,_kU:null,_n4:null,_n6:null,_oUG:Y,_9Q:Y,_73:function _73(){return 1==this._kS;},getBounds:function getBounds(t){return this._n6==jU?this._n4.getBounds(t):(this._71&&this._gX(), this);},validate:function validate(){this._71&&this._gX();},_gX:function _gX(){if(this._71=!1, this._n6==jU){ return this._n4.validate(), void this[oo](this._n4[fo]); }if(this._n6!=YU){if(1!=this._kS){ try{this._eP();}catch(t){this._kS=3, rU[co](t);} }}else { this._9S(); }},_5N:function _5N(){this._eS(), this[uo].clear(), delete this[uo];},_jI:function _jI(t){this._m5.parentNode&&this._m5[_o][Rn](this._m5), this._kS=3, rU.error(lo+this._n4), this[bo]=null, this._kU=null, this._m5=null, !1!==t&&this._5N();},_eP:function _eP(){
var this$1 = this;
var t,n,i,e,s,h,r,a,o,f,c,u,_,d,l,b=this._n4;if(this._kS=1, this._dispatcher=new gk(), this._n6!=HU){ this._m5||(this._m5=S[Hn](vo), aB&&(this._m5[jn][yo]=go, S[Eo].appendChild(this._m5))), aB?(this._m5.onload=function(t){setTimeout(this._8L[$e](this),100);}[$e](this), this._m5.onerror=this._jI[$e](this)):(this._m5[xo]=this._8L.bind(this), this._m5[mo]=this._8L.bind(this)), this._m5.src=b; }else{for(var v in NG){this$1[v]=NG[v];}t=this._n4, i=(n=this)._dR, e=this._jI, s=this._fG, d={hdr:y(function(t){h=t, (u=u||vU())[jt]=h[jt], u[Xt]=h[Xt], n[jt]=h[jt], n[Xt]=h[Xt];}),gce:y(function(t){E(), o=f, c=f=a=r=null, r=t[po]?t.transparencyIndex:null, a=10*t[To], f=t[wo];}),com:y(g),app:{NETSCAPE:y(g)},img:y(function(t){c=c||u[oa](fa);var n=t[Lo]?t.lct:h.gct,e=c[la](t[Mo],t.topPos,t.width,t[Xt]);t[Oo][Ae](function(t,i){r!==t?(e[tn][4*i+0]=n[t][0], e[tn][4*i+1]=n[t][1], e.data[4*i+2]=n[t][2], e.data[4*i+3]=255):2!==o&&3!==o||(e[tn][4*i+3]=0);}), c.putImageData(e,t[Mo],t.topPos);}),eof:function eof(t){E(), i[x](n);}}, l=new XMLHttpRequest(), aB||l[So]("text/plain; charset=x-user-defined"), l[xo]=function(t){_=new BG(l[Fh]);try{kG(_,d);}catch(t){e.call(n,Dh);}}, l[mo]=function(){e[x](n,Ao);}, l[rh](ah,t,!0), l.send();}function y(i){return function(t){i(t);};}function g(){}function E(){var t,i;c&&(i={data:t=c[la](0,0,h[jt],h[Xt]),_pixels:xG(t[tn],h[jt],h[Xt]),delay:a}, s[x](n,i));}},_jK:!0,_8L:function _8L(){var t,i=this._m5[jt],n=this._m5[Xt];if(i&&n){if(this._m5[_o]&&this._m5[_o][Rn](this._m5), this._kS=2, this[jt]=i, this[Xt]=n, aB&&this._n6==WU){ this[bo]=null, this._jK=!1; }else if(this._n6==WU||(t=zU(this._m5.src), /^png/i[M](t)||/^gif/i[M](t))){var e,s=vU();s.width=i, s[Xt]=n, s.g[Io](this._m5,0,0,i,n);try{e=s.g[la](0,0,s.width,s[Xt])[tn];}catch(t){this._jK=!1, rU.error(t);}e&&function(t){for(var i=!1,n=3,e=t[bt];n<e;n+=4){if(t[n]<255){i=!0;break;}}return i;}((s.g, e))&&(this._kU=s, this._pixels=function(){var t=s.width,i=s.height,n=xU(s.g,0,0,t,i);if(n){ return xG(n[tn],t,i); }}());}this._5N();}else { this._jI(); }},_9S:function _9S(){var t=this._n4;if(t[ro]instanceof Function){if(!1===t[Co]&&t[jt]&&t.height){ return this.width=t.width, void(this[Xt]=t[Xt]); }var i=t[jt]||UB.IMAGE_MAX_SIZE,n=t[Xt]||UB[na],e=this._eQ();e[jt]=i, e.height=n;var s=e.g;t.draw(s);var h,r=xU(s,0,0,i,n);r&&(h=xG(r[tn],i,n), this.x=h._x, this.y=h._y, this[jt]=h[Po], this.height=h[Fo], e[jt]=this[jt], e[Xt]=this[Xt], s[Ro](r,-this.x,-this.y), this[bo]=h);}else { this._jI(!1); }},_eQ:function _eQ(){return this._kU||(this._kU=vU());},draw:function draw(t,i,n,e,s,h){if(this[jt]&&this.height){i=i||1, e=e||1, s=s||1;var r=this[jt]*e,a=this[Xt]*s;if(h&&n.shadowColor&&(t[Do]=n[Do], t[No]=(n.shadowBlur||0)*i, t.shadowOffsetX=(n[Bo]||0)*i, t[ko]=(n[ko]||0)*i), 1!=this._kS){if(3!=this._kS){if(this._n6==jU){ return t.scale(e,s), void this._n4[ro](t,i,n); }var o=this._gZ(i,e,s);if(o){ return(this.x||this.y)&&t[Wa](this.x*e,this.y*s), t[Ha](e/o[Ha],s/o.scale), void o._nM(t,n[eo],n[Uo]); }this._kV(t,i,e,s,this[jt]*e,this.height*s,n);}else { UB.IMAGE_INVALID&&UB.IMAGE_INVALID[ro](t,{src:this._n4,width:r,height:a,renderColor:n.renderColor}); }}else { UB[Go]&&UB[Go][ro](t,{src:this._n4,width:r,height:a,renderColor:n[eo]}); }}},_kV:function _kV(t,i,n,e,s,h,r){if(this._n6==YU){ return 1!=n&&1!=e&&t[Ha](n,e), void this._n4[ro](t,r); }if(this._m5){if(!_B){ return void t.drawImage(this._m5,0,0,s,h); }n=i*s/this[jt], e=i*h/this[Xt], t[Ha](1/n,1/e), t[Io](this._m5,0,0,s*n,h*e);}},_kW:null,_gZ:function _gZ(t,i,n){
var this$1 = this;
if(this._n6==YU&&!1===this._n4[Co]){ return null; }if(this._n6==$U||(t*=Math.max(i,n))<=1){ return this._defaultCache||(this[$o]=this._h1(this._kU||this._m5,1,this._jK)), this[$o]; }var e=this._kW[Wo]||0;if((t=Math[V](t))<=e){for(var s=t,h=this._kW[s];!h&&++s<=e;){h=this$1._kW[s];}if(h){ return h; }}t%2&&t++;var r=this.width*t,a=this[Xt]*t;if(r*a>UB[ho]){ return null; }var o=vU(r,a);return(this.x||this.y)&&o.g[Wa](-this.x*t,-this.y*t), this._kV(o.g,1,t,t,r,a), this._h1(o,t);},_h1:function _h1(t,i){var n=new pG(t,i);return this._kW[i]=n, this._kW.maxScale=i, n;},hitTest:function hitTest(t,i,n){return this._n6==jU?this._n4[Ho][b](this._n4,arguments):!(this._pixels||this._m5&&this._m5[bo])||(this[bo]||this._m5[bo])._jL(t,i,n);},_eS:function _eS(){this._dispatcher&&this[uo].onEvent(new ck(this,Yo,jo,this._m5));},_oUI:function _oUI(t,i){this._dispatcher&&this[uo].addListener(t,i);},_75:function _75(t,i){this[uo]&&this[uo].removeListener(t,i);},_oWV:function _oWV(t){this._kW={}, (t||1e5<this[jt]*this[Xt])&&(this._m5=null, this._kU=null);}}, ZN(VU,JB);var KU={};function QU(t,i,n,e){if(i){ return KU[t]=new VU(i,n,e), t; }delete KU[t];}function ZU(t){if(t._m5){ return t._m5; }if(!LB(t)&&!t[Xo]){ return t._m5=new VU(t); }var i=t[Xo]||t;return i in KU?KU[i]:KU[i]=new VU(t);}function JU(t){return t in KU;}function qU(t,i,n){n=n||{};var e,s,h,r,a,o,f,c,u,_,d,l,b,v,y,g,E=t.getBounds(n.lineWidth);E[jt]&&E[Xt]&&(e=i[oa](fa), s=i[ha]||1, h=n[zo]||Vo, r=/full/i[M](h), a=/uniform/i[M](h), f=o=1, r&&(c=i[jt], u=i[Xt], l=d=0, (_=n[Ko])&&(wB(_)?b=v=y=g=_:(b=_.top||0, v=_[$t]||0, y=_[ii]||0, g=_.right||0), c-=y+g, u-=b+v, d+=y, l+=b), o=c/E[jt], f=u/E.height, a&&(f<o?(d+=(c-f*E.width)/2, o=f):o<f&&(l+=(u-o*E[Xt])/2, f=o)), (d||l)&&e.translate(d,l)), e[Wa](-E.x*o,-E.y*f), t.draw(e,s,n,o,f,!0));}function tG(t,i,n,e,s,h){this.type=t, this[tf]=i, this[nf]=n, this.angle=e||0, this.tx=s||0, this.ty=h||0;}rU[Io]=function(t,i,n){var e=ZU(t);if(!e){ return rU.error(Qo+t), !1; }e[Zo](), e._n6!=HU&&!e._73()||e[Jo](function(t){t[Si]&&(this.width=this[jt], qU(t[Si],this,n));},i), qU(e,i,n);}, rU[qo]=QU, rU.hasImage=JU, rU.getAllImages=function(){var t,i=[];for(t in KU){i[j](t);}return i;}, aU.GRADIENT_TYPE_RADIAL=ci, aU.GRADIENT_TYPE_LINEAR=fi, tG.prototype={type:null,colors:null,positions:null,angle:null,tx:0,ty:0,position:ik[gi],isEmpty:function isEmpty(){return null==this[tf]||0==this.colors[bt];},_7Q:function _7Q(){var t=this[tf].length;if(1==t){ return[0]; }for(var i=[],n=1/(t-1),e=0;e<t;e++){i[j](n*e);}return this[nf]||(this.positions=i), i;},generatorGradient:function generatorGradient(t){if(null==this[tf]||0==this[tf].length){ return null; }var i=yU();if(this.type==aU[ef]){var n,e,s,h=this[sf];h>Math.PI&&(h-=Math.PI);var r=(s=h<=Math.PI/2?(n=Math[Ut](t[Xt],t[jt]), e=Math[Dt](t[jt]*t[jt]+t.height*t[Xt]), n-h):(n=Math[Ut](t[jt],t.height), e=Math[Dt](t[jt]*t[jt]+t[Xt]*t[Xt]), n-(h-Math.PI/2)), Math.cos(s)*e/2),a=r*Math.cos(h),o=r*Math.sin(h),f=t.x+t[jt]/2-a,c=t.y+t[Xt]/2-o,u=t.x+t[jt]/2+a,_=t.y+t.height/2+o,d=i[hf](f,c,u,_);}else{if(!(this.type=aU[rf])){ return null; }var l=ok(this[af],t[jt],t.height);l.x+=t.x, l.y+=t.y, this.tx&&(Math.abs(this.tx)<1?l.x+=t.width*this.tx:l.x+=this.tx), this.ty&&(Math.abs(this.ty)<1?l.y+=t.height*this.ty:l.y+=this.ty);var b=$B(l.x,l.y,t.x,t.y),b=Math.max(b,$B(l.x,l.y,t.x,t.y+t.height));b=Math.max(b,$B(l.x,l.y,t.x+t[jt],t.y+t[Xt])), b=Math.max(b,$B(l.x,l.y,t.x+t[jt],t.y)), d=i[of](l.x,l.y,0,l.x,l.y,b);}var v=this.colors,y=this[nf];y&&y.length==v.length||(y=this._7Q());for(var g=0,E=v[bt];g<E;g++){d[ff](y[g],v[g]);}return d;}};var iG=new tG(aU.GRADIENT_TYPE_LINEAR,[FB(2332033023),FB(1154272460),FB(1154272460),FB(1442840575)],[.1,.3,.7,.9],Math.PI/2),nG=new tG(aU.GRADIENT_TYPE_LINEAR,[FB(2332033023),FB(1154272460),FB(1154272460),FB(1442840575)],[.1,.3,.7,.9],0),eG=(new tG(aU[ef],[FB(1154272460),FB(1442840575)],[.1,.9],0), new tG(aU[rf],[FB(2298478591),FB(1156509422),FB(1720223880),FB(1147561574)],[.1,.3,.7,.9],0,-.3,-.3)),sG=[FB(0),FB(4294901760),FB(4294967040),FB(4278255360),FB(4278250239),FB(4278190992),FB(4294901958),FB(0)],hG=[0,.12,.28,.45,.6,.75,.8,1],rG=new tG(aU.GRADIENT_TYPE_LINEAR,sG,hG),aG=new tG(aU[ef],sG,hG,Math.PI/2),oG=new tG(aU[rf],sG,hG);tG.LINEAR_GRADIENT_VERTICAL=iG, tG[cf]=nG, tG[uf]=eG, tG.RAINBOW_LINEAR_GRADIENT=rG, tG[_f]=aG, tG[df]=oG;var fG=bi,cG=fi,uG=lf,_G=yi,dG=bf,lG=vf;aU[yf]=fG, aU[gf]=cG, aU.SEGMENT_QUAD_TO=uG, aU[Ef]=_G, aU[xf]=dG, aU[mf]=lG;function bG(t,i){this.id=++sB, MB(t)?this[ks]=t:(this[Pi]=t, this[ks]=i);}bG.prototype={toJSON:function toJSON(){var t={type:this[Pi],points:this[ks]};return this[pf]&&(t[pf]=!0), t;},parseJSON:function parseJSON(t){this.type=t[Pi], this[ks]=t.points, this[pf]=t[pf];},points:null,type:cG,clone:function clone(){return new bG(this[Pi],this[ks]?zN(this[ks]):null);},move:function move(t,i){
var this$1 = this;
if(this[ks]){ for(var n=0,e=this.points[bt];n<e;n++){var s=this$1[ks][n];rU[Tf](s)&&(this$1.points[n]+=n%2==0?t:i);} }}}, DB(bG[_],{lastPoint:{get:function get(){return this[Pi]==dG?{x:this[xa],y:this[ma]}:{x:this.points[this[ks][bt]-2],y:this.points[this[ks].length-1]};}},firstPoint:{get:function get(){return{x:this.points[0],y:this[ks][1]};}}}), rU.PathSegment=bG;UB[wf]=Lf;var vG=function vG(t){this[fo]=new JB(), this._hT=t||[];};function yG(t,i,n){return{x:t.x+(i.x-t.x)*n,y:t.y+(i.y-t.y)*n};}function gG(t,i,n,e,s){e=e||UB.ADD_SEGMENT_TYPE;var h=function(t,i,n,e){var s=t.length;if(s&&!(s<0)){e=e||1;for(var h,r,a=0;a++<s;){if((h=t[Mf](a,0))&&!(e<(r=$B(i,n,h.x,h.y)))){for(var o=0;o++<e;){if(h=t[Mf](a+o,0)){var f=$B(i,n,h.x,h.y);if(r<=f){a+=o;break;}r=f;}}for(var c=a,u=t[bt]-1,_=0,a=0,d=t._hT[bt];a<d;a++){if(c<(_+=t._hT[a]._lK||0)){u=a;break;}}return h[bt]=c, h[nn]=u, h;}}}}(t,i,n,s);if(h){i=h.x, n=h.y;var r,a,o,f,c,u,_,d,l,b,v=t._hT,y=h[nn],g=y==v[bt]-1,E=v[y],x=v[vt](0);return E[Pi]==cG||E[Pi]==lG?Lf==e?x.splice(y,0,new bG(cG,[h.x,h.y])):(u=v[y-1][Ea], b=E[ga], d=yG(u,h,r=$B(u.x,u.y,i,n)/$B(u.x,u.y,b.x,b.y)), l=yG(h,b,r), x[m](y,1,new bG(uG,[d.x,d.y,i,n]),new bG(uG,E[pf]?[l.x,l.y]:[l.x,l.y,b.x,b.y]))):ui in h&&Lf!=e?(r=h.t, E[Pi]==_G?(u=v[y-1][Ea], b={x:E[ks][0],y:E[ks][1]}, _={x:E[ks][2],y:E.points[3]}, a={x:E[ks][4],y:E[ks][5]}, d=yG(u,b,r), l=yG(b,_,r), o=yG(_,a,r), f=yG(d,l,r), c=yG(l,o,r), x[m](y,1,new bG(_G,[d.x,d.y,f.x,f.y,i,n]),new bG(_G,E[pf]?[c.x,c.y,o.x,o.y]:[c.x,c.y,o.x,o.y,a.x,a.y]))):E[Pi]==uG&&(u=v[y-1][Ea], b={x:E.points[0],y:E.points[1]}, _={x:E[ks][2],y:E[ks][3]}, d=yG(u,b,r), l=yG(b,_,r), x[m](y,1,new bG(uG,[d.x,d.y,i,n]),new bG(uG,E[pf]?[l.x,l.y]:[l.x,l.y,_.x,_.y])))):(b=E.lastPoint, x[m](y,1,new bG(cG,[i,n]),new bG(cG,[b.x,b.y]))), {atEnd:g,index:y,isCurve:Lf!==e,segments:x};}}function EG(t,i,n){this._11(t,i,n);}function xG(t,i,n){return new EG(t,i,n);}function mG(t,i,n){return(n=n||UB[Of])==aU.BLEND_MODE_MULTIPLY?t*i:n==aU[Sf]?Math.min(t,i):n==aU[Af]?1-(1-i)/t:n==aU[If]?t+i-1:n==aU[Cf]?Math.max(t,i):n==aU[Pf]?t+i-t*i:i;}vG[_]={toJSON:function toJSON(){var i=[];return this._hT[Ae](function(t){i.push(t.toJSON());}), i;},parseJSON:function parseJSON(t){var i=this._hT;t[Ae](function(t){i[j](new bG(t[Pi],t[ks]));});},clear:function clear(){this._hT[bt]=0, this[fo][It](), this._lK=0, this._71=!0, this._hT[Ff]=null;},_fF:!0,_7S:function _7S(t,i){this._fF&&0===this._hT[bt]&&t!=fG&&this._hT[j](new bG(fG,[0,0])), this._hT[j](new bG(t,i)), this._71=!0;},add:function add(t,i){VN(this._hT,t,i), this._71=!0;},removePathSegment:function removePathSegment(t){if(t>=this._hT.length){ return!1; }this._hT[m](t,1), this._71=!0;},moveTo:function moveTo(t,i){this._7S(fG,[t,i]);},lineTo:function lineTo(t,i){this._7S(cG,[t,i]);},quadTo:function quadTo(t,i,n,e){this._7S(uG,[t,i,n,e]);},curveTo:function curveTo(t,i,n,e,s,h){this._7S(_G,[t,i,n,e,s,h]);},arcTo:function arcTo(t,i,n,e,s){this._7S(dG,[t,i,n,e,s]);},closePath:function closePath(){this._7S(lG);},_8X:function _8X(t,i,n,e,s){if(e.selectionColor){if(n==aU[Jr]){if(!e[Rf]){ return; }return t.shadowColor=e[Df], t[No]=e[Rf]*i, t.shadowOffsetX=(e[Nf]||0)*i, void(t[ko]=(e[Bf]||0)*i);}if(n==aU.SELECTION_TYPE_BORDER){if(!e.selectionBorder){ return; }t[Na]=e[Df];var h=s.lineWidth||0;s[kf]&&(h+=2*s[kf]), t.lineWidth=e[Uf]+h, this._nM(t), t[Za]();}}},_71:!0,_hT:null,_lK:0,lineCap:Dr,lineJoin:rr,draw:function draw(t,i,n,e,s){t[Gf]=n.lineCap||this[Gf], t.lineJoin=n[$f]||this.lineJoin, e&&(s=s||n, this._8X(t,i,s.selectionType,s,n));var h=e&&s.selectionType==aU[Jr];n[Wf]&&(this._nM(t), t[Ka]=n.lineWidth+2*(n[kf]||0), t.strokeStyle=n[Wf], t.stroke(), h&&(h=!1, t[Do]=Hf)), t.lineWidth=0, this._nM(t), n[Yf]&&(t[Ua]=n[eo]||n[Yf], t.fill()), n[jf]&&(t[Ua]=n[Xf]||n[jf], t[za]()), n.lineWidth&&(t[Ka]=n.lineWidth, n[zf]&&(n.lineFillColor&&(t.strokeStyle=n[Vf], t.stroke(), h&&(t.shadowColor=Hf)), t[Gf]=n[Kf]||t.lineCap, t.lineJoin=n[Qf]||t[$f], t[zf]=n[zf], t.lineDashOffset=n.lineDashOffset), t[Na]=n[eo]||n[Na], t.stroke(), t.lineDash=[]);},_nM:function _nM(t){var i,n,e=this._hT[Ff]||this._hT;t[Ya]();for(var s=0,h=e[bt];s<h;s++){i=e[s], BU._nM(t,i,n), n=i;}},invalidate:function invalidate(){this._71=!0;},validate:function validate(){
var this$1 = this;
if(this._71=!1, this[fo][It](), (this._lK=0)!=this._hT[bt]){ for(var t,i,n=this._hT,e=1,s=n[0],h=s,r=n[bt];e<r;e++){(t=n[e]).type==fG?h=t:(BU._6E(this$1[fo],t,s,h), i=BU._6G(t,s,h), t._lK=i, this$1._lK+=i), s=t;} }},getBounds:function getBounds(t,i){var n;return this._71&&this.validate(), i=i||new JB(), t?(n=t/2, i.set(this.bounds.x-n,this[fo].y-n,this[fo][jt]+t,this.bounds[Xt]+t)):i.set(this[fo].x,this[fo].y,this.bounds[jt],this[fo][Xt]), i;},hitTest:function hitTest(t,i,n,e,s,h){return function(t,i,n,e,s,h){if(n=n||0, !(s=s||0)&&!h){ return!1; }if(!e&&!this[Zf](s).intersectsPoint(t,i,n)){ return!1; }var r=Math[rr](2*n)||1,a=yU(r,r),o=(a[aa], -t+n),f=-i+n;if(a.setTransform(1,0,0,1,o,f), a.isPointInStroke){ return a[Ka]=(s||0)+2*n, this._nM(a), !(!s||!a[Jf](n,n))||!!h&&a[qf](n,n); }this._nM(a), s&&a.stroke(), h&&a[za]();var c=xU(a,0,0,r,r);if(!c){ return!1; }for(var u=(c=c[tn])[bt]/4;0<u;){if(0<c[4*u-1]){ return!0; }--u;}return!1;}.call(this,t,i,n,e,s,h);},toSegments:function toSegments(){return[].concat(this._hT);},generator:function generator(t,i,n,e,s){return function(t,i,n,e,s){this._71&&this.validate();var h=s?this.getBounds(s):this.bounds,o=n/h[jt],f=t-o*h.x,c=e/h[Xt],u=i-c*h.y,r=this._hT,_=[];return jN(r,function(t){var i=t[d](),n=i.points;if(n&&n[bt]){for(var e=n[bt],s=[],h=0;h<e;h++){var r=n[h],a=n[++h],r=o*r+f,a=c*a+u;s[j](r), s.push(a);}i[ks]=s;}_[j](i);},this), new vG(_);}[x](this,t,i,n,e,s);},getLocation:function getLocation(t,i){return RU[x](this,t,i||0);}}, DB(vG[_],{segments:{get:function get(){return this._hT;},set:function set(t){this[It](), this._hT=t;}},length:{get:function get(){return this._71&&this.validate(), this._lK;}},_empty:{get:function get(){return 0==this._hT.length;}}}), EG[_]={_11:function _11(t,i,n){for(var e,s,h,r,a=t.length,o=0,f=0,c=0;c<a;c+=4){if(0<t[c+3]){e=(c+4)/i/4|0;break;}}for(c=a-4;0<=c;c-=4){if(0<t[c+3]){s=(c+4)/i/4|0;break;}}for(o=0;o<i;o++){for(f=e;f<s;f++){if(0<t[f*i*4+4*o+3]){h=o;break;}}if(0<=h){ break; }}for(o=i-1;0<=o;o--){for(f=e;f<s;f++){if(0<t[f*i*4+4*o+3]){r=o;break;}}if(0<=r){ break; }}this._x=h, this._y=e, this[Po]=r-h+1, this[Fo]=s-e+1, this._l4=new JB(h,e,this._width,this._height), this[tc]=this._width*this[Fo], this[ic]=i, this[nc]=t;},_eU:function _eU(t,i){return this[nc][4*(t+this._x+(this._y+i)*this[ic])+3];},_jL:function _jL(t,i,n){
var this$1 = this;
(!n||n<=1)&&(n=1), n|=0, t=Math.round(t-this._x)-n, i=Math.round(i-this._y)-n, n+=n;for(var e=t,s=i;s<i+n;){for(e=t;e<t+n;){if(this$1._eU(e,s)){ return!0; }++e;}++s;}return!1;}}, aU[Sf]=ec, aU[sc]=hc, aU[Af]=rc, aU[If]=ac, aU.BLEND_MODE_LIGHTEN=oc, aU[Pf]=fc, aU[cc]=uc, UB.BLEND_MODE=aU.BLEND_MODE_LINEAR_BURN;var pG=function pG(t,i,n){this._kU=t, this[Ha]=i||1, this._jK=n;};pG[_]={scale:1,_kU:null,_kW:null,_jK:!0,_nM:function _nM(t,i,n){if((i=i&&function(t){if(Q==t[0]){if(3==(t=t.substring(1)).length){ t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]; }else if(6!=t[bt]){ return; }return[(t=parseInt(t,16))>>16&255,t>>8&255,255&t];}if(/^rgb/i.test(t)){var i=t[N](dc),n=t[N](it);if(i<0||n<i){ return; }if((t=(t=t[Zn](i+1,n))[F](q))[bt]<3){ return; }return[parseInt(t[0]),parseInt(t[1]),parseInt(t[2]),3==t[bt]?255:parseInt(t[3])];}rU[co]("color format error, ["+t+lc);}(i))&&!1!==this._jK){this._kU instanceof Image&&((e=vU()).width=this._kU.width, e[Xt]=this._kU[Xt], e.g[Io](this._kU,0,0,this._kU[jt],this._kU[Xt]), this._kU=e), this._kW||(this._kW={});var e,s=i+n;if((e=this._kW[s])||((e=function(t,i,n){var e=xU(t.g,0,0,t.width,t.height);if(e){var s=e.data;if(n instanceof Function){ s=n(t,s,i)||s; }else{var h=i[0]/255,r=i[1]/255,a=i[2]/255;if(n==aU[cc]){ for(var o=0,f=s.length;o<f;o+=4){var c=77*s[o]+151*s[o+1]+28*s[o+2]>>8;s[o]=c*h|0, s[o+1]=c*r|0, s[o+2]=c*a|0;} }else { for(o=0, f=s[bt];o<f;o+=4){s[o]=255*mG(h,s[o]/255,n)|0, s[o+1]=255*mG(r,s[o+1]/255,n)|0, s[o+2]=255*mG(a,s[o+2]/255,n)|0;} }}return(t=vU(t[jt],t[Xt])).g.putImageData(e,0,0), t;}}(this._kU,i,n))||(this._jK=!1), this._kW[s]=e||this._kU), e){ if(aB){ try{t.drawImage(e,0,0);}catch(t){} }else { t[Io](e,0,0); } }}else { t.drawImage(this._kU,0,0); }}};function TG(t,i,n,e,s,h,r,a,o){this._n9=function(t,i,n,e,s,h,r,a,o){if(QB(t,i,n,e,a,o)){ return null; }var f,c=new bG(cG,[t+n-s,i]),u=new bG(uG,[t+n,i,t+n,i+h]),_=new bG(cG,[t+n,i+e-h]),d=new bG(uG,[t+n,i+e,t+n-s,i+e]),l=new bG(cG,[t+s,i+e]),b=new bG(uG,[t,i+e,t,i+e-h]),v=new bG(cG,[t,i+h]),y=new bG(uG,[t,i,t+s,i]),g=(new bG(lG), [c,u,_,d,l,b,v,y]),E=new JB(t+s,i+h,n-s-s,e-h-h),x=a<t?(f=nk, 5):t+n<a?(f=ek, 1):(f=yi, 0);o<i?f==nk&&(x=7):i+e<o?f==ek?x=3:yi==f&&(x=4):f==nk?x=6:f==ek&&(x=2);var m=function(t,i,n,e,s,h,r,a,o,f,c){var u,_,d,l,b,v,y,g,E,x,m,p,T,w,L,M,O,S,A,I,C,P,F,R,D,N,B,k,U,G,$,W,H,Y,j,X,z,V,K,Q,Z,J,q,tt,it,nt,et,st,ht,rt,at,ot,ft,ct,ut=a/2;switch(h=h||1e-4, r=r||1e-4, t){case 7:var _t=[i,n+r,i,n,i+h,n],dt=i+h,lt=n+r;return wG(t,_t,dt,lt,i,n,e,s,h,r,a,o,f,c);case 5:return wG(t,_t=[i+h,n+s,i,n+s,i,n+s-r],dt=i+h,lt=n+s-r,i,n,e,s,h,r,a,o,f,c);case 3:return wG(t,_t=[i+e,n+s-r,i+e,n+s,i+e-h,n+s],dt=i+e-h,lt=n+s-r,i,n,e,s,h,r,a,o,f,c);case 1:return wG(t,_t=[i+e-h,n,i+e,n,i+e,n+r],dt=i+e-h,lt=n+r,i,n,e,s,h,r,a,o,f,c);case 0:return q=n, tt=e, nt=r, ht=f, (J=i)+(it=h)<=(st=o)-(et=ut)?rt={y:q,x:st-et,_n9NO:0}:(rt={y:q+nt,x:Math.max(J,st-et)}, ot=[J,q+nt,J,q,J+it,q], (rt=new jB(st,ht,rt.x,rt.y)._$e(ot))?(MB(rt)&&(rt=rt[0].t>rt[1].t?rt[0]:rt[1]), (ct=(ct=LG(ot,[rt]))[0])&&(rt._n9=new bG(uG,ct.slice(2))), rt[bc]=7):rt={y:q,x:J+it,_n9NO:0}), st+et<=J+tt-it?at={y:q,x:st+et,_n9NO:0}:(at={y:q+nt,x:Math.min(J+tt,st+et)}, ft=[J+tt-it,q,J+tt,q,J+tt,q+nt], (at=new jB(st,ht,at.x,at.y)._$e(ft))?(MB(at)&&(at=at[0].t<at[1].t?at[0]:at[1]), (ct=LG(ft,[at]))&&ct[ct.length-1]&&(at._n9=new bG(uG,ct[ct[bt]-1][vt](2))), at._n9NO=1):at={y:q,x:J+tt-it,_n9NO:0}), [rt,at];case 2:return k=i, G=e, $=s, W=h, j=o, (U=n)+(H=r)<=(X=f)-(Y=ut)?z={x:k+G,y:X-Y,_n9NO:2}:(z={x:k+G-W,y:Math.max(U,X-Y)}, K=[k+G-W,U,k+G,U,k+G,U+H], (z=new jB(j,X,z.x,z.y)._$e(K))?(MB(z)&&(z=z[0].t>z[1].t?z[0]:z[1]), (Z=(Z=LG(K,[z]))[0])&&(z._n9=new bG(uG,Z[vt](2))), z._n9NO=1):z={x:k+G,y:U+H,_n9NO:2}), X+Y<=U+$-H?V={x:k+G,y:X+Y,_n9NO:2}:(V={x:k+G-W,y:Math.min(U+$,X+Y)}, Q=[k+G,U+$-H,k+G,U+$,k+G-W,U+$], (V=new jB(j,X,V.x,V.y)._$e(Q))?(MB(V)&&(V=V[0].t<V[1].t?V[0]:V[1]), (Z=LG(Q,[V]))[1]&&(V._n9=new bG(uG,Z[1].slice(2))), V._n9NO=3):V={x:k+G,y:U+$-H,_n9NO:2}), [z,V];case 4:return L=n, M=e, O=s, A=r, P=f, (w=i)+(S=h)<=(C=o)-(I=ut)?R={y:L+O,x:C-I,_n9NO:4}:(R={y:L+O-A,x:Math.max(w,C-I)}, D=[w+S,L+O,w,L+O,w,L+O-A], (R=new jB(C,P,R.x,R.y)._$e(D))?(MB(R)&&(R=R[0].t<R[1].t?R[0]:R[1]), (B=(B=LG(D,[R]))[B[bt]-1])&&(R._n9=new bG(uG,B[vt](2))), R[bc]=5):R={y:L+O,x:w+S,_n9NO:4}), C+I<=w+M-S?F={y:L+O,x:C+I,_n9NO:4}:(F={y:L+O-A,x:Math.min(w+M,C+I)}, N=[w+M,L+O-A,w+M,L+O,w+M-S,L+O], (F=new jB(C,P,F.x,F.y)._$e(N))?(MB(F)&&(F=F[0].t>F[1].t?F[0]:F[1]), (B=LG(N,[F]))[0]&&(F._n9=new bG(uG,B[0][vt](2))), F._n9NO=3):F={y:L+O,x:w+M-S,_n9NO:4}), [F,R];case 6:return u=i, d=s, l=h, y=o, (_=n)+(b=r)<=(g=f)-(v=ut)?x={x:u,y:g-v,_n9NO:6}:(x={x:u+l,y:Math.max(_,g-v)}, m=[u,_+b,u,_,u+l,_], (x=new jB(y,g,x.x,x.y)._$e(m))?(MB(x)&&(x=x[0].t<x[1].t?x[0]:x[1]), (T=(T=LG(m,[x]))[T[bt]-1])&&(x._n9=new bG(uG,T[vt](2)))):x={x:u,y:_+b}, x[bc]=7), g+v<=_+d-b?E={x:u,y:g+v,_n9NO:6}:(E={x:u+l,y:Math.min(_+d,g+v)}, p=[u+l,_+d,u,_+d,u,_+d-b], (E=new jB(y,g,E.x,E.y)._$e(p))?(MB(E)&&(E=E[0].t>E[1].t?E[0]:E[1]), (T=LG(p,[E]))[0]&&(E._n9=new bG(uG,T[0][vt](2))), E._n9NO=5):E={x:u,y:_+d-b,_n9NO:6}), [E,x];}}(x,t,i,n,e,s,h,r,a,o,E),p=m[0],T=m[1],w=new vG(),L=w._hT;L.push(new bG(fG,[p.x,p.y])), L.push(new bG(cG,[a,o])), L[j](new bG(cG,[T.x,T.y])), T._n9&&(L[j](T._n9), T[bc]++);for(var M=T[bc]%8,O=p[bc];L[j](g[M]), ++M, (M%=8)!=O;){}return p._n9&&L[j](p._n9), w[Aa](), w;}(t,i,n,e,s,h,r,a,o);}function wG(t,i,n,e,s,h,r,a,o,f,c,u,_,d){var l,b,v,y,g=new jB(u,_,n,e),E=new jB(i[0],i[1],i[4],i[5])._3R(g,c),x=E[0],m=E[1];return x[Ht]!==Y?(x._n9NO=(t-1)%8, m._n9NO=(t+1)%8, l=x[Ht], 7==t?(x.y=h+f+Math.min(d.height,l), m.x=s+o+Math.min(d[jt],l)):5==t?(x.x=s+o+Math.min(d[jt],l), m.y=h+a-f-Math.min(d[Xt],l)):3==t?(x.y=h+a-f-Math.min(d[Xt],l), m.x=s+r-o-Math.min(d[jt],l)):1==t&&(x.x=s+r-o-Math.min(d[jt],l), m.y=h+f+Math.min(d.height,l))):(g._oH(g._oN,g._oP,x.x,x.y), x=g._$e(i), g._oH(g._oN,g._oP,m.x,m.y), v=(b=LG(i,[x,m=g._$e(i)]))[0], y=b[2], x._n9NO=t, m[bc]=t, x._n9=new bG(uG,v[vt](2)), m._n9=new bG(uG,y[vt](2))), [x,m];}function LG(t,i){for(var n,e,s,h,r,a,o=t[0],f=t[1],c=t[2],u=t[3],_=t[4],d=t[5],l=[],b=0;b<i.length;b++){0!=(a=(r=i[b]).t)&&1!=a?(n=o+(c-o)*a, e=f+(u-f)*a, s=c+(_-c)*a, h=u+(d-u)*a, l[j]([o,f,n,e,r.x,r.y]), o=r.x, f=r.y, c=s, u=h):l.push(null);}return s!==Y&&l.push([r.x,r.y,s,h,_,d]), l;}var MG,OG={server:{draw:function draw(t){t[$a](), t[Wa](0,0), t[Ya](), t[La](0,0), t[Ma](40,0), t[Ma](40,40), t.lineTo(0,40), t[Aa](), t[ja](), t.translate(0,0), t[Wa](0,0), t[Ha](1,1), t[Wa](0,0), t[Na]=Hf, t.lineCap=Dr, t[$f]=Wr, t[vc]=4, t[$a](), t.save(), t[qa](), t[$a](), t[qa](), t[$a](), t[qa](), t[$a](), t.restore(), t.save(), t.restore(), t[$a](), t.restore(), t[$a](), t[qa](), t[$a](), t.restore(), t[$a](), t.restore(), t[$a](), t[qa](), t[$a](), t[qa](), t[$a](), t.restore(), t[$a](), t.restore(), t.restore(), t.save();var i=t.createLinearGradient(6.75,3.9033,30.5914,27.7447);i[ff](.0493,yc), i[ff](.0689,gc), i[ff](.0939,Ec), i[ff](.129,xc), i[ff](.2266,mc), i.addColorStop(.2556,pc), i.addColorStop(.2869,Tc), i.addColorStop(.3194,wc), i[ff](.3525,Lc), i.addColorStop(.3695,Mc), i.addColorStop(.5025,Oc), i[ff](.9212,Sc), i.addColorStop(1,Ac), t.fillStyle=i, t[Ya](), t[La](25.677,4.113), t[Sa](25.361,2.4410000000000007,23.364,2.7940000000000005,22.14,2.7990000000000004), t[Sa](19.261,2.813,16.381,2.8260000000000005,13.502,2.8400000000000003), t.bezierCurveTo(12.185,2.846,10.699000000000002,2.652,9.393,2.8790000000000004), t[Sa](9.19,2.897,8.977,2.989,8.805,3.094), t.bezierCurveTo(8.084999999999999,3.5109999999999997,7.436999999999999,4.1259999999999994,6.776,4.63), t.bezierCurveTo(5.718999999999999,5.436,4.641,6.22,3.6029999999999998,7.05), t[Sa](4.207,6.5889999999999995,21.601999999999997,36.579,21.028,37.307), t.bezierCurveTo(22.019,36.063,23.009999999999998,34.819,24.000999999999998,33.575), t[Sa](24.587999999999997,32.84,25.589999999999996,31.995000000000005,25.593999999999998,30.983000000000004), t[Sa](25.595999999999997,30.489000000000004,25.598,29.994000000000003,25.601,29.500000000000004), t[Sa](25.612,26.950000000000003,25.622,24.400000000000006,25.633,21.85), t.bezierCurveTo(25.657,16.318,25.680999999999997,10.786000000000001,25.704,5.253), t.bezierCurveTo(25.706,4.885,25.749,4.478,25.677,4.113), t.bezierCurveTo(25.67,4.077,25.697,4.217,25.677,4.113), t[Aa](), t.fill(), t[Za](), t.restore(), t[$a](), t.save(), t[Ua]=Ic, t[Ya](), t.moveTo(19.763,6.645), t.bezierCurveTo(20.002000000000002,6.643999999999999,20.23,6.691999999999999,20.437,6.778), t[Sa](20.644000000000002,6.864999999999999,20.830000000000002,6.991,20.985,7.146999999999999), t[Sa](21.14,7.302999999999999,21.266,7.488999999999999,21.352999999999998,7.696999999999999), t[Sa](21.438999999999997,7.903999999999999,21.487,8.133,21.487,8.372), t.lineTo(21.398,36.253), t.bezierCurveTo(21.397,36.489,21.349,36.713,21.262,36.917), t[Sa](21.174,37.121,21.048000000000002,37.305,20.893,37.458), t.bezierCurveTo(20.738,37.611,20.553,37.734,20.348,37.818999999999996), t[Sa](20.141,37.903999999999996,19.916,37.95099999999999,19.679,37.949), t.lineTo(4.675,37.877), t.bezierCurveTo(4.4399999999999995,37.876000000000005,4.216,37.827000000000005,4.012,37.741), t.bezierCurveTo(3.8089999999999997,37.653999999999996,3.6249999999999996,37.528999999999996,3.4719999999999995,37.376), t[Sa](3.3179999999999996,37.221,3.1939999999999995,37.037,3.1079999999999997,36.833999999999996), t[Sa](3.022,36.629999999999995,2.9739999999999998,36.406,2.9739999999999998,36.172), t.lineTo(2.924,8.431), t[Sa](2.923,8.192,2.971,7.964,3.057,7.758), t[Sa](3.143,7.552,3.267,7.365,3.4219999999999997,7.209), t.bezierCurveTo(3.5769999999999995,7.052999999999999,3.76,6.925,3.965,6.837), t.bezierCurveTo(4.17,6.749,4.396,6.701,4.633,6.7), t[Ma](19.763,6.645), t.closePath(), t.fill(), t[Za](), t[qa](), t.restore(), t.save(), t[Ua]=Cc, t[Ya](), t.arc(12.208,26.543,2.208,0,6.283185307179586,!0), t[Aa](), t.fill(), t[Za](), t[qa](), t[$a](), t[Ua]=Ic, t[Ya](), t.arc(12.208,26.543,1.876,0,6.283185307179586,!0), t.closePath(), t[za](), t.stroke(), t[qa](), t[$a](), t[Ua]=Cc, t[Ya](), t[La](19.377,17.247), t.bezierCurveTo(19.377,17.724,18.991999999999997,18.108999999999998,18.516,18.108999999999998), t[Ma](5.882,18.108999999999998), t[Sa](5.404999999999999,18.108999999999998,5.02,17.723,5.02,17.247), t[Ma](5.02,11.144), t.bezierCurveTo(5.02,10.666,5.406,10.281,5.882,10.281), t.lineTo(18.516,10.281), t.bezierCurveTo(18.993,10.281,19.377,10.666,19.377,11.144), t.lineTo(19.377,17.247), t[Aa](), t[za](), t[Za](), t[qa](), t[$a](), t[$a](), t[Ua]=Ic, t.beginPath(), t[La](18.536,13.176), t[Sa](18.536,13.518,18.261000000000003,13.794,17.919,13.794), t[Ma](6.479,13.794), t[Sa](6.1370000000000005,13.794,5.861,13.518,5.861,13.176), t.lineTo(5.861,11.84), t[Sa](5.861,11.498,6.137,11.221,6.479,11.221), t[Ma](17.918,11.221), t[Sa](18.259999999999998,11.221,18.535,11.497,18.535,11.84), t[Ma](18.535,13.176), t[Aa](), t[za](), t.stroke(), t[qa](), t.save(), t.fillStyle=Ic, t.beginPath(), t.moveTo(18.536,16.551), t[Sa](18.536,16.892999999999997,18.261000000000003,17.168999999999997,17.919,17.168999999999997), t[Ma](6.479,17.168999999999997), t.bezierCurveTo(6.1370000000000005,17.168999999999997,5.861,16.892999999999997,5.861,16.551), t[Ma](5.861,15.215999999999998), t.bezierCurveTo(5.861,14.872999999999998,6.137,14.596999999999998,6.479,14.596999999999998), t[Ma](17.918,14.596999999999998), t.bezierCurveTo(18.259999999999998,14.596999999999998,18.535,14.872999999999998,18.535,15.215999999999998), t[Ma](18.535,16.551), t[Aa](), t.fill(), t[Za](), t[qa](), t.restore(), t[qa]();}},exchanger2:{draw:function draw(t){t[$a](), t[Wa](0,0), t[Ya](), t[La](0,0), t[Ma](40,0), t[Ma](40,40), t[Ma](0,40), t[Aa](), t[ja](), t.translate(0,0), t[Wa](0,0), t.scale(1,1), t[Wa](0,0), t[Na]=Hf, t[Gf]=Dr, t[$f]=Wr, t[vc]=4, t.save(), t[$a](), t[qa](), t[$a](), t.restore(), t[$a](), t[qa](), t.save(), t.restore(), t[$a](), t[qa](), t[$a](), t[qa](), t.save(), t.restore(), t.save(), t[qa](), t[$a](), t.restore(), t[$a](), t[qa](), t.restore(), t[$a]();var i=t[hf](.4102,24.3613,39.5898,24.3613);i[ff](0,yc), i.addColorStop(.0788,mc), i[ff](.2046,Pc), i[ff](.3649,Fc), i[ff](.5432,Rc), i[ff](.6798,Dc), i.addColorStop(.7462,Nc), i[ff](.8508,Bc), i[ff](.98,pc), i[ff](1,kc), t[Ua]=i, t.beginPath(), t.moveTo(.41,16.649), t[Sa](.633,19.767,.871,20.689,1.094,23.807000000000002), t[Sa](1.29,26.548000000000002,3.324,28.415000000000003,5.807,29.711000000000002), t[Sa](10.582,32.202000000000005,16.477,32.806000000000004,21.875999999999998,32.523), t.bezierCurveTo(26.929,32.258,32.806,31.197000000000003,36.709999999999994,27.992000000000004), t[Sa](38.30499999999999,26.728000000000005,38.83599999999999,25.103000000000005,38.998999999999995,23.161000000000005), t[Sa](39.589,16.135000000000005,39.589,16.135000000000005,39.589,16.135000000000005), t[Sa](39.589,16.135000000000005,3.26,16.647,.41,16.649), t[Aa](), t[za](), t[Za](), t[qa](), t.save(), t.save(), t[Ua]=Ic, t[Ya](), t.moveTo(16.4,25.185), t[Sa](12.807999999999998,24.924999999999997,9.139,24.238,5.857999999999999,22.705), t.bezierCurveTo(3.175999999999999,21.450999999999997,-.32200000000000095,18.971999999999998,.544999999999999,15.533999999999999), t[Sa](1.3499999999999992,12.335999999999999,4.987999999999999,10.495999999999999,7.807999999999999,9.428999999999998), t.bezierCurveTo(11.230999999999998,8.133999999999999,14.911999999999999,7.519999999999999,18.558,7.345999999999998), t.bezierCurveTo(22.233,7.169999999999998,25.966,7.437999999999998,29.548000000000002,8.300999999999998), t.bezierCurveTo(32.673,9.052999999999999,36.192,10.296,38.343,12.814999999999998), t.bezierCurveTo(40.86600000000001,15.768999999999998,39.208000000000006,19.066999999999997,36.406000000000006,21.043999999999997), t.bezierCurveTo(33.566,23.046999999999997,30.055000000000007,24.071999999999996,26.670000000000005,24.676999999999996), t[Sa](23.289,25.28,19.824,25.436,16.4,25.185), t.bezierCurveTo(13.529,24.977,19.286,25.396,16.4,25.185), t[Aa](), t.fill(), t.stroke(), t[qa](), t.restore(), t[$a](), t.save(), t[$a](), t[$a](), t[$a](), t[Ua]=Uc, t[Ya](), t[La](5.21,21.754), t[Ma](8.188,17.922), t[Ma](9.53,18.75), t[Ma](15.956,16.004), t.lineTo(18.547,17.523), t[Ma](12.074,20.334), t[Ma](13.464,21.204), t[Ma](5.21,21.754), t[Aa](), t[za](), t[Za](), t[qa](), t[qa](), t[qa](), t[$a](), t[$a](), t[$a](), t.fillStyle=Uc, t.beginPath(), t[La](17.88,14.61), t[Ma](9.85,13.522), t[Ma](11.703,12.757), t[Ma](7.436,10.285), t[Ma](10.783,8.942), t[Ma](15.091,11.357), t.lineTo(16.88,10.614), t[Ma](17.88,14.61), t.closePath(), t.fill(), t[Za](), t[qa](), t[qa](), t[$a](), t.save(), t.fillStyle=Uc, t[Ya](), t[La](17.88,14.61), t[Ma](9.85,13.522), t[Ma](11.703,12.757), t.lineTo(7.436,10.285), t[Ma](10.783,8.942), t[Ma](15.091,11.357), t[Ma](16.88,10.614), t[Ma](17.88,14.61), t[Aa](), t[za](), t.stroke(), t[qa](), t[qa](), t.restore(), t[$a](), t[$a](), t[$a](), t[Ua]=Uc, t[Ya](), t[La](23.556,15.339), t[Ma](20.93,13.879), t[Ma](26.953,11.304), t.lineTo(25.559,10.567), t[Ma](33.251,9.909), t[Ma](31.087,13.467), t[Ma](29.619,12.703), t[Ma](23.556,15.339), t.closePath(), t[za](), t.stroke(), t[qa](), t[qa](), t.restore(), t[$a](), t[$a](), t.save(), t[Ua]=Uc, t.beginPath(), t[La](30.028,23.383), t[Ma](24.821,20.366), t.lineTo(22.915,21.227), t[Ma](21.669,16.762), t[Ma](30.189,17.942), t[Ma](28.33,18.782), t[Ma](33.579,21.725), t.lineTo(30.028,23.383), t.closePath(), t[za](), t[Za](), t[qa](), t.restore(), t[$a](), t.save(), t[Ua]=Uc, t[Ya](), t[La](30.028,23.383), t[Ma](24.821,20.366), t.lineTo(22.915,21.227), t[Ma](21.669,16.762), t[Ma](30.189,17.942), t[Ma](28.33,18.782), t.lineTo(33.579,21.725), t[Ma](30.028,23.383), t.closePath(), t[za](), t[Za](), t[qa](), t[qa](), t.restore(), t.restore(), t[qa](), t.restore();}},exchanger:{draw:function draw(t){t[$a](), t[Wa](0,0), t.beginPath(), t[La](0,0), t[Ma](40,0), t[Ma](40,40), t[Ma](0,40), t.closePath(), t.clip(), t[Wa](0,0), t[Wa](0,0), t.scale(1,1), t[Wa](0,0), t.strokeStyle=Hf, t.lineCap=Dr, t.lineJoin=Wr, t.miterLimit=4, t.save(), t[$a](), t[qa](), t[$a](), t[qa](), t[$a](), t[qa](), t[$a](), t.restore(), t[$a](), t.restore(), t.save(), t.restore(), t.save(), t[qa](), t[qa](), t[$a]();var i=t[hf](.2095,20.7588,39.4941,20.7588);i[ff](0,Gc), i[ff](.0788,$c), i[ff](.352,Wc), i.addColorStop(.6967,Hc), i.addColorStop(.8916,Yc), i.addColorStop(.9557,jc), i[ff](1,Xc), t.fillStyle=i, t[Ya](), t[La](39.449,12.417), t.lineTo(39.384,9.424), t[Sa](39.384,9.424,.7980000000000018,22.264,.3710000000000022,23.024), t.bezierCurveTo(-.026999999999997804,23.733,.4240000000000022,24.903000000000002,.5190000000000022,25.647000000000002), t[Sa](.7240000000000022,27.244000000000003,.9240000000000023,28.841,1.1350000000000022,30.437), t[Sa](1.3220000000000023,31.843,2.7530000000000023,32.094,3.9620000000000024,32.094), t[Sa](8.799000000000003,32.092,13.636000000000003,32.091,18.473000000000003,32.089), t[Sa](23.515,32.086999999999996,28.556000000000004,32.086,33.598,32.083999999999996), t.bezierCurveTo(34.859,32.083999999999996,36.286,31.979999999999997,37.266,31.081999999999997), t[Sa](37.537,30.820999999999998,37.655,30.535999999999998,37.699999999999996,30.229999999999997), t[Ma](37.711,30.316999999999997), t[Ma](39.281,16.498999999999995), t.bezierCurveTo(39.281,16.498999999999995,39.467999999999996,15.126999999999995,39.489,14.666999999999994), t[Sa](39.515,14.105,39.449,12.417,39.449,12.417), t[Aa](), t[za](), t.stroke(), t[qa](), t[$a](), t[$a](), t[$a](), t[$a](), t[qa](), t.save(), t.restore(), t.save(), t[qa](), t.save(), t.restore(), t[$a](), t.restore(), t[$a](), t[qa](), t[$a](), t.restore(), t[$a](), t[qa](), t.save(), t.restore(), t.restore(), t.save(), (i=t[hf](19.8052,7.7949,19.8052,24.7632))[ff](0,zc), i[ff](.1455,Vc), i[ff](.2975,Kc), i[ff](.4527,Qc), i.addColorStop(.6099,Zc), i.addColorStop(.7687,Jc), i[ff](.9268,qc), i.addColorStop(.9754,tu), i.addColorStop(1,iu), t.fillStyle=i, t.beginPath(), t.moveTo(33.591,24.763), t.bezierCurveTo(23.868000000000002,24.754,14.145,24.746000000000002,4.423000000000002,24.738000000000003), t[Sa](3.140000000000002,24.737000000000002,-.48799999999999777,24.838000000000005,.3520000000000021,22.837000000000003), t[Sa](1.292000000000002,20.594000000000005,2.2330000000000023,18.351000000000003,3.1730000000000023,16.108000000000004), t.bezierCurveTo(4.113000000000002,13.865000000000006,5.054000000000002,11.623000000000005,5.994000000000002,9.380000000000004), t[Sa](6.728000000000002,7.629000000000005,9.521000000000003,7.885000000000004,11.156000000000002,7.880000000000004), t[Sa](16.974000000000004,7.861000000000004,22.793000000000003,7.843000000000004,28.612000000000002,7.825000000000005), t[Sa](30.976000000000003,7.818000000000005,33.341,7.810000000000005,35.707,7.803000000000004), t[Sa](36.157000000000004,7.802000000000004,36.609,7.787000000000004,37.06,7.804000000000005), t.bezierCurveTo(37.793,7.833000000000005,39.389,7.875000000000004,39.385000000000005,9.424000000000005), t[Sa](39.38400000000001,9.647000000000006,39.31,10.138000000000005,39.27700000000001,10.359000000000005), t[Sa](38.81900000000001,13.361000000000004,38.452000000000005,15.764000000000006,37.99400000000001,18.766000000000005), t[Sa](37.806000000000004,19.998000000000005,37.61800000000001,21.230000000000004,37.43000000000001,22.462000000000007), t[Sa](37.151,24.271,35.264,24.77,33.591,24.763), t[Aa](), t[za](), t[Za](), t[qa](), t.restore(), t[qa](), t[$a](), t[$a](), t[$a](), t[Ua]=Uc, t[Ya](), t.moveTo(10.427,19.292), t.lineTo(5.735,16.452), t.lineTo(12.58,13.8), t[Ma](12.045,15.07), t[Ma](20.482,15.072), t[Ma](19.667,17.887), t[Ma](11.029,17.851), t.lineTo(10.427,19.292), t[Aa](), t.fill(), t[Za](), t.restore(), t.restore(), t.save(), t[$a](), t.fillStyle=Uc, t.beginPath(), t.moveTo(13.041,13.042), t.lineTo(8.641,10.73), t[Ma](14.82,8.474), t[Ma](14.373,9.537), t[Ma](22.102,9.479), t[Ma](21.425,11.816), t[Ma](13.54,11.85), t.lineTo(13.041,13.042), t[Aa](), t[za](), t[Za](), t.restore(), t[qa](), t[$a](), t[$a](), t[Ua]=Uc, t.beginPath(), t.moveTo(29.787,16.049), t[Ma](29.979,14.704), t[Ma](21.51,14.706), t[Ma](22.214,12.147), t[Ma](30.486,12.116), t[Ma](30.653,10.926), t[Ma](36.141,13.4), t[Ma](29.787,16.049), t.closePath(), t[za](), t[Za](), t[qa](), t[qa](), t[$a](), t[$a](), t[Ua]=Uc, t[Ya](), t[La](28.775,23.14), t[Ma](29.011,21.49), t[Ma](19.668,21.405), t[Ma](20.523,18.295), t[Ma](29.613,18.338), t.lineTo(29.815,16.898), t[Ma](35.832,19.964), t.lineTo(28.775,23.14), t.closePath(), t[za](), t.stroke(), t[qa](), t.restore(), t[qa](), t.restore();}},cloud:{draw:function draw(t){t[$a](), t.beginPath(), t[La](0,0), t[Ma](90.75,0), t[Ma](90.75,62.125), t[Ma](0,62.125), t.closePath(), t[ja](), t[Na]=Hf, t[Gf]=Dr, t[$f]=Wr, t[vc]=4, t[$a]();var i=t[hf](44.0054,6.4116,44.0054,51.3674);i[ff](0,"rgba(159, 160, 160, 0.7)"), i[ff](.9726,nu), t[Ua]=i, t[Ya](), t[La](57.07,20.354), t[Sa](57.037,20.354,57.006,20.358,56.974000000000004,20.358), t[Sa](54.461000000000006,14.308,48.499,10.049000000000001,41.538000000000004,10.049000000000001), t.bezierCurveTo(33.801,10.049000000000001,27.309000000000005,15.316000000000003,25.408000000000005,22.456000000000003), t[Sa](18.988000000000007,23.289,14.025000000000006,28.765000000000004,14.025000000000006,35.413000000000004), t[Sa](14.025000000000006,42.635000000000005,19.880000000000006,48.49,27.102000000000004,48.49), t[Sa](29.321000000000005,48.49,31.407000000000004,47.933,33.237,46.961), t.bezierCurveTo(34.980000000000004,49.327,37.78,50.867999999999995,40.945,50.867999999999995), t[Sa](43.197,50.867999999999995,45.261,50.086,46.896,48.785999999999994), t.bezierCurveTo(49.729,50.78699999999999,53.244,51.98799999999999,57.07,51.98799999999999), t[Sa](66.412,51.98799999999999,73.986,44.90699999999999,73.986,36.17099999999999), t[Sa](73.986,27.436,66.413,20.354,57.07,20.354), t[Aa](), t[za](), t[Za](), t.restore(), t[qa]();}},node:{width:60,height:100,draw:function draw(t){t[$a](), t[Wa](0,0), t[Ya](), t[La](0,0), t[Ma](40,0), t[Ma](40,40), t.lineTo(0,40), t[Aa](), t.clip(), t[Wa](0,0), t[Wa](0,0), t[Ha](1,1), t[Wa](0,0), t[Na]=Hf, t[Gf]=Dr, t[$f]=Wr, t[vc]=4, t[$a](), t[Ua]=eu, t[Ya](), t[La](13.948,31.075), t[Ma](25.914,31.075), t[Oa](25.914,31.075,25.914,31.075), t[Ma](25.914,34.862), t[Oa](25.914,34.862,25.914,34.862), t.lineTo(13.948,34.862), t[Oa](13.948,34.862,13.948,34.862), t[Ma](13.948,31.075), t[Oa](13.948,31.075,13.948,31.075), t[Aa](), t[za](), t[Za](), t[qa](), t[$a](), t[Ua]=su, t[Ya](), t[La](29.679,35.972), t[Sa](29.679,36.675000000000004,29.110999999999997,37.244,28.407999999999998,37.244), t.lineTo(11.456,37.244), t[Sa](10.751999999999999,37.244,10.183,36.675,10.183,35.972), t[Ma](10.183,36.136), t[Sa](10.183,35.431000000000004,10.751999999999999,34.863,11.456,34.863), t[Ma](28.407,34.863), t[Sa](29.11,34.863,29.678,35.431,29.678,36.136), t[Ma](29.678,35.972), t[Aa](), t[za](), t[Za](), t[qa](), t[$a](), t[Ua]=su, t[Ya](), t[La](.196,29.346), t[Sa](.196,30.301,.9690000000000001,31.075,1.925,31.075), t[Ma](37.936,31.075), t[Sa](38.891,31.075,39.665,30.301,39.665,29.346), t[Ma](39.665,27.174), t.lineTo(.196,27.174), t[Ma](.196,29.346), t.closePath(), t.fill(), t[Za](), t[qa](), t[$a](), t.fillStyle=hu, t.beginPath(), t[La](37.937,3.884), t[Ma](1.926,3.884), t[Sa](.97,3.884,.19699999999999984,4.657,.19699999999999984,5.614), t[Ma](.19699999999999984,27.12), t[Ma](39.666000000000004,27.12), t[Ma](39.666000000000004,5.615), t.bezierCurveTo(39.665,4.657,38.892,3.884,37.937,3.884), t[Aa](), t.fill(), t[Za](), t[qa](), t.save(), t[$a](), t[qa](), t.save(), t.restore(), t[qa](), t[$a]();var i=t[hf](6.9609,2.9341,32.9008,28.874);i.addColorStop(0,ru), i[ff](1,au), t[Ua]=i, t[Ya](), t[La](35.788,6.39), t[Ma](4.074,6.39), t.bezierCurveTo(3.315,6.39,2.702,7.003,2.702,7.763), t.lineTo(2.702,24.616), t[Ma](37.159,24.616), t[Ma](37.159,7.763), t[Sa](37.159,7.003,36.546,6.39,35.788,6.39), t[Aa](), t[za](), t[Za](), t[qa](), t[qa]();}},// 租户组
group:{width:60,height:60,draw:function draw(ctx){ctx.save();ctx.strokeStyle="rgba(0,0,0,0)";ctx.miterLimit=4;ctx.font="15px ''";ctx.font="   15px ''";ctx.save();ctx.font="   15px ''";ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(51.131,42.047);ctx.bezierCurveTo(51.345,41.882999999999996,51.562,41.714,51.759,41.546);ctx.bezierCurveTo(51.764,41.539,51.778,41.534,51.784,41.519);ctx.bezierCurveTo(51.815999999999995,41.489,51.836999999999996,41.458999999999996,51.864,41.431);ctx.bezierCurveTo(52.177,41.153,52.455,40.858,52.699999999999996,40.565);ctx.bezierCurveTo(52.739,40.522999999999996,52.791999999999994,40.488,52.827,40.440999999999995);ctx.bezierCurveTo(52.879999999999995,40.37799999999999,52.908,40.309999999999995,52.963,40.248);ctx.bezierCurveTo(53.104,40.061,53.233000000000004,39.878,53.357,39.690999999999995);ctx.bezierCurveTo(53.400999999999996,39.62,53.458999999999996,39.553,53.498,39.48199999999999);ctx.bezierCurveTo(53.522999999999996,39.428999999999995,53.541999999999994,39.38199999999999,53.571999999999996,39.331999999999994);ctx.bezierCurveTo(53.666999999999994,39.16499999999999,53.74699999999999,38.986999999999995,53.82299999999999,38.82099999999999);ctx.bezierCurveTo(53.861999999999995,38.72999999999999,53.91499999999999,38.651999999999994,53.946999999999996,38.56299999999999);ctx.bezierCurveTo(53.958999999999996,38.52599999999999,53.967999999999996,38.48299999999999,53.986,38.44299999999999);ctx.bezierCurveTo(54.043,38.28399999999999,54.086999999999996,38.11499999999999,54.135,37.95299999999999);ctx.bezierCurveTo(54.16,37.85499999999999,54.199,37.75999999999999,54.217999999999996,37.65999999999999);ctx.bezierCurveTo(54.223,37.62699999999999,54.223,37.59799999999999,54.232,37.566999999999986);ctx.bezierCurveTo(54.266999999999996,37.390999999999984,54.278,37.20999999999999,54.296,37.036999999999985);ctx.bezierCurveTo(54.301,36.935999999999986,54.327999999999996,36.83499999999999,54.327999999999996,36.73699999999999);ctx.bezierCurveTo(54.327999999999996,36.68499999999999,54.327999999999996,36.64099999999999,54.327999999999996,36.591999999999985);ctx.lineTo(54.349,30.489999999999984);ctx.bezierCurveTo(54.349,30.642999999999983,54.324,30.785999999999984,54.309999999999995,30.933999999999983);ctx.bezierCurveTo(54.294999999999995,31.108999999999984,54.275,31.290999999999983,54.245,31.463999999999984);ctx.bezierCurveTo(54.223,31.596999999999984,54.181,31.725999999999985,54.149,31.854999999999983);ctx.bezierCurveTo(54.102000000000004,32.018999999999984,54.056,32.182999999999986,53.997,32.344999999999985);ctx.bezierCurveTo(53.953,32.469999999999985,53.895,32.591999999999985,53.836,32.72499999999999);ctx.bezierCurveTo(53.757999999999996,32.89799999999999,53.681,33.066999999999986,53.589,33.23599999999999);ctx.bezierCurveTo(53.527,33.35099999999999,53.443999999999996,33.47099999999999,53.375,33.58899999999999);ctx.bezierCurveTo(53.251,33.77599999999999,53.122,33.968999999999994,52.981,34.154999999999994);ctx.bezierCurveTo(52.899,34.260999999999996,52.813,34.367999999999995,52.725,34.471999999999994);ctx.bezierCurveTo(52.472,34.766999999999996,52.199,35.059999999999995,51.888,35.33899999999999);ctx.bezierCurveTo(51.85,35.37699999999999,51.814,35.413999999999994,51.772,35.44999999999999);ctx.bezierCurveTo(51.58,35.627999999999986,51.358,35.78999999999999,51.137,35.95599999999999);ctx.bezierCurveTo(51.027,36.03999999999999,50.936,36.124999999999986,50.826,36.20499999999999);ctx.bezierCurveTo(50.482,36.44899999999999,50.121,36.68399999999999,49.734,36.916999999999994);ctx.lineTo(49.713,43.01899999999999);ctx.bezierCurveTo(50.1,42.78799999999999,50.468,42.55699999999999,50.807,42.30599999999999);ctx.bezierCurveTo(50.924,42.21299999999999,51.021,42.12399999999999,51.134,42.03499999999999);ctx.lineTo(51.134,42.04199999999999);ctx.lineTo(51.131,42.047);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(49.062,44.116);ctx.lineTo(49.089,36.556);ctx.lineTo(49.397999999999996,36.373);ctx.bezierCurveTo(49.769999999999996,36.150999999999996,50.117999999999995,35.93,50.44,35.701);ctx.bezierCurveTo(50.503,35.663000000000004,50.544,35.619,50.595,35.576);ctx.lineTo(50.733,35.463);ctx.bezierCurveTo(50.991,35.264,51.175,35.126,51.336999999999996,34.988);ctx.lineTo(51.437999999999995,34.882);ctx.bezierCurveTo(51.730999999999995,34.622,51.98799999999999,34.347,52.217999999999996,34.071);ctx.bezierCurveTo(52.300999999999995,33.973,52.382,33.872,52.455999999999996,33.778);ctx.bezierCurveTo(52.589,33.612,52.711,33.434,52.82299999999999,33.257);ctx.bezierCurveTo(52.903999999999996,33.129,52.96399999999999,33.035,53.016999999999996,32.936);ctx.bezierCurveTo(53.096999999999994,32.778,53.169999999999995,32.623,53.242,32.472);ctx.bezierCurveTo(53.324999999999996,32.299,53.361999999999995,32.214,53.391999999999996,32.13);ctx.bezierCurveTo(53.44499999999999,31.985000000000003,53.483999999999995,31.837000000000003,53.522999999999996,31.694000000000003);ctx.bezierCurveTo(53.57599999999999,31.502000000000002,53.601,31.428000000000004,53.614999999999995,31.343000000000004);ctx.bezierCurveTo(53.638,31.193000000000005,53.651999999999994,31.050000000000004,53.66799999999999,30.900000000000002);ctx.lineTo(53.68699999999999,30.700000000000003);ctx.bezierCurveTo(53.69399999999999,30.625000000000004,53.70799999999999,30.555000000000003,53.70799999999999,30.478);ctx.lineTo(53.70799999999999,30.473000000000003);ctx.lineTo(55,30.473000000000003);ctx.lineTo(55,30.478);ctx.lineTo(54.982,36.735);ctx.bezierCurveTo(54.972,36.824,54.964999999999996,36.903,54.955,36.983);ctx.bezierCurveTo(54.93,37.266999999999996,54.908,37.461999999999996,54.872,37.663);ctx.bezierCurveTo(54.837,37.849999999999994,54.811,37.928999999999995,54.789,38.01199999999999);ctx.bezierCurveTo(54.706,38.294999999999995,54.660000000000004,38.47299999999999,54.595,38.64699999999999);ctx.lineTo(54.554,38.770999999999994);ctx.bezierCurveTo(54.531,38.846,54.49,38.916,54.452000000000005,38.992999999999995);ctx.bezierCurveTo(54.33800000000001,39.251,54.245000000000005,39.437,54.141000000000005,39.623999999999995);ctx.bezierCurveTo(54.107000000000006,39.693999999999996,54.08800000000001,39.74099999999999,54.05800000000001,39.788);ctx.bezierCurveTo(54.02400000000001,39.840999999999994,53.98800000000001,39.897999999999996,53.94400000000001,39.95399999999999);ctx.bezierCurveTo(53.77500000000001,40.218999999999994,53.63200000000001,40.416,53.476000000000006,40.62199999999999);ctx.bezierCurveTo(53.407000000000004,40.727999999999994,53.37400000000001,40.776999999999994,53.333000000000006,40.82599999999999);ctx.lineTo(53.218,40.95499999999999);ctx.bezierCurveTo(52.93300000000001,41.28399999999999,52.643,41.58999999999999,52.31100000000001,41.895999999999994);ctx.lineTo(52.21900000000001,41.989);ctx.bezierCurveTo(52.02100000000001,42.166999999999994,51.81600000000001,42.318,51.62200000000001,42.467999999999996);ctx.lineTo(51.418000000000006,42.632);ctx.bezierCurveTo(51.34400000000001,42.686,51.27400000000001,42.748,51.199000000000005,42.800999999999995);ctx.bezierCurveTo(50.842000000000006,43.059,50.46000000000001,43.303,50.05200000000001,43.544);ctx.lineTo(49.07000000000001,44.105999999999995);ctx.lineTo(49.06300000000001,44.105999999999995);ctx.lineTo(49.062,44.116);ctx.closePath();ctx.moveTo(50.383,37.253);ctx.lineTo(50.369,41.839);ctx.bezierCurveTo(50.387,41.824999999999996,50.408,41.815,50.426,41.799);ctx.bezierCurveTo(50.484,41.759,50.528,41.714,50.580000000000005,41.67);ctx.lineTo(50.819,41.482);ctx.bezierCurveTo(50.995000000000005,41.353,51.161,41.222,51.317,41.085);ctx.lineTo(51.427,40.979);ctx.bezierCurveTo(51.717,40.714,51.977,40.442,52.21,40.166);ctx.lineTo(52.449,39.869);ctx.bezierCurveTo(52.577,39.7,52.696999999999996,39.527,52.806999999999995,39.351);ctx.lineTo(53.01,39.025);ctx.bezierCurveTo(53.089999999999996,38.87,53.164,38.721,53.235,38.562999999999995);ctx.lineTo(53.379,38.233);ctx.bezierCurveTo(53.434999999999995,38.087999999999994,53.471,37.951,53.504,37.818);ctx.lineTo(53.599999999999994,37.436);ctx.bezierCurveTo(53.626999999999995,37.287,53.64099999999999,37.129,53.65299999999999,36.969);ctx.lineTo(53.68499999999999,36.574);ctx.lineTo(53.691999999999986,34.254999999999995);ctx.bezierCurveTo(53.627999999999986,34.343999999999994,53.567999999999984,34.428,53.503999999999984,34.51);ctx.bezierCurveTo(53.41099999999998,34.623,53.322999999999986,34.741,53.22699999999998,34.854);ctx.bezierCurveTo(52.95999999999998,35.167,52.66099999999998,35.48,52.332999999999984,35.78);ctx.lineTo(52.213999999999984,35.891);ctx.bezierCurveTo(52.02899999999998,36.053,51.826999999999984,36.21,51.62699999999998,36.366);ctx.lineTo(51.43999999999998,36.517);ctx.bezierCurveTo(51.365999999999985,36.57,51.29699999999998,36.632000000000005,51.22099999999998,36.690000000000005);ctx.bezierCurveTo(50.94799999999998,36.89000000000001,50.670999999999985,37.07600000000001,50.38099999999998,37.258);ctx.lineTo(50.38099999999998,37.258);ctx.lineTo(50.38099999999998,37.253);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(54.319,42.402);ctx.bezierCurveTo(54.31,42.515,54.300000000000004,42.632,54.282000000000004,42.749);ctx.bezierCurveTo(54.263000000000005,42.842000000000006,54.23800000000001,42.926,54.208000000000006,43.023);ctx.bezierCurveTo(54.17700000000001,43.126000000000005,54.153000000000006,43.243,54.111000000000004,43.347);ctx.bezierCurveTo(54.080000000000005,43.436,54.033,43.518,53.99700000000001,43.605000000000004);ctx.bezierCurveTo(53.94400000000001,43.720000000000006,53.89500000000001,43.832,53.836000000000006,43.94500000000001);ctx.bezierCurveTo(53.78900000000001,44.02400000000001,53.739000000000004,44.10600000000001,53.68600000000001,44.18900000000001);ctx.bezierCurveTo(53.611000000000004,44.31300000000001,53.51800000000001,44.43500000000001,53.431000000000004,44.56400000000001);ctx.bezierCurveTo(53.370000000000005,44.63900000000001,53.31100000000001,44.71000000000001,53.246,44.784000000000006);ctx.bezierCurveTo(53.108000000000004,44.952000000000005,52.942,45.114000000000004,52.778,45.278000000000006);ctx.bezierCurveTo(52.721,45.334,52.661,45.389,52.596,45.443000000000005);ctx.bezierCurveTo(52.495,45.538000000000004,52.376999999999995,45.627,52.26,45.712);ctx.bezierCurveTo(52.159,45.791000000000004,52.062999999999995,45.874,51.951,45.949000000000005);ctx.bezierCurveTo(51.832,46.038000000000004,51.693,46.118,51.56,46.20400000000001);ctx.bezierCurveTo(51.417,46.293000000000006,51.284,46.38700000000001,51.131,46.46600000000001);ctx.bezierCurveTo(50.646,46.73700000000001,50.123,46.96800000000001,49.579,47.17900000000001);ctx.bezierCurveTo(49.434,47.23500000000001,49.289,47.28500000000001,49.151,47.33400000000001);ctx.bezierCurveTo(48.815000000000005,47.45400000000001,48.456,47.54700000000001,48.106,47.64100000000001);ctx.bezierCurveTo(47.737,47.73900000000001,47.370000000000005,47.83600000000001,46.987,47.90700000000001);ctx.bezierCurveTo(46.54,47.99600000000001,46.09,48.07600000000001,45.622,48.13000000000001);ctx.bezierCurveTo(45.512,48.14800000000001,45.407,48.16300000000001,45.3,48.17400000000001);ctx.bezierCurveTo(44.675999999999995,48.23700000000001,44.052,48.27,43.424,48.272000000000006);ctx.bezierCurveTo(43.322,48.272000000000006,43.221,48.272000000000006,43.12,48.272000000000006);ctx.bezierCurveTo(42.498,48.26800000000001,41.876,48.23700000000001,41.269999999999996,48.17400000000001);ctx.bezierCurveTo(41.178,48.160000000000004,41.08,48.15200000000001,40.992,48.14300000000001);ctx.bezierCurveTo(40.385,48.07300000000001,39.781,47.97200000000001,39.193,47.85000000000001);ctx.bezierCurveTo(39.092,47.824000000000005,38.986,47.79700000000001,38.876,47.775000000000006);ctx.bezierCurveTo(38.348,47.651,37.836999999999996,47.50000000000001,37.335,47.327000000000005);ctx.bezierCurveTo(37.242,47.29200000000001,37.144,47.269000000000005,37.052,47.23100000000001);ctx.bezierCurveTo(36.454,47.01100000000001,35.887,46.75600000000001,35.363,46.46500000000001);ctx.lineTo(8.963,31.771);ctx.bezierCurveTo(6.767999999999999,30.547,5.6739999999999995,28.941000000000003,5.683999999999999,27.336000000000002);ctx.lineTo(5.662,33.44);ctx.bezierCurveTo(5.655,35.046,6.749,36.653999999999996,8.940999999999999,37.872);ctx.lineTo(35.345,52.563);ctx.bezierCurveTo(35.842,52.837,36.379,53.09,36.942,53.299);ctx.bezierCurveTo(36.976,53.31,37.006,53.317,37.04,53.33);ctx.bezierCurveTo(37.132,53.37,37.235,53.393,37.329,53.428);ctx.bezierCurveTo(37.648,53.538999999999994,37.968,53.65,38.296,53.739);ctx.bezierCurveTo(38.485,53.79,38.679,53.827999999999996,38.863,53.876999999999995);ctx.bezierCurveTo(38.966,53.898999999999994,39.07,53.925999999999995,39.178,53.949999999999996);ctx.bezierCurveTo(39.269999999999996,53.97,39.358999999999995,53.992,39.455999999999996,54.01);ctx.bezierCurveTo(39.815999999999995,54.086,40.193,54.150999999999996,40.56099999999999,54.196999999999996);ctx.bezierCurveTo(40.696999999999996,54.218999999999994,40.831999999999994,54.23,40.97099999999999,54.242);ctx.bezierCurveTo(41.066999999999986,54.254999999999995,41.15499999999999,54.26,41.24699999999999,54.272999999999996);ctx.bezierCurveTo(41.379999999999995,54.285999999999994,41.50999999999999,54.303,41.64699999999999,54.31699999999999);ctx.bezierCurveTo(42.01499999999999,54.34799999999999,42.38299999999999,54.36599999999999,42.75399999999999,54.37499999999999);ctx.bezierCurveTo(42.86799999999999,54.37499999999999,42.98399999999999,54.37499999999999,43.10199999999999,54.37499999999999);ctx.bezierCurveTo(43.203999999999986,54.37499999999999,43.30399999999999,54.37499999999999,43.39599999999999,54.37499999999999);ctx.bezierCurveTo(43.56599999999999,54.37499999999999,43.734999999999985,54.379999999999995,43.902999999999984,54.37499999999999);ctx.bezierCurveTo(44.317999999999984,54.35699999999999,44.737999999999985,54.336999999999996,45.14599999999999,54.29099999999999);ctx.bezierCurveTo(45.191999999999986,54.28599999999999,45.237999999999985,54.27699999999999,45.28499999999999,54.27299999999999);ctx.bezierCurveTo(45.39499999999999,54.25699999999999,45.49599999999999,54.24199999999999,45.60699999999999,54.22999999999999);ctx.bezierCurveTo(45.93099999999999,54.19699999999999,46.25999999999999,54.15499999999999,46.57899999999999,54.09899999999999);ctx.bezierCurveTo(46.711999999999996,54.07499999999999,46.83599999999999,54.03099999999999,46.971999999999994,54.005999999999986);ctx.bezierCurveTo(47.352,53.93099999999998,47.724999999999994,53.838999999999984,48.090999999999994,53.734999999999985);ctx.bezierCurveTo(48.28399999999999,53.68799999999999,48.498999999999995,53.65699999999998,48.687999999999995,53.591999999999985);ctx.bezierCurveTo(48.843999999999994,53.53899999999999,48.983,53.478999999999985,49.135999999999996,53.42799999999998);ctx.bezierCurveTo(49.275,53.378999999999984,49.419,53.329999999999984,49.562999999999995,53.274999999999984);ctx.bezierCurveTo(50.105999999999995,53.05999999999998,50.629999999999995,52.835999999999984,51.117,52.55999999999998);ctx.bezierCurveTo(51.160999999999994,52.53599999999998,51.208999999999996,52.51399999999998,51.253,52.48699999999998);ctx.bezierCurveTo(51.354,52.42699999999998,51.446,52.36099999999998,51.547,52.29999999999998);ctx.bezierCurveTo(51.681,52.22099999999998,51.815,52.133999999999986,51.939,52.042999999999985);ctx.bezierCurveTo(52.05,51.96299999999999,52.156,51.880999999999986,52.256,51.798999999999985);ctx.bezierCurveTo(52.374,51.70999999999999,52.489,51.624999999999986,52.592,51.53199999999998);ctx.bezierCurveTo(52.612,51.51199999999998,52.638999999999996,51.49899999999998,52.657,51.48099999999998);ctx.bezierCurveTo(52.699999999999996,51.442999999999984,52.73,51.40099999999998,52.772,51.36299999999998);ctx.bezierCurveTo(52.946999999999996,51.20099999999998,53.1,51.03699999999998,53.245999999999995,50.87099999999998);ctx.bezierCurveTo(53.275,50.83499999999998,53.315,50.79999999999998,53.34799999999999,50.76499999999998);ctx.bezierCurveTo(53.37999999999999,50.72899999999998,53.39799999999999,50.68899999999998,53.42199999999999,50.65199999999998);ctx.bezierCurveTo(53.52299999999999,50.52699999999998,53.60599999999999,50.40499999999998,53.68899999999999,50.27899999999998);ctx.bezierCurveTo(53.71999999999999,50.22799999999998,53.766999999999996,50.17899999999998,53.79899999999999,50.121999999999986);ctx.bezierCurveTo(53.821999999999996,50.097999999999985,53.82699999999999,50.067999999999984,53.840999999999994,50.03299999999999);ctx.bezierCurveTo(53.904999999999994,49.92199999999999,53.949999999999996,49.80999999999999,53.99699999999999,49.694999999999986);ctx.bezierCurveTo(54.023999999999994,49.63299999999999,54.06999999999999,49.570999999999984,54.08899999999999,49.50199999999999);ctx.bezierCurveTo(54.09799999999999,49.47799999999999,54.102999999999994,49.45999999999999,54.10799999999999,49.43199999999999);ctx.bezierCurveTo(54.14999999999999,49.325999999999986,54.17199999999999,49.21199999999999,54.203999999999986,49.109999999999985);ctx.bezierCurveTo(54.22399999999999,49.03899999999999,54.259999999999984,48.96199999999998,54.268999999999984,48.896999999999984);ctx.bezierCurveTo(54.27599999999998,48.878999999999984,54.27599999999998,48.85899999999999,54.27599999999998,48.83699999999998);ctx.bezierCurveTo(54.29699999999998,48.72399999999998,54.31099999999998,48.60799999999998,54.31499999999998,48.49199999999998);ctx.bezierCurveTo(54.319999999999986,48.41699999999998,54.341999999999985,48.34999999999998,54.341999999999985,48.271999999999984);ctx.bezierCurveTo(54.341999999999985,48.23899999999998,54.341999999999985,48.21199999999998,54.341999999999985,48.18099999999998);ctx.lineTo(54.36099999999998,42.076999999999984);ctx.bezierCurveTo(54.35599999999998,42.182999999999986,54.335999999999984,42.289999999999985,54.319999999999986,42.39599999999999);ctx.lineTo(54.32499999999999,42.402999999999984);ctx.lineTo(54.319,42.402);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#FFFFFF";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(49.411,23.834);ctx.bezierCurveTo(55.889,27.439999999999998,55.99,33.245,49.733000000000004,36.903999999999996);ctx.lineTo(51.07300000000001,37.647999999999996);ctx.bezierCurveTo(55.42800000000001,40.07599999999999,55.45400000000001,44.032999999999994,51.12400000000001,46.459999999999994);ctx.bezierCurveTo(46.79400000000001,48.882999999999996,39.69500000000001,48.88799999999999,35.34200000000001,46.459999999999994);ctx.lineTo(8.939,31.767);ctx.bezierCurveTo(4.585,29.341,4.557,25.378999999999998,8.887,22.953);ctx.bezierCurveTo(13.217,20.526,20.316000000000003,20.526,24.669,22.953);ctx.lineTo(26.009,23.697);ctx.bezierCurveTo(32.545,20.197,42.937,20.236,49.406,23.833);ctx.lineTo(49.411,23.834);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(55,42.074);ctx.bezierCurveTo(55,40.17,53.72,38.407,51.396,37.114999999999995);ctx.lineTo(50.967,36.876);ctx.bezierCurveTo(53.601,35.083,55.019,32.809999999999995,54.991,30.407999999999998);ctx.bezierCurveTo(54.956,27.692999999999998,53.092,25.174999999999997,49.73,23.305);ctx.bezierCurveTo(43.156,19.64,32.81999999999999,19.523,26.022,22.997);ctx.lineTo(24.991999999999997,22.424);ctx.bezierCurveTo(20.449999999999996,19.897,13.076999999999998,19.889,8.563999999999997,22.424);ctx.bezierCurveTo(6.271999999999997,23.708,5.010999999999997,25.454,5.010999999999997,27.349);ctx.bezierCurveTo(5.010999999999997,27.42,5.010999999999997,27.488,5.017999999999996,27.56);ctx.lineTo(5,33.434);ctx.bezierCurveTo(4.993,35.349,6.275,37.116,8.604,38.413);ctx.lineTo(35.004,53.105);ctx.bezierCurveTo(35.525,53.397999999999996,36.092999999999996,53.663,36.784,53.913);ctx.bezierCurveTo(36.847,53.94,36.914,53.964999999999996,36.984,53.983999999999995);ctx.lineTo(37.139,54.035);ctx.bezierCurveTo(37.451,54.141,37.761,54.254999999999995,38.089000000000006,54.342);ctx.bezierCurveTo(38.227000000000004,54.379999999999995,38.36200000000001,54.41,38.49700000000001,54.44);ctx.lineTo(39.29800000000001,54.626999999999995);ctx.bezierCurveTo(39.67200000000001,54.702,40.05900000000001,54.772,40.45000000000001,54.81999999999999);ctx.lineTo(41.57600000000001,54.943999999999996);ctx.bezierCurveTo(41.95100000000001,54.97,42.333000000000006,54.995,42.71600000000001,55.001999999999995);ctx.lineTo(43.57000000000001,54.995);ctx.bezierCurveTo(43.68800000000001,55.001999999999995,43.79800000000001,55.001999999999995,43.91400000000001,54.995);ctx.bezierCurveTo(44.34400000000001,54.979,44.77400000000001,54.961999999999996,45.20000000000001,54.915);ctx.lineTo(45.80100000000001,54.836);ctx.bezierCurveTo(46.09400000000001,54.802,46.38600000000001,54.766999999999996,46.67600000000001,54.716);ctx.bezierCurveTo(46.77300000000001,54.698,46.85600000000001,54.678000000000004,46.94700000000001,54.655);ctx.lineTo(47.05000000000001,54.618);ctx.bezierCurveTo(47.45000000000001,54.536,47.83100000000001,54.442,48.21900000000001,54.338);ctx.lineTo(48.44500000000001,54.287);ctx.bezierCurveTo(48.58100000000001,54.254,48.71600000000001,54.225,48.84700000000001,54.189);ctx.bezierCurveTo(48.95100000000001,54.156,49.05200000000001,54.118,49.15100000000001,54.083);ctx.lineTo(49.31500000000001,54.019999999999996);ctx.bezierCurveTo(49.46700000000001,53.971,49.619000000000014,53.913999999999994,49.76600000000001,53.858999999999995);ctx.bezierCurveTo(50.42600000000001,53.602999999999994,50.95000000000001,53.367999999999995,51.40100000000001,53.111);ctx.lineTo(51.54300000000001,53.031);ctx.bezierCurveTo(51.62000000000001,52.989,51.68500000000002,52.937,51.756000000000014,52.894999999999996);ctx.lineTo(51.95800000000001,52.763999999999996);ctx.bezierCurveTo(52.06800000000001,52.693,52.177000000000014,52.62799999999999,52.271000000000015,52.55799999999999);ctx.bezierCurveTo(52.369000000000014,52.48899999999999,52.45200000000001,52.419999999999995,52.54300000000001,52.35099999999999);ctx.lineTo(52.692000000000014,52.233999999999995);ctx.bezierCurveTo(52.792000000000016,52.160999999999994,52.887000000000015,52.07899999999999,53.048000000000016,51.949999999999996);ctx.bezierCurveTo(53.085000000000015,51.912,53.12700000000002,51.87499999999999,53.16800000000001,51.82299999999999);ctx.bezierCurveTo(53.363000000000014,51.64999999999999,53.536000000000016,51.468999999999994,53.70600000000001,51.276999999999994);ctx.lineTo(53.80800000000001,51.17099999999999);ctx.bezierCurveTo(53.836000000000006,51.13799999999999,53.864000000000004,51.10099999999999,53.90100000000001,51.044999999999995);ctx.bezierCurveTo(54.01100000000001,50.907,54.11200000000001,50.77199999999999,54.21800000000001,50.593999999999994);ctx.bezierCurveTo(54.25700000000001,50.54299999999999,54.29100000000001,50.50099999999999,54.36700000000001,50.352999999999994);ctx.bezierCurveTo(54.43800000000001,50.22599999999999,54.49900000000001,50.09499999999999,54.58100000000001,49.92399999999999);ctx.bezierCurveTo(54.60800000000001,49.86599999999999,54.64200000000001,49.81099999999999,54.68300000000001,49.67499999999999);ctx.bezierCurveTo(54.739000000000004,49.55599999999999,54.76100000000001,49.43799999999999,54.82200000000001,49.23799999999999);ctx.bezierCurveTo(54.84700000000001,49.16899999999999,54.86500000000001,49.09799999999999,54.88600000000001,48.968999999999994);ctx.bezierCurveTo(54.90800000000001,48.84199999999999,54.92500000000001,48.71999999999999,54.94600000000001,48.520999999999994);ctx.bezierCurveTo(54.957000000000015,48.45199999999999,54.96500000000001,48.382999999999996,54.96700000000001,48.20099999999999);ctx.lineTo(54.988000000000014,42.31999999999999);ctx.bezierCurveTo(54.99800000000001,42.24399999999999,54.99800000000001,42.16499999999999,54.99800000000001,42.08899999999999);ctx.lineTo(55,42.083);ctx.lineTo(55,42.074);ctx.closePath();ctx.moveTo(9.22,23.498);ctx.bezierCurveTo(11.297,22.331,14.034,21.752000000000002,16.773,21.752000000000002);ctx.bezierCurveTo(19.511,21.752000000000002,22.253,22.331000000000003,24.349,23.490000000000002);ctx.lineTo(26.007,24.411);ctx.lineTo(26.332,24.240000000000002);ctx.bezierCurveTo(32.654,20.852000000000004,42.867000000000004,20.906000000000002,49.089,24.369000000000003);ctx.bezierCurveTo(52.04,26.011000000000003,53.675,28.152000000000005,53.702,30.407000000000004);ctx.bezierCurveTo(53.729,32.61300000000001,52.202999999999996,34.728,49.402,36.366);ctx.lineTo(48.469,36.915);ctx.lineTo(50.755,38.188);ctx.bezierCurveTo(52.656000000000006,39.25,53.71,40.626000000000005,53.71,42.068000000000005);ctx.bezierCurveTo(53.71,42.07300000000001,53.71,42.08200000000001,53.71,42.09);ctx.lineTo(53.705,42.09);ctx.lineTo(53.705,42.094);ctx.bezierCurveTo(53.705,42.143,53.701,42.19,53.690999999999995,42.237);ctx.lineTo(53.675,42.383);ctx.bezierCurveTo(53.672999999999995,42.463,53.663999999999994,42.552,53.653999999999996,42.631);ctx.bezierCurveTo(53.635,42.687,53.626,42.742,53.580999999999996,42.896);ctx.bezierCurveTo(53.556,42.973,53.534,43.053,53.507,43.125);ctx.lineTo(53.41,43.352);ctx.bezierCurveTo(53.370999999999995,43.445,53.327,43.544,53.272999999999996,43.635999999999996);ctx.lineTo(53.141999999999996,43.842);ctx.bezierCurveTo(53.071999999999996,43.955,52.995,44.062,52.912,44.173);ctx.lineTo(52.747,44.368);ctx.bezierCurveTo(52.618,44.518,52.477,44.665,52.323,44.811);ctx.lineTo(52.153,44.964);ctx.bezierCurveTo(52.082,45.035,51.998999999999995,45.095,51.916,45.157);ctx.lineTo(51.76199999999999,45.275999999999996);ctx.bezierCurveTo(51.69799999999999,45.331999999999994,51.63099999999999,45.382999999999996,51.559999999999995,45.431999999999995);ctx.bezierCurveTo(51.46699999999999,45.49399999999999,51.37499999999999,45.556,51.193999999999996,45.666);ctx.lineTo(51.071999999999996,45.751);ctx.bezierCurveTo(51.04899999999999,45.769,51.017999999999994,45.782,50.99399999999999,45.8);ctx.bezierCurveTo(50.92999999999999,45.834999999999994,50.864999999999995,45.875,50.800999999999995,45.913);ctx.bezierCurveTo(50.632999999999996,46.006,50.459999999999994,46.099999999999994,50.276999999999994,46.187999999999995);ctx.bezierCurveTo(49.99999999999999,46.318999999999996,49.690999999999995,46.446999999999996,49.33299999999999,46.586999999999996);ctx.bezierCurveTo(49.19899999999999,46.638,49.06199999999999,46.684999999999995,48.922999999999995,46.736999999999995);ctx.bezierCurveTo(48.62799999999999,46.840999999999994,48.318999999999996,46.92399999999999,47.928999999999995,47.02799999999999);ctx.bezierCurveTo(47.577999999999996,47.12399999999999,47.224999999999994,47.212999999999994,46.855999999999995,47.285999999999994);ctx.bezierCurveTo(46.422999999999995,47.373999999999995,45.989,47.449999999999996,45.541999999999994,47.507999999999996);ctx.lineTo(45.227,47.547999999999995);ctx.bezierCurveTo(44.657999999999994,47.60999999999999,44.047999999999995,47.645999999999994,43.339,47.645999999999994);ctx.lineTo(43.118,47.645999999999994);ctx.bezierCurveTo(42.519000000000005,47.645999999999994,41.916000000000004,47.614999999999995,41.327000000000005,47.55199999999999);ctx.lineTo(41.05500000000001,47.520999999999994);ctx.bezierCurveTo(40.471000000000004,47.45099999999999,39.88600000000001,47.361999999999995,39.32200000000001,47.23799999999999);ctx.lineTo(39.02500000000001,47.166999999999994);ctx.bezierCurveTo(38.53800000000001,47.04899999999999,38.036000000000016,46.904999999999994,37.552000000000014,46.73799999999999);ctx.lineTo(37.32100000000001,46.66299999999999);ctx.bezierCurveTo(36.74300000000001,46.45199999999999,36.19400000000001,46.200999999999986,35.683000000000014,45.91499999999999);ctx.lineTo(9.281,31.226);ctx.bezierCurveTo(7.393000000000001,30.171,6.337000000000001,28.807,6.325000000000001,27.368);ctx.bezierCurveTo(6.325000000000001,27.357,6.325000000000001,27.349999999999998,6.325000000000001,27.337);ctx.bezierCurveTo(6.319000000000001,25.917,7.3530000000000015,24.548,9.232000000000001,23.497);ctx.lineTo(9.225000000000001,23.499);ctx.lineTo(9.22,23.499);ctx.closePath();ctx.moveTo(53.686,48.173);ctx.lineTo(53.681,48.311);ctx.lineTo(53.660999999999994,48.466);ctx.bezierCurveTo(53.657999999999994,48.555,53.648999999999994,48.633,53.60999999999999,48.825);ctx.lineTo(53.562999999999995,48.976000000000006);ctx.bezierCurveTo(53.541,49.056000000000004,53.516999999999996,49.138000000000005,53.443999999999996,49.330000000000005);ctx.lineTo(53.385999999999996,49.441);ctx.bezierCurveTo(53.342999999999996,49.539,53.30499999999999,49.636,53.217999999999996,49.796);ctx.lineTo(53.116,49.942);ctx.bezierCurveTo(53.043,50.055,52.969,50.166,52.831,50.357);ctx.lineTo(52.729000000000006,50.461);ctx.bezierCurveTo(52.598000000000006,50.611,52.458000000000006,50.76,52.293000000000006,50.911);ctx.lineTo(52.14000000000001,51.059000000000005);ctx.bezierCurveTo(52.06600000000001,51.12200000000001,51.99000000000001,51.179,51.91100000000001,51.246);ctx.lineTo(51.757000000000005,51.370000000000005);ctx.bezierCurveTo(51.684000000000005,51.422000000000004,51.621,51.476000000000006,51.53600000000001,51.535000000000004);ctx.bezierCurveTo(51.458000000000006,51.588,51.36500000000001,51.645,51.17300000000001,51.764);ctx.lineTo(50.90100000000001,51.935);ctx.lineTo(50.78200000000001,52.010000000000005);ctx.bezierCurveTo(50.38200000000001,52.232000000000006,49.91400000000001,52.441,49.31300000000001,52.676);ctx.bezierCurveTo(49.17400000000001,52.727000000000004,49.04100000000001,52.778,48.90400000000001,52.826);ctx.lineTo(48.70500000000001,52.902);ctx.bezierCurveTo(48.63200000000001,52.932,48.56500000000001,52.955,48.484000000000016,52.981);ctx.bezierCurveTo(48.39200000000002,53.012,48.296000000000014,53.033,48.20800000000001,53.052);ctx.bezierCurveTo(48.10700000000001,53.07,48.01100000000001,53.094,47.91300000000001,53.121);ctx.bezierCurveTo(47.55900000000001,53.214000000000006,47.20000000000001,53.301,46.84100000000001,53.378);ctx.bezierCurveTo(46.763000000000005,53.39,46.687000000000005,53.411,46.60600000000001,53.434);ctx.bezierCurveTo(46.56000000000001,53.448,46.51000000000001,53.467,46.45900000000001,53.474);ctx.bezierCurveTo(46.19200000000001,53.522999999999996,45.92800000000001,53.553999999999995,45.65300000000001,53.584999999999994);ctx.lineTo(45.07800000000001,53.66);ctx.bezierCurveTo(44.67300000000001,53.699999999999996,44.27700000000001,53.730999999999995,43.87700000000001,53.739999999999995);ctx.lineTo(42.76200000000001,53.745999999999995);ctx.bezierCurveTo(42.40800000000001,53.730999999999995,42.04400000000001,53.712999999999994,41.69500000000001,53.687999999999995);ctx.lineTo(40.64000000000001,53.574999999999996);ctx.bezierCurveTo(40.27700000000001,53.525999999999996,39.92200000000001,53.471,39.45100000000001,53.370999999999995);ctx.lineTo(38.79800000000001,53.214);ctx.bezierCurveTo(38.68300000000001,53.19,38.56500000000001,53.163,38.45600000000001,53.132);ctx.bezierCurveTo(38.15900000000001,53.052,37.87100000000001,52.954,37.52900000000001,52.833999999999996);ctx.lineTo(37.16900000000001,52.717);ctx.bezierCurveTo(36.63000000000001,52.510999999999996,36.12600000000001,52.272999999999996,35.66000000000001,52.018);ctx.lineTo(9.258,37.333);ctx.bezierCurveTo(7.350999999999999,36.269999999999996,6.293999999999999,34.888,6.300999999999999,33.44);ctx.lineTo(6.3069999999999995,30.505);ctx.bezierCurveTo(6.895999999999999,31.171,7.670999999999999,31.782999999999998,8.623999999999999,32.312);ctx.lineTo(35.025999999999996,47.004999999999995);ctx.bezierCurveTo(37.297,48.272,40.272,48.900999999999996,43.251,48.900999999999996);ctx.bezierCurveTo(46.229,48.900999999999996,49.195,48.267999999999994,51.455999999999996,47.004999999999995);ctx.bezierCurveTo(52.37499999999999,46.483999999999995,53.12799999999999,45.9,53.702999999999996,45.251);ctx.lineTo(53.69799999999999,48.169999999999995);ctx.lineTo(53.69,48.169999999999995);ctx.lineTo(53.686,48.173);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(18.922,14.08);ctx.lineTo(18.789,31.497);ctx.lineTo(32.652,38.652);ctx.lineTo(32.678000000000004,34.433);ctx.lineTo(32.784000000000006,21.23);ctx.lineTo(27.503000000000007,18.506);ctx.lineTo(18.922,14.08);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#FFFFFF";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(46.736,13.211);ctx.lineTo(32.928,6.086);ctx.lineTo(19.465,13.28);ctx.lineTo(33.274,20.406);ctx.lineTo(39.92,16.854);ctx.lineTo(46.736,13.211);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(33.637,38.636);ctx.lineTo(47.137,31.421000000000003);ctx.lineTo(47.268,14.016000000000002);ctx.lineTo(33.772,21.232000000000003);ctx.lineTo(33.666,34.022000000000006);ctx.lineTo(33.637,38.636);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(37.185,27.22);ctx.bezierCurveTo(37.403000000000006,26.939999999999998,37.713,26.811,37.875,26.929);ctx.bezierCurveTo(38.039,27.048,37.996,27.369999999999997,37.776,27.648999999999997);ctx.bezierCurveTo(37.559000000000005,27.929,37.249,28.06,37.086000000000006,27.939999999999998);ctx.bezierCurveTo(36.923,27.823,36.966,27.5,37.185,27.22);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(35.209,28.327);ctx.bezierCurveTo(35.429,28.047,35.737,27.916,35.900000000000006,28.034000000000002);ctx.bezierCurveTo(36.062000000000005,28.154000000000003,36.02,28.475,35.800000000000004,28.755000000000003);ctx.bezierCurveTo(35.581,29.034000000000002,35.272000000000006,29.163000000000004,35.11000000000001,29.046000000000003);ctx.bezierCurveTo(34.948,28.926,34.99,28.604,35.209,28.327);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(39.452,26.743);ctx.lineTo(45.382999999999996,23.444);ctx.bezierCurveTo(45.653999999999996,23.288999999999998,45.87499999999999,22.951999999999998,45.87499999999999,22.689);ctx.lineTo(45.87499999999999,22.689);ctx.bezierCurveTo(45.87499999999999,22.427,45.65299999999999,22.338,45.382999999999996,22.49);ctx.lineTo(39.452,25.787999999999997);ctx.bezierCurveTo(39.181,25.941999999999997,38.958999999999996,26.275999999999996,38.958999999999996,26.539999999999996);ctx.lineTo(38.958999999999996,26.539999999999996);ctx.bezierCurveTo(38.959,26.804,39.182,26.895,39.452,26.743);ctx.lineTo(39.452,26.743);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(37.182,33.896);ctx.bezierCurveTo(37.401,33.616,37.708000000000006,33.485,37.870000000000005,33.603);ctx.bezierCurveTo(38.034000000000006,33.72,37.99100000000001,34.044000000000004,37.77100000000001,34.324);ctx.bezierCurveTo(37.55500000000001,34.604,37.24700000000001,34.735,37.083000000000006,34.617);ctx.bezierCurveTo(36.921,34.497,36.964,34.175,37.182,33.896);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(35.209,34.989);ctx.bezierCurveTo(35.429,34.711999999999996,35.737,34.580999999999996,35.902,34.696);ctx.bezierCurveTo(36.067,34.815999999999995,36.023,35.14,35.803000000000004,35.419999999999995);ctx.bezierCurveTo(35.583000000000006,35.69999999999999,35.275000000000006,35.83299999999999,35.11000000000001,35.712999999999994);ctx.bezierCurveTo(34.945,35.596,34.99,35.269,35.209,34.989);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(39.452,33.411);ctx.lineTo(45.382999999999996,30.108);ctx.bezierCurveTo(45.653999999999996,29.956,45.87499999999999,29.618000000000002,45.87499999999999,29.356);ctx.lineTo(45.87499999999999,29.356);ctx.bezierCurveTo(45.87499999999999,29.094,45.65299999999999,29.005000000000003,45.382999999999996,29.159000000000002);ctx.lineTo(39.452,32.461000000000006);ctx.bezierCurveTo(39.181,32.614000000000004,38.958999999999996,32.947,38.958999999999996,33.212);ctx.lineTo(38.958999999999996,33.212);ctx.bezierCurveTo(38.958999999999996,33.472,39.181999999999995,33.565000000000005,39.452,33.413000000000004);ctx.lineTo(39.452,33.411);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(36.414,12.166);ctx.bezierCurveTo(36.419000000000004,12.109,36.459,12.066,36.522,12.027000000000001);ctx.bezierCurveTo(36.612,11.975000000000001,36.751,11.957,36.891999999999996,11.97);ctx.lineTo(39.141,12.236);ctx.bezierCurveTo(39.15,12.236,39.155,12.243,39.164,12.243);ctx.bezierCurveTo(39.194,12.247,39.224000000000004,12.256,39.253,12.261000000000001);ctx.bezierCurveTo(39.279,12.273000000000001,39.309,12.278,39.327,12.287);ctx.bezierCurveTo(39.352,12.296000000000001,39.372,12.307,39.394,12.321000000000002);ctx.bezierCurveTo(39.415,12.334000000000001,39.439,12.343000000000002,39.455,12.357000000000001);ctx.bezierCurveTo(39.47,12.371,39.483,12.385000000000002,39.492,12.398000000000001);ctx.bezierCurveTo(39.510999999999996,12.415000000000001,39.523999999999994,12.432000000000002,39.532999999999994,12.446000000000002);ctx.bezierCurveTo(39.532999999999994,12.450000000000001,39.54599999999999,12.458000000000002,39.54599999999999,12.46);ctx.lineTo(40.02499999999999,13.714);ctx.bezierCurveTo(40.07799999999999,13.851,39.92499999999999,13.97,39.67699999999999,13.981);ctx.bezierCurveTo(39.43599999999999,13.991999999999999,39.19499999999999,13.885,39.13799999999999,13.749);ctx.lineTo(38.849999999999994,12.997);ctx.lineTo(36.785999999999994,14.149);ctx.bezierCurveTo(36.672999999999995,14.209999999999999,36.501,14.226999999999999,36.330999999999996,14.191999999999998);ctx.lineTo(34.275,13.733999999999998);ctx.lineTo(35.089,14.879999999999999);ctx.bezierCurveTo(35.152,14.967999999999998,35.123,15.068,35.015,15.132);ctx.lineTo(32.95,16.284);ctx.lineTo(34.300000000000004,16.444);ctx.bezierCurveTo(34.548,16.473,34.73500000000001,16.605,34.720000000000006,16.744);ctx.bezierCurveTo(34.705000000000005,16.878,34.48800000000001,16.965,34.24100000000001,16.937);ctx.lineTo(31.993000000000006,16.666);ctx.bezierCurveTo(31.982000000000006,16.666,31.975000000000005,16.662,31.967000000000006,16.662);ctx.bezierCurveTo(31.938000000000006,16.657999999999998,31.907000000000007,16.648999999999997,31.879000000000005,16.644);ctx.bezierCurveTo(31.854000000000006,16.633,31.825000000000006,16.628999999999998,31.807000000000006,16.619);ctx.bezierCurveTo(31.780000000000005,16.61,31.762000000000004,16.595,31.738000000000007,16.588);ctx.bezierCurveTo(31.717000000000006,16.571,31.693000000000005,16.562,31.679000000000006,16.549);ctx.bezierCurveTo(31.665000000000006,16.535999999999998,31.649000000000004,16.519,31.638000000000005,16.506);ctx.bezierCurveTo(31.622000000000007,16.495,31.609000000000005,16.474,31.599000000000004,16.459);ctx.bezierCurveTo(31.599000000000004,16.451999999999998,31.589000000000002,16.45,31.589000000000002,16.443);ctx.lineTo(31.111,15.190000000000001);ctx.bezierCurveTo(31.080000000000002,15.108,31.12,15.033000000000001,31.21,14.979000000000001);ctx.bezierCurveTo(31.269000000000002,14.947000000000001,31.358,14.922,31.457,14.917000000000002);ctx.bezierCurveTo(31.698,14.910000000000002,31.94,15.012000000000002,31.995,15.151000000000002);ctx.lineTo(32.279,15.903000000000002);ctx.lineTo(34.164,14.856000000000002);ctx.lineTo(33.194,13.499000000000002);ctx.lineTo(30.754,12.963000000000003);ctx.lineTo(28.871000000000002,14.010000000000003);ctx.lineTo(30.219,14.172000000000004);ctx.bezierCurveTo(30.468,14.201000000000004,30.653000000000002,14.333000000000004,30.639000000000003,14.469000000000005);ctx.bezierCurveTo(30.618000000000002,14.603000000000005,30.405,14.690000000000005,30.160000000000004,14.662000000000004);ctx.lineTo(27.914000000000005,14.396000000000004);ctx.bezierCurveTo(27.904000000000003,14.396000000000004,27.899000000000004,14.392000000000005,27.887000000000004,14.392000000000005);ctx.bezierCurveTo(27.856000000000005,14.385000000000005,27.828000000000003,14.376000000000005,27.798000000000005,14.370000000000005);ctx.bezierCurveTo(27.773000000000007,14.361000000000004,27.744000000000007,14.359000000000005,27.725000000000005,14.349000000000004);ctx.bezierCurveTo(27.699000000000005,14.338000000000005,27.680000000000003,14.325000000000005,27.654000000000003,14.316000000000004);ctx.bezierCurveTo(27.636000000000003,14.301000000000004,27.609,14.291000000000004,27.591000000000005,14.277000000000005);ctx.bezierCurveTo(27.575000000000006,14.266000000000005,27.563000000000006,14.250000000000005,27.551000000000005,14.236000000000004);ctx.bezierCurveTo(27.537000000000006,14.223000000000004,27.521000000000004,14.204000000000004,27.510000000000005,14.184000000000005);ctx.bezierCurveTo(27.510000000000005,14.182000000000004,27.499000000000006,14.175000000000004,27.499000000000006,14.168000000000005);ctx.lineTo(27.020000000000007,12.915000000000004);ctx.bezierCurveTo(26.990000000000006,12.835000000000004,27.031000000000006,12.758000000000004,27.119000000000007,12.704000000000004);ctx.bezierCurveTo(27.179000000000006,12.672000000000004,27.267000000000007,12.650000000000004,27.367000000000008,12.642000000000005);ctx.bezierCurveTo(27.607000000000006,12.633000000000004,27.85000000000001,12.735000000000005,27.90500000000001,12.876000000000005);ctx.lineTo(28.19000000000001,13.628000000000005);ctx.lineTo(30.25700000000001,12.476000000000006);ctx.bezierCurveTo(30.37100000000001,12.415000000000006,30.54200000000001,12.398000000000007,30.712000000000007,12.433000000000007);ctx.lineTo(32.76800000000001,12.885000000000007);ctx.lineTo(31.954000000000008,11.742000000000006);ctx.bezierCurveTo(31.889000000000006,11.653000000000006,31.918000000000006,11.553000000000006,32.02600000000001,11.490000000000006);ctx.lineTo(34.09100000000001,10.338000000000006);ctx.lineTo(32.74200000000001,10.176000000000005);ctx.bezierCurveTo(32.49500000000001,10.147000000000006,32.308000000000014,10.015000000000006,32.31900000000001,9.876000000000005);ctx.bezierCurveTo(32.32400000000001,9.819000000000004,32.36400000000001,9.776000000000005,32.42700000000001,9.737000000000005);ctx.bezierCurveTo(32.51700000000001,9.683000000000005,32.656000000000006,9.664000000000005,32.79800000000001,9.680000000000005);ctx.lineTo(35.04500000000001,9.945000000000006);ctx.bezierCurveTo(35.05700000000001,9.945000000000006,35.05900000000001,9.953000000000005,35.07000000000001,9.953000000000005);ctx.bezierCurveTo(35.10000000000001,9.955000000000005,35.129000000000005,9.964000000000004,35.159000000000006,9.971000000000005);ctx.bezierCurveTo(35.18300000000001,9.980000000000006,35.214000000000006,9.986000000000006,35.233000000000004,9.996000000000006);ctx.bezierCurveTo(35.258,10.005000000000006,35.277,10.020000000000005,35.300000000000004,10.027000000000006);ctx.bezierCurveTo(35.321000000000005,10.043000000000006,35.345000000000006,10.055000000000007,35.359,10.066000000000006);ctx.bezierCurveTo(35.374,10.082000000000006,35.391,10.096000000000005,35.4,10.109000000000005);ctx.bezierCurveTo(35.417,10.124000000000006,35.431,10.141000000000005,35.44,10.156000000000006);ctx.bezierCurveTo(35.44,10.160000000000005,35.449999999999996,10.165000000000006,35.449999999999996,10.172000000000006);ctx.lineTo(35.928999999999995,11.425000000000006);ctx.bezierCurveTo(35.983999999999995,11.564000000000005,35.824999999999996,11.681000000000006,35.581999999999994,11.693000000000007);ctx.bezierCurveTo(35.339999999999996,11.701000000000006,35.099,11.597000000000007,35.041999999999994,11.459000000000007);ctx.lineTo(34.754,10.707000000000006);ctx.lineTo(32.872,11.754000000000007);ctx.lineTo(33.842,13.110000000000007);ctx.lineTo(36.282,13.647000000000007);ctx.lineTo(38.165,12.598000000000008);ctx.lineTo(36.819,12.439000000000007);ctx.bezierCurveTo(36.57,12.435000000000008,36.381,12.300000000000008,36.401,12.164000000000007);ctx.lineTo(36.414,12.166);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(47.763,12.664);ctx.lineTo(32.915,5);ctx.lineTo(17.936,13.007);ctx.lineTo(17.934,13.57);ctx.lineTo(17.796,32.068);ctx.lineTo(33.143,39.986999999999995);ctx.lineTo(33.631,39.724999999999994);ctx.lineTo(48.121,31.983999999999995);ctx.lineTo(48.261,13.489999999999995);ctx.lineTo(48.266000000000005,12.923999999999994);ctx.lineTo(47.764,12.664999999999994);ctx.lineTo(47.763,12.664);ctx.closePath();ctx.moveTo(47.268,14.016);ctx.lineTo(47.234,18.659);ctx.lineTo(46.737,18.927999999999997);ctx.lineTo(33.732,25.875999999999998);ctx.lineTo(33.772,21.229);ctx.lineTo(47.268,14.016);ctx.closePath();ctx.moveTo(33.637,38.636);ctx.lineTo(33.663000000000004,34.022000000000006);ctx.lineTo(33.665000000000006,33.67300000000001);ctx.lineTo(33.769000000000005,33.61500000000001);ctx.lineTo(47.17100000000001,26.45200000000001);ctx.lineTo(47.13600000000001,31.41800000000001);ctx.lineTo(33.63300000000001,38.63400000000001);ctx.lineTo(33.637,38.636);ctx.closePath();ctx.moveTo(32.651,38.656);ctx.lineTo(18.788000000000004,31.497999999999998);ctx.lineTo(18.921000000000003,14.081999999999997);ctx.lineTo(32.783,21.233999999999998);ctx.lineTo(32.674,34.436);ctx.lineTo(32.649,38.656);ctx.lineTo(32.651,38.656);ctx.closePath();ctx.moveTo(19.465,13.28);ctx.lineTo(20.789,12.572999999999999);ctx.lineTo(34.539,19.737);ctx.lineTo(33.281,20.407);ctx.lineTo(19.465,13.28);ctx.closePath();ctx.moveTo(46.736,13.211);ctx.lineTo(45.574999999999996,13.831);ctx.lineTo(31.828,6.666);ctx.lineTo(32.92,6.08);ctx.lineTo(46.732,13.211);ctx.lineTo(46.736,13.211);ctx.closePath();ctx.moveTo(33.771,26.4);ctx.lineTo(33.766,26.948);ctx.lineTo(47.224,19.755000000000003);ctx.lineTo(47.18,25.357000000000003);ctx.lineTo(46.731,25.596000000000004);ctx.lineTo(33.672000000000004,32.57300000000001);ctx.lineTo(33.721000000000004,26.355000000000008);ctx.lineTo(33.766000000000005,26.380000000000006);ctx.lineTo(33.773,26.402000000000005);ctx.lineTo(33.771,26.4);ctx.closePath();ctx.moveTo(30.907,7.166);ctx.lineTo(44.657,14.33);ctx.lineTo(35.468999999999994,19.239);ctx.lineTo(21.715,12.08);ctx.lineTo(30.907,7.166);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(37.185,21.507);ctx.bezierCurveTo(37.403000000000006,21.227,37.711000000000006,21.097,37.875,21.215);ctx.bezierCurveTo(38.041,21.334,37.996,21.657,37.778,21.936);ctx.bezierCurveTo(37.561,22.216,37.254,22.345,37.088,22.227);ctx.bezierCurveTo(36.923,22.109,36.968,21.786,37.185,21.507);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(35.209,22.609);ctx.bezierCurveTo(35.429,22.329,35.737,22.197000000000003,35.902,22.316000000000003);ctx.bezierCurveTo(36.067,22.434,36.023,22.756000000000004,35.803000000000004,23.038000000000004);ctx.bezierCurveTo(35.583000000000006,23.318000000000005,35.275000000000006,23.450000000000003,35.11000000000001,23.331000000000003);ctx.bezierCurveTo(34.945,23.214,34.99,22.891,35.209,22.609);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(39.452,21.03);ctx.lineTo(45.382999999999996,17.727);ctx.bezierCurveTo(45.653999999999996,17.575,45.87499999999999,17.235,45.87499999999999,16.972);ctx.lineTo(45.87499999999999,16.972);ctx.bezierCurveTo(45.87499999999999,16.71,45.65299999999999,16.623,45.382999999999996,16.775000000000002);ctx.lineTo(39.452,20.074);ctx.bezierCurveTo(39.181,20.229000000000003,38.958999999999996,20.566000000000003,38.958999999999996,20.826);ctx.lineTo(38.958999999999996,20.826);ctx.bezierCurveTo(38.959,21.089,39.182,21.182,39.452,21.03);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.restore();ctx.restore();}},// 站点组
subnetwork:{width:60,height:60,draw:function draw(ctx){ctx.save();ctx.strokeStyle="rgba(0,0,0,0)";ctx.miterLimit=4;ctx.font="15px ''";ctx.font="   15px ''";ctx.save();ctx.font="   15px ''";ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(51.127,42.045);ctx.bezierCurveTo(51.342000000000006,41.883,51.563,41.715,51.754000000000005,41.547000000000004);ctx.bezierCurveTo(51.764,41.539,51.775000000000006,41.533,51.781000000000006,41.522000000000006);ctx.bezierCurveTo(51.81400000000001,41.492000000000004,51.836000000000006,41.46300000000001,51.86300000000001,41.432);ctx.bezierCurveTo(52.17600000000001,41.155,52.45300000000001,40.86,52.69500000000001,40.569);ctx.bezierCurveTo(52.736000000000004,40.53,52.79200000000001,40.489000000000004,52.82300000000001,40.446000000000005);ctx.bezierCurveTo(52.87400000000001,40.38100000000001,52.906000000000006,40.309000000000005,52.95600000000001,40.252);ctx.bezierCurveTo(53.10200000000001,40.064,53.22700000000001,39.877,53.35000000000001,39.689);ctx.bezierCurveTo(53.397000000000006,39.625,53.452000000000005,39.551,53.49600000000001,39.488);ctx.bezierCurveTo(53.51700000000001,39.433,53.537000000000006,39.385,53.56400000000001,39.333999999999996);ctx.bezierCurveTo(53.660000000000004,39.166,53.74300000000001,38.99399999999999,53.81600000000001,38.82599999999999);ctx.bezierCurveTo(53.857000000000006,38.73199999999999,53.90700000000001,38.657999999999994,53.93900000000001,38.565999999999995);ctx.bezierCurveTo(53.95300000000001,38.525,53.96000000000001,38.486,53.980000000000004,38.45099999999999);ctx.bezierCurveTo(54.040000000000006,38.28699999999999,54.084,38.120999999999995,54.126000000000005,37.952999999999996);ctx.bezierCurveTo(54.15200000000001,37.855,54.193000000000005,37.763999999999996,54.21300000000001,37.662);ctx.bezierCurveTo(54.21800000000001,37.631,54.21800000000001,37.599,54.22700000000001,37.568);ctx.bezierCurveTo(54.25900000000001,37.391999999999996,54.27400000000001,37.213,54.29100000000001,37.041);ctx.bezierCurveTo(54.29500000000001,36.939,54.32200000000001,36.831999999999994,54.32200000000001,36.736);ctx.bezierCurveTo(54.32200000000001,36.687,54.32200000000001,36.637,54.32200000000001,36.593999999999994);ctx.lineTo(54.34100000000001,30.488999999999994);ctx.bezierCurveTo(54.34100000000001,30.639999999999993,54.31900000000001,30.780999999999995,54.30500000000001,30.934999999999995);ctx.bezierCurveTo(54.291000000000004,31.108999999999995,54.27400000000001,31.288999999999994,54.242000000000004,31.464999999999996);ctx.bezierCurveTo(54.220000000000006,31.598999999999997,54.178000000000004,31.725999999999996,54.145,31.854999999999997);ctx.bezierCurveTo(54.1,32.020999999999994,54.053000000000004,32.184999999999995,53.995000000000005,32.342);ctx.bezierCurveTo(53.949000000000005,32.472,53.89300000000001,32.594,53.83500000000001,32.722);ctx.bezierCurveTo(53.75300000000001,32.9,53.681000000000004,33.066,53.58800000000001,33.24);ctx.bezierCurveTo(53.525000000000006,33.353,53.446000000000005,33.472,53.373000000000005,33.592);ctx.bezierCurveTo(53.25000000000001,33.778,53.12200000000001,33.971,52.979000000000006,34.156);ctx.bezierCurveTo(52.897000000000006,34.266999999999996,52.815000000000005,34.367,52.723000000000006,34.474);ctx.bezierCurveTo(52.471000000000004,34.769,52.2,35.064,51.889,35.339999999999996);ctx.bezierCurveTo(51.85,35.38099999999999,51.815000000000005,35.416,51.772000000000006,35.45099999999999);ctx.bezierCurveTo(51.581,35.626999999999995,51.36000000000001,35.791,51.139,35.956999999999994);ctx.bezierCurveTo(51.028000000000006,36.041,50.940000000000005,36.12499999999999,50.826,36.208999999999996);ctx.bezierCurveTo(50.480000000000004,36.45099999999999,50.122,36.687999999999995,49.732,36.919999999999995);ctx.lineTo(49.711,43.01899999999999);ctx.bezierCurveTo(50.101,42.79299999999999,50.466,42.55999999999999,50.808,42.31399999999999);ctx.bezierCurveTo(50.923,42.214999999999996,51.019,42.126999999999995,51.131,42.04099999999999);ctx.lineTo(51.131,42.04899999999999);ctx.lineTo(51.126,42.04899999999999);ctx.lineTo(51.126,42.045);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(49.057,44.117);ctx.lineTo(49.081,36.559999999999995);ctx.lineTo(49.394000000000005,36.373);ctx.bezierCurveTo(49.761,36.150999999999996,50.11300000000001,35.933,50.435,35.702999999999996);ctx.bezierCurveTo(50.497,35.662,50.538000000000004,35.61899999999999,50.587,35.574);ctx.lineTo(50.726000000000006,35.464999999999996);ctx.bezierCurveTo(50.986000000000004,35.263,51.16700000000001,35.12499999999999,51.32900000000001,34.988);ctx.lineTo(51.43300000000001,34.883);ctx.bezierCurveTo(51.724000000000004,34.623000000000005,51.98400000000001,34.345000000000006,52.211000000000006,34.07);ctx.bezierCurveTo(52.293000000000006,33.974000000000004,52.371,33.874,52.44800000000001,33.779);ctx.bezierCurveTo(52.58100000000001,33.614000000000004,52.705000000000005,33.435,52.81300000000001,33.259);ctx.bezierCurveTo(52.89500000000001,33.126,52.95600000000001,33.034,53.00500000000001,32.937);ctx.bezierCurveTo(53.08700000000001,32.778999999999996,53.16000000000001,32.623999999999995,53.23400000000001,32.474);ctx.bezierCurveTo(53.31000000000001,32.297999999999995,53.35300000000001,32.217999999999996,53.38000000000001,32.126);ctx.bezierCurveTo(53.43600000000001,31.985,53.47700000000001,31.834999999999997,53.51200000000001,31.694);ctx.bezierCurveTo(53.56900000000001,31.499,53.59000000000001,31.423,53.604000000000006,31.34);ctx.bezierCurveTo(53.63100000000001,31.187,53.641000000000005,31.047,53.660000000000004,30.9);ctx.lineTo(53.679,30.697);ctx.bezierCurveTo(53.689,30.627,53.699000000000005,30.556,53.699000000000005,30.476);ctx.lineTo(53.699000000000005,30.476);ctx.lineTo(54.993,30.476);ctx.lineTo(54.993,30.476);ctx.lineTo(54.974000000000004,36.734);ctx.bezierCurveTo(54.970000000000006,36.822,54.959,36.902,54.947,36.980000000000004);ctx.bezierCurveTo(54.92,37.267,54.900000000000006,37.461000000000006,54.865,37.664);ctx.bezierCurveTo(54.828,37.85,54.804,37.93,54.783,38.008);ctx.bezierCurveTo(54.695,38.295,54.65,38.477000000000004,54.586,38.649);ctx.lineTo(54.545,38.776);ctx.bezierCurveTo(54.524,38.852000000000004,54.484,38.92,54.443000000000005,38.99400000000001);ctx.bezierCurveTo(54.330000000000005,39.25000000000001,54.234,39.43800000000001,54.132000000000005,39.62500000000001);ctx.bezierCurveTo(54.101000000000006,39.69400000000001,54.081,39.74400000000001,54.04900000000001,39.793000000000006);ctx.bezierCurveTo(54.019000000000005,39.84700000000001,53.976000000000006,39.901,53.93500000000001,39.959);ctx.bezierCurveTo(53.76700000000001,40.222,53.62400000000001,40.422000000000004,53.470000000000006,40.629000000000005);ctx.bezierCurveTo(53.400000000000006,40.73500000000001,53.36800000000001,40.778000000000006,53.32600000000001,40.83200000000001);ctx.lineTo(53.21200000000001,40.95700000000001);ctx.bezierCurveTo(52.924000000000014,41.29100000000001,52.63600000000001,41.59700000000001,52.30400000000001,41.89900000000001);ctx.lineTo(52.211000000000006,41.99200000000001);ctx.bezierCurveTo(52.013000000000005,42.17800000000001,51.812000000000005,42.32800000000001,51.61600000000001,42.47100000000001);ctx.lineTo(51.410000000000004,42.63900000000001);ctx.bezierCurveTo(51.338,42.69600000000001,51.268,42.75400000000001,51.190000000000005,42.80700000000001);ctx.bezierCurveTo(50.836000000000006,43.06700000000001,50.452000000000005,43.30900000000001,50.044000000000004,43.55100000000001);ctx.lineTo(49.06100000000001,44.11200000000001);ctx.lineTo(49.05700000000001,44.11200000000001);ctx.lineTo(49.057,44.117);ctx.closePath();ctx.moveTo(50.377,37.256);ctx.lineTo(50.363,41.842);ctx.bezierCurveTo(50.382,41.83,50.403999999999996,41.817,50.423,41.799);ctx.bezierCurveTo(50.479,41.764,50.524,41.719,50.578,41.676);ctx.lineTo(50.818000000000005,41.485);ctx.bezierCurveTo(50.99400000000001,41.358,51.159000000000006,41.225,51.31400000000001,41.089);ctx.lineTo(51.42300000000001,40.981);ctx.bezierCurveTo(51.71300000000001,40.721000000000004,51.97400000000001,40.448,52.20400000000001,40.173);ctx.lineTo(52.44200000000001,39.876000000000005);ctx.bezierCurveTo(52.56900000000001,39.70400000000001,52.69200000000001,39.532000000000004,52.80700000000001,39.354000000000006);ctx.lineTo(53.00300000000001,39.032000000000004);ctx.bezierCurveTo(53.08500000000001,38.878,53.15800000000001,38.727000000000004,53.232000000000006,38.569);ctx.lineTo(53.37400000000001,38.239000000000004);ctx.bezierCurveTo(53.43000000000001,38.093,53.46600000000001,37.956,53.49700000000001,37.82300000000001);ctx.lineTo(53.59400000000001,37.44400000000001);ctx.bezierCurveTo(53.62100000000001,37.290000000000006,53.635000000000005,37.13900000000001,53.64500000000001,36.97700000000001);ctx.lineTo(53.68200000000001,36.58100000000001);ctx.lineTo(53.68600000000001,34.26100000000001);ctx.bezierCurveTo(53.623000000000005,34.34900000000001,53.56300000000001,34.43900000000001,53.498000000000005,34.51700000000001);ctx.bezierCurveTo(53.407000000000004,34.62800000000001,53.315000000000005,34.74700000000001,53.220000000000006,34.85700000000001);ctx.bezierCurveTo(52.95400000000001,35.17500000000001,52.657000000000004,35.484000000000016,52.328,35.78400000000001);ctx.lineTo(52.209,35.89400000000001);ctx.bezierCurveTo(52.026,36.05600000000001,51.825,36.21400000000001,51.621,36.36500000000001);ctx.lineTo(51.436,36.51900000000001);ctx.bezierCurveTo(51.362,36.57200000000001,51.29,36.634000000000015,51.215,36.69100000000001);ctx.bezierCurveTo(50.949,36.891,50.67,37.08,50.377,37.256);ctx.lineTo(50.377,37.256);ctx.lineTo(50.377,37.256);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(54.314,42.402);ctx.bezierCurveTo(54.299,42.517,54.294,42.631,54.277,42.746);ctx.bezierCurveTo(54.255,42.844,54.232,42.932,54.205,43.019000000000005);ctx.bezierCurveTo(54.173,43.123000000000005,54.144,43.24,54.107,43.349000000000004);ctx.bezierCurveTo(54.076,43.43900000000001,54.031,43.517,53.994,43.605000000000004);ctx.bezierCurveTo(53.939,43.724000000000004,53.892,43.834,53.83,43.94500000000001);ctx.bezierCurveTo(53.788,44.02900000000001,53.732,44.11300000000001,53.684,44.193000000000005);ctx.bezierCurveTo(53.605999999999995,44.316,53.513999999999996,44.435,53.428,44.562000000000005);ctx.bezierCurveTo(53.367999999999995,44.638000000000005,53.309,44.708000000000006,53.244,44.783);ctx.bezierCurveTo(53.101,44.951,52.941,45.113,52.773,45.273);ctx.bezierCurveTo(52.712,45.330000000000005,52.654,45.386,52.589000000000006,45.441);ctx.bezierCurveTo(52.48700000000001,45.537,52.36900000000001,45.625,52.255,45.709);ctx.bezierCurveTo(52.150000000000006,45.793000000000006,52.054,45.873000000000005,51.942,45.943000000000005);ctx.bezierCurveTo(51.819,46.035000000000004,51.684,46.115,51.549,46.203);ctx.bezierCurveTo(51.406,46.291000000000004,51.275999999999996,46.385000000000005,51.121,46.469);ctx.bezierCurveTo(50.637,46.737,50.111000000000004,46.967,49.568000000000005,47.178000000000004);ctx.bezierCurveTo(49.425000000000004,47.23500000000001,49.28000000000001,47.283,49.142,47.33200000000001);ctx.bezierCurveTo(48.804,47.45100000000001,48.448,47.543000000000006,48.099000000000004,47.641000000000005);ctx.bezierCurveTo(47.734,47.74,47.364000000000004,47.830000000000005,46.980000000000004,47.912000000000006);ctx.bezierCurveTo(46.533,47.99600000000001,46.083000000000006,48.080000000000005,45.61600000000001,48.12700000000001);ctx.bezierCurveTo(45.507000000000005,48.14600000000001,45.400000000000006,48.162000000000006,45.29200000000001,48.17200000000001);ctx.bezierCurveTo(44.668000000000006,48.23700000000001,44.043000000000006,48.27100000000001,43.412000000000006,48.27500000000001);ctx.bezierCurveTo(43.31000000000001,48.27500000000001,43.214000000000006,48.27500000000001,43.107000000000006,48.27500000000001);ctx.bezierCurveTo(42.48800000000001,48.271000000000015,41.86600000000001,48.240000000000016,41.25900000000001,48.17200000000001);ctx.bezierCurveTo(41.165000000000006,48.16200000000001,41.071000000000005,48.15300000000001,40.980000000000004,48.14600000000001);ctx.bezierCurveTo(40.374,48.07600000000001,39.773,47.97400000000001,39.181000000000004,47.851000000000006);ctx.bezierCurveTo(39.080000000000005,47.82600000000001,38.976000000000006,47.797000000000004,38.867000000000004,47.77700000000001);ctx.bezierCurveTo(38.336000000000006,47.64800000000001,37.824000000000005,47.50000000000001,37.32600000000001,47.32800000000001);ctx.bezierCurveTo(37.22800000000001,47.29700000000001,37.135000000000005,47.26900000000001,37.04500000000001,47.23400000000001);ctx.bezierCurveTo(36.44800000000001,47.00800000000001,35.88100000000001,46.76200000000001,35.35600000000001,46.46300000000001);ctx.lineTo(8.961,31.771);ctx.bezierCurveTo(6.767,30.543,5.673,28.934,5.681000000000001,27.332);ctx.lineTo(5.66,33.434);ctx.bezierCurveTo(5.6530000000000005,35.043,6.746,36.653,8.94,37.867);ctx.lineTo(35.341,52.562999999999995);ctx.bezierCurveTo(35.839,52.839999999999996,36.374,53.086,36.938,53.29299999999999);ctx.bezierCurveTo(36.971000000000004,53.31099999999999,37.001000000000005,53.315999999999995,37.034,53.32399999999999);ctx.bezierCurveTo(37.126,53.36299999999999,37.231,53.38699999999999,37.327,53.42199999999999);ctx.bezierCurveTo(37.643,53.53099999999999,37.963,53.64699999999999,38.292,53.73099999999999);ctx.bezierCurveTo(38.483000000000004,53.78499999999999,38.676,53.82399999999999,38.862,53.87299999999999);ctx.bezierCurveTo(38.964,53.89399999999999,39.069,53.92199999999999,39.177,53.94599999999999);ctx.bezierCurveTo(39.27,53.96499999999999,39.362,53.98699999999999,39.456,54.00599999999999);ctx.bezierCurveTo(39.816,54.083999999999996,40.191,54.147999999999996,40.56,54.193999999999996);ctx.bezierCurveTo(40.695,54.214999999999996,40.831,54.224999999999994,40.968,54.236999999999995);ctx.bezierCurveTo(41.064,54.248,41.156000000000006,54.25599999999999,41.24400000000001,54.267999999999994);ctx.bezierCurveTo(41.379000000000005,54.27799999999999,41.50800000000001,54.294999999999995,41.64300000000001,54.30899999999999);ctx.bezierCurveTo(42.010000000000005,54.337999999999994,42.379000000000005,54.35599999999999,42.74900000000001,54.36699999999999);ctx.bezierCurveTo(42.86300000000001,54.36699999999999,42.982000000000006,54.36699999999999,43.10000000000001,54.36699999999999);ctx.bezierCurveTo(43.20100000000001,54.36699999999999,43.29800000000001,54.36699999999999,43.39500000000001,54.36699999999999);ctx.bezierCurveTo(43.56500000000001,54.36699999999999,43.73300000000001,54.37099999999999,43.90100000000001,54.36699999999999);ctx.bezierCurveTo(44.31500000000001,54.34799999999999,44.735000000000014,54.331999999999994,45.14100000000001,54.28699999999999);ctx.bezierCurveTo(45.186000000000014,54.27799999999999,45.23300000000001,54.267999999999994,45.27600000000001,54.267999999999994);ctx.bezierCurveTo(45.38900000000001,54.24999999999999,45.49000000000001,54.236999999999995,45.60400000000001,54.224999999999994);ctx.bezierCurveTo(45.92800000000001,54.19,46.25400000000001,54.148999999999994,46.57400000000001,54.09199999999999);ctx.bezierCurveTo(46.70900000000001,54.06499999999999,46.835000000000015,54.02599999999999,46.97100000000001,53.99399999999999);ctx.bezierCurveTo(47.35200000000001,53.919999999999995,47.72100000000001,53.831999999999994,48.09200000000001,53.72599999999999);ctx.bezierCurveTo(48.286000000000016,53.675999999999995,48.496000000000016,53.64999999999999,48.686000000000014,53.581999999999994);ctx.bezierCurveTo(48.841000000000015,53.52799999999999,48.981000000000016,53.468999999999994,49.13500000000001,53.419999999999995);ctx.bezierCurveTo(49.274000000000015,53.370999999999995,49.41800000000001,53.31699999999999,49.561000000000014,53.266999999999996);ctx.bezierCurveTo(50.10400000000001,53.04899999999999,50.62700000000002,52.82899999999999,51.112000000000016,52.550999999999995);ctx.bezierCurveTo(51.15700000000002,52.529999999999994,51.20500000000002,52.501999999999995,51.24900000000002,52.477999999999994);ctx.bezierCurveTo(51.35100000000001,52.41799999999999,51.44400000000002,52.352999999999994,51.54100000000002,52.291);ctx.bezierCurveTo(51.67400000000002,52.211,51.81200000000002,52.123,51.93500000000002,52.035);ctx.bezierCurveTo(52.04400000000002,51.955,52.146000000000015,51.876999999999995,52.250000000000014,51.793);ctx.bezierCurveTo(52.36400000000001,51.705,52.47900000000001,51.615,52.58400000000002,51.522);ctx.bezierCurveTo(52.606000000000016,51.504,52.63000000000002,51.492,52.64700000000002,51.469);ctx.bezierCurveTo(52.69200000000002,51.434000000000005,52.71900000000002,51.389,52.76200000000002,51.354);ctx.bezierCurveTo(52.94000000000002,51.186,53.09400000000002,51.028,53.23700000000002,50.86);ctx.bezierCurveTo(53.264000000000024,50.826,53.30500000000002,50.791,53.33900000000002,50.752);ctx.bezierCurveTo(53.37000000000002,50.717000000000006,53.39400000000002,50.679,53.41600000000002,50.642);ctx.bezierCurveTo(53.51300000000002,50.519000000000005,53.59900000000002,50.396,53.68300000000002,50.273);ctx.bezierCurveTo(53.71400000000002,50.224000000000004,53.75900000000002,50.17,53.79100000000002,50.115);ctx.bezierCurveTo(53.81300000000002,50.088,53.81700000000002,50.06,53.832000000000015,50.031);ctx.bezierCurveTo(53.89500000000002,49.912,53.942000000000014,49.806,53.99200000000001,49.690999999999995);ctx.bezierCurveTo(54.01400000000001,49.62799999999999,54.05900000000001,49.562,54.08400000000001,49.498);ctx.bezierCurveTo(54.09300000000001,49.471,54.09900000000001,49.457,54.10300000000001,49.425999999999995);ctx.bezierCurveTo(54.144000000000005,49.321,54.17100000000001,49.21099999999999,54.20000000000001,49.105999999999995);ctx.bezierCurveTo(54.21900000000001,49.041,54.25500000000001,48.959999999999994,54.26300000000001,48.892999999999994);ctx.bezierCurveTo(54.27300000000001,48.87499999999999,54.27300000000001,48.85399999999999,54.27300000000001,48.831999999999994);ctx.bezierCurveTo(54.29200000000001,48.71699999999999,54.30400000000001,48.605,54.30800000000001,48.48799999999999);ctx.bezierCurveTo(54.31400000000001,48.41199999999999,54.33500000000001,48.343999999999994,54.33500000000001,48.266999999999996);ctx.bezierCurveTo(54.33500000000001,48.239999999999995,54.33500000000001,48.206999999999994,54.33500000000001,48.172);ctx.lineTo(54.35500000000001,42.068999999999996);ctx.bezierCurveTo(54.34900000000001,42.178,54.32800000000001,42.281,54.314000000000014,42.385);ctx.lineTo(54.323000000000015,42.399);ctx.lineTo(54.314000000000014,42.399);ctx.lineTo(54.314000000000014,42.402);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(37.177,27.224);ctx.bezierCurveTo(37.395,26.945,37.705,26.813,37.867,26.933);ctx.bezierCurveTo(38.031,27.052,37.988,27.373,37.766999999999996,27.654);ctx.bezierCurveTo(37.55,27.933,37.242999999999995,28.065,37.077999999999996,27.945);ctx.bezierCurveTo(36.913,27.825,36.959,27.504,37.177,27.224);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(35.198,28.325);ctx.bezierCurveTo(35.416000000000004,28.044999999999998,35.728,27.915,35.89,28.032);ctx.bezierCurveTo(36.052,28.15,36.009,28.475,35.791000000000004,28.755);ctx.bezierCurveTo(35.571000000000005,29.035,35.261,29.163999999999998,35.099000000000004,29.049);ctx.bezierCurveTo(34.936,28.931,34.979,28.605,35.198,28.325);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(39.447,26.743);ctx.lineTo(45.376000000000005,23.445);ctx.bezierCurveTo(45.647000000000006,23.291,45.86900000000001,22.955000000000002,45.86900000000001,22.687);ctx.lineTo(45.86900000000001,22.687);ctx.bezierCurveTo(45.86900000000001,22.426000000000002,45.64600000000001,22.338,45.376000000000005,22.492);ctx.lineTo(39.447,25.79);ctx.bezierCurveTo(39.176,25.945999999999998,38.953,26.279999999999998,38.953,26.541999999999998);ctx.lineTo(38.953,26.541999999999998);ctx.bezierCurveTo(38.953,26.804,39.173,26.896,39.447,26.743);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(37.177,33.893);ctx.bezierCurveTo(37.395,33.61,37.705,33.479,37.867,33.598);ctx.bezierCurveTo(38.031,33.717,37.988,34.037,37.769,34.321);ctx.bezierCurveTo(37.552,34.598,37.245,34.730999999999995,37.08,34.611999999999995);ctx.bezierCurveTo(36.918,34.492,36.962,34.17,37.177,33.893);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(35.198,34.994);ctx.bezierCurveTo(35.416000000000004,34.713,35.724000000000004,34.58,35.888,34.703);ctx.bezierCurveTo(36.052,34.822,36.006,35.144000000000005,35.789,35.422000000000004);ctx.bezierCurveTo(35.571,35.705000000000005,35.261,35.836000000000006,35.099000000000004,35.719);ctx.bezierCurveTo(34.936,35.594,34.979,35.273,35.198,34.994);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(39.447,33.412);ctx.lineTo(45.376000000000005,30.112);ctx.bezierCurveTo(45.647000000000006,29.959999999999997,45.86900000000001,29.622999999999998,45.86900000000001,29.357999999999997);ctx.lineTo(45.86900000000001,29.357999999999997);ctx.bezierCurveTo(45.86900000000001,29.096999999999998,45.64600000000001,29.006999999999998,45.376000000000005,29.159999999999997);ctx.lineTo(39.447,32.458999999999996);ctx.bezierCurveTo(39.176,32.613,38.953,32.949,38.953,33.212999999999994);ctx.lineTo(38.953,33.212999999999994);ctx.bezierCurveTo(38.953,33.473,39.173,33.566,39.447,33.412);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#FFFFFF";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(49.402,23.836);ctx.bezierCurveTo(55.878,27.441,55.982,33.244,49.730000000000004,36.903999999999996);ctx.lineTo(51.066,37.647999999999996);ctx.bezierCurveTo(55.42,40.074,55.448,44.032999999999994,51.120000000000005,46.461);ctx.bezierCurveTo(46.792,48.888,39.693000000000005,48.888,35.34100000000001,46.461);ctx.lineTo(8.939,31.771);ctx.bezierCurveTo(4.586,29.343,4.559,25.382,8.885,22.955);ctx.bezierCurveTo(13.212,20.525,20.314,20.528,24.667,22.955);ctx.lineTo(26.005000000000003,23.694999999999997);ctx.bezierCurveTo(32.541000000000004,20.198999999999998,42.932,20.235999999999997,49.402,23.833);ctx.lineTo(49.402,23.836);ctx.lineTo(49.402,23.836);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(54.996,42.076);ctx.bezierCurveTo(54.996,40.172,53.716,38.408,51.392,37.115);ctx.lineTo(50.961000000000006,36.877);ctx.bezierCurveTo(53.595000000000006,35.082,55.013000000000005,32.813,54.983000000000004,30.407000000000004);ctx.bezierCurveTo(54.953,27.693000000000005,53.087,25.174000000000003,49.725,23.303000000000004);ctx.bezierCurveTo(43.153,19.639000000000003,32.819,19.521000000000004,26.017000000000003,22.998000000000005);ctx.lineTo(24.987000000000002,22.422000000000004);ctx.bezierCurveTo(20.445,19.896000000000004,13.076000000000002,19.892000000000003,8.561000000000003,22.422000000000004);ctx.bezierCurveTo(6.2710000000000035,23.709000000000003,5.009000000000004,25.456000000000003,5.009000000000004,27.351000000000006);ctx.bezierCurveTo(5.009000000000004,27.418000000000006,5.009000000000004,27.486000000000008,5.016000000000004,27.563000000000006);ctx.lineTo(5,33.434);ctx.bezierCurveTo(4.994,35.348,6.276,37.117,8.603,38.413);ctx.lineTo(35.002,53.107);ctx.bezierCurveTo(35.522000000000006,53.397999999999996,36.091,53.665,36.781000000000006,53.917);ctx.bezierCurveTo(36.84400000000001,53.941,36.913000000000004,53.964,36.97800000000001,53.986000000000004);ctx.lineTo(37.13600000000001,54.036);ctx.bezierCurveTo(37.44800000000001,54.144,37.75500000000001,54.255,38.08700000000001,54.339);ctx.bezierCurveTo(38.22400000000001,54.379999999999995,38.360000000000014,54.409,38.49400000000001,54.442);ctx.lineTo(39.29900000000001,54.628);ctx.bezierCurveTo(39.67400000000001,54.702,40.05800000000001,54.774,40.45100000000001,54.821);ctx.lineTo(41.57600000000001,54.946);ctx.bezierCurveTo(41.95300000000001,54.971,42.333000000000006,54.998999999999995,42.717000000000006,55.003);ctx.lineTo(43.57000000000001,54.999);ctx.bezierCurveTo(43.687000000000005,55.003,43.79900000000001,55.003,43.91700000000001,54.999);ctx.bezierCurveTo(44.35000000000001,54.981,44.775000000000006,54.964000000000006,45.20400000000001,54.919000000000004);ctx.lineTo(45.80800000000001,54.835);ctx.bezierCurveTo(46.101000000000006,54.804,46.388000000000005,54.765,46.681000000000004,54.716);ctx.bezierCurveTo(46.777,54.698,46.861000000000004,54.681000000000004,46.952000000000005,54.655);ctx.lineTo(47.057,54.620000000000005);ctx.bezierCurveTo(47.453,54.540000000000006,47.837,54.44200000000001,48.223,54.337);ctx.lineTo(48.446999999999996,54.288000000000004);ctx.bezierCurveTo(48.584999999999994,54.257000000000005,48.717,54.227000000000004,48.848,54.18600000000001);ctx.bezierCurveTo(48.952999999999996,54.157000000000004,49.055,54.120000000000005,49.153,54.08100000000001);ctx.lineTo(49.315,54.01500000000001);ctx.bezierCurveTo(49.464999999999996,53.97200000000001,49.617999999999995,53.91100000000001,49.766,53.857000000000006);ctx.bezierCurveTo(50.425999999999995,53.601000000000006,50.949,53.36800000000001,51.400999999999996,53.107000000000006);ctx.lineTo(51.543,53.029);ctx.bezierCurveTo(51.619,52.98800000000001,51.685,52.935,51.758,52.896);ctx.lineTo(51.955000000000005,52.759);ctx.bezierCurveTo(52.063,52.689,52.17400000000001,52.626,52.27,52.556);ctx.bezierCurveTo(52.371,52.486,52.453,52.415,52.543000000000006,52.349);ctx.lineTo(52.68900000000001,52.23);ctx.bezierCurveTo(52.790000000000006,52.160999999999994,52.88400000000001,52.077,53.04900000000001,51.946999999999996);ctx.bezierCurveTo(53.08500000000001,51.909,53.126000000000005,51.873999999999995,53.16700000000001,51.81999999999999);ctx.bezierCurveTo(53.36400000000001,51.647999999999996,53.53800000000001,51.465999999999994,53.70700000000001,51.272999999999996);ctx.lineTo(53.81100000000001,51.169);ctx.bezierCurveTo(53.833000000000006,51.134,53.86200000000001,51.099999999999994,53.903000000000006,51.04);ctx.bezierCurveTo(54.01200000000001,50.902,54.108000000000004,50.768,54.217000000000006,50.591);ctx.bezierCurveTo(54.254000000000005,50.542,54.290000000000006,50.499,54.36800000000001,50.35);ctx.bezierCurveTo(54.43500000000001,50.227000000000004,54.49600000000001,50.093,54.57800000000001,49.921);ctx.bezierCurveTo(54.60500000000001,49.863,54.63900000000001,49.807,54.68000000000001,49.669);ctx.bezierCurveTo(54.73500000000001,49.556999999999995,54.757000000000005,49.431999999999995,54.81700000000001,49.232);ctx.bezierCurveTo(54.839000000000006,49.163,54.864000000000004,49.095,54.88000000000001,48.961999999999996);ctx.bezierCurveTo(54.90300000000001,48.839,54.91700000000001,48.709999999999994,54.94000000000001,48.513);ctx.bezierCurveTo(54.95500000000001,48.446999999999996,54.960000000000015,48.376,54.963000000000015,48.195);ctx.lineTo(54.984000000000016,42.314);ctx.bezierCurveTo(54.990000000000016,42.238,54.990000000000016,42.161,54.990000000000016,42.085);ctx.lineTo(55,42.076);ctx.lineTo(54.996,42.076);ctx.closePath();ctx.moveTo(9.216,23.501);ctx.bezierCurveTo(11.293,22.334,14.03,21.757,16.767,21.757);ctx.bezierCurveTo(19.503999999999998,21.757,22.246,22.336000000000002,24.341,23.497);ctx.lineTo(25.997,24.415);ctx.lineTo(26.323,24.247);ctx.bezierCurveTo(32.648,20.858,42.853,20.912,49.078,24.374);ctx.bezierCurveTo(52.032000000000004,26.016,53.665000000000006,28.160999999999998,53.691,30.413999999999998);ctx.bezierCurveTo(53.718,32.623,52.195,34.733999999999995,49.388000000000005,36.375);ctx.lineTo(48.459,36.922);ctx.lineTo(50.741,38.195);ctx.bezierCurveTo(52.643,39.254,53.699,40.629,53.699,42.076);ctx.bezierCurveTo(53.699,42.076,53.699,42.086,53.699,42.094);ctx.lineTo(53.693999999999996,42.094);ctx.lineTo(53.693999999999996,42.098);ctx.bezierCurveTo(53.693999999999996,42.150999999999996,53.684,42.196,53.67999999999999,42.244);ctx.lineTo(53.660999999999994,42.389);ctx.bezierCurveTo(53.660999999999994,42.469,53.651999999999994,42.557,53.638999999999996,42.637);ctx.bezierCurveTo(53.62499999999999,42.694,53.617,42.75,53.56699999999999,42.905);ctx.bezierCurveTo(53.54399999999999,42.981,53.525999999999996,43.065,53.49799999999999,43.135);ctx.lineTo(53.39699999999999,43.364);ctx.bezierCurveTo(53.35999999999999,43.458,53.31499999999999,43.552,53.25899999999999,43.645999999999994);ctx.lineTo(53.13099999999999,43.852999999999994);ctx.bezierCurveTo(53.05899999999999,43.961999999999996,52.980999999999995,44.068,52.898999999999994,44.18299999999999);ctx.lineTo(52.739,44.37599999999999);ctx.bezierCurveTo(52.61,44.52599999999999,52.464999999999996,44.67699999999999,52.312999999999995,44.81699999999999);ctx.lineTo(52.148999999999994,44.974999999999994);ctx.bezierCurveTo(52.077999999999996,45.03999999999999,51.99399999999999,45.10399999999999,51.91199999999999,45.16499999999999);ctx.lineTo(51.75599999999999,45.28399999999999);ctx.bezierCurveTo(51.69299999999999,45.340999999999994,51.62799999999999,45.38799999999999,51.55599999999999,45.43699999999999);ctx.bezierCurveTo(51.46399999999999,45.49899999999999,51.37199999999999,45.56399999999999,51.19099999999999,45.67299999999999);ctx.lineTo(51.06599999999999,45.752999999999986);ctx.bezierCurveTo(51.039999999999985,45.77099999999999,51.01099999999999,45.78799999999998,50.98399999999999,45.80599999999998);ctx.bezierCurveTo(50.92199999999999,45.83699999999998,50.856999999999985,45.881999999999984,50.792999999999985,45.91699999999998);ctx.bezierCurveTo(50.62399999999999,46.00899999999998,50.44699999999999,46.10099999999998,50.271999999999984,46.19399999999998);ctx.bezierCurveTo(49.99499999999998,46.320999999999984,49.68199999999998,46.45399999999998,49.326999999999984,46.58999999999998);ctx.bezierCurveTo(49.19399999999998,46.643999999999984,49.05599999999998,46.68899999999998,48.91999999999999,46.73999999999998);ctx.bezierCurveTo(48.62299999999999,46.84399999999998,48.313999999999986,46.92799999999998,47.920999999999985,47.03499999999998);ctx.bezierCurveTo(47.570999999999984,47.12699999999998,47.216999999999985,47.21799999999998,46.84699999999999,47.29099999999998);ctx.bezierCurveTo(46.41299999999999,47.378999999999984,45.97999999999999,47.454999999999984,45.53299999999999,47.508999999999986);ctx.lineTo(45.216999999999985,47.54699999999998);ctx.bezierCurveTo(44.65099999999998,47.609999999999985,44.04199999999999,47.64599999999998,43.33099999999998,47.649999999999984);ctx.lineTo(43.11099999999998,47.649999999999984);ctx.bezierCurveTo(42.50799999999998,47.649999999999984,41.91099999999998,47.618999999999986,41.319999999999986,47.55599999999998);ctx.lineTo(41.048999999999985,47.52699999999998);ctx.bezierCurveTo(40.46199999999998,47.45699999999998,39.877999999999986,47.35899999999998,39.31499999999998,47.23999999999998);ctx.lineTo(39.01799999999999,47.16999999999998);ctx.bezierCurveTo(38.527999999999984,47.05099999999998,38.027999999999984,46.90999999999998,37.54199999999999,46.74199999999998);ctx.lineTo(37.310999999999986,46.66599999999998);ctx.bezierCurveTo(36.734999999999985,46.454999999999984,36.18399999999998,46.198999999999984,35.673999999999985,45.917999999999985);ctx.lineTo(9.27,31.229);ctx.bezierCurveTo(7.38,30.174,6.324999999999999,28.811,6.311999999999999,27.369999999999997);ctx.bezierCurveTo(6.311999999999999,27.358999999999998,6.311999999999999,27.351999999999997,6.311999999999999,27.339);ctx.bezierCurveTo(6.305,25.918999999999997,7.340999999999999,24.551,9.218,23.497);ctx.lineTo(9.213,23.503);ctx.lineTo(9.216,23.501);ctx.lineTo(9.216,23.501);ctx.closePath();ctx.moveTo(53.68,48.174);ctx.lineTo(53.674,48.311);ctx.lineTo(53.653,48.465);ctx.bezierCurveTo(53.653,48.553000000000004,53.643,48.633,53.602,48.826);ctx.lineTo(53.556999999999995,48.976);ctx.bezierCurveTo(53.53699999999999,49.056,53.513999999999996,49.14,53.44199999999999,49.33);ctx.lineTo(53.38199999999999,49.439);ctx.bezierCurveTo(53.33599999999999,49.541,53.29899999999999,49.638,53.21199999999999,49.795);ctx.lineTo(53.11099999999999,49.941);ctx.bezierCurveTo(53.03799999999999,50.050000000000004,52.96099999999999,50.167,52.82799999999999,50.355000000000004);ctx.lineTo(52.72299999999999,50.46);ctx.bezierCurveTo(52.590999999999994,50.61,52.45299999999999,50.759,52.288999999999994,50.909);ctx.lineTo(52.132999999999996,51.059);ctx.bezierCurveTo(52.06099999999999,51.122,51.98499999999999,51.178,51.907,51.245);ctx.lineTo(51.748999999999995,51.367999999999995);ctx.bezierCurveTo(51.675999999999995,51.416999999999994,51.61599999999999,51.477,51.53399999999999,51.535999999999994);ctx.bezierCurveTo(51.45199999999999,51.58899999999999,51.358999999999995,51.644999999999996,51.16799999999999,51.76499999999999);ctx.lineTo(50.89499999999999,51.93299999999999);ctx.lineTo(50.77599999999999,52.01299999999999);ctx.bezierCurveTo(50.37399999999999,52.23199999999999,49.90799999999999,52.44099999999999,49.30699999999999,52.67899999999999);ctx.bezierCurveTo(49.16999999999999,52.725999999999985,49.033999999999985,52.774999999999984,48.90099999999999,52.82699999999999);ctx.lineTo(48.697999999999986,52.90299999999999);ctx.bezierCurveTo(48.627999999999986,52.931999999999995,48.55699999999999,52.959999999999994,48.478999999999985,52.980999999999995);ctx.bezierCurveTo(48.386999999999986,53.01599999999999,48.29099999999998,53.03399999999999,48.201999999999984,53.05);ctx.bezierCurveTo(48.097999999999985,53.068999999999996,48.00099999999998,53.096,47.90699999999998,53.122);ctx.bezierCurveTo(47.548999999999985,53.214,47.19399999999998,53.298,46.832999999999984,53.376);ctx.bezierCurveTo(46.756999999999984,53.387,46.67899999999998,53.407,46.600999999999985,53.431999999999995);ctx.bezierCurveTo(46.55599999999998,53.443999999999996,46.50499999999999,53.465999999999994,46.453999999999986,53.471);ctx.bezierCurveTo(46.18499999999999,53.519999999999996,45.92199999999998,53.55,45.649999999999984,53.57899999999999);ctx.lineTo(45.07499999999998,53.654999999999994);ctx.bezierCurveTo(44.67599999999998,53.69799999999999,44.27699999999998,53.724,43.87299999999998,53.739);ctx.lineTo(42.761999999999986,53.747);ctx.bezierCurveTo(42.408999999999985,53.728,42.04399999999998,53.712,41.697999999999986,53.684);ctx.lineTo(40.640999999999984,53.576);ctx.bezierCurveTo(40.27999999999999,53.526,39.92199999999998,53.472,39.45299999999998,53.373);ctx.lineTo(38.79899999999998,53.214999999999996);ctx.bezierCurveTo(38.68499999999998,53.193999999999996,38.56599999999998,53.169999999999995,38.45399999999998,53.135999999999996);ctx.bezierCurveTo(38.15499999999998,53.05799999999999,37.869999999999976,52.955,37.52599999999998,52.836);ctx.lineTo(37.16399999999998,52.722);ctx.bezierCurveTo(36.62699999999998,52.515,36.12099999999998,52.277,35.65099999999998,52.021);ctx.lineTo(9.254,37.332);ctx.bezierCurveTo(7.346,36.273,6.289999999999999,34.889,6.295999999999999,33.437);ctx.lineTo(6.302999999999999,30.508);ctx.bezierCurveTo(6.890999999999999,31.174,7.667999999999999,31.782999999999998,8.619,32.318);ctx.lineTo(35.019,47.009);ctx.bezierCurveTo(37.289,48.275,40.265,48.905,43.242999999999995,48.905);ctx.bezierCurveTo(46.22099999999999,48.905,49.18899999999999,48.27,51.44799999999999,47.009);ctx.bezierCurveTo(52.36099999999999,46.489,53.11699999999999,45.907000000000004,53.69299999999999,45.259);ctx.lineTo(53.68699999999999,48.179);ctx.lineTo(53.68299999999999,48.179);ctx.lineTo(53.68,48.174);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(18.919,14.083);ctx.lineTo(18.785,31.502000000000002);ctx.lineTo(32.646,38.654);ctx.lineTo(32.67,34.435);ctx.lineTo(32.78,21.234);ctx.lineTo(27.5,18.51);ctx.lineTo(18.919,14.083);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#FFFFFF";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(46.729,13.211);ctx.lineTo(32.922,6.084);ctx.lineTo(19.461999999999996,13.277999999999999);ctx.lineTo(33.269999999999996,20.406);ctx.lineTo(39.913,16.854);ctx.lineTo(46.729,13.211);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#C2E1BD";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(33.635,38.637);ctx.lineTo(47.132999999999996,31.424);ctx.lineTo(47.263999999999996,14.02);ctx.lineTo(33.767999999999994,21.238);ctx.lineTo(33.66,34.025);ctx.lineTo(33.635,38.637);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(47.757,12.664);ctx.lineTo(32.912,5);ctx.lineTo(17.935,13.008);ctx.lineTo(17.933,13.572);ctx.lineTo(17.794999999999998,32.072);ctx.lineTo(33.144999999999996,39.99);ctx.lineTo(33.632999999999996,39.726);ctx.lineTo(48.123,31.982);ctx.lineTo(48.26,13.485);ctx.lineTo(48.266,12.921);ctx.lineTo(47.762,12.663);ctx.lineTo(47.757,12.663);ctx.closePath();ctx.moveTo(47.264,14.017);ctx.lineTo(47.233000000000004,18.662);ctx.lineTo(46.733000000000004,18.930999999999997);ctx.lineTo(33.73,25.878);ctx.lineTo(33.769,21.229);ctx.lineTo(47.264,14.017);ctx.closePath();ctx.moveTo(33.635,38.637);ctx.lineTo(33.66,34.026);ctx.lineTo(33.662,33.676);ctx.lineTo(33.766999999999996,33.619);ctx.lineTo(47.16499999999999,26.457);ctx.lineTo(47.13099999999999,31.428);ctx.lineTo(33.63099999999999,38.637);ctx.lineTo(33.635,38.637);ctx.closePath();ctx.moveTo(32.646,38.654);ctx.lineTo(18.787,31.502000000000002);ctx.lineTo(18.921,14.083000000000002);ctx.lineTo(32.778999999999996,21.235000000000003);ctx.lineTo(32.672,34.43600000000001);ctx.lineTo(32.646,38.654);ctx.lineTo(32.646,38.654);ctx.closePath();ctx.moveTo(19.462,13.278);ctx.lineTo(20.785,12.573);ctx.lineTo(34.534,19.736);ctx.lineTo(33.272999999999996,20.406000000000002);ctx.lineTo(19.462,13.278);ctx.closePath();ctx.moveTo(46.729,13.211);ctx.lineTo(45.573,13.832);ctx.lineTo(31.828,6.669);ctx.lineTo(32.922,6.084);ctx.lineTo(46.733,13.213);ctx.lineTo(46.729,13.211);ctx.closePath();ctx.moveTo(33.768,26.397);ctx.lineTo(33.764,26.945999999999998);ctx.lineTo(47.221000000000004,19.750999999999998);ctx.lineTo(47.176,25.354999999999997);ctx.lineTo(46.723,25.591999999999995);ctx.lineTo(33.667,32.57);ctx.lineTo(33.717,26.349);ctx.lineTo(33.762,26.374);ctx.lineTo(33.766,26.395);ctx.lineTo(33.768,26.397);ctx.closePath();ctx.moveTo(30.904,7.165);ctx.lineTo(44.65,14.329);ctx.lineTo(35.461999999999996,19.238);ctx.lineTo(21.712,12.08);ctx.lineTo(30.904,7.165);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(37.177,21.511);ctx.bezierCurveTo(37.395,21.230999999999998,37.705,21.099999999999998,37.867,21.218999999999998);ctx.bezierCurveTo(38.031,21.339,37.988,21.659,37.766999999999996,21.939999999999998);ctx.bezierCurveTo(37.55,22.218999999999998,37.242999999999995,22.349999999999998,37.077999999999996,22.230999999999998);ctx.bezierCurveTo(36.913,22.11,36.959,21.789,37.177,21.511);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(35.203,22.612);ctx.bezierCurveTo(35.42100000000001,22.33,35.728,22.200999999999997,35.892,22.317999999999998);ctx.bezierCurveTo(36.058,22.435,36.011,22.758,35.794000000000004,23.040999999999997);ctx.bezierCurveTo(35.576,23.317999999999998,35.267,23.448999999999998,35.105000000000004,23.326999999999998);ctx.bezierCurveTo(34.937000000000005,23.209999999999997,34.982000000000006,22.887999999999998,35.201,22.612);ctx.lineTo(35.203,22.612);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.save();ctx.fillStyle="#38A940";ctx.font="   15px ''";ctx.beginPath();ctx.moveTo(39.447,21.031);ctx.lineTo(45.376000000000005,17.729999999999997);ctx.bezierCurveTo(45.647000000000006,17.576999999999998,45.86900000000001,17.240999999999996,45.86900000000001,16.973999999999997);ctx.lineTo(45.86900000000001,16.973999999999997);ctx.bezierCurveTo(45.86900000000001,16.711999999999996,45.64600000000001,16.623999999999995,45.376000000000005,16.772999999999996);ctx.lineTo(39.447,20.073999999999998);ctx.bezierCurveTo(39.176,20.226999999999997,38.953,20.563,38.953,20.825999999999997);ctx.lineTo(38.953,20.825999999999997);ctx.bezierCurveTo(38.953,21.086999999999996,39.173,21.179999999999996,39.447,21.028999999999996);ctx.lineTo(39.447,21.031);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();ctx.restore();ctx.restore();}}};for(MG in OG){QU(cu+MG,OG[MG]);}function SG(t){this.$layoutByAnchorPoint&&this[uu]&&(t.x-=this[uu].x, t.y-=this[uu].y), this[_u]&&cU(t,this[_u]), t.x+=this[du]||0, t.y+=this[lu]||0;var i=pW(this);return i?cU(t,i):t;}function AG(t){var i=pW(this);return i&&cU(t,-i), t.x-=this[du]||0, t.y-=this.$offsetY||0, this[_u]&&cU(t,-this[_u]), this[bu]&&this._oUS&&(t.x+=this._oUS.x, t.y+=this[uu].y), t;}function IG(){var t=this.$invalidateSize;this[vu]&&(this.$invalidateSize=!1, this.$invalidateAnchorPoint=!0, this._8U[oo](this._l4), this[yu]&&this._8U.grow(this[yu]), this.$border&&this._8U[gu](this[Eu]));var i,n=this._$t();return n&&(i=this.showPointer&&this[xu]), this[mu]&&this[bu]&&(this[mu]=!1, i&&(t=!0), this._oUS=ok(this.$anchorPosition,this._8U[jt],this._8U.height), this[uu].x+=this._8U.x, this[uu].y+=this._8U.y), n?(t&&(this._oUackgroundGradientInvalidateFlag=!0, function(t){var i=this._8U.x+this[Eu]/2,n=this._8U.y+this.$border/2,e=this._8U[jt]-this[Eu],s=this._8U[Xt]-this.$border,h=0,r=0;if(this[pu]&&(wB(this.$borderRadius)?h=r=this[pu]:(h=this.$borderRadius.x||0, r=this.$borderRadius.y||0), h=Math.min(h,e/2), r=Math.min(r,s/2)), t&&(this[Tu]=-this.$offsetX+this[wu], this._pointerY=-this[lu]+this.$pointerY, this._oUS&&(this._pointerX+=this._oUS.x, this[Lu]+=this._oUS.y), !this._8U[Jt](this[Tu],this[Lu]))){var a=new TG(i,n,e,s,h,r,this[xu],this[Tu],this[Lu]);return this._nZShape=a._n9, this._nZShape[fo].set(i,n,e,s), void(this[Mu]=!0);}this[Ou]&&this._nZShape[It](), this[Ou]=rW[Su](i,n,e,s,h,r,this[Ou]), this._nZShape[fo].set(i,n,e,s);}.call(this,i)), this._oUackgroundGradientInvalidateFlag&&(this._oUackgroundGradientInvalidateFlag=!1, this[Au]&&this[Ou]&&this[Ou][fo]?this[Iu]=tG[_].generatorGradient.call(this[Au],this[Ou].bounds):this[Iu]=null)):this.__nDPointer=!1, t;}function CG(t,i,n,e){if(e&&(t[jt]<0||t[Xt]<0)){ return t.x=i, t.y=n, t[jt]=t.height=0; }i<t.x?(t[jt]+=t.x-i, t.x=i):i>t.x+t[jt]&&(t[jt]=i-t.x), n<t.y?(t[Xt]+=t.y-n, t.y=n):n>t.y+t[Xt]&&(t[Xt]=n-t.y);}var PG=function PG(){this.$invalidateRotate=!1;var t=this._hI;t[It]();var i=this[Eu]||0,n=this._8U.x+i/2,e=this._8U.y+i/2,s=this._8U[jt]-i,h=this._8U[Xt]-i,r=SG[x](this,{x:n,y:e});CG(t,r.x,r.y,!0), CG(t,(r=SG.call(this,{x:n+s,y:e})).x,r.y), CG(t,(r=SG.call(this,{x:n+s,y:e+h})).x,r.y), CG(t,(r=SG[x](this,{x:n,y:e+h})).x,r.y), this[Mu]&&CG(t,(r=SG[x](this,{x:this._pointerX,y:this._pointerY})).x,r.y), i&&t[gu](i/2);};function FG(t){if(t[zf]===Y){var i,n,e;if(t[Du]){ i=t[Nu], n=t[Du]; }else{if(t[Bu]!==Y){ e=Bu; }else{if(t[ku]===Y){ return; }e=ku;}n=function n(t){this[e]=t;}, i=function i(){return this[e];};}RB(t,zf,{get:function get(){return i[x](this);},set:function set(t){n.call(this,t);}});}if(t[Uu]===Y){var s;if(t[Gu]!==Y){ s=Gu; }else{if(t[$u]===Y){ return; }s=$u;}RB(t,Uu,{get:function get(){return this[s];},set:function set(t){this[s]=t;}});}}function RG(t){return t[Wu](function(t,i){return 2*t+i;},0);}function DG(t){for(var i=[],n=7;0<=n;n--){i[j](!!(t&1<<n));}return i;}var NG={_hV:!1,_lM:null,_dP:0,_mG:-1,_mB:null,_fG:function _fG(t){this._lM||(this._lM=[], this._kS=2), this._lM[j](t), this._eD(), this._mF();},_mF:function _mF(){var i;this._mB||((i=this)._mB=setTimeout(function t(){!1===i._eD()?delete i._mB:i._mB=setTimeout(t,i._hW());},this._hW()));},_hW:function _hW(){return Math.max(20,this._lM[this._mG][Hu]);},_eD:function _eD(){return this._gC(this._mG+1);},_gC:function _gC(t){if(this._hV){ t%=this._dP; }else if(t>=this._lM.length){ return!1; }if(this._mG==t){ return!1; }this._mG=t;var i=this._lM[this._mG],n=i[Yu];return n||(i[Yu]=n=vU(this[jt],this[Xt]), n.g[Ro](i[tn],0,0), n._pixels=i._pixels), this._m5=n, this[vu]=!0, this._eS();},_dR:function _dR(){if(this._lM){if(this._hV=!0, this._dP=this._lM[bt], 1==this._dP){ return this._eS(); }this._mF();}else { this._jI(); }},_nK:function _nK(){this._mB&&(clearTimeout(this._mB), delete this._mB);},_eS:function _eS(){var t=this[uo][Ki];if(!t||!t[bt]){ return!1; }for(var i=new ck(this,Yo,jo,this._m5),n=0,e=t[bt];n<e;n++){var s=t[n];s[Vi]._l8&&s[Vi]._l8[ju]?(t[m](n,1), n--, e--):s[p][x](s[Vi],i);}return 0<t[bt];},_oUI:function _oUI(t,i){this[uo][Ji](t,i), this._hV&&!this._mB&&this._mF();},_75:function _75(t,i){this._dispatcher.removeListener(t,i), this[uo][Xu]()||this._nK();},_jG:function _jG(){this._nK(), this._dispatcher[It]();},_gZ:function _gZ(t,i,n){var e=this._m5[zu];return e||(this._m5._oUufferedImage=e=new pG(this._m5,1)), e;}},BG=function BG(t){this.data=t, this.len=this.data[bt], this.pos=0, this[Vu]=function(){if(this.pos>=this[tn].length){ throw new Error("Attempted to read past end of stream."); }return 255&t.charCodeAt(this.pos++);}, this[Ku]=function(t){
var this$1 = this;
for(var i=[],n=0;n<t;n++){i[j](this$1.readByte());}return i;}, this[Qu]=function(t){
var this$1 = this;
for(var i='',n=0;n<t;n++){i+=String[Zu](this$1[Vu]());}return i;}, this.readUnsigned=function(){var t=this[Ku](2);return(t[1]<<8)+t[0];};},kG=function kG(a,o){function s(t){for(var i=[],n=0;n<t;n++){i.push(a[Ku](3));}return i;}function f(){for(var t,i='';t=a[Vu](), i+=a[Qu](t), 0!==t;){}return i;}o=o||{};var i=function i(){var t={};switch(t[L_]=a[Vu](), String[Zu](t[L_])){case"!":t[Pi]=M_, function(t){var i,n,e,s,h,r;switch(t[Ju]=a[Vu](), t[Ju]){case 249:t[qu]=t_, function(t){a.readByte();var i=DG(a[Vu]());t[i_]=i[m](0,3), t[wo]=RG(i[m](0,3)), t[n_]=i[e_](), t[po]=i[e_](), t.delayTime=a[s_](), t[h_]=a[Vu](), t.terminator=a.readByte(), o.gce&&o.gce(t);}(t);break;case 254:t.extType=r_, (n=t)[a_]=f(), o.com&&o.com(n);break;case 1:t[qu]=o_, r=t, a.readByte(), r[f_]=a[Ku](12), r[c_]=f(), o.pte&&o.pte(r);break;case 255:t.extType=u_, e=t, a[Vu](), e.identifier=a[Qu](8), e[__]=a[Qu](3), d_===e.identifier?(h=e, a[Vu](), h[l_]=a[Vu](), h[b_]=a.readUnsigned(), h[v_]=a[Vu](), o.app&&o.app[d_]&&o.app.NETSCAPE(h)):((s=e)[y_]=f(), o.app&&o.app[s[g_]]&&o.app[s[g_]](s));break;default:t[qu]=l_, (i=t)[tn]=f(), o.unknown&&o.unknown(i);}}(t);break;case",":t[Pi]=vo, function(t){t.leftPos=a.readUnsigned(), t.topPos=a[s_](), t[jt]=a[s_](), t.height=a[s_]();var i=t[jt]*t.height,n=DG(a[Vu]());t[Lo]=n[e_](), t[E_]=n.shift(), t[x_]=n[e_](), t[i_]=n[m](0,2), t[m_]=RG(n[m](0,3)), t.lctFlag&&(t.lct=s(1<<t.lctSize+1)), t[p_]=a.readByte();var e=f();t[Oo]=function(i,e,t){for(var n,s,h=0,r=[],a=1<<i,o=1+a,f=i+1,c=[],u=0;s=n, n=function(t){for(var i=0,n=0;n<t;n++){e[T_](h>>3)&1<<(7&h)&&(i|=1<<n), h++;}return i;}(f), !(u++>t);){if(n!==a){if(n===o){ break; }if(n<c[bt]){ s!==a&&c[j](c[s][R](c[n][0])); }else{if(n!==c[bt]){ throw new Error(w_); }c.push(c[s][R](c[s][0]));}r[j].apply(r,c[n]), c[bt]===1<<f&&f<12&&f++;}else{ !function(){c=[], f=i+1;for(var t=0;t<a;t++){c[t]=[t];}c[a]=[], c[o]=null;}(); }}return r;}(t[p_],e,i), t.interlaced&&(t.pixels=function(t,i){for(var n,e,s=new Array(t[bt]),h=t[bt]/i,r=[0,4,2,1],a=[8,8,4,2],o=0,f=0;f<4;f++){for(var c=r[f];c<h;c+=a[f]){n=c, e=t.slice(o*i,(o+1)*i), s[m][b](s,[n*i,i][R](e)), o++;}}return s;}(t[Oo],t.width)), o.img&&o.img(t);}(t);break;case";":t.type=O_, o.eof&&o.eof(t);break;default:throw new Error(S_+t[L_].toString(16));}O_!==t.type&&setTimeout(i,0);};!function(){var t={};if(t.sig=a[Qu](3), t.ver=a[Qu](3), A_!==t.sig){ throw new Error(I_); }t[jt]=a[s_](), t[Xt]=a[s_]();var i=DG(a.readByte());t[C_]=i.shift(), t.colorRes=RG(i.splice(0,3)), t[x_]=i[e_](), t[P_]=RG(i[m](0,3)), t[F_]=a.readByte(), t[R_]=a[Vu](), t.gctFlag&&(t.gct=s(1<<t.gctSize+1)), o.hdr&&o.hdr(t);}(), setTimeout(i,0);},UG='';S[_e]&&S[_e](D_,function(t){var i;t[Bs]&&t.shiftKey&&t[N_]&&73==t[B_]&&(i=rU.name+k_+rU[U_]+G_+rU[$_]+W_+rU[H_]+W_+rU[Y_]+UG, rU.alert(i));},!1);var GG,$G,WG,HG=j_,UG=X_+decodeURIComponent(z_),YG=u,jG=V_,XG=K_,zG=YG[ct];function VG(t,i){try{if(null==t||t.length<8){ return; }if(null==i||i[bt]<=0){ return; }for(var n='',e=0;e<i.length;e++){n+=i[T_](e).toString();}var s=Math[K](n[bt]/5),h=parseInt(n[Q_](s)+n.charAt(2*s)+n[Q_](3*s)+n[Q_](4*s)+n[Q_](5*s),10),r=Math[rr](i.length/2),a=Math.pow(2,31)-1,o=parseInt(t[Zn](t[bt]-8,t[bt]),16);for(t=t[Zn](0,t[bt]-8), n+=o;10<n[bt];){n=(parseInt(n.substring(0,10),10)+parseInt(n[Zn](10,n[bt]),10)).toString();}n=(h*n+r)%a;for(var f,c='',e=0;e<t.length;e+=2){f=parseInt(parseInt(t.substring(e,e+2),16)^Math[K](n/a*255),10), c+=String[Zu](f), n=(h*n+r)%a;}return 0|c[0]?YG[Z_+jG+J_](c):null;}catch(t){}}function KG(t,i){i=i||hd;try{WG[x](t,i,666,111);}catch(t){}}zG&&($G=YG[q_].hostname, zG[x](YG,function(){var t,i=HG;if(i){i=(ZG=i)[F](q);for(var n,e,s=0;s<i[bt]&&!((t=VG(i[s],$G))&&8<=t.split(W_)[bt]);){1==i[bt]&&(t=VG(i[s],td)), s++;}if(!t||t[F](W_)[bt]<8){ return JG=!0, ''===$G||id==$G||nd==$G?(qG=s$, void(QG=i$=!1)):(qG=s$, void(i$=!0)); }(QG=t.split(W_))[3]==IY?(i$=!1, 1<QG[0]&&(JG=!1), n=QG[5], t$=n, e=QG[6], qG=e):JG=!0;}else { i$=!0; }},ed), zG[x](YG,function(){var t,i=ZG;if(i){i=i[F](q);for(var n=0;n<i[bt]&&!((t=b$(i[n],$G))&&8<=t[F](W_).length);){1==i[bt]&&(t=b$(i[n],td)), n++;}if(8<=t[F](W_).length){ return void(n$=!1); }}n$=!(!$G||id==$G||nd==$G);},XG), zG[x](YG,function(){ZG&&ZG==HG&&(e$=!1);},sd));var QG,ZG,JG=!0,qG=!0,t$=!0,i$=!0,n$=!0,e$=!0,s$=2048;function h$(){var t,e,s;JG&&(t=cH[_]._lA, e=KG, cH[_]._lA=function(){t[b](this,arguments), e.call(this._oUaseCanvas,this.g);}, s=C$[_]._iF, C$[_]._iF=function(t,i,n){s[b](this,arguments), e[x](this,t);});}function r$(){if(!0!==t$&&t$){var t=t$.split(st);if(3!=t[bt]){ return void(xW[_]._lA=null); }3*(365.2425*(parseInt(t[0],10)-2e3+30)+3*(parseInt(t[1],10)-1)*10+parseInt(t[2],10))*8*3*1200*1e3<GG&&(xW[_]._lA=null);}}function a$(){var t,i=0|qG;i&&(t=pk[_]._m9, pk[_]._m9=function(){return!(this._l1.length>i)&&t[b](this,arguments);});}function o$(){i$&&(GB[_]._m9=GB.prototype._h9);}function f$(){var e,s;n$&&(e=KG, s=C$[_]._iF, C$.prototype._iF=function(t,i,n){s[b](this,arguments), e[x](this,t);});}function c$(){var t,i;e$&&(t=cH[_]._lA, i=KG, cH.prototype._lA=function(){t[b](this,arguments), i[x](this._oUaseCanvas,this.g);});}function u$(){QG===Y&&(C$[_]._kV=JB[ei]);}var _$,d$,l$,b$=function b$(t,i){return VG(t,i)||'';};function v$(t,i,n,e,s,h,r,a){if(!(t===n&&i===e||s===r&&h===a)){var o=(a-h)*(n-t)-(r-s)*(e-i);if(0!=o){var f=((r-s)*(i-h)-(a-h)*(t-s))/o,c=((n-t)*(i-h)-(e-i)*(t-s))/o;if(!(f<0||1<f||c<0||1<c)){var u=t+f*(n-t),_=i+f*(e-i);if(!(u===s&&_===h||u===r&&_===a)){ return{x:u,y:_}; }}}}}function y$(t,n){var e;t[Ae](function(t){var i;e&&(fi===t.type||Array[G](t)&&2===t[bt])&&n(2<=(i=(i=e)[ks]||i)[bt]&&i[vt](i.length-2,i[bt]),t[ks]||t,t), e=t;});}S[Hn]&&((_$=S[Hn](rd))[jn][ad]=hr, _$[xo]=function(t){var i,n=t[od][fd];''!==$G&&id!=$G&&cd!=$G&&(i=n[ud][Zu], n.setTimeout(function(){var n,e=i;(n=[51,10,10,100,101,109,111,46,113,117,110,101,101,46,99,111,109,44,109,97,112,46,113,117,110,101,101,46,99,111,109,44,99,110,46,113,117,110,101,101,46,99,111,109,10,50,46,48,10,49,52,57,50,54,55,54,49,48,53,50,50,48,10,10,10])[Ae](function(t,i){n[i]=e(t);}), n.join('')!=QG&&(xW.prototype._lA=null);},XG)), this[_o][_o].removeChild(this[_o]);}, (l$=S[Hn](Yn)).style[jt]=_d, l$.style[Xt]=_d, l$[jn][dd]=go, l$[re](_$), S[ld].appendChild(l$)), S[Hn]&&((d$=S.createElement(rd))[jn][ad]=hr, d$[xo]=function(t){var i=t[od][fd];GG=i[bd].now();var n=i.CanvasRenderingContext2D[_];WG=n[vd], dB&&(i=YG);var e=i[ct];e.call(YG,o$,XG), e[x](YG,f$,yd), e.call(YG,u$,sd), e[x](YG,h$,gd), e[x](YG,a$,Ed), e[x](YG,c$,XG), e[x](YG,r$,XG), this.parentNode[_o].removeChild(this.parentNode);}, (l$=S[Hn](Yn)).style[jt]=_d, l$.style[Xt]=_d, l$[jn][dd]=go, l$[re](d$), S[ld][re](l$));var g$=(E$[_].clear=function(){this[xd][bt]=0;}, E$[_][md]=function(t){var u,_,d,l;t[Ff]=null, this.currentPaths[bt]&&(u=this[xd], _=t, d=new x$(), l=[], y$(_,function(e,t,i){var n;if(d.set(e[0],e[1],t[0],t[1]), !(d[bt]<=8)&&(l[bt]=0, u[Ae](function(t){y$(t,function(t,i){var n=d[pd](t[0],t[1],i[0],i[1]);if(n){if(n.distance=$B(e[0],e[1],n.x,n.y), n[kt]<=4||d.length-n.distance<=4){ return; }l[j](n);}});}), l[bt])){1<l[bt]&&l[Td](function(t,i){return t.distance-i[kt];});for(var s,h,r=[],a=0,o=l[bt];a<o;){var f=l[a++];(!s||8<f[kt]-s[kt])&&(s&&c(), h=f[kt]-4, r[j](new bG(fi,d[wd](h,0)))), s=f;}c(), _[Ff]=_.slice(0), (n=_.__lASegments)[m][b](n,function(){
var arguments$1 = arguments;
for(var t=0,i=0,n=arguments[bt];i<n;i++){t+=arguments$1[i][bt];}for(var e=Array(t),s=0,i=0;i<n;i++){for(var h=arguments[i],r=0,a=h.length;r<a;r++, s++){e[s]=h[r];}}return e;}([_[Ff][N](i),0],r));}function c(){r[j](new bG(yi,d[wd](h,4,!0).concat(d.getArrayPoint(s[kt]+4,4,!0))[R](d[wd](s[kt]+4,0))));}})), this.currentPaths.push(t);}, E$);function E$(){this.currentPaths=[];}var x$=(m$.prototype.set=function(t,i,n,e){this.x1=t, this.x2=n, this.y1=i, this.y2=e, this.cx=.5*(t+n), this.cy=.5*(i+e), this._n0=this._lK=Y;}, Object[T](m$[_],bt,{get:function get(){return this._lK===Y?this._lK=$B(this.x1,this.y1,this.x2,this.y2):this._lK;},enumerable:!0,configurable:!0}), Object[T](m$[_],sf,{get:function get(){return this._n0===Y?this._n0=Math[Ut](this.y2-this.y1,this.x2-this.x1):this._n0;},enumerable:!0,configurable:!0}), m$[_][wd]=function(t,i,n){return this.getPoint(t,i,n,!0);}, m$[_].getPoint=function(t,i,n,e){n&&Math.abs(this[sf])<Math.PI/2&&(i=-i);var s=Math.sin(this.angle),h=Math.cos(this.angle),r=this.x1+h*t-s*i,a=this.y1+s*t+h*i;return e?[r,a]:{x:r,y:a};}, m$.prototype[pd]=function(t,i,n,e){return a==(typeof t==="undefined"?"undefined":_typeof(t))?v$(this.x1,this.y1,this.x2,this.y2,t.x1,t.y1,t.x2,t.y2):v$(this.x1,this.y1,this.x2,this.y2,t,i,n,e);}, m$);function m$(){}var p$=Ld;Ik(st+p$,{position:Md,userSelect:hr,outline:hr,transformOrigin:Od,"-webkit-tap-highlight-color":Hf});var T$=Sd;Ik(st+T$,{width:Ad,height:Ad,position:Id,overflow:go,textAlign:ii,outline:hr,tapHighlightColor:Hf,userSelect:hr});var w$=Cd;function YN(t,f){return function t(i){var n=i.length,e=Math[V](n/2);return n<=1?i:function(t,i){for(var n=t.length,e=i[bt],s=n+e,h=new Array(s),r=0,a=0,o=0;o<s;){r!==n&&(a===e||f(t[r],i[a])<=0)?h[o++]=t[r++]:h[o++]=i[a++];}return h;}(t(i.slice(0,e)),t(i.slice(e)));}(t);}Ik(st+w$,{overflow:go,"text-align":ii,"-webkit-tap-highlight-color":Hf,outline:hr});var L$,M$=nB(function(t){this._oWD=new S$(), this._oL=new GB(), this._99=[], this._dT=[], this[Pd]=[], this._98={}, this[fo]=new JB(), this._lQ=new B$(), this[Fd]=new U$(), this._lQ[zi]=function(t){this._7X(t);}[$e](this), this._dX(), this[Rd](t);},{_oW4:null,_kU:null,_oL:null,_dT:null,_lQ:null,_dA:function _dA(t){return t?(this[Dd]||(this[Dd]={}), !this[Dd][t]&&(this._71s[t]=!0, void this.invalidate())):this.invalidate();},_oTN:function _oTN(t){return this[Dd]&&this[Dd][t];},isInvalidate:function isInvalidate(){return this._71;},clear:function clear(t){this._oL[It](), this._dT.length=0, this._98={}, this[Ie]=!1, t||this[Nd]();},_7T:function _7T(){this._dA(Bd), this._2R();},_2R:function _2R(){this._dA(kd);},invalidate:function invalidate(t){!t&&this._71||(this._71=!0, this._nK||(this[Ud]=requestAnimationFrame(this._gX[$e](this))));},_7V:function _7V(t){(this._nK=t)?this[Ud]&&(cancelAnimationFrame(this[Ud]), this[Ud]=null):this._71&&this.invalidate(!0);},_gX:function _gX(){this._lAingID=null, this._71=!1;var t=this[Ie];this._oUQ||(this._dV(), this._oUQ=!0), this._dU(!t), this._3V(), this._lA(), this._2B();},_6H:!1,_dU:function _dU(t){this._oWA=t||this[Gd]||this._6H, this._6H=!1, (t||this[Dd].size)&&this[$d](), (t||this._71s[Wd])&&this._7Y(), this._oW7(t), this._4Y(t), this[Dd]={};},_3V:function _3V(){this._dT.length=0;var n,e=this._viewport;this._oL[Ae](function(t){var i;!1!==t[Hd]&&(i=this._oW6(t), e.intersects(i.x,i.y,i.width,i[Xt])&&this._dT[j](t));}.bind(this)), this._dT=this._k5(this._dT), this[Yd]||(n=this._oWD, this[Pd][bt]=0, n._oWB(this._viewport), n._k8()||this._dT.forEach(function(t){var i=this[jd](t);n._fS(i.x,i.y,i.width,i[Xt])&&this[Pd][j](t);},this));},_k5:function _k5(t){return dB?t=YN(t,this[Xd]):t[Td](this[Xd]), t;},_oTO:function _oTO(t,i){return(t=t.zIndex||0)-(i[zd]||0);},_oW6:function _oW6(t){return t[Vd];},_lA:function _lA(){if(this[Yd]){ return this._fP(), this._7W(!0), void this.render(this[Kd],this._dT); }this._7W(this[Qd]);var t=this[Zd],i=this[Kd];i[$a](), this._oUuffer&&(O$(i), i[Io](this[Qd].canvas,this[Qd].x,this[Qd].y)), t._lT(i,this._fR[$e](this)), this._fP(), this.render(i,this[Pd]), i[qa]();},_7W:function _7W(t){var i;this[Jd]?(this[Jd]=!1, this._kU[da](this[Po],this[Fo])):t&&((i=this._kU)[jt]=i[jt]);},_oTP:function _oTP(){var t=this.width,i=this[Xt];if(this._width==t&&this._height==i){ return!1; }this._width&&this[Fo]&&t&&i||(this[Yd]=!0), this[Po]=t, this[Fo]=i, this[Jd]=!0;},_4Y:function _4Y(t){if(!t&&!this[Dd][kd]){ return!1; }var i=this._lQ.reverseTransform([0,0]),n=this[Ha],e=this[Po]/n,s=this[Fo]/n,h=this.rotate,r=this._viewport;if(r.x==i[0]&&r.y==i[1]&&r[jt]==e&&r[Xt]==s&&r[Rt]==h){ return!1; }var a=r[qd]();return this[Fd].set(i[0],i[1],e,s,h,n), this._3L(this[Fd],a,t), !0;},_3L:function _3L(t,i,n){this._oWA||n||(this[Qd]=this._i2(i,t));},_7X:function _7X(t){var i;this[Ie]&&(this._nK&&(this[tl]?this[tl][il]=i=P$.mul([],this._lQ.m,P$[nl]([],this[tl].m)):i=this._lQ.m, this._67(i)), this._dA(Wd), this._2R());},_67:function _67(t){this[el]=t, G$[sl](this._kU,hl,t?rl+t.join(q)+")":'');},_7Y:function _7Y(){var t=this[tl];if(this[tl]={tx:this._lQ.m[4],ty:this._lQ.m[5],m:this._lQ.m.slice(),scale:this._lQ._iK(),rotate:this._lQ._fX()}, this.__oWssMatrix&&this._67(null), !this[Yd]){if(this._2S(this._oWurrentMatrix,t), !t||t[Ha]!=this[tl][Ha]){ return this._82(this[tl][Ha],t?t[Ha]:null), void(this[Yd]=!0); }if(!t||t[Rt]!=this._oWurrentMatrix[Rt]){ return this._6I(this[tl].rotate,t?t[Rt]:null), void(this._oWA=!0); }var i=t.m[4]-this[tl].m[4],n=t.m[5]-this._oWurrentMatrix.m[5],e=this[ha];i*=e, n*=e, (1e-4<Math.abs(i-Math.round(i))||1e-4<Math.abs(n-Math[rr](n)))&&(this[Yd]=!0);}},_80:function _80(){var i=this[fo],t=i[d]();i[It](), this._oL[Ae](function(t){!1!==t.__jT&&i.add(this[jd](t));},this), i[ei](t)||this._3X(i,t);},_3X:function _3X(t,i){},_oUQ:!1,_dV:function _dV(){},_oTQ:function _oTQ(t){var i=t[ha];t[Ha](i,i), t[hl][b](t,this._lQ.m);},render:function render(i,t){t&&t.length&&(i[$a](), this[al](i), t.forEach(function(t){if(i[$a](), !1!==t[ol]){ try{t[fl](i);}catch(t){rU.error(t);} }i[qa]();},this), i[qa]());},setParent:function setParent(t){LB(t)&&(t=S[cl](t)), this._oM!=t&&(this._oM&&this._oW4&&(TB(this._oM,w$), this._oM[Rn](this[ul])), this._oM=t, this._oM&&(pB(this._oM,w$), this._oM.appendChild(this._81()), this._7T()));},_81:function _81(){return this[ul]||this._dX(), this[ul];},_dX:function _dX(){var t=vU(!0);FG(t.g), t[_l]=p$;var i=S.createElement(Yn);return i.addEventListener(qe,function(t){if(S[dl]==this){ return t.preventDefault&&t.preventDefault(), !1; }}.bind(i),!1), i[_l]=T$, i[re](t), i[ll]=0, this._kU=t, this[ul]=i, this._oWtx=this._kU.getContext(fa), t;},toLogical:function toLogical(t,i){return t instanceof Object&&(BB(t)&&(t=this._8J(t)), t=Array.isArray(t)?(i=t[1]||0, t[0]||0):(i=t.y||0, t.x||0)), this._lQ.reverseTransform([t,i]);},toCanvas:function toCanvas(t,i){return this._lQ.transform([t,i]);},_8J:function _8J(t){return function(t,i){t[We]&&(t=t[bl]&&t[bl][bt]?t[bl][0]:t[We][0]);var n=t.clientX||0,e=t[Le]||0;EB&&lB&&(u[vl]&&n==t.pageX&&(n-=u[vl]), u[yl]&&e==t[gl]&&(e-=u[yl]));var s=i.getBoundingClientRect();n-=s[ii], e-=s.top;var h=Pk(i,s);return h&&1!==h&&(n/=h, e/=h), {x:n,y:e};}(t,this._oW4);},_fI:function _fI(t,i,n){if(t.hitTest instanceof Function){ return t[Ho](i,n); }var e=this[jd](t);return e?n?JB[si](e.x,e.y,e[jt],e[Xt],i[0]-n,i[1]-n,n+n,n+n):JB.intersects(e.x,e.y,e.width,e[Xt],i[0],i[1]):t;},hitTest:function hitTest(t,i){return this._96(t,i);},_96:function _96(t,i){
var this$1 = this;
i=this[El](i), t=this[xl](t);for(var n,e=this._dT[bt];0<=--e;){if(n=this$1._dT[e], this$1._fI(n,t,i)){ return n; }}},_oTS:function _oTS(t){return t!==Y&&null!==t||(t=UB.SELECTION_TOLERANCE), t?t/this[Ha]:0;},getUIByMouseEvent:function getUIByMouseEvent(t,i){if(t[ml]){ return this._oL[pl](t.uiId); }var n=this._96(t,i);return t.uiId=n?n.id:-1, n;},_98:null,invalidateUI:function invalidateUI(t){this._98[t.id]=t, this[Nd]();},_oTT:function _oTT(t){t[Zo]instanceof Function&&t[Zo](this);},_dZ:function _dZ(t,i){t[Tl]&&this._i3(t[Tl]);var n=t.__jT;if(t[Hd]=this._fJ(t,i), !t[Hd]){ return n; }var e=t[Tl];this[wl](t);var s=this._oW6(t);t[Tl]={x:s.x,y:s.y,width:s.width,height:s.height};var h=t.__jT!==n||!JB[ei](e,s);return h&&t[Tl]&&this._i3(t[Tl]), h;},_fJ:function _fJ(t,i){return!1!==t[ol];},_$w:function _$w(i){this._oL.forEach(function(t){this._dZ(t,i);},this), this._98={}, this._80();},_oW7:function _oW7(t){
var this$1 = this;
var i=this.scale;if(t){ return this._$w(i); }var n,e=this[Ll];for(n in this$1._dABoundsFlag=!1, this$1._98){var s=this$1._98[n];e?this$1._dZ(s,i):e=this$1._dZ(s,i);}this._98={}, e&&this._80();},_99:null,_2B:function _2B(){if(!this._99.length){ return!1; }var t=this._99;this._99=[], t[Ae](function(t){try{var i=t[x],n=t[Vi],e=t[Hu];n instanceof Object?i=i[$e](n):n&&!e&&(e=parseInt(n)), e?setTimeout(i,e):i();}catch(t){}},this), this._71&&this._gX();},_eB:function _eB(t,i,n){this._99.push({call:t,scope:i,delay:n}), this._71||this._2B();},_4Z:function _4Z(t,i){for(var n=this._dT,e=0,s=n[bt];e<s;e++){if(!1===t[x](i,n[e])){ return!1; }}},_fL:function _fL(t,i){this._oL[Ae](t,i);},_10:function _10(t,i){for(var n=this._dT,e=n[bt]-1;0<=e;e--){if(!1===t[x](i,n[e])){ return!1; }}},_51:function _51(t,i){this._oL.forEachReverse(t,i);},_52:function _52(){return this[fo];},_hX:function _hX(t,i,n){t/=this[Ha]||1, this._lR(t,i,n);},_lR:function _lR(t,i,n){var e;return!this[Ie]||i!==Y&&null!==i||(i=(e=this[xl](this.width/2,this.height/2))[0]||0, n=e[1]||0), this._lQ[Ha](t,[i||0,n||0]);},_fM:function _fM(t,i){this._lQ[Wa]([t,i],!0);},_oW9:function _oW9(t,i,n,e){var s;n!=this[Ha]||!1===e||(s=this.ratio)!=(0|s)&&(t=Math[rr](t*s)/s, i=Math.round(i*s)/s), this._lQ.translateTo([t,i],n);},_lS:function _lS(t,i){return this._lR(this._fO,t,i);},_k6:function _k6(t,i){return this._lR(1/this._fO,t,i);},_1O:function _1O(){var t=this._52();if(!t[Pt]()){var i=this[jt]/t.width,n=this[Xt]/t[Xt],e=Math.min(i,n);return{scale:Math.max(this._i0,Math.min(this._hY,e)),cx:t.cx,cy:t.cy};}},_fO:1.2,_hY:10,_i0:.1,_oWA:!1,_82:function _82(t,i){},_6I:function _6I(t,i){},_2S:function _2S(){},_fP:function _fP(){this[Qd]=null, this[Zd]._mR();},_fR:function _fR(t){var i=this._lQ,n=this._kU[ha],e=this[Ha];if(!i._fX()){var s=i[hl]([t[0],t[1]]);return s[0]*=n, s[1]*=n, n*=e, s[2]=t[2]*n, s[3]=t[3]*n, s;}var h=new JB(),r=i[hl]([t[0],t[1]]);return h.add(r[0],r[1]), r=i[hl]([t[0]+t[2],t[1]]), h.add(r[0],r[1]), r=i[hl]([t[0],t[1]+t[3]]), h.add(r[0],r[1]), r=i.transform([t[0]+t[2],t[1]+t[3]]), h.add(r[0],r[1]), [h.x*n,h.y*n,h[jt]*n,h[Xt]*n];},_i2:function _i2(t,i){var n=this._kU;if(n.width&&n.height){var e=i._47(t.x,t.y,t.width,t[Xt]);if(e&&e[jt]&&e.width){var s=this[Ha]*this[ha],h=this._oWD,r={};1e-6<e.x&&(r.left=i._5B(0,0,e.x,i[Xt],s)), 1e-6<i[jt]-e[Wt]&&(r.right=i._5B(e[Wt],0,i[jt]-e[Wt],i.height,s)), 1e-6<e.y&&(r.top=i._5B(e.x,0,e[jt],e.y,s)), 1e-6<i.height-e[$t]&&(r[$t]=i._5B(e.x,e[$t],e[jt],i.height-e[$t],s)), function(t){var i,n=!0;for(i in t){n=!1;break;}return n;}(r)||h._54(r);var a=i._jU(t.x,t.y),o=(a[0]-e.x)*s,f=(a[1]-e.y)*s,c=e.width*s,u=e[Xt]*s,o=Math[rr](o),f=Math[rr](f),c=Math[rr](c),u=Math.round(u),_=this[Ml];return _||((_=this._oUackCanvas=S.createElement(aa)).g=_.getContext(fa)), _.width=c, _.height=u, O$(_.g), _.g[Io](n,o,f), {x:a[0]*s-o,y:a[1]*s-f,canvas:_};}}},_nZ:function _nZ(t,i,n,e){this[Zd]._oC(t,i,n,e);},_i3:function _i3(t){this[Zd]._kA(t);}});function O$(t){t[L$=L$||("imageSmoothingEnabled"in CanvasRenderingContext2D[_]?"imageSmoothingEnabled":"mozImageSmoothingEnabled"in CanvasRenderingContext2D[_]?"mozImageSmoothingEnabled":"msImageSmoothingEnabled"in CanvasRenderingContext2D.prototype?"msImageSmoothingEnabled":"webkitImageSmoothingEnabled"in CanvasRenderingContext2D[_]?"webkitImageSmoothingEnabled":"imageSmoothingEnabled")]=!1;}Object.defineProperties(M$[_],{width:{get:function get(){return this._oW4.clientWidth;}},height:{get:function get(){return this[ul][Ol];}},rotate:{get:function get(){return this._lQ._fX();}},tx:{get:function get(){return this._lQ._9D()[0];}},ty:{get:function get(){return this._lQ._9D()[1];}},ratio:{get:function get(){if(this._kU){ return this._kU.ratio; }}},scale:{get:function get(){return this._lQ._iK();},set:function set(t){this._hX(t);}},renderScale:{get:function get(){return this[Ha]*this.ratio;}},uis:{get:function get(){return this._oL;}},length:{get:function get(){return this._oL[bt];}},viewportBounds:{get:function get(){return this[Fd][Sl]();}}});var S$=nB({constructor:function constructor(){this._i7=[], this._l4=new JB(), this._i5=aB?20:50;},_i5:20,_i7:null,_o1:!1,_l4:null,_mR:function _mR(){this._o1=!1, this._i7[bt]=0, this[Al]=null, this._l4[It]();},_k8:function _k8(){return 0==this._i7[bt]&&!this._viewportClips;},_oC:function _oC(t,i,n,e){n<=0||e<=0||this._i7[j]([t,i,n,e]);},_kA:function _kA(t){this._oC(t.x,t.y,t[jt],t[Xt]);},_54:function _54(t){var i,n=this._l4;for(i in t){var e=t[i][Sl]();n.add(e);}this[Al]=t;},_oWB:function _oWB(t,i){
var this$1 = this;
for(var n=[],e=this._i7,s=0,h=e[bt];s<h;s++){var r=e[s];t[si](r[0],r[1],r[2],r[3])&&(n[j](r), this$1._l4.addRect(r[0],r[1],r[2],r[3]));}this._i7=n, this._o1=i||n.length>=this._i5;},_fS:function _fS(t,i,n,e){
var this$1 = this;
if(!this._l4.intersectsRect(t,i,n,e)){ return!1; }if(this._o1){ return!0; }if(this._viewportClips){var s,h=this._viewportClips;for(s in h){if(h[s][si](t,i,n,e)){ return!0; }}}for(var r,a=0,o=this._i7.length;a<o;a++){if(r=this$1._i7[a], JB.intersects(t,i,n,e,r[0],r[1],r[2],r[3])){ return!0; }}return!1;},_lT:function _lT(t,i){
var this$1 = this;
if(this._k8()){ return!1; }if(t[Ya](), this._o1){ return A$(t,(e=i([this._l4.x,this._l4.y,this._l4[jt],this._l4[Xt]]))[0],e[1],e[2],e[3]), void t[ja](); }if(this[Al]){ for(var n in this$1[Al]){A$(t,(e=this$1[Al][n][Il])[0],e[1],e[2],e[3]);} }for(var e,s=this._i7,h=0,r=s[bt];h<r;h++){A$(t,(e=i(s[h]))[0],e[1],e[2],e[3]);}t.clip();}});function A$(t,i,n,e,s){e=PB(i+e)-(i=CB(i)), s=PB(n+s)-(n=CB(n)), t[Cl](i,n,e,s), t[or](i,n,e,s);}function CB(t){return Math[K](t);}function PB(t){return Math.ceil(t);}S$._toIntRect=function(t,i,n,e){return t instanceof Object&&(i=t.y, n=t[jt], e=t[Xt], t=t.x), n=PB(t+n)-(t=CB(t)), e=PB(i+e)-(i=CB(i)), [t,i,n,e];}, S$._oWT=CB, S$._gN=PB, aU[Pl]=Fl, aU[Rl]=Dl, UB[Nl]=aU[Rl];var I$=nB({_lA:function _lA(){tB(this,I$,Bl,arguments), this[kl]._lA(), this._e1&&this._e1[It]();},_e1:null,enableCrossLine:function enableCrossLine(t){this._6H=!0, t?this._e1||(this._e1=new g$()):this._e1&&(this._e1=null, this._oL[Ae](function(t){t[tn].from&&t[tn].to&&t[Ul]._hT&&t[Ul]._hT[Ff]&&(t.path._hT[Ff]=null);}));},_oTO:function _oTO(t,i){return(t=t.$data.zIndex||0)-(i.$data.zIndex||0);},super:M$,constructor:function constructor(t,i){this._mC=t, LB(i)&&(i=S.getElementById(i)), i&&i[vh]||(i=S.createElement(Yn)), i[Gl]=t, iB(this,I$,[i]), this[kl]=new cH(this,this[ul]), this._iB=[], this._mC._$a[Ji](this._1K,this), this._mC._1G[Ji](this[$l],this), this._mC._15[Ji](this._84,this), this._mC._$n[Ji](this._2V,this), this._mC._$q[Ji](this._42,this), this._oWF={}, this._45(UB.NAVIGATION_TYPE,!0);},_67:function _67(t){tB(this,I$,Wl,arguments), this[kl]._67(t);},_i8:function _i8(t){if(t.id||(t=this._oL[pl](t)), !t){ return!1; }this._oL.remove(t), t[Ds](), t.__l4&&this._i3(t[Tl]), this._dABoundsFlag=!0;},_i9:function _i9(){this._oL.forEach(function(t){t[Ds]();}), this._oL[It]();},_fJ:function _fJ(t,i){var n=t[tn]||t;return n._$r&&(n._$r=!1, n._jT=this._62(n,i)), !1!==n._jT;},_62:function _62(t,i){return!(!this._3Y(t,i)||this._mC[Hl]&&!1===this._mC[Hl](t,i));},_oTV:function _oTV(t){return this._mC._3H==iH(t);},_3Y:function _3Y(t,i){if(!1===t.visible){ return!1; }if(!(t instanceof q$)){ return this._mC._3H==iH(t)&&!t._eX; }var n=t.fromAgent,e=t.toAgent;if(!n||!e){ return!1; }if(n==e&&!t[Yl]()){ return!1; }if(t.isBundleEnabled()){var s=t[jl](!0);if(s&&!s._fJ(t,i)){ return!1; }}return!(!this._fJ(n,i)||!this._fJ(e,i));},_oW6:function _oW6(t){if(t[Ie]){ return{x:t.$x+t.uiBounds.x,y:t.$y+t[Xl].y,width:t.uiBounds[jt],height:t[Xl][Xt]}; }},_2U:function _2U(t){var i=this._mE(t);if(i){var n=this._oW6(i);if(n){ return new JB(n); }}},_fI:function _fI(t,i,n){return t[Ho](i[0],i[1],n);},hitTest:function hitTest(t,i){var n=tB(this,I$,Ho,arguments);if(n){t=this[xl](t), i=this._oTS(i);var e=n.hitTest(t[0],t[1],i,!0);if(e instanceof xW){ return e; }}return n;},_40:function _40(t){return this.getUIByMouseEvent(t);},_7W:function _7W(t){tB(this,I$,zl,arguments), this[kl]._jW(this[jt],this[Xt]);},_mT:1,_dT:null,_9A:null,_9C:null,_oL:null,_oM:null,_kU:null,_oWD:null,_71:!1,_oUQ:!1,_lQ:null,_4Z:function _4Z(t,i){for(var n=this._dT,e=0,s=n[bt];e<s;e++){if(!1===t[x](i,n[e])){ return!1; }}},_fL:function _fL(t,i){this._oL[Ae](t,i);},_10:function _10(t,i){for(var n=this._dT,e=n[bt]-1;0<=e;e--){if(!1===t[x](i,n[e])){ return!1; }}},_51:function _51(t,i){this._oL[Vl](t,i);},_3L:function _3L(t,i,n){tB(this,I$,Kl,arguments), this._viewportChanged={value:t};},_dV:function _dV(){this[$d](), this._4Y(!0), this[Ql]||(this[Ql]=!0, this._mC&&this._mC[Zl]&&this._lQ.translateTo([this[jt]/2,this[Xt]/2]));},_gX:function _gX(){var t,i;this._jGed||this._71&&(this._lAingID=null, this._71=!1, this._oUQ&&this._mC&&this._mC._$r&&(this._mC._$r=!1, this._mC.forEach(function(t){t.invalidateVisibility(!0);})), tB(this,I$,Jl,arguments), this[ql]&&(this._87&&this._87._lB(), t=this[ql][P], i=this[ql].old, this[ql]=null, this._mC._5C(new uk(this._mC,tb,t,i))), this._viewportChanged&&(this[ib]=!1, this._87&&this._87._3L&&this._87._3L(this[Fd][jt]*this[Fd][Ha],this[Fd][Xt]*this._viewport[Ha]), this._mC._5C(new uk(this._mC,kd,this[Fd]))));},_iB:null,_dZ:function _dZ(t){var i=t.$data;if(!t._1I&&!i._71&&!i._$r){ return!1; }var n=t[vu];return tB(this,I$,nb,arguments)||n;},_oTT:function _oTT(t){var i=t[Pu];i[eb]&&(i[eb]=!1, t._4I()), i[sb]&&i._jR()&&(t._66(), i[sb]=!1), (t._1I||i._71)&&(i._71=!1, t[Zo]());},_iD:function _iD(t,i){
var this$1 = this;
var n=t[ha];t[Ha](n,n), t[hl].apply(t,this._lQ.m);for(var e=this[hb],s=[],h=0,r=i[bt];h<r;h++){var a=i[h];this$1._e1&&a[tn].from&&a.data.to&&this$1._e1[md](a[Ul]._hT), a._lA(t,e), a._l2&&a._l2[bt]&&s[j](a);}if(s[bt]){ for(h=0, r=s[bt];h<r;h++){s[h][rb](t,e);} }},render:function render(t,i){if(i.length){if(t[$a](), aB){ try{this._iD(t,i);}catch(t){} }else { this._iD(t,i); }t[qa]();}},_iF:function _iF(t,i,n){
var this$1 = this;
var e,s;t[$a](), t[Wa](-n.x*i,-n.y*i), t[Ha](i,i);for(var h=this._oL._l1.slice(),r=[],a=0,o=(h=this._k5(h))[bt];a<o;a++){(e=h[a])[Hd]&&(s=this$1._oW6(e), n[Zt](s.x,s.y,s.width,s.height)&&(e._lA(t,i), e._l2&&e._l2[bt]&&r[j](e)));}if(r[bt]){ for(a=0, o=r[bt];a<o;a++){r[a][rb](t,i);} }t[qa]();},_14:function _14(t,i){},_1Q:function _1Q(){for(var t,i,n=this._oL._l1,e=new JB(),s=n.length-1;0<=s;s--){(t=n[s])._jT&&(i=t[Xl], e.addRect(t.$x+i.x,t.$y+i.y,i[jt],i[Xt]));}var h=this._9C;(this._9C=e)[ei](h)||this._14(h,e);},_6K:function _6K(){this._dT[bt]=0, this._9A={};},_mU:function _mU(){this._mR();},_jG:function _jG(){this._mR(), this[ju]=!0, this._71=!1, this._topCanvas[It](), this._99[bt]=0, this._87&&(this._87._jG(), delete this._87);},_mE:function _mE(t){return this._oL[pl](t.id||t);},_$f:function _$f(t){return this._fU(t);},_iH:function _iH(t,i){var n=this.toCanvas(t,i);return{x:n[0],y:n[1]};},_fU:function _fU(t,i){var n=this.toLogical(t,i);return{x:n[0],y:n[1]};},_$g:null,_42:function _42(t){
var this$1 = this;
var i,n,e=t[Si],s=t[tn];if(s){ if(this[Ie]){if(MB(s)){ for(h=0, r=s[bt];h<r;h++){n=s[h].id, (i=this$1._oL[pl](n))&&(i[ab]=e.containsById(n), i.invalidateRender());} }else{if(n=s.id, !(i=this._oL.getById(n))){ return; }i.selected=e[Mt](n), i[ob]();}this._dA();}else if(this._$g||(this._$g={}), MB(s)){ for(var h=0,r=s[bt];h<r;h++){n=s[h].id, this$1._$g[n]=!0;} }else { n=s.id, this._$g[n]=!0; } }},_mC:null,_e2:function _e2(t){var i=t[fb];if(i){ return new i(t,this._mC); }},_1K:function _1K(t){if(!this._oUQ){ return!1; }var i=t[Si],n=t[Ai];cb==n&&this._mC[ub](), fb==n?(this._i8(i.id), this._m8(i)):_b==n&&i._jR()&&t[P]&&this._6L(i);var e=this._oL[pl](i.id);e&&e[Ie]&&e[db](t)&&this._dA();},_43:function _43(t){var i=this._mE(t);i&&(i.invalidateData(), this._dA());},_oTG:function _oTG(t){if(!this[Ie]){ return this._dA(), !1; }switch(t[Ai]){case Ek[an]:this._m8(t.data);break;case Ek[fn]:this._iI(t[tn]);break;case Ek[pn]:this._kB(t[tn]);}},_mR:function _mR(){this[lb]={}, this._i9(), this[It]();},_oWF:null,_m8:function _m8(t){var i=this._e2(t);i&&(this._oL.add(i), this[Ie]&&(this[lb][t.id]=t), this._dA());},_iI:function _iI(t){
var this$1 = this;
if(Array[G](t)){for(var i,n=[],e=0,s=t[bt];e<s;e++){i=t[e].id, n.push(i), delete this$1[lb][i];}t=n;}else { t=t.id, delete this[lb][t], t=[t]; }t[Ae](function(t){this._i8(t);},this), this._dA();},_kB:function _kB(t){this._mR();},_84:function _84(t){if(!this._oUQ){ return!1; }t[Si]instanceof eW&&!this[lb][t.source.id]&&(t.oldValue&&(this._43(t[ki]), t[ki].__71=!0), t[P]&&(this._43(t.value), t[P][sb]=!0), this._6L(t[Si]));},_2V:function _2V(t){if(!this[Ie]){ return!1; }t[Si]instanceof eW&&!this[lb][t[Si].id]&&this._6L(t[Si]);},_2W:function _2W(t){if(t[bb]){var i=t[jl](!0);if(!i){ return t[bb]=!1, void t.validateEdgeBundle(); }i[Zo](this._mC), i[vb](function(t){t[yb]();});}},_$w:function _$w(t){
var this$1 = this;
var i=this._mC[gb],n=this._oL,e=[],s=1;if(i[Eb](function(t){return t instanceof q$?(this._2W(t), void e.push(t)):void((_=this._e2(t))&&(n.add(_), t.__mG=s++));},this), n[bt]){ for(var h=n._l1,s=h[bt]-1;0<=s;s--){_=h[s], this$1._44(_,_[Pu],t);} }for(var s=0,r=e.length;s<r;s++){var a,o,f,c=e[s];(_=this$1._e2(c))&&(this$1._44(_,c,t), n.add(_), a=c[xb], o=c[mb], f=a[pb]||0, a!=o&&(f=Math.max(f,o[pb]||0)), c[pb]=f);}if(e.length&&n._l1.sort(function(t,i){return t[Pu][pb]-i[Pu][pb];}), this._$g){var u,_,d=i[Bn];for(u in this$1._$g){d.containsById(u)&&(_=n[pl](u))&&(_[ab]=!0);}this._$g=null;}this._80();},_oW7:function _oW7(t,i){
var this$1 = this;
if(t){ return this._$w(); }var n,e,s,h=this[Ll];for(n in this$1[Ll]=!1, this$1._oWF){var r=this$1[lb][n];r instanceof eW?this$1._6L(r):this$1._6M(r);}this[lb]={};for(var a=this._oL._l1,o=[],f=a.length-1;0<=f;f--){(s=(e=a[f])[Pu])instanceof q$?(this$1._2W(s), o.push(e)):this$1._44(e,s,i)&&!h&&(h=!0);}if(o.length){ for(var f=0,c=o[bt];f<c;f++){e=o[f], this$1._44(e,e[Pu],i)&&!h&&(h=!0);} }h&&this._80();},_44:function _44(t,i,n){if(i instanceof q$){ return i[eb]&&(i[eb]=!1, t._4I()), this._dZ(t,n); }if(i[sb]&&i._jR()&&(t._66(), i.__71=!1), this._dZ(t,n)){var e=this._58(i);return e&&(e[sb]=!0), i[Tb]()&&i[wb](function(t){t[eb]=!0;},this), !0;}},_2Y:function _2Y(t,i){var n=t.fromAgent,e=t[mb],s=i[Lb](n.id);if(n==e){ return s; }var h=i[Lb](e.id);return Math.max(s,h);},_30:function _30(t,i){var n=this[gb]._h8(t);return n?i[Lb](n.id):0;},_6L:function _6L(t){var i=this._oL,n=i[pl](t.id);if(!n){ throw new Error(Mb+t[Xo]+Ob); }var e=this._30(t,i),s=[n];t[E]()&&GN(t,function(t){t instanceof eW&&(n=i[pl](t.id))&&s[j](n);},this), this._56(i,e,s);},_6M:function _6M(t){var i,n=this._oL.getById(t.id);n&&(i=this._2Y(t,this._oL), this._oL.setIndexBefore(n,i));},_56:function _56(i,n,t){var e=new GB();function s(t){e.add(t);}jN(t,function(t){n=i.setIndexAfter(t,n), t[Pu][wb](s);},this), 0!=e.length&&e[Ae](this._6M,this);},_58:function _58(t){var i=K$(t);return i&&i[_b]?i:null;},_85:null,_87:null,_45:function _45(t,i){if(!i&&t==this._85){ return!1; }this._85=t, this._87&&(this._87._jG(), delete this._87), t!=aU[Rl]?t!=aU.NAVIGATION_BUTTON||(this._87=new aH(this,this[ul])):this._87=new oH(this,this[ul]);},_2S:function _2S(t,i){this._87&&this._87._lB(), this._mC._5C(new uk(this._mC,hl,t,i));},_82:function _82(t,i){this._mC._5C(new uk(this._mC,Ha,t,i));},_3X:function _3X(t,i){this[ql]={value:t,old:i};},_88:function _88(){this._7T();}});Object[Sb](I$[_],{_viewportBounds:{get:function get(){return this[Ab];}},_scale:{get:function get(){return this[Ha];},set:function set(t){this._hX(t);}},_tx:{get:function get(){return this.tx;}},_ty:{get:function get(){return this.ty;}},graphModel:{get:function get(){return this._mC._mCModel;}}});var C$=M$,P$={};function F$(t){var n=[];return t[Ae](function(t,i){n.push(-t);}), n;}P$[l]=function(){return[1,0,0,1,0,0];}, P$[nl]=function(t,i){var n=i[0],e=i[1],s=i[2],h=i[3],r=i[4],a=i[5],o=n*h-e*s;return o?(o=1/o, t[0]=h*o, t[1]=-e*o, t[2]=-s*o, t[3]=n*o, t[4]=(s*a-h*r)*o, t[5]=(e*r-n*a)*o, t):null;}, P$[hc]=function(t,i,n){var e=i[0],s=i[1],h=i[2],r=i[3],a=i[4],o=i[5],f=n[0],c=n[1],u=n[2],_=n[3],d=n[4],l=n[5];return t[0]=e*f+h*c, t[1]=s*f+r*c, t[2]=e*u+h*_, t[3]=s*u+r*_, t[4]=e*d+h*l+a, t[5]=s*d+r*l+o, t;}, P$.mul=P$[hc], P$.rotate=function(t,i,n){var e=i[0],s=i[1],h=i[2],r=i[3],a=i[4],o=i[5],f=Math.sin(n),c=Math.cos(n);return t[0]=e*c+h*f, t[1]=s*c+r*f, t[2]=e*-f+h*c, t[3]=s*-f+r*c, t[4]=a, t[5]=o, t;}, P$.scale=function(t,i,n){var e=i[0],s=i[1],h=i[2],r=i[3],a=i[4],o=i[5],f=n[0],c=n[1];return t[0]=e*f, t[1]=s*f, t[2]=h*c, t[3]=r*c, t[4]=a, t[5]=o, t;}, P$.translate=function(t,i,n){var e=i[0],s=i[1],h=i[2],r=i[3],a=i[4],o=i[5],f=n[0],c=n[1];return t[0]=e, t[1]=s, t[2]=h, t[3]=r, t[4]=e*f+h*c+a, t[5]=s*f+r*c+o, t;}, P$[hl]=function(t,i){var n=i[0],e=i[1];return[n*t[0]+e*t[2]+t[4],n*t[1]+e*t[3]+t[5]];}, P$[Ib]=function(t,i){return P$[hl](P$.invert([],t),i);};var R$=Math.PI+Math.PI;function D$(t){return(t%=R$)<0&&(t+=R$), t;}var N$=wB,B$=nB({equals:function equals(t){if(!t||!Array.isArray(t)){ return!1; }for(var i=this.m,n=0;n<i[bt];){if(i[n]!=t[n]){ return!1; }++n;}return!0;},constructor:function constructor(t){this.m=t||P$[l](), this.im=[];},listener:null,_71:!0,invalidate:function invalidate(){return this._71=!0, (!this[Cb]||!this[ei](this._oUackM))&&(this[zi]&&this[zi]({target:this,kind:Nd}), this[Cb]=this.m.slice(), this);},validate:function validate(){return this._71=!1, P$[nl](this.im,this.m), this;},translate:function translate(t,i){return N$(t)&&(t=[arguments[0],arguments[1]], i=arguments[2]), !1!==i?(this.m[4]+=t[0], this.m[5]+=t[1]):P$[Wa](this.m,this.m,t), this[Nd]();},translateTo:function translateTo(t,i){return N$(t)&&(t=[arguments[0],arguments[1]], i=arguments[2]), i&&(i/=this._iK(), P$.scale(this.m,this.m,[i,i])), this.m[4]=t[0], this.m[5]=t[1], this[Nd]();},scale:function scale(t,i){return k==(typeof t==="undefined"?"undefined":_typeof(t))&&(t=[t,t]), i?(P$.translate(this.m,this.m,i), P$[Ha](this.m,this.m,t), P$.translate(this.m,this.m,F$(i))):P$[Ha](this.m,this.m,t), this[Nd]();},rotate:function rotate(t,i){return i?(P$.translate(this.m,this.m,i), P$[Rt](this.m,this.m,t), P$.translate(this.m,this.m,F$(i))):P$[Rt](this.m,this.m,t), this[Nd]();},transform:function transform(t){return P$[hl](this.m,t);},reverseTransform:function reverseTransform(t){return P$[hl](this._5A(),t);},toString:function toString(){return rl+this.m[Pb](q)+it;},_5A:function _5A(){return this._71&&this[Zo](), this.im;},_fV:function _fV(){var t=this.m[0],i=this.m[1],n=this.m[2],e=this.m[3];return[Math[Dt](t*t+n*n),Math[Dt](i*i+e*e)];},_iK:function _iK(){var t=this.m[0],i=this.m[2];return Math[Dt](t*t+i*i);},_9D:function _9D(){return[this.m[4],this.m[5]];},_e4:function _e4(){var t=this.m[0],i=this.m[1],n=this.m[2],e=this.m[3];return[D$(Math[Ut](i,e)),D$(Math[Ut](-n,t))];},_fX:function _fX(){return D$(Math.atan2(this.m[1],this.m[3]));}});function k$(t,i,n,e){return[t*e-i*n,t*n+i*e];}var U$=nB({constructor:function constructor(){},x:0,y:0,width:0,height:0,rotate:0,set:function set(t,i,n,e,s,h){return this.x=t, this.y=i, this[jt]=n, this[Xt]=e, this[Rt]=s, this._oWos=Math.cos(s), this[Gt]=Math.sin(s), this[Ha]=h, this[Fb]=null, this;},_jU:function _jU(t,i){return t-=this.x, i-=this.y, this.rotate?k$(t,i,this[Gt],this[Yt]):[t,i];},_9E:function _9E(t){var i=new JB();return i.add(this._jU(t.x,t.y)), i.add(this._jU(t.x+t[jt],t.y)), i.add(this._jU(t.x,t.y+t[Xt])), i.add(this._jU(t.x+t[jt],t.y+t[Xt])), i;},_iM:function _iM(t,i){var n;return this[Rt]&&(t=(n=k$(t,i,Math.sin(-this[Rt]),Math.cos(-this[Rt])))[0], i=n[1]), [this.x+t,this.y+i];},_6N:function _6N(t,i){var n=this._jU(t,i);return t=n[0], i=n[1], 0<=t&&0<=i&&t<=this[jt]&&i<=this[Xt];},intersects:function intersects(t,i,n,e){
var this$1 = this;
if(!this[Rt]){ return JB[si](this.x,this.y,this[jt],this[Xt],t,i,n,e); }if(!n||!e){ return this._6N(t,i); }var s=this[Sl]();if(!s[si](t,i,n,e)){ return!1; }for(var h=s[ks],r=0;r<h[bt];){var a=h[r];if(JB[Jt](t,i,n,e,a[0],a[1])){ return!0; }r++;}for(var o=[[t,i],[t+n,i],[t,i+e],[t+n,i+e]],r=0;r<o[bt];){if(a=o[r], this$1._6N(a[0],a[1])){ return!0; }r++;}return function(t,i){for(var n=0,e=t[bt];n<e;){for(var s=t[n],h=t[(n+1)%e],r=0;r<4;){var a=i[r],o=i[(r+1)%e];if(function(t,i,n,e,s,h,r,a){var o=((t*e-i*n)*(s-r)-(t-n)*(s*a-h*r))/((t-n)*(h-a)-(i-e)*(s-r)),f=((t*e-i*n)*(h-a)-(i-e)*(s*a-h*r))/((t-n)*(h-a)-(i-e)*(s-r));if(!isNaN(o)&&!isNaN(f)){if(n<=t){if(!(n<=o&&o<=t)){ return; }}else if(!(t<=o&&o<=n)){ return; }if(e<=i){if(!(e<=f&&f<=i)){ return; }}else if(!(i<=f&&f<=e)){ return; }if(r<=s){if(!(r<=o&&o<=s)){ return; }}else if(!(s<=o&&o<=r)){ return; }if(a<=h){if(!(a<=f&&f<=h)){ return; }}else if(!(h<=f&&f<=a)){ return; }return 1;}}(s[0],s[1],h[0],h[1],a[0],a[1],o[0],o[1])){ return!0; }r++;}n++;}return!1;}(h,o);},getGlobalBounds:function getGlobalBounds(){return this[Fb]||(this[Fb]=this._8A(0,0,this[jt],this.height)), this[Fb];},_8A:function _8A(t,i,n,e){if(!this[Rt]){ return new JB(this.x+t,this.y+i,n,e); }var s=[],h=new JB(),r=this._iM(t,i);return s.push(r), h.add(r[0],r[1]), r=this._iM(t+n,i), s[j](r), h.add(r[0],r[1]), r=this._iM(t,i+e), s[j](r), h.add(r[0],r[1]), r=this._iM(t+n,i+e), s.push(r), h.add(r[0],r[1]), h[ks]=s, h;},_5B:function _5B(t,i,n,e,s){var h,r;return(r=this[Rt]?(h=this._iM(t,i), new U$().set(h[0],h[1],n,e,this[Rt],this[Ha])):new U$().set(this.x+t,this.y+i,n,e,0,this[Ha]))[Il]=[Math[rr](s*t),Math[rr](s*i),Math.round(s*n),Math.round(s*e)], r;},_47:function _47(t,i,n,e){if(!this.rotate){var s=JB[hi](this.x,this.y,this[jt],this.height,t,i,n,e);return s&&s[Rb](-this.x,-this.y), s;}var h=this._jU(t,i);return t=h[0], i=h[1], JB.intersection(0,0,this[jt],this.height,h[0],h[1],n,e);},equals:function equals(t){return this.x==t.x&&this.y==t.y&&this[jt]==t.width&&this[Xt]==t.height&&this.rotate==t[Rt];},toString:function toString(){return this.x+q+this.y+q+this[jt]+q+this[Xt]+q+this[Rt];},toJSON:function toJSON(){return{x:this.x,y:this.y,width:this.width,height:this[Xt],rotate:this[Rt],scale:this.scale};}}),G$={setStyle:Ak,setStyles:Sk,addRule:Ik,pre:Ok};function $$(t,i,n){if((n=n||i[mb])!=t){var e=t.getEdgeBundle(n);return e||(e=new EY(t,n), t[Db][n.id]=e), e._kL(i,t);}}function W$(t,i,n){if((n=n||i[mb])!=t){var e=t.getEdgeBundle(n);return e&&e._eA(i,t);}}function H$(t,i,n){n===Y&&(n=i[mb]), n!=t&&(t._8S||(t._8S=new GB()), !1!==t._8S.add(i)&&t._9V++);}function Y$(t,i,n){t._8S&&!1!==t._8S[B](i)&&(t._9V--, W$(t,i,n));}function j$(t,i){i[xb]!=t&&(t._9X||(t._9X=new GB()), !1!==t._9X.add(i)&&t[Nb]++);}function X$(t,i){t._9X&&!1!==t._9X[B](i)&&(t[Nb]--, W$(i[xb],i,t));}function z$(t,i,n,e){this[Si]=t, this[Ai]=i, this[ki]=e, this.value=n, this[Ri]=aU[Bb];}function V$(t){this.id=++sB, this._d3={}, this._kZ={}, t&&(this[kb]=t);}function K$(t,i){if(i===Y&&(i=t instanceof q$), i){if(t[Ub]()){ return null; }var n=K$(t[Gb],!1);if(t[Yl]()){ return n; }for(var e=K$(t.to,!1);null!=n&&null!=e;){if(n==e){ return n; }if(n[$b](e)){ return e; }if(e[$b](n)){ return n; }n=K$(n,!1), e=K$(e,!1);}return null;}for(var s=t.parent;null!=s;){if(s._jR()){ return s; }s=s.parent;}return null;}function Q$(t,i,n){t._jR()&&t[E]()&&t[y][Ae](function(t){t instanceof eW&&i.add(t)&&Q$(t,i,n);},this), t.hasFollowers()&&t._eY.forEach(function(t){(null==n||n.accept(t))&&i.add(t)&&Q$(t,i,n);});}function Z$(t,i){i.parent?i.parent[Wb](i,i[Hi][Hb]-1):t[Yb].setIndex(i,t[Yb][bt]-1);}function J$(t,i){i[Hi]?i[Hi][Wb](i,0):t[Yb].setIndex(i,0);}ZN(z$,uk), V$[_]={_kZ:null,getStyle:function getStyle(t){return this._kZ[t];},setStyle:function setStyle(t,i){var n=this._kZ[t];return!(n===i||n&&i&&n[ei]&&n[ei](i))&&this[dn](t,i,new z$(this,t,i,n),this._kZ);},putStyles:function putStyles(t,i){
var this$1 = this;
for(var n in t){var e=t[n];i?this$1._kZ[n]=e:this$1.setStyle(n,e);}},_$r:!0,invalidateVisibility:function invalidateVisibility(t){this._$r=!0, t||(this instanceof eW&&this.hasEdge()&&this[wb](function(t){t._$r=!0;}), this._jR()&&this[E]()&&this.forEachChild(function(t){t[ub]();}));},onParentChanged:function onParentChanged(t,i){this[ub]();},_jR:function _jR(){return!this._4F&&this instanceof dW;},invalidate:function invalidate(){this[p](new ck(this,jb,Nd));},_d2:null,addUI:function addUI(t,i){if(this._d2||(this._d2=new GB()), t.id||(t.id=++sB), this._d2[Mt](t.id)){ return!1; }var n={id:t.id,ui:t,bindingProperties:i};this._d2.add(n);var e=new ck(this,jb,on,n);return this[p](e);},removeUI:function removeUI(t){if(!this._d2){ return!1; }var i=this._d2.getById(t.id||t);if(!i){ return!1; }this._d2[B](i), this[p](new ck(this,jb,B,i));},clearUIs:function clearUIs(){this[Xb]&&this[Xb][Ft]()[Ae](function(t){this[zb](t.ui);}[$e](this));},toString:function toString(){return this[kb]||this.id;},type:Vb,_4F:!1,_jT:!0,inGroup:function inGroup(t){var i=K$(this);return i==t||i&&t instanceof dW&&i.isDescendantOf(t);}}, ZN(V$,xk), eB(V$[_],[fb,Xo,zd,Kb]), DB(V$.prototype,{enableSubNetwork:{get:function get(){return this._4F;},set:function set(t){var i;this._4F!=t&&(i=this._4F, this._4F=t, this instanceof eW&&this._12(), this[p](new uk(this,cb,t,i)));}},bindingUIs:{get:function get(){return this._d2;}},styles:{get:function get(){return this._kZ;},set:function set(t){
var this$1 = this;
if(this._kZ!=t){for(var i in this$1._kZ){i in t||(t[i]=Y);}this[Qb](t), this._kZ=t;}}}}), rU.findGroup=K$;var q$=function q$(t,i,n){this.id=++sB, this._d3={}, this._kZ={}, n&&(this.$name=n), this[Zb]=t, this.$to=i, this[Jb]();};function tW(t,i){return i=i||new GB(), t[wb](function(t){i.add({id:t.id,edge:t,fromAgent:t[Zb]._eX,toAgent:t.$to._eX});}), t[qb](function(t){t instanceof eW&&tW(t,i);}), i;}function iW(t,i,n){if(t._h6){ for(var e=t._h6;e;){if(!1===i[x](n,e)){ return!1; }e=e._kF;} }}function nW(t,i,n){if(t._jN){ for(var e=t._jN;e;){if(!1===i.call(n,e)){ return!1; }e=e._lV;} }}q$.prototype={$uiClass:GW,_lU:null,_kD:null,_lV:null,_kF:null,_fY:!1,type:tv,otherNode:function otherNode(t){return t==this.from?this.to:t==this.to?this[Gb]:void 0;},connect:function connect(){return!this._fY&&!(!this[Zb]||!this.$to)&&(this._fY=!0, void(this[Zb]!=this.$to?(n=this.$to, e=this, n[Nb]++, n._jN?(e._lU=n._kY, n._kY._lV=e, n._kY=e):(n._jN=e, n._kY=e), t=this[Zb], i=this, t._9V++, t._h6?(i._kD=t._jO, t._jO._kF=i, t._jO=i):(t._h6=i, t._jO=i), $$(this[Zb],this,this.$to), (s=this[xb])!=(h=this.toAgent)&&(this[Zb]._eX&&(H$(s,this,h), r=!0), this.$to._eX&&(j$(h,this), r=!0), r&&$$(s,this,h))):this[Zb]._jP(this)));var t,i,n,e,s,h,r;},disconnect:function disconnect(){if(!this._fY){ return!1; }var t,i,n,e,s,h,r;this._fY=!1, this[Zb]!=this.$to?(h=this.$from, r=this, h._9V--, h._jO==r&&(h._jO=r._kD), r._kD?r._kD._kF=r._kF:h._h6=r._kF, r._kF&&(r._kF._kD=r._kD), r._kD=null, r._kF=null, W$(h,r,r.$to), e=this.$to, s=this, e._oUL--, e._kY==s&&(e._kY=s._lU), s._lU?s._lU._lV=s._lV:e._jN=s._lV, s._lV&&(s._lV._lU=s._lU), s._lU=null, s._lV=null, W$(this[Zb],this,this.$to), (t=this.fromAgent)!=(i=this.toAgent)&&(this.$from._eX&&(Y$(t,this,i), n=!0), this.$to._eX&&(X$(i,this), n=!0), n&&W$(t,this,i))):this[Zb]._d0(this);},isConnected:function isConnected(){return this._fY;},isInvalid:function isInvalid(){return!this[Zb]||!this.$to;},isLooped:function isLooped(){return this[Zb]==this.$to;},getEdgeBundle:function getEdgeBundle(t){return t?this._31():this[Yl]()?this[Zb]._4E:this[Zb][jl](this.$to);},hasEdgeBundle:function hasEdgeBundle(){var t=this[jl](!0);return t&&1<t[iv].length;},_31:function _31(){var t=this[xb],i=this[mb];return t===i?this[Zb]._eX||this.$to._eX?null:this[Zb]._4E:t[jl](i);},_oT9:null,hasPathSegments:function hasPathSegments(){return this._oT9&&!this[nv].isEmpty();},isBundleEnabled:function isBundleEnabled(){return this.bundleEnabled&&!this.hasPathSegments()&&!this.edgeType;},firePathChange:function firePathChange(t){this.onEvent(new uk(this,ev,t));},addPathSegment:function addPathSegment(t,i,n){var e=new bG(i||cG,t);this[nv]||(this._oT9=new GB()), this[nv].add(e,n), this.firePathChange(e);},addPathSegement:function addPathSegement(){return rU.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this[sv][b](this,arguments);},removePathSegmentByIndex:function removePathSegmentByIndex(t){return this.removePathSegment(t);},removePathSegment:function removePathSegment(t){if(!this[nv]){ return!1; }wB(t)&&(t=this[nv][Nn](t)), t&&(this[nv].remove(t), this.firePathChange(t));},movePathSegment:function movePathSegment(i,n,t){if(!this[nv]){ return!1; }if(i=i||0, n=n||0, rU[Tf](t)){var e=this[nv][Nn](t);return!!e&&(e.move(i,n), void this[hv]());}jN(function(t){t[Js](i,n);}), this[hv]();},move:function move(i,n){if(!this[nv]){ return!1; }this._oT9[Ae](function(t){t[Js](i,n);},this), this[hv]();},validateEdgeBundle:function validateEdgeBundle(){}}, ZN(q$,V$), DB(q$[_],{pathSegments:{get:function get(){return this[nv];},set:function set(t){rU[G](t)&&(t=new GB(t)), this[nv]=t, this[hv]();}},from:{get:function get(){return this[Zb];},set:function set(t){var i;this.$from!=t&&(i=new uk(this,Gb,t,this[Zb]), !1!==this[g](i)&&(this.disconnect(), this[Zb]=t, this.connect(), this.onEvent(i)));}},to:{get:function get(){return this.$to;},set:function set(t){var i;this.$to!=t&&(i=new uk(this,rv,t,this.$to), !1!==this.beforeEvent(i)&&(this[av](), this.$to=t, this[Jb](), this[p](i)));}},fromAgent:{get:function get(){return this[Zb]?this.$from._eX||this.$from:null;}},toAgent:{get:function get(){return this.$to?this.$to._eX||this.$to:null;}}}), eB(q$[_],[ov,{name:fv,value:!0},sf]);var eW=function eW(t,i,n){2==arguments[bt]&&wB(t)&&(n=i, i=t, t=null), this.id=++sB, this._d3={}, this._kZ={}, t&&(this[kb]=t), this[cv]=uv, this[_v]=ik[gi], this.$location={x:i||0,y:n||0}, this[Db]={};};function sW(t,i){i[Ae](function(t){var i=t[xb],n=t[mb],e=(t=t.edge)[Zb]._eX,s=t.$to._eX;i!=n&&(i&&Y$(i,t,n||t.$to), n&&X$(n,t,i||t[Zb])), e!=s&&(e&&H$(e,t,s||t.$to), s&&j$(s,t,e||t.$from), $$(e||t[Zb],t,s||t.$to));},t);}eW[_]={$uiClass:$W,_eX:null,forEachEdge:function forEachEdge(t,i,n){return!(!n&&this._m6&&!1===this._m6[Ae](t,i))&&!1!==nW(this,e=t,s=i)&&iW(this,e,s);var e,s;},forEachOutEdge:function forEachOutEdge(t,i){return iW(this,t,i);},forEachInEdge:function forEachInEdge(t,i,n){return nW(this,t,i);},getEdges:function getEdges(){var i=[];return this.forEachEdge(function(t){i[j](t);}), i;},_jN:null,_h6:null,_kY:null,_jO:null,_oUL:0,_9V:0,hasInEdge:function hasInEdge(){return null!=this._jN;},hasOutEdge:function hasOutEdge(){return null!=this._h6;},hasEdge:function hasEdge(){return null!=this._jN||null!=this._h6||this.hasLoops();},linkedWith:function linkedWith(t){return t.from==this||t.to==this||t.fromAgent==this||t.toAgent==this;},hasEdgeWith:function hasEdgeWith(t){var i=this.getEdgeBundle(t);return i&&0<i.edges[bt];},_m6:null,_4E:null,hasLoops:function hasLoops(){return this._m6&&0<this._m6[bt];},_jP:function _jP(t){return this._m6||(this._m6=new GB(), this._4E=new EY(this,this,this._m6)), this._4E._kL(t);},_d0:function _d0(t){if(this._4E){ return this._4E._eA(t); }},getEdgeBundle:function getEdgeBundle(t){return t==this?this._4E:this[Db][t.id]||t._linkedNodes[this.id];},_77:function _77(){return this._9X&&this._9X.length;},_5X:function _5X(){return this._8S&&this._8S.length;},_9W:function _9W(){return this._77()||this._5X();},_8S:null,_9X:null,_d1:function _d1(){var t,i,n=this._eX,e=this.parent?(t=this[Hi])._eX?t._eX:t instanceof dW&&!1===t._iW?t:null:null;n!=e&&(i=tW(this), this._oT1(e), sW(this,i));},onParentChanged:function onParentChanged(t,i){rU.doSuper(this,eW,vn,arguments), this._d1();},_8T:null,_12:function _12(){var t;if(this._4F?t=null:(t=this._eX)||!1!==this._iW||(t=this), this._8T==t){ return!1; }if(this._8T=t, this._hF&&this._hF._l1.length){ for(var i,n=this._hF._l1,e=0,s=n[bt];e<s;e++){(i=n[e])instanceof eW&&i._oT1(t);} }},setLocation:function setLocation(t,i){if(this[dv]&&this[dv].x==t&&this[dv].y==i){ return!1; }var n=this[dv]?{x:this[dv].x,y:this[dv].y}:this[dv],e=new uk(this,q_,n,{x:t,y:i});return!1!==this[g](e)&&(this[dv]?(this[dv].x=t, this.$location.y=i):this.$location=new YB(t,i), this[p](e), !0);},_eY:null,addFollower:function addFollower(t){return null!=t&&(t.host=this);},removeFollower:function removeFollower(t){return!(!this._eY||!this._eY.contains(t))&&(t[lv]=null);},hasFollowers:function hasFollowers(){return this._eY&&!this._eY.isEmpty();},toFollowers:function toFollowers(){return this[bv]()?this._eY[Ft]():null;},clearFollowers:function clearFollowers(){this[bv]()&&(this[vv](), jN(this[vv](),function(t){t[lv]=null;}));},getFollowerIndex:function getFollowerIndex(t){return this._eY&&this._eY.contains(t)?this._eY[N](t):-1;},setFollowerIndex:function setFollowerIndex(t,i){if(!this._eY||!this._eY[Zi](t)){ return-1; }this._eY[Pn](t,i);},getFollowerCount:function getFollowerCount(){return this._eY?this._eY.length:0;},_9Z:function _9Z(){return this._eY||(this._eY=new GB()), this._eY;},isFollow:function isFollow(t){if(!t||!this[yv]){ return!1; }for(var i=this[yv];i;){if(i==t){ return!0; }i=i[yv];}return!1;},_oT1:function _oT1(t){if(t==this._eX){ return!1; }this._eX=t, this.invalidateVisibility(), this._12();},type:gv}, ZN(eW,V$), DB(eW.prototype,{loops:{get:function get(){return this._m6;}},edgeCount:{get:function get(){return this[Nb]+this._9V;}},agentNode:{get:function get(){return this._eX||this;}},host:{set:function set(t){if(this==t||t==this[yv]){ return!1; }var i=new uk(this,lv,this[yv],t);if(!1===this[g](i)){ return!1; }var n=null,e=null,s=this[yv];return!(null!=t&&(n=new uk(t,Ev,null,this), !1===t[g](n))||null!=s&&(e=new uk(s,xv,null,this), !1===s[g](e))||(null!=(this[yv]=t)&&t._9Z().add(this), null!=s&&s._9Z().remove(this), this[p](i), null!=t&&t[p](n), null!=s&&s.onEvent(e), 0));},get:function get(){return this[yv];}}}), eB(eW[_],[q_,Bd,Yo,Rt,mv]), DB(eW[_],{x:{get:function get(){return this.location.x;},set:function set(t){t!=this[q_].x&&(this.location=new YB(t,this[q_].y));}},y:{get:function get(){return this[q_].y;},set:function set(t){t!=this[q_].y&&(this[q_]=new YB(this[q_].x,t));}}});var hW=function hW(t,i){t instanceof vG&&(i=t, t=Y), JN(this,hW,[t]), this[Ul]=i||new vG(), this[mv]=null, this[fb]=fH, UB[pv]||(UB.SHAPENODE_STYLES={}, UB[pv][LW[Tv]]=!1), this[Qb](UB[pv]);};hW[_]={$uiClass:fH,type:wv,moveTo:function moveTo(t,i){this[Ul][La](t,i), this.firePathChange();},lineTo:function lineTo(t,i){this[Ul][Ma](t,i), this.firePathChange();},quadTo:function quadTo(t,i,n,e){this[Ul].quadTo(t,i,n,e), this.firePathChange();},curveTo:function curveTo(t,i,n,e,s,h){this[Ul].curveTo(t,i,n,e,s,h), this.firePathChange();},arcTo:function arcTo(t,i,n,e,s){this[Ul][wa](t,i,n,e,s), this[hv]();},closePath:function closePath(){this.path[Aa](), this.firePathChange();},clear:function clear(){this.path.clear(), this[hv]();},removePathSegmentByIndex:function removePathSegmentByIndex(t){!1!==this[Ul][Lv](t)&&this[hv]();},firePathChange:function firePathChange(){this[Ul]._71=!0, this[p](new uk(this,ev));},addPathSegment:function addPathSegment(t,i,n){this.path.add(new bG(i||cG,t),n), this[hv]();}}, ZN(hW,eW), DB(hW[_],{path:{get:function get(){return this[Yo];},set:function set(t){this.image=t;}},pathSegments:{get:function get(){return this[Ul].segments;},set:function set(t){this[Ul][Mv]=t||[], this.firePathChange();}},length:{get:function get(){return this.path.length;}}}), rU[Ov]=hW;var rW={_lW:{},register:function register(t,i){rW._lW[t]=i;},getShape:function getShape(t,i,n,e,s,h){e===Y&&(e=i, s=n, n=i=0), e=e||50, s=s||50;var r=rW._lW[t];if(r){ return r[Sv]instanceof Function?r.generator(i,n,e,s,h):r; }},getRect:function getRect(t,i,n,e,s,h,r){return t instanceof Object&&jt in t&&(i=t.y, n=t.width, e=t.height, s=t.rx, h=t.ry, r=t[Ul], t=t.x), aW(r||new vG(),t,i,n,e,s,h);},getAllShapes:function getAllShapes(t,i,n,e,s){var h,r={};for(h in rW._lW){var a=rW.getShape(h,t,i,n,e,s);a&&(r[h]=a);}return r;},createRegularShape:cW};function aW(t,i,n,e,s,h,r){return h||r?(h=h||0, r=r===Y?h:r||0, h=Math.min(h,e/2), r=Math.min(r,s/2), t[La](i+h,n), t[Ma](i+e-h,n), t[Av](i+e,n,i+e,n+r), t[Ma](i+e,n+s-r), t.quadTo(i+e,n+s,i+e-h,n+s), t.lineTo(i+h,n+s), t[Av](i,n+s,i,n+s-r), t[Ma](i,n+r), t[Av](i,n,i+h,n)):(t.moveTo(i,n), t[Ma](i+e,n), t.lineTo(i+e,n+s), t.lineTo(i,n+s)), t.closePath(), t;}function oW(t,i,n,e,s){i instanceof IU&&(e=i[jt], s=i.height, n=i.cy-s/2, i=i.cx-e/2);var h=e/2*.5522848,r=s/2*.5522848,a=i+e,o=n+s,f=i+e/2,c=n+s/2;return t.moveTo(i,c), t[Iv](i,c-r,f-h,n,f,n), t.curveTo(f+h,n,a,c-r,a,c), t.curveTo(a,c+r,f+h,o,f,o), t.curveTo(f-h,o,i,c+r,i,c), t;}function fW(t,i,n,e,s,h){return t[La](i,n), t[Ma](i+e,n+s/2), t[Ma](i,n+s), h||(t[Ma](i+.25*e,n+s/2), t[Aa]()), t;}function cW(t,i,n,e,s){if(!t||t<3){ throw new Error("edge number must greater than 2"); }t|=0, e=e||50, s=s||0, i=i||0, n=n||0;for(var h,r,a=0,o=2*Math.PI/t,f=new vG();a<t;){h=i+e*Math.cos(s), r=n+e*Math.sin(s), a?f[Ma](h,r):f[La](h,r), ++a, s+=o;}return f[Aa](), f;}function uW(t,i){JN(this,uW,arguments), this[Cv]=!0;}function _W(){JN(this,_W), this._$x=new gk();}!function(){var t,i,n,e,s,h,r;rW[Pv](aU.SHAPE_CIRCLE,oW(new vG(),0,0,100,100)), rW.register(aU[Fv],aW(new vG(),0,0,100,100)), rW[Pv](aU.SHAPE_ROUNDRECT,aW(new vG(),0,0,100,100,20,20)), rW.register(aU[Rv],((t=new vG()).moveTo(0,50-200/12), t[Ma](0+.306*100,57.9), t.lineTo(50-200/6,100), t[Ma](50,73.3), t[Ma](50+200/6,100), t[Ma](69.3,57.9), t.lineTo(100,50-200/12), t[Ma](61.1,33.2), t[Ma](50,0), t[Ma](0+.388*100,33.2), t[Aa](), t)), rW[Pv](aU.SHAPE_TRIANGLE,((i=new vG())[La](0,0), i.lineTo(100,50), i[Ma](0,100), i[Aa](), i)), rW.register(aU[Dv],cW(5)), rW[Pv](aU[Nv],cW(6)), rW[Pv](aU[Bv],((n=new vG())[La](0,50), n[Ma](50,0), n[Ma](100,50), n[Ma](50,100), n.closePath(), n)), rW[Pv](aU.SHAPE_HEART,((e=new vG())[La](75,40), e[Iv](75,37,70,25,50,25), e[Iv](20,25,20,62.5,20,62.5), e[Iv](20,80,40,102,75,120), e.curveTo(110,102,130,80,130,62.5), e[Iv](130,62.5,130,25,100,25), e[Iv](85,25,75,37,75,40), e)), rW[Pv](aU[kv],((s=new vG())[La](20,0), s.lineTo(80,0), s[Ma](100,100), s[Ma](0,100), s[Aa](), s)), rW.register(aU[Uv],((h=new vG())[La](100,0), h[Ma](100,80), h[Ma](0,100), h[Ma](0,20), h[Aa](), h)), rW.register(aU[Gv],((r=new vG())[La](20,0), r[Ma](100,0), r[Ma](80,100), r[Ma](0,100), r[Aa](), r));var a,o,f,c,u,_,d,l,b=new vG();b[La](20,0), b.lineTo(40,0), b.lineTo(40,20), b[Ma](60,20), b[Ma](60,40), b.lineTo(40,40), b[Ma](40,60), b[Ma](20,60), b[Ma](20,40), b.lineTo(0,40), b[Ma](0,20), b.lineTo(20,20), b[Aa](), rW.register(aU[$v],b), rW[Pv](aU[Wv],fW(new vG(),0,0,100,100)), rW[Pv](aU.SHAPE_ARROW_1,((a=new vG()).moveTo(43,23), a[Ma](28,10), a[Ma](37,2), a[Ma](63,31), a[Ma](37,59), a[Ma](28,52), a.lineTo(44,38), a[Ma](3,38), a[Ma](3,23), a[Aa](), a)), rW[Pv](aU.SHAPE_ARROW_2,((o=new vG()).moveTo(1,8), o[Ma](7,2), o[Ma](32,26), o[Ma](7,50), o[Ma](1,44), o[Ma](18,26), o[Aa](), o[La](27,8), o.lineTo(33,2), o[Ma](57,26), o[Ma](33,50), o[Ma](27,44), o[Ma](44,26), o.closePath(), o)), rW[Pv](aU[Hv],((f=new vG()).moveTo(0,15), f[Ma](23,15), f[Ma](23,1), f[Ma](47,23), f[Ma](23,43), f[Ma](23,29), f.lineTo(0,29), f[Aa](), f)), rW.register(aU[Yv],((c=new vG())[La](0,21), c[Ma](30,21), c.lineTo(19,0), c[Ma](25,0), c[Ma](47,25), c.lineTo(25,48), c[Ma](19,48), c.lineTo(30,28), c.lineTo(0,28), c.closePath(), c)), rW.register(aU.SHAPE_ARROW_5,((u=new vG())[La](0,0), u.lineTo(34,24), u.lineTo(0,48), u[Ma](14,24), u[Aa](), u)), rW.register(aU.SHAPE_ARROW_6,((_=new vG())[La](20,0), _[Ma](34,14), _[Ma](20,28), _[Ma](22,18), _[Ma](1,25), _[Ma](10,14), _.lineTo(1,3), _[Ma](22,10), _[Aa](), _)), rW[Pv](aU[jv],((d=new vG())[La](4,18), d[Ma](45,18), d.lineTo(37,4), d[Ma](83,25), d[Ma](37,46), d.lineTo(45,32), d[Ma](4,32), d.closePath(), d)), rW[Pv](aU[Xv],((l=new vG())[La](17,11), l[Ma](27,11), l.lineTo(42,27), l[Ma](27,42), l[Ma](17,42), l[Ma](28,30), l[Ma](4,30), l.lineTo(4,23), l[Ma](28,23), l[Aa](), l)), rW.register(aU.SHAPE_ARROW_OPEN,fW(new vG(),0,0,100,100,!0));}(), uW[_]={type:zv}, ZN(uW,hW), rU.Bus=uW, _W.prototype={_h8:function _h8(t){var i=t._l8,n=i?i._hF:this[Cn],e=n[N](t);if(e<0){ throw new Error(Dn+t+"' not exist in the box"); }for(;0<=e;){if(0==e){ return i instanceof eW?i:null; }--e;var s=n[Nn](e);if(s=function t(i){if(!i.hasChildren()){ return i instanceof eW?i:null; }for(var n,e=i._hF._l1,s=e[bt]-1;0<=s;){if(n=t(e[s])){ return n; }s--;}return null;}(s)){ return s; }}return null;},forEachNode:function forEachNode(i,n){this[Ae](function(t){if(t instanceof eW&&!1===i[x](n,t)){ return!1; }});},_3H:null}, ZN(_W,pk), DB(_W[_],{propertyChangeDispatcher:{get:function get(){return this._$x;}},currentSubNetwork:{get:function get(){return this._3H;},set:function set(t){var i;t&&!t[cb]&&(t=null), this._3H!=t&&(i=this._3H, this._3H=t, this._$x.onEvent(new uk(this,Vv,t,i)));}}}), UB.GROUP_TYPE=aU[Kv], UB[Qv]=5, UB[Zv]=!0, UB[Jv]={width:60,height:60};var dW=function dW(t,i,n){JN(this,dW,arguments), i!==Y&&n!==Y||(this[dv].invalidateFlag=!0), this[qv]=UB[ty], this[yu]=UB[Qv], this[cv]=this.groupType==='rect'?OG.group:OG.subnetwork, this[iy]=UB[Jv], this[_b]=UB[Zv];};function lW(t,i,n){JN(this,lW,arguments), this.$image=null;}dW[_]={type:ny,$uiClass:nH,_oTX:function _oTX(){return!this._iW&&!this._eX;},forEachOutEdge:function forEachOutEdge(t,i,n){return!1!==iW(this,t,i)&&(!n&&this._oTX()&&this._8S?this._8S[Ae](t,i):void 0);},forEachInEdge:function forEachInEdge(t,i,n){return!1!==nW(this,t,i)&&(!n&&this[ey]()&&this._9X?this._9X[Ae](t,i):void 0);},forEachEdge:function forEachEdge(t,i,n){return!1!==qN(this,dW,wb,arguments)&&(n||n||!this[ey]()?void 0:(!this._9X||!1!==this._9X[Ae](t,i))&&(this._8S?this._8S[Ae](t,i):void 0));},hasInEdge:function hasInEdge(t){return t?null!=this._jN:null!=this._jN||this._77();},hasOutEdge:function hasOutEdge(t){return t?null!=this._h6:null!=this._h6||this._5X();},hasEdge:function hasEdge(t){return t?null!=this._jN||null!=this._h6:null!=this._jN||null!=this._h6||this._9W();}}, ZN(dW,eW), DB(dW.prototype,{expanded:{get:function get(){return this._iW;},set:function set(t){var i;this._iW!=t&&(i=new uk(this,_b,t,this._iW), !1!==this[g](i)&&(this._iW=t, this._12(), this.onEvent(i), this._eX||function(){
var this$1 = this;
if(!0!==this._iW){ tW(this).forEach(function(t){var i=(t=t.edge)[Zb],n=t.$to,e=i[$b](this),s=n[$b](this);e&&!s?(H$(this,t), $$(this,t)):s&&!e&&(j$(this,t), $$(t[xb],t,this));},this); }else{var t,i=this._8S,n=this._9X;if(i){ for(i=i._l1;i[bt];){Y$(this$1,t=i[0],t[mb]);} }if(n){ for(n=n._l1;n[bt];){X$(this$1,t=n[0],t[xb]);} }sW(this,tW(this));}}[x](this)));}}}), eB(dW.prototype,[sy,hy,Ko,ry]), rU.Group=dW, lW[_][Pi]=ay, ZN(lW,eW), rU.Text=lW;var bW={stroke:1,strokeStyle:oy,strokeAlpha:.15,labelColor:fy,labelFont:"normal 12px helvetica,arial,sans-serif"};function vW(f,t){var y,g,i,n,e,E=8,x=3;function s(t){t=t?Object[cy]({},bW,t):bW, i=t.stroke, n=t[Na], y=t.labelColor, g=t[uy], e=t[_y];}function c(t,i,n){return{x:i*t[0]+n*t[2]+t[4],y:i*t[1]+n*t[3]+t[5]};}function h(t,i){var n=S[Hn](aa);return n.g=n[oa](fa), n.style[af]=Md, n[jn].top=_d, n[jn][dy]=hr, n[jn]["-webkit-tap-highlight-color"]=ly, i?t[by](n,t.firstChild):t[re](n), n;}function u(t,i,n){var e=devicePixelRatio||1;t[jn].width=i+ra, t[jn][Xt]=n+ra, t[jt]=i*e, t[Xt]=n*e;}function _(t,i){var n=devicePixelRatio||1;t.scale(n,n), t.save(), i(t), t[qa]();}function r(i,t,n,e,s){i.beginPath();var h=t.x,r=t.y,a=t[Wt],o=t.bottom;m(t.x,a,n,function(t){i[La](t,r), i[Ma](t,o);}), m(t.y,o,n,function(t){i[La](h,t), i[Ma](a,t);}), i[Ka]=e, i[Na]=s, i.stroke();}s(t);var a=1e-6;function m(t,i,n,e){var s,h=t;if(!((h-=i)<a&&-a<h)){ for(i<t&&(s=t, t=i, i=s), t%n!=0&&0<(t-=t%n)==0<n&&(t+=n);0<n?t<=i:i<=t;){e(t), t+=n;} }}var d=h(f,!0);d[_l]=Ty;var l=h(f),b=void 0,v=void 0,p=void 0,T=void 0,w=void 0,L=void 0;function M(t){t[hl].apply(t,p.m), t[Va]=e, r(t,w,L.smallCell,i/2/T,n), r(t,w,L[wy],i/T,n);}function O(t){!function(e,t,i,n,s){var h=n[Ib](0,0),r=n[Ib](t,0),a=n[Ib](0,i);e[Ua]=y, e[yy]=g, e[Ka]=1, e[Na]=y;var o,f,c,u,_,d,l=Math.tan(n.angle||0),b=-1<l&&l<1;function v(t){return Math[rr](100*t)/100;}u=void 0, _=b?(u=h.x, r.x):(u=h.y, r.y), d=t/(_-u), m(u,_,s,function(t){var i=(t-u)*d,n=0;e[Ya](), e[La](i,0), n+=E, i+=b?-E*l:E/l, e[gy]=Ey, e.textBaseline=xy, e.lineTo(i,n), e[Za](), e[vd](v(t),i,n+x);}), o=void 0, f=b?(o=h.y, a.y):(o=h.x, a.x), c=i/(f-o), m(o,f,s,function(t){var i=0,n=(t-o)*c;e.beginPath(), e.moveTo(0,n), i+=E, n-=b?-E*l:E/l, e.textAlign=ii, e[my]=py, e[Ma](i,n), e[Za](), e[vd](v(t),i+x,n);});}(t,b,v,p,L[wy]);}return{update:function update(t){var i,n,e,s,h,r,a,o;t&&(p=function(o){var t,i,n;!Array[G](o)&&o[Ha]&&(t=o.scale, i=o.tx, n=o.ty, o=[t,0,0,t,i,n]);var e,s,h=function(){var t=o[0],i=o[1],n=o[2],e=o[3],s=o[4],h=o[5],r=t*e-i*n;if(!r){ return null; }r=1/r;var a=[];return a[0]=e*r, a[1]=-i*r, a[2]=-n*r, a[3]=t*r, a[4]=(n*h-e*s)*r, a[5]=(i*s-t*h)*r, a;}();return{m:o,scale:(e=o[0], s=o[2], Math[Dt](e*e+s*s)),transform:function transform(t,i){return c(o,t,i);},reverseTransform:function reverseTransform(t,i){return c(h,t,i);}};}(t), T=p[Ha], b=f[ne], v=f[Ol], i=b, n=v, s=(e=p)[Ib](0,0), h=e[Ha], s[jt]=i/h, s[Xt]=n/h, s[Wt]=s.x+s[jt], s[$t]=s.y+s[Xt], w=s, r=100/T, o=(a=Math.max(1,Math.pow(10,Math.ceil(Math[vy](r)))))/2<r?a:a/5<r?a/2:a/5, L={cell:o,smallCell:o/5}), u(d,b,v), u(l,b,v), _(d.g,M), _(l.g,O);},getMinCell:function getMinCell(){return L[Ly];},gridCanvas:d,scaleCanvas:l,setStyles:s};}function yW(t,i,n,e){var s;e<1&&(e=1), s=e<i[bt]?i[Zn](0,e):(e=i[bt], i);var h=t.measureText(s)[jt];if(h<n){for(;e<i[bt];){if(n<=(h+=t[My](i[e])[jt])){ return e; }e++;}return e;}if(h==n){ return e; }for(e--;1<e;){if((h-=t.measureText(i[e])[jt])<=n){ return e; }e--;}return e;}function gW(t,i,n,e){var s=e.measureText(i).width;if(!(s<=n)){for(var h=Math.round(n/(s/i[bt]))||1;;){var r=yW(e,i,n,h)||1;if(i[bt]<=r){t[j](i);break;}t[j](i.substring(0,r)), i=i[Zn](r);}return t;}t[j](i);}function EW(t,i,n){var e,s,h,r,a,o,f,c,u,_=i[F](W_);if(n.maxWidth){var d=n.maxWidth;return n[Oy]||UB[Sy]?(o=t, f=d, c=[], u=UB[Ay]||gW, _.forEach(function(t){t?u(c,t,f,o):c[j](t);}), c):(e=_, s=t, h=d, r=UB[Iy], a=r?s.measureText(r)[jt]:0, e.map(function(t,i){return function(t,i,n,e,s){var h=t[My](i)[jt];if(s=s||t.measureText(e)[jt], h<=n||h<=s){ return i; }if(n<=s){ return e; }n-=s;var r=Math[rr](n/(h/i[bt]))||1;return i.substring(0,yW(t,i,n,r))+e;}(s,t,h,r,a);}));}return _;}Math[vy]||(Math[vy]=function(t){return Math.log(t)*Math.LOG10E;}), UB[Iy]=String[Zu](8230), UB.TEXT_WRAP=!1, UB[Ay]=Y;var xW=function xW(t){this._l4=new JB(), this._8U=new JB(), this._hI=new JB(), this.id=++sB, t&&(this[tn]=t);};function mW(i,t){var n,e,s={},h={};for(n in t){var r=t[n];r[Cy]&&r[Cy][Ae](function(t,i,n){n[i]=Py+t, h[t]=!0;}), s[n]=function(n,t,e){return i[n]=t, e?{get:function get(){return this[n];},set:function set(t){
var this$1 = this;
if(t!==this[n]){this[n]=t, this._oUQ, this._1I=!0;for(var i=e[bt];0<=--i;){this$1[e[i]]=!0;}}}}:{get:function get(){return this[n];},set:function set(t){t!==this[n]&&(this[n]=t);}};}(v+n,r[P],r.validateFlags);}for(e in h){i[Py+e]=!0;}Object[Sb](i,s);}function pW(t){if(t[Fy]&&t[Ry]){var i=t.$_hostRotate;return t[Fu]&&FU(i)?i+Math.PI:i;}}xW.prototype={invalidate:function invalidate(){this[Dy]();},_1I:!0,_l4:null,_8U:null,_hI:null,_oUQ:!1,_l6:1,_l7:1,_jT:!0,_8V:0,_79:0,_l8:null,_oUS:null,borderColor:Ny,borderLineDash:null,borderLineDashOffset:null,syncSelection:!0,syncSelectionStyles:!0,_1A:function _1A(){this[By]=ok(this[mv],this._8V,this._79);},setMeasuredBounds:function setMeasuredBounds(t,i,n,e){if(t instanceof Object&&(n=t.x, e=t.y, i=t.height, t=t[jt]), this._l4[jt]==t&&this._l4.height==i&&this._l4.x==n&&this._l4.y==e){ return!1; }this._l4.set(n||0,e||0,t||0,i||0);},initialize:function initialize(){},measure:function measure(){},draw:function draw(t,i,n,e){},_8X:function _8X(t,i,n){n[ky]==aU.SELECTION_TYPE_SHADOW?(t.shadowColor=n[Df], t[No]=n.selectionShadowBlur*i, t.shadowOffsetX=(n[Nf]||0)*i, t[ko]=(n[Bf]||0)*i):this._23(t,i,n);},_23:function _23(t,i,n){var e=n[Uf]||0;n[Uy]&&(t[Ua]=n.selectionBackgroundColor, t[Ga](this._8U.x-e/2,this._8U.y-e/2,this._8U[jt]+e,this._8U[Xt]+e)), t[Na]=n[Df], t.lineWidth=e, t[ka](this._8U.x-e/2,this._8U.y-e/2,this._8U[jt]+e,this._8U.height+e);},_lA:function _lA(t,i,n,e){if(!this._jT){ return!1; }this[Gy]||(n=this[ab]), (!n||this.syncSelectionStyles)&&e||(e=this), t.save(), 1!=this[$y]&&(t[Va]=this[$y]), t[Wa](this.$x,this.$y);var s,h=pW(this);h&&t.rotate(h), (this.offsetX||this.offsetY)&&t.translate(this[Wy],this.offsetY), this.$rotate&&t.rotate(this[_u]), this.$layoutByAnchorPoint&&this[uu]&&t.translate(-this[uu].x,-this[uu].y), this[Do]&&(t.shadowColor=this[Do], t[No]=this[No]*i, t[Bo]=this[Bo]*i, t[ko]=this.shadowOffsetY*i), n&&e[ky]==aU[Hy]&&(this._23(t,i,e), n=!1), this._$t()&&this[Ou]&&!this[Ou][Yy]&&(this[Ou].validate(), s={lineWidth:this[Eu],strokeStyle:this.borderColor,lineDash:this[jy],lineDashOffset:this.borderLineDashOffset,fillColor:this[Xy],fillGradient:this[Iu],lineCap:Dr,lineJoin:rr}, this[Ou].draw(t,i,s,n,e), n=!1, t[Do]=Hf), t[Ya](), this[ro](t,i,n,e), t[qa]();},invalidateData:function invalidateData(){this[zy]=!0, this[vu]=!0, this._1I=!0;},invalidateSize:function invalidateSize(){this[vu]=!0, this._1I=!0;},invalidateRender:function invalidateRender(){this._1I=!0;},_62:function _62(){},_$t:function _$t(){return this[Xy]||this[Vy]||this[Eu];},_4H:function _4H(){return this[Xy]||this.$backgroundGradient;},doValidate:function doValidate(){return this.$invalidateData&&(this[zy]=!1)!==this.measure()&&(this[vu]=!0), this[vu]&&this[Ky]&&this[Ky](), IG[x](this)?(this[Ru]=!0, this[Qy]&&this.onBoundsChanged(), !0):this[Zy]?(this[Ru]=!0, !(this[Zy]=!1)):void 0;},validate:function validate(){var t=this._jT;return this.$invalidateVisibility&&(this[Jy]=!1, this._jT=this[qy], !this._jT||(this[Pu]||this[tg])&&!1!==this._62()||(this._jT=!1)), this._jT?(this._1I=!1, this[Ie]||(this[ig](), this[Ie]=!0), this.doValidate()):t!=this._jT;},_jU:function _jU(t,i){return t-=this.$x, i-=this.$y, AG[x](this,{x:t,y:i});},hitTest:function hitTest(t,i,n,e){if(t-=this.$x, i-=this.$y, !this._hI.intersectsPoint(t,i,n)){ return!1; }var s=AG[x](this,{x:t,y:i});return t=s.x, i=s.y, !(e||!this._$t()||!this[Ou]||!this[Ou].hitTest(t,i,n,!1,this[Eu],this[Xy]||this[Vy]))||this[ng](t,i,n);},doHitTest:function doHitTest(t,i,n){return this._l4[Jt](t,i,n);},hitTestByBounds:function hitTestByBounds(t,i,n,e){var s=this._jU(t,i);return!(e||!this._$t()||!this._nZShape||!this[Ou][Ho](t,i,n,!1,this.$border,this[Xy]||this[Vy]))||this._l4[Jt](s.x,s.y,n);},onDataChanged:function onDataChanged(t,i){this[zy]=!0, this._1I=!0, this[Jy]=!0;},getBounds:function getBounds(){var t=this._hI[d]();return t[Rb](this.x,this.y), this[Hi]&&(this.parent[Rt]&&uU(t,this[Hi].rotate,t), t[Rb](this[Hi].x||0,this[Hi].y||0)), t;},destroy:function destroy(){this[ju]=!0;},_f2:!1}, DB(xW[_],{originalBounds:{get:function get(){return this._l4;}},data:{get:function get(){return this.$data;},set:function set(t){var i;this.$data!=t&&(i=this.$data, this[Pu]=t, this.onDataChanged(t,i));}},parent:{get:function get(){return this._l8;}},showOnTop:{get:function get(){return this._f2;},set:function set(t){t!=this._f2&&(this._f2=t, this._1I=!0, this._l8&&this._l8._oUP&&this._l8[eg](this));}}}), mW(xW.prototype,{globalDirection:{value:!1,validateFlags:[sg]},visible:{value:!0,validateFlags:[hg,sg]},showEmpty:{validateFlags:[hg]},anchorPosition:{value:ik[gi],validateFlags:[rg,sg]},position:{value:ik[gi],validateFlags:[sg]},offsetX:{value:0,validateFlags:[sg]},offsetY:{value:0,validateFlags:[sg]},layoutByAnchorPoint:{value:!0,validateFlags:[xh,rg,sg]},padding:{value:0,validateFlags:[xh]},border:{value:0,validateFlags:[xh]},borderRadius:{value:UB.BORDER_RADIUS},showPointer:{value:!1,validateFlags:[xh]},pointerX:{value:0,validateFlags:[xh]},pointerY:{value:0,validateFlags:[xh]},pointerWidth:{value:UB[ta]},backgroundColor:{validateFlags:[xh]},backgroundGradient:{validateFlags:[xh,ag]},selected:{value:!1,validateFlags:[xh]},selectionBorder:{value:UB[Qr],validateFlags:[xh]},selectionShadowBlur:{value:UB.SELECTION_SHADOW_BLUR,validateFlags:[xh]},selectionColor:{value:UB[Zr],validateFlags:[xh]},selectionType:{value:UB[Vr],validateFlags:[xh]},selectionShadowOffsetX:{value:0,validateFlags:[xh]},selectionShadowOffsetY:{value:0,validateFlags:[xh]},shadowBlur:{value:0,validateFlags:[xh]},shadowColor:{validateFlags:[xh]},shadowOffsetX:{value:0,validateFlags:[xh]},shadowOffsetY:{value:0,validateFlags:[xh]},renderColorBlendMode:{},renderColor:{},x:{value:0,validateFlags:[sg]},y:{value:0,validateFlags:[sg]},rotatable:{value:!0,validateFlags:[og,xh]},rotate:{value:0,validateFlags:[og,xh]},_hostRotate:{validateFlags:[og]},lineWidth:{value:0,validateFlags:[fg]},alpha:{value:1}});var TW=[aU.PROPERTY_TYPE_ACCESSOR,aU[Bb],aU[_n]];function wW(){TW[Ae](function(t){this[t]={};},this);}wW[_]={removeBinding:function removeBinding(i){
var this$1 = this;
for(var t=TW[bt];0<=--t;){var n,e=this$1[TW[t]];for(n in e){var s=e[n];Array[G](s)?(function(t,i,n){for(var e=t instanceof GB,s=t._l1||t,h=0,r=s[bt];h<r;h++){var a=s[h];i.call(n,a)&&(e?t[B](a):t[m](h,1), h--, r--);}}(s,function(t){return t.target==i;},this$1), s[bt]||delete e[n]):s[od]==i&&delete e[n];}}},_1Z:function _1Z(t,i,n){if(!n&&!(n=this[i[Ri]||aU[cg]])){ return!1; }var e=n[t];e?(Array[G](e)||(n[t]=e=[e]), e.push(i)):n[t]=i;},_2L:function _2L(t,i,n,e,s,h){var r=this[t=t||aU.PROPERTY_TYPE_ACCESSOR];if(!r){ return!1; }var a={property:i,propertyType:t,bindingProperty:e,target:n,callback:s,invalidateSize:h};this._1Z(i,a,r);},onBindingPropertyChange:function onBindingPropertyChange(t,i,n,e){var s=this[n||aU[cg]];if(!s){ return!1; }var h=s[i];return!!h&&(t._1I=!0, function t(i,n,e,s){if(Array[G](n)){ for(var h=n[bt];0<=--h;){t(i,n[h],e,s);} }else{var r,a=n[od];if(a){if(a instanceof xW||(a=i[a]), !a){ return; }}else { a=i; }s=s||i[ug](n[_g],e), n.bindingProperty&&(a[n[dg]]=s), n[lg]&&((r=n[lg])instanceof Function||(r=i[r]), r instanceof Function&&r.call(i,s,a));}}(t,h,n,e), !0);},initBindingProperties:function initBindingProperties(t,i){
var this$1 = this;
for(var n=TW.length;0<=--n;){var e,s=TW[n],h=this$1[s];for(e in h){var r=h[e];if(r[dg]){var a,o=r[od];if(o){if(!(o instanceof xW||(o=t[o]))){ continue; }}else { o=t; }(a=!1===i?t.getProperty(r[_g],s):s==aU[Bb]?t[Gl].getStyle(t.$data,r.property):t[Pu][r[_g]])!==Y&&(o[r.bindingProperty]=a);}}}}};var LW={SELECTION_COLOR:bg,SELECTION_BORDER:vg,SELECTION_SHADOW_BLUR:"selection.shadow.blur",SELECTION_SHADOW_OFFSET_X:"selection.shadow.offset.x",SELECTION_SHADOW_OFFSET_Y:"selection.shadow.offset.y",SELECTION_TYPE:yg,RENDER_COLOR:gg,RENDER_COLOR_BLEND_MODE:"render.color.blend.mode",ALPHA:Eg,SHADOW_BLUR:xg,SHADOW_COLOR:mg,SHADOW_OFFSET_X:pg,SHADOW_OFFSET_Y:Tg,SHAPE_STROKE:wg,SHAPE_STROKE_STYLE:Lg,SHAPE_LINE_FILL_COLOR:"shape.stroke.fill.color",SHAPE_LINE_DASH:Mg,SHAPE_LINE_DASH_OFFSET:"shape.line.dash.offset",SHAPE_FILL_COLOR:Og,SHAPE_FILL_GRADIENT:Sg,SHAPE_OUTLINE:Ag,SHAPE_OUTLINE_STYLE:Ig,LAYOUT_BY_PATH:Cg,BACKGROUND_COLOR:Pg,BACKGROUND_GRADIENT:Fg,BORDER:Rg,BORDER_COLOR:Dg,BORDER_LINE_DASH:Ng,BORDER_LINE_DASH_OFFSET:"border.line.dash.offset",BORDER_RADIUS:Bg,PADDING:Ko,LINE_CAP:kg,LINE_JOIN:Ug,LINE_DASH_CAP:Gg,LINE_DASH_JOIN:$g,IMAGE_BACKGROUND_COLOR:"image.background.color",IMAGE_BACKGROUND_GRADIENT:"image.background.gradient",IMAGE_BORDER:Wg};LW[Hg]=LW.IMAGE_BORDER_COLOR=Yg, LW[jg]="image.border.line.dash", LW[Xg]="image.border.line.dash.offset", LW[zg]=LW[Vg]=Kg, LW.IMAGE_PADDING=Qg, LW[Zg]=Jg, LW.IMAGE_ADJUST=qg, LW[tE]=iE, LW.IMAGE_ALPHA=nE, LW.LABEL_ROTATE=eE, LW.LABEL_POSITION=sE, LW.LABEL_GLOBAL_DIRECTION="label.global.direction", LW[hE]=rE, LW.LABEL_ANCHOR_POSITION="label.anchor.position", LW[aE]=oE, LW.LABEL_FONT_SIZE=fE, LW[cE]=uE, LW[_E]=dE, LW[lE]=bE, LW.LABEL_POINTER_WIDTH=vE, LW[yE]=gE, LW[EE]=xE, LW.LABEL_OFFSET_X=mE, LW[pE]=TE, LW[wE]=LE, LW[ME]=OE, LW.LABEL_ALIGN_POSITION=SE, LW[AE]=IE, LW[CE]="label.border.line.dash", LW[PE]="label.border.line.dash.offset", LW[FE]=RE, LW[DE]="label.background.color", LW[NE]="label.background.gradient", LW.LABEL_ROTATABLE=BE, LW[kE]=UE, LW[GE]=$E, LW[WE]="label.shadow.offset.x", LW[HE]="label.shadow.offset.y", LW[YE]=jE, LW[XE]=zE, LW[VE]=KE, LW[QE]="group.background.color", LW.GROUP_BACKGROUND_GRADIENT="group.background.gradient", LW[ZE]=JE, LW.GROUP_STROKE=qE, LW[tx]=ix, LW[nx]="group.stroke.line.dash", LW[ex]="group.stroke.line.dash.offset", LW[sx]="edge.bundle.label.rotate", LW[hx]="edge.bundle.label.position", LW[rx]="edge.bundle.label.anchor.position", LW[ax]="edge.bundle.label.color", LW[ox]="edge.bundle.label.font.size", LW.EDGE_BUNDLE_LABEL_FONT_FAMILY="edge.bundle.label.font.family", LW[fx]="edge.bundle.label.font.style", LW[cx]="edge.bundle.label.padding", LW[ux]="edge.bundle.label.pointer.width", LW.EDGE_BUNDLE_LABEL_POINTER="edge.bundle.label.pointer", LW[_x]="edge.bundle.label.radius", LW.EDGE_BUNDLE_LABEL_OFFSET_X="edge.bundle.label.offset.x", LW.EDGE_BUNDLE_LABEL_OFFSET_Y="edge.bundle.label.offset.y", LW[dx]="edge.bundle.label.border", LW.EDGE_BUNDLE_LABEL_BORDER_STYLE="edge.bundle.label.border.color", LW[lx]="edge.bundle.label.background.color", LW[bx]="edge.bundle.label.background.gradient", LW[vx]="edge.bundle.label.rotatable", LW.EDGE_WIDTH=yx, LW[gx]=Ex, LW[xx]=mx, LW[px]=Tx, LW[wx]=Lx, LW.EDGE_LINE_DASH_OFFSET="edge.line.dash.offset", LW[Mx]=Ox, LW[Sx]=Ax, LW[Ix]=Cx, LW.EDGE_BUNDLE_TYPE=Px, LW[Fx]=Rx, LW[Dx]=Nx, LW.EDGE_EXTEND=Bx, LW[kx]=Ux, LW[Gx]="edge.split.by.percent", LW[$x]=Wx, LW[Hx]=Yx, LW[jx]=Xx, LW[zx]=Vx, LW.EDGE_FROM_AT_EDGE=Kx, LW[Qx]=Zx, LW.EDGE_FROM_PORT=Jx, LW[qx]=tm, LW[im]=nm, LW.ARROW_FROM_SIZE=em, LW[sm]=hm, LW.ARROW_FROM_STROKE=rm, LW[am]="arrow.from.stroke.style", LW.ARROW_FROM_OUTLINE=om, LW[fm]="arrow.from.outline.style", LW[cm]=um, LW[_m]="arrow.from.line.dash.offset", LW[dm]="arrow.from.fill.color", LW.ARROW_FROM_FILL_GRADIENT="arrow.from.fill.gradient", LW[lm]=bm, LW.ARROW_FROM_LINE_JOIN=vm, LW[Tv]=ym, LW[gm]=Em, LW.ARROW_TO_OFFSET=xm, LW[mm]=pm, LW[Tm]="arrow.to.stroke.style", LW.ARROW_TO_OUTLINE=wm, LW[Lm]="arrow.to.outline.style", LW[Mm]=Om, LW[Sm]="arrow.to.line.dash.offset", LW[Am]=Im, LW.ARROW_TO_FILL_GRADIENT="arrow.to.fill.gradient", LW.ARROW_TO_LINE_CAP=Cm, LW.ARROW_TO_LINE_JOIN=Pm;var MW=new wW(),OW=aU[cg],SW=aU[Bb];MW._2L(SW,LW.SELECTION_TYPE,null,ky), MW._2L(SW,LW[Qr],null,Uf), MW._2L(SW,LW[Fm],null,Rf), MW._2L(SW,LW.SELECTION_COLOR,null,Df), MW._2L(SW,LW[Rm],null,"selectionShadowOffsetX"), MW._2L(SW,LW[Dm],null,"selectionShadowOffsetY"), MW._2L(OW,Xo,Ju,tn), MW._2L(SW,LW[hE],Ju,ol), MW._2L(SW,LW.LABEL_POSITION,Ju,af), MW._2L(SW,LW.LABEL_GLOBAL_DIRECTION,Ju,Fu), MW._2L(SW,LW[Nm],Ju,mv), MW._2L(SW,LW[aE],Ju,Bm), MW._2L(SW,LW[km],Ju,Um), MW._2L(SW,LW.LABEL_BORDER,Ju,Yh), MW._2L(SW,LW[CE],Ju,jy), MW._2L(SW,LW[PE],Ju,Gm), MW._2L(SW,LW[FE],Ju,$m), MW._2L(SW,LW[DE],Ju,Wm), MW._2L(SW,LW.LABEL_ON_TOP,Ju,Hm), MW._2L(SW,LW.LABEL_WRAP,Ju,Oy), MW._2L(SW,LW[Ym],null,No), MW._2L(SW,LW.SHADOW_COLOR,null,Do), MW._2L(SW,LW[jm],null,Bo), MW._2L(SW,LW[Xm],null,ko), MW._2L(SW,LW[cE],Ju,zm), MW._2L(SW,LW[_E],Ju,Vm), MW._2L(SW,LW[Km],Ju,Qm), MW._2L(SW,LW[Zm],Ju,Rt), MW._2L(SW,LW[lE],Ju,Ko), MW._2L(SW,LW[Jm],Ju,qm), MW._2L(SW,LW[yE],Ju,tp), MW._2L(SW,LW[EE],Ju,ip), MW._2L(SW,LW[np],Ju,Wy), MW._2L(SW,LW[pE],Ju,ep), MW._2L(SW,LW[sp],Ju,hp), MW._2L(SW,LW[NE],Ju,Au), MW._2L(SW,LW[wE],Ju,Bd), MW._2L(SW,LW[ME],Ju,rp), MW._2L(SW,LW[kE],Ju,No), MW._2L(SW,LW.LABEL_SHADOW_COLOR,Ju,Do), MW._2L(SW,LW.LABEL_SHADOW_OFFSET_X,Ju,Bo), MW._2L(SW,LW.LABEL_SHADOW_OFFSET_Y,Ju,ko), MW._2L(SW,LW[YE],Ju,zd), MW._2L(SW,LW[ap],null,eo), MW._2L(SW,LW[op],null,Uo), MW._2L(SW,LW[fp],null,Eg);var AW=new wW();AW._2L(OW,q_), AW._2L(OW,mv,null,cp), AW._2L(OW,Rt,null,Rt), AW._2L(SW,LW[up],null,Wm), AW._2L(SW,LW[_p],null,Au), AW._2L(SW,LW[dp],null,Ko), AW._2L(SW,LW[lp],null,Yh), AW._2L(SW,LW.BORDER_RADIUS,null,ip), AW._2L(SW,LW[bp],null,$m), AW._2L(SW,LW[vp],null,jy), AW._2L(SW,LW[yp],null,Gm), AW._2L(OW,Yo,Yo,tn,gp), AW._2L(OW,Bd,Yo,Bd), AW._2L(SW,LW[Ep],Yo,Ka), AW._2L(SW,LW.SHAPE_STROKE_STYLE,Yo,Na), AW._2L(SW,LW[xp],Yo,Yf), AW._2L(SW,LW[mp],Yo,Cu), AW._2L(SW,LW[tE],Yo,Rt), AW._2L(SW,LW[pp],Yo,Tp), AW._2L(SW,LW.SHAPE_OUTLINE,Yo,kf), AW._2L(SW,LW[wp],Yo,Wf), AW._2L(SW,LW.SHAPE_FILL_GRADIENT,Yo,jf), AW._2L(SW,LW[Lp],Yo,zf), AW._2L(SW,LW[Mp],Yo,Uu), AW._2L(SW,LW[Op],Yo,Gf), AW._2L(SW,LW.LINE_JOIN,Yo,$f), AW._2L(SW,LW[Sp],Yo,Wm), AW._2L(SW,LW.IMAGE_BACKGROUND_GRADIENT,Yo,Au), AW._2L(SW,LW[Ap],Yo,Ko), AW._2L(SW,LW[Ip],Yo,Yh), AW._2L(SW,LW[Vg],Yo,ip), AW._2L(SW,LW.IMAGE_BORDER_COLOR,Yo,$m), AW._2L(SW,LW.IMAGE_BORDER_LINE_DASH,Yo,jy), AW._2L(SW,LW[Xg],Yo,Gm), AW._2L(SW,LW.IMAGE_Z_INDEX,Yo,zd), AW._2L(SW,LW.IMAGE_ALPHA,Yo,Eg), AW._2L(OW,_b,null,null,Cp), AW._2L(OW,cb,null,null,Cp);var IW=new wW();IW._2L(OW,hy,null,null,Pp), IW._2L(OW,ry,null,null,Pp), IW._2L(OW,sy,null,null,Pp), IW._2L(OW,Ko,null,null,Pp), IW._2L(SW,LW[QE],Fp,Yf), IW._2L(SW,LW[Rp],Fp,jf), IW._2L(SW,LW.GROUP_STROKE,Fp,Ka), IW._2L(SW,LW[tx],Fp,Na), IW._2L(SW,LW[nx],Fp,zf), IW._2L(SW,LW[ex],Fp,Uu), IW._2L(SW,LW[ZE],null,null,Pp);var CW=new wW();CW._2L(OW,Gb,Fp,null,Dp), CW._2L(OW,rv,Fp,null,Dp), CW._2L(OW,ov,Fp,null,Dp), CW._2L(SW,LW[Np],Fp,null,Dp), CW._2L(SW,LW[Bp],Fp,null,Dp), CW._2L(SW,LW[kp],Fp,Ka), CW._2L(SW,LW.EDGE_COLOR,Fp,Na), CW._2L(SW,LW[im],Fp,Up), CW._2L(SW,LW.ARROW_TO,Fp,Gp), CW._2L(SW,LW.LINE_DASH_CAP,Fp,Kf), CW._2L(SW,LW.LINE_DASH_JOIN,Fp,Qf), CW._2L(SW,LW[Ix],Fp,Vf), CW._2L(SW,LW.EDGE_FROM_AT_EDGE,null,$p,Dp), CW._2L(SW,LW.EDGE_TO_AT_EDGE,null,Wp,Dp), CW._2L(SW,LW.EDGE_OUTLINE,Fp,kf), CW._2L(SW,LW[px],Fp,Wf), CW._2L(SW,LW.EDGE_LINE_DASH,Fp,zf), CW._2L(SW,LW.EDGE_LINE_DASH_OFFSET,Fp,Uu), CW._2L(SW,LW[kx],Fp,null,Dp), CW._2L(SW,LW[Mx],Fp,null,Dp), CW._2L(SW,LW[Sx],Fp,null,Dp), CW._2L(SW,LW[Hp],Fp,null,Dp), CW._2L(SW,LW[qx],Fp,null,Dp), CW._2L(SW,LW[Op],Fp,Gf), CW._2L(SW,LW.LINE_JOIN,Fp,$f), CW._2L(OW,ev,null,null,Dp,!0), CW._2L(OW,sf,null,null,Dp,!0), CW._2L(SW,LW[Yp],Fp,jp), CW._2L(SW,LW.ARROW_FROM_OFFSET,Fp,Xp), CW._2L(SW,LW.ARROW_FROM_STROKE,Fp,zp), CW._2L(SW,LW.ARROW_FROM_STROKE_STYLE,Fp,Vp), CW._2L(SW,LW[Kp],Fp,Qp), CW._2L(SW,LW[fm],Fp,"fromArrowOutlineStyle"), CW._2L(SW,LW[dm],Fp,Zp), CW._2L(SW,LW[Jp],Fp,"fromArrowFillGradient"), CW._2L(SW,LW[cm],Fp,qp), CW._2L(SW,LW[_m],Fp,"fromArrowLineDashOffset"), CW._2L(SW,LW[tT],Fp,iT), CW._2L(SW,LW[lm],Fp,nT), CW._2L(SW,LW[gm],Fp,eT), CW._2L(SW,LW[sT],Fp,hT), CW._2L(SW,LW[mm],Fp,rT), CW._2L(SW,LW[Tm],Fp,aT), CW._2L(SW,LW[oT],Fp,fT), CW._2L(SW,LW[Lm],Fp,cT), CW._2L(SW,LW[Am],Fp,uT), CW._2L(SW,LW[_T],Fp,dT), CW._2L(SW,LW[Mm],Fp,lT), CW._2L(SW,LW[Sm],Fp,"toArrowLineDashOffset"), CW._2L(SW,LW[bT],Fp,vT), CW._2L(SW,LW[yT],Fp,gT);var PW=new wW();PW._2L(SW,LW.EDGE_BUNDLE_LABEL_COLOR,ET,Bm), PW._2L(SW,LW[hx],ET,af), PW._2L(SW,LW[rx],ET,mv), PW._2L(SW,LW.EDGE_BUNDLE_LABEL_FONT_SIZE,ET,Um), PW._2L(SW,LW[vx],ET,hp), PW._2L(SW,LW[sx],ET,Rt), PW._2L(SW,LW[xT],ET,zm), PW._2L(SW,LW.EDGE_BUNDLE_LABEL_FONT_STYLE,ET,Vm), PW._2L(SW,LW.EDGE_BUNDLE_LABEL_PADDING,ET,Ko), PW._2L(SW,LW.EDGE_BUNDLE_LABEL_POINTER_WIDTH,ET,qm), PW._2L(SW,LW.EDGE_BUNDLE_LABEL_POINTER,ET,tp), PW._2L(SW,LW[_x],ET,ip), PW._2L(SW,LW[mT],ET,Wy), PW._2L(SW,LW[pT],ET,ep), PW._2L(SW,LW[dx],ET,Yh), PW._2L(SW,LW[TT],ET,$m), PW._2L(SW,LW[lx],ET,Wm), PW._2L(SW,LW[bx],ET,Au);var FW=new wW();function RW(t,i){return(t=t[zd])==(i=i[zd])?0:(i=i||0)<(t=t||0)?1:t<i?-1:void 0;}FW._2L(OW,q_), FW._2L(SW,LW[up],null,Wm), FW._2L(SW,LW[_p],null,Au), FW._2L(SW,LW[dp],null,Ko), FW._2L(SW,LW[lp],null,Yh), FW._2L(SW,LW[qr],null,ip), FW._2L(SW,LW.BORDER_COLOR,null,$m), FW._2L(SW,LW[vp],null,jy), FW._2L(SW,LW[yp],null,Gm), FW._2L(OW,Rt,null,Rt), FW._2L(OW,ev,null,null,wT), FW._2L(OW,Ul,Yo,tn), FW._2L(OW,Bd,Yo,Bd), FW._2L(SW,LW[Ep],Yo,Ka), FW._2L(SW,LW[LT],Yo,Na), FW._2L(SW,LW.SHAPE_FILL_COLOR,Yo,Yf), FW._2L(SW,LW[MT],Yo,jf), FW._2L(SW,LW[OT],Yo,Kf), FW._2L(SW,LW[ST],Yo,Qf), FW._2L(SW,LW.SHAPE_LINE_FILL_COLOR,Yo,Vf), FW._2L(SW,LW[AT],Yo,kf), FW._2L(SW,LW.SHAPE_OUTLINE_STYLE,Yo,Wf), FW._2L(SW,LW.SHAPE_LINE_DASH,Yo,zf), FW._2L(SW,LW[Mp],Yo,Uu), FW._2L(SW,LW[Op],Yo,Gf), FW._2L(SW,LW[IT],Yo,$f), FW._2L(SW,LW[mp],Yo,Cu), FW._2L(SW,LW[Sp],Yo,Wm), FW._2L(SW,LW[CT],Yo,Au), FW._2L(SW,LW.IMAGE_PADDING,Yo,Ko), FW._2L(SW,LW.IMAGE_BORDER,Yo,Yh), FW._2L(SW,LW.IMAGE_BORDER_RADIUS,Yo,ip), FW._2L(SW,LW[PT],Yo,$m), FW._2L(SW,LW[jg],Yo,jy), FW._2L(SW,LW[Xg],Yo,Gm), FW._2L(SW,LW[im],Yo,Up), FW._2L(SW,LW[Yp],Yo,jp), FW._2L(SW,LW[sm],Yo,Xp), FW._2L(SW,LW.ARROW_FROM_STROKE,Yo,zp), FW._2L(SW,LW[am],Yo,Vp), FW._2L(SW,LW[dm],Yo,Zp), FW._2L(SW,LW.ARROW_FROM_FILL_GRADIENT,Yo,"fromArrowFillGradient"), FW._2L(SW,LW.ARROW_FROM_LINE_DASH,Yo,qp), FW._2L(SW,LW[_m],Yo,"fromArrowLineDashOffset"), FW._2L(SW,LW[tT],Yo,iT), FW._2L(SW,LW[lm],Yo,nT), FW._2L(SW,LW[gm],Yo,eT), FW._2L(SW,LW.ARROW_TO_OFFSET,Yo,hT), FW._2L(SW,LW[Tv],Yo,Gp), FW._2L(SW,LW[mm],Yo,rT), FW._2L(SW,LW.ARROW_TO_STROKE_STYLE,Yo,aT), FW._2L(SW,LW.ARROW_TO_FILL_COLOR,Yo,uT), FW._2L(SW,LW.ARROW_TO_FILL_GRADIENT,Yo,dT), FW._2L(SW,LW[Mm],Yo,lT), FW._2L(SW,LW[Sm],Yo,"toArrowLineDashOffset"), FW._2L(SW,LW.ARROW_TO_LINE_JOIN,Yo,vT), FW._2L(SW,LW.ARROW_TO_LINE_CAP,Yo,gT);var DW=function DW(t,i){this[Xl]=new JB(), JN(this,DW,arguments), this.id=this[Pu].id, this.graph=i, this._hF=[], this._d5=new wW();};function NW(t,i,n,e){if(e!=aU.PROPERTY_TYPE_ACCESSOR){if(e!=aU[_n]){if(e!=aU[Bb]){ return!1; }t.setStyle(n,i);}else { t.set(n,i); }}else { t[n]=i; }}DW[_]={syncSelection:!1,graph:null,layoutByAnchorPoint:!1,_d5:null,_hF:null,addChild:function addChild(t,i){t._l8=this, i!==Y?VN(this._hF,t,i):this._hF[j](t), t._f2&&this[eg](t), this[FT](), this.invalidateSize(), this[RT]=!0;},removeChild:function removeChild(t){this._d5[DT](t), t._l8=null, KN(this._hF,t), this._l2&&this._l2[B](t), this[NT](), this[RT]=!0;},getProperty:function getProperty(t,i){return i==aU[Bb]?this.graph[BT](this.$data,t):i==aU[_n]?this[Pu].get(t):this[Pu][t];},getStyle:function getStyle(t){return this[Gl][BT](this[Pu],t);},_$z:function _$z(t,i,n){var e=this._d5[kT](this,t,i,n);return MW[kT](this,t,i,n)||e;},onPropertyChange:function onPropertyChange(t){if(zd==t[Ai]){ return this[ob](), !0; }if(jb!=t[Pi]){ return this._$z(t[Ai],t.propertyType||OW,t[P]); }if(Nd==t.kind){ return this.invalidate(), !0; }var i=t[P];return!(!i||!i.ui||(on==t[Ai]?this._oT3(i):B==t[Ai]&&this[Rn](i.ui), 0));},label:null,initLabel:function initLabel(){var t=new kW();t[Xo]=Ju, this[UT](t), this[Ju]=t;},initialize:function initialize(){this[GT](), this[Pu]._d2&&this[Pu]._d2[Ae](this._oT3,this), MW[$T](this), this._d5[$T](this,!1);},addBinding:function addBinding(t,i){if(!i[_g]){ return!1; }i.target=t, this._d5._1Z(i[_g],i);},_hH:function _hH(t,i){var n=this.$data;if(!n._d2){ return!1; }var e=n._d2[pl](t.id);if(!e||!e[WT]){ return!1; }var s=e[WT];if(MB(s)){var h=!1;return jN(s,function(t){if(tn==t.bindingProperty){ return h=NW(n,i,t[_g],t.propertyType), !1; }},this), h;}return tn==s.bindingProperty&&NW(n,i,s[_g],s.propertyType);},_oT3:function _oT3(t){var i,n=t.ui;n&&((i=t.bindingProperties)&&(Array[G](i)?i.forEach(function(t){this[HT](n,t);},this):this.addBinding(n,i)), this[UT](n));},validate:function validate(){return this[Ie]||(this[ig](), this[Ie]=!0), this[YT]();},_$c:!0,invalidateChildrenIndex:function invalidateChildrenIndex(){this._$c=!0;},doValidate:function doValidate(){if(this._1I&&(this._1I=!1, this[jT]()&&(this[XT](), this[vu]=!0), this._$c&&(this._$c=!1, dB?this._hF=YN(this._hF,RW):this._hF[Td](RW))), IG[x](this)&&(this[Ru]=!0), this.$invalidateRotate){PG[x](this), this[Xl].setByRect(this._hI);var t=this.$selectionBorder||0,i=Math.max(this[zT]||0,this[VT]||0,this[KT]||0),n=Math.max(this.$shadowOffsetY||0,this.$selectionShadowOffsetY||0),e=Math.max(t,this[QT],this[ZT]),s=(e+=UB.UI_BOUNDS_GROW||0)-i,h=e+i,r=e-n,a=e+n;return s<0&&(s=0), h<0&&(h=0), r<0&&(r=0), a<0&&(a=0), this[Xl][gu](r,s,a,h), this[Qy]&&this[Qy](), this.$invalidateBounds=!0;}},validateChildren:function validateChildren(){
var this$1 = this;
var t=this[RT];this[RT]=!1;var i=this[JT],n=this.bodyChanged;i&&(i.$renderColor=this[qT], i[tw]=this[tw], i[iw]=this[iw], i[QT]=this.$shadowBlur, i[VT]=this.$shadowOffsetX, i.$shadowOffsetY=this.$shadowOffsetY), this[nw]=!1, i&&i._1I&&(n=i[Zo]()||n, i.$x=0, i.$y=0, i[Ru]&&PG.call(i), t=!0);for(var e,s,h,r=0,a=this._hF[bt];r<a;r++){var o,f=this$1._hF[r];f!=i&&(((o=f._1I&&f[Zo]())||n)&&f._jT&&(e=f, h=void 0, (s=i)?s._8U.isEmpty()?(e.$x=s.$x, e.$y=s.$y):(h=function(t,i,n){var e,s=t[af],h=t[Cu]===Y?this[Cu]:t.layoutByPath;return this[Pu]instanceof vG&&h?((e=BU._oUC(s,this[Pu],this[Ka],i,n,t[Fu])).x*=this._l6, e.y*=this._l7):((e=ok(s,this._8U[jt],this._8U.height)).x+=this._8U.x, e.y+=this._8U.y), SG.call(this,e);}[x](s,e), e.$x=h.x, e.$y=h.y, e._hostRotate=h[Rt]):(e.$x=0, e.$y=0), e[Ru]&&PG[x](e)), !t&&o&&(t=!0));}return t;},measure:function measure(){
var this$1 = this;
var t,i;this._l4[It]();for(var n=0,e=this._hF[bt];n<e;n++){(t=this$1._hF[n])._jT&&((i=t._hI)[jt]<=0||i[Xt]<=0||this$1._l4.addRect(t.$x+i.x,t.$y+i.y,i.width,i[Xt]));}},_l2:null,_oUP:function _oUP(t){return this._l2?t.showOnTop?this._l2.add(t):this._l2[B](t):t.showOnTop?(this._l2=new GB(), this._l2.add(t)):void 0;},draw:function draw(t,i,n,e){
var this$1 = this;
for(var s,h=0,r=this._hF.length;h<r;h++){(s=this$1._hF[h])._jT&&!s[Hm]&&s._lA(t,i,n,this$1);}},_oT4:function _oT4(t,i){
var this$1 = this;
if(!this._jT||!this._l2||!this._l2[bt]){ return!1; }var n;t[$a](), t[Wa](this.$x,this.$y), this[_u]&&t.rotate(this[_u]), this[bu]&&this._oUS&&t[Wa](-this[uu].x,-this[uu].y), this[Do]&&(t.shadowColor=this[Do], t[No]=this[No]*i, t[Bo]=this[Bo]*i, t[ko]=this[ko]*i), t[Ya]();for(var e=0,s=this._hF[bt];e<s;e++){(n=this$1._hF[e])._jT&&n.showOnTop&&n._lA(t,i,this$1[ab],this$1);}t[qa]();},doHitTest:function doHitTest(t,i,n){if(n){if(!this._l4.intersectsRect(t-n,i-n,2*n,2*n)){ return!1; }}else if(!this._l4.intersectsPoint(t,i)){ return!1; }return this[ew](t,i,n);},hitTestChildren:function hitTestChildren(t,i,n){
var this$1 = this;
for(var e,s=this._hF[bt]-1;0<=s;s--){if((e=this$1._hF[s])._jT&&e[Ho](t,i,n)){ return e; }}return!1;},destroy:function destroy(){
var this$1 = this;
this[ju]=!0;for(var t=this._hF.length-1;0<=t;t--){this$1._hF[t][Ds]();}}}, ZN(DW,xW), DB(DW[_],{renderColorBlendMode:{get:function get(){return this[tw];},set:function set(t){this.$renderColorBlendMode=t, this._1I=!0, this[Eo]&&(this[Eo][Uo]=this[tw]);}},renderColor:{get:function get(){return this.$renderColor;},set:function set(t){this[qT]=t, this._1I=!0, this.body&&(this[Eo][eo]=this.$renderColor);}},bodyBounds:{get:function get(){var t,i;return this[sw]&&(this.$invalidateBounds=!1, i=(t=this.body)&&t._jT&&!this._$t()?t._hI[d]():this._8U.clone(), this[Rt]&&(i[hw]=i.clone(), i.rotate=this[Rt], i.tx=this.x, i.ty=this.y, uU(i,this[Rt],i)), i.x+=this.$x, i.y+=this.$y, this._dH=i), this._dH;}},bounds:{get:function get(){return new JB((this.$x||0)+this.uiBounds.x,(this.$y||0)+this[Xl].y,this.uiBounds[jt],this.uiBounds[Xt]);}},body:{get:function get(){return this[JT];},set:function set(t){t&&this[JT]!=t&&(this._oUody=t, this[nw]=!0, this[NT]());}}}), UB[rw]=1;var BW=function BW(t){JN(this,BW,arguments);};BW.prototype={strokeStyle:aw,lineWidth:0,fillColor:null,fillGradient:null,_l6:1,_l7:1,outline:0,onDataChanged:function onDataChanged(t,i){qN(this,BW,ow,arguments), this._m5&&this._8L&&this._m5._75(this._8L,this), t&&this._d6(t);},_d6:function _d6(t){this._m5=ZU(t), this._m5[Zo](), this._m5._n6!=HU&&!this._m5._73()||(this._8L||(this._8L=function(t){this[Dy](), this._l8&&this._l8[Gl]&&(this._l8[NT](), this._l8[Gl][Nd]());}), this._m5[Jo](this._8L,this));},_m5:null,initialize:function initialize(){this._d6(this.$data);},_62:function _62(){return this._m5&&this._m5.draw;},_oTP:function _oTP(t){if(!t||t[jt]<=0||t[Xt]<=0||!this[fw]||!(this[Bd]instanceof Object)){ return this._l6=1, void(this._l7=1); }var i=this[Bd].width,n=this.size[Xt];if(i!==Y&&null!==i||(i=-1), n!==Y&&null!==n||(n=-1), i<0&&n<0){ return this._l6=1, void(this._l7=1); }var e,s,h=t[jt],r=t[Xt];0<=i&&(e=i/h), 0<=n&&(s=n/r), i<0?e=s:n<0&&(s=e), this._l6=e, this._l7=s;},validateSize:function validateSize(){var t;this[cw]&&(this[cw]=!1, t=this[uw], this._l6, this._l7, this[$d](t), this.setMeasuredBounds(t.width*this._l6,t.height*this._l7,t.x*this._l6,t.y*this._l7));},measure:function measure(){var t=this._m5.getBounds(this[Ka]+this.outline);if(t){ return this[cw]=!0, void(this[uw]=t.clone()); }this._l4.set(0,0,0,0);},onBoundsChanged:function onBoundsChanged(){this[_w]=!0;},_1S:function _1S(){this[_w]=!1, this[jf]?this._fillGradient=tG[_][dw][x](this[lw],this._8U):this[Xf]=null;},_lX:function _lX(t,i){var n,e;i.tx||i.ty?t.translate(i.tx||0,i.ty||0):(n=this._l4.cx, e=this._l4.cy, t[Wa](n,e), i===aU[bw]?t[Ha](1,-1):i===aU[vw]?t[Ha](-1,1):i.rotate&&t.rotate(i[Rt]), t[Wa](-n,-e));},draw:function draw(t,i,n,e){if(this._l6&&this._l7){if(this.$invalidateFillGradient&&this._1S(), t[$a](), this[yw]&&this._lX(t,this.$adjustType), this._m5._n6==jU){ return t[Ha](this._l6,this._l7), this._m5._n4[ro](t,i,this,n,e||this), void t[qa](); }n&&this._8X(t,i,e), this._m5[ro](t,i,this,this._l6,this._l7), t.restore();}},doHitTest:function doHitTest(t,i,n){if(this._m5[Ho]){$h==this.$adjustType?i=2*this._l4.cy-i:Wh==this.$adjustType&&(t=2*this._l4.cx-t), t/=this._l6, i/=this._l7;var e=(this._l6+this._l7)/2;return 1<e&&(n/=e, n|=0), this._m5._n4 instanceof vG?this._m5._n4[Ho](t,i,n,!0,this[gw],this[Ew]||this.$fillGradient):this._m5[Ho](t,i,n);}return!0;},$invalidateScale:!0,$invalidateFillGradient:!0}, ZN(BW,xW), mW(BW[_],{adjustType:{},fillColor:{},size:{validateFlags:[xh,xw]},fillGradient:{validateFlags:[mw]}}), DB(BW[_],{originalBounds:{get:function get(){return this[uw];}}}), UB[pw]=ik[gi];var kW=function kW(t){JN(this,kW,arguments), this[Bm]=UB[aE];};kW[_]={color:UB[aE],showPointer:!0,fontSize:null,fontFamily:null,fontStyle:null,_iN:null,alignPosition:null,_mV:null,measure:function measure(){this.$data=''+this.$data, this[yy];var t=yU();t[yy]=this[Tw]||EU(this[ww],this.$fontSize,this[Lw]), this._mV=EW(t,this[Pu],this);var i=function t(i,n,e,s,h,r){if(!i||!i[bt]){ return{width:0,height:0}; }if(n=n||UB[Tt], gU&&n<9){var a=n/9,o=t(i,9,e,s,h);return o[jt]*=a, o[Xt]*=a, o;}var f=yU();f[yy]=r||EU(e,n,s);for(var c=n*(h=h||UB[ea]),u=0,_=0,d=0,l=i[bt];d<l;d++){var b=i[d],u=Math.max(f[My](b)[jt],u);_+=c;}return{width:u,height:_};}(this._mV,this[Mw],this.$fontFamily,this[Lw],UB[ea],this[Tw]);if(this._iN=i, this[fw]){var n=this[fw].width||0,e=this[fw][Xt]||0;return this.parent[Ow]&&isNaN(n)&&U==(typeof n==="undefined"?"undefined":_typeof(n))&&Sw===n[n[bt]-1]&&(n=parseFloat(n)*this[Hi][Ow][jt]/100), this[Aw](n>i[jt]?n:i[jt],e>i.height?e:i[Xt]);}return this[Aw](i.width,i.height);},doHitTest:function doHitTest(t,i,n){return!!this.$data&&((e=n)<1&&(e=1), function(t,i,n,e,s){var h=yU(n=Math[rr](n)||1,e=Math.round(e)||1);h[_c](1,0,0,1,-t,-i), s.draw(h);var r=xU(h,0,0,n,e);if(!r){ return!1; }for(var a=(r=r.data)[bt]/4;0<a--;){if(0<r[4*a-1]){ return!0; }}return!1;}(t-e,i-e,2*e,2*e,this));var e;},draw:function draw(t,i,n,e){n&&this._8X(t,i,e);var s,h=pW(this);h&&(s=DU(h), HB<s&&s<3*HB&&(t[Wa](this._l4[jt]/2,this._l4[Xt]/2), t[Rt](Math.PI), t[Wa](-this._l4[jt]/2,-this._l4[Xt]/2)));var r=this.alignPosition||UB[pw],a=r[ri],o=r[ai],f=0;yi==a?(a=Ey, f+=this._l4[jt]/2):a==ek?(a=Wt, f+=this._l4[jt]):a=ii;var c=0;bi==o?c=(this._l4[Xt]-this._iN[Xt])/2:o==hk&&(c=this._l4[Xt]-this._iN[Xt]), t[Ua]=this[Bm], function(t,i,n,e,s,h,r,a,o,f){var c;t[$a](), t[Wa](n,e), gU&&r<9&&(c=r/9, t[Ha](c,c), r=9, f=null), o=o||UB[ea], o*=r=r||UB[Tt], t[yy]=f||EU(h,r,a), t[gy]=s, t[my]=py;for(var u=o/2,_=0,d=i.length;_<d;_++){var l=i[_];t.fillText(l,0,u), u+=o;}t[qa]();}(t,this._mV,f,c,a,this.$fontFamily,this[Mw],this[Lw],UB.LINE_HEIGHT,this[Tw]);},_62:function _62(){return null!=this[Pu]||this[fw];},$invalidateFont:!0}, ZN(kW,xW), mW(kW[_],{wrap:{validateFlags:[fg]},maxWidth:{validateFlags:[fg]},size:{validateFlags:[fg]},fontStyle:{validateFlags:[fg,Iw]},fontSize:{validateFlags:[fg,Iw]},fontFamily:{validateFlags:[fg,Iw]}}), DB(kW[_],{font:{get:function get(){return this[Cw]&&(this.$invalidateFont=!1, this.$font=(this.$fontStyle||UB[Pw])+D+(this[Mw]||UB[Tt])+wt+(this[ww]||UB[Lt])), this[Tw];}}});var UW=function UW(t){t=t||new vG(), this[Fw]=new JB(), JN(this,UW,[t]);};function GW(t,i){JN(this,GW,arguments);}function $W(t,i){JN(this,$W,arguments);}UW.prototype={layoutByPath:!0,layoutByAnchorPoint:!1,measure:function measure(){this[Rw]=!0, this[Dw]=!0, this[Pu][Zf](this[gw]+this[Nw],this.pathBounds), this[Aw](this[Fw]);},validateSize:function validateSize(){var t,i;(this[Rw]||this[Dw])&&(t=this[Fw][d](), this[Rw]&&(this[Rw]=!1, (i=this[Bw]())&&t.add(i)), this[Dw]&&(this.$invalidateToArrow=!1, (i=this[kw]())&&t.add(i)), this.setMeasuredBounds(t));},validateFromArrow:function validateFromArrow(){if(this[Pu]._lK&&this.$fromArrow){var t=this[Pu],i=0,n=0,e=this.$fromArrowOffset;e&&(isNaN(e)&&(e.x||e.y)?(i+=e.x||0, n+=e.y||0):i+=e||0, 0<i&&i<1&&(i*=t._lK)), this[Uw]=t[Mf](i,n), this[Uw][Rt]=Math.PI+this[Uw].rotate||0, this[Gw]=XW(this[$w],this.$fromArrowSize);var s=this.$fromArrowShape[Zf](this[Ww][Ka]+this[Ww][kf]);return this[Hw]instanceof rU.Gradient?this.fromArrowStyles[Xf]=tG[_].generatorGradient.call(this.fromArrowFillGradient,s):this[Ww]&&(this[Ww][Xf]=null), s[Rb](this[Uw].x,this[Uw].y), _U(s,this[Uw].rotate,s,this[Uw].x,this[Uw].y), s;}this.$fromArrowShape=null;},validateToArrow:function validateToArrow(){if(this[Pu]._lK&&this[Yw]){var t=this[Pu],i=0,n=0,e=this[jw];e&&(isNaN(e)&&(e.x||e.y)?(i+=e.x||0, n+=e.y||0):i+=e||0), i<0&&-1<i&&(i*=t._lK), i+=t._lK, this[Xw]=t[Mf](i,n), this[zw]=XW(this.$toArrow,this[Vw]);var s=this[zw][Zf](this[Kw][Ka]+this.toArrowStyles[kf]);return this[dT]instanceof rU[Qw]?this[Kw][Xf]=tG[_][dw][x](this[dT],s):this[Kw]&&(this[Kw][Xf]=null), s[Rb](this.toArrowLocation.x,this[Xw].y), _U(s,this[Xw][Rt],s,this[Xw].x,this.toArrowLocation.y), s;}this.$toArrowShape=null;},_2C:function _2C(t){var i=t?"from":rv,n=this[i+Zw];n===Y&&(n=this[gw]);var e=this[i+Jw];e===Y&&(e=this[Na]);var s=this[i+qw];s||(this[i+qw]=s={}), s[Ka]=n, s[Na]=e, s[zf]=this[i+tL], s.lineDashOffset=this[i+iL], s[Yf]=this[i+nL], s.fillGradient=this[i+eL], s[Gf]=this[i+sL], s.lineJoin=this[i+hL], s.outline=this[i+rL]||0, s.outlineStyle=this[i+aL];},doValidate:function doValidate(){return this[$w]&&this._2C(!0), this[Yw]&&this._2C(!1), qN(this,UW,YT);},drawArrow:function drawArrow(t,i,n,e){var s,h,r,a;this[$w]&&this[Gw]&&(t[$a](), h=(s=this[Uw]).x, r=s.y, a=s[Rt], t.translate(h,r), a&&t[Rt](a), this.$fromArrowShape[ro](t,i,this[Ww],n,e), t.restore()), this.$toArrow&&this[zw]&&(t[$a](), h=(s=this.toArrowLocation).x, r=s.y, a=s[Rt], t[Wa](h,r), a&&t[Rt](a), this.$toArrowShape[ro](t,i,this[Kw],n,e), t[qa]());},outlineStyle:null,outline:0,onBoundsChanged:function onBoundsChanged(){this.$invalidateFillGradient=!0;},_1S:function _1S(){this[_w]=!1, this.$fillGradient?this[Xf]=tG[_][dw][x](this[lw],this._8U):this[Xf]=null;},draw:function draw(t,i,n,e){this[_w]&&this._1S(), this[Pu].draw(t,i,this,n,e), this[oL](t,i,n,e);},doHitTest:function doHitTest(t,i,n){if(this[Pu][Ho](t,i,n,!0,this[gw]+this.$outline,this[Ew]||this[lw])){ return!0; }if(this[Yw]&&this.$toArrowShape){var e=t-this[Xw].x,s=i-this[Xw].y;this[Xw].rotate&&(e=(r=oU(e,s,-this[Xw][Rt])).x, s=r.y);var h=this.toArrowStyles[Yf]||this.toArrowStyles[jf];if(this[zw][Ho](e,s,n,!0,this[Kw][Ka],h)){ return!0; }}if(this[$w]&&this[Gw]){var r,e=t-this.fromArrowLocation.x,s=i-this[Uw].y;if(this[Uw].rotate&&(e=(r=oU(e,s,-this[Uw][Rt])).x, s=r.y), h=this[Ww][Yf]||this[Ww][jf], this[Gw][Ho](e,s,n,!0,this[Ww][Ka],h)){ return!0; }}return!1;},$fromArrowOutline:0,$toArrowOutline:0,$invalidateFillGradient:!0,$invalidateFromArrow:!0,$invalidateToArrow:!0}, ZN(UW,xW), mW(UW.prototype,{strokeStyle:{validateFlags:[fL,cL]},fillColor:{},fillGradient:{validateFlags:[mw]},fromArrowOffset:{validateFlags:[fL,xh]},fromArrowSize:{validateFlags:[fL,xh]},fromArrow:{validateFlags:[fL,xh]},fromArrowOutline:{validateFlags:[fL,xh]},fromArrowStroke:{validateFlags:[fL,xh]},fromArrowStrokeStyle:{validateFlags:[fL]},toArrowOffset:{validateFlags:[cL,xh]},toArrowSize:{validateFlags:[cL,xh]},toArrow:{validateFlags:[cL,xh]},toArrowOutline:{validateFlags:[cL,xh]},toArrowStroke:{validateFlags:[cL,xh]},toArrowStrokeStyle:{validateFlags:[cL]},outline:{value:0,validateFlags:[fg]}}), DB(UW[_],{length:{get:function get(){return this.data[bt];}}}), GW.prototype={shape:null,path:null,initialize:function initialize(){qN(this,GW,ig), this[Ul]=new vG(), this[Ul]._fF=!1, this[Fp]=new UW(this[Ul]), this[UT](this[Fp],0), this[JT]=this[Fp], CW[$T](this);},_1H:!0,_61:null,_$t:function _$t(){return!1;},_4H:function _4H(){return!1;},validatePoints:function validatePoints(){this.shape[Dy]();var t=this.$data,i=this[Ul];i[It]();var n=t[xb],e=t[mb];n&&e&&function(g,t,i,n,e){var s=n==e,h=g[Gl].getUI(n),r=s?h:g[Gl][Ss](e);if(h&&r){var a=t[ov],o=g.getEndPointBounds(h),f=s?o:g[uL](r),c=t[_L]();if(s&&!c){ return g[dL](g[Ul],h,a,o); }var u,_,d,l,b,v,y,E,x,m,p,T=(E=g, x=o, m=h[lL](E[BT](LW[Hp]),x), (p=E.getStyle(LW[Mx]))&&(m.x+=p.x||0, m.y+=p.y||0), m),w=(l=g, b=f, v=r[lL](l[BT](LW[qx]),b), (y=l[BT](LW[Sx]))&&(v.x+=y.x||0, v.y+=y.y||0), v);if(!s&&!a&&!c){var L=n[Cv];if(L!=e[Cv]){var M=L?(u=h, _=o, d=r, f):(u=r, _=f, d=h, o),O=function(t,i,n,e,s,h,r){var a,o,f,c,u,_,d,l,b=r.x,v=r.y,y=Math.cos(h),g=Math.sin(h),E=ZW(i,t,{x:b,y:v},-y,-g);E||(a=b<t.x, o=b>t[Wt], f=v<t.y, c=v>t[$t], u=t.cx, _=t.cy, d=a||o, l=f||c, h=Math[Ut](v-_,b-u), d||l||(h+=Math.PI), E=ZW(i,t,{x:b,y:v},-(y=Math.cos(h)),-(g=Math.sin(h)))||{x:u,y:_});var x=ZW(e,s,{x:E.x,y:E.y},-E[bL]||y,-E[vL]||g,!1)||{x:b,y:v};return n?[E,x]:[x,E];}(_,u,L,d,M,t.angle,L?w:T);if(O&&2==O.length){var S=O[0],A=O[1];return i[La](S.x,S.y), A.x==S.x&&A.y==S.y&&(A.y+=.01), i[Ma](A.x,A.y), i._71=!0;}}}g._3J(t,i,h,r,a,o,f,T,w), (!s&&!1!==i._hT[yL]||c)&&function(t,i,n,e,s,h,r){var a=g[$p],o=g[Wp];if(!a&&!o){ return KW(t._hT,h,r); }var f,c,u,_,d,l,b,v,y=t._hT;y[bt]?(a&&QW(i,e,y[0].firstPoint,h,Y,Y), o&&(u=(c=y[y[bt]-1]).lastPoint, _=c[ks][bt], d=c[pf]||u.x===Y||u.y===Y, 4<=_&&(d||s[Zi](u.x,u.y))&&(d||(r=u), f=!0, u={x:c[ks][_-4],y:c[ks][_-3]}, s[Zi](u.x,u.y)&&(r=u, 6<=_?(u={x:c[ks][_-6],y:c[ks][_-5]}, c[ks]=c.points[vt](0,4), c[Pi]=uG):1==y.length?(u={x:h.x,y:h.y}, c[ks]=c[ks][vt](0,2), c.type=cG):u=(c=y[y.length-2])[Ea])), QW(n,s,u,r,Y,Y), f&&(_=c[ks].length, c.points[_-2]=r.x, c[ks][_-1]=r.y, r=null))):(l=Math[Ut](r.y-h.y,r.x-h.x), b=Math.cos(l), v=Math.sin(l), a&&QW(i,e,r,h,b,v), o&&QW(n,s,h,r,-b,-v)), KW(t._hT,h,r);}(i,h,r,o,f,T,w), delete i._hT[yL], i._71=!0;}}(this,t,i,n,e);},getEndPointBounds:function getEndPointBounds(t){return t.getLinkableBounds();},_3J:function _3J(t,i,n,e,s,h,r,a,o){t[_L]()?i[Mv]=t[gL].toDatas():n!=e?this[EL](i,n,e,s,h,r,a,o):this[dL](i,n,s,h,a,o);},drawLoopedEdge:function drawLoopedEdge(t,i,n,e,s,h){!function(t,i,n){var e=t.getStyle(LW[Dx]),s=t._21(),h=e+.2*s,r=i.x+i[jt]-h,a=i.y,o=i.x+i[jt],f=i.y+h;e+=s;var c={x:r,y:a},u={x:i.x+i[jt]+.707*e,y:i.y+-.707*e},_={x:o,y:f},d=c.x,l=u.x,b=_.x,v=c.y,y=u.y,g=_.y,E=((g-v)*(y*y-v*v+l*l-d*d)+(y-v)*(v*v-g*g+d*d-b*b))/(2*(l-d)*(g-v)-2*(b-d)*(y-v)),x=((b-d)*(l*l-d*d+y*y-v*v)+(l-d)*(d*d-b*b+v*v-g*g))/(2*(y-v)*(b-d)-2*(g-v)*(l-d)),h=Math[Dt]((d-E)*(d-E)+(v-x)*(v-x)),m=Math.atan2(c.y-x,c.x-E),p=Math[Ut](_.y-x,_.x-E)-m;p<0&&(p+=2*Math.PI), function(t,i,n,e,s,h,r){var a,o,f,c,u,_,d,l,b,v;if(Math.abs(e)>2*Math.PI&&(e=2*Math.PI), a=e/(c=Math.ceil(Math.abs(e)/(Math.PI/4))), o=n, 0<c){u=t+Math.cos(o)*s, _=i+Math.sin(o)*h, moveTo?r[La](u,_):r[Ma](u,_);for(var y=0;y<c;y++){f=(o+=a)-a/2, d=t+Math.cos(o)*s, l=i+Math.sin(o)*h, b=t+Math.cos(f)*(s/Math.cos(a/2)), v=i+Math.sin(f)*(h/Math.cos(a/2)), r[Av](b,v,d,l);}}}(E,x,m,p,h,h,n);}(this,e,t);},drawEdge:function drawEdge(t,i,n,e,s,h,r,a){if(e==aU[xL]){var o=(r.x+a.x)/2,f=(r.y+a.y)/2,c=r.x-a.x,u=r.y-a.y,_=Math[Dt](c*c+u*u),d=Math.atan2(u,c);d+=Math.PI/6, 30<(_*=.04)&&(_=30);var l=Math.cos(d)*_,b=Math.sin(d)*_;return t[Ma](o-b,f+l), void t[Ma](o+b,f-l);}var v=function(t,i,n,e,s,h){if(i.hasPathSegments()){ return i._oT9; }var a,r,o,f,c,u,_,d,l,b,v,y,g,E,x,m,p,T,w,L,M,O,S,A,I,C,P,F,R,D,N,B=i[ov];if((N=B)==aU[$L]||N==aU[pL]||N==aU[GL]||N==aU.EDGE_TYPE_ORTHOGONAL_VERTICAL||N==aU.EDGE_TYPE_VERTICAL_HORIZONTAL||N==aU.EDGE_TYPE_EXTEND_TOP||N==aU.EDGE_TYPE_EXTEND_LEFT||N==aU[SL]||N==aU[TL]||N==aU.EDGE_TYPE_ELBOW||N==aU[mL]||N==aU[HL]){var k=(a=B, f=t, c=s, u=h, R=function(t,i){if(null!=a){if(a==aU[mL]||a==aU[pL]||a==aU.EDGE_TYPE_HORIZONTAL_VERTICAL||a==aU.EDGE_TYPE_EXTEND_LEFT||a==aU[TL]){ return!0; }if(a==aU.EDGE_TYPE_ELBOW_VERTICAL||a==aU[wL]||a==aU[LL]||a==aU[ML]||a==aU.EDGE_TYPE_EXTEND_BOTTOM){ return!1; }}var n,e,s,h,r=(s=t, h=i, Math.max(s.x+(s[jt]||0),h.x+(h[jt]||0))-Math.min(s.x,h.x)-(s[jt]||0)-(h[jt]||0));return(n=t, e=i, Math.max(n.y+(n[Xt]||0),e.y+(e[Xt]||0))-Math.min(n.y,e.y)-(n[Xt]||0)-(e.height||0))<=r;}(r=n,o=e), D=[], !a||a!=aU.EDGE_TYPE_ELBOW&&a!=aU[mL]&&a!=aU.EDGE_TYPE_ELBOW_VERTICAL?(y=a, g=r, E=o, x=D, m=R, T=c, w=u, P=(p=f).getStyle(LW.EDGE_CONTROL_POINT), F=null==P, null!=P?(L=new JB().union(g).union(E))[si](P)||(M=P.x, O=P.y, S=L.y, A=L.x, I=L[$t], C=L.right, m=!(O<S&&A-M<S-O&&M-C<S-O||I<O&&A-M<O-I&&M-C<O-I)):P=function(t,i,n,e,s){if(t==aU.EDGE_TYPE_HORIZONTAL_VERTICAL){ return{x:w.x,y:T.y}; }if(t==aU[LL]){ return{x:T.x,y:w.y}; }var h,r,a,o,f,c,u;if(null!=t&&(t==aU[ML]||t==aU.EDGE_TYPE_EXTEND_LEFT||t==aU.EDGE_TYPE_EXTEND_BOTTOM||t==aU[TL])){var _=Math.min(n.y,e.y),d=Math.min(n.x,e.x),l=Math.max(n[$t],e[$t]),b=Math.max(n[Wt],e.right),v=s[BT](LW[Np]);if(t==aU[ML]){ return new YB((d+b)/2,_-v); }if(t==aU[OL]){ return new YB(d-v,(_+l)/2); }if(t==aU[SL]){ return new YB((d+b)/2,l+v); }if(t==aU[TL]){ return new YB(b+v,(_+l)/2); }}if((v=s.getStyle(LW.EDGE_SPLIT_BY_PERCENT)?(h=i, r=n, a=e, o=s.getStyle(LW[$x]), f=o, c=r, u=a, (h?HW(f,c.x,c[Wt],u.x,u[Wt]):HW(f,c.y,c[$t],u.y,u[$t]))*o):s[BT](LW[Hx]))==Number[AL]||v==Number[IL]){ return new YB(e.x+e[jt]/2,e.y+e[Xt]/2); }if(0==v){ return new YB(n.x+n[jt]/2,n.y+n.height/2); }if(i){var y=n.x+n.right<e.x+e.right;return new YB(YW(y,v,n.x,n[jt]),n.y+n[Xt]/2);}var g=n.y+n.bottom<e.y+e[$t];return new YB(n.x+n[jt]/2,YW(g,v,n.y,n.height));}(y,m,g,E,p), (m?function(t,i,n,e,s,h,r){var a,o,f=Math.max(t.x,i.x),c=Math.min(t.x+t[jt],i.x+i[jt]),u=null!=n?n.x:c+(f-c)/2,_=h?h.y:t.y+t[Xt]/2,d=r?r.y:i.y+i[Xt]/2;0==s&&null!=n&&(n.y>=t.y&&n.y<=t.y+t[Xt]&&(_=n.y), n.y>=i.y&&n.y<=i.y+i[Xt]&&(d=n.y)), jW(i,u,_)||jW(t,u,_)||e.push(new YB(u,_)), jW(i,u,d)||jW(t,u,d)||e.push(new YB(u,d)), 0==e[bt]&&(null!=n?jW(i,u,n.y)||jW(t,u,n.y)||e[j](new YB(u,n.y)):(a=Math.max(t.y,i.y), o=Math.min(t.y+t[Xt],i.y+i[Xt]), e.push(new YB(u,a+(o-a)/2))));}:function(t,i,n,e,s,h,r){var a,o,f=Math.max(t.y,i.y),c=Math.min(t.y+t.height,i.y+i[Xt]),u=null!=n?n.y:c+(f-c)/2,_=h?h.x:t.x+t.width/2,d=r?r.x:i.x+i.width/2;0==s&&null!=n&&(n.x>=t.x&&n.x<=t.x+t.width&&(_=n.x), n.x>=i.x&&n.x<=i.x+i[jt]&&(d=n.x)), jW(i,_,u)||jW(t,_,u)||e[j](new YB(_,u)), jW(i,d,u)||jW(t,d,u)||e.push(new YB(d,u)), 0==e[bt]&&(null!=n?jW(i,n.x,u)||jW(t,n.x,u)||e[j](new YB(n.x,u)):(a=Math.max(t.x,i.x), o=Math.min(t.x+t[jt],i.x+i.width), e.push(new YB(a+(o-a)/2,u))));})(g,E,P,x,F,T,w)):(_=R, d=r, l=o, b=D, v=f[BT](LW[Np]), (_?function(t,i,n,e,s,h){var r,a,o=i.x+i[jt]<t.x,f=t.x+t[jt]<i.x,c=o?t.x:t.x+t.width,u=s.y,_=f?i.x:i.x+i[jt],d=h.y,l=e,b=new YB(c+(o?-l:l),u),v=new YB(_+(f?-l:l),d);o==f?(r=o?Math.min(c,_)-e:Math.max(c,_)+e, n[j](new YB(r,u)), n[j](new YB(r,d))):(b.x<v.x==o?(a=u+(d-u)/2, n[j](b), n[j](new YB(b.x,a)), n.push(new YB(v.x,a))):n[j](b), n.push(v));}:function(t,i,n,e,s,h){var r,a,o=i.y+i[Xt]<t.y,f=t.y+t.height<i.y,c=s.x,u=o?t.y:t.y+t[Xt],_=h.x,d=f?i.y:i.y+i[Xt],l=e,b=new YB(c,u+(o?-l:l)),v=new YB(_,d+(f?-l:l));o==f?(r=o?Math.min(u,d)-e:Math.max(u,d)+e, n.push(new YB(c,r)), n[j](new YB(_,r))):(b.y<v.y==o?(a=c+(_-c)/2, n[j](b), n[j](new YB(a,b.y)), n[j](new YB(a,v.y))):n[j](b), n[j](v));})(d,l,b,v,c,u)), D);if(!k||!k[bt]){ return null; }VN(k,s,0), k.push(h), B!=aU.EDGE_TYPE_ELBOW&&function(t,i){var n=t[bt];if(!(n<3)){var e=i[BT](LW[jx]);if(e!=aU[CL]){var s,h,r=i[BT](LW.EDGE_CORNER_RADIUS),a=0,o=0;r&&(wB(r)?a=o=r:(a=r.x||0, o=r.y||0));for(var f,c,u=t[0],_=t[1],d=2;d<n;d++){var l=t[d],b=_.x-u.x,v=_.y-u.y,y=l.x-_.x,g=l.y-_.y,E=!v||-PU<v&&v<PU;((!b||-PU<b&&b<PU)&&(!g||-PU<g&&g<PU)||E&&(!y||-PU<y&&y<PU))&&(c=E?(s=Math.min(2==d?Math.abs(b):Math.abs(b)/2,a), h=Math.min(d==n-1?Math.abs(g):Math.abs(g)/2,o), f=new YB(_.x-(0<b?s:-s),_.y), new YB(_.x,_.y+(0<g?h:-h))):(s=Math.min(d==n-1?Math.abs(y):Math.abs(y)/2,a), h=Math.min(2==d?Math.abs(v):Math.abs(v)/2,o), f=new YB(_.x,_.y-(0<v?h:-h)), new YB(_.x+(0<y?s:-s),_.y)), KN(t,_), d--, n--, f.x==u.x&&f.y==u.y||(VN(t,f,d), d++, n++), e==aU.EDGE_CORNER_BEVEL?(VN(t,c,d), d++, n++):e==aU[PL]&&(VN(t,[_,c],d), d++, n++)), u=_, _=l;}}}}(k,t);for(var U=[],G=k.length,$=1;$<G-1;$++){var W=k[$];MB(W)?U.push(new bG(uG,[W[0].x,W[0].y,W[1].x,W[1].y])):U[j](new bG(cG,[W.x,W.y]));}return U;}if(i[FL]){var H=t._21();if(!H){ return; }return function(t,i,n,e,s,h){i=zB(e,i.x,i.y,n.x,n.y), n=zB(s,n.x,n.y,i.x,i.y);var r=Math.PI/2+Math.atan2(n.y-i.y,n.x-i.x),a=t*Math.cos(r),o=t*Math.sin(r);i.x+=a, i.y+=o, n.x+=a, n.y+=o;var f=n.x-i.x,c=n.y-i.y;if(h!=aU[jr]){ return h!=aU[zr]?[new bG(_G,[i.x+.25*f,i.y+.25*c,i.x+.75*f,i.y+.75*c,Y,Y])]:(10<Math[Dt](f*f+c*c)&&(r=Math[Ut](n.y-i.y,n.x-i.x), f=5*Math.cos(r), c=5*Math.sin(r), i.x+=f, i.y+=c, n.x-=f, n.y-=c), [new bG(cG,[i.x,i.y]),new bG(cG,[n.x,n.y])]); }var u=[new bG(fG,[i.x,i.y]),new bG(cG,[n.x,n.y])];return u[yL]=!1, u;}(H,s,h,n,e,t[BT](LW[Bp]));}}(this,this[tn],s,h,r,a);v&&(t._hT=v);},_21:function _21(){if(!this[tn][RL]()){ return null; }var t=this[tn].getEdgeBundle(!0);if(!t||!t.canBind(this[Gl])||!t._iW){ return null; }var i=t.getYOffset(this);return t.isPositiveOrder(this[Pu])||(i=-i), i;},checkBundleLabel:function checkBundleLabel(){var t=this[DL]();t?(this.bundleLabel||this.createBundleLabel(), this[ET]._jT=!0, this[ET][tn]=t):this[ET]&&(this.bundleLabel._jT=!1, this[ET][tn]=null);},createBundleLabel:function createBundleLabel(){var t=new kW();t[NL]=!1, this[ET]=t, this[UT](this[ET]), PW.initBindingProperties(this);},getBundleLabel:function getBundleLabel(){return this[Gl][DL](this.data);},doValidate:function doValidate(){return this._1H&&(this._1H=!1, this[BL]()), this[kL](), qN(this,GW,YT);},_4I:function _4I(){this._1H=!0, this[NT]();},_$z:function _$z(t,i,n){var e=this._d5[kT](this,t,i,n),e=MW[kT](this,t,i,n)||e;return this.bundleLabel&&this[ET].$data&&(e=PW.onBindingPropertyChange(this,t,i,n)||e), CW[kT](this,t,i,n)||e;}}, ZN(GW,DW), GW[UL]=function(t,i,n,e){var s,h,r,a,o,f,c,u,_,d,l,b;t.moveTo(i.x,i.y), e&&e!=aU.EDGE_TYPE_DEFAULT&&(e==aU.EDGE_TYPE_VERTICAL_HORIZONTAL?t.lineTo(i.x,n.y):e==aU[GL]?t[Ma](n.x,i.y):0==e[N](aU[$L])?(s=e==aU[pL]||e!=aU[wL]&&Math.abs(i.x-n.x)>Math.abs(i.y-n.y), o=(i.x+n.x)/2, f=(i.y+n.y)/2, s?(t[Ma](o,i.y), t.lineTo(o,n.y)):(t.lineTo(i.x,f), t[Ma](n.x,f))):0==e.indexOf(aU[WL])?(h=WW[LW[Np]]||0, (s=e==aU[mL]||e!=aU[HL]&&Math.abs(i.x-n.x)>Math.abs(i.y-n.y))?(t[Ma](i.x+h,i.y), t[Ma](n.x-h,n.y)):(t[Ma](i.x,i.y+h), t[Ma](n.x,n.y-h))):0==e[N](YL)?(h=WW[LW.EDGE_EXTEND]||0, e==aU[ML]?(r=Math.min(i.y,n.y)-h, t[Ma](i.x,r), t.lineTo(n.x,r)):e==aU.EDGE_TYPE_EXTEND_BOTTOM?(r=Math.max(i.y,n.y)+h, t.lineTo(i.x,r), t[Ma](n.x,r)):e==aU[OL]?(a=Math.min(i.x,n.x)-h, t[Ma](a,i.y), t.lineTo(a,n.y)):e==aU[TL]&&(a=Math.max(i.x,n.x)+h, t[Ma](a,i.y), t[Ma](a,n.y))):e==aU[xL]&&(o=(i.x+n.x)/2, f=(i.y+n.y)/2, c=i.x-n.x, u=i.y-n.y, _=Math[Dt](c*c+u*u), d=Math[Ut](u,c), d+=Math.PI/6, 30<(_*=.04)&&(_=30), l=Math.cos(d)*_, b=Math.sin(d)*_, t.lineTo(o-b,f+l), t.lineTo(o+b,f-l))), t.lineTo(n.x,n.y);}, DB(GW[_],{length:{get:function get(){return this[Ul]?this.path[bt]:0;}}}), GW.prototype[Fr]=function(t,i,n){var e=gG(this[Ul],t,i,this.data[jL],n);if(!e){ return!1; }var s,h,r=e.segments;2<r[bt]&&(s=this[tn], (h=r[r[bt]-1])[Pi]==cG?s[gL]=r[m](1,r.length-2):(e[XL]&&(h[pf]=!0), s.pathSegments=r[m](1,r[bt]-1)));}, $W.prototype={_2M:null,image:null,initialize:function initialize(){qN(this,$W,ig), this._oUT(), AW[$T](this);},_d6:function _d6(){this[tn][Yo]?this[Yo]&&(this[Eo]=this.image):this[Ju]&&(this[Eo]=this[Ju]);},_oUT:function _oUT(){this[Yo]=new BW(), this[UT](this[Yo],0), this._d6();},doValidate:function doValidate(){this[Eo]&&(this instanceof nH&&!this[Pu].groupImage&&this._64()?this[Eo][bu]=!1:(this.body[bu]=null!=this._2M, this[Eo][mv]=this._2M));var t=this[Pu].$location,i=0,n=0;t&&(i=t.x, n=t.y);var e=this.$x!=i||this.$y!=n;return e&&(this[sw]=!0), this.$x=i, this.$y=n, DW[_][YT][x](this)||e;},_$z:function _$z(t,i,n){var e=this._d5[kT](this,t,i,n),e=MW[kT](this,t,i,n)||e;return AW[kT](this,t,i,n)||e;},getLinkablePorts:function getLinkablePorts(){return this[tn][zL];},getLinkableBounds:function getLinkableBounds(){return this.bodyBounds;},getDefaultPortPoint:function getDefaultPortPoint(t){return ak(ik[gi],t||this[VL]());},getPortPoint:function getPortPoint(t,i){return t?((i=i||this[VL]())[hw]?(n=ak(t,i.original), i.rotate&&(n=fU(n.x,n.y,i[Rt],i[KL]||0,i[QL]||0)), n.x+=i.tx||0, n.y+=i.ty||0):n=ak(t,i), n.port=t, n):this[ZL](i);var n;},getPortPoints:function getPortPoints(){var t=this[JL]();if(t&&Array[G](t)){var i=[],n=this[VL]();return t[Ae](function(t){i.push(this[lL](t,n));}.bind(this)), i;}}}, ZN($W,DW);var WW={};function HW(t,i,n,e,s){var h,r,a,o,f=(h=i, r=n, a=e, o=s, Math.max(r,o)-Math.min(h,a)-(r-h+o-a)),c=i+n<e+s;if(0<f){if(1==t){ return f+(s-e)/2; }if(0<=t&&t<1){ return f; }if(t<0){ return c?e-i:n-s; }}return c&&0<t||!c&&t<0?Math.abs(n-s):Math.abs(i-e);}function YW(t,i,n,e){return t==0<i?n+e+Math.abs(i):n-Math.abs(i);}function jW(t,i,n){return i>=t.x&&i<=t[Wt]&&n>=t.y&&n<=t.bottom;}function XW(t,i){var n,e;i&&i[jt]&&i[Xt]?(n=i.width, e=i[Xt]):n=e=isNaN(i)?UB[ia]:i;var s=rW.getShape(t,-n,-e/2,n,e);return s||((s=new vG())[La](-n,-e/2), s[Ma](0,0), s[Ma](-n,e/2)), s;}function zW(t,i){var n=Math.sin(i),e=Math.cos(i),s=t.x,h=t.y;return t.x=s*e-h*n, t.y=s*n+h*e, t;}function VW(t,i,n,e,s,h){var r=Math[Ut](e-i,n-t),a=new YB(s,h);return a.rotate=r, zW(a,r), a.x+=t, a.y+=i, a;}function KW(t,i,n){if(VN(t,new bG(fG,[i.x,i.y]),0), n){if(1<t[bt]){var e=t[t[bt]-1];if(uG==e.type&&(e[pf]||e.points[2]===Y||null===e[ks][2])){ return e[ks][2]=n.x, e[ks][3]=n.y, e[pf]=!0, 0; }if(_G==e[Pi]&&(e[pf]||e[ks][4]===Y||null===e[ks][4])){ return e[ks][4]=n.x, e[ks][5]=n.y, e[pf]=!0, 0; }}t[j](new bG(cG,[n.x,n.y]));}}function QW(t,i,n,e,s,h){var r;for(s===Y&&(r=Math.atan2(n.y-e.y,n.x-e.x), s=Math.cos(r), h=Math.sin(r)), n={x:n.x,y:n.y}, i.contains(n.x,n.y)||(n=zB(i,e.x,e.y,n.x,n.y));;){if(!i[Zi](n.x,n.y)){ return e; }if(t[Ho](n.x-s,n.y-h,UB[qL])){e.x=n.x-s/2, e.y=n.y-h/2;break;}n.x-=s, n.y-=h;}return e;}function ZW(t,i,n,e,s,h){return i[Zi](n.x,n.y)?!1===h?JW(t,i,n,e,s):JW(t,i,{x:n.x,y:n.y,perX:e,perY:s},e,s)||JW(t,i,n,-e,-s):(n=function t(i,n,e,s,h,r){var a,o,f=n<i.x,c=n>i.right,u=e<i.y,_=e>i[$t];return f&&0<s&&(a=e+(i.x-n)*h/s)>=i.y&&a<=i[$t]?{x:i.x,y:a,perX:s,perY:h}:c&&s<0&&(a=e+(i[Wt]-n)*h/s)>=i.y&&a<=i[$t]?{x:i[Wt],y:a,perX:s,perY:h}:u&&0<h&&(o=n+(i.y-e)*s/h)>=i.x&&o<=i.right?{x:o,y:i.y,perX:s,perY:h}:_&&h<0&&(o=n+(i[$t]-e)*s/h)>=i.x&&o<=i[Wt]?{x:o,y:i[$t],perX:s,perY:h}:!1!==r?t(i,n,e,-s,-h,!1):void 0;}(i,n.x,n.y,e,s,h))?JW(t,i,n,n[bL],n[vL]):void 0;}function JW(t,i,n,e,s){for(;;){if(!i[Zi](n.x,n.y)){ return; }if(t[Ho](n.x+e,n.y+s)){ break; }n.x+=e, n.y+=s;}return n;}function qW(t){return JU(t)||t.match(/.(gif|jpg|jpeg|png)$/gi)||/^data:image\/(\w+\+?\w+);base64,/i[M](t)||(t=NB(t))instanceof Object&&t.draw?t:void 0;}function tH(t,i){this._$x=new gk(), this._$x.on(function(t){Vv==t[Ai]&&this.invalidateVisibility();},this), this._1G=new gk(), this._1G.addListener(function(t){!this[Vv]||t[Ai]!=Ek[pn]&&t[Ai]!=Ek[fn]||this[gb][Zi](this[Vv])||(this[Vv]=null);},this), this._$a=new gk(), this._15=new gk(), this._$n=new gk(), this._$q=new gk(), this[gb]=i||new _W(), this._9F=new I$(this,t), this._35=new sY(this), this._1B=new gk(), this[hM]=Fk(u,rM,function(t){this[aM]();},!1,this), this._9F[ul][oM]=function(t){this.ondrop(t);}[$e](this), this._9F._oW4.ondragover=function(t){this[fM](t);}.bind(this);}function iH(t){for(var i=t.parent;i;){if(i[cb]){ return i; }i=i[Hi];}return null;}function nH(t,i){JN(this,nH,arguments);}WW[LW[Zr]]=UB.SELECTION_COLOR, WW[LW[Qr]]=UB.SELECTION_BORDER, WW[LW[Fm]]=UB[Fm], WW[LW.SELECTION_TYPE]=aU[Jr], WW[LW[Rm]]=2, WW[LW[Dm]]=2, WW[LW[aE]]=UB[aE], WW[LW[tM]]=ik[Ei], WW[LW[Nm]]=ik[vi], WW[LW[lE]]=new tk(0,2), WW[LW[Jm]]=8, WW[LW[EE]]=8, WW[LW.LABEL_POINTER]=!0, WW[LW.LABEL_BORDER]=0, WW[LW[FE]]=aw, WW[LW[sp]]=!0, WW[LW[DE]]=null, WW[LW[NE]]=null, WW[LW.EDGE_COLOR]=iM, WW[LW.EDGE_WIDTH]=1.5, WW[LW.EDGE_FROM_AT_EDGE]=!0, WW[LW.EDGE_TO_AT_EDGE]=!0, WW[LW.GROUP_BACKGROUND_COLOR]=FB(3438210798), WW[LW[nM]]=1, WW[LW[tx]]=aw, WW[LW[Tv]]=!0, WW[LW[Yp]]=UB[ia], WW[LW[gm]]=UB[ia], WW[LW[Dx]]=10, WW[LW[zx]]=8, WW[LW.EDGE_CORNER]=aU.EDGE_CORNER_ROUND, WW[LW[Gx]]=!0, WW[LW[Np]]=20, WW[LW[$x]]=.5, WW[LW[Hx]]=20, WW[LW[Fx]]=20, WW[LW[rx]]=ik[Ei], WW[LW[hx]]=ik[vi], WW[LW[ax]]=eM, WW[LW[Ep]]=1, WW[LW.SHAPE_STROKE_STYLE]=sM, WW[LW.RENDER_COLOR_BLEND_MODE]=UB.BLEND_MODE, WW[LW[fp]]=1, UB[qL]=2, DB(tH.prototype={originAtCenter:!0,editable:!1,ondragover:function ondragover(t){rU[cM](t);},getDropInfo:function getDropInfo(t,i){var n=null;if(i){ try{n=JSON[Dh](i);}catch(t){} }return n;},ondrop:function ondrop(t){var i=t[uM];if(i){var n=i[Os](_M),e=this[dM](t,n);e||((e={})[Yo]=i.getData(Yo), e.type=i[Os](Pi), e.label=i.getData(Ju), e[ry]=i[Os](ry));var s=this[lM](t),s=this.toLogical(s.x,s.y);if(!(this[bM]instanceof Function&&!1===this.dropAction[x](this,t,s,e))&&(e.image||e[Ju]||e[Pi])){var h,r,a=e.image,o=e[Pi],f=e.label,c=e[ry];if(rU[cM](t), o&&vM!=o?yM==o?h=this.createText(f,s.x,s.y):Ov==o?h=this[gM](f,s.x,s.y):EM==o?(h=this[xM](f,s.x,s.y), (c=c&&qW(c))&&(h.groupImage=c)):(o=NB(o))instanceof Function&&o.prototype instanceof eW&&((h=new o())[Xo]=f, h.location=new YB(s.x,s.y), this[mM].add(h)):h=this[pM](f,s.x,s.y), h){if((a=a&&qW(a))&&(h[Yo]=a), !t[TM]||(r=this.getElementByMouseEvent(t))&&this[wM](r)&&(h[Hi]=r), e[LM]){ for(var u in e.properties){h[u]=e[LM][u];} }if(e.clientProperties){ for(var u in e[MM]){h.set(u,e[MM][u]);} }if(e.styles&&h[Qb](e[OM]), !1===this[SM](h,t,e)){ return!1; }var _=new eY(this,eY[AM],t,h);return _[IM]=e, this[CM](_), h;}}}},_oWH:function _oWH(t){return t[cb]||t instanceof dW||t[PM];},enableDoubleClickToOverview:!0,_9F:null,_$x:null,_1G:null,_$a:null,_$q:null,_15:null,_$n:null,_1T:function _1T(t){return this._$x[g](t);},_5C:function _5C(t){this._$x[p](t), kd==t[Ai]&&this[FM]();},isVisible:function isVisible(t){return this._9F._fJ(t);},isMovable:function isMovable(t){return(t instanceof eW||t instanceof q$&&t[_L]())&&!1!==t[RM];},isSelectable:function isSelectable(t){return!1!==t[DM];},isEditable:function isEditable(t){return!1!==t[NL];},isRotatable:function isRotatable(t){return!1!==t[hp];},isResizable:function isResizable(t){return!1!==t[NM];},canLinkFrom:function canLinkFrom(t){return!1!==t[BM]&&!1!==t[kM];},canLinkTo:function canLinkTo(t,i){return!(!1===t[BM]||!1===t[UM]||i instanceof rU[EM]&&t.isDescendantOf(i)||t instanceof rU.Group&&i.isDescendantOf(t));},isEndPointEditable:function isEndPointEditable(t,i){return!1!==t.endPointEditable;},createNode:function createNode(t,i,n){var e=new eW(t,i,n);return this._mCModel.add(e), e;},createText:function createText(t,i,n){var e=new lW(t,i,n);return this[mM].add(e), e;},createShapeNode:function createShapeNode(t,i,n,e){wB(i)&&(e=n, n=i, i=null);var s=new hW(t,i);return s[dv]=new YB(n,e), this[mM].add(s), s;},createGroup:function createGroup(t,i,n){var e=new dW(t,i,n);return this[mM].add(e), e;},createEdge:function createEdge(t,i,n){var e;t instanceof eW&&(e=n, n=i, i=t, t=e);var s=new q$(i,n);return t&&(s[kb]=t), this[mM].add(s), s;},addElement:function addElement(t,i){this[mM].add(t), i&&t[E]()&&t[qb](function(t){this[GM](t,i);},this);},removeElement:function removeElement(t){return this[mM][B](t);},clear:function clear(){this._mCModel[It]();},getStyle:function getStyle(t,i){var n=t._kZ[i];return n!==Y?n:this.getDefaultStyle(i);},getDefaultStyle:function getDefaultStyle(t){if(this._kZ){var i=this._kZ[t];if(i!==Y){ return i; }}return WW[t];},_33:function _33(t,i){if(!this[$M]||this[$M][Zi](this.viewportBounds)){ return i&&i(), !1; }t=this._2D(), this[WM]();var n,e,s=this[Ab],h=this.limitedBounds,r=s[jt]/this.limitedBounds.width,a=s[Xt]/this[$M][Xt];if(r<=1&&a<=1){ return n=h[ii]>s[ii]?h[ii]:h.right<s[Wt]?s[ii]-(s.right-h.right):s[ii], e=h.top>s.top?h.top:h[$t]<s[$t]?s.top-(s[$t]-h.bottom):s.top, void this[HM](-n*this.scale,-e*this[Ha],this[Ha],!1,i); }var o=a<r,f=Math.max(r,a);o?(n=h.x, (e=h.y+(s.top-h.top)*(1-f)/f)>=h.y?e=h.y:e<h.bottom-s[Xt]/f&&(e=h.bottom-s.height/f)):(e=h.y, (n=h.x+(s[ii]-h.left)*(1-f)/f)>=h.x?n=h.x:n<h[Wt]-s[jt]/f&&(n=h.right-s[jt]/f)), n*=f*=this[Ha], e*=f, this[HM](-n,-e,f,t,i);},checkLimitedBounds:function checkLimitedBounds(t){if(this[YM]||!this.limitedBounds||this[$M][Zi](this.viewportBounds)){ return!1; }this[YM]=!0, this.callLater(function(){this._33(t,function(){this[YM]=!1;}.bind(this));},this);},zoomByMouseEvent:function zoomByMouseEvent(t,i,n,e){var s=this.globalToLocal(t);return k==(typeof i==="undefined"?"undefined":_typeof(i))?this.zoomAt(Math.pow(1.1,i),s.x,s.y,n,e):i?this[jM](s.x,s.y,n,e):this[XM](s.x,s.y,n,e);},resetScale:1,translate:function translate(t,i,n){return this[HM](this.tx+t,this.ty+i,this[Ha],n);},translateTo:function translateTo(t,i,n,e,s){if(n=n&&Math.min(this[Wo],Math.max(this[zM],n)), !e){var h=this._9F[VM](t,i,n);return s&&s(), h;}this._6O()._mW(t,i,n,e,s);},centerTo:function centerTo(t,i,n,e,s){return(!n||n<=0)&&(n=this[Ha]), e===Y&&(e=this._2D()), this[HM](this.width/2-t*n,this[Xt]/2-i*n,n,e,s);},moveToCenter:function moveToCenter(t,i){if(!1!==arguments[2]&&this._9F[KM]()){ return this._9F[Ie]||(i=!1), this.callLater(this[QM][$e](this,t,i,!1)); }var n=this.bounds;this[ZM](n.cx,n.cy,t,i);},zoomToOverview:function zoomToOverview(t,i){if(!1!==arguments[2]&&this._9F[KM]()){ return this._9F._oUQ||(t=!1), this.callLater(this[JM].bind(this,t,i,!1)); }var n=this._9F._1O();n&&(i&&(n[Ha]=Math.min(n[Ha],i)), this[ZM](n.cx,n.cy,n[Ha],t));},_2D:function _2D(){return!!this._9F._oUQ&&(this[qM]===Y||null===this[qM]?UB.ZOOM_ANIMATE:this.zoomAnimation);},zoomAt:function zoomAt(t,i,n,e,s){e===Y&&(e=this._2D()), i===Y&&(i=this.width/2), i=i||0, n===Y&&(n=this[Xt]/2), n=n||0;var h=this.scale;return i=(t=Math.min(this.maxScale,Math.max(this[zM],h*t)))*(this.tx-i)/h+i, n=t*(this.ty-n)/h+n, this[HM](i,n,t,e,s);},zoomOut:function zoomOut(t,i,n,e){return this[tO](1/this[iO],t,i,n,e);},zoomIn:function zoomIn(t,i,n,e){return this[tO](this[iO],t,i,n,e);},_6O:function _6O(){return this._panAnimation||(this[nO]=new uH(this)), this[nO];},onAnimationStart:function onAnimationStart(){},onAnimationEnd:function onAnimationEnd(){},isAnimating:function isAnimating(){return this._panAnimation&&this[nO]._fC();},enableInertia:!0,_oTZ:function _oTZ(t,i){return this._6O()._iP(t||0,i||0);},stopAnimation:function stopAnimation(){this._panAnimation&&this._panAnimation._nK();},getUI:function getUI(t){return BB(t)?this._9F._40(t):this._9F._mE(t);},getUIByMouseEvent:function getUIByMouseEvent(t){return this._9F._40(t);},hitTest:function hitTest(t){return this._9F[Ho](t);},globalToLocal:function globalToLocal(t){return this._9F._8J(t);},toCanvas:function toCanvas(t,i){return this._9F._iH(t,i);},toLogical:function toLogical(t,i){return BB(t)?this._9F._$f(t):this._9F._fU(t,i);},getElementByMouseEvent:function getElementByMouseEvent(t){var i=this._9F._40(t);if(i){ return i.$data; }},getElement:function getElement(t){return BB(t)?this.getElementByMouseEvent(t):this[mM].getById(t);},invalidate:function invalidate(){this._9F._dA();},invalidateUI:function invalidateUI(t){t.invalidate(), this[Nd]();},invalidateElement:function invalidateElement(t){this._9F._43(t);},getUIBounds:function getUIBounds(t){return this._9F._2U(t);},forEachVisibleUI:function forEachVisibleUI(t,i){return this._9F._4Z(t,i);},forEachReverseVisibleUI:function forEachReverseVisibleUI(t,i){return this._9F._10(t,i);},forEachUI:function forEachUI(t,i){return this._9F._fL(t,i);},forEachReverseUI:function forEachReverseUI(t,i){return this._9F._51(t,i);},forEach:function forEach(t,i){return this[mM][Ae](t,i);},getElementByName:function getElementByName(i){var n;return this.forEach(function(t){if(t[Xo]==i){ return n=t, !1; }}), n;},focus:function focus(t){if(t){var i=u[eO]||u[vl],n=u[sO]||u[yl];return this.canvasPanel[hO](), void u[rO](i,n);}this[As].focus();},callLater:function callLater(t,i,n){this._9F._eB(t,i,n);},exportImage:function exportImage(t,i,n){return function(t,i,n,e){var s=t[fo];n=n||s, i=i||1;var h=vU();FG(h.g), h[jt]=n[jt]*i, h.height=n[Xt]*i, t._9F._iF(h.g,i,n);var r=null;try{r=h[aO](e||oO);}catch(t){rU[co](t);}return{canvas:h,data:r,width:h.width,height:h[Xt]};}(this,t,i,n);},setSelection:function setSelection(t){return this[mM][Mn].set(t);},select:function select(t){return this[mM][Mn][fO](t);},unselect:function unselect(t){return this[mM][Mn][cO](t);},reverseSelect:function reverseSelect(t){return this[mM]._selectionModel[uO](t);},selectAll:function selectAll(){var i,t=(i=this)[Bn],n=[];i.graphModel[Ae](function(t){i.isVisible(t)&&i[_O](t)&&n[j](t);}), t.set(n);},unSelectAll:function unSelectAll(){this.selectionModel.clear();},unselectAll:function unselectAll(){this.unSelectAll();},isSelected:function isSelected(t){return this[mM][Mn][Zi](t);},sendToTop:function sendToTop(t){var i,n;(function(t,i){if(i instanceof q$){ i[Ub]()||(n=t, h=(e=i)[xb], e[Yl]()?Z$(n,h):(s=e[mb], Z$(n,h), Z$(n,s))); }else { for(Z$(t,i);i=i[Hi];){Z$(t,i);} }var n,e,s,h;})(this[mM],t), t instanceof q$&&(i=this.getUI(t))&&(n=this._9F._oL)[Pn](i,n[bt]-1);},sendToBottom:function sendToBottom(t){!function(t,i){if(i instanceof q$){ i[Ub]()||(n=t, h=(e=i)[xb], e[Yl]()?J$(n,h):(s=e[mb], J$(n,h), J$(n,s))); }else { for(J$(t,i);i=i.parent;){J$(t,i);} }var n,e,s,h;}(this[mM],t);},moveElements:function moveElements(t,i,n){var e=[],s=new GB();return jN(t,function(t){t instanceof eW?e.push(t):t instanceof q$&&s.add(t);}), this._g0(e,i,n,s);},_g0:function _g0(t,n,e,i){return!(0==n&&0==e||0==t.length&&0==i[bt]||(0!=t.length&&(s=this._4N(t), i=this._4O(s,i), jN(s,function(t){var i=t[dv];i?t[dO](i.x+n,i.y+e):t[dO](n,e);})), i&&i[bt]&&this._g1(i,n,e), 0));var s;},_g1:function _g1(t,i,n){t.forEach(function(t){t.move(i,n);});},_4O:function _4O(i,n){return this[gb].forEach(function(t){t instanceof q$&&this[lO](t)&&i[Zi](t[xb])&&i[Zi](t[mb])&&n.add(t);},this), n;},_4N:function _4N(t){var i=new GB();return jN(t,function(t){this.isMovable(t), i.add(t), Q$(t,i,this._movableFilter);},this), i;},reverseExpanded:function reverseExpanded(t){if(!t[RL]()){ return!1; }var i=t[jl](!0);return!!i&&(!1!==i[bO]()?(this.invalidate(), !0):void 0);},_35:null,_1B:null,beforeInteractionEvent:function beforeInteractionEvent(t){return this._1B[g](t);},onInteractionEvent:function onInteractionEvent(t){this._1B.onEvent(t);},addCustomInteraction:function addCustomInteraction(t){this._35[vO](t);},removeCustomInteraction:function removeCustomInteraction(t){this._35[yO](t);},enableWheelZoom:!0,enableTooltip:!0,getTooltip:function getTooltip(t){return t[Kb]||t.name;},updateViewport:function updateViewport(){this._9F._88();},destroy:function destroy(){var t;this._5C(new uk(this,Ds,!0,this[ju])), this[ju]=!0, this[hM]&&(t=this[hM], u[Fe](rM,t)), this._35.destroy(), this[gb]=new _W();var i=this[gO];this._9F._jG(), i&&(i.innerHTML='');},onPropertyChange:function onPropertyChange(i,n,e){return this._$x[Ji](function(t){t.kind==i&&n[x](e,t);});},removeSelection:function removeSelection(){var t=this[Bn][Un];return!(!t||0==t[bt])&&(t=t[vt](), this.removeElement(t), t);},removeSelectionByInteraction:function removeSelectionByInteraction(n){var t=this[Bn][Un];if(!t||0==t[bt]){ return!1; }rU[EO](xO+t.length,function(){var t,i=this.removeSelection();i&&(t=new eY(this,eY.ELEMENT_REMOVED,n,i), this[CM](t));},this);},createShapeByInteraction:function createShapeByInteraction(t,i,n,e){var s=new vG(i);2<i[bt]&&s.closePath();var h=this.createShapeNode(mO,s,n,e);this[SM](h,t);var r=new eY(this,eY[AM],t,h);return this[CM](r), h;},createLineByInteraction:function createLineByInteraction(t,i,n,e){var s=new vG(i),h=this[gM](pO,s,n,e);h[sl](rU[TO][xp],null), h.setStyle(rU[TO].SHAPE_FILL_GRADIENT,null), h[sl](rU[TO][mp],!0), this[SM](h,t);var r=new eY(this,eY.ELEMENT_CREATED,t,h);return this[CM](r), h;},createEdgeByInteraction:function createEdgeByInteraction(t,i,n,e,s,h){var r,a,o=this[wO](LO,t,i);s&&o.setStyle(rU.Styles.EDGE_FROM_PORT,s), h&&o[sl](rU[TO][qx],h), e?o[nv]=e:(r=this[MO], a=this.edgeType, this[OO]&&(r=this[OO].uiClass||r, a=this[OO][ov]||a), r&&(o[fb]=r), a&&(o[ov]=a)), this[SM](o,n);var f=new eY(this,eY[AM],n,o);return this[CM](f), o;},onElementCreated:function onElementCreated(t,i,n){!t[Hi]&&this[Vv]&&(t[Hi]=this.currentSubNetwork);},allowEmptyLabel:!1,startLabelEdit:function startLabelEdit(i,n,t,e){t.startEdit(e.x,e.y,n[tn],this[BT](i,LW[km]),function(t){return this.onLabelEdit(i,n,t,n[Hi]);}[$e](this));},onLabelEdit:function onLabelEdit(t,i,n,e){if(!n&&!this[SO]){ return rU[AO](IO), !1; }if(Ju==i[Xo]){if(t[Xo]==n){ return!1; }t[Xo]=n;}else{ !1===e._hH(i,n)&&(i[tn]=n, this[CO](t)); }},setInteractionMode:function setInteractionMode(t,i){this.interactionMode=t, this[OO]=i;},upSubNetwork:function upSubNetwork(){return!!this._3H&&(this[Vv]=iH(this._3H));},_$r:!1,invalidateVisibility:function invalidateVisibility(){this._$r=!0, this[Nd]();},getBundleLabel:function getBundleLabel(t){var i=t[jl](!0);return i&&i.agentEdge==t?PO+i.bindableEdges[bt]:null;},zoomAnimation:null,pauseRendering:function pauseRendering(t,i){(this[FO]||i)&&this._9F._7V(t);},_5D:Y,enableRectangleSelectionByRightButton:!0,getLinkablePoints:function getLinkablePoints(t,i,n){return t[RO];},snapToGrid:!1,enableGuideLine:!1,guideLineStyles:null},{gridLineStyles:{get:function get(){return this._gridLineStyles;},set:function set(t){var i;this[DO]=t, (i=this._gridBackground)&&(i.setStyles(this.gridLineStyles), i[NO]({scale:this[Ha],tx:this.tx,ty:this.ty}));}},showGrid:{get:function get(){return!!this[BO];},set:function set(h){!function(t){if(!1===h){ return t._gridBackground&&t[BO].remove(); }var i;function n(){i.update({scale:t[Ha],tx:t.tx,ty:t.ty});}function e(t){kd===t[Ai]&&n();}function s(t){t[kO]&&t.parentElement[Rn](t);}t[BO]||(i=t[BO]=vW(t.canvasPanel,t[UO]), t[GO].on(e), t[BO].remove=function(){s(i[$O]), s(i[WO]), t.propertyChangeDispatcher.un(e), t._gridBackground=!1;}, n());}(this);}},center:{get:function get(){return this[xl](this[gO].clientWidth/2,this[gO][Ol]/2);}},visibleFilter:{get:function get(){return this[Hl];},set:function set(t){this._jTFilter=t, this.invalidateVisibility();}},topCanvas:{get:function get(){return this._9F._topCanvas;}},propertyChangeDispatcher:{get:function get(){return this._$x;}},listChangeDispatcher:{get:function get(){return this._1G;}},dataPropertyChangeDispatcher:{get:function get(){return this._$a;}},selectionChangeDispatcher:{get:function get(){return this._$q;}},parentChangeDispatcher:{get:function get(){return this._15;}},childIndexChangeDispatcher:{get:function get(){return this._$n;}},interactionDispatcher:{get:function get(){return this._1B;}},cursor:{set:function set(t){this[As][jn][HO]=t||this._35[YO];},get:function get(){return this.canvasPanel[jn][HO];}},interactionMode:{get:function get(){return this._35[jO];},set:function set(t){var i=this[XO];i!=t&&(this._35[zO]=t, this._5C(new uk(this,XO,t,i)));}},scaleStep:{get:function get(){return this._9F._fO;},set:function set(t){this._9F._fO=t;}},maxScale:{get:function get(){return this._9F._hY;},set:function set(t){this._9F._hY=t;}},minScale:{get:function get(){return this._9F._i0;},set:function set(t){this._9F._i0=t;}},scale:{get:function get(){return this._9F[je];},set:function set(t){return this._9F[je]=t;}},tx:{get:function get(){return this._9F._tx;}},ty:{get:function get(){return this._9F._ty;}},styles:{get:function get(){return this._kZ;},set:function set(t){this._kZ=t;}},selectionModel:{get:function get(){return this[mM][Mn];}},graphModel:{get:function get(){return this[mM];},set:function set(t){if(this[mM]==t){ return!1; }var i=this[mM],n=new uk(this,gb,i,t);if(!1===this._1T(n)){ return!1; }null!=i&&(i[GO][VO](this._$x,this), i.listChangeDispatcher.removeListener(this._1G,this), i[KO][VO](this._$a,this), i[An].removeListener(this._15,this), i[In].removeListener(this._$n,this), i.selectionChangeDispatcher[VO](this._$q,this)), this[mM]=t, this[mM]&&(this[mM].propertyChangeDispatcher[Ji](this._$x,this), this[mM].listChangeDispatcher[Ji](this._1G,this), this._mCModel[KO][Ji](this._$a,this), this[mM].parentChangeDispatcher[Ji](this._15,this), this[mM][In].addListener(this._$n,this), this[mM][Ln][Ji](this._$q,this)), this._9F&&this._9F._mU(), this._5C(n);}},count:{get:function get(){return this[mM][bt];}},width:{get:function get(){return this[gO].clientWidth;}},height:{get:function get(){return this[gO][Ol];}},viewportBounds:{get:function get(){return this._9F[QO];}},bounds:{get:function get(){return this._9F._52();}},canvasPanel:{get:function get(){return this._9F._oW4;}},html:{get:function get(){return this._9F._oW4[_o];}},navigationType:{get:function get(){return this._9F._85;},set:function set(t){this._9F._45(t);}},_3H:{get:function get(){return this._mCModel._3H;}},currentSubNetwork:{get:function get(){return this[mM][Vv];},set:function set(t){this[mM].currentSubNetwork=t;}},limitedBounds:{get:function get(){return this._limitedBounds;},set:function set(t){if(JB.equals(t,this[ZO])){ return!1; }this[ZO]=t?new JB(t):null;}},ratio:{get:function get(){return this._9F[ha];}},delayedRendering:{get:function get(){return this._5D===Y?UB[JO]:this._5D;},set:function set(t){t!=this[FO]&&(this._5D=t, this[qO](!1,!0));}},fullRefresh:{get:function get(){return this._9F[Gd];},set:function set(t){this._9F[Gd]=t;}},enableCrossLine:{get:function get(){return null!=this._9F._e1;},set:function set(t){t!=this.enableCrossLine&&(this._9F[tS](t), this[Nd]());}},currentUIs:{get:function get(){return this._9F._dT;}}}), tH[_].snapSpacing=5, UB[JO]=!0, UB[iS]=60, UB.GROUP_MIN_HEIGHT=60, nH[_]={_d6:function _d6(){if(!this._64()){ return qN(this,nH,gp,arguments); }},initialize:function initialize(){qN(this,nH,ig), this[Cp]();},_oUV:function _oUV(){this._n9=new vG(), this[Fp]=new BW(this._n9), this[Fp].layoutByPath=!1, this[UT](this.shape,0), this[Eo]=this[Fp];},checkBody:function checkBody(){if(this._64()){ return this._25=!0, this[Fp]?(this[Fp][ol]=!0, this[Eo]=this[Fp]):(this[nS](), IW.initBindingProperties(this)), void(this[Yo]&&(this.image[ol]=!1)); }this[Yo]?(this[Yo][ol]=!0, this.body=this[Yo]):this[eS](), this[Fp]&&(this[Fp][ol]=!1);},_64:function _64(){return this.$data._jR()&&this.$data[_b];},_n9:null,_25:!0,_66:function _66(){this._1I=!0, this._25=!0;},doValidate:function doValidate(){if(this._25&&this._64()){if(this._25=!1, this[Fp][Dy](), this[Pu].groupImage){this.shape[tn]=this[Pu][ry];var t=this._26();return this.shape[Wy]=t.x+t[jt]/2, this[Fp][ep]=t.y+t[Xt]/2, this[Fp][Bd]={width:t.width,height:t[Xt]}, $W.prototype[YT][x](this);}this.shape.size=null, this[Fp][tn]=this._n9, this[Fp].offsetX=0, this[Fp][ep]=0;var i,n=this._8Y(this.$data[hy]);this._n9[It](), n instanceof JB?(i=this.getStyle(LW[ZE])||0, aW(this._n9,n.x,n.y,n[jt],n[Xt],n.rx||i,n.ry||i)):n instanceof AU?(e=this._n9, s=n.r||1, h=n.cx||0, r=n.cy||0, a=s*Math.tan(Math.PI/8), o=s*Math.sin(Math.PI/4), e[La](h+s,r), e[Av](h+s,r+a,h+o,r+o), e[Av](h+a,r+s,h,r+s), e.quadTo(h-a,r+s,h-o,r+o), e[Av](h-s,r+a,h-s,r), e.quadTo(h-s,r-a,h-o,r-o), e[Av](h-a,r-s,h,r-s), e[Av](h+a,r-s,h+o,r-o), e[Av](h+s,r-a,h+s,r)):n instanceof IU&&oW(this._n9,n), this._n9._71=!0, this[Fp].invalidateData();}var e,s,h,r,a,o;return $W.prototype[YT][x](this);},_7D:function _7D(t,i,n,e,s){switch(k!=(typeof e==="undefined"?"undefined":_typeof(e))&&(e=-i/2), k!=(typeof s==="undefined"?"undefined":_typeof(s))&&(s=-n/2), t){case aU.GROUP_TYPE_CIRCLE:return new AU(e+i/2,s+n/2,Math.max(i,n)/2);case aU[sS]:return new IU(e+i/2,s+n/2,i,n);default:return new JB(e,s,i,n);}},_26:function _26(){return this._8Y(null);},getItemBounds:function getItemBounds(t,i){return(i=i||{}).x=t.$x+t._hI.x, i.y=t.$y+t._hI.y, i[jt]=t._hI[jt], i[Xt]=t._hI[Xt], i;},_8Y:function _8Y(t){
var this$1 = this;
var i=this[tn],n=i[Ko],e=i[sy],s=UB[iS],h=UB.GROUP_MIN_HEIGHT;if(e&&(k==_typeof(e[jt])&&(s=e[jt]), k==_typeof(e[Xt])&&(h=e.height), v=e.x, y=e.y), !i[E]()){ return this._7D(t,s,h,v,y); }var r,a=this.$data._hF._l1;t!=aU[hS]&&t!=aU[sS]||(r=[]);for(var o=new JB(),f={},c=0,u=a[bt];c<u;c++){var _,d=a[c];!this$1[Gl].isVisible(d)||d instanceof q$||(_=this$1[Gl][Ss](d))&&(f=this$1[rS](_,f), o[qt](f.x,f.y,f[jt],f[Xt]), r&&(r[j]({x:f.x,y:f.y}), r[j]({x:f.x+f[jt],y:f.y}), r[j]({x:f.x+f.width,y:f.y+f.height}), r[j]({x:f.x,y:f.y+f[Xt]})));}if(o[Pt]()){ return this._7D(t,s,h,v,y); }var l=this[Pu][dv];l?l[aS]&&(l.invalidateFlag=!1, v===Y&&(l.x=o.cx), y===Y&&(l.y=o.cy)):l=this[Pu].$location={x:o.cx,y:o.cy}, n&&o.grow(n), k==(typeof v==="undefined"?"undefined":_typeof(v))&&v+l.x<o.x&&(o[jt]+=o.x-(v+l.x), o.x=v+l.x, r&&r[j]({x:o.x,y:o.cy})), k==(typeof y==="undefined"?"undefined":_typeof(y))&&y+l.y<o.y&&(o[Xt]+=o.y-(y+l.y), o.y=y+l.y, r&&r[j]({x:o.cx,y:o.y}));var b,v=l.x,y=l.y;if(t!=aU.GROUP_TYPE_CIRCLE){ return t==aU[sS]?((b=function(t,i){for(var n,e=(i=i||function(t){for(var i,n=t[bt],e=new JB(),s=0;s<n;s++){i=t[s], e.add(i.x,i.y);}return e;}(t))[jt]/i[Xt],s=[],h=t[bt],r=0;r<h;r++){n=t[r], s[j]({x:n.x,y:n.y*e});}var a=CU(s);if(a){ return new IU(a.cx,a.cy/e,2*a.r,2*a.r/e); }}(r,o)).cx-=v, b.cy-=y, b[jt]<s&&(b.cx+=(s-b.width)/2, b[jt]=s), b.height<h&&(b.cy+=(h-b[Xt])/2, b.height=h)):((b=o).width<s&&(o[jt]=s), o.height<h&&(o[Xt]=h), o[Rb](-v,-y)), b; }(b=CU(r)).cx-=v, b.cy-=y;var g=Math.max(s,h)/2;return b.r<g&&(b.cx+=g-b.r, b.cy+=g-b.r, b.r=g), b;},_$z:function _$z(t,i,n){if(!this._64()){ return qN(this,nH,oS,arguments); }var e=this._d5[kT](this,t,i,n),e=MW[kT](this,t,i,n)||e;return e=AW[kT](this,t,i,n)||e, IW[kT](this,t,i,n)||e;}}, ZN(nH,$W), rU[fS]=nH, UB.NAVIGATION_IMAGE_LEFT=null, UB[cS]=null;var eH={position:Md,"text-align":Ey},sH={padding:uS,transition:_S},hH={position:Id,display:dS};function rH(t,i,n,e,s,h,r){var a=S[Hn](Yn);a.className=lS, Sk(a,eH), i&&Sk(a,i);var o=S.createElement(vo);return h&&(EB&&(o[O]=h), Bk||(o[bs]=h)), o[Xo]=r, o.src=n, Sk(o,sH), s&&Sk(o,s), e&&Ak(o,hl,bS), a[vS]=o, a[re](o), t[re](a), a;}function aH(h,t){var i,n,e;UB[yS]||((n=(i=vU(20,40)).g)[Ha](n.ratio,n.ratio), n[La](16,4), n[Ma](4,20), n[Ma](16,36), n[Ka]=3, n[Gf]=rr, n[$f]=rr, n[Na]=Ja, n[Do]=oy, n[No]=5, n[Za](), UB.NAVIGATION_IMAGE_LEFT=i[aO](), (e=vU(i[Xt],i[jt],!1)).g.translate(e.width,0), e.g.rotate(Math.PI/2), e.g[Io](i,0,0), UB[cS]=e[aO]()), this[gS]=h, function(t,i){this[ES]=S.createElement(Yn), this[ES][_l]=xS, Sk(this[ES],{"background-color":ly,overflow:go,"user-select":hr,position:Id}), this[mS]=rH(this[ES],{width:Ad},UB.NAVIGATION_IMAGE_TOP,!1,null,i,xy), this[pS]=rH(this[ES],{height:Ad},UB[yS],!1,hH,i,ii), this._right=rH(this[ES],{height:Ad,right:_d},UB[yS],!0,hH,i,Wt), this[TS]=rH(this._navPane,{width:Ad,bottom:_d},UB[cS],!0,null,i,$t), t.appendChild(this[ES]);}.call(this,t,function(t){var i,n;AB(t);var e=t.target,s=e[Xo];if(ii==s){ i=1; }else if(Wt==s){ i=-1; }else if(xy==s){ n=1; }else{if($t!=s){ return; }n=-1;}EB&&(e[_l]=wS, setTimeout(function(){e[_l]='';},100)), AB(t), h._mC[LS](i,n);}), this._3L(t.clientWidth,t[Ol]);}function oH(t,i){this._oUaseCanvas=t, this[MS](i,t);}function fH(t,i){JN(this,fH,arguments);}function cH(t,i){var n,e;this[gS]=t, this._kU=(n=i, FG((e=vU(!0)).g), e.onselectstart=function(){return!1;}, n[re](e), e.className=p$, e), this.g=this._kU.g, this._oT6=new GB();}Ik(OS,"opacity:0.7;vertical-align:middle;"), Ik(".Q-Graph-Nav img:hover,img.hover",SS), EB||(Ik(AS,IS+Ok(CS)+PS), Ik(FS,RS+Ok(CS)+DS)), aH[_]={_d8:function _d8(t,i){if(t._jT==i){ return!1; }t._jT=i, t[jn][yo]=i?"visible":go;},_3L:function _3L(t,i){var n=i/2-this[pS]._img[Ol]/2+ra;this[pS][vS][jn].top=n, this._right[vS].style.top=n, this._navPane.style[jt]=t+ra, this[ES][jn][Xt]=i+ra;},_oT5:function _oT5(t,i,n,e){this._d8(this._top,t), this._d8(this[pS],i), this._d8(this._oUottom,n), this._d8(this._right,e);},_jG:function _jG(){var t=this[ES][_o];t&&t[Rn](this._navPane);},_lB:function _lB(){var t,i,n,e,s,h,r=this._oUaseCanvas._mC;r&&((t=r[fo])[Pt]()?this._oT5(!1,!1,!1,!1):(n=(i=r[Ab]).y>t.y+1, e=i.x>t.x+1, s=i[$t]<t[$t]-1, h=i.right<t[Wt]-1, this._oT5(n,e,s,h)));}}, Ik(NS,BS), Ik(kS,"background-color: #7E7E7E;"+Ok(CS)+": background-color 0.2s linear;"), Ik(".Q-Graph-ScrollBar--V","width: 8px;right: 0px;"), Ik(".Q-Graph-ScrollBar--H","height: 8px;bottom: 0px;"), Ik(".Q-Graph-ScrollBar--V.Both",US), Ik(".Q-Graph-ScrollBar--H.Both",GS), EB||(Ik($S,IS+Ok(CS)+WS), Ik(".Q-Graph:hover .Q-Graph-ScrollPane",RS+Ok(CS)+":opacity 0.3s linear;")), oH[_]={_jG:function _jG(){this._verticalDragSupport._jG(), this._horizontalDragSupport._jG(), delete this._verticalDragSupport, delete this[HS], this._nB[_o]&&this._nB.parentNode.removeChild(this._nB);},_nB:null,_oUW:null,_90:null,init:function init(t,i){var n=S[Hn](Yn);n.className=YS, Sk(n,{width:Ad,height:Ad,position:Id});var e=S[Hn](Yn);e.className="Q-Graph-ScrollBar Q-Graph-ScrollBar--V";var s=S[Hn](Yn);s.className="Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n[re](e), n[re](s), t[re](n), this._nB=n, this._90=s, this._oUW=e, s.isH=!0;var r=this,h={onstart:function onstart(t,i){i[A].add(wS);},onrelease:function onrelease(t,i){i.classList[B](wS);},ondrag:function ondrag(t,i){var n,e,s,h=r._oUaseCanvas._mC;!h||(e=(n=i.isH)?t.dx:t.dy)&&i[Ha]&&(s=h[Ha]/i.scale, n?h[Wa](-s*e,0):h[Wa](0,-s*e), rU[cM](t));},enddrag:function enddrag(t,i){var n,e,s=r[gS]._mC;s&&s[jS]&&(e=(n=i.isH)?t.vx:t.vy, .1<Math.abs(e)&&(e*=s.scale/i[Ha], n?s[LS](-e,0):s[LS](0,-e)));}};this[XS]=new Yk(e,h), this._horizontalDragSupport=new Yk(s,h);},_3L:function _3L(){var t=this[gS]._mC;t&&t.callLater(this._lB.bind(this));},_lB:function _lB(){var t=this[gS]._mC;if(t){var i=t[fo];if(i[Pt]()){ return this._4J(!1), void this._4L(!1); }var n=t[Ab],e=t.width,s=t.height,h=1/t[Ha],r=n.x>i.x+h||n[Wt]<i.right-h,a=n.y>i.y+h||n.bottom<i.bottom-h,o=r&&a;o?(pB(this[zS],VS), pB(this._90,VS)):(TB(this[zS],VS), TB(this._90,VS)), this._4J(r,n,i,o?e-10:e), this._4L(a,n,i,o?s-10:s);}},_4J:function _4J(t,i,n,e,s){if(!t){ return this._90[jn].display=hr, void(this._90[Ha]=0); }var h=Math.min(i.x,n.x),r=Math.max(i.right,n[Wt]),a=e/(r-h);this._90.scale=a, this._90.style.left=parseInt((i.x-h)*a)+ra, this._90[jn].right=parseInt((r-i.right)*a)+ra, this._90.style[ad]='';},_4L:function _4L(t,i,n,e){if(!t){ return this[zS][jn].display=hr, void(this._oUW.scale=0); }var s=Math.min(i.y,n.y),h=Math.max(i[$t],n.bottom),r=e/(h-s);this[zS][Ha]=r, this._oUW[jn].top=parseInt((i.y-s)*r)+ra, this._oUW[jn][$t]=parseInt((h-i[$t])*r)+ra, this[zS][jn][ad]='';}}, fH[_]={shape:null,initialize:function initialize(){qN(this,fH,ig), this[eS](), FW[$T](this);},_oUT:function _oUT(){this.image=new UW(this[Pu][Ul]), this.addChild(this[Yo],0), this.body=this.image;},invalidateShape:function invalidateShape(){this[Yo].invalidateData(), this[ob]();},_$z:function _$z(t,i,n){var e=this._d5[kT](this,t,i,n),e=MW.onBindingPropertyChange(this,t,i,n)||e;return FW[kT](this,t,i,n)||e;},doValidate:function doValidate(){this.body&&(this.image[tn]=this[tn].path, this.body[bu]=null!=this._2M, this[Eo][mv]=this._2M);var t=this[Pu][dv],i=0,n=0;t&&(i=t.x, n=t.y);var e=this.$x!=i||this.$y!=n;return e&&(this.$invalidateBounds=!0), this.$x=i, this.$y=n, DW[_][YT][x](this)||e;},getLinkablePorts:function getLinkablePorts(){return this[tn][zL];},getLinkableBounds:function getLinkableBounds(){return this[Ow];},getDefaultPortPoint:function getDefaultPortPoint(t){return ak(ik.CENTER_MIDDLE,t||this[VL]());},getPortPoint:function getPortPoint(t,i){return t?((i=i||this[VL]())[hw]?(n=ak(t,i[hw]), i[Rt]&&(n=fU(n.x,n.y,i[Rt],i[KL]||0,i[QL]||0)), n.x+=i.tx||0, n.y+=i.ty||0):n=ak(t,i), n[KS]=t, n):this[ZL](i);var n;},getPortPoints:function getPortPoints(){var t=this.getLinkablePorts();if(t&&Array[G](t)){var i=[],n=this[VL]();return t[Ae](function(t){i[j](this[lL](t,n));}.bind(this)), i;}}}, ZN(fH,DW), DB(fH[_],{path:{get:function get(){return this[tn][Ul];}},length:{get:function get(){return this[tn][bt];}}}), fH[_][Fr]=function(t,i,n){var e=this._jU(t,i),s=this.data,h=gG(this.path,e.x,e.y,this.data.addSegmentType,n);if(!h){ return!1; }s.pathSegments=h[Mv];}, cH.prototype={_nD:function _nD(){this._kU[jn].visibility=ol;},_lC:function _lC(){this._kU[jn][yo]=go;},clear:function clear(){this[QS][It](), this._dA();},contains:function contains(t){return t instanceof Object&&t.id&&(t=t.id), this._oT6[Mt](t);},_67:function _67(t){G$[sl](this._kU,hl,t?rl+t[Pb](q)+")":'');},addDrawable:function addDrawable(t,i){if(i){var n={id:++sB,drawable:t,scope:i};return this[QS].add(n), n;}return t.id||(t.id=++sB), this._oT6.add(t), t;},removeDrawable:function removeDrawable(t){if(!t.id){ return this[QS][At](t); }this[QS].remove(t);},_oT6:null,invalidate:function invalidate(){this._dA();},_dA:function _dA(){this[gS]._71||this._lA();},_jW:function _jW(t,i){this._kU.setSize(t,i);},_lA:function _lA(){
var this$1 = this;
var t=this[gS][je],i=this.g;i._mR(), i[$a](), this._oUaseCanvas[al](i);for(var n=this[QS]._l1,e=0,s=n[bt];e<s;e++){i[$a](), i[Ya](), this$1._hJ(i,n[e],t), i.restore();}i[qa]();},_hJ:function _hJ(t,i,n){i instanceof Function?i(t,n):i[ZS]instanceof Function&&i[Vi]&&i[ZS][x](i[Vi],t,n);}}, UB[JS]=!0;var uH=function uH(t){this._mC=t;};function _H(t){this[Gl]=t, this.topCanvas=t.topCanvas;}UB[qS]=600, UB[tA]=nU[iA], uH[_]={_mC:null,_g3:null,_iP:function _iP(t,i,n){this._nK();var e=Math.abs(t/2),s=Math.abs(i/2),h=Math.min(UB.ANIMATION_MAXTIME,.6*Math.max(e,s)*1e3);if(h<10){ return!1; }var r=t*h/3,a=i*h/3;this._mW(this._mC.tx+r,this._mC.ty+a,0,{duration:h,animationType:function animationType(t){return-(2*Math.pow(t,1.5)-3*t);}},n);},_8C:function _8C(t,i,n,e,s){this._g3&&this._g3._nK(), s&&(this[nA]=!0, this._mC[qO](!0)), this._5E(), this._g3=new eU(t,this,i,n), this._g3._7P=this._7P[$e](this), this._g3._mF(e);},_5E:function _5E(){this._mC[eA]();},_7P:function _7P(){this[nA]&&(this._mC.pauseRendering(!1), delete this[nA]), this._mC[sA]();},_fC:function _fC(){return this._g3&&this._g3._fC();},_nK:function _nK(){this._g3&&this._g3._nK();},_kH:function _kH(t,i,n,e){var s=this._fromTX+(this._toTX-this[hA])*t,h=this[rA]+(this[aA]-this._fromTY)*t,r=this[oA]+(this[fA]-this[oA])*t;this._mC[HM](s,h,r,this.toInt);},_mW:function _mW(t,i,n,e,s){this._nK();var h,r,a,o,f,c,u=this._mC,_=u.scale;n<=0&&(n=_), t==u.tx&&i==u.ty&&n==_||(e instanceof Object&&(c=e[cA], h=e[uA], r=e.animationType), a=u.tx, o=u.ty, c=c||(n!=_?(f=_<n?n/_:_/n, 60*(Math.log(f)/Math.log(1.3))):$B(t,i,a,o)/2), h=h||UB.ANIMATION_MAXTIME, r=r||UB[tA], c=Math.min(h,c), this[hA]=a, this[rA]=o, this[oA]=_, this._toTX=t, this[aA]=i, this._toScale=n, this._8C(this._kH,c,r,s,n!=_));}}, UB[_A]=8, UB[dA]=4, UB[lA]=30, UB.INTERACTION_ROTATE_HANDLER_SIZE_DESKTOP=20;var dH=(Math.PI, 0);function lH(t){t[bA]&&vH(t);}_H[_]={element:null,_$p:!1,setCurrentElement:function setCurrentElement(t,i){this[vA]=t, i&&this[yA]();},onDataPropertyChange:function onDataPropertyChange(t){},addDataPropertyChangeListener:function addDataPropertyChangeListener(){this._$p||(this._$p=!0, this[Gl].dataPropertyChangeDispatcher.addListener(this._1K,this));},removeDataPropertyChangeListener:function removeDataPropertyChangeListener(){this._$p&&(this._$p=!1, this[Gl][gA].removeListener(this._1K,this));},_1K:function _1K(t){this[vA]&&t.source==this[vA]&&this[EA](t);},onElementRemoved:function onElementRemoved(t,i){var n,e;this[vA]&&(t==this[vA]||MB(t)&&(n=this.element, e=!1, jN(t,function(t){if(n==t){ return!(e=!0); }}), e))&&this.destroy(i);},onClear:function onClear(t){this[vA]&&this[Ds](t);},destroy:function destroy(t){delete this[vA], this[xA](), this[mA](), this[pA]=null;},invalidate:function invalidate(){this[TA].invalidate();},removeDrawable:function removeDrawable(){this[wA]&&(this[TA][mA](this[wA]), delete this._nMableId, this[Nd]());},drawableList:null,addDrawable:function addDrawable(){this[wA]||(this[wA]=this[TA][LA](this[ro],this).id, this[Nd]());},isShowing:function isShowing(){return this[wA];},draw:function draw(i,n){this[pA]&&this.drawableList.forEach(function(t){t[ro](i,n);}), this.doDraw(i,n);},doDraw:function doDraw(t,i){},escapable:!0,onkeydown:function onkeydown(t,i){this[MA]&&27==t.keyCode&&(AB(t), this[Ds](i));}}, rU[OA]=_H;var bH={strokeStyle:SA,stroke:1};function vH(t,i){!t[bA]&&i&&i[bt]&&(t[bA]=function(i,t){var n;this._guideLines&&this._guideLines[bt]&&(i.beginPath(), this[AA][Ae](function(t){i[La](t[0],t[1]), i[Ma](t[2],t[3]);}), (n=this[IA])?(i[Na]=n[Na]||bH[Na], i.lineWidth=(n[Za]||bH.stroke)/t):(i[Na]=bH[Na], i.lineWidth=bH[Za]/t), i[Za]());}[$e](t), t.topCanvas[LA](t._guideLineDrawable)), t[AA]=i, t.topCanvas[Nd]();}function yH(t,i,n){var e,s,h=i[Ha];if(!0===t){ return i[BO]&&i._gridBackground[CA]?i[BO][CA](h,n):(e=100/h, ((s=Math.max(1,Math.pow(10,Math[V](Math[vy](e)))))/2<e?s:s/5<e?s/2:s/5)/5); }var r=t;return r instanceof Function&&(r=r(h,n)), r&&k==(typeof r==="undefined"?"undefined":_typeof(r))?r:void 0;}function gH(e,t,i){e/5<t&&(t=e/5);var s,h,r=t;if(i[Ae](function(t){var i=e*Math[rr](t/e),n=Math.abs(t-i);n<r&&(r=n, s=i, h=t);}), s!==Y){ return{minD:r,d:s-h,value:s}; }}function EH(t,i,n,e,s,h,r){var a=function(t,i,n,e,s,h){var r,a,o,f;t.snapToGrid&&(r=t[PA], e&&(a=(o=yH(r,t,Vt))&&gH(o,h,e)), s&&(f=(o=yH(r,t,Kt))&&gH(o,h,s)));var c,u,_,d,l=t[FA]&&(c=t, u=i, _=[], d=new Map(), u.forEach(function(t){for(;t&&!d.has(t);){d.set(t,!0), t=K$(t);}}), c.currentUIs[Ae](function(t){var i=t[tn];!d.has(i)&&i instanceof rU[vM]&&t[Ow]&&_[j](t.bodyBounds);}), _);if(!l||!l[bt]){ return{dx:a&&a.d,dy:f&&f.d}; }var y,g,b,v,E,x=(y=l, g=n, b=s, v=f, E=h, {x:e&&m(e,!1,a),y:b&&m(b,!0,v)});function m(t,i,n){var e,s,o=[];rM!==g[Pi]&&(o=o[R](y.map(function(t){return i?t.y+t[Xt]/2:t.x+t[jt]/2;}))), o=o[R](y.map(function(t){return i?t.y:t.x;})).concat(y.map(function(t){return i?t.y+t[Xt]:t.x+t[jt];})), n?(e=n[RA], s=n[P]):e=E;var h,r,a,f,c,u,_=function(t,s,h){var r,a=[];if(o[Ae](function(n,e){t[Ae](function(t){var i=Math.abs(t-n);if(!(s<i)){ return i<s||!a.length?(a[0]=e, a.length=1, h=n, r=t, void(s=i)):void(h===n&&a[j](e)); }});}), a[bt]){ return{list:a,alignValue:r,matchedValue:h}; }}(t,e,s);if(_&&_.list[bt]){var d=_.list.map(function(t){for(;t&&t>=y[bt];){t-=y.length;}return y[t];})[R](g),l=(f=!i, d[Ae](function(t){c=c===Y?b(t):Math.min(c,b(t)), u=u===Y?v(t):Math.max(u,v(t));}), {from:c,to:u});return{value:_.matchedValue,d:_[DA]-_[NA],points:(h=_[DA], r=l[Gb], a=l.to, i?[r,h,a,h]:[h,r,h,a])};}function b(t){return f?t.y:t.x;}function v(t){return f?t.y+t.height:t.x+t[jt];}}var p=[],T=0,w=0;return x.x?(T=x.x.d, p.push(x.x[ks])):a&&(T=a.d), x.y?(w=x.y.d, p.push(x.y[ks])):f&&(w=f.d), T||w?{guideLines:p,dx:T,dy:w}:void 0;}(t,n,i,h,r,t[BA]/t[Ha]);return a?(vH(t,a.guideLines), a.dx&&(e+=a.dx), a.dy&&(s+=a.dy)):lH(t), {x:e,y:s};}function xH(t,i){this[kA]=t, this[YO]=i||UA;}function mH(t,i){if(t.anchorPosition){ return ok(t.anchorPosition,i[jt],i[Xt]); }}function pH(t,i,n,e){var s;t.rotate&&(n=(s=oU(n,e,t[Rt])).x, e=s.y), t.x=i.x+n, t.y=i.y+e;}function TH(t,i){return new tk(t.y-i.y,t.x-i.x,i.y+i[Xt]-t.y-t[Xt],i.x+i[jt]-t.x-t.width);}function wH(t,i){return{x:t.x+i[ii],y:t.y+i.top,width:t[jt]-i[ii]-i[Wt],height:t[Xt]-i.top-i[$t]};}function LH(t,i){var n=qB(i);return XH(t)||(t[Rt]&&(n=uU(n,t[Rt])), n.x+=t.x, n.y+=t.y), n;}function MH(t,i,n,e,s){var h,r,a,o,f,c,u,_,d,l;return s&&(n=(h=oU(n,e,-s)).x, e=h.y), r=e, a=t.x, o=t.y, f=t[jt], c=t[Xt], u=t[WA]||1, _=t[HA]||1, d=i[0], l=i[i.length-1], !n||ci!==d&&fi!==d||(ci===d?f+=n:(a+=n, f-=n), Math.abs(f)<u&&(f=f<0?-u:u), f<0&&(a+=f, f=-f, d=fi===d?"r":fi)), !r||_i!==l&&ui!==l||(_i===l?c+=r:(o+=r, c-=r), Math.abs(c)<_&&(c=c<0?-_:_), c<0&&(o+=c, c=-c, l=ui===l?"b":ui)), {x:a,y:o,width:f,height:c,position:d+l};}function OH(t){JN(this,OH,arguments);}function SH(t){JN(this,SH,arguments);}function AH(t){this.rect=t[Zf](), this[ks]=t[YA](), this[jA]=t[ZL]();}function IH(t){JN(this,IH,arguments);}function CH(t){JN(this,CH,arguments);}function PH(t){JN(this,PH,arguments);}function FH(t,i,n){var e=t.offsetWidth,s=t[XA];t[jn][ii]=i-e/2+ra, t[jn].top=n-s/2+ra;}function RH(){}function DH(t){this[Gl]=t;}function NH(t){this[Gl]=t;}function BH(t){this.graph=t;}function kH(t){if(t){ return(t=t[Un]||t).map(function(t){return t.points&&t[ks][vt](0);}); }}function UH(t){this[Gl]=t;}function GH(t){this[Gl]=t;}function $H(t){JN(this,$H,arguments), this[tC]=EB?8:5;}function WH(t){return t[Pi]==uG||t[Pi]==_G;}function HH(t){this[Gl]=t, this[TA]=t[TA];}xH.prototype={defaultCursor:UA,getInteractionInstances:function getInteractionInstances(t){
var this$1 = this;
if(!this[kA]){ return null; }for(var i=[],n=0,e=this[kA].length;n<e;n++){var s=this$1[kA][n];s instanceof Function&&(s=new s(t)), s[zA]instanceof Function&&s.install(t), i[j](s);}return i;}}, OH[_]={_f3:null,_lE:null,destroy:function destroy(t){qN(this,OH,Ds,arguments), delete this._lE, delete this[He], delete this._f3;},doDraw:function doDraw(i,t){var n=this[ks];n&&(i.beginPath(), n.forEach(function(t){this[VA](i,t);},this), this.isClosePath&&i[Aa](), this[KA](i));},styleDraw:function styleDraw(t){var i=function(t,i){if(!t){ return i; }var n,e={};for(n in t){e[n]=t[n];}for(n in i){e[n]===Y&&(e[n]=i[n]);}return e;}(this.graph[OO],this.getDefaultDrawStyles(this.graph));i.lineWidth&&(t[Ka]=i[Ka], i[Gf]&&(t[Gf]=i[Gf]), i[$f]&&(t[$f]=i[$f]), i[zf]&&(t[zf]=i.lineDash, t.lineDashOffset=i.lineDashOffset||0), t[Na]=i.strokeStyle, t.stroke()), i[Ua]&&(t.fillStyle=i[Ua], t[za]());},drawPoint:function drawPoint(t,i,n){var e,s;n?t[La](i.x,i.y):rU[G](i)?(e=i[0], s=i[1], t[Oa](e.x,e.y,s.x,s.y)):t[Ma](i.x,i.y);},setCurrentPoint:function setCurrentPoint(t){this[QA]=t;},addPoint:function addPoint(t){this._lE||(this._lE=[], this[LA]()), this._lE[j](t), this[Nd]();}}, ZN(OH,_H), DB(OH.prototype,{currentPoint:{get:function get(){return this[He];},set:function set(t){this[He]=t, this[Nd]();}},prevPoint:{get:function get(){return this._lE&&this._lE.length?this._lE[this._lE.length-1]:null;}},points:{get:function get(){if(this[He]&&this._lE&&this._lE[bt]){ return this._lE.concat(this[He]); }}}}), rU[ZA]=OH, SH[_]={_jY:function _jY(t,i){return this.start?this._f5(t,i):this._oUX(t,i);},_oUX:function _oUX(t,i){return t instanceof eW&&i[kM](t);},_f5:function _f5(t,i){return t instanceof eW&&i[UM](t,this[JA]);},_oT8:function _oT8(t,i,n,e){if(this._oWurrentPort){ return this[qA][tI](n,e); }var s=i[Ss](t);return s&&s[Ow]?s[Ow].center:t[q_];},_dC:function _dC(t,i){this._mB&&(clearTimeout(this._mB), delete this._mB), this._mB=setTimeout(function(t){var i,n;delete this._mB, this[JA]&&this[QA]&&(i=t.x-this[QA].x, n=t.y-this.currentPoint.y, Math[Dt](i*i+n*n)*this[Gl][Ha]<=2&&this[Fr](this[QA]));}[$e](this,this[iI](t)),UB[le]);},destroy:function destroy(t){qN(this,SH,Ds,arguments), this[JA]=null, this[nI]=null, this._mB&&(clearTimeout(this._mB), delete this._mB), this[eI]=null, this[qA]=null;},ondblclick:function ondblclick(t,i){this[Ds](i);},finish:function finish(t,i,n,e){var s;this._lE&&2<=this._lE[bt]&&(this._lE.shift(), s=new GB(), jN(this._lE,function(t){var i,n;rU[G](t)?(i=t[0], n=t[1], s.add(new bG(aU.SEGMENT_QUAD_TO,[i.x,i.y,n.x,n.y]))):s.add(new bG(aU[gf],[t.x,t.y]));},this)), i.createEdgeByInteraction(this[JA],n,t,s,this.startPort,e), this[Ds](i);},onstart:function onstart(t,i){var n,e;this[JA]&&(n=t.getData(), e=i[xl](t), this._f5(n,i)?this[sI](t,i,n,new AH(i.getUI(n)).nearestPoint(e.x,e.y)[KS]):this.addPoint(e));},startdrag:function startdrag(t,i){var n,e,s;this.start||t[hI]||(n=t[Os]())&&this._oUX(n,i)&&(t[hI]=!0, this.start=n, e=i[xl](t), s=this[rI](n,i,e.x,e.y), this.startPort=s[KS], this[Fr](s));},ondrag:function ondrag(t,i){this[aI](t,i);},enddrag:function enddrag(t,i){var n,e;this.start&&(n=this[eI]||t[Os](), this._f5(n,i)&&(e=i.toLogical(t), this[sI](t,i,n,new AH(i.getUI(n))[tI](e.x,e.y)[KS])));},onrelease:function onrelease(t,i){kk(t)&&this[Ds](i);},currentNode:null,onmousemove:function onmousemove(t,i){var n,e,s,h,r,a,o=i.toLogical(t),f=(n=i, e=o.x, s=o.y, h=function(t){return this._jY(t,i);}[$e](this), n[oI](function(t){var i=t[tn];if(i instanceof rU[vM]&&(!h||!1!==h(i))&&t.uiBounds.intersectsPoint(e-t.x,s-t.y)&&t[Ho](e,s,UB[Kr]/n[Ha])){ return r=i, !1; }}), r);f!=this[eI]&&(this[eI]=f, this[qA]=f?new AH(i.getUI(f)):null, f?(this[LA](), this[pA]=[this[qA]]):this[pA]=null, this[Nd]()), this._oWurrentPort&&(a=this._oWurrentPort[tI](o.x,o.y), this.invalidate()), this.start&&(this.currentPoint=a||o, kk(t)&&this._dC(t,i));},toLogicalPoint:function toLogicalPoint(t){return this[Gl][xl](t);},getDefaultDrawStyles:function getDefaultDrawStyles(t){return{lineWidth:this[Gl][fI](LW.EDGE_WIDTH),strokeStyle:this.graph.getDefaultStyle(LW[gx]),lineDash:this.graph.getDefaultStyle(LW.EDGE_LINE_DASH),lineDashOffset:this[Gl][fI](LW[cI]),lineCap:this.graph[fI](LW.LINE_CAP),lineJoin:this[Gl][fI](LW[IT])};}}, ZN(SH,OH), rU.CreateEdgeInteraction=SH, AH.prototype[uI]=function(t,i,n){t.beginPath(), t[or](+n.x,+n.y,n.width+0,n[Xt]+0), t[Ka]=2/i, t[Na]=sM, t[Za]();}, AH.prototype.drawPoint=function(t,i,n){t[Ya]();var e=4/i;t.moveTo(n.x+e,n.y), t.arc(n.x,n.y,e,0,2*Math.PI,!1), t[Ka]=1/i, n[_I]?(t.strokeStyle=dI, t.fillStyle=lI):(t.strokeStyle=sM, t[Ua]="rgba(255, 255, 255, 0.8)"), t[za](), t.stroke();}, AH.prototype[ro]=function(i,n){var t=this.rect;this[uI](i,n,t), this.points&&this.points[Ae](function(t){this[VA](i,n,t);}[$e](this));}, AH[_][tI]=function(s,h,r){if(this[ks]){r=r||20;var a,o=r*=r;return this[ks][Ae](function(t){t.marked&&(t[_I]=!1);var i=t.x-s,n=t.y-h,e=i*i+n*n;e<r&&e<o&&(o=e, a=t);}), a&&(a[_I]=!0), a||this.defaultPoint;}return this[jA];}, IH[_]={getDefaultDrawStyles:function getDefaultDrawStyles(t){return{lineWidth:this[Gl][fI](LW[Ep]),strokeStyle:this[Gl][fI](LW[LT]),fillStyle:this.graph[fI](LW[xp])};},finish:function finish(t,i){var n,s,h,e,r;this._lE&&this._lE[bt]&&(n=this._lE, e=h=s=0, n[Ae](function(i){rU[G](i)?i.forEach(function(t){s+=i.x, h+=i.y, e++;}):(s+=i.x, h+=i.y, e++);}), s/=e, h/=e, r=[], n.forEach(function(t,i){var n,e;0!=i?rU[G](t)?(n=t[0], e=t[1], r[j](new bG(aU[bI],[n.x-s,n.y-h,e.x-s,e.y-h]))):r[j](new bG(aU.SEGMENT_LINE_TO,[t.x-s,t.y-h])):r[j](new bG(aU[yf],[t.x-s,t.y-h]));}), this[Hn](t,r,s,h), this.destroy(i));},startdrag:function startdrag(t,i){t[hI]=!0;},createElement:function createElement(t,i,n,e){return this[Gl].createShapeByInteraction(t,i,n,e);},onstart:function onstart(t,i){var n=i[xl](t);this._f3=n, this.addPoint(n);},onmousemove:function onmousemove(t,i){this._f3&&(this.currentPoint=i[xl](t));},ondblclick:function ondblclick(t,i){if(this._f3){if(this._lE[bt]<3){ return void this[Ds](i); }delete this._lE[this._lE[bt]-1], this.finish(t,i);}},isClosePath:!0}, ZN(IH,OH), rU[vI]=IH, CH[_]={isClosePath:!1,createElement:function createElement(t,i,n,e){return this[Gl].createLineByInteraction(t,i,n,e);},getDefaultDrawStyles:function getDefaultDrawStyles(){return{lineWidth:this.graph.getDefaultStyle(LW.SHAPE_STROKE),strokeStyle:this.graph.getDefaultStyle(LW[LT]),lineDash:this[Gl][fI](LW.SHAPE_LINE_DASH),lineDashOffset:this.graph[fI](LW[Mp]),lineCap:this[Gl].getDefaultStyle(LW[Op]),lineJoin:this[Gl].getDefaultStyle(LW[IT])};}}, ZN(CH,IH), rU[yI]=CH, PH.prototype={destroy:function destroy(t){qN(this,PH,Ds,arguments), t[HO]='', this.start=null;},doDraw:function doDraw(t,i){var n,e,s,h;this.start&&this[QA]&&(this[Gl][OO]&&(n=this.graph[OO][fb], e=this.graph.interactionProperties[ov]), n=n||this[Gl].edgeUIClass||rU[gI], e=e||this[Gl][ov], s=n[UL]||rU[gI].drawReferenceLine, (h=this.graph.getUI(this.start))&&h[Ow]&&(h=h.bodyBounds.center, t[Ya](), s(t,h,this[QA],e), this.styleDraw(t)));},canLinkFrom:function canLinkFrom(t,i){return t instanceof eW&&i.canLinkFrom(t);},canLinkTo:function canLinkTo(t,i){return t instanceof eW&&i.canLinkTo(t,this[JA]);},startdrag:function startdrag(t,i){var n=t[Os]();this[kM](n,i)&&(t[hI]=!0, this.start=n, i[HO]=Zs, this[LA]());},ondrag:function ondrag(t,i){this.start&&(rU[cM](t), this.currentPoint=i.toLogical(t), this.invalidate());},enddrag:function enddrag(t,i){var n;this.start&&(this[Nd](), n=t[Os](), this[UM](n,i)&&i[EI](this[JA],n,t), this[Ds](i));},getDefaultDrawStyles:function getDefaultDrawStyles(){return{lineWidth:this.graph[fI](LW[kp]),strokeStyle:this[Gl][fI](LW[gx]),lineDash:this[Gl][fI](LW.EDGE_LINE_DASH),lineDashOffset:this[Gl].getDefaultStyle(LW.EDGE_LINE_DASH_OFFSET),lineCap:this[Gl][fI](LW.LINE_CAP),lineJoin:this[Gl][fI](LW[IT])};}}, ZN(PH,OH), rU.CreateSimpleEdgeInteraction=PH, UB[xI]=!1, RH.prototype={html:null,createHTML:function createHTML(){var r=S[Hn](mI);r.className=pI, r[jn][af]=Md, r.style.textAlign=Ey, r[jn][Yh]=TI, r[jn][Ko]=wI, r[jn][LI]="0px 0px 10px rgba(40, 85, 184, 0.75)", r[jn][ad]=hr, r[jn][dd]=go;var a=this;return r[MI]=function(t){a[OI](t);}, r.onkeydown=function(t){27!=t[B_]||a[SI]();}, r[AI]=function(t){if(13==t[B_]||10==t[B_]){if(t[W](), t[N_]||t[Bs]||t[TM]){ return n=W_, k==_typeof((i=r).selectionStart)&&k==_typeof(i[II])?(e=i.value, s=i.selectionStart, i.value=e[vt](0,s)+n+e[vt](i[II]), i[II]=i.selectionStart=s+n[bt]):void 0!==S[CI]&&((h=S[CI][PI]()).text=n, h[FI](!1), h[fO]()), void a[OI](t); }a.stopEdit();}var i,n,e,s,h;}, S.body[re](r), r;},setText:function setText(t,i){this[gO][P]=t||'', i&&(this[gO][jn][Um]=i), function(t){if(aB){var i=u[eO]||u[vl],n=u[sO]||u[yl];return t[fO](), u[rO](i,n);}t[fO]();}(this[gO]), this.onSizeChange(this[gO]);},onSizeChange:function onSizeChange(t){t[RI], t.offsetHeight;var i=function(t){var n=S[Hn](aa).getContext(fa),i=getComputedStyle(t,null),e=i[yy]||i[Vm]+D+i.fontSize+D+i.fontFamily;n[yy]=e;var s=t[P][F](W_),h=parseInt(i[Um]),r=0,a=0;return rU[Ae](s,function(t){var i=n[My](t).width;r<i&&(r=i), a+=1.2*h;}), {width:r,height:a};}(t);return t[jn].width=i[jt]+30+ra, t.style[Xt]=i[Xt]+10+ra, i;},onValueChange:function onValueChange(t){var i=t.target;this.onSizeChange(i), i.style[ii]=i.x-i.offsetWidth/2+ra;},onClickOnWindow:function onClickOnWindow(t){t[od]!=this.html&&(UB.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS?this[DI]():this[SI]());},startEdit:function startEdit(t,i,n,e,s){this[gO]||(this[gO]=this[NI]()), this.stopEditWhenClickOnWindow||(this[BI]=function(t){this.onClickOnWindow(t);}.bind(this)), u[_e](qe,this[BI],!0), this[lg]=s, this[gO].x=t, this[gO].y=i, this.html[jn].display=dS, FH(this.html,t,i), this[kI](n,e||10), FH(this[gO],t,i);},isEditing:function isEditing(){return hr!=this[gO][jn][ad];},cancelEdit:function cancelEdit(){this[DI](!0);},stopEdit:function stopEdit(t){var i;this.isEditing()&&(u.removeEventListener(qe,this[BI]), i=this[gO].value, !t&&this[lg]&&this[lg](i), this[gO][jn].display=hr, this[gO][P]=null, this[lg]=null);},destroy:function destroy(){this[gO]&&S[Eo][Rn](this[gO]);}}, rU[UI]=RH, DH.prototype={destroy:function destroy(t){t[GI]&&(t[GI].destroy(), delete t.labelEditor);},ondblclick:function ondblclick(t,i){var n,e=t[Os]();if(!e){ return i[Vv]?void i[$I]():void(i[WI]&&(n=i[HI]||1, Math.abs(i.scale-n)<1e-4?i[JM]():i.moveToCenter(n))); }if(!1!==e.dblclickable){if(i.editable&&i[YI](e)){var s=i.hitTest(t);if(s instanceof kW&&!1!==s.editable){var h=i[GI];h||(i[GI]=h=new RH());var r=s[Zf](),r=function(t,i,n){t+=u[vl], i+=u.pageYOffset;var e=n[ee]();return{x:t+e.left,y:i+e.top};}((r=i.toCanvas(r.x+r[jt]/2,r.y+r[Xt]/2)).x,r.y,i[gO]);return void i[jI](e,s,h,r);}}var a=e instanceof dW,o=e instanceof q$&&e[XI]();if(!e._4F||!Kk(t)&&(a||o)){ return a?(e.expanded=!e[_b], void this[Gl][CM](new eY(this[Gl],eY[Zv],t,e))):void(o&&this[Gl][bO](e)&&this[Gl][CM](new eY(this[Gl],eY[zI],t,e))); }i[Vv]=e;}}}, NH.prototype={onkeydown:function onkeydown(t,i){if(i.editable){var n=t[B_];if(8==n||46==n||127==n){ return i[VI](t), void OB(t); }Kk(t)&&(67!=n&&86!=n&&90!=n&&89!=n||OB(t));}}}, rU[KI]=NH, BH[_]={onkeydown:function onkeydown(t,i){var n,e,s;t[Ns]&&83==t[B_]&&(n=i[QI](i.scale,i[Ab]), (e=u[rh]().document)[ZI]=JI+n[jt]+qI+n[Xt], (s=e[Hn](vo)).src=n[tn], e[Eo].appendChild(s), OB(t));}}, GH[_]={onkeydown:function onkeydown(t,i){Kk(t)||(37==t[B_]?(this._6P(i,1,0), OB(t)):39==t[B_]?(this._6P(i,-1,0), OB(t)):38==t.keyCode?(this._6P(i,0,1), OB(t)):40==t[B_]&&(this._6P(i,0,-1), OB(t)));},_6P:function _6P(t,i,n){t[LS](i,n);},onstart:function onstart(t,i){this._mF&&this.destroy(i);},_mF:!(UH[_]={_mF:null,destroy:function destroy(t){this._mF=null, this._8D=null, delete this.draggingElements, delete this.currentDraggingElement, t&&lH(t);},_2F:function _2F(i){var t,n,e,s,h,r,a,o=(t=i[Bn], n=function n(t){return i[lO](t)&&i[GA](t);}, r=[], a=[], t[Ae](function(t){n(t)&&(t instanceof eW?r[j](t):t instanceof q$&&a[j](t));}), r.length&&(e=r, s=n, h=new GB(), e[Ae](function(t){s&&!s(t)||(h.add(t), Q$(t,h));}), r=h[Un]), {nodes:r,edges:a}),f=new GB();return o[$A]&&f.add(o[$A]), o[iv]&&f.add(o[iv]), f;},onstart:function onstart(t,i){this[iC]&&this[Ds](i);},_8D:null,startdrag:function startdrag(t,i){var n,e,s,h;t[hI]||t.touches&&1!=t[We][bt]||((n=t[Os]())&&i[nC](n)&&i.isMovable(n)?(this._mF=i[xl](t), t[hI]=!0, this[iC]=n, this.draggingElements=this._2F(i), this._8D=(e=this[eC][Un], s=new Map(), e[Ae](function(t){s.set(t,t[Gb]?kH(t[gL]):{x:t.x,y:t.y});}), s), h=new eY(i,eY.ELEMENT_MOVE_START,t,this[iC],this.draggingElements.datas), !1!==i.beforeInteractionEvent(h)?i[CM](h):this.destroy(i)):this[Ds](i));},ondrag:function ondrag(t,i){var n,e,s,h,r,a,o,f,c,u,_,d,l,b,v,y,g,E;this[iC]&&(t.touches&&1!=t[We].length?this.enddrag(t,i):(AB(t), n=i[xl](t), e=new eY(i,eY[sC],t,this[iC],this[eC].datas), a=n.x-this._mF.x, o=n.y-this._mF.y, t.ctrlKey?lH(i):(a=(r=EH(i,(u=i, _=s=this.currentDraggingElement, d=this._8D.get(s), l=a, b=o, h={x:(v=u[Ss](_)[Ow]).x+d.x+l-_.x,y:v.y+d.y+b-_.y,width:v.width,height:v[Xt]}),this[eC].datas,a,o,(c=h, void 0===rM?[c.x,c.x+c.width]:[c.x+c[jt]/2,c.x,c.x+c[jt]]),(f=h, void 0===rM?[f.y,f.y+f[Xt]]:[f.y+f[Xt]/2,f.y,f.y+f[Xt]]))).x, o=r.y), y=this._8D, g=a, E=o, y[Ae](function(h,t){var i;h&&(t[Gb]?((i=t[gL])&&i[Ae](function(t,i){var n,e,s;t.points=(n=h[i], e=g, s=E, n.map(function(t,i){return t+(i%2==0?e:s);}));},this), t[hv]()):(t.x=h.x+g, t.y=h.y+E));}), i[CM](e)));},enddrag:function enddrag(t,i){var n,s,h,r,e;this[iC]&&(lH(i), this[eC]&&this[eC][bt]&&(t.shiftKey&&(n=i[xl](t), s=n.x, h=n.y, i.forEachReverseVisibleUI(function(t){
var this$1 = this;
var i=t[tn];if(!this.draggingElements[Zi](i)&&t[Xl][Jt](s-t.x,h-t.y)&&t[Ho](s,h,1)){if(i instanceof rU[LO]){if(!i[cb]){ return; }for(var n=this.draggingElements[bt];0<n--;){var e=this$1.draggingElements.get(n);if(e instanceof rU[vM]&&e[hC](i)){ return; }}return r=i, !1;}return(i.enableSubNetwork||i._jR()&&i[_b])&&(r=i), !1;}},this), r&&this[eC].forEach(function(t){
var this$1 = this;
for(var i=t.parent;i;){if(this$1[eC][Zi](i)){ return; }i=i[Hi];}t[Hi]=r;},this)), e=new eY(i,eY.ELEMENT_MOVE_END,t,this[iC],this.draggingElements[Un]), i[CM](e)), this[Ds](i));},onpinch:function onpinch(t,i){this.currentDraggingElement&&this[Ls](t,i);},step:1,onkeydown:function onkeydown(t,i){var n,e,s,h,r;Kk(t)&&(37==t.keyCode?n=-1:39==t.keyCode?n=1:38==t[B_]?e=-1:40==t[B_]&&(e=1), !n&&!e||0!=(s=this._2F(i).datas)[bt]&&(OB(t), n=n||0, e=e||0, h=this.step/i[Ha], r=new eY(i,eY[rC],t,null,s), i.moveElements(s,n*h,e*h), i[CM](r)));}}),startdrag:function startdrag(t,i){var n;t[hI]||(i[WM](), t.responded=!0, this._mF=!0, i[HO]=zk, n=new eY(i,eY.PAN_START,t), i[CM](n));},ondrag:function ondrag(t,i){this._mF&&i[Wa](t.dx||0,t.dy||0);},enddrag:function enddrag(t,i){var n,e,s;this._mF&&(!1!==i[jS]&&(n=t.vx, e=t.vy, (.1<Math.abs(n)||.1<Math.abs(e))&&i._oTZ(n,e)), this[Ds](i), s=new eY(i,eY[aC],t), i[CM](s));},startpinch:function startpinch(t,i){i.pauseRendering(!0);},onpinch:function onpinch(t,i){this._mF=!0;var n,e=t[ze];e&&(n=i[lM](t[Ey]), i[tO](e,n.x,n.y,!1));},endpinch:function endpinch(t,i){i[qO](!1);},destroy:function destroy(t){this._mF=!1, t[HO]=null;}}, $H[_]={onDataPropertyChange:function onDataPropertyChange(t){this.graph.callLater(function(){this._lB();},this);},destroy:function destroy(){this[Gl].cursor=null, this.element&&delete this.element[oC], this[fC]=!1, delete this[nv], delete this[He], delete this[cC], qN(this,$H,Ds,arguments);},_oT9:null,_69:function _69(t){this[nv]=t, this[Nd]();},isEndPointEditable:function isEndPointEditable(t,i){return this[Gl][uC](t,i);},drawPoint:function drawPoint(t,i,n){i.isEndPoint&&!this[uC](this.element,i[_C])||(t.beginPath(), i[dC]?t[or](i.x-this.handlerSize/n,i.y-this[tC]/n,this[tC]/n*2,this[tC]/n*2):t.arc(i.x,i.y,this[tC]/n,0,2*Math.PI,!1), t[Ka]=1/n, t.lineDash=[], t[Na]=oy, t[Ua]="rgba(255, 255, 0, 0.8)", t[Za](), t.fill());},_hL:function _hL(t,i,n,e){e?t[La](i,n):t[Ma](i,n);},doDraw:function doDraw(t,i){this[lC](t,i);},drawLine:function drawLine(r,n){var t,a,o,f;this[nv]&&this[nv][bt]&&(t=this[nv], r[$a](), this[vA]instanceof hW&&(r[Wa](this.element.x,this.element.y), this[vA].rotate&&r[Rt](this[vA][Rt])), a=[], r[Ya](), f=t[bt], t[Ae](function(t,i){
var this$1 = this;
if(t[Pi]!=aU[mf]){ for(var n=!i||i==f-1,e=0,s=t[ks];e+1<s[bt];){var h={x:s[e],y:s[e+1],isControlPoint:this$1._7H(t,e)};n&&(h[bC]=!0, h[_C]=0==i), a.push(h), this$1._hL(r,h.x,h.y,null==o), o=h, e+=2;} }},this), r.lineWidth=1/n, r[zf]=[2/n,3/n], r.strokeStyle=fy, r.stroke(), a.forEach(function(t,i){this[VA](r,t,n,i);},this), r[qa]());},invalidate:function invalidate(){this[TA].invalidate();},_3N:function _3N(t){var i;this[vA]!=t&&(this[vA]&&this[Ds](), t&&this[YI](t)&&(i=this._6B(t,this[Gl]))&&(this[vC](t,!0), t[oC]=!0, this._oWanEdit=!0, this._69(i), this[LA]()));},_lB:function _lB(){var t;this[yC]()&&this.element&&((t=this._6B(this.element,this.graph))?this._69(t):this.destroy(this[Gl]));},_6B:function _6B(t,i){if(i[YI](t)){var n=t[gL]||[];n instanceof GB&&(n=n[Ft]());var e,s,h,r,a,o,f=i.getUI(t);return f instanceof rU[gI]&&(e=f[uL](i[Ss](t[xb])), s=f.getEndPointBounds(i[Ss](t[mb])), h=e.center, r=s[Ey], a=f[BT](LW.EDGE_FROM_OFFSET), o=f[BT](LW[Sx]), a&&(h.x+=a.x||0, h.y+=a.y||0), o&&(r.x+=o.x||0, r.y+=o.y||0), n[m](0,0,new rU.PathSegment(aU[yf],[h.x,h.y])), n.push(new rU[gC](aU[yf],[r.x,r.y]))), n;}},_jU:function _jU(t,i){var n={x:t-=this[vA].x,y:i-=this.element.y};return this[vA][Rt]&&zW(n,-this[vA][Rt]), n;},isPointAddable:function isPointAddable(t,i){return!0;},isPointRemovable:function isPointRemovable(t,i,n){return!0;},onclick:function onclick(t,i){var n,e,s;i[NL]&&t[N_]&&this[vA]&&((n=this._hN(t,i))&&n[dC]&&!1!==this[EC](this.element,n,i)?0<=n.index&&(this[vA][xC](n[nn]), (s=new eY(i,eY.POINT_REMOVE,t,this[vA]))[mC]=n, i[CM](s)):this[vA]==t[Os]()&&!1!==this[pC](this.element,i)&&(e=i[xl](t), !1!==i[Ss](this[vA])[Fr](e.x,e.y,this.handlerSize||2)&&((s=new eY(i,eY[TC],t,this[vA]))[mC]=e, i.onInteractionEvent(s))));},isEditable:function isEditable(t){return this[Gl][YI](t)&&(t instanceof hW||t instanceof q$&&(!t.isLooped()||t[_L]()));},ondblclick:function ondblclick(t,i){var n;i[NL]?(n=t.getData())&&n!=this[vA]&&!n[oC]?this._3N(n):this[Ds](i):this[vA]&&this.destroy(i);},onstart:function onstart(t,i){var n;this._mousePressed=!0, i[NL]?t.responded||(this[vA]&&this._hN(t,i)?t[hI]=!0:(n=t[Os]())&&n instanceof hW&&VH(n,i)?this.element&&n!=this[vA]&&this.destroy():this._3N(n)):this[vA]&&this[Ds](i);},onrelease:function onrelease(t,i){this[fC]=!1, this[vA]&&(this[cC]=!0);},_oTB:null,_hN:function _hN(t,f){var c=f[xl](t);this[vA]instanceof hW&&(c=this._jU(c.x,c.y));var u,i=f[Ha],_=this[tC]/i,d=this[nv],l=d[bt],b=this[vA]instanceof rU[LO];if(d[Ae](function(t,i){
var this$1 = this;
for(var n=0,e=t[ks];n+1<e[bt];){var s,h,r,a=e[n],o=e[n+1];if($B(c.x,c.y,a,o)<_){ return u={oldPoints:e[vt](0),segment:t,index:i,pointIndex:n}, b&&--u[nn], !b||WH(t)||0!=i&&i!=d.length-1||(u[bC]=!0, s=0==i, h=(u[_C]=s)?rU[TO][Mx]:rU[TO][Sx], r=f[BT](this$1.element,h)||{}, u[wC]=[r.x||0,r.y||0]), this$1._7H(t,n)&&(u[dC]=!0, 0<i&&(u[LC]=d instanceof GB?d[Nn](i-1):d[i-1]), i+1<l&&(u[MC]=d instanceof GB?d.getByIndex(i+1):d[i+1], u[MC].points&&(u[OC]=u[MC][ks].slice(0)))), !1; }n+=2;}},this), !u||!u[bC]||this[uC](this[vA],u[_C])){ return u; }},_7H:function _7H(t,i){return i==t.points.length-2;},startdrag:function startdrag(t,i){var n;this.element&&this[cC]&&(this._oTB=this._hN(t,i), this[He]&&(this[mA](), t.responded=!0, (n=new eY(i,eY[SC],t,this.element))[mC]=this._oTB, i[CM](n)));},onkeyup:function onkeyup(t,i){this[fC]&&16!=!t[B_]&&this.element&&this[He]&&this[He][AC]&&this._dF(this[He][AC].x,this._oTB[AC].y,i,t,!1);},onkeydown:function onkeydown(t,i){qN(this,$H,IC,arguments), this[fC]&&this[vA]&&this[He]&&t[TM]&&this[He][AC]&&this._dF(this._oTB[AC].x,this[He][AC].y,i,t,!0);},_dF:function _dF(t,i,n,e,s){var h,r,a,o,f,c,u,_,d,l=this[He],b=this[vA],v=l.oldPoints,y=l[CC];if(l.isEndPoint){var g,E=l[_C]?rU[TO].EDGE_FROM_OFFSET:rU.Styles[Sx],x={x:v[0]+t,y:v[1]+i};return b[sl](E,x), (g=new eY(n,eY.POINT_MOVING,e,b))[mC]=l, void n[CM](g);}if(s&&l[dC]&&(h=v[v[bt]-2]+t, r=v[v[bt]-1]+i, a=l.prevSegment, o=l[MC], f=20/n[Ha], d=_=u=c=Number[ti], a&&(a=a[Ea], c=Math.abs(h-a.x), _=Math.abs(r-a.y)), o&&(o=o.lastPoint, u=Math.abs(h-o.x), d=Math.abs(r-o.y)), c<f&&c<u?t+=a.x-h:u<f&&u<c&&(t+=o.x-h), _<f&&_<d?i+=a.y-r:d<f&&d<_&&(i+=o.y-r)), l[dC]&&WH(y)){for(var m,p=y[ks].length-4;p<y[ks][bt];){var T=v[p]+t,w=v[p+1]+i;y[ks][p]=T, y[ks][p+1]=w, p+=2;}l.nextSegment&&WH(l[MC])&&(T=(m=l[OC])[0]+t, w=m[1]+i, l.nextSegment[ks][0]=T, l[MC][ks][1]=w);}else { T=v[p=l[PC]]+t, w=v[p+1]+i, y[ks][p]=T, y[ks][p+1]=w; }b.firePathChange(), (g=new eY(n,eY[FC],e,b))[mC]=l, n.onInteractionEvent(g);},ondrag:function ondrag(t,i){var n,e,s,h,r,a;this[vA]&&this[He]&&(n=this._oTB, e=this[vA], s=t.totalDeltaX, h=t[Hs], s/=r=i[Ha], h/=r, e.rotate&&(zW(a={x:s,y:h},-e[Rt]), s=a.x, h=a.y), n.delta={x:s,y:h}, this._dF(s,h,i,t,t[TM]));},enddrag:function enddrag(t,i){var n;this.element&&this._oTB&&(this[LA](), this._lB(), (n=new eY(i,eY.POINT_MOVE_END,t,this.element)).point=this[He], i[CM](n));},onmousemove:function onmousemove(t,i){this[vA]&&(i[HO]=t.altKey&&(this._hN(t,i)||this.element==t[Os]())?"crosshair":null);}}, ZN($H,_H), UB[RC]=1, UB[DC]=FB(3724541951), UB[NC]=FB(1430753245), aU.RECTANGLE_SELECTION_MODE_INTERSECT=BC, aU[kC]=UC, UB[GC]=aU[$C], HH[_]={onstart:function onstart(t,i){this._mF&&this.destroy(i);},startdrag:function startdrag(t,i){t.responded||(t[hI]=!0, this._mF=i.toLogical(t), i[HO]=Zs, this[WC]=this[TA][LA](this._17,this).id);},ondrag:function ondrag(t,i){var n;this._mF&&(AB(t), this._end=i[xl](t), this[Nd](), n=new eY(i,eY.SELECT_START,t,i.selectionModel), i[CM](n));},enddrag:function enddrag(t,i){var n;this._mF&&(this[HC]&&(clearTimeout(this[HC]), this[HC]=null), this._gX(!0), this.destroy(i), n=new eY(i,eY[YC],t,i[Bn]), i[CM](n));},onpinch:function onpinch(t,i){this._mF&&this[Ls](t,i);},_17:function _17(t,i){t[Na]=UB.SELECTION_RECTANGLE_STROKE_COLOR, t[Ua]=UB[NC], t[Ka]=UB[RC]/i;var n=this._mF.x,e=this._mF.y;t[or](n,e,this[jC].x-n,this[jC].y-e), t.fill(), t[Za]();},invalidate:function invalidate(){this[aS]?this[TA][Nd]():(this[aS]=!0, this[HC]=setTimeout(this._gX[$e](this),100));},_gX:function _gX(t){var i,n,e,s,h,r,a,o;this.invalidateFlag=!1, this[HC]=null, !this._mF||fB&&!t?this[TA].invalidate():(i=Math.min(this._mF.x,this._end.x), n=Math.min(this._mF.y,this[jC].y), e=Math.abs(this._mF.x-this._end.x), s=Math.abs(this._mF.y-this[jC].y), e&&s?(h=[], r=this[Gl][Ha], a=this.graph.rectangleSelectionMode, this.graph.forEachVisibleUI(function(t){t._jT&&this.graph[_O](t[Pu])&&this[XC](i,n,e,s,t,r,a)&&h.push(t[tn]);}.bind(this)), this[Gl][Bn].set(h), this[TA].invalidate(), t||(o=new eY(this[Gl],eY[zC],null,this.graph.selectionModel), this[Gl][CM](o))):this[Gl][Bn][It]());},inRectangle:function inRectangle(t,i,n,e,s,h,r){var a=s[Zf]();return!!ZB(t,i,n,e,a.x,a.y,a.width,a[Xt])||(r=r||UB.RECTANGLE_SELECTION_MODE)!=aU[kC]&&function(t,i,n,e,s,h){t-=s.$x, i-=s.$y;var r=s._hI.intersection(t,i,n,e);if(!r){ return!1; }t=r.x*h, i=r.y*h, n=r[jt]*h, e=r[Xt]*h, n=Math[rr](n)||1, e=Math[rr](e)||1;var a=yU(),o=a[aa];o.width<n||o.height<e?(o[jt]=n, o.height=e):(a[_c](1,0,0,1,0,0), a.clearRect(0,0,n,e)), a[_c](1,0,0,1,-t-s.$x*h,-i-s.$y*h), a[Ha](h,h), s._lA(a,1);var f=xU(a,0,0,n,e);if(!f){ return!1; }for(var c=(f=f[tn])[bt]/4;0<c--;){if(0<f[4*c-1]){ return!0; }}return!1;}(t,i,n,e,s,h);},destroy:function destroy(t){this._mF=null, t.cursor=null, this[WC]&&(this[TA][mA](this._17Id), delete this[WC], this[TA][Nd]());}};var YH=nB({super:HH,onstart:null,startdrag:null,ondrag:null,enddrag:null,accept:function accept(t,i,n){return!1!==n[VC];},oncontextmenu:function oncontextmenu(t,i){i.popupmenu||AB(t);},onstart2:function onstart2(t,i){HH[_][ys][b](this,arguments);},startdrag2:function startdrag2(t,i){t[hI]||(i[KC]&&i[KC].hide instanceof Function&&i[KC][QC](), HH[_].startdrag[b](this,arguments));},ondrag2:function ondrag2(t,i){HH.prototype[Ts][b](this,arguments);},enddrag2:function enddrag2(t,i){HH[_].enddrag[b](this,arguments);}});function jH(t){JN(this,jH,arguments), this[tC]=EB?8:4, this[ZC]=EB?30:20;}function XH(t){return t instanceof dW&&t[_b];}function zH(t,i){return i&&t[tn]instanceof vG?t.data[fo]:KH(t,t._l4);}function VH(t,i,n){return!!i[JC](t)&&(n=n||i[Ss](t))[Eo]&&(e=zH(n[Eo],t instanceof hW))[jt]&&e[Xt];var e;}function KH(t,i){var n=new JB();return n.addPoint(SG[x](t,{x:i.x,y:i.y})), n.addPoint(SG.call(t,{x:i.x+i[jt],y:i.y})), n[Fr](SG[x](t,{x:i.x+i.width,y:i.y+i[Xt]})), n[Fr](SG[x](t,{x:i.x,y:i.y+i.height})), n;}function QH(t){this.graph=t;}function ZH(){}function JH(t){this[Gl]=t;}function qH(t){this[Gl]=t;}function tY(t){this._kP=t, this[VP]=function(t){if(this._mB&&(this[KP]?(cancelAnimationFrame(this._mB), this._isFrameTimer=null):clearTimeout(this._mB), this._mB=null), !0!==t&&!1!==t){ return t?void(this._mB=setTimeout(function(){this._kP(), this._mB=null;}[$e](this),t)):(this[KP]=!0, void(this._mB=requestAnimationFrame(function(){this._kP(), this._mB=null, this._isFrameTimer=null;}[$e](this)))); }this._kP();};}function iY(t){this[Gl]=t;}function nY(t){this.graph=t;}function eY(t,i,n,e,s){this[Si]=t, this[Pi]=qP, this[Ai]=i, this[$]=n, this[tn]=e, this[Un]=s;}function sY(t){this._4S={}, this._mC=t, this._mC._1G[Ji](this[$l],this), this[zO]=aU[tF];}dH=Math.PI/4, jH.prototype={_f7:!1,_f8:!1,onDataPropertyChange:function onDataPropertyChange(t){this[Gl][qC](function(){this._oTC();},this);},ondblclick:function ondblclick(t,i){this.element&&this.destroy(i);},destroy:function destroy(t){t[HO]=null, delete this._dH, delete this[JT], delete this[He], delete this._oWanEdit, delete this._lE, delete this[tP], delete this._f8, delete this._f7, delete this[iP], this._4Q=null, qN(this,jH,Ds,arguments);},_dH:null,_lE:null,_92:function _92(t){this._dH=t;var i,n=this._dH.x,e=this._dH.y,s=this._dH[jt],h=this._dH.height;this._f8&&((i=[])[j]({x:n,y:e,p:ik[di],cursor:nP,rotate:5*dH}), i[j]({x:n+s/2,y:e,p:ik.CENTER_TOP,cursor:eP,rotate:6*dH}), i[j]({x:n+s,y:e,p:ik[xi],cursor:sP,rotate:7*dH}), i.push({x:n,y:e+h/2,p:ik[li],cursor:hP,rotate:4*dH}), i[j]({x:n,y:e+h,p:ik[pi],cursor:sP,rotate:3*dH}), i[j]({x:n+s,y:e+h/2,p:ik[mi],cursor:hP,rotate:0}), i.push({x:n+s/2,y:e+h,p:ik.CENTER_BOTTOM,cursor:eP,rotate:2*dH}), i[j]({x:n+s,y:e+h,p:ik.RIGHT_BOTTOM,cursor:nP,rotate:dH}), this._lE=i), this._f7?this[tP]={x:n+s/2,y:e,cursor:rP}:this[tP]=null, this[Nd]();},_f9:function _f9(t,i,n,e){t.beginPath();var s=(this[tC]-1)/e;t.rect(i-s,n-s,2*s,2*s), t[Ka]=1/e, t[zf]=[], t[Na]=oy, t[Ua]="rgba(255, 255, 255, 0.8)", t.stroke(), t.fill();},_6D:function _6D(t,i,n,e,s,h){s=s||this[tC], h=h||aP, t[Ya](), s/=e, t.arc(i,n,s,0,2*Math.PI,!1), t[Ka]=1/e, t[zf]=[], t[Na]=oy, t.fillStyle=h, t.stroke(), t[za]();},_jU:function _jU(t,i){var n={x:t-=this.element.x,y:i-=this[vA].y};return this.element.rotate&&zW(n,-this[vA][Rt]), n;},doDraw:function doDraw(i,n){var t,e,s,h,r,a;this._dH&&(i[$a](), i[Wa](this[vA].x,this[vA].y), this.element[Rt]&&i[Rt](this[vA][Rt]), this._rotatePoint&&(this._6D(i,0,0,n,3,oP), t=this._rotatePoint.x, e=this._rotatePoint.y-this[ZC]/n, i[Ya](), i[La](t,this[tP].y), i[Ma](t,e), i[Ka]=1/n, i[Na]=fy, i[Za](), this._6D(i,t,e,n)), this._lE&&(s=this._dH.x, h=this._dH.y, r=this._dH[jt], a=this._dH[Xt], i[Ya](), i.rect(s,h,r,a), i.lineWidth=1/n, i[zf]=[2/n,3/n], i[Na]=fy, i[Za](), jN(this._lE,function(t){this._f9(i,t.x,t.y,n);},this)), i.restore());},_oTC:function _oTC(){var t,i,n;this[yC]()&&this[vA]&&(t=this.graph.getUI(this[vA]), this._oUody=t[Eo], i=KH(this._oUody,this._oUody._l4), n=KH(this[JT],this[JT]._8U), this[iP]=TH(i,n), this._92(n));},_oUZ:VH,_oW0:function _oW0(t,i){return(!(t instanceof dW)||!t.expanded)&&i[fP](t);},_dI:function _dI(t,i){return t instanceof eW&&i[YI](t);},onstart:function onstart(t,i){if(i[NL]){if(!t[hI]){var n,e,s=i[Ss](t),h=t[Os]();if(h!=this[vA]){if(this[vA]){if(this._hN(t,i)){ return void(t[hI]=!0); }this.destroy(i);}h&&!h[oC]&&this._dI(h,i)&&(n=this._oUZ(h,i,s), e=this[cP](h,i,s), (n||e)&&(this[vC](h,!0), this[LA](), this._f8=n, this._f7=e, this._oTC()));}}}else { this[vA]&&this.destroy(i); }},onrelease:function onrelease(t,i){this[vA]&&(this[cC]=!0, this[LA](), i.callLater(function(){this._oTC();},this), this._4Q=null);},_oTB:null,_hN:function _hN(t,i){var n,e=i[xl](t),e=this._jU(e.x,e.y),s=i[Ha],h=this[tC]/s;if(this[tP]){var r=this._rotatePoint.x,a=this._rotatePoint.y-this._rotateHandleLength/s;if($B(e.x,e.y,r,a)<h){ return this[tP]; }}if(this._lE&&this._lE[bt]){ return jN(this._lE,function(t,i){if($B(e.x,e.y,t.x,t.y)<h){ return n=t, !1; }},this), n; }},onmousemove:function onmousemove(t,i){var n,e;this.element&&((n=this._hN(t,i))?n!=this[tP]&&this.element[Rt]?(e=n.rotate+this[vA].rotate, i[HO]=function(t){t%=2*Math.PI;var i=Math[rr](t/dH);return 0==i||4==i?"ew-resize":1==i||5==i?"nwse-resize":2==i||6==i?"ns-resize":sP;}(e)):i[HO]=n[HO]:i[HO]=null);},_fB:null,startdrag:function startdrag(t,i){if(this[vA]&&(this[mA](), this[cC]&&(this._oTB=this._hN(t,i), this[He]))){if(t[hI]=!0, this[He][JA]=i.toLogical(t), this[He]==this._rotatePoint){ return this[He][Rt]=this[vA][Rt]||0, (s=new eY(i,eY.ROTATE_START,t,this[vA]))[P]=this[vA][Rt], void i.onInteractionEvent(s); }var n={x:this[vA].x,y:this[vA].y,rotate:this[vA][Rt]},e=TH(LH(n,this._dH),this[Gl].getUI(this[vA]).bodyBounds);this._fB={x:this._dH.x,y:this._dH.y,width:this._dH[jt],height:this._dH.height,location:n,outInsets:e};var s,h=this[vA]instanceof hW,r=zH(this[JT],h),a=TH(r,this._fB);this._fB.contentRect=qB(r), a[Pt]()||(this._fB[uP]=a, this._fB[WA]=a[ii]+a[Wt], this._fB[HA]=a.top+a[$t]), h?this._fB.segments=kH(this[vA][Ul].segments):this._fB[_P]=mH(this[vA],this._fB), (s=new eY(i,eY[dP],t,this.element))[mC]=this[He], s.position=this[He].p, i[CM](s);}},isKeepAspectRatio:function isKeepAspectRatio(t,i){return t.shiftKey;},_4Q:null,ondrag:function ondrag(t,i,n){if(this.element&&this[He]){lh!=(typeof n==="undefined"?"undefined":_typeof(n))&&(n=this[lP](t,this[vA]));var e,s,h,r,a,o,f=i.toLogical(t);if(this._4Q={evt:t,isUniform:n}, this[He]==this._rotatePoint){var c=(e=f.x, s=f.y, h=this.element.x, r=this.element.y, a=this[He][JA].x, o=this._oTB[JA].y, NU(h,r,e,s)-NU(h,r,a,o));c+=this[He][Rt]||0, n&&(c=Math[rr](c/Math.PI*4)*Math.PI/4);var u=this[vA].rotate;return this[vA][Rt]=c%(2*Math.PI), (O=new eY(i,eY[bP],t,this[vA]))[ki]=u, O[P]=this[vA][Rt], void i[CM](O);}var _,d,l,b,v,y,g,E,x,m,p,T,w,L,M,O,S=this._oTB.p[oi],A=f.x-this._oTB[JA].x,I=f.y-this[He][JA].y,C=MH(this._fB,S,A,I,this.element[Rt]);t.ctrlKey?lH(i):(x=LH(this._fB.location,C), m=this._fB[vP], _={x:x.x-m.left,y:x.y-m.top,width:x[jt]+m.left+m[Wt],height:x.height+m.top+m[$t]}, v=(b=C.position||S)[0], y=b[b.length-1], E=g=!1, fi===v?g=[_.x]:ci===v&&(g=[_.x+_.width]), ui===y?E=[_.y]:_i===y&&(E=[_.y+_[Xt]]), d={x:g,y:E}, _[Pi]=rM, (l=EH(i,_,[this[vA]],A,I,d.x,d.y)).x===A&&l.y===I||(A=l.x, I=l.y, C=MH(this._fB,S,A,I,this.element.rotate))), XH(this[vA])?(this._fB[uP]&&(C=wH(C,this._fB[uP])), this[vA][sy]=C):(n&&(p=this._fB, this[JT]instanceof BW&&this[JT][yP]&&(p=this[JT][yP]), (T=p[jt]/p.height)&&(w=C, L=T, ci===(M=S[0])||fi===M?w.height=w[jt]/L:w[jt]=w[Xt]*L)), (this.element instanceof hW?function(t,i,n){i.insets&&(n=wH(n,i[uP])), n[jt]||(n.width=.1), n.height||(n.height=.1);var e,s,h,r,a,o,f,c,u=(e=i[gP], [s=n[jt]/e.width,0,0,h=n[Xt]/e[Xt],n.x-e.x*s,n.y-e.y*h]),_=u[0],d=u[3],l=i[Mv];t.path.segments[Ae](function(t,i){t.points&&(t.points=l[i].map(function(t,i){return t*(i%2?d:_);}));}), pH(t,i[q_],0*(f=u)[c=0]+c*f[2]+f[4],(o=a=0, a*(r=u)[1]+o*r[3]+r[5])), t.firePathChange();}:function(t,i,n){var e,s=!t[Yo],h=i[q_],r=n.x-i.x,a=n.y-i.y;!i[_P]||(e=mH(t,n))&&(r+=e.x-i.anchorPoint.x, a+=e.y-i.anchorPoint.y), pH(t,h,r,a);var o={width:n[jt],height:n.height};i[uP]&&(o[jt]-=i[uP][ii]+i[uP].right, o.height-=i[uP].top+i[uP].bottom), s?t.setStyle(LW[wE],o):t.size=o;})(this[vA],this._fB,C)), (O=new eY(i,eY[EP],t,this[vA]))[mC]=this._oTB, O[af]=this[He].p, i.onInteractionEvent(O);}},enddrag:function enddrag(t,i){if(this._fB=null, this[vA]&&this._oTB){var n;if(lH(i), this[He]==this._rotatePoint){ return(n=new eY(i,eY.ROTATE_END,t,this.element)).value=this.element[Rt], void i.onInteractionEvent(n); }(n=new eY(i,eY[xP],t,this.element))[mC]=this[He], n.position=this[He].p, i[CM](n);}},onkeyup:function onkeyup(t,i){this._4Q&&this._4Q[mP]&&this.ondrag(this._4Q.evt,i,!1);},onkeydown:function onkeydown(t,i){return t[TM]&&this._4Q&&this[Ts](this._4Q.evt,i,!0), qN(this,jH,IC,arguments);}}, ZN(jH,_H), rU.ResizeInteraction=jH, QH.prototype={onstart2:function onstart2(t,i){this.onstart(t,i);},onstart:function onstart(t,i){var n,e;t[hI]||((n=t[Os]())&&!i.isSelectable(n)&&(n=null), n&&Kk(t)?(i.reverseSelect(n), e=new eY(i,eY[pP],t,i[Bn]), i[CM](e)):n&&i.selectionModel.isSelected(n)||(n?(i.setSelection(n), i[TP](n)):i[wP](null), e=new eY(i,eY[pP],t,i.selectionModel), i[CM](e)));},onkeydown:function onkeydown(t,i){27!=t[B_]?Kk(t)&&65==t.keyCode&&(i.selectAll(), OB(t)):i.unSelectAll();}}, UB.TOOLTIP_DURATION=3e3, UB[LP]=1e3, ZH.CLASS_NAME=MP, ZH.CURSOR_OFFSET_X=0, ZH[OP]=15, Ik(st+ZH[SP],{"user-select":hr,"background-color":AP,overflow:go,"box-shadow":"0 5px 10px rgba(136, 136, 136, 0.5)",color:aw,"pointer-events":hr,border:IP,padding:CP,display:dS,position:Md}), ZH[PP]=function(){return ZH.instance||(ZH[FP]=new ZH());}, ZH[RP]=function(t,i,n){ZH.getInstance().show(t,i,n);}, ZH[QC]=function(){ZH[PP]().hide();}, ZH.prototype={getTooltipElement:function getTooltipElement(){var t=this._nB;return t||((t=S.createElement(Yn)).className=ZH[SP], this._nB=t, S[Eo][re](t)), t;},update:function update(t,i){var n,e,s,h,r,a,o,f,c;this.isShowing()&&(n=_M==i, t&&!n&&(t=t.replace(/\n/g,DP)), e=this[NP](), n?e[BP]=t||'':e[kP]=t||'', s=e, h=this[UP].x+ZH.CURSOR_OFFSET_X, r=this[UP].y+ZH[OP], a=S.documentElement, o=new JB(u[vl],u.pageYOffset,a[ne]-2,a[Ol]-2), f=s[RI], c=s[XA], h+f>o.x+o.width&&(h=o.x+o[jt]-f), r+c>o.y+o.height&&(r=o.y+o[Xt]-c), h<o.x&&(h=o.x), r<o.y&&(r=o.y), s[jn][ii]=h+ra, s[jn].top=r+ra);},setTooltip:function setTooltip(t,i){if(!t||!t[GP]){ return this._info=null, this._nB&&(this._nB[jn][ad]=hr), void(this._oTE=Date.now()); }this[$P]=null, this[UP]=t, this[NP]()[jn].display='', this[NO](this._info[GP],this[UP].type), isNaN(i)&&(i=UB.TOOLTIP_DURATION), i&&this[WP](this[HP].bind(this,!1),i);},_oTE:null,_mB:null,stopTimer:function stopTimer(){this._mB&&(clearTimeout(this._mB), this._mB=null);},startTimer:function startTimer(t,i){this[YP](), this._mB=setTimeout(function(t){this._mB=null, t();}[$e](this,t),i);},show:function show(t,i,n){this[yC]()||this[$P]&&Date.now()-this[$P]<1e3?this.setTooltip(t,n):(isNaN(i)&&(i=UB[LP]), i?this[WP](this[HP][$e](this,t,n),i):this[HP](t,n));},isShowing:function isShowing(){return this._nB&&hr!==this._nB.style[ad];},hide:function hide(){this[YP](), this[yC]()&&this[HP](!1);}}, JH[_]={onstart:function onstart(t,i){this[Ds](i);},_kJ:null,onmousemove:function onmousemove(t,i){var n,e;i.enableTooltip&&((e=(n=t[Os]())?i.getTooltip(n,t):null)?ZH.show({target:n,content:e,type:n[jP],x:t[XP],y:t[gl]},i[zP],i.tooltipDuration):ZH.hide());},destroy:function destroy(t){ZH.hide();}}, qH[_]={destroy:function destroy(t){this[QP]&&(this[QP]=null);},onmousewheel:function onmousewheel(t,i){var n;!1!==i[ZP]&&t.delta&&(rU[cM](t), i.stopAnimation(), i.delayedRendering&&(n=(n=this[QP])||(this.delayAction=new tY(function(){i[qO](!1);})), i[qO](!0), n[VP](100)), i.zoomByMouseEvent(t,t[AC],!1));}}, iY.prototype={onclick:function onclick(t,i){i[JP](t,!Kk(t));}}, nY.prototype={onclick:function onclick(t,i){i[JP](t,Kk(t));}}, ZN(eY,ck), eY.ELEMENT_MOVE_START=iF, eY[sC]=nF, eY[rC]=eF, eY[AM]=sF, eY[hF]=rF, eY[SC]=aF, eY[FC]=oF, eY.POINT_MOVE_END=fF, eY.POINT_ADD=cF, eY[uF]=_F, eY[dP]=dF, eY[EP]=lF, eY.RESIZE_END=bF, eY[vF]=yF, eY.ROTATING=gF, eY[EF]=xF, eY[mF]=pF, eY[aC]=TF, eY[Zv]=wF, eY[zI]=LF, eY[pP]=fO, eY[MF]=OF, eY.SELECT_BETWEEN=SF, eY[YC]=AF, eY.LONG_CLICK=IF, DB(sY[_]={_oTG:function _oTG(t){if(this._interactionSupport){ switch(t[Ai]){case Ek[fn]:this._interactionSupport._4W(t[tn]);break;case Ek[pn]:this._interactionSupport._7N(t.data);} }},destroy:function destroy(){delete this._mC, delete this._4S, this[CF]&&(this[CF]._jG(), delete this[CF]);},_mC:null,_4S:null,defaultMode:null,_hO:function _hO(t,i,n){this._4S[t]=new xH(i,n), t==this.currentMode&&this[CF]._7O(i);},addCustomInteraction:function addCustomInteraction(t){this[CF]._9(t);},removeCustomInteraction:function removeCustomInteraction(t){this[CF]._6(t);},_oF:function _oF(t){return this._4S[t]||hY[t];}},{defaultCursor:{get:function get(){if(this[PF]){ return this[PF].defaultCursor; }}},currentMode:{get:function get(){return this[jO];},set:function set(t){this[jO]!=t&&(this[jO], this._interactionSupport||(this[CF]=new Vk(this._mC)), this._oWurrentMode=t, this[PF]=this._oF(this[jO]), this._mC[HO]=this[YO], this[PF]?this[CF]._7O(this[PF][FF](this._mC)):this[CF]._7O([]));}}});var hY={};function rY(t){this[Gl]=t;}UB.registerInteractions=function(t,i,n){var e=new xH(i,n);hY[t]=e;}, aU[RF]=DF, aU[tF]=UA, aU.INTERACTION_MODE_SELECTION=CI, aU[NF]=BF, aU[kF]=UF, aU[GF]=$F, aU[WF]=HF, aU[YF]=jF, aU.INTERACTION_MODE_CREATE_LINE=XF, UB.registerInteractions(aU[RF],[QH,GH,qH,BH,DH,JH,YH]), UB[zF](aU[GF],[NH,PH,QH,GH,qH,BH,JH]), UB[zF](aU.INTERACTION_MODE_CREATE_EDGE,[NH,$H,QH,SH,GH,qH,BH,JH]), UB[zF](aU[YF],[NH,IH,QH,GH,qH,BH,JH]), UB[zF](aU[VF],[CH,QH,GH,qH,BH,JH]), UB.registerInteractions(aU[tF],[NH,$H,jH,QH,UH,GH,qH,BH,DH,JH,YH]), UB.registerInteractions(aU[KF],[NH,$H,jH,QH,UH,HH,GH,qH,BH,DH,JH]), UB[zF](aU[NF],[qH,BH,iY],jk), UB[zF](aU.INTERACTION_MODE_ZOOMOUT,[qH,BH,nY],Xk), rU[QF]=GH, rU.SelectionInteraction=QH, rU[ZF]=UH, rU.WheelZoomInteraction=qH, rU[JF]=DH, rU.ExportInteraction=BH, rU[qF]=JH, rU[tR]=HH, rU[iR]=$H, rU.RectangleSelectionInteractionByRightButton=YH, (rU.Layouter=rY)[_]={getNodeBounds:function getNodeBounds(t){return this[Gl][nR](t);},isLayoutable:function isLayoutable(t,i){return this.graph[GA](t)&&!1!==t[eR];},getLayoutResult:function getLayoutResult(t){},updateLocations:function updateLocations(t,i,n,e,s){var h,r,a;if(!0===i){ return this[sR]||(this[sR]=new TY()), n&&(this.animate[cA]=n), e&&(this[sR][hR]=e), this[sR][rR]=t, s&&(h=s, r=this, s=function s(){h.call(r,t);}), void this[sR].start(s); }for(a in t){var o=t[a];o[aR][dO](o.x,o.y);}s&&s.call(this,t);},_hQ:function _hQ(t){var i,n,e,s=null;t&&(i=t.byAnimate, s=t[lg], n=t[cA], e=t.animationType);var h=this[oR](t);return!!h&&(this.updateLocations(h,i,n,e,s), h);},doLayout:function doLayout(t,i){if(!this[Gl]||!0===i){ return this._hQ(t); }this.graph.callLater(function(){this._hQ(t);},this);}}, aU[fR]=110, aU[cR]=120, aU[uR]=130, aU[_R]=210, aU[dR]=220, aU[lR]=230, aU[bR]=111, aU[vR]=112, aU[yR]=121, aU[gR]=122, aU.DIRECTION_BOTTOM_LEFT=211, aU[ER]=212, aU[xR]=221, aU[mR]=222;var aY=pR,oY=TR;function fY(t){return 100<=t&&t<200;}function cY(t){this[Gl]=t;}aU[wR]=aY, aU[LR]=MR, aU[OR]=SR, aU.LAYOUT_TYPE_TWO_SIDE=oY, rU.isHorizontalDirection=fY, cY[_]={hGap:50,vGap:50,parentChildrenDirection:210,layoutType:aY,defaultSize:{width:50,height:60},getNodeSize:function getNodeSize(t){if(this[Gl]._9F[Ie]){var i=this[Gl][Ss](t);if(i){ return i._hI; }}return t.image&&t[Yo][fo]?{width:t[Yo].bounds[jt],height:t.image[fo].height}:this[AR];},_e5:function _e5(t,i){var n,e,s,h=t.id;h in this[IR]||this[CR](t)&&(e=(n=this.getNodeSize(t))instanceof JB?[-n.x,-n.y]:[n[jt]/2,n.height/2], t.parentChildrenDirection, s=i?this[IR][i.id]:this[PR], this[IR][h]=new uY(this,this[FR](t),this[RR](t),this[DR](t),t[NR],s,t,n[jt],n[Xt],e));},getHGap:function getHGap(t){return t&&wB(t[BR])?t.hGap:this[BR];},getVGap:function getVGap(t){return t&&wB(t.vGap)?t.vGap:this[kR];},getLayoutType:function getLayoutType(t){return t&&t[UR]?t[UR]:this.layoutType;},_oU1:null,_oWI:null,_mR:function _mR(){this[IR]=null, this[PR]=null;},compareFn:null,getLayoutResult:function getLayoutResult(t){var i,n,e,s,h=this.graph;t instanceof Object&&(i=t.x, n=t.y, h=t[GR]||this.graph, e=t.bounds, s=t.undirected), this._oU1={}, this._oWI=new uY(this), this._oWI._oH(this.hGap,this[kR],this[NR],this[UR]);var r={};return LY(h,this._e5,this,!1,s)&&(this[PR]._hQ(i||0,n||0,r), e&&e.set(this[PR].x,this._oWI.y,this[PR][jt],this[PR][Xt])), this._mR(), r;},doLayout:function doLayout(t,i){var n,e;return wB(t)&&(n=t, e=0, wB(i)&&(e=i), t={x:n,y:e}, i=!0), qN(this,cY,$R,[t,i]);}}, ZN(cY,rY);var uY=function uY(t,i,n,e,s,h,r,a,o,f){this._iQ=t, this._o3=i||0, this._o4=n||0, this.layoutType=e, this[NR]=s, (this[WR]=h)&&h._iR(this), this[aR]=r, this._g4=a, this._e6=o, this[HR]=f;};function _Y(t){this[Gl]=t, this.currentMovingNodes={};}function dY(t,i,n,e){this[Gl]=t, wB(i)&&(this[Mi]=i), wB(n)&&(this.gap=n), wB(e)&&(this[yD]=e);}uY[_]={_iQ:null,_oH:function _oH(t,i,n,e){this._o3=t, this._o4=i, this[NR]=n, this[UR]=e;},_9H:function _9H(){this._hF=[];},_o3:0,_o4:0,_hF:null,_g4:0,_e6:0,layoutType:null,parentChildrenDirection:null,_iR:function _iR(t){this._hF||(this._hF=[]), this._hF[j](t);},_e7:function _e7(i,n,t,e,s){var h=new JB();return t(this._hF,function(t){t._49(i,n), h.add(t), e?i+=t.width+this._o3:n+=t.height+this._o4;},this), h;},_9I:function _9I(n,e,t,s,i){var h,r=s?this._o3:this._o4,a=s?this._o4:this._o3,o=s?"width":Xt,f=s?"height":jt,c=s?"_g4":YR,u=s?"_e6":jR,_=s?"hostDX":XR,d=s?"hostDY":zR,l=new JB(),b=0,v=0,y=[],g=0,E=0;t(this._hF,function(t){var i=v<=E;t._inheritedParentChildrenDirection=i?s?120:220:s?110:210, t._49(n,e), i?(y[j](t), b=Math.max(b,t[o]), v+=t[f]+a):((h=h||[]).push(t), g=Math.max(g,t[o]), E+=t[f]+a);},this), v-=a, E-=a;var x=Math.max(v,E),m=r,p=0;this.node&&(i&&(m+=this[c]+r, x>this[u]?this[d]=(x-this[u])/2:p=(this[u]-x)/2), this[_]=b+m/2-this[c]/2);var T,w=p;return jN(y,function(t){s?t[Rb](b-t[o],w):t.offset(w,b-t[o]), w+=a+t[f], l.add(t);},this), h&&(w=p, T=b+m, jN(h,function(t){s?t[Rb](T,w):t[Rb](w,T), w+=a+t[f], l.add(t);},this)), l;},offset:function offset(t,i){this.x+=t, this.y+=i, this[VR]+=t, this[KR]+=i, this._8E(t,i);},_oWK:function _oWK(t,i){return 2*this.cx-t-i-t;},_oWL:function _oWL(t,i){return 2*this.cy-t-i-t;},_o6:function _o6(t){if(this._hF&&0!=this._hF.length){if(t){ return this.node&&(this[VR]+=this[QR](this[VR],this._g4)), void jN(this._hF,function(t){t[Rb](this._oWK(t.x,t.width),0);},this); }this[aR]&&(this[KR]+=this[ZR](this[KR],this._e6)), jN(this._hF,function(t){t.offset(0,this[ZR](t.y,t[Xt]));},this);}},_8E:function _8E(i,n){this._hF&&jN(this._hF,function(t){t.offset(i,n);},this);},_49:function _49(t,i){var n;this.x=t||0, this.y=i||0, this._hF&&0!=this._hF[bt]?(this._iQ&&this._iQ[JR]&&(n=this._iQ.compareFn, this._hF[Td](function(t,i){return n(t.node,i[aR]);})), this._1U(this.x,this.y,this[UR])):this[aR]&&(this.width=this._g4, this[Xt]=this._e6, this[VR]=this.x, this[KR]=this.y);},_8F:function _8F(i){var t,n,e;this[aR]&&(n=(t=this[HR])[0], e=t[1], i[this[aR].id]={node:this[aR],x:this[VR]+n,y:this[KR]+e,left:this[VR],top:this[KR],width:this._g4,height:this._e6}), this._hF&&jN(this._hF,function(t){t._8F(i);},this);},_hQ:function _hQ(t,i,n){this._49(t,i), this._8F(n);},_1U:function _1U(t,i,n){var e,s=t,h=i;!this[NR]&&this[WR]&&(this.parentChildrenDirection=this[qR]||this.parentBounds[NR]);var r,a=this[NR],o=fY(a);this[aR]&&(r=120==a||122==a||121==a||220==a||221==a||222==a, (e=130==a||230==a)||(o?t+=this._g4+this._o3:i+=this._e6+this._o4));var f,c,u,_=this.node&&this.node.layoutReverse?XN:jN,d=0,l=0;(c=n==oY?this._9I(t,i,_,!o,e):(f=n==aY?!o:MR==n, this._e7(t,i,_,f,e)))&&!c[Pt]()&&(d=c[jt], l=c.height, this.add(c)), this[aR]&&(this[VR]=s, this.nodeY=h, this[zR]!==Y||this[XR]!==Y?(this.nodeX+=this[zR]||0, this[KR]+=this.hostDY||0):(u=210==a||220==a||120==a||110==a?1:212==a||222==a||122==a||112==a?0:2, o?(1==u?this[KR]+=l/2-this._e6/2:2==u&&(this.nodeY+=l-this._e6), h>this.nodeY&&this[Rb](0,h-this[KR])):(1==u?this[VR]+=d/2-this._g4/2:2==u&&(this.nodeX+=d-this._g4), s>this[VR]&&this[Rb](s-this[VR],0))), this[qt](this.nodeX,this[KR],this._g4,this._e6), r&&this._o6(o));},node:null,uiBounds:null}, ZN(uY,JB), _Y[_]={layoutDatas:null,isMovable:function isMovable(t){return!this.currentMovingNodes[t.id];},_7J:!1,_3P:function _3P(){this._7J=!0, this[Gl]._1G.addListener(this[tD],this), this.graph._1B.addListener(this._27,this);},_1L:function _1L(){this._7J=!1, this[Gl]._1G[VO](this[tD],this), this[Gl]._1B[VO](this._27,this);},invalidateFlag:!0,invalidateLayoutDatas:function invalidateLayoutDatas(){this.invalidateFlag=!0;},resetLayoutDatas:function resetLayoutDatas(){return this.invalidateFlag=!1, this[iD]=function(){
var this$1 = this;
var n,e,s={},h=[],r=0,a={},o=0;this[Gl][Ae](function(t){if(this[CR](t)){ if(t instanceof eW){var i={node:t,id:t.id,x:t.x+Math[z](),y:t.y+Math[z]()};for(this[nD]&&this.appendNodeInfo(t,i), s[t.id]=i, h.push(i), r++, e=t[Hi];e instanceof dW;){((n=n||{})[e.id]||(n[e.id]={id:e.id,children:[]}))[y][j](i), e=e[Hi];}}else { t instanceof q$&&!t[Yl]()&&t[xb]&&t[mb]&&(i={edge:t}, a[t.id]=i, o++); } }},this);var t,i={};for(t in a){var f,c,u=a[t],_=u.edge,d=_[xb],l=_[mb],b=d.id+Xn+l.id,v=l.id+Xn+d.id;s[d.id]&&s[l.id]&&!i[b]&&!i[v]?(f=s[d.id], c=s[l.id], u[Gb]=f, u.to=c, i[b]=u, this$1[eD]&&this$1.appendEdgeInfo(_,u)):(delete a[t], o--);}return{groups:n,nodesArray:h,nodes:s,nodeCount:r,edges:a,edgeCount:o,minEnergy:this[sD](r,o)};}[x](this);},_27:function _27(t){eY[hD]==t.kind?(this[rD]={}, t[Un][Ae](function(t){this[rD][t.id]=t;},this)):eY[rC]==t.kind&&(this[rD]={});},_oTH:function _oTH(t){this.invalidateLayoutDatas();},isRunning:function isRunning(){return this[aD]&&this[aD]._fC();},getLayoutResult:function getLayoutResult(t){this.stop(), this[oD]();for(var i=this[fD](this.layoutDatas[cD]||0,this[iD][uD]||0),n=0;n<i&&!1!==this[_D](!1);n++){}var e=this[iD].nodes;return this.onstop(), e;},_nE:function _nE(){return!1;},step:function step(t){
var this$1 = this;
if(!1===t){ return this._nE(this.timeStep); }!this[aS]&&this.layoutDatas||this[oD]();var i,n=this._nE(t),e=this.layoutDatas[$A];for(i in e){var s=e[i],h=s[aR];this$1.isMovable(h)?h[dO](s.x,s.y):(s.x=h.x, s.y=h.y, s.vx=0, s.vy=0);}return n;},onstop:function onstop(){delete this[iD];},start:function start(t){if(this.isRunning()){ return!1; }this._7J||this._3P(), this._lJr||(this[dD]=function(t){return this[_D](t);}[$e](this)), this[lD](), this[aD]=new Zk(this[dD]);var i=this;return this.timer._mF(function(){i.onstop(), t&&t();}), !0;},stop:function stop(){this.timer&&(this[aD]._nK(), this[bD]());},getMaxIterations:function getMaxIterations(t,i){return Math.min(1e3,3*t+10);},minEnergyFunction:function minEnergyFunction(t,i){return 10+Math.pow(t+i,1.4);},resetGraph:function resetGraph(){this._7J||this._3P(), this[oD]();},destroy:function destroy(){this[vD](), this._1L();}}, ZN(_Y,rY), rU[gD]=dY;var lY=ED,bY=xD,vY=mD;aU[pD]=lY, aU.ANGLE_SPACING_REGULAR=bY, aU.RADIUS_MODE_UNIFORM=TD, aU[wD]=vY, dY.prototype={angleSpacing:lY,radiusMode:vY,gap:4,radius:50,startAngle:0,_oU1:null,_oWI:null,_mR:function _mR(){this[IR]=null, this[PR]=null;},getLayoutResult:function getLayoutResult(t){var i,n=0,e=0,s=this[Gl];t instanceof Object&&(n=t.cx||0, e=t.cy||0, s=t.root||this.graph, i=t[fo]), this[IR]={}, this[PR]=new yY(this);var h={};return MY(s,this._e5,this)&&(this[PR]._hF&&1==this._oWI._hF.length&&(this[PR]=this[PR]._hF[0]), this[PR]._g7(!0), this._oWI._6Q(n,e,this[yD],h,i)), this._mR(), h;},_e5:function _e5(t,i){var n;this.isLayoutable(t)&&(n=i?this[IR][i.id]:this._oWI, this[IR][t.id]=new yY(this,t,n));},defaultSize:40,getRadius:function getRadius(t,i,n){return this.radius;},getNodeSize:function getNodeSize(t,i,n){if(this[Gl]._9F._oUQ){var e=this[Gl][Ss](t);if(e){ return(e._hI[jt]+e._hI.height)/2; }}return this[AR];},getGap:function getGap(t,i,n){return this.gap;},_37:function _37(t,i,n){return this[LD](t,i,n)+this[MD](t,i,n);}};var yY=function yY(t,i,n){this.layouter=t, i&&(this._oA=i, this.id=i.id), n&&(n._iR(this), n._o8=!1, this._n1=n._n1+1);},R$=2*Math.PI;yY.prototype={_mY:0,_n0:0,_lY:0,_g6:0,_e9:0,_n1:0,_o8:!0,_o9:0,_iT:0,_hF:null,_oA:null,_iR:function _iR(t){this._hF||(this._hF=[]), this._hF[j](t), t.parent=this;},_iV:function _iV(i){this._n0=(this._n0+i)%R$, this._hF&&(1!=this._hF[bt]?(i=this._n0+Math.PI, jN(this._hF,function(t){t._iV(i);},this)):this._hF[0]._iV(this._n0));},_9J:0,_8G:function _8G(t){return this._oA&&(this._iT=this.layouter._37(this._oA,this._n1,this._o8)/2), this._hF?(this._iT, this._9J=this._hF.length, this._9J<=2||this.layouter[OD]==bY?function(t){var i=this._9J,n=2*Math.PI/i,e=0,s=!t&&1<i?-n/2:0;return jN(this._hF,function(t){t._n0=s%R$, s+=n, t._mY=n;var i=t._g7();e<i&&(e=i);},this), [e,n];}.call(this,t):function(e){var n,s,h,r,a,t=this._hF[bt],o=0,f=0;return jN(this._hF,function(t){var i=t._g7();i<1&&(i=1), f+=i, o<i&&(o=i, n=t);},this), 1<t&&(h={}, r=f/t/3, f=s=0, jN(this._hF,function(t){var i=t._o9;i<r&&(i=r), h[t.id]=i, f+=i;},this), a=R$/f, jN(this._hF,function(t,i){var n=h[t.id]*a;0===i&&(s=e?-n/2:-n), t._n0=s+n/2, t._mY=n, s+=n;},this)), [o,n._mY];}.call(this,t)):null;},_g7:function _g7(t){var i=this._8G(t);if(!i){ return this._o9=this._iT; }var n,e=i[0],s=i[1],h=this[SD][AD](this._oA,this._n1);return h<this._iT&&(h=this._iT), this._g6=h, this._iT+e>h&&(h=this._iT+e), e&&1<this._9J&&s<Math.PI&&h<(n=e/Math.sin(s/2))&&(h=n), this._lY=h, this._o9=h+e, this._oA&&this._hF&&this[SD][ID]==vY&&jN(this._hF,function(t){var i=t._o9;1==t._9J&&(i/=2);var n,e=this._iT+i,s=t._mY;s&&s<Math.PI&&i<(n=i/Math.sin(s/2))&&(i=n), i<e&&(i=e), t._e9=i;},this), this._oA&&!t||this._iV(0), this._o9;},_6Q:function _6Q(h,r,a,o,f){var c,u;this._oA&&(o[this._oA.id]={x:h,y:r,node:this._oA}, f&&f[qt](h-this._iT/2,r-this._iT/2,this._iT,this._iT)), this._hF&&(this._oA||1!=this._hF.length?(a=a||0, c=this._lY, u=this._g6, jN(this._hF,function(t){var i=c;t._e9&&(i=Math.max(u,t._e9));var n=t._n0+a,e=h+i*Math.cos(n),s=r+i*Math.sin(n);t._6Q(e,s,a,o,f);},this)):this._hF[0]._6Q(h,r,a,o,f));}}, ZN(dY,rY);var gY=function gY(t){JN(this,gY,arguments);};ZN(gY,pY);var EY=function EY(t,i){(this.node1=t)==(this.node2=i)?(this[Yl]=!0, this._n2=t._m6):this._n2=new GB(), this._9L=[], this._iW=UB.EDGE_BUNDLE_EXPANDED;};function xY(t){t.fx-=t.x*this[VD], t.fy-=t.y*this[VD];}function mY(t){var i,n,e,s,h,r,a,o,f,c;0!=t.k&&(i=this._dK, n=t[Gb], r=(s=(e=t.to).x-n.x)*s+(h=e.y-n.y)*h, o=((a=Math[Dt](r)||.1)-i)*t.k*this[KD], f=(o/=a)*s, c=o*h, e.fx-=f, e.fy-=c, n.fx+=f, n.fy+=c);}function pY(t){JN(this,pY,arguments);}UB.EDGE_BUNDLE_EXPANDED=!0, EY[_]={node1:null,node2:null,_n2:null,_iW:UB.EDGE_BUNDLE_EXPANDED,_9L:null,_iY:null,agentEdge:null,_oWN:function _oWN(i,n,e){this._n2[Ae](function(t){if(!e||t[Zb]==e||t[xb]==e){ return i[x](n,t); }});},_6S:0,_6T:0,_kL:function _kL(t,i){if(!1===this._n2.add(t)){ return!1; }i==this[CD]?this._6S++:this._6T++, this[Ie]?this._18(t):this[Ie]=!0;},_eA:function _eA(t,i){if(!1===this._n2[B](t)){ return!1; }i==this.node1?this._6S--:this._6T--, this._18(t), this._n2[Ae](function(t){t[bb]=!0, t[eb]=!0;},this);},_18:function _18(t){this._dABindableFlag=!0, this._71=!0, t._edgeBundleInvalidateFlag=!0, t[eb]=!0;},invalidate:function invalidate(){this._dA();},_dA:function _dA(){this._71||(this._71=!0, this._n2[Ae](function(t){t[bb]=!0;}));},isEmpty:function isEmpty(){return this._n2.isEmpty();},isPositiveOrder:function isPositiveOrder(t){return this.node1==t[Zb]||this[CD]==t[xb];},canBind:function canBind(t){return t&&this._71&&this[Zo](t), 1<this._n2[bt]&&1<this._9L.length;},_jM:function _jM(t){return this._9L.indexOf(t);},getYOffset:function getYOffset(t){return this._iY[t.id];},_5G:function _5G(t){
var this$1 = this;
if(this[PD]()){var i={},n=this._9L[bt];if(!(n<2)){var e=0;i[(h=this._9L[0]).id]=0;for(var s=1;s<n;s++){var h=this$1._9L[s];e+=t.getStyle(h,LW.EDGE_BUNDLE_GAP)||WW[LW.EDGE_BUNDLE_GAP], i[h.id]=e;}if(!this[Yl]&&e){ for(var r=e/2,s=0;s<n;s++){i[(h=this$1._9L[s]).id]-=r;} }this._iY=i;}}else { this._iY={}; }},_oWO:function _oWO(t){return this._iW!=t&&(this._iW=t, this._dA(), !0);},reverseExpanded:function reverseExpanded(){return this[FD](!this._iW);},_1C:function _1C(){var i;this._9L[bt]=0, this._n2[Ae](function(t){if(t[RL]()){if(!this[RD](t)){ return void(i=i||[]).push(t); }this._9L[j](t);}},this), i&&(this._9L=i[R](this._9L));},_fJ:function _fJ(t){return t==this[DD]||!this[PD]()||this._iW;},validate:function validate(t){this._71=!1, this._n2.forEach(function(t){t._edgeBundleInvalidateFlag=!1;}), this[ND]&&(this._1C(), this[ND]=!1), 1<this._9L[bt]&&this.sortBindingEdges instanceof Function&&this[BD](this._9L);var i=this._iW,n=!this.canBind()||i;if(jN(this._9L,function(t){t._$r=!0, (t[kD]=n)&&(t[eb]=!0);},this), !n){ return this[UD](this._9L[0],t), this[DD][kD]=!0, void(this[DD][eb]=!0); }this[UD](null,t), this._5G(t);},_oU2:function _oU2(t,i){if(t!=this.agentEdge){var n=this[DD];return this[DD]=t, i&&i._5C(new uk(this,DD,t,n)), !0;}}}, DB(EY[_],{bindableEdges:{get:function get(){return this._9L;}},edges:{get:function get(){return this._n2._l1;}},length:{get:function get(){return this._n2?this._n2.length:1;}},expanded:{get:function get(){return this._iW;},set:function set(t){this[FD](t);}}}), pY.prototype={appendNodeInfo:function appendNodeInfo(t,i){i[HD]=t[QD]||1, i.fx=0, i.fy=0, i.vx=0, i.vy=0;},appendEdgeInfo:function appendEdgeInfo(t,i){i.k=t[ZD]||1;},setMass:function setMass(t,i){t[QD]=i, this.layoutDatas&&this.layoutDatas[$A]&&(t=this[iD].nodes[t.id])&&(t[HD]=i);},setElasticity:function setElasticity(t,i){t[ZD]=i, this[iD]&&this[iD].edges&&(t=this[iD].edges[t.id])&&(t.k=i);},_dK:50,_k0:.5,timeStep:.05,repulsion:100,attractive:.1,elastic:3,_nG:1e3,_lG:function _lG(t){return this._nG+.3*(t-this._nG);},_nE:function _nE(t,i){
var this$1 = this;
var n=this[iD][$A];for(h in n){var e=n[h];i&&(e.x+=Math[z]()-.5, e.y+=Math[z]()-.5), xY[x](this$1,e);}var s=this[iD].groups;if(s){ for(var h in s){var r=s[h][y],a=0,o=0;r[Ae](function(t){a+=t.x, o+=t.y;}), a/=r[bt], o/=r[bt];var f=10*this$1[VD];r[Ae](function(t){t.fx-=(t.x-a)*f, t.fy-=(t.y-o)*f;});} }var c=(c=this._nbodyForce)||(this[JD]=function(){var d=-1e6;function e(t,i){this[aR]=t, this.body=i;}function t(){this[GD]=[], this[$D]=0;}function i(){this.body=null, this[WD]=[], this[HD]=0, this[YD]=0, this[jD]=0, this[ii]=0, this.top=0, this[$t]=0, this[Wt]=0, this[XD]=!1;}function g(){var t;return n[l]?((t=n[l])[WD][0]=null, t.quads[1]=null, t[WD][2]=null, t.quads[3]=null, t.body=null, t.mass=t[YD]=t[jD]=0, t[ii]=t.right=t.top=t[$t]=0, t[XD]=!1):(t=new i(), n[l]=t), ++l, t;}function E(t,i){var n=Math.abs(t.x-i.x),e=Math.abs(t.y-i.y);return n<1e-8&&e<1e-8;}t[_]={isEmpty:function isEmpty(){return 0===this[$D];},push:function push(t,i){var n=this[GD][this[$D]];n?(n[aR]=t, n[Eo]=i):this[GD][this[$D]]=new e(t,i), ++this[$D];},pop:function pop(){if(0<this[$D]){ return this.stack[--this[$D]]; }},reset:function reset(){this.popIdx=0;}};var u=[],x=new t(),n=[],l=0,m=g();return{init:function init(t,i){d=i;for(var n=Number[ti],e=Number[ti],s=Number.MIN_VALUE,h=Number.MIN_VALUE,r=t,a=r[bt],o=a;o--;){var f=r[o].x,c=r[o].y;f<n&&(n=f), s<f&&(s=f), c<e&&(e=c), h<c&&(h=c);}var u=s-n,_=h-e;for(_<u?h=e+u:s=n+_, l=0, (m=g())[ii]=n, m[Wt]=s, m.top=e, m[$t]=h, o=a;o--;){!function(t){for(x[zD](), x[j](m,t);!x[Pt]();){var i=x.pop(),n=i.node,e=i[Eo];if(n[XD]){var s=e.x,h=e.y;n[HD]=n[HD]+e[HD], n[YD]=n.massX+e.mass*s, n[jD]=n[jD]+e[HD]*h;var r,a,o=0,f=n[ii],c=(n.right+f)/2,u=n.top,_=(n.bottom+u)/2;c<s&&(o+=1, r=f, c+=(f=c)-r), _<h&&(o+=2, a=u, _+=(u=_)-a);var d=n.quads[o];d||((d=g()).left=f, d.top=u, d.right=c, d.bottom=_, n.quads[o]=d), x[j](d,e);}else if(n[Eo]){var l=n.body;if(n[Eo]=null, n[XD]=!0, E(l,e)){if(n.right-n[ii]<1e-8){ return; }do{var b=Math.random(),v=(n.right-n[ii])*b,y=(n[$t]-n.top)*b;l.x=n[ii]+v, l.y=n.top+y;}while(E(l,e));}x[j](n,l), x[j](n,e);}else { n[Eo]=e; }}}(r[o]);}},update:function update(t){var i,n,e,s,h=u,r=1,a=0,o=1;for(h[0]=m;r;){var f=h[a],c=f.body;--r, a+=1, c&&c!==t?(n=c.x-t.x, e=c.y-t.y, 0===(s=Math[Dt](n*n+e*e))&&(n=(Math.random()-.5)/50, e=(Math.random()-.5)/50, s=Math[Dt](n*n+e*e)), (i=d*c[HD]*t[HD]/(s*s))<-1e3&&(i=-1e3), i/=s, t.fx=t.fx+i*n, t.fy=t.fy+i*e):(f[HD]||(f.mass=1), n=f[YD]/f[HD]-t.x, e=f[jD]/f[HD]-t.y, 0===(s=Math[Dt](n*n+e*e))&&(n=(Math[z]()-.5)/50, e=(Math[z]()-.5)/50, s=Math[Dt](n*n+e*e)), (f[Wt]-f[ii])/s<.8?((i=d*f.mass*t.mass/(s*s))<-1e3&&(i=-1e3), i/=s, t.fx=t.fx+i*n, t.fy=t.fy+i*e):(f[WD][0]&&(h[o]=f[WD][0], r+=1, o+=1), f[WD][1]&&(h[o]=f[WD][1], r+=1, o+=1), f[WD][2]&&(h[o]=f.quads[2], r+=1, o+=1), f.quads[3]&&(h[o]=f.quads[3], r+=1, o+=1)));}}};}());for(h in c[MS](this$1[iD][qD],-this$1[tN]*this$1.repulsion*this$1.repulsion), n){c[NO](n[h]);}if(this[KD]){var u=this[iD][iv];for(h in u){mY[x](this$1,u[h]);}}return this._nI(t);},_nI:function _nI(t){
var this$1 = this;
var i,n=this.layoutDatas[iN],e=this[iD][$A],t=this[nN],s=0,h=this._k0;for(i in e){var r,a,o,f,c=e[i];this$1[eN]&&this$1.isFixed(c[aR])?c.vx=c.vy=0:(r=c.fx/c.mass, a=c.fy/c[HD], o=c.vx+=r*t, f=c.vy+=a*t, c.x+=o*t, c.y+=f*t, s<n&&(s+=2*(o*o+f*f)), c.vx*=h, c.vy*=h), c.fx=0, c.fy=0;}return n<=(this[iD].currentEnergy=s);},isFixed:null}, ZN(pY,_Y), rU.SpringLayouter=pY;var TY=function TY(t){this[rR]=t;};function wY(i,n,e,s,h,r){if(n instanceof xk){ return i(n,e,s,h,r), n; }if(n instanceof tH){var a=new GB();n[mM].forEach(function(t){n.isVisible(t)&&(t._jR()&&t._iW&&t[E]()?t[dv]&&(t.$location.invalidateFlag=!1):a.add(t));}), n=a;}else if(Array[G](n)){ n=new GB(n); }else if(!(n instanceof GB)){ throw new Error(fN); }return o=n, c=new GB(), o[Ae](function(t){var i,n;t instanceof eW&&(n=!1, t.forEachInEdge(function(t){if(o[Zi](t)&&!t.isLooped()){ return!(n=!0); }}), n?!f&&(i=!1, t.forEachOutEdge(function(t){if(o.contains(t)&&!t[Yl]()){ return!(i=!0); }}), i)&&(f=t):c.add(t));}), c[Pt]()&&f&&c.add(f), (n=c)[Ae](function(t){i(t,e,s,h,r);}), n;var o,f,c;}TY[_]={oldLocations:null,_g9:null,duration:700,animationType:nU[sN],_8H:function _8H(t){
var this$1 = this;
if(this._g9=t, this[hN]={}, t){ for(var i in t){var n=t[i][aR];this$1[hN][i]={x:n.x,y:n.y};} }},setLocation:function setLocation(t,i,n){t[dO](i,n);},forEach:function forEach(t,i){
var this$1 = this;
for(var n in this$1.locations){var e=this$1.oldLocations[n],s=this$1.locations[n];t.call(i,e,s);}},_lZ:function _lZ(h,t,i,n){this.forEach(function(t,i){var n=i.node,e=t.x+(i.x-t.x)*h,s=t.y+(i.y-t.y)*h;this[dO](n,e,s);},this);},stop:function stop(){this[rN]&&this[rN]._nK();},start:function start(t){this[rN]?(this._oTnimate._nK(), this._oTnimate._k3=this.duration, this[rN][aN]=this[hR], this[rN][oN]=this._onfinish):this._oTnimate=new eU(this._lZ,this,this[cA],this[hR]), this._oTnimate._mF(t);}}, DB(TY[_],{locations:{get:function get(){return this._g9;},set:function set(t){this._g9!=t&&this._8H(t);}}});var LY=function LY(t,i,n,e,s){return wY(OY,t,i,n,e,s);},MY=function MY(t,i,n,e,s){return wY(AY,t,i,n,e,s);};_W[_][cN]=function(t,i,n,e){LY(this,t,i,n,e);}, _W[_].forEachByTopoBreadthFirstSearch=function(t,i,n,e){t instanceof Object&&1==arguments[bt]&&(i=t.scope), MY(this,t,i,n,e);}, rU[cN]=LY, rU[uN]=MY;var OY=function OY(t,i,n,e,s,h,r,a){!function i(n,e,s,h,r,a,o,t){n[_N]=a, h||e[x](s,n,t,o), SY(n,function(t){i(t,e,s,h,r,a,o+1,n);},t,r,a), h&&e.call(s,n,t,o);}(t,i,n,e,s,{},0);};function SY(n,e,s,t,h){t?n.forEachEdge(function(t){var i=t.otherNode(n);i!=s&&i._marker!=h&&e(i,n);},this,!0):n[dN](function(t){var i=t.toAgent;i!=s&&i._marker!=h&&e(i,n);});}var AY=function AY(t,i,n,e,s){!function t(i,e,s,h,r,a,o){var f,c=i[bt];i[Ae](function(t,i){var n=t.v;n[_N]=a, h||e[x](s,n,t[lN],o,i,c), SY(n,function(t){f=f||[], t._marker=a, f.push({v:t,_from:n});},n,r,a);}), f&&t(f,e,s,h,r,a,o+1), h&&i.forEach(function(t,i){e.call(s,t.v,t[lN],o,i,c);});}([{v:t}],i,n,e,s,{},0);};rU[bN]=FB, rU.log=function(t){u.console&&console.log[b](console,arguments);}, rU[co]=kB, rU[vN]=function(t){u[ht]&&console[vN](t);}, rU.isIE=aB, rU[yN]=rB, rU[gN]=cB, rU[EN]=uB, rU[xN]=_B, rU[mN]=lB, rU[pN]=dB, rU[TN]=bB, rU[wN]=WW, rU[LN]=UB, rU[TO]=LW, rU[MN]=aU, rU[ON]=OG, rU[SN]=tH, rU[AN]=xW, rU.ElementUI=DW, rU.NodeUI=$W, rU[gI]=GW, rU.LabelUI=kW, rU.ImageUI=BW, rU[IN]=rW, rU[CN]=vG, rU.Gradient=tG, rU.InteractionEvent=eY, rU[PN]=V$, rU[vM]=eW, rU[LO]=q$, rU.GraphModel=_W, rU[FN]=EY, rU[RN]=cY, rU.name=hd;var IY=DN;return rU[H_]=BN, rU.css=Sk, rU[kN]={draw:function draw(t,i){}}, rU[$_]=UN, rU;};

/* eslint-disable */
var T = TK(window, document);

// MapChart函数
(function (T) {
  var basicProjection = function basicProjection(scale) {
    if (isNaN(scale)) {
      scale = 20;
    }
    var translator = function translator(x, y) {
      return { x: x * scale, y: -y * scale };
    };
    translator.invert = function (x, y) {
      return { x: x / scale, y: -y / scale };
    };
    return translator;
  };

  T.basicProjection = basicProjection;

  var createPolygon = function createPolygon(coordinates, projection, isMultiPolygon) {
    var path = new T.Path();
    function updateShape(coordinates) {
      if (coordinates.length < 2) {
        throw new Error('coordinates length must be greater than or equal to 2');
        return;
      }
      var coordinate = coordinates[0];
      var p = projection(coordinate[0], coordinate[1]);
      path.moveTo(p.x, p.y);
      var i = 1;
      while (i < coordinates.length) {
        p = projection(coordinates[i][0], coordinates[i][1]);
        path.lineTo(p.x, p.y);
        i++;
      }
      return path;
    }
    if (isMultiPolygon) {
      coordinates.forEach(function (cs) {
        cs.forEach(updateShape);
      });
      return path;
    }
    coordinates.forEach(updateShape);
    return path;
  };
  function _loadGeoJSON(json, projection, callback, onfinish, scope) {
    if (T.isString(json)) {
      T.loadJSON(json, function (json) {
        _loadGeoJSON(json, projection, callback, onfinish, scope);
      }, false);
      return;
    }
    var features = json.features;
    features.forEach(function (feature$$1) {
      callback.call(scope, feature$$1);
    });
    if (onfinish) {
      onfinish.call(scope, scope);
    }
  }

  var MapChart = function MapChart(div) {
    T.doSuperConstructor(this, MapChart, arguments);
    this.visibleFilter = function (d) {
      var scale = this.getScale();
      if (d.minScale) {
        if (scale < d.minScale) {
          return false;
        }
      }
      if (d.maxScale) {
        if (scale > d.maxScale) {
          return false;
        }
      }
      return true;
    }.bind(this);

    this.onPropertyChange('scale', function (evt) {
      this.forEach(function (e) {
        e.invalidateVisibility(true);
      });
    }.bind(this));
  };

  MapChart.prototype = {
    _projection: basicProjection(),
    centerElement: function centerElement(element) {
      var bounds = this.getUIBounds(element);
      if (bounds) {
        var minScale = Math.min(2, 0.5 * Math.min(this.width / bounds.width, this.height / bounds.height));
        this.centerTo(bounds.cx, bounds.cy, minScale, true);
      }
    },
    getScale: function getScale() {
      return this.scale;
    },
    stylingPolygon: function stylingPolygon(polygon) {
      polygon.setStyle(T.Styles.LABEL_ON_TOP, true);
      polygon.setStyle(T.Styles.LABEL_FONT_SIZE, 15);
      polygon.setStyle(T.Styles.LABEL_POSITION, T.Position.CENTER_MIDDLE);
      polygon.setStyle(T.Styles.LAYOUT_BY_PATH, false);
      polygon.setStyle(T.Styles.LABEL_BACKGROUND_COLOR, T.toColor(0xAAFFFFFF));
      polygon.setStyle(T.Styles.LABEL_PADDING, new T.Insets(2, 5));
      polygon.setStyle(T.Styles.LABEL_POINTER, false);
      polygon.setStyle(T.Styles.SHAPE_FILL_COLOR, null);
      polygon.setStyle(T.Styles.SHAPE_STROKE, 2);
    },
    loadGeoJSON: function loadGeoJSON(geoJSON, params) {
      params = params || {};
      var zIndex = params.zIndex || -1;
      _loadGeoJSON(geoJSON, this._projection, function (feature$$1) {
        var geometry = feature$$1.geometry;
        if (!geometry || !geometry.coordinates) {
          return;
        }
        var type = geometry.type;
        var properties = feature$$1.properties;
        var name = properties.name || properties.NAME;
        var element = void 0;
        if (type == 'Polygon' || type == 'MultiPolygon') {
          var path = createPolygon(geometry.coordinates, this._projection, type == 'MultiPolygon');
          element = new T.ShapeNode(path);
          element.zIndex = zIndex;
          element.resizable = false;
          element.movable = false;
          this.stylingPolygon(element, properties);
          this.addElement(element);
        } else if (type == 'Point') {
          element = this.createMapNode(name, geometry.coordinates[0], geometry.coordinates[1]);
          this.addElement(element);
        }
        if (element) {
          if (name) {
            element.name = name.trim();
          }
          element.set('properties', properties);
        }
        if (params.callback instanceof Function) {
          params.callback.call(this, element, feature$$1);
        }
      }, params.onfinish, this);
    },
    createMapNode: function createMapNode(name, geoX, geoY) {
      var xy = this.geoToLogical(geoX, geoY);
      return this.createNode(name, xy.x, xy.y);
    },
    createLine: function createLine(coordinates, name) {
      return this.createShape(coordinates, name, true);
    },
    createPolygon: function createPolygon(coordinates, name) {
      return this.createShape(coordinates, name, false);
    },
    createShape: function createShape(coordinates, name, isLine) {
      var this$1 = this;

      if (coordinates.length < 2) {
        throw new Error('coordinates length must be greater than or equal to 2');
        return;
      }
      var shape = new T.ShapeNode(name);
      shape.isLine = isLine;
      shape.setStyle(T.Styles.SHAPE_FILL_COLOR, isLine ? null : T.toColor(0xDDFFFFDD));
      shape.setStyle(T.Styles.SHAPE_STROKE, 3);
      shape.setStyle(T.Styles.SHAPE_STROKE_STYLE, '#0033ff');

      var p = this.geoToLogical(coordinates[0]);
      shape.moveTo(p.x, p.y);
      var i = 1;
      while (i < coordinates.length) {
        p = this$1.toPixel(coordinates[i]);
        shape.lineTo(p.x, p.y);
        i++;
      }
      if (!isLine) {
        shape.closePath();
      }
      this.graphModel.add(shape);
      return shape;
    },
    defaultMatchType: 'fuzzy',
    getElementByName: function getElementByName(name, matchType) {
      return this._findElementsBy(true, "name", name, matchType);
    },
    findElementsByName: function findElementsByName(name, matchType) {
      return this._findElementsBy(false, "name", name, matchType);
    },
    getElementBy: function getElementBy(propertyName, propertyValue, matchType) {
      return this._findElementsBy(true, propertyName, propertyValue, matchType);
    },
    findElementsBy: function findElementsBy(propertyName, propertyValue, matchType) {
      return this._findElementsBy(false, propertyName, propertyValue, matchType);
    },
    _findElementsBy: function _findElementsBy(getFirst, propertyName, propertyValue, matchType) {
      var matchFunction = getMatchFunction(matchType || this.defaultMatchType, propertyValue);
      var datas = this.graphModel.datas;
      for (var i = 0, l = datas.length; i < l; i++) {
        var data = datas[i];
        if (matchFunction(data[propertyName])) {
          if (getFirst) {
            return data;
          }
          result.push(data);
        }
      }
      if (!getFirst) {
        return result;
      }
    },
    geoToLogical: function geoToLogical(x, y) {
      if (T.isArray(x)) {
        y = x[1];
        x = x[0];
      }
      return this._projection(x, y);
    },
    logicalToGeo: function logicalToGeo(x, y) {
      if (T.isArray(x)) {
        y = x[1];
        x = x[0];
      }
      return this._projection.invert(x, y);
    },
    updateShape: function updateShape(shape) {
      var this$1 = this;

      var coordinates = shape.coordinates;
      var isLine = shape.isLine;
      if (coordinates.length < 2) {
        throw new Error('coordinates length must be greater than or equal to 2');
        return;
      }
      shape.setLocation(0, 0);
      shape.clear();
      var p = this.geoToLogical(coordinates[0]);
      shape.moveTo(p.x, p.y);
      var i = 1;
      while (i < coordinates.length) {
        p = this$1.geoToLogical(coordinates[i]);
        shape.lineTo(p.x, p.y);
        i++;
      }
      if (!isLine) {
        shape.closePath();
      }
      return shape;
    },
    updateProjection: function updateProjection() {
      this.forEach(function (d) {
        if (d instanceof T.ShapeNode) {
          if (!d.coordinates) {
            return;
          }
          this.updateShape(d);
          return;
        }
        if (d instanceof T.Node) {
          var l = d.latLng;
          if (l) {
            d.location = this.geoToLogical(l.lng, l.lat);
          }
        }
      }, this);
    }
  };

  T.extend(MapChart, T.Graph);

  Object.defineProperties(MapChart.prototype, {
    projection: {
      get: function get() {
        return this._projection;
      },
      set: function set(v) {
        this._projection = v;
        this.updateProjection();
      }
    }
  });

  var MATCH_TYPE_EXACT = "exact";
  var MATCH_TYPE_START = "start";

  function getMatchFunction(matchType, v1) {
    if (!T.isString(v1) || matchType == MATCH_TYPE_EXACT) {
      return function (v2) {
        return v1 == v2;
      };
    }
    var reg = void 0;
    if (matchType == MATCH_TYPE_START) {
      reg = new RegExp("\\b" + v1, "i");
    } else {
      reg = new RegExp(v1, "i");
    }
    return function (v2) {
      return reg.test(v2);
    };
  }
  T.MapChart = MapChart;
})(T);

// TopoJSON函数
(function (T, MapChart) {
  MapChart.prototype.loadTopoJSON = function (json, params) {
    var this$1 = this;

    if (T.isString(json)) {
      T.loadJSON(json, function (json) {
        this.loadTopoJSON(json, params);
      }.bind(this), false);
      return;
    }
    if (!json.objects) {
      return;
    }
    for (var n in json.objects) {
      var geojson = topojson.feature(json, json.objects[n]);
      if (geojson) {
        this$1.loadGeoJSON(geojson, params, n);
      }
    }
  };
})(T, T.MapChart);

// Winkel3 地图投影
(function (T) {
  var PER_RADIAN = Math.PI / 180;

  function degreeToRadian(d) {
    return PER_RADIAN * d;
  }

  function radianTodegree(r) {
    return r / PER_RADIAN;
  }

  var ε = 1e-6,
      ε2 = ε * ε,
      π = Math.PI,
      τ = 2 * π,
      τε = τ - ε,
      halfπ = π / 2;

  function sinci(x) {
    return x ? x / Math.sin(x) : 1;
  }

  function acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }

  function aitoff(λ, φ) {
    var cosφ = Math.cos(φ),
        sinciα = sinci(acos(cosφ * Math.cos(λ /= 2)));
    return [2 * cosφ * Math.sin(λ) * sinciα, Math.sin(φ) * sinciα];
  }

  aitoff.invert = function (x, y) {
    if (x * x + 4 * y * y > π * π + ε) { return; }
    var λ = x,
        φ = y,
        i = 25;
    do {
      var sinλ = Math.sin(λ),
          sinλ_2 = Math.sin(λ / 2),
          cosλ_2 = Math.cos(λ / 2),
          sinφ = Math.sin(φ),
          cosφ = Math.cos(φ),
          sin_2φ = Math.sin(2 * φ),
          sin2φ = sinφ * sinφ,
          cos2φ = cosφ * cosφ,
          sin2λ_2 = sinλ_2 * sinλ_2,
          C = 1 - cos2φ * cosλ_2 * cosλ_2,
          E = C ? acos(cosφ * cosλ_2) * Math.sqrt(F = 1 / C) : F = 0,
          F = void 0,
          fx = 2 * E * cosφ * sinλ_2 - x,
          fy = E * sinφ - y,
          δxδλ = F * (cos2φ * sin2λ_2 + E * cosφ * cosλ_2 * sin2φ),
          δxδφ = F * (.5 * sinλ * sin_2φ - E * 2 * sinφ * sinλ_2),
          δyδλ = F * .25 * (sin_2φ * sinλ_2 - E * sinφ * cos2φ * sinλ),
          δyδφ = F * (sin2φ * cosλ_2 + E * sin2λ_2 * cosφ),
          denominator = δxδφ * δyδλ - δyδφ * δxδλ;
      if (!denominator) { break; }
      var _ = (fy * δxδφ - fx * δyδφ) / denominator,
          _2 = (fx * δyδλ - fy * δxδλ) / denominator;
      λ -= _, φ -= _2;
    } while ((Math.abs(δλ) > ε || Math.abs(δφ) > ε) && --i > 0);
    return [λ, φ];
  };

  function winkel3(λ, φ) {
    var coordinates = aitoff(λ, φ);
    return [(coordinates[0] + λ / halfπ) / 2, (coordinates[1] + φ) / 2];
  }

  winkel3.invert = function (x, y) {
    var λ = x,
        φ = y,
        i = 25;
    do {
      var cosφ = Math.cos(φ),
          sinφ = Math.sin(φ),
          sin_2φ = Math.sin(2 * φ),
          sin2φ = sinφ * sinφ,
          cos2φ = cosφ * cosφ,
          sinλ = Math.sin(λ),
          cosλ_2 = Math.cos(λ / 2),
          sinλ_2 = Math.sin(λ / 2),
          sin2λ_2 = sinλ_2 * sinλ_2,
          C = 1 - cos2φ * cosλ_2 * cosλ_2,
          E = C ? acos(cosφ * cosλ_2) * Math.sqrt(F = 1 / C) : F = 0,
          F = void 0,
          fx = .5 * (2 * E * cosφ * sinλ_2 + λ / halfπ) - x,
          fy = .5 * (E * sinφ + φ) - y,
          δxδλ = .5 * F * (cos2φ * sin2λ_2 + E * cosφ * cosλ_2 * sin2φ) + .5 / halfπ,
          δxδφ = F * (sinλ * sin_2φ / 4 - E * sinφ * sinλ_2),
          δyδλ = .125 * F * (sin_2φ * sinλ_2 - E * sinφ * cos2φ * sinλ),
          δyδφ = .5 * F * (sin2φ * cosλ_2 + E * sin2λ_2 * cosφ) + .5,
          denominator = δxδφ * δyδλ - δyδφ * δxδλ,
          _3 = (fy * δxδφ - fx * δyδφ) / denominator,
          _4 = (fx * δyδλ - fy * δxδλ) / denominator;
      λ -= _3, φ -= _4;
    } while ((Math.abs(δλ) > ε || Math.abs(δφ) > ε) && --i > 0);
    return [λ, φ];
  };
  T.mercator = function (scale, centerLongitude, centerLat) {
    if (isNaN(centerLongitude)) {
      centerLongitude = 105;
    }
    if (isNaN(centerLat)) {
      centerLat = 35;
    }
    if (isNaN(scale)) {
      scale = 20;
    }
    var translator = function translator(x, y) {
      x -= centerLongitude;
      y -= centerLat;
      if (x > 180) {
        x -= 360;
      } else if (x < -180) {
        x += 360;
      }
      y = degreeToRadian(y);
      y = -radianTodegree(Math.log(Math.tan(π / 4 + y / 2))) * scale;
      return { x: x * scale, y: y };
    };
    return translator;
  };
  T.winkel3 = function (scale, centerLongitude, centerLat) {
    if (isNaN(centerLongitude)) {
      centerLongitude = 105;
    }
    if (isNaN(centerLat)) {
      centerLat = 35;
    }
    if (isNaN(scale)) {
      scale = 20;
    }
    var translator = function translator(x, y) {
      x -= centerLongitude;
      y -= centerLat;
      if (x > 180) {
        x -= 360;
      } else if (x < -180) {
        x += 360;
      }
      x = degreeToRadian(x);
      y = degreeToRadian(y);
      var xy = winkel3(x, y);
      x = radianTodegree(xy[0]) * scale;
      y = -radianTodegree(xy[1]) * scale;
      return { x: x, y: y };
    };
    translator.invert = function (x, y) {
      x = degreeToRadian(x / scale);
      y = -degreeToRadian(y / scale);
      var xy = winkel3.invert(x, y);
      x = radianTodegree(xy[0]);
      y = radianTodegree(xy[1]);
      x += centerLongitude;
      y += centerLat;
      return { x: x, y: y };
    };
    return translator;
  };
})(T);

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) { descriptor.writable = true; }Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) { defineProperties(Constructor.prototype, protoProps); }if (staticProps) { defineProperties(Constructor, staticProps); }return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/* eslint-disable */
function globalToLocal(evt, div) {
  if (evt.touches) {
    if (evt.changedTouches && evt.changedTouches.length) {
      evt = evt.changedTouches[0];
    } else {
      evt = evt.touches[0];
    }
  }
  var clientRect = div.getBoundingClientRect();
  var x = evt.clientX || 0;
  var y = evt.clientY || 0;
  if (T.isTouchSupport && T.isSafari) {
    if (window.pageXOffset && x === evt.pageX) {
      x -= window.pageXOffset;
    }
    if (window.pageYOffset && y === evt.pageY) {
      y -= window.pageYOffset;
    }
  }
  return [x - clientRect.left, y - clientRect.top];
}

var Overview = function () {
  function Overview(html, graph) {
    _classCallCheck(this, Overview);

    this._invalidateGraphFlag = false;
    this.visible = true;
    this.html = html;
    this.canvas = T.createCanvas(true);
    this.html.appendChild(this.canvas);
    new T.DragSupport(this.canvas, this);
    this.setGraph(graph);
  }

  _createClass(Overview, [{
    key: 'setGraph',
    value: function setGraph(graph) {
      if (this.graph === graph) {
        return;
      }
      this._uninstall();
      this.graph = graph;
      this._install();
    }
  }, {
    key: '_install',
    value: function _install() {
      if (!this.graph) {
        return;
      }
      if (!this._onPropertyChanged) {
        this._onPropertyChanged = function (evt) {
          var kind = evt.kind;
          if (kind === 'element.bounds') {
            this._invalidateGraph();
            return;
          }
          if (kind === 'transform' || kind === 'viewport') {
            this.invalidate();
          }
        }.bind(this);
        this._onDataChanged = function (evt) {
          this._invalidateGraph();
        }.bind(this);
      }
      this.graph.propertyChangeDispatcher.addListener(this._onPropertyChanged);
      this.graph.dataPropertyChangeDispatcher.addListener(this._onDataChanged);
      this.graph.listChangeDispatcher.addListener(this._onDataChanged);
      this._invalidateGraph(true);
    }
  }, {
    key: '_uninstall',
    value: function _uninstall() {
      if (!this.graph || !this._onPropertyChanged) {
        return;
      }
      this.graph.propertyChangeDispatcher.removeListener(this._onPropertyChanged);
      this.graph.dataPropertyChangeDispatcher.removeListener(this._onDataChanged);
      this.graph.listChangeDispatcher.removeListener(this._onDataChanged);
      this.imageInfo = null;
      this.bounds = null;
      this.scale = null;
    }
  }, {
    key: '_toCanvas',
    value: function _toCanvas(x, y) {
      x = this.scale * (x - this.bounds.x);
      y = this.scale * (y - this.bounds.y);
      return [x, y];
    }
  }, {
    key: '_toGraph',
    value: function _toGraph(evt) {
      var xy = globalToLocal(evt, this.html);
      var x = xy[0] / this.scale + this.bounds.x;
      var y = xy[1] / this.scale + this.bounds.y;
      return [x, y];
    }
  }, {
    key: '_validateGraph',
    value: function _validateGraph() {
      this._invalidateGraphFlag = false;
      if (!this.visible) {
        return;
      }
      var width = this.html.clientWidth,
          height = this.html.clientHeight;
      if (!width || !height) {
        return;
      }
      var bounds = new T.Rect();
      bounds.add(this.graph.bounds);
      var imageScale = Math.min(width / bounds.width, height / bounds.height) * this.canvas.ratio;

      this.imageInfo = this.exportGraphImage(imageScale, bounds);

      this.imageInfo.scale = imageScale;
      this.imageInfo.bounds = bounds;

      this.invalidate();
    }
  }, {
    key: 'exportGraphImage',
    value: function exportGraphImage(scale, bounds) {
      return this.graph.exportImage(scale, bounds);
    }
  }, {
    key: '_invalidateGraph',
    value: function _invalidateGraph(force) {
      if (!this.graph || !force && this._invalidateGraphFlag) {
        return;
      }
      this._invalidateGraphFlag = true;
      this.graph.callLater(this._validateGraph, this, force ? 100 : 1000);
    }
  }, {
    key: 'invalidate',
    value: function invalidate(force) {
      if (!force && this._invalidateFlag) {
        return;
      }
      this._invalidateFlag = true;
      setTimeout(this.validate.bind(this));
    }
  }, {
    key: 'validate',
    value: function validate() {
      this._invalidateFlag = false;
      var imageInfo = this.imageInfo;
      if (!imageInfo) {
        return;
      }
      var viewportBounds = this.graph.viewportBounds;
      if (!viewportBounds.height || !viewportBounds.width) {
        return;
      }

      var canvas = this.canvas;
      var ratio = canvas.ratio;
      var g = canvas.getContext('2d');
      var width = this.html.clientWidth,
          height = this.html.clientHeight;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      g.scale(ratio, ratio);

      var bounds = new T.Rect(imageInfo.bounds);
      bounds.add(viewportBounds);
      var scale = Math.min(width / bounds.width, height / bounds.height);
      this.scale = scale;

      var offsetX = (width / scale - bounds.width) / 2;
      var offsetY = (height / scale - bounds.height) / 2;
      bounds.x -= offsetX;
      bounds.y -= offsetY;
      bounds.width = width / scale;
      bounds.height = height / scale;
      this.bounds = bounds;

      g.save();
      var xy = this._toCanvas(imageInfo.bounds.x, imageInfo.bounds.y);
      g.translate(xy[0], xy[1]);
      g.scale(scale / imageInfo.scale, scale / imageInfo.scale);
      g.drawImage(this.imageInfo.canvas, 0, 0);
      g.restore();

      g.beginPath();
      g.moveTo(0, 0);
      g.lineTo(canvas.width, 0);
      g.lineTo(canvas.width, canvas.height);
      g.lineTo(0, canvas.height);
      g.lineTo(0, 0);

      xy = this._toCanvas(viewportBounds.x, viewportBounds.y);
      var x = xy[0];
      var y = xy[1];
      width = viewportBounds.width * scale;
      height = viewportBounds.height * scale;

      g.moveTo(x, y);
      g.lineTo(x, y + height);
      g.lineTo(x + width, y + height);
      g.lineTo(x + width, y);
      g.closePath();
      g.fillStyle = "rgba(30, 30, 30, 0.3)";
      g.fill();
      g.lineWidth = 0.5;
      g.strokeStyle = '#333';
      g.strokeRect(x, y, width, height);
    }
  }, {
    key: 'accept',
    value: function accept() {
      return this.graph != null;
    }
  }, {
    key: 'startdrag',
    value: function startdrag(evt) {
      this.enddrag();
      if (!this.scale) {
        return;
      }
      var xy = this._toGraph(evt);
      var viewport = this.graph.viewportBounds;
      if (viewport.contains(xy[0], xy[1])) {
        this._dragInfo = {
          scale: this.scale / this.graph.scale,
          point: xy
        };
        this.graph.stopAnimation();
      }
    }
  }, {
    key: 'ondrag',
    value: function ondrag(evt) {
      if (!this._dragInfo) {
        return;
      }
      var scale = this._dragInfo.scale;
      var dx = evt.dx;
      var dy = evt.dy;
      dx /= scale;
      dy /= scale;
      this.graph.translate(-dx, -dy, false);
    }
  }, {
    key: 'enddrag',
    value: function enddrag() {
      this._dragInfo = null;
    }
  }, {
    key: 'onstart',
    value: function onstart(evt) {
      T.stopEvent(evt);
      var xy = this._toGraph(evt);
      this.graph.centerTo(xy[0], xy[1]);
    }
  }, {
    key: 'onmousewheel',
    value: function onmousewheel(evt) {
      T.stopEvent(evt);
      var xy = this._toGraph(evt);
      xy = this.graph.toCanvas(xy[0], xy[1]);
      this.graph.zoomAt(Math.pow(this.graph.scaleStep, evt.delta), xy.x, xy.y);
    }
  }, {
    key: 'ondblclick',
    value: function ondblclick(evt) {
      var graph = this.graph;
      if (graph.enableDoubleClickToOverview) {
        var resetScale = graph.resetScale || 1;
        if (Math.abs(graph.scale - resetScale) < 0.001) {
          graph.zoomToOverview();
        } else {
          graph.moveToCenter(resetScale);
        }
      }
    }
  }, {
    key: 'setVisible',
    value: function setVisible(visible) {
      this.visible = visible;
      if (visible) {
        this.html.style.display = 'block';
      } else {
        this.html.style.display = 'none';
      }
      this._invalidateGraph();
    }
  }]);

  return Overview;
}();

/* eslint-disable */
var i18n = {
  'zh-cn': {
    'Name': '名称',
    'Render Color': '渲染色',
    'Border': '边框',
    'Border Color': '边框颜色',
    'Location': '坐标',
    'Size': '尺寸',
    'Rotate': '旋转',
    'Label Color': '文本颜色',
    'Background Color': '背景色',
    'Font Size': '字体大小',
    'json file is empty': 'JSON文件为空',
    'Save Error': '保存错误',
    'Save Success': '保存成功',
    'Update': '更新',
    'Export JSON': '导出JSON',
    'Load File ...': '加载文件 ...',
    'Download File': '下载文件',
    'Save': '保存',
    'Rename': '重命名',
    'Input Element Name': '输入图元名称',
    'Solid Line': '实线样式',
    'Dashed Line': '虚线样式',
    'Line Width': '连线宽度',
    'Input Line Width': '输入连线宽度',
    'Line Color': '连线颜色',
    'Input Line Color': '输入连线颜色',
    'Out of Group': '脱离分组',
    'Send to Top': '置顶显示',
    'Send to Bottom': '置底显示',
    'Reset Layer': '恢复默认层',
    'Clear Graph': '清空画布',
    'Zoom In': '放大',
    'Zoom Out': '缩小',
    '1:1': '1:1',
    'Pan Mode': '平移模式',
    'Rectangle Select': '框选模式',
    'Text': '文字',
    'Basic Nodes': '基本节点',
    'Register Images': '注册图片',
    'Default Shapes': '默认形状',
    'Element counts and loading time - Commercial license support more elements and more than 50% performance increase': '图元加载数量与时间 - 商业授权支持更高图元数量, 以及50%以上的性能提升',
    'Submit': '提交',
    'Element Counts': '图元数量',
    'with Edge': '包含连线',
    'with Group': '包含分组',
    'Show Label': '显示标签',
    'Zoom to Overview': '缩放到窗口',
    'Delayed Rendering': '延迟绘制',
    'Angle:': '角度:',
    'Regular': '均匀分配',
    'Proportional': '按需分配',
    'Radius:': '半径:',
    'Uniform': '统一半径',
    'Variable': '可变半径',
    'Min Radius': '最小半径',
    'Default Gap': '默认间距',
    'Start Angle': '起始角度',
    'Beijing': '北京',
    'Shanghai': '上海',
    'Changsha': '长沙',
    'Import Error': '导入异常',
    'Message': '消息',
    'Image export preview': '图片导出预览',
    'Canvas Size': '画布大小',
    'Double click  to select the whole canvas range': '双击选择全画布范围',
    'Export Range': '导出范围',
    'Scale': '缩放比例',
    'Output Size': '输出大小',
    'Export': '导出',
    'Print': '打印',
    'Image size is too large, the export may appear memory error': '图幅太大，导出时可能出现内存不足',
    'New Project': '新项目',
    'Application Host': '应用主机',
    'CPU Usage': 'CPU占用',
    'Memory Usage': '内存占用',
    'Hydrological stations': '水文监测站',
    'Show Double Lane': '显示双车道',
    'Show Traffic': '显示路况信息',
    // toolbar
    'Default Mode': '默认模式',
    'Rectangle Selection': '框选模式',
    'View Mode': '浏览模式',
    'Create Edge': '创建连线',
    'Create L Edge': '创建L型连线',
    'Create Shape': '创建多边形',
    'Create Line': '创建线条',
    'Export Image': '导出图片',
    'Double click merge': '双击合并',
    'Double click Edit': '双击编辑',
    'Public service \n center network topology': '公共事业服务\n中心网络拓扑图',
    'Storage': '存储',
    'Fiber Switch': '光纤交换机',
    'Switch': '交换机',
    'Core Switch': '核心交换机',
    'Firewall': '防火墙',
    'Router': '路由器',
    'Intranet PC': '内网PC',
    'Public Sector Service Center \n Center LAN': '公共事业服务中心\n中心局域网',
    'Branches': '分支机构',
    'Sinopec internal network area': '中国石化内部网络区',
    'Remote access area': '远程接入区',
    'Security management area': '安全管理区',
    'Sinopec \nInternet node \n network': '中国石化\nInternet节点\n网络',
    'Headquarters core \n switch': '总部核心\n交换机',
    'Found the password guessing attack event \n ...': '发现口令猜测攻击事件\n ...',
    'Server\nSwitch': '服务器\n交换机',
    'Sinopec headquarters network area': '中国石化总部网络区域',
    'Management system network area': '管理系统网络区域',
    '': 'TMS,TMS\n数据库,财务公司\n新SAP,浪潮\n报表,共享平台\n数据库,固定报表\n数据库'
  }
};

var lang = navigator.language || navigator.browserLanguage;
lang = lang.toLowerCase();

function getI18NString(key) {
  if (!i18n[lang]) {
    return key;
  }
  var result = i18n[lang][key];
  if (result === undefined) {
    return key;
  }
  return result;
}

/* eslint-disable */
function createElement(_ref) {
  var _ref$tagName = _ref.tagName,
      tagName = _ref$tagName === undefined ? 'div' : _ref$tagName,
      className = _ref.className,
      parent = _ref.parent,
      html = _ref.html;

  var element = document.createElement(tagName);
  className && (element.className = className);
  parent && parent.appendChild(element);
  html && (element.innerHTML = html);
  return element;
}





var _isFileSaverSupported = void 0;

function isBlobSupported() {
  if (_isFileSaverSupported === undefined) {
    try {
      _isFileSaverSupported = !!new Blob();
    } catch (e) {}
  }
  return _isFileSaverSupported;
}

function saveAs(blob, filename) {
  if (!isBlobSupported()) {
    throw 'file saver not be supported';
  }
  if (navigator.msSaveOrOpenBlob) {
    return navigator.msSaveOrOpenBlob(blob, filename);
  }
  var a = document.createElement("a");
  a.style.display = 'none';
  document.body.appendChild(a);
  var csvUrl = URL.createObjectURL(blob);
  a.href = csvUrl;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}

/* eslint-disable */
var currentDialog = void 0;

function hide() {
  if (!currentDialog) {
    return;
  }
  if (!currentDialog.parentNode) {
    currentDialog = null;
    return;
  }
  currentDialog.parentNode.classList.remove('modal-open');
  currentDialog.parentNode.removeChild(currentDialog);
  currentDialog = null;
}

var ModalTemplate = '<div class="modal-backdrop in"></div>\n    <div class="modal-dialog">\n      <div class="modal-content">\n      </div>\n    </div>';

function showDialog(_ref) {
  var _ref$relatedTarget = _ref.relatedTarget,
      relatedTarget = _ref$relatedTarget === undefined ? document.body : _ref$relatedTarget,
      content = _ref.content;

  currentDialog && this.hide();
  relatedTarget.classList.add('modal-open');

  currentDialog = createElement({
    html: ModalTemplate,
    className: 'modal in'
  });
  var body = currentDialog.querySelector('.modal-content');
  if (content) {
    if (content instanceof HTMLElement) {
      body.appendChild(content);
    } else {
      body.innerHTML = content;
    }
  }

  currentDialog.onclick = function (evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    hide();
  };
  relatedTarget.appendChild(currentDialog);
  return body;
}

var _createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) { descriptor.writable = true; }Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) { defineProperties(Constructor.prototype, protoProps); }if (staticProps) { defineProperties(Constructor, staticProps); }return Constructor;
  };
}();

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/* eslint-disable  */
var template = '\
  <h3 style="text-align: center;">' + getI18NString('Image export preview') + '</h3>\
  <div>\
  <label>' + getI18NString('Canvas Size') + '</label>\
  <span class ="graph-export-panel__canvas_size"></span>\
  </div>\
  <div style="text-align: center;" title="' + getI18NString('Double click  to select the whole canvas range') + '">\
  <div class ="graph-export-panel__export_canvas" style="position: relative; display: inline-block;">\
  </div>\
  </div>\
  <div>\
  <label>' + getI18NString('Export Range') + '</label>\
  <span class ="graph-export-panel__export_bounds"></span>\
  </div>\
  <div>\
  <label>' + getI18NString('Scale') + ': <input class ="graph-export-panel__export_scale" type="range" value="1" step="0.2" min="0.2" max="3"><span class ="graph-export-panel__export_scale_label">1</span></label>\
  </div>\
  <div>\
  <label>' + getI18NString('Output Size') + ': </label><span class ="graph-export-panel__export_size"></span>\
  </div>\
  <div style="text-align: right">\
  <button type="submit" class="btn btn-primary graph-export-panel__export_submit">' + getI18NString('Export') + '</button>\
  <button type="submit" class="btn btn-primary graph-export-panel__print_submit">' + getI18NString('Print') + '</button>\
  </div>';

var ResizeBox = function () {
  function ResizeBox(parent, onBoundsChange) {
    var this$1 = this;

    _classCallCheck$1(this, ResizeBox);

    this.onBoundsChange = onBoundsChange;
    this.parent = parent;
    this.handleSize = T.isTouchSupport ? 20 : 8;

    this.boundsDiv = this._createDiv(this.parent);
    this.boundsDiv.type = "border";
    this.boundsDiv.style.position = "absolute";
    this.boundsDiv.style.border = "dashed 1px #888";
    var handles = "lt,t,rt,l,r,lb,b,rb";
    handles = handles.split(",");
    for (var i = 0, l = handles.length; i < l; i++) {
      var name = handles[i];
      var handle = this$1._createDiv(this$1.parent);
      handle.type = "handle";
      handle.name = name;
      handle.style.position = "absolute";
      handle.style.backgroundColor = "#FFF";
      handle.style.border = "solid 1px #555";
      handle.style.width = handle.style.height = this$1.handleSize + "px";
      var cursor = void 0;
      if (name == 'lt' || name == 'rb') {
        cursor = "nwse-resize";
      } else if (name == 'rt' || name == 'lb') {
        cursor = "nesw-resize";
      } else if (name == 't' || name == 'b') {
        cursor = "ns-resize";
      } else {
        cursor = "ew-resize";
      }
      handle.style.cursor = cursor;
      this$1[handles[i]] = handle;
    }
    this.interaction = new T.DragSupport(this.parent, this);
  }

  _createClass$1(ResizeBox, [{
    key: "destroy",
    value: function destroy() {
      this.interaction.destroy();
    }
  }, {
    key: "update",
    value: function update(width, height) {
      this.wholeBounds = new T.Rect(0, 0, width, height);
      this._setBounds(this.wholeBounds.clone());
    }
  }, {
    key: "ondblclick",
    value: function ondblclick(evt) {
      if (this._bounds.equals(this.wholeBounds)) {
        if (!this.oldBounds) {
          this.oldBounds = this.wholeBounds.clone().grow(-this.wholeBounds.height / 5, -this.wholeBounds.width / 5);
        }
        this._setBounds(this.oldBounds, true);
        return;
      }
      this._setBounds(this.wholeBounds.clone(), true);
    }
  }, {
    key: "startdrag",
    value: function startdrag(evt) {
      if (evt.target.type) {
        this.dragItem = evt.target;
      }
    }
  }, {
    key: "ondrag",
    value: function ondrag(evt) {
      if (!this.dragItem) {
        return;
      }
      T.stopEvent(evt);
      var dx = evt.dx;
      var dy = evt.dy;
      if (this.dragItem.type == "border") {
        this._bounds.offset(dx, dy);
        this._setBounds(this._bounds, true);
      } else if (this.dragItem.type == "handle") {
        var name = this.dragItem.name;
        if (name[0] == 'l') {
          this._bounds.x += dx;
          this._bounds.width -= dx;
        } else if (name[0] == 'r') {
          this._bounds.width += dx;
        }
        if (name[name.length - 1] == 't') {
          this._bounds.y += dy;
          this._bounds.height -= dy;
        } else if (name[name.length - 1] == 'b') {
          this._bounds.height += dy;
        }
        this._setBounds(this._bounds, true);
      }
    }
  }, {
    key: "enddrag",
    value: function enddrag(evt) {
      if (!this.dragItem) {
        return;
      }
      this.dragItem = false;
      if (this._bounds.width < 0) {
        this._bounds.x += this._bounds.width;
        this._bounds.width = -this._bounds.width;
      } else if (this._bounds.width == 0) {
        this._bounds.width = 1;
      }
      if (this._bounds.height < 0) {
        this._bounds.y += this._bounds.height;
        this._bounds.height = -this._bounds.height;
      } else if (this._bounds.height == 0) {
        this._bounds.height = 1;
      }
      if (this._bounds.width > this.wholeBounds.width) {
        this._bounds.width = this.wholeBounds.width;
      }
      if (this._bounds.height > this.wholeBounds.height) {
        this._bounds.height = this.wholeBounds.height;
      }
      if (this._bounds.x < 0) {
        this._bounds.x = 0;
      }
      if (this._bounds.y < 0) {
        this._bounds.y = 0;
      }
      if (this._bounds.right > this.wholeBounds.width) {
        this._bounds.x -= this._bounds.right - this.wholeBounds.width;
      }
      if (this._bounds.bottom > this.wholeBounds.height) {
        this._bounds.y -= this._bounds.bottom - this.wholeBounds.height;
      }

      this._setBounds(this._bounds, true);
    }
  }, {
    key: "_createDiv",
    value: function _createDiv(parent) {
      var div = document.createElement("div");
      parent.appendChild(div);
      return div;
    }
  }, {
    key: "_setHandleLocation",
    value: function _setHandleLocation(handle, x, y) {
      handle.style.left = x - this.handleSize / 2 + "px";
      handle.style.top = y - this.handleSize / 2 + "px";
    }
  }, {
    key: "_setBounds",
    value: function _setBounds(bounds) {
      if (!bounds.equals(this.wholeBounds)) {
        this.oldBounds = bounds;
      }
      this._bounds = bounds;
      bounds = bounds.clone();
      bounds.width += 1;
      bounds.height += 1;
      this.boundsDiv.style.left = bounds.x + "px";
      this.boundsDiv.style.top = bounds.y + "px";
      this.boundsDiv.style.width = bounds.width + "px";
      this.boundsDiv.style.height = bounds.height + "px";

      this._setHandleLocation(this.lt, bounds.x, bounds.y);
      this._setHandleLocation(this.t, bounds.cx, bounds.y);
      this._setHandleLocation(this.rt, bounds.right, bounds.y);
      this._setHandleLocation(this.l, bounds.x, bounds.cy);
      this._setHandleLocation(this.r, bounds.right, bounds.cy);
      this._setHandleLocation(this.lb, bounds.x, bounds.bottom);
      this._setHandleLocation(this.b, bounds.cx, bounds.bottom);
      this._setHandleLocation(this.rb, bounds.right, bounds.bottom);
      if (this.onBoundsChange) {
        this.onBoundsChange(this._bounds);
      }
    }
  }, {
    key: "bounds",
    get: function get() {
      return this._bounds;
    },
    set: function set(v) {
      this._setBounds(v);
    }
  }]);

  return ResizeBox;
}();

var ExportPanel = function () {
  function ExportPanel() {
    _classCallCheck$1(this, ExportPanel);
  }

  _createClass$1(ExportPanel, [{
    key: "_getChild",
    value: function _getChild(selector) {
      return this.html.querySelector(selector);
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var export_canvas = this._getChild('.graph-export-panel__export_canvas');
      export_canvas.innerHTML = "";

      var canvas = T.createCanvas(true);
      export_canvas.appendChild(canvas);
      this.canvas = canvas;

      var export_bounds = this._getChild(".graph-export-panel__export_bounds");
      var export_size = this._getChild(".graph-export-panel__export_size");
      var clipBounds = void 0;
      var drawPreview = function drawPreview() {
        var canvas = this.canvas;
        var g = canvas.g;
        var ratio = canvas.ratio || 1;
        g.save();
        // g.scale(1/g.ratio, 1/g.ratio);
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.drawImage(this.imageInfo.canvas, 0, 0);
        g.beginPath();
        g.moveTo(0, 0);
        g.lineTo(canvas.width, 0);
        g.lineTo(canvas.width, canvas.height);
        g.lineTo(0, canvas.height);
        g.lineTo(0, 0);

        var x = clipBounds.x * ratio;var y = clipBounds.y * ratio;var width = clipBounds.width * ratio;
        var height = clipBounds.height * ratio;
        g.moveTo(x, y);
        g.lineTo(x, y + height);
        g.lineTo(x + width, y + height);
        g.lineTo(x + width, y);
        g.closePath();
        g.fillStyle = "rgba(0, 0, 0, 0.3)";
        g.fill();
        g.restore();
      };
      var onBoundsChange = function onBoundsChange(bounds) {
        clipBounds = bounds;
        this.clipBounds = clipBounds;
        drawPreview.call(this);
        var w = clipBounds.width / this.imageInfo.scale | 0;
        var h = clipBounds.height / this.imageInfo.scale | 0;
        export_bounds.textContent = (clipBounds.x / this.imageInfo.scale | 0) + ", " + (clipBounds.y / this.imageInfo.scale | 0) + ", " + w + ", " + h;
        this.updateOutputSize();
      };
      this.updateOutputSize = function () {
        var export_scale = this._getChild(".graph-export-panel__export_scale");
        var scale = export_scale.value;
        var w = clipBounds.width / this.imageInfo.scale * scale | 0;
        var h = clipBounds.height / this.imageInfo.scale * scale | 0;
        var info = w + " X " + h;
        if (w * h > 3000 * 4000) {
          info += "<span style='color: #F66;'>" + getI18NString('Image size is too large, the export may appear memory error') + "</span>";
        }
        export_size.innerHTML = info;
      };
      var resizeHandler = new ResizeBox(canvas.parentNode, onBoundsChange.bind(this));
      this.update = function () {
        var ratio = this.canvas.ratio || 1;
        var width = this.imageInfo.width / ratio;
        var height = this.imageInfo.height / ratio;
        this.canvas.setSize(width, height);
        resizeHandler.update(width, height);
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.graph = null;
      this.imageInfo = null;
      this.clipBounds = null;
      this.bounds = null;
    }
  }, {
    key: "_initDom",
    value: function _initDom() {
      var export_panel = this.html = createElement({
        html: template
      });
      export_panel.addEventListener("mousedown", function (evt) {
        if (evt.target == export_panel) {
          this.destroy();
        }
      }.bind(this), false);
      var export_scale = this._getChild(".graph-export-panel__export_scale");
      var export_scale_label = this._getChild(".graph-export-panel__export_scale_label");
      export_scale.onchange = function (evt) {
        export_scale_label.textContent = this.scale = export_scale.value;
        this.updateOutputSize();
      }.bind(this);
      this.export_scale = export_scale;

      var export_submit = this._getChild(".graph-export-panel__export_submit");
      export_submit.onclick = this._doExport.bind(this, 'file');
      var print_submit = this._getChild(".graph-export-panel__print_submit");
      print_submit.onclick = this._doExport.bind(this, 'print');
    }
  }, {
    key: "_doExport",
    value: function _doExport(type) {
      var scale = this.export_scale.value;
      var s = this.imageInfo.scale;
      var clipBounds = new T.Rect(this.clipBounds.x / s, this.clipBounds.y / s, this.clipBounds.width / s, this.clipBounds.height / s);
      clipBounds.offset(this.bounds.x, this.bounds.y);
      if (type === 'print') {
        return printGraph(this.graph, clipBounds, scale);
      }
      exportImageFile(this.graph, clipBounds, scale);
    }
  }, {
    key: "show",
    value: function show(graph) {
      if (!this.html) {
        this._initDom();
      }

      showDialog({
        content: this.html
      });

      this.graph = graph;
      var bounds = graph.bounds;
      this.bounds = bounds;

      var canvas_size = this._getChild(".graph-export-panel__canvas_size");
      canvas_size.textContent = (bounds.width | 0) + " X " + (bounds.height | 0);

      var size = Math.min(500, screen.width / 1.3);
      var imageScale = void 0;
      if (bounds.width > bounds.height) {
        imageScale = Math.min(1, size / bounds.width);
      } else {
        imageScale = Math.min(1, size / bounds.height);
      }
      if (!this.canvas) {
        this.initCanvas();
      }
      this.imageInfo = graph.exportImage(imageScale * this.canvas.ratio);
      this.imageInfo.scale = imageScale;

      this.update();
    }
  }]);

  return ExportPanel;
}();

var exportPanel = void 0;

function showExportPanel(graph) {
  if (!exportPanel) {
    exportPanel = new ExportPanel();
  }
  exportPanel.show(graph);
}

function doPrint(image) {
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var win = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  function __print() {
    function closePrint() {
      win.removeEventListener('afterprint', closePrint);
      doc.body.removeChild(image);
      image.classList.remove('q-print__body');
      doc.documentElement.classList.remove('q-print');
    }

    function showPrint() {
      doc.documentElement.classList.add('q-print');
      image.classList.add('q-print__body');
      doc.body.appendChild(image);
      win.removeEventListener('beforeprint', showPrint);
      win.addEventListener('afterprint', closePrint);
    }

    win.addEventListener('beforeprint', showPrint);
    win.print();
    // /ie, edge浏览器不会阻塞，异步调用print
    // /safari第一次会阻塞进程，但第二次则不会阻塞，会显示是否打印的确认框，如果点击取消，不会进入打印状态
  }

  if (!image.width) {
    image.onload = __print;
  } else {
    __print();
  }
}

function getStyleByID(id) {
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  var style = doc.getElementById(id);
  if (style && style.sheet) {
    return style;
  }
  style = doc.createElement('style');
  style.id = id;
  doc.head.insertBefore(style, doc.head.childNodes[0]);
  return style;
}

function initPrintStyle() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  var print_css = "\n@media print {\n    html.q-print, html.q-print > body {\n        margin: 0 !important;\n        box-sizing: border-box !important;\n        height: 100% !important;\n        width: 100% !important;\n        display: flex !important;\n        align-items: center !important;\n    }\n    html.q-print > body > *:not(.q-print__body){\n        display: none !important;\n    }\n}\n.q-print__body {\n    position: absolute;\n    margin: auto;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    max-width: 100%;\n    max-height: 100%;\n    flex: 0 0 auto;\n}";
  getStyleByID('qunee-styles__print', doc).appendChild(doc.createTextNode(print_css));
}

initPrintStyle();

function showImageInNewWindow(imageInfo, name, print) {
  var win = window.open();
  var doc = win.document;
  doc.title = name || "export image";
  doc.body.style.textAlign = "center";
  doc.body.style.margin = "0px";

  if (print === true) {
    var style = doc.createElement("style");
    style.setAttribute("type", "text/css");
    style.setAttribute("media", "print");
    var printCSS = "img {max-width: 100%; max-height: 100%;}";
    if (imageInfo.width / imageInfo.height > 1.2) {
      printCSS += "\n @page { size: landscape; }";
    } else {
      printCSS += "\n @page { size: portrait; }";
    }
    style.appendChild(doc.createTextNode(printCSS));
    doc.head.appendChild(style);
  }

  var img = doc.createElement("img");
  var imageStyles = {
    'max-width': '100%',
    'max-height': '100%',
    'position': 'absolute',
    'margin': 'auto',
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0
  };
  for (var _name in imageStyles) {
    img.style[_name] = imageStyles[_name];
  }

  if (print === true) {
    img.onload = function () {
      win.print();
      win.close();
    };
  }
  img.src = imageInfo.data;
  doc.body.appendChild(img);
}

function printGraph(graph, bounds, scale) {
  var imageInfo = exportImageInfo(graph, bounds, scale);
  var img = document.createElement("img");
  img.src = imageInfo.data;
  doPrint(img);
}

function exportImageFile(graph, bounds, scale) {
  var name = graph.name || 'graph';
  var imageInfo = exportImageInfo(graph, bounds, scale);
  if (!isBlobSupported()) {
    return showImageInNewWindow(imageInfo, name);
  }
  saveImage(imageInfo, name);
}

var maxLength = 32767;var maxSize = 16384 * 16384;

function isImageTooBig(width, height) {
  return (T.isFirefox || T.isChrome) && width >= maxLength || height >= maxLength || width * height >= maxSize;
}

function exportImageInfo(graph, bounds, scale) {
  scale = parseFloat(scale) || 1;
  var width = Math.ceil(bounds.width * scale);
  var height = Math.ceil(bounds.height * scale);

  if (!isImageTooBig(width, height)) {
    return graph.exportImage(scale, bounds);
  }

  // 图片太大，超过<canvas>支持尺寸
  var hCount = Math.ceil((width + 1) / maxLength);
  var vCount = Math.ceil((height + 1) / maxLength);
  var minCells = Math.ceil((width * height + 1) / maxSize);
  if (minCells > hCount * vCount) {
    if (width > height) {
      hCount = Math.ceil(minCells / vCount);
    } else {
      vCount = Math.ceil(minCells / hCount);
    }
  }
  var cellWidth = Math.ceil(width / hCount);var cellHeight = Math.ceil(height / vCount);

  function toImage(x, y) {
    var perWidth = cellWidth / scale;var perHeight = cellHeight / scale;
    return graph.exportImage(scale, new T.Rect(bounds.x + x * perWidth, bounds.y + y * perHeight, perWidth, perHeight));
  }

  var svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + ' width="' + width + '" height="' + height + '">';
  var x = 0;
  while (x < hCount) {
    var y = 0;
    while (y < vCount) {
      var imageInfo = toImage(x, y);
      svg += '<image x="' + x * cellWidth + '" y = "' + y * cellHeight + '" width="' + imageInfo.width + '" height="' + imageInfo.height + '" ' + 'xlink:href="' + imageInfo.data + '" />';
      y++;
    }
    x++;
  }
  svg += '</svg>';
  return {
    width: width,
    height: height,
    data: 'data:image/svg+xml, ' + svg,
    svg: svg
  };
}

function saveImage(imageInfo, name) {
  if (imageInfo.svg) {
    return saveSVG(imageInfo.svg, name);
  }
  saveCanvas(imageInfo.canvas, name);
}

function saveSVG(svg, name) {
  svg = '<?xml version="1.0" encoding="UTF-8"?>\n' + svg;
  var blob = new Blob([svg], { type: "image/svg+xml" });
  saveAs(blob, name + ".svg");
}

function saveCanvas(canvas, name) {
  var type = "image/png";
  name += '.png';
  if (canvas.toBlob) {
    return canvas.toBlob(function (blob) {
      saveAs(blob, name);
    }, type);
  }

  var binStr = atob(canvas.toDataURL(type).split(',')[1]);
  var len = binStr.length;var arr = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  saveAs(new Blob([arr], { type: type }), name);
}

/* eslint-disable */
function isEmptyObject(obj) {
  if (!(obj instanceof Object)) {
    return !obj;
  }
  if (Array.isArray(obj)) {
    return obj.length == 0;
  }
  for (var key in obj) {
    return false;
  }
  return true;
}

function getByPath(pathName, scope) {
  var paths = pathName.split('.');
  if (!scope) {
    if (paths[0] === 'T') {
      scope = T;
      paths.shift();
    } else {
      scope = window;
    }
  }
  var i = -1;
  while (scope && ++i < paths.length) {
    var path = paths[i];
    scope = scope[path];
  }
  return scope;
}

function loadClassPath(object, namespace, loadChild) {
  object._classPath = namespace;
  if (object instanceof Function) {
    object.prototype._className = object._classPath;
    object.prototype._class = object;
    //            T.log(v._className);
    //            continue;
  }
  if (loadChild === false) {
    return;
  }
  for (var name in object) {
    if (name[0] == '_' || name[0] == '$' || name == 'superclass' || name == 'constructor' || name == 'prototype' || name.indexOf('.') >= 0) {
      continue;
    }
    var v = object[name];
    if (!v || !(v instanceof Object) || v._classPath) {
      continue;
    }
    loadClassPath(v, namespace + '.' + name);
  }
}

var prototypes = {};

function getPrototype(data) {
  var className = data._className;
  if (!className) {
    return null;
  }
  var prototype = prototypes[className];
  if (!prototype) {
    var clazz = data._class;
    prototype = prototypes[className] = new clazz();
  }
  return prototype;
}

function equals(a, b) {
  return a == b || a && b && a.equals && a.equals(b);
}

T.HashList.prototype.toJSON = function (serializer) {
  var datas = [];
  this.forEach(function (data) {
    datas.push(serializer.toJSON(data));
  });
  return datas;
};

T.HashList.prototype.parseJSON = function (json, serializer) {
  var result = [];
  json.forEach(function (item) {
    var data = serializer.parseJSON(item);
    this.add(data);
    result.push(data);
  }, this);
  return result;
};

function exportElementProperties(serializer, properties, info, element) {
  var prototype = getPrototype(element);
  properties.forEach(function (name) {
    var value = element[name];
    if (!equals(value, prototype[name])) {
      var json = serializer.toJSON(value);
      if (json || !value) {
        info[name] = json;
      }
    }
  }, element);
}

function exportProperties(serializer, properties) {
  var info = void 0;
  for (var s in properties) {
    if (!info) {
      info = {};
    }
    info[s] = serializer.toJSON(properties[s]);
  }
  return info;
}

var wirtableUIProperties = {
  class: false,
  id: false,
  "fillGradient": false,
  "syncSelectionStyles": false,
  "originalBounds": false,
  "parent": false,
  "font": false,
  "$data": false,
  "$x": false,
  "$y": false
};

T.BaseUI.prototype.toJSON = function (serializer) {
  var this$1 = this;

  var json = {};
  for (var name in this$1) {
    if (name[0] == '_' || name[0] == '$' && name[1] == '_' || name.indexOf('$invalidate') == 0 || wirtableUIProperties[name] === false) {
      continue;
    }
    var value = this$1[name];
    if (value instanceof Function || value == this$1.class.prototype[name]) {
      continue;
    }
    //wirtableUIProperties[name] = true;

    try {
      json[name] = serializer.toJSON(value);
    } catch (error) {}
  }
  return json;
};
//new T.ImageUI().toJSON();
//new T.LabelUI().toJSON();
//T.log(JSON.stringify(wirtableUIProperties))

T.BaseUI.prototype.parseJSON = function (info, serializer) {
  var this$1 = this;

  for (var name in info) {
    var v = serializer.parseJSON(info[name]);
    this$1[name] = v;
  }
};

var OUTPUT_PROPERTIES = ['userId', 'rotatable', 'editable', 'layoutable', 'visible', 'busLayout', 'enableSubNetwork', 'zIndex', 'tooltipType', 'tooltip', 'movable', 'selectable', 'resizable', 'uiClass', 'name', 'parent', 'host'];

T.Element.prototype.addOutProperty = function (name) {
  if (!this.outputProperties) {
    this.outputProperties = [];
  }
  this.outputProperties.push(name);
};
T.Element.prototype.removeOutProperty = function (name) {
  if (this.outputProperties) {
    var index = this.outputProperties.indexOf(name);
    if (index >= 0) {
      this.outputProperties.splice(index, 1);
    }
  }
};
T.Element.prototype.toJSON = function (serializer) {
  var info = {};
  var outputProperties = OUTPUT_PROPERTIES;
  if (this.outputProperties) {
    outputProperties = outputProperties.concat(this.outputProperties);
  }
  exportElementProperties(serializer, outputProperties, info, this);
  if (this.styles) {
    var styles = exportProperties(serializer, this.styles);
    if (styles) {
      info.styles = styles;
    }
  }
  if (this.properties) {
    var properties = exportProperties(serializer, this.properties);
    if (properties) {
      info.properties = properties;
    }
  }
  var bindingUIs = this.bindingUIs;
  if (bindingUIs) {
    var bindingJSONs = [];
    //let binding = {id: ui.id, ui: ui, bindingProperties: bindingProperties};
    bindingUIs.forEach(function (binding) {
      if (binding.ui.serializable === false) {
        return;
      }
      var uiJSON = serializer.toJSON(binding.ui);
      bindingJSONs.push({
        ui: uiJSON,
        bindingProperties: binding.bindingProperties
      });
    });
    info.bindingUIs = bindingJSONs;
  }
  return info;
};
T.Element.prototype.parseJSON = function (info, serializer) {
  var this$1 = this;

  if (info.styles) {
    var styles = {};
    for (var n in info.styles) {
      styles[n] = serializer.parseJSON(info.styles[n]);
    }
    this.putStyles(styles, true);
    //delete info.styles;
  }
  if (info.properties) {
    var properties = {};
    for (var _n in info.properties) {
      properties[_n] = serializer.parseJSON(info.properties[_n]);
    }
    this.properties = properties;
  }
  if (info.bindingUIs) {
    info.bindingUIs.forEach(function (binding) {
      var ui = serializer.parseJSON(binding.ui);
      if (!ui) {
        return;
      }
      this.addUI(ui, binding.bindingProperties);

      //let circle = new T.ImageUI(ui.data);
      //circle.lineWidth = 2;
      //circle.strokeStyle = '#ff9f00';
      //this.addUI(circle);
    }, this);
  }
  for (var _n2 in info) {
    if (_n2 == 'id' || _n2 == 'styles' || _n2 == 'properties' || _n2 == 'bindingUIs') {
      continue;
    }
    var v = serializer.parseJSON(info[_n2]);
    this$1[_n2] = v;
  }
};
T.Node.prototype.toJSON = function (serializer) {
  var info = T.doSuper(this, T.Node, 'toJSON', arguments);
  exportElementProperties(serializer, ['location', 'size', 'image', 'rotate', 'anchorPosition', 'parentChildrenDirection', 'layoutType', 'hGap', 'vGap'], info, this);
  return info;
};
T.Group.prototype.toJSON = function (serializer) {
  var info = T.doSuper(this, T.Group, 'toJSON', arguments);
  exportElementProperties(serializer, ['minSize', 'groupType', 'padding', 'groupImage', 'expanded'], info, this);
  return info;
};
T.ShapeNode.prototype.toJSON = function (serializer) {
  var info = T.doSuper(this, T.Node, 'toJSON', arguments);
  exportElementProperties(serializer, ['location', 'rotate', 'anchorPosition', 'path'], info, this);
  return info;
};
T.Edge.prototype.toJSON = function (serializer) {
  var info = T.doSuper(this, T.Edge, 'toJSON', arguments);
  exportElementProperties(serializer, ['angle', 'from', 'to', 'edgeType', 'angle', 'bundleEnabled', 'pathSegments'], info, this);
  return info;
};

function JSONSerializer(options) {
  if (options) {
    this.withGlobalRefs = options.withGlobalRefs !== false;
  }
  this.reset();
}

JSONSerializer.prototype = {
  _refs: null,
  _refValues: null,
  _index: 1,
  root: null,
  reset: function reset() {
    this._globalRefs = {};
    this._elementRefs = {};
    this._refs = {};
    this._refValues = {};
    this._index = 1;
  },
  getREF: function getREF(id) {
    return this._refs[id];
  },
  clearRef: function clearRef() {
    var this$1 = this;

    for (var id in this$1._globalRefs) {
      delete this$1._globalRefs[id]._value;
    }
    for (var _id in this$1._refValues) {
      delete this$1._refValues[_id]._refId;
    }
    this.reset();
  },
  elementToJSON: function elementToJSON(element) {
    return this._toJSON(element);
  },
  _elementRefs: null,
  _globalRefs: null,
  withGlobalRefs: true,
  toJSON: function toJSON(value) {
    if (!(value instanceof Object)) {
      return value;
    }
    if (value instanceof Function && !value._classPath) {
      return null;
    }
    if (!this.withGlobalRefs) {
      return this._toJSON(value);
    }
    if (value instanceof T.Element) {
      var _id2 = getElementId(value);
      this._elementRefs[_id2] = true;
      return { _ref: _id2 };
    }
    if (value._refId === undefined) {
      var json = this._toJSON(value);
      if (!json) {
        return json;
      }
      //添加引用标记，下次遇到这个对象时，不需要再toJSON，而是直接输出引用，比如{"$ref": 1}
      var _id3 = value._refId = this._index++;
      //将对象暂时存放在_refValues中，以便在导出完成后，删除掉上一步对value增加的_refId属性
      this._refValues[_id3] = value;
      this._refs[_id3] = json;
      return json;
    }
    //遇到相同的对象，将对象信息存放到全局map，网元属性只需要存放引用id，比如{"$ref": 1}
    //全局map中存放在g属性中，以id为key，json为value，如下：
    //"refs": {
    //  "1": {
    //    "_classPath": "T.Position.LEFT_BOTTOM"
    //  }
    //},
    //"datas": [
    //  {
    //    "_className": "T.Node",
    //    "json": {
    //      "name": "A",
    //      "styles": {
    //        "property": {
    //          "$ref": 1
    //        }
    //      },
    var id = value._refId;
    if (!this._globalRefs[id]) {
      //如果还没有加入到全局引用区，则将json放入到_globalRefs，同时将原来的json变成引用方式
      var _json = this._refs[id];
      if (!_json) {
        return _json;
      }
      var clone = {};
      for (var name in _json) {
        clone[name] = _json[name];
        delete _json[name];
      }
      _json.$ref = id;
      this._globalRefs[id] = clone;
    }
    return { $ref: id };
  },
  _toJSON: function _toJSON(value) {
    var this$1 = this;

    if (value._classPath) {
      return { _classPath: value._classPath };
    }
    var json = void 0;
    if (!value._className) {
      if (T.isArray(value)) {
        json = [];
        value.forEach(function (v) {
          json.push(this.toJSON(v));
        }, this);
        return json;
      } else {
        json = {};
        var prototype = void 0;
        if (value.class) {
          prototype = value.class.prototype;
        }
        for (var name in value) {
          var v = value[name];
          if (v instanceof Function || prototype && v == prototype[name]) {
            continue;
          }
          json[name] = this$1.toJSON(value[name]);
        }
        return json;
      }

      return value;
    }
    var result = { _className: value._className };
    if (value.toJSON) {
      result.json = value.toJSON(this);
    } else {
      result.json = value;
    }
    return result;
  },
  jsonToElement: function jsonToElement(json) {
    //如果之前解析的数据中引用到了此节点，此节点其实已经被解析了，这里只需要返回引用就可以了
    if (json._refId !== undefined && json._refId in this._refs) {
      return this._refs[json._refId];
    }
    return this._parseJSON(json);
  },
  parseJSON: function parseJSON(json) {
    if (!(json instanceof Object)) {
      return json;
    }
    if (!this.withGlobalRefs) {
      return this._parseJSON(json);
    }
    //全局引用
    if (json.$ref !== undefined) {
      //从全局引用中获取json信息
      var gJson = this._globalRefs[json.$ref];
      if (!gJson) {
        return;
      }
      //将json信息解析成对象，并缓存在json的_value属性中
      if (gJson._value === undefined) {
        gJson._value = this.parseJSON(gJson);
      }
      return gJson._value;
    }
    //如果属性为element引用，先从_elementRefs中找到对应element的json信息，然后将此json信息解析成element
    if (json._ref !== undefined) {
      var elementJson = this._elementRefs[json._ref];
      if (!elementJson) {
        return;
      }
      return this.jsonToElement(elementJson);
    }
    ////如果json包含_refId属性，说明这是一个element类型，直接调用jsonToElement，不过应该不会出现
    //if (json._refId !== undefined) {
    //  return this.jsonToElement(json);
    //}
    return this._parseJSON(json);
  },
  _parseJSON: function _parseJSON(json) {
    var this$1 = this;

    if (!(json instanceof Object)) {
      return json;
    }
    if (json._classPath) {
      return getByPath(json._classPath);
    }
    if (json._className) {
      var F = getByPath(json._className);
      var v = new F();
      ///防止相互引用导致的问题
      if (this.withGlobalRefs && json._refId !== undefined) {
        this._refs[json._refId] = v;
      }
      if (v && json.json) {
        json = json.json;
        if (v.parseJSON) {
          v.parseJSON(json, this);
        } else {
          for (var n in json) {
            v[n] = json[n];
          }
        }
      }
      return v;
    }
    if (T.isArray(json)) {
      var _result = [];
      json.forEach(function (j) {
        _result.push(this.parseJSON(j));
      }, this);
      return _result;
    }
    var result = {};
    for (var name in json) {
      result[name] = this$1.parseJSON(json[name]);
    }
    return result;
  }
};

function getElementId(element) {
  return element.userId || element.id;
}

function graphModelToJSON(model, filter) {
  var serializer = new JSONSerializer();
  var json = {
    refs: {}
  };
  var datas = [];
  var map = {};
  if (model.currentSubNetwork) {
    var elementJson = serializer.elementToJSON(model.currentSubNetwork);
    if (elementJson) {
      json.currentSubNetwork = { _ref: elementJson._refId = model.currentSubNetwork.id };
    }
  }
  model.forEach(function (d) {
    if (filter && filter(d) === false) {
      return;
    }
    var elementJson = serializer.elementToJSON(d);
    if (elementJson) {
      datas.push(elementJson);
      map[getElementId(d)] = elementJson;
    }
  });
  if (serializer._elementRefs) {
    for (var id in serializer._elementRefs) {
      map[id]._refId = id;
    }
  }
  if (serializer._globalRefs) {
    json.refs = serializer._globalRefs;
  }
  serializer.clearRef();

  json.datas = datas;
  for (var name in json) {
    if (isEmptyObject(json[name])) {
      delete json[name];
    }
  }
  return json;
}

T.GraphModel.prototype.toJSON = function (filter) {
  return graphModelToJSON(this, filter);
};

T.GraphModel.prototype.parseJSON = function (json, options) {
  options = options || {};
  var datas = json.datas;
  if (!datas || !(datas.length > 0)) {
    return;
  }
  var result = [];
  var serializer = new JSONSerializer(options, json.g);
  var elementRefs = {};
  datas.forEach(function (info) {
    if (info._refId) {
      elementRefs[info._refId] = info;
    }
  });
  serializer._globalRefs = json.refs || {};
  serializer._elementRefs = elementRefs;

  datas.forEach(function (json) {
    var element = serializer.jsonToElement(json);
    if (element instanceof T.Element) {
      result.push(element);
      this.add(element);
    }
  }, this);

  if (this.currentSubNetwork) {
    var currentSubNetwork = this.currentSubNetwork;
    result.forEach(function (e) {
      if (!e.parent) {
        e.parent = currentSubNetwork;
      }
    });
  }

  if (json.currentSubNetwork) {
    var _currentSubNetwork = serializer.getREF(json.currentSubNetwork._ref);
    if (_currentSubNetwork) {
      this.currentSubNetwork = _currentSubNetwork;
    }
  }
  serializer.clearRef();
  return result;
};

T.Graph.prototype.toJSON = T.Graph.prototype.exportJSON = function (toString, options) {
  options = options || {};
  var json = this.graphModel.toJSON(options.filter);
  json.scale = this.scale;
  json.tx = this.tx;
  json.ty = this.ty;
  if (toString) {
    json = JSON.stringify(json, options.replacer, options.space || '\t');
  }
  return json;
};
T.Graph.prototype.parseJSON = function (json, options) {
  if (T.isString(json)) {
    json = JSON.parse(json);
  }
  options = options || {};
  var result = this.graphModel.parseJSON(json, options);
  var scale = json.scale;
  if (scale && options.transform !== false) {
    this.originAtCenter = false;
    this.translateTo(json.tx || 0, json.ty || 0, scale);
  }
  return result;
};

loadClassPath(T, 'T');
T.loadClassPath = loadClassPath;

function exportJSON(object, toString) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (object.exportJSON) {
    return object.exportJSON(toString, options);
  }
  var json = new JSONSerializer({ withGlobalRefs: false }).toJSON(object);
  if (toString) {
    return JSON.stringify(json, options.replacer, options.space || '\t');
  }
  return json;
}

var mgtpl = {
  T: T,
  Overview: Overview,
  showExportPanel: showExportPanel,
  exportJSON: exportJSON
};

module.exports = mgtpl;
