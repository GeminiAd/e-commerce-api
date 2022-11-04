const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: [{ model: Product }] })
    .then((tags) => {
      res.status(200).json(tags);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, { include: [{ model: Product }] })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: "No tag found with that ID!" });
      } else {
        res.status(200).json(tag);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});


router.post('/', (req, res) => {
  // create a new tag
  /*  
   *  The req.body should be of the form:
   *  {
   *    tag_name = "sports",
   *    productIds = [2, 3]
   *  }
   */
  Tag.create(req.body)
    .then((tag) => {
      /* If there are any products associated with those tags */
      if (req.body.productIds.length) {
        /* Create product_id and tag_id pairings out of the productIds supplied. */
        const productTagIdArr = req.body.productIds.map((productId) => {
          return {
            product_id: productId,
            tag_id: tag.id
          }
        })
        /* Then create many ProductTags using the information we just created. */
        return ProductTag.bulkCreate(productTagIdArr);
      } else {
        res.status(200).json(tag);
      }
    })
    .then((productTags) => {
      res.status(200).json(productTags);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  /*  
   *  The req.body should be of the form:
   *  {
   *    tag_name = "sports",
   *    productIds = [2, 3]
   *  }
   */
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: "No tag found with that ID!" });
      } else {
        return ProductTag.findAll({ where: { tag_id: req.params.id } });
      }
    })
    .then((productTags) => {
      const productTagIds = productTags.map(({ product_id }) => product_id);
      console.log(productTagIds);

      const productIdsToAdd = req.body.productIds.filter(productId => !productTagIds.includes(productId));
      const productTagsToRemove = productTags.filter(({ product_id }) => !req.body.productIds.includes(product_id));
      const productTagIdsToRemove = productTagsToRemove.map((productTag) => productTag.id);
      const productTagsToAdd = productIdsToAdd.map((productId) => {
        return {
          product_id: productId,
          tag_id: req.params.id
        }
      });
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagIdsToRemove } }),
        ProductTag.bulkCreate(productTagsToAdd)
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((tag) => {
      if (!tag) {
        res.status(404).json({ message: "No tag found with that ID!" });
      } else {
        res.status(200).json(tag);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;
