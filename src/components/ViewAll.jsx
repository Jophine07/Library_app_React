import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">SI NO</th>
                                    <th scope="col"> Title</th>
                                    <th scope="col"> Author</th>
                                    <th scope="col">Published Date</th>
                                    <th scope="col">Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@5866259</td>

                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@556488</td>

                                </tr>
                                <tr>
                                    <td scope="row">3</td>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                    <td>4329853</td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll