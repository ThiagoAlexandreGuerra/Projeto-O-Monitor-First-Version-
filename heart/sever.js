const express = require('express');
const path = require('path');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
const porta = process.env.PORT || 3000;
const feedback = () => { console.log(`Servidor rodando na porta ${porta}`); }


app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, '../../pages/index.html'));
    iniciar= true
});
app.get('/pages/remontandoPagInicial.html', (req , resp)=>{
    resp.sendFile(path.join(__dirname , '../../pages/remontandoPagInicial.html'))
})
app.get('/pages/perfil.html' , (req , resp)=>{
    resp.sendFile(path.join(__dirname, '../../pages/perfil.html'))
})
app.get('/pages/anotacoes.html' , (req , resp)=>{
    resp.sendFile(path.join(__dirname , '../../pages/anotacoes.html'))
})
app.get('/pages/loja.html', (req , resp)=>{
    resp.sendFile(path.join(__dirname , '../../pages/loja.html'))
})
app.get('/pages/cronograma.html', (req , resp)=>{
    resp.sendFile(path.join(__dirname , '../../pages/cronograma.html'))
})
app.get('/pages/resoluctions_console.html', (req , resp)=>{

    resp.sendFile(path.join(__dirname , '../../pages/resoluctions_console.html'))
})


app.use(express.static(path.join(__dirname, '../../static_file'))); // Corrigido aqui

app.get('/texto_para_questao', (req, res) => {
    const pythonProcess = spawn('python', ['C:/Users/thiag/OneDrive/Documentos/projeto_o_monitor/API/script_py/leitor_de_questoes.py']);
    let output = ""; 

    pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Erro do script Python: ${data}`);
        if (!res.headersSent) {
            res.status(500).send(`Erro do script Python: ${data}`);
        }
    });

    pythonProcess.on('close', (code) => {
        console.log(`Processo finalizado com código ${code}`);
        if (!res.headersSent) {
            try {
                const result = JSON.parse(output.trim());
                res.json(result);
            } catch (error) {
                console.error("Erro ao processar a saída JSON:", error);
                res.status(500).send("Erro ao processar a saída do script.");
            }
        }
    });
});

app.use(bodyParser.json()); // Necessário para ler o JSON enviado no `fetch`

// Rota para login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'usuario' && password === 'senha123') {
        res.status(200).json({
            message: 'Login bem-sucedido!',
            nome: 'Nome do Usuário', // Exemplo de retorno de nome
            acesso: 'nível de acesso' // Exemplo de retorno de acesso
        });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

app.listen(porta, feedback);
