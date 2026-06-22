/**
 * Build a friendly greeting message.
 *
 * @param {string} [name] - Name to greet. Defaults to "world".
 * @returns {string} The greeting message.
 */
export function greeting(name = "world") {
  const trimmed = String(name).trim();
  const who = trimmed.length > 0 ? trimmed : "world";
  return `Hello, ${who}!`;
}
