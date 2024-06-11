import { Vehiculo, VehiculoTipo } from "./model"

// Función para dar de alta un vehiculo
async function createVehiculo(nombre: string, patente: string, tipo: VehiculoTipo) {

    if (!nombre) {
        throw new Error("El nombre es requerido")
    }

    if (!patente) {
        throw new Error("La patente es requerida")
    }

    if (!tipo) {
        throw new Error("El tipo es requerido")
    }
    
    // Crear un nuevo documento de vehiculo
    const vehiculo = new Vehiculo({
        nombre,
        patente,
        tipo,
    })

    // Guardar el vehiculo en la base de datos
    await vehiculo.save()
    return vehiculo
}

// Función para obtener todos los vehiculos
async function getAllVehiculos() {
    // Buscar todos los vehiculos
    const vehiculos = await Vehiculo.find({
        activo: true
    })
    return vehiculos
}

// Función para dar de baja un vehiculo
async function setActiveFalseVehiculo(_id: string) {
    // Buscar vehiculo por _id
    const vehiculo = await Vehiculo.findById(_id)

    // Si el vehiculo no existe, lanzar un error
    if (!vehiculo) {
        throw new Error("El vehiculo no existe")
    }

    // Dar de baja el vehiculo
    vehiculo.activo = false

    // Guardar el documento en la base de datos
    await vehiculo.save()
}

export default { createVehiculo, getAllVehiculos, setActiveFalseVehiculo }
