// JavaScript source code
função  pesquisar()  {
    // Obtém a seção HTML onde os resultados serão exibidos
    deixe  seção = documento.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    deixe  resultados = "";

    // Itera sobre cada dado da lista de dados
    para(deixe  dado  de  dados)  {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank"> ${dado.título} </a>
                </h2>
                <p class="descricao-meta"> ${dado.descrição} </p>
                <a href= ${dado.link} target="_blank">Mais informações</a>
            </div>
        ` ;
    }

    // Atributo dos resultados gerados na seção HTML
    seção.innerHTML = resultados;
}
