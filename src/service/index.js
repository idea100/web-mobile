import fetch from 'utils/fetch'

// 获取用户信息
export const fetchUserInfo = () => fetch('GET', 'v2/api/user-info')
