// import { useState } from "react";
// import React from "react";


// function Search({data,setItem}){

//     function handelInp(searchText){
        
//        const searchArr =  data.filter(restorent => restorent.title.includes(searchText));
//        setItem(searchArr);

//     }

//     return(
//         <>
//         <input onClick={(e)=>handelInp(e.target.value)} type="text" placeholder="Search the Item" />

//         </>
//     )
// }

// export default Search;


import React from "react";

function Search({ data, setItem }) {
  function handleInp(searchText) {
    const searchArr = data.filter((restorent) =>
      restorent.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setItem(searchArr);
  }

  return (
    <div className="text-center my-4">
      <input
        type="text"
        placeholder="🔍 Search products..."
        onChange={(e) => handleInp(e.target.value)}
        className="border px-4 py-2 w-80 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default Search;
