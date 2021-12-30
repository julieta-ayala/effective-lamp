var package = "";
var bonus = "";
var child_name = "";
var division = "";
var phone = "";
var parent = "";

function getData(callback) {
    $.ajax({
        url: "/info",
        success: callback
    });
}

function loadData(json) {
    loadPinfo(json);
    loadPackages(json);
    loadBonus(json);
    submit();
}

function loadPinfo(json) {
    var div = $('<div class="mb-3">');
    for (var key in json['personal-info']){
        var i = $('<input type="text" id="' + json["personal-info"][key].name +'" placeholder="' + json["personal-info"][key].placeholder + '* " required>');
        div.append(i);
    }
    div.appendTo('#pinfo');
}

function loadPackages(json) {
    var ul = $('<ul class="list-group" id="packages-ul">');
    for (var key in json["regular"]) {
        var li = $('<li class="list-group-item">' + json["regular"][key].name + '</li>');
        ul.append(li);
    }
    ul.appendTo('#packages');
    
    $('#packages-ul li').on('click', function () {
        package = $(this).html();
    });
}

function loadBonus(json) {
    var ul = $('<ul class="list-group" id="bonus-ul">');
    for (var key in json["bonus"]) {
        var li = $('<li class="list-group-item">' + json["bonus"][key].name + '</li>');
        ul.append(li);
    }
    ul.appendTo('#bonus');

    $('#bonus-ul li').on('click', function () {
        bonus = $(this).html();
    });
}

function submit(callback) {
    $.ajax({
        type: "POST",
        url: "/submit",
        data: {
            "name": child_name,
            "division": division,
            "phone": phone,
            "parent": parent,
            "package": package,
            "bonus": bonus
        },
        success: callback,
        dataType: "text"
    });
}

function submitAlert(data) {
    alert(data);
}

$('#submit').on('click', function () {
    child_name = document.getElementById("name").value;
    division = document.getElementById("division").value;
    phone = document.getElementById("phone").value;
    parent = document.getElementById("parent").value;
    submit(submitAlert);
});

getData(loadData);
    
/* $(document).ready(function () {
    getData(loadData);
}); */