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



function one(){
    document.querySelector(".circle").style.display = "none";
    document.querySelector(".about").style.display = "flex";
    
     
}

function closeabout_1(){

    document.querySelector(".about").style.display = "none";
    document.querySelector(".circle").style.display = "flex";

    
}
function closeabout_2(){

    document.querySelector(".projects").style.display = "none";
    document.querySelector(".circle").style.display = "flex";

    
}
function closeabout_3(){

    document.querySelector(".education").style.display = "none";
    document.querySelector(".circle").style.display = "flex";

    
}
function closeabout_4(){

    document.querySelector(".contact").style.display = "none";
    document.querySelector(".circle").style.display = "flex";

    
}

function three(){
    document.querySelector(".projects").style.display = "flex";
    document.querySelector(".about").style.display = "none";
}
function two(){
    document.querySelector(".education").style.display = "flex";
    document.querySelector(".about").style.display = "none";
} 
function four(){
    document.querySelector(".contact").style.display = "flex";
    document.querySelector(".about").style.display = "none";
}
function profile(){
    document.querySelector(".profile").style.display = "flex";
    document.querySelector(".about").style.display = "none";
}
function closeabout_5(){
    document.querySelector(".profile").style.display = "none";
}
function primary(){
    document.querySelector(".main_head").style.display = "none";
    document.querySelector(".circle").style.display = "flex";
}
function back(){
    document.querySelector(".circle").style.display = "none";
    document.querySelector(".main_head").style.display = "flex";
}