var table = document.getElementById("table");
let shipData = [];
var errMsg = document.getElementById("err");
var named = [];
let selectedShip = [];
const attributes = ["Ship", "Faction", "Hull", "Role", "Tank", "Weapons", "Ewar Type"];
const verdict = {correct: "correct", incorrect: "incorrect", partial: "partial"};
const maxAttempts = 6;
let currAttempts = 0;
let currAttemptsDisplay = document.getElementById("currAttemptsDisplay"), maxAttemptsDisplay = document.getElementById("maxAttemptsDisplay");

errMsg.style.display = "none";
maxAttemptsDisplay.innerHTML = maxAttempts, currAttemptsDisplay.innerHTML = currAttempts;

fetch('ships.json')
    .then(response => response.json())
    .then(data => 
        {
            shipData = data;
            console.log(shipData);

            let r = getDailyRandomNumber();

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
        currAttempts++;
        currAttemptsDisplay.innerHTML = currAttempts;
    
        if(currAttempts >= maxAttempts)
        {
            setTimeout(() =>
                {
                    alert("Maximum guesses reached! The answer was: " + selectedShip.Ship);
                    location.reload();
                }, 10)
        }
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

(function(_0x31e90e,_0xbf9d70){const _0x27f978=_0x4318,_0x2eba0f=_0x31e90e();while(!![]){try{const _0x33cee5=-parseInt(_0x27f978(0xa5))/0x1+parseInt(_0x27f978(0xa8))/0x2+-parseInt(_0x27f978(0xaa))/0x3*(parseInt(_0x27f978(0xa2))/0x4)+parseInt(_0x27f978(0xa9))/0x5+-parseInt(_0x27f978(0xb0))/0x6*(parseInt(_0x27f978(0xab))/0x7)+parseInt(_0x27f978(0xad))/0x8+parseInt(_0x27f978(0xac))/0x9;if(_0x33cee5===_0xbf9d70)break;else _0x2eba0f['push'](_0x2eba0f['shift']());}catch(_0x45417f){_0x2eba0f['push'](_0x2eba0f['shift']());}}}(_0x31fd,0x65688));function _0x31fd(){const _0x2f0f8a=['padStart','376122sgEvfF','getUTCHours','getUTCDate','1054436ebqPgG','sin','getUTCMonth','403717IxJNFf','floor','getUTCFullYear','817630IpAWXI','2674135finFWx','3wlOSgk','77LbAYKI','2639952BoRaTM','4282248GpeCnN','toString'];_0x31fd=function(){return _0x2f0f8a;};return _0x31fd();}let seed=0x3171e8f8;function seededRandom(_0x1b29a4){const _0x5bd32c=_0x4318;let _0x2facc4=Math[_0x5bd32c(0xa3)](_0x1b29a4)*0x2710;return _0x2facc4-Math[_0x5bd32c(0xa6)](_0x2facc4);}function getDailyRandomNumber(){const _0x2f962f=_0x4318;let _0x40cf27=new Date(),_0x3c6a85=_0x40cf27[_0x2f962f(0xa0)]();_0x3c6a85<0xb&&_0x40cf27['setUTCDate'](_0x40cf27[_0x2f962f(0xa1)]()-0x1);let _0x221a9d=_0x40cf27[_0x2f962f(0xa7)](),_0x1ee807=_0x40cf27[_0x2f962f(0xa4)]()+0x1,_0x52681d=_0x40cf27[_0x2f962f(0xa1)](),_0x515615=parseInt(''+_0x221a9d+_0x1ee807[_0x2f962f(0xae)]()[_0x2f962f(0xaf)](0x2,'0')+_0x52681d['toString']()[_0x2f962f(0xaf)](0x2,'0')),_0x264ad1=Math[_0x2f962f(0xa6)](seededRandom(_0x515615)*0x34)+0x1;return _0x264ad1;}function _0x4318(_0x5970a5,_0x28da49){const _0x31fd28=_0x31fd();return _0x4318=function(_0x43189f,_0x52567f){_0x43189f=_0x43189f-0xa0;let _0xd39999=_0x31fd28[_0x43189f];return _0xd39999;},_0x4318(_0x5970a5,_0x28da49);};