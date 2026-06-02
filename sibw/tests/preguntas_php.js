var database = database || {};

database.php = [
    { q: "¿Cómo se abre un bloque de código PHP estándar?", options: ["<script php>", "<?php", "<&", "<?PHP"], correct: 1 },
    { q: "¿Cuál es el operador para concatenar cadenas de texto en PHP?", options: ["+", "&", ".", "concat"], correct: 2 },
    { q: "¿Cómo se declaran las variables en PHP?", options: ["var nombre;", "int nombre;", "$nombre;", "@nombre;"], correct: 2 },
    { q: "¿Qué función muestra información sobre el tipo y valor de una variable?", options: ["echo", "print", "var_dump()", "display()"], correct: 2 },
    { q: "¿Cómo se define una constante en PHP?", options: ["const NOMBRE = valor;", "define('NOMBRE', valor);", "Ambas son correctas", "constant NOMBRE = valor;"], correct: 2 },
    { q: "¿Qué superglobal se usa para recoger datos de un formulario enviado por URL?", options: ["$_POST", "$_URL", "$_GET", "$_REQUEST"], correct: 2 },
    { q: "¿Cuál es la diferencia entre '==' y '===' en PHP?", options: ["No hay diferencia", "=== compara también el tipo de dato", "== es para strings", "=== es para números"], correct: 1 },
    { q: "¿Cómo se añade un elemento al final de un array?", options: ["$array[] = valor;", "array_push($array, valor);", "Ambas son correctas", "add($array, valor);"], correct: 2 },
    { q: "¿Qué función se usa para incluir un fichero y detener la ejecución si falla?", options: ["include()", "require()", "import()", "link()"], correct: 1 },
    { q: "¿Qué bucle está diseñado específicamente para recorrer arrays?", options: ["for", "while", "foreach", "do-while"], correct: 2 },
    { q: "¿Qué función cuenta el número de elementos de un array?", options: ["count()", "size()", "length()", "total()"], correct: 0 },
    { q: "¿Cómo se accede a un valor en un array asociativo?", options: ["$a[0]", "$a->valor", "$a['clave']", "$a.clave"], correct: 2 },
    { q: "¿Cuál es la superglobal para manejar cookies?", options: ["$_SESSION", "$_COOKIES", "$_COOKIE", "$_SETCOOKIE"], correct: 2 },
    { q: "¿Qué función debe llamarse antes de usar sesiones?", options: ["session_start()", "session_open()", "start_session()", "begin_session()"], correct: 0 },
    { q: "¿Cómo se borran todas las variables de una sesión?", options: ["session_destroy()", "session_unset()", "session_stop()", "session_close()"], correct: 1 },
    { q: "¿Qué palabra clave se usa para crear una instancia de una clase?", options: ["create", "instance", "new", "class"], correct: 2 },
    { q: "¿Cómo se accede a un método de un objeto en PHP?", options: ["objeto.metodo()", "objeto->metodo()", "objeto::metodo()", "objeto[metodo]"], correct: 1 },
    { q: "¿Qué significa el modificador 'public' en una clase?", options: ["Solo accesible desde la clase", "Accesible desde cualquier lugar", "Solo accesible por herencia", "Es una constante"], correct: 1 },
    { q: "¿Cómo se define un constructor en PHP?", options: ["function constructor()", "function __construct()", "function class()", "function init()"], correct: 1 },
    { q: "¿Qué palabra clave se usa para heredar de otra clase?", options: ["implements", "extends", "parent", "inherit"], correct: 1 },
    { q: "¿Cómo se accede a un método estático o constante de clase?", options: ["$this->", "self::", "parent->", "static->"], correct: 1 },
    { q: "¿Qué función transforma un string en un array dividiéndolo por un carácter?", options: ["implode()", "split()", "explode()", "divide()"], correct: 2 },
    { q: "¿Para qué sirve la superglobal $_SERVER?", options: ["Datos del servidor y entorno", "Datos del usuario", "Variables de sesión", "Base de datos"], correct: 0 },
    { q: "¿Qué función elimina los espacios en blanco al inicio y final de un string?", options: ["strip()", "clean()", "trim()", "cut()"], correct: 2 },
    { q: "¿Cuál es el delimitador para imprimir una variable en Twig?", options: ["{% %}", "{{ }}", "{# #}", "[[ ]]"], correct: 1 },
    { q: "¿Cómo se escribe un comentario en Twig?", options: ["{# comentario #}", "", "// comentario", "{% comment %}"], correct: 0 },
    { q: "¿Qué etiqueta de Twig se usa para estructuras de control (if, for)?", options: ["{{ }}", "[[ ]]", "{% %}", "<% %>"], correct: 2 },
    { q: "¿Cómo se hereda una plantilla en Twig?", options: ["{% include %}", "{% extends %}", "{% parent %}", "{% use %}"], correct: 1 },
    { q: "¿Qué filtro de Twig convierte texto a mayúsculas?", options: ["|upper", "|upper_case", "|strtoupper", "|toUpper"], correct: 0 },
    { q: "¿Para qué sirve el filtro '|default' en Twig?", options: ["Borra la variable", "Pone un valor si la variable no existe", "Cambia el tipo de dato", "Formatea un número"], correct: 1 },
    { q: "¿Dónde se ejecuta el lenguaje PHP?", options: ["En el navegador", "En el servidor", "En la base de datos", "En el cliente"], correct: 1 },
    { q: "¿PHP es sensible a las mayúsculas en los nombres de variables?", options: ["No, nunca", "Solo en Windows", "Sí, siempre", "Solo en constantes"], correct: 2 },
    { q: "¿Qué marca el final de una instrucción en PHP?", options: ["Un punto", "Un punto y coma (;)", "Un salto de línea", "La etiqueta ?>"], correct: 1 },
    { q: "¿Cómo se escribe un comentario de una sola línea al estilo C?", options: ["# comentario", "/* comentario */", "// comentario", ""], correct: 2 },
    { q: "¿Qué diferencia a 'echo' de 'print'?", options: ["echo es una función", "print puede mostrar varias cadenas", "echo puede mostrar una o más cadenas", "No hay ninguna diferencia"], correct: 2 },
    { q: "¿Qué sucede si falla un archivo incluido con 'include()'?", options: ["Error fatal y se para", "Aviso (warning) y continúa", "No pasa nada", "Se reinicia el servidor"], correct: 1 },
    { q: "¿Cuándo se debe usar 'require()' en lugar de 'include()'?", options: ["Para archivos opcionales", "Si el archivo es crítico para la ejecución", "Para incluir imágenes", "Nunca se usa require"], correct: 1 },

    // --- VARIABLES Y TIPOS ---
    { q: "¿Con qué caracteres puede comenzar el nombre de una variable?", options: ["Un número", "Una letra o subrayado", "Cualquier símbolo", "$ seguido de un número"], correct: 1 },
    { q: "¿Qué tipo de tipado tiene PHP?", options: ["Tipado fuerte", "No tiene tipado", "Tipado débil", "Tipado estático"], correct: 2 },
    { q: "¿Qué función se usa para consultar si una variable es de un tipo (ej. string)?", options: ["check_type", "is_type (ej. is_string)", "gettype", "typeof"], correct: 1 },
    { q: "¿Cuál de estos NO es un tipo básico en PHP según el manual?", options: ["int", "boolean", "link", "array"], correct: 2 },
    { q: "¿Qué devuelve 'var_dump()' al pasarle un recurso de archivo?", options: ["El contenido del archivo", "resource(id) of type (stream)", "NULL", "Un array con los datos"], correct: 1 },
    { q: "¿Cuándo se considera que una variable es NULL?", options: ["Si vale 0", "Si se ha eliminado con unset()", "Si es una cadena vacía", "Si vale false"], correct: 1 },
    { q: "¿Qué función comprueba si una variable está definida y no es NULL?", options: ["empty()", "is_null()", "isset()", "defined()"], correct: 2 },

    // --- ÁMBITOS Y CONSTANTES ---
    { q: "¿Cómo se accede a una variable global dentro de una función?", options: ["Usando la palabra 'global'", "No se puede", "Usando $this", "Automáticamente"], correct: 0 },
    { q: "¿Qué array superglobal contiene todas las variables globales?", options: ["$_GLOBAL", "$GLOBALS", "$_ENV", "$_SERVER"], correct: 1 },
    { q: "¿Para qué sirve el ámbito 'static' en una función?", options: ["Para que la variable sea constante", "Para que la variable persista tras la ejecución", "Para compartirla con otras clases", "Para ahorrar memoria"], correct: 1 },
    { q: "¿Qué tipos de datos pueden tener las constantes definidas con 'define'?", options: ["Cualquier tipo", "Solo objetos", "Tipos escalares (int, string, etc.)", "Solo arrays"], correct: 2 },
    { q: "¿Llevan las constantes el símbolo $ delante?", options: ["Sí", "Solo si son globales", "No", "Solo en versiones antiguas"], correct: 2 },

    // --- ARRAYS Y JSON ---
    { q: "¿Cuál es el índice del primer elemento en un array indexado?", options: ["1", "0", "-1", "Cualquiera"], correct: 1 },
    { q: "¿Cómo se define un array asociativo?", options: ["array(valor1, valor2)", "array(clave : valor)", "array(clave => valor)", "array[clave = valor]"], correct: 2 },
    { q: "¿Qué función convierte un array asociativo en una cadena JSON?", options: ["json_decode", "json_encode", "to_json", "serialize"], correct: 1 },
    { q: "¿Qué parámetro de 'json_decode' hace que devuelva un array en lugar de un objeto?", options: ["true", "false", "1", "'array'"], correct: 0 },
    { q: "¿Qué hace la función 'array_shift()'?", options: ["Añade al final", "Elimina el primer elemento", "Invierte el array", "Ordena el array"], correct: 1 },
    { q: "¿Qué función elimina el último elemento de un array?", options: ["array_pop", "array_push", "unset", "array_slice"], correct: 0 },

    // --- FUNCIONES ---
    { q: "¿Cómo se pasan parámetros por referencia en PHP?", options: ["Usando *", "Usando &", "Usando ref", "No se puede"], correct: 1 },
    { q: "¿Dónde deben colocarse los argumentos con valores por defecto?", options: ["Al principio", "En medio", "Al final", "Es indiferente"], correct: 2 },
    { q: "¿Qué instrucción activa la comprobación estricta de tipos?", options: ["strict_types=1", "declare(strict_types=1);", "use strict;", "check_types(true)"], correct: 1 },

    // --- TWIG (CONCEPTOS Y CARGA) ---
    { q: "¿Qué archivo es necesario para cargar las dependencias de Twig?", options: ["twig.php", "autoload.php", "config.xml", "index.html"], correct: 1 },
    { q: "¿Cuál es la función de 'FilesystemLoader' en Twig?", options: ["Cargar la base de datos", "Definir la carpeta de las plantillas", "Guardar archivos en el servidor", "Renderizar el HTML"], correct: 1 },
    { q: "¿Qué método se usa para mostrar una plantilla Twig desde PHP?", options: ["$twig->show()", "$twig->render()", "$twig->display()", "$twig->load()"], correct: 1 },
    { q: "¿Cómo se definen variables dentro de una plantilla Twig?", options: ["{{ var = valor }}", "{% set var = valor %}", "{# set var = valor #}", "[% var = valor %]"], correct: 1 },

    // --- TWIG (SINTAXIS Y FILTROS) ---
    { q: "¿Cómo se accede a un atributo de un objeto o array en Twig?", options: ["persona['nombre']", "persona.nombre", "Ambas son correctas", "persona->nombre"], correct: 2 },
    { q: "¿Cómo termina un bloque 'if' en Twig?", options: ["{% end %}", "{% endif %}", "{% stopif %}", "No necesita cierre"], correct: 1 },
    { q: "¿Qué función de Twig genera una secuencia de números?", options: ["sequence()", "range()", "generate()", "list()"], correct: 1 },
    { q: "¿Qué símbolo se usa para aplicar un filtro en Twig?", options: ["| (tubo)", ": (dos puntos)", "> (flecha)", ". (punto)"], correct: 0 },
    { q: "¿Qué hace el filtro '|capitalize'?", options: ["Todo a mayúsculas", "Todo a minúsculas", "Primera letra en mayúscula", "Cuenta las letras"], correct: 2 },
    { q: "¿Cómo se aplica el filtro 'upper' a un bloque de texto grande?", options: ["{{ upper }}...{{ end }}", "{% filter upper %}...{% endfilter %}", "{% upper %}...{% endupper %}", "|upper(...)"], correct: 1 },
    { q: "¿Qué hace el filtro '|replace'?", options: ["Borra texto", "Reemplaza caracteres o palabras", "Corta el string", "Busca una palabra"], correct: 1 },
    { q: "¿Qué filtro muestra la fecha actual?", options: ["|today", "|now", "|date con el argumento 'now'", "|time"], correct: 2 },

    // --- TWIG (HERENCIA) ---
    { q: "¿Qué etiqueta define una zona sobrescribible en una plantilla base?", options: ["{% extends %}", "{% block %}", "{% zone %}", "{% replace %}"], correct: 1 },
    { q: "¿Pueden las plantillas Twig tener la extensión .html directamente?", options: ["No, debe ser .twig", "Sí, es común usar .html o .html.twig", "Solo en versiones antiguas", "Solo si PHP lo permite"], correct: 1 },

    // --- BASES DE DATOS (MYSQLI) ---
    { q: "¿Qué significa la 'i' en MySQLi?", options: ["Internet", "Internal", "Improved (mejorada)", "Integrated"], correct: 2 },
    { q: "¿Cuál es el orden correcto para acceder a una BD?", options: ["Conectar, Enviar SQL, Procesar, Cerrar", "Enviar SQL, Conectar, Cerrar", "Conectar, Cerrar, Procesar", "Seleccionar BD, Conectar, Enviar"], correct: 0 },
    { q: "¿Qué propiedad comprueba si hubo un error de conexión?", options: ["$conn->error", "$conn->connect_error", "$conn->failed", "$conn->stop"], correct: 1 },
    { q: "¿Qué devuelve '$result->num_rows'?", options: ["El contenido de las filas", "El número de filas afectadas/devueltas", "El ID del último inserto", "Un error"], correct: 1 },
    { q: "¿Qué función obtiene una fila como un array asociativo?", options: ["fetch_row()", "fetch_assoc()", "get_array()", "result_assoc()"], correct: 1 },
    { q: "¿Para qué sirve 'base64_encode()' en la gestión de imágenes?", options: ["Para comprimir la imagen", "Para convertir datos binarios en texto", "Para cambiar el tamaño", "Para guardar en el disco"], correct: 1 },

    // --- SEGURIDAD Y PREPARED STATEMENTS ---
    { q: "¿Qué método es más seguro contra inyecciones SQL?", options: ["query()", "execute() con sentencias preparadas", "post()", "mysqli_all()"], correct: 1 },
    { q: "¿Qué símbolo se usa como marcador de posición en 'prepare()'?", options: [":var", "?", "$", "&"], correct: 1 },
    { q: "¿Qué indica la cadena 'si' en 'bind_param'?", options: ["Que el parámetro es Sí", "Un String y un Integer", "Seguridad e Integridad", "Un Single y un Int"], correct: 1 },
    { q: "¿Qué función se usa tras execute() en un SELECT para obtener los datos?", options: ["fetch()", "get_result()", "bind_result()", "result()"], correct: 1 },

    // --- PDO ---
    { q: "¿Cuál es una ventaja principal de PDO sobre MySQLi?", options: ["Es más rápido", "Es compatible con múltiples bases de datos", "Es más antiguo", "No necesita conexión"], correct: 1 },
    { q: "¿Cómo maneja PDO los errores por defecto?", options: ["Con avisos (warnings)", "Mediante excepciones", "Para la ejecución", "No los muestra"], correct: 1 },

    // --- FORMULARIOS ---
    { q: "¿Qué método de formulario envía los datos visibles en la URL?", options: ["POST", "SEND", "GET", "URL"], correct: 2 },
    { q: "¿Qué atributo de la etiqueta <form> define a qué archivo se envían los datos?", options: ["METHOD", "ACTION", "TARGET", "NAME"], correct: 1 },
    { q: "¿Qué superglobal detecta si el método usado fue POST o GET?", options: ["$_METHOD", "$_SERVER['REQUEST_METHOD']", "$_ENV", "$_REQUEST"], correct: 1 },
    { q: "¿Qué función se usa en PHP para mover un archivo subido a su destino final?", options: ["upload_file()", "move_uploaded_file()", "copy()", "save_file()"], correct: 1 },
    { q: "¿Qué atributo debe tener el <form> para permitir subir archivos?", options: ["method='file'", "enctype='multipart/form-data'", "type='upload'", "enctype='files'"], correct: 1 },
    { q: "¿Cómo se recomienda pasar datos de PHP/Twig a un archivo JS externo?", options: ["Con variables globales", "Usando atributos 'data-xxx' en HTML", "No es posible", "Escribiendo JS con echo"], correct: 1 },

    // KAHOOT
    { q: "¿Qué palabra clave se utiliza para acceder a variables globales desde dentro de una función de PHP?", options: ["global", "static", "extern", "public"], correct: 0 },
    { q: "¿Qué superglobal de PHP coontiene datos enviados a través del método POST de un formulario?", options: ["$_GET", "$_POST", "$_SERVER", "$_SESSION"], correct: 1 },
    { q: "¿Qué función de PHP se utiliza para comprobar si una varibale es NULL?", options: ["is_null()", "empty()", "isset()", "defined()"], correct: 2 },
    { q: "¿Qué función de PHP convierte un array asociativo en una cadena JSON?", options: ["json_decode()", "json_encode()", "array_to_json()", "parse_json()"], correct: 1 },
    { q: "¿Qué directivo de Twig se utiliza para la herencia de plantillas?", options: ["{% include %}", "{% extends %}", "{% block %}", "{% use %}"], correct: 1 },
    { q: "¿Qué método de la conexión MySQLi es más seguro contra la inyección de SQL?", options: ["connect()", "query()", "execute() con sentencias preparadas", "fetch_assoc()"], correct: 2 },
    { q: "¿Qué diferencia clave tiene PDO?", options: ["Sin excepciones", "Solo MySQL", "Sin transacciones", "Multibase"], correct: 3 },
    { q: "¿Cómo accedes a persona.nobre en Twig?", options: ["{{ persona.nombre }}", "{% persona.nombre %}", "${ persona.nombre}", "[[persona.nombre]]"], correct: 0 },
    { q: "¿Qué superglobal combina GET y POST?", options: ["$_REQUEST", "$_ENV", "$_FILES", "$_SERVER"], correct: 0 },
    { q: "¿Qué hace base64_encode en imágenes?", options: ["Comprime PNG", "Corta bytes", "Cifra datos", "Binario a texto"], correct: 3 },
    { q: "¿Qué concatena cadenas en PHP?", options: ["+", ".", "&", "::()"], correct: 1 },
    { q: "¿Qué hace require frente a include?", options: ["Detiene en error", "Ignora errores", "Solo incluye CSS", "No evalúa ficheros"], correct: 0 },
    { q: "Qué lenguaje es el oficial para el desarrollo de Android y es 100% interoperable con Java?", options: ["Kotlin", "Swift", "C#", "Java"], correct: 0 },
    { q: "¿Qué estilo de arquitectura, basado en HTTP y que usa URLs y JSON, es muy popular para construir APIs web?", options: ["SOAP", "REST", "GraphQL", "gRPC"], correct: 1 },
    { q: "¿Qué protocolo de mensajería utiliza XML y está mejor adaptado para servicios web complejos que requieren alta seguridad?", options: ["SOAP", "REST", "WebSocket", "gRPC"], correct: 0 },
    { q: "¿Qué protocolo permite la comunicación bidireccional en tiempo real sobre conexión TCP, ideal apra chats y juegos en línea?",  options: ["Webhooks", "WebSocket", "HTTP", "WebRTC"], correct: 1 },
    { q: "¿Qué lenguaje de programación, creado por Google, está diseñado para ser rápido, simple y eficiente en backend?", options: ["Python", "Java", "Go (Golang)", "Ruby"], correct: 2 },
    { q: "¿Qué función de PHP es crucial para prevenir ataques Cross-Site Scripting (XSS) al mostrar datos de usuario?", options: ["htmlspecialchars()", "strip_tags()", "addslashes()", "urlencode()"], correct: 0 }


];