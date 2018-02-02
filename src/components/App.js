// App.js

import React from 'react';
import Counter from '../container/Counter';
import AddCounter from '../container/AddCounter';
import RemoveCounter from '../container/RemoveCounter';

const App = () => {
 
    return (
    <div className="container">
        <Counter/><br></br>
        <div className="columns">
            <div className="column is-11">
            <AddCounter />
            </div>
            <div className="column auto">
            <RemoveCounter/>
            </div>
      </div>
    </div>
  )

}
export default App;