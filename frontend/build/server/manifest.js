const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","imgshare-logo.png","label-img.png","tiny-logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.561adb6e.js","imports":["_app/immutable/entry/start.561adb6e.js","_app/immutable/chunks/index.8bb6be9b.js","_app/immutable/chunks/singletons.bad58c8c.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3de297dd.js","imports":["_app/immutable/entry/app.3de297dd.js","_app/immutable/chunks/index.8bb6be9b.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-5d842682.js'),
			() => import('./chunks/1-90211fea.js'),
			() => import('./chunks/2-2b339429.js'),
			() => import('./chunks/3-3addc0f9.js'),
			() => import('./chunks/4-8e78fe3c.js'),
			() => import('./chunks/5-838fdd75.js'),
			() => import('./chunks/6-ba6f45aa.js'),
			() => import('./chunks/7-301a5c66.js'),
			() => import('./chunks/8-3617d910.js'),
			() => import('./chunks/9-6def5a60.js'),
			() => import('./chunks/10-d6b28c28.js'),
			() => import('./chunks/11-85bd802e.js'),
			() => import('./chunks/12-257943f3.js'),
			() => import('./chunks/13-01c95b7a.js'),
			() => import('./chunks/14-dc96d3aa.js'),
			() => import('./chunks/15-4f252073.js'),
			() => import('./chunks/16-d5f879ec.js'),
			() => import('./chunks/17-4fd61f1d.js'),
			() => import('./chunks/18-ce5ca7ec.js'),
			() => import('./chunks/19-bca1ba8c.js'),
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
