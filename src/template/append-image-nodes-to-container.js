export function appendImageNodesToContainer(imageNodes, container) {
    return imageNodes.forEach((image) => {
        container.appendChild(image);
    });
}