// Change navbar background on scroll
window.onscroll = function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load news dynamically
const newsList = document.getElementById('news-list');
let newsData = [];

function loadNews() {
    newsData.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.content}</p>
            <a href="#" class="btn">Read More</a>
        `;
        newsList.appendChild(newsItem);
    });
}

function loadMoreNews() {
    const additionalNews = [
        { title: "New Campus Facilities", content: "State-of-the-art facilities are now open for students." },
        { title: "Alumni Meet 2024", content: "Join us for the upcoming alumni meet and reconnect with old friends." }
    ];
    newsData = [...newsData, ...additionalNews];
    loadNews();
}

window.onload = () => {
    newsData = [
        { title: "Research Breakthrough", content: "Our university researchers have made a groundbreaking discovery." },
        { title: "New Semester Begins", content: "Welcome to the new academic year!" }
    ];
    loadNews();
};
