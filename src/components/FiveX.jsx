const FiveX = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img
          className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg mt-4 md:mt-0"
          src="/five_x_rewards.png"
          alt="5x rewards"
        />
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          5x more value than your cashback,
            <span className="text-gray-500">
            only at the Uni Store.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiveX;
