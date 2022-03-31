'use strict';

(function() {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.navbar').classList.toggle('active');
        document.querySelector('.hamburger').classList.toggle('change');
    });
})();