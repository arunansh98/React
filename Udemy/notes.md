# Functional State Updates

Functional State Updates can be used whenever the new value of the state depends on the old value of state. We can override the setter function like below :-

const [counter, setCounter] = useState(0);

const handleClick = () => {
setCounter(currentCounter => {
if(currentCounter > 10){
return 20;
}
else {
currentCounter + 1;
}
})
}
here the currentCounter variable contains the most upto date value of the counter state, so that even if there is some delay and the actual counter state is not still updated, we can use this variable to access the future value of counter that will be updated after rerender.

Note :- This can be an issue only if the state updates occur really quickly

# Delayed State Updates

function Accordion({ items }) {
const [expandedIndex, setExpandedIndex] = useState(-1);

const handleClick = (index) => {
if (expandedIndex === index) {
setExpandedIndex(-1);
} else {
setExpandedIndex(index);
}
};
if we click the accordion header using some script in our browser console by inspecting the accordion header like this ,

$0.click() $0.click()
ideally if the accordion is expanded, two clicks on the header should again expand the accordion.

But what actually happens is that React takes some time to load the component and before the component is rendered again, the click event is captured by the handleClick event handler in which still the expandedIndex === index , causing it again to set the expandedIndex as -1 which in turn again closes the accordion.

# Adding a Pause for Testing

baseQuery: fetchBaseQuery({
// function to make a pre-configured version of fetch.
baseUrl: "http://localhost:3005",
fetchFn: async (...args) => {
// REMOVE FOR PRODUCTION
await pause(1000);
return fetch(...args);
},
}),
here inside fetchFn we can override and customize the default fetch that is being used by the redux toolkit query.

# Invalidates Tags

        invalidatesTags: (result, error, user) => {
          return [{ type: "Albums", id: user.id }];
        },

whatever invalidate tags means that whenever the mutation is successful, which request identified by which tag we want to invalidate. When the tag is invalidated for the request, the re fetching of that request occurs automatically wherever that request is used.

      addAlbums: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "Albums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),

here once the request is successful for this mutation, whatever tags are mentioned in the invalidatesTags array will be invalidated. We are invalidating tags based on the user.id. (we don't want to fetch the albums associated to all the users when the albums associated to a specific user is only updated)

# Provides Tags

      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          return [{ type: "Albums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums", // this url will be appended to the base url
            params: {
              userId: user.id, // for query params
            },
            method: "GET",
          };
        },
      }),

here providesTags will generate unique tags for all the requests based upon the user.id.

# Refetching with Tags

Tag system is used to mark certain queries as 'out of date' after specific mutations are executed.

# results Object

const results = useFetchAlbumsQuery(user);
here the results object will return the following properties:-

data -> Data returned from the server

error -> Error, if one occured

isLoading -> will be True if the data is loading for the 1st time

isFetching -> will be True if the data is loading for the 2nd time and so on.

refetch -> Function that tells the query to rerun

1:50 22. Modern Async with Redux Toolkit Query 389. A Few Immediate Notes
const { data, error, isLoading } = useFetchAlbumsQuery(user);
here when we call the hook , it is going to fetch the data whenever component is rendered for the 1st time. just like useEffect.

1:32 22. Modern Async with Redux Toolkit Query 389. A Few Immediate Notes
import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
const { data, error, isLoading } = useFetchAlbumsQuery(user);

console.log(data, error, isLoading);

return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
here useFetchAlbumsQuery is the auto generated hook. Whatever we pass as as argument to the hook will appear inside the argument of the query function.

      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums", // this url will be appended to the base url
            params: {
              userId: user.id, // for query params
            },
            method: "GET",
          };
        },

0:58 22. Modern Async with Redux Toolkit Query 389. A Few Immediate Notes
const albumsApi = createApi({
reducerPath: "albums", // under which key the state will be added
baseQuery: fetchBaseQuery({
// function to make a pre-configured version of fetch.
baseUrl: "http://localhost:3005",
}),
endpoints(builder) {
return {
fetchAlbums: builder.query({
query: (user) => {
return {
url: "/albums", // this url will be appended to the base url
params: {
userId: user.id, // for query params
},
method: "GET",
};
},
}),
};
},
});
here fetchAlbums will be used for auto generating hooks that can be used by the components for fetching the albums.

2:31 22. Modern Async with Redux Toolkit Query 387. Creating an Endpoint
fetchBaseQuery

Function to make a pre-configured version of fetch. (so that we can customize if any changes we want to add)

1:00 22. Modern Async with Redux Toolkit Query 387. Creating an Endpoint
Redux toolkit query internally uses fetch by default to fetch data.

2:59 21. Interfacing with API's Using Async Thunks 378. Album Feature Overview
How query params works in json server ?

