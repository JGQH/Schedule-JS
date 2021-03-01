function getHex(val){
    if(val < 16){
        return "0" + val.toString(16);
    }
    return val.toString(16);
}

function getColor(p){
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

export { getColor };