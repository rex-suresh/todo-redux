const initialTodos = {
  nextTodoID: 8,
  todoData: {
    1: {
      nextItemID: 5,
      name: 'Learn stuff',
      items: [
        { itemID: 1, description: 'ReactJS', isDone: true },
        { itemID: 2, description: 'redux', isDone: false },
        { itemID: 3, description: 'typeScript', isDone: false },
        { itemID: 4, description: 'Unit testing with RTL', isDone: false },
      ],
    },
    2: {
      nextItemID: 6,
      name: 'Things to learn in ReactJS',
      items: [
        { itemID: 1, description: 'Components', isDone: true },
        { itemID: 2, description: 'Class Components', isDone: true },
        { itemID: 3, description: 'functional Components', isDone: true },
        { itemID: 4, description: 'Hooks', isDone: true },
        { itemID: 5, description: 'Reducer', isDone: true },
      ],
    },
    3: {
      nextItemID: 5,
      name: 'Things to learn in Redux',
      items: [
        { itemID: 1, description: 'reducer Stores', isDone: true },
        { itemID: 2, description: 'Provider and store', isDone: true },
        { itemID: 3, description: 'Slice reducers', isDone: true },
        { itemID: 4, description: 'reduce thunks', isDone: false },
      ],
    },
    4: {
      nextItemID: 4,
      name: 'Things to learn in React Native',
      items: [
        { itemID: 1, description: 'Deep linking', isDone: false },
        { itemID: 2, description: 'Push notification', isDone: false },
        { itemID: 3, description: 'Routing Navigation', isDone: false },
      ],
    },
    5: {
      nextItemID: 5,
      name: 'Unit testing in React',
      items: [
        { itemID: 1, description: 'Basic component testing', isDone: false },
        { itemID: 2, description: 'Component testing at multiple state', isDone: false },
        { itemID: 3, description: 'jest testing', isDone: false },
        { itemID: 4, description: 'RTL concepts', isDone: false },
      ],
    },
    6: {
      nextItemID: 3,
      name: 'Things to learn Native push notification',
      items: [
        { itemID: 1, description: 'Firebase', isDone: false },
        { itemID: 2, description: 'APNs', isDone: false },
      ],
    },
    7: {
      nextItemID: 7,
      name: 'GraphQl, Apollo',
      items: [
        { itemID: 1, description: 'Architecture', isDone: false },
        { itemID: 2, description: 'Application components', isDone: false },
        { itemID: 3, description: 'Type system', isDone: false },
        { itemID: 4, description: 'Resolver, Mutation, Validation', isDone: false },
        { itemID: 5, description: 'Apollo client', isDone: false },
        { itemID: 6, description: 'Caching', isDone: false },
      ],
    },
  }
};

export default initialTodos;