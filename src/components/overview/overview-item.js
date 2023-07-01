import "./overview-item.css";
export default function OverviewItem(props) {
  const { item } = props;
  return (
    <div
      className={` flex flex-col  justify-evenly bg-light-item rounded-md p-8 `}
    >
      <div className="flex items-center justify-between">
        <span>{item.text}</span>
        <img className="" src={item.icon} alt={item.name} />
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-3xl font-bold">{item.count}</p>
        <div className={`flex items-center text-${item.color} font-semibold`}>
          <img src={item.src} alt={item.name} />
          <span className="mx-1">{item.percent}%</span>
        </div>
      </div>
     
    </div>
  );
}
