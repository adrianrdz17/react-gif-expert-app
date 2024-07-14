import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };
    
    // Es un hook que sirve para disparar efectos secundarios
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
