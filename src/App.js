import React from 'react';
const App = () => {
    return (
      <div>
        <h1>hey low</h1>
      </div>
      );
}
export default App;


setInterval(function(){
console.log(new Date().getHours() + " , " + new Date().getMinutes() + " , " + new Date().getSeconds() + " , " + Math.floor((new Date().getMilliseconds())/10));
},1)


