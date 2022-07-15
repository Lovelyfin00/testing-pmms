let statesNaija = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
            "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe",
            "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
            "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Rivers", "Sokoto", 
            "Taraba", "Yobe", "Zamfara", "FCT"];

let selectStates = document.querySelector("#selectState");
let selectStates2 = document.querySelector("#selectState2");

for (let i =0; i < statesNaija.length; i++){
    let selectOptions = `<option value="${statesNaija[i]}">${statesNaija[i]}</option>`;
    selectStates.innerHTML += selectOptions
    selectStates2.innerHTML += selectOptions
}

// Calling API for Generator countries

let selectCountry = document.querySelector("#selectCountry")
let selectCountry2 = document.querySelector("#selectCountry2")

fetch('https://countriesnow.space/api/v0.1/countries/')
    .then((response) => response.json())
    .then((json) => {
    console.log(json.data)
    let storeData = json.data;
//   console.log(storeData)

  let countryHolder = ""
  storeData.forEach((element) => {
    // console.log(element.country)
    // console.log(index)
    countryHolder += `
        <option value = "${element.country}">${element.country}</option>
    `
    // <option value = "${index}">${element.country}</option>
  });
  selectCountry.innerHTML += countryHolder;
  selectCountry2.innerHTML += countryHolder;
  });



// Selecting the needed input in DOM
// PETROL GEN SECTION

let seePetrolSpec = []

let petrolGenBox = []
let petrolForm = document.querySelector("#petrolForm");
let petrolGenSec = document.querySelector("#petrolGen-sec");
let successMsg = document.querySelector("#success-text")

let petrolGenId = document.querySelector("#petrolGen-id");
let petrolGenModel = document.querySelector("#petrolGen-model");
let petrolGenPow = document.querySelector("#petrolGen-power");
let petrolGenType = document.querySelector("#petrolGen-type")
let petrolGenName= document.querySelector("#petrolGen-name");
let petrolGenAdd= document.querySelector("#petrolGen-add");


// Looping throungh to display the first 3 gens
function petrolGenUI(){
    let petrolGenString = ""
    for (let i=0; i<3; i++){
        petrolGenString += `
            <div class="col-md-6 col-lg-4 mb-3">
            <div class="card" style="width: 100%;">
                <div class="first-row d-flex align-items-center">
                    <div class="first-row-text ps-3"><h6 class="text">KH- Sumex Generator ${100 + i}</h6></div>
                </div>
                <div class="card-image d-flex justify-content-center align-items-center border border-1">
                    <div class="card-image-2">
                        <img src="./img/red-gen.png" class="card-img-top" alt="...">
                    </div>
                </div>
                <div class="info d-flex justify-content-between ps-3 mt-1">
                    <div class="address-display">
                        38 Afaha Uqua Rd,Eket , Akwa Ibom State
                    </div>
                    <div class="divider"></div>
                    <div class="status-indicator pe-3 ">
                        Online
                    </div>
                </div>
                <div class="card-body pb-4">
                <div class="row"> 
                    <div class="generator-specifications fw-bolder lh-sm">
                        <p>ID: <span class="fw-normal">EL479WCDJ4895KF045K045I56</span></p>
                        <p>Model: <span class="fw-normal">Sv 18000 CXS</span></p>
                        <p>Output Power: <span class="fw-normal">7.5KVA</span></p>
                        <p >Type: <span class="fw-normal">Sumex</span></p>
                    </div>
                </div>
                <div class="links d-flex justify-content-between align-items-center">
                    <div class="pb-2"><a href="#" class="card-link text-decoration-none links-1" onclick="seeOtherPetrolSpec()">See Specification</a></div>
                    <div class="pb-2"><button type="button" class="btn links-2 text-white">Manage Generator</button></div>
                </div>
                </div>
            </div>
            </div>
    `
    }  
    petrolGenSec.innerHTML = petrolGenString;
}
petrolGenUI()

// Adding even listener to the form in the modal

