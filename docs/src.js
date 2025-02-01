var table = document.getElementById("table");
let shipData = [];
var errMsg = document.getElementById("err");
var named = [];
let selectedShip = [];
const attributes = ["Ship", "Faction", "Hull", "Role", "Tank", "Weapons", "Ewar Type"];
const verdict = {correct: "correct", incorrect: "incorrect", partial: "partial"};

errMsg.style.display = "none";

fetch('ships.json')
    .then(response => response.json())
    .then(data => 
        {
            shipData = data;
            console.log(shipData);

            let r = Math.floor(Math.random() * shipData.length  ) + 1;
            console.log(r);

            selectedShip = shipData.find(s => s.ShipID == r);
            console.log(selectedShip);
        })
    .catch(error => console.error('E'));

function onSubmit()
{
    errMsg.style.display = "none";
    let input = document.getElementById("shipInput").value;
    
    let shipMatch = shipData.find(s => s.Ship === input);
    let renamed = named.includes(input);

    if(shipMatch == selectedShip)
    {
        InsertTable();

        setTimeout(() =>
        {
            alert("Correct Guess!");
            location.reload();
        }, 10)
    }
    else if(shipMatch && !renamed)
    {
        InsertTable();

        named.push(shipMatch.Ship);
    }
    else if(renamed)
    {
        errMsg.innerHTML = "Ship name cannot be reused";
        errMsg.style.display = "contents";
    }
    else
    {
        errMsg.innerHTML = "Input is not a ship name";
        errMsg.style.display = "contents";
    }

    function InsertTable()
    {
        var row = table.insertRow(1);

        attributes.forEach(attr =>
        {
            if(shipMatch[attr] === selectedShip[attr])
                var v = "correct";
            else
                var v = "incorrect";

            let cell = row.insertCell(-1);
            cell.innerHTML = shipMatch[attr];
            cell.classList.add(verdict[v]);
        });
    }
}