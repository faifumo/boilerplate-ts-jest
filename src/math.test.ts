import {sum, failCoverage} from './math';

test('should return the sum of two numbers given', () => {
  // Arrange
  const a = 1;
  const b = 2;
  const expected = 3;
    
  // Act
  const result = sum(a,b);
    
  // Assert
  expect(result).toBe(expected);
});

test('Fail coverage', () => {
  // Arrange
  const a = 1;
  const b = 2;
  const expected = 3;
     
  // Act
  const result = failCoverage(a,b, 'sum');
     
  // Assert
  expect(result).toBe(expected);
});