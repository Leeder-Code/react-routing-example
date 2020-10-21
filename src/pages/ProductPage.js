import React from 'react';
import Product from '../components/Product'
import {Link} from 'react-router-dom'
const ProductsPage = (props) => {
    return ( 
        
        <>
        <div>Strona produktu</div>
        <Product test={props.match.params.id} />
        <Link to="/products">Powrót do listy produktów</Link>
        </>
     );
}
 
export default ProductsPage;