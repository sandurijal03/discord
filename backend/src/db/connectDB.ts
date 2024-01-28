import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string)
    console.log('database connected')
  } catch (err) {
    console.error(err)
  }
}

export default connectDB
