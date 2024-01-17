type CenteredPaginationProps = {
  children: JSX.Element;
};

const CenteredPagination = ({ children }: CenteredPaginationProps) => {
  return <div className="flex justify-center pt-16">{children}</div>;
};

export default CenteredPagination;
