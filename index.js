let mobileSlider  = document.getElementById("slider1");
let desktopSlider  = document.getElementById("slider2");
let mobileOutput = document.getElementById("value1");
let desktopOutput = document.getElementById("value2");
let mobilePageviews = document.getElementById("views1");
let desktopPageviews = document.getElementById("views2");

let toggle = document.getElementById("toggle");
let monthlyPrice = document.querySelectorAll("#monthly");
let annuallyPrice = document.querySelectorAll("#annually");
let annuallyPrice1 = document.querySelectorAll("#annually1");

let monthValue = ["0", "4", "8", "12", "16", "20", "24", "28", "32", "36"];
let pageViews = ["", "5K ", "10K ", "50K ", "100K ", "250K ", "500K ", "700K ", "850K ", "1M "];

// Display the default slider value
mobileOutput.innerHTML = "$" + parseInt(mobileSlider.value) + ".00";
desktopOutput.innerHTML = "$" + parseInt(desktopSlider.value) + ".00";

// Update the current slider value on mobile design
mobileSlider.oninput = function() {
    mobileOutput.innerHTML = "$" + parseInt(this.value) + ".00";

    for (let i = 0; i < monthValue.length; i++) {
        if (this.value === monthValue[i]) {
            mobilePageviews.innerHTML = pageViews[i];
        }
        if (toggle.checked) {
            mobileOutput.innerHTML = "$" + ((mobileSlider.value) - ((mobileSlider.value) / 4)) + ".00";
        } 
        if (!toggle.checked) {
            mobileOutput.innerHTML = "$" + mobileSlider.value + ".00";
        } 
    }
}

// Update the current slider value on desktop design
desktopSlider.oninput = function() {
    desktopOutput.innerHTML = "$" + this.value + ".00";

    for (let i = 0; i < monthValue.length; i++) {
        if (this.value === monthValue[i]) {
            desktopPageviews.innerHTML = pageViews[i];
        }
        if (toggle.checked) {
            desktopOutput.innerHTML = "$" + ((desktopSlider.value) - ((desktopSlider.value) / 4)) + ".00";
        } 
        if (!toggle.checked) {
            desktopOutput.innerHTML = "$" + desktopSlider.value + ".00";
        }
    }
}