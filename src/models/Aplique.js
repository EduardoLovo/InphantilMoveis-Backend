import mongoose from 'mongoose';

const apliqueSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    codigo: { type: String, required: true },
    imagem: { type: String, required: true },
    quantidade: { type: Number, required: true },
    estoque: { type: Boolean, required: true },
    ordem: { type: Number },
  },
  { versionKey: false }
);

const aplique = mongoose.model('apliques', apliqueSchema);

export default aplique;
