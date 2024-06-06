import { useState } from "react";
import { 
  Box, 
  Button, 
  Container, 
  Flex, 
  Heading, 
  HStack, 
  IconButton, 
  Input, 
  List, 
  ListItem, 
  Spacer, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Todo App
        </Heading>
        
        <HStack>
          <Input 
            placeholder="Add a new todo" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem 
              key={index} 
              p={3} 
              shadow="md" 
              borderWidth="1px" 
              borderRadius="md" 
              display="flex" 
              alignItems="center"
              bg={todo.completed ? "green.100" : "white"}
            >
              <Text 
                as={todo.completed ? "s" : "span"} 
                flex="1" 
                onClick={() => toggleTodo(index)}
                cursor="pointer"
              >
                {todo.text}
              </Text>
              <Spacer />
              <IconButton 
                icon={<FaTrash />} 
                colorScheme="red" 
                onClick={() => deleteTodo(index)} 
                aria-label="Delete todo"
              />
            </ListItem>
          ))}
        </List>
        
        <Box as="footer" textAlign="center" py={4}>
          <Text>© 2023 Todo App. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;