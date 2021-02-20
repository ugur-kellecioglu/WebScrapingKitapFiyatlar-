const encodeUrl = require('encodeurl');
const fetch = require('node-fetch');

async function getData(kitap){
const encoded = encodeURI(kitap);
let response = await fetch(`https://api.personaclick.com/search?shop_id=59510381a4ecf6150668b626cbcb2c&did=xo7HBWTR3R&type=full_search&search_query=${encoded}`, {
"headers": {
"accept": "*/*",
"accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
"content-type": "application/x-www-form-urlencoded",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "cross-site",
"cookie": "did=xo7HBWTR3R"
}
});
let data = await response.json();
products = []
data.products.forEach(p => {

    if(p.name.toLowerCase() === kitap.toLowerCase()){

        products.push(p);
    }
});

    console.log(products.length);
    return products;
}

module.exports = getData;