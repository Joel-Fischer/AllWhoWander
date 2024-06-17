/*
TODO: 
build event listeners for clicking on each button and route accordingly 

put navbar fuctions here?
*/

const savedTripsHandler = async (event) => {

    document.location.replace('/savedTrips')

};

document.getElementById('savedTrips').addEventListener('click', savedTripsHandler);