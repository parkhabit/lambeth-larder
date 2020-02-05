
export default (function () {
    let location = {res: '', error: ''};
    if(navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(success, error);
    } else {
        location = {res: null, error: 'Geolocation is not supported by this browser'}
        return location;
    }

    function success(position) {
        console.log('success being called')
        location = {res: {latitude:position.coords.latitude, longitude:position.coords.longitude}, error: null}
        return location;
    }
    function error() {
        location = {res: null, error: 'Unable to find location'}
        return location;
    }
})();
