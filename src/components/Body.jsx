import Header from './Header'
import RestorentCard from "./RestorentCard";
import Search from './Search';
import useApicalling from "./useApicalling";
import {useState,useEffect} from 'react'


function Body() {
  const data = useApicalling(); // ✅ Fetch product data here
    const [item,setItem]  = useState([])
    // ✅ When data loads, initialize "item"
  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setItem(data);
    }
  }, [data]);
  function ratingBtn(data){
        const filterRateArr = data.filter(resp => resp.rating.rate > 4);
        setItem(filterRateArr);

  }
  function resetBtn(data){

 setItem(data);

  }


  return (
    <>
      
      <div className="ml-20 mr-30">
        <div>
          <h1 className="text-2xl font-bold mt-3">What's on your mind?</h1>
        </div>
       <div >
        <ul className='flex justify-between my-5'>
          
          <div>
            <span><img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5f2ee7f883cdb774.png?q=100" alt="Mobiles&Tablets" /></span>
          <li>Mobiles&Tablets</li>
          </div>
          
           <div>
            <span><img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/af646c36d74c4be9.png?q=100" alt="Electronics" /></span>
            <li>Electronics</li>
           </div>
            
            <div>
              <span><img src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ff559cb9d803d424.png?q=100" alt="Fashion" /></span>
             <li>Fashion</li>
            </div>
             

             <div className=''>
              <span ><img src="https://rukminim2.flixcart.com/fk-p-flap/126/126/image/ba1cbd56f144f770.jpg?q=90" alt="Jewelery" /></span>
              <li>Jewelery</li>
             </div>

             
            
        </ul>
       </div>
       
        <div>
          <button onClick={()=>ratingBtn(data)} className="ml-2"><span className='border border-2'>Rating 4+</span></button>
        <button onClick={()=>resetBtn(data)} className="ml-2"><span className='border border-2'>Reset</span></button>
        <Search  data={data} setItem ={setItem}/>

        </div>
        
        {/* ✅ Dynamic product cards */}
        <h1 className="text-2xl font-bold mt-6">Top Rated Products</h1>
        <RestorentCard dataArr={item} />
      </div>
    </>
  );
}

export default Body;
