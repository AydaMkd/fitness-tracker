const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const passport = require("passport");
let Exercise = require('../../models/activity');
let user= require('../../models/activity')

const {ExtractJwt} = require("passport-jwt");
const {request} = require("express");

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
router.get(
   "/exercise",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
      Exercise.find({ userId: req.user.id})
         .then(exercises => res.status(200).json(exercises))
         .catch(err =>
            res
               .status(400)
               .json({ user: "Error fetching activity of logged in user" })
         );
   }
);

router.post(
    "/add",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
       const userId = jwt.verify((req.headers["authorization"]).replace("Bearer ", ""), process.env.secretOrKey).id;
       //const name= req.user.id
       const description = req.body.description;
       const duration = req.body.duration;
       const added=req.body.added
       const { errors, isValid } = validateActivityInput(req.body);
       if (!isValid) {
          return res.status(400).json(errors);
       }
      
       const newExercise = new Exercise(
         { userId,
           description,
           duration,
           added,
         }
       );
       newExercise
          .save()
          .then(doc => res.json(doc))
          .catch(err => res.status(500).json({ create: "Error creating new post: " +err}));
    }
 );


router.delete(
    "/delete/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
       const exercise = req.user.userName;
       Exercise.findOneAndDelete({ exercise, _id: req.params.id })
          .then(doc => res.status(200).json(doc))
          .catch(err =>
             res.status(400).json({ delete: "Error deleting a post" })
          );
    }
 );

module.exports = router;