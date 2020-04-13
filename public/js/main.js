const cookies = document.querySelector('.cookies');

async function letStartCheckCookies() {
  try {
    const send = await axios.post('getCookies');
    if (send.data) {
      cookies.innerHTML = send.data.resp;
    }
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  /* Проверим наличие куков */
  letStartCheckCookies();
});
