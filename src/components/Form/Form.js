import './Form.css';
import SortBtn from '../Buttons/Sort/SortBtn';
import { useState } from 'react';
import {GoSearch} from 'react-icons/go';
import {AiFillCloseCircle} from 'react-icons/ai';

const Form = ({ productDispatch }) => {
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
                {searchTerm ? <AiFillCloseCircle className='form-icon'  onClick={() => {
                    setSearchTerm('')
                    productDispatch({ type: 'FILTER-BY-SEARCH', payload: '' })
                }} style={{ cursor: 'pointer' }} /> : <GoSearch className='form-icon' />}
            </form>
            <SortBtn productDispatch={productDispatch} />
        </div>
    )
}

export default Form