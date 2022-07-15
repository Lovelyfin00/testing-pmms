function seeDieselGen(){
    let dieselSpec = localStorage.getItem('seeDieselSpec');
    let dieselSpecValue = JSON.parse(dieselSpec);
    console.log(dieselSpecValue)
    document.querySelector("#address").textContent = dieselSpecValue[5];
    document.querySelector("#gen-name").textContent = dieselSpecValue[4];
    document.querySelector("#ID").textContent = dieselSpecValue[0];
    document.querySelector("#model").textContent = dieselSpecValue[1];
    document.querySelector("#size").textContent = dieselSpecValue[17];
    document.querySelector("#type").textContent = dieselSpecValue[3];
    document.querySelector("#voltage").textContent = dieselSpecValue[2];
    document.querySelector("#state").textContent = dieselSpecValue[7];
    document.querySelector("#address2").textContent = dieselSpecValue[5];
    document.querySelector("#kva").textContent = dieselSpecValue[6];
    document.querySelector("#style").textContent = dieselSpecValue[9];
    document.querySelector("#color").textContent = dieselSpecValue[10];
    document.querySelector("#ignit").textContent = dieselSpecValue[11];
    document.querySelector("#country").textContent = dieselSpecValue[8];
    document.querySelector("#weight").textContent = dieselSpecValue[12];
    document.querySelector("#freq").textContent = dieselSpecValue[13];
    document.querySelector("#tank").textContent = dieselSpecValue[14];
    document.querySelector("#limit").textContent = dieselSpecValue[16];
    document.querySelector("#pf").textContent = dieselSpecValue[15];
}
seeDieselGen()