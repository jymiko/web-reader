import React, {useState, useEffect} from "react";

let data = [
    {
      title: "Servers",
      image:
        "https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Storage",
      image:
        "https://images.pexels.com/photos/1182338/pexels-photo-1182338.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      title: "Networking",
      image:
        "https://images.unsplash.com/photo-1475257026007-0753d5429e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      title: "Security",
      image:
        "https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Devices",
      image:
        "https://image.freepik.com/free-vector/watercolor-dark-sky-background_23-2148496289.jpg"
    },
    {
      title: "Networking2",
      image:
        "https://image.freepik.com/free-vector/realistic-full-moon-sky-background-concept_23-2148432967.jpg"
    },
    {
      title: "Security2",
      image:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      title: "Devices2",
      image:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    }
  ];

data = [...data, ...data];

const BookSlider = () =>{
//     const [showArrow, setShowArrow] = useState<Boolean>(false)

//     useEffect(()=> {
//         new Glider(document.getElementById("glider") as HTMLCanvasElement,{
//             slidesToShow: 5,
//             slidesToScroll: 5,
//             draggable: true,
//             dots: '.dots',
//             arrows: {
//             prev: '.glider-prev',
//             next: '.glider-next'
//             }
//         });
//     },[showArrow]);  
    
    return (
        <div>
            {/* <div className="glider-contain" onMouseLeave={()=>{setShowArrow(true)}} onMouseOver={()=>{setShowArrow(false)}}>
                <div id="glider" className="flex flex-wrap">
                    {data.map(({ title, image }, i) => {
                        return (
                        <div
                            key={i}
                            className="theme"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            {title}
                        </div>
                        );
                    })}
                </div>
                <button id="prev" className={`glider-prev ${!showArrow && `hidden`}`} type="button">
                    prev
                </button>
                <button id="next" className={`glider-next ${!showArrow && `hidden`}`}type="button">
                    next
                </button>
            </div> */}
        </div>
    );
}

export default BookSlider

