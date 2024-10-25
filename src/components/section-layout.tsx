type IProps = {
  children: React.ReactNode;
};

const SectionLayout: React.FC<IProps> = ({ children }) => {
  return <div className="w-full flex flex-col gap-4">{children}</div>;
};

export default SectionLayout;
