import Image from "next/image";

const CustomImage = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="intrinsic"
    />
  );
};

export default CustomImage;
