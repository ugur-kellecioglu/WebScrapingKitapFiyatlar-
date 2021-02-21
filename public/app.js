async function getData(){
    let kitap_ismi = document.getElementById('kitap_ismi');
    const response = await fetch('/' + kitap_ismi.value);
    
    let json = response.json();
    return json;
    }
    
    let results = document.querySelector('.results');
    let row = document.createElement('div');
    row.className = "row justify-items-center d-flex";
    let btn = document.getElementById('submit');
    btn.addEventListener('click', () =>{


    getData().then(response => {

        let rows = results.childNodes[1];
        if(rows !== undefined){
            while(rows.firstChild){
                rows.removeChild(rows.lastChild);
            }
        }

        if(response.length > 0){
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
                let nametxt = document.createElement('a');
                nametxt.setAttribute('href', element.url);
                nametxt.innerHTML = name;
                nameEl.appendChild(nametxt); 
                
                let priceEl = document.createElement('div');
                priceEl.className = 'price';
                let pricetxt = document.createElement('h5');
                pricetxt.innerHTML = price + " TL.";
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
    
    
            });
        }
        else{
            let info = document.createElement('h3');
            info.className = "mt-3"
            info.value = "Böyle bir kitap bulunmamaktadır.";
            let c = document.createElement('div');
            c.appendChild(info);
            results.appendChild(c);
        }

    
    }).catch(e => {
        console.log("hata");
    })
    });
    