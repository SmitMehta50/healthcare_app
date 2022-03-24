import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <ul>
            <button>
            <Link to="/diabetes">DIABETES</Link>
            </button>
            <button>
            <Link to="/pneumonia">PNEUMONIA</Link>
            </button>
            <button>
            <Link to="/generaldisease">DISEASE PREDICTION</Link>
            </button>
            <button>
            <Link to="/heart">HEART</Link>
            </button>
        </ul>

    </div>
  )
}

export default Home