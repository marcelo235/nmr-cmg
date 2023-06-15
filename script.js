
        function sim(){
            alert("Aceitoou, quero um beijo pra já! :D" );  
        }
        function desviar(t){
            var btn = t;
            btn.style.position="absolute"  
            btn.style.top=geraPosicao(10, 90);
            btn.style.left=geraPosicao(10, 90);
            console.log("opa, desviei...");
        }
        
            function geraPosicao(min, max){
                return (Math.random() * (max-min) + min) + "%";
            }
     