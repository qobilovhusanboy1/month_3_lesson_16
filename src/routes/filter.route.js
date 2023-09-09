const router = require("express").Router();

const { filterByID, filterByCount, filterByCategory } = require("../controllers/filter.controller");

router.get('/filter/byID', filterByID);
router.get('/filter/byCount', filterByCount);
router.get('/filter/buCategory', filterByCategory);

module.exports = router;