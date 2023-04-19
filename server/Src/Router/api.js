const express =require('express');
const ProductsController=require("../Controller/ProductsController")
const router =express.Router();


router.get("/ProductList/:pageNo/:perPage/:searchKey?",ProductsController.ProductList);



module.exports=router;