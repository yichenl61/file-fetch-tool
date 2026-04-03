export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname === "/get") {
			return new Response("OK", { status: 200 });
		}

		return new Response("Not Found", { status: 404 });
	},
} satisfies ExportedHandler<Env>;
