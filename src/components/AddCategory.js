import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Aqui obtengo el evento
    const handleSubmit = (e) => {
        // El comportamiento del formulario por defecto recarga la pagina
        // Con esta instruccion evitamos esto
        e.preventDefault();
        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    placeholder="Search"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
