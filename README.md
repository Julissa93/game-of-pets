#### Game Of Pets :wolf: :dragon:

Demo code for 1904-GH Juniors using `combineReducers` from Redux. 
As your app grows more complex, you'll want to split your reducing function into separate functions, each managing **independent** parts or different slices of the state.
A popular convention is to name reducers after the state slices they manage. 
For example, if I have one single reducer that handles an e-commerce application I might have a state that looks like this: (items being things available for purchase)
```javascript
initialState = {
    users: [],
    selectedUser: {},
    items: [],
    selectedItem: {}
}
```
Using `combineReducers` allows me to separate my store's state into individual slices, so instead of having one reducer file that handles everything about users and items, I can make a user reducer and an items reducer :)
```javascript
    // In my UserReducer
    initialState = {
        users: [], 
        selectedUser: {}
    }
``` 

```javascript
    // In my ItemsReducer
    initialState = {
        items: [], 
        selectedItem: {}
    }
``` 