let petrolGenKva= document.querySelector("#petrolGen-kva");
let petrolGenStyle= document.querySelector("#petrolGen-style");
let petrolGenColor= document.querySelector("#petrolGen-color");
let petrolGenIgnit= document.querySelector("#petrolGen-ignition");
let petrolGenWeight= document.querySelector("#petrolGen-weight");
let petrolGenFreq= document.querySelector("#petrolGen-freq");
let petrolGenTank= document.querySelector("#petrolGen-tank");
let petrolGenPf= document.querySelector("#petrolGen-Pf");
let petrolGenLimit= document.querySelector("#petrolGen-limit");
let petrolGenSize= document.querySelector("#petrolGen-size");

petrolForm.addEventListener("submit", addPetrolFunc);

function addPetrolFunc(event){
    event.preventDefault();

    let IdValue = petrolGenId.value;
    let modelValue = petrolGenModel.value;
    let powerValue = petrolGenPow.value;
    let typeValue = petrolGenType.value;
    let nameValue = petrolGenName.value;
    let addValue = petrolGenAdd.value;

    let kvaValue = petrolGenKva.value;
    let stateValue = selectStates.value;
    let countryValue = selectCountry.value;
    let sizeValue = petrolGenSize.value;
    let styleValue = petrolGenStyle.value;
    let colorValue = petrolGenColor.value;
    let ignitValue = petrolGenIgnit.value;
    let weightValue = petrolGenWeight.value;
    let freqValue = petrolGenFreq.value;
    let tankValue = petrolGenTank.value;
    let pfValue = petrolGenPf.value;
    let limitVale = petrolGenLimit.value;

    seePetrolSpec.push(IdValue, modelValue, powerValue, typeValue, nameValue, addValue, kvaValue, stateValue, countryValue,
            styleValue, colorValue, ignitValue, weightValue, freqValue, tankValue, pfValue, limitVale, sizeValue);

    let genString = "";
    genString += `
            <div class="col-md-6 col-lg-4 mb-3">
            <div class="card" style="width: 100%;">
                <div class="first-row d-flex align-items-center">
                    <div class="first-row-text ps-3"><h6 class="text">${nameValue} ${IdValue}</h6></div>
                </div>
                <div class="card-image d-flex justify-content-center align-items-center border border-1">
                    <div class="card-image-2">
                        <img src="./img/red-gen.png" class="card-img-top" alt="...">
                    </div>
                </div>
                <div class="info d-flex justify-content-between ps-3 mt-1">
                    <div class="address-display">
                        ${addValue}
                    </div>
                    <div class="divider"></div>
                    <div class="status-indicator pe-3">
                        Online
                    </div>
                </div>
                <div class="card-body pb-4">
                <div class="row"> 
                    <div class="generator-specifications fw-bolder lh-sm">
                        <p>ID: <span class="fw-normal">EL479WCDJ4895KF045K045I56</span></p>
                        <p>Model: <span class="fw-normal">${modelValue}</span></p>
                        <p>Output Power: <span class="fw-normal">${powerValue}</span></p>
                        <p >Type: <span class="fw-normal">${typeValue}</span></p>
                    </div>
                </div>
                <div class="links d-flex justify-content-between align-items-center">
                    <div class="pb-2"><a href="#" class="card-link text-decoration-none links-1" onclick="seePetrolGen()">See Specification</a></div>
                    <div class="pb-2"><button type="button" class="btn links-2 text-white">Manage Generator</button></div>
                </div>
                </div>
            </div>
        </div>
    `

    petrolGenSec.innerHTML += genString

    successMsg.textContent = "Generator Successfully Added";
 

    // Pushing the genString into the empty array and an object of array
    
    petrolGenBox.push({
       petrolName: genString
    })
    
    localStorage.setItem("petrolName", JSON.stringify(petrolGenBox))
}  
 // Saving the array into localstorage


console.log(petrolGenBox)
console.log(seePetrolSpec)


console.log(petrolGenBox.length)

// Remove the success messge when the close button is clicked

let closeBtn = document.querySelector("#close-btn")

closeBtn.addEventListener("click", () => {
    successMsg.textContent = "";
})


