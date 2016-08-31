class HotelTile extends HTMLElement {
    createdCallback() {
        this.render(this.attributes);
    }

    render({hotelname}) {
        this.innerHTML = `<h3>${hotelname.value}</h3>`;
    }
}

export function register() {
    document.registerElement('hotel-tile', {
        prototype: HotelTile.prototype
    });
}