const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload = function(){
            info = fr.result
            document.getElementById("output").textContent=fr.result
        }
            
    }
    catch(erro) {
        console.log(erro)
        alert(erro)
        //document.getElementById('output').textContent="Arquivo não localizado";
    }
    finally{
        alert("Obrigado pela visita")
    }

    fr.onload=function(){
        var info = fr.result; 
        console.log(info);
        document.getElementById('output').textContent=fr.result;
    }   
}

function clickNumberButton() {
    // EXERCÍCIOS
    // 1) Inserir um campo de input com a mensagem "informe um valor entre 5 a 10"  ***
    // 2) Verifica se é nulo, se for, lança exception "Informe um valor" 
    // 3) Verifica se é maior que 5 e menor que 10, se não for, lança exception 
    // "Informe um valor maior que 5 e menor que 10"
    // 4) Se o try falhar, lançar exception "Erro + erro javascript" ***
    // 5) No finnaly informar "O número escolhido foi + " numero     ***

    number = document.getElementById("inputnumber").value

    try{
        if (number == '') throw 'Informe um valor'   //Verifica se é nulo


        if (number < 5 || number > 10) throw 'Informe um valor maior que 5 e menor que 10'   //Verifica se é maior que 5 e menor que 10
    }
    catch(erro){
        document.getElementById("outputnumber").innerHTML = erro
        alert('Erro + erro javascript')
    }

    finally{
        alert(`O número escolhido foi ${number}`)
    }
}