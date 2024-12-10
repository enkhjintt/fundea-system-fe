type IProps = {
  children: React.ReactNode;
};

const SectionLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col gap-4 px-20 mt-10">{children}</div>
  );
};

export default SectionLayout;
