import { useState, useEffect } from 'react'

function getHex(val = 2){
    return val.toString(16).padStart(2, '0');
}

export function getColor(p){
    let [R, G, B] = [0, 0, 0];
    if(p < 1){ //Red to Green
        G = Math.floor(255 * p);
        R = 255 - G;
    }else if(p < 2){ //Green to Blue
        B = Math.floor(255 * (p - 1));
        G = 255 - B;
    }else{ //Blue to Red
        R = Math.floor(255 * (p - 2));
        B = 255 - R;
    }
    return `#${getHex(R)}${getHex(G)}${getHex(B)}`;
}

export function useWindowSize() {
    const [width, setWidth] = useState(600)

    useEffect(() => {
        function doResize() {
            setWidth(window.innerWidth)
        }
        doResize();

        window.addEventListener('resize', doResize)
        return () => window.removeEventListener('resize', doResize)
    }, [])

    return { width }
}