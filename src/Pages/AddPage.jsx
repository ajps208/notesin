import React, { useState } from 'react';
import './AddPage.css';
import { uploadNote } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';


function AddPage() {
  const navigateByUrl = useNavigate();

  const navigate = () => {
    navigateByUrl(`/home`);
  };

  const [notes, setNotes] = useState({
    title: "",
    note: "",
    time: "",
  });

  const handleNotes = async (e) => {
    e.preventDefault();
    const { title, note } = notes;

    if (!title || !note) {
      alert("Please fill in all fields");
   
    }else{

    let today = new Date();
    const timestamp = Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(today);

    const updatedNotes = { ...notes, time: timestamp };
    const response = await uploadNote(updatedNotes);

    if (response.status >= 200 && response.status < 300) {
      // Clear the form fields by setting notes state to an empty object

      alert(`${response.data.title} notes upload was successful`);
      setNotes({title:"",note:"",time:""})
      navigate()

    } else {
      alert("Upload error... Please try again later!!!");
    }}
  }
  return (
    <div className="container contact-form">
      <div className="contact-image mt-3">
        <i className="fa-regular fa-pen-to-square fa-5x"></i>
      </div>
      <form>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group ">
              <input
                onChange={(e) => setNotes({ ...notes, title: e.target.value })}
                type="text"
                name="txtName"
                className="form-control"
                placeholder="Subject Name"
                value={notes.title}
                required
              />
            </div>
            {/* <div className="form-group pt-3">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContactSubmit bg-success"
                value="Upload File"
              />
            </div> */}
            <div className='d-flex w-100 justify-content-between flex-wrap'>
              <div className="form-group pt-3">
                <input onClick={(e) => handleNotes(e)} type="reset" name="btnSubmit" className="btnContact bg-danger" value="Submit" />
              </div>
              <div className="form-group pt-3">
                <input type="submit" name="btnSubmit" className="btnContact bg-info" value="Reset" />
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1k">
            <div className="form-group">
              <textarea
                onChange={(e) => setNotes({ ...notes, note: e.target.value })}
                name="txtMsg"
                className="form-control"
                placeholder="Write your notes here...."
                value={notes.note}
                style={{ width: '100%', height: '400px' }}
                required
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPage;
