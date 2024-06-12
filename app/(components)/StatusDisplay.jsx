const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    switch (status) {
      case "done":
        return "bg-green-400";
      case "started":
        return "bg-yellow-400";
      case "not started":
        return "bg-red-400";
      default:
        return "bg-neutral-300";
    }
  };

  return (
    <span
      className={`capitalize inline-block rounded-full px-2 py-1 text-xs font-semibold text-neutral-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
