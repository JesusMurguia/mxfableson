const{Router}=require('express');
const router = Router();


const{getTradeReport}=require ('./db');

router.get('/net',getTradeReport);

module.exports=router;