import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

// useEffect nos permite ejecutar cierto codigo de forma condicional

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>

            {loading ? <p>Loading. . .</p> : null}

            <div className="card-grid">
                <ol>
                    {images.map((image) => {
                        return <GifGridItem key={image.id} {...image} />;
                    })}
                </ol>
            </div>
        </>
    );
};

export default GifGrid;
