import assert from "node:assert";
import { test } from "node:test";
import { greeting } from "../src/lib/greeting.js";

test("greets a given name", () => {
	assert.strictEqual(greeting("Ada"), "Hello, Ada!");
});

test("defaults to world when no name is provided", () => {
	assert.strictEqual(greeting(), "Hello, world!");
});

test("falls back to world for blank input", () => {
	assert.strictEqual(greeting("   "), "Hello, world!");
});

test("trims surrounding whitespace", () => {
	assert.strictEqual(greeting("  Grace  "), "Hello, Grace!");
});
