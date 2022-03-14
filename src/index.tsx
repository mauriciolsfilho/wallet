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
          title: "Desenvolvimento de Website",
          type: "deposit",
          category: "Dev",
          amount: 1000,
          createdAt: new Date("2022-02-10"),
        },
        {
          id: 2,
          title: "Aluguel Joinville",
          type: "withdraw",
          category: "Casa",
          amount: 1000,
          createdAt: new Date("2022-03-10"),
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
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
