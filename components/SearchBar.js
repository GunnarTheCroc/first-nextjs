import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    // Fetch products from api
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Filter to only items that contain search value
    useEffect(() => {
        setFilteredProducts(
            products
                .filter(product =>
                    product.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .slice(0, 20) // only display 20 items
        );
    }, [searchValue, products]);

    const shouldDisplayButton = searchValue.length > 0

    const handleClearClick = () => {
        setSearchValue("")
    }

    return (
        <div>
            <h2>Product Search</h2>
            <input type="text" placeholder="Search Here!" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} width="100" height="100" />
                            </td>
                            <td>{product.title}</td>
                            <td>${product.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SearchBar