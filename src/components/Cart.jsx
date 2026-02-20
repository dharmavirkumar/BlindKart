import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Cart(){
    const cartItems = useSelector((state) => state.cart?.items || []);


    const dispatch = useDispatch()

    function hendleClear(){
        dispatch(hendleClear())

    }

     return (
    <div className="grid grid-cols-4 justify-items-center gap-6 p-6">
      <button onClick={()=>hendleClear}>Clear Cart</button>
      {cartItems.map((item) => (
        <div key={item.id}className="border rounded-xl shadow-md p-4 text-center bg-white hover:shadow-lg transition">
          <img src={item.image} alt={item.title}className="w-32 h-32 object-contain mx-auto"/>
          <h2 className="font-bold text-lg mt-2">{item.title}</h2>
          <p className="text-gray-500 text-sm">{item.category}</p>
          <p className="font-semibold text-green-600 mt-1">₹{item.price}</p>
          <p className="font-semibold text-yellow-500 mt-1">⭐ {item.rating.rate}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Cart;