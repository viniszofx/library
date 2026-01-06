import { FastifyInstance } from "fastify";

async function routes(fastify: FastifyInstance) {
  fastify.get("/", async () => {
    return { hello: "teste" };
  });
}

export default routes;
