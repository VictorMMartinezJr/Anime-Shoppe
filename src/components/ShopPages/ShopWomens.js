import './Shop.css';
import { useContext, useState } from 'react';
import { Cart } from '../../context/Context';
import SingleProduct from '../SingleProduct/SingleProduct';
import AddMoreBtn from '../Buttons/AddMoreBtn';
import ScrollToTopBtn from '../Buttons/ScrollToTop';
import Form from '../Form/Form';
import { womensProducts } from '../Products/Products';

const ShopWomens = () => {
    const { productState: { searchQuery, sort }, productDispatch } = useContext(Cart);

    // number of products per load
    const [addProducts, setAddProducts] = useState(8);

    // transform current products depending on context
    const transformProducts = () => {
        let sortedProducts = [...womensProducts];

        if (sort === ' ') {
            sortedProducts = womensProducts;
        }

        if (sort === true) {
            sortedProducts = sortedProducts.sort((a, b) => (
                a.price - b.price
            ))
        }

        if (sort === false) {
            sortedProducts = sortedProducts.sort((a, b) => (
                b.price - a.price
            ))
        }

        if (searchQuery) {
            sortedProducts = womensProducts.filter(prod => prod.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        return sortedProducts;
    }

    return (
        <section className='shop'>
            <Form productDispatch={productDispatch} />
            <div className="products">
                {transformProducts && !searchQuery && transformProducts().slice(0, addProducts).map(prod => {
                    return <SingleProduct key={prod.id} {...prod} product={prod} />

                })}
                {transformProducts && searchQuery && transformProducts().map(prod => {
                    return <SingleProduct key={prod.id} {...prod} product={prod} />

                })}
                {addProducts >= womensProducts.length && <ScrollToTopBtn />}
            </div>
            {!searchQuery && <AddMoreBtn setAddProducts={setAddProducts} addProducts={addProducts} products={womensProducts} />}
        </section>
    )
}

export default ShopWomens;