import { Routes, Route } from "react-router-dom"

import Game from "./game.js"
import Learn from "./learn.js"

export default function App() {
  const data = [
    {
      type: "Cartoonify",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_360,w_480,c_pad,b_auto,e_cartoonify/chicken"
    },
    {
      type: "Grayscale",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_360,w_480,c_pad,b_auto,e_grayscale/rocket"
    },
    {
      type: "Outline",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_360,w_480,c_limit,e_outline:10,co_green/unicorn-head"
    },
    {
      type: "Sepia",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,g_auto,e_sepia/masonry-signed/ywoarjbphlgfikmg9han.png"
    },
    {
      type: "Blur-faces",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,g_auto,e_blur_faces/tutoring"
    },
    {
      type: "Oil-paint",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_pad,b_auto,e_oil_paint/rose-peach"
    }
  ];
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Learn data={data} />} />
          <Route path="/game" element={<Game data={data} />} />
        </Routes>

    </div>
  );
}
