import axios from "axios";

// axios的实例及拦截器配置
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export const saveData = (data) => {
  return axiosInstance.get("/add.php", {
    params: {
      ...data
    }
  });
};

export const getData = (data) => {
  return axiosInstance.get("/chaxun.php", {
    params: {
      ...data
    }
  });
};

export const ylcount = (data) => {
  return axiosInstance.get("/ylcount.php", {
    params: {
      ...data
    }
  });
};
