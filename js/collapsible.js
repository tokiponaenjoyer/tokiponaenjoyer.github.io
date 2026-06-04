document.querySelectorAll('.collapsible').forEach(el => {
  const fullText = el.textContent;
  const maxLength = 65; //character limit for truncated collapsible text

  // Store full text and create truncated version
  let truncated = fullText.slice(0, maxLength).trim() + '...';
  let isExpanded = false;

  // Set initial truncated text
  el.textContent = truncated;

  el.addEventListener('click', () => {
    if (isExpanded) {
      el.textContent = truncated;
    } else {
      el.textContent = fullText;
    }
    isExpanded = !isExpanded;
  });
});