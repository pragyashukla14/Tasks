document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#header-links .g-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            document.querySelectorAll('#header-links .g-link').forEach(link => link.classList.remove('active'));

            event.currentTarget.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const coursesLink = document.getElementById('courses-link');
    const classesLink = document.getElementById('classes-link');
    const subheading = document.querySelector('.SubHeading');
    const indicator = document.createElement('div');
    
    indicator.classList.add('active-indicator', 'active');
    indicator.id = 'courses-indicator'; 
    subheading.appendChild(indicator);

    coursesLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        indicator.id = 'courses-indicator';
    });

    classesLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        indicator.id = 'classes-indicator';
    });
});


function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}


function toggleAlerts() {
    var alertsDropdown = document.getElementById("alertsDropdown");
    if (alertsDropdown.style.display === "none" || alertsDropdown.style.display === "") {
        alertsDropdown.style.display = "block";
    } else {
        alertsDropdown.style.display = "none";
    }
}

function toggleAnnouncements() {
    var announcementsDropdown = document.getElementById("announcementsDropdown");
    if (announcementsDropdown.style.display === "none" || announcementsDropdown.style.display === "") {
        announcementsDropdown.style.display = "block";
    } else {
        announcementsDropdown.style.display = "none";
    }
}
