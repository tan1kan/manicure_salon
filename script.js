function initMap() {
    const address = document.getElementById('address').textContent;
    const mapContainer = document.getElementById('map-container');
    const mapError = document.getElementById('map-error');

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
            const map = new google.maps.Map(document.getElementById("map"), {
                center: results[0].geometry.location,
                zoom: 16
            });
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: "Салон красоты"
            });
        } else {
            mapContainer.style.display = 'none'; // Скрываем контейнер карты, если есть ошибка
            mapError.style.display = 'block'; // Показываем сообщение об ошибке
            console.error("Ошибка геокодирования: " + status);
        }
    });
}