[
"albums" :
{
"title": "Album1",
"id": 30,
"userId" : 1
}
],

if we make a request as below :-

http://localhost:3005/albums?userId = 2 , the server is going to fetch objects inside the albums array that have userId = 2

1:49 21. Interfacing with API's Using Async Thunks 377. Fixing a Delete Error
The JSON server by default returns an empty object whenever it calls the delete function.

const removeUser = createAsyncThunk("users/remove", async (user) => {
const response = axios.delete(`http://localhost:3005/users/${user.id}`);
return response.data;
});

here response.data is always going to be an empty object.

7:52 21. Interfacing with API's Using Async Thunks 367. Local Fine-Grained Loading State
dispatch(fetchUser())

above we have fetchUsers thunk, which returns a promise whose .then() is called whether the request succeeds or fails.
Argument to the .then() is the fulfilled or rejected action object. Therefore we won't be able to detect whether the request failed or succeeded.

In order to fix this, we can use a function which is unwrap(), which can then provide separate function blocks for success and failure.

     dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        console.log("Success");
      })
      .catch(() => {
        console.log("FAIL!!");
      });

1:03 21. Interfacing with API's Using Async Thunks 358. Wrapping up the Thunk
export \* from './thunks/fetchUsers';
the above syntax means that find whatever has been exported by this file and export it from the current file also.

1:59 21. Interfacing with API's Using Async Thunks 352. Data Fetching Techniques
Note for Reducers :-

Do not make requests in reducers

Reducers should always be 100% synchronous

Reducers should only operate on their arguments - no outside variables

0:26 21. Interfacing with API's Using Async Thunks 352. Data Fetching Techniques
Options for Data Fetching (API Call) in Redux Toolkit

Async Thunk Functions

Redux Toolkit Query

0:05 20. Managing Multiple Slices with Redux Toolkit 325. Thinking About Redux Design
Redux Store Design

Identify what state exists in the app

Identify how that state changes over time

Group together common pieces of state

Create a slice for each group

4:41 20. Managing Multiple Slices with Redux Toolkit 324. Thinking About Derived State
Derived State

Values that can be calculated using existing state.

4:24 19. Dive Into Redux Toolkit 316. Watching For Other Actions
extraReducers: (builder) => {
builder.addCase("movie/reset", (state, action) => {
return [];
});
},
here this extraReducer will listen to this specific action movie/reset , and whenever that action will be dispatched, the arrow function that we have defined will be called and return [] will be executed causing to reset the songs state also.

3:00 19. Dive Into Redux Toolkit 315. Understanding Action Flow
Whenever an action is dispatched by the store, whatever its type is, it is sent to every reducer in the store.

4:47 19. Dive Into Redux Toolkit 313. Resetting State
Drawback of immers

const moviesSlice = createSlice({
name: "movie",
initialState: [],
reducers: {
reset(state, action) {
state = [];
},
},
});
here when we call the reset reducer, we cannot directly assign state = []. This will not work because we are not mutating the state. Something like state.splice(0,9999) will work. But a better way would be to return whatever value we want the state to be. so, below implementation will work and is a better approach also,

     reset(state, action) {
      return [];
    },

1:22 19. Dive Into Redux Toolkit 311. Practice Accessing State!
import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch();

const moviePlaylist = useSelector((state) => {
return state.movies;
});

const handleMovieAdd = (movie) => {
dispatch(addMovie(movie));
};

here we are using useDispatch library that helps us in updating the state as well the rerendering of React component.

1:15 19. Dive Into Redux Toolkit 306. Connecting React to Redux
React-Redux library basically creates a provider for us just like context to share all the state and the reducers that have been created to all the components.

import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<Provider store={store}>
<App />
</Provider>
);
6:05 19. Dive Into Redux Toolkit 304. Understanding Slices
Slices

Defines some initial state

Combines 'mini-reducers' into a big reducer

Creates a set of 'action creator' functions

const songsSlice = createSlice({
name: "song",
initialState: [],
reducers: {
addSong(state, action) {
state.push(action.payload); // using immer library to update state
},
removeSong(state, action) {
//
},
},
});
2:15 19. Dive Into Redux Toolkit 304. Understanding Slices
const store = configureStore({
reducer: {
ajdajd: songsSlice.reducer,
},
});
here .reducer contains all the reducers defined in the songsSlice reducer into a single reducer.
here the value for the key ajdajd will be handled by the songsSlice reducer.

9:14 19. Dive Into Redux Toolkit 298. Redux vs Redux Toolkit
Redux Toolkit (RTX)

RTX is a wrapper around plain Redux

Specifically simplifies the action type creation process

Basically,

Redux -> Library to make handling state easier

RTX -> Library to make working with Redux easier

