
import ToggleButton from "./Toggle-button";

export default function Header(props){
    const {theme} = props; 

    return (
      <header
        className={
          theme === "dark"
            ? "md:px-48 pt-8 pb-24 md:pb-44 bg-gray-dark flex flex-col md:flex-row justify-between items-center"
            : "md:px-48 pt-8 pb-24 md:pb-44 bg-light-header flex flex-col md:flex-row justify-between items-center"
        }
      >
        <div
          className={
            theme === "dark"
              ? "border-b-2 border-b-gray-light-2 pb-6 md:border-0 md:pb-0"
              : "border-b-2 border-b-gray-2 pb-6 md:border-0 md:pb-0"
          }
        >
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
