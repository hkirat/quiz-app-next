type QuestionPageProps = {
  title: string;
  image?: string;
  options: string[];
};

export function QuestionPage({ title, image, options }: QuestionPageProps) {
  return (
    <div className="flex justify-center items-center gap-10 flex-col h-screen w-screen">
      <p className="text-5xl font-bold">Quiz Time</p>

      <p className="text-3xl font-semibold">{title}</p>

      {image && <img src={image} className="" alt="random" />}
      {options.map((option, index) => {
        return (
          <div
            key={index}
            className="flex items-center rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 "
            />
            <label className="ms-2 text-lg font-medium text-black ">
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
}
