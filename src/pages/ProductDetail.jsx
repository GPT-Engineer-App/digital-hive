import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699", description: "A high-end smartphone with a great camera." },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999", description: "A powerful laptop for all your computing needs." },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199", description: "Noise-cancelling headphones with superior sound quality." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
        <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
        <Text fontSize="xl">{product.price}</Text>
        <Text>{product.description}</Text>
      </VStack>
    </Box>
  );
};

export default ProductDetail;