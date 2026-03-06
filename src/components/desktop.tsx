import * as React from 'react';
import "./desktop.css";
import Window from "./window.tsx";
class Desktop extends React.Component {
  state = {
    desktopMargin: "p-2"
  }

  setDesktopMargin = () => {
    this.state.desktopMargin === "p-2" ? this.setState({ desktopMargin: "" }) : this.setState({ desktopMargin: "p-2" })
  }

  render() {
    return (
      <div className={`desktop ${this.state.desktopMargin}`}>
        <Window title="test" content={<><h1>TEST</h1></>} setDesktopMargin={this.setDesktopMargin} />
      </div>
    );
  }
}

export default Desktop;