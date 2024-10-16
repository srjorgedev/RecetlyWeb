import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_PDHd_mnf.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DkeD6lR4.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\"form\");e.querySelector(\"#signin\");e.querySelector(\"#signup\");const n=e.querySelector(\"#email\"),a=e.querySelector(\"#password\");e.addEventListener(\"submit\",async t=>{t.preventDefault();const o=await(await fetch(\"https://app.recetly.net/api/v1/auth/login\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({email:n.value,password:a.value})})).json();console.log(o),o.login&&(document.cookie=`token=${o.id}; path=/; Secure`,location.replace(\"/\"))});\n"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-j7y7d5ql]{font-size:5.5rem}h2[data-astro-cid-j7y7d5ql]{font-size:2.5rem;font-weight:400}form[data-astro-cid-j7y7d5ql]{display:flex;flex-direction:column;margin-top:2rem;padding:4rem;background:#5b8ae3;border-radius:2rem;& label[data-astro-cid-j7y7d5ql]{font-size:2rem;margin-bottom:.5rem}& input[data-astro-cid-j7y7d5ql]{height:4rem;font-size:2rem;outline:none;border-radius:1rem;border:none}& input[data-astro-cid-j7y7d5ql]:not(input[type=submit],input[type=button]){padding-left:1rem;cursor:text}& input[data-astro-cid-j7y7d5ql][type=email]{margin-bottom:1rem}& input[data-astro-cid-j7y7d5ql][type=submit]{margin:4rem 0 1rem;background-color:#d4e3ff}& input[data-astro-cid-j7y7d5ql][type=button]{background-color:#4e7bcf}& input[data-astro-cid-j7y7d5ql][type=submit],input[data-astro-cid-j7y7d5ql][type=button]{cursor:pointer;transition:transform .1s ease-in-out}& input[data-astro-cid-j7y7d5ql][type=submit]:active,input[data-astro-cid-j7y7d5ql][type=button]:active{transform:translateY(3px)}}\n@media (min-width: 768px){padding: 1rem 1rem}header{width:100%;padding:1rem 4rem;border-left:2px solid #e9e9e9;border-right:2px solid #e9e9e9;border-bottom:2px solid #e9e9e9}nav[data-astro-cid-3ef6ksr2]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;& div[data-astro-cid-3ef6ksr2]{display:flex;gap:8px}}a[data-astro-cid-3ef6ksr2]{font-size:2.5rem;text-decoration:none;padding:.5rem 2rem;color:#000;font-weight:500}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui;background-size:100%;font-size:12px;color:#131313}main{display:flex;flex-direction:column;width:100%;padding:0 2rem}@media (min-width: 768px){main.layout{max-width:1440px;height:100dvh;margin:0 auto;padding:4rem;border-left:2px solid #e9e9e9;border-right:2px solid #e9e9e9}body{margin:0 auto;max-width:1440px;height:100dvh}}*{margin:0;padding:0;box-sizing:border-box;border:none}\n"}],"routeData":{"route":"/auth/login","isIndex":false,"type":"page","pattern":"^\\/auth\\/login\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/login.astro","pathname":"/auth/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"\n"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-j7pv25f6]{font-size:5rem}h2[data-astro-cid-j7pv25f6]{font-size:2.5rem}p[data-astro-cid-j7pv25f6]{font-size:2rem;margin-top:1.5rem}article[data-astro-cid-j7pv25f6]{height:auto;display:flex;flex-direction:column;gap:.5rem;margin:1rem 0 0;& section[data-astro-cid-j7pv25f6]{display:flex;flex-direction:row;gap:.5rem;& a[data-astro-cid-j7pv25f6]{font-size:2rem;cursor:pointer;padding:1rem 2.5rem;border:none}& a[data-astro-cid-j7pv25f6]:first-child{background:#582eff;color:#f1f1f1}& a[data-astro-cid-j7pv25f6]:last-child{background:#34208f;color:#f1f1f1}}& a[data-astro-cid-j7pv25f6]{flex:1;font-size:2rem;padding:1rem 2.05rem;text-decoration:none;display:inline-block;border:2px solid #582eff;background:#582eff25;text-align:center;border-radius:16px;color:#333;transition:.15s ease-in-out filter}& a[data-astro-cid-j7pv25f6]:hover{filter:invert()}}@media (min-width: 768px){[data-astro-cid-j7pv25f6]{user-select:none}h1[data-astro-cid-j7pv25f6]{font-size:9rem;line-height:1;margin-bottom:4rem}h2[data-astro-cid-j7pv25f6]{font-size:3rem;font-weight:400;margin-bottom:1rem}p[data-astro-cid-j7pv25f6]{font-size:2.5rem;margin-top:1rem;z-index:2;position:relative;max-width:1080px}article[data-astro-cid-j7pv25f6]{width:42rem;height:auto;display:flex;flex-direction:column;gap:.5rem;margin:4rem 0 0;& section[data-astro-cid-j7pv25f6]{display:flex;flex-direction:row;gap:.5rem;& a[data-astro-cid-j7pv25f6]{font-size:2.5rem;cursor:pointer;padding:1.25rem 2.75rem;border:none}& a[data-astro-cid-j7pv25f6]:first-child{background:#582eff;color:#f1f1f1}& a[data-astro-cid-j7pv25f6]:last-child{background:#34208f;color:#f1f1f1}}& a[data-astro-cid-j7pv25f6]{flex:1;font-size:2.25rem;padding:1rem 2.05rem;text-decoration:none;display:inline-block;border:2px solid #582eff;background:#582eff25;text-align:center;border-radius:16px;color:#333;transition:.15s ease-in-out filter}& a[data-astro-cid-j7pv25f6]:hover{filter:invert()}}}span[data-astro-cid-j7pv25f6],strong[data-astro-cid-j7pv25f6]{color:#582eff}\n@media (min-width: 768px){padding: 1rem 1rem}header{width:100%;padding:1rem 4rem;border-left:2px solid #e9e9e9;border-right:2px solid #e9e9e9;border-bottom:2px solid #e9e9e9}nav[data-astro-cid-3ef6ksr2]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;& div[data-astro-cid-3ef6ksr2]{display:flex;gap:8px}}a[data-astro-cid-3ef6ksr2]{font-size:2.5rem;text-decoration:none;padding:.5rem 2rem;color:#000;font-weight:500}}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui;background-size:100%;font-size:12px;color:#131313}main{display:flex;flex-direction:column;width:100%;padding:0 2rem}@media (min-width: 768px){main.layout{max-width:1440px;height:100dvh;margin:0 auto;padding:4rem;border-left:2px solid #e9e9e9;border-right:2px solid #e9e9e9}body{margin:0 auto;max-width:1440px;height:100dvh}}*{margin:0;padding:0;box-sizing:border-box;border:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/pages/auth/login.astro",{"propagation":"none","containsHead":true}],["C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/auth/login@_@astro":"pages/auth/login.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_bZgxzuBE.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.l0sNRNKZ.js","/astro/hoisted.js?q=0":"_astro/hoisted.D-QDJ149.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/assets/fon.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"x4rWZ7JkIm2ECgi4G0Rt9RgBfq0mPsP73iE0dMfh1Eg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
