// import React, { useState } from 'react'
// import axios from "axios"
// import { useEffect } from 'react'
// const Index = () => {
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/comments").then(response => {
//             console.log(response);
//             setUsers(response.data)
//         })
//     }, [])
//     return (
//         <div>
//             <table className="table table-bordered table-hover table-striped" >
//                 <thead>
//                     <tr>
//                         <th>Post Id</th>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Body</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         users.map((item, index) => {
//                             return (
//                                 <tr key={index} >
//                                     <td>{item.postId}</td>
//                                     <td>{item.id}</td>
//                                     <td>{item.name}</td>
//                                     <td>{item.email}</td>
//                                     <td>{item.body}</td>
//                                 </tr>
//                             );
//                         })
//                     }

//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Index


import React, { useEffect, useState } from "react";
import axios from "axios";
const Index = () => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`)
      .then((response) => {
        console.log(response);
        setComments(response.data);
      });
  }, [page, limit]);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="comments">
      <div className="row">
        <div className="col-md-4">
          <select onChange={(e)=>setLimit(e.target.value)} className="form-control my-2">
            <option value="" selected>Select limit</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center my-3 buttons">
        <button className="btn btn-primary mx-2" onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <p className="my-auto">{page}</p>
        <button className="btn btn-primary mx-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Index;
