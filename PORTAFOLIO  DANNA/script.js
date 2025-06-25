document.addEventListener('DOMContentLoaded', function() {
  const dynamicTexts = document.querySelectorAll('.dynamic-text');
  dynamicTexts.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      }
    }
    typeWriter();
  });
}); 