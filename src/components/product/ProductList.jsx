import React, { useState } from 'react';
import ProductTable from './ProductTable';
import ProductFrom from './ProductFrom';

const ProductList = () => {
    const [product, setProduct] = useState([]);

    const addProduct =(newProduct)=>{
        setProduct([...product,newProduct])
    }
        // console.log(product)

    return (
        <div>
            <ProductTable product={product} ></ProductTable>\
            <ProductFrom addProduct={addProduct} ></ProductFrom>
            
        </div>
    );
};

export default ProductList;