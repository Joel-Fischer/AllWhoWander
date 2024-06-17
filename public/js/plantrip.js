const createTripHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#trip-name').value.trim();
    const description = document.querySelector('#description').value.trim();

    if(name && description) {
        const response = await fetch(`/api/trip`, {
            method: 'POST',
            body: JSON.stringify({name, description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            document.location.replace('/savedtrips');
        }else{
            alert('Failed to create trip.');
        }
    }
};

document.getElementById('create-trip-btn').addEventListener('click', createTripHandler);