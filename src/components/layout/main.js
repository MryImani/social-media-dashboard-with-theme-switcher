import { useState } from "react";
import OverviewList from "../overview/overview-list";
import SocialList from "../social/socialList";
import Header from "../../components/ui/Header";

export default function Main(props) {
      const [theme, setTheme] = useState("dark");
      const setLightTheme = () => {
        setTheme("light");
      };
      const setDarkTheme = () => {
        setTheme("dark");
      };
  const socialList = [
    {
      name: "facebook",
      icon: "/images/icon-facebook.svg",
      username: "@nathanf",
      numberOfFollowers: "1987",
      text: "Followers",
      count: "12",
      src: "/images/icon-up.svg",
      color: "green",
    },
    {
      name: "twitter",
      icon: "/images/icon-twitter.svg",
      username: "@nathanf",
      numberOfFollowers: "1044",
      text: "Followers",
      count: "99",
      src: "/images/icon-up.svg",
      color: "green",
    },
    {
      name: "instagram",
      icon: "/images/icon-instagram.svg",
      username: "@realnathanf",
      numberOfFollowers: "11k",
      text: "Followers",
      count: "1099",
      src: "/images/icon-up.svg",
      color: "green",
    },
    {
      name: "youtube",
      icon: "/images/icon-youtube.svg",
      username: "Nathan F.",
      numberOfFollowers: "8239",
      text: "Subscribers",
      count: "144",
      src: "/images/icon-down.svg",
      color: "red",
    },
  ];

  const overviewList = [
    {
      text: "Page Views",
      count: "87",
      percent: "3",
      name: "facebook",
      icon: "/images/icon-facebook.svg",
      color: "green",
      src: "/images/icon-up.svg",
    },
    {
      text: "Likes",
      count: "52",
      percent: "2",
      name: "facebook",
      icon: "/images/icon-facebook.svg",
      color: "red",
      src: "/images/icon-down.svg",
    },
    {
      text: "Likes",
      count: "5462",
      percent: "2257",
      name: "instagram",
      icon: "/images/icon-instagram.svg",
      color: "green",
      src: "/images/icon-up.svg",
    },
    {
      text: " Profile Views",
      count: "52k",
      percent: "1375",
      name: "instagram",
      icon: "/images/icon-instagram.svg",
      color: "green",
      src: "/images/icon-up.svg",
    },
    {
      text: " Retweets",
      count: "117",
      percent: "303",
      name: "twitter",
      icon: "/images/icon-twitter.svg",
      color: "green",
      src: "/images/icon-up.svg",
    },
    {
      text: "Likes",
      count: "507",
      percent: "553",
      name: "twitter",
      icon: "/images/icon-twitter.svg",
      color: "green",
      src: "/images/icon-up.svg",
    },
    {
      text: "Likes",
      count: "107",
      percent: "19",
      name: "youtube",
      icon: "/images/icon-youtube.svg",
      color: "red",
      src: "/images/icon-down.svg",
    },
    {
      text: "Total Views",
      count: "1407",
      percent: "12%",
      name: "youtube",
      icon: "/images/icon-youtube.svg",
      color: "red",
      src: "/images/icon-down.svg",
    },
  ];
  return (
    <div>
      <Header
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
        theme={theme}
      />
      <div className={theme === "dark" ? "bg-dark-bg px-48 pb-12" : "px-48 pb-12 md:relative"}>
        <SocialList items={socialList} theme={theme} />
        <OverviewList items={overviewList} theme={theme} />
      </div>
    </div>
  );
}
