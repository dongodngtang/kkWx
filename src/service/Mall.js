/**
 *作者：lorne
 *时间：2018/12/3
 *功能：
 */
import {get, post} from '../utils/request'
import api from '../config/api'


export function getShopCategorios(resolve,reject) {
  　　get(api.shopCategories,{},resolve,reject)
}

export function createOrder(param,resolve,reject){
  post(api.shop_order,param,resolve,reject)
}
