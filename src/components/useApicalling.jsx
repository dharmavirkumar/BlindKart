
// import axios from 'axios';
// import { useEffect,useState } from 'react';
// function useApicalling() {
//     const [data,setData] = useState([]);
//     useEffect(()=>{
//         async function getData() {
     
//         const API = "https://fakestoreapi.com/products/1"
//         const response = await axios.get(API);
//         console.log(response.data);
//         setData(response.data);

//     }
//     getData();
//     },[]);
    
//     return data;
// }

// export default useApicalling;

// import {useEffect,useState} from 'react';
// import axios from 'axios';

// function useApicalling(){

//     const [meals, setMeals] = useState([])
// //    https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
//     useEffect(()=>{
//         const API = "https://fakestoreapi.com/products";

        
//          async function calling(){
//             const response = await axios.get(API);
//                 console.log(response.data[4],'response');
//                 setMeals(response?.data[4]?.data);
            
//         }
//         calling();

//     },[]);

//     return meals;
// }
// export default useApicalling;

import axios from 'axios';
import { useEffect, useState } from 'react';
function useApicalling(){
    const [data,setData] = useState([]);


      useEffect (()=>{

        async function getData(){

    

    const API = "https://fakestoreapi.com/products";

        const response = await axios.get(API);
        console.log(response.data,'response');
        setData(response.data);

  }
getData();

      },[]);
  

  return data;
}
export default useApicalling;

