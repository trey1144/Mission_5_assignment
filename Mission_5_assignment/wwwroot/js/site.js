
$("#btnSubmit").click(function () {
    let iHours = $("#numHours").val();

    if (iHours < 1) {
        alert("Please enter a number greater than 1 to see calculated total!");
        return;
    }

    let iRate = $("#numRate").val();
    let iTotal = iHours * iRate;
    $("#txtTotal").val("$" + iTotal);
})