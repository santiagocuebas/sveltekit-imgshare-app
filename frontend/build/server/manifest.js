const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imgshare-logo.png","label-img.png","tiny-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ee5e695a.js","imports":["_app/immutable/entry/start.ee5e695a.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/singletons.61d7a956.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.54be2b2d.js","imports":["_app/immutable/entry/app.54be2b2d.js","_app/immutable/chunks/index.8bb6be9b.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-ba69aeba.js'),
			() => import('./chunks/1-7f1388a1.js'),
			() => import('./chunks/2-089c7d77.js'),
			() => import('./chunks/3-feba97cd.js'),
			() => import('./chunks/4-68616e7b.js'),
			() => import('./chunks/5-37421c16.js'),
			() => import('./chunks/6-ba6f45aa.js'),
			() => import('./chunks/7-301a5c66.js'),
			() => import('./chunks/8-3617d910.js'),
			() => import('./chunks/9-70753e94.js'),
			() => import('./chunks/10-6bc63666.js'),
			() => import('./chunks/11-eff2f60d.js'),
			() => import('./chunks/12-a1b3bd65.js'),
			() => import('./chunks/13-e666ee45.js'),
			() => import('./chunks/14-50db395e.js'),
			() => import('./chunks/15-357c03e5.js'),
			() => import('./chunks/16-43da7f05.js'),
			() => import('./chunks/17-46b88b0e.js'),
			() => import('./chunks/18-cddbe9d1.js'),
			() => import('./chunks/19-f82f6a68.js'),
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
