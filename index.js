require("./db/db.js");
const express = require('express');
const cors = require('cors');

const { eventRouter } = require('./routers/event.router.js'); 
const { volunteerRouter } = require('./routers/volunteer.router.js'); 
const app = express();
const PORT = process.env.PORT || 3000;




app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/volunteer', volunteerRouter);
app.use('/event', eventRouter);
app.get("/",(req,res)=>{
  res.send("Hello Express App!!")
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

