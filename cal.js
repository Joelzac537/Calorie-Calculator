$("#checkcalorieButton").click(function() {
    $("#checkcalorie").show(100);
    var date = new Date();
    $("#date").html(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
    $("#body").hide(100);
    $("#dash").hide(100);
    $("#call").hide(100);
    $("#loginpage").hide(100);

});

$("#closecheck").click(function() {
    $("#checkcalorie").hide(100);
    $("#body").show(100);
});

$("#loginpage").ready(function() {
    $("#loginpage").hide(100);
});


$("#login").click(function() {
    $("#loginpage").show(100);
    $("#body").hide(100);
    $("#checkcalorie").hide(100);
    $("#call").hide(100);
    $("#dash").hide(100);
});

$("#body").ready(function() {
    $("#dash").hide(100);
    $("#loginpage").hide(100);
    $("#checkcalorie").hide(100);
    $("#call").hide(100);
});


$("#checkcalorie").ready(function() {
    $("#checkcalorie").hide(100);
});

$("#about").click(function() {
    $("#dash").show(100);
    $("#body").hide(100);
    $("#checkcalorie").hide(100);
    $("#call").hide(100);
    $("#loginpage").hide(100);
});

$("#dash").ready(function() {
    $("#dash").hide(100);
});

$("#close").click(function() {
    $("#loginpage").hide(100);
    $("#body").show(100);
});

$("#contact").click(function() {
    $("#call").show(100);
    $("#body").hide(100);
    $("#checkcalorie").hide(100);
    $("#loginpage").hide(100);
    $("#dash").hide(100);
});

$("#signin").click(function() {
    $("#loginpage").hide(100);
    $("#user_log").show(100);
});


$("#create").click(function() {
    $("#loginpage").hide(100);
    $("#user_log").show(100);
});

$("#home").click(function() {
    $("#body").show(100);
    $("#dash").hide(100);
});

$("#logout").click(function() {
    $("#body").show(100);
    $("#loginpage").hide(100);
});



$("#calculate").click(function() {

    var name = $("#name").val();
    var age = $("#age").val();
    var gender = $("#gender").val();
    var weight = $("#weight").val();
    var height = $("#height").val();
    var calorie = $("#calculate").val();
    var date = new Date();
    $("#date").html(date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());

    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(weight);
    console.log(height);
    console.log(calorie);

    firestore.collection(name).doc().set({
            Name: name,
            Age: age,
            Gender: gender,
            Weight: weight,
            Height: height,
            Calorie: calorie
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

    let calories = 0;
    if (gender == 'Female') {
        //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age   
        calories = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    } else {
        calories = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    }

    document.getElementById("results").innerHTML = calories;

});

$("#contact").click(function() {
    $("#email").show(100);
    $("#body").hide(100);

});