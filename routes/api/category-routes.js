const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({ include: [{ model: Product }] })
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  Category.findByPk(req.params.id)
    .then((category) => {
      if (!category) {
        res.status(404).json({ message: 'No category found with that ID!' });
      } else {
        res.status(200).json(category);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
