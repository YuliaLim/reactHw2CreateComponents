import Reference from "./Reference";
import Input from "./Input";

const Header = () => {
  return (
    <header className="header">
      <Reference href="/" className="logo" text="Pizza Day"></Reference>
      <Input placeholder="Search for the order #"></Input>
    </header>
  );
};

export default Header;
