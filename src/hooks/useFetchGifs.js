// Para crear hooks personalizados. Dentro de src, creamos una carpeta
// "hooks" y se acostrumbra nombrarlos con "use" al principio del nombre

// Los Custom Hooks funcionan como si fueran functional components

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // useEffect no puede ser asincrono

    useEffect(() => {
        getGifs(category).then((imgs) => {
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [category]);

    return state;
};

export { useFetchGifs };
