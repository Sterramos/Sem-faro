
document.getElementById("imprimir").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const placa = document.getElementById("placa").value;
    const infracao = document.getElementById("infracao").value;

    const newWindow = window.open("", "_blank");

    
    const content = `
        <h1>Autuação</h1>
        <p><strong>Nome do Infrator:</strong> ${nome}</p>
        <p><strong>Placa do Veículo:</strong> ${placa}</p>
        <p><strong>Infração:</strong> ${infracao}</p>
    `;

    
    newWindow.document.open();
    newWindow.document.write(content);
    newWindow.document.close();

    
    newWindow.print();
});
