import { Box, SimpleGrid, Image, Text, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699" },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199" },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const query = useQuery();
  const searchQuery = query.get("search") || "";

  useEffect(() => {
    setFilteredProducts(
      sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);
  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Link as={RouterLink} to={`/products/${product.id}`} key={product.id}>
            <VStack borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
            </VStack>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;