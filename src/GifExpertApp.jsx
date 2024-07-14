import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };
  return (
    <div>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
        currentCategories={categories}
      />

      {/* Listado de Gifs */}
      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </div>
  );
};

export default GifExpertApp;
