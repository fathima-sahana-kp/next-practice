
//  What is streaming? :----
// Streaming sends a page to the browser in parts. The page shell and ready sections can appear while slower sections are still loading.
// 1.	Initial response: the header, navigation, and ready content arrive.
// 2.	Placeholder: a slow section displays a fallback or skeleton.
// 3.	Completed content: the placeholder is replaced when the section is ready.


//  Streaming with Suspense:--
// // app/products/ProductList.js
// export default async function ProductList() {
//   const response = await fetch(
//     "https://fakestoreapi.com/products"
//   );

//   const products = await response.json();

//   return (
//     <div>
//       {products.map((product) => (
//         <h3 key={product.id}>{product.title}</h3>
//       ))}
//     </div>
//   );
// }
// // app/products/page.js
// import { Suspense } from "react";
// import ProductList from "./ProductList";

// export default function ProductsPage() {
//   return (
//     <div>
//       <h1>Our Products</h1>

//       <Suspense fallback={<p>Loading product list...</p>}>
//         <ProductList />
//       </Suspense>
//     </div>
//   );
// }
// Suspense defines the fallback UI. ProductList is an asynchronous Server Component. For independent streaming, the asynchronous work must be inside the relevant Suspense boundary; if it has already completed before the boundary is rendered, there may be no visible loading interval.


//  loading.js vs Suspense:---
// Special Next.js file convention.	React component.
// Provides loading UI for a route segment.	Provides loading UI for a specific component subtree.
// Useful for route navigation feedback.	Useful for independently loading sections such as reviews or reports.
// Next.js creates the boundary automatically.	You place the boundary explicitly.
