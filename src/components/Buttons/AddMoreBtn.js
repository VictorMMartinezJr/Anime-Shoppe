const AddMoreBtn = ({ setAddProducts, addProducts, products }) => {
    const addItems = () => {
        setAddProducts(addProducts + 8);
    }

    return (
        <button className={addProducts >= products.length ? 'load-more-btn hide' : 'load-more-btn'} onClick={addItems}>Load More</button>
    )
}

export default AddMoreBtn;