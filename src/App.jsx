import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Navbar } from "react-bootstrap";

const App = () => {
    const webcamRef = useRef(null);
    const videoConstraints = { width: 540, facingMode: "invironment" };
    const [url, setUrl] = useState(null);
    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    };

    return (
        <>
            <Navbar className="sticky-top nav" bg="light">
                <div className="container">
                    <Navbar.Brand>
                        <a href="/" className="nav-logo">
                            Asad
                        </a>
                    </Navbar.Brand>
                </div>
            </Navbar>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6 offset-md-3">
                        <h3>Webcam Camera</h3>
                        <hr />
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        />
                        <button
                            onClick={capturePhoto}
                            className="btn btn-dark me-2"
                        >
                            Capture
                        </button>
                        <button
                            className="btn btn-dark "
                            onClick={() => setUrl(null)}
                        >
                            Refresh
                        </button>
                        <hr />
                        {url && (
                            <>
                                <div className="my-3">
                                    <img
                                        src={url}
                                        alt="photo"
                                        className="img-fluid mb-3"
                                    />
                                    <a
                                        href={url}
                                        download="captured-image.jpg"
                                        className="btn btn-primary"
                                    >
                                        Download Image
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
