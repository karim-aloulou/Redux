import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TodoEdit from 'material-ui/svg-icons/content/create';

import { connect } from 'react-redux';
import { editTodo } from '../actions';


class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.todoId,
      open: false,
      title: this.props.todoTitle
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange(e) {
   const updateState = {};
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
 }

  render() {
    // console.log("ini parsing ID ", this.props.todoId);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="SAVE"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        onClick={() => {
          this.props.editTodo(this.state);
          this.setState({ title: '' });
        }}
      />,
    ];

    return (
      <div className="formEditinh">
        <FloatingActionButton mini={true} onTouchTap={this.handleOpen}>
          <TodoEdit />
        </FloatingActionButton>
        <Dialog
          title="Edit this Todo"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText="Edit Your Todo"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editTodo: todo => dispatch(editTodo(todo)),
});

export default connect(null, mapDispatchToProps)(EditTodo);
