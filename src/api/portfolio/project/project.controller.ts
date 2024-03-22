import { Hono } from "hono";

export const ProjectController = new Hono();

ProjectController.get("/", (c) => c.text("List Projects"));
