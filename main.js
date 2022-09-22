function convertir(a){
    function concatenar() {
        function formula(a){
            a=a-32;
            a=a*5;
            a=a/9;
            return a;
        }
        let ingreso=document.getElementById("entrada").value;
        let etiqueta1="<div>";
        let etiqueta2="</div>";
        let gradosC=Math.floor(formula(ingreso));
        resultado=etiqueta1+gradosC+etiqueta2;
        
        document.getElementById("temperatura").style.height =gradosC+"%";
        
        return resultado;
    }
    document.getElementById("salida").innerHTML=concatenar();
    
}

