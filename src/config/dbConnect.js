import mongoose, { mongo } from 'mongoose';

async function conectaNaDatabase() {
  mongoose.connect(
    'mongodb+srv://eduardollovo:senha1110..@cluster0.q6hgqed.mongodb.net/inphantil?retryWrites=true&w=majority&appName=Cluster0'
  );

  return mongoose.connection;
}

export default conectaNaDatabase;
