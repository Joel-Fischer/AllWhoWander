/*
route to plan trip from 

*/

const addTripHandler = (event) => {

    document.location.replace('/planTrip');

}

document.getElementById('add_trip_btn').addEventListener('click', addTripHandler);