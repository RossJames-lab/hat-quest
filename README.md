# Find Your Hat Game

## Overview
Welcome to the "Find Your Hat" game! In this interactive terminal game, you'll navigate a player through a field full of holes to find your lost hat. Be careful not to fall into any holes or step outside of the field!

## How to Play
1. Navigate to the directory containing the game files.
2. Run the game by executing the `main.js` file with Node.js.
    ```
    node main.js
    ```
3. You'll be prompted to input directions (up, down, left, or right) to navigate the player on the field.
4. Move the player by entering the desired direction and pressing Enter.
5. Continue navigating until you find your hat, fall into a hole, or step outside of the field.
6. If you find your hat, congratulations! You win the game.
7. If you fall into a hole or step outside of the field, the game ends and you lose.

## Technologies Used
- **JavaScript**: The game logic is implemented in JavaScript, making use of classes, methods, and control flow statements to create the game's functionality.
- **Node.js**: The game is executed using Node.js, allowing it to run in the terminal environment.
- **Prompt-sync**: The `prompt-sync` module is used to prompt the user for input in the terminal synchronously, allowing for a smooth game experience.

## Concepts Covered
- **Object-Oriented Programming (OOP)**: The game is structured using classes to represent the field and its properties, allowing for encapsulation and modularity.
- **Two-Dimensional Arrays**: The field is represented as a two-dimensional array, with each cell containing a character representing the player, hat, hole, or field.
- **Game Loop**: The game runs in a loop, continuously prompting the user for input and updating the game state until a win or loss condition is met.
- **Randomization**: The `generateField()` method randomly generates the field layout, placing the hat and holes at random positions within the field.
- **Error Handling**: The game includes error handling to prevent the player from moving outside of the field boundaries and to handle invalid input.

## Enjoy the Game!
Have fun playing the "Find Your Hat" game! Can you navigate the field and find your hat without falling into any holes?
