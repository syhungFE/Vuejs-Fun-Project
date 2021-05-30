module.exports= {
    decServer: {
        proxy: { 
            '/api' : {
                target : 'http://localhost:8081',
                changeOrigin:true
            }
        } 
    }
}