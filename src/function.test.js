import Functions from './functions';

const config = {
    3: "Fizz",
    5: "Buzz",
};

test("test convert", () => {
    let converted = Functions.convert(3, config)
    expect(converted).toEqual("Fizz");

    converted = Functions.convert(5, config)
    expect(converted).toEqual("Buzz");

    converted = Functions.convert(15, config)
    expect(converted).toEqual("FizzBuzz");

    converted = Functions.convert(7, config)
    expect(converted).toEqual("7");

    converted = Functions.convert(7, {})
    expect(converted).toEqual("7");
});

test("test getResult", () => {
    let result = Functions.getResult(2, 5, config)
    expect(result).toEqual(["2", "Fizz", "4", "Buzz"]);

    result = Functions.getResult(1, 4, {1:'Wizz'})
    expect(result).toEqual(["Wizz", "Wizz", "Wizz", "Wizz"]);

    result = Functions.getResult(1, 100, {})
    expect(result).toEqual(Array.from({length: 100}, (_,i) => (i + 1).toString()));

    expect(()=>{Functions.getResult(101, 102, config)}).toThrowError(new Error('out of range'));
});


