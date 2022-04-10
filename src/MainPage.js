import React from 'react';
import 'ace-builds/src-noconflict/ace'
import "ace-builds/src-noconflict/mode-elm";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import AceEditor from "react-ace";
import "./MainPage.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import title from './img/title.svg'
import titleDark from './img/title_dark.svg'

class MianPage extends React.Component {
    state = {
        code: "",
        formattedCode: "",
        darkMode: false,
    }
    format = () => {
        // Your axios request here
        const apiUrl = "/formating"
        const data = { 'code': this.state.code }
        axios({ method: 'post', url: apiUrl, data }).then((response) => {
            this.setState({ formattedCode: response.data.code });
        })
    }
    onChange = (newValue) => {
        this.setState({ code: newValue });
        this.format();
    }
    changeTheme = () => {
        this.setState({ darkMode: !this.state.darkMode })
    }
    cp = () => {
        navigator.clipboard.writeText(this.state.formattedCode);
        alert("Copied");
    }
    render() {
        return (
            <div className={this.state.darkMode ? 'frame_dark' : 'frame'}>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col className='col-md-auto'>
                            <a href="https://github.com/duanxianpi/Elm-Formatter-Web" target="_blank" draggable={false}><img className='title' src={this.state.darkMode ? titleDark : title} draggable={false} alt="" /></a>
                        </Col>
                        <Col className='col-md-auto text-right'>
                            <Button variant="light" className={this.state.darkMode ? "themeBtn_dark" : "themeBtn"} onClick={this.changeTheme}></Button>
                        </Col>
                    </Row>
                    <Row className={(this.state.darkMode ? 'content_dark' : 'content border border_dark') + " justify-content-center align-items-end rounded"}>
                        <Col className='col-md-auto'>
                        <Row> <span className={'text-left ' + (this.state.darkMode ? 'text_dark' : 'text')}>Input:</span></Row>
                            <AceEditor className='editor border border-secondary'
                                mode="elm"
                                theme={this.state.darkMode ? "one_dark" : "xcode"}
                                onChange={this.onChange}
                                name="inputEditor"
                                fontSize={14}
                                height={600}
                                width={565}
                                editorProps={{ $blockScrolling: true }}
                            />
                        </Col>

                        <Col className='col-md-auto'>
                            <Row>
                                <span className={'text-left ' + (this.state.darkMode ? 'text_dark' : 'text')}>Output:</span>
                            </Row>
                            <Col><AceEditor className='editor border border-secondary'
                                mode="elm"
                                theme={this.state.darkMode ? "one_dark" : "xcode"}
                                name="outputEditor"
                                value={this.state.formattedCode}
                                readOnly={true}
                                fontSize={14}
                                height={600}
                                width={565}
                                editorProps={{ $blockScrolling: true }}
                            />
                            </Col>
                        </Col>
                    </Row>
                    <Row><Col className='text-end copy-col'><Button variant="light" className={this.state.darkMode ? "copyBtn_dark" : "copyBtn"} onClick={this.cp}></Button></Col></Row>
                </Container>
            </div>
        )
    }
}

export default MianPage;