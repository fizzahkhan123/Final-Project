const app = require ('express');
const { getAllCategories, getCategoryByID, createCategory, updateCategory, deleteCategory } = require('./Controller');
const router = app.Router();

router.get('/get-all-categories', getAllCategories )
router.get('/get-category-by-id', getCategoryByID )
router.post('/create-category', createCategory )
router.post('/update-category',  updateCategory )
router.delete('/delete-category', deleteCategory )

module.exports = router