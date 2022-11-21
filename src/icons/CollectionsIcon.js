import React from "react";

export default function CollectionsIcon({ isSelected, color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.85 10.1C9.68333 10.2666 9.5 10.3083 9.3 10.225C9.1 10.1416 9 9.98328 9 9.74995V1.94995C9 1.66662 9.096 1.42895 9.288 1.23695C9.47933 1.04562 9.71667 0.949951 10 0.949951H17C17.2833 0.949951 17.5207 1.04562 17.712 1.23695C17.904 1.42895 18 1.66662 18 1.94995V6.94995C18 7.23328 17.904 7.47062 17.712 7.66195C17.5207 7.85395 17.2833 7.94995 17 7.94995H12L9.85 10.1ZM16.95 19C14.8 19 12.7043 18.5206 10.663 17.562C8.621 16.604 6.81267 15.3373 5.238 13.762C3.66267 12.1873 2.396 10.379 1.438 8.33695C0.479334 6.29562 0 4.19995 0 2.04995C0 1.74995 0.0999999 1.49995 0.3 1.29995C0.5 1.09995 0.75 0.999951 1.05 0.999951H5.1C5.33333 0.999951 5.54167 1.07495 5.725 1.22495C5.90833 1.37495 6.01667 1.56662 6.05 1.79995L6.7 5.29995C6.73333 5.53328 6.72933 5.74562 6.688 5.93695C6.646 6.12895 6.55 6.29995 6.4 6.44995L4 8.89995C4.7 10.1 5.575 11.225 6.625 12.275C7.675 13.325 8.83333 14.2333 10.1 15L12.45 12.65C12.6 12.5 12.796 12.3873 13.038 12.312C13.2793 12.2373 13.5167 12.2166 13.75 12.25L17.2 12.95C17.4333 13 17.625 13.1123 17.775 13.287C17.925 13.4623 18 13.6666 18 13.9V17.95C18 18.25 17.9 18.5 17.7 18.7C17.5 18.9 17.25 19 16.95 19Z"
        fill={isSelected ? "#1570EF" : color}
      />
    </svg>
  );
}