// DIESEL GEN SECTION
// Selecting the DOM
let seeDieselSpec = []

let dieselGenBox = []
let dieselForm = document.querySelector("#dieselForm");
let dieselGenSec = document.querySelector("#dieselGen-sec");
let successMsg2 = document.querySelector("#success-text2")

let dieselGenId = document.querySelector("#dieselGen-id");
let dieselGenModel = document.querySelector("#dieselGen-model");
let dieselGenPow = document.querySelector("#dieselGen-power");
let dieselGenType = document.querySelector("#dieselGen-type")
let dieselGenName= document.querySelector("#dieselGen-name");
let dieselGenAdd= document.querySelector("#dieselGen-add")

// Looping throungh to display the first 3 deisel gens
function dieselGenUI(){
    let dieselGenString = ""
    for (let i=0; i<3; i++){
        dieselGenString += `
            <div class="col-md-6 col-lg-4 mb-3">
            <div class="card" style="width: 100%;">
                <div class="first-row d-flex align-items-center">
                    <div class="first-row-text ps-3"><h6 class="text">KH- Lister ${100 + i}</h6></div>
                </div>
                <div class="card-image d-flex justify-content-center align-items-center border border-1">
                    <div class="card-image-2">
                        <img src="./img/G12 1.png" class="card-img-top" alt="...">
                    </div>
                </div>
                <div class="info d-flex justify-content-between ps-3 mt-1">
                    <div class="address-display">
                        38 Afaha Uqua Rd,Eket , Akwa Ibom State
                    </div>
                    <div class="divider"></div>
                    <div class="status-indicator pe-3">
                        Online
                    </div>
                </div>
                <div class="card-body pb-4">
                <div class="row"> 
                    <div class="generator-specifications fw-bold lh-sm">
                        <p>ID: <span class="fw-normal">EL479WCDJ4895KF045K045I56</span></p>
                        <p>Model: <span class="fw-normal">Sv 18000 CXS</span></p>
                        <p>Output Power: <span class="fw-normal">7.5KVA</span></p>
                        <p >Type: <span class="fw-normal">Sumex</span></p>
                    </div>
                </div>
                <div class="links d-flex justify-content-between align-items-center">
                    <div class="pb-2"><a href="#" class="card-link text-decoration-none links-1" onclick="seeOtherDieselSpec()">See Specification</a></div>
                    <div class="pb-2"><button type="button" class="btn links-2 text-white">Manage Generator</button></div>
                </div>
                </div>
            </div>
        </div>
    `
    }  
    dieselGenSec.innerHTML = dieselGenString;
    console.log("diesel")
}

dieselGenUI()


// Selecting the other Inputs DOM

let dieselGenKva= document.querySelector("#dieselGen-kva");
let dieselGenStyle= document.querySelector("#dieselGen-style");
let dieselGenColor= document.querySelector("#dieselGen-color");
let dieselGenIgnit= document.querySelector("#dieselGen-ignition");
let dieselGenWeight= document.querySelector("#dieselGen-weight");
let dieselGenFreq= document.querySelector("#dieselGen-freq");
let dieselGenTank= document.querySelector("#dieselGen-tank");
let dieselGenPf= document.querySelector("#dieselGen-Pf");
let dieselGenLimit= document.querySelector("#dieselGen-limit");
let dieselGenSize= document.querySelector("#dieselGen-size");

// Adding even listener to the form in the modal

dieselForm.addEventListener("submit", addDieselFunc);

