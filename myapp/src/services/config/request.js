import axios from 'axios';


import constant from './constant';

axios.defaults.baseURL = constant.BASE_URL;

var isError = 0;
const ErrorHandler = async error => {
  console.log('Error While fetch Details:', error)
  if (error.message == 'Network Error') {
      } else if (error.status == 401) {
    //await navigateAndSimpleReset(utils.screenName.session, 0);
  }
  else if (error.message == 'Request failed with status code 400') {
    //alert()
  }
  else if (error.message == 'Request failed with status code 500') {
    
  } else if (error.message == 'timeout of 0ms exceeded') {
    } else if (error.message == 'Request failed with status code 429') {
    
  }
};

const get = slug => {
  return new Promise((resolve, reject) => {
    axios
      .get(slug)
      .then(response => {
        isError = 0;
        resolve(response.data);
      })
      .catch(error => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error);
      });
  });
};

const getWithParams = (slug, data, token = null) => {
  return new Promise((resolve, reject) => {
    axios
      .get(slug + data, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        isError = 0;
        resolve(response.data);
      })
      .catch(error => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doPostWithAuth = (slug, data, token = null) => {
  return new Promise((resolve, reject) => {
    axios
      .post(slug, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        isError = 0;
        resolve(res.data);
      })
      .catch(error => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doPost = (slug, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(slug, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(res => {
        isError = 0;
        resolve(res.data);
      })
      .catch(error => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doPut = (slug, data, token) => {
  return new Promise((resolve, reject) => {
    axios
      .put(slug, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        isError = 0;
        resolve(res.data);
      })
      .catch(error => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};

const doDelete = (slug, token) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(slug, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        isError = 0;
        resolve(res.data);
      })
      .catch(error => {
        isError = isError + 1;
        if (isError <= 1) {
          ErrorHandler(error.response);
        }
        reject(error.response);
      });
  });
};



export {
  get,
  getWithParams,
  doPostWithAuth,
  doPost,
  doPut,
  doDelete,
};