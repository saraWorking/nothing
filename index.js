const express = require('express');
const app = express();
const routes = require('./routes/routes')
const cors= require('cors')
const env = require('dotenv');
env.config();
const mongoose= require('mongoose');
console.log("hjbvihv");
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {console.log("MongoDB connected");}).catch((err) => {console.log("err:"+err)})

app.use(cors());
app.use(express.json());
app.use("/", routes)
app.listen(process.env.PORT),() =>console.log("listening  ");