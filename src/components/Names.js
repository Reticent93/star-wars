import React from "react";
import {H1, Styles, Attr, Span, NewH3} from "./StyledComponents";

const Names = ({name, height, mass, hair, skin, eye, birth, gender}) => {
    return (
        <Styles>

            <H1><p>{name}</p></H1>
            <hr />
            <NewH3>Attributes</NewH3>
            <Attr><Span>Gender: </Span>{gender}</Attr>
            <Attr><Span>Height: </Span>{height}</Attr>
            <Attr><Span>Weight: </Span>{mass}</Attr>
            <Attr><Span>Hair Color: </Span>{hair}</Attr>
            <Attr><Span>Skin Color: </Span>{skin}</Attr>
            <Attr><Span>Eye Color: </Span>{eye}</Attr>
            <Attr><Span>Birth Year: </Span>{birth}</Attr>


        </Styles>
    )
}
export default Names