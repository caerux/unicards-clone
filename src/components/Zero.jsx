const Zero = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Zero Forex Markup.
            <span className="text-gray-500">
              Go international, without any fees.
            </span>
          </p>
        </div>
        <img
          className="w-full md:max-w-sm lg:max-w-md xl:max-w-lg mt-4 md:mt-0"
          src="/forex_globe.png"
          alt="zero forex"
        />
      </div>
    </div>
  );
};

export default Zero;

<div className="flex">
  <div className="w-1/2 p-4">
    <p className="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat leo
      non arcu sodales, vitae ultricies lacus venenatis. In hac habitasse platea
      dictumst. Integer nec malesuada nisl. Aliquam erat volutpat. Donec sit
      amet felis non sapien vestibulum pulvinar ac nec mauris. Nullam non mi non
      risus consectetur varius et eu mauris. Sed fringilla nunc vel turpis
      lobortis, eget consectetur nisl mattis.
    </p>
  </div>
  <div className="w-1/2">
    <img className="w-full" src="/forex_globe.png" alt="Placeholder" />
  </div>
</div>;
