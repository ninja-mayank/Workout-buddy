const express = require('express')
const{
    createWorkout,
    getWorkout,
    getSingleWorkout
} = require('../controllers/workoutControllers')
const router = express.Router()

// GET all workouts
router.get('/', getWorkout)

// GET a single workout
router.get('/:id', getSingleWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

module.exports = router