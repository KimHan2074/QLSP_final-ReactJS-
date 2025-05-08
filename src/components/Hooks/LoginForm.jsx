// import React, { useState } from 'react';
// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     return (

//         const { handleSubmit } = this.props;

//         <div className="App">

//             <header className="App-header">

//                 <form onSubmit={handleSubmit}>

//                     <input value={ email } onChange={(e) => setEmail(e.target.value) } />

//                     <input value={ password } onChange={(e) => setPassword(e.target.value) } />

//                     <button type="submit">Submit</button>

//                 </form>
//             </header>
//         </div>
//     )

// }
// export default LoginForm;
import React, { useState } from 'react';

const LoginForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Nếu handleSubmit không được truyền qua props, bạn có thể định nghĩa nó ở đây
  const onSubmit = (e) => {
    e.preventDefault(); // Ngăn form reload trang
    console.log('Email:', email, 'Password:', password);
    // Gọi handleSubmit nếu được truyền qua props
    if (handleSubmit) {
      handleSubmit({ email, password });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
};

export default LoginForm;


