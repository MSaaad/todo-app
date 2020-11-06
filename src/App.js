import TaskList from './components/TaskList';
import { Provider, useDispatch, useSelector } from "react-redux"
import { DragDropContext, Droppable } from "react-beautiful-dnd"

import './App.css';

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.todos)

  function ending(res) {
    if (!res.destination) return;
    const items = Array.from(state)
    const [reordered] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, reordered);

    dispatch({
      type: "SET",
      payload: items,
    })
  }

  return (
    <section className="app-bg">
      <div className="container">
        <div
          className="container-box">
          <div>
            <DragDropContext onDragEnd={ending}>
              <Droppable droppableId="Todo">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <TaskList />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
