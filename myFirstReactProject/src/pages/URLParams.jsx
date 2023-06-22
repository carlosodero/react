import { useNavigate, useParams } from 'react-router-dom';

function URLParams() {
  const navigate = useNavigate();
  const { params } = useParams();
  return (
    <>
      <h3 style={ {color: 'black'} }> The inserted param in URL is {params} </h3>
      <button onClick={ () => navigate('/flags') }>
        Go to page
      </button>
    </>
  );
}

export default URLParams;