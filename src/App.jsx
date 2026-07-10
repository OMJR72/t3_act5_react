import { useState } from "react";
import Titulo from "./components/Titulo";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";


function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div>
      <Titulo></Titulo>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        onEliminar={eliminarTarea}
        onCompletar={completarTarea}
      />
    </div>
  );
}

export default App;