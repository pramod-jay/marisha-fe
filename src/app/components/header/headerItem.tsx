export default function HeaderItem() {
  const items: string[] = [
    'home',
    'products',
    'people & planet',
    'about us',
    'contact us',
  ];
  return (
    <div className='mx-auto hidden sm:flex sm:space-x-8 md:space-x-14'>
      {items.map((item: string, index: number) => (
        <div
          key={index}
          className='flex h-full cursor-pointer items-center justify-center sm:hover:border-b md:hover:border-b-2'
        >
          <p className='text-center text-2xs font-medium uppercase text-white md:text-sm'>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