function addDieselFunc(event){
    event.preventDefault();

    let IdValue = dieselGenId.value;
    let modelValue = dieselGenModel.value;
    let powerValue = dieselGenPow.value;
    let typeValue = dieselGenType.value;
    let nameValue = dieselGenName.value;
    let addValue = dieselGenAdd.value;

    let kvaValue = dieselGenKva.value;
    let stateValue = selectStates2.value;
    let countryValue = selectCountry2.value;
    let sizeValue = dieselGenSize.value;
    let styleValue = dieselGenStyle.value;
    let colorValue = dieselGenColor.value;
    let ignitValue = dieselGenIgnit.value;
    let weightValue = dieselGenWeight.value;
    let freqValue = dieselGenFreq.value;
    let tankValue = dieselGenTank.value;
    let pfValue = dieselGenPf.value;
    let limitVale = dieselGenLimit.value;

    seeDieselSpec.push(IdValue, modelValue, powerValue, typeValue, nameValue, addValue, kvaValue, stateValue, countryValue,
            styleValue, colorValue, ignitValue, weightValue, freqValue, tankValue, pfValue, limitVale, sizeValue);


    let genString = "";
    genString += `
        <div class="col-md-6 col-lg-4 mb-3">
        <div class="card" style="width: 100%;">
            <div class="first-row d-flex align-items-center">
                <div class="first-row-text ps-3"><h6 class="text">${nameValue} ${IdValue}</h6></div>
            </div>
            <div class="card-image d-flex justify-content-center align-items-center border border-1">
                <div class="card-image-2">
                    <img src="./img/G12 1.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="info d-flex justify-content-between ps-3 mt-1">
                <div class="address-display">
                    ${addValue}
                </div>
                <div class="divider"></div>
                <div class="status-indicator pe-3">
                    Online
                </div>
            </div>
            <div class="card-body pb-4">
            <div class="row"> 
                <div class="generator-specifications fw-bold lh-sm">
                    <p>ID: <span class="fw-normal">EL479WCDJ4895KF045K045I56</span></p>
                    <p>Model: <span class="fw-normal">${modelValue}</span></p>
                    <p>Output Power: <span class="fw-normal">${powerValue}</span></p>
                    <p >Type: <span class="fw-normal">${typeValue}</span></p>
                </div>
            </div>
            <div class="links d-flex justify-content-between align-items-center">
                <div class="pb-2"><a href="#" class="card-link text-decoration-none links-1" onclick="seeDieselGen()">See Specification</a></div>
                <div class="pb-2"><button type="button" class="btn links-2 text-white">Manage Generator</button></div>
            </div>
            </div>
        </div>
        </div>
    `

    dieselGenSec.innerHTML += genString
    
    successMsg2.textContent = "Generator Successfully Added"; 

    // Pushing the genString into the empty array and an object of array
    
    dieselGenBox.push({
       dieselName: genString
    })   


    localStorage.setItem("dieselName", JSON.stringify(dieselGenBox))
}  

// Remove success message when button is clicked in diesel 

let closeBtn2 = document.querySelector("#close-btn2")
closeBtn2.addEventListener("click", () => {
    successMsg2.textContent = "";
})



// ALL THE LOCAL STORAGE CODES

// Storing to Local storage for Petrol Gen

let newObj = window.localStorage.getItem("petrolName")
let obejctShow = JSON.parse(newObj);
console.log(obejctShow)

for (let i=0; i<obejctShow.length; i++){
    // console.log(obejctShow[i].name)
    let obejctShowName = obejctShow[i].petrolName;
    petrolGenSec.innerHTML += obejctShowName;
}


// Storing to Local Storage for Diesel Gen

let newDieselObj = window.localStorage.getItem("dieselName")
let dieselObjShow = JSON.parse(newDieselObj);
console.log(dieselObjShow)

for (let i=0; i<dieselObjShow.length; i++){
    // console.log(obejctShow[i].name)
    let dieselObjShowName = dieselObjShow[i].dieselName;
    dieselGenSec.innerHTML += dieselObjShowName;
}

// See SPECIFICATION SCETION 

function seePetrolGen(){
    localStorage.setItem('seePetrolSpec', JSON.stringify(seePetrolSpec))
    window.location.href = 'see-spec.html'
}

function seeDieselGen(){
    localStorage.setItem('seeDieselSpec', JSON.stringify(seeDieselSpec))
    window.location.href = 'see-spec-diesel.html'
}


function seeOtherPetrolSpec(){
    window.location.href = 'see-spec.html'
}
function seeOtherDieselSpec(){
    window.location.href = 'see-spec.html'
}