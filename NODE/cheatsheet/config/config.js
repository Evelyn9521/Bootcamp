//configuramos la variable de entorno
//para que coja una ya existente el 3000 si no existe

process.env.PORT = process.env.PORT || 3000;