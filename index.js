const express = require('express');
const app = express();
// Middleware para interpretar JSON


// TESTE DE ALETARÇÃO NO GITHUB



app.use(express.json());
// Rota de sucesso (200 OK)
app.get('/sucesso', (req, res) => {
 res.status(200).json({
 status: "success",
 message: "Requesito para da seto!"
 });
});
// Rota de criação de recurso (201 Created)
app.post('/criar', (req, res) => {
 const { nome, email } = req.body;
 if (!nome || !email) {
 return res.status(400).json({
 status: "error",
 message: "Nome e email são obrigatórios!"
 });
 }
 res.status(201).json({
 status: "success",
 message: "Usuário criado com sucesso!",
 data: { nome, email }
 });
});
// Rota de erro (400 Bad Request)
app.get('/erro', (req, res) => {
 res.status(400).json({
 status: "error",
 message: "Requisição inválida! Verifique os parâmetros enviados."
 });
});
// Rota não encontrada (404 Not Found)
app.use((req, res) => {
    res.status(404).json({
    status: "error",
    message: "Rota não encontrada! Verifique o URL."
    });
});
// Iniciando o servidor na porta 3000
app.listen(3000, () => {
 console.log("Servidor rodando na porta 3000");
});
