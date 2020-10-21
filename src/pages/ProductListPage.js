import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/ProductListPage.css'

const products = ['produkt1', 'produkt2', 'produkt3']

const ProductListPage = () => {
const list = products.map((i, index) =>{return <p key={index} ><Link to={`/product/${i}`}>{i}</Link></p>})
    return ( 
        <div className="products">
            <h2>Lista produktów</h2>
        {list}

        </div>
     );
}
 
export default ProductListPage;