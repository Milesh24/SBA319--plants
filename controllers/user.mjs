import express from 'express';
const router = express.Router();
import User from '../models/users.mjs';
import db from '../db/conn.mjs';


router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
      await User.create([

        { 
          fName: 'Courtney',
         lName: 'Williams',
          phone: 64833115 

        },

        { fName: 'Alesha',
        lName: 'Michel',
         phone: 4598518

        },
        { 

          fName: 'John',
          lName: 'Wick',
           phone: 5558795

          }
      ])
    
      res.status(200).redirect("/users");
    } catch (err) {
      res.status(400).send(err);
    }
  });

// elements to display
router.get('/', async (req, res) => {
  try {
      const foundUsers = await User.find({});
      res.status(200).render('users/Index', { users: foundUsers})
   
  } catch (err) {
   res.status(400).send(err);
  }
})

// N - New - input a new user
router.get('/new', (req, res) => {
  res.render('users/New');

})

//ID- DELETE--
router.delete('/:id', async( req, res) => {
  try{
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      //console.log(deletedUser)
      res.status(200).redirect('users');
  
  } catch (err) {
      res.status(400).send(err);
  }
  }
)

// U - UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.staySignedIn === 'on') {
      req.body.staySignedIn = true;
  } else {
      req.body.staySignedIn = false;
  }

  try {
      const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true },
      );
          console.log(updatedUser);
      res.redirect(`/users/${req.params.id}`);
  } catch (err) {
      res.status(400).send(err);
  }
})

// C - CREATE

// Route to create a new users
router.post('/', async (req, res) => {
  // Convert 'on' to true or false for the staySignedIn field
  if (req.body.staySignedIn === 'on') {
      req.body.staySignedIn = true;
  } else {
      req.body.staySignedIn = false;
  }

  try {
      // Create a new user using the User model
      const createdUser = await User.create(req.body);
      res.status(200).redirect('/users');
  } catch (err) {
      res.status(400).send(err);
  }
});

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
  try {
      const foundUser = await User.findById(req.params.id);
      res.status(200).render('users/Edit', {user: foundUser});
  } catch (err) {
      res.status(400).send(err);
  }
})


// S - SHOW - show route displays details of an individual user
router.get('/:id', async (req, res) => {
  try {
      const foundUser = await User.findById(req.params.id);
      res.render('users/Show', {user:foundUser});
  } catch (err) {
      res.status(400).send(err);
  }
})

 export default router;