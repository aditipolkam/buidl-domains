// import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button.tsx";

export const NotFound = () => {
  //   const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden text-center py-16">
        {/* <div className="h-48 bg-gradient-to-r from-[#ffafbd] to-[#4989a7]" /> */}
        <div className="px-8 py-6 mt-16">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 text-lg">
            Oops! The page you are looking for doesn't exist.
          </p>
          <Button
            variant="primary"
            className="mt-5"
            //    onClick={navigate("/")}
          >
            Go Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};
