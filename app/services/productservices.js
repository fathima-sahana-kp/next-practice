
class ProductServices {
  static async getProducts() {
    const response = await fetch(
      "https://fakestoreapi.com/products",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status}`
      );
    }

    return response.json();
  }

  static async getProductById(id) {
    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch product: ${response.status}`
      );
    }

    return response.json();
  }
}

export default ProductServices;
