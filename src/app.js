import React, {useEffect, useState} from "react";
import { fetchApi } from "./http";

const App = () => {
    const [families, setFamilies] = useState({
        byId: {},
        allIds: [],
    })

    useEffect(async () => {
        const response = await fetchApi()
        setFamilies(response)
    }, [])


    return (
        <>
            <h1>families</h1>
            {
                families.allIds.map(familyId => (
                    <p>{families.byId[familyId].name}</p>
                ))
            }
        </>
    )
}

export default App;