import http from "./HttpCommon";

class CategoryService{

    getCategory(id) {
        return http.get(`/get/${id}`);
      }

      getAll() {
        return http.get(`/`);
      }
    
      create(data) {
        return http.post(`/add`, data);
      }
    
      update(id, data) {
        return http.post(`/update/${id}`, data);
      }
    
      remove(id) {
        return http.get(`/delete/${id}`);
      }

}
export default new CategoryService();