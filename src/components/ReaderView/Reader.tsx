import React, {useEffect} from 'react';
import PSPDFKitWeb from "pspdfkit";

const Reader = () => {
    var container = ""
    useEffect(() =>{
        async function loadPDF(props: any) {
            var instance  = await PSPDFKitWeb.load({
                document: props.documentUrl,
                container: container,
                baseUrl: props.baseUrl,
            })
            var test = ''
            loadPDF(test);
            instance.setToolbarItems(items => items.filter((item) => item.type !== "export-pdf"));
            instance.setViewState((state) => state.set("allowPrinting", false));
        }
    })
    return(
        <>
            <div>
                reader
            </div>
        </>
    )
}

export default Reader