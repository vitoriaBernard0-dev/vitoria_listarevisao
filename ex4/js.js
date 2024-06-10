// Vitória Karoline de Carvalho Bernardo

document.getElementById("addRowBtn").addEventListener("click", function() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = "Novo Dado 1";
    cell2.innerHTML = "Novo Dado 2";
  });
  