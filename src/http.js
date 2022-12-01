export const fetchApi = async () => {
    return await fetch('http://localhost:3000/test')
        .then(res => res.json())
}