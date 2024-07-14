import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
      <button>Agregar</button>
    </form>
  );
};
