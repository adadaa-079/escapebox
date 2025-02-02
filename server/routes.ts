import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  const httpServer = createServer(app);

  // Since this is a simple code validation app, we don't need any API routes
  // All logic is handled client-side for this demo
  
  return httpServer;
}
