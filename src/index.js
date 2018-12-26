import axios from "axios";
import {elementFactory} from "./factory/element-factory";
import {searchEndpoint} from "./services/gif-search-api/search-endpoint";

function init() {
	const root = elementFactory("section");
    const input = elementFactory("input");

    document.addEventListener("keyup", () => {
		const searchParam = searchEndpoint(input.value);

        axios.get(searchParam)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    });


    root.appendChild(input);
    document.body.appendChild(root)
}
init();