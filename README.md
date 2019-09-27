# Node-Vue-Moba

## 初始化项目
1. 在Github上面创建一个新项目并从GitHub上面拉到vscode中  
2. 创建三个文件夹为admin,server,web  
3. 初始化文件

## 设置分类
1. 设置基于Elment-UI的后台管理界面
2. 创建分类
3. 创建分类列表
4. 修改分类名
5. 删除分类

## 设置通用CRUD接口
1. 将路由路径改成一个可变的
2. 在exprss.Ruoter中将mergeParams设置为true，保留req.params父路由器的值。
3. 使用req.params.resource获得路径名，转化为modeles文件中定义的文件名，使用inflection插件
4. 将共用的获得最终路径的方法放入app.ues()中，是用next()，执行下一步router.

## 编辑英雄内容
1. 英雄管理
2. 编辑英雄 (关联,多选,el-select, multiple)
3. 编辑英雄的技能

## 编辑文章管理
1. 创建新建文章跟文章列表
2. 使用富文本编辑器vue2-editor对文章内容进行编辑

## 编辑广告位
1. 在图片上传使用最小宽度，是图片显示比较好看
2. 创建style.css使用统一样式

## 编辑管理员帐号管理
1. 使用bcrype包对密码进行加密
2. 在server中的model中创建AmdinUrse 并在帐号内容中使用selecte保证密码不会被再次加密