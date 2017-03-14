



function loadHandler() {
    console.log('page loaded');

    // Bootstrap code to enable popover on popover elements
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover(); 
    });

    console.log(document.styleSheets);
}

function checkValidation() {
    myForm.checkValidity();
    if (myForm.myNumberInput.validity.rangeUnderflow) {
        console.log($('#myNumberInput'));
        drip.play();
//        $('#myNumberInput').popover({placement:top});
//        $('#myNumberInput').popover('show');
        //myForm.myNumberInput.setCustomValidity('blah');
        //myForm.reportValidity();
        //console.log(myForm.myNumberInput.validity);
    }
}