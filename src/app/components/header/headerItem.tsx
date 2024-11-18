export default function HeaderItem() {
  const items: string[] = [
    "home",
    "products",
    "people & planet",
    "about us",
    "contact us",
  ];
  return (
    <div className="hidden md: sm:flex space-x-16 mx-auto">
      {items.map((item: string, index: number) => (
        <div
          key={index}
          className="flex h-full justify-center items-center hover:border-b cursor-pointer"
        >
          <p className="headerItem">{item}</p>
        </div>
      ))}
    </div>
  );
}
