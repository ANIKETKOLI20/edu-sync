import mongoose from 'mongoose'

export const connectMongoDB = () => {
    try {
        const connect = mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}