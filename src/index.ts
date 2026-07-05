import express from "express";
import "dotenv/config";

const app = express();
app.use(express.text({ type: "*/*" }));

let latestSms = "";

app.post("/sms", (req, res) => {
  latestSms = req.body;
  res.type("text/plain").send("OK");
});

app.get("/sms", (req, res) => {
  res.type("text/plain").send(latestSms);
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, () => {
  console.log(`SMS gateway running on port ${port}`);
});
