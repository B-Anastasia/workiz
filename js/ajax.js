$(document).ready(function () {

    $('#contact-form').submit(function (e) {
        e.preventDefault();
        const nameError =  !checkFunction(fieldName);
        const emailError =  !checkFunction(fieldEmail);
        const telError =  !checkFunction(fieldTel);

        if (!(nameError || emailError || telError)) {

            const url = $(this).attr('action');
            const type = $(this).attr('method');
            const person = {
                name: fieldName.value,
                email: fieldEmail.value,
                phone: fieldTel.value,
                message: fieldComment.value,
                workshop: fieldWorkshop.value
            };
            $.ajax({
                type: type,
                url: url,
                contentType: "application/json",
                processData: false,
                data: JSON.stringify(person),
            })
                .done(function(res) {
                    message_resp.innerHTML=res.message;
                    fieldName.value="";
                    fieldEmail.value="";
                    fieldTel.value="";
                    fieldComment.value="";
                    fieldWorkshop.value = "";
                    setTimeout(()=>{
                        message_resp.innerHTML="";
                    },4000)  ;

            })
                .fail(function() {
                    alert( "error" );
                })
        }
    });
});

