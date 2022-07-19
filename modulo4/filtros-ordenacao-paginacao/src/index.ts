import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getProducts } from "./endpoints/getProducts";
import { createProduct } from "./endpoints/createProduct";
import { deleteProduct } from "./endpoints/deleteProduct";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

app.get("/ping", ping);

// Get products
app.get("/products", getProducts);

// Post products
app.post("/products", createProduct);

// Delete products
app.delete("/products", deleteProduct);
