const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imgshare-logo.png","label-img.png","tiny-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a21f8f2f.js","imports":["_app/immutable/entry/start.a21f8f2f.js","_app/immutable/chunks/index.d4184e2c.js","_app/immutable/chunks/singletons.afe35cd2.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.f41df575.js","imports":["_app/immutable/entry/app.f41df575.js","_app/immutable/chunks/index.d4184e2c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-8e3685d4.js'),
			() => import('./chunks/1-86b9f39c.js'),
			() => import('./chunks/2-4d8cf97c.js'),
			() => import('./chunks/3-15faa0e3.js'),
			() => import('./chunks/4-9b8abb42.js'),
			() => import('./chunks/5-a63921e9.js'),
			() => import('./chunks/6-046aad1a.js'),
			() => import('./chunks/7-5ed53284.js'),
			() => import('./chunks/8-8b11791d.js'),
			() => import('./chunks/9-14fcc412.js'),
			() => import('./chunks/10-09f030d4.js'),
			() => import('./chunks/11-1ff1319f.js'),
			() => import('./chunks/12-0d462540.js'),
			() => import('./chunks/13-b5110833.js'),
			() => import('./chunks/14-0e0fa91c.js'),
			() => import('./chunks/15-a7a9e880.js'),
			() => import('./chunks/16-c98ef70a.js'),
			() => import('./chunks/17-1efccc75.js'),
			() => import('./chunks/18-1b881bb5.js'),
			() => import('./chunks/19-d4277e8e.js'),
			() => import('./chunks/20-863aa57e.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(footer)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/gallery/[image]",
				pattern: /^\/gallery\/([^/]+?)\/?$/,
				params: [{"name":"image","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(footer)/rules",
				pattern: /^\/rules\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(footer)/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/user/[username]/(public)",
				pattern: /^\/user\/([^/]+?)\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/user/[username]/(public)/about",
				pattern: /^\/user\/([^/]+?)\/about\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/user/[username]/(public)/comment",
				pattern: /^\/user\/([^/]+?)\/comment\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/user/[username]/(public)/favorite",
				pattern: /^\/user\/([^/]+?)\/favorite\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/user/[username]/(public)/post",
				pattern: /^\/user\/([^/]+?)\/post\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/user/[username]/settings",
				pattern: /^\/user\/([^/]+?)\/settings\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/user/[username]/upload",
				pattern: /^\/user\/([^/]+?)\/upload\/?$/,
				params: [{"name":"username","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "/[...path]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
