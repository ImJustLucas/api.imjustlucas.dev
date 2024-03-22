import { Hono } from "hono";

import { PortfolioAPI } from "./portfolio";

export const api = new Hono();

api.all("/hello", (c) => c.text("Hello API 👋"));

api.route("/portfolio", PortfolioAPI);
