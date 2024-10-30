const animatedElements = document.querySelectorAll('.animate-on-scroll');

        function handleScroll() {
            animatedElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    element.classList.add('in-view');
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('DOMContentLoaded', handleScroll);