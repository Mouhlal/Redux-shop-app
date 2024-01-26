import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteContact } from '../Actions';

const ListerC = () => {
  const data = useSelector((state) => state.contacts);
  const dis = useDispatch();

  const Remove = (id) => {
    dis(DeleteContact(id));
  };

  return (
    <div>
      <table className="table table-hover" style={{margin:"5px",top:"35px",position:"relative"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Nom : </th>
              <th scope="col"> Teléphone : </th>
              <th scope="col"> Action </th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td> {d.id} </td>
                <td scope="row">{d.nom}</td>
                <td scope="row">{d.tel}</td>
                <td scope="row">
                  <button className='btn btn-danger' onClick={() => Remove(d.id)}>
                    <i className="bi bi-x-lg"></i>
                  </button>
{/*                   <span style={{backgroundColor:"#EEE"}}></span>
*/}                <Link to={`/update/${d.id}`}>
    <button className='btn btn-primary'>
                    <i className="bi bi-pencil-square"></i>
                    </button>
</Link>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListerC;
