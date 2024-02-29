const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray) {
    this.field = fieldArray;
    this.row = 0;
    this.col = 0;
  }

  print() {
    for (let row of this.field) {
      console.log(row.join(''));
    }
  }

  // Method to check if the move is within bounds
  isInBounds(row, col) {
    return row >= 0 && col >= 0 && row < this.field.length && col < this.field[0].length;
  }

  // Method to check if the player has won
  isWin() {
    if (!this.isInBounds(this.row, this.col)) {
      return false; // Player is out of bounds, cannot win
    }
    return this.field[this.row][this.col] === hat;
  }
  

  // Method to check if the player has lost
  isLose() {
    return this.field[this.row][this.col] === hole || !this.isInBounds(this.row, this.col);
  }

  // Method to handle user input and update player position
  move(direction) {
    switch (direction) {
      case 'up':
        this.row -= 1;
        break;
      case 'down':
        this.row += 1;
        break;
      case 'left':
        this.col -= 1;
        break;
      case 'right':
        this.col += 1;
        break;
      default:
        console.log('Invalid move!');
        break;
    }
  }

  // Method to run the main game loop
  playGame() {
    this.print();
    while (true) {
      const direction = prompt('Which way? (up, down, left, right): ');
      this.move(direction);
      if (this.isWin()) {
        console.log('Congratulations! You found your hat!');
        break;
      }
      if (this.isLose()) {
        console.log('Game over! You fell into a hole or went out of bounds.');
        break;
      }
      this.field[this.row][this.col] = pathCharacter; // Mark the visited path with *
      this.print();
    }
  }

  // Static method to generate a random field
  static generateField(height, width, percentage) {
    const field = [];
    const totalTiles = height * width;
    const numHoles = Math.floor((totalTiles * percentage) / 100);

    // Initialize field with fieldCharacter
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(fieldCharacter);
      }
      field.push(row);
    }

    // Place hat randomly
    const hatRow = Math.floor(Math.random() * height);
    const hatCol = Math.floor(Math.random() * width);
    field[hatRow][hatCol] = hat;

    // Place holes randomly
    for (let k = 0; k < numHoles; k++) {
      let holeRow, holeCol;
      do {
        holeRow = Math.floor(Math.random() * height);
        holeCol = Math.floor(Math.random() * width);
      } while (field[holeRow][holeCol] !== fieldCharacter); // Ensure hole is not placed on hat or player
      field[holeRow][holeCol] = hole;
    }

    // Ensure player doesn't start at hat position
    if (field[0][0] === hat) {
      field[0][0] = fieldCharacter;
    }

    return field;
  }
}

const myField = new Field(Field.generateField(5, 5, 20));
myField.playGame();
