interface CardItem {
  text: string;
  description?: string;
}

interface CardProps {
  title: React.ReactNode;
  items: CardItem[];
}

function Card({ title, items }: CardProps) {
  return (
    <div className="bg-white p-16 rounded-[20px] shadow-md">
      <h2 className="text-4xl mt-16 ml-4 mb-12 text-center text-[#4178a8] ">
        {title}
      </h2>
      <ul className="text-center">
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            <p className="font-semibold">{item.text}</p>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
