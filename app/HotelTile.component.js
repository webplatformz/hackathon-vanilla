class HotelTile extends HTMLElement {

    createdCallback() {
        this.render(this.attributes);
        this.addEventListener('click', () => this.toggleDetail(this.attributes.id.value));
    }

    toggleDetail(id) {
        document.body.innerHTML = `<hotel-detail index="${id}"></hotel-detail>` + document.body.innerHTML;
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