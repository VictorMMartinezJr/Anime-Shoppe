import './Form.css';
import SortBtn from '../Buttons/Sort/SortBtn';
import { useState } from 'react';

const Form = ({ productDispatch, searchQuery }) => {
    // State for input field text
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='forms'>
            <form className='form' onSubmit={(e) => {
                e.preventDefault();
            // Search for products containing input text when form is submitted
                productDispatch({ type: 'FILTER-BY-SEARCH', payload: searchTerm })
                }}>
                <input value={searchTerm} 
                    className='input' 
                    type="text" 
                    placeholder='What are you looking for?' 
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }} />
            {/* If search term exists, show search icon, else show 'X' icon */}
                {searchTerm ? <i onClick={() => {
                    setSearchTerm('')
                    productDispatch({ type: 'FILTER-BY-SEARCH', payload: '' })
                }} className="fas fa-times-circle" style={{ cursor: 'pointer' }}></i> : <i className="fas fa-search"></i>}
            </form>
            <SortBtn productDispatch={productDispatch} />
        </div>
    )
}

export default Form