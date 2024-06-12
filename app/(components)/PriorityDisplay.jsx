import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex gap-0.5 justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 0 ? "text-red-400" : "text-neutral-300"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 1 ? "text-red-400" : "text-neutral-300"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 2 ? "text-red-400" : "text-neutral-300"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 3 ? "text-red-400" : "text-neutral-300"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`${priority > 4 ? "text-red-400" : "text-neutral-300"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
