![react-tsuki](https://img.shields.io/badge/React-Component%20Library-blue)
![react-tsuki](https://img.shields.io/badge/TypeScript-Ready-brightgreen)
![react-tsuki](https://img.shields.io/badge/License-MIT-yellow)
![react-tsuki](https://github.com//alxgb5/react-tsuki/workflows/CI%20for%20Pull%20Requests/badge.svg)

## Introduction

**react-tsuki** is a versatile React component library with utility hooks and functions, built with TypeScript. It aims to provide developers with reusable, well-tested components and utilities to streamline their development process. All components support the `sx` prop for easy styling.

## Features

- **React Components**: A set of reusable, customizable React components.
- **Utility Hooks**: A collection of custom hooks to simplify state management and side effects in React.
- **Utility Functions**: Handy utility functions for common programming tasks.
- **TypeScript Support**: Fully typed with TypeScript to enhance developer experience and code quality.
- **`sx` Prop**: All components support the `sx` prop for easy styling.

## Installation

You can install react-tsuki via npm or yarn:

```bash
npm install react-tsuki
```

or

```bash
yarn add react-tsuki
```

## Usage

### React Components

Import and use the available components in your React application.

```tsx
import { Button } from "react-tsuki";

const App = () => (
  <div>
    <Button
      label="Click Me"
      onClick={() => alert("Button clicked!")}
      sx={{ backgroundColor: "blue", color: "white" }}
    />
  </div>
);
```

### Utility Hooks

Leverage custom hooks to manage state and side effects efficiently.

`useFetch`

```tsx
import { useFetch } from "react-tsuki/hooks";

const FetchComponent = () => {
  const { data, loading, error } = useFetch("https://api.example.com/data");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{JSON.stringify(data)}</div>;
};
```

### Utility Functions

Utilize the provided utility functions to handle common tasks.

`capitalize`

```tsx
import { capitalize } from "react-tsuki/utils";

const text = "hello world";
const capitalizedText = capitalize(text);
console.log(capitalizedText); // Output: Hello world
```

#### Available Hooks

    •	useToggle: Toggle boolean state.
    •	useLocalStorage: Sync state with localStorage.
    •	usePrevious: Get the previous state value.
    •	useWindowSize: Get window dimensions.
    •	useFetch: Fetch data with loading and error states.
    •	usePost: Send POST requests.
    •	useDelete: Send DELETE requests.
    •	usePut: Send PUT requests.
    •	usePatch: Send PATCH requests.
    •	useGet: Send GET requests.
    •	useFetchWithCancel: Fetch data with cancellation.
    •	useRetryFetch: Retry fetch on failure.
    •	useFetchOnMount: Fetch data on mount.
    •	useFetchInterval: Fetch data at intervals.
    •	useClickOutside: Detect clicks outside an element.
    •	useDebouncedValue: Debounce a value.
    •	useHover: Detect hover state.

#### Available Utilities

    •	capitalize: Capitalize the first letter of a string.
    •	deepClone: Deep clone an object.
    •	debounce: Debounce a function.
    •	throttle: Throttle a function.
    •	formatDate: Format a date.
    •	mergeObjects: Merge multiple objects recursively.
    •	isEmpty: Check if an object or array is empty.
    •	randomString: Generate a random string.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

Enjoy building with react-tsuki! 🎉
