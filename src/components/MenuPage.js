import React, {Component} from 'react';

// Menu component

class Menu extends Component {
    render(){
      return(
        <div>
          <h1>What You Can Get:</h1>
          <p>Everything is available 24/7!
            <ul>
              <li>Lazy Loading</li>
              <li>Dynamic Route Matching</li>
              <li>Location Transition Handling</li>
            </ul>
          </p>
          <img className = "menuPageImg" src="https://media.giphy.com/media/TgMAiHNh2za0OsOr0v/giphy.gif" />
        </div>
      );
    }
  }

  export default Menu;