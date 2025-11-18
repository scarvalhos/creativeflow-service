import { RunServer } from "./config/server";

RunServer({
  port: 3333,
  logger: true,
  config: {
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    swagger: {
      title: "CreativeFlow Service API",
      description: "API Documentation for CreativeFlow Service",
      version: "1.0.0",
      routePrefix: "/docs",
    },
  },
});
