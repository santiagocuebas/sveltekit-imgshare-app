const config = {
  runtime: "edge",
  regions: "all"
};
const load = async ({ locals }) => {
  return {
    user: locals.user
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  config: config,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-907f8980.js')).default;
const file = '_app/immutable/entry/_layout.svelte.51ed15be.js';
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/entry/_layout.svelte.51ed15be.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/config.6f2f33d8.js","_app/immutable/chunks/click-outside.61d417da.js","_app/immutable/chunks/axios.707ed124.js","_app/immutable/chunks/enums.4774c07c.js"];
const stylesheets = ["_app/immutable/assets/_layout.80e9ce0e.css"];
const fonts = [];

export { component, file, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-13c5c77a.js.map
