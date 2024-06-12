import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-default-text flex justify-between px-16 py-5">
      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href={"/TicketPage/new"}>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-page">contact@colindmg.dev</p>
      </div>
    </nav>
  );
};

export default Nav;
