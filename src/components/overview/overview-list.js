import OverviewItem from "./overview-item";

export default function OverviewList(props){
    const {items,theme} = props
   
    return (
      <div className="mt-4 md:-mt-24">
        <p
          className={
            theme === "dark"
              ? " text-white font-bold text-2xl mb-8"
              : " text-gray-2 font-bold text-2xl mb-8"
          }
        >
          {" "}
          Overview - Today
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <OverviewItem item={item} key={item.id} theme={theme} />
          ))}
        </div>
      </div>
    );
}