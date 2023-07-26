import { reactive} from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // 定义userinfo , 包括用户名和昵称
    const userinfo = reactive({
        username: '',
        nickname: ''
    })
    // 设置用户信息
    function setUserinfo({username, nickname}) {
        userinfo.username = username
        userinfo.nickname = nickname
    }
    // 清空用户信息
    function clearUserinfo() {
        userinfo.username = ''
        userinfo.nickname = ''
    }
    return { userinfo, setUserinfo, clearUserinfo}
}
)
