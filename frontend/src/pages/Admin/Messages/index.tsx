import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { ContactType } from "types/contact";
import { SpringPage } from "types/spring";
import { makeBackendRequest } from "util/request";

import "./styles.css";

type ControlComponentsData = {
  activePage: number;
};
const Message = () => {
  const [message, setMessage] = useState<SpringPage<ContactType>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
    });
  };

  const getMessage = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/contact",
      params: {
        page: controlComponentsData.activePage,
        size: 1,
      },
    };

    makeBackendRequest(config).then((response) => {
      setMessage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMessage();
  }, [getMessage]);

  const handleDelete = (messageId: number) => {
    if (!window.confirm("tem certeza que deseja deletar?")) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: `/contact/${messageId}`,
      withCredentials: true,
    };

    makeBackendRequest(config)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Erro ao deletar " + error);
      });
  };

  return (
    <div className="message-container">
      <h1 className="message">Messages</h1>
      <div className="row">
        <div className="">
          {message?.content.map((item) => (
            <div className="message-content-container" key={item.id}>
              <h3>Name:{item.name}</h3>
              <h4>E-mail:{item.email}</h4>
              <p>Message:{item.message}</p>
              <div className="project-delete-button">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Pagination
          pageCount={message ? message.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Message;
