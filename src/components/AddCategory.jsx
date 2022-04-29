import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion
        if (inputValue.trim().length > 2) {
            // De esta forma puedo obtener el contenido del arreglo categories con la referencia del setCategories
            setCategories((cats) => [inputValue, ...cats]);
        }

        setInputValue("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    );
};

export default AddCategory;

// Aqui hago que la funcion setCategories sea requerida cuando se llama el componente
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
