import cors from "@fastify/cors";
import Fastify from "fastify";

import routes from "./routes/index.ts";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);
fastify.register(routes);

try {
  await fastify.listen({ port: 4000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
