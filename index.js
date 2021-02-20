const express  = require('express');

const app = express();

const getData = require('./getData');

app.use(express.static('public'));

app.get('/:kitap_ismi', async (req, res) => {
   
    let json = await getData(req.params.kitap_ismi);
    return res.json(json);    
})


app.listen('4000');