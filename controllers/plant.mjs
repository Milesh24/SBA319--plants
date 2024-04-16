import express from 'express';
const router = express.Router();
import db from '../db/conn.mjs';
import Plant from '../models/plants.mjs';


router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Plant.create([
            {
                name: 'climbers',
                color: "green",
                readyToEat: true
            }, 
            {
                name: 'shrubs',
                color: 'yellow',
                readyToEat: false
            }, 
            {
                name: 'herbs',
                color: 'green',
                readyToEat: true
            }
        ])
        res.status(200).redirect('/plants');
    } catch (err) {
        res.status(400).send(err);
    }
});
// elements to display
router.get('/', async (req, res) => {
    try {
        const foundPlants = await Plant.find({});
        res.status(200).render('plants/Index', { plants: foundPlants})
    } catch (err) {
        res.status(400).send(err);
    }
})
// N - New - input a new plants
router.get('/new', (req, res) => {
    res.render('plants/New');
})
//ID- DELETE--
router.delete('/:id', async( req, res) => {
    try{
        const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
        // console.log(deletedPlant);
        res.status(200).redirect('plants');
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
        const updatedPlant = await Plant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedPlant);
        res.redirect(`/plants/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})
//- Create
router.post('/', async(req, res) => {
    // // this will be useful when have a user input form
    if (req.body.readyToPick = 'on') { 
        req.body.readyToPick = true;
    } else {                            // if not checked, then it is not saved
        req.body.readyToPick = false;
    }
    console.log(req.body)

    try {
        const createdPlant = await Plant.create(req.body);
        res.status(200).redirect('/plants');
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundPlant = await Plant.findById(req.params.id);
        res.status(200).render('plants/Edit', {plant: foundPlant});
    } catch (err) {
        res.status(400).send(err);
    }
})

// S - SHOW - show route displays plants
router.get('/:id', async (req, res) => {
    try {
        const foundPlant = await Plant.findById(req.params.id);
        res.render('Plants/Show', {plant: foundPlant});
    } catch (err) {
        res.status(400).send(err);
    }
})
export default router;