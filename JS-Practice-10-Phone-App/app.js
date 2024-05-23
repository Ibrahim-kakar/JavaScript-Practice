const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]

// console.log(phones);

const div = document.querySelector(`.div`);
const arr = []

function renderItem(){
    for (let i = 0; i < phones.length; i++) {
        // console.log(phones[i]);

        div.innerHTML += `
        <div class=" card bg-dark text-light border-light" style="width: 18rem;">
                    <div class="card-body">


                      <h5 class="card-title">Brand: ${phones[i].brand + ` ` + phones[i].model}</h5>
                      
                      <h6 class="card-title">Ram: ${phones[i].ram}GB</h6>
                      
                      <h6 class="card-title">Rom: ${phones[i].rom}GB</h6>
                      
                      <h6 class="card-title">Camera: ${phones[i].camera}</h6>

                      <h5 class="card-title">Price: ${phones[i].price}</h5>

                      <a href="#" class="card-link" onclick="addToCart(${i})">Add to cart</a>


                    </div>
                  </div>
        `
        
    }
}
renderItem()



function addToCart(index){
if(arr.includes(phones[index])){
    phones[index].quantity += 1;
    }else{
        phones[index].quantity = 1;
        arr.push(phones[index])
    }
console.log(arr);
}



function goToCart(){

localStorage.setItem(`cartItems` , JSON.stringify(arr))
window.location = `cart.html`


}