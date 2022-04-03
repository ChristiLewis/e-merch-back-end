const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//GET ALL CATEGORIES AND ASSOCIATED PRODUCTS

router.get('/', (req, res) => {
    Category.findAll({
            attributes: ['id', 'category_url', 'title', 'created_at'],
            //ADD THE ORDER PROPERTY SO THE MOST CURRENT CATEGORIES SHOW FIRST
            order: [
                ['created_at', 'DESC']
            ],
            include: [{
                model: Product,
                attributes: ['productName']
            }]
        })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//GET ONE CATEGORY WITH ALL ASSOCIATED PRODUCTS
router.get('/:id', (req, res) => {
    Category.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'category_url', 'category_name', 'created_at'],
            include: [{
                model: Product,
                attributes: ['productName']
            }]
        })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST NEW CATEGORY
router.post('/', (req, res) => {
    //EXPECTS{ CATEGORY_NAME:'GENERAL TYPE FOR SALE'} 
    Category.create({
            category_name: req.body.categoryName
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Category.update({
            category_name: req.body.categoryName
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Category.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbCategoryData => {
            if (!dbCategoryData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbCategoryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;