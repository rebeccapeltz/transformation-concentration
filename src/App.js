import { Routes, Route } from "react-router-dom"

import Game from "./game.js"
import Learn from "./learn.js"

export default function App() {
  const data = [
    {
      type: "Cartoonify",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_cartoonify/chicken.jpg",
      image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Cartoonify/1px.png"
    },
    {
      type: "Grayscale",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_grayscale/rocket.jpg",
      image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Grayscale/1px.png"
    },
    {
      type: "Outline",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_outline:20,co_green/unicorn-head.png",
      image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Outline/1px.png"
    },
    {
      type: "Sepia",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_sepia/cld-sample",
      image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Sepia/1px.png"
    },
    {
      type: "Blur-faces",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_blur_faces/tutoring",
      image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Blur%20Faces/1px.png"
    },
    {
      type: "Oil-paint",
      image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_pad,b_auto,e_oil_paint/rose-peach",
      image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Oil%20Paint/1px.png"
    }
  ];
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Learn data={data} />} />
          <Route path="/game" element={<Game />} />
        </Routes>

    </div>
  );
}
