import {sum} from './sum'

test('should return the sum of two numbers given', () => {
    // arrange
    const a = 1;
    const b = 2;
    const expected = 3;
    
    // Act
	const result = sum(a,b)
    
    // Assert
    expect(result).toBe(expected);
});