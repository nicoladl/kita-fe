const baseUrl = 'http://localhost:3000'

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

export const fetchFamilies = async () => {
    return await fetch(`${baseUrl}/families`)
        .then(res => res.json())
}

export const postFamilies = async payload => {
    return await fetch(`${baseUrl}/families`, {
        ...options,
        body: JSON.stringify(payload),
    })
        .then(res => {
            if (!res.ok) {
                throw Error(String(res.status))
            }
            return res.data.json()
        }).catch(e => {
            console.log(e);
        });
}