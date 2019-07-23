import React from "react"

import "./uiElements.scss"

export const DotDivider = () => {
  return <span className="ui-dot-divider"></span>;
};
export const LineDivider = () => {
  return <span className="ui-line-divider"></span>;
};

export const PreviousPageButton = ({ href }) => {
  return (
    <a href={href} className="ui-previous-page-button">
      Previous
    </a>
  );
};
export const NextPageButton = ({ href }) => {
  return (
    <a href={href} className="ui-next-page-button">
      Next
    </a>
  );
};
