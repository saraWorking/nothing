
export const saveUser = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SAVE_USER') {
        const data = { username: 'example' };

        fetch('https://example.com/profile', {
            method: 'POST', // or 'PUT'
            body: data,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return next(action);
}
