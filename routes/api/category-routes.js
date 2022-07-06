const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // use find all method 
  const categories = await Book.findAll();

  // be sure to include its associated Products
  return res.json(categories);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // use find one method 
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  // use create method 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // use built in update method 
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
