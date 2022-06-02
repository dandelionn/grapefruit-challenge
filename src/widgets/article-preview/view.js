import Loading from './loading';
import PropTypes from 'prop-types';
import Error from './error.js';
import ArticlePreview from './article-preview';

const View = ({ loading, error, data, onLoad, 
    RenderArticlePreview, RenderLoading, RenderError, className
}) => (
    <div className={className}>
    { 
        loading ? <RenderLoading />
        : error ? <RenderError error={error} /> : <RenderArticlePreview src={data}/>
    }
    </div>
);

View.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    src: PropTypes.string,
    RenderArticlePreview: PropTypes.func,
    RenderLoading: PropTypes.func,
    RenderError: PropTypes.func,
}

View.defaultProps = {
    RenderArticlePreview: ArticlePreview,
    RenderLoading: Loading,
    RenderError: Error
}

export default View;