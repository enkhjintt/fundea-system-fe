type IProps = { children: React.ReactNode; className?: string };

const Wrapper: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-base-white border-primary-normal rounded-md shadow-md`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
