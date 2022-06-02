import Loading from './loading';
import PropTypes from 'prop-types';
import Error from './error.js';
import Weather from './weather';

const View = ({ loading, error, data, onLoad,
    RenderWeather, RenderLoading, RenderError, className
}) => (
    <div className={className}>
    { 
        loading ? <RenderLoading />
        : error ? <RenderError error={error} /> : <RenderWeather src={data} load={onLoad}/>
    }
    </div>
);

View.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    src: PropTypes.string,
    RenderWeather: PropTypes.func,
    RenderLoading: PropTypes.func,
    RenderError: PropTypes.func,
}

View.defaultProps = {
    RenderWeather: Weather,
    RenderLoading: Loading,
    RenderError: Error
}


export default View;