import { formTemplate } from "./template";

ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map('map', {
        center: [59.941580, 30.276959],
        zoom: 10
    });

    myMap.events.add('click', function(e) {
        const coords = e.get('coords');

        openBallon(myMap, coords)
        
    })
}

function openBallon(map, coords) {
map.ballon.open(coords,{
    content: `${formTemplate}`
})
}



























// var placemark = new ymaps.Placemark([59.969425, 30.383188], {
    //     hintContent:'Это хинт',
    //     balloonContent: 'Это балун'

    // });

    // myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //     balloonHeader: 'Заголовок балуна',
    //     balloonContent: 'Контент балуна'
    // });
    // map.geoObjects.add(placemark);