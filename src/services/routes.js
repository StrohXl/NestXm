const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const endPoints = {
  user: {
    create: apiUrl + "user",
    getAll: (queryParams) => apiUrl + "user" + queryParams,
    getOne: (id) => apiUrl + "user/" + id,
    delete: (id) => apiUrl + "user/" + id,
    update: (id) => apiUrl + "user/" + id,
    // Emails
    getOneEmail: (queryParams) => apiUrl + "user/email/" + queryParams,
    getAllEmail: apiUrl + "user/email",
  },
  confirmUser:{
    confirm: apiUrl + 'confirm-user',
    sendEmail: apiUrl + 'confirm-user/send-email'
  },
  ingredients: {
    create: apiUrl + "ingredients",
    getAll: (queryParams) => apiUrl + "ingredients" + queryParams,
    getOne: (id) => apiUrl + "ingredients/" + id,
    delete: (id) => apiUrl + "ingredients/" + id,
    update: (id) => apiUrl + "ingredients/" + id,
  },
  solicitud: {
    create: apiUrl + "solicitud",
    getAll: (queryParams) => apiUrl + "solicitud" + queryParams,
    getOne: (id) => apiUrl + "solicitud/" + id,
    delete: (id) => apiUrl + "solicitud/" + id,
    update: (id) => apiUrl + "solicitud/" + id,
  },
  solicitudDeCompra: {
    create: apiUrl + "solicitud-de-compra",
    getAll: (queryParams) => apiUrl + "solicitud-de-compra" + queryParams,
    getOne: (id) => apiUrl + "solicitud-de-compra/" + id,
    delete: (id) => apiUrl + "solicitud-de-compra/" + id,
    update: (id) => apiUrl + "solicitud-de-compra/" + id,
  },
  login: apiUrl + "login",
};
