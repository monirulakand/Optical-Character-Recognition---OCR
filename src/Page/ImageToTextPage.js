import React, {Component, Fragment} from 'react';
import MenuBar from "../Component/MenuBar";
import ImageToText from "../Component/ImageToText";

class ImageToTextPage extends Component {
    render() {
        return (
            <Fragment>
                <MenuBar/>
                <ImageToText/>
            </Fragment>
        );
    }
}

export default ImageToTextPage;