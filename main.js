
function calculateBMI(){

    let height = document.getElementById('height').value;
    let weight = document.getElementById('bodyweight').value;

    let result = weight / Math.pow(height/100, 2);

    let total = result.toFixed(2);

    if (total < 18.5){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>You are considered underweight';
    }
    else if(total > 18.5 && total < 25){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>Your weight is considered normal.';
    }
    else if(total > 25 && total <30){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>You are considered overweight.';
    }
    else if(total > 30){
        document.getElementById("result").innerHTML = 'Your Body Mass Index (BMI) is ' +total+'.<br>Your are considered obese.';
    }

}

function calculateRM(){

    let weight = document.getElementById('weight').value;
    let reps = document.getElementById('reps').value;

    let result = weight / (1.0278 - 0.0278 * parseInt(reps));

    let total = result.toFixed(0);
    if(total > 0 && total < 500){
        document.getElementById("result").innerHTML = 'Your 1 rep max is approximately '+total+' KG.';
    }
    
}

function calculateCal(){

    let weight = document.getElementById('bodyweight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let activity = document.getElementById('activity').value;
    let bmr;
    let result;
    let total;

    if(gender == 1){
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    else if(gender == 2){
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    if(activity == 1){
        result = bmr * 1.2;
        total = result.toFixed(0);
        document.getElementById("result").innerHTML = 'Maintenance calories: '+total;
    }
    else if(activity == 2){
        result = bmr * 1.375;
        total = result.toFixed(0);
        document.getElementById("result").innerHTML = 'Maintenance calories: '+total;
    }
    else if(activity == 3){
        result = bmr * 1.55;
        total = result.toFixed(0);
        document.getElementById("result").innerHTML = 'Maintenance calories: '+total;
    }
    else if(activity == 4){
        result = bmr * 1.725;
        total = result.toFixed(0);
        document.getElementById("result").innerHTML = 'Maintenance calories: '+total;
    }
    
}