We can directly use Redux also but using RTX becomes more convenient as it simplifies a lot of things.

3:05 19. Dive Into Redux Toolkit 297. Into the World of Redux
The React-Redux basically uses same kind of logic as contexts to share data to all components. Nothing special.

2:43 19. Dive Into Redux Toolkit 297. Into the World of Redux
The Redux is not specifically for made for React or any other framework. Therefore, in order to communicate between React and Redux, we need to use the library React-Redux

The Redux store is completely outside the hierarchy of the components that have been created. Therefore, any component present in any location can access Redux store to access state.

2:06 19. Dive Into Redux Toolkit 297. Into the World of Redux
Redux

With Redux, we create a 'store' to create + maintain our state.

Individual components can connect to the store and access state.

Basically has multiple reducers to manage different parts of the state unlike useReducer where we have only a single reducer.

0:18 19. Dive Into Redux Toolkit 297. Into the World of Redux
What is Redux ?

Redux is a library for managing state using the same techiniques as useReducer

0:24 18. Into the World of Reducers 295. Introducing Immer
immer

It is a library that helps us to directly modify state like below :-

state.count = state.count + 1;

It is not necessary to return a value from the reducer function.

We need to import the library and use like below :-

import produce from "immer";
const [state, dispatch] = useReducer(produce(reducer), {
count: initialCount,
valueToAdd: 0,
});
6:42 18. Into the World of Reducers 290. Understanding Action Objects
reducer(state, action)

Whatever value is returned by the dispatch function becomes the new value of state

state variable contains the current value of the state

action variable contains whatever value is passed while calling dispatch(value)

5:45 18. Into the World of Reducers 288. useReducer in Action
const [state, dispatch] = useReducer(reducer, {count:0,valueToAdd:0});

here state is the state variable and dispatch is the function to change state.

Note :-

useReducer can be used to change multiple properties through a single state variable. (meaning the state for the whole component can be defined in a single variable.)
like in this example our initial value of the state variable looks like a json having multiple key value pairs.

2:11 18. Into the World of Reducers 288. useReducer in Action
useReducer

Alternative to useState

Changing this state makes component rerender

Useful when you have several different closely-related pieces of state

Useful when future state values depend on the current state

2:24 16. Getting Clever with Data Sorting 273. Yessssss, It Worked!
array.sort() modifies the original array

10:19 16. Getting Clever with Data Sorting 269. Adding SortableTable
return <Table {...props} config={updatedConfig} />;
here is the props object contains key as config, it will be overriden since we are again passing config as updatedConfig.

5:42 16. Getting Clever with Data Sorting 267. React Fragments
import { Fragment } from "react";

<Fragment key={column.label}>{column.header()}</Fragment>;

here Fragment is not an actual component, but it can be used whenever we want to assign a key prop.

2:25 16. Getting Clever with Data Sorting 260. Sorting Strings
How to sort array of strings alphabetically in javascript ?

const data = ['t','A','a','B','b'];

data.sort((a,b) => {
return a.localeCompare(b);
})
above sorting function will give output as ['a','A','b','B','t']

2:03 16. Getting Clever with Data Sorting 259. Reminder on Sorting in JavaScript
let array = [5,10,1,3,4];

here directly using array.sort() will give [10,5,3,4], this is because array.sort() first converts the elements in the array to strings, then sorts those.

2:23 14. Creating Portals with ReactDOM 239. Fixing the Modal with Portals
React portals

Using react portals for modals ensure that whatever HTML we are declaring for the portal, it will always be a direct child of the body element, meaning it will always take the full width and height of the document. (modal will always positioned relative to the entire HTML document.)

3:37 14. Creating Portals with ReactDOM 238. We're Lucky it Works At All!
position : absolute

Puts the element

at the top left corner

of the closest parent

with a position other than 'static'

1:23 14. Creating Portals with ReactDOM 238. We're Lucky it Works At All!
by default, all HTML elements have position : 'static'.

6:09 13. Making Navigation Reusable 225. Listening to Forward and Back Clicks
const [currentPath, setCurrentPath] = useState(window.location.pathname);

useEffect(() => {
const handler = () => {
setCurrentPath(window.location.pathname);
};
window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };

}, []);
here we have created a piece of state for storing the current address at which the user currently is, the only reason why state it is added is to rerender the component once the user navigates.

4:42 13. Making Navigation Reusable 223. Handling Back:Forward Buttons
popstate event

Window emits a popstate event if the user current url was added by 'pushState'.

2:39 13. Making Navigation Reusable 223. Handling Back:Forward Buttons
window.history.pushState({}, '', 'a1')
This is a method to navigate to a particular route in which there is no page refresh. Also, if the user clicks on the back button from a route that is added by pushState, then also there is no refresh. (except if we navigate from a route that is not added by pushState, ex:- when the user directly types the url in the address bar)

