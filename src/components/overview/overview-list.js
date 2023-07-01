import OverviewItem from "./overview-item";

export default function OverviewList(props){
    const {items} = props
    return (
      <div className=" mt-16">
        <p className=" text-gray-2 font-bold text-2xl mb-8"> Overview - Today</p>
        <div className="grid gap-8 grid-cols-4">
          {items.map((item) => (
            <OverviewItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
}