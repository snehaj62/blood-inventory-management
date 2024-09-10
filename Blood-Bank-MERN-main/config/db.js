const mongoose = require('mongoose');
const colors = require('colors');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`Connected to MongoDB: ${mongoose.connection.host}`.bgCyan.white);
//     } catch (err) {
//         console.error(`MongoDB database error: ${err.message}`.bgRed.white);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

const username = "snehajindal586";
const password = 'Snehajindal10';

const url = `mongodb+srv://${username}:${password}@cluster0.pth6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = async () => {
    try{
        const data = await mongoose.connect(url)
        console.log('DB Connected');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;