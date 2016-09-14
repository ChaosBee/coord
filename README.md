# coord
A Javascript library that transform coordinates between WGS84, GCJ02 and BD09

#坐标格式解释

##地球坐标 (WGS84)

GPS硬件的坐标，谷歌地球使用该坐标。手机等设备取出来的也是这个坐标。

##火星坐标 (GCJ-02)也叫国测局坐标系

谷歌、高德、腾讯、搜狗地图坐标

##百度坐标 (BD-09)

百度地图坐标，在火星坐标 (GCJ-02)加偏移完成（据说是为了安全，不太理解...）

# 增加莫卡托转换

mercator.js 为百度地图的莫卡托坐标／屏幕像素坐标与地理坐标转换的方法集合

