const toggle=document.querySelector('#toggle');
toggle.addEventListener('change', switchTheme);

function switchTheme(){
    if(toggle.checked){
        document.body.classList.add('dark');

    }else{
        document.body.classList.remove('dark');
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section-content");
    const sectionsArray = Array.from(sections);
    let currentIndex = 0;

    function showSection(index) {
        sectionsArray.forEach((section, i) => {
            if (i === index) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
        toggleArrowButtons();
    }

    function toggleArrowButtons() {
        if (currentIndex === 0) {
            document.getElementById("prev").classList.add("hide");
        } else {
            document.getElementById("prev").classList.remove("hide");
        }
        if (currentIndex === sectionsArray.length - 1) {
            document.getElementById("next").classList.add("hide");
        } else {
            document.getElementById("next").classList.remove("hide");
        }
    }

    function goToNextSection() {
        currentIndex = Math.min(currentIndex + 1, sectionsArray.length - 1);
        showSection(currentIndex);
    }

    function goToPreviousSection() {
        currentIndex = Math.max(currentIndex - 1, 0);
        showSection(currentIndex);
    }

    function addNextSection() {
        if (currentIndex < sectionsArray.length - 1) {
            const currentSection = sectionsArray[currentIndex];
            const nextSection = sectionsArray[currentIndex + 1];
            nextSection.classList.add("active");
            currentIndex++;
        }
        toggleArrowButtons();
    }

    showSection(currentIndex);

    document.getElementById("next").addEventListener("click", addNextSection);
    document.getElementById("prev").addEventListener("click", goToPreviousSection);
});


let initialLikeCount = localStorage.getItem('likeCountCars');
if (initialLikeCount === null) {
    initialLikeCount = '0';
    localStorage.setItem('likeCountCars', '0');
}
document.getElementById('likeCounterCars').textContent = initialLikeCount;

function likeBlog(blogType) {
    let likeCount = parseInt(localStorage.getItem('likeCount' + blogType)) || 0;
    const likeButton = document.getElementById('likeButton' + blogType);
    if (likeButton.classList.contains('liked')) {
        likeCount--;
        likeButton.classList.remove('liked');
    } else {
        likeCount++;
        likeButton.classList.add('liked');
    }
    document.getElementById('likeCounter' + blogType).textContent = likeCount;
    localStorage.setItem('likeCount' + blogType, likeCount.toString());
    return likeCount;
}

