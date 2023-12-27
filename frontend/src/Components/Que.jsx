const Que = ({ title, choices, image }) => {
  return (
    <div className="max-w-md mx-auto my-5 p-4 border rounded-lg shadow-md">
      {image && (
        <img src={image} alt="Question" className="w-full mb-4 rounded-md" />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <ul className="list-none p-0">
        {choices.map((choice, index) => (
          <li
            key={index}
            className="bg-white border mb-2 p-2 rounded-md cursor-pointer transition hover:bg-gray-100"
          >
            {choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Que;
