// div[0].innerHTML='<h1 style="color:red" >Abes engineering college</h1>'
// console.log(div[0])


const button =document.getElementById('btn');
// const loading =document.getElementById('container')
console.log(button)
const div= document.getElementsByClassName('container');
button.addEventListener('click',()=>{
    div.innerHTML='<h2>Data is loading......</h2>'
    
    setTimeout(()=>{
        const div1=document.createElement('div')
        div1.textContent="CS B Student";
    div1.style.Color='red'
    div[0].appendChild(div1)
    
    const img= document.createElement('img');
    img.src='https://imgs.search.brave.com/g7SIf0iKBRfhtjGM1-x9X2HcYqd8dL4CXpp4Eu3HLqU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL3Rf/Z2lnX2NhcmRzX3dl/YixxX2F1dG8sZl9h/dXRvL2dpZ3MvNDAx/NjUxODkxL29yaWdp/bmFsLzdlNWE1ZjA2/ZDE4MmNlMzUwOTVi/ZGM1MGQ4ZTFhMzNm/YzU3ZTY1NWUucG5n'
    console.log(img)
    div[0].appendChild(img)
        console.log("Hii ... I am inside display data")

    },2000)
})


