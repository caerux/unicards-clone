const OnePercent = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            1% assured cashback on your spends.
            <span className="text-gray-500">
              The more you spend, the more you earn.
            </span>
          </p>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-5 text-gray-400">
            Not applicable on fuel purchase, rent & wallet transfers, ATM
            withdrawals & international transactions.
          </p>
        </div>

        <img
          className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg mt-4 md:mt-0"
          src="/one_percent_cashback.png"
          alt="1% Cashback"
        />
      </div>
    </div>
  );
};

export default OnePercent;
