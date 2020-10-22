//create a new pool with configuration:
const Pool = require('pg').Pool;

const pool = new Pool({
'user':'scenathon_dev_db',
'password':'Bbq4q5ccHN3V09VK8laJ9uMXBh',
'host':'scenathon-db.cloud.geo-wiki.org',
'port': '3456',
'database':'scenathon_dev_db'

});

const getTradeReport= async(req,res)=>
{
    //name, country_id, iteration, Product, year, import_qty, export_qty,  nettrade
    //iteration can be 1,2,3 or 4
    //scenathon_id can be 5 or 6

    try{
                                                                                                                                                                            const{iteration,scenathon_id,name,Product,Year}=req.body;
    const response = await pool.query('SELECT "name", "iteration","scenathon_id", "Product", "Year", "Export_quantity","Import_quantity" FROM nettrade WHERE "iteration"=$1 AND "scenathon_id"=$2 ',[1,6]);
    res.status(200).json(response.rows);
    //res.send(response);
    }catch(err){
        res.send('ola')
    }
}

module.exports={getTradeReport};
