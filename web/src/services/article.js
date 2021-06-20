import {get, post, put, del} from "../utils/request"

/**
 * 获取文章列表
 * @param group
 */
export function listArticles(group = 1) {
    return get("/api/v1/article", {group});
}

/**
 * 新增文章
 * @param data
 */
export function createArticle(data) {
    return post("/api/v1/article", data);
}

/**
 * 根据id获取文章信息
 * @param id
 */
export function getArticle(id) {
    return get(`/api/v1/article/${id}`);
}

/**
 * 根据id修改文章信息
 * @param id
 * @param data
 */
export function updateArticle(id, data) {
    return put(`/api/v1/article/${id}`, data);
}

/**
 * 根据id删除文章
 * @param id
 */
export function delArticle(id) {
    return del(`/api/v1/article/${id}`);
}
