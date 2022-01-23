const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getReactionById
} = require('../../controllers/thought-controller');

// /api/thoughts to get all thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<thoughtId/reactions>
// reactions to a specific thought by id
router.route('/:id/reactions')
.get(getReactionById)
.post(addReaction)
.delete(removeReaction);

// router.route('/:id/reactions/:id')
// .get(getReactionById)

module.exports = router;