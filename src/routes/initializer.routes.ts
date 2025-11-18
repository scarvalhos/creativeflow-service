import type { FastifyAppInstance, FastifyTypedInstance } from "../types";

export const routesInitializer = (
  server: FastifyAppInstance,
  routes: ((app: FastifyTypedInstance) => Promise<void>)[]
) => {
  for (const router of routes) server.register(router);
  server.log.info("🌱 Routes initialized");
};
