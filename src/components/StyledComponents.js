import styled from 'styled-components';

export const Styles= styled.div`
  //background-color: lightBlue;
  width: 40%;
  height: 375px;
  text-align: center;
  border: white 1px solid;
  background-color: #443e3e;
  color: white;
  font-size: 1rem;
  margin: 2% auto 0;
  opacity: 0.7;
  padding: 1%;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 75%;
    margin-bottom: 5%;
`;

export const Attr = styled.p`
  text-align: left;
  font-size: 1rem;
  margin-left: 5%;
`

export const Span = styled.span`
font-weight: bold;
`

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`

export const H2 = styled.h2`color: darkblue`

export const Div1 = styled.div`
  width: 80%;
  margin: 2% auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  @media (max-width:768px) {
    flex-flow: column nowrap;
  }
`;

export const NewH3 = styled(H1)`
    font-size: 1.25rem;
    text-align: Center;
`;

export const RH1 = styled.h1`
  font-size: 3rem;
  font-family: 'Dela Gothic One', cursive;
`