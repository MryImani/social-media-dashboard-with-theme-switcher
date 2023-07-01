import SocialItem from "./social-item";
export default function SocialList(props) {
  return (
    <div className="grid gap-8 grid-cols-4 -mt-24">
      {props.items.map((item) => (
        <SocialItem item={item} key={item.name} />
      ))}
    </div>
  );
}
