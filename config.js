const CONFIG = {
    // Título principal de la web
    title: "InfoADE",
    subtitle: "Tu portal centralizado de asignaturas, recursos y cuestionarios",
    
    // Lista de asignaturas y sus módulos disponibles
    asignaturas: [
        {
            id: "sibw",
            nombre: "SIBW",
            descripcion: "Sistemas de Información Basados en Web",
            // Configuramos qué botones queremos que aparezcan
            temario: false, 
            tests: "./sibw/tests/index.html" // Ruta al index de tus tests
        },
        {
            id: "rrhh1",
            nombre: "RRHH1",
            descripcion: "Recursos Humanos I",
            // Configuramos qué botones queremos que aparezcan
            temario: false, // Ruta directa al PDF
            tests: "./rrhh1/tests/index.html" // Ruta al index de tus tests
        },
        {
            id: "dsd",
            nombre: "DSD",
            descripcion: "Diseño de Sistemas Distribuidos",
            temario: "./dsd/temario/main.pdf", // Ruta directa al PDF
            tests: false
        }
        // Cuando tengas una nueva asignatura, solo copias y pegas este bloque aquí abajo 👇
    ]
};