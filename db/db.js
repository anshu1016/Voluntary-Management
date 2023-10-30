const {connect}= require('mongoose');
const mongoURI = process.env.MONGO_DB;

const connectDB=async()=>{
  try{
    await connect(mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    console.log("connected to MongoDB")
  }catch(error){
    console.error(error)
  }
}
connectDB()