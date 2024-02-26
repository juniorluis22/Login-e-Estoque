
    //button open


    document.querySelector('.button').addEventListener('click', () => {
        let email = document.querySelector('#email').value;
        let senha = document.querySelector('#senha').value;
    
        // Verificar se o email está vazio ou não contém o caractere "@"
        if (email.trim() === '' || !email.includes('@') || senha.trim() === '') {
            document.querySelectorAll('.erro-msg').forEach(element => {
                element.style.display = 'flex';
                element.innerHTML = 'Digite um email válido e a senha.';
            });
            return; // Encerra a execução da função se o email ou senha estiverem vazios ou não contém "@"
        }
    
        // Armazenar o email no localStorage
        localStorage.setItem("login", email);
        
        // Redirecionar para a próxima página
        window.location.href = "estoque.html";
    
        // Restante do seu código...
    });



