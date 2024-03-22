import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

import { api } from "@api/index";
import { customLogger } from "@config/customLogger";

const app = new Hono();

/**
 *
 * * Middlewares
 */
app.use(logger(customLogger));

/**
 *
 * * Routes
 */
app.get("/", (c) => {
  return c.text("Hello! Welcome on api.imjustlucas.dev");
});

app.route("/api", api);

const port = 3000;
customLogger(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
