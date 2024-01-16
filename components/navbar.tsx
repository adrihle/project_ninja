type NavbarProps = {
  children: JSX.Element;
}

type TitleProps = {
  text: string,
}

const Title = ({ text }: TitleProps) => {
  return <div>{text}</div>
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <div>
      {children}
      <Title text={'loquesea'}/>
    </div>
  );
};

export default Navbar;
