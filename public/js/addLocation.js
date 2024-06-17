const createLocationHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#location-name').value.trim();
    const description = document.querySelector('#location-description').value.trim();

    if(name && description) {
        const response = await fetch(`/api/location`, {
            method: 'POST',
            body: JSON.stringify({name, description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            document.location.replace('/Location');
        }else{
            alert('Failed to create activity.');
        }
    }
};

document.getElementById('create-location-btn').addEventListener('click', createLocationHandler);