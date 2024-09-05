const BigImage = () => {
  return (
    <div className="flex flex-col justify-center h-[80vh] bg-[url('https://www.adobe.com/homepage/media_1a8a8ea968a233876d5b7d915c391758be60eab77.png?width=2000&format=webply&optimize=medium')] bg-cover">
      <div className="w-1/2 h-1/2 flex flex-col justify-evenly pl-96">
        <h1 className="text-sm font-medium">LIMITED-TIME OFFER</h1>
        <h2 className="text-4xl font-semibold">Our best deal ever on <br/> Adobe Express for teams.</h2>
        <p className="text-xl">
          Empower everyone on your team to create on-brand <br/> content for only
          US$49.99/person annually. Minimum <br/> two seats. Lock in for three years.
          Ends Sep 30. See <br/> terms.
        </p>
        <div className="flex justify-start">
          <button className="w-36 h-12 rounded-full bg-blue-600 text-white text-lg font-semibold">Get the offer</button>
        </div>
      </div>
      
    </div>
  );
};

export default BigImage;
