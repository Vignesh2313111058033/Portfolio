  window.onload = function () {
    const rainContainer = document.querySelector('.rain-container');

    function createRain() {
        if (!rainContainer || rainContainer.childElementCount > 150) return;

        const symbols = ['{', '}', '<', '>', '()', '=>', 'if', 'else', 'function', 'return', ';', '[', ']', '&&', '||', 
                        'else if', 'Threads', 'Python', 'Java', 'Django', 'SQL', 'CSS', 'HTML', 'C++', 'C#', 'Ruby', 
                        'Swift', 'Kotlin', 'PHP', 'Objective-C', 'Dart', 'Scala', 'Perl', 'JavaScript', 'TypeScript'];

        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        raindrop.style.left = Math.random() * 100 + 'vw';

        const fallTime = Math.random() * 2 + 2;
        raindrop.style.animationDuration = fallTime + 's';

        raindrop.style.fontSize = Math.random() * 10 + 10 + 'px';
        raindrop.style.opacity = Math.random() * 0.5 + 0.5;
        raindrop.style.color = Math.random() > 0.5 ? 'lime' : 'cyan';

        rainContainer.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, fallTime * 1000);
    }

    setInterval(createRain, 30);
};
function menu(){
    document.querySelector(".prime_page").style.display = "none";
    document.querySelector(".aling").style.display = "flex";
     
}
function skils(){
    document.querySelector(".aling").style.display = "none";
    document.querySelector(".skils").style.display = "flex";

}
function project(){
    document.querySelector(".aling").style.display = "none";
    document.querySelector(".projects").style.display = "flex";
}
function education(){
    document.querySelector(".aling").style.display = "none";
    document.querySelector(".education").style.display = "flex";
}
function contact(){
    document.querySelector(".aling").style.display = "none";
    document.querySelector(".contact").style.display = "flex";
}
function about(){
    document.querySelector(".aling").style.display = "none";
    document.querySelector(".profile").style.display = "flex";
}
function closeabout_1(){
    document.querySelector(".aling").style.display = "flex";
    document.querySelector(".skils").style.display = "none";
}
function closeabout_2(){
    document.querySelector(".aling").style.display = "flex";
    document.querySelector(".projects").style.display = "none";
}
function  closeabout_3(){
    document.querySelector(".aling").style.display = "flex";
    document.querySelector(".education").style.display = "none";
}
function closeabout_4(){
    document.querySelector(".aling").style.display = "flex";
    document.querySelector(".contact").style.display = "none";
}
function closeabout_5(){
    document.querySelector(".aling").style.display = "flex";
    document.querySelector(".profile").style.display = "none";
}
function back(){
    document.querySelector(".prime_page").style.display = "flex";
    document.querySelector(".aling").style.display = "none";
}
// Path to the PDF file stored in the project
const pdfFilePath = "VIGNESH_resume.pdf";  // Make sure this file exists in the correct location

// Set the preview source
document.getElementById("pdfPreview").src = pdfFilePath;

// Handle download button click
document.getElementById("downloadPdf").addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = pdfFilePath;
    a.download = "VIGNESH_resume.pdf"; // Sets the filename when downloaded
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
const pdfFilePath1 = "Completion Certificate _ SkillsBuild.pdf";

document.getElementById("pdfPreview1").src = pdfFilePath1;

// Handle download button click
document.getElementById("downloadPdf1").addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = pdfFilePath1;
    a.download = "Completion Certificate _ SkillsBuild.pdf"; // Sets the filename when downloaded
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
