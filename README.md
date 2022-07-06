# Desafío para Software Engineers

Nombre postulante: Javier I. Hernández

Link a la app en producción: https://country-search-challenge.herokuapp.com/

# Uso

### Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run start
```

### Build the app for production
```bash
npm run build
```

# Tecnologías implementadas
Tecnología    | Razón de implementación
------------- | -----------------------------------------------------------------
Tailwind css       | Al usar tailwind el proceso de estilizar componentes es más rapido, permitiendo enfocarse más en la logica de la aplicación, ya que al trabajar con con css nativo se tendrían que crear clases para cada componente entonces el proceso seria más tardado, otra ventaja de usar tailwind es que los componentes se pueden personalizar tanto como sea necesario, utlizando las clases que brinda el framework.
React rouer dom       | Permite tener un sistema de rutas en la aplicacíon, ya que si en la aplicación se utiliza más de una vista, react router dom permitira agregar nuevas vistas al sistema de rutas, se utilizo con el objetivo de que en un futuro se puedan agragar nuevas vistas a la aplicación.
React tostify        | Brinda al usuario una notificación en el navegador, si al estar en la aplicación hay algún tipo de error, notifique al usuario lo que esta pasando, ya que si no se le notifica, el usuario no tendra noción de lo que esta sucediendo.

# Comentarios sobre el desarrollo
El objetivo al escribir en el input de busqueda de la aplicación era hacer una petición cada vez que el usuario digitara un texto, usando un parametro en la query y que los filtrara por medio del parametro que se le pasara, para que el rendimiento fuera más optimo, pero eso no se logro ya que la query countries no permite filtrar paises por medio del nombre del país, unicamente permite filtrar por un tipo personalizado que solo acepta code, currency y continent.

La solución a dicho problema fue realizar la query sin ningun tipo de filtro una vez se ingresara a la app en la vista Search Countries, la query que se ejecuta trae el arreglo completo de todos los países que se encuntran en la [api graphql](https://countries.trevorblades.com/), y sobre el arreglo que devuelve la query se hace la busqueda de lo que se digite en el input de busqueda, aunque esto no es lo mejor, se podria optimizar editando el backend en la query countries que permita filtrar por nombre de país, para unicamente obtener lo requerido y no tener todo el arreglo de paises al montar la vista, ya que si el arreglo contara con miles de datos, costaria bastante rendimientio.

# Respuesta a la pregunta
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

* No tendria una respuesta concreta a esta pregunta, pero estuve investigando con respecto al tema y una posible solución para mejorar el rendimineto, es que la tabla tenga indices, para la busqueda que debe hacer la actualición, ya que al momento de hacer una actulización se debe recorrer toda la tabla, quizas esto mejoraria el rendimiento, por otra parte no se considera viable tener tanta contidad de datos en una misma tabla, y en tema de tecnologías la bases de datos no relacionales se consideran más rapidas para consultar grandes cantidades de datos.
