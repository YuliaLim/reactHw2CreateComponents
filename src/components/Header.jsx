import Reference from "./Reference";
import Navigation from "./Navigation";
import Input from "./Input";

const Header = () => {
  return (
    <header className="header">
      <Reference href="/" className="logo" text="Pizza Day"></Reference>
      {/* <Input placeholder="Search for the order #"></Input> */}
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
