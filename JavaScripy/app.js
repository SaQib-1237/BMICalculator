

window.onload = () => {
    const  button = document.querySelector('#btn');
    button.addEventListener ('click' , calculateBmi); 
}

function calculateBmi () {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height< 0 )
    {
        result.innerText = 'Please Provide a Valid Height';
        return;
    }
    else if (!weight || isNaN(weight) || weight < 0 )
        {
            result.innerText = 'Please Provide a Valid Weight';
            return;
        }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi < 16 ){
        result.innerText = 'Severely UnderWeight : ' + bmi;
    }
    else if ( bmi >= 16 && bmi <= 18){
        result.innerText =  'UnderWeight : ' + bmi;
    } 
    else if (bmi >= 18 && bmi <= 24){
        result.innerText = 'Normal : ' + bmi;
    }
    else if (bmi >= 25 && bmi <= 29){
        result.innerText = 'OverWeight : ' + bmi;
    }
    else if (bmi >= 30 && bmi <= 34){
        result.innerText = 'Moderatrely Obese : ' + bmi;
    }
    else if (bmi >= 35 && bmi <= 39){
        result.innerText = 'severely Obese : ' + bmi;
    }
    else if (bmi >= 40 ){
        result.innerText = 'Morbidly Obese : ' + bmi;
    }
}