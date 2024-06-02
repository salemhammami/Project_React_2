import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CardM from "./CardM";
import NewCard from "./NewCard";

const List = ({ title }) => {
  const [movies, setMovies] = useState([
    {
      title: "The Alliance",
      description:
        "It’s been twenty years since four drug dealers have formed a peaceful pact, but after one member takes revenge on another, all hell breaks loose.",
      posterUrl: "https://mui.com/static/images/cards/paella.jpg",
      trailer: "https://www.youtube.com/embed/4CpuC6Bn7Us",
      id: 1,
      date: "December 5, 2014",
      prix: 72,
    },

    {
      title: "Dope Girls",
      description:
        "Fresh out of jail, Dee has one thing on her mind: taking over the streets. She hatches a plan to run the most powerful drug organization in the city.",
      posterUrl: "https://mui.com/static/images/cards/paella.jpg",
      trailer: "https://www.youtube.com/embed/0HIQYxOQ2S4",
      id: Math.random(),
      date: "july 18, 2020",
      prix: 65,
    },

    {
      title: "The Gods",
      description:
        "Mikey James returns from hiding to pay old debts, only to be fighting for survival against his old enemy Anthony Fasano, awaiting his return.",
      posterUrl: "https://mui.com/static/images/cards/paella.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/AhcL8O95940",
      id: Math.random(),
      date: "June 25, 2007",
      prix: 98,
    },

    {
      title: "Stash: The Movie",
      description:
        "Jay, the son of a deceased drug kingpin, is given a heart-pounding 48 hours to turn over the stash, or his mother and sister will be killed.",
      posterUrl: "https://mui.com/static/images/cards/paella.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/AxUjpfTDzy8",
      id: Math.random(),
      date: "September 15, 2023",
      prix: 57,
    },

    {
      title: "Trapped",
      description:
        "JA calculated drug dealer who is headed out of the game attempts to find vengeance for his father’s murder and give his woman a safer life.",
      posterUrl: "https://mui.com/static/images/cards/paella.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/RJaj39jI-qk",
      id: Math.random(),
      date: "September 14, 2016",
      prix: 45,
    },
    {
      title: "Trapped",
      description:
        "JA calculated drug dealer who is headed out of the game attempts to find vengeance for his father’s murder and give his woman a safer life.",
      posterUrl: "https://mui.com/static/images/cards/paella.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/RJaj39jI-qk",
      id: Math.random(),
      date: "September 14, 2016",
      prix: 72,
    },
  ]);

  const [details, setDetails] = useState([
    {
      title: "Hello",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      id: 1,
    },
    {
      title: "world",
      description:
        "o eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      id: 2,
    },
    {
      title: "salem",
      description:
        "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      id: 3,
    },
  ]);
  return (
    <div className="listStyle">
      {movies.map((el) => (
        <CardM el={el} />
      ))}
      {details.map((el) => (
        <NewCard el={el} />
      ))}
    </div>
  );
};

export default List;
