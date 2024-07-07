document.addEventListener('DOMContentLoaded', function() {
    const box = document.getElementById('box');
    const marginInput = document.getElementById('margin');
    const borderInput = document.getElementById('border');
    const paddingInput = document.getElementById('padding');

    marginInput.addEventListener('input', function() {
        box.style.margin = `${marginInput.value}px`;
    });

    borderInput.addEventListener('input', function() {
        box.style.borderWidth = `${borderInput.value}px`;
    });

    paddingInput.addEventListener('input', function() {
        box.style.padding = `${paddingInput.value}px`;
    });
});
