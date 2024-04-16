import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import db from './db/conn.mjs';
import plantRoutes from './controllers/plant.mjs';
import flowerRoutes from './controllers/flower.mjs';
import userRoutes from './controllers/user.mjs'

// creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5050;

// app.use(express.json());

// ================ Set up view engine ================
//
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());


// ================ Middleware ================
//
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"))

// ================ Routes ================
//

app.use("/plants", plantRoutes);
app.use("/flowers",flowerRoutes);
app.use("/users", userRoutes)

app.get('/', (req, res) => {
    res.send(
        `<div>This is my flowers and plants route 
        <br/><a href='/flowers'>flowers</a><br/><a href='/plants'>plants</a><br/><a href='/users'>users</a</div>`
    );
});

app.listen(PORT, () => {
    console.log(`listening`);
});