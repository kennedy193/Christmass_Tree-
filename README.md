# Christmas Tree Project

This project generates a colorful ASCII-art Christmas tree in the terminal using JavaScript. The tree is customizable by specifying the number of layers, and each layer is color-coded for a festive look.

## Features
- Centered Christmas tree made of asterisk (`*`) characters.
- Colorful output using ANSI escape codes.
- Customizable number of tree layers.

## Prerequisites
To run this project, ensure you have:
- [Node.js](https://nodejs.org/) installed on your system.

## How to Run

1. **Clone or Download the Project**:
   Save the JavaScript file `app.js` on your computer.

2. **Open a Terminal**:
   Navigate to the directory where `app.js` is saved.

3. **Run the Script**:
   Execute the script using Node.js with the following command:
   ```bash
   node app.js
   ```

4. **View the Output**:
   The terminal will display a colorful Christmas tree with the specified number of layers.

## Example Output
For a tree with 10 layers, you will see something like this:
```
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
```
Each layer will be displayed in a different color.

## Customization
To customize the tree:
1. Open the `christmasTree.js` file in a text editor.
2. Modify the function call at the bottom of the file:
   ```javascript
   ChristmasTree(15); // Replace 15 with the desired number of layers
   ```
3. Save the file and re-run the script.

## How It Works
1. The `ChristmasTree` function calculates the spaces needed to center the tree and the number of asterisks for each layer.
2. It uses ANSI escape codes to add color to the tree.
3. Each layer's output is printed to the terminal.

## ANSI Colors Used
- **Red** (`\x1b[31m`)
- **Green** (`\x1b[32m`)
- **Yellow** (`\x1b[33m`)
- **Blue** (`\x1b[34m`)
- **Magenta** (`\x1b[35m`)
- **Cyan** (`\x1b[36m`)

The colors cycle through these values for each layer.

## License
This project is free to use and distribute. Feel free to modify it to suit your needs!

## Happy Coding and Merry Christmas! ☃️

