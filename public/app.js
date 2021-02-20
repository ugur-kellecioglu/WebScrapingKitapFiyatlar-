async function getData(){
    let kitap_ismi = document.getElementById('kitap_ismi');
    const response = await fetch('/' + kitap_ismi.value);
    
    const json = response.json();
    
    return json;
    }
    
    const results = document.querySelector('.results');
    
    let btn = document.getElementById('submit');
    btn.addEventListener('click', () =>{
    getData().then(response => {
    response.forEach(element => {
    let item = document.createElement('div');
    item.className = 'item';
    results.appendChild(item);
    });
    
    
    }).catch(e => {
    console.log("hata");
    })
    });
    