import { APIURL } from "~/constants/apiUrl";
export const useImagenStore = defineStore('ImagenStore', {
    state: () => ({
      contador_reload: 0,

      nombreGrupoImagen: '',
    }),
    getters: {},
    actions: {
      async handleMultipleFileUpload(files: File[]){
        console.log(files)

        // Agrega la lógica para subir los archivos al servidor y establecer los datos en uploadedFiles
        await new Promise( (resolve) => {
          console.log(resolve)
          
           this.enviarArchivosAlBackend(files,this.nombreGrupoImagen)
           this.contador_reload++
          setTimeout(resolve, 2000)
        });
      },

      async enviarArchivosAlBackend(archivos: File[],nombreGrupoImagen:string) {
        const { user, loggedIn, token } = await useJwtAuth()

        const formData = new FormData();
      
        // Agregar cada archivo al objeto de formulario multipart
        archivos.forEach((archivo) => {
          formData.append('file', archivo);
        });
      
          // Agregar la variable "name" al objeto de formulario multipart
          formData.append('name', nombreGrupoImagen);
      
        try {

          // Realizar la solicitud POST al backend utilizando la API Fetch
          const response = await fetch(`${APIURL}/post/files`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token.value}`
            },
            body: formData,
          });
      
          // Aquí puedes manejar la respuesta del backend si es necesario
          const data = await response.json();
          console.log("data",data);
        } catch (error) {
          // Aquí puedes manejar los errores de la solicitud si es necesario
          console.error(error);
        }
      },
      
      async obtenerImagenes(){
        const data:TypesFileGrup =  await (await fetch(`${APIURL}/post/filesAll/all`)).json()
        return data
      },

      async eliminarImagen({id}:{id:number|string}){
        const { user, loggedIn, token } = await useJwtAuth()

        console.log(`${APIURL}/post/files/${id}`)
        console.log('Authorization: '+ `Bearer ${token.value}`)
        

        try {
          const response = await fetch(`${APIURL}/post/files/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token.value}`
            }
          })
          return response.json()
        } catch (error) {
          console.error(error)
        }
      }

    },
  });

  export interface TypesFileGrup {
    aaaaaaaa:                               file[];
    "grupito chido":                        file[];
    grupoImagenes:                          file[];
    grupoImagenes2:                         file[];
    "imagenes de prueba":                   file[];
    "llora y llora que chavez vive cabeza": file[];
    "nombre chido":                         file[];
    "yoquete lo logre":                     file[];
}

export interface file {
    id:        number;
    groupName: string;
    filename:  string;
    patch:     string;
    size:      number;
    secureUrl: string;
    createdAt: Date;
    updatedAt: Date;
}