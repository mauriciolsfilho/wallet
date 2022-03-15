import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento Website",
          type: "deposit",
          category: "Freelance",
          amount: 6555,
          createdAt: new Date("2022-02-10"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: -1550,
          createdAt: new Date("2022-03-10"),
        },
        {
          id: 3,
          title: "Supermercado",
          type: "withdraw",
          category: "Compras",
          amount: -412,
          createdAt: new Date("2022-03-01"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });

    this.delete("/transactions/:id", (schema, request) => {
      let transaction = schema.find("transaction", request.params.id);

      if (transaction) {
        transaction.destroy();
      }
      return this.schema.all("transaction");
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
