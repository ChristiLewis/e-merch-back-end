const router = require('express').Router();
/*
const { Product, Category, Tag, ProductTag } = require('../../../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
    // find all products
    // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
      }
    
Product.create(req.body)
    .then((product) => {
        // if there's product tags, we need to create pairings to bulk create in the ProductTag model
        if (req.body.tagIds.length) {
            const productTagIdArr = req.body.tagIds.map((tag_id) => {
                return {
                    product_id: product.id,
                    tag_id,
                };
            });
            return ProductTag.bulkCreate(productTagIdArr);
        }
        // if no product tags, just respond
        res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
    // update product data
    Product.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
        .then((product) => {
            // find all associated tags from ProductTag
            return ProductTag.findAll({ where: { product_id: req.params.id } });
        })
        .then((productTags) => {
            // get list of current tag_ids
            const productTagIds = productTags.map(({ tag_id }) => tag_id);
            // create filtered list of new tag_ids
            const newProductTags = req.body.tagIds
                .filter((tag_id) => !productTagIds.includes(tag_id))
                .map((tag_id) => {
                    return {
                        product_id: req.params.id,
                        tag_id,
                    };
                });
            // figure out which ones to remove
            const productTagsToRemove = productTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

            // run both actions
            return Promise.all([
                ProductTag.destroy({ where: { id: productTagsToRemove } }),
                ProductTag.bulkCreate(newProductTags),
            ]);
        })
        .then((updatedProductTags) => res.json(updatedProductTags))
        .catch((err) => {
            // console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
});



/* FROM USER ROUTES
const { Router } = require("express");
const { route } = require("express/lib/application");
const { USER } = require("sequelize/types/query-types");

//GET ALL USERS
router.get('/', (req, res) => {
    //ACCESS USER MODEL AND USE .FINDALL() METHOD SIM TO SQL COMMAND: SELECT * FROM users;
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET ONE USER AT A TIME SIM TO SQL: SELECT * FROM users WHERE id = 1
router.get('/:id', (req,res) => {
    //SEQUELIZE .FINDONE() METHOD
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST ROUTE TO CREATE A USER
route.post('/', (req,res) => {
    //ALL INFO FROM USER MODEL TABLE IE USERNAME, EMAIL, PASSWORD THIS SEQUELIZE METHOD .CREATE() IS SIM TO SQL COMMANDS: 
    /*
    INSERT INTO users
        (username, email, password)
    VALUES
        ("<actual username>", "<actual email>", "<actual password>");
    */
/*
        User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
      })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
              console.log(err);
              res.status(500).json(err);
          });
  });

  //POST TO VERIFY NEW USERS WITH A QUERY IN A POST ROUTE SINCE INFO IS IN THE MORE SECURE BODY OF THE CODE RATHER THAN IN THE URL OF A GET ROUTE
router.post('/login', (req, res) => {
    //EXPECTS {EMAIL" 'XYZ@GMAIL.COM', PASSWORD: 'PASSWORD1234'}
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
        res.json({ user: dbUserData });
    });
});
  
  //PUT ROUTE TO UPDATE EXISTING DATA USES SEQUELIZE .UPDATE() METHOD COMBINING PARAMETERS FOR BOTH CREATING AND LOOKING-UP DATA BY PASSING-IN BOTH REQ.BODY AND REQ.PARAMS.ID. THE SQL EQUIVALENT:
  /*
  UPDATE users
  SET username = "Lernantino", email = "<ACTUAL.EMAIL>", password = "<ACTUAL-PASSWD>"
  WHERE id = 1;
  */
/*
 router.put('/:id', (req, res) => {
     //EXPECTS KEY/VALUE PAIRS TO MATCH MODEL
     User.update(req.body, {
         where: {
             id: req.params.id
         }
     })
         .then(dbUserData => {
             if (!dbUserData[0]) {
                 res.status(404).json({ message: 'No user found with this id.' });
                 return;
             }
             res.json(dbUserData);
         })
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
         });
 });
 
 //DELETE A SPECIFIC USER FROM THE DB VIA THE SEQUELIZE .DESTROY() METHOD AND ID WHERE TO REMOVE DATA FROM THE USER DB TABLE
 router.delete('/:id', (req, res) => {
     User.destroy({
         where: {
             id: req.params.id
         }
     })
     .then(dbUserData => {
         if (!dbUserData) {
             res.status(404).json({ message: 'No user found with this id.' });
             return;
         }
         res.json(dbUserData);
     })
     .catch(err => {
         console.log(err);
         res.status(500).json(err);
     });
 });
 */

module.exports = router;