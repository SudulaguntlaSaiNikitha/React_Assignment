import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = (page, limit, searchQuery) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://dummyjson.com/products');
        let allProducts = response.data.products;

        // Filter products based on the search query
        if (searchQuery) {
          allProducts = allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setIsSearching(true);
        } else {
          setIsSearching(false);
        }

        // Pagination Logic
        const startIndex = (page - 1) * limit;
        const paginatedProducts = allProducts.slice(startIndex, startIndex + limit);

        setProducts(paginatedProducts);
        setTotal(allProducts.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [page, limit, searchQuery]);

  return { products, loading, total, isSearching };
};

export default useProducts;
