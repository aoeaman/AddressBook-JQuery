$(document).ready(function () {
    $("#a1").click(function () {
        $("#homepage").show("fast").siblings("div").hide();
        $("#contactpanel div").css("background-color", "white");
    });
    $("#a2").click(function () {
        $("#add").toggle("fast").siblings("div").hide();
        $("#add-button").show().siblings("button").hide();
        $("#contactpanel div").css("background-color", "white");
    });

    $("#delete").on("click", function () {
        Delete();
        let element = $("#" + SelectedContact).next().attr("id");
        if (element == undefined) {
            element = $("#" + SelectedContact).prev().attr("id");   
            if (element == undefined) {
                $("#" + SelectedContact).remove();
                $("#a1").trigger("click");
                return;
            }
            else {
                $("#" + SelectedContact).remove();
                $.showContact(element);
            }
        }     
        else {
            $("#" + SelectedContact).remove();
            $.showContact(element);
        }

    });

    $("#edit").on("click", function () {
        $("#add").show("fast").siblings("div").hide();
        $("#update-button").show().siblings("button").hide();
        let Person = contacts.find(c => c.id == SelectedContact);
        $("#enteredname").val(Person.Name);
        $("#email").val(Person.Email);
        $("#mobile").val(Person.Mobile);
        $("#landline").val(Person.Landline);
        $("#websute").val(Person.Website);
        $("#address").val(Person.Address);
    });

    $("#add-button").on("click", function (){
        let Person = Insert(new User);
        $.ContactTamplate(Person.id, Person.Name, Person.Mobile, Person.Email);
        $.resetForm();
    });

    $("#update-button").on("click", function () {
        let Person = getContact(SelectedContact);
        $.getValuesFromForm(Person);
        $.updateContactPanel(Person.id, Person.Name, Person.Mobile, Person.Email);
        $.resetForm();
    });

    $.resetForm = function () {
        $(".form").trigger("reset");
    }

    $.getValuesFromForm = function (user) {
        user.Name = $("#enteredname").val();
        user.Email = $("#email").val();
        user.Mobile = $("#mobile").val();
        user.Landline = $("#landline").val();
        user.Website = $("#website").val();
        user.Address = $("#address").val();
    }

    $.updateContactPanel = function (ID, Name, Mobile, Email) {
        $("#" + ID + " .divname").text(Name);
        $("#" + ID + " .divphone").text(Mobile);
        $("#" + ID + " .divemail").text(Email);

        $("#" + SelectedContact).trigger("click");
    }

    $.ContactTamplate = function (ID, Name, Mobile, Email) {
        let newDiv = $('<div/>', { id: ID, class: 'contact' });
        newDiv.append($('<label class=divname />').text(Name));
        newDiv.append($('<label class=divemail />').text(Email));
        newDiv.append($('<label class=divphone />').text(Mobile));

        newDiv.appendTo("#contactpanel");
        newDiv.bind("click", function () {
            $.showContact(ID);
        });
    }
    $.showContact = function (ID) {
        SelectedContact = ID;
        $("#info").hide();
        $("#" + SelectedContact).css("background-color", "lightskyblue").siblings('div').css("background-color", "white");

        let Person = getContact(ID);

        $("#info").show("fast").siblings("div").hide();
        $("#username").text(Person.Name);
        $("#usermailid").text(Person.Email);
        $("#usermobile").text(Person.Mobile);
        $("#userlandline").text(Person.Landline);
        $("#userwebsite").text(Person.Website);
        $("#useraddress").text(Person.Address);
    }
});



