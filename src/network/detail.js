import { request } from "@/network/request";
export function getdetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans; //总销量
    this.sells = shopInfo.cSells; //全部宝贝
    this.score = shopInfo.score;
    this.goodscount = shopInfo.cGoods; //店铺描述
  }
}
