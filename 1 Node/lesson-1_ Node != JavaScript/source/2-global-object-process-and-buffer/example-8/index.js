if (!process.release.lts) {
    throw new Error('Wrong version!');
}

console.log('Hello World!', process.release.lts);
