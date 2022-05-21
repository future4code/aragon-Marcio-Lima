export default function LikeIcon() {
  return (
    <>
      <svg
        id="svg1"
        class="lab__container__elt2__svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="83"
        height="65"
        viewBox="0 0 500 500"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop class="color1" offset="0" stop-color="red">
              <animate
                attributeName="offset"
                begin="svg1.click"
                dur=".3s"
                fill="freeze"
                from="0"
                to="1"
              />
            </stop>
            <stop class="color2" offset="0" stop-color="#fff">
              <animate
                attributeName="offset"
                begin="svg1.click"
                dur=".3s"
                fill="freeze"
                from="0"
                to="1"
              />
            </stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          stroke="crimson"
          stroke-width="10"
          d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,251.6c-15.8-16.6-25.6-39.1-25.6-63.9 c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4"
        />
      </svg>
    </>
  );
}
