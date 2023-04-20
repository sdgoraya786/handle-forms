import React, { useState, useEffect } from "react";
import Loading from "./Loading";

////  Thapa Technical #14 Users Data using useEffect Hook with Fetch API
// const UseEffectAPI4 = () => {
//   const [users, setUsers] = useState([]);
//   const getUsers = async () => {
//     const reaponse = await fetch("api link");
//     console.log(reaponse);
//     const data = await reaponse.json();
//     console.log(data);
//     setUsers([data]);
//   };
//   useEffect(() => {
//     getUsers();
//   }.[]);

//   return <div>UseEffectAPI4</div>;
// };

// export default UseEffectAPI4;

//// --------------------------------------------- ////
// Thapa Technical #15 React Github User Project Code-Refactor and Adding Error Handling, Loading Functionality

// const UseEffectAPI4 = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const getUsers = async () => {
//     try {
//       const reaponse = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       // console.log(reaponse);
//       const data = await reaponse.json();
//       // console.log(data);
//       setUsers(data);
//       setLoading(false);
//     } catch (error) {
//       console.log("my error is " + error);
//     }
//   };
//   useEffect(() => {
//     getUsers();
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <div>
//       {users.map((curElem) => {
//         const { id, title } = curElem;
//         return (
//           <div key={id}>
//             {id} :- {title} <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default UseEffectAPI4;

//--------------------------
const UseEffectAPI4 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
      const reaponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUsers(await reaponse.json());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("my error is " + error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {users.map((curElem) => {
            const { id, title } = curElem;
            return (
              <div key={id}>
                {id} :- {title} <br />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default UseEffectAPI4;
