- [ ] Why would you use class component over function components (removing hooks from the question)?

    You would use class components if you needed to use one of the class components life cycle methods.  Another            benefit of using class components is that you can have a component that has its owe state. 


- [ ] Name three lifecycle methods and their purposes.

    ComponentwillMount:  This method is called twice, once before any of the DOM elements are rendered and once after the initial render. 

    ComponentDidMount: This is used to store and update state.  This methods is similar to useEffect as it helps store and execute side effects such as an API calls. 

    Render: The render method helps render the react components into DOM nodes that the browser can then display. 



- [ ] What is the purpose of a custom hook?

    Custom hooks allow you to cut down on over writing certain pieces of code by making components such as forms  more reusable.  Instead of writing the same logic over and over again you could use the custom hook to replace the repeated logic. 

- [ ] Why is it important to test our apps?

    The reason testing an app is so important is that it makes you more confident that your code will not run into complications down the road. It also helps you to debug your code faster and test for certain edge cases you might encounter.  Testing also acts as a way to document your code and lets other developers know what your code is doing. 