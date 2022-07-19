import { useState, use } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [ inputValue, ...categories ]); // el setXyz ya trae el objeto
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                // No es necesario mandar aquí el evento porque siempre se recibe por defecto
                onChange={ onInputChange }
            />
        </form>
    );
}
