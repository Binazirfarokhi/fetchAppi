const btn = document.getElementById('btn');
const showImage = document.getElementById('showImage');

// async function fetchData() {
//     try {
//       const response = await fetch('https://dog.ceo/api/breeds/image/random');
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
  

// btn.addEventListener('click',function(fetchData()){
    
//     showImage.innerHTML = `  <img src="${data.message}" alt="" id="image">`
    
// })

// const btn = document.getElementById('btn');
// const showImage = document.getElementById('showImage');

// btn.addEventListener('click', async function(){
//     try {
//         const data = await fetchData();
//         showImage.innerHTML = `<img src="${data.message}" alt="">`;
//     } catch (error) {
//         console.log(error);
//     }
// })

// async function fetchData() {
//     try {
//       const response = await fetch('https://dog.ceo/api/breeds/image/random');
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
// }

btn.addEventListener('click',()=> {

    getApi()
})

async function getApi(){
    try{
          const response = await fetch ('https://dog.ceo/api/breeds/image/random');
    const data =  await response.json();
    console.log(data);
    showImage.innerHTML = `<img src="${data.message}" alt="">`;
    return data;
    }
  catch(error){
console.log(error);
  }

}