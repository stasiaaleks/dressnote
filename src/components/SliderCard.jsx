function SliderCard({ brand, photo, price, product }) {
  return (
    <div className="slider-card">
      <img className="slider-card__img" src={photo} />
      <svg
        className="slider-card__like"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.8931 1.87332C13.5526 1.53265 13.1483 1.26242 12.7033 1.07804C12.2584 0.893665 11.7814 0.798767 11.2998 0.798767C10.8181 0.798767 10.3412 0.893665 9.89618 1.07804C9.45121 1.26242 9.04692 1.53265 8.70642 1.87332L7.99975 2.57998L7.29309 1.87332C6.60529 1.18552 5.67244 0.799124 4.69975 0.799124C3.72706 0.799124 2.79422 1.18552 2.10642 1.87332C1.41863 2.56111 1.03223 3.49396 1.03223 4.46665C1.03223 5.43934 1.41863 6.37219 2.10642 7.05998L2.81309 7.76665L7.99975 12.9533L13.1864 7.76665L13.8931 7.05998C14.2337 6.71948 14.504 6.31519 14.6884 5.87022C14.8727 5.42525 14.9676 4.94831 14.9676 4.46665C14.9676 3.98499 14.8727 3.50805 14.6884 3.06308C14.504 2.61811 14.2337 2.21382 13.8931 1.87332V1.87332Z"
          stroke="#6E6D74"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span className="slider-card__brand">{brand}</span>
      <span className="slider-card__product">{product}</span>
      <span className="slider-card__price">{price}</span>
    </div>
  );
}

function Arrow({ className }) {
  return (
    <svg
      className={className}
      width="26"
      height="16"
      viewBox="0 0 26 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 8H1"
        stroke="#B5B5BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 15L1 8L8 1"
        stroke="#B5B5BC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { SliderCard, Arrow };
