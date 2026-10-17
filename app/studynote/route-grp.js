// Route grps and metadata notes


// Route Groups   
// 3.1 What are Route Groups?
// Route Groups organize application folders without adding those folder names to the URL. Create a group by placing the folder name in parentheses.
// app/
// ├── (marketing)/
// │   ├── about/
// │   │   └── page.js
// │   └── contact/
// │       └── page.js
// ├── (shop)/
// │   └── products/
// │       └── page.js
// └── layout.js
// File location	URL
// app/(marketing)/about/page.js	/about
// app/(marketing)/contact/page.js	/contact
// app/(shop)/products/page.js	/products
// The names (marketing) and (shop) are omitted from the URLs.


// 3.2 Why use Route Groups?
// They keep larger applications organized by purpose. For example, an e-commerce app might have (marketing) for Home/About/Contact, (shop) for Products/Cart, (auth) for Login/Register, and (dashboard) for admin pages.



// 3.3 Different layouts for different groups
// app/
// ├── (marketing)/
// │   ├── layout.js
// │   ├── page.js
// │   └── about/page.js
// ├── (dashboard)/
// │   ├── layout.js
// │   └── dashboard/page.js
// └── layout.js
// // app/(marketing)/layout.js
// export default function MarketingLayout({ children }) {
//   return (
//     <div>
//       <nav>Marketing Navbar</nav>
//       <main>{children}</main>
//       <footer>Marketing Footer</footer>
//     </div>
//   );
// }
// // app/(dashboard)/layout.js
// export default function DashboardLayout({ children }) {
//   return (
//     <div>
//       <aside>Dashboard Sidebar</aside>
//       <main>{children}</main>
//     </div>
//   );
// }
// children is the page or nested layout rendered inside the layout. Marketing pages get the marketing navigation and footer; dashboard pages get the dashboard sidebar.




// 3.4 Route Group rules
// •	Use parentheses, such as (admin), to create a route group.
// •	The group name does not appear in the URL.
// •	Groups can organize pages and share layouts.
// •	Do not define conflicting routes that resolve to the same URL in different groups.
// •	Multiple root layouts are possible. Navigating between routes with different root layouts causes a full page load.
// •	Route Groups do not automatically protect admin pages. Implement authentication and authorization separately.


// 4. Static and Dynamic Metadata:--------

// 4.1 What is metadata?
// Metadata describes a webpage. Examples include its title, description, Open Graph information for social sharing, robots instructions, and icons. Next.js uses the Metadata API to generate HTML metadata tags.

// 4.2 Static metadata
// Static metadata uses predefined values that do not depend on a product, user, or URL parameter. It is suitable for fixed pages such as About or Contact.
// // app/about/page.js
// export const metadata = {
//   title: "About Us | My Store",
//   description: "Learn more about our company.",
// };

// export default function AboutPage() {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>Welcome to our website.</p>
//     </div>
//   );
// }
// The metadata object defines the page title and description. Next.js uses them to generate the appropriate metadata tags.


// 4.3 Default metadata and title templates
// // app/layout.js
// export const metadata = {
//   title: {
//     default: "My Store",
//     template: "%s | My Store",
//   },
//   description: "Welcome to our online store.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
// With this template, a child page title "Products" becomes "Products | My Store". The default title is used when a child page does not provide its own title.


// 4.4 Dynamic metadata
// Dynamic metadata is generated from information that can change, such as a product ID, blog slug, or API data. For example, /products/1 and /products/2 should have different titles.
// // app/products/[id]/page.js
// async function getProduct(id) {
//   const response = await fetch(
//     `https://fakestoreapi.com/products/${id}`
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch product");
//   }

//   return response.json();
// }

// export async function generateMetadata({ params }) {
//   const { id } = await params;
//   const product = await getProduct(id);

//   return {
//     title: product.title,
//     description: product.description,
//   };
// }

// export default async function ProductDetails({ params }) {
//   const { id } = await params;
//   const product = await getProduct(id);

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <p>{product.description}</p>
//       <h3>${product.price}</h3>
//     </div>
//   );
// }
// This example uses Promise-based params in modern Next.js App Router versions. Older versions may use synchronous params.
// 4.	The user opens /products/1.
// 5.	Next.js passes the route parameter to generateMetadata().
// 6.	getProduct(id) fetches the matching product.
// 7.	generateMetadata() returns the product title and description.
// 8.	The page displays that product's details.
// Identical fetch requests can be memoized within the same rendering process. This can avoid duplicate work when metadata and page content request the same product.


// 4.5 Static vs dynamic metadata
// Static metadata	Dynamic metadata
// Uses predefined values.	Generates values from dynamic data.
// Best for About, Contact, and fixed pages.	Best for products, blog posts, and dynamic articles.
// Export a metadata object.	Export a generateMetadata() function.
// Does not need data fetching to determine metadata.	May fetch data or use route parameters.


// 4.6 Metadata rules
// •	The metadata object and generateMetadata() are supported in Server Components, not Client Components.
// •	Do not export both from the same page.js or layout.js file.
// •	Use generateMetadata() when metadata depends on dynamic information.
// •	Metadata can help SEO and social sharing, but it does not guarantee higher search rankings.
// •	Next.js also supports file-based metadata, such as icons and Open Graph images.

