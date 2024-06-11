import { Elysia } from "elysia";
import { routeVehiculo } from "./vehiculo/router";

// Import the connection file to start the connection
import "./mongodb/connection";

const app = new Elysia()
    .get("/ping", () => "pong");

routeVehiculo(app);

app.listen(Bun.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
