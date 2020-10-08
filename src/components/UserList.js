import React from "react";
import "./UserList.css";
import uniqid from "uniqid";


export default function Userlist(props) {
  return <>
    <ul>
      {(Array.isArray(props.data))
        ? props.data.map((user) => {
          return (
            <li key={uniqid()} ref={React.createRef()}>
              <code>
                {`${user.id} ${user.username}`}
              </code>
            </li>
          );
        })
        : <div className="spinner">"Loading"</div>
      }
    </ul>
  </>
}