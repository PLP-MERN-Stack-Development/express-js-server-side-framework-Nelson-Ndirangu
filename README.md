# Product API (Express) - Week 2 Assignment

Simple Express-based Product API used for Week 2 assignment.

## Overview

This project provides a small Product API built with Express. The main entry point is [server.js](server.js). It connects to a database via [`connectDB`](configs/db.js), exposes product-related routes from [`productRoutes`](routes/productRoute.js), and uses the product model at [Models/products.js](Models/products.js).

## Requirements

- Node.js (v14+ recommended)
- npm

## Setup

1. Install dependencies:
```sh
npm install
```

2. Create a `.env` file in the project root (if not already present). Example values:
```
PORT=3000
MONGO_URI=your_mongo_connection_string
```

3. Start the server:
```sh
node server.js
```
The server listens on `process.env.PORT` or `3000` by default.

## Available files

- [server.js](server.js) — main Express app and route mounting
- [configs/db.js](configs/db.js) — database connection helper (`connectDB`)
- [routes/productRoute.js](routes/productRoute.js) — product routes (`productRoutes`)
- [Models/products.js](Models/products.js) — product model / data handling
- [package.json](package.json)
- [.env](.env)
- [.gitignore](.gitignore)
- [MD FILES/README.md](MD%20FILES/README.md)
- [MD FILES/Week2-Assignment.md](MD%20FILES/Week2-Assignment.md)

## API Endpoints (mounted at `/api/products`)

See [routes/productRoute.js](routes/productRoute.js) for exact endpoints. Example endpoints typically include:
- GET /api/products — list products
- GET /api/products/:id — get product by id
- POST /api/products — create product
- PUT /api/products/:id — update product
- DELETE /api/products/:id — delete product

## Notes & TODOs

- The code currently mentions TODOs for custom middleware: request logging, authentication, and error handling. See [server.js](server.js) for placement.
- Database connection is handled in [`connectDB`](configs/db.js).

## Testing

If you add tests later, exportable `app` in [server.js](server.js) allows using test runners (e.g., supertest + mocha/jest).

