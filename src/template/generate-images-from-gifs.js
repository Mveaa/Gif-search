import {elementFactory} from "../factory/element-factory";

export function generateImagesFromGifs(gifs) {
    return gifs.map((gif) => {
        const imgNode = elementFactory("img");

        imgNode.src = gif.gif100px;
        imgNode.alt = gif.gfyName;

        return imgNode;
    });
}