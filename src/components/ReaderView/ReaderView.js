import React, { Component } from "react";
import PSPDFKit from "pspdfkit";

export default class PSPDFKits extends Component {
  constructor(props, context) {
    super(props, context);
    this._instance = null;
    this._container = null;

    this.onRef = this.onRef.bind(this);
    this.load = this.load.bind(this);
    this.unload = this.unload.bind(this);
  }

  onRef(container) {
    this._container = container;
  }

  async load(props) {
    console.log(`Loading ${props.documentUrl}`);
    let toolbarItems = PSPDFKit.defaultToolbarItems;
    let pagerIndex = toolbarItems.findIndex(item => item.type == "pager");
    toolbarItems.splice(pagerIndex + 1, 0, { type: "layout-config" });

    // const defaultFooterItems = PSPDFKit.defaultDocumentEditorFooterItems;
    // defaultFooterItems.reverse();
    // defaultFooterItems.push(customItem);

    this._instance = await PSPDFKit.load({
      toolbarItems,
      document: props.documentUrl,
      container: this._container,
      baseUrl: props.baseUrl,
      // documentEditorToolbarItems: defaultFooterItems,
    });
    console.log("Successfully mounted PSPDFKit", this._instance);
    const items = this._instance.toolbarItems;
    
    this._instance.setToolbarItems(items => items.filter((item) => item.type !== "export-pdf"));
    this._instance.setViewState((state) => state.set("allowPrinting", false));
    // this._instance.setViewState((state) => state.set("showToolbar", false));
  }
  

  unload() {
    PSPDFKit.unload(this._instance || this._container);
    this._instance = null;
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentDidUpdate(prevProps) {
    const nextProps = this.props;

    // We only want to reload the document when the documentUrl prop changes.
    if (nextProps.documentUrl !== prevProps.documentUrl) {
      this.unload();
      this.load(nextProps);
    }
  }

  componentWillUnmount() {
    this.unload();
  }

  render() {
    return (
      <div
        ref={this.onRef}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
    );
  }
}