import { use, useState } from "react";
import type { Technology } from "../../Type/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TechnologyCardProps {
  TechnologyCardPromise: Promise<Technology[]>;
}
const TechnologyCard = ({
  TechnologyCardPromise,}: TechnologyCardProps) => {
  const technologies = use(TechnologyCardPromise);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
  const alreadyExists = selectedTechs.some(
    (tech) => tech.id === technology.id
  );

  if (alreadyExists) {
    toast.warning(`${technology.name} is already added to your stack!`);
    return;
  }

  setSelectedTechs([...selectedTechs, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

  const handleRemove = (id: string) => {
  const removedTech = selectedTechs.find(
    (tech) => tech.id === id
  );

  setSelectedTechs(
    selectedTechs.filter((tech) => tech.id !== id)
  );

  if (removedTech) {
    toast.info(`${removedTech.name} removed from your stack!`);
  }
};

  const handleRemoveAll = () => {
  setSelectedTechs([]);

  toast.info("All technologies removed from your stack!");
};

  return (
    <>
    <section className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-[1340px] px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isSelected = selectedTechs.some(
                (tech) => tech.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className={`rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md ${isSelected
                      ? "border-pink-400 ring-2 ring-pink-100"
                      : "border-gray-200"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-500">
                      {technology.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-800">
                    {technology.name}
                  </h3>
                  <p className="mt-2 min-h-[60px] text-sm leading-5 text-gray-500">
                    {technology.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
                      {technology.category}
                    </span>
                    <span className="text-gray-500">
                      {technology.difficulty}
                    </span>
                    <span className="text-yellow-500">
                      ★ {technology.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToStack(technology)}
                    className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white transition ${isSelected
                        ? "bg-pink-500"
                        : "bg-slate-900 hover:bg-pink-500"
                      }`}
                  >
                    {isSelected
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800">
              Your Stack
            </h3>
            <p className="text-xs text-gray-400">
              {selectedTechs.length} Technology Selected
            </p>
            <div className="mt-5 space-y-3">
              {selectedTechs.length === 0 ? (
                <div className="rounded-lg border border-dashed border-gray-300 p-5 text-center">
                  <p className="text-sm text-gray-400">
                    No technology selected
                  </p>
                </div>
              ) : (
                selectedTechs.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-7 w-7 object-contain"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700">
                          {tech.name}
                        </h4>
                        <p className="text-[10px] text-gray-400">
                          {tech.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(tech.id)}
                      className="text-xl text-gray-400 transition hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))
              )}

            </div>
            <button
              onClick={handleRemoveAll}
              disabled={selectedTechs.length === 0}
              className="mt-5 w-full rounded-lg border border-pink-200 py-2 text-sm font-semibold text-pink-500 transition hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Remove All
            </button>
          </div>
        </div>
            
      </div>

    </section>
    <ToastContainer />

    </>
  );
  
};

export default TechnologyCard;

