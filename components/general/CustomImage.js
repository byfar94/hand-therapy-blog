import Image from "next/image";

const CustomImage = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
    />
  );
};

export default CustomImage;
