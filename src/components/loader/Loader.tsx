
type LoaderProps = {
  size: "md" | "lg" | "xl";
};

const sizeClasses = {
  md: "w-10 h-10",
  lg: "w-16 h-16",
  xl: "w-28 h-28"
};

function Loader({size}: LoaderProps) {
  return (
    <div>
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className={`${sizeClasses[size]} border-8 text-[#FC9D0F] text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-[#FC9D0F] rounded-full`}></div>
      </div>
    </div>
  );
}

export default Loader;
