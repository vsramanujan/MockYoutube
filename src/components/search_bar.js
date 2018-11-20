import React, {Component} from 'react'; //Even though we haven't explicitly used the React module, the ES6 transpiling would make a React.createElement function

//{Component} is the same as doing const Component = React.Component
/* const SearchBar = () => { // FUNCTIONAL COMPONENT - does not have ability to hold state or talk to other components etc
    return <input />; 
};*/

//CLASS COMPONENT - used when you want some kind of internal record keeping
//class SearchBar  { // this is simply a plain js object of sorts - create instance of class by doing something like new SearchBar
class SearchBar extends Component{  // give it functionality from React.Component class
    constructor(props){ // Whenever a new instance is created ( like in index.js), this is called
        super(props); // Calls Component's constructor method

        this.state = {term: ''}; // Plain JS Object. Whenever state is changed the component and its children are re-rendered
    }
    onInputChange(term){
            this.setState({term});
            this.props.onSearchTermChange(term);
    }

    //Now that we have a class, we still have it the functionality to render itself somehow so that it return JSX, hence the render method
    render(){
        
        // return <input onChange = {this.onInputChange} />; // JS inside ES6 should be inside brackets
        //Control field -> value is set by the state rather than other way around thats what the value field does
        //Once you use value in the input thingy, it becomes a controlled component -> its value changes only when state changes
        // One use of this is if we had to have like a default value in that field
        //Another thing is that now you have this as a controlled element, its easier to read what the value of it is
        return ( // Usually give the main parent of the return the same className as that of the class itself separated by a - <one CSS File per component>
            <div className="search-bar">
        <input 
        value = {this.state.term}
        onChange = {event => this.onInputChange(event.target.value)} />
       
        </div>
        );
    }
// All browser events that get triggered by native elements like input,div,span, button have an event 
   /* onInputChange(event){ 
        this.setState({term: event.target.value}) // WILL NOT WORK BECAUSE this cannot get resolved
    }*/

}

export default SearchBar;


// CLASSES, => , IMPORT AND EXPORT statements are all ES6 stuff