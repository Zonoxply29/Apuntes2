/*Teoria de Asincronia                      

    JavaScript es un lenguaje singletreat que solo ejecuta una cosa a la vez, simplifica la estructura de codigo porque no tenemos que preocuparnos
    por los problemas de concurrencia y recolector de basura

    //Pregunta de entrevista tecnica
    Concurrencia : La concurrencia es la capacidad de un programa para ejecutar multiples tareas de manera simultanea esto permite que diferentes partes del programa
    se ejecuten de forma independiente lo que puede mejorar el rendimiento y la eficiencia del sistema

    En un entorno concurrente pueden ocurrir varias tareas al mismo tiempo pero no necesariamente de manera simultanea
    La concurrencia se puede lograr mediante la ejecucion intercalada de diferentes hilos de ejecucion.
    Cada hilo puede estar asociado con una tarea especifica y ejecutarse de manera independiente de los demas.

    Concurencia es importante donde hay muliples procesos o tareas que pueden ejecutarse de manera independiente, y podrian beneficiarse de compartir 
    recursos o ejecutarse en paralelo. 
    
    Algunos ejemplos comunes de aplicaciones comunes incluyen:
    Servidores Web
    Sistemas Operativos
    Videojuegos 
    Y aplicaciones de escritorio que realizan multiples operaciones de entrada y salida de manera simultanea.

    Recolector de Basura - Garbage Collector : Es un componente fundamental en muchos lenguajes de Prog que manejan (La gestion automatica de memoria),
    su funcion principal es liberar la memoria que ya no esta en uso por parte del programa lo que ayuda a prevenir fugas de memoria y simplifica el proceso
    de desarollo al eleminiar la necesidad de gestionar manulamente la asignacion de memoria y desasignacion de memoria.

    En el contexto de la CONCURRENCIA el Recoletor de Basura sigue teniendo la funcion de liberar la memoria que ya no se necesita

    Uno de los desafios principales es la posibilidad de que varios hilos esten accediendo y manipulando los mismos objetos en memoria al mismo tiempo.
    Esto puede complicar la tarea del Recolector de Basura ya que necesita garantizar que nigun hilo este utilizando un objeto mientras intenta liberar su memoria.


    Para abardar este problema , los recolectores de basura suelen implementar tecnicas de sincronizacion para coordinar la liberacion de memoria.
    Ademas en entornos concurrentes es importante que el recolector de basura sea eficiente y miniminise el impacto en el rendimiento del programa
    Esto significa que debe diseñarse para trabajar de manera eficiente en sistemas con multiples hilos de ejecucion, evitando bloqueos inecesarios y 
    maximisando la utilizacion de recursos

    RESUMEN -> El recolector de Basura en el contexto de la concurrencia sigue siendo responsable de liberar la memoria no utilizada, pero debe adaptarse para 
    manejar la ejecucion concurrente de multiples hilos


    Lenguajes Multihilo
    Java y C# 
    C++ (Utilizando bibliotecas como: pthreads o std::thread )
    Python(Utilizando bibliotecas como: threading o multiprocessing)
    JavaScript (Mediante Web Brockers)
    Go
    Rust
    Scala
    Kotlin(Desarollar aplicaciones de Android)
    Swift(Desarolloar aplicaciones de IOS)

    Ejemplo practico de Asincronia:
    Todo esto significa que no puedes hacer operaciones largas 

    JS( Trabaja con un modelo asincrono no bloqueante ) (tiene un loop de eventos implemententados de un solo de hilo para operaciones de entrada y salida)
    Gracias a esto Js ES ALTAMENTE concurente apesar de tener un solo Hilo

    TEORIA DEL EVENT LOOP

    El event-loop es un mecanismo fundamental que permite que JS maneje operaciones asincronas, 
    como la ejecucion de callbacks , la resolucion de promises y la gestion de eventos del DOM.

    1.- Callstack: JS es un lenguaje de un solo hilo lo que significa que solo puede ejecutar una tarea a la vez
    el CALLSTACK es una pila de tareas donde se apilan las funciones que se van a ejecutar. Cuando una funcion se llama, 
    se coloca en la cima del callstack y se retira una vez que termina su ejecucion.

    2.- Web APIs/Node APIs : Estas son funciones que proporcionan los navegadores o Node JS , para manejar operaciones como
    solicitudes HTTP , Temporizadores(Set-time-out) y otros eventos. Cuando se ejecuta una operacion asincrona como una llamada 
    Set-time-out la funcion que la maneja se envia a una de estas Apis para su ejecucion y no bloquea el Callstack.

    3.- Callback Queue (Cola de Tareas) : Cuando una operacion asincrona completa su ejecucion(UN temporizador de SET-TIME-OUT) el
    callback asociado con esa operacion se coloca en la callback Queue esperando a ser ejecutado.

    4.- Event-Loop : Es el mecanismo que monitorea tanto al CALLSTACK Y A la Callback Queue (Cola de Tareas). Si el callstack esta
    vacio el Event-loop toma el primer Callback de la callback Queue y lo coloca en el callstack para su ejecucion.
    
    //CONCEPTO DE EVENT LOOP
    
    1.-Procesamiento Single Treath y Multi Treath

      Los hilos son las unidades basicas de ejecucion de cada proceso que realiza nuestra maquina.
    Ejemplo: Los navegadores y como los servidores se comportan de la misma manera JS tienen diferentes mecanismos para manejar la asincronia
    son las funciones callback y en el intensive operation se van registrando las funciones dependiendo el tipo de operacion que se haga
    Acceso a los archivos
    Solicitar datos De una DB
    o solo hacer operaciones (Procesamiento)

    En el frontend : Consumo de un API , Archvios Json , Esperar la respuesta de una operacion matematica conforme estas terminen 
    regresan al trigger callback "notificacion" de esto se trata el event loop

    Call Stack : El callstack va apilando las tareas dependiendo si son sincronas o asincronas podemos ver como c/u se va liberando
    JS trabaja sobre la filosofia LIFO ("Last in - First Out la ultima en entrar es la primera en salir") es la manera en que se van
    ejecutando las operaciones


    2.- Operaciones de CPU y Operaciones de entrada y salida 

    Son las que las mayoria del tiempo van a estar consumiendo la mayoria del proceso por ejemplo los loops si caemos en un procesamiento logico
    y un ejemplo un ciclo infinito.

    Las separaciones de entrada y de salida son aquellas que pasan la mayor parte del tiempo esperando la peticion del recurso que han solicitado
    el recurso puede ser :

    - Enviar un formulario que se procese en un servidor que envie una notificacion de que se a procesado tu informacion
    - Cuando se hace un pago en liena y esperas una notificacion de que se haya echo el pago
    - Cuando haces una peticion a una API y esperas que esa api te envie la informacion en un archivo JSON

    JS se comporta haciendo operaciones de "entrada y de salida"

    3.- Operaciones concurrentes y paralelas

    La concurrencia es cuando DOS O MAS Tareas progresan SIMULTANEAMENTE es decir se estan ejecutando al mismo tiempo y van avanzando simultaneamente 
    podemos tener concurrencia en un entorno Sincrono y Asincrono

    Paralelismo : es Cuando dos o mas tareas se ejecutan al mismo tiempo y existe paralelizmo en Single Treath (Parelilsmo), la gente piensa que solo existe en 
    el Multi-treath , aunque Single-Treath esta mas relacionado a "CONCURRENCIA NO BLOQUEANTE y "ASINCRONO", pero "JS ES SINGLE TREATH Y PODEMOS TENER OPERACIONES
    ASINCRONAS Y SINCRONAS"

    4.- Operaciones bloqueantes y no bloqueantes

    Se refiere a la "fase de espera" cada que se va ejecutando una operacion en nuestro codigo esto se refiere a como toma esa fase de espera.

    Operacion Bloqueante : Es aquella que no va a volver el control a la aplicacion hasta que se haya terminado toda su tarea, eso significa que no va a devolver
    la ejecucion al hilo principal hasta que haya terminado todas sus tareas.

    Operacion No Bloqueante : Significa que las operaciones se ejecutan , devuelven inmediatamente el control al hilo principal no importando si a termiando o no la tarea
    en el momento que una tarea no bloqueante se acabe va a mandar una notificacion entonces ya se avisara al hilo principal y en caso de que se haya terminado devolvera
    los datos solicitados o mensaje conrrespondiente, entonces se podra manejar un codigo de error.


    5.- Operaciones Sincronas y Asincronas

    Se refiere a cuando tendra lugar la respuesta pensando en el presente , pasado y futuro , (Sincrono), se refiere a cuando la respuesta sucede en el presente(Tiempo inmediato)
    Una operacion Sincrona espera el resultado en tiempo presete y sigue otra operacion y asi sucesivamente

    Asincrono : La respuesta sucede en un futuro, se ejecuta pero no sabes cuando va a venir la respuesta , es decir la operacion asincrona no espera 
    los resultados, es por eso que suelta el control y se lo regresa al hilo principal, por eso es que generalmente se suelen asociar estos conceptos de
    
    BLOQUEANTE SINCRONO Y NO BLQUEANTE ASINCRONO

    Incluso puede existir codigo Sincrono Bloqueante y No bloqueante.

    El Codigo Asincrono si va a ser NO BLOQUEANTE.
    
    Vamos a tener dos tipos de codigo Sincrono Bloquante y Asincrono no Bloqueante.

    El set time out es un mecanismo de asincronismo porque va a tardar el tiempo que nosotros le dijimos 
    
    Aunque el set Time out tenga 0 en tiempo , como es una funcion pasa a la fila del callstack

    Los console log tienen preferencia al ejecutarse aunque sea una funcion 

    EN RESUMEN -> JS Usa un modelo asincrono y no bloqueante , con un loop de eventos("Event-loop") implementados en un solo hilo
    (Single-Treat) para operaciones de entrada y salida 

*/


// El console log que imprime primero se ejecuta inmediatamente y el segundo que es el set time out configura un time out pero en lugar de 
//ejecutarse inmediatamente se manda a la cola osea la callback queue

// Este ejercicio es una mezcla de codigo sincrono y asincrono y juntos hacen un ejercicio asincrono

console.log("Primero")
setTimeout(() => {
   console.log("Segundo") 
}, 0);
console.log("Tercero")

