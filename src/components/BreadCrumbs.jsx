import { Breadcrumbs, Link } from "@mui/material";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

const BreadCrumbsNav = () => {

  const [url, setUrl] = useState([])

  const getCurrentUrl = () => {
    let url = window.location.href;
    url = url.replace(/[0-9]/g, "");

		url = url.split("/");

		if(url[url.length-1] === '') url.pop()

    return url.slice(3);
  };

  useEffect(() => {
    const currUrl = getCurrentUrl()
    setUrl(currUrl)
    
    // eslint-disable-next-line
  },[])

  return (
    <Breadcrumbs
      separator={
        <KeyboardDoubleArrowRightRounded
          sx={{ width: "20px", height: "20px" }}
        />
      }
    >
      {url.map((e, i) => (
        <Link
          underline="hover"
          id={i}
          color={url.length === i + 1 ? "secondary" : "greyFont.main"}
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            textTransform: "capitalize",
          }}
          href="/"
        >
          {  e.replace('-', ' ')}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbsNav;
