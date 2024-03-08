var chemMark = document.querySelector('#chem-mark');
var bioMark = document.querySelector('#bio-mark');
var pstMark = document.querySelector('#pst-mark');
var phyMark = document.querySelector('#phy-mark');
var islMark = document.querySelector('#isl-mark');
var cgMark = document.querySelector('#cg-mark');
var accMark = document.querySelector('#acc-mark');

var studentMarks = document.querySelector('.total-marks')
var studentPercentage = document.querySelector('.student-percentage')
var studentGrade = document.querySelector('.grade')

function getresult(){
    console.log(chemMark.value);
    console.log(bioMark.value);
    console.log(pstMark.value);
    console.log(phyMark.value);
    console.log(islMark.value);
    console.log(cgMark.value);
    console.log(accMark.value);

    var totalMarks = 700;
    var obtainedMarks = +chemMark.value + +bioMark.value + +pstMark.value + +phyMark.value + +islMark.value + +cgMark.value + +accMark.value;
    studentMarks.innerHTML = obtainedMarks;

    var sPercentage = obtainedMarks / totalMarks * 100;
    studentPercentage.innerHTML = sPercentage;

    if(sPercentage > 80){
        studentGrade.innerHTML = `A+`

    }else if(sPercentage > 70){
        studentGrade.innerHTML = `A`
    }else if(sPercentage > 60){
        studentGrade.innerHTML = `B`
    }else if(sPercentage > 50){
        studentGrade.innerHTML = `C`
    }
    else{
        studentGrade.innerHTML = `Sorry, You are Failed!`
    }
    
    
    
    
    
}