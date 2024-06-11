import { Type, } from "@sinclair/typebox";
import { Elysia } from "elysia";
import controller from "./controller";
import { VehiculoTipo } from "./model";

export function routeVehiculo(app: Elysia){
    // GET /vehiculo
    app.get("/vehiculo", async ({set}) => {
        return await controller.getAllVehiculos()
    });
    
    // POST /vehiculo
    app.post("/vehiculo", async ({body}) => {
        return await controller.createVehiculo(body.nombre, body.patente, body.tipo)
    },{
        body: Type.Object({
            nombre: Type.String(),
            patente: Type.String(),
            tipo: Type.Enum(VehiculoTipo),
        }),
    });

    // DELETE /membresia?id=123
    app.delete("/vehiculo", async ({query}) => {
        return await controller.setActiveFalseVehiculo(query.id)
    },{
        query: Type.Object({
            id: Type.String()
        })
    });
}