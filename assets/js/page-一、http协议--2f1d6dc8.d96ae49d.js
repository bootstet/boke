(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{748:function(t,a,s){"use strict";s.r(a);var r=s(1),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、http协议"}},[t._v("#")]),t._v(" 一、http协议")]),t._v(" "),s("h3",{attrs:{id:"_1、浏览器输入url到页面渲染发生了什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、浏览器输入url到页面渲染发生了什么？"}},[t._v("#")]),t._v(" 1、浏览器输入url到页面渲染发生了什么？")]),t._v(" "),s("h4",{attrs:{id:"（1）解析url："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）解析url："}},[t._v("#")]),t._v(" （1）解析url：")]),t._v(" "),s("p",[t._v("首先会对url进行解析，分析所需要的使用的传输协议和请求的资源的路径。检查url中是否出现的非法字符，如果存在非法字符，则对非法字符安进行转移后在进行下一过程。")]),t._v(" "),s("h4",{attrs:{id:"（2）缓存判断："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）缓存判断："}},[t._v("#")]),t._v(" （2）缓存判断：")]),t._v(" "),s("p",[t._v("浏览器会判断所请求的资源是否在缓存在，如果请求的资源在缓存里并且没有生效，那么久直接使用，否则向服务器发送新的请求。")]),t._v(" "),s("h4",{attrs:{id:"（3）dns解析："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）dns解析："}},[t._v("#")]),t._v(" （3）DNS解析：")]),t._v(" "),s("p",[t._v("下一步首先先需要获取输入的URL中的域名的Ip地址，首先会判断本地是否有该域名的IP地址的缓存，如果有则使用，如果没有则向本地 DNS 服务器发送请求。本地 DNS 服务器也会检查是否存在缓存，如果没有就会先向根域名服务器发送请求，获得负责的顶级域名服务器的地址后，在向顶级域名服务器请求，然后获得负责的权威域名服务器的地址后，在向权威域名服务器发送请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求。")]),t._v(" "),s("h4",{attrs:{id:"（4）获取mac地址："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（4）获取mac地址："}},[t._v("#")]),t._v(" （4）获取MAC地址：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("传输层: 当浏览器得到 IP 地址后，数据传输还需要知道目的的主机 MAC 地址，因为应用层下发数据给传输层，TCP协议会指定源端口号和目的端口号。也就是data会包裹上传输层目标端口和源端口，作用用于在主机上确定一个主机的进程，然后下发给网络层。")])]),t._v(" "),s("li",[s("p",[t._v("网络层： 网络层会将本机的地址作为源地址，获取的ip地址作为目的地址。\n也就是在网络层，上述的数据会在加上 本机的地址目标地址。因为我们的主机都处于不同的网络里，所以我们需要通过ip协议来确定目标主机所存在的网络。可以确定某一个网络，并不能确定在这个网络里那台机器使我们想要的。\n然后将下发给数据链路层。")])]),t._v(" "),s("li",[s("p",[t._v("数据链路层： 数据链路层的发送需要加入通信双方的MAC地址，本机的MAC地址作为源MAC地址，目的MAC地址需要分情况处理。通过将IP地址与本机的子网掩码相比，可以判断是都与请求主机在同一个子网里，如果在同一个子网里，可以使用APR协议获取到目的主机的MAC地址，如果不在一个子网里，那么请求应该转发给网关，由它代为转发，此时同样可以通过ARP协议来获取网关的MAC地址，此时目的主机的MAC地址应该为网关的地址。")]),t._v(" "),s("p",[t._v("至此，一个完整的信息数据就封装OK了，")])]),t._v(" "),s("li",[s("p",[t._v("物理层 将上述封装的data转换为二进制数据，经过网卡调试成高低电压，来进行数据传输")])])]),t._v(" "),s("h4",{attrs:{id:"（5）、tcp三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（5）、tcp三次握手"}},[t._v("#")]),t._v(" （5）、TCP三次握手")]),t._v(" "),s("p",[t._v("客户端需要三次握手来与服务端建立连接，首先客户端想服务端发送一个 SYN 连接请求报文和一个随机序号，服务端接受到请求后向服务端发送一个 SYN ACK 报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个ACK确认报文段，服务端接受到确认后，也进入连接建立状态，此时双方的连接就建立起来了。")]),t._v(" "),s("h4",{attrs:{id:"（6）、https握手："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（6）、https握手："}},[t._v("#")]),t._v(" （6）、https握手：")]),t._v(" "),s("p",[t._v("如果使用的是HTTPS协议，在通信前还存在TLS的一个四次握手的过程。")]),t._v(" "),s("ul",[s("li",[t._v("首先客户端向服务端发送使用的协议的版本号、一个随机数和可以使用的加密方法，比如RSA加密，此时是明文传输。")]),t._v(" "),s("li",[t._v("服务端收到后，确认加密的方法和Hash算法，也向客户端发送一个随机数和自己的数字证书（证书里包含了网站地址，非堆成加密的公钥，以及证书办法的机构等信息）。")]),t._v(" "),s("li",[t._v("客户端收到后，首先检查数字证书是否有效（办法机构是否合法，证书里包含的网址是否和正在访问的一样），如果有效（浏览器会显示一个小锁头），则在生成一个随机数，并使用证书中的公钥对随机数加密，然后发送给服务器端，并且还会提供一个前面所有内容的hash值供服务器端校验。")]),t._v(" "),s("li",[t._v("服务器端接受后，使用自己的私钥对数据解密，同时向客户端发送一个前面所有内容的hash值供客户端检验，和浏览器相同规则生成session key。\n这个时候双方都有了三个随机数，按照之前所约定的加密方法，使用这三个随机数，按照之前所约定的加密方法，使用这三个随机数生成一把密钥，以后双方通信前，就使用这个秘钥对数据进行加密后在传输。")])]),t._v(" "),s("p",[t._v("之后的所有https通信数据将由之前的浏览器生成的session key并利用对称加密算法进行加密。")]),t._v(" "),s("h4",{attrs:{id:"（7）、返回数据："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（7）、返回数据："}},[t._v("#")]),t._v(" （7）、返回数据：")]),t._v(" "),s("p",[t._v("当页面请求发送到服务器端后，服务器会返回一个html文件作为相应，浏览器接受到响应后，开始对html文件进行解析，开始页面的渲染过程。")]),t._v(" "),s("h4",{attrs:{id:"（8）、页面渲染："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（8）、页面渲染："}},[t._v("#")]),t._v(" （8）、页面渲染：")]),t._v(" "),s("p",[t._v("浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了。")]),t._v(" "),s("h4",{attrs:{id:"（9）、tcp四次挥手："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（9）、tcp四次挥手："}},[t._v("#")]),t._v(" （9）、TCP四次挥手：")]),t._v(" "),s("p",[t._v("最后一步是 TCP 断开连接的四次挥手过程。若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。服务端收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明客户端到服务端的连接已经释放，不再接收客户端发的数据了。但是因为 TCP 连接是双向的，所以服务端仍旧可以发送数据给客户端。服务端如果此时还有没发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端便进入 LAST-ACK 状态。客户端收到释放请求后，向服务端发送确认应答，此时客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，就进入 CLOSED 状态。当服务端收到确认应答后，也便进入 CLOSED 状态。")])])}),[],!1,null,null,null);a.default=_.exports}}]);