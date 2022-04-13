import {
  asyncForEach,
  asyncMap,
  asyncFilter,
  asyncReduce,
} from '../index';

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('asyncForEach', () => {
  it('should iterate through a list', async () => {
    type TestElement = {
      value: number;
    };

    const testArray: TestElement[] = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
    ];

    await asyncForEach<TestElement>(
      testArray,
      async (element: TestElement) => {
        element.value += 10;
      }
    );

    expect(testArray).toEqual<TestElement[]>([
      { value: 11 },
      { value: 12 },
      { value: 13 },
    ]);
  });

  it('should iterate through a list sequentially', async () => {
    type TestElement = {
      value: string;
      sleepTime: number;
    };

    const testInput: TestElement[] = [
      { value: 'a', sleepTime: 30 },
      { value: 'b', sleepTime: 10 },
      { value: 'c', sleepTime: 20 },
    ];
    const parallelTestOutput: string[] = [];
    const sequentialTestOutput: string[] = [];

    const createTestPredicate = (output: string[]) =>
      async (element: TestElement) => {
        await sleep(element.sleepTime);
        output.push(element.value);
      };
    
    // Sanity check: iterate through the list in parallel first...
    await Promise.all(testInput.map(createTestPredicate(parallelTestOutput)));

    expect(parallelTestOutput).toEqual<string[]>(['b', 'c', 'a']);

    // ...then iterate through the list sequentially
    await asyncForEach<TestElement>(
      testInput,
      createTestPredicate(sequentialTestOutput)
    );

    expect(sequentialTestOutput).toEqual<string[]>(['a', 'b', 'c']);
  });

  it('should return a promise when finished', async () => {
    type TestElement = {
      sleepTime: number;
    };
    
    const testArray: TestElement[] = [
      { sleepTime: 10 },
      { sleepTime: 20 },
      { sleepTime: 30 },
    ];

    expect.assertions(1);

    const finished = (callback: jest.Mock<any, any>) => {
      callback();
    };
    
    await asyncForEach<TestElement>(
      testArray,
      async (element: TestElement) => {
        await sleep(element.sleepTime);
      }
    )
      .then(() => {
        const finish = jest.fn();
        finished(finish);
        expect(finish).toHaveBeenCalled();
      })
      .catch(_error => {
        fail('it should not reach this point');
      });
  });

  it('should be able to fail part-way through', async () => {
    type TestElement = {
      sleepTime: number;
    };
    
    const testArray: TestElement[] = [
      { sleepTime: 10 },
      { sleepTime: 20 },
      { sleepTime: 30 },
    ];

    expect.assertions(1);
    
    await asyncForEach<TestElement>(
      testArray,
      async (element: TestElement) => {
        await sleep(element.sleepTime);
        if (element.sleepTime >= 20) {
          throw new Error('test error message');
        }
      }
    )
      .then(() => {
        fail('it should not reach this point');
      })
      .catch(error => {
        expect(error.message).toBe('test error message');
      });
  });
});

describe('asyncMap', () => {
  it('should call a function on every element in a list', async () => {
    type TestElement = {
      value: number;
    };

    const testInput: TestElement[] = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
    ];

    const testOutput: number[] = await asyncMap<TestElement, number>(
      testInput,
      async (element: TestElement) => element.value + 10
    );

    expect(testOutput).toEqual<number[]>([11, 12, 13]);
  });

  it('should process a list in parallel', async () => {
    type TestElement = {
      id: string;
      value: number;
      sleepTime: number;
    };

    const testInput: TestElement[] = [
      { id: 'a', value: 1, sleepTime: 30 },
      { id: 'b', value: 2, sleepTime: 10 },
      { id: 'c', value: 3, sleepTime: 20 },
    ];
    
    const testOutputIds: string[] = [];
    const testOutput = await asyncMap<TestElement, number>(
      testInput,
      async (element: TestElement) => {
        await sleep(element.sleepTime);
        testOutputIds.push(element.id);
        return element.value + 10;
      }
    );

    expect(testOutput).toEqual<number[]>([11, 12, 13]);
    expect(testOutputIds).toEqual<string[]>(['b', 'c', 'a']);
  });
});

describe('asyncFilter', () => {
  it('should filter a list based on a filtering predicate', async () => {
    type TestElement = {
      value: number;
    };

    const testInput: TestElement[] = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
    ];

    const testOutput: TestElement[] = await asyncFilter<TestElement>(
      testInput,
      async (element: TestElement) => element.value >= 2
    );

    expect(testOutput).toEqual<TestElement[]>([
      { value: 2 },
      { value: 3 },
    ]);
  });

  it('should process a list in parallel', async () => {
    type TestElement = {
      id: string;
      value: number;
      sleepTime: number;
    };

    const testInput: TestElement[] = [
      { id: 'a', value: 1, sleepTime: 30 },
      { id: 'b', value: 2, sleepTime: 10 },
      { id: 'c', value: 3, sleepTime: 20 },
    ];
    
    const testOutputIds: string[] = [];
    const testOutput = await asyncFilter<TestElement>(
      testInput,
      async (element: TestElement) => {
        await sleep(element.sleepTime);
        testOutputIds.push(element.id);
        return element.value >= 2;
      }
    );

    expect(testOutput).toEqual<TestElement[]>([
      { id: 'b', value: 2, sleepTime: 10 },
      { id: 'c', value: 3, sleepTime: 20 },
    ]);
    expect(testOutputIds).toEqual<string[]>(['b', 'c', 'a']);
  });
});

describe('asyncReduce', () => {
  it('should reduce a list using a reducer predicate', async () => {
    type TestElement = {
      value: number;
    };

    const testInput: TestElement[] = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
    ];

    const testOutput: number = await asyncReduce<TestElement, number>(
      testInput,
      async (previous: number, current: TestElement) => previous + current.value,
      0
    );

    expect(testOutput).toEqual<number>(6);
  });

  it('should iterate through a list sequentially', async () => {
    type TestElement = {
      id: string;
      value: number;
      sleepTime: number;
    };

    const testInput: TestElement[] = [
      { id: 'a', value: 1, sleepTime: 30 },
      { id: 'b', value: 2, sleepTime: 10 },
      { id: 'c', value: 3, sleepTime: 20 },
    ];
    
    const testOutputIds: string[] = [];
    const testOutput = await asyncReduce<TestElement, number>(
      testInput,
      async (previous: number, current: TestElement) => {
        await sleep(current.sleepTime);
        testOutputIds.push(current.id);
        return previous + current.value;
      },
      0
    );

    expect(testOutput).toEqual<number>(6);
    expect(testOutputIds).toEqual<string[]>(['a', 'b', 'c']);
  });
});
