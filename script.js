function calculateAge(){
    const today = new Date();
    const birthdateInput = document.getElementById('birthDate').value;
    const birthDateParts = birthdateInput.split('-');
    const birthDay = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1;
    const birthYear = birthDateParts[2];

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) =>{
        return(Object.prototype.toString.call(date) ===  "[object Date]" && !isNaN(date)
        );
    };
    if(!isValidDate(birthDate)){
        alert("Invalid Date Format: please Enter a valid date in DD-MM-YYYY format.");

    }
    const ageInMilliseconds = today - birthDate;
    const ageInseconds = Math.floor(ageInMilliseconds/1000);
    const ageInminutes = Math.floor(ageInseconds/60);
    const ageInhours= Math.floor(ageInminutes/60);
    const ageIndays = Math.floor(ageInhours/24);
    const ageInweeks = Math.floor(ageIndays/7);
    const ageInmonths = Math.floor(ageIndays/ 30.4355);
    const ageInyears = Math.floor(ageIndays/365.25);

    const resultContainer = document.getElementById('resultContainer');

    const resut = document.getElementById('result');
    resut.innerHTML = `

    <div class="result-item">
        <h3>Age:</h3>
        <p>${ageInyears} years ${ageInmonths % 12} Months ${ageIndays % 30} days</p>          
    </div>
    
    <div class="result-item">
        <h3>Months Passed:</h3>
        <p>${ageInmonths}</p>
    </div>

    <div class="result-item">
         <h3>Weeks Passed:</h3>
        <p>${ageInweeks}</p>
    </div>
    
                    
    <div class="result-item">
        <h3>Days Passed:</h3>
        <p>${ageIndays}</p>
    </div>

    <div class="result-item">
        <h3>Hours Passed:</h3>
        <p>${ageInhours}</p>
    </div>

    <div class="result-item">
        <h3>Minutes Passed:</h3>
        <p>${ageInminutes}</p>
    </div>

    <div class="result-item">
        <h3>Seconds Passed:</h3>
        <p>${ageInseconds}</p>
    </div>
    `;
    resultContainer.style.display = "block";

    

    
}



const ageCalculatorForm = document.getElementById('ageCalculator');
ageCalculatorForm.addEventListener('submit', (event)=>{
    event.preventDefault();



    calculateAge();
});