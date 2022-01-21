const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            //must be 1-280 characters 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        //username of who created the thought
        username: {
            type: String,
            required: true
          },

          //use the reactions schema
          reactions: [ReactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
    }

);