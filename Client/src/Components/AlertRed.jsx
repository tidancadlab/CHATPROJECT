function AlertRed({ returnStats }) {
  return (
    <>
      <div
        className={`${
          returnStats.originalError.code === 200
            ? "bg-green-100 border-green-400 text-green-700"
            : "bg-red-100 border-red-400 text-red-700"
        }  px-3 py-1 rounded relative text-sm`}
        role="alert"
      >
        <div className="">
          {returnStats.originalError.code === 2601 ? (
            "Already Registered"
          ) : returnStats.originalError.code === 200 ? (
            <span>
              <strong>Registered Successfully</strong> <br /> Your username is:{" "}
              <strong>{returnStats.result.userName}</strong>
            </span>
          ) : (
            ""
          )}
        </div>
        {/* <span className="block sm:inline"> Something Wrong !</span> */}
      </div>
    </>
  );
}

export default AlertRed;
