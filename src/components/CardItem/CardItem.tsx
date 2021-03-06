import React from "react"
import Icon from '../../assets/book-reading.png'

type CardItemProps = {
    image: string,
    title: string,
    author: string, 
    url: string
}

const CardItem =({image, title, author, url}:CardItemProps) =>{
    return (
        <div className="container w-48 shadow-lg p-2 rounded-md bg-white">
            <div className="w-11/12 mx-auto mb-4 shadow">
                <img src={image} alt={title} className="rounded"/>
            </div>
            <div className="space-y-4">
                <a href={url} rel="noreferrer" target="_blank">
                    <h3 className="text-sm font-bold h-20">{title}</h3>
                </a>
            </div>
            <div className="mb-6">
                <span className="text-xs text-gray-500">{author}</span>
            </div>
            <div className="mx-auto text-center bg-blue-500 rounded-md py-1 px-2 flex grid grid-cols-2 gap-0">
                <img src={Icon} alt="icon-button" className="text-white h-6 my-auto ml-auto mr-4" />
                <button className="text-white font-bold text-left">Baca</button>
            </div>
        </div>
    );
}

export default CardItem