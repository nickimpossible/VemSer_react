import PageLinks from "./PageLinks";
import LogoutButton from "./LogoutButton";

function Header() {
  return (
    <div>
      <PageLinks/>
      <LogoutButton/>
    </div>
  );
}

export default Header;