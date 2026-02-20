

// function RestorentCard({ dataArr }) {
//   // Handle case when data is not yet loaded
//   if (!Array.isArray(dataArr) || dataArr.length === 0) {
//     return <p className="text-center mt-5 text-gray-500">Loading products...</p>;
//   }

//   return (
//     <div className="">
//       {dataArr.map((item) => (
         
//         <div key={item.id} className="border rounded-xl shadow-md p-4 text-center bg-white hover:shadow-lg transitions">
//           <img src={item.image}alt={item.title}className="w-32 h-32 object-contain mx-auto"/>
//           <h2 className="font-bold text-lg mt-2">{item.title}</h2>
//           <p className="text-gray-500 text-sm">{item.category}</p>
//           <p className="font-semibold text-green-600 mt-1">₹{item.price}</p>
//           <p className="font-semibold text-green-600 mt-1">{item.rating.rate}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RestorentCard;
import { addItem } from '../Utils/cardSlice';
import {useDispatch} from 'react-redux'
function RestorentCard({ dataArr }) {
  if (!Array.isArray(dataArr) || dataArr.length === 0) {
    return <p className="text-center mt-5 text-gray-500"></p>;
  }
   const dispatch =   useDispatch()
  function hendle(item){
     dispatch(addItem(item))
  }

  return (
    <div className="grid grid-cols-4 justify-items-center gap-6 p-6">

      {dataArr.map((item) => (
        <div key={item.id}className="border rounded-xl shadow-md p-4 text-center bg-white hover:shadow-lg transition">
          <img src={item.image} alt={item.title}className="w-32 h-32 object-contain mx-auto"/>
          <h2 className="font-bold text-lg mt-2">{item.title}</h2>
          <p className="text-gray-500 text-sm">{item.category}</p>
          <p className="font-semibold text-green-600 mt-1">₹{item.price}</p>
          <p className="font-semibold text-yellow-500 mt-1">⭐ {item.rating.rate}</p>
          <button onClick={()=>hendle(item)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default RestorentCard;
