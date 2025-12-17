console.log(100 + 50); // Addition

console.log("Hello, " + "world!"); // String concatenation

const a = 10;
console.log(a * 5); // Multiplication
console.log(20, 'Hello', true);
console.log(20 - 5); // Subtraction

console.error('Alert'); // Error message

console.warn('Warning!'); // Warning message

console.table({ name: 'Alice', age: 30 }); // Table display

console.group('My Group');
console.log('Inside the group');
console.groupEnd();

const styles1 = 'padding: 10px; background-color: yellow; color: red; font-size: 20px;';


const styles2 = 'padding: 5px; background-color: white; color: green; font-weight: bold; text-decoration: underline; font-style: italic; font-size: 16px;';


console.log('%cStyled Text', styles1); // Styled console log

console.log('%cInvisible Text', styles2); // Invisible text in console
