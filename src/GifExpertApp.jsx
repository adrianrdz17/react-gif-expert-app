import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import "animate.css";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Mad Men"]);

    return (
        <div>
            <h2>GifExpert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </div>
    );
};

export default GifExpertApp;
