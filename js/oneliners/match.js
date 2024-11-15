const data = { type: 'circle', radius: 10 };
​
const result = match (data) {
  { type: 'circle', radius } => `Area: ${Math.PI * radius * radius}`,
  { type: 'square', side } => `Area: ${side * side}`,
  _ => 'Unknown shape'
};
​
console.log(result); // Output: Area: 314.1592653589793