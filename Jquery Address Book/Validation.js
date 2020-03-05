function Validatephonenumber(inputtxt) {
    let phoneno = /([+]{1}\d{1,3}[.-\s])([0-9]{10})$/;
    if ((inputtxt.match(phoneno)))
    {
        return true;
    }
    else {
        return false;
    }
}

function Validateemail(inputtxt) {
    let email = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    if ((inputtxt.match(email))) {
        return true;
    }
    else {
        return false;
    }
}

function ValidateName(inputtxt) {
    let Name = /^[a-zA-Z  ]+$/
    if ((inputtxt.match(Name))) {
        return true;
    }
    else {
        return false;
    }
}