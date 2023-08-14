var itens = [];

document.getElementById('add').addEventListener('click', ()=>{
    var itemList = document.getElementById('item');
    var precoList = document.getElementById('preco');

    itens.push({
        nome: itemList.value,
        preco: precoList.value
    });

    let lista = document.getElementById('list');
    let soma = 0;
    lista.innerHTML = "";

    itens.map((val)=>{
        soma+=parseFloat(val.preco);

        lista.innerHTML += `
        <div class="lista-single" id="lista">
            <p class="produto">
                `+val.nome+`
            </p>
            <p class="preco">
                <span>R$`
                +val.preco+`
                </span>
            </p>
        </div>
        `;
    })
    soma = soma.toFixed(2);
    item.value = "";
    precoList.value = "";

    let elementoSoma = document.getElementById('result');
    elementoSoma.innerHTML = 'R$'+soma;

})
    document.getElementById('limp').addEventListener('click', ()=>{
        itens = [];

        document.getElementById('list').innerHTML = "";
        document.getElementById('result').innerHTML= "R$0";
    });