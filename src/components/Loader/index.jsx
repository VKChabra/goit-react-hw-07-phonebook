import { ThreeDots } from 'react-loader-spinner';
import { BiLoaderCircle } from 'react-icons/bi';

export const Loader = () => (
  <ThreeDots
    height="120"
    width="120"
    color="green"
    ariaLabel="three-dots-loading"
  />
);

export const BtnLoader = text => {
  return (
    <>
      <BiLoaderCircle /> ,{text}
    </>
  );
};
