//Create a component. This component should produce some HTML
import _ from 'lodash';
import React from 'react'; // Core react library knows how to work with react components -> how to render them and nest them together but doesn't know how to add them to the DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; // If we are importing from our own js files, you need to give the relative part
import YTSearch from 'youtube-api-search'; //Its a function
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCx-EqryqEsMp1xYCe_LMd9KtbvXKTdqAw';
//Downward data flow : Only the most parent component must be responsible for getting the data

/*const App = () => { // When we create a component, we are creating a class of component. We can have many instances of App. It is not an instance! Think of the function as a factory that produces instances
    return ( // gets transpiled into React.createElement (parenthesis not required - if not used <div> should be in same line as return)
    // Its okay to have a class based component inside functional component as shown below 
    <div>
        <SearchBar /> 
    </div> 
    )
}*/

class App extends React.Component{ 
    constructor(props){
        super(props);

        this.videoSearch('surfboards')
        this.state = {
            videos: [],
            selectedVideo : null
        }
    }

    videoSearch(term){
        YTSearch({key: API_KEY , term: term}, (videos) => { // ASYNC FUNCTION!! Using non ES6 function would not resolve this
            //this.setState({videos: videos}) // This can be condensed as the next line here as long as the key and value are of the same name
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
        })
        })
    }
    render(){
        const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300); //Creates an instance of this inner function that can only be called once in 300ms

        return (
    <div>
        <SearchBar onSearchTermChange = { videoSearch }/> 
        <VideoDetail video= {this.state.selectedVideo} />
        <VideoList videos = {this.state.videos} onVideoSelect = {selectedVideo => this.setState({selectedVideo})} />
    </div> 
    );
}
}

//Take this component's generated HTML and put it in the DOM

//React.render(App); // Wrong because theyve separated React and ReactDOM
//ReactDOM.render(App) // Wont work because App is just a class, we need to pass an instance
// How to do that -> putting HTML tags ( <div> where div is a class) inside of jsx automatically makes it into an instance by calling React.createElement
//ReactDOM.render(<App />); // We've not told it on which page's DOM do we need to put it in
ReactDOM.render(<App />,document.querySelector('.container'));




// IN ES6, we have access to a concept called JS modules -> all code thats written in separate files are silo -> you can't make references to variables in the other file   