const express= require("express");

const Pizza= require('./models/pizzamodel')

const db= require("./db")
const app = express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')

app.use('/api/pizzas/', pizzasRoute) 

app.get("/", (req, res) => {
    res.send("Server working " +port);
});

const port= process.env.PORT || 5000; 

app.listen(port, () => 'Server running on port port ');