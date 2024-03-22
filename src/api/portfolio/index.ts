import { Hono } from "hono";

import { ProjectController } from "./project/project.controller";

export const PortfolioAPI = new Hono();

PortfolioAPI.get("/", (c) => c.text("Portfolio API for imjustlucas.dev"));

PortfolioAPI.route("/project", ProjectController);
