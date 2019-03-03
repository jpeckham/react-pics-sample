import React from 'react';

//learning the ref system
class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.imageLoad);
    }

    imageLoad = () => {
        const spans = this.calculateSpans();

        this.setState({spans});
    };

    calculateSpans = () => {
        const height = this.imageRef.current.clientHeight;

        return Math.ceil(height / 10);
    };


    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;