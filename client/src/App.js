import { Button, Text } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Text textStyle='h1'>Heading 1</Text>
      <Text textStyle='h2'>Heading 2</Text>
      <Text textStyle='h3'>Heading 3</Text>
      <Text textStyle='h4'>Heading 4</Text>
      <Text textStyle='h5'>Heading 5</Text>
      <Text textStyle='b2'>Heading 1</Text>
      <Text textStyle='b3'>Heading 2</Text>
      <Text textStyle='b4'>Heading 3</Text>
      <Text textStyle='button'>Heading 3</Text>
      <div>
        <Button bg='blue.100'></Button>
        <Button bg='blue.200'></Button>
        <Button bg='blue.300'></Button>
        <Button bg='blue.400'></Button>
        <Button bg='blue.500'></Button>
        <Button bg='blue.600'></Button>
        <Button bg='blue.700'></Button>
        <Button bg='blue.800'></Button>
        <Button bg='blue.900'></Button>
        <Button bg='blue.950'></Button>
      </div>
      <div>
        <Button bg='gray.100'></Button>
        <Button bg='gray.200'></Button>
        <Button bg='gray.300'></Button>
        <Button bg='gray.400'></Button>
        <Button bg='gray.500'></Button>
        <Button bg='gray.600'></Button>
        <Button bg='gray.700'></Button>
        <Button bg='gray.800'></Button>
        <Button bg='gray.900'></Button>
        <Button bg='gray.950'></Button>
      </div>
      <div>
        <Button bg='purple.100'></Button>
        <Button bg='purple.900'></Button>
        <Button bg='yellow.100'></Button>
        <Button bg='yellow.900'></Button>
        <Button bg='green.100'></Button>
        <Button bg='green.900'></Button>
      </div>
      <div>
        <Button bg='utility.black'></Button>
        <Button bg='utility.white'></Button>
        <Button bg='utility.red'></Button>
        <Button bg='utility.bg'></Button>
      </div>
    </div>
  );
}

export default App;
