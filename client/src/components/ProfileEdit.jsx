import React, { useState } from 'react';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    duration: '',
    location: '',
    salary: '',
    deadline: '',
    auxPhoneNumber: '',
    Details: '',
    experience: '',
    language:'',
    address:'',
    workmode:'',
    description:'',
    education:'',
 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profileImage: e.target.files[0]
    }));
  };

  const handleResumeChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      resume: e.target.files[0]
    }));
  };




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    // TODO: Submit form to backend
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Profile</h2>


      <div className="mb-4">
        <label htmlFor="username" className="block font-medium text-gray-700 mb-2">
          UserName:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

{/* 
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          Recruiter Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div> */}

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="johndoe@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div> */}

      <div className="mb-4">
        <label htmlFor="location" className="block font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter Your Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>


      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
          Expertise
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="experience"
          name="experience"
          type="text"
          placeholder="Enter your experience"
          value={formData.experience}
          onChange={handleInputChange}
          required
        />
      </div>

      
      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
          Occupation
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="occupation"
          name="occupation"
          type="text"
          placeholder="Enter your Occupation"
          value={formData.ccupation}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
          Experience in Years
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="experience"
          name="experience"
          type="text"
          placeholder="Enter experience in Years"
          value={formData.experience}
          onChange={handleInputChange}
          required
        />
      </div>



      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
          Language
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="language"
          name="language"
          type="text"
          placeholder="Enter Language"
          value={formData.language}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
      Description
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div> */}

      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="">Education
      
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="education"
          name="education"
          type="text"
          placeholder="Education"
          value={formData.education}
          onChange={handleInputChange}
          required
        />
      </div>



      {/* <div className="mb-4">
        <label htmlFor="duration" className="block font-medium text-gray-700 mb-2">
          Duration:
        </label>
        <input
          type="duration"
          name="duration"
          id="duration"
          className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter Duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div> */}



    
    
{/*    
      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
          Salary
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="salary"
          name="salary"
          type="number"
          placeholder="Enter your salary"
          value={formData.salary}
          onChange={handleInputChange}
          required
        />
      </div> */}

      
{/* 
      <div>
          <label htmlFor="workmode" className="block font-medium pb-10">
            Gender
          </label>
          <select
            name="workmode"
            id="workmode"
            className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2"
            required
          >
            <option value="">Choose a workmode</option>
            <option value="male">Remote</option>
            <option value="female">Part-Time</option>
            <option value="others">Contract</option>
            <option value="everyone">Full-Time</option>
          </select>
        </div> */}




     
      {/* <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="deadline">
          Deadline
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="deadline"
          name="deadline"
          type="text"
          placeholder="Enter your Deadline"
          value={formData.deadline}
          onChange={handleInputChange}
          required
        />
      </div>  */}
{/* 
      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="auxPhoneNumber">
          Company Phone Number
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="auxPhoneNumber"
          name="auxPhoneNumber"
          type="tel"
          placeholder="Enter your auxilary phone number"
          value={formData.auxPhoneNumber}
          onChange={handleInputChange}
          required
        />
      </div> */}
{/* 
      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Details">
          Address
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          name="address"
          rows="3"
          placeholder="Enter your Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        ></textarea>
      </div> */}

     

      <div className="pb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="Details">
          Details
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Details"
          name="Details"
          rows="3"
          placeholder="Enter your Details"
          value={formData.Details}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

     
      

      <div className="pb-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>

     </form>

  );

}

export default ProfileEdit

