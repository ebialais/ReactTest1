import Functions from './functions';

test("test convert", () => {
    let converted = Functions.convert(3)
    expect(converted).toEqual("Fizz");

    converted = Functions.convert(5)
    expect(converted).toEqual("Buzz");

    converted = Functions.convert(15)
    expect(converted).toEqual("FizzBuzz");

    converted = Functions.convert(7)
    expect(converted).toEqual("7");
});

test("test getResult", () => {
    let result = Functions.getResult(2, 5)
    expect(result).toEqual(["2", "Fizz", "4", "Buzz"]);

    expect(()=>{Functions.getResult(101, 102)}).toThrowError(new Error('out of range'));
});


