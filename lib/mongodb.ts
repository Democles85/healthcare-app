import mongoose from "mongoose"

const uri: string | undefined = process.env.MONGODB_URI
const options: object = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  )
}

const connectdb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return
    }

    return mongoose.connect(uri, options)
  } catch (err) {
    console.log(err)
  }
}

export default connectdb
