const url='https://striveschool.herokuapp.com/api/product/'
let givenstring='user3:nZ4uFd9hBp3dvKLu'
let encoded=window.btoa(givenstring)
const getProducts=async()=>{

    let response = await fetch(url,{
        method:"GET",
        
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc='
        }),

    })//this is getting response from api fetching 
    return await response.json()//this is returning the result of thr promise in a usable format
}
handleSubmit=()=>{
    event.preventDefault()
         submitProduct()
}
submitProduct=async ()=>{
    let myProduct={
        name:document.querySelector('#name').value,
        description:document.querySelector('#description').value,
        brand:document.querySelector('#brand').value,
        imageUrl:document.querySelector('#imageUrl').value,
        price:document.querySelector('#price').value


    }
    console.log('myprod',myProduct)
    let response=await saveProduct(myProduct)
         console.log('repsonse from the save event' , response)
         if(response.ok){
             alert('event added successfully')
             location.href='index.html'
         }
         else{
             alert('Error')
         }
   
}

const saveProduct= async (productObj)=>{
    let response= await fetch(url,{
        method:"POST",
        body:JSON.stringify(productObj),
        headers: new Headers({
            'Content-Type':'application/json',
            'Authorization':'Basic '+encoded
        }),
    })
    return response
}