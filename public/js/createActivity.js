const createActivityHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#activity-name').value.trim();
    const description = document.querySelector('#activity-description').value.trim();

    if(name && description) {
        const response = await fetch(`/api/activity`, {
            method: 'POST',
            body: JSON.stringify({name, description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok){
            document.location.replace('/viewActivity');
        }else{
            alert('Failed to create activity.');
        }
    }
};

document.getElementById('create-activity-btn').addEventListener('click', createActivityHandler);