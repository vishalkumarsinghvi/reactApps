export const fetchData = async () => {
    try {
        const request = new Request('https://jsonplaceholder.typicode.com/todos', {method: 'GET'});
        const response = await fetch(request);
        return await response.json();
    } catch (e) {
        console.log(e)
    }
};

export const fetchRadioData = async () => {
    try {
        const request = new Request('https://lalitbehera.github.io/station.json', {method: 'GET'});
        // const request = new Request('https://jsonplaceholder.typicode.com/photos', {method: 'GET'});
        const response = await fetch(request);
        return await response.json();
    } catch (e) {
        console.log(e)
    }
};
