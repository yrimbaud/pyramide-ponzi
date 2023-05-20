function detectPonzi() {
    let investmentReturns = document.getElementById("investmentReturns").checked;
    let recruitment = document.getElementById("recruitment").checked;
    let returnsConsistency = document.getElementById("returnsConsistency").checked;
    let realProduct = document.getElementById("realProduct").checked;
    let registered = document.getElementById("registered").checked;
    let transparent = document.getElementById("transparent").checked;
    let withdrawalPenalty = document.getElementById("withdrawalPenalty").checked;
    let aggressiveSales = document.getElementById("aggressiveSales").checked;
    let reinvestment = document.getElementById("reinvestment").checked;
    let hardToUnderstand = document.getElementById("hardToUnderstand").checked;

    if (
        investmentReturns &&
        recruitment &&
        returnsConsistency &&
        !realProduct &&
        !registered &&
        !transparent &&
        withdrawalPenalty &&
        aggressiveSales &&
        reinvestment &&
        hardToUnderstand
    ) {
        document.getElementById("result").innerHTML = "Il est possible que l'offre soit une pyramide de Ponzi.";
    } else {
        document.getElementById("result").innerHTML = "En se basant sur vos r&eacute;ponses, il semblerait que l'offre ne soit pas une pyramide de Ponzi.";
    }
}
