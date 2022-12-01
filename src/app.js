import React, { useEffect, useState } from "react";
import {fetchFamilies, postFamilies} from "./http";

const App = () => {
    const [families, setFamilies] = useState({
        byId: {},
        allIds: []
    })
    const [name, setName] = useState('');

    useEffect(async () => {
        setFamilies(await fetchFamilies())
    }, [])

    const addFamily = async e => {
        e.preventDefault()
        await postFamilies({ name })
        setFamilies(await fetchFamilies())
    }


    return (
        <>
            <h1>families</h1>
            {
                families.allIds.map(familyId => (
                    <p>{families.byId[familyId].name}</p>
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