var table = document.querySelector("#table");
var addButton = document.getElementById("add");

addButton.addEventListener('click', function(e)
{
    
    var n = document.getElementById('name').value;
    var e = document.getElementById("email").value;
    var p = document.getElementById("phone-number").value;
    var a = document.getElementById("address").value;

    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var name = document.createTextNode(n);
    var email = document.createTextNode(e);
    var phone = document.createTextNode(p);
    var address = document.createTextNode(a);

    td1.setAttribute("class", "content");
    td2.setAttribute("class", "content");
    td3.setAttribute("class", "content");
    td4.setAttribute("class", "content");
    
    td1.appendChild(name);
    td2.appendChild(email);
    td3.appendChild(phone);
    td4.appendChild(address);
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
});
