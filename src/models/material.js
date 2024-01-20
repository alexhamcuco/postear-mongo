import mongoose, { Schema } from "mongoose";
const materialSchema = new Schema({
  nivel: String,
  fecha: Date,
  palabrasClave: String,
  privilegios: Boolean,
  tipo: String,
  titulo: String,
  urlTitulo: String,
  urlImagen: String,
  descripcion: String,
});
const Material =
  mongoose.models.Material || mongoose.model("Material", materialSchema);
export default Material;
