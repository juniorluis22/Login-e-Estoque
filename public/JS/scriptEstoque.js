// button de abir o display-adicionar
document.querySelector("button").addEventListener("click", () => {
  document.querySelector(".display-adicionar").style.opacity = "0";
  document.querySelector(".display-adicionar").style.display = "flex";

  setTimeout(() => {
    document.querySelector(".display-adicionar").style.opacity = "1";
  }, 100);
});

// Função para fechar o display-adicionar

function fechardisplayadicionar() {
  document.querySelector(".display-adicionar").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".display-adicionar").style.display = "none";
  }, 500);

  // Botão para fechar o display-adicionar
  document
    .querySelector(".button-voltar")
    .addEventListener("click", fechardisplayadicionar);
}

//Usuario
document.addEventListener("DOMContentLoaded", function() {
    // Recuperar o valor salvo do localStorage
    let login = localStorage.getItem("login");
    
    
    const email = login;
    const indiceArroba = email.indexOf('@');

// Se o '@' estiver presente, pegue a parte do email antes dele
if (indiceArroba !== -1) {
    const emailAteArroba = email.substring(0, indiceArroba);
    
    // Atualizar o elemento HTML com o valor do login
    let usuarioText = document.querySelector(".usuario");
    usuarioText.innerHTML = `Usuário: ${emailAteArroba}` ;

}
});
//ADICIONAR PRODUTO
document
  .querySelector(".button-adicionar-produto")
  .addEventListener("click", () => {
    // ADICIONAR UM NOVO PRODUTO

    let contadorItens = document.querySelectorAll(".main-produto").length;

    if (contadorItens <= 10) {
      let idProduto = document.querySelector("#id").value;
      let nomeProduto = document.querySelector("#produto").value;
      let data = document.querySelector("#data").value;
      let quantidade = document.querySelector("#quantidade").value;
      let valor = document.querySelector("#valor").value;

      if (
        idProduto === "" ||
        nomeProduto === "" ||
        data === "" ||
        quantidade === "" ||
        valor === ""
      ) {
        alert("Digite os valores");
      } else {
        let addDivProduto = document.querySelector(".main-produto");
        let cloneDiv = addDivProduto.cloneNode(true); // Clone da div com todos os seus elementos

        addDivProduto.parentNode.insertBefore(
          cloneDiv,
          addDivProduto.nextSibling
        );

        let cloneButton = cloneDiv.querySelector("button");

        let novoId = cloneDiv.querySelector(".text-id");
        let novoProduto = cloneDiv.querySelector(".text-produto");
        let novaData = cloneDiv.querySelector(".text-data");
        let novaQuan = cloneDiv.querySelector(".text-quantidade");
        let novoValor = cloneDiv.querySelector(".text-valor");

        novoId.textContent = idProduto;
        novoProduto.textContent = nomeProduto;
        novaData.textContent = data;
        novaQuan.textContent = quantidade;
        novoValor.textContent = valor;

        cloneButton.innerHTML = "-";

        cloneButton.addEventListener("mouseover", () => {
          cloneButton.style.backgroundColor = "#e61212";
        });

        cloneButton.addEventListener("mouseout", () => {
          cloneButton.style.backgroundColor = "#fff";
        });

        cloneButton.addEventListener("click", () => {
          cloneDiv.remove();
          contadorItens--; // Decrementa o contador de itens ao remover um item
        });

        contadorItens++; // Incrementa o contador de itens após adicionar um item
      }
    } else {
      alert("Você atingiu o limite máximo de 10 itens.");
    }

    fechardisplayadicionar();

    limparInput();
  });

function limparInput() {
  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
}
fechardisplayadicionar();
