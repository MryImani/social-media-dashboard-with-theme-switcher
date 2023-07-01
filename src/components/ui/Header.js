import ToggleButton from "./Toggle-button";

export default function Header(props){
    return (
      <header className=" px-48 pt-12 pb-36 bg-light-header flex justify-between items-center">
        <div>
          <h1 className=" font-bold font-inter text-3xl">
            Social Media Dashboard
          </h1>
          <p className=" text-gray-2 font-bold">Total Followers: 23,004</p>
        </div>
        <ToggleButton />
      </header>
    );
}
