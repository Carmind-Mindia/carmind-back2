import { Type, type Static } from "@sinclair/typebox"
import mongoose, { Schema } from "mongoose"

export enum VehiculoTipo {
	"Auto" = "Auto",
	"Camioneta" = "Camioneta",
	"Camion" = "Camion",
	"Montacargas" = "Montacargas",
	"Otro" = "Otro",
}

//-------------------------------------------------------------------------

const TVehiculo = Type.Object({
	id: Type.String(),
	nombre: Type.String(),
	patente: Type.String(),
	marca: Type.String(),
	modelo: Type.String(),
	anio: Type.Number(),
	tipo: Type.String(),
	activo: Type.Boolean(),
})

export type IVehiculo = Static<typeof TVehiculo>

const vehiculoSchema = new Schema<IVehiculo>(
	{
		nombre: { type: String, required: true },
		patente: { type: String, required: false },
		marca: { type: String, required: false },
		modelo: { type: String, required: false },
		anio: { type: Number, required: false },
		tipo: { 
			type: Schema.Types.String, 
			required: true, 
			enum: VehiculoTipo
		},
		activo: { type: Boolean, default: true },
	},
	{
		versionKey: false,
	}
)

export const Vehiculo = mongoose.model<IVehiculo>("vehiculo", vehiculoSchema)

//---------------------------------------------------------
