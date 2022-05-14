const express = require('express');
const router = express.Router();
const { create, list, read, remove } = require('../controllers/category');

// validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');
const { requireSignin, adminMiddleware , authMiddleware} = require('../controllers/auth');

router.post('/category', categoryCreateValidator, runValidation, requireSignin,create);
router.get('/categories', list);
router.get('/category/:slug', read);
router.delete('/category/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;
