class Login {
    static logado = false;
    static matricula_logado = null;
    static nome_logado = null;
    static acesso_logado = null;
    static endpoint = "http://localhost:3000/login";

    static login = (matricula, password) => {
        fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: matricula,
                password: password
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.message === 'Login bem-sucedido!') {
                // Atualiza os dados de login no objeto estático
                this.logado = true;
                this.matricula_logado = matricula;
                this.nome_logado = res.nome; // Assumindo que o servidor retorna o nome
                this.acesso_logado = res.acesso; // Assumindo que o servidor retorna nível de acesso

                console.log("Usuário logado com sucesso:", this.nome_logado);
            } else {
                console.log("Falha no login:", res.message);
            }
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });
    }
}

export default Login ;
