const getDescription = () => {
    const description = 'Developed by Lectrum'; // A
    return description; // B
};

const updateName = () => {};

// Create breakpoint on line
// 1. Step into
// 2. Step over
const getCopyright = () => {
    const year = new Date().getFullYear();
    const description = getDescription();
    updateName(`${description} ${year}`); // C
};

getCopyright();
