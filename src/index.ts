import { Hono } from "hono";

interface Env {
	fileIndex: KVNamespace;
	fileBucket: R2Bucket;
}

const app = new Hono<{ Bindings: Env }>();

app.get("/get", (c) => {
	return c.json({ status: "OK" });
});

export default {
	fetch: app.fetch,
} satisfies ExportedHandler<Env>;
