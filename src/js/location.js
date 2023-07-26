import getWeather from "./apiWeather";
const location = () => {
   window.navigator?.geolocation.getCurrentPosition(({coords}) => {
    getWeather(coords);
    const {latitude, longitude} = coords;
    let map;

    DG.then(function () {
        map = DG.map('map', {
            center: [latitude, longitude],
            zoom: 13
        });
        DG.marker([latitude, longitude]).addTo(map)
    });
  });
}
export default location;
