
import ToggleButton from "./Toggle-button";

export default function Header(props){
    const {theme} = props; 

    return (
      <header
        className={
          theme === "dark"
            ? "px-48 pt-8 pb-44 bg-gray-dark flex justify-between items-center"
            : "px-48 pt-8 pb-44 bg-light-header flex justify-between items-center"
        }
      >
        <div>
          <h1
            className={
              theme === "dark"
                ? " font-bold font-inter text-3xl text-white"
                : " font-bold font-inter text-3xl"
            }
          >
            Social Media Dashboard
          </h1>
          <p
            className={
              theme === "dark"
                ? "text-gray-light-2 font-bold"
                : "text-gray-2 font-bold"
            }
          >
            Total Followers: 23,004
          </p>
        </div>
        <ToggleButton
          setLight={props.setLightTheme}
          setDark={props.setDarkTheme}
        />
      </header>
    );
}
