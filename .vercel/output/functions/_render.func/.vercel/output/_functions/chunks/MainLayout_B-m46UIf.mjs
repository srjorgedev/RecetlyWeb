import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, e as renderHead, a as renderComponent, f as renderSlot } from './astro/server_DkeD6lR4.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const cookies = Astro2.request.headers.get("cookie");
  let token = null;
  if (cookies) {
    token = cookies.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      if (key === "token") acc = value;
      return acc;
    }, "");
  }
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <div class="options" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Inicio</a> <a href="/recipes/" data-astro-cid-3ef6ksr2>Recetas</a> </div> ${token !== null ? renderTemplate`<a href="/user/profile" data-astro-cid-3ef6ksr2>Perfil</a>` : null} ${token === null ? renderTemplate`<a href="/auth/login" data-astro-cid-3ef6ksr2>Perfil</a>` : null} </nav> </header> `;
}, "C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="layout"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
