async function getData(){
    let kitap_ismi = document.getElementById('kitap_ismi');
    const response = await fetch('/' + kitap_ismi.value);
    
    const json = response.json();
    
    return json;
    }
    
    const results = document.querySelector('.results');
    let row = document.createElement('div');
    row.className = "row";
    let btn = document.getElementById('submit');
    btn.addEventListener('click', () =>{
        while(results.firstChild) results.removeChild(results.lastChild);
    getData().then(response => {
    response.forEach(element => {

       

        let brand = element.brand;
        let name = element.name;
        let price = element.price;
        let image = element.picture;

        let brandEl = document.createElement('div');
        brandEl.className = 'brand';
        let brandtxt = document.createElement('h5');
        brandtxt.innerHTML = brand;
        brandEl.appendChild(brandtxt); 

        let nameEl = document.createElement('div');
        nameEl.className = 'name';
        let nametxt = document.createElement('h5');
        nametxt.innerHTML = name;
        nameEl.appendChild(nametxt); 
        
        let priceEl = document.createElement('div');
        priceEl.className = 'price';
        let pricetxt = document.createElement('h5');
        pricetxt.innerHTML = price;
        priceEl.appendChild(pricetxt); 

        let imageEl = document.createElement('div');
        imageEl.className = 'picture';
        let priceimg = document.createElement('img');
        priceimg.setAttribute('src', image);
        imageEl.appendChild(priceimg);        


        let item = document.createElement('div');
        item.className = 'item';

        item.appendChild(imageEl);
        item.appendChild(nameEl);
        item.appendChild(brandEl);
        item.appendChild(priceEl);

        row.appendChild(item);
        results.appendChild(row);

       

        console.log(element);
    });
    
    
    }).catch(e => {
    console.log("hata");
    })
    });
    