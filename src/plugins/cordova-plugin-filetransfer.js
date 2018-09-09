const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        // let ft = new FileTransfer()
        // if (typeof ft != 'undefined') {
          let ftlist = []
          let delftlist = function (ID) { 
            if (ID != 0 && ftlist[ID - 1] != undefined) { 
              ftlist[ID - 1].abort()
              ftlist.splice(ID - 1,1)
            }
          }
        
          Vue.prototype.$vha.filetransfer = {
            errorCode: {
              1: "FILE_NOT_FOUND_ERR",
              2: "INVALID_URL_ERR",
              3: "CONNECTION_ERR",
              4: "ABORT_ERR",
              5: "NOT_MODIFIED_ERR"
            },
            
            abort: function (ftID) {
              delftlist(ftID)
            },
            
            download: function (source, filePath, options, trustAllHosts, notifyCallback) {
              return new Promise(function (resolve, reject) {
                let ft = new FileTransfer()
                
                ftlist.push(ft)
                let ftID = ftlist.length
                
                var uri = (options && options.encodeURI === false) ? source : encodeURI(source)
                if (options && options.timeout !== undefined && options.timeout !== null) {
                  setTimeout(() => {
                    ft.abort()
                  }, options.timeout)
                  options.timeout = null
                }
                
                ft.onprogress = function (progress) {
                  notifyCallback(progress, ftID)
                }
                
                ft.download(
                  uri,
                  filePath,
                  function (entry) {
                    delftlist(ftID)
                    resolve(entry)
                  },
                  function (error) {
                    delftlist(ftID)
                    reject(error)
                  },
                  trustAllHosts, options
                )
              })
            },
            
            upload: function (server, filePath, options, trustAllHosts, notifyCallback) {
              return new Promise(function (resolve, reject) {
                var ft = new FileTransfer()
                
                ftlist.push(ft)
                let ftID = ftlist.length
                
                var uri = (options && options.encodeURI === false) ? server : encodeURI(server)
                if (options && options.timeout !== undefined && options.timeout !== null) {
                  $timeout(function () {
                    ft.abort()
                  }, options.timeout)
                  options.timeout = null
                }
        
                ft.onprogress = function (progress) {
                  notifyCallback(progress, ftID)
                }
        
                ft.upload(
                  filePath,
                  uri,
                  function (entry) {
                    delftlist(ftID)
                    resolve(entry)
                  },
                  function (error) {
                    delftlist(ftID)
                    reject(error)
                  },
                  options, trustAllHosts
                )
              })
            }
          }
        // }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha