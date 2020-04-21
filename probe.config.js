export default {
    // 上报地址
    url: '',
    perf: true, // 上报perf
    err: true, // 上报error
    // 其他参数
    common: {
        // 非必须自定义参数
        task: 'taskname',
        app: 'appname',
        t: new Date().getTime() // 上报时间戳
    },
    // 上报指标字段名映射
    alias: {
        tcp: 'tcp', // tcp耗时
        dns: 'xx', // dns耗时
        timeToFirstRequest: 'net', // network ready 开始发送请求
        timeToFirstByte: 'rd', // ttfb
        firstPaint: 'ht', // 白屏
        firstMeaningfulPaint: 'fs', // 首屏
        domInteractive: 'drt', // dom可交互
        domTime: 'dom', // dom加载时间
        srcTime: 'src', // 资源加载时间
        complete: 'dt', // 完全加载时间
        frontEndTime: 'x', // 前端耗时
        resolutionWidth: 'w', // 分辨率
        resolutionHeight: 'h'
    },
    // 开发环境配置，默认为false
    isDev: true,
    // rum配置
    dev: {
        device: 'S2D0219129002696',
        browser: 'com.baidu.searchbox/com.baidu.searchbox.MainActivity',
        pkg: 'com.baidu.searchbox',
        page: 'http://wz.aa.com/test/index.html'
    }
};