class SwimmingOrder{
    constructor(){
        this.personalInformation();
        this.regularPackages();
        this.bonusPackages();
    }

    personalInformation(){
        var div_col = $('<div class="col-sm-6 mx-auto">');
        div_col.append('<p>1. Fill your personal information</p>');
        var div = $('<div class="mb-3">');
        $.getJSON("./index.json", function(json){
            $.each(json['personal-info'], function (i, item) {
                var i = $('<input class="form-control" type="text" name="' + item.name +'" placeholder="' + item.placeholder + '" required>');
                div.append(i);
            });
        });
        div_col.append(div);
        div_col.appendTo('#personal-information');
    }

    regularPackages(){
        var div_col = $('<div class="col-sm-6 mx-auto">');
        div_col.append('<p>2. Choose a package</p>');
        var div_list_group = $('<div class="list-group">');
        $.getJSON("./index.json", function (json) {
            $.each(json['regular'], function (i, item) {
                var button = $('<button type="button" class="list-group-item list-group-item-action">');
                button.append('<h5 class="mb-1">Package ' + item.name + '</h5>');
                button.append('<p class="mb-1">' + item.description + '</p>');
                var div_flex = $('<div class="d-flex w-100 justify-content-between">');
                div_flex.append(button);
                div_list_group.append(div_flex)
            });
        });
        div_col.append(div_list_group);
        div_col.appendTo('#regular-packages');
    }

    bonusPackages(){
        var div_col = $('<div class="col-sm-6 mx-auto">');
        div_col.append('<p>3. Choose a bonus</p>');
        var div_list_group = $('<div class="list-group">');
        $.getJSON("./index.json", function (json) {
            $.each(json['bonus'], function (i, item) {
                var button = $('<button type="button" class="list-group-item list-group-item-action">');
                button.append('<h5 class="mb-1">Bonus ' + item.name + '</h5>');
                button.append('<p class="mb-1">' + item.description + '</p>');
                var div_flex = $('<div class="d-flex w-100 justify-content-between">');
                div_flex.append(button);
                div_list_group.append(div_flex)
            });
        });
        div_col.append(div_list_group);
        div_col.appendTo('#bonus-packages');
    }

}

const order = new SwimmingOrder();
