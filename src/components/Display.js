import React from "react";
import { Styles, Div1, H1 } from "/styled-components";



function Display(props) {
    return (
        <Div1>
            <H1>
                Name: {props.name}
                <br/>
                Height: {props.height}
                <br />
                Mass: {props.mass}
                <br />
                Name: {props.name}
                <br/>
                Height: {props.height}
                <br />
                Mass: {props.mass}
                <br />
                Name: {props.name}
                <br/>
                Height: {props.height}
                <br />
                Mass: {props.mass}

            </H1>
        </Div1>
    )
}

export default Display
