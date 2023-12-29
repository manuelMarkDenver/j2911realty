import "./slick-arrows.css"; // Import the stylesheet

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`} // Apply the CSS class
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-slick-arrow`} // Apply the CSS class
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

export { SamplePrevArrow, SampleNextArrow };
