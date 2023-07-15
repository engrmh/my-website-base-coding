const $ = document
const skilProgress = $.getElementById('mySkilProgress')
const webDev = $.getElementById('webDevInsert')
const uiDesign = $.getElementById('uiDesign')
const myCert = $.getElementById('myCert')
const webDebBtn = $.getElementById('webDebBtn')
const uiDesignBtn = $.getElementById('uiDesignBtn')
const setIPAddress = $.getElementById('ipAddress')

window.addEventListener('load' , () => {
    getIPAdsress()
})

// My Skils
mySkils.forEach((skil) => {
    skilProgress.insertAdjacentHTML('beforeend' , `
        <div class="col-6 col-md-4 my-2">
            <h6 class="text-light ms-2 text-start fs-md-6 skilTitle">${skil.title}</h6>
            <div class="progress bg-secondary">
                <div class="progress-bar backGradient" role="progressbar" aria-label="Basic example" style="width: ${skil.progresive}%" aria-valuenow="${skil.progresive}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    `)
})

// project developed
myProjects.forEach((proj) => {
  webDev.insertAdjacentHTML('beforeend' , `
    <div class="col-6 col-md-4 col-lg-3">
      <a href="${proj.link}" class="text-decoration-none" target="_blank">
        <img src="${proj.image}" alt="${proj.title}" class="img-fluid w-auto">
        <h6 class="d-flex justify-content-center align-items-center pt-4 fs-6 px-3 text-center text-white">${proj.title}</h6>
      </a>
    </div>
  `)
})

// ui design
myDesign.forEach((design) => {
    uiDesign.insertAdjacentHTML('beforeend' , `
        <div class="col-6 col-md-4 col-lg-3">
            <a href="${design.link}" class="text-decoration-none">
                <img src="${design.image}" alt="${design.title}" class="img-fluid w-auto">
                <h6 class="d-flex justify-content-center align-items-center pt-4 fs-6 px-3 text-center text-white">${design.title}</h6>
            </a>
        </div>
    `)
})

//for up the site
webDebBtn.classList.remove('text-light')
webDebBtn.classList.add('btn-primary')
webDev.classList.remove('d-none')

uiDesignBtn.classList.remove('btn-primary')
uiDesignBtn.classList.add('text-light')
uiDesign.classList.add('d-none')
///////

webDebBtn.addEventListener('click' , () => {
    webDebBtn.classList.remove('text-light')
    webDebBtn.classList.add('btn-primary')
    webDev.classList.remove('d-none')

    uiDesignBtn.classList.remove('btn-primary')
    uiDesignBtn.classList.add('text-light')
    uiDesign.classList.add('d-none')
})
uiDesignBtn.addEventListener('click' , () => {
    webDebBtn.classList.add('text-light')
    webDebBtn.classList.remove('btn-primary')
    webDev.classList.add('d-none')

    uiDesignBtn.classList.add('btn-primary')
    uiDesignBtn.classList.remove('text-light')
    uiDesign.classList.remove('d-none')
})

// certificatin
// myCertificates.forEach((item) => {
//   myCert.insertAdjacentHTML('beforeend' , `
//   <a href="${item.link}" target="_blank" class="col-4 col-lg-3 text-decoration-none mb-4 pt-2">
//     <img src="${item.image}" alt="${item.title}" class="img-fluid w-auto h-75 text-center">
//     <h6 class="d-flex justify-content-center align-items-center pt-4 fs-6 px-3 text-white text-center">${item.title}</h6>
//   </a>
//   `)
// })
myCertificates.forEach((cert) => {
    myCert.insertAdjacentHTML('beforeend' , `
        <div class="col-6 col-md-4 col-lg-3 pb-1 mb-1 d-flex flex-column justify-content-center align-items-center">
            <a href="${cert.link}" class="text-decoration-none">
                <img src="${cert.image}" alt="${cert.title}" class="img-fluid w-auto h-75">
                <h6 class="text-center pt-2 text-white">${cert.title}</h6>
            </a>
        </div>
    `)
})

function getIPAdsress() {
    fetch('https://geo.ipify.org/api/v2/country?apiKey=at_1zh5mRWPcBoSBLLMINplAOmtLN8gN')
        .then(res => res.json())
        .then(res => {
            setIPAddress.innerHTML = 'Your IP Address: ' + res.ip
            console.log(res);
        })
}



import './alert.js'
import { myCertificates , myProjects , myDesign , mySkils} from "./dataBase.js";
