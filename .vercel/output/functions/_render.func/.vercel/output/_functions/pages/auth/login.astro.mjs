import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DkeD6lR4.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_B-m46UIf.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const cookies = Astro2.request.headers.get("cookie");
  let token = null;
  if (cookies) {
    token = cookies.split(";").reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split("=");
      if (key === "token") acc = value;
      return acc;
    }, "");
  }
  if (token !== null) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Inicia Sesion", "data-astro-cid-j7y7d5ql": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7y7d5ql> <h1 data-astro-cid-j7y7d5ql>Bienvenido de nuevo</h1> <h2 data-astro-cid-j7y7d5ql>
Ingresa tus datos y accede a todo el contenido que RECETLY tiene
            para ofrecerte
</h2> <form action="post" data-astro-cid-j7y7d5ql> <label for="emailInput" data-astro-cid-j7y7d5ql>Correo electronico</label> <input type="email" name="emailInput" id="email" data-astro-cid-j7y7d5ql> <label for="passwordInput" data-astro-cid-j7y7d5ql>Contraseña</label> <input type="password" name="passwordInput" id="password" data-astro-cid-j7y7d5ql> <input type="submit" id="signin" value="Entrar" data-astro-cid-j7y7d5ql> <input type="button" id="signup" value="No tengo una cuenta" data-astro-cid-j7y7d5ql> </form> </main> ` })}  `;
}, "C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/pages/auth/login.astro", void 0);

const $$file = "C:/Users/ssjor/OneDrive/Desktop/recetlyWeb/src/pages/auth/login.astro";
const $$url = "/auth/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
