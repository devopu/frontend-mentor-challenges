let questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        let faq = question.parentElement;

        if (faq.classList.contains('active')) {
            faq.classList.remove('active');
            return;
        }

        questions.forEach(question => {
            question.parentElement.classList.remove('active');
        })

        faq.classList.add('active');
    })
})