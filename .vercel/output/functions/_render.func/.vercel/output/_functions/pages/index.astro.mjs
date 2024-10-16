import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DkeD6lR4.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_B-m46UIf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "RECETLY", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-j7pv25f6>BIENVENIDO A <span data-astro-cid-j7pv25f6>RECETLY</span></h1> <h2 data-astro-cid-j7pv25f6>La aplicacion <strong data-astro-cid-j7pv25f6>#1</strong> de recetas de comida</h2> <p data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>¿Que es recetly?</strong> La mejor aplicacion de recetas de comida.
		Aqui encontraras una gran variedad de recetas, desde mexicana, italiana,
		oriental y entre muchas otras.
</p> <p data-astro-cid-j7pv25f6>
Se participe de la mejor aplicacion de recetas de comida del mercado.
		Unete a la comunidad y aprovecha las posibilidades
</p> <p data-astro-cid-j7pv25f6>Unete a RECETLY</p> <article data-astro-cid-j7pv25f6> <section data-astro-cid-j7pv25f6> <a id="signin" href="/auth/login" data-astro-cid-j7pv25f6>Iniciar Sesion</a> <a id="signup" data-astro-cid-j7pv25f6>Registrarse</a> </section> <a href="https://bit.ly/4eF7933" data-astro-cid-j7pv25f6>O descarga la aplicacion movil aqui</a> </article> ` })}  `;
}, "C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/pages/index.astro", void 0);

const $$file = "C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
