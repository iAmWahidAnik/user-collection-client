import { useState } from 'react';
import './App.css'
import Swal from 'sweetalert2';

function App() {
  const [sGender, setSGender] = useState('');

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    // console.log('form handling');

    const name = form.name.value;
    const email = form.email.value;
    const gender = sGender;
    const status = form.status.value;

    if (gender === '') {
      return Swal.fire({
        title: 'please select your gender',
        icon: 'warning',
      });
    }

    const user = { name, email, gender, status };

    console.log(user);
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      form.reset();
      if(data.insertedId){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'user added successfully',
        })
      }
    })
  }

  return (
    <div className='w-3/4 mx-auto my-10'>
      <h1 className='text-3xl font-semibold text-center mb-10'>ADD USER</h1>
      <form onSubmit={handleAddUser} action="">
        <div className='flex gap-10'>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Name</span>
              <input type="text" name='name' placeholder="name here" required className="input input-bordered" />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input-group input-group-vertical">
              <span>Email</span>
              <input type="email" name='email' placeholder="email here" required className="input input-bordered" />
            </label>
          </div>
        </div>
        <div className='my-5'>
          <select onChange={(e) => setSGender(e.target.value)} required className="select select-bordered w-full max-w-xs">
            <option disabled selected>Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div>
          <div className="form-control w-1/2">
            <label className="label cursor-pointer">
              <span className="label-text font-semibold">Single</span>
              <input type="radio" name="status" value="Single" className="radio checked:bg-blue-500" checked />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label cursor-pointer">
              <span className="label-text font-semibold">Married</span>
              <input type="radio" name="status" value="Married" className="radio checked:bg-blue-500" checked />
            </label>
          </div>
        </div>
        <input className='btn btn-block my-5' type="submit" value="add user" />
      </form>
    </div>
  )
}

export default App
