import axios from "axios";
import {elementFactory} from "./factory/element-factory";
import {searchEndpoint} from "./services/gif-search-api/search-endpoint";
import {generateImagesFromGifs} from "./template/generate-images-from-gifs";
import {appendImageNodesToContainer} from "./template/append-image-nodes-to-container"

function init() {
    const root = elementFactory("section");
    const resultsContainer = elementFactory("div");
    const input = elementFactory("input");

    document.addEventListener("keyup", function() {
        const searchParam = searchEndpoint(input.value);

        axios.get(searchParam)
            .then((response) => response.data)
            .then((data) => data.gfycats)
            .then((gify) => generateImagesFromGifs(gify))
            .then((images) => appendImageNodesToContainer(images, resultsContainer))
            .catch((error) => console.log(error));
    });

    root.appendChild(input);
    document.body.appendChild(root);
    document.body.appendChild(resultsContainer);
}


init();