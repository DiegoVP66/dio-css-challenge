import { AxiosRequestConfig } from "axios";
import AboutCard from "components/AboutCard";
import { useEffect, useState } from "react";
import { AboutType } from "types/about";
import { makeBackendRequest } from "util/request";

const About = () => {
  const [page, setPage] = useState<AboutType[]>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: "/about",
    };
    makeBackendRequest(config).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div id="about">
      {page?.map((item) => (
        <div key={item.id}>
          <AboutCard about={item} />
        </div>
      ))}
    </div>
  );
};

export default About;
