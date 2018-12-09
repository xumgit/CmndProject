var dialogIdSeed = 1000000000;
function jQueryValidatorWrapper(formId, rules, messages) {
    // Get an Id for the "<div>" to diaply the error messages.
    // The Id is made sure to be unique in the web page.
    var dialogId = "V_dia_log" + dialogIdSeed++;
    while ($("#" + dialogId).length != 0) {
        alert(dialogId);
        dialogId = "V_dia_log" + dialogIdSeed++;
    }

    // create the error message "div" and add it to the dom.
    // it will be use to display the validation error messages.
    var dialogText = "<div id='" + dialogId
            + "' title='Please correct the errors ...'>"
            + "<ul /></div>";
    $("body").append(dialogText);
    var $dialog = $("#" + dialogId);
    var $ul = $("#" + dialogId + ">ul");

    $dialog.dialog({
        autoOpen: false,
        modal: true,
        close: function (event, ui) {
            $ul.html("");
        }
    });

    // hook up the form, the validation rules, and messages with jQuery validate.
    var showErrorMessage = false;
    var validator = $("#" + formId).validate({
        onchange: true,
        rules: rules,
        messages: messages,
        errorPlacement: function (error, element) {
            if (showErrorMessage) {
                var li = document.createElement("li")
                li.appendChild(document
                    .createTextNode(error.html()));
                $ul.append(li);
            }
        },
        showErrors: function (errorMap, errorList) {
            this.defaultShowErrors();
            if ((errorList.length != 0) && showErrorMessage) {
                $dialog.dialog('open');
            }
        }
    });

    // This is the function to call whem make the validation
    this.validate = function () {
        showErrorMessage = true;
        var result = validator.form();
        showErrorMessage = false;

        return result;
    };
}