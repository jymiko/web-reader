import React, {EffectCallback, useEffect} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ReaderView from './components/ReaderView/ReaderView';
import './App.css'

declare var BookReader: any;

const Reader = () => {

    useEffect(()=>{
        var options= {
            data: [
              [
                { width: 800, height: 1200,
                  uri: '//archive.org/download/BookReader/img/page001.jpg' },
              ],
              [
                { width: 800, height: 1200,
                  uri: '//archive.org/download/BookReader/img/page002.jpg' },
                { width: 800, height: 1200,
                  uri: '//archive.org/download/BookReader/img/page003.jpg' },
              ],
              [
                { width: 800, height: 1200,
                  uri: '//archive.org/download/BookReader/img/page004.jpg' },
                { width: 800, height: 1200,
                  uri: '//archive.org/download/BookReader/img/page005.jpg' },
              ]
            ],
          
            bookTitle: 'Simple BookReader Presentation',
          
            // thumbnail is optional, but it is used in the info dialog
            thumbnail: '//archive.org/download/BookReader/img/page014.jpg',
          
            // Metadata is optional, but it is used in the info dialog
            metadata: [
              {label: 'Title', value: 'Open Library BookReader Presentation'},
              {label: 'Author', value: 'Internet Archive'},
              {label: 'Demo Info', value: 'This demo shows how one could use BookReader with their own content.'},
            ],
          
            ui: 'full', // embed, full (responsive)
          
        };
        // var br = new BookReader(options);
        // br.init();
    })
    
    return (
       
        <>
            <div id="Bookreader">

            </div>
        </>
    )
}


export default Reader