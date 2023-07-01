import SocialItem from "./social-item";
export default function SocialList(props) {
    const {items , theme} = props;
  return (
    <div className="grid gap-8 grid-cols-4  md:relative md:bottom-36">
      {items.map((item) => (
        <SocialItem item={item} key={item.name} theme={theme} />
      ))}
    </div>
  );
}
