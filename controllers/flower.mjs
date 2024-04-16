import express from 'express';
const router = express.Router();
import Flower from '../models/flowers.mjs';
import db from '../db/conn.mjs';



router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Flower.create([
            {
                name: 'rose',
                color: "pink",
                readyToPick: true
            }, 
            {
                name: 'sunflowers',
                color: 'yellow',
                readyToPick: false
            }, 
            {
                name: 'tulip',
                color: 'orange',
                readyToPick: true
            }
        ])
        res.status(200).redirect("/flowers");
    } catch (err) {
        res.status(400).send(err);
    }
});
// I - Index   
router.get('/', async (req, res) => {
    try {
        const foundFlowers = await Flower.find({});
        res.status(200).render('flowers/Index', { flowers: foundFlowers})
        // res.status(200).send(foundFlowers);
    } catch (err) {
        res.status(400).send(err);
    }
})
// N - New - allows a user to input a new flower
router.get('/new', (req, res) => {
    res.render('flowers/New');
})
//ID- DELETE--
router.delete('/:id', async( req, res) => {
    try{
        const deletedFlower = await Flower.findByIdAndDelete(req.params.id);
        // console.log(deletedFlower);
        res.status(200).redirect('flowers');
    } catch (err) {
        res.status(400).send(err);
    }
    }
)
// U - UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.readyToPick === 'on') {
        req.body.readyToPick = true;
    } else {
        req.body.readyToPick = false;
    }
    try {
        const updatedFlower = await Flower.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedFlower);
        res.redirect(`/flowers/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
// C - CREATE
router.post('/', async(req, res) => {
    if (req.body.readyToPick === 'on') { // if checked, req.body.readyToPickt is set to 'on' - or the checkbox is checked
        req.body.readyToPick = true;
    } else {                            // if not checked, then it was undefined
        req.body.readyToPick = false;
    }
    console.log(req.body)
    try {
        const createdFlower = await Flower.create(req.body);
        res.status(200).redirect('/flowers');
    } catch (err) {
        res.status(400).send(err);
    }
})
// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundFlower = await Flower.findById(req.params.id);
        res.status(200).render('flowers/Edit', {flower: foundFlower});
    } catch (err) {
        res.status(400).send(err);
    }
})
// S - SHOW - show route displays details of an individual flowers
router.get('/:id', async (req, res) => {
    try {
        const foundFlower = await Flower.findById(req.params.id);
        res.render('flowers/Show', {flower: foundFlower});
    } catch (err) {
        res.status(400).send(err);
    }
})
export default router;