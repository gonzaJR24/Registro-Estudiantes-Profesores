const form = document.querySelector("form");
const showStudent = document.getElementById("student-container");
const showTeacher = document.getElementById("teacher-container");
const fragment = document.createDocumentFragment();
const templateStudent = document.getElementById("template-student").content;
const templateTeacher = document.getElementById("template-profe").content;

const estudiantes = [];
const profesores = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const [nombre, edad, opcion] = [...data.values()];

  if (opcion === "Estudiante") {
    const estudiante = new Estudiante(nombre, edad);
    estudiante.setEstado;
    estudiantes.push(estudiante);
    Persona.showPersonUI(estudiante, opcion);
  }

  if (opcion === "Profesor") {
    const profesor = new Profesor(nombre, edad);
    profesores.push(profesor);
    Persona.showPersonUI(profesor, opcion);
  }
});

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static showPersonUI(persona, tipo) {
    if (tipo === "Estudiante") {
      fragment.appendChild(persona.addStudent());
      showStudent.appendChild(fragment);
    }

    if (tipo === "Profesor") {
      fragment.appendChild(persona.addTeacher());
      showTeacher.appendChild(fragment);
    }
  }
}

class Estudiante extends Persona {
  addStudent() {
    const clone = templateStudent.cloneNode(true);
    clone.querySelector(".text-primary").textContent = this.nombre;
    clone.querySelector(".lead").textContent = this.edad;

    const pass = clone.querySelector(".btn.btn-success");
    const reject = clone.querySelector(".btn.btn-danger");
    const badge = clone.querySelector(".badge");

    pass.addEventListener("click", () => {
      badge.textContent = "Aprobado";
      badge.classList.add("bg-success");
      badge.classList.remove("bg-danger");
    });

    reject.addEventListener("click", () => {
      badge.textContent = "Reprobado";
      badge.classList.add("bg-danger");
      badge.classList.remove("bg-success");
    });

    return clone;
  }
}

class Profesor extends Persona {
  #profesor = "Profesor";

  addTeacher() {
    const clone = templateTeacher.cloneNode(true);
    clone.querySelector("h5").textContent = this.nombre;
    clone.querySelector(".lead").textContent = this.edad;
    fragment.appendChild(clone);

    return clone;
  }
}

