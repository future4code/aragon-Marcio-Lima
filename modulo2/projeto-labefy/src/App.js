import React from "react";
import CreatePLPage from "./pages/CreatePLPage";
import DisplayPLPage from "./pages/DisplayPLPage";
import DetailPLPage from "./pages/DetailPLPage";

export default class App extends React.Component {
  state = {
    currentPage: "criar playlist",
  };

  goToCreatePL = () => {
    this.setState({ currentPage: "criar playlist" });
  };

  goToDisplayPL = () => {
    this.setState({ currentPage: "exibir playlist" });
  };

  selectPage = () => {
    switch (this.state.currentPage) {
      case "criar playlist":
        return <CreatePLPage goToDisplayPL={this.goToDisplayPL} />;
      case "exibir playlist":
        return <DisplayPLPage goToCreatePL={this.goToCreatePL} />;
      default:
        return <CreatePLPage goToDisplayPL={this.goToDisplayPL} />;
    }
  };
  render() {
    return <div>{this.selectPage()}</div>;
  }
}
