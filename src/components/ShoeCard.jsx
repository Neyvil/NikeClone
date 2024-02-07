const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  
  // Changing the shoe on click
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    // Showing RED border on click
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe ? "border-coral-red" : "border-transparent" 
      }
     cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className=" flex jusitify-center 
      items-center bg-card bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
        <img src={imgURL.bigShoe} 
        alt="Shoe Collection"
        width={127}
        height={103}
        className=" object-contain"
        />

      </div>
    </div>
  );
};

export default ShoeCard;
