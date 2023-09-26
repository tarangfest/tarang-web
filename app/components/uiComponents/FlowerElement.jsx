"use client";
import React from "react";

function FlowerElement({size}) {
  return (
    <svg height={size?size:"37"} viewBox="0 0 39 37" fill="none">
      <path
        d="M5.26267 31.9216L9.62 25.3922C10.0929 24.7703 10.6671 24.183 11.3427 23.6303C12.0182 23.0775 12.964 22.5938 14.18 22.1793L13.268 19.381C12.052 19.7955 11.0049 20.0028 10.1267 20.0028C9.24844 19.9337 8.43778 19.761 7.69467 19.4846L0.5 17.1008L3.03333 9.12045L10.4307 11.6078C11.3764 11.9533 12.1533 12.3679 12.7613 12.8515C13.4369 13.3352 14.1462 14.0607 14.8893 15.028L17.22 13.2661C16.4769 12.1606 15.9702 11.1933 15.7 10.3641C15.4973 9.46592 15.396 8.63679 15.396 7.87675V0H23.604V7.98039C23.604 9.0859 23.5027 10.0187 23.3 10.7787C23.0973 11.4697 22.6582 12.2988 21.9827 13.2661L24.3133 15.028C25.0564 14.0607 25.7996 13.3352 26.5427 12.8515C27.2858 12.2988 28.0289 11.8842 28.772 11.6078L35.9667 9.22409L38.5 17.1008L31.0013 19.7955C30.3258 20.0028 29.5151 20.141 28.5693 20.2101C27.6911 20.2101 26.6778 20.0028 25.5293 19.5882L24.7187 22.4902C25.8671 22.8357 26.7791 23.2848 27.4547 23.8375C28.1302 24.3903 28.7044 24.9776 29.1773 25.5994L33.7373 32.0252L27.0493 37L22.4893 30.5742C22.0164 29.8833 21.6111 29.1233 21.2733 28.2941C21.0031 27.465 20.868 26.394 20.868 25.0812H18.0307C18.0307 26.394 17.8618 27.465 17.524 28.2941C17.2538 29.1233 16.8822 29.8833 16.4093 30.5742L11.9507 36.8964L5.26267 31.9216Z"
        fill="#FF7218"
      />
    </svg>
  );
}

export default FlowerElement;