/**
 * Build a health-check response object.
 *
 * @returns {{ status: string, uptime: number, timestamp: string }} Health info.
 */
export function healthCheck() {
	return {
		status: "ok",
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
	};
}
