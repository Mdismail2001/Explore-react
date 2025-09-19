import React, { useState } from 'react';

const ProductFrom = ({addProduct}) => {
    const [error, setError] = useState('')

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const qtn = e.target.gtn.value;
//   console.log(name, price, qtn)
// validation part
    if(name ===0){
        setError("Please provide valid name ")
        return;
    }
    else if(price <= 0 ){
        setError("Please provide valid price")
        return;
    }
    else if(qtn <= 0){
        setError("Please provide valid quantity")
        return;
    }
    else{
        setError('')
    }

    
const newProduct={
        name, price, qtn
    }
    addProduct(newProduct)
  }


    return (
        <div className='flex justify-center'>
            <form onSubmit={handleForm} >
                <input type="name" name='name' placeholder='Product name'  className='border p-2 rounded-2xl'/> <br/>
                <input type="number" name='price' placeholder='Price' className='border p-2 rounded-2xl' /> <br/> 
                <input type="number" name='gtn' placeholder='Quantity'className='border p-2 rounded-2xl' /> <br/>
                <button className='border p-2 rounded-2xl'>Submit</button>
            </form>
            <h1>{error}</h1>
        </div>
    );
};

export default ProductFrom;