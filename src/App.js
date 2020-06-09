import React, { Component } from "react";
import CarouselImage from './components/body/CarouselImage'
import Body from './components/body/Body'
class App extends Component {
  render() {
    return (
      //BODY

      <section>
        <div>
              <CarouselImage />
            </div>
        <div className="container">
          <div className="mb-5">
           <Body/>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
