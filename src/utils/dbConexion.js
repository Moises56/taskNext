// import mongoose
import mongoose, { connection } from 'mongoose';

// Conexión a la base de datos
const conn = {
    isConnected :false
}
export async function connectDB() {
    if (conn.isConnected) return;
    // Conectando a la base de datos
    // const db = await mongoose.connect(process.env.MONGODB_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false
    // });

    const db = await mongoose.connect('mongodb+srv://uga:uga456@cluster0.rgl68zc.mongodb.net/uga?retryWrites=true&w=majority')
    console. log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState;
}





connection.on('connected', () => {
    console.log('DB conectada')
})

connection.on('error', (err) => {
    console.log('DB error', err)
})
