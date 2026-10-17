
import Link from "next/link";

export default async function ProductList({ searchParams }) {

  // http://localhost:3000/products?category=electronics&limit=3

   const params = await searchParams;

  const category = params?.category;
  const limit = params?.limit;

  let data;

  try {
    const response = await fetch(
      "https://fakestoreapi.com/products",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`FakeStore API failed: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      const body = await response.text();
      console.error("Unexpected API response:", body.slice(0, 300));
      throw new Error("API returned HTML instead of JSON");
    }

    data = await response.json();
  } catch (error) {
    console.error("Products fetch error:", error);
    throw error;
  }

  let filteredProducts = data;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (prod) => prod.category === category
    );
  }

  if (limit) {
    const count = Number(limit);

    if (Number.isInteger(count) && count >= 0) {
      filteredProducts = filteredProducts.slice(0, count);
    }
  }



  return (
    <div className="container my-5 ">
      <div className="row g-4">
        {filteredProducts.map((prod) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod.id}>
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
              
              <div className="bg-light p-4 text-center d-flex align-items-center justify-content-center" style={{ height: "220px" }}>
                <img src={prod.image} alt={prod.title} className="img-fluid" style={{ maxHeight: "160px", objectFit: "contain" }} />
              </div>

              <div className="card-body d-flex flex-column p-3">
                
                <span className="badge bg-light text-secondary mb-2 align-self-start text-capitalize">
                  {prod.category}
                </span>

                <h6 className="card-title fw-bold text-dark mb-2 text-truncate" title={prod.title}>
                  {prod.title}
                </h6>

                <p className="card-text text-muted small mb-3 " >
                  {prod.description.substring(0,50)}...
                </p>

                <div className="mt-auto pt-2 d-flex align-items-center justify-content-between">
                  <span className="fs-5 fw-bold">${prod.price.toFixed(2)}</span>
                  <Link href={`/productDetails/${prod.id}`} className="btn btn-dark btn-sm rounded-pill px-3">
                      View Products
                    </Link>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}