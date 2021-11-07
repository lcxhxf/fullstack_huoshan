# 部署
- CentOS服务器

<!--  非必须  -->
- 配置ssh（网络安全协议） 
1. 本地打开cmd使用命令 ssh-keygen -t rsa -C '2422635277@qq.com'先生成密钥
2. 如何将C:\Users\86178\.ssh\id_rsa.pub里的内容复制到服务器/root/.ssh/authorized_keys里面
好处：配置好服务器上的公钥，之后每次登录服务器，就不用输入登陆密码

- 