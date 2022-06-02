import Loading from './loading';
import PropTypes from 'prop-types';
import Error from './error.js';
import Stocks from './stocks';

const View = ({ loading, error, data, onLoad, 
    RenderStocks, RenderLoading, RenderError, className
}) => (
    <div className={className}>
    { 
        loading ? <RenderLoading />
        : error ? <RenderError error={error} /> : <RenderStocks src={data} load={onLoad}/>
    }
    </div>
);

View.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    src: PropTypes.string,
    RenderStocks: PropTypes.func,
    RenderLoading: PropTypes.func,
    RenderError: PropTypes.func,
}

View.defaultProps = {
    RenderStocks: Stocks,
    RenderLoading: Loading,
    RenderError: Error
}
export default View;