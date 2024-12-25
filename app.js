function ChristmasTree(n) {
    const colors = [
        "\x1b[31m", 
        "\x1b[32m", 
        "\x1b[33m", 
        "\x1b[34m", 
        "\x1b[35m", 
        "\x1b[36m", 
    ];
    const resetColor = "\x1b[0m"; // Reset to default color

    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i); // Spaces before stars to center the tree
        let stars = "*".repeat(i * 2 - 1); // Stars for the current layer

        // Pick a random color for each layer
        let color = colors[i % colors.length];

        console.log(spaces + color + stars + resetColor);
    }
}


ChristmasTree(10);
