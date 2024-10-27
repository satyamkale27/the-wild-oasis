import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  // it is real components and has to start with capital letters //
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
`;

function App() {
  return (
    <div>
      <H1>The wild Oasis</H1>
      <Button onClick={() => alert("Check in")}>Check in</Button>
    </div>
  );
}

export default App;
