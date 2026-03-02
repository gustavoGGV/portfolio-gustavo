import * as React from 'react';
import "./desktop.css";
import Window from "./window.tsx";
class Desktop extends React.Component {
  render() {
    return (
      <div className="desktop p-2">
        <Window title="test" content={<><h1>TEST</h1></>} />
      </div>
    );
  }
}

export default Desktop;