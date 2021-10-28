const game = require('../model/game')
const express = require('express')
const router = express.Router()
let {
  caveEntrance,
  caveEntranceExits,
  room2,
  room2Exits,
  room3,
  room3Exits,
  room4,
  room4Exits,
  room5,
  room5Exits,
} = require('../model/rooms')

router.get('/caveEntrance', (req, res) => {
  let message = caveEntrance()
  //check for treasure
  //check for monster
  message += caveEntranceExits()
  res.send(message)
})

router.get('/room2', (req, res) => {
  let message = room2()
  //check for treasure
  //check for monster
  message += room2Exits()
  res.send(message)
})

router.get('/room3', (req, res) => {
  let message = room3()
  //check for treasure
  //check for monster
  message += room3Exits()
  res.send(message)
})

router.get('/room4', (req, res) => {
  let message = room4()
  //check for treasure
  //check for monster
  message += room4Exits()
  res.send(message)
})

router.get('/room5', (req, res) => {
  let message = room5()
  //check for treasure
  //check for monster
  message += room5Exits()
  res.send(message)
})
module.exports = router
