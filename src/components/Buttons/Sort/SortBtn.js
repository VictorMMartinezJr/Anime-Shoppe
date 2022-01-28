import './SortBtn.css';
import { useState } from 'react';
import {AiFillCaretDown} from 'react-icons/ai'

const SortBtn = ({ productDispatch }) => {
    // State to check if sort button is active or not
    const [sortItemsActive, setSortItemsActive] = useState(false);

    return (
        <div className='sort-dropdown'>
            <button className='sort-btn' onClick={() => setSortItemsActive(!sortItemsActive)}>Sort <AiFillCaretDown className="fas fa-arrow-down" /></button>
        <div className={sortItemsActive ? 'sort-dropdown-choices active' : 'sort-dropdown-choices'}>
                {/* Calls product dispatch and sets price payload to TRUE on click */}
                <span className='low-to-high' onClick={() => {
                    productDispatch({ type: 'SORT-BY-PRICE', payload: true });
                    setSortItemsActive(false);
                }}>Low to High</span>
                {/* Calls product dispatch and sets price payload to FALSE on click */}
                <span onClick={() => {
                        productDispatch({ type: 'SORT-BY-PRICE', payload: false });
                        setSortItemsActive(false);
                    }}>High to Low</span>
            </div>
        </div>
    )
}

export default SortBtn;