document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll<HTMLElement>('#header-links .g-link').forEach(link => {
        link.addEventListener('click', function(event: Event) {
            event.preventDefault();

            document.querySelectorAll<HTMLElement>('#header-links .g-link').forEach(link => link.classList.remove('active'));

            (event.currentTarget as HTMLElement).classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const coursesLink = document.getElementById('courses-link') as HTMLElement;
    const classesLink = document.getElementById('classes-link') as HTMLElement;
    const subheading = document.querySelector('.SubHeading') as HTMLElement;
    const indicator = document.createElement('div');

    indicator.classList.add('active-indicator', 'active');
    indicator.id = 'courses-indicator'; 
    subheading.appendChild(indicator);

    coursesLink.addEventListener('click', function(event: Event) {
        event.preventDefault(); 
        indicator.id = 'courses-indicator';
    });

    classesLink.addEventListener('click', function(event: Event) {
        event.preventDefault(); 
        indicator.id = 'classes-indicator';
    });
});





