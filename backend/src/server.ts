import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config(); // carrega as variáveis do .env

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

// contador em memória (reinicia a cada restart do processo)
let requisicoes = 0;

app.get("/", (_req: Request, res: Response) => {
  requisicoes += 1;
  res.json({
    mensagem: "Hello, World!",
    requisicoes
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("ok");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
