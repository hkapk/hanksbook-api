# hanksbook-api ( A Social Network API)

![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")

## Description

This is an API for a social network that uses a noSQL database, MongoDB. There are various API endpoints set up and they are displayed in the readme below and also in the how to video. There are endpoints at api/users and api/thoughts.

### Table of Contents

- [Description](#description)
- [How-To](#howto)
- [Installation](#installation)
- [End-points](#endpoints)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## How-To

How to add Users, Update Users and Delete Users:

https://user-images.githubusercontent.com/90150749/150842746-6bc075a1-6ffa-41be-8be9-95a0a4ec0fd0.mp4

How to add, update, delete Thoughts:

https://user-images.githubusercontent.com/90150749/150843463-fa277047-389d-4d0b-a492-0a543c6b55bf.mp4

How to Add/ Delete Friends:

https://user-images.githubusercontent.com/90150749/150841615-ad04ed32-344c-4d2d-877d-17fb3b89b3e4.mp4

Adding and Deleting Reactions to Thoughts:

https://user-images.githubusercontent.com/90150749/150844888-70c4e29a-8ac1-4847-b706-8ec32bc17c9a.mp4

## Installation

You will need to install MongoDB, ExpressJS, and Mongoose to use this API locally.
After installing MongoDB, follow these steps to use this API locally:

1. clone this repository to your local branch.
2. navigate to the project folder in the terminal.
3. $npm i (this will install mongoose and express)
4. $ npm start
5. navigate to the endpoints listed below in Insomnia or Postman. (The How To Video will use Insomnia).

## End-points

GET all users, POST a new user:

```
/api/users
```

GET all thoughts:

```
/api/thoughts
```

POST a new user thought:

```
/api/thoughts/:userId
```

GET user by userId, PUT user by id, DELETE user by id

```
/api/users/:userId
```

GET thought by thoughtID, PUT a thought by id, DELETE a thought by id:

```
/api/thoughts/:thoughtId
```

POST a new friend to a user's friend list, DELETE a user from a friend's list:

```
/api/users/:userId/friends/:friendId
```

POST a reaction to thought:

```
/api/thoughts/:thoughtId/reactions
```

DELETE a reaction:

```
/api/thoughts/:thoughtId/reactions/:reactionId
```

## Contributing

Currently all contributions made by [Hank Kapka](https://www.github.com/hkapk)

Free to contribute to, check the issues tab on github to help

## Tests

There are not currently any test packages.

## Questions

Checkout https://www.github.com/hkapk on GitHub or send an email inquiry to hankkapka@gmail.com.

```

```
