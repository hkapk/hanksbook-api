const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
// username
// String
// Unique
// Required
// Trimmed
    {
        userName: {
            type: String,
            unique: true,
            required: 'Username is required.',
            trim: true
        },
        email: {
            type: String,
            required: `'You have to have an email, it's 2022'`,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        thoughts: {
            //Array of _id values referencing the Thought model
        },
        friends: {
            //Array of _id values referencing the User model (self-reference)
        }
    },
    {
        toJSON: {
          virtuals: true
        },
        id: false
    }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// UserSchema.virtual('friendCount').get(function() {
//         return friends.length
//       });

      
      
const User = model('User', UserSchema);
      
module.exports = User;