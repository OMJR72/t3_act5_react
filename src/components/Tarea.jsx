function Tarea({ tarea, onEliminar, onCompletar }) {
  return (
    <li style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
      <span onClick={() => onCompletar(tarea.id)}>
        {tarea.texto}
      </span>
      <button onClick={() => onEliminar(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default Tarea;