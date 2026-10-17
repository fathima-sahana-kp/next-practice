
// What is a Route Handler?
// A Route Handler lets you create an API endpoint inside a Next.js App Router project. It handles HTTP requests and returns a response, often JSON data.
// Example request flow:
// Frontend  →  API endpoint  →  Response


//  Route Handler HTTP methods
// Method	Purpose	Example
// GET	Read data	Get all products
// POST	Create data	Add a product
// PUT	Replace/update data	Update a product
// PATCH	Partially update data	Change a product's price
// DELETE	Delete data	Remove a product


// Example with multiple HTTP methods:
// export async function GET() {
//   return Response.json({ message: "Get products" });
// }

// export async function POST() {
//   return Response.json({ message: "Create product" });
// }

// export async function DELETE() {
//   return Response.json({ message: "Delete product" });
// }
// These functions return messages only. They do not perform actual database operations.


// 6. Route Handler vs Page
// File	Main purpose	Example
// page.js	Displays the user interface	/products shows product names and prices
// route.js	Handles HTTP requests and returns responses	/api/products returns JSON data
// layout.js	Provides shared UI around pages	Common navbar or shared page structure
// Important: A page and a Route Handler cannot define the same URL in the same route segment. A common pattern is to keep the UI at /products and the API at /api/products.


// 7. Quick revision
// 1. Which folder is used by the App Router?
// Answer: app/
// 2. Which file displays a page in the App Router?
// Answer: page.js
// 3. Which file creates an API endpoint in the App Router?
// Answer: route.js
// 4. Which router uses getServerSideProps?
// Answer: Pages Router
