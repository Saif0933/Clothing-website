document.addEventListener('DOMContentLoaded', () => {
    // --- Slider Functionality ---
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (slider && slides.length > 0 && prevBtn && nextBtn) { // Check if elements exist
        let currentIndex = 0;
        const totalSlides = slides.length;

        // Set initial slider width
        slider.style.width = `${totalSlides * 100}%`;

        // Function to update slider position
        function updateSliderPosition() {
            // Calculate the percentage to translate
            const translatePercentage = -currentIndex * (100 / totalSlides);
            slider.style.transform = `translateX(${translatePercentage}%)`;

            // Optional: Disable/enable buttons at ends
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === totalSlides - 1;
        }

        // Event listeners for buttons
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                updateSliderPosition();
            }
            // Optional: Loop back to start
            // else {
            //     currentIndex = 0;
            //     updateSliderPosition();
            // }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
             // Optional: Loop back to end
            // else {
            //     currentIndex = totalSlides - 1;
            //     updateSliderPosition();
            // }
        });

        // Initialize slider position
        updateSliderPosition();

        // Optional: Automatic sliding
        // let autoSlideInterval;
        // function startAutoSlide() {
        //     autoSlideInterval = setInterval(() => {
        //         currentIndex = (currentIndex + 1) % totalSlides; // Loop
        //         updateSliderPosition();
        //     }, 5000); // Change slide every 5 seconds
        // }
        // function stopAutoSlide() {
        //     clearInterval(autoSlideInterval);
        // }
        // slider.addEventListener('mouseover', stopAutoSlide);
        // slider.addEventListener('mouseout', startAutoSlide);
        // startAutoSlide(); // Start auto sliding initially

    } else {
        console.warn("Slider elements not found. Slider functionality disabled.");
    }


    // --- Basic Hamburger Menu Toggle (Optional) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked (good for single-page nav)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    } else {
         console.warn("Hamburger menu elements not found.");
    }


    // --- Smooth Scrolling for Anchor Links (Optional) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's an ID link and not just "#"
            if (href.length > 1 && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault(); // Prevent default jump
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

}); // End DOMContentLoaded