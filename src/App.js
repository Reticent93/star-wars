import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Names from "./components/Names";

import {Div1, Flex, RH1} from "./components/StyledComponents";


function App() {
    const [names, setNames] = useState([])

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people/')
            .then(res => {
                setNames(res.data.results)
            })
            .catch(err => console.error(err))
    }, [])


    return (
        <div className="App">
            <RH1>REACT WARS</RH1>
            <Div1>
            <Flex>

            {names.map((name, index) => {
                return <Names name={name.name} height={name.height} weight={name.mass} hair={name.hair_color} skin={name.skin_color}
                eyeColor={name.eye_color} birthdate={name.birth_year} gender={name.gender} key={index}  />
            })}

            </Flex>
        </Div1>
        </div>
    );
}

export default App;
