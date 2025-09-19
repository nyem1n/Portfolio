interface CardItem {
  icon?: React.ReactNode;
  text: string;
  description?: string;
  link?: string;
}

interface CardProps {
  title: React.ReactNode;
  items: CardItem[];
}

function Card({ title, items }: CardProps) {
  return (
    <div className="bg-white p-6 md:p-16 rounded-[20px] shadow-md w-[400px] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-center text-[#4178a8]">
        {title}
      </h2>

      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-center">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            {item.icon && <div className="mb-2 text-3xl">{item.icon}</div>}

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition"
              >
                {item.text}
              </a>
            ) : (
              <p className="font-bold">{item.text}</p>
            )}

            {item.description && (
              <p className="text-xs md:text-sm text-gray-500">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
