import './SortBtn.css';
import { useState } from 'react';

const SortBtn = ({ productDispatch }) => {
    const [sortItemsActive, setSortItemsActive] = useState(false);

    return (
        <div className='sort-dropdown'>
            <button className='sort-btn' onClick={() => setSortItemsActive(!sortItemsActive)}>Sort <i className="fas fa-arrow-down"></i></button>
            <div className={sortItemsActive ? 'sort-dropdown-choices active' : 'sort-dropdown-choices'}>
                <span className='low-to-high' href="#/action-1" onClick={() => {
                    productDispatch({ type: 'SORT-BY-PRICE', payload: true });
                    setSortItemsActive(false);
                }}>
                    Low to High</span>
                <span href="#/action-2"
                    onClick={() => {
                        productDispatch({ type: 'SORT-BY-PRICE', payload: false });
                        setSortItemsActive(false);
                    }}>
                    High to Low</span>
            </div>
        </div>
    )
}

export default SortBtn