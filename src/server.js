import express from "express";
import { greeting } from "./lib/greeting.js";
import { healthCheck } from "./lib/health.js";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
	res.json({ status: "ok" });
});

app.get("/greet", (req, res) => {
	const { name } = req.query;
	res.json({ message: greeting(name) });
});

app.get("/health", (_req, res) => {
	res.json(healthCheck());
});

const PORT = process.env.PORT ?? 3000;

// Only start listening when run directly, not when imported in tests.
if (process.env.NODE_ENV !== "test") {
	app.listen(PORT, () => {
		console.log(`Demo API listening on port ${PORT}`);
	});
}

export { app };
