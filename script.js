document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch courses from Express server backend
    fetchCourses();

    // 2. Handle Student Registration Form Submit
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = registerForm.querySelector('input[type="text"]').value;
            const emailInput = registerForm.querySelector('input[type="email"]').value;

            alert(`Thank you, ${nameInput}! Your registration for ICT Price Action Academy has been received.`);
            registerForm.reset();
        });
    }
});

async function fetchCourses() {
    try {
        const response = await fetch('/api/courses');
        const courses = await response.json();
        
        console.log('ICT Courses loaded from server:', courses);
    } catch (error) {
        console.error('Error fetching course data:', error);
    }
}
