class Shape {
    constructor() {
        this.color = "";
        this.text = "";
        this.textColor = "";
    }

    setColor(color) {
        this.color = color;
        return this; 
    }

    setText(text) {
        this.text = text;
        return this;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
        return this; 
    }
}

class Circle extends Shape {
    create() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`;
    }
}

class Square extends Shape {
    create() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`;
    }
}

class Triangle extends Shape {
    create() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`;
    }
}

module.exports = { Circle, Square, Triangle, Shape };