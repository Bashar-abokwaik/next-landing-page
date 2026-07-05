interface PlaceholderProps {
  hasActions?: number;
}

export default function Placeholder({ hasActions = 2 }: PlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl bg-white shadow-md transition-all dark:bg-gray-800"
    >
      {/* Image */}
      <div className="relative h-[240px] w-full overflow-hidden md:h-[200px] sm:h-[180px]">
        <div className="placeholder h-full w-full bg-secondary bg-opacity-50" />

        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 p-4">
        <div className="placeholder-glow">
          <span className="placeholder col-8"></span>
        </div>

        <div className="placeholder-glow">
          <span className="placeholder col-5"></span>
        </div>

        <div className="mt-2 flex gap-3">
          {hasActions === 2 && (
            <>
              <span className="placeholder col-5 btn btn-secondary disabled"></span>
              <span className="placeholder col-5 btn btn-secondary disabled"></span>
            </>
          )}

          {hasActions === 1 && (
            <span className="placeholder col-6 btn btn-secondary disabled"></span>
          )}
        </div>
      </div>
    </div>
  );
}
