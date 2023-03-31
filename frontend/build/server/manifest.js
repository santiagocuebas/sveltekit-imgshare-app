const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imgshare-logo.png","label-img.png","tiny-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.74d5ccb4.js","imports":["_app/immutable/entry/start.74d5ccb4.js","_app/immutable/chunks/index.4c08a5a5.js","_app/immutable/chunks/singletons.40b07bf7.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d09db053.js","imports":["_app/immutable/entry/app.d09db053.js","_app/immutable/chunks/index.4c08a5a5.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-fe3d9572.js'),
			() => import('./chunks/1-bfb43dfc.js'),
			() => import('./chunks/2-9c99b614.js'),
			() => import('./chunks/3-ecc2f3d3.js'),
			() => import('./chunks/4-31db043b.js'),
			() => import('./chunks/5-ca39e871.js'),
			() => import('./chunks/6-a732d228.js'),
			() => import('./chunks/7-6ab913f1.js'),
			() => import('./chunks/8-ac7fb226.js'),
			() => import('./chunks/9-f7f2d574.js'),
			() => import('./chunks/10-c921d7fe.js'),
			() => import('./chunks/11-dbf824c1.js'),
			() => import('./chunks/12-eecf791b.js'),
			() => import('./chunks/13-2520529a.js'),
			() => import('./chunks/14-5d0fe6bc.js'),
			() => import('./chunks/15-431bd68b.js'),
			() => import('./chunks/16-435dabf0.js'),
			() => import('./chunks/17-1e498255.js'),
			() => import('./chunks/18-e957c709.js'),
			() => import('./chunks/19-fa9211d5.js')
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
