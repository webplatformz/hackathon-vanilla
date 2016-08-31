import {getHotels} from './HotelService';

class HotelDetail extends HTMLElement {

    createdCallback() {
        getHotels().then(hotels => hotels.find(hotel => hotel.index === Number(this.attributes.index.value))).then(hotel => this.render(hotel));
    }

    render(hotel) {
        this.innerHTML = `<p>${hotel.rating}</p>`;
    }
}

export function register() {
    document.registerElement('hotel-detail', {
        prototype: HotelDetail.prototype
    });
}