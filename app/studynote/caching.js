//  Quick reference:------
// cache: "force-cache"  -	Use the Data Cache for this fetch.
// cache: "no-store"	-Do not use the Data Cache for this fetch.
// next: { revalidate: 60 }	- Allow cached data to be revalidated after 60 seconds.
// revalidatePath("/products")	- Revalidate cache associated with a route path.
// revalidateTag("products")-	Revalidate cached data associated with a tag.





//1. Cache API data

export default async function ProductsPage() {
  const response = await fetch(
    "https://fakestoreapi.com/products",
    { cache: "force-cache" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();

  return (
    <div>
      {products.map((product) => (
        <h2 key={product.id}>{product.title}</h2>
      ))}
    </div>
  );
}


//  Time-based revalidation
// Revalidation refreshes cached data. With time-based revalidation, cached data becomes eligible for refresh after the configured interval.

const response = await fetch(
  "https://fakestoreapi.com/products",
  {
    next: {
      revalidate: 60,
    },
  }
);

const products = await response.json();

// Disable the Data Cache
// Use cache: "no-store" when each request needs fresh data and should not use the Data Cache. Consider the extra API and backend load.

// const response = await fetch(
//   "https://fakestoreapi.com/products",
//   { cache: "no-store" }
// );


//  On-demand revalidation
// Sometimes you want to refresh cached data immediately after a user creates, updates, or deletes a record.
// "use server";

// import { revalidatePath } from "next/cache";

// export async function refreshProducts() {
//   revalidatePath("/products");
// }
// revalidatePath() revalidates cache associated with a route path. revalidateTag() can revalidate cached data associated with a tag. Exact behavior depends on how the route and data are cached.
// import { revalidateTag } from "next/cache";

// // Example: use a cache tag when configuring the fetch,
// // then revalidate that tag after an update.
// revalidateTag("products");
