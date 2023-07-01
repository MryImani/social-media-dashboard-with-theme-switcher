import SocialItem from "./social-item";
export default function SocialList(props) {
    const {items , theme} = props;
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative bottom-12 md:bottom-32">
      {items.map((item) => (
        <SocialItem item={item} key={item.name} theme={theme} />
      ))}
    </div>
  );
}
