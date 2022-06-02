import react, { useState } from 'react';
import View from './view';
import { getWeather as loadData } from '../../api/weather';

export default (props) => {
    const [state, setState] = useState({loading: false, error: false});
    
    const load = async (...args) => {
        try {
          setState({ loading: true, error: false });
          const data = await loadData(...args);
          setState({ loading: false, data: data });
        } catch (ex) {
          setState({ loading: false, error: true });
        }
    }

    return (
        <View {...props} {...state} onLoad={load}/>
    ); 
}