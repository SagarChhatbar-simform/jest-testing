function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
    console.log(items[index]);
  }
}

test('mock functions', () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
})

test("mock property", () => {

  const myMock = jest.fn();

  const a = new myMock();
  a.name = "a";
  const b = {};
  b.name = "b";
  const bound = myMock.bind(b);
  bound();
  console.log(myMock.mock.contexts);

})


test("mock function", () => {

  const someMockFunction = jest.fn(() => "return value");

  someMockFunction('first arg', 'second arg');

  // The function was called exactly once
  expect(someMockFunction.mock.calls.length).toBe(1);

  // The first arg of the first call to the function was 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

  // The second arg of the first call to the function was 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

  // The return value of the first call to the function was 'return value'
  expect(someMockFunction.mock.results[0].value).toBe('return value');

  const someMockConstructor = jest.fn();
  const a = new someMockConstructor();
  a.name = "test"
  const b = new someMockConstructor();

  // This function was instantiated exactly twice
  expect(someMockConstructor.mock.instances.length).toBe(2);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(someMockConstructor.mock.instances[0].name).toEqual('test');

  // The first argument of the last call to the function was 'test'
  // expect(someMockFunction.mock.lastCall[0]).toBe('test');
})


test("mock return values",() => {
  const myMock = jest.fn();
  console.log(myMock());

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
})

test("mock functional continuation-passing style",()=>{
  const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

console.log(result);
console.log(filterTestFn.mock.calls); 
console.log(filterTestFn.mock.calls[1][0]); 
})