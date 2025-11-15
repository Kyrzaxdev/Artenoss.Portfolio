document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const loadDuration = 900; // 0.9 секунди

    setTimeout(() => {
        // 1. Приховуємо прелоадер
        preloader.classList.add('hidden'); 
        // 2. Показуємо основний контент з анімацією
        mainContent.classList.add('loaded');

        // 3. Через пів секунди видаляємо прелоадер і дозволяємо прокрутку
        setTimeout(() => {
            if(preloader) preloader.remove(); 
            document.body.style.overflow = 'auto'; 
        }, 500); 

    }, loadDuration);
});