import React from 'react';
import { connect } from 'react-redux';
import {Card, CardHeader } from 'material-ui/Card';
import { TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TodoDone from 'material-ui/svg-icons/action/done';
import TodoUnDone from 'material-ui/svg-icons/content/clear';
import RaisedButton from 'material-ui/RaisedButton';


import { completeTodo, uncompleteTodo, deleteTodo } from '../actions';
import EditForm from './EditForm';
import { filterTodo } from '../selectors';


const styles = {
  doneBtn: {
    marginLeft: '10px',
    marginTop: '20px',
  },
  rapih: {
    marginLeft: '55'
  },
  card1: {
    backgroundColor: '#ccc',
  },
  card2: {
    backgroundColor: '#fff',
  },
  square: {
    marginTop: '20px'
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      completed: false,
    };
  }

  handleChange(id, completed) {
    if (completed === false){
      this.props.uncompleteTodo(id)
    } else {
      this.props.completeTodo(id)
    }
  }

  removeTodo(id) {
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) =>
          <div key={index} style={styles.square}>
            <Card style={todo.completed === false ? styles.card1 : styles.card2}>
              <CardHeader
                title={todo.title}
                actAsExpander={false}
                showExpandableButton={false}
              />
              <TableRowColumn>
                <FloatingActionButton
                  mini={true}
                  style={styles.doneBtn}
                  backgroundColor='green'
                  onClick={() => this.handleChange(todo.id, todo.completed)}
                >
                  { todo.completed === false ? <TodoDone /> : <TodoUnDone />}
                </FloatingActionButton>

              </TableRowColumn>
              <TableRowColumn>

                <EditForm todoId={todo.id} todoTitle={todo.title}/>

              </TableRowColumn>
              <TableRowColumn>
                 <RaisedButton
                     label="DELETE"
                   secondary={true}
                   onClick={() => this.removeTodo(todo.id)}
                 />
              </TableRowColumn>


            </Card>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodo(state.todos, state.searchKeyword),
    // searchKeyword: state.searchKeyword,
  }
}

const mapDispatchToProps = dispatch => ({
  completeTodo: todoId => dispatch(completeTodo(todoId)),
  uncompleteTodo: todoId => dispatch(uncompleteTodo(todoId)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
