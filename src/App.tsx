import React from "react";
import "./App.scss";
import Parent from "./components/Parent/Parent";
export default class App extends React.Component<any, any> {
  // constructor(props: any) {
  //   super(props);

  //   let replacementComp = (a: boolean) =>
  //     a ? <div id="warning"> Best Experienced on Desktop !</div> : <></>;
  //   this.state = {
  //     mobile: replacementComp(window.matchMedia("(max-width: 800px)").matches),
  //   };
  //   let handleEvent = (e: any) => {
  //     this.setState({ ...App, mobile: replacementComp(e.matches) });
  //   };
  //   window
  //     .matchMedia("(max-width: 800px)")
  //     .addEventListener("change", handleEvent);
  // }

  render() {
    return (
      <div className="App">
        {/* {this.state.mobile} */}
        <Parent></Parent>
      </div>
    );
  }
}
