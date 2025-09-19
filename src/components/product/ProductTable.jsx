import React from 'react';

const ProductTable = ({product}) => {
    console.log(product)
    return (
        <div>
            <h1>{product.length}</h1>
            <table>
                <thead>
                    <tr>
                        <th>No:</th>
                        <th>Product Name:</th>
                        <th>Product Price:</th>
                        <th>Product Qtn:</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((product,index) => <tr key={index} product={product}>
                            <td>{index+1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.qtn}</td>
                            <td></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;