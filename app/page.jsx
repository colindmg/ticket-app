import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
