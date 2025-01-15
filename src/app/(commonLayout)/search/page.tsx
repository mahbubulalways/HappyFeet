type TSearchParams = {
  searchParams: {
    value: string;
  };
};
const SearchProduct = ({ searchParams }: TSearchParams) => {
  console.log(searchParams.value);
  return <div></div>;
};

export default SearchProduct;
