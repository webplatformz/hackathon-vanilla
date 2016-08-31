import {getHotels} from './HotelService';

getHotels().then(hotels => {
    document.getElementsByTagName('main')[0].innerHTML = hotels.map(hotel => `<div>${hotel.hotelName}</div>`).join('');
});
