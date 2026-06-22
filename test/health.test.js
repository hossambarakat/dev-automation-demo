import assert from "node:assert";
import { test } from "node:test";
import { healthCheck } from "../src/lib/health.js";

test("returns status ok", () => {
	const result = healthCheck();
	assert.strictEqual(result.status, "ok");
});

test("returns a numeric uptime", () => {
	const result = healthCheck();
	assert.strictEqual(typeof result.uptime, "number");
});

test("returns a valid ISO timestamp", () => {
	const result = healthCheck();
	assert.ok(!Number.isNaN(Date.parse(result.timestamp)));
});
