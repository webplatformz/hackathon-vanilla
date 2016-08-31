
let hotels;

export function getHotels() {
    if (!hotels) {
        hotels = fetch('http://beta.json-generator.com/api/json/get/EJbRY1aIx').then(response => response.json());
    }

    return hotels;
}