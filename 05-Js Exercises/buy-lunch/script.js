function buyLunch() {
    const names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe']
    let randomLunch = names[(Math.floor(Math.random() * names.length))];
    return randomLunch + ' is going to buy lunch today!';
}

buyLunch();