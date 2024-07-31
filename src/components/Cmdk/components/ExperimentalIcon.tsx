import React from "react";

export const ExperimentalIcon: React.FC<ExperimentalIconProps> = ({ className }) => {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.49989 0.166626H9.49989V4.78101C9.49989 5.00202 9.58769 5.21398 9.74397 5.37026L13.0773 8.7036C14.2322 9.85854 13.4143 11.8333 11.7809 11.8333H2.21884C0.585518 11.8333 -0.232453 9.85853 0.922482 8.7036L4.25582 5.37026C4.4121 5.21398 4.49989 5.00202 4.49989 4.78101V0.166626ZM3.3474 7.69289L4.96292 6.07737C5.30674 5.73355 5.49989 5.26724 5.49989 4.78101V1.16663H8.49989V4.78101C8.49989 5.26724 8.69305 5.73355 9.03686 6.07737L10.1453 7.1858L9.77706 7.11216C8.79581 6.91591 7.77713 7.05233 6.88208 7.49985L6.67049 7.60564C5.97435 7.95372 5.18204 8.05982 4.41884 7.90718L3.3474 7.69289ZM11.5975 8.63796C11.4813 8.52218 11.3335 8.44325 11.1726 8.41108L9.58095 8.09274C8.81775 7.9401 8.02544 8.0462 7.32929 8.39428L7.11771 8.50007C6.22266 8.94759 5.20398 9.08401 4.22272 8.88776L2.93489 8.63019C2.66167 8.57555 2.37922 8.66107 2.1822 8.85809L1.62959 9.4107C1.10462 9.93567 1.47642 10.8333 2.21884 10.8333H11.7809C12.5234 10.8333 12.8952 9.93567 12.3702 9.41071L11.5975 8.63796Z"
        fill="#00BC8D"
      />
    </svg>
  );
};

interface ExperimentalIconProps {
  className: string;
}