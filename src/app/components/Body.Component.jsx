import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormControl, ControlLabel, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import TodoComponent from './Todo.Component';
import './Body.Component.scss';

class BodyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showAddModal: false,
    };
  }

  render() {
    return (
      <div className="body">
        <div className="controls">
          <Button onClick={() => { this.setState({ showAddModal: true }); }}>Add Todo</Button>
        </div>
        <TodoComponent author="Author Name" title="The title" />
        <TodoComponent author="Author Name" title="The title" />
        <TodoComponent author="Author Name" title="The title" />
        <Modal
          show={this.state.showAddModal}
          onHide={() => { this.setState({ showAddModal: false }); }}
        >
          <ModalHeader closeButton>Add Todo Item</ModalHeader>
          <ModalBody>
            <form>
              <FormGroup>
                <ControlLabel>Todo Name</ControlLabel>
                <FormControl
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Author</ControlLabel>
                <br />
                <DropdownButton
                  id="AuthorDropdown"
                  title="Select Author"
                >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3" active>Active Item</MenuItem>
                </DropdownButton>
              </FormGroup>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => { this.setState({ showAddModal: true }); }}>Add Todo</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BodyComponent;
