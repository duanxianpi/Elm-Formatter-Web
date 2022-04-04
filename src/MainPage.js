import logo from './logo.svg';
import React from 'react';
import 'ace-builds/src-noconflict/ace'
import "ace-builds/src-noconflict/mode-elm";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import AceEditor from "react-ace";
import "./MainPage.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class MianPage extends React.Component {
    state = {
        code : "",
        formattedCode : ""
    }
    format = () => {
        // Your axios request here
        const apiUrl = "/formating"
        const data = {'code':this.state.code}
        axios({method:'post', url:apiUrl, data}).then((response) => {
            this.setState({formattedCode: response.data.code})
        })
    }
    onChange = (newValue) => {
        this.setState({code : newValue});
    }
    render() {
        return (
            <div className='content'>
            <Container className='align-items-center'>
                <Row className="justify-content-between align-items-center">
                    <Col className='text-center'>
                    <AceEditor className='border border-secondary'
                        mode="elm"
                        theme="xcode"
                        onChange={this.onChange}
                        name="inputEditor"
                        fontSize = {14}
                        editorProps={{ $blockScrolling: true }}
                        />
                    </Col>
                    <Col className='text-center'><Button variant="primary" onClick={this.format}>Code Format</Button></Col>
                    <Col className='text-center'>
                        <AceEditor className='border border-secondary'
                            mode="elm"
                            theme="xcode"
                            name="ootputEditor"
                            value={this.state.formattedCode}
                            readOnly = {true}
                            fontSize = {14}
                            editorProps={{ $blockScrolling: true }}
                        />
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default MianPage;