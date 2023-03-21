type="text/javascript">
            alert('Olá Mundo!');

            document.write("<h1>Sair com o velho - entrar com o novo!</h1>");
            
            const signo = prompt("Qual é o seu signo?");

            console.log('Signo: ', signo.toLowerCase())


            if (signo.toLowerCase() === "touro") {
                document.write("<p>Legal, Eu sou de Touro também!</p>");
              }
            
            else {
                alert(`Signo: ${signo}`)
            }

            if(signo.toLocaleLowerCase() === "cancer"){
                alert(`${signo}... hmmm entao você é dramatico`)}