import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const date = new Date(timestamp);
    return date.toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="flex flex-col bg-card rounded-lg border border-neutral-300 p-5">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <h4 className="text-xl font-semibold">{ticket.title}</h4>
      <hr className="bg-neutral-300 my-2 h-px" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>

      <div className="flex-grow"></div>

      <div className="flex mt-2 ">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
