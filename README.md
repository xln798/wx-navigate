### 可以传title和icon属性，代表导航的标题和返回图标，如果不传则不展示返回图标    
### 可以给组件绑定iconClick自定义事件 触发点击返回图标，和bindgetTop 获取 导航组件底部边界到手机状态栏上边界的距离，单位px   
### 因为使用了slot，<navigation>可将您的页面主体放在这里，使得页面的高度是合理的</navigation>   
### 使用举例：`<navigation icon="../../images/back.png" title="demo" bindgetTop="getTop" bindiconClick="iconClick"><view>这里是你的页面</view>
</navigation>`
