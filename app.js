function checkTrasportType() {
    var rtn = false;
    var checked = 0;
    for (var i = 0; i < checkboxForm.trasportType.length; i++) {
        if (checkboxForm.trasportType[i].checked) {
            checked++;
        }
    }

    if (checked != 0) {
        rtn = true;

        var alertMsg = ''
        if (checked == 1) {
            alertMsg += 'Mezzo di trasporto: '
        }
        else {
            alertMsg += 'Mezzi di trasporto: '
        }

        let checkedLocal = checked
        for (var i = 0; i < checkboxForm.trasportType.length; i++) {
            if (checkboxForm.trasportType[i].checked) {
                if (checked == 1 || checkedLocal == 1) {
                    alertMsg += checkboxForm.trasportType[i].value 
                }
                else if (checkedLocal == 2) {
                    alertMsg += checkboxForm.trasportType[i].value + ' e '
                } 
                else {
                    alertMsg += checkboxForm.trasportType[i].value + ', '
                }

                checkedLocal--;
            }
        }
    }
    else {
        alertMsg = 'Seleziona almeno un\'opzione!'
    }

    alert(alertMsg)
    return rtn;
}