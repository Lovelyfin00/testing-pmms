function seeOtherPetrolSpec(){

}
seeOtherPetrolSpec()

function seeOtherDieselSpec(){
    document.getElementById('diesel-img').src = `./img/G12 1.png`;
}
seeOtherDieselSpec()

function seePetrolGen(){
// petrol Gen SPace
    let petrolSpec = localStorage.getItem('seePetrolSpec');
    let petrolSpecValue = JSON.parse(petrolSpec);
    console.log(petrolSpecValue)
    document.querySelector("#address").textContent = petrolSpecValue[5];
    document.querySelector("#gen-name").textContent = petrolSpecValue[4];
    document.querySelector("#ID").textContent = petrolSpecValue[0];
    document.querySelector("#model").textContent = petrolSpecValue[1];
    document.querySelector("#size").textContent = petrolSpecValue[17];
    document.querySelector("#type").textContent = petrolSpecValue[3];
    document.querySelector("#voltage").textContent = petrolSpecValue[2];
    document.querySelector("#state").textContent = petrolSpecValue[7];
    document.querySelector("#address2").textContent = petrolSpecValue[5];
    document.querySelector("#kva").textContent = petrolSpecValue[6];
    document.querySelector("#style").textContent = petrolSpecValue[9];
    document.querySelector("#color").textContent = petrolSpecValue[10];
    document.querySelector("#ignit").textContent = petrolSpecValue[11];
    document.querySelector("#country").textContent = petrolSpecValue[8];
    document.querySelector("#weight").textContent = petrolSpecValue[12];
    document.querySelector("#freq").textContent = petrolSpecValue[13];
    document.querySelector("#tank").textContent = petrolSpecValue[14];
    document.querySelector("#limit").textContent = petrolSpecValue[16];
    document.querySelector("#pf").textContent = petrolSpecValue[15];
}

seePetrolGen()



