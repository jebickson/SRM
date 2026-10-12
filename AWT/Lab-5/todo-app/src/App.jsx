
import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const slice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        }
    }
});

const store = configureStore({
    reducer: slice.reducer
});

function App() {
    const [task, setTask] = React.useState('');
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>To-Do List</h2>
            <input value={task}
                onChange={e => setTask(e.target.value)} />
            <button onClick={() => {
                if (task.trim()) {
                    dispatch(slice.actions.addTask(task));
                    setTask('');
                }
            }}>Add</button>

            {tasks.map((t, i) => <p key={i}>{t}</p>)}
        </div>
    );
}

export default function Main() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
