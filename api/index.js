import express from "express";

const app = express();

// Listen to port server

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Hello from ${PORT}`);
});
