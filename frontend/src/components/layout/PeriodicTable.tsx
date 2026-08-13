'use client'

function PeriodicTable({
  number = 1,
  symbol = "H",
  name = "Hydrogen",
  bg = "bg-blue-600",
  border = "border-blue-800",
  text = "text-white",
}) {
  return (
    <div
      className={`flex h-30 w-30 flex-col justify-between rounded-md border-4 p-3 ${bg} ${border} ${text} shadow-lg`}
    >
      <span className="text-xl font-semibold leading-none">{number}</span>
      <span className="text-center text-5xl font-bold leading-none">{symbol}</span>
      <span className="text-center text-lg capitalize leading-none">{name}</span>
    </div>
  );
}

export { PeriodicTable };