import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import { getConfig } from "@edx/frontend-platform";

import messages from "./messages";

const Head = ({ intl }) => {
  const isIIITHCourse = localStorage.getItem("isIIITHCourse");
  // if (isIIITHCourse && isIIITHCourse.length > 0 && isIIITHCourse === "yes") {
  //   const tag = document.querySelector(".logo");
  //   let logoImage;
  //   if (tag.tagName === "IMG") {
  //     logoImage = document.querySelector(".logo");
  //   } else {
  //     logoImage = tag.querySelector("img");
  //   }

  //   logoImage.src =
  //     "https://static.talentsprint.com/lms_maple/images/iiith_logo.png";
  // }
  return (
    <Helmet>
      <title>
        {intl.formatMessage(messages["profile.page.title"], {
          siteName: getConfig().SITE_NAME,
        })}
      </title>
      <link
        rel="shortcut icon"
        href={getConfig().FAVICON_URL}
        type="image/x-icon"
      />
    </Helmet>
  );
};

Head.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Head);
