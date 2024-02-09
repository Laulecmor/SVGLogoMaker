const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});