// import "./overview-item.css";
export default function OverviewItem(props) {
  const { item, theme } = props;
  return (
    <div
      className={
        theme === "dark"
          ? "bg-dark-item flex flex-col  justify-evenly rounded-md p-8 "
          : "flex flex-col  justify-evenly bg-light-item rounded-md p-8 "
      }
    >
      <div className="flex items-center justify-between">
        <span
          className={
            theme === "dark"
              ? "text-gray-light-2 font-semibold"
              : "text-gray-2 font-semibold"
          }
        >
          {item.text}
        </span>
        <img className="" src={item.icon} alt={item.name} />
      </div>
      <div className="flex items-center justify-between mt-8">
        <p
          className={
            theme === "dark"
              ? "text-3xl font-bold text-white"
              : "text-3xl font-bold"
          }
        >
          {item.count}
        </p>
        <div className={`flex items-center text-${item.color} font-semibold`}>
          <img src={item.src} alt={item.name} />
          <span className="mx-1">{item.percent}%</span>
        </div>
      </div>
    </div>
  );
}
