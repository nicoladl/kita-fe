import React, { useEffect, useState } from "react";
import {fetchFamilies, postFamilies} from "./http";

const App = () => {
    const [families, setFamilies] = useState([])
    const [name, setName] = useState('');

    useEffect(async () => {
        const families = await fetchFamilies()
        setFamilies(families)
    }, [])

    const addFamily = e => {
        e.preventDefault()
        postFamilies({ name })
    }


    return (
        <>
            <h1>families</h1>
            {
                families.map(family => (
                    <p>{family.name}</p>
                ))
            }

            <form onSubmit={addFamily}>
                <input
                    name='name'
                    onChange={event => setName(event.target.value)}
                /><br />
                <button type='submit'>add</button>
            </form>
        </>
    )
}

export default App;