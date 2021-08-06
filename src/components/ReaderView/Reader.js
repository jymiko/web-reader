import { useEffect, useRef } from "react";
import PSPDFKit from "pspdfkit";

const Reader = (props) => {
    let instance = null;
    const containerRef = useRef(null);
    const toolbarItems = PSPDFKit.defaultToolbarItems.filter((item) => {
        return /\b(sidebar-bookmarks|sidebar-thumbnails|zoom-in|zoom-out|pager)\b/.test(
            item.type
        );
    });
    toolbarItems.push({
        type: "spacer",
    });

    toolbarItems.push({
    type: "search",
    });

    // let pageLayout = PSPDFKit.defaultToolbarItems;
    let pagerIndex = toolbarItems.findIndex(item => item.type == "pager");
    toolbarItems.splice(pagerIndex + 1, 0, { type: "layout-config" });


    useEffect(() => {
        const container = containerRef.current;
        let PSPDFKit;
        // (async function() {
        // //     const array = ["https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"]
        //     const res = await fetch("https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
        //     let page = 3;
        //     const imageArrayBuffer = await res.arrayBuffer()
            
        //     PSPDFKit = await import("pspdfkit");
        //     instance = await PSPDFKit.load({
        // //     // Container where PSPDFKit should be mounted.
        //      container,
        // //     // The document to open.
        //     toolbarItems: toolbarItems,
        //      document: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        //     // document:imageArrayBuffer,
        // //     // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        //      baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        // //     renderPageCallback(ctx, _pageIndex, pageSize) {
        // //         // Add a "Confidential" Watermark in the page
        // //         ctx.translate(pageSize.width / 2 - 325, pageSize.height / 2 + 250);
        // //         ctx.rotate(-0.1 * Math.PI);
          
        // //         ctx.font = "30px Arial";
        // //         ctx.fillStyle = "rgba(76, 130, 212,.2)";
        // //         ctx.fillText("GRAMEDIA DIGITAL", 190, -400);
        // //         ctx.fillText("GRAMEDIA DIGITAL", 180, 0);
        // //       },
        //     })
        // })();
        (async function(){
            PSPDFKit = await import("pspdfkit");
            instance = await PSPDFKit.load({
                container,
                toolbarItems: toolbarItems,
                document: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
                headless: true,
                baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
            })
            const documents = ["https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"];
            const documentBlobs = await Promise.all(
                documents.map(url => fetch(url).then(result => result.blob()))
            )

            let afterPageIndex = instance.totalPageCount - 1;
            const mergeDocumentOperations = await Promise.all(
                documentBlobs.map(async (blob, idx) => {
            
                const operation = {
                    type: "importDocument",
                    afterPageIndex,
                    treatImportedDocumentAsOnePage: false,
                    document: blob
                }

                if (idx < documentBlobs.length - 1) {
                    const documentInstance = await PSPDFKit.load({
                        toolbarItems: toolbarItems,
                        document: await blob.arrayBuffer(),
                        headless: true,
                        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
                    })
                    afterPageIndex += documentInstance.totalPageCount - 1
                    PSPDFKit.unload(documentInstance)
                }
                return operation
            }))

            console.log(mergeDocumentOperations)

            const mergedDocument = await instance.exportPDFWithOperations(mergeDocumentOperations)
            PSPDFKit.unload(instance)
            PSPDFKit.load({
                // ...configuration,
                document: mergedDocument
            })
        })();
    
        return () => PSPDFKit && PSPDFKit.unload(container);
    }, []);
    return(
        <>
            <div ref={containerRef} style={{ width: "100%", height: "100vh"}}/>
        </>
    )
}

export default Reader