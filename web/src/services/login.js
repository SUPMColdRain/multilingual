import {post} from "../utils/request"

/**
 *  用户登录
 * @param user
 */
export function login(user) {
    return post("api/v1/auth/login", user);
}
