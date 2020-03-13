// app/models/listItem.js

const mongoose = require('mongoose')

const listItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  lat: {
    type: Number,
    required: false
  },
  lng: {
    type: Number,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('ListItem', listItemSchema)
