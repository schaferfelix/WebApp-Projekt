document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const query = input.value.trim();
        if (!query) return;

        // Redirect to searchview.html with query
        window.location.href = `searchview.html?q=${encodeURIComponent(query)}`;
    });

    // Optional: Allow Enter key to trigger search
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            form.dispatchEvent(new Event('submit'));
        }
    });
});