const numSquare = (num) => {
    let squared = num.map(num => (num * num));
    return squared;
}

console.log(numSquare([1, 2, 3]));