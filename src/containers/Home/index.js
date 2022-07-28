import React, {useEffect} from 'react';

const Home = () => {
    useEffect(() => {
        console.log('first')
      }, []);
    return (<div>Hello Home</div>)
}
export default Home;