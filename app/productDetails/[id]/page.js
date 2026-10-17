
import { Suspense } from "react";
import Link from "next/link";
import ProductServices from "../../services/productservices";

async function ProductDetailsContent({ params }) {
  const { id } = await params;
  const product = await ProductServices.getProductById(id);

  return (
    <div className="container p-5">
      <h4>{id}</h4>

      <Link
        href="/products"
        className="btn btn-outline-secondary mb-4"
      >
        Back to Products
      </Link>

      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{
              maxHeight: "350px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-md-7">
          <span className="badge bg-secondary mb-2 text-uppercase">
            {product.category}
          </span>

          <h2 className="fw-bold mb-3">{product.title}</h2>

          <h3 className="text-primary fw-bold mb-3">
            ${product.price?.toFixed(2)}
          </h3>

          <p className="text-muted lead fs-6">
            {product.description}
          </p>

          <button className="btn btn-success btn-lg mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailsPage({ params }) {
  return (
    <Suspense
      fallback={
        <div className="container p-5">Loading product...</div>
      }
    >
      <ProductDetailsContent params={params} />
    </Suspense>
  );
}
