function toggleAccordion(header) {
    const content = header.nextElementSibling; // Get the next sibling (the content)
    const isActive = header.classList.contains('active');

    // Toggle the clicked header
    if (isActive) {
        header.classList.remove('active');
        content.style.display = 'none'; // Hide the content
    } else {
        header.classList.add('active');
        content.style.display = 'block'; // Show the content
    }
}