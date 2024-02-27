let btn = document.querySelector('#generate')
let qrcode= document.querySelector('.qrcode')

btn.addEventListener('click',(e) =>{
    e.preventDefault()
    let text = document.querySelector('#text').value;
    if(text==''){
        alert('Enter the URL into Textbox')
    }
    else{
        let qr =`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${text}`;
        qrcode.classList.add('active')
        qrcode.src=qr
    }
})