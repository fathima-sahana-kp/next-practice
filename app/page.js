
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/products");
  }, [router]);

  function handleClick() {
    router.push("/products");
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card border-0 shadow-lg p-4 p-md-5 text-center rounded-4">
                <div className="card-body">
                  <span className="badge bg-dark text-white rounded-pill px-3 py-2 mb-3 fw-semibold text-uppercase">
                    Welcome to Our Platform
                  </span>

                  <h1 className="fw-bold text-dark mb-3 display-6">
                    Discover Quality Products
                  </h1>

                  <p className="text-muted mb-4 lead fs-6">
                    Shop handpicked essentials designed for durability,
                    style, and unmatched value.
                  </p>

                  <button
                    onClick={handleClick}
                    className="btn btn-dark btn-lg px-4 py-2 rounded-3 shadow-sm fw-medium"
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
