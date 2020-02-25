export const fetchData = async () => {
    try {
        const request = new Request('https://jsonplaceholder.typicode.com/todos', {method: 'GET'});
        const response = await fetch(request);
        return await response.json();
    } catch (e) {
        console.log(e)
    }
};
