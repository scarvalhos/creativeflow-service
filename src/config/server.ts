import ScalarApiReference from "@scalar/fastify-api-reference";

import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";

import { fastifySwagger } from "@fastify/swagger";
import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";

import { FastifyAppInstance } from "../types";
import { routesInitializer } from "../routes/initializer.routes";
import { routes } from "../routes";

export type RunServer = {
  port?: number;
  logger?: boolean;
  config: {
    methods: string[];
    swagger: {
      title: string;
      description: string;
      version: string;
      routePrefix: string;
    };
  };
};

export const serverConfig = (
  app: FastifyAppInstance,
  config: RunServer["config"]
) => {
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(fastifyCors, {
    origin: true,
    methods: config?.methods,
    credentials: true,
  });

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: config?.swagger?.title,
        description: config?.swagger?.description,
        version: config?.swagger?.version,
      },
    },
    transform: jsonSchemaTransform,
  });

  app.register(ScalarApiReference, {
    routePrefix: config?.swagger?.routePrefix as `/${string}`,
  });
};

export const RunServer = async ({ port, logger, config }: RunServer) => {
  const app = fastify({
    logger,
  }).withTypeProvider<ZodTypeProvider>();

  serverConfig(app, config);
  routesInitializer(app, routes);

  //   prisma.testConnection()

  return app.listen({ port, host: "0.0.0.0" }).then(() => {
    app.log.info(`🔥 HTTP Server running on http://localhost:${port}`);
    app.log.info(`📚 Docs available on http://localhost:${port}/docs`);
  });
};
