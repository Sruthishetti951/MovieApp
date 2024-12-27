import React, { useContext } from 'react';
import { movieContext } from '../App';


function Table() {
    const value = useContext(movieContext);
    return (
        <div>
            <table className="table table-bordered mt-5 text-center">
                <thead>
                    <tr>
                        <th scope="col">Movie</th>
                        <th scope="col">Actor</th>
                        <th scope="col">Description</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {value.movieList?.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.movieName}</td>
                                <td>{item.actor}</td>
                                <td>{item.description}</td>
                                <td>{item.rating}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() => value.editRecord(index)} disabled={value.selectedIndex !== -1}>Edit</button>
                                    <button className='ms-3 btn btn-primary' onClick={() => value.deleteRecord(index)}
                                        disabled={value.selectedIndex !== -1}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table