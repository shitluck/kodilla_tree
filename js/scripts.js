function drawTree(n) {
    for (var i = 1; i < n; i++) {
        
        var space = ' ';
        var star = "*";

        for (var j = 1; j < n-i; j++) {
            space += ' ';
        }

        for (var j = 1; j < i*2-1; j++) {
            star += '*';
        }

    console.log(space, star);
    }
}

drawTree(10);