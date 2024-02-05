//A function named getFullYear that will return the current year
export function getFullYear() {
    return new Date().getFullYear();
}

// Create a function named getFooterCopy
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}
