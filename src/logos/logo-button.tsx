type InputProps = {
  link: string;
  children: React.ReactNode;
};

export const LogoButton = ({ link, children }: InputProps) => {
  return (
    <a href={link} target="_blank">
      {children}
    </a>
  );
};
