import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure bootstrap is imported or linked in your project
import './list_car_style.css'; 
const ListCar = () => {
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState({
      model: '',
      year: '',
      mileage: '',
      location: 'Islamabad',
      price: ''
  });
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
      const { name, value } = event.target;
      setCarDetails(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleFileChange = (event) => {
      setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(carDetails);
      console.log(file);
      
      alert('Car listed successfully with image!');
      navigate('/user-auth/vendor/dashboard'); // Redirect to the dashboard or another page
  };

  const [image, setImage] = useState(null);  // State to hold the uploaded image URL

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

    return (
      <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Urban Drive</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/user-auth/vendor/dashboard">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user-auth/vendor/list-cars/list-car">Add Car</a>
                        </li>
                    </ul>
                </div>
            </nav>

          <div className="container">
              <p className="title">LIST A CAR</p>
              <div className="form-area">
                  <div className="form-container">
                      <form onSubmit={handleSubmit}>
                          <div className="form-group">
                              <label className="sub-title" htmlFor="model">Car Make</label>
                              <input name="model" placeholder="Enter the car make & model" className="form-style" type="text" value={carDetails.model} onChange={handleChange} />
                          </div>
                          <div className="form-group">
                              <label className="sub-title" htmlFor="year">Year</label>
                              <input name="year" placeholder="Enter the manufacturing year" className="form-style" type="number" min="1900" max="2100" value={carDetails.year} onChange={handleChange} />
                          </div>
                          <div className="form-group">
                              <label className="sub-title" htmlFor="mileage">Mileage</label>
                              <input name="mileage" placeholder="Enter the mileage" className="form-style" type="number" min="0" value={carDetails.mileage} onChange={handleChange} />
                          </div>
                          <div className="form-group">
                              <label className="sub-title" htmlFor="location">Location</label>
                              <select name="location" className="form-style" value={carDetails.location} onChange={handleChange}>
                                  <option value="Islamabad">Islamabad</option>
                                  <option value="Lahore">Lahore</option>
                                  <option value="Karachi">Karachi</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <label className="sub-title" htmlFor="price">PKR/hr</label>
                              <input name="price" placeholder="Enter the price per hour" className="form-style" type="number" min="0" value={carDetails.price} onChange={handleChange} />
                          </div>
                      </form>
                  </div>
                  <div className="upload-container">
                  {image ? (
                      <img src={image} alt="Uploaded Car" style={{ width: '250px', height: 'auto' }} />
                    ) : (
                      <label htmlFor="file" className="custom-file-upload">
                        <div className="icon">
                        <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path>
                                </svg>
                        </div>
                        <div className="text">
                          <span>Click to upload car image</span>
                        </div>
                        <input id="file" type="file" onChange={handleImageChange} />
                      </label>
                    )}
                      <button className="btn" onClick={handleSubmit}>Complete</button>
                  </div>
              </div>
          </div>
            <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>About Us</h3>
              <p>We are Urban Drive, a car rental company specializing in providing high-quality rental cars for every occasion. With a wide range of vehicles and flexible rental options, we aim to make your travel experience comfortable and convenient.</p>
            </div>
            <div className="col-md-6">
            <h3>Contact Us</h3>
              <div className="main">
                <div className="up">
                <button className="card1">
  <svg viewBox="0 0 30 30" width="30px" height="30px" fillRule="nonzero" className="instagram">
    <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
      <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"/>
    </g>
  </svg>
</button>


  <button className="card2">
    <svg viewBox="0 0 48 48" width="30px" height="30px" className="twitter">
      <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
    </svg>
  </button>
                </div>
                <div className="down">
                <button className="card3">
  <svg viewBox="0 0 30 30" width="30px" height="30px" className="google">
    <path d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"/>
  </svg>
</button>

<button className="card4">
  <svg viewBox="0 0 24 24" width="30px" height="30px" className="whatsapp">
    <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.916 9.916 0 0 0 4.737 1.206h.005c5.46 0 9.908-4.448 9.913-9.913A9.872 9.872 0 0 0 19 4.908h.001ZM11.992 20.15A8.216 8.216 0 0 1 7.797 19l-.3-.18-3.117.818.833-3.041-.196-.314a8.2 8.2 0 0 1-1.258-4.381c0-4.533 3.696-8.23 8.239-8.23a8.2 8.2 0 0 1 5.825 2.413 8.196 8.196 0 0 1 2.41 5.825c-.006 4.55-3.702 8.24-8.24 8.24Zm4.52-6.167c-.247-.124-1.463-.723-1.692-.808-.228-.08-.394-.123-.556.124-.166.246-.641.808-.784.969-.143.166-.29.185-.537.062-.247-.125-1.045-.385-1.99-1.23-.738-.657-1.232-1.47-1.38-1.716-.142-.247-.013-.38.11-.504.11-.11.247-.29.37-.432.126-.143.167-.248.248-.413.082-.167.043-.31-.018-.433-.063-.124-.557-1.345-.765-1.838-.2-.486-.404-.419-.557-.425-.142-.009-.309-.009-.475-.009a.911.911 0 0 0-.661.31c-.228.247-.864.845-.864 2.067 0 1.22.888 2.395 1.013 2.56.122.167 1.742 2.666 4.229 3.74.587.257 1.05.408 1.41.523.595.19 1.13.162 1.558.1.475-.072 1.464-.6 1.673-1.178.205-.58.205-1.075.142-1.18-.061-.104-.227-.165-.475-.29Z"/>
  </svg>
</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    );
};

export default ListCar;
