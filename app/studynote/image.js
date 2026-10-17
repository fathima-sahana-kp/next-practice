//  Images in Next.js

// Quick Summary
// •	Store local images in the public folder.
// •	Use paths such as /product.jpg, not /public/product.jpg.
// •	Import Image from next/image to use Next.js image optimization.
// •	Configure external image hostnames when displaying remote images with Image.
// •	Use alt text that describes the image.


// Beginner-friendly notes with examples
// In Next.js, images can be displayed using the standard HTML <img> element or the Next.js <Image /> component. The recommended option for most project images is Image from next/image because it supports image optimization and responsive loading.


// 1. Using the Next.js Image Component
// Import Image from next/image and provide the image path, alt text, width, and height.
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h1>My Website</h1>

//       <Image
//         src="/product.jpg"
//         alt="Product image"
//         width={300}
//         height={200}
//       />
//     </div>
//   );
// }


// Property explanations
// Property	Explanation
// src	The image path or URL.
// alt	Text describing the image for accessibility and when the image cannot load.
// width	The image width in pixels.
// height	The image height in pixels.
// Image	The Next.js component that supports image optimization.


// 2. Where Should Images Be Stored?
// Method 1: Public folder
// Use this method for image files stored inside your project.
// Project structure:
// my-app/
//   public/
//     product.jpg
//   app/
//     page.jsx
// If the file is public/product.jpg, use src="/product.jpg". Do not include "/public" in the URL.
// Method 2: External image URL
// Use an external URL when images come from an API or an image-hosting service.
// <Image
//   src="https://example.com/photo.jpg"
//   alt="Photo"
//   width={300}
//   height={200}
// />
// For the Next.js Image component, external hostnames generally need to be configured in next.config.js or next.config.ts.


// 3. Displaying Images from an API
// Example using the Fake Store API. The external image hostname must be configured as shown in the next section.
// import Image from "next/image";

// export default async function Products() {
//   const response = await fetch(
//     "https://fakestoreapi.com/products"
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const products = await response.json();

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>

//           <Image
//             src={product.image}
//             alt={product.title}
//             width={150}
//             height={150}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }


// 4. Configure External Images
// Example for next.config.ts:
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "fakestoreapi.com",
//       },
//     ],
//   },
// };

// export default nextConfig;
// Add the actual hostname used by your image URL. Restart the Next.js development server after changing the configuration. If the URL uses a different host, configure that host instead.


// 5. Using a Normal HTML img Element
// A normal img element is also valid:
// export default function Home() {
//   return (
//     <img
//       src="/product.jpg"
//       alt="Product"
//       width="300"
//     />
//   );
// }


// 6. Image Component vs HTML img
// Feature	Next.js Image	HTML img
// Image optimization	Supported by Next.js image optimization	Not provided by Next.js
// Lazy loading	Enabled by default for typical images	Uses browser default behavior
// Width and height	Supported	Supported
// External images	May require hostname configuration	Usually no Next.js hostname configuration
// Best use	Recommended for most Next.js project images	Useful for simple cases or when optimization is not needed


// 7. Common Error
// Error: “Invalid src prop on next/image, hostname is not configured.”
// Meaning: the external hostname in the image URL is not allowed by the Next.js image configuration. Add the correct hostname to images.remotePatterns in next.config.ts or next.config.js, then restart the server.
