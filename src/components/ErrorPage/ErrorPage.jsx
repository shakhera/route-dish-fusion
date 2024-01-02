import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
        <p className="italic text-gray-600 mb-8">
          {error.statusText || error.message}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
