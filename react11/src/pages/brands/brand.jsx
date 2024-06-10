import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
      .then(response => {
        console.log(response);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
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
    <div className="photos">
      <div className="row">
        <div className="col-md-4">
          <select onChange={(e) => setLimit(e.target.value)} className="form-control my-2">
            <option value="" selected>Select limit</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>Album Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Url</th>
              <th>Thumbnail Url</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.albumId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.thumbnailUrl}</td>
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
    </div>
  );
};

export default Index;