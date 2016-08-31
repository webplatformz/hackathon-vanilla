import {getHotels} from './HotelService';

class HotelTable extends HTMLElement {
    createdCallback() {
        getHotels().then(hotels => this.render(hotels));
    }

    render(hotels) {
        this.innerHTML = hotels.map(hotel => `<hotel-tile hotelname="${hotel.hotelName}"></hotel-tile>`).join('');
    }
}

export function register() {
    document.registerElement('hotel-table', {
        prototype: HotelTable.prototype
    });
}