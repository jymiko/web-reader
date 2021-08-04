import React, { Component } from "react";
import PSPDFKit from "./components/ReaderView/ReaderView";
import PDFComponent from './components/ReaderView/Reader';
import Epub from './components/ReaderView/Epub'
import "./App.css";

const baseUrl = `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`;

class Reader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      document: "BLK_T1PAK2R22021503537.pdf",
    };
    this.openAnother = this.openAnother.bind(this);
  }

  openAnother() {
    this.setState({
      document: "another-example.pdf",
    });
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-viewer">
          <PSPDFKit documentUrl={this.state.document} baseUrl={baseUrl} />
        </div> */}
        {/* <button className="App-button" onClick={this.openAnother}>
          Open another document
        </button> */}
        {/* <div className="PDF-viewer">
        <PDFComponent
          document={this.state.document}
        />
        </div> */}
        <Epub/>
      </div>
    );
  }
}

export default Reader;