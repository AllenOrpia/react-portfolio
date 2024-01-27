import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Website from "/Website.png";
import CalGems from "/Calgems1.png";
import EstatePirates from "/EstatePirates.png";

export default function Projects() {
  return (
    <div className="p-10">
      <div className="">
        <h3 className="text-3xl py-2 font-medium">Projects I've Created</h3>
        <p className="text-xl py-2">
          These are just projects i've worked on and always wanted to build
          based on my hobbies or interests. They are applications built with the
          current <span className="text-blue-500">languages</span>,
          <span className="text-blue-500"> frameworks</span> , and{" "}
          <span className="text-blue-500"> databases</span> I know.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-md p-10 rounded-xl my-10 flex-1 dark:shadow-blue-500">
          <h3 className="mb-3 text-3xl font-bold font-signature">
            Personal Website
          </h3>

          <img src={Website} alt="" className="w-full mb-3 h-40 mx-auto" />
          <div className="flex justify-between px-5 my-3">
            <a
              href="https://allenorpia.github.io/react-portfolio/"
              className="text-blue-500 underline underline-offset-2"
            >
              Source
            </a>
            <a
              href="https://github.com/AllenOrpia/react-portfolio"
              className="text-blue-500 underline underline-offset-2"
            >
              Code
            </a>
          </div>

          <p className="mb-3 leading-8">
            Landing page for you to find out more about me. Why I transitioned
            to the tech sector as well as how to get a hold of me via github or
            linkedin.
          </p>
          <h4>
            <span className="text-blue-500 font-medium text-lg ">
              What I used
            </span>
          </h4>
          <p>Languages - JavaScript, HTML</p>
          <p>Libraries - TailwindCSS, React, Material UI</p>
        </div>
        <div className="text-center shadow-md p-10 rounded-xl my-10 flex-1 dark:shadow-blue-500">
          <h3 className="mb-3 text-3xl font-bold font-signature">CalGems</h3>
          <img src={CalGems} alt="gem image" className="mb-3 w-full h-40 mx-auto" />
          <div className="flex justify-between px-5 my-3">
            <a
              href="https://serene-anchorage-99994-207a1d3f8d8d.herokuapp.com/"
              className="text-blue-500 underline underline-offset-2"
            >
              Source
            </a>
            <a
              href="https://github.com/AllenOrpia/CalGems"
              className="text-blue-500 underline underline-offset-2"
            >
              Code
            </a>
          </div>
          <p className="mb-3 leading-8">
            Full stack application with CRUD functionality. Through CalGems you
            can Share your memories or even moments to the whole world. You can
            explore/search for hiking trails or rate hiking trails and give
            honest reviews as to why you liked or disliked the trail.
          </p>
          <h4>
            <span className="text-blue-500 font-medium text-lg">
              What I used
            </span>
          </h4>
          <p>Languages - JavaScript, HTML, CSS</p>
          <p>Libraries - Bootstrap</p>
          <p>Frameworks - Express</p>
          <p>Databases - MongoDB</p>
        </div>

        <div className="text-center shadow-md p-10 rounded-xl my-10 flex-1 dark:shadow-blue-500">
          <h3 className="mb-3 text-3xl font-bold font-signature">
            Estate Pirates
          </h3>
          <img
            src={EstatePirates}
            alt="gem image"
            className="mb-3 w-full h-40 mx-auto"
          />
          <div className="flex justify-between px-5 my-3">
            <a
              href="https://estatepirates.vercel.app/"
              className="text-blue-500 underline underline-offset-2"
            >
              Source
            </a>
            <a
              href="https://github.com/AllenOrpia/Estate-Pirates"
              className="text-blue-500 underline underline-offset-2"
            >
              Code
            </a>
          </div>
          <p className="mb-3 leading-8">
            A cutting-edge real estate platform using the
            MERN stack. With Estate Pirates users can search for property listings as well as add or list their own properties for sale.
            Users also have the ability to like certain listings for future reference as well as book house tour appointments. Lastly,
            with the use of Auth0 users can login and register seamlessly and securely.
          </p>
          <h4>
            <span className="text-blue-500 font-medium text-lg">
              What I used
            </span>
          </h4>
          <p>Languages - JavaScript, HTML, CSS</p>
          <p>Libraries - TailwindCSS, Material UI</p>
          <p>Frameworks - Express, React</p>
          <p>Databases - MongoDB</p>
        </div>
      </div>
    </div>
  );
}
