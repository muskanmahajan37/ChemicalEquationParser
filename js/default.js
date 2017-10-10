
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                
            } else {

            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        
    };

    app.start();
})();

var justFinishRunningChemicalEq = false;

function TypeOnElement(click_id) {
   // window.location.reload("./element/"+click_id+".htm");
}

function typeOnConsole() {
    justFinishRunningChemicalEq = false;
}
function cleanConsole() {
    if(justFinishRunningChemicalEq==true)
        document.getElementById("inputFormula").innerHTML = "";
}
