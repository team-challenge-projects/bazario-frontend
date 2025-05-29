export const HeartImage = ({
  width = '26.000000',
  height = '24.000000',
  fill = '#000013',
}: {
  width: string;
  height: string;
  fill?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <desc>Created with Pixso.</desc>
    <defs />
    <path
      id="Vector"
      d="M18.75 1C16.16 1 13.95 2.5 13 4.64C12.04 2.5 9.83 1 7.25 1C3.8 1 1 3.68 1 7C1 16.62 13 23 13 23C13 23 25 16.62 25 7C25 3.68 22.2 1 18.75 1Z"
      stroke={fill}
      strokeOpacity="1.000000"
      strokeWidth="2.000000"
      strokeLinejoin="round"
    />
  </svg>
);
