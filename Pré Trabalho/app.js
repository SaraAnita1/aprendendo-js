type="text/javascript">
            alert('Olá Mundo!');

            document.write("<h1>Sair com o velho - entrar com o novo!</h1>");
            
            const signo = prompt("Qual é o seu signo?");

            console.log('Signo: ', signo.toLowerCase())


            if (signo.toLowerCase() === "touro") {
                document.write("<p>Legal, Eu sou de Touro também!</p>");
              }
            
            // else {
            //     alert(`Signo: ${signo}`)
            // }

            if(signo.toLocaleLowerCase() === "cancer"){
                alert(`${signo}... hmmm entao você é dramatico`)}

            if (signo.toLocaleLowerCase() === "aries") {
              alert(`${signo} ... Ou você é o João amor da minha vida ou você é o proprio Capeta`)}