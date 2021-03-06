import React, {useState} from "react";
import CardItem from "./components/CardItem/CardItem";
import DummyBooks from './dummy.json';

export default function Dashboard () {
    const [searchItems, setSearchItems] = useState<String>("")
    const filterBook = DummyBooks.filter(books => {
        return books.title.toLocaleLowerCase().indexOf(searchItems.toLowerCase()) !== -1;
    })

    return(
        <>
            <form className="pt-4 pb-8">
                <input type="search" placeholder="Search" className="px-5 bg-gray-100 p-2 w-80 placeholder-gray-500 placeholder-opacity-50 rounded-full focus:outline-none" onChange={(e)=>{setSearchItems(e.target.value)}}/>
            </form>
            <div className="flex grid lg:grid-cols-6 lg:gap-4 md:grid-cols-3 md:gap-10 sm:grid-cols-3 grid-cols-1 gap-8 mx-14 sm:mx-auto">
                {filterBook.map(books => {
                    return (
                        <CardItem
                            image={books.image}
                            title={books.title}
                            author={books.author}
                            url={books.url}
                        />
                    )
                })}
                {/* <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                />
                <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                />
                <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                />
                <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                />
                <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                />
                <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                />
                <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                />
                <CardItem
                    image="https://s3-ap-southeast-1.amazonaws.com/ebook-covers/62602/thumb_image_highres/BLK_T1BHDTDSK2R22021839260.jpg"
                    title="Tematik 1G Benda, Hewan, dan Tanaman di Sekitarku Kurikulum 2013 Revisi 2016"
                    author="Marini, Muryanti, Supriyadi"
                    url="https://ebooks.gramedia.com/books/tematik-1g-benda-hewan-dan-tanaman-di-sekitarku-kurikulum-2013-revisi-2016?buffet=1"
                /> */}
            </div>
            
        </>
    )
}