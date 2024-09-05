// JavaScript source code
fun��o  pesquisar()  {
    // Obt�m a se��o HTML onde os resultados ser�o exibidos
    deixe  se��o = documento.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    deixe  resultados = "";

    // Itera sobre cada dado da lista de dados
    para(deixe  dado  de  dados)  {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank"> ${dado.t�tulo} </a>
                </h2>
                <p class="descricao-meta"> ${dado.descri��o} </p>
                <a href= ${dado.link} target="_blank">Mais informa��es</a>
            </div>
        ` ;
    }

    // Atributo dos resultados gerados na se��o HTML
    se��o.innerHTML = resultados;
}
