import SortBtn from '../Buttons/Sort/SortBtn';
import './Form.css';
import { useState } from 'react';

const Form = ({ productDispatch, searchQuery }) => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className='forms'>
            <form className='form' onSubmit={(e) => {
                productDispatch({ type: 'FILTER-BY-SEARCH', payload: searchTerm })
                e.preventDefault()
            }}>
                <input value={searchTerm} className='input' type="text" placeholder='What are you looking for?' onChange={(e) => {
                    setSearchTerm(e.target.value);
                }} />
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