
export function getHotels() {
    return fetch('http://beta.json-generator.com/api/json/get/EJbRY1aIx').then(response => response.json());
}