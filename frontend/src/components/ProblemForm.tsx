import { useForm, SubmitHandler } from "react-hook-form";

export const ProblemForm = ({
  quizId,
  problemId,
  title,
  description,
  answer,
  options,
}: {
  quizId: number;
  problemId?: number;
  title: string;
  description: string;
  answer: number;
  options: string[];
}) => {
  const defaultValues = {
    title: title,
    description: description,
    answer: answer,
    options: options,
  };
  const { register, handleSubmit, reset } = useForm<any>({
    values: {
      title: title,
      description: description,
      answer: answer,
      options: options,
    },
  });

  const UpdateProblem: SubmitHandler<any> = async (data) => {
    const response = await fetch("/api/admin/problem", {
      method: "PATCH",
      body: JSON.stringify({
        quizId: quizId,
        problemId: problemId,
        problemData: {
          title: data.title,
          description: data.description,
          correctOption: Number(data.answer),
          options: data.options,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Unable to update the Problem!");
    }
    reset(defaultValues);
  };

  const AddProblem: SubmitHandler<any> = async (data) => {
    const response = await fetch("/api/admin/problem", {
      method: "post",
      body: JSON.stringify({
        quizId: quizId,
        problemData: {
          title: data.title,
          description: data.description,
          correctOption: Number(data.answer),
          options: data.options,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Unable to Add the Problem!");
    }
    alert("Problem Added!");
    console.log(await response.json());
  };

  return (
    <div className="text-slate-700">
      <h2 className="text-xl font-medium mb-4 text-slate-700">
        {!problemId ? "Add Problem" : "Update Problem"}
      </h2>
      <form onSubmit={handleSubmit(problemId ? UpdateProblem : AddProblem)}>
        <label htmlFor="title" className="flex items-center">
          Problem Title
        </label>
        <input
          id="title"
          className="bg-gray-300 py-2 w-full border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800"
          placeholder=""
          style={{ fontSize: "1rem" }}
          type="text"
          {...register("title")}
        />
        <label htmlFor="description" className="flex">
          Description
        </label>
        <textarea
          id="description"
          className="bg-gray-300 w-full border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800 h-24"
          style={{ fontSize: "1rem" }}
          {...register("description")}
        />
        <div className="mb-4">
          <h3 className="text-base font-medium mb-2">Options</h3>
          {[0, 1, 2, 3].map((optionId) => (
            <div key={optionId} className="flex items-center mb-2">
              <input
                type="radio"
                id={`answer-${optionId}`}
                value={optionId}
                {...register("answer")}
              />
              <label
                htmlFor={`answer-${optionId}`}
                className="text-gray-700 ml-2"
              >
                {optionId}
              </label>
              <input
                id={`option-${optionId}`}
                className="bg-gray-300 text-center p-2 border-2 border-purple-600 rounded-lg shadow-sm focus:outline-none focus:border-purple-800 ml-2"
                placeholder={`Option ${optionId + 1}`}
                style={{ fontSize: "1rem" }}
                type="text"
                {...register(`options.${optionId}.title`)}
              />
            </div>
          ))}
        </div>
        <button
          className="bg-purple-600 text-white py-2 rounded-lg shadow-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 w-full"
          style={{ fontSize: "1rem" }}
        >
          {problemId ? "Update Problem" : "Add Problem"}
        </button>
      </form>
    </div>
  );
};
