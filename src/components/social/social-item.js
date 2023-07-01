import  './item.css'
export default function SocialItem(props){
    const { item, theme } = props;
    return (
      <div
        className={
          theme === "dark" 
            ? `${item.name} dark flex flex-col items-center justify-evenly bg-dark-item rounded-md py-8 px-16 hover:bg-dark-item-hover`
            : `${item.name} light flex flex-col items-center justify-evenly bg-light-item rounded-md py-8 px-16 hover:bg-light-item-hover `
        }
      >
        <div className="flex items-center">
          <img className="mr-2" src={item.icon} alt={item.name} />
          <span
            className={
              theme === "dark"
                ? "text-gray-light-2 font-semibold"
                : "text-gray-2 font-semibold"
            }
          >
            {item.username}
          </span>
        </div>
        <p
          className={
            theme === "dark"
              ? " font-bold font-inter text-6xl mt-8 text-white"
              : " font-bold font-inter text-6xl mt-8"
          }
        >
          {item.numberOfFollowers}
        </p>
        <p className="text-sm uppercase text-light-text tracking-widest mb-8">
          {item.text}
        </p>
        <div className={`flex items-center text-${item.color} font-semibold`}>
          <img src={item.src} alt={item.name} />
          <span className="mx-1">{item.count}</span>
          <span>Today</span>
        </div>
      </div>
    );
}