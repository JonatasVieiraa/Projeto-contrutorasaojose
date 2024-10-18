document.querySelectorAll('.faq_button').forEach(button => {
    button.addEventListener('click', () => {
        const faqBody = button.closest('.faq_item').querySelector('.collapse');
        faqBody.classList.toggle('show');
        button.setAttribute('aria-expanded', faqBody.classList.contains('show'));
    });
});