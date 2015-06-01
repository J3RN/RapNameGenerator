"use strict";

/**
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {
    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
}


Generator.prototype.acronymize = function(name) {
    return name.split("").join(".").toUpperCase();
}

Generator.prototype.prependName = function(name) {
    return this.first_names[Math.floor(Math.random() * this.first_names.length)] + " " + name;
}

Generator.prototype.appendName = function(name) {
    return name + " " + this.last_names[Math.floor(Math.random() * this.last_names.length)];
}

Generator.prototype.generate = function(name) {
    var rand = Math.floor(Math.random() * 6);

    switch(rand) {
        case 0: return this.prependName(name);
        case 1: return this.appendName(name);
        case 2: return this.prependName(this.appendName(name));
        case 3: return this.appendName(this.acronymize(name));
        case 4: return this.prependName(this.acronymize(name));
        case 5: return this.prependName(this.appendName(this.acronymize(name)));
    }
}


$(document).ready(function() {

    var engine = new Generator;

    $("#enter").click(function() {
        var text = $("#user-input").val();
        if (text === "") {
            $(".error").show();
            $(".response").hide();
        } else {
            $(".error").hide();
            $(".response").show();
            $(".response").html(engine.generate(text));
        }
    })
});
