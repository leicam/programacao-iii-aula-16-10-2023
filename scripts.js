function getClients() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/client", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onload = function () {
        let clients = JSON.parse(xhttp.responseText);

        if (xhttp.readyState == 4 && xhttp.status == "200") {
            console.log(clients);

            for(var i = 0; i < clients.length; i++){
              var node = document.createElement("td");
              var textnode = document.createTextNode(clients[i]);
              
              node.appendChild(textnode);
              document.getElementById("client").appendChild(node);
            }
        }
    }
    xhttp.send();
}