5:08 13. Making Navigation Reusable 217. Traditional Browser Navigation
<a href="/dashboard">Dashboard</a>
here even if we provide a new route, react by default will return index.html only.
but all the variables declared will be removed.

0:53 13. Making Navigation Reusable 217. Traditional Browser Navigation
useRef

The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.

0:00 13. Making Navigation Reusable 217. Traditional Browser Navigation
Note :- useEffect hook is called after the component is rendered i.e it runs after the return of JSX.
for ex:-

function App() {
const [count, setCount] = useState(0);
const previousCount = useRef(0);

useEffect(() => {
previousCount.current = count;
});

return (
<>

<div>Count is {count}</div>
<div>Previous Count is {previousCount.current}</div>
<button onClick={() => setCount(count + 1)}>Update Count</button>
</>
);
}
here useRef is used for persisting value between every rerender.
here useEffect will run after jsx is returned, therfore it will print previousValue as 0. then when the useEffect is run, previousCount will be set to previousCount + 1 which is 0 + 1 = 1. But it will not show on the DOM since we are not updating state, but only the ref variable. When we click on the button, count state is updated and then the previousCount value which was 1 is printed as 1.

4:24 12. Practicing Props and State Design 213. Reminder on useEffect Cleanup
Cleanup functions that we return from a useEffect function are either called just before the Component is destroyed, or if the component is rerendered again, then the cleanup function is called just before the useEffect function is about to be invoked again.

useEffect(()=>{
const cleanup = () => {
// do cleanup related stuff
};
},[counter]);
1:16 12. Practicing Props and State Design 210. Putting it All Together
const dropdown = document.querySelector('.w-48');

const handleClick = (event) => {
if(dropdown.contains(event.target)){
console.log('Inside dropdown');
}
else {
console.log('Outside dropdown');
}
}
document.addEventListener('click',handleClick,true);
above code will check whether the target element is inside dropdown or outside.

Why are we not passing false (for capture phase) as third argument ?
Now once we click on the dropdown(opened), since it is bubbling phase, event will start flowing from target element. It will first call the event listener attached to the target element causing it to close the dropdown and then flow to the root element, and then will call the handleClick event listener for checking the element, causing it to print 'Outside dropdown'. This is because the dropdown is closed first, before the event reaches the root element.

4:49 12. Practicing Props and State Design 209. Event Capture and Bubbling
document.addEventListener("click", handleClick);
or
document.addEventListener("click", handleClick,false);
above will create an event listener for the bubbling phase, where we either don't set the third argument or set it as false.

document.addEventListener("click", handleClick,true);

above will create an event listener for the capture phase, where we set the third argument as true.

1:55 12. Practicing Props and State Design 208. Document-Wide Click Handlers
Document Wide Click Handlers

