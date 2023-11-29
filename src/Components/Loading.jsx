import { PuffLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="p-10">
      <PuffLoader size={150} color="#4f46e5" />
    </div>
  );
};
