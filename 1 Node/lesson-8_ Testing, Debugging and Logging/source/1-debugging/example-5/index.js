// pause on exception
const getDescription = async () => {
    const description = 'Developed by Lectrum'; // A
    throw new Error('Booom!');
    return description; // B
};

// Create breakpoint on line 12
// 1. Step into
// 2. Step over
const getCopyright = async () => {
    const year = new Date().getFullYear();
    const description = await getDescription();
};

getCopyright();
