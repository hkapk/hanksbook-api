const { Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema (
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
        },
        reactionBody: {
          type: String,
          required: true,
          trim: true
        },
        username: {
          type: String,
          required: true
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
        }
      },
      {
        toJSON: {
          getters: true
        }
      }
    
);


const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            //must be 1-280 characters
            minlength: 1,
            maxlength: 280  
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        //username of who created the thought
        username: {
            type: String,
            required: true,
            trim: true
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

// virtuals here
ReactionSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;