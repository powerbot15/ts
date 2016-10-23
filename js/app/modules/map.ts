interface LatLng{

    lat : number,

    lng : number

}

export class Map {

    el : HTMLElement;

    map : any;

    marker : any;

    constructor (el : HTMLElement) {

        this.el = el;

        this.initMap();

    }

    initMap () {

        this.map = new google.maps.Map(this.el, {

            zoom: 8,
            center: {
                lat: -34.397,
                lng: 150.644
            },
            mapTypeId: google.maps.MapTypeId.MAPROAD

        });

        this.marker = new google.maps.Marker({
            position: {
                lat: -34.397,
                lng: 150.644
            },
            map: this.map
        })

    }

    setCenter (latLng : LatLng) {

        this.map.setCenter(latLng);

        this.marker.setPosition(latLng);

    }

    initClickHandler (callback : Function) {

        this.map.addListener('click', callback);

    }

}