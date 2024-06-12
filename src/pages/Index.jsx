import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to E-Shop</Heading>
        <Text>Your one-stop shop for all your electronic needs.</Text>
        <Button as={RouterLink} to="/products" colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;