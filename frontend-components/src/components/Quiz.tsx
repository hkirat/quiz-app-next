"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const problem = "Which JavaScript framework do you prefer?";

const options = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Alpine",
    description:
      "A rugged, minimal framework for composing JavaScript behavior in your markup.",
  },
  {
    name: "Svelte",
    description: "Cybernetically enhanced web apps",
  },
  {
    name: "Vue",
    description: "The Progressive JavaScript Framework",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Quiz() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <div className="mb-5 mt-5">
        <label className="text-base font-semibold text-gray-900">
          {problem}
        </label>
        <p className="text-sm text-gray-500">
          Select any one of the following options.
        </p>
      </div>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
        <div className="-space-y-px rounded-md bg-white">
          {options.map((setting, settingIdx) => (
            <RadioGroup.Option
              key={setting.name}
              value={setting}
              className={({ checked }) =>
                classNames(
                  settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                  settingIdx === options.length - 1
                    ? "rounded-bl-md rounded-br-md"
                    : "",
                  checked
                    ? "z-10 border-gray-200 bg-gray-50"
                    : "border-gray-200",
                  "relative flex cursor-pointer border p-4 focus:outline-none"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span
                    className={classNames(
                      checked
                        ? "bg-gray-600 border-transparent"
                        : "bg-white border-gray-300",
                      active ? "ring-2 ring-offset-2 ring-gray-600" : "",
                      "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <span className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked ? "text-gray-900" : "text-gray-900",
                        "block text-sm font-medium"
                      )}
                    >
                      {setting.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={classNames(
                        checked ? "text-gray-700" : "text-gray-500",
                        "block text-sm"
                      )}
                    >
                      {setting.description}
                    </RadioGroup.Description>
                  </span>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
}
