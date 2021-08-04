import React, {useEffect, useState, useRef} from 'react';
import { ReactReader } from "react-reader";


const EpubView = () => {
    const [location, setLocation] = useState(null)
    const [page, setPage] = useState('')
    const renditionRef = useRef(null)
    const tocRef = useRef(null)
    const [size, setSize] = useState(100)
    const changeSize = (newSize) => {
        setSize(newSize)
    }
    useEffect(() => {
        if (renditionRef.current) {
            renditionRef.current.themes.fontSize(`${size}%`)
        }
    }, [size])
    const locationChanged = (epubcifi) => {
        const { displayed, href } = renditionRef.current.location.start
        const chapter = tocRef.current.find((item) => item.href === href)
        setPage(`Page ${displayed.page} of ${displayed.total} in chapter ${chapter ? chapter.label : 'n/a'}`)
        setLocation(epubcifi)
    }
    return(
        <>
            <div style={{ height: "100vh" }}>
                <ReactReader
                    title={'Alice in wonderland'}
                    location={location}
                    locationChanged={locationChanged}
                    getRendition={(rendition) => renditionRef.current = rendition}
                    tocChanged={toc => tocRef.current = toc}
                    url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
                />
            </div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', left: '1rem', textAlign: 'center', zIndex: 1}}>
                {page}
            </div>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', textAlign: 'center', zIndex: 1}}>
                <button onClick={() => changeSize(Math.max(80, size - 10))}>-</button>
                <span> Current size: {size}% </span>
                <button onClick={() => changeSize(Math.min(130, size + 10))}>+</button>
            </div>
        </>
    )
}

export default EpubView