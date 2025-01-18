function createPyramid(levels){
    const maxwidth = 2 * levels - 1;
    for(let row = 0; row < levels; row++){
        const stars = 2 * row + 1;
        const spaces = (maxwidth - stars) / 2;
        const line = ' '.repeat(spaces) + '*'.repeat(stars);
        console.log(line);
    }
}

createPyramid(10)