const handleClick = (event) => console.log(event.target);
document.addEventListener('click',handleClick);
here we have added a listener that will listen to all the elements in the DOM.
Note :- The event listener is attached to the most parent element. Since we have added the event listener in bubbling phase, the event will flow from target to the parent. Once it reaches the parent, it will invoke the event listener defined for that parent.
here event.target will let us know which element was clicked which can help us in determining whether the click was done outside or inside the element. (during the bubbling phase, the event object will carry the target element and will flow from target element to root element.

4:09 12. Practicing Props and State Design 202. Community Convention with Props Names
<DropDown selection={selection} onSelect={handleSelect} />
<CheckBox isChecked={isChecked} onCheck={handleOnCheck} />
here above we have two form control components, but their prop names are very different, which is a bit difficult to remember.

Therefore, we can have a bit generic prop name convention which will make it easier to remember prop names and will be a more cleaner approach. like below :-

<DropDown value={selection} onChange={handleSelect} />
<CheckBox value={checked} onChange={handleCheckChange} />

3:43 11. Mastering the State Design Process 182. Conditional Rendering
Javascript Boolean expressions

&& -> Returns the first falsy value or last truthy value
for ex:- 'hi' && 'there' will give output as 'there' and false && 'there' will give output as false

|| -> Returns the first truthy value
for ex:- 'hi' || 'there' will give output as 'hi'.

0:51 11. Mastering the State Design Process 182. Conditional Rendering
React doesn't print

booleans

nulls

undefined

1:30 10. Custom Navigation and Routing Systems 171. Passing Props Through
function Button({
children,
primary,
secondary,
success,
warning,
danger,
outline,
rounded,
...rest
})
here ...rest means take all the remaining properties.

4:58 10. Custom Navigation and Routing Systems 168. Finalizing the Variations
const classes = twMerge(
className("px-3 py-1.5 border", {
"border-blue-500 bg-blue-500 text-white": primary,
"text-red-500": outline && danger,
}));
here twMerge will merge conflicting classes based on which class is defined later.
ex:- text-white is applied before text-red-500, hence only text-red-500 will be applied, not both. (otherwise both classes will be applied).

10:28 10. Custom Navigation and Routing Systems 165. The ClassNames Library
const finalClassName = className({
"bg-blue-500": true,
"text-yellow-500": true,
});

console.log(finalClassName);
here if the value of any key is true, then that key will be added to the className.

2:12 10. Custom Navigation and Routing Systems 165. The ClassNames Library
classnames

A JS library used for creating a className based on different values.

0:00 10. Custom Navigation and Routing Systems 160. Introducing TailwindCSS
Number(false) = 0
Number(true) = 1

but

Number(undefined) = NaN,

in order to make this NaN value as 0, we can write :-

Number(!!undefined),

here !!undefined will give false => Number(false) => 0

3:04 10. Custom Navigation and Routing Systems 156. The Children Prop
<Button>Click here!</Button>
if we pass anything that is enclosed within the tags of the custom created components, then that will be received as a prop named as children .

function Button({ children }) {
return <button>{children}</button>;
}
Note :- children will be an array of elements.

4:11 9. Deeper Dive into Hooks! 150. The Purpose of Cleanup Functions
function App(){

const [counter,setCounter] = useState(0);
useEffect(()=>{
const listener = () => {
console.log(counter);
};
document.body.addEventListener("click",listener);

const cleanup = () => {
document.body.removeEventListener("click",listener);
};
return cleanup;
},[counter]);

return (

<div>
<button onClick = {()=> setCounter(counter + 1)}>
+Increment
</button>

<div>Count: {counter}</div>
</div>
);
the above code will ensure that when the component is rerendered, cleanup function returned from the previous render is first executed causing the event listener previously defined to clear. Then the useEffect is again executed creating another even listener and cleanup function to clean that function when the component will be rendered for the 3rd time and so on.
Note :- If we don't clean up the event handler, then the event handlers after every rerender will keep on increasing.

4:23 9. Deeper Dive into Hooks! 149. useEffect Cleanup Functions
Cleanup function
The functions returned by useEffect are called cleanup functions. Just before the rendering of the component for the 2nd time, the returned instance of the cleanup function is captured and when the component does render for the 2nd time, that cleanup function from the previous render is called automatically, only if the useEffect is called again in the 2nd render and so on.

Basically cleanup functions are called after every render except for the 1st render.

0:52 9. Deeper Dive into Hooks! 149. useEffect Cleanup Functions
useEffect function

Can't return numbers

Can't return strings

Can't use async/await
useEffect(async() => {
// statement
},[]);

But it can return a function
useEffect(() => {
return () => {
// statement
}
},[]);

1:34 9. Deeper Dive into Hooks! 148. Fixing Bugs with useCallback
const fetchBooks = async () => {
const response = await axios.get("http://localhost:3001/books");
setBooks(response.data);
};

const stableFetchBooks = useCallback(fetchBooks, []);
here useCallback in the 1st render, will return the reference of the fetchBooks function created at the top. However, when the component is rendered for the 2nd time, another different instance of fetchBooks is created, but useCallback will return the instance of fetchBooks created in the 1st render(this is because the 2nd argument is an empty array []). Therefore, for the 2nd render also, the reference of stableFetchBooks will remain the same. Now when the component will be rendered as below :-

function App() {
const { stableFetchBooks } = useContext(BooksContext);

useEffect(() => {
stableFetchBooks();
}, [stableFetchBooks]);
}
Now since the reference of stableFetchBooks is the same as the previous one, useEffect again will not be executed and the infinite loop will be avoided.

2:40 9. Deeper Dive into Hooks! 147. Stable References with useCallback
useCallback

Hook to help you tell React that your function isn't actually changing over time.

Basically used for fixing bugs arising around useEffect and other similar situations.

Follows similar conventions as useEffect (second argument is an array)

0:13 9. Deeper Dive into Hooks! 145. Applying the Fix
Stale variable references
A possible bug that occurs whenever useEffect contains a function definition that refers to a variable. for example as below :-

function App(){

const [counter,setCounter] = useState(0);
useEffect(()=>{
document.body.onclick = () => {
console.log(counter);
}
},[]);
}

here the useEffect contains a event handler function definition that refers to a variable counter.

6:19 9. Deeper Dive into Hooks! 146. ESLint is Good, but be Careful!
Note :- After every rerender, a new reference/pointer for all the functions/variables is created which becomes different than the previous render. (basically a new memory is allocated).

4:04 9. Deeper Dive into Hooks! 144. Understanding the Issue
function App(){

const [counter,setCounter] = useState(0);
useEffect(()=>{
document.body.onclick = () => {
console.log(counter);
}
},[]);

return (

<div>
  <button onClick = {()=> setCounter(counter + 1)}>
+Increment
</button>

<div>Count: {counter}</div>
</div>
);

here when the useEffect function is only called for the 1st time, and in the onclick event handler which is defined, the reference/pointer of the count is of the 1st render. When the component is rendered for the 2nd time, this handler function still points to the old count which was defined in the 1st render because useEffect is only executed once. Therefore, after clicking, it still prints out 0 even if the latest count(with the new reference) is 1.
to solve this,in the useEffect we can change the 2nd argument in a way that useEffect will be called whenever count is updated like below:-
useEffect(()=>{
document.body.onclick = () => {
console.log(counter);
}
},[counter]);

7:53 8. Communication Using the Context System 141. A Small Taste of Reusable Hooks
Custom hooks

Functions we write to reuse basic hooks like 'useState', 'useEffect' etc.

0:48 8. Communication Using the Context System 141. A Small Taste of Reusable Hooks
Hooks

Hooks are functions provided by React that add additional features to a component.

useState
Allows a component to use the state system

useEffect

Allows a component to run code at specific points in time

useContext

Allows a component to access values stored in context

2:01 8. Communication Using the Context System 139. Props and Context Together
Context and props can be used together (not necessarily a bad practice).

8:38 8. Communication Using the Context System 133. More on Changing Context
here we are creating a Provider component so that we can define a state in Provider component, whenever state is updated, it will cause the Provider component to rerender, which then passes the updated state value as a props to the context provider causing again all the child components to rerender with the updated context value.

4:59 8. Communication Using the Context System 133. More on Changing Context
root.render(
<Provider>
<App />
</Provider>
);
here App will be passed as a prop as {children} to the Provider component.

7:11 8. Communication Using the Context System 130. Introducing Context
How to create context ?

import {createContext} from 'react';

const BookContext = createContext();

How to share the data that will be accessed through context ?

<BookContext.Provider value = {5}
<MyComponent/>

</BookContext.Provider >

here BookContext.Provider is a component that is used to share data to specific components defined in the body. (like MyComponent here). Whatever components will access the data, their child components will also be able to access the same data.
for sharing the data, we have to pass the data in the value props as shown above. (we can pass any type of value here)

3:29 8. Communication Using the Context System 130. Introducing Context
Context is not a replacement for both Props and Redux

2:10 8. Communication Using the Context System 130. Introducing Context
Context is an alternative to the props system which allows the sharing of data between components that are not necessarily directly connected.

4:19 7. Data Persistence with API Requests 125. useEffect in Action
useEffect(()=>{

console.log('Hi!)

},[])

There are 3 types of values for the second argument ,

[]
This value will ensure the function will be called only after first render

- (no value)
  This value will ensure the function will be called after first render and also after every rerender.

[counter]
This value will ensure the function will be called after first render and also after rerenders if 'counter' variable changed. (basically it will be called when any of the variables present in the array are changed).

3:12 7. Data Persistence with API Requests 125. useEffect in Action
useEffect(()=>{

console.log('Hi!)

},[])

the first argument which is an arrow function is always going to be called whenever the component is rendered for the 1st time.
the second argument controls whether the arrow function is going to be called on 2nd,3rd ,,, rendering of the component or not.

2:34 7. Data Persistence with API Requests 124. Introducing useEffect
useEffect(() => {
fetchBooks();
}, []);
this will call fetchBooks() when the component is rendered for the 1st time.

0:26 7. Data Persistence with API Requests 124. Introducing useEffect
useEffect

A function imported from React which is used for running some code when the component is initially rendered and (sometimes) when it is rerendered.

useEffect(()=>{
console.log('Hi!)
},[])

First argument is a function that contains code we want to run.
Second is an array or nothing - this controls whether the function is executed on rerenders.

3:29 7. Data Persistence with API Requests 123. Fetching a List of Records
function App() {
const [books, setBooks] = useState([]);

const fetchBooks = async () => {
const response = await axios.get("http://localhost:3001/books");
setBooks(response.data);
};

//DONT DO THIS
fetchBooks();
}
the above code will lead to infinite loop, as everytime fetchBooks will be called it will rerender the App component and then again fetchBooks will be called and so on.

5:07 6. How to Handle Forms 114. Adding Images
The below url fetches a random image,

https://picsum.photos/200/300
in network tab, you need to disable cache in order to get unique image responses.

but a better approach would be to have unqiue images based on a identifier like below :-

      <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />

where book.id is the unique identifier

2:31 6. How to Handle Forms 102. [Optional] Adding, Changing, or Removing Object Properties
How to remove a particular key value pair from an object ?

const fruit = {
color : 'red',
size: 'large',

name:'apple',

price : 1
};

const { color, ...rest} = fruit;
above code will remove the key color and its value from the fruit object.

2:56 6. How to Handle Forms 97. [Optional] Removing Elements
applying filter doesn't modify the existing array.

6:47 6. How to Handle Forms 90. Updating State
function App() {
const [books, setBooks] = useState([]);

const createBook = (title) => {
// BAD CODE!
books.push({ id: 123, title: title });
console.log(books);
setBooks(books);
};

return (

<div>
{books.length}
<BookCreate onCreate={createBook} />
</div>
);
}
The problem with the above approach is that we are pushing a new object to the books array before updating the state, and when we are calling setBooks(books) to update the state, we are passing the same value.
Therefore, react doesn't rerender the component and in the below div, {books.length} will still be 0.

8:32 5. Using an API with React 78. Handling List Updates
Applying a key prop to an element is used for optimal updation of content on the screen.
Whenever the component is rerendered, the keys of all the elements is compared to apply minimal set of changes.

Notes :-

Keys need to be applied whenever we want to render a list of elements/components. (for optimal updation)

Keys need to be applied to the outermost element of the recurring elements.

All the keys should be consistently unique across rerenders.(atleast inside a single array of elements)

10:19 5. Using an API with React 76. Communicating the List of Images Down
When a state of a particular component is updated, then the content of the component as well as the content of all its child components is rerendered.

0:53 5. Using an API with React 72. [Optional] OK But Why?
<input value="term" onChange={handleChange} />
if we provide a hardcoded value as value to the input, it cannot be assigned a value other than the value passed.

6:59 5. Using an API with React 70. Handling Form Submission

<form onSubmit={handleFormSubmit}>
<input name="term" />
</form>
ifd we wrap the input in a form and provide a name like term, during the submit event, the browser will make a network requests which looks as below :-
http://localhost:3000/?term=ljdajd

Note :- Here we can see this will work without any Javascript at all.

2:28 5. Using an API with React 70. Handling Form Submission
whenever an input element is surrounded by/inside a form element, the form element will trigger an submit event(like pressing Enter,etc).

1:48 5. Using an API with React 65. [Optional] Using Async:Await
const searchImages = async () => {
const response = await axios.get("https://api.unsplash.com/photos", {
headers: {
Authorization: "Client-ID bT1LTPoXzypWm7fAnvT1_xSUnnXl9XPjRC-7d29S_Cc",
},
params: {
query: "cars",
},
});
console.log(response);
return response;
};
here the await keyword is used for waiting for the response, before executing the next line of javascript. (to make it synchronous).
and a function needs to declared as async whenever it is using an await keyword.

1:07 5. Using an API with React 64. Making an HTTP Request
Axios is a javascript library used for making HTTP requests.

2:15 5. Using an API with React 61. The Path Forward
React itself has no functions/tools for making HTTP requests.
To make requests, we commonly use either Axios or Fetch.
React only cares about showing content and handling user events.

4:38 5. Using an API with React 60. Project Setup
vscode shortcut to select same text at once -> Ctrl + Shift + L

4:32 4. State: How to Change Your App 58. App Wrapup and Review
useState(0),

here whatever value we pass in the argument (like 0 in this case), this value will only be used to assign a default value to the state the first time component renders. If any other modifications are done to the state in the future, this default value will be ignored.

2:49 4. State: How to Change Your App 58. App Wrapup and Review
In react, state is the only way to change what is shown on the DOM/screen.

1:37 4. State: How to Change Your App 58. App Wrapup and Review
Inline Handler

Arrow function used if we only need to do one thing (one statement) when the event is triggered.

<button onClick={() => console.log('Button clicked!!')}>Add Animal</button>

# What is flex-wrap: wrap and flex-wrap: nowrap ?

```
display: flex;
flex-direction: row;
flex-wrap: wrap;
```

here flex-wrap: wrap; means all the items will move to multiple lines.

if we change the value to flex-wrap: nowrap; , all the items will be aligned on a single line.

# Loading and Showing SVGs

in react, files(images,components etc) cannot be dynamically imported. (some other way is there)
for ex:-

      <img alt="animal" src={relativePath + type + ".svg"} />

above code will not work, and we need to import the files beforehand. like below :-

```

import bird from "./svg/bird.svg";

const svgMap = {
  bird,
};

<img alt="animal" src={svgMap[type]} />

```

# Ctrl + Shift + R

Press Ctrl + Shift + R to clear console variable values

# How to correctly change state value ?

count = 123; // 1st case - incorrect way

setCount(123); //2nd case - correct way

in the 1st case, value of count is changed, but the component will not reflect the change. But in the 2nd case, changes will also be reflected on the DOM in addition to the changing of the value of count variable. Therefore, it is the correct way to change variables in react if they are used to render anything in DOM.
Basically, if in 2nd case we are updating the state, and in React, whenever a state is updated (setCount), it causes React to rerender the component. (rerendering means the App function is called again and again, which causes the repititive return of jsx with the updated value of count, which is whatever value we pass while calling setCount, like setCount(123)).

# All below 3 are equiavalent,

```
    <div>
      <button
        onClick={function () {
          console.log("Button clicked!!");
        }}
      >
        Add Animal
      </button>
    </div>




    <div>
      <button
        onClick={() => {
          console.log("Button clicked!!!!");
        }}
      >
        Add Animal
      </button>
    </div>




    <div>
      <button onClick={() => console.log("Button clicked!!!!")}>
        Add Animal
      </button>
    </div>
```

# Variations on Event Handlers

```
  const handleClick = () => {
    console.log("Button clicked !!");
  };
```

above is equivalent to below :-

```
  const handleClick = function() {
    console.log("Button clicked !!");
  };
```

      <button onClick={handleClick}>Add Animal</button>

for handling events such as click above, we need to pass reference of functions as props instead of calling the functions directly. Meaning, we can not pass the props of the function like below :-

      <button onClick={handleClick()}>Add Animal</button>

in this case, we are not passing the reference of the function as a prop, and this function will be called only once the component initially renders. (button needs the reference of the function so that whenever the any event is triggered, it can call that function).

# Using Argument Destructuring

App.js

`<ProfileCard title="Alexa" handle="@alexa99" />`

ProfileCard.js

```
function ProfileCard({ title, handle }) {
  // destructuring
  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}
```

# Communication with props

- Add attributes to the JSX element

- React collects all the attributes and puts them in an object

- Props object shows up as the first argument to the child component function

- We use the props however we wish

# Directory

- ./ Same Directory

- ../ Up one directory

# Import Statements - Behind the Scenes

- Declare a variable called App

- Find the default export from App.js

- Assign the default export to App variable

- Curly braces indicate we want a 'named' export

- Single import statement can get both default + named exports.

- Named exports cannot be renamed

# Converting HTML to JSX

- All prop names follow camelCase

- Number attributes use curly braces

- Boolean 'true' can be written with just the property name. 'False' should be written with curly braces.

- 'class' attribute is written as 'className'

- in-line styles are provided as objects

# Can React show object as it is ?

An object can not be directly displayed on the screen.

`<h1>{config}</h1> -> this is wrong`

But it can be provided as a prop to the elements. like below :-
`<input abc={config} />` -> this can be done

React cannot show an object as text content. (it will throw error)

# Printing JavaScript Variables in JSX

Curly braces mean we are about to reference a JS variable or expression.

```
function App(){
    let message = 'Bye there!';
    if(Math.random() > 0.5){
        message = 'Hello there!';
    }

    return <h1>{message}</h1>;
}
```

We most often use curly braces to show strings or numbers

# React

React is a library that knows what a component is and how all the components communicate with each other.

# ReactDOM

ReactDOM is a library that knows how to render the HTML from all the components directly onto the browser.

# index.js

First JS file that gets executed when our app runs.

# index.html

Skeleton for the React app

# package.json

Lists dependencies our app needs

# package-lock.json

Lists dependencies our app needs

# node-modules

Contains dependencies our app needs

# What is babel and webpack ?

Babel converts JSX to normal JS code.

Webpack merges all project files(index.js,App.js,reportWebVitals.js) into a single file(bundle.js).
bundle.js is the final javascript file which is executed on the browser.
Similarly, index.html is the final html file that gets executed on the browser.

# React

Library that defines what a component is and how multiple components work together

# ReactDOM

Library that knows how to get a component to show up in the browser

# JSX

JSX is transpiled to HTML that can be executed by the browser. (browser can not recognize JSX).

# How bundle.js works ?

All of your project's JS files are 'bundled' together into a single file called bundle.js, then placed onto a server.

ex:-

App.js

index.js

field.js

translate.js

etc etc.js

# How React distinguishes tags ?

React distinguishes between two type of tags which are :-

Tags which begin with a lowercase letter which are generally normal HTML/JSX elements.
for ex:- `<h1>Hi There </h1>`

Tags which begin with a uppercase letter which are generally other components created that return JSX/HTML.
for ex:- <NewComponent />

# React Components

Functions that return JSX (stuff that looks like HTML)

Tells React what to show on the screen

A project can have many components that work together

# So what's React all about?

React (1) displays HTML and (2) changes that HTML when the user does something.
