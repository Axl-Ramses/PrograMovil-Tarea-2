import { StyleSheet, Text, View, ScrollView } from 'react-native';


function saludarUsuario(nombre: string) {
  return `¡Hola, ${nombre}! Bienvenido a la app.`;
}


export default function App() {


  const nombreUsuario = 'Ramses';


  const edad = 16;


  const tareas = [
    { id: 1, titulo: 'Estudiar React Native', completada: true },
    { id: 2, titulo: 'Hacer el ejercicio de App.js', completada: true },
    { id: 3, titulo: 'Repasar StyleSheet', completada: true },
    { id: 4, titulo: 'Entregar la tarea', completada: true},
  ];

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>

      
        <Text style={styles.titulo}>Ejercicios Fundamentos</Text>

    
        <View style={styles.seccion}>
          <Text style={styles.subtitulo}>a) Funciones y Variables</Text>

          <Text style={styles.texto}>
            Nombre del usuario: {nombreUsuario}
          </Text>

          <Text style={styles.texto}>
            {saludarUsuario(nombreUsuario)}
          </Text>
        </View>

   
        <View style={styles.seccion}>
          <Text style={styles.subtitulo}>b) Estructuras Condicionales</Text>

          <Text style={styles.texto}>Edad ingresada: {edad} años</Text>

          <Text style={edad >= 18 ? styles.mayor : styles.menor}>
            {edad >= 18 ? '✅ Mayor de edad' : '🔞 Menor de edad'}
          </Text>
        </View>

       
        <View style={styles.seccion}>
          <Text style={styles.subtitulo}>c) Lista de Tareas (bucle .map())</Text>

    
          {tareas.map((tarea) => (
            <View key={tarea.id} style={styles.tarjeta}>
              <Text style={styles.texto}>
                {tarea.completada ? '✅' : '⬜'} {tarea.titulo}
              </Text>
            </View>
          ))}
        </View>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#f0f4f8',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 30,
  },
  seccion: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e63946',
    marginBottom: 10,
  },
  texto: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 6,
  },
  mayor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginTop: 4,
  },
  menor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e76f51',
    marginTop: 4,
  },
  tarjeta: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#e63946',
  },
